"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Rocket, UsersRound } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: UsersRound,
    title: "People-first knowledge",
    body: "HeroHive democratizes intelligence across roles, making it simple for any teammate to contribute and learn.",
  },
  {
    icon: Rocket,
    title: "Momentum over noise",
    body: "We obsess over clarity, reducing meetings and tribal bottlenecks by keeping context where work happens.",
  },
  {
    icon: HeartHandshake,
    title: "Trustworthy AI",
    body: "Every AI interaction is traceable to its sources, so leaders can rely on answers in regulated environments.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/15 to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
            About HeroHive
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            We turn collective wisdom into your competitive edge
          </h1>
          <p className="text-slate-300 text-lg">
            Founded by ops leaders and AI architects, HeroHive helps companies
            capture the best thinking from every mission so teams can move with
            confidence.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button
              asChild
              className="rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3 font-semibold"
            >
              <Link href="/contact">Meet the team</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full border border-amber-400 text-amber-300 hover:bg-amber-500/20 hover:text-amber-50 px-8 py-3"
            >
              <Link href="/get-started">Explore the platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-950 border-y border-slate-800">
        <div className="max-w-5xl mx-auto grid gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col sm:flex-row gap-4 p-8 border border-slate-800 rounded-2xl bg-slate-900/70 hover:border-amber-400/60 transition-all duration-300"
            >
              <value.icon className="w-10 h-10 text-amber-400" />
              <div>
                <h3 className="text-2xl font-semibold text-amber-200">
                  {value.title}
                </h3>
                <p className="text-slate-300 mt-2 leading-relaxed">
                  {value.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/70 space-y-4">
            <h2 className="text-3xl font-bold text-amber-200">
              A hive built for builders
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We&apos;ve led customer operations, revenue enablement, and AI
              platform teams. HeroHive is the tool we wanted—a single place to
              orchestrate knowledge, feed RAG copilots, and keep people aligned
              when the pace accelerates.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 space-y-4">
            <h3 className="text-xl font-semibold text-amber-200">
              Where we&apos;re heading
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li>• Deep integrations with CRM, ITSM, and PLG tooling.</li>
              <li>• Auto-curated briefings for every customer or incident.</li>
              <li>• Governance and analytics that prove knowledge ROI.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
