"use client";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  type: string;
  contents: BlogPostContent[];
  createdAt: string;
  updatedAt: string;
  jobId: string;
}

interface BlogPostContent {
  title: string;
  imageBase64: string;
  blogPostTags: string[];
  imageCaption: string;
  blogPostContent: string;
}

interface BlogApiResponse {
  status: boolean;
  blogs: BlogPost[];
}

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const truncateText = (text: string, maxLength = 55): string => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return "";

    const date = new Date(dateString);

    // Check if date is valid
    if (isNaN(date.getTime())) return "";

    // Array of month names
    const monthNames = [
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

    // Get month name, day, and year
    const monthName = monthNames[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    // Return formatted date
    return `${monthName} ${day} ${year}`;
  };

  // Function to ensure image source has proper format
  const getImageSrc = (imageData: any) => {
    if (!imageData) return '/placeholder-image.jpg'; // Fallback image
    
    // If the image already has a data URI prefix, use it as is
    if (imageData.startsWith('data:image/') || imageData.startsWith('http')) {
      return imageData;
    }
    
    // Otherwise, add the data URI prefix for base64 images
    return `data:image/jpeg;base64,${imageData}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs", {
          next: { revalidate: 0 }
        });
        if (response.ok) {
          const res: BlogApiResponse = await response.json();
          console.log("API Response:", res);

          if (res.status && Array.isArray(res.blogs)) {
            setBlogPosts(res.blogs);
          } else {
            setError("Invalid response format");
          }
        } else {
          setError("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("An error occurred while fetching blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("Current blogPosts state:", blogPosts);

  const renderBlogPosts = () => {
    if (loading) {
      return <p className="text-center">Loading blog posts...</p>;
    }

    if (error) {
      return <p className="text-center text-danger">{error}</p>;
    }

    if (!blogPosts.length) {
      return <p className="text-center">No blog posts available</p>;
    }

    return blogPosts.map((post, index) => {
      const postContent = post.contents?.[0];

      if (!postContent) return null;

      // Create a slug from the title or use a default
      const slug =
        postContent.title?.toLowerCase().replace(/\s+/g, "-") ||
        `post-${index}`;
      const postId = post.id;
      const formattedDate = formatDate(post.createdAt);

      return (
        <div
          key={index}
          className="card !tw-border-l-0 !tw-border-r-0 !tw-border-t-0 !tw-border-gray-200 !tw-rounded-none"
        >
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body !tw-px-0 !tw-py-4 tw-flex tw-flex-col">
                <h5 className="card-title mb-3">
                  <a
                    href={`/blog/${slug + "---" + postId}`}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none"
                    }}
                    className="tw-text-black"
                  >
                    {postContent.title}
                  </a>
                </h5>
                <div className="tw-font-semibold tw-text-sm tw-text-gray-600">
                  Tags
                </div>
                <ul className="tw-w-full tw-inline-flex tw-flex-wrap tw-gap-2 tw-list-none tw-pl-0 mb-3 ">
                  {postContent.blogPostTags?.map(
                    (tag: string, tagIndex: number) => (
                      <li
                        key={tagIndex}
                        className="tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs"
                      >
                        {tag}
                      </li>
                    )
                  )}
                </ul>
                <div className="tw-w-full mt-auto tw-flex tw-justify-between tw-items-center mb-2">
                  <a
                    className="btn btn-secondary"
                    href={`/blog/${slug + "---" + postId}`}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none"
                    }}
                  >
                    Read More
                  </a>
                  {formattedDate && (
                    <div className="tw-bg-blue-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs tw-gap-2 tw-inline-flex tw-items-center tw-text-blue-500/80">
                      <div>
                        <FontAwesomeIcon icon={faCalendar} />
                      </div>
                      <div>
                        {formattedDate}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <a
                href={`/blog/${slug + "---" + postId}`}
                style={{
                  cursor: "pointer",
                  textDecoration: "none"
                }}
                className="tw-inline-flex tw-py-4 tw-pl-4"
              >
                <Image
                  src={getImageSrc(postContent.imageBase64)}
                  alt={postContent.imageCaption}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="card-img-top !tw-rounded-none tw-w-[150px] tw-h-[150px] tw-object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <section className="tw-py-24">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tw-font-bold tw-text-3xl mb-4 text-center">
                Latest Blogs
              </h2>
            </div>
            <div className="col-md-12">
              <div className="row justify-content-center">
                <div className="col-md-6">{renderBlogPosts()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
