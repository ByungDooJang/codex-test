"use client";
// 클라이언트 컴포넌트에서 세션 상태를 읽게 해주는 Provider

import { SessionProvider } from "next-auth/react";

export function AuthSessionProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
