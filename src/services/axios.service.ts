import axios from "axios";

// const BACKEND_URL = "https://api-portfolio-nparco.up.railway.app/api/v1";

export const axiosClient = axios.create({
  baseURL:
    //  BACKEND_URL ||
    "https://api-portfolio-nparco.up.railway.app/api/v1",
  // "http://localhost:4000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
