"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Hammer,
  Home,
  Menu,
  Ruler,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

const pins = [
  { src: "/images/living-room.jpg", label: "거실 완공", className: "tall" },
  { src: "/images/site-progress.jpg", label: "목공 현장", className: "mid" },
  { src: "/images/kitchen-finish.jpg", label: "주방 리뉴얼", className: "tall" },
  { src: "/images/material-board.jpg", label: "자재 보드", className: "square" },
  { src: "/images/bath-detail.jpg", label: "욕실 디테일", className: "tall" },
  { src: "/images/before-after.jpg", label: "전후 비교", className: "wide" },
  { src: "/images/team-onsite.jpg", label: "현장 관리", className: "mid" },
  { src: "/images/hero-completed.jpg", label: "입주 스타일링", className: "wide" },
];

const services = [
  {
    icon: Home,
    title: "주거 전체 리모델링",
    body: "동선, 수납, 조명 계획을 한 번에 정리해 거주자의 생활 패턴에 맞는 집을 만듭니다.",
  },
  {
    icon: Ruler,
    title: "부분 시공과 스타일링",
    body: "주방, 욕실, 거실처럼 체감이 큰 공간부터 자재와 가구 배치까지 밀도 있게 다듬습니다.",
  },
  {
    icon: Hammer,
    title: "현장 감리와 마감 체크",
    body: "공정표, 사진 리포트, 하자 체크리스트로 공사 중간의 불안을 줄입니다.",
  },
];

