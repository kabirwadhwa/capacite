"use client";

import React, { useState } from "react";
import { AlertCircle, Eye, Sliders, CheckCircle2, Award, Clock, ShieldCheck } from "lucide-react";

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
      title: "Cadrage du problème",
      tag: "Écoute",
      duration: "Jours 1-2",
      description: "Les responsables associatifs identifient une friction opérationnelle réelle et chronophage dans leur quotidien.",
      deliverable: "Document de diagnostic ciblé et engagement de confidentialité",
      icon: AlertCircle,
    },
    {
      id: "diagnose",
      num: "02",
      title: "Diagnostic du workflow",
      tag: "Semaine 1",
      duration: "5 Jours",
      description: "Nous cartographions vos flux de travail, identifions les données manipulées et validons la faisabilité technique.",
      deliverable: "Plan d'architecture sobre et analyse de sécurité RGPD",
      icon: Eye,
    },
    {
      id: "build",
      num: "03",
      title: "Conception légère",
      tag: "Semaine 2",
      duration: "5 Jours",
      description: "Nos bénévoles conçoivent la solution d'automatisation ou d'IA la plus simple, sobre et facile à maintenir.",
      deliverable: "Prototype opérationnel fonctionnel et intégrations",
      icon: Sliders,
    },
    {
      id: "test",
      num: "04",
      title: "Tests en situation réelle",
      tag: "Semaine 3",
      duration: "5 Jours",
      description: "Votre équipe teste l'outil sur ses tâches réelles en conservant 100 % de supervision et validation humaine.",
      deliverable: "Retours d'usage, ajustements et validation de sécurité",
      icon: CheckCircle2,
    },
    {
      id: "train",
      num: "05",
      title: "Formation & Autonomie",
      tag: "Semaine 4",
      duration: "5 Jours",
      description: "Ateliers pratiques, remise du guide utilisateur et formation de votre équipe pour une autonomie totale et durable.",
      deliverable: "Guide complet, documentation libre et suivi à 90 jours",
      icon: Award,
    },
  ];

  const active = steps[selectedStep];
  const IconComponent = active.icon;

  return (
    <div className="w-full space-y-6">
      {/* Step Tabs Row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-[#FFE5F2]/60 p-1.5 rounded-2xl border border-[#FFC6E5]">
        {steps.map((step, idx) => {
          const isSelected = selectedStep === idx;
          return (
            <button
              key={step.id}
              onClick={() => setSelectedStep(idx)}
              className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-[#FF1BA3] text-white shadow-md shadow-[#FF1BA3]/30 scale-[1.02]"
                  : "text-black/70 hover:text-black hover:bg-white/80"
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
      <div className="ceartas-card rounded-2xl p-6 sm:p-8 relative overflow-hidden text-left">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#FF1BA3]/10 to-transparent blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#FFC6E5]/60">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] shadow-sm">
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#FF1BA3]">
                  Phase {active.num} · {active.tag}
                </span>
                <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-black">
                  <Clock className="w-3 h-3 mr-1 text-[#FF1BA3]" />
                  {active.duration}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mt-1">
                {active.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-black/60">Étape {selectedStep + 1} sur 5</span>
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
            <h4 className="text-xs font-black uppercase tracking-wider text-black/50">
              Focus opérationnel
            </h4>
            <p className="text-sm sm:text-base text-black/80 leading-relaxed font-medium">
              {active.description}
            </p>
          </div>

          <div className="md:col-span-5 bg-[#FFE5F2]/50 rounded-xl p-4 border border-[#FFC6E5] space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Livrable clé de la phase
            </span>
            <p className="text-xs font-bold text-black leading-snug">
              {active.deliverable}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
