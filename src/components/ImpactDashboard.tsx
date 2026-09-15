"use client";

import React from "react";
import { Clock, Layers, RefreshCw } from "lucide-react";

interface MetricItem {
  id: string;
  label: string;
  description: string;
  howWeMeasure: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function ImpactDashboard() {
  const metrics: MetricItem[] = [
    {
      id: "hours-returned",
      label: "Staff hours returned",
      description: "Reclaimed time from repetitive searching, reporting, and sorting workflows.",
      howWeMeasure: "Measured before and after deployment through task-time logging.",
      icon: Clock,
    },
    {
      id: "orgs-supported",
      label: "Organisations supported",
      description: "Nonprofit partners operating with dedicated custom automations or public tools.",
      howWeMeasure: "Count of non-governmental organisations actively deploying solutions.",
      icon: Layers,
    },
    {
      id: "longevity-90",
      label: "Solutions still used after 90 days",
      description: "Sustainable, independent adoption without ongoing external reliance.",
      howWeMeasure: "Verified through quarterly check-ins and independent usage reviews.",
      icon: RefreshCw,
    },
  ];

  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.id}
              className="p-6 bg-background rounded-lg border border-border-muted flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-accent-light border border-border-muted flex items-center justify-center text-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-foreground">
                  {metric.label}
                </h4>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-muted/60">
                <span className="text-[10px] block font-semibold uppercase tracking-wider text-foreground/45">
                  How we verify
                </span>
                <p className="text-[11px] text-foreground/60 mt-1 leading-relaxed">
                  {metric.howWeMeasure}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-md bg-background/80 border border-border-muted text-center max-w-2xl mx-auto">
        <p className="text-xs text-foreground/65 leading-relaxed">
          <strong>Transparency note:</strong> We&apos;re at pilot stage. Results will be published transparently as projects are completed.
        </p>
      </div>
    </div>
  );
}
