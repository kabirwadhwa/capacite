"use client";

import React from "react";
import { ShieldCheck, ExternalLink, Check, Info } from "lucide-react";

export default function GrantMatchPreview() {
  const criteria = [
    { label: "Mission alignment", score: "5/5", pct: 100 },
    { label: "Geography", score: "5/5", pct: 100 },
    { label: "Organisation type", score: "4/5", pct: 80 },
    { label: "Funding fit", score: "4/5", pct: 80 },
  ];

  return (
    <div className="w-full rounded-xl border border-border-muted bg-background p-6 shadow-sm">
      {/* Mock Browser Header */}
      <div className="flex items-center justify-between border-b border-border-muted pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-border-muted" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-muted" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-muted" />
          <span className="text-[11px] font-mono text-foreground/45 pl-2">grantmatch.capacite.org/match</span>
        </div>
        <div className="flex items-center space-x-1.5 text-[11px] font-medium text-primary">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Official Source Verified</span>
        </div>
      </div>

      {/* Mock Opportunity Card */}
      <div className="mt-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">
              Funding Opportunity
            </span>
            <h4 className="text-base font-semibold text-foreground leading-snug mt-0.5">
              Civil Society Digital Inclusion Grant
            </h4>
            <p className="text-xs text-foreground/60 mt-0.5">
              Global Innovation Initiative · $50,000 – $200,000
            </p>
          </div>

          <div className="flex flex-col items-end">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-primary/10 text-primary border border-primary/20">
              87% MATCH
            </span>
            <span className="text-[10px] text-foreground/45 mt-1 font-medium">
              High Eligibility
            </span>
          </div>
        </div>

        {/* 5-factor breakdown bars */}
        <div className="space-y-2.5 pt-2">
          {criteria.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-foreground/75">{item.label}</span>
                <span className="text-foreground/90 font-semibold">{item.score}</span>
              </div>
              <div className="h-1.5 w-full bg-accent-light rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Qualitative Explanation Callout */}
        <div className="rounded-lg bg-accent-light/80 border border-border-muted/80 p-3.5 space-y-1.5">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-foreground/80">
            <Check className="w-3.5 h-3.5 text-primary" />
            <span>Why this matches</span>
          </div>
          <p className="text-xs text-foreground/70 leading-relaxed italic">
            “Strong thematic and geographic alignment. Funding size aligns directly with your annual operating budget.”
          </p>
        </div>

        {/* Action footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border-muted/60 text-[11px] text-foreground/50">
          <span>Official funder portal direct link</span>
          <span className="inline-flex items-center font-medium text-primary hover:underline">
            View original call <ExternalLink className="w-3 h-3 ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
}
