"use client";
import { useBlogStore } from "@/lib/store/useBlogStore";
import { useFetchBlogSlug } from "@/lib/hooks/useBlogFetcher";
import LoadingState from "@/components/LoadingState";

const BlogSlugPage = ({ id }) => {
  const { blogSlug, loading } = useBlogStore();
  useFetchBlogSlug(id);

  const content =
    blogSlug && blogSlug.length > 0
      ? blogSlug[0].blogPostContent.replace(
          "https://via.placeholder.com/600x400",
          blogSlug[0].imageUrl
        )
      : "";

  return loading ? (
    <section className="tw-min-h-screen tw-py-16">
      <LoadingState />
    </section>
  ) : (
    <section className="tw-min-h-screen tw-py-16">
      <div className="container animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="custom-blog-content"
        />
      </div>
    </section>
  );
};

export default BlogSlugPage;
