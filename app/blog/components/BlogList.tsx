"use client";
import Image from "next/image";
import { useBlogStore } from "@/lib/store/useBlogStore";
import { useFetchBlog } from "@/lib/hooks/useBlogFetcher";

type BlogPost = {
  id: string;
  type: string;
  contents: BlogPostContent[];
  createdAt: string;
  updatedAt: string;
  jobId: string;
  slug: string;
  title: string;
  image_url: string;
  image_caption: string;
};

type BlogPostContent = {
  title: string;
  imageBase64: string;
  blogPostTags: string[];
  imageCaption: string;
  blogPostContent: string;
};

type content = {
  title: string;
  imageUrl: string;
  blogPostTags: string[];
  imageCaption: string;
  blogPostContent: string;
};
type blogResponse = {
  id: number;
  type: string;
  contents: content[];
  createdAt: string;
  updatedAt: string;
  jobId: string;
};

const BlogList = () => {
  const { blog, loading } = useBlogStore();
  useFetchBlog();

  const blogPost = blog.map((item: blogResponse) => ({
    id: item.id,
    slug: item.contents[0].title,
    title: item.contents[0].title,
    image_url: item.contents[0].imageUrl,
    image_caption: item.contents[0].imageCaption,
  }));

  return (
    <>
      <section className="tw-py-24">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tw-font-bold tw-text-3xl mb-4 text-center">Latest Blogs</h2>
            </div>

            {loading ? (
              <p className="text-center">Loading blog posts...</p>
            ) : blog.length > 0 ? (
              blogPost.map((post: BlogPost, index: number) => (
                <a
                  className="col-md-4 mb-4"
                  key={index}
                  href={`/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  <div className="card h-100">
                    <Image
                      src={post.image_url}
                      alt={post.image_caption}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="card-img-top tw-h-[200px] tw-object-cover"
                    />
                    <div className="card-body p-4">
                      <h5 className="card-title">{post.title}</h5>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-center">No blog posts available</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
