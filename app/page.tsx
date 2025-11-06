"use client"
import Link from "next/link";

import { Navbar } from "../components/navbar"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Home() {
  // Add parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY * 0.3 // Adjust scroll depth here (lower = slower)
      document.documentElement.style.setProperty("--scroll-offset", `${scrollY}px`)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50">
      <Navbar />

  <section
  id="hero"
  className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden"
>
{/* Honeycomb background with parallax effect */}
<div
  className="absolute inset-0 bg-cover bg-center pointer-events-none will-change-transform"
  style={{
    backgroundImage: "linear-gradient(to bottom right, rgba(255, 191, 0, 0.15), rgba(255, 136, 0, 0.08)), url('/honeycomb-tilted.png')",
    backgroundBlendMode: "overlay",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "brightness(0.85) contrast(0.95) ",
    transform: "translateY(var(--scroll-offset, 0px))",
    transition: "transform 0.1s ease-out",
  }}
/>
  {/* Dark overlay to make text readable */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/75 to-[#0f172a]/9"></div>

  {/* Text and buttons */}
  <div className="relative max-w-2xl space-y-6 z-10">
    <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
      Transform your team’s knowledge into a living hive of insights.
    </h1>

    <p className="text-lg text-slate-300">
      HeroHive helps teams capture, structure, and share their knowledge —
      so nothing gets lost when people leave, switch projects, or documents pile up.
    </p>

<div className="flex justify-center gap-4 mt-8">
  <Button 
    asChild
  className="rounded-full px-6 py-3 font-semibold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 shadow-md hover:shadow-amber-500/30 transition-all duration-300"
>
  <Link href="/get-started">Get Started</Link>
  </Button>

  <Button
  asChild
  variant="outline"
  className="rounded-full px-6 py-3 font-semibold border border-amber-400 text-amber-300 bg-transparent hover:bg-amber-500/20 hover:text-amber-200 hover:border-amber-300 shadow-md hover:shadow-amber-500/30 transition-all duration-300"
>
  {/* Must be ONE element only — no text outside */}
  <Link href="/contact">Contact&nbsp;Us</Link>
  </Button>
</div>

  </div>
</section>



<section id="features" className="relative py-24 bg-slate-950 text-slate-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
      Powerful Features for Smarter Knowledge Sharing
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          icon: "📄",
          title: "Upload & Capture",
          text: "Add documents, notes, transcripts, or even voice-to-text — all in one place.",
        },
        {
          icon: "🔍",
          title: "Smarter Search",
          text: "Quickly find key insights with AI-powered search, filters, and instant answers.",
        },
        {
          icon: "🤝",
          title: "Shared Knowledge Base",
          text: "One organized source of truth for your entire company.",
        },
        {
          icon: "🔐",
          title: "Safe Collaboration",
          text: "Secure access controls and team sessions for peace of mind.",
        },
      ].map((f) => (
        <div
          key={f.title}
          className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)] transition-all duration-300"
        >
          <div className="text-4xl mb-4">{f.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-amber-400">{f.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{f.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section
  id="how-it-works"
  className="relative py-28 bg-slate-900 text-slate-50 border-t border-slate-800"
>
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
      How HeroHive Works
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {[
        {
          icon: "📝",
          title: "1. Capture",
          text: "Upload documents, notes, or transcripts — HeroHive automatically organizes your knowledge for you.",
        },
        {
          icon: "🧩",
          title: "2. Organize",
          text: "Our AI highlights key insights, tags topics, and connects related data to make retrieval instant.",
        },
        {
          icon: "🚀",
          title: "3. Share",
          text: "Easily share with your team, control access levels, and keep your knowledge base always up to date.",
        },
      ].map((step, index) => (
        <div
          key={step.title}
          className="relative p-8 bg-slate-950/60 border border-slate-800 rounded-xl shadow-sm hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-all duration-300"
        >
          <div className="text-5xl mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-amber-400">
            {step.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">{step.text}</p>

          {/* subtle connector line */}
          {index < 2 && (
            <div className="hidden md:block absolute top-1/2 right-[-40px] w-[60px] h-[1px] bg-gradient-to-r from-amber-500/30 to-transparent"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


<section id="industries" className="relative py-24 bg-slate-950 text-slate-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
      Industries We Help
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          icon: "💬",
          title: "Customer Support Teams",
          text: "Empower support agents with instant access to troubleshooting and company knowledge.",
        },
        {
          icon: "⚖️",
          title: "Law Firms & Consultancies",
          text: "Keep case files, templates, and client notes organized for faster onboarding and reviews.",
        },
        {
          icon: "🏭",
          title: "Manufacturing Teams",
          text: "Capture standard procedures and insights to reduce downtime and production errors.",
        },
        {
          icon: "📡",
          title: "Telecom Field Agents",
          text: "Give technicians quick access to manuals, setup guides, and safety checklists on the go.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-all duration-300"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold mb-2 text-amber-400">{item.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section id="about" className="relative py-28 bg-slate-900 text-slate-50 border-t border-slate-800">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Text content */}
    <div className="space-y-6 text-center md:text-left">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
        About HeroHive
      </h2>
      <p className="text-slate-300 text-lg leading-relaxed">
        HeroHive helps teams of every size capture, share, and grow their collective knowledge.  
        From customer support to field operations, HeroHive transforms scattered information  
        into a living, searchable knowledge base — secure, collaborative, and always evolving.
      </p>
      <a
        href="#"
        className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-amber-500/30 transition-all duration-300"
      >
        Get Started
      </a>
    </div>

    {/* Right: Decorative image placeholder */}
    <div className="relative flex justify-center md:justify-end">
      <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-amber-400/20 to-amber-600/10 rounded-3xl border border-amber-500/20 shadow-[0_0_30px_rgba(251,191,36,0.1)] flex items-center justify-center">
        <span className="text-6xl">🐝</span>
      </div>
    </div>
  </div>
</section>

<footer className="bg-gray-900 text-gray-300 py-10 mt-20">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
    <p className="text-sm">
      © {new Date().getFullYear()} HeroHive. All rights reserved.
    </p>

    <div className="flex gap-6 text-sm">
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Terms</a>
      <a href="#" className="hover:text-white">Contact</a>
    </div>
  </div>
</footer>

    </main>
  )
}
