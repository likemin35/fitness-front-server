import React, { useState } from "react";
import axiosClient from "../api/axiosClient";
import "../styles/FacilityPage.css";
import Layout from "../components/Layout";

const FacilityRecommendPage = () => {
  const [address, setAddress] = useState("");
  const [facilityType, setFacilityType] = useState("public");
  const [limit, setLimit] = useState(10); 
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const getFacilityRecommendation = async () => {
    setLoading(true);
    setErrorMsg("");
    setResults([]);

    try {
      const response = await axiosClient.post("/api/recommend/facility", {
        address,
        facilityType,
        limit,
      });

      if (response.data.error) {
        setErrorMsg(response.data.error);
      } else {
        setResults(response.data.facility_recommendation || []);
      }
    } catch (error) {
      setErrorMsg("서버 요청 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="facility-container">
        <h1 className="facility-title">고객님이 사는 곳과 원하는 조건을 골라주세요</h1>

        <div className="facility-input-box">
          <div className="input-row">
            <label>주소를 입력해주세요</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="예: 서울 강남구 테헤란로 212"
            />
          </div>

          <div className="input-row">
            <label>원하는 시설 유형</label>
            <select
              value={facilityType}
              onChange={(e) => setFacilityType(e.target.value)}
            >
              <option value="public">공공 체육시설</option>
              <option value="private">민간 체육시설</option>
              <option value="coupon">1타3만 민간시설</option>
              <option value="voucher">스포츠강좌 이용권 시설</option>
            </select>
          </div>

          {/* 🔥 limit 선택 버튼 */}
            <div className="input-row">
              <label>표시 개수 선택</label>
              <select
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              >
                <option value={10}>10개</option>
                <option value={15}>15개</option>
                <option value={20}>20개</option>
              </select>
            </div>


          <button className="facility-btn" onClick={getFacilityRecommendation}>
            시설 추천 받기
          </button>
        </div>

        {loading && <p className="loading">검색 중...</p>}
        {errorMsg && <p className="error">{errorMsg}</p>}

        <div className="facility-results">
          {results.length > 0 && <h2>추천된 시설</h2>}

          {results.map((item, idx) => (
            <div key={idx} className="facility-card">
              <strong>{item.name}</strong>
              <p>종목: {item.category}</p>
              <p>주소: {item.address}</p>
              <p>거리: {item.distance_km} km</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FacilityRecommendPage;
