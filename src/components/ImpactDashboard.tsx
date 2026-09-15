"use client";

import React from "react";

export default function ImpactDashboard() {
  const metrics = [
    { label: "Staff hours returned" },
    { label: "Organisations supported" },
    { label: "Solutions still used after 90 days" },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-white border border-[#E4E4DE] rounded-[14px] p-7 text-center space-y-2 shadow-xs"
          >
            <div className="text-4xl sm:text-5xl font-light text-[#181818]">
              —
            </div>
            <div className="text-sm font-medium text-[#666660]">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-[#666660] max-w-xl mx-auto">
        We’re at pilot stage. Results will be published transparently as projects are completed.
      </p>
    </div>
  );
}
