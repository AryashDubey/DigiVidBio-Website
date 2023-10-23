import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

import { BlogContext } from "../../data-service/blogs/blog-context";
import { formatDate } from "../../data-service/backend-functions/helpers";

// Blog Content

function BlogGrid() {
  const blogContext = useContext(BlogContext);
  const { blogs } = blogContext;

  return (
    <>
      <div className="page-content bg-white">
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>DigiVidBIO Blogs</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>{" "}
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      DigiVidBIO Blogs
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section className="section-area section-sp1">
          <div className="container">
            <div className="row">
              {blogs.map((blogPost, index) => BlogGridItem(index, blogPost))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="pagination-bx text-center mb-30 clearfix">
                  <ul className="pagination">
                    <li className="previous">
                      <Link to="#">Prev</Link>
                    </li>
                    <li className="active">
                      <Link to="#">1</Link>
                    </li>
                    <li>
                      <Link to="#">2</Link>
                    </li>
                    <li>
                      <Link to="#">3</Link>
                    </li>
                    <li className="next">
                      <Link to="#">Next</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogGrid;
function BlogGridItem(index, blogPost) {
  const blogLink = `/blogs/${blogPost.slug}`;
  return (
    <div key={index} className="col-xl-4 col-md-6">
      <div className="blog-card mb-30">
        <div className="post-media">
          <Link to={blogLink}>
            <img
              src={blogPost.featuredImage.url}
              alt=""
              loading="lazy"
              style={{
                height: "300px",
                objectFit: "cover",
                
              }}
            />
          </Link>
        </div>
        <div className="post-info">
          <ul className="post-meta">
            <li className="author">
              <Link to={blogLink}>
                <img src={blogPost.author?.photo?.url} alt="" loading="lazy" />
                {blogPost.author.name}
              </Link>
            </li>
            <li className="date">
              <i className="far fa-calendar-alt"></i>
              {/* Format the timestamp like Oct 5, 2023 */}
              {formatDate(blogPost.updatedAt)}
            </li>
          </ul>
          <h4 className="post-title">
            <Link to={blogLink}>{blogPost.title}</Link>
          </h4>
          <Link to={blogLink} className="btn btn-outline-primary btn-sm">
            Read More <i className="btn-icon-bx fas fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
