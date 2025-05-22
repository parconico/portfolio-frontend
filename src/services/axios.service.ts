import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://api-portfolio-nparco.up.railway.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
