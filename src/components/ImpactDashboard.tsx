"use client";

import React from "react";
import { Clock, Users, RefreshCw, Layers, BookOpen, HeartHandshake, ArrowUpRight } from "lucide-react";

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
      label: "Heures économisées par semaine",
      description: "Temps libéré des saisies manuelles répétitives, du tri de courriels et des rapprochements fastidieux.",
      howWeMeasure: "Mesuré par comparaison du temps de cycle opérationnel avant et après l'accompagnement de 4 semaines.",
      icon: Clock,
    },
    {
      id: "trained",
      stat: "100%",
      label: "Équipes autonomes et formées",
      description: "Membres de l'association formés à l'utilisation et la maintenance sans dépendance externe.",
      howWeMeasure: "Vérifié lors des ateliers pratiques interactifs et de la remise des guides d'utilisation.",
      icon: Users,
    },
    {
      id: "longevity",
      stat: "90 Jours",
      label: "Suivi post-déploiement",
      description: "Point de contrôle régulier pour s'assurer de la stabilité, de la sécurité et de l'adoption réelle de l'outil.",
      howWeMeasure: "Organisé via un point d'étape trimestriel et des tests de robustesse avec l'équipe.",
      icon: RefreshCw,
    },
    {
      id: "orgs",
      stat: "1 par 1",
      label: "Accompagnements dédiés",
      description: "Des missions ciblées résolvant un problème unique et mesurable avec un binôme bénévole dédié.",
      howWeMeasure: "Suivi rigoureux sur les 4 phases de cadrage, diagnostic, conception et déploiement.",
      icon: Layers,
    },
    {
      id: "playbooks",
      stat: "Open",
      label: "Ressources et retours d'expérience",
      description: "Publication de cas pratiques, prompts et architectures sobres pour l'ensemble du monde associatif.",
      howWeMeasure: "Distribué librement sous licence libre au bénéfice de l'intérêt général.",
      icon: BookOpen,
    },
    {
      id: "beneficiaries",
      stat: "Direct",
      label: "Impact citoyen renforcé",
      description: "Réponses plus rapides aux usagers, meilleure gestion des bénévoles et énergie décuplée pour le terrain.",
      howWeMeasure: "Mesuré par la réduction des délais de traitement des dossiers et des réponses aux bénéficiaires.",
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
              className="ceartas-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden text-left"
            >
              {/* Subtle Corner Glow on Hover */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FF1BA3]/10 rounded-full blur-xl group-hover:bg-[#FF1BA3]/25 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-wider text-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1BA3] animate-pulse" />
                    <span>Indicateur Clé</span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-3xl sm:text-4xl font-black text-black tracking-tight group-hover:text-[#FF1BA3] transition-colors">
                    {metric.stat}
                  </div>
                  <h4 className="mt-2 text-base font-bold text-black tracking-tight">
                    {metric.label}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-black/70 leading-relaxed font-medium">
                    {metric.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] block font-black uppercase tracking-wider text-[#FF1BA3]">
                    Méthodologie
                  </span>
                  <p className="text-[11px] text-black/60 leading-snug mt-0.5">
                    {metric.howWeMeasure}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[#FF1BA3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
