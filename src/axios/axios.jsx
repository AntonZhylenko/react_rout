import axios from "axios";

console.log("base api", process.env.BASE_API);

export const API = axios.create({
  baseURL: "https://dog.ceo/api/",
});
