import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/FitnessResultPage.css";

export default function FitnessResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const result = state?.data;
  const presNote = result?.pres_note;
  const exercises = result?.exercise_recommendation?.recommended_exercises || [];
  const similarUsers = result?.similar_users || [];

  const [showExercises, setShowExercises] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [showSimilar, setShowSimilar] = useState(false);

  const handleFacilityMove = () => {
    navigate("/facility", { state: { data: result } });
  };

  const formatPresNote = (note) => {
    if (!note) return [];
    return note
      .split(",")
      .map((v) => v.trim())
      .filter((v) => v.length > 0);
  };

  // 애니메이션 순차 실행
  useEffect(() => {
    setTimeout(() => setShowExercises(true), 800);
    setTimeout(() => setShrink(true), 2500);
    setTimeout(() => setShowSimilar(true), 3300);
  }, []);

  return (
    <div className="result-container">

      {/* 제목 */}
      <h1 className="title fade-in-center">필요 운동 결과</h1>

      {/* 내 운동 처방 */}
      <section className={`section pres-section ${shrink ? "shrink-up" : ""}`}>
        <h2 className="section-title fade-in-up">당신에게 추천된 운동 루틴</h2>

        <div className="card fade-in-up delay-1">
          <div className="routine-grid">
            {formatPresNote(presNote).map((line, idx) => (
              <div className="routine-card" key={idx}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 추천 운동 */}
      <section
        className={`section exercise-section ${
          shrink ? "shrink-up" : showExercises ? "fade-in-up" : "hidden"
        }`}
      >
        <h2 className="section-title">추천된 운동 종목</h2>

        <div className="exercise-grid">
          {exercises.slice(0, 3).map((ex, idx) => (
            <div
              className={`exercise-card fade-in-up exercise-delay-${idx}`}
              key={idx}
            >
              <h3>{ex.name}</h3>
              <p>{ex.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 유사 사용자 */}
      {showSimilar && (
        <section className="section fade-in-up">
          <h2 className="section-title">나와 유사한 사용자의 운동 루틴</h2>

          <div className="scroll-container">
            {similarUsers.map((u, idx) => (
              <div className="similar-card" key={idx}>
                <h4>운동 루틴</h4>

                <div className="routine-grid">
                  {formatPresNote(u.pres_note).map((line, i) => (
                    <div className="routine-card" key={i}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 시설 찾기 버튼 */}
      <button className="floating-btn" onClick={handleFacilityMove}>
        내 주변 운동 시설 찾기
      </button>
    </div>
  );
}
