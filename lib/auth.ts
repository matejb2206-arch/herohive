import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const disallowedDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com"];

const isBusinessEmail = (email?: string | null) => {
  if (!email) return false;
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!pattern.test(email)) return false;
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  return !disallowedDomains.includes(domain) && domain.includes(".");
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        company: { label: "Company", type: "text" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password || "";
        const company = credentials?.company?.trim() || "Your company";

        if (!isBusinessEmail(email)) return null;
        if (password.length < 8) return null;

        return {
          id: email || "demo-user",
          name: company,
          email,
          company,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token as any).company = (user as any).company;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).company = (token as any).company;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 60,
  },
  jwt: {
    maxAge: 30 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
