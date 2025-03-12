import axios from "axios";
const axiosInstance = axios.create({
  // local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-2025-dc79f/us-central1/api",
  // deploy version of firebase function
  // http://127.0.0.1:5001/clone-2025-dc79f/us-central1/api


  // deploy version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-4ij9.onrender.com/",
});
export {axiosInstance};