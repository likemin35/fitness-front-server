import { useNavigate } from "react-router-dom";
import "../styles/MainHero.css";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero-text-wrapper">
        <p className="fade-text small-text">나에게 맞는 운동을 찾아주는,</p>
        <h1 className="fade-text big-text">AI 개인 운동 비서</h1>
      </div>

      {/*  진단 버튼 */}
      <button
        className="hero-button"
        onClick={() => navigate("/input")}
      >
        진단 받으러 가기
      </button>
    </div>
  );
}
