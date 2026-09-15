"use client";

import React from "react";

interface MetricItem {
  id: string;
  num: string;
  label: string;
  description: string;
  howWeMeasure: string;
}

export default function ImpactDashboard() {
  const metrics: MetricItem[] = [
    {
      id: "hours-returned",
      num: "01",
      label: "Staff hours returned",
      description: "Reclaimed time from repetitive searching, reporting, and sorting workflows.",
      howWeMeasure: "Measured before and after deployment through task-time logging.",
    },
    {
      id: "orgs-supported",
      num: "02",
      label: "Organisations supported",
      description: "Nonprofit partners operating with custom automations or public tools.",
      howWeMeasure: "Count of civil society organisations deploying solutions.",
    },
    {
      id: "longevity-90",
      num: "03",
      label: "Solutions still used after 90 days",
      description: "Sustainable, independent adoption without ongoing external reliance.",
      howWeMeasure: "Verified through quarterly check-ins and independent usage reviews.",
    },
  ];

  return (
    <div className="w-full space-y-10">
      {/* 3 Metrics: Unboxed Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-border-muted divide-y md:divide-y-0 md:divide-x divide-border-muted">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="py-8 md:py-10 px-0 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-baseline justify-between text-[11px] text-ink-faint font-mono uppercase tracking-[0.16em]">
                <span>METRIC {metric.num}</span>
                <span className="text-[10px] tracking-[0.14em] text-primary font-medium">Cohort 01 Metric</span>
              </div>

              {/* Big Calm Placeholder */}
              <div className="mt-4 text-4xl sm:text-5xl font-light text-foreground font-display tracking-tight">
                —
              </div>

              <h4 className="mt-3 text-base font-semibold text-foreground tracking-tight font-display">
                {metric.label}
              </h4>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed font-sans">
                {metric.description}
              </p>
            </div>

            <div className="pt-4 border-t border-border-muted/60 text-[11px] text-ink-faint font-sans">
              <span className="font-mono uppercase tracking-[0.14em] block text-[10px] text-foreground font-medium">
                Verification standard
              </span>
              <p className="mt-1 leading-relaxed text-ink-muted">
                {metric.howWeMeasure}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Honest Transparency Statement */}
      <div className="py-4 px-6 bg-[#FAF9F5] border border-border-muted rounded-xs text-center max-w-2xl mx-auto">
        <p className="text-xs text-ink-muted leading-relaxed font-sans">
          <strong className="text-foreground font-medium">Transparency note:</strong> We’re at inaugural pilot stage. Metrics will be logged and published transparently as projects conclude.
        </p>
      </div>
    </div>
  );
}
