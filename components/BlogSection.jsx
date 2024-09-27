"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const BlogSection = () => {
  const [blogPosts, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const src = "data:image/jpeg;base64,";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/blogs", { next: { revalidate: 3600 } });
      if (response.ok) {
        const res = await response.json();
        setBlogs(res.blogs);
        setIsLoading(false);
      } else {
        alert('An error occurred');
      }
    };
    fetchData();
  }, []);

 

  return (
    <div className="container">
     
        <div className="row">
          {blogPosts.map((post, index) => (
            <a
              className="col-md-4 mb-4"
              key={index}
              href={`/blog/${post.slug+'---'+post.id}`}
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              <div className="card h-100">
                <Image
                  src={src + post.image_base64}
                  alt={post.image_caption}
                  width={300}
                  height={200}
                  className="card-img-top"
                />
                <div className="card-body p-4">
                  <h5 className="card-title">{post.title}</h5>
                </div>
              </div>
            </a>
          ))}
        </div>
      
    </div>
  );
};

export default BlogSection;