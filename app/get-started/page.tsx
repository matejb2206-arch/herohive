"use client";

import React, { useState } from "react"; // ✅ add React here
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", goals: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl font-bold text-amber-400 mb-4">Get Started with HeroHive</h1>
        <p className="text-gray-400 mb-8">
          Tell us a bit about your team, and we’ll help you start capturing and sharing knowledge effortlessly.
        </p>

        {submitted ? (
          <div className="bg-amber-500/10 border border-amber-400/30 rounded-md p-6 text-center">
            <p className="text-amber-300">
              ✅ Thanks for your interest! Our team will reach out shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Work Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700"
            />
            <Input
              name="company"
              placeholder="Company or Team"
              value={formData.company}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700"
            />
            <Textarea
              name="goals"
              placeholder="What do you hope to achieve with HeroHive?"
              rows={4}
              value={formData.goals}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700"
            />
            <Button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
            >
              Request Demo
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}
