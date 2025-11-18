import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/auth";

// Cast to satisfy NextAuth overload typing across versions
const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };
