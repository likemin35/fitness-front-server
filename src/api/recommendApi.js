import axiosClient from "./axiosClient";

export const getFitnessRecommendation = async (wrapper) => {
  const res = await axiosClient.post("/api/recommend/fitness", wrapper);
  return res.data;
};
