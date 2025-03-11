import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-2025-dc79f/us-central1/api",
});
export {axiosInstance}
// http://127.0.0.1:5001/clone-2025-dc79f/us-central1/api