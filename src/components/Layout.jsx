import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Layout.css";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate("/");
  };

  // ★ 현재 경로가 "/"면 버튼 숨김
  const hideButton = location.pathname === "/";

  return (
    <div className="layout-container">
      {!hideButton && (
        <button className="home-button" onClick={goHome}>
          <img src="/home_logo.png" alt="home" className="home-icon" />
        </button>
      )}

      <div className="page-content">{children}</div>
    </div>
  );
}
