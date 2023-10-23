import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ReactComponent as VideoCameraIcon } from "../../images/icon/Video_camera_icon.svg";
import { ReactComponent as AIIcon } from "../../images/icon/ai-icon.svg";
import { ReactComponent as ConferenceMarketing } from "../../images/icon/conference-marketing.svg";
import { ReactComponent as DigitalMedia } from "../../images/icon/digital-media.svg";

class ServicesSliderSection extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      duration: 500,

      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <>
        <section className="section-area section-sp1 service-wraper-main-page">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-7 mb-30">
              <div className="heading-bx">
                <h6 className="title-ext text-secondary">
                  Services We Provide
                </h6>
                <h2 className="title">
                  We help Life Science, Healthcare and MedTech companies with
                  their marketing.
                </h2>
                <p>
                  We specialize in providing comprehensive marketing solutions
                  tailored to the unique needs of Life Science, Healthcare, and
                  MedTech companies. From video creation, digital media to AI
                  technology, we offer a full spectrum of services to help you
                  thrive in your industry.
                </p>
              </div>
            </div>
            <div className="col-xl-8 mb-15">
              <Slider {...settings} className="service-slide slick-arrow-none">
                <div className="slider-item">
                  <div className="feature-container feature-bx2 feature1">
                    <div className="feature-box-xl mb-30">
                      <span className="icon-cell">
                        <VideoCameraIcon />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Video Creation</h3>
                      <p>Full Service Video Production Services</p>
                      <p>Events: Conferences & Webinars</p>
                      <p>Education</p>
                      <Link
                        to="/video-portfolio"
                        className="btn btn-primary light"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-container feature-bx2 feature2">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell">
                        <DigitalMedia />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Digital Media</h3>
                      <p>Full Service Digital Media Services</p>
                      <p>Data-Driven Approach</p>
                      <p>Business-Optimizing Insights & Learnings</p>
                      <Link
                        to="/digital-media"
                        className="btn btn-primary light"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-container feature-bx2 feature3">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell">
                        <AIIcon />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">AI Solutions</h3>
                      <p>
                        AI-Powered Solutions: Transforming Life Science,
                        Healthcare, and MedTech Marketing
                      </p>
                      <Link to="/ai" className="btn btn-primary light">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="feature-container feature-bx2 feature3">
                    <div className="feature-box-xl mb-20">
                      <span className="icon-cell">
                        <ConferenceMarketing />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="ttr-title">Conference Marketing</h3>
                      <p>
                        Maximizing your conference ROI with our proven digital
                        advertising and video strategies
                      </p>
                      <Link
                        to="/conference-marketing"
                        className="btn btn-primary light"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ServicesSliderSection;
