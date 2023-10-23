import React, { Component } from "react";
import { Link } from "react-router-dom";
import doctorImg from "../../images/main-banner/doctor.png";

class AboutSection extends Component {
  render() {
    const bannerStyle = {
      backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/pick-a-class.appspot.com/o/ezgif.com-optimize.gif?alt=media&token=da9674ef-ae0b-4da9-bdbb-677cab7a6060&_gl=1*1mg2l88*_ga*NjczNzExOTUxLjE2Nzg3ODUwNDI.*_ga_CW55HF8NVT*MTY5Njg5MjczOC4yNjguMS4xNjk2ODkyOTIxLjUyLjAuMA..')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      width: "100%",
      height: "100vh", // Adjust the height as needed
      position: "relative",
      maxHeight: "900px",
    };

    return (
      <div className="main-banner" style={bannerStyle}>
        <div className="container inner-content">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-sm-7">
              <h1 className="title-ext text-primary">Exceeding Expectations</h1>
              <h1>
                A digital marketing firm dedicated to Life Science, Healthcare
                and MedTech
              </h1>
              <Link
                to="/contact-us"
                className="btn btn-secondary btn-lg shadow"
              >
                Get in Touch{" "}
              </Link>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-5"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
