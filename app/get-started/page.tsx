"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GetStartedPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", company: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // in real app you'd call signup API here
    console.log("Mock signup:", form);
    router.push("/demo");
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold text-amber-400">
          Create your HeroHive Account
        </h1>
        <p className="text-gray-400 text-sm">
          Start your free demo and see how HeroHive helps teams capture and share knowledge effortlessly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <Input
            name="email"
            type="email"
            placeholder="Work Email"
            required
            value={form.email}
            onChange={handleChange}
            className="bg-zinc-900 border-zinc-700"
          />
          <Input
            name="password"
            type="password"
            placeholder="Create Password"
            required
            value={form.password}
            onChange={handleChange}
            className="bg-zinc-900 border-zinc-700"
          />
          <Input
            name="company"
            placeholder="Company Name"
            required
            value={form.company}
            onChange={handleChange}
            className="bg-zinc-900 border-zinc-700"
          />
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <input type="checkbox" required className="accent-amber-500" />
            <span>
              I agree to the{" "}
              <Link href="#" className="text-amber-400 hover:underline">
                Terms and Conditions
              </Link>
            </span>
          </div>
          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
          >
            Start Demo
          </Button>
        </form>

        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="#" className="text-amber-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
