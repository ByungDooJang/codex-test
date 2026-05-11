import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "온하우스 인테리어 | 주거 리모델링 랜딩",
  description: "상담부터 시공, 스타일링까지 한 번에 진행하는 주거 인테리어 전문 업체 랜딩 페이지",
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
