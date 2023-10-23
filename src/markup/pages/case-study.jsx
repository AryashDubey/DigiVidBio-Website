import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import { CaseStudyContext } from "../../data-service/case-study/case-study";

// Team Content

function CaseStudy() {
  const { caseStudy } = useContext(CaseStudyContext);
  return (
    <>
      <div className="page-content bg-white">
        <div className="banner-wraper">
          <div
            className="page-banner"
            style={{ backgroundImage: "url(" + bnrImg1 + ")" }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Case Studies</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>{" "}
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Case Study{" "}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section className="section-area section-sp1 team-wraper">
          <div className="container">
            <div className="row">
              {caseStudy.map((portfolio, index) => (
                <Link
                  key={index}
                  className="col-lg-4 col-sm-6"
                  to={
                    "/case-studies/" +
                    portfolio.slug
                  }
                >
                  <div className="team-member mb-30">
                    <div className="team-media">
                      <img src={portfolio.headerImage.url} alt="" loading="lazy" />
                    </div>
                    <div className="team-info">
                      <div className="team-info-comntent">
                        <h5 className="title">{portfolio.title}</h5>
                        <span className="text-secondary">
                          {portfolio.clientName}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CaseStudy;
