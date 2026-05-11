import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChampForge | 포켓몬 챔피언스 배틀 워크벤치",
  description: "포켓몬 챔피언스 상급자를 위한 팀 빌더, 데미지 계산기, 카운터 추천 프로토타입",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
