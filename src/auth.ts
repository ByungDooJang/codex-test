// Google과 Kakao OAuth Provider를 설정하는 Auth.js 진입점
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google, Kakao],
  secret:
    process.env.AUTH_SECRET ??
    (process.env.NODE_ENV === "development" ? "champforge-development-auth-secret" : undefined),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
});
