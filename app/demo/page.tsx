import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function DemoPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-amber-400">
          Welcome to your HeroHive Demo Workspace 🐝
        </h1>

        <p className="text-gray-400 text-lg">
          This is your preview of how teams use HeroHive to capture and share
          knowledge effortlessly. You can imagine documents, AI summaries, and
          team spaces appearing here in a real account.
        </p>

        <p className="text-gray-400">
          Signed in as{" "}
          <span className="text-amber-400 font-medium">
            {session?.user?.email || "Demo User"}
          </span>
        </p>

        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 mt-6 text-left space-y-4">
          <p className="text-amber-400 font-semibold text-sm uppercase">
            Example Team Spaces
          </p>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>📄 Customer Support SOPs</li>
            <li>🧠 Troubleshooting Knowledge Base</li>
            <li>💬 AI-Generated Training Notes</li>
            <li>🚀 Onboarding & Field Guides</li>
          </ul>
        </div>

        {/* Buttons Section */}
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
  );
}
