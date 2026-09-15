import React from "react";
import Navbar from "@/components/Navbar";
import GrantMatchPreview from "@/components/GrantMatchPreview";
import ImpactDashboard from "@/components/ImpactDashboard";
import ApplicationForm from "@/components/ApplicationForm";
import VolunteerForm from "@/components/VolunteerForm";

import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Search,
  FileSpreadsheet,
  Database,
  MessageSquare,
  Globe,
  Calendar,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28">
        {/* ================= 01 HERO ================= */}
        <section id="hero" className="px-6 sm:px-8 lg:px-12 pt-8 pb-16 md:pt-14 md:pb-24 max-w-7xl mx-auto">
          {/* Top Label */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-xs bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-medium">
              Capacité · European Civic Technology Initiative
            </span>
          </div>

          {/* Monumental Headline */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display font-medium tracking-[-0.04em] text-foreground leading-[0.93] max-w-5xl">
              Give your mission <br />
              <span className="font-serif italic font-normal text-primary">more capacity.</span>
            </h1>

            {/* Asymmetric 12-Column Sub-Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4 items-end">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-lg sm:text-xl font-sans text-foreground/85 leading-relaxed">
                  Free AI tools and hands-on automation engineered specifically for civil society organisations.
                </p>
                <p className="text-sm sm:text-base font-sans text-ink-muted leading-relaxed">
                  We help NGOs spend less time searching, reporting, sorting and administering — and more time delivering on their core mission.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#application"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-[0.14em] text-background bg-primary hover:bg-primary-hover rounded-xs transition-colors duration-150 shadow-sm"
                >
                  <span>Tell us what slows you down</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#open-tools"
                  className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-mono uppercase tracking-[0.14em] text-foreground bg-accent-light hover:bg-[#E3DEC9] border border-border-muted rounded-xs transition-colors duration-150"
                >
                  Explore open tools ↓
                </a>
              </div>
            </div>
          </div>

          {/* Hero Baseline Ticker */}
          <div className="mt-16 pt-6 border-t border-border-muted flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span>Free to use</span>
            <span className="hidden sm:inline text-border-muted">/</span>
            <span>Open where possible</span>
            <span className="hidden sm:inline text-border-muted">/</span>
            <span>Human oversight</span>
            <span className="hidden sm:inline text-border-muted">/</span>
            <span>Zero vendor lock-in</span>
          </div>
        </section>

        {/* ================= 02 THE PROBLEM ================= */}
        <section id="the-problem" className="border-t border-border-muted py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Asymmetric Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary font-medium block">
                  01 / The Bottlenecks
                </span>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal tracking-[-0.03em] text-foreground leading-[1.05]">
                  Start with the problem, not the technology.
                </h2>
              </div>
              <div className="lg:col-span-3 text-sm text-ink-muted font-sans leading-relaxed">
                Nonprofits face the same administrative complexities as global institutions, but lack the technical budget to experiment safely. We start with the operational bottleneck.
              </div>
            </div>

            {/* Editorial Table of Contents / Index Layout */}
            <div className="border-t border-border-muted divide-y divide-border-muted">
              {[
                {
                  num: "01",
                  title: "Funding & research workflows",
                  desc: "Screening hundreds of public calls, verifying eligibility rules, and tracking deadlines without weeks of manual search.",
                },
                {
                  num: "02",
                  title: "Reporting & donor documentation",
                  desc: "Turning fragmented field indicators, quarterly updates, and narrative logs into donor-ready reporting without repetitive copying.",
                },
                {
                  num: "03",
                  title: "Data & messy spreadsheets",
                  desc: "Standardising, validating, and cleaning complex tabular data collected from multiple programme partners.",
                },
                {
                  num: "04",
                  title: "Internal institutional knowledge",
                  desc: "Making past project evaluations, policy manuals, and institutional guidelines instantly searchable for decentralised staff.",
                },
                {
                  num: "05",
                  title: "Beneficiary communications",
                  desc: "Triaging high volumes of incoming requests, preparing contextual replies, and routing urgent caseworkers.",
                },
                {
                  num: "06",
                  title: "Volunteer intake & coordination",
                  desc: "Matching applicant skills with programme requirements and automating recurring onboarding communications.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-[#F4F2EB] transition-colors -mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12"
                >
                  <div className="md:col-span-2 font-mono text-xl sm:text-2xl font-light text-primary">
                    {item.num}
                  </div>
                  <div className="md:col-span-4 font-display text-lg sm:text-xl font-medium text-foreground">
                    {item.title}
                  </div>
                  <div className="md:col-span-6 font-sans text-sm text-ink-muted leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <p className="font-mono text-xs text-ink-muted uppercase tracking-[0.14em]">
                Not sure whether automation applies to your workflow?{" "}
                <a href="#application" className="text-primary hover:underline underline-offset-4 font-semibold">
                  That is precisely what our diagnostic is for →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= 03 OPEN TOOLS: GRANTMATCH AI (CENTERPIECE) ================= */}
        <section id="open-tools" className="border-t border-border-muted py-20 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary font-medium block">
                  02 / Open Civic Tools
                </span>
                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.16em] bg-primary text-background px-2 py-0.5 rounded-xs">
                  Tool 001
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal tracking-[-0.03em] text-foreground leading-[1.05]">
                Find the grants your NGO is actually eligible for.
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-foreground/85 leading-snug">
                “We saw NGOs spending up to 40% of their leadership time searching through hundreds of calls for grants they were never eligible for. So we built an open-source evaluation engine to fix it.”
              </p>
            </div>

            <div className="lg:col-span-3 space-y-4 text-sm text-ink-muted font-sans leading-relaxed">
              <p>
                Useful technology shouldn’t require a consulting project. Alongside custom pilots, we engineer public civic tools any nonprofit can use immediately.
              </p>
              <div className="flex flex-col gap-2.5 pt-2">
                <a
                  href="https://web-production-db1798.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-2.5 text-xs font-mono uppercase tracking-[0.14em] text-background bg-primary hover:bg-primary-hover rounded-xs transition-colors font-medium shadow-xs"
                >
                  <span>Launch GrantMatch AI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://github.com/kabirwadhwa/grantmatch-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted hover:text-foreground"
                  >
                    <span>Source Code (GitHub)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-border-muted font-mono">/</span>
                  <a
                    href="https://web-production-db1798.up.railway.app/methodology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted hover:text-foreground"
                  >
                    Methodology
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL CENTERPIECE: High-Contrast Dark Carbon Product Docket */}
          <div className="w-full">
            <GrantMatchPreview />
          </div>
        </section>

        {/* ================= 04 THE PILOT ================= */}
        <section id="the-pilot" className="border-t border-border-muted py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary font-medium block">
                  03 / The Pilot Programme
                </span>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal tracking-[-0.03em] text-foreground leading-[1.05]">
                  One problem. Four weeks. <br />
                  From bottleneck to working solution.
                </h2>
              </div>
              <div className="lg:col-span-3 text-sm text-ink-muted font-sans leading-relaxed">
                We work side-by-side with your team to deliver immediate operational relief without software sales or ongoing consulting fees.
              </div>
            </div>

            {/* 4-Stage Architectural Process Specification */}
            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-border-muted divide-y md:divide-y-0 divide-border-muted">
              {[
                {
                  step: "01",
                  title: "Diagnose",
                  week: "Week 1",
                  desc: "We spend time with your team mapping the friction, observing where staff hours are lost, and isolating the core bottleneck.",
                },
                {
                  step: "02",
                  title: "Build",
                  week: "Week 2",
                  desc: "A small volunteer engineering team builds the simplest viable tool using existing AI, open APIs, and automation.",
                },
                {
                  step: "03",
                  title: "Test",
                  week: "Week 3",
                  desc: "Your staff tests the solution against live operational tasks. We refine edge cases and verify human control safeguards.",
                },
                {
                  step: "04",
                  title: "Transfer",
                  week: "Week 4",
                  desc: "We train your team, document the complete setup, and leave your organisation fully equipped to maintain it independently.",
                },
              ].map((stage) => (
                <div
                  key={stage.step}
                  className="p-6 sm:p-8 border-r border-b border-border-muted flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-light text-primary uppercase tracking-[0.16em]">
                        STAGE {stage.step}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] bg-accent-light px-2 py-0.5 rounded-xs text-ink-muted">
                        {stage.week}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-medium text-foreground">
                      {stage.title}
                    </h3>
                    <p className="font-sans text-xs text-ink-muted leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ideal Partner Criteria */}
            <div className="pt-4 border-t border-border-muted grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 font-display text-lg font-medium text-foreground">
                Inaugural Cohort Criteria
              </div>
              <div className="lg:col-span-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                <span>· Registered Nonprofit</span>
                <span>· Repetitive Workflow</span>
                <span>· 1–2 Hours Weekly Commitment</span>
                <span>· No Technical Skills Needed</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 05 PRINCIPLES ================= */}
        <section id="principles" className="border-t border-border-muted py-24 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-20">
          {/* Monumental Editorial Pull Quote */}
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary font-medium block mb-6">
              04 / Core Principles
            </span>
            <p className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-foreground font-normal leading-[1.1] tracking-tight">
              “We measure success in time returned to your mission — not in how much AI we deploy.”
            </p>
          </div>

          {/* 6 Unboxed Rule-Separated Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-muted">
            {[
              {
                num: "01",
                label: "No vendor lock-in",
                desc: "Solutions are built on standard open APIs and clear documentation so your organisation retains full autonomy.",
              },
              {
                num: "02",
                label: "Human review where it matters",
                desc: "Algorithms prepare drafts and filter data. Caseworkers and staff retain final sign-off on every sensitive decision.",
              },
              {
                num: "03",
                label: "Minimal data collection",
                desc: "Strict data confidentiality, zero data resale, and zero training on sensitive beneficiary records.",
              },
              {
                num: "04",
                label: "Transparent tools",
                desc: "Where possible, what we build and learn becomes reusable open code and guidance for all civil society.",
              },
              {
                num: "05",
                label: "Organisation retains control",
                desc: "You are never locked into proprietary infrastructure, commercial subscriptions, or ongoing consulting fees.",
              },
              {
                num: "06",
                label: "No unnecessary AI",
                desc: "If a simple spreadsheet template, webhook, or script solves the problem, we do not deploy complex LLMs.",
              },
            ].map((principle) => (
              <div
                key={principle.num}
                className="p-6 sm:p-8 border-r border-b border-border-muted space-y-3"
              >
                <span className="font-mono text-xs text-primary block">
                  {principle.num}
                </span>
                <h4 className="font-display text-base font-semibold text-foreground uppercase tracking-wider">
                  {principle.label}
                </h4>
                <p className="font-sans text-xs text-ink-muted leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Independence Declaration Notice */}
          <div className="p-5 bg-[#FAF9F5] border border-border-muted rounded-xs flex items-start space-x-3.5">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-ink-muted font-sans leading-relaxed">
              <strong className="text-foreground font-medium">Independence Statement:</strong> Capacité is an independent, volunteer-led public-interest initiative. We do not sell proprietary software licenses, do not accept vendor kickbacks, and do not provide commercial consulting.
            </p>
          </div>
        </section>

        {/* ================= 06 IMPACT & ACCOUNTABILITY ================= */}
        <section id="impact" className="border-t border-border-muted py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto space-y-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary font-medium block">
                  05 / Accountability
                </span>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal tracking-[-0.03em] text-foreground leading-[1.05]">
                  We want impact to be measurable.
                </h2>
              </div>
              <div className="lg:col-span-3 text-sm text-ink-muted font-sans leading-relaxed">
                To maintain institutional accountability, we evaluate our work through transparent, direct operational metrics.
              </div>
            </div>

            <ImpactDashboard />
          </div>
        </section>

        {/* ================= 07 FINAL CTA & PILOT INTAKE ================= */}
        <section id="application" className="border-t border-border-muted py-20 md:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary font-medium block">
                06 / Diagnostic Intake
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-[-0.04em] text-foreground leading-[1.0]">
                What’s stealing time from your mission?
              </h2>
              <p className="text-base text-ink-muted font-sans leading-relaxed max-w-2xl">
                Tell us about one repetitive, frustrating or manual workflow. If technology can genuinely help, we’ll explore it with you — free of charge, with zero technical expertise required.
              </p>
            </div>

            <ApplicationForm />
          </div>
        </section>

        {/* ================= 08 VOLUNTEER NETWORK ================= */}
        <section id="volunteers" className="border-t border-border-muted py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary font-medium block">
                  07 / Network
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-normal tracking-[-0.03em] text-foreground leading-tight">
                  Put your skills to work for civil society.
                </h2>
              </div>
              <p className="text-sm text-ink-muted font-sans leading-relaxed">
                We are assembling a community of professionals in AI, software engineering, product design, and nonprofit operations who want to contribute their skills toward public-interest civic technology.
              </p>

              <div className="pt-4 border-t border-border-muted">
                <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted mb-3 font-medium">
                  Expertise Areas
                </h4>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {[
                    "AI & Automation",
                    "Full-Stack Engineering",
                    "Product & UX Design",
                    "Nonprofit Operations",
                    "Data Protection & Security",
                  ].map((profile) => (
                    <span
                      key={profile}
                      className="text-ink-muted bg-[#F4F2EB] border border-border-muted px-3 py-1 rounded-xs"
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
      </main>

      {/* ================= 09 EDITORIAL FOOTER ================= */}
      <footer className="border-t border-border-muted py-16 px-6 sm:px-8 lg:px-12 bg-[#F4F2EB]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-1">
            <span className="text-xl font-display font-bold tracking-[0.12em] text-foreground">
              CAPACITÉ
            </span>
            <p className="text-xs text-ink-muted font-mono uppercase tracking-wider">
              Technology for Civil Society · 2026
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.16em]">
            <a href="#hero" className="text-ink-muted hover:text-foreground transition-colors">
              Top
            </a>
            <a href="#the-problem" className="text-ink-muted hover:text-foreground transition-colors">
              The Problem
            </a>
            <a href="#open-tools" className="text-primary hover:underline transition-colors font-semibold">
              Open Tools
            </a>
            <a href="#the-pilot" className="text-ink-muted hover:text-foreground transition-colors">
              The Pilot
            </a>
            <a href="#principles" className="text-ink-muted hover:text-foreground transition-colors">
              Principles
            </a>
            <a href="#impact" className="text-ink-muted hover:text-foreground transition-colors">
              Accountability
            </a>
            <a href="#application" className="text-ink-muted hover:text-foreground transition-colors">
              Apply
            </a>
            <a href="#volunteers" className="text-ink-muted hover:text-foreground transition-colors">
              Volunteer
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-border-muted flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-ink-muted">
          <p>
            Independent volunteer-led public-interest initiative. All open tools are delivered under MIT or Creative Commons licenses.
          </p>
          <span className="text-ink-faint">
            capacite.org
          </span>
        </div>
      </footer>
    </>
  );
}

