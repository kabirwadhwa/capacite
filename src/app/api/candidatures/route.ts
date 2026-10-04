import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ApplicationInputSchema } from '@/lib/validation';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { sendApplicationEmails } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rateLimit = await checkRateLimit(`application:${ip}`, 5, 3600);

    if (!rateLimit.allowed) {
      return Response.json(
        {
          error:
            "Trop de demandes envoyées depuis votre connexion. Veuillez patienter une heure.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = ApplicationInputSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues?.[0]?.message || 'Données invalides.';
      return Response.json({ error: firstError }, { status: 400 });
    }

    const data = result.data;

    // Honeypot check
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return Response.json({ error: 'Tentative de spam détectée.' }, { status: 400 });
    }

    // Minimum fill duration check (3 seconds)
    if (data.fillDurationMs != null && data.fillDurationMs < 3000) {
      return Response.json(
        { error: 'Soumission trop rapide (protection anti-robot).' },
        { status: 400 }
      );
    }

    const application = await prisma.application.create({
      data: {
        association_name: data.associationName,
        rna_number: data.rnaNumber || null,
        mission_theme: data.missionTheme,
        location_dept: data.locationDept || null,
        location_city: data.locationCity || null,
        team_size: data.teamSize || null,
        annual_budget: data.annualBudget != null ? Number(data.annualBudget) : null,
        contact_name: data.contactName,
        contact_role: data.contactRole,
        contact_email: data.contactEmail,
        contact_phone: data.contactPhone || null,
        problem_description: data.problemDescription,
        tools_used: data.toolsUsed || null,
        urgency: data.urgency || null,
        status: 'pending',
      },
    });

    // Transactional email notification (Brevo)
    await sendApplicationEmails({
      id: application.id,
      association_name: application.association_name,
      contact_name: application.contact_name,
      contact_email: application.contact_email,
      contact_role: application.contact_role,
      mission_theme: application.mission_theme,
      problem_description: application.problem_description,
    });

    return Response.json(
      {
        success: true,
        id: application.id,
        message: 'Votre demande a bien été enregistrée. Nous vous contacterons sous 3 à 5 jours ouvrés.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API Candidatures Error]:', error);
    return Response.json(
      { error: "Une erreur est survenue lors de l'enregistrement de votre demande." },
      { status: 500 }
    );
  }
}
