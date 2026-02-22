import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/InputPage.css";
import { getFitnessRecommendation } from "../api/recommendApi";

export default function FitnessInputPage() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    age: "",
    sex: "",
    height: "",
    weight: "",
  });

  const [isLoading, setIsLoading] = useState(false); // ★ 로딩 상태 추가

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true); // ★ 버튼 눌린 순간 로딩 시작

      const wrapper = { user_input: input };
      const result = await getFitnessRecommendation(wrapper);

      navigate("/loading", { state: { data: result } });
    } catch (err) {
      console.error("❌ 운동 추천 API 호출 실패:", err);
      setIsLoading(false); // 실패 시 로딩 종료
    }
  };

  return (
    <div className="input-page-container">

      {/* 타이틀 영역 */}
      <div className="input-title-box fade-in-up">
        <h1 className="input-title">
          나와 유사한 조건을 가진 사람들은 어떤 처방을 받았을까요?
        </h1>
        <h2 className="input-subtitle">신체 정보를 입력해주세요!</h2>
      </div>

      {/* 입력 영역 */}
      <div className="center-form-wrapper fade-in">
        <div className="form-grid">

          <div className="form-group">
            <label>나이</label>
            <input
              type="number"
              name="age"
              value={input.age}
              onChange={handleChange}
              placeholder="나이를 입력하세요"
            />
          </div>

          <div className="form-group">
            <label>성별</label>
            <select name="sex" value={input.sex} onChange={handleChange}>
              <option value="">선택</option>
              <option value="M">남성</option>
              <option value="F">여성</option>
            </select>
          </div>

          <div className="form-group">
            <label>키 (cm)</label>
            <input
              type="number"
              name="height"
              value={input.height}
              onChange={handleChange}
              placeholder="키를 입력하세요"
            />
          </div>

          <div className="form-group">
            <label>몸무게 (kg)</label>
            <input
              type="number"
              name="weight"
              value={input.weight}
              onChange={handleChange}
              placeholder="몸무게를 입력하세요"
            />
          </div>
        </div>

        {/* 제출 버튼 또는 로딩 스피너 */}
        {!isLoading ? (
          <button className="center-submit-btn" onClick={handleSubmit}>
            ✔ 운동 처방받기!
          </button>
        ) : (
          <div className="loading-spinner"></div> // ★ 로딩 아이콘
        )}
      </div>
    </div>
  );
}
