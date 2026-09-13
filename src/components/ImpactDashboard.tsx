"use client";

import React from "react";
import { Clock, Users, RefreshCw, Layers, BookOpen, HeartHandshake } from "lucide-react";

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
      id: "hours-saved",
      label: "Staff hours saved",
      description: "Reclaimed time from repetitive administrative workflows.",
      howWeMeasure: "Calculated by measuring task speed before and after implementation.",
      icon: Clock,
    },
    {
      id: "trained",
      label: "Nonprofit workers trained",
      description: "Team members equipped with digital & automation skills.",
      howWeMeasure: "Count of staff completing the 4th-week training and hand-off.",
      icon: Users,
    },
    {
      id: "longevity",
      label: "Solutions still used after 3m",
      description: "Long-term reliability and ownership of built solutions.",
      howWeMeasure: "Verified through post-pilot 90-day review calls and audits.",
      icon: RefreshCw,
    },
    {
      id: "orgs",
      label: "Organisations supported",
      description: "Associations and civic entities empowered.",
      howWeMeasure: "Count of nonprofits completing a customized 4-week pilot.",
      icon: Layers,
    },
    {
      id: "playbooks",
      label: "Reusable playbooks created",
      description: "Open-source guidance to scale learnings to others.",
      howWeMeasure: "Published case studies and code templates shared publicly.",
      icon: BookOpen,
    },
    {
      id: "beneficiaries",
      label: "Beneficiaries indirectly supported",
      description: "Scale of civic impact enabled by improved operations.",
      howWeMeasure: "Estimated reach of the nonprofit services optimized by the pilot.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.id}
              className="group p-6 bg-accent-light rounded-lg border border-border-muted/50 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-background rounded-md border border-border-muted text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-foreground/45 border border-border-muted px-2 py-0.5 rounded-full bg-background">
                    Under Monitor
                  </span>
                </div>
                <h4 className="mt-4 text-base font-semibold text-foreground">
                  {metric.label}
                </h4>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-border-muted/50">
                <span className="text-[10px] block font-medium uppercase tracking-wider text-foreground/40">
                  Measurement Model
                </span>
                <p className="text-[11px] text-foreground/60 mt-1 leading-snug">
                  {metric.howWeMeasure}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
