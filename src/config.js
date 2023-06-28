//jshint esversion:9
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://ettechapi.onrender.com/api/",
});
