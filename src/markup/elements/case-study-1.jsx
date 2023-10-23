import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../../images/logos/rebus.png";
import clientImage from "../../images/testimonials/pic1.png";
import { ReactComponent as VideoCameraIcon } from "../../images/icon/Video_camera_icon.svg";
// Import Images
import aboutThumb2 from "../../images/about/pic-2.jpg";

import { Image } from "react-bootstrap";

class CaseStudy1 extends Component {
  render() {
    return (
      <>
        <section className="section-sp1 about-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-30">
                <div className="about-thumb-area">
                  <ul>
                    <li>
                      <img
                        className="about-thumb1"
                        src={
                          "https://rebusbio.com/wp-content/uploads/2021/02/IMG_07843-e1614278490111.png"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <img className="about-thumb2" src={aboutThumb2} alt="" />
                    </li>
                    <li>
                      <img
                        className="about-thumb3"
                        src={
                          "https://pbs.twimg.com/media/FU6OYNVVEAALJTC?format=jpg&name=large"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <div className="exp-bx">
                        <img
                          className="exp-bx"
                          src={
                            "https://media.graphassets.com/output=format:jpg/RORc2xUQu6A32BWSenHg"
                          }
                          alt=""
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="heading-bx">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <h6 className="title-ext text-secondary">
                      Go From Startup to Launch
                    </h6>

                    <Image
                      src={image}
                      style={{ marginTop: "32px", marginBottom: "32px " }}
                      alt="Rebus Bio Systems"
                    />
                  </div>
                  <p>
                    How did Rebus Bio Systems stand out in the crowd when
                    launching their new spatial omics platform? See how
                    DigiVidBIO collaborated to create a product reveal video to
                    generate excitement and showcase this exciting new
                    technology.
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
                </div>
                <Link
                  to="/case-studies/startup-to-launch"
                  className="btn btn-primary shadow"
                >
                  Read More
                </Link>
              </div>
              <div className="slider-item">
                <div className="testimonial-bx">
                  <div className="testimonial-content">
                    <p>
                      “I’ve worked with DigiVidBIO through roles at several
                      companies now. I return again and again because I trust
                      their team to bring domain expertise, creative inspiration
                      and always on-time execution to my projects. For this
                      product launch, their work was key to our surround-sound
                      approach. The videos they produced generated excitement,
                      helped explain our workflow in an easy to understand
                      format, and showcased our team’s expertise. I couldn’t be
                      more pleased.”
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
                      <h5 className="name">Erin Cline Davis</h5>
                      <p>Sr. Director, Marketing</p>
                      <p>Rebus Bio Systems</p>
                    </div>
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <img className="pt-img1 animate-wave" src={ptImg1} alt=""/> */}
        </section>
      </>
    );
  }
}

export default CaseStudy1;
