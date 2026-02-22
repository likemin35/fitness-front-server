import { Routes, Route } from "react-router-dom";
import FitnessInputPage from "./pages/FitnessInputPage";
import LoadingPage from "./pages/LoadingPage";
import FitnessResultPage from "./pages/FitnessResultPage";
import FacilityRecommendPage from "./pages/FacilityRecommendPage";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/input" element={<FitnessInputPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/result" element={<FitnessResultPage />} />
        <Route path="/facility" element={<FacilityRecommendPage />} />
      </Routes>
    </Layout>
  );
}
