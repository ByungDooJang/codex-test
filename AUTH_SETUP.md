# ChampForge OAuth 로그인 설정

이 프로젝트는 Auth.js 기반으로 Google과 Kakao 로그인을 사용한다.

## 1. 환경변수 만들기

`.env.example`을 기준으로 `.env.local`을 만들고 값을 채운다.

```bash
AUTH_SECRET="..."
AUTH_URL="http://localhost:3000"

AUTH_GOOGLE_ID="..."
AUTH_GOOGLE_SECRET="..."

AUTH_KAKAO_ID="..."
AUTH_KAKAO_SECRET="..."
```

`AUTH_SECRET`은 아래 명령으로 만들 수 있다.

```bash
npx auth secret
```

## 2. Google OAuth 콜백

Google Cloud Console의 OAuth Client에 다음 개발 콜백 URL을 등록한다.

```text
http://localhost:3000/api/auth/callback/google
```

배포 후에는 도메인에 맞춰 아래 형식도 추가한다.

```text
https://YOUR_DOMAIN/api/auth/callback/google
```

## 3. Kakao OAuth 콜백

Kakao Developers 콘솔에서 Kakao Login을 활성화하고 Web 플랫폼을 설정한다.

개발 콜백 URL은 다음과 같다.

```text
http://localhost:3000/api/auth/callback/kakao
```

배포 후에는 도메인에 맞춰 아래 형식도 추가한다.

```text
https://YOUR_DOMAIN/api/auth/callback/kakao
```

Kakao의 `AUTH_KAKAO_ID`는 REST API 키를 사용하고, `AUTH_KAKAO_SECRET`은 Kakao Login 보안 메뉴의 Client Secret을 사용한다.

## 4. 현재 구현 범위

현재는 JWT 세션 기반 로그인만 연결되어 있다. DB 저장은 아직 연결하지 않았다.

다음 단계에서 해야 할 일은 다음과 같다.

- Prisma 또는 다른 DB 어댑터 연결.
- 로그인 유저별 Team 저장 모델 추가.
- 파티 저장 버튼을 실제 서버 액션 또는 API에 연결.
