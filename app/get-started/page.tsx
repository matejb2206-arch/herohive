"use client";

import React, { useMemo, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Navbar } from "@/components/navbar";

const isValidEmail = (email: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

export default function GetStartedPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "", company: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [robotChecked, setRobotChecked] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const isPasswordStrong = useMemo(() => form.password.length >= 8, [form.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const nextErrors: string[] = [];
    if (!isValidEmail(form.email)) {
      nextErrors.push("Use a valid email address.");
    }
    if (!isPasswordStrong) {
      nextErrors.push("Password must be at least 8 characters.");
    }
    if (form.password !== form.confirmPassword) {
      nextErrors.push("Passwords must match.");
    }
    if (!robotChecked) {
      nextErrors.push("Please confirm you are not a robot.");
    }
    if (!form.company.trim()) {
      nextErrors.push("Company name is required.");
    }
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length) {
      setErrors(validationErrors);
      return;
    }
    setErrors([]);
    setSubmitting(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email.trim(),
      password: form.password,
      company: form.company.trim(),
    });

    setSubmitting(false);
    if (res?.ok) {
      router.push("/demo");
      return;
    }
    setErrors(["Unable to start demo right now. Please try again or sign in."]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-6 py-16 flex-1">
        <div className="max-w-md w-full space-y-6 text-center">
          <h1 className="text-3xl font-bold text-amber-400">
            Create your HeroHive Account
          </h1>
          <p className="text-gray-400 text-sm">
            Start your free demo and see how HeroHive helps teams capture and share knowledge effortlessly.
          </p>

          {errors.length > 0 && (
            <div className="rounded-lg border border-red-500/60 bg-red-500/10 text-left p-3 text-sm text-red-200">
              <ul className="list-disc pl-4 space-y-1">
                {errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700"
            />

            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create Password (min 8 characters)"
                required
                value={form.password}
                onChange={handleChange}
                className="bg-zinc-900 border-zinc-700 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-amber-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <Input
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter Password"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="bg-zinc-900 border-zinc-700 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-amber-400"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <Input
              name="company"
              placeholder="Company Name"
              required
              value={form.company}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700"
            />

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input
                type="checkbox"
                checked={robotChecked}
                onChange={(e) => setRobotChecked(e.target.checked)}
                className="accent-amber-500"
                required
              />
              <span>I&apos;m not a robot (captcha placeholder)</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" required className="accent-amber-500" />
              <span>
                I agree to the{" "}
                <Link href="/legal/terms" className="text-amber-400 hover:underline">
                  Terms &amp; Data Protection (CH/EU)
                </Link>
              </span>
            </div>

            <Button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
              disabled={submitting}
            >
              {submitting ? "Starting Demo..." : "Start Demo"}
            </Button>
          </form>

          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-amber-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
