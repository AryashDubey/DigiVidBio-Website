import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MiroculusTestimonial } from "../case-study-2";

// Import Images

class DigitalMediaBanner extends Component {
  render() {
    return (
      <>
        <div className="main-banner">
          <div className="container inner-content">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 col-sm-7">
                <h1> Digital Advertising</h1>
                <h6
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    lineHeight: "2.5rem",
                    color: "var($primary)",
                  }}
                >
                  Our media team believes in harnessing the power of data to
                  craft holistic digital media campaigns rooted in advanced
                  audience discovery and design.
                </h6>
                <p>
                  {" "}
                  <br />
                  We drill down to the individual level with 1:1 NPI targeting
                  to reach your niche audience whenever they’re consuming media,
                  across all channels and devices.
                  <br />
                  <br />
                  No matter how niche your audience, we can create a
                  digital campaign to reach, engage and convert. Need to reach
                  Oncologists? Nephrologists? Lab Management at academic
                  institutions? No problem! <br />
                  <br /> Our digital media campaigns provide detailed metrics
                  optimized to your KPIs to get the ROI you’ve been wanting to
                  achieve.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-5">
                <div
                  className="banner-img"
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  <img
                    src={
                      "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/WLKGVSYtTJOk4yXFJEIC"
                    }
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* <PartnersSection /> */}
      </>
    );
  }
}

export default DigitalMediaBanner;
