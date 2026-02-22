import axiosClient from "./axiosClient";

export const getFacilityRecommendation = async (payload) => {
  const res = await axiosClient.post("/api/recommend/facility", payload);
  return res.data;
};
