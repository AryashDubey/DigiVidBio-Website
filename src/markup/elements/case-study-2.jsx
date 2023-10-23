import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../images/logos/miroculus.png";
import clientImage from "../../images/testimonials/pic2.png";
import { ReactComponent as VideoCameraIcon } from "../../images/icon/Video_camera_icon.svg";
import { ReactComponent as ProductIcon } from "../../images/icon/product.svg";
// Import Images
import aboutThumb1 from "../../images/about/mirocanvas.jpeg";
import aboutThumb2 from "../../images/about/pic-2.jpg";
import aboutThumb3 from "../../images/about/pic-3.jpg";

import { Image } from "react-bootstrap";

class CaseStudy2 extends Component {
  render() {
    return (
      <>
        <section className="section-sp1 about-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-30">
                <div className="heading-bx">
                  <h6 className="title-ext text-secondary">
                    Translating Complex Into Appealing, Inviting, and Effective
                  </h6>

                  <Image
                    src={image}
                    style={{ marginTop: "32px", marginBottom: "32px " }}
                    alt="Rebus Bio Systems"
                  />
                  <p>
                    How was this new laboratory instrument successfully launched
                    during a worldwide pandemic? Translating the complex into
                    appealing and effective at virtual conferences and on a
                    website isn’t an easy task when many in the industry wanted
                    to just maintain the status quo. See how Miroculus did it.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                    <div className="feature-container feature-bx1 feature1">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <VideoCameraIcon />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="ttr-title">Video Content</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                    <div className="feature-container feature-bx1 feature2">
                      <div className="icon-md">
                        <span className="icon-cell">
                          <ProductIcon />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="ttr-title">Product Launch</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/case-studies/complex-into-inviting-and-effective"
                  className="btn btn-primary shadow"
                >
                  Read More
                </Link>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="about-thumb-area">
                  <ul>
                    <li>
                      <img className="about-thumb1" src={aboutThumb1} alt="" />
                    </li>
                    <li>
                      <img
                        className="about-thumb2"
                        src={
                          "https://pbs.twimg.com/media/Fe58TbcUAAA1HaJ?format=jpg&name=4096x4096"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="about-thumb3"
                        src={
                          "https://miroculus.com/wp-content/uploads/2021/02/miro-canvas-featured-image.jpg"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="exp-bx"
                        src={
                          "https://crain-platform-genomeweb-prod.s3.amazonaws.com/s3fs-public/styles/800x600/public/img_2238.jpg"
                        }
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {MiroculusTestimonial}
            </div>
          </div>
          {/* <img className="pt-img1 animate-wave" src={ptImg1} alt=""/> */}
        </section>
      </>
    );
  }
}
export const MiroculusTestimonial = (
  <div className="slider-item">
    <div className="testimonial-bx">
      <div className="testimonial-content">
        <p>
          “Based on my past experience with DigiVidBIO, I knew they were adept at
          translating complex and technical concepts into visually appealing,
          inviting, and effective communication. Our customers are experts and
          our marketing needs to engage and respect their expertise. With
          DigiVidBIO as a proactive partner, we were able to get a beautiful set of
          videos that met that goal now, and in the future, as we build our
          library of assets.”
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src={clientImage}
          style={{
            marginTop: "32px",
            marginBottom: "32px ",
            height: "64px",
            marginRight: "16px",
          }}
          alt="Rebus Bio Systems"
        />
        <div className="client-info">
          <h5 className="name">Carrie Haverty</h5>
          <p>Sr. Director, Product Marketing</p>
          <p>Miroculus</p>
        </div>
      </div>
      <div className="quote-icon">
        <i className="fas fa-quote-left"></i>
      </div>
    </div>
  </div>
);
export default CaseStudy2;
