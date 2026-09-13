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
  ShieldCheck,
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
              
              <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed max-w-2xl">
                Capacité helps nonprofits solve repetitive operational problems with practical AI — free of charge.
              </p>
              
              <p className="text-base text-foreground/65 leading-relaxed max-w-xl">
                You bring us a problem. We diagnose the workflow, build a lightweight solution, test it with your team, and teach you how to use it independently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#application"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-background bg-primary hover:bg-primary-hover rounded transition-colors duration-200 shadow-md"
                >
                  Tell us what slows you down
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-foreground/80 hover:text-foreground bg-accent-light hover:bg-border-muted/30 border border-border-muted rounded transition-colors duration-200"
                >
                  See how it works
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

        {/* ================= SECTION 2: THE PROBLEM ================= */}
        <section id="problem" className="bg-accent-light border-y border-border-muted py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4 animate-slide-up">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Why Capacité exists
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                AI productivity shouldn’t belong only to organisations with large technology budgets.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground/75 leading-relaxed text-base animate-fade-in">
              <p>
                Large organisations increasingly use AI to remove repetitive work, accelerate analysis and give teams more time for higher-value tasks. Many nonprofits face the same administrative burden, but lack the technical resources, time or budget to experiment safely.
              </p>
              <p className="font-medium text-foreground">
                Capacité exists to close that gap. We increase the capacity of organisations doing socially important work, ensuring that civil society benefits from AI, not just large corporations with technical teams and large budgets.
              </p>
            </div>

            {/* Contrast block */}
            <div className="pt-10 border-t border-border-muted/65 flex flex-col sm:flex-row items-baseline justify-between gap-6">
              <div className="text-2xl md:text-3xl font-light tracking-tight text-foreground/40">
                Less time on administration.
              </div>
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-primary italic">
                More time on the mission.
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHAT WE CAN HELP WITH ================= */}
        <section id="what-we-solve" className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Start with the problem, not the technology.
            </h2>
            <p className="text-base text-foreground/70">
              You do not need an AI strategy. Tell us what repeatedly consumes your team’s time.
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
                  Categorise requests, prepare suggested responses and route messages while keeping humans in control.
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
                  Make policies, procedures and organisational documents easier for your team to find and use.
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
                  Reduce repetitive work involved in programme, donor and impact reporting.
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
                  Help teams communicate across languages and simplify complex information.
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
                  Streamline onboarding, FAQs, scheduling and repetitive coordination.
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
                  Help teams find, screen and organise relevant grants or opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm font-medium text-foreground/60">
              Not sure whether AI can help?{" "}
              <a href="#application" className="text-primary underline underline-offset-4 hover:text-primary-hover font-semibold">
                That’s exactly what the diagnostic is for.
              </a>
            </p>
          </div>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS ================= */}
        <section id="how-it-works" className="bg-accent-light border-y border-border-muted py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                One problem. Four weeks.
              </h2>
              <p className="text-base text-foreground/70">
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

        {/* ================= SECTION 5: PRINCIPLES ================= */}
        <section id="principles" className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Core Ethos
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              How we work
            </h2>
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
                  Pilot projects are provided without consulting fees.
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
                  AI supports people. Sensitive or consequential decisions stay with humans.
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
                  We prefer a useful two-week automation over an impressive six-month prototype.
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
                  We consider privacy, security, data sensitivity and organisational risk from the beginning.
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
                  Where possible, what we learn becomes reusable guidance for other nonprofits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: IMPACT MODEL ================= */}
        <section id="impact-model" className="bg-accent-light border-y border-border-muted py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                We want impact to be measurable.
              </h2>
              <p className="text-base text-foreground/70">
                To keep ourselves accountable, we build our pilots around transparent, direct operational metrics.
              </p>
            </div>

            <ImpactDashboard />

            <div className="text-center pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/45">
                As our pilot programme grows, we will publish our results transparently.
              </p>
            </div>
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
                We are currently selecting a small number of organisations in France for Capacité’s first pilot projects.
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
                <p className="text-sm text-foreground/70">
                  Ready to tell us about your workflow bottleneck? Applying is risk-free and takes less than 10 minutes.
                </p>
                <a
                  href="#application"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-background bg-primary hover:bg-primary-hover rounded transition-colors shadow w-full"
                >
                  Apply for a free pilot
                </a>
                <span className="text-[10px] text-center text-foreground/45 block">
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

        {/* ================= SECTION 10: ABOUT ================= */}
        <section id="about" className="bg-accent-light border-y border-border-muted py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-baseline">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Technology as capacity.
                </h2>
              </div>
              <div className="md:col-span-2 space-y-6 text-foreground/75 leading-relaxed text-sm">
                <p>
                  Capacité began with a simple idea: organisations working on difficult social problems should have access to the same productivity-enhancing technology as the world’s best-resourced companies.
                </p>
                <p>
                  We are starting small — one nonprofit, one workflow and one measurable improvement at a time. By selecting projects based on real operational bottlenecks rather than complex technological ambitions, we maintain high delivery success and total independence.
                </p>
                
                {/* Important Disclaimer Banner */}
                <div className="p-4 bg-background border border-border-muted/80 rounded flex items-start space-x-3 mt-4">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    <strong>Notice:</strong> Capacité is currently a pilot-stage volunteer initiative in France. We are self-funded, independent, and do not sell products, software licenses, or consulting services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: FINAL CTA ================= */}
        <section className="py-24 md:py-32 px-6 md:px-8 text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight">
            What could your team do with <br />
            <span className="text-primary font-semibold italic">10 more hours every week?</span>
          </h2>
          <p className="text-base text-foreground/70 max-w-md mx-auto">
            Tell us what slows you down. We’ll explore whether AI can help.
          </p>
          <div className="pt-4">
            <a
              href="#application"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-background bg-primary hover:bg-primary-hover rounded transition-colors duration-200 shadow-md"
            >
              Apply for a pilot
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-background border-t border-border-muted py-12 md:py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <span className="text-lg font-semibold tracking-tight text-foreground">Capacité</span>
            <p className="text-xs text-foreground/50">AI capacity for civil society</p>
            <p className="text-[10px] text-foreground/40 mt-1">France · 2026</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/60 hover:text-foreground transition-colors inline-flex items-center">
              <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border-muted/50 text-center md:text-left">
          <p className="text-[10px] text-foreground/45 leading-relaxed">
            Capacité is currently a pilot-stage volunteer initiative. All custom solutions are delivered free of charge and under Open Source or Creative Commons frameworks where appropriate.
          </p>
        </div>
      </footer>
    </>
  );
}
