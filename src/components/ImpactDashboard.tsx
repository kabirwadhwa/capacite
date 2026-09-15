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
              <div className="flex items-baseline justify-between text-xs text-ink-faint font-mono">
                <span>METRIC {metric.num}</span>
                <span className="uppercase text-[10px] tracking-wider text-primary">In Progress</span>
              </div>

              {/* Big Calm Placeholder */}
              <div className="mt-4 text-4xl sm:text-5xl font-light text-foreground font-serif tracking-tight">
                —
              </div>

              <h4 className="mt-3 text-base font-semibold text-foreground tracking-tight">
                {metric.label}
              </h4>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                {metric.description}
              </p>
            </div>

            <div className="pt-4 border-t border-border-muted/50 text-[11px] text-ink-faint">
              <span className="font-semibold uppercase tracking-wider block text-[10px] text-foreground/70">
                Verification standard:
              </span>
              <p className="mt-1 leading-relaxed">
                {metric.howWeMeasure}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Honest Transparency Statement */}
      <div className="py-4 px-5 bg-accent-light/60 border border-border-muted rounded text-center max-w-2xl mx-auto">
        <p className="text-xs text-ink-muted leading-relaxed">
          <strong className="text-foreground font-semibold">Transparency note:</strong> We’re at pilot stage. Results will be published transparently as projects are completed.
        </p>
      </div>
    </div>
  );
}
