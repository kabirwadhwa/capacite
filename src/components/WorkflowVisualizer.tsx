"use client";

import React, { useState } from "react";
import { AlertCircle, Eye, Sliders, CheckCircle2, Award } from "lucide-react";

interface Step {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function WorkflowVisualizer() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps: Step[] = [
    {
      id: "problem",
      num: "01",
      title: "Problem",
      description: "An operational bottleneck slowing down your staff.",
      icon: AlertCircle,
    },
    {
      id: "diagnose",
      num: "02",
      title: "Diagnose",
      description: "We map the workflow and identify automation potential.",
      icon: Eye,
    },
    {
      id: "build",
      num: "03",
      title: "Build",
      description: "We build a lightweight solution in two weeks.",
      icon: Sliders,
    },
    {
      id: "test",
      num: "04",
      title: "Test",
      description: "Your team tests the tool on real administrative tasks.",
      icon: CheckCircle2,
    },
    {
      id: "train",
      num: "05",
      title: "Train",
      description: "We train your team to maintain and run it independently.",
      icon: Award,
    },
  ];

  return (
    <div className="w-full py-8">
      {/* Visual Workflow Layout */}
      <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-2">
        {/* Connecting Background Line (Desktop) */}
        <div className="hidden md:block absolute top-[30px] left-12 right-12 h-[1px] bg-border-muted z-0" />

        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          const isHovered = activeStep === idx;
          return (
            <div
              key={step.id}
              className="relative flex-1 z-10 flex flex-col items-center text-center p-4 rounded-xl border border-border-muted/30 md:border-transparent bg-background md:bg-transparent transition-all duration-300"
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step Icon & Number Indicator */}
              <div
                className={`relative flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-300 ${
                  isHovered
                    ? "border-primary bg-accent-light text-primary scale-105"
                    : "border-border-muted bg-background text-foreground/60"
                }`}
              >
                <IconComponent className="w-6 h-6" />
                <span className="absolute -bottom-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold bg-foreground text-background border border-background">
                  {step.num}
                </span>
              </div>

              {/* Step Info */}
              <h4
                className={`mt-4 text-base font-semibold transition-colors duration-200 ${
                  isHovered ? "text-primary" : "text-foreground"
                }`}
              >
                {step.title}
              </h4>
              <p className="mt-2 text-xs text-foreground/60 max-w-[180px] leading-relaxed">
                {step.description}
              </p>

              {/* Connecting Arrow/Dot for Mobile (vertical) */}
              {idx < steps.length - 1 && (
                <div className="md:hidden flex items-center justify-center my-2 text-border-muted">
                  <div className="w-[1px] h-6 bg-border-muted" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
