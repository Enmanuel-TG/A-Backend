import axios from "./axios";

export const registerRequest = async (user) => await axios.post(`/register`, user);
export const loginRequest = async (user) => await axios.post(`/login`, user);
export const verifyRequest = async () => await axios.get(`/verify`)
export const logoutRequest = async () =>  await axios.post(`/logout`)