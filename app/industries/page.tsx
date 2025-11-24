"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Building2, Headphones, Shield, Stethoscope } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: Headphones,
    title: "Customer Support & CX",
    bullets: [
      "Give agents AI summaries of every call, policy, and workaround.",
      "Deflect tickets with self-serve knowledge feeds.",
      "Surface playbooks for escalations in seconds.",
    ],
  },
  {
    icon: Building2,
    title: "Field & Operations Teams",
    bullets: [
      "Standardize procedures across regions and partners.",
      "Capture field notes from mobile in offline-friendly flows.",
      "Share lessons learned through living playbooks.",
    ],
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Life Sciences",
    bullets: [
      "Keep training, compliance, and SOPs synchronized across clinics.",
      "Protect PHI with granular access policies.",
      "Feed RAG chatbots with curated clinical knowledge.",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    bullets: [
      "Maintain audit-ready trails of knowledge changes.",
      "Control who can view sensitive runbooks or incident reports.",
      "Guide teams through crisis response with live checklists.",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
            Industries
          </p>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Tailored knowledge for every frontline
          </h1>
          <p className="text-slate-300 text-lg">
            Whether it’s regulated procedures or client tribal knowledge,
            HeroHive adapts to your workflows so every decision is grounded in
            the latest intelligence.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="p-8 rounded-2xl border border-slate-800 bg-slate-950/70 hover:border-amber-400/60 hover:shadow-[0_20px_45px_rgba(15,23,42,0.45)] transition-all duration-300"
            >
              <industry.icon className="w-10 h-10 text-amber-400 mb-5" />
              <h3 className="text-2xl font-semibold text-amber-200">
                {industry.title}
              </h3>
              <ul className="mt-5 space-y-3 text-slate-300 text-sm leading-relaxed">
                {industry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-amber-300">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 border-t border-slate-800 bg-slate-950/70">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-amber-200">
            Ready to bring HeroHive to your industry?
          </h2>
          <p className="text-slate-300">
            We’ll map your roles, compliance requirements, and existing docs to
            launch your knowledge hive in days—not months.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              asChild
              className="rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-3"
            >
              <Link href="/contact">Talk to our team</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full border border-amber-400 text-amber-300 hover:bg-amber-500/20 hover:text-amber-50 px-8 py-3"
            >
              <Link href="/get-started">Launch a pilot</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
