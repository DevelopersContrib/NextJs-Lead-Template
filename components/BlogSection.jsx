"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const [blogPosts, setBlogs] = useState([]);

  const src = "data:image/jpeg;base64,";

  const parseTagsToArray = (tagsString) => {
    if (!tagsString) return [];
    return tagsString.split(',').map(tag => tag.trim());
  };

  const truncateText = (text, maxLength = 65) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blogs", {
          next: { revalidate: 0 },
        });
        if (response.ok) {
          const res = await response.json();
          setBlogs(res.blogs);
        } else {
          alert("An error occurred");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {blogPosts.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tw-font-bold tw-text-3xl mb-4">Latest Blogs</h2>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        {blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
            >
              <div className="card h-100">
                <a 
                  href={`/blog/${post.slug + "---" + post.id}`}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                <Image
                  src={post.image_url}
                  alt={post.image_caption}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="card-img-top tw-w-[300px] tw-h-[200px] tw-object-cover"
                />
                </a>
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">
                    <a
                      href={`/blog/${post.slug + "---" + post.id}`}
                      style={{ cursor: "pointer", textDecoration: "none" }}
                      className="tw-text-black"
                    >
                      {truncateText(post.title)}
                    </a>
                  </h5>
                  <div className="mb-2 tw-font-semibold tw-text-sm tw-text-gray-600">
                    Tags
                  </div>
                  <ul className="tw-w-full tw-inline-flex tw-flex-wrap tw-gap-2 tw-list-none tw-pl-0 mb-3">
                    {parseTagsToArray(post.tags).map((tag, tagIndex) => (
                      <li 
                        key={tagIndex} 
                        className="tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="tw-w-full">
                    <a
                      className="btn btn-secondary"
                      href={`/blog/${post.slug + "---" + post.id}`}
                      style={{ cursor: "pointer", textDecoration: "none" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
