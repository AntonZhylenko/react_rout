import { API } from "./axios";

export const getDogs = async () => {
  const response = await API.get("breeds/list/all");
  return response;
};
