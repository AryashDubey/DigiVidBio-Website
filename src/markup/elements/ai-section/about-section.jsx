import React, { Component } from "react";

import { Image } from "react-bootstrap";

class AISection extends Component {
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
                          "https://scopeblog.stanford.edu/wp-content/uploads/2020/09/HAI-Scope-Blog-Pena.jpg"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="about-thumb2"
                        src={
                          "https://www.mobihealthnews.com/sites/default/files/Doctor%20using%20hologram%2C%20virtual%20screen_Mobi%20-%20Getty_MR.Cole_Photographer_compressed.jpg"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="about-thumb3"
                        src={
                          "https://media.graphassets.com/output=format:jpg/KKHxB71gTeyzJhruzn5Z"
                        }
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        className="exp-bx"
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFEoNpmcPzYh_o-AWypXYQCAoPzR3OKtlaQ&usqp=CAU"
                        }
                        alt=""
                      />
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
                    <h2 className="title-ext text-secondary">
                      Elevate Your Biotech / Life Science Marketing with AI{" "}
                    </h2>
                  </div>
                  <h6
                    style={{
                      marginTop: "32px",
                      marginBottom: "32px ",
                      fontWeight: "400",
                    }}
                  >
                    Are you ready to supercharge your sales and marketing
                    strategy? We offer cutting-edge AI solutions tailored for
                    the Biotechnology and Life Science industries.
                    <br />
                    <br />
                    Harness the Power of AI:
                    <br />
                    <br />
                    🔹 Our AI analyzes customer data to deliver
                    hyper-personalized experiences that drive results. <br />
                    <br />
                    🔹 From personalized recommendations to predictive
                    analytics, we've got your back. <br />
                    <br />
                    🔹 No more wasting time on repetitive tasks; our AI handles
                    the heavy lifting.
                  </h6>
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

export default AISection;
