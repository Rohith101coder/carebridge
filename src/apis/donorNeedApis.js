import api from "./axiosConfig";

export const getAllNeeds = () => {
  const response = api.get("/donor/allNeeds", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const donate = async (donationData) => {
  // Since the endpoint consumes multipart/form-data, we use FormData
  const formData = new FormData();

  for (const key in donationData) {
    if (donationData[key] !== null && donationData[key] !== undefined) {
      formData.append(key, donationData[key]);
    }
  }

  const response = await api.post("/donor/donate", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      // Add your auth token here if applicable, e.g., Authorization: `Bearer ${token}`
    },
  });

  return response.data;
};