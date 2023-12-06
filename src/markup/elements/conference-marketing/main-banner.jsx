import React, { Component } from "react";
import VimeoEmbed from "../vimeo/vimeo";

// Import Images

class ConferenceMarketingBanner extends Component {
  render() {
    return (
      <>
        <div className="main-banner">
          <div className="container inner-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-7">
                <h1> Maximizing Conference ROI</h1>
                <h4 className="title-ext text-primary">
                  Find out how to maximize your conference ROI with our proven
                  digital advertising and video strategies
                </h4>
              </div>{" "}
              <div className="col-lg-6 col-md-6 col-sm-5">
                {" "}
                <VimeoEmbed />
                
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