const process = ["상담", "실측", "디자인 제안", "시공", "입주 점검"];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <nav className="nav" aria-label="주요 메뉴">
        <button className="iconButton menuButton" aria-label="메뉴 열기">
          <Menu size={22} />
        </button>
        <a className="brand" href="#top" aria-label="온하우스 홈">
          <span className="brandMark">O</span>
          <span>ONHOUSE</span>
        </a>
        <div className="searchBar" aria-label="시공 사례 검색">
          <Search size={18} />
          <span>공간, 평형, 스타일 검색</span>
        </div>
        <div className="navLinks">
          <a href="#work">시공사례</a>
          <a href="#process">진행방식</a>
          <a href="#quote">견적문의</a>
          <button className="ghostButton" onClick={() => setModalOpen(true)}>
            로그인
          </button>
        </div>
        <button className="primaryButton stickyCta" onClick={() => setModalOpen(true)}>
          상담 예약
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">서울·경기 주거 인테리어</p>
          <h1>사진처럼 남는 집을, 공정표대로 완성합니다</h1>
          <p className="heroBody">
            온하우스는 상담, 설계, 시공, 입주 스타일링까지 한 팀이 책임지는
            주거 리모델링 스튜디오입니다.
          </p>
          <div className="heroActions">
            <button className="primaryButton" onClick={() => setModalOpen(true)}>
              무료 상담 시작
            </button>
            <a className="secondaryButton" href="#work">
              시공 사진 보기
            </a>
          </div>
        </div>
        <div className="heroImageWrap">
          <Image
            src="/images/hero-completed.jpg"
            alt="완공된 거실 인테리어"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 54vw"
            className="heroImage"
          />
          <span className="photoPill">32평 아파트 완공</span>
        </div>
      </section>

      <section className="categoryBand" aria-label="서비스 요약">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article className="categoryTile" key={service.title}>
              <span className="tileIcon">
                <Icon size={22} />
              </span>
              <h2>{service.title}</h2>
              <p>{service.body}</p>
            </article>
          );
        })}
      </section>

      <section className="featureSection">
        <div className="featureText">
          <p className="eyebrow">Design to Build</p>
          <h2>예쁜 제안보다 중요한 건, 완성 가능한 설계입니다</h2>
          <p>
            예산 안에서 가능한 자재를 먼저 고르고, 현장 실측 기준으로 도면을
            조정합니다. 공사 중 바뀌는 내용은 사진과 체크리스트로 공유합니다.
          </p>
          <a className="tertiaryLink" href="#process">
            진행 방식 확인 <ArrowRight size={16} />
          </a>
        </div>
        <div className="featureImage">
          <Image src="/images/site-progress.jpg" alt="인테리어 공사 현장" fill sizes="(max-width: 900px) 100vw, 48vw" />
          <span className="photoPill">현장 리포트 제공</span>
        </div>
      </section>

      <section className="masonrySection" id="work">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>공간별 시공 사진</h2>
          </div>
          <div className="chips" aria-label="필터">
            <span className="chip active">전체</span>
            <span className="chip">거실</span>
            <span className="chip">주방</span>
            <span className="chip">욕실</span>
          </div>
        </div>
        <div className="masonryGrid">
          {pins.map((pin) => (
            <article className={`pinCard ${pin.className}`} key={pin.src}>
              <Image src={pin.src} alt={pin.label} fill sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              <span className="photoPill">{pin.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="splitFeature">
        <div className="beforeAfter">
          <Image src="/images/before-after.jpg" alt="주방 인테리어 전후 비교" fill sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
        <div className="featureText">
          <p className="eyebrow">Before to After</p>
          <h2>생활감은 줄이고, 수납과 조도를 먼저 세웁니다</h2>
          <p>
            오래된 구조를 무작정 가리지 않습니다. 배관, 전기, 가구 치수를 먼저
            정리한 뒤 매일 쓰는 동선이 편한 방향으로 마감합니다.
          </p>
          <ul className="checkList">
            <li><Check size={18} /> 공간별 예산표 제공</li>
            <li><Check size={18} /> 공정별 사진 리포트</li>
            <li><Check size={18} /> 입주 전 하자 점검</li>
          </ul>
        </div>
      </section>

      <section className="processSection" id="process">
        <div className="sectionHeader compact">
          <div>
            <p className="eyebrow">Process</p>
            <h2>상담부터 입주까지 한 흐름으로</h2>
          </div>
          <ClipboardList size={32} />
        </div>
        <ol className="processList">
          {process.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </section>

      <section className="quoteStrip" id="quote">
        <div>
          <p className="eyebrow">Start Project</p>
          <h2>우리 집 평형과 예산에 맞는 첫 견적을 받아보세요</h2>
        </div>
        <button className="primaryButton large" onClick={() => setModalOpen(true)}>
          상담 예약하기
        </button>
      </section>

      <footer className="footer">
        <div className="footerBrand">
          <span className="brandMark">O</span>
          <strong>ONHOUSE</strong>
          <p>© 2026 온하우스 인테리어</p>
        </div>
        <div>
          <strong>서비스</strong>
          <a>아파트 리모델링</a>
          <a>주방·욕실 시공</a>
          <a>입주 스타일링</a>
        </div>
        <div>
          <strong>문의</strong>
          <a>hello@onhouse.kr</a>
          <a>02-000-2026</a>
          <a>서울 성동구</a>
        </div>
        <div>
          <strong>안심 계약</strong>
          <a><ShieldCheck size={15} /> 표준 계약서</a>
          <a>공정표 공유</a>
          <a>A/S 체크리스트</a>
        </div>
      </footer>

      {modalOpen ? (
        <div className="modalLayer" role="dialog" aria-modal="true" aria-label="상담 예약">
          <div className="modalCard">
            <button className="modalClose" onClick={() => setModalOpen(false)} aria-label="닫기">
              <X size={22} />
            </button>
            <h2>상담 예약</h2>
            <p>평형, 지역, 희망 공사 범위를 남겨주시면 1영업일 안에 연락드립니다.</p>
            <label>
              이름
              <input placeholder="홍길동" />
            </label>
            <label>
              연락처
              <input placeholder="010-0000-0000" />
            </label>
            <label>
              공사 범위
              <input placeholder="예: 32평 전체 리모델링" />
            </label>
            <button className="primaryButton full" onClick={() => setModalOpen(false)}>
              상담 요청 보내기
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
