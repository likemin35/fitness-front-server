import React from "react";

export default function UserInputForm({ input, onChange, onSubmit }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📌 신체 정보 입력</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "400px" }}>
        
        <div>
          <label>나이</label>
          <input
            type="number"
            name="age"
            value={input.age || ""}
            onChange={onChange}
            placeholder="예: 30"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>성별 (M/F)</label>
          <input
            type="text"
            name="sex"
            value={input.sex || ""}
            onChange={onChange}
            placeholder="예: M"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>키 (cm)</label>
          <input
            type="number"
            name="height"
            value={input.height || ""}
            onChange={onChange}
            placeholder="예: 175"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <label>몸무게 (kg)</label>
          <input
            type="number"
            name="weight"
            value={input.weight || ""}
            onChange={onChange}
            placeholder="예: 70"
            style={{ width: "100%" }}
          />
        </div>

        <button
          onClick={onSubmit}
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#4CAF50",
            border: "none",
            color: "white",
            fontSize: "15px",
            cursor: "pointer"
          }}
        >
          운동 추천 받기
        </button>
      </div>
    </div>
  );
}
