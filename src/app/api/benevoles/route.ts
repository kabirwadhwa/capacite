import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { VolunteerInputSchema } from '@/lib/validation';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { sendVolunteerEmails } from '@/lib/email';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rateLimit = await checkRateLimit(`volunteer:${ip}`, 5, 3600);

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
    const result = VolunteerInputSchema.safeParse(body);

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

    const volunteer = await prisma.volunteerSignup.create({
      data: {
        full_name: data.fullName,
        email: data.email,
        skills: JSON.stringify(data.skills),
        hours_per_week: data.hoursPerWeek,
        motivation: data.motivation,
        linkedin_or_portfolio: data.linkedinOrPortfolio || null,
        status: 'pending',
      },
    });

    // Transactional email
    await sendVolunteerEmails({
      id: volunteer.id,
      full_name: volunteer.full_name,
      email: volunteer.email,
      skills: data.skills.join(', '),
      hours_per_week: volunteer.hours_per_week,
      motivation: volunteer.motivation,
    });

    return Response.json(
      {
        success: true,
        id: volunteer.id,
        message: 'Merci pour votre engagement ! Un coordinateur vous contactera très prochainement.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API Bénévoles Error]:', error);
    return Response.json(
      { error: "Une erreur est survenue lors de l'enregistrement." },
      { status: 500 }
    );
  }
}
