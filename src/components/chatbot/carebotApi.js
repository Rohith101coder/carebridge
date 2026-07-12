import axios from "axios";

const API = "https://carebridgechatbot.onrender.com/api/chat";

export const askCareBot = async (message,history) => {
  const response = await axios.post(API, {
    message,
    history
  });

  return response.data.answer;
};
