import { ApiRoutes } from "../models/routes";
import { getEnvVar, ENV_VAR } from "../getEnvVar";
import { apiFetcher } from "./useFetcher";

const apiKey = getEnvVar(ENV_VAR.API_KEY);

export const getBlogPostById = async (id, domain) => {
  try {
    const url = `${ApiRoutes.Blogs}?key=${apiKey}&domain=${domain}&id=${id}`;
    const response = await apiFetcher("GET", url);

    const { data } = response;
    return data.contents[0];
  } catch (error) {
    console.log(error);
  }
};
