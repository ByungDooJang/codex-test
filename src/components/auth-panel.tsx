"use client";
// Google과 Kakao 로그인 상태를 표시하고 로그인 동작을 실행하는 패널

import { signIn, signOut, useSession } from "next-auth/react";
import { LogIn, LogOut, Save, UserRound } from "lucide-react";

export function AuthPanel() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="authPanel loading">세션 확인 중</div>;
  }

  if (session?.user) {
    return (
      <div className="authPanel signedIn">
        <div className="userBadge">
          <UserRound size={17} />
          <span>
            <strong>{session.user.name ?? "로그인 유저"}</strong>
            <small>{session.user.email ?? "OAuth session"}</small>
          </span>
        </div>
        <button className="loginButton compact" type="button">
          <Save size={16} />
          파티 저장
        </button>
        <button className="secondaryLoginButton" type="button" onClick={() => signOut()}>
          <LogOut size={16} />
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <div className="authPanel">
      <button className="loginButton" type="button" onClick={() => signIn("google")}>
        <LogIn size={17} />
        Google 로그인
      </button>
      <button className="kakaoButton" type="button" onClick={() => signIn("kakao")}>
        Kakao 로그인
      </button>
    </div>
  );
}
