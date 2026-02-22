import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/LoadingPage.css";

export default function LoadingPage() {
  const navigate = useNavigate();
  const location = useLocation();  // ← InputPage에서 전달받은 state 사용

  useEffect(() => {
    const timer = setTimeout(() => {
     navigate("/result", { 
       state: { data: location.state?.data }  // ← 반드시 전달
     });
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="floating-text">
        고객님의 정보를 기반으로  
        <br />  
        진단 해드릴게요
      </div>
    </div>
  );
}
