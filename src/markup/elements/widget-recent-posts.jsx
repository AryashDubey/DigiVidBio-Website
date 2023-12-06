import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

// Import Images
import recentBlogImg1 from "../../images/blog/recent-blog/pic1.jpg";
import recentBlogImg2 from "../../images/blog/recent-blog/pic2.jpg";
import recentBlogImg3 from "../../images/blog/recent-blog/pic3.jpg";
import { BlogContext } from "../../data-service/blogs/blog-context";

function WidgetRecentPosts() {
  const blogContext = useContext(BlogContext);
  const { blogs } = blogContext;

  if (!blogs) return <></>;
  return (
    <>
      <div className="widget recent-posts-entry">
        <h4 className="widget-title">Recent Posts</h4>
        <div className="widget-post-bx">
          {blogs.slice(0, 3).map((blog) => RecentPostWidget(blog))}
        </div>
      </div>{" "}
      <a href="/blogs">View All Blogs</a>
    </>
  );
}

export default WidgetRecentPosts;
function RecentPostWidget(blog) {
  const blogLink = `/blogs/${blog.slug}`;

  return (
    <div className="widget-post clearfix">
      <div className="ttr-post-media">
        <img src={blog.featuredImage.url} width="200" height="143" alt="" />{" "}
      </div>
      <div className="ttr-post-info">
        <div className="ttr-post-header">
          <h6 className="post-title">
            <Link to={blogLink}>{blog.title}</Link>
          </h6>
        </div>
        <ul className="post-meta">
          <li className="date">
            <i className="far fa-calendar-alt"></i> 21 July 2021
          </li>
        </ul>
      </div>
    </div>
  );
}
