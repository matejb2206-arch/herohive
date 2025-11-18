import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultSession["user"] & {
      company?: string | null;
    };
  }

  interface User {
    company?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    company?: string | null;
  }
}
