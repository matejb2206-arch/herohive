import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default async function DemoPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/signin");
  }

  const company = session.user.company || "Your company";
  const email = session.user.email || "Demo User";

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-6 py-16 flex-1">
        <div className="max-w-2xl w-full text-center space-y-6">
          <h1 className="text-4xl font-bold text-amber-400">
            Welcome to your HeroHive Demo Workspace 🐝
          </h1>

          <p className="text-gray-400 text-lg">
            This is your preview of how teams use HeroHive to capture and share knowledge effortlessly. You can imagine documents, AI summaries, and team spaces appearing here in a real account.
          </p>

          <p className="text-gray-400">
            Signed in as{" "}
            <span className="text-amber-400 font-medium">{email}</span> ·{" "}
            <span className="text-amber-300 font-medium">{company}</span>
          </p>

          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 mt-6 text-left space-y-4">
            <p className="text-amber-400 font-semibold text-sm uppercase">
              Example Team Spaces
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>📄 Customer Support SOPs</li>
              <li>🛠 Troubleshooting Knowledge Base</li>
              <li>🤖 AI-Generated Training Notes</li>
              <li>🧭 Onboarding & Field Guides</li>
            </ul>
          </div>

          <div className="bg-slate-800/40 border border-amber-500/40 rounded-xl p-6 mt-4 text-left space-y-3">
            <p className="text-amber-400 font-semibold text-sm uppercase">
              RAG Chat (coming soon)
            </p>
            <p className="text-gray-300 text-sm">
              We&apos;ll wire your documents to a Retrieval-Augmented Generation chatbot so you can ask questions and get grounded answers with source citations. This section is ready to connect once the data pipeline and index are in place.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-2 text-amber-300 hover:text-amber-200 text-sm underline"
            >
              Talk to us about enabling RAG in your demo →
            </Link>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <form action="/api/auth/signout" method="post">
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full"
              >
                Log Out
              </button>
            </form>

            <Link
              href="/"
              className="border border-amber-400 text-amber-400 hover:bg-amber-500/20 rounded-full px-6 py-3"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
