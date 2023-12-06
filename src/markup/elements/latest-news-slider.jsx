import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Import Images
import lingBg2 from "../../images/background/line-bg2.png";

import { BlogContext } from "../../data-service/blogs/blog-context";
import { formatDate } from "../../data-service/backend-functions/helpers";

const NewsItem = ({ item, setSelectedBlog }) => {
  const blogLink = `/blogs/${item.slug}`;
  return (
    <div
      className="slider-item"
      onClick={() => {
        setSelectedBlog(item);
      }}
    >
      <div className="blog-card">
        <div className="post-media">
          <Link to={blogLink}>
            <img src={item.featuredImage.url} alt="" />
          </Link>
        </div>
        <div className="post-info">
          <ul className="post-meta">
            <li className="author">
              <Link to={blogLink}>
                <img src={item.author?.photo?.url} alt="" />
                {item.author?.name}
              </Link>
            </li>
            <li className="date">
              <i className="far fa-calendar-alt"></i>
              {formatDate(item.updatedAt)}
            </li>
          </ul>
          <h5 className="post-title">
            <Link to={blogLink}>{item.title}</Link>
          </h5>
          <Link to={blogLink} className="btn btn-outline-primary btn-sm">
            Read More <i className="btn-icon-bx fas fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  duration: 500,

  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1191,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function LatestNewsSection() {
  const blogContext = useContext(BlogContext);
  const { blogs } = blogContext;
  return (
    <>
      <section
        className="section-area section-sp1 blog-area"
        style={{
          backgroundImage: "url(" + lingBg2 + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Blogs</h6>
            <h2 className="title">DigiVidBIO Blogs</h2>
          </div>
          <Slider
            {...settings}
            className="tt-slider blog-slide slider-sp0 slick-arrow-none"
          >
            {blogs.map((item) => (
              <NewsItem
                key={item.title}
                item={item}
                setSelectedBlog={blogContext.setSelectedBlog}
              />
            ))}
          </Slider>
        </div>

        {/* <img className="pt-img1 animate1" src={animate1} alt=""/>
					<img className="pt-img2 animate2" src={animate2} alt=""/>
					<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
					<img className="pt-img4 animate-wave" src={animateWave} alt=""/> */}
      </section>
    </>
  );
}

export default LatestNewsSection;
