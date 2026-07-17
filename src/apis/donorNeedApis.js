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
  // console.log("donationData in donate function:", donationData);
  const formData = new FormData();

  // If no image is provided, use the default logo from public/logo.png
  if (!donationData.orderProofImage) {
    const response = await fetch("/logo.png");
    const blob = await response.blob();

    donationData.orderProofImage = new File([blob], "logo.png", {
      type: blob.type || "image/png",
    });
  }

  for (const key in donationData) {
    if (donationData[key] !== null && donationData[key] !== undefined) {
      formData.append(key, donationData[key]);
    }
  }

  const response = await api.post("/donor/donate", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};