import axios from "axios";
import { SERVICE_BASE_URL } from "../utils/constant";

const uri = `${SERVICE_BASE_URL}/articles`;

export const fetchListArticle = async (offset = 0, limit = 20) => {
  const params = new URLSearchParams({ offset, limit });
  const url = new URL(`${uri}`);
  url.search = params;

  return axios.get(url);
};
