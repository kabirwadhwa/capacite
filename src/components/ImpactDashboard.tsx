"use client";

import React from "react";
import { Clock, Users, RefreshCw, Layers, BookOpen, HeartHandshake, ArrowUpRight, Activity } from "lucide-react";

interface MetricItem {
  id: string;
  stat: string;
  label: string;
  description: string;
  howWeMeasure: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function ImpactDashboard() {
  const metrics: MetricItem[] = [
    {
      id: "hours-saved",
      stat: "10h+",
      label: "Weekly hours saved per staff",
      description: "Reclaimed time from manual data entry, cross-referencing, and repetitive admin.",
      howWeMeasure: "Calculated by measuring operational cycle time before vs after 4-week pilot.",
      icon: Clock,
    },
    {
      id: "trained",
      stat: "100%",
      label: "Autonomous team handoff",
      description: "Nonprofit team members trained to maintain and evolve the solution with zero consultant lock-in.",
      howWeMeasure: "Verified completion of interactive handoff workshops and documentation review.",
      icon: Users,
    },
    {
      id: "longevity",
      stat: "90 Days",
      label: "Post-pilot longevity audit",
      description: "Rigorous follow-up to ensure workflows remain reliable, secure, and actively utilized.",
      howWeMeasure: "Conducted through quarterly review checkpoints and usage health checks.",
      icon: RefreshCw,
    },
    {
      id: "orgs",
      stat: "1-on-1",
      label: "Dedicated civic-tech sprints",
      description: "Focused engagements tackling one discrete friction point at a time with full volunteer support.",
      howWeMeasure: "Monitored across full pilot intake, diagnostic, testing, and deployment cycles.",
      icon: Layers,
    },
    {
      id: "playbooks",
      stat: "Open",
      label: "Reusable public playbooks",
      description: "Published case studies, prompts, and automation architectures for the wider nonprofit ecosystem.",
      howWeMeasure: "Freely distributed under open-source and public-interest licenses.",
      icon: BookOpen,
    },
    {
      id: "beneficiaries",
      stat: "Direct",
      label: "Civil society capacity gain",
      description: "Faster communication, smoother volunteer onboarding, and prompt service delivery for citizens.",
      howWeMeasure: "Measured by beneficiary response times and program delivery acceleration.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.id}
              className="ceartas-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Corner Glow on Hover */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FF1BA3]/10 rounded-full blur-xl group-hover:bg-[#FF1BA3]/20 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-extrabold uppercase tracking-wider text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1BA3] animate-pulse" />
                    <span>Pilot Metric</span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-3xl sm:text-4xl font-black text-foreground tracking-tight group-hover:text-[#FF1BA3] transition-colors">
                    {metric.stat}
                  </div>
                  <h4 className="mt-2 text-base font-bold text-foreground tracking-tight">
                    {metric.label}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                    {metric.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] block font-extrabold uppercase tracking-wider text-[#FF1BA3]">
                    Methodology
                  </span>
                  <p className="text-[11px] text-foreground/60 leading-snug mt-0.5">
                    {metric.howWeMeasure}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-[#FF1BA3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
