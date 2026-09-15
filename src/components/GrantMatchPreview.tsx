"use client";

import React from "react";
import { ExternalLink, Check, AlertCircle, ShieldCheck } from "lucide-react";

export default function GrantMatchPreview() {
  const criteria = [
    { label: "Mission alignment", val: 5 },
    { label: "Geographic scope", val: 5 },
    { label: "Organisation type", val: 4 },
    { label: "Budget & grant size", val: 4 },
  ];

  return (
    <div className="w-full bg-[#141512] text-[#F4F2EB] rounded border border-[#2A2925] shadow-2xl overflow-hidden font-sans">
      {/* Product Window Chrome Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1B1C18] border-b border-[#2A2925]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#353430]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#353430]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#353430]" />
          </div>
          <span className="font-mono text-[11px] text-[#A8A499] font-medium tracking-wider pl-2">
            OPEN TOOLS / 001 · GRANTMATCH AI
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-xs">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>CIVIC EVALUATION ENGINE</span>
        </div>
      </div>

      {/* Illustrative Record Disclaimer Bar */}
      <div className="bg-[#181915] px-4 py-1.5 border-b border-[#2A2925] text-[10px] font-mono uppercase tracking-[0.14em] text-[#8A877E] flex flex-wrap items-center justify-between gap-2">
        <span>Illustrative Match Record · Simulated East Africa NGO</span>
        <span className="text-emerald-400/90 font-medium">Verified Funder Call</span>
      </div>

      {/* Inner Product Content */}
      <div className="p-6 sm:p-7 space-y-5">
        {/* Header Block with Score */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#2A2925] pb-5">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A877E] block">
              Official Funder
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight leading-snug">
              European Commission (DG INTPA)
            </h4>
            <p className="text-xs text-[#A8A499] font-mono pt-0.5">
              Civil Society & Local Authorities Fund · €75,000 – €300,000
            </p>
          </div>

          <div className="flex sm:flex-col items-start sm:items-end">
            <div className="inline-flex items-baseline gap-2 px-3 py-1.5 rounded bg-emerald-950/80 border border-emerald-700/60 text-emerald-300">
              <span className="font-display text-2xl font-bold leading-none tracking-tight">87%</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em]">MATCH</span>
            </div>
          </div>
        </div>

        {/* 5-Point Discrete Scale */}
        <div className="bg-[#1B1C18] p-4 rounded border border-[#2A2925] space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-[#8A877E]">
            <span>Criteria Alignment</span>
            <span>Discrete 5-Point Scale</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
            {criteria.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[#C5C1B4] text-xs">{item.label}</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <div
                        key={idx}
                        className={`h-2 w-3 rounded-xs transition-colors ${
                          idx <= item.val ? "bg-emerald-400" : "bg-[#2E2D28]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-[#A8A499] w-6 text-right font-medium">
                    {item.val}/5
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Structured Evidence Blocks */}
        <div className="grid grid-cols-1 gap-3 pt-1">
          {/* WHY THIS MATCHES */}
          <div className="bg-[#191A16] border border-[#2A2925] p-3.5 rounded space-y-1.5">
            <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-emerald-400 font-semibold">
              <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Why this matches</span>
            </div>
            <p className="text-xs text-[#C5C1B4] leading-relaxed">
              Direct programmatic alignment with grassroots community empowerment and digital education in East Africa. Requested funding ceiling fits comfortably within the applicant’s demonstrated absorptive capacity.
            </p>
          </div>

          {/* WATCH OUT */}
          <div className="bg-[#1D1B16] border border-[#3E3524] p-3.5 rounded space-y-1.5">
            <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-amber-400 font-semibold">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Watch out / Eligibility notice</span>
            </div>
            <p className="text-xs text-[#C5C1B4] leading-relaxed">
              Requires 2+ years official civil society registration and at least one prior audited annual report. Co-funding requirement (10%) must be documented in application budget.
            </p>
          </div>
        </div>

        {/* Action Link to Official Portal */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-[#2A2925] text-xs font-mono">
          <span className="text-[#8A877E] text-[11px]">
            Primary source: international-partnerships.ec.europa.eu
          </span>
          <a
            href="https://web-production-db1798.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider text-[11px] font-semibold"
          >
            <span>Run live evaluation</span>
            <ExternalLink className="w-3 h-3 ml-1.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
