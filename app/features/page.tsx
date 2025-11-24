"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  BrainCircuit,
  Layers,
  NotebookPen,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const featureCards = [
  {
    icon: NotebookPen,
    title: "Capture Anything",
    body: "Upload docs, SOPs, call transcripts, or handwritten notes. HeroHive normalizes every format into a structured record.",
  },
  {
    icon: BrainCircuit,
    title: "RAG-ready context",
    body: "Automatic tagging, embedding, and surfacing of insights so your Retrieval-Augmented Chat is grounded in reality.",
  },
  {
    icon: Layers,
    title: "Living Workflows",
    body: "Create playbooks and knowledge maps that adapt as teams contribute. No more stale wikis.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Control",
    body: "Role-based access, audit trails, and region-aware storage keep compliance teams happy.",
  },
];

const differentiators = [
  {
    icon: Sparkles,
    heading: "AI copilots that stay sharp",
    copy: "HeroHive keeps embeddings fresh, so sales, support, and ops teams get answers sourced from the latest field intel.",
  },
  {
    icon: Workflow,
    heading: "Connected knowledge graph",
    copy: "Link topics, teams, and customers to see who knows what—and spot gaps before they become blockers.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
            Platform features
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Built for teams that trade in knowledge
          </h1>
          <p className="text-slate-300 text-lg">
            Every surface in HeroHive is tuned for clarity: structured capture,
            AI search, and collaborative playbooks that keep partners, field
            reps, and HQ aligned.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              asChild
              className="rounded-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 shadow-[0_12px_30px_rgba(251,191,36,0.2)] hover:translate-y-[-2px] transition"
            >
              <Link href="/get-started">Start capturing knowledge</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full border border-amber-400 text-amber-300 hover:bg-amber-500/20 hover:text-amber-50 px-8 py-3 transition"
            >
              <Link href="/contact">Book a walkthrough</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-950 border-t border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCards.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/60 hover:shadow-[0_0_35px_rgba(251,191,36,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <feature.icon className="w-10 h-10 text-amber-400 mb-6" />
              <h3 className="text-xl font-semibold text-amber-200 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid gap-10">
          {differentiators.map((item) => (
            <article
              key={item.heading}
              className="flex flex-col sm:flex-row gap-6 p-8 border border-slate-800 rounded-2xl bg-slate-900/60 hover:border-amber-400/50 transition-all duration-300"
            >
              <div className="shrink-0">
                <item.icon className="w-12 h-12 text-amber-400" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-amber-200 mb-3">
                  {item.heading}
                </h4>
                <p className="text-slate-300 leading-relaxed">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
