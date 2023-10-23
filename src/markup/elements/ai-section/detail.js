import { Image } from "react-bootstrap";

export const AIInsightsDetail = () => (
  <section className="section-sp1 about-area">
    <h1
      style={{
        textAlign: "center",
        marginBottom: "64px",
        marginLeft: "16px",
        marginRight: "16px",
      }}
    >
      Delivering Real Results{" "}
    </h1>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-30">
          <div className="heading-bx">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <h6 className="title-ext text-secondary">
                Elevate Your Tech Game: Artificial Intelligence is the Future
              </h6>
            </div>
            <p>Expect a 2-5X ROI in the first year alone.</p>
            <p>Boost your team's productivity by over 25%.</p>
            <p>Say goodbye to high acquisition costs.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
              <div className="feature-container feature-bx1 feature1">
                <div className="icon-md">
                  <span className="icon-cell"></span>
                </div>
                <div className="icon-content">
                  <h4 className="ttr-title">Flexible Pricing</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
              <div className="feature-container feature-bx1 feature2">
                <div className="icon-md">
                  <span className="icon-cell"></span>
                </div>
                <div className="icon-content">
                  <h4 className="ttr-title">Seamless Integration</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
              <div className="feature-container feature-bx1 feature1">
                <div className="icon-md">
                  <span className="icon-cell"></span>
                </div>
                <div className="icon-content">
                  <h4 className="ttr-title">
                    Boost ROI
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
              <div className="feature-container feature-bx1 feature2">
                <div className="icon-md">
                  <span className="icon-cell"></span>
                </div>
                <div className="icon-content">
                  <h4 className="ttr-title">
                    Marketing Automation

                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-30">
          <Image
            style={{
              width: "100%",
              borderRadius: "16px",
            }}
            src={
              "https://careeva.com/wp-content/uploads/2015/11/AI-Healthcare.jpg"
            }
            alt="Rebus Bio Systems"
          />
        </div>
        <div className="conference-marketing-bx">
          <div className="conference-marketing-content">
            <h2>Data Security Assured</h2>
            <ul>
              <li>
                • We take your data seriously, with military-grade encryption.
              </li>
              <li>• Our systems are housed in secure Tier 4 data centers.</li>
              <li>• We comply with GDPR, CCPA, HIPAA, and more.</li>
            </ul>
          </div>
          <div
            style={{
              width: "32px",
            }}
          ></div>
          <div className="conference-marketing-bx-image">
            <Image
              src={
                "https://www.analyticsinsight.net/wp-content/uploads/2021/01/Data-Centers-1024x576.jpeg"
              }
              alt="Rebus Bio Systems"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        ></div>
      </div>
    </div>
    {/* <img className="pt-img1 animate-wave" src={ptImg1} alt=""/> */}
  </section>
);
