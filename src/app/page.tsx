import React from "react";
import Navbar from "@/components/Navbar";
import GrantMatchPreview from "@/components/GrantMatchPreview";
import ImpactDashboard from "@/components/ImpactDashboard";
import ApplicationForm from "@/components/ApplicationForm";
import VolunteerForm from "@/components/VolunteerForm";

import {
  ArrowRight,
  Check,
  ExternalLink,
  ShieldCheck,
  Search,
  FileSpreadsheet,
  Database,
  MessageSquare,
  Globe,
  Calendar,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* ================= SECTION 1: HERO ================= */}
        <section id="hero" className="px-6 md:px-12 pt-16 md:pt-24 pb-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (7 cols): Editorial Typography & CTAs */}
            <div className="lg:col-span-7 space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                  Capacité · Civic Technology for Civil Society
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-foreground leading-[1.08]">
                Give your mission <br />
                <span className="font-serif italic font-normal text-primary">more capacity.</span>
              </h1>

              <div className="space-y-4 max-w-xl">
                <p className="text-lg md:text-xl font-normal text-foreground/85 leading-relaxed">
                  Free AI tools and hands-on automation engineered specifically for civil society organisations.
                </p>
                <p className="text-sm md:text-base text-ink-muted leading-relaxed">
                  We help NGOs spend less time searching, compiling, sorting and administering — and more time delivering on their core mission.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#application"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-background bg-primary hover:bg-[#152820] rounded transition-colors duration-200 shadow-sm"
                >
                  Tell us what slows you down
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#tools"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-foreground bg-accent-light hover:bg-[#E7E3D8] border border-border-muted rounded transition-colors duration-200"
                >
                  Explore open tools
                </a>
              </div>
            </div>

            {/* Right Column (5 cols): Authoritative Initiative Overview Box */}
            <div className="lg:col-span-5 w-full animate-fade-in">
              <div className="bg-[#FAF9F5] border border-border-muted rounded-lg p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-border-muted pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
                    Initiative Overview
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-primary uppercase tracking-wider font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Cohort 01 Open
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-ink-muted uppercase">01 / Diagnostic</span>
                      <span className="text-[10px] font-mono text-ink-muted/70 uppercase">Zero Cost</span>
                    </div>
                    <p className="text-xs text-foreground/85 leading-relaxed">
                      Four-week hands-on sprint embedded directly with your staff. We map the friction and build practical workflows.
                    </p>
                  </div>

                  <div className="space-y-1 border-t border-border-muted/60 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-ink-muted uppercase">02 / Public Tools</span>
                      <span className="text-[10px] font-mono text-ink-muted/70 uppercase">Open Access</span>
                    </div>
                    <p className="text-xs text-foreground/85 leading-relaxed">
                      Generalised civic software — beginning with GrantMatch AI — accessible to any civil society organisation worldwide.
                    </p>
                  </div>

                  <div className="space-y-1 border-t border-border-muted/60 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-ink-muted uppercase">03 / Human Control</span>
                      <span className="text-[10px] font-mono text-ink-muted/70 uppercase">Ethical Safety</span>
                    </div>
                    <p className="text-xs text-foreground/85 leading-relaxed">
                      Automation prepares drafts and structures information. Staff retain final sign-off on every consequential decision.
                    </p>
                  </div>

                  <div className="space-y-1 border-t border-border-muted/60 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-ink-muted uppercase">04 / Independence</span>
                      <span className="text-[10px] font-mono text-ink-muted/70 uppercase">Non-Commercial</span>
                    </div>
                    <p className="text-xs text-foreground/85 leading-relaxed">
                      Volunteer-led and self-funded. No enterprise licenses, no vendor lock-in, and zero commercial data extraction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Ticker Baseline */}
          <div className="mt-16 pt-8 border-t border-border-muted flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-ink-muted">
            <span>Free to use</span>
            <span className="hidden sm:inline text-border-muted">/</span>
            <span>Open where possible</span>
            <span className="hidden sm:inline text-border-muted">/</span>
            <span>Built around real NGO work</span>
            <span className="hidden sm:inline text-border-muted">/</span>
            <span>No vendor lock-in</span>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS WE SOLVE ================= */}
        <section id="what-we-solve" className="bg-[#FAF9F5] border-y border-border-muted py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
                01 / Why Capacité Exists
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground leading-tight">
                AI productivity shouldn’t belong only to organisations with large technology budgets.
              </h2>
              <p className="text-base text-ink-muted leading-relaxed pt-2">
                Nonprofits face the same administrative complexities as global institutions, but lack the technical budget to experiment safely. We start directly with the operational bottleneck, not the technology.
              </p>
            </div>

            {/* Unboxed 3-column / 2-row grid with hairline borders */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-muted">
              {/* Problem 01 */}
              <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">01</span>
                    <Search className="w-5 h-5 text-ink-muted/70" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    Funding & research workflows
                  </h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    Screen hundreds of public calls, verify eligibility rules, and track deadlines without spending weeks manually browsing foundation sites.
                  </p>
                </div>
              </div>

              {/* Problem 02 */}
              <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">02</span>
                    <FileSpreadsheet className="w-5 h-5 text-ink-muted/70" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    Reporting & donor documentation
                  </h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    Cut repetitive compilation hours when consolidating field metrics, quarterly donor narrative updates, and impact logs.
                  </p>
                </div>
              </div>

              {/* Problem 03 */}
              <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">03</span>
                    <Database className="w-5 h-5 text-ink-muted/70" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    Internal knowledge & institutional memory
                  </h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    Make past grant archives, policy guidelines, and field reports instantly queryable for decentralised teams.
                  </p>
                </div>
              </div>

              {/* Problem 04 */}
              <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">04</span>
                    <MessageSquare className="w-5 h-5 text-ink-muted/70" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    Beneficiary communications
                  </h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    Triage incoming inquiries, prepare contextual draft responses, and route urgent requests while keeping human caseworkers in control.
                  </p>
                </div>
              </div>

              {/* Problem 05 */}
              <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">05</span>
                    <Globe className="w-5 h-5 text-ink-muted/70" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    Translation & multilingual outreach
                  </h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    Communicate across language communities and translate complex legal regulations into clear, plain-language summaries.
                  </p>
                </div>
              </div>

              {/* Problem 06 */}
              <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">06</span>
                    <Calendar className="w-5 h-5 text-ink-muted/70" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    Volunteer intake & coordination
                  </h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    Streamline onboarding forms, match volunteer skill sets with programme requirements, and automate recurring orientation scheduling.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-sm text-ink-muted">
                Not sure whether automation applies to your workflow?{" "}
                <a href="#application" className="text-primary hover:underline underline-offset-4 font-medium">
                  That is precisely what our initial diagnostic is designed for →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: OPEN TOOLS (GRANTMATCH AI) ================= */}
        <section id="tools" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
              02 / Open Civic Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground leading-tight">
              Useful technology shouldn’t require a consulting project.
            </h2>
            <p className="text-base text-ink-muted leading-relaxed">
              Alongside our hands-on pilots, we engineer standalone public tools that any nonprofit can use immediately. Free, transparent and designed around real operational hurdles.
            </p>
          </div>

          {/* Large Featured Tool Showcase: GRANTMATCH AI */}
          <div className="p-8 md:p-12 bg-[#FAF9F5] border border-border-muted rounded-lg shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Tool Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-accent-sage text-primary px-2.5 py-1 rounded">
                    Tool 01
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                    Public Beta · Built by Capacité
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                    GRANTMATCH AI
                  </h3>
                  <h4 className="text-2xl sm:text-3xl font-serif italic text-foreground leading-snug">
                    Find the grants your NGO is actually eligible for.
                  </h4>
                </div>

                <p className="text-sm text-ink-muted leading-relaxed">
                  GrantMatch searches live funding opportunities, checks eligibility criteria against your mission, and explains why each opportunity matches your organisation — with direct links to the official funder.
                </p>

                {/* Feature Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-border-muted/60">
                  {[
                    "Live funding discovery",
                    "Rigorous eligibility screening",
                    "Transparent match explanations",
                    "Official funder source links",
                    "Free for all civil society",
                    "Open source & non-commercial",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-xs text-foreground/85 font-medium">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <a
                    href="https://web-production-db1798.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-background bg-primary hover:bg-[#152820] rounded transition-colors duration-200 shadow-sm"
                  >
                    Try GrantMatch
                    <ExternalLink className="ml-2 w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://web-production-db1798.up.railway.app/methodology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-foreground bg-background hover:bg-[#EFECE4] border border-border-muted rounded transition-colors duration-200"
                  >
                    How matching works
                  </a>
                </div>
                <p className="text-[11px] font-mono text-ink-muted">
                  Standalone web application. No account or credit card required.
                </p>
              </div>

              {/* Right Column: Realistic Product Preview */}
              <div className="lg:col-span-6 w-full">
                <GrantMatchPreview />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS ================= */}
        <section id="how-it-works" className="bg-[#FAF9F5] border-y border-border-muted py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
                03 / Pilot Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground leading-tight">
                One problem. Four weeks.
              </h2>
              <p className="text-base text-ink-muted leading-relaxed">
                We work side-by-side with your team to deliver immediate operational value without process bloat.
              </p>
            </div>

            {/* Horizontal 4-column timeline separated by hairline dividers */}
            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-border-muted">
              {/* Step 01 */}
              <div className="p-6 md:p-8 border-r border-b border-border-muted space-y-4">
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider bg-accent-sage text-primary px-2 py-0.5 rounded">
                  Week 1
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  01 / Diagnose
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  We spend time with your team understanding the workflow, observing where staff time is lost, and identifying the real bottleneck.
                </p>
              </div>

              {/* Step 02 */}
              <div className="p-6 md:p-8 border-r border-b border-border-muted space-y-4">
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider bg-accent-sage text-primary px-2 py-0.5 rounded">
                  Week 2
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  02 / Build
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  A small volunteer team creates the simplest useful solution using existing AI, open APIs, and automation tools.
                </p>
              </div>

              {/* Step 03 */}
              <div className="p-6 md:p-8 border-r border-b border-border-muted space-y-4">
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider bg-accent-sage text-primary px-2 py-0.5 rounded">
                  Week 3
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  03 / Test
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Your team tests the solution against real operational scenarios. We refine the workflow, verify safety guards, and measure time saved.
                </p>
              </div>

              {/* Step 04 */}
              <div className="p-6 md:p-8 border-r border-b border-border-muted space-y-4">
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider bg-accent-sage text-primary px-2 py-0.5 rounded">
                  Week 4
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  04 / Transfer
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  We train your team, document the entire process, and leave your organisation fully equipped to maintain the solution independently.
                </p>
              </div>
            </div>

            <div className="pt-6 text-center max-w-xl mx-auto border-t border-border-muted">
              <p className="text-base md:text-lg font-serif italic text-primary">
                “We measure success in time returned to your mission — not in how much AI we deploy.”
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: PRINCIPLES & TRUST ================= */}
        <section id="principles" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
              04 / Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground leading-tight">
              Built for public trust.
            </h2>
            <p className="text-base text-ink-muted leading-relaxed">
              Capacité is engineered as an institutional partner civil society can rely on with complete transparency.
            </p>
          </div>

          {/* Unboxed 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-muted">
            {/* Principle 1 */}
            <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">
                  01 / Free of charge
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  Non-commercial mission
                </h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  Pilot projects and public tools are provided with zero fees, licensing charges, or commercial software upsells.
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">
                  02 / Human oversight
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  Caseworkers in control
                </h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  AI supports drafting and discovery. Sensitive, ethical, or policy decisions remain firmly in human hands.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">
                  03 / Pragmatism first
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  Practical utility
                </h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  We prefer a useful two-week workflow improvement over an elaborate six-month speculative prototype.
                </p>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">
                  04 / Data sovereignty
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  Responsible data practices
                </h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  Minimal data collection, strict confidentiality, and zero training on sensitive beneficiary information.
                </p>
              </div>
            </div>

            {/* Principle 5 */}
            <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">
                  05 / Open where possible
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  Sector-wide sharing
                </h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  Where appropriate, our methodologies, guides, and tools become reusable open assets for all civil society.
                </p>
              </div>
            </div>

            {/* Principle 6 */}
            <div className="p-8 border-r border-b border-border-muted flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-medium">
                  06 / No lock-in
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  Independent ownership
                </h3>
                <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                  Solutions are built on standard open APIs and clear documentation so your organisation retains full autonomy.
                </p>
              </div>
            </div>
          </div>

          {/* Integrated Trust & Independence Notice */}
          <div className="p-5 bg-[#FAF9F5] border border-border-muted rounded-lg flex items-start space-x-3.5">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-ink-muted leading-relaxed">
              <strong className="text-foreground">Independence Statement:</strong> Capacité is a volunteer-led public-interest civic initiative. We are self-funded and completely independent: we do not sell software licenses, do not accept vendor affiliate commissions, and do not provide commercial consulting.
            </p>
          </div>
        </section>

        {/* ================= SECTION 6: IMPACT MEASUREMENT ================= */}
        <section id="impact-model" className="bg-[#FAF9F5] border-y border-border-muted py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
                05 / Accountability
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground leading-tight">
                We want impact to be measurable.
              </h2>
              <p className="text-base text-ink-muted leading-relaxed">
                To maintain institutional accountability, we evaluate our work through transparent, direct operational metrics.
              </p>
            </div>

            <ImpactDashboard />
          </div>
        </section>

        {/* ================= SECTION 7: PILOT PROGRAMME ================= */}
        <section id="pilot-programme" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="p-8 md:p-14 bg-[#FAF9F5] border border-border-muted rounded-lg space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
                06 / Inaugural Cohort
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground leading-tight">
                We’re looking for our first nonprofit partners.
              </h2>
              <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
                We are currently selecting small to mid-sized civil society organisations for Capacité’s inaugural pilot cohort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-foreground">
                  The Ideal Partner Profile
                </h3>
                <ul className="space-y-3">
                  {[
                    "A registered nonprofit, association or civil society organisation",
                    "A clear, repetitive administrative bottleneck consuming staff hours",
                    "A team willing to spend 1–2 hours weekly during the 4-week sprint",
                    "No technical or AI knowledge required on your end",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-xs text-ink-muted leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center space-y-4 bg-background p-6 rounded border border-border-muted">
                <p className="text-xs text-ink-muted leading-relaxed">
                  Ready to describe your workflow bottleneck? Intake is simple, non-binding, and takes approximately 10 minutes.
                </p>
                <a
                  href="#application"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-background bg-primary hover:bg-[#152820] rounded transition-colors shadow-sm w-full"
                >
                  Apply for a pilot
                </a>
                <span className="text-[11px] font-mono text-center text-ink-muted/70 block">
                  Tell us about one task your team wishes it could automate safely.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: APPLICATION FORM ================= */}
        <section id="application" className="bg-[#FAF9F5] border-y border-border-muted py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
                07 / Intake
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">
                Apply for a pilot
              </h2>
              <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                No technical skills required. We diagnose the bottleneck, build the workflow, and train your staff.
              </p>
            </div>

            <ApplicationForm />
          </div>
        </section>

        {/* ================= SECTION 9: FOR VOLUNTEERS ================= */}
        <section id="volunteers" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
                  08 / Join The Initiative
                </span>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground leading-tight">
                  Build technology that gives civil society time back.
                </h2>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                We are assembling a network of professionals in AI, product engineering, design, and nonprofit operations who want to contribute their skills toward public-interest civic technology.
              </p>

              <div className="pt-4 border-t border-border-muted">
                <h4 className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-3">
                  Profiles We Welcome
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI & Automation Engineering",
                    "Full-Stack Development",
                    "Product & Project Management",
                    "UX & Civic Design",
                    "Nonprofit Field Operations",
                    "Data Protection & Security",
                  ].map((profile) => (
                    <span
                      key={profile}
                      className="text-xs font-medium text-ink-muted bg-[#FAF9F5] border border-border-muted px-3 py-1 rounded"
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

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#FAF9F5] border-t border-border-muted py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <span className="text-lg font-serif italic text-foreground">Capacité</span>
            <p className="text-xs text-ink-muted">Civic technology for civil society</p>
            <p className="text-[10px] font-mono text-ink-muted/70 mt-1">2026</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider">
            <a href="#hero" className="text-ink-muted hover:text-foreground transition-colors">
              About
            </a>
            <a href="#tools" className="text-primary hover:underline transition-colors font-medium">
              Tools
            </a>
            <a href="#how-it-works" className="text-ink-muted hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#principles" className="text-ink-muted hover:text-foreground transition-colors">
              Principles
            </a>
            <a href="#pilot-programme" className="text-ink-muted hover:text-foreground transition-colors">
              Pilot
            </a>
            <a href="#volunteers" className="text-ink-muted hover:text-foreground transition-colors">
              Volunteer
            </a>
            <a href="#application" className="text-ink-muted hover:text-foreground transition-colors">
              Apply
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border-muted text-xs text-ink-muted leading-relaxed">
          <p>
            Capacité is an independent, volunteer-led public-interest civic initiative. All custom solutions and public tools are delivered free of charge under Open Source or Creative Commons frameworks.
          </p>
        </div>
      </footer>
    </>
  );
}
