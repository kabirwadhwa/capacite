import React from "react";
import Navbar from "@/components/Navbar";
import GrantMatchPreview from "@/components/GrantMatchPreview";
import ImpactDashboard from "@/components/ImpactDashboard";
import ApplicationForm from "@/components/ApplicationForm";
import VolunteerForm from "@/components/VolunteerForm";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-28">
        {/* ================= HERO ================= */}
        <section className="px-6 sm:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 max-w-[1200px] mx-auto text-center">
          <div className="max-w-[800px] mx-auto space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#315C4C] bg-[#EBF2EE] px-3 py-1 rounded-full">
              AI for nonprofits
            </span>

            <h1 className="text-5xl sm:text-7xl lg:text-[76px] font-bold tracking-tight text-[#181818] leading-[1.05]">
              Give your mission <br />
              more capacity.
            </h1>

            <p className="text-lg sm:text-xl text-[#666660] leading-relaxed max-w-[650px] mx-auto">
              Free AI tools and hands-on automation for nonprofits. We help NGOs spend less time searching, reporting, sorting and administering — and more time on their mission.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#315C4C] hover:bg-[#26493C] rounded-[8px] transition-colors duration-150 shadow-xs"
              >
                <span>Apply for a free pilot</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#tools"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-5 py-3.5 text-sm font-medium text-[#181818] hover:text-[#315C4C] transition-colors"
              >
                <span>Explore our tools</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Understated Trust Line */}
          <div className="mt-16 pt-8 border-t border-[#E4E4DE] max-w-[800px] mx-auto text-center">
            <p className="text-sm font-medium text-[#666660]">
              Free for nonprofits · Human oversight · No vendor lock-in · Open where possible
            </p>
          </div>
        </section>

        {/* ================= WHY CAPACITÉ ================= */}
        <section id="why-capacite" className="py-24 sm:py-32 border-t border-[#E4E4DE] px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto space-y-12">
            <div className="space-y-3 max-w-[750px]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#315C4C]">
                Why Capacité
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181818] leading-tight">
                AI productivity shouldn&apos;t belong only to organisations with large technology budgets.
              </h2>
            </div>

            {/* 3x2 Clean Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Funding & research",
                  desc: "Screening public calls, checking eligibility criteria, and tracking deadlines without weeks of manual search.",
                },
                {
                  title: "Reporting",
                  desc: "Turning field notes, quarterly indicators, and narrative logs into donor-ready reporting without repetitive copying.",
                },
                {
                  title: "Knowledge",
                  desc: "Making past project evaluations, policy manuals, and institutional guidelines instantly searchable for your team.",
                },
                {
                  title: "Communications",
                  desc: "Drafting contextual replies, triaging high volumes of beneficiary requests, and routing urgent cases.",
                },
                {
                  title: "Translation",
                  desc: "Translating community materials and field documentation accurately across local languages.",
                },
                {
                  title: "Volunteer coordination",
                  desc: "Matching applicant skills with programme requirements and automating recurring onboarding messages.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#E4E4DE] rounded-[14px] p-7 space-y-2.5 shadow-xs hover:border-[#315C4C]/40 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#181818]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666660] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FEATURED TOOL: GRANTMATCH AI ================= */}
        <section id="tools" className="py-24 sm:py-32 border-t border-[#E4E4DE] px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left 45% Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#315C4C] bg-[#EBF2EE] px-3 py-1 rounded-full">
                Free tool
              </span>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181818]">
                  GrantMatch AI
                </h2>
                <p className="text-xl font-medium text-[#181818] leading-snug">
                  Find the grants your NGO is actually eligible for.
                </p>
              </div>

              <p className="text-base text-[#666660] leading-relaxed">
                GrantMatch searches funding opportunities, checks eligibility and explains why each opportunity matches your organisation.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="https://web-production-db1798.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#315C4C] hover:bg-[#26493C] rounded-[8px] transition-colors shadow-xs"
                >
                  <span>Try GrantMatch →</span>
                </a>
                <a
                  href="https://github.com/kabirwadhwa/grantmatch-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-medium text-[#666660] hover:text-[#181818] transition-colors"
                >
                  <span>View source on GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right 55% Product Preview Column */}
            <div className="lg:col-span-7">
              <GrantMatchPreview />
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section id="how-it-works" className="py-24 sm:py-32 border-t border-[#E4E4DE] px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-[650px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181818]">
                One problem. Four weeks.
              </h2>
              <p className="text-base text-[#666660] leading-relaxed">
                From bottleneck to working solution in four simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "Diagnose",
                  desc: "Understand where your team loses time.",
                },
                {
                  step: "Build",
                  desc: "Create the simplest useful solution.",
                },
                {
                  step: "Test",
                  desc: "Use it inside the real workflow.",
                },
                {
                  step: "Transfer",
                  desc: "Train your team and leave you in control.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-[#E4E4DE] rounded-[14px] p-6 space-y-2 shadow-xs"
                >
                  <h3 className="text-lg font-semibold text-[#181818]">
                    {item.step}
                  </h3>
                  <p className="text-sm text-[#666660] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRINCIPLES ================= */}
        <section className="py-24 sm:py-32 border-t border-[#E4E4DE] px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto space-y-14">
            <div className="max-w-[850px] mx-auto text-center">
              <p className="text-2xl sm:text-3xl font-semibold text-[#181818] leading-snug">
                “We measure success in time returned to your mission — not in how much AI we deploy.”
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Free of charge",
                  desc: "All our pilot work and public tools are provided completely free for registered nonprofits.",
                },
                {
                  title: "Human oversight",
                  desc: "AI prepares drafts and organizes data, but your team retains the final decision on everything.",
                },
                {
                  title: "Pragmatism first",
                  desc: "If a simple spreadsheet or existing free tool solves the problem, we will not build complicated software.",
                },
                {
                  title: "Responsible data",
                  desc: "Your organisation’s data is never sold, shared, or used to train third-party commercial models.",
                },
                {
                  title: "Open where possible",
                  desc: "Tools and learnings are published as open resources so the broader nonprofit sector benefits.",
                },
                {
                  title: "No lock-in",
                  desc: "Everything we build is designed to be easily maintained, exported, or transitioned to your team.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#E4E4DE] rounded-[14px] p-6 space-y-2 shadow-xs"
                >
                  <h3 className="text-base font-semibold text-[#181818]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666660] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= IMPACT ================= */}
        <section className="py-24 sm:py-32 border-t border-[#E4E4DE] px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto space-y-10">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181818]">
                Impact
              </h2>
            </div>
            <ImpactDashboard />
          </div>
        </section>

        {/* ================= APPLY ================= */}
        <section id="apply" className="py-24 sm:py-32 border-t border-[#E4E4DE] px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto space-y-10">
            <div className="text-center space-y-3 max-w-[650px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181818]">
                Tell us what slows you down.
              </h2>
              <p className="text-base text-[#666660] leading-relaxed">
                Describe one repetitive task that takes too much of your team&apos;s time.
              </p>
            </div>
            <ApplicationForm />
          </div>
        </section>

        {/* ================= VOLUNTEER ================= */}
        <section id="volunteer" className="py-24 sm:py-32 border-t border-[#E4E4DE] px-6 sm:px-8">
          <div className="max-w-[850px] mx-auto space-y-8">
            <div className="text-center space-y-3 max-w-[600px] mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181818]">
                Build with us.
              </h2>
              <p className="text-sm sm:text-base text-[#666660] leading-relaxed">
                We&apos;re looking for engineers, designers, product people and nonprofit professionals who want to contribute to practical technology for civil society.
              </p>
            </div>
            <VolunteerForm />
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E4E4DE] py-12 px-6 sm:px-8 bg-[#F7F7F4]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
          <div>
            <span className="font-bold text-lg text-[#181818]">Capacité</span>
            <p className="text-xs text-[#666660] mt-0.5">
              Free AI tools and automation for nonprofits.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#666660] font-medium">
            <a href="#why-capacite" className="hover:text-[#181818] transition-colors">
              About
            </a>
            <a href="#tools" className="hover:text-[#181818] transition-colors">
              Tools
            </a>
            <a href="#how-it-works" className="hover:text-[#181818] transition-colors">
              How it works
            </a>
            <a href="#volunteer" className="hover:text-[#181818] transition-colors">
              Volunteer
            </a>
            <a href="#apply" className="hover:text-[#181818] transition-colors">
              Apply
            </a>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-[#E4E4DE] text-xs text-[#666660] text-center sm:text-left">
          © 2026 Capacité. An independent public-interest initiative.
        </div>
      </footer>
    </>
  );
}

