import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import Images

class ConferenceMarketingBanner extends Component {
  render() {
    return (
      <>
        <div className="main-banner">
          <div className="container inner-content">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 col-sm-7">
                <h1> Maximizing Conference ROI</h1>
                <h4 className="title-ext text-primary">
                  Find out how to maximize your conference ROI with our proven
                  digital advertising and video strategies
                </h4>
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
                      "https://media.licdn.com/dms/image/D4E22AQHEH1i9Jbu8Rw/feedshare-shrink_800/0/1695661801257?e=1698883200&v=beta&t=r_xSQ4tRYFRggliWECaZvfQtkR2kx98AnG8ZXzf77nA"
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
        </div>
        {/* <PartnersSection /> */}
      </>
    );
  }
}

export default ConferenceMarketingBanner;
