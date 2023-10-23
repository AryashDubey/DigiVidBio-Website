import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MiroculusTestimonial } from "../case-study-2";

class DigitalMediaServicesSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,

      overflow: "hidden",

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
        {" "}
        <section className="section-area section-sp1 service-wraper-digital-media">
          <div className="row align-items-center">
            <div className="col-xl-12 mb-15">
              <Slider {...settings} className="service-slide slick-arrow-none">
                <DigitalMediaServiceSlide
                  title="Display"
                  points={[
                    "Cross-Device",

                    "High-Impact",

                    "Native",
                    "E-Newsletter",
                    "Digital Out-of-Home",
                  ]}
                  image="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/bmhMG5R9TiWiyfwImJQy"
                />
                <DigitalMediaServiceSlide
                  title="Online Video"
                  points={[
                    "Programmatic Video",
                    "Advanced TV/OTT",
                    "Native Video",
                    "Automatic Content Recognition","Pre/Mid/Post Roll Ads"
                  ]}
                  image="https://firebasestorage.googleapis.com/v0/b/pick-a-class.appspot.com/o/Your-paragraph-text-13.png?alt=media&token=066177ce-788d-4292-a539-468c95445224&_gl=1*1tmbyt8*_ga*OTIxMzQyMTU0LjE2OTc1Nzc2MTY.*_ga_CW55HF8NVT*MTY5Nzc5NjQ2OC4yLjEuMTY5Nzc5NjQ4NC40NC4wLjA."
                  alternate={true}
                />{" "}
                <DigitalMediaServiceSlide
                  title="Paid Search & Social"
                  points={[
                    "Full Service SEM",
                    "Youtube TrueView",
                    "Facebook/Instagram",
                    "LinkedIn",
                    "Twitter",
                  ]}
                  image="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/sBZBrStfRce7eIxISwHI"
                />
              </Slider>
              <div
                style={{
                  padding: "80px",
                }}
              ></div>
              {MiroculusTestimonial}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DigitalMediaServicesSlider;
const DigitalMediaServiceSlide = ({
  title,
  points,
  image,
  price,
  alternate = false,
}) => {
  return (
    <div className="slider-item">
      <div
        className="feature-container feature-bx2 feature1"
        style={{
          //gradient for background

          backgroundColor: alternate ? "#0c71c3" : "",
        }}
      >
        <div className=" mb-30">
          <Image
            style={{
              width: "100%",
              height: "320px",
              marginBottom: "24px",
              borderRadius: "16px",
              objectFit: "contain",
            }}
            src={image}
            alt={title}
          />
        </div>
        <div className="icon-content">
          <h3
            className="ttr-title"
            style={{
              marginBottom: "24px",
              color: alternate ? "#fff" : "",
            }}
          >
            {title}
          </h3>
          <ul className="list-mark style2">
            {points?.map((point) => (
              <li
                style={{
                  marginBottom: "8px",
                  color: alternate ? "#fff" : "",
                }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
