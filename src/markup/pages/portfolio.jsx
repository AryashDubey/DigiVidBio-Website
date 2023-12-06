import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./test.css"; // Import your CSS module

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import { useState, useEffect } from "react";
import { portfolioContent } from "../../data-service/portfolio-video/functions";
// Team Content

function VideoPortfolio() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const [selectedCategory, setSelectedCategory] = useState(null);
  const { height, width } = useWindowDimensions();
  const { primaryCategory } = useParams();
  const location = useLocation();

  useEffect(() => {
    setSelectedCategory(
      portfolioContent.filter((category) => {
        return category.slug === primaryCategory;
      })[0]
    );
  }, [location]);
  if (!selectedCategory) {
    setSelectedCategory(
      portfolioContent.filter((category) => {
        return category.slug === primaryCategory;
      })[0]
    );
    console.log(selectedCategory);
  }

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
                <h1>{selectedCategory?.title}</h1>
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
                      Video Portfolio
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fullscreenIframe}>
        <iframe
          src={selectedCategory?.iFrameLink}
          width={width}
          height={height}
          content="width=device-width, initial-scale=1.0"
          title="Vimeo Pro Portfolio"
          className={styles.responsiveIframe}
          allowFullScreen
        ></iframe>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "64px",
          marginBottom: "64px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Like what you see? <br />
        </h2>

        <Link to="/contact-us" className="btn btn-secondary btn-lg shadow">
          Get in Touch{" "}
        </Link>
      </div>
    </>
  );
}

export default VideoPortfolio;
