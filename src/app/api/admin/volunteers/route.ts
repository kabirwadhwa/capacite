import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const volunteers = await prisma.volunteerSignup.findMany({
      orderBy: { created_at: 'desc' },
    });
    return Response.json({ volunteers });
  } catch (error) {
    console.error('[Admin Volunteers GET Error]:', error);
    return Response.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, notes } = body;

    if (!id) {
      return Response.json({ error: 'ID requis' }, { status: 400 });
    }

    const updated = await prisma.volunteerSignup.update({
      where: { id },
      data: {
        ...(status ? { status } : {}),
        ...(notes !== undefined ? { notes } : {}),
      },
    });

    return Response.json({ volunteer: updated });
  } catch (error) {
    console.error('[Admin Volunteers PATCH Error]:', error);
    return Response.json({ error: 'Erreur lors de la mise à jour' }, { status: 500 });
  }
}
