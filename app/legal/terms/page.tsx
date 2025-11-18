"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-amber-400">Terms &amp; Data Protection</h1>
        <p className="text-gray-300">
          These demo terms summarize how we protect your data in Switzerland and the EU (GDPR). For the full agreement that applies to paying customers, please contact us.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-amber-300">1. Purpose</h2>
          <p className="text-gray-300">
            This demo environment is for evaluation only. Do not upload production, sensitive, or personal data beyond the fields shown on onboarding.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-amber-300">2. Data Minimization</h2>
          <p className="text-gray-300">
            We collect only demo inputs (email, company, password for session) to provision access. Data is stored in regions compliant with Swiss FADP and EU GDPR.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-amber-300">3. Security</h2>
          <p className="text-gray-300">
            We apply standard security controls for demos, including encrypted transport (TLS) and secrets management. No customer-uploaded content is retained after the demo unless you convert to a paid plan.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-amber-300">4. Rights</h2>
          <p className="text-gray-300">
            You may request correction or deletion of demo data. For GDPR data subject rights or Swiss FADP inquiries, contact privacy@herohive.app.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-amber-300">5. Cookies &amp; Analytics</h2>
          <p className="text-gray-300">
            Any analytics are limited to basic usage to improve the demo experience. No tracking for advertising is performed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-amber-300">6. Contact</h2>
          <p className="text-gray-300">
            For detailed terms, DPAs, or to enable a production environment, please{" "}
            <Link href="/contact" className="text-amber-300 underline hover:text-amber-200">
              contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
