"use client";

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseTagsToArray = (tagsString) => {
    if (!tagsString) return [];
    return tagsString.split(',').map(tag => tag.trim());
  };

  const truncateText = (text, maxLength = 65) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    // Check if date is valid
    if (isNaN(date.getTime())) return "";

    // Array of month names
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Get month name, day, and year
    const monthName = monthNames[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    // Return formatted date
    return `${monthName} ${day} ${year}`;
  };

  // Function to ensure image source has proper format
  const getImageSrc = (imageData) => {
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
        setError(null);
        
        const response = await fetch("/api/blogs", {
          next: { revalidate: 0 }
        });
        
        if (response.ok) {
          const res = await response.json();
          
          if (res.status && Array.isArray(res.blogs)) {
            setBlogPosts(res.blogs);
          } else {
            setError("Invalid response format");
          }
        } else {
          setError(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
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

  // Render blog post card
  const renderBlogCard = (post, index) => {
    // Get the first content item from the post
    const postContent = post.contents?.[0];
    if (!postContent) return null;
    
    // Create a slug from the title or use a default
    const slug = postContent.title?.toLowerCase().replace(/\s+/g, "-") || `post-${index}`;
    const postUrl = `/blog/${slug + "---" + post.id}`;
    
    // Generate meaningful alt text
    const altText = postContent.imageCaption || 
                   postContent.title || 
                   `Blog post image for ${post.id}`;
    
    return (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100">
          <a 
            href={postUrl}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            <Image
              src={getImageSrc(postContent.imageBase64)}
              alt={altText}
              width={300}
              height={200}
              sizes="(max-width: 768px) 100vw, 300px"
              className="card-img-top tw-object-cover"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder-image.jpg';
              }}
            />
          </a>
          <div className="card-body p-4">
            <h5 className="card-title mb-3">
              <a
                href={postUrl}
                style={{ cursor: "pointer", textDecoration: "none" }}
                className="tw-text-black"
              >
                {truncateText(postContent.title)}
              </a>
            </h5>
            <div className="mb-2 tw-font-semibold tw-text-sm tw-text-gray-600">
              Tags
            </div>
            <ul className="tw-w-full tw-inline-flex tw-flex-wrap tw-gap-2 tw-list-none tw-pl-0 mb-3">
              {postContent.blogPostTags && Array.isArray(postContent.blogPostTags) ? 
                postContent.blogPostTags.map((tag, tagIndex) => (
                  <li 
                    key={tagIndex} 
                    className="tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs"
                  >
                    {tag}
                  </li>
                )) : 
                parseTagsToArray(post.tags).map((tag, tagIndex) => (
                  <li 
                    key={tagIndex} 
                    className="tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs"
                  >
                    {tag}
                  </li>
                ))
              }
            </ul>
            <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
              <a
                className="btn btn-secondary"
                href={postUrl}
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Read More
              </a>
              {post.createdAt && (
                <div className="tw-bg-blue-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs tw-gap-2 tw-inline-flex tw-items-center tw-text-blue-500/80">
                  <div>
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                  <div>
                    {formatDate(post.createdAt)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render loading state
  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-5">
            <div className="alert alert-danger" role="alert">
              <p className="mb-0">{error}</p>
              <button 
                className="btn btn-outline-danger mt-3"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render empty state
  if (blogPosts.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-5">
            <p className="text-muted">No blog posts available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  // Render blog posts
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2 className="tw-font-bold tw-text-3xl mb-4">Latest Blogs</h2>
          </div>
        </div>
      </div>

      <div className="row">
        {blogPosts.map(renderBlogCard)}
      </div>
    </div>
  );
};

export default BlogSection;
