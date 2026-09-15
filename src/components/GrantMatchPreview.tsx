"use client";

import React from "react";
import { ExternalLink, Check, AlertTriangle, ShieldCheck } from "lucide-react";

export default function GrantMatchPreview() {
  const criteria = [
    { label: "Mission alignment", val: 5 },
    { label: "Geography", val: 5 },
    { label: "Organisation type", val: 4 },
    { label: "Funding fit", val: 4 },
  ];

  return (
    <div className="w-full bg-white rounded-lg border border-border-muted shadow-sm overflow-hidden text-foreground">
      {/* Product Window Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F2EFE8] border-b border-border-muted text-xs">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D6D1C4]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#D6D1C4]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#D6D1C4]" />
          </div>
          <span className="font-mono text-[11px] text-ink-faint pl-2">
            grantmatch.capacite.org/match
          </span>
        </div>
        <div className="flex items-center space-x-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
          <ShieldCheck className="w-3 h-3" />
          <span>Product Preview</span>
        </div>
      </div>

      {/* Illustrative Notice Bar */}
      <div className="bg-[#FAF8F3] px-4 py-1.5 border-b border-border-muted/70 text-[10px] text-ink-muted flex items-center justify-between">
        <span className="font-mono uppercase tracking-wide">Illustrative Match Record</span>
        <span className="text-ink-faint">Simulated evaluation for East Africa NGO</span>
      </div>

      {/* Inner Product Card */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Header with Title and Match Score */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-border-muted/60 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-sage text-primary px-2 py-0.5 rounded-xs border border-primary/15">
                Verified Funder
              </span>
              <span className="text-xs text-ink-muted">Global Innovation Fund</span>
            </div>
            <h4 className="text-base font-semibold text-foreground mt-1.5 leading-snug">
              Civil Society Digital Inclusion Grant
            </h4>
            <p className="text-xs text-ink-muted mt-0.5">
              USD $50,000 – $200,000 · Rolling Window
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-accent-sage text-primary border border-primary/20 font-bold text-sm">
              <span>87%</span>
              <span className="text-[10px] uppercase font-semibold tracking-wider">MATCH</span>
            </div>
          </div>
        </div>

        {/* 5-Point Discrete Scale */}
        <div className="space-y-2 bg-[#F9F8F5] p-3 rounded border border-border-muted/60">
          <div className="text-[10px] font-bold uppercase tracking-wider text-ink-faint">
            Criteria Alignment (5-Point Scale)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5 text-xs">
            {criteria.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-ink-muted">{item.label}</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 w-2.5 rounded-2xs ${
                          idx <= item.val ? "bg-primary" : "bg-[#DDD8CD]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground text-[11px] w-5 text-right font-mono">
                    {item.val}/5
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHY THIS MATCHES */}
        <div className="space-y-1">
          <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Check className="w-3.5 h-3.5 text-primary" />
            <span>Why this matches</span>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed bg-[#F4F7F5] border border-primary/10 rounded p-2.5">
            Strong thematic and geographic alignment with the organisation’s programme. Funding size ($50,000 – $200,000) aligns directly with your annual operating budget.
          </p>
        </div>

        {/* WATCH OUT */}
        <div className="space-y-1">
          <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            <span>Watch out</span>
          </div>
          <p className="text-xs text-amber-900/90 leading-relaxed bg-amber-50/70 border border-amber-200/60 rounded p-2.5">
            Applicant must meet the funder’s organisational eligibility requirements (minimum 2 years operating history and audited financial records).
          </p>
        </div>

        {/* Action Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border-muted/60 text-[11px] text-ink-faint">
          <span>Official funder portal verification</span>
          <span className="inline-flex items-center gap-1 font-semibold text-primary">
            <span>OFFICIAL SOURCE</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
