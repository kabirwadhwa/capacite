import React from "react";
import Navbar from "@/components/Navbar";
import WorkflowVisualizer from "@/components/WorkflowVisualizer";
import ImpactDashboard from "@/components/ImpactDashboard";
import ApplicationForm from "@/components/ApplicationForm";
import VolunteerForm from "@/components/VolunteerForm";

import {
  MessageSquare,
  Database,
  FileSpreadsheet,
  Globe,
  Calendar,
  Search,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Clock,
  Heart,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* ================= SECTION 1: HERO (CEARTAS STYLE) ================= */}
        <section id="hero" className="relative px-4 sm:px-6 md:px-8 max-w-6xl mx-auto text-center space-y-8 pb-16 sm:pb-24">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-xs font-black tracking-wider uppercase text-foreground shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#FF1BA3] animate-pulse" />
            <span>AI Capacity For Civil Society · Free Pilot</span>
          </div>

          {/* Huge Display Headline */}
          <div className="space-y-2 animate-slide-up">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground uppercase leading-[0.95]">
              Give your mission <br />
              <span className="text-[#FF1BA3] underline decoration-[#FFC6E5] decoration-wavy decoration-2 underline-offset-8">
                more capacity.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium text-foreground/80 leading-relaxed animate-fade-in">
            Capacité helps small and medium-sized nonprofits solve repetitive operational bottlenecks with practical AI — completely free of charge.
          </p>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-foreground/60 leading-relaxed font-medium">
            You bring us a problem. We diagnose the workflow, build a lightweight solution, test it with your team, and teach you how to use it independently.
          </p>

          {/* Ceartas Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-fade-in">
            <a
              href="#application"
              className="ceartas-btn-primary w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm sm:text-base font-black tracking-tight shadow-xl shadow-[#FF1BA3]/30"
            >
              Tell us what slows you down
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="ceartas-btn-secondary w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm sm:text-base font-bold tracking-tight"
            >
              See how it works
            </a>
          </div>

          {/* Trust Statement Row */}
          <div className="pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider text-foreground/50 py-2 px-4 rounded-full bg-[#FFE5F2]/40 border border-[#FFC6E5]/60">
              <span className="flex items-center"><Sparkles className="w-3 h-3 text-[#FF1BA3] mr-1" /> Free pilot programme</span>
              <span>·</span>
              <span>No software sales</span>
              <span>·</span>
              <span>Human oversight</span>
              <span>·</span>
              <span>Built for nonprofits</span>
            </div>
          </div>

          {/* Hero Visual Block */}
          <div className="pt-10">
            <WorkflowVisualizer />
          </div>
        </section>

        {/* ================= SECTION 2: THE PROBLEM ================= */}
        <section id="problem" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Why Capacité exists
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground uppercase leading-tight max-w-4xl mx-auto">
                AI productivity shouldn’t belong only to organisations with large budgets.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground/80 leading-relaxed text-sm sm:text-base font-medium">
              <div className="ceartas-card rounded-2xl p-6 sm:p-8 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-foreground">The Corporation Advantage</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Large organisations increasingly use AI to remove repetitive work, accelerate analysis, and give teams more time for higher-value tasks. They have dedicated IT labs, vendor budgets, and prompt engineers.
                </p>
              </div>

              <div className="ceartas-card rounded-2xl p-6 sm:p-8 space-y-3 border-[#FF1BA3]/40">
                <div className="w-10 h-10 rounded-xl bg-[#FF1BA3] text-white flex items-center justify-center font-bold shadow-md shadow-[#FF1BA3]/30">
                  02
                </div>
                <h3 className="text-lg font-bold text-foreground">The Civil Society Reality</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Many nonprofits face the exact same administrative overload, but lack the technical resources, time, or budget to experiment safely. Capacité exists to close that gap — offering practical AI capacity without consulting fees.
                </p>
              </div>
            </div>

            {/* Contrast Statement */}
            <div className="ceartas-card rounded-2xl p-8 sm:p-12 text-center bg-gradient-to-r from-[#FFFFFF] via-[#FFF5FA] to-[#FFFFFF] border-2 border-[#FFC6E5] shadow-lg shadow-[#FF1BA3]/10">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-foreground/40 line-through decoration-[#FF1BA3]/60 decoration-2">
                Hours lost on paperwork and administration.
              </div>
              <div className="mt-2 text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#FF1BA3] uppercase">
                More time returned to the mission.
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHAT WE CAN HELP WITH ================= */}
        <section id="what-we-solve" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
              Operational Areas
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
              Start with the problem, not the technology.
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 font-medium">
              You do not need an AI strategy. Tell us what repeatedly consumes your team’s time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  1. Beneficiary communications
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Categorise requests, prepare suggested responses and route messages while keeping humans in control.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Triage & Routing</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  2. Internal knowledge
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Make policies, procedures and organisational documents easier for your team to find and use.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Fast Retrieval</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  3. Reporting
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Reduce repetitive work involved in programme, donor and impact reporting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Donor Briefs</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  4. Translation & accessibility
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Help teams communicate across languages and simplify complex administrative information.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Multilingual</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  5. Volunteer operations
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Streamline onboarding, FAQs, scheduling and repetitive volunteer coordination.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Onboarding Flow</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  6. Funding & research workflows
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Help teams find, screen and organise relevant grants, foundations, and public subsidies.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Grant Matching</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <div className="inline-block p-4 rounded-2xl bg-[#FFE5F2]/50 border border-[#FFC6E5]">
              <p className="text-sm font-bold text-foreground">
                Not sure whether AI can help?{" "}
                <a href="#application" className="text-[#FF1BA3] underline decoration-[#FF1BA3] underline-offset-4 hover:text-[#E00087] font-black">
                  That’s exactly what the diagnostic is for.
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS ================= */}
        <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                One problem. Four weeks.
              </h2>
              <p className="text-base sm:text-lg text-foreground/75 font-medium">
                We work side-by-side with your team to deliver immediate value without operational noise.
              </p>
            </div>

            {/* 4-Step Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="ceartas-card rounded-2xl p-7 space-y-4 relative">
                <span className="inline-block text-[10px] font-black tracking-wider uppercase bg-[#FF1BA3] text-white px-2.5 py-1 rounded-md shadow-sm">
                  Week 1
                </span>
                <h3 className="text-lg font-black text-foreground">
                  STEP 01 — Diagnose
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  We spend time with your team understanding the workflow, the users and the real bottleneck.
                </p>
              </div>

              {/* Step 2 */}
              <div className="ceartas-card rounded-2xl p-7 space-y-4 relative">
                <span className="inline-block text-[10px] font-black tracking-wider uppercase bg-[#FF1BA3] text-white px-2.5 py-1 rounded-md shadow-sm">
                  Week 2
                </span>
                <h3 className="text-lg font-black text-foreground">
                  STEP 02 — Build
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  A small volunteer team creates the simplest useful solution using existing AI, automation and open tools wherever possible.
                </p>
              </div>

              {/* Step 3 */}
              <div className="ceartas-card rounded-2xl p-7 space-y-4 relative">
                <span className="inline-block text-[10px] font-black tracking-wider uppercase bg-[#FF1BA3] text-white px-2.5 py-1 rounded-md shadow-sm">
                  Week 3
                </span>
                <h3 className="text-lg font-black text-foreground">
                  STEP 03 — Test
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  Your team tests it against real scenarios. We improve the workflow, measure performance and identify risks.
                </p>
              </div>

              {/* Step 4 */}
              <div className="ceartas-card rounded-2xl p-7 space-y-4 relative">
                <span className="inline-block text-[10px] font-black tracking-wider uppercase bg-[#FF1BA3] text-white px-2.5 py-1 rounded-md shadow-sm">
                  Week 4
                </span>
                <h3 className="text-lg font-black text-foreground">
                  STEP 04 — Train
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  We train your team, document the process and leave you able to run the solution independently.
                </p>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto pt-6 border-t border-[#FFC6E5]">
              <p className="text-base sm:text-xl font-black text-[#FF1BA3] uppercase tracking-tight">
                “We measure success in time returned to your mission — not in how much AI we deploy.”
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: PRINCIPLES ================= */}
        <section id="principles" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
              Our Core Ethos
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Principle 1 */}
            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  01 / Free
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  Free of charge
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  Pilot projects are provided without consulting fees.
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  02 / Human
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  Human oversight
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  AI supports people. Sensitive or consequential decisions stay with humans.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  03 / Practical
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  Practicality first
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  We prefer a useful two-week automation over an impressive six-month prototype.
                </p>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  04 / Responsible
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  Responsible use
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  We consider privacy, security, data sensitivity and organisational risk from the beginning.
                </p>
              </div>
            </div>

            {/* Principle 5 */}
            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  05 / Open
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  Open source
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  Where possible, what we learn becomes reusable guidance for other nonprofits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: IMPACT MODEL ================= */}
        <section id="impact-model" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Transparency Dashboard
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                We want impact to be measurable.
              </h2>
              <p className="text-base sm:text-lg text-foreground/75 font-medium">
                To keep ourselves accountable, we build our pilots around transparent, direct operational metrics.
              </p>
            </div>

            <ImpactDashboard />

            <div className="text-center pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                As our pilot programme grows, we will publish all results transparently.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: PILOT PROGRAMME ================= */}
        <section id="pilot-programme" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
          <div className="ceartas-card rounded-3xl p-8 sm:p-14 border-2 border-[#FFC6E5] space-y-8 relative overflow-hidden">
            {/* Ambient Pink Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#FF1BA3]/15 to-transparent blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Founding Pilot Cohort
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                We’re looking for our first nonprofit partners.
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-medium max-w-2xl">
                We are currently selecting a small number of organisations in France for Capacité’s first pilot projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-foreground">
                  The Ideal Partner Profile
                </h3>
                <ul className="space-y-3.5">
                  <li className="flex items-start text-sm text-foreground/85 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1BA3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>A nonprofit or association with a real operational bottleneck</span>
                  </li>
                  <li className="flex items-start text-sm text-foreground/85 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1BA3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>A small team willing to collaborate with us</span>
                  </li>
                  <li className="flex items-start text-sm text-foreground/85 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1BA3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>A repetitive process consuming meaningful staff time</span>
                  </li>
                  <li className="flex items-start text-sm text-foreground/85 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1BA3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>No technical or AI expertise required</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center space-y-4 bg-[#FFE5F2]/40 p-6 sm:p-8 rounded-2xl border border-[#FFC6E5]">
                <p className="text-sm font-semibold text-foreground/80">
                  Ready to tell us about your workflow bottleneck? Applying is 100% free, confidential, and takes less than 10 minutes.
                </p>
                <a
                  href="#application"
                  className="ceartas-btn-primary inline-flex items-center justify-center px-6 py-3.5 text-sm font-black rounded-xl w-full text-center shadow-md shadow-[#FF1BA3]/30"
                >
                  Apply for a free pilot
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <span className="text-[11px] text-center text-foreground/50 font-bold block">
                  Tell us about one task your team wishes it could spend less time doing.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: APPLICATION FORM ================= */}
        <section id="application" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Zero Risk · Free Pilot
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                Apply for a pilot
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 font-medium max-w-md mx-auto">
                No technical skills required. We diagnose the problem, build the tool, and train your team.
              </p>
            </div>

            <ApplicationForm />
          </div>
        </section>

        {/* ================= SECTION 9: FOR VOLUNTEERS ================= */}
        <section id="volunteers" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                  Join the Network
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase leading-tight">
                  Build technology that gives people time back.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed font-medium">
                We’re also building a community of people in AI, product, operations, design and technology who want to use their skills for public impact.
              </p>

              <div className="pt-4 border-t border-[#FFC6E5]">
                <h4 className="text-xs font-black uppercase tracking-wider text-foreground mb-3">
                  Profiles We Are Looking For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI / automation",
                    "Software development",
                    "Product management",
                    "UX / design",
                    "Project management",
                    "Data",
                    "Nonprofit operations",
                  ].map((profile) => (
                    <span
                      key={profile}
                      className="text-xs font-bold text-foreground/80 bg-[#FFE5F2]/50 border border-[#FFC6E5] px-3 py-1 rounded-full"
                    >
                      {profile}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <VolunteerForm />
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: ABOUT ================= */}
        <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-baseline">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF1BA3] block mb-2">
                  Our Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground uppercase">
                  Technology as capacity.
                </h2>
              </div>
              <div className="md:col-span-2 space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base font-medium">
                <p>
                  Capacité began with a simple idea: organisations working on difficult social problems should have access to the same productivity-enhancing technology as the world’s best-resourced companies.
                </p>
                <p>
                  We are starting small — one nonprofit, one workflow and one measurable improvement at a time. By selecting projects based on real operational bottlenecks rather than complex technological ambitions, we maintain high delivery success and total independence.
                </p>

                {/* Important Notice Banner */}
                <div className="p-4 sm:p-5 ceartas-card rounded-2xl flex items-start space-x-3 border-[#FFC6E5]">
                  <ShieldCheck className="w-5 h-5 text-[#FF1BA3] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/75 leading-relaxed font-semibold">
                    <strong className="text-foreground">Notice:</strong> Capacité is currently a pilot-stage volunteer initiative in France. We are self-funded, independent, and do not sell products, software licenses, or consulting services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: FINAL HIGH-IMPACT CTA ================= */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started Free</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground uppercase leading-[0.95]">
              What could your team do with <br />
              <span className="text-[#FF1BA3]">10 more hours</span> every week?
            </h2>
          </div>

          <p className="text-base sm:text-lg text-foreground/75 max-w-md mx-auto font-medium">
            Tell us what slows you down. We’ll explore whether AI can help.
          </p>

          <div className="pt-4">
            <a
              href="#application"
              className="ceartas-btn-primary inline-flex items-center justify-center px-10 py-5 text-base sm:text-lg font-black rounded-2xl shadow-xl shadow-[#FF1BA3]/40"
            >
              Apply for a pilot
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-[#FFC6E5] py-12 sm:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-tight text-foreground">Capacité</span>
              <span className="w-2 h-2 rounded-full bg-[#FF1BA3]" />
            </div>
            <p className="text-xs text-foreground/60 font-semibold">AI capacity for civil society</p>
            <p className="text-[11px] text-foreground/40 font-bold">France · 2026</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 font-bold text-xs">
            <a href="#how-it-works" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              How it works
            </a>
            <a href="#what-we-solve" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              What we solve
            </a>
            <a href="#pilot-programme" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Pilot programme
            </a>
            <a href="#volunteers" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Volunteer
            </a>
            <a href="#principles" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Principles
            </a>
            <a href="#application" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Contact
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors inline-flex items-center">
              <svg className="w-3.5 h-3.5 mr-1 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#FFC6E5]/40 text-center md:text-left">
          <p className="text-[11px] text-foreground/45 leading-relaxed font-semibold">
            Capacité is currently a pilot-stage volunteer initiative in France. All custom workflows and automations are delivered free of charge and under Open Source or Creative Commons frameworks where appropriate.
          </p>
        </div>
      </footer>
    </>
  );
}
