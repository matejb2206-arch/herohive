"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenTool, PlugZap, Sparkles, Workflow } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: PenTool,
    title: "Capture",
    body: "Drop in files, transcripts, or quick notes. HeroHive enriches every item with tags, summaries, and suggested owners.",
  },
  {
    icon: Workflow,
    title: "Organize",
    body: "Connect entries to playbooks, customers, and teams. Visual knowledge maps keep everyone on the same page.",
  },
  {
    icon: PlugZap,
    title: "Activate",
    body: "Serve knowledge through RAG chat, CRM side panels, or partner portals—always with permissions enforced.",
  },
  {
    icon: Sparkles,
    title: "Improve",
    body: "Usage analytics and feedback loops highlight stale docs and surface what’s working in the field.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
            How it works
          </p>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Knowledge in, intelligence out
          </h1>
          <p className="text-slate-300 text-lg">
            HeroHive digitizes tribal knowledge and sends it back into your
            workflows—always contextual, always up to date.
          </p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-4 sm:flex-row items-start border border-slate-800 rounded-2xl p-6 bg-slate-950/70 hover:-translate-y-1 hover:border-amber-400/50 transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 text-xl font-semibold">
                  {index + 1}
                </div>
                <step.icon className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-amber-200">
                  {step.title}
                </h3>
                <p className="text-slate-300 mt-2">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 border-t border-slate-800 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-amber-200">
            Plug HeroHive into your go-to tools
          </h2>
          <p className="text-slate-300">
            Sync with Slack, Salesforce, Zendesk, and your data warehouse to
            keep humans and AI assistants operating from one hive mind.
          </p>
          <Button
            asChild
            className="rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-3 inline-flex items-center gap-2"
          >
            <Link href="/contact">
              Explore integrations <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
