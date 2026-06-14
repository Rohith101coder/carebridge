

import api from "./axiosConfig";

export const getLandingPageStats = async () =>{
    const response = await api.get("/api/landing/stats");
    return response.data;
}

