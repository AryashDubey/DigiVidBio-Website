import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

class ConferenceMarketingServicesDetails extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      overflow: "hidden",

      slidesToShow: 2,
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
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            marginTop: "40px",
          }}
        >
          Services
        </h1>
        <section className="section-area section-sp1 service-wraper">
          <div className="row align-items-center">
            <div className="col-xl-12 mb-15">
              <Slider {...settings} className="service-slide slick-arrow-none">
                <ConferenceMarketingSlide
                  title="Product Theater Video"
                  points={[
                    "60-minute Product Theaters/Workshops",

                    "15-20 minute Product Theater Segments",

                    "Live Stream Options",
                  ]}
                  image="https://media.graphassets.com/output=format:jpg/KKHxB71gTeyzJhruzn5Z"
                  price="$7K-$15K"
                />
                <ConferenceMarketingSlide
                  title="Booth Loop Video"
                  points={[
                    "120-second animated video loop",
                    "Incorporate charts & statistics",
                    "Animated text",
                    "Video footage",
                    "Optional event landing page",
                  ]}
                  image="https://media.graphassets.com/output=format:jpg/zGRkgClDQkuN6dF5miZm"
                  price="$4K-$6K"
                />
                
              </Slider>
              <Slider {...settings} className="service-slide slick-arrow-none">
                
                <ConferenceMarketingSlide
                  title="Capture Testimonial Videos During The Conference"
                  points={[
                    "2-3 Minute KOL/SME Testimonial Videos",

                    "30 to 60-second KOL/SME Testimonial Videos",

                    "Formal or Trade Show Floor Interviews",
                  ]}
                  image="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/9v8lyahkTDOsTm8sAW0g"
                  price="$10K-$20K"
                />
                <ConferenceMarketingSlide
                  title="Conference Digital Marketing"
                  points={["Geo-fencing Conference", "30 Days Re-targeting"]}
                  image="https://media.licdn.com/dms/image/D4E22AQEBHlVWUJKx8A/feedshare-shrink_800/0/1694617903489?e=1698883200&v=beta&t=EEMBaV_xNGF8vtR9IlohUx4hpxQ21otxTJKATiOOHRU"
                  price="$10K-$20K"
                />
              </Slider>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ConferenceMarketingServicesDetails;
const ConferenceMarketingSlide = ({ title, points, image, price }) => {
  return (
    <div className="slider-item">
      <div className="feature-container feature-bx2 feature1">
        <div className=" mb-30">
          <Image
            style={{
              width: "100%",
              height: "320px",
              marginBottom: "24px",
              borderRadius: "16px",
              objectFit: "cover",
              
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
            }}
          >
            {title}
          </h3>
          <ul className="list-mark style2">
            {points?.map((point) => (
              <li
                style={{
                  marginBottom: "8px",
                }}
              >
                {point}
              </li>
            ))}
          </ul>

          <h3
            style={{
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            {price}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};
