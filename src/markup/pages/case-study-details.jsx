import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Elements
import AuthorProfile from "../elements/author-profile";

import WidgetTag from "../elements/widget-tag";

import WidgetRecentPosts from "../elements/widget-recent-posts";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";

import { CustomRichTextContentRenderer } from "../../data-service/blogs/RichTextContentRenderer/richTextContentRenderer";
import { CaseStudyContext } from "../../data-service/case-study/case-study";

function CaseStudyDetails(props) {
  const caseStudy = useContext(CaseStudyContext);
  const { caseStudyID } = useParams();

  const { selectedCaseStudy } = caseStudy;
  useEffect(() => {
    caseStudy.fetchCaseStudyBySlug(caseStudyID);
  });

  if (!selectedCaseStudy) return <></>;

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
                <h1>{selectedCaseStudy?.title ?? ""}</h1>
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
                      {selectedCaseStudy?.title ?? ""}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section className="section-area section-sp1 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
                <div className="blog-card blog-single">
                  <div>
                    <img
                      style={{
                        width: "100%",
                        marginBottom: "40px",
                      }}
                      src={selectedCaseStudy?.featuredImage?.url ?? ""}
                      alt=""
                    />
                  </div>
                  {caseStudy.selectedCaseStudy !== null ? (
                    <CustomRichTextContentRenderer
                      title={selectedCaseStudy?.title ?? ""}
                      raw={selectedCaseStudy?.content?.raw ?? ""}
                    />
                  ) : (
                    <div>loading...</div>
                  )}
                </div>

                <AuthorProfile author={selectedCaseStudy?.author} />

                <div className="clear" id="comment-list">
                  <div className="comments-area" id="comments"></div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5 col-xl-4 mb-30">
                <aside className="side-bar sticky-top aside-bx">
                  <>
                    <div className="widget recent-posts-entry">
                      <h4 className="widget-title">Client Details</h4>
                      <div className="widget-post-bx">
                        <p
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          Client:
                        </p>
                        <p>{selectedCaseStudy.clientName}</p>
                      </div>
                      <CustomRichTextContentRenderer raw={selectedCaseStudy.moreDetails.raw} />
                      
                    </div>
                  </>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CaseStudyDetails;
