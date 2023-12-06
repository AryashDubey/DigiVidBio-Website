import React, { Component, lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Elements
import BackToTop from "./elements/back-top";
import PageScrollTop from "./elements/page-scroll-top";

// Layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// All Pages Router
import Index from "./pages/index";
import AboutUs from "./pages/about-us";
import Team from "./pages/team";
import PrivacyPolicy from "./pages/privacy-policy";
import ErrorPage from "./pages/error-404";
import Faq from "./pages/faq";
import ContactUs from "./pages/contact-us";
import Booking from "./pages/booking";
import BlogGrid from "./pages/blog-grid";
import VideoPortfolio from "./pages/portfolio";
import ConferenceMarketing from "./pages/conference-marketing";
import VideoPortfolioDetails from "./pages/video-portfolio-details";
import CaseStudy from "./pages/case-study";
import CaseStudyDetails from "./pages/case-study-details";
import AIInsights from "./pages/ai-insights";
import DigitalMarketingPage from "./pages/digital-media";
import Auditions from "./pages/auditions";
const BlogDetailPage = lazy(() => import("./pages/blog-details"));

class Markup extends Component {
  render() {
    return (
      <>
        {/* {<BrowserRouter basename={'/react/'}> */}
        <BrowserRouter>
          <Routes>
            <Route element={<ThemeLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route
                path="/conference-marketing"
                element={<ConferenceMarketing />}
              />{" "}
              <Route path="/digital-media" element={<DigitalMarketingPage />} />
              <Route path="/team" element={<Team />} />
              <Route path="/video-portfolio" element={<VideoPortfolio />} />
              <Route path="/case-studies" element={<CaseStudy />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/blogs" element={<BlogGrid />} />
              <Route path="/ai" element={<AIInsights />} />
              <Route
                exact
                path="/blogs/:blogId"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <BlogDetailPage />
                  </React.Suspense>
                }
              />
              <Route
                exact
                path="/video-portfolio/:primaryCategory"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <VideoPortfolio />
                  </React.Suspense>
                }
              />
              <Route
                exact
                path="/video-portfolio/:primaryCategory/:portfolioID"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <VideoPortfolioDetails />
                  </React.Suspense>
                }
              />
              <Route
                exact
                path="/case-studies/:caseStudyID"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <CaseStudyDetails />
                  </React.Suspense>
                }
              />
              <Route path="/auditions" element={<Auditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>

          <PageScrollTop />
        </BrowserRouter>

        <BackToTop />
      </>
    );
  }
}
function ThemeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Markup;
