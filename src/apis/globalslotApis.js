import api from "./axiosConfig";

// Get all orphanages with available visit slots
export const getGlobalVisitSlots = async () => {
  const response = await api.get("/api/allSlots");
  return response.data;
};
