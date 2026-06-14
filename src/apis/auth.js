import api from "./axiosConfig";

export const register = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const verifyEmail= async (data) =>{
    const response = await api.post("/auth/verify", data);
    return response.data;
}

export const resendOtp = async (email) =>{
    const response = await api.post(`/auth/resend?email=${encodeURIComponent(email)}`);
    return response.data;
}