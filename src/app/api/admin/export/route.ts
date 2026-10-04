import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

function escapeCsv(val: any): string {
  if (val == null) return '';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') || 'applications';

  if (type === 'volunteers') {
    const data = await prisma.volunteerSignup.findMany({
      orderBy: { created_at: 'desc' },
    });

    const header = ['ID', 'Date', 'Nom', 'Email', 'Competences', 'Heures_Semaine', 'Motivation', 'Portfolio', 'Statut', 'Notes'];
    const rows = data.map((v) => [
      escapeCsv(v.id),
      escapeCsv(v.created_at.toISOString()),
      escapeCsv(v.full_name),
      escapeCsv(v.email),
      escapeCsv(v.skills),
      escapeCsv(v.hours_per_week),
      escapeCsv(v.motivation),
      escapeCsv(v.linkedin_or_portfolio),
      escapeCsv(v.status),
      escapeCsv(v.notes),
    ]);

    const csvContent = [header.join(','), ...rows.map((r) => r.join(','))].join('\n');
    return new Response(csvContent, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="benevoles_${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  }

  // Default: applications
  const data = await prisma.application.findMany({
    orderBy: { created_at: 'desc' },
  });

  const header = [
    'ID',
    'Date',
    'Association',
    'RNA',
    'Theme',
    'Departement',
    'Ville',
    'Taille_Equipe',
    'Budget_Annuel',
    'Contact_Nom',
    'Contact_Role',
    'Contact_Email',
    'Contact_Tel',
    'Description_Probleme',
    'Outils_Actuels',
    'Urgence',
    'Statut',
    'Notes',
  ];

  const rows = data.map((a) => [
    escapeCsv(a.id),
    escapeCsv(a.created_at.toISOString()),
    escapeCsv(a.association_name),
    escapeCsv(a.rna_number),
    escapeCsv(a.mission_theme),
    escapeCsv(a.location_dept),
    escapeCsv(a.location_city),
    escapeCsv(a.team_size),
    escapeCsv(a.annual_budget),
    escapeCsv(a.contact_name),
    escapeCsv(a.contact_role),
    escapeCsv(a.contact_email),
    escapeCsv(a.contact_phone),
    escapeCsv(a.problem_description),
    escapeCsv(a.tools_used),
    escapeCsv(a.urgency),
    escapeCsv(a.status),
    escapeCsv(a.notes),
  ]);

  const csvContent = [header.join(','), ...rows.map((r) => r.join(','))].join('\n');
  return new Response(csvContent, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="candidatures_${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
