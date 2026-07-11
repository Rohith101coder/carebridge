import axios from "axios";

const API = "https://carebridgechatbot.onrender.com/api/chat";

export const askCareBot = async (message) => {
  const response = await axios.post(API, {
    message,
  });

  return response.data.answer;
};
