"use client";

import React, { useState } from "react";
import { AlertCircle, Eye, Sliders, CheckCircle2, Award, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

interface Step {
  id: string;
  num: string;
  title: string;
  tag: string;
  duration: string;
  description: string;
  deliverable: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function WorkflowVisualizer() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: "problem",
      num: "01",
      title: "Problem Discovery",
      tag: "Intake",
      duration: "Day 1-2",
      description: "Nonprofit leaders bring a real operational friction point that consumes valuable staff time.",
      deliverable: "Diagnostic scoping document & confidentiality review",
      icon: AlertCircle,
    },
    {
      id: "diagnose",
      num: "02",
      title: "Workflow Diagnosis",
      tag: "Week 1",
      duration: "5 Days",
      description: "We shadow your team, map data flows, identify constraints, and test feasibility.",
      deliverable: "Architecture blueprint & safety assessment",
      icon: Eye,
    },
    {
      id: "build",
      num: "03",
      title: "Lightweight Build",
      tag: "Week 2",
      duration: "5 Days",
      description: "Our volunteer civic-tech engineers assemble the simplest, reliable automation or AI tooling.",
      deliverable: "Working functional prototype & integrations",
      icon: Sliders,
    },
    {
      id: "test",
      num: "04",
      title: "Field Testing",
      tag: "Week 3",
      duration: "5 Days",
      description: "Your team tests the solution with real nonprofit operations while maintaining 100% human oversight.",
      deliverable: "Security audit, performance metrics & refinement",
      icon: CheckCircle2,
    },
    {
      id: "train",
      num: "05",
      title: "Training & Handover",
      tag: "Week 4",
      duration: "5 Days",
      description: "We run interactive workshops, deliver documentation, and ensure you run it independently.",
      deliverable: "Open playbook, staff training & 90-day checkup",
      icon: Award,
    },
  ];

  const active = steps[selectedStep];
  const IconComponent = active.icon;

  return (
    <div className="w-full space-y-6">
      {/* Step Tabs Row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-[#FFE5F2]/50 p-1.5 rounded-2xl border border-[#FFC6E5]">
        {steps.map((step, idx) => {
          const isSelected = selectedStep === idx;
          return (
            <button
              key={step.id}
              onClick={() => setSelectedStep(idx)}
              className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                isSelected
                  ? "bg-[#FF1BA3] text-white shadow-md shadow-[#FF1BA3]/30 scale-[1.02]"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/80"
              }`}
            >
              <span className={`text-[10px] uppercase tracking-wider font-extrabold ${isSelected ? "text-white/80" : "text-[#FF1BA3]"}`}>
                {step.num}
              </span>
              <span className="truncate">{step.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Step Details Card */}
      <div className="ceartas-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#FF1BA3]/10 to-transparent blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#FFC6E5]/50">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] shadow-sm">
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF1BA3]">
                  Phase {active.num} · {active.tag}
                </span>
                <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-foreground">
                  <Clock className="w-3 h-3 mr-1 text-[#FF1BA3]" />
                  {active.duration}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight mt-1">
                {active.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-foreground/60">Stage {selectedStep + 1} of 5</span>
            <div className="flex space-x-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === selectedStep ? "w-6 bg-[#FF1BA3]" : "w-2 bg-[#FFC6E5]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
          <div className="md:col-span-7 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">
              Operational Focus
            </h4>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
              {active.description}
            </p>
          </div>

          <div className="md:col-span-5 bg-[#FFE5F2]/40 rounded-xl p-4 border border-[#FFC6E5]/70 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF1BA3] flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Key Phase Deliverable
            </span>
            <p className="text-xs font-bold text-foreground leading-snug">
              {active.deliverable}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
