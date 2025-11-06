"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl font-bold text-amber-400 mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-8">
          We'd love to hear from you. Fill out the form below and we'll get back to you soon.
        </p>

       {submitted ? (
  <div className="bg-amber-500/10 border border-amber-400/30 rounded-md p-6 text-center">
    <p className="text-amber-300">✅ Message sent successfully! We’ll reply shortly. Thank you!</p>
  </div>
) : (
 <form
  className="space-y-4"
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/mnnoeppe", { 
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form),
      });

if (res.ok) {
  // optional: clear fields safely
  const nameInput = form.querySelector('[name="name"]') as HTMLInputElement | null;
  const emailInput = form.querySelector('[name="email"]') as HTMLInputElement | null;
  const messageInput = form.querySelector('[name="message"]') as HTMLTextAreaElement | null;

  if (nameInput) nameInput.value = "";
  if (emailInput) emailInput.value = "";
  if (messageInput) messageInput.value = "";

  // show success message
  setSubmitted(true);
}

    } catch (err) {
      alert("Network error. Please try again.");
    }
  }}
>
  {/* Optional hidden helpers */}
  <input type="hidden" name="_subject" value="New message from HeroHive" />
  <input type="text" name="_gotcha" className="hidden" />

  <Input
    name="name"
    placeholder="Your Name"
    required
    className="bg-zinc-900 border-zinc-700"
  />
  <Input
    name="email"
    type="email"
    placeholder="Your Email"
    required
    className="bg-zinc-900 border-zinc-700"
  />
  <Textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    required
    className="bg-zinc-900 border-zinc-700"
  />
  <Button
    type="submit"
    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
  >
    Send Message
  </Button>
</form>

)}
      </div>
    </main>
  );
}
