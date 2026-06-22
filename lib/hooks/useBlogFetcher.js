import { useEffect } from "react";
import { ApiRoutes } from "../models/routes";
import { getEnvVar, ENV_VAR } from "../getEnvVar";
import axios from "axios";
import { useBlogStore } from "../store/useBlogStore";
import { apiFetcher } from "./useFetcher";

const apiKey = getEnvVar(ENV_VAR.API_KEY);

export const getDomain = async () => {
  try {
    const response = await axios.get("/api/domain");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const useFetchBlog = (initialDomain) => {
  const { setBlog, setLoading, setError } = useBlogStore();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      // Prefer the domain resolved on the server (passed as a prop) to avoid an
      // extra client round trip to /api/domain before fetching blogs.
      const domain = initialDomain || (await getDomain()).domain;

      try {
        const url = `${ApiRoutes.Blogs}?key=${apiKey}&domain=${domain}`;
        const response = await apiFetcher("GET", url);

        const { data } = response;
        setBlog(data);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to fetch Blog");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [setLoading, setError, setBlog, initialDomain]);
};

export const useFetchBlogSlug = (id) => {
  const { blogSlug, setBlogSlug, setLoading, setError } = useBlogStore();
  useEffect(() => {
    const fetchBlog = async () => {
      if (!id || (Array.isArray(blogSlug) && blogSlug.length > 0)) return;

      setLoading(true);

      try {
        const { domain } = await getDomain();

        const url = `${ApiRoutes.Blogs}?key=${apiKey}&domain=${domain}&id=${id}`;

        const response = await apiFetcher("GET", url);

        const { data } = response;
        setBlogSlug(data.contents);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to fetch Blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, setBlogSlug, setLoading, setError, blogSlug]);
};
