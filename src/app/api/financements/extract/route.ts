import { NextRequest } from 'next/server';
import { crawlNgoWebsite } from '@/lib/scraper/website-parser';
import { extractNgoProfileFromWebsite } from '@/lib/scraper/ngo-extractor';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { SSRFError } from '@/lib/security/ssrf';
import { llmService } from '@/lib/llm/provider';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rateCheck = await checkRateLimit(`extract:${ip}`, 10, 3600);

    if (!rateCheck.allowed) {
      return Response.json(
        {
          error: 'Limite de requêtes atteinte (10 analyses par heure). Veuillez patienter.',
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const url = body.url?.trim();

    if (!url) {
      return Response.json({ error: 'L’URL du site de l’association est requise.' }, { status: 400 });
    }

    // Crawl website with strict SSRF protection
    const crawledContent = await crawlNgoWebsite(url, 4);

    // Extract structured profile
    const profile = await extractNgoProfileFromWebsite(crawledContent);

    return Response.json({
      success: true,
      profile,
      pagesCrawled: crawledContent.pagesCrawled,
      isDemoMode: llmService.isDemoMode(),
    });
  } catch (err: unknown) {
    console.error('NGO Extraction error:', err);
    if (err instanceof SSRFError) {
      return Response.json({ error: `Contrôle de sécurité échoué : ${err.message}` }, { status: 400 });
    }
    const message = err instanceof Error ? err.message : 'Impossible d’analyser le site de l’association.';
    return Response.json({ error: message }, { status: 500 });
  }
}
