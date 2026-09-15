"use client";

import React from "react";
import { Check, AlertCircle, ArrowUpRight } from "lucide-react";

export default function GrantMatchPreview() {
  const criteria = [
    { label: "Mission alignment", score: "5/5", pct: 100 },
    { label: "Geography", score: "5/5", pct: 100 },
    { label: "Organisation type", score: "4/5", pct: 80 },
    { label: "Funding fit", score: "4/5", pct: 80 },
  ];

  return (
    <div className="w-full bg-white border border-[#E4E4DE] rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-6 sm:p-7 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#E4E4DE]">
        <div>
          <div className="text-xs font-medium text-[#666660] mb-1">
            Funder Opportunity
          </div>
          <h4 className="text-lg sm:text-xl font-semibold text-[#181818] tracking-tight">
            European Commission (DG INTPA)
          </h4>
          <p className="text-xs sm:text-sm text-[#666660] mt-0.5">
            Civil Society & Local Authorities Fund · €75,000 – €300,000
          </p>
        </div>

        <div className="self-start sm:self-auto">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-[#EBF2EE] text-[#315C4C]">
            87% Match
          </span>
        </div>
      </div>

      {/* Criteria Breakdown */}
      <div className="space-y-3">
        <div className="text-xs font-medium text-[#666660]">
          Criteria Alignment
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {criteria.map((item) => (
            <div
              key={item.label}
              className="bg-[#F7F7F4] border border-[#E4E4DE] rounded-[10px] p-3 flex items-center justify-between"
            >
              <span className="text-xs font-medium text-[#181818]">
                {item.label}
              </span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-1.5 bg-[#E4E4DE] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#315C4C] rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-[#666660] w-6 text-right">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Explanations */}
      <div className="space-y-3 pt-1">
        {/* Why this matches */}
        <div className="bg-[#FAFBF9] border border-[#E4E4DE] rounded-[10px] p-3.5 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#315C4C]">
            <Check className="w-3.5 h-3.5" />
            <span>Why this matches</span>
          </div>
          <p className="text-xs text-[#666660] leading-relaxed">
            Direct programmatic alignment with grassroots community empowerment and digital education in East Africa. Funding ceiling fits within demonstrated absorptive capacity.
          </p>
        </div>

        {/* Watch out */}
        <div className="bg-[#FFFDF7] border border-[#F3E8D0] rounded-[10px] p-3.5 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B45309]">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Watch out</span>
          </div>
          <p className="text-xs text-[#666660] leading-relaxed">
            Requires 2+ years of official civil society registration and at least one prior audited annual report. 10% co-funding commitment required.
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="pt-2 flex items-center justify-between text-xs text-[#666660]">
        <span>Simulated profile · East Africa community NGO</span>
        <a
          href="https://web-production-db1798.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-[#315C4C] hover:underline"
        >
          <span>Official source</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
