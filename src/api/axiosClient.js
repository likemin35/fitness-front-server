import axios from "axios";

// 개발 환경(localhost)인지 배포 환경(CloudFront)인지 판단
const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

// CloudFront 도메인 (예: https://d3qp27rgd1nnd.cloudfront.net)
const CLOUDFRONT_URL = "https://d3qp27rgd1nnd.cloudfront.net";

const axiosClient = axios.create({
  baseURL: isLocal
    ? "http://localhost:8000"      // 로컬 개발 시 FastAPI
    : CLOUDFRONT_URL,     // 배포 환경 → CloudFront → FastAPI Origin
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
