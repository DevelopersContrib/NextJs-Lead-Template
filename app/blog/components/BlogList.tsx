"use client";
import { useFetchBlog } from "@/lib/hooks/useBlogFetcher";
import { useBlogStore } from "@/lib/store/useBlogStore";
import Image from "next/image";

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
  tags: string[];
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

const truncateText = (text: string, maxLength: number = 200): string => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const formatDate = (dateString: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
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
    createdAt: item.createdAt,
    tags: item.contents[0].blogPostTags
  }));

  return (
    <>
      <section className="tw-py-24">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="title-center-circle">
                <h2 className="tw-font-extrabold tw-text-5xl text-uppercase text-center tw-mb-14">
                  Latest Blogs
                </h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  {loading ? (
                    <p className="text-center">Loading blog posts...</p>
                  ) : blog.length > 0 ? (
                    blogPost.map((post: BlogPost, index: number) => (
                      <div
                        key={index}
                        className="card !tw-border-l-0 !tw-border-r-0 !tw-border-t-0 !tw-border-gray-200 !tw-rounded-none"
                      >
                        <div className="row g-0">
                          <div className="col-md-8">
                            <div className="card-body !tw-px-0 !tw-py-4 tw-flex tw-flex-col">
                              <h5 className="card-title mb-3">
                                <a
                                  href={`/blog/${post.id}/${post.slug.replace(
                                    /\s+/g,
                                    "-"
                                  )}`}
                                  className="tw-text-black tw-text-2xl tw-font-bold tw-leading-wide"
                                >
                                  {post.title}
                                </a>
                              </h5>
                              <p className="tw-text-[#6B6B6B] tw-mb-4 tw-text-sm">
                                {truncateText(post.image_caption)}
                              </p>
                              <div className="tw-font-semibold tw-text-sm tw-text-gray-600 tw-mb-2">
                                Tags
                              </div>
                              <ul className="tw-w-full tw-inline-flex tw-flex-wrap tw-gap-2 tw-list-none tw-pl-0 mb-3 ">
                                {post.tags.map((tag: string, index: number) => (
                                  <li
                                    key={index}
                                    className="tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs tw-text-[#6B6B6B]"
                                  >
                                    {tag}
                                  </li>
                                ))}
                              </ul>
                              <div className="tw-w-full mt-auto tw-flex tw-justify-between tw-items-center mb-2">
                                <a
                                  className="btn !tw-text-xs !tw-bg-black !tw-text-white hover:!tw-bg-black/50 "
                                  href={`/blog/${post.id}/${post.slug.replace(
                                    /\s+/g,
                                    "-"
                                  )}`}
                                  style={{
                                    cursor: "pointer",
                                    textDecoration: "none"
                                  }}
                                >
                                  Read More
                                </a>
                                <div className=" tw-px-2 tw-py-1 tw-rounded-md tw-text-xs tw-gap-2 tw-inline-flex tw-items-center tw-text-[#6B6B6B] tw-justify-center">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="none"
                                      viewBox="0 0 64 64"
                                    >
                                      <path
                                        fill="#FFC017"
                                        d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div>{formatDate(post.createdAt)}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 text-end">
                            <a
                              href={`/blog/${post.id}/${post.slug.replace(
                                /\s+/g,
                                "-"
                              )}`}
                              style={{
                                cursor: "pointer",
                                textDecoration: "none"
                              }}
                              className="tw-inline-flex tw-py-4 tw-pl-4"
                            >
                              <Image
                                src={post.image_url}
                                alt={post.image_caption}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="tw-h-[200px] tw-w-full tw-object-contain tw-rounded"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center">No blog posts available</p>
                  )}
                </div>
                <div className="col-md-2 !tw-border-l !tw-border-gray-200 !tw-border-solid !tw-border-t-0 !tw-border-r-0 !tw-border-b-0">
                  <div className="tw-py-4 tw-space-y-8">
                    <div className="flex flex-col">
                      <div className="">
                        <h5 className="tw-text-black tw-text-2xl tw-font-bold tw-leading-wide tw-flex tw-items-center">
                          <a
                            href="https://adao.ai"
                            className="tw-text-black tw-inline-flex"
                          >
                            <span className="tw-inline tw-mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 64 64"
                              >
                                <path
                                  fill="#FFC017"
                                  d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                                ></path>
                              </svg>
                            </span>
                            <span>Get the ADAO tokens Today</span>
                          </a>
                        </h5>
                      </div>
                      <div className="tw-flex">
                        <a href="https://adao.ai" className="tw-inline-flex">
                          <Image
                            src="https://cdn.vnoc.com/images/blogs/1.png"
                            alt="ADAO Token"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="tw-object-contain tw-w-full tw-h-[200px] tw-rounded"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="">
                        <h5 className="tw-text-black tw-text-2xl tw-font-bold tw-leading-wide tw-flex tw-items-center">
                          <a
                            href="https://agentdao.com/"
                            className="tw-text-black tw-inline-flex"
                          >
                            <span className="tw-inline tw-mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 64 64"
                              >
                                <path
                                  fill="#FFC017"
                                  d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                                ></path>
                              </svg>
                            </span>
                            <span>Get the ADAO tokens Today</span>
                          </a>
                        </h5>
                      </div>
                      <div className="tw-flex">
                        <a href="https://agentdao.com/" className="tw-inline-flex">
                          <Image
                            src="https://cdn.vnoc.com/images/blogs/2.png"
                            alt="ADAO Token"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="tw-object-contain tw-w-full tw-h-[200px] tw-rounded"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
