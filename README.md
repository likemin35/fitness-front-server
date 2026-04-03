# fitness-front-server

체력 정보 입력부터 운동 추천 결과 확인, 주변 운동 시설 탐색까지 이어지는 사용자 화면을 제공하는 React 프론트엔드입니다.  
현재 로컬 개발 환경에서는 FastAPI AI 서버를 직접 호출하도록 구현되어 있습니다.

## Deployment

- AWS CloudFront로 배포
- 운영 주소: [http://d3qp27rgd1nnd.cloudfront.net](http://d3qp27rgd1nnd.cloudfront.net)

## Overview

- React 기반 단일 페이지 애플리케이션
- 체력 정보 입력 화면 제공
- 추천 운동 결과 및 유사 사용자 루틴 시각화
- 주소 기반 운동 시설 추천 화면 제공

## Tech Stack

- React 19
- React Router DOM 7
- Axios
- Create React App

## Routes

- `/`
  - 메인 랜딩 화면
- `/input`
  - 나이, 성별, 키, 몸무게 입력
- `/loading`
  - 추천 결과 로딩 화면
- `/result`
  - 추천 운동, 유사 사용자 루틴 확인
- `/facility`
  - 주소와 시설 유형 기반 시설 추천

## API Connection

기본 API 클라이언트는 `src/api/axiosClient.js`에 있습니다.

- 로컬 개발 환경
  - `http://localhost:8000`
- 배포 환경
  - `https://d3qp27rgd1nnd.cloudfront.net`

즉, 현재 프론트는 백엔드 `8080`이 아니라 AI 서버 `8000`을 직접 호출합니다.

## Run

```bash
npm install
npm start
```

개발 서버:

- `http://localhost:3000`

프로덕션 빌드:

```bash
npm run build
```

## Main API Usage

- `POST /api/recommend/fitness`
  - 사용자 체력 정보로 운동 추천 요청
- `POST /api/recommend/facility`
  - 주소, 시설 유형, 표시 개수로 시설 추천 요청

## Project Structure

```text
src/
  api/         Axios 클라이언트와 API 함수
  components/  공통 레이아웃, 입력 컴포넌트, 지도 컴포넌트
  pages/       페이지 단위 화면
  styles/      페이지/컴포넌트 스타일
```

## Screen Flow

1. 홈 화면에서 진단 시작
2. 체력 정보 입력 후 운동 추천 요청
3. 로딩 화면을 거쳐 결과 화면 이동
4. 추천 운동과 유사 사용자 루틴 확인
5. 시설 찾기 화면에서 주소와 시설 조건 입력 후 주변 시설 조회

## Notes

- 로컬 실행 전 AI 서버가 `http://localhost:8000`에서 먼저 떠 있어야 합니다.
- 운영 프론트는 CloudFront 배포 주소 `http://d3qp27rgd1nnd.cloudfront.net`로 접속합니다.
- 통합 백엔드 서버를 사용하려면 `src/api/axiosClient.js`의 base URL을 백엔드 주소에 맞게 변경해야 합니다.
