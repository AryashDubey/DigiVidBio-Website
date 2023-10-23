import React from "react";
import Markup from "./markup/markup";

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fonts
import "./vendor/line-awesome/css/line-awesome.min.css";
import "./vendor/font-awesome/css/all.min.css";
import "./vendor/themify/themify-icons.css";

// StyleSheet
import "./App.scss";
import { BlogContextProvider } from "./data-service/blogs/blog-context";
import { VideoPortfolioProvider } from "./data-service/portfolio-video/video-portfolio-context";
import {
  CaseStudyContext,
  CaseStudyProvider,
} from "./data-service/case-study/case-study";

function App() {
  return (
    <div className="page-wraper">
      <CaseStudyProvider>
        <VideoPortfolioProvider>
          <BlogContextProvider>
            <Markup />
          </BlogContextProvider>
        </VideoPortfolioProvider>
      </CaseStudyProvider>
    </div>
  );
}

export default App;
