import React from "react";
import Navbar from "@/components/Navbar";
import WorkflowVisualizer from "@/components/WorkflowVisualizer";
import GrantMatchPreview from "@/components/GrantMatchPreview";
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
  ShieldCheck,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24">
        {/* ================= SECTION 1: HERO ================= */}
        <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 animate-slide-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                Give your mission <br />
                <span className="text-primary italic">more capacity.</span>
              </h1>
              
              <div className="space-y-3 max-w-2xl">
                <p className="text-lg md:text-xl font-medium text-foreground/85 leading-relaxed">
                  Free AI tools and hands-on automation for nonprofits.
                </p>
                <p className="text-base text-foreground/70 leading-relaxed max-w-xl">
                  We help NGOs spend less time searching, reporting, sorting and administering — and more time on their mission.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#application"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-background bg-primary hover:bg-primary-hover rounded transition-colors duration-200 shadow-md"
                >
                  Tell us what slows you down
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#tools"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-foreground/80 hover:text-foreground bg-accent-light hover:bg-border-muted/30 border border-border-muted rounded transition-colors duration-200"
                >
                  Explore free tools
                </a>
              </div>

              {/* Trust statement */}
              <div className="pt-6 border-t border-border-muted max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45 flex flex-wrap gap-x-4 gap-y-2">
                  <span>· Free pilot programme</span>
                  <span>· No software sales</span>
                  <span>· Human oversight</span>
                  <span>· Built for nonprofits</span>
                </p>
              </div>
            </div>

            {/* Hero Visual Block */}
            <div className="lg:col-span-5 flex flex-col justify-center w-full animate-fade-in animate-delay-200">
              <div className="p-6 md:p-8 bg-accent-light/50 border border-border-muted rounded-2xl relative shadow-sm">
                <div className="absolute top-4 left-4 flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/40">
                    Capacity Workflow Lifecycle
                  </span>
                </div>
                <div className="mt-6">
                  <WorkflowVisualizer />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS WE SOLVE ================= */}
        <section id="what-we-solve" className="bg-accent-light border-y border-border-muted py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl space-y-4 animate-slide-up">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Why Capacité exists
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                AI productivity shouldn’t belong only to organisations with large technology budgets.
              </h2>
              <p className="text-base text-foreground/75 leading-relaxed pt-2">
                Nonprofits face the same administrative burdens as large corporations, but lack the technical budget to experiment safely. Tell us what repeatedly consumes your team’s time — we start with the operational bottleneck, not the technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-8 bg-background border border-border-muted hover:border-primary/45 rounded-lg transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="text-primary group-hover:scale-105 transition-transform duration-300">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    1. Beneficiary communications
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    Categorise incoming requests, prepare suggested responses, and route messages while keeping humans in control.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-background border border-border-muted hover:border-primary/45 rounded-lg transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="text-primary group-hover:scale-105 transition-transform duration-300">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    2. Internal knowledge
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    Make policies, institutional guidelines, and past program documentation easy for your field staff to query.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-background border border-border-muted hover:border-primary/45 rounded-lg transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="text-primary group-hover:scale-105 transition-transform duration-300">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    3. Reporting
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    Reduce repetitive compilation time involved in programme indicators, donor updates, and impact reporting.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-8 bg-background border border-border-muted hover:border-primary/45 rounded-lg transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="text-primary group-hover:scale-105 transition-transform duration-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    4. Translation & accessibility
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    Help teams communicate across multiple languages and convert complex legal guidelines into plain-language summaries.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="p-8 bg-background border border-border-muted hover:border-primary/45 rounded-lg transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="text-primary group-hover:scale-105 transition-transform duration-300">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    5. Volunteer operations
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    Streamline volunteer intake, FAQs, training materials, and scheduling coordination.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="p-8 bg-background border border-border-muted hover:border-primary/45 rounded-lg transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="text-primary group-hover:scale-105 transition-transform duration-300">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    6. Funding & research workflows
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    Help teams discover, screen eligibility, and track relevant public grant opportunities without weeks of manual search.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm font-medium text-foreground/65">
                Not sure whether automation can help?{" "}
                <a href="#application" className="text-primary underline underline-offset-4 hover:text-primary-hover font-semibold">
                  That’s exactly what the initial diagnostic is for.
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: OPEN TOOLS (NEW) ================= */}
        <section id="tools" className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4 animate-slide-up">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              OPEN TOOLS
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Useful technology shouldn’t require a consulting project.
            </h2>
            <p className="text-base text-foreground/75 leading-relaxed">
              Alongside our hands-on pilots, we build practical tools that nonprofits can use immediately. Free, transparent and designed around real operational problems.
            </p>
          </div>

          {/* Large Featured Tool Card: GRANTMATCH AI */}
          <div className="p-8 md:p-12 bg-accent-light border border-border-muted rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Tool Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded">
                    TOOL 01
                  </span>
                  <span className="text-xs font-semibold text-foreground/60">
                    Built by Capacité
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-foreground/50">
                    GRANTMATCH AI
                  </h3>
                  <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground leading-snug">
                    Find the grants your NGO is actually eligible for.
                  </h4>
                </div>

                <p className="text-sm text-foreground/75 leading-relaxed">
                  GrantMatch searches funding opportunities, checks eligibility and explains why each opportunity matches your organisation — with direct links to the original funder.
                </p>

                {/* Feature Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    "Live funding discovery",
                    "Eligibility screening",
                    "Transparent match explanations",
                    "Official sources",
                    "Free to use",
                    "Open source",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-xs text-foreground/80 font-medium">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
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
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-background bg-primary hover:bg-primary-hover rounded transition-colors duration-200 shadow"
                  >
                    Try GrantMatch →
                  </a>
                  <a
                    href="https://web-production-db1798.up.railway.app/methodology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-foreground/80 hover:text-foreground bg-background hover:bg-border-muted/30 border border-border-muted rounded transition-colors duration-200"
                  >
                    How matching works
                  </a>
                </div>
              </div>

              {/* Right Column: Realistic Product Preview */}
              <div className="lg:col-span-6 w-full">
                <GrantMatchPreview />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS ================= */}
        <section id="how-it-works" className="bg-accent-light border-y border-border-muted py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                PILOT METHODOLOGY
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                One problem. Four weeks.
              </h2>
              <p className="text-base text-foreground/75 leading-relaxed">
                We work side-by-side with your team to deliver immediate value without operational noise.
              </p>
            </div>

            {/* Timeline Checklist Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Diagnose */}
              <div className="relative p-6 bg-background border border-border-muted/80 rounded-lg shadow-sm space-y-4">
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary px-2.5 py-1 rounded">
                  Week 1
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  STEP 01 — Diagnose
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  We spend time with your team understanding the workflow, the users and the real bottleneck.
                </p>
              </div>

              {/* Build */}
              <div className="relative p-6 bg-background border border-border-muted/80 rounded-lg shadow-sm space-y-4">
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary px-2.5 py-1 rounded">
                  Week 2
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  STEP 02 — Build
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  A small volunteer team creates the simplest useful solution using existing AI, automation and open tools wherever possible.
                </p>
              </div>

              {/* Test */}
              <div className="relative p-6 bg-background border border-border-muted/80 rounded-lg shadow-sm space-y-4">
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary px-2.5 py-1 rounded">
                  Week 3
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  STEP 03 — Test
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Your team tests it against real scenarios. We improve the workflow, measure performance and identify risks.
                </p>
              </div>

              {/* Train */}
              <div className="relative p-6 bg-background border border-border-muted/80 rounded-lg shadow-sm space-y-4">
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary px-2.5 py-1 rounded">
                  Week 4
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  STEP 04 — Train & hand over
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  We train your team, document the process and leave you able to run the solution independently.
                </p>
              </div>
            </div>

            <div className="pt-6 text-center max-w-xl mx-auto border-t border-border-muted/65">
              <p className="text-base md:text-lg font-semibold text-primary italic">
                “We measure success in time returned to your mission — not in how much AI we deploy.”
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: PRINCIPLES & TRUST ================= */}
        <section id="principles" className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Core Ethos
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              How we work
            </h2>
            <p className="text-base text-foreground/75 leading-relaxed">
              Capacité is designed to be an institutional partner nonprofits can trust completely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Principle 1 */}
            <div className="p-6 border border-border-muted rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary border border-primary/25 px-2 py-0.5 rounded bg-accent-light">
                  01 / Free
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  Free of charge
                </h3>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  Pilot projects and public tools are provided without fees or software licensing costs.
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="p-6 border border-border-muted rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary border border-primary/25 px-2 py-0.5 rounded bg-accent-light">
                  02 / Human
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  Human oversight
                </h3>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  AI supports people. Sensitive, ethical, or consequential decisions stay with human staff.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="p-6 border border-border-muted rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary border border-primary/25 px-2 py-0.5 rounded bg-accent-light">
                  03 / Practical
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  Practicality first
                </h3>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  We prefer a useful two-week automation over an impressive six-month experimental prototype.
                </p>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="p-6 border border-border-muted rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary border border-primary/25 px-2 py-0.5 rounded bg-accent-light">
                  04 / Responsible
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  Responsible use
                </h3>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  We consider privacy, security, data sensitivity and organisational risk from day one.
                </p>
              </div>
            </div>

            {/* Principle 5 */}
            <div className="p-6 border border-border-muted rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary border border-primary/25 px-2 py-0.5 rounded bg-accent-light">
                  05 / Open
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  Open source
                </h3>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  Where possible, what we build and learn becomes reusable guidance and code for all nonprofits.
                </p>
              </div>
            </div>
          </div>

          {/* Integrated Trust & Independence Disclaimer */}
          <div className="p-5 bg-accent-light border border-border-muted rounded-xl flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-foreground/70 leading-relaxed">
              <strong>Notice:</strong> Capacité is a volunteer-led, public-interest civic initiative. We are self-funded and completely independent: we do not sell proprietary software, commercial licenses, or paid consulting services.
            </p>
          </div>
        </section>

        {/* ================= SECTION 6: IMPACT MEASUREMENT ================= */}
        <section id="impact-model" className="bg-accent-light border-y border-border-muted py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                ACCOUNTABILITY
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                We want impact to be measurable.
              </h2>
              <p className="text-base text-foreground/75 leading-relaxed">
                To keep ourselves accountable, we build our work around transparent, direct operational metrics.
              </p>
            </div>

            <ImpactDashboard />
          </div>
        </section>

        {/* ================= SECTION 7: PILOT PROGRAMME ================= */}
        <section id="pilot-programme" className="py-20 md:py-28 px-6 md:px-8 max-w-5xl mx-auto">
          <div className="p-8 md:p-14 bg-accent-light border border-border-muted rounded-2xl space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Founding pilot
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                We’re looking for our first nonprofit partners.
              </h2>
              <p className="text-base text-foreground/75 leading-relaxed max-w-2xl">
                We are currently selecting a small number of organisations for Capacité’s inaugural pilot projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                  The Ideal Partner
                </h3>
                <ul className="space-y-3.5">
                  <li className="flex items-start text-sm text-foreground/75">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>A nonprofit or association with a real operational bottleneck</span>
                  </li>
                  <li className="flex items-start text-sm text-foreground/75">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>A small team willing to collaborate with us</span>
                  </li>
                  <li className="flex items-start text-sm text-foreground/75">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>A repetitive process consuming meaningful staff time</span>
                  </li>
                  <li className="flex items-start text-sm text-foreground/75">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>No technical or AI expertise required</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center space-y-4 bg-background p-6 rounded-lg border border-border-muted/80">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Ready to tell us about your workflow bottleneck? Applying is risk-free and takes less than 10 minutes.
                </p>
                <a
                  href="#application"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-background bg-primary hover:bg-primary-hover rounded transition-colors shadow w-full"
                >
                  Apply for a free pilot
                </a>
                <span className="text-[11px] text-center text-foreground/50 block">
                  Tell us about one task your team wishes it could spend less time doing.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: APPLICATION FORM ================= */}
        <section id="application" className="bg-accent-light border-y border-border-muted py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                Apply for a pilot
              </h2>
              <p className="text-sm text-foreground/70 max-w-md mx-auto">
                No technical skills required. We help you diagnose the problem, build the tool, and train your team.
              </p>
            </div>

            <ApplicationForm />
          </div>
        </section>

        {/* ================= SECTION 9: FOR VOLUNTEERS ================= */}
        <section id="volunteers" className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Join the Network
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                  Build technology that gives people time back.
                </h2>
              </div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                We’re also building a community of people in AI, product, operations, design and technology who want to use their skills for public impact.
              </p>
              
              <div className="pt-4 border-t border-border-muted">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-3">
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
                      className="text-xs font-medium text-foreground/70 bg-accent-light border border-border-muted px-3 py-1.5 rounded-full"
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
      <footer className="bg-background border-t border-border-muted py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <span className="text-lg font-semibold tracking-tight text-foreground">Capacité</span>
            <p className="text-xs text-foreground/50">AI capacity for civil society</p>
            <p className="text-[10px] text-foreground/40 mt-1">2026</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="#how-it-works" className="text-xs text-foreground/60 hover:text-foreground transition-colors">
              About / How it works
            </a>
            <a href="#tools" className="text-xs text-foreground/60 hover:text-foreground transition-colors font-medium text-primary">
              Tools
            </a>
            <a href="#pilot-programme" className="text-xs text-foreground/60 hover:text-foreground transition-colors">
              Pilot programme
            </a>
            <a href="#volunteers" className="text-xs text-foreground/60 hover:text-foreground transition-colors">
              Volunteer
            </a>
            <a href="#principles" className="text-xs text-foreground/60 hover:text-foreground transition-colors">
              Principles
            </a>
            <a href="#application" className="text-xs text-foreground/60 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border-muted/50 text-center md:text-left">
          <p className="text-[11px] text-foreground/50 leading-relaxed">
            Capacité is a volunteer-led public-interest initiative. All custom solutions and open tools are delivered free of charge and under Open Source or Creative Commons frameworks.
          </p>
        </div>
      </footer>
    </>
  );
}
