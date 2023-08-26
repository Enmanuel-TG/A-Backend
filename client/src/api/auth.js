import axios from "axios";

const API = "http://localhost:5000/api";
export const registerRequest = async (user) => await axios.post(`${API}/register`, user);
