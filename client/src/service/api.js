import axios from "axios";

const URL = "http://localhost:8000";

export const getNews = async (page, size = 4) => {
  try {
    return await axios.get(`${URL}/news?page=${page}&size=${size}`);
  } catch (error) {
    console.log("Error while calling getNews API");
  }
};
