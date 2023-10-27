import { createContext, useEffect, useState } from "react";
import { getVideoPortfolio } from "./functions";

const VideoPortfolioContext = createContext();

const VideoPortfolioProvider = ({ children }) => {
  const [videoPortfolio, setVideoPortfolio] = useState([]);
  const [selectedVideoPortfolio, setSelectedVideoPortfolio] = useState();
  const fetchVideoPortfolio = async () => {
    const videoPortfolios = [];
    const vpf = await getVideoPortfolio();
    if (vpf.length === 0) {
      return;
    }
    vpf.forEach((post) => {
      videoPortfolios.push(post);
    });

    setVideoPortfolio(videoPortfolios);
  };
  useEffect(() => {
    // fetchVideoPortfolio();
  }, []);

  const fetchVideoPortfolioBySlug = async (slug) => {
    console.log("fetchBlogBySlug" + slug);

    if (videoPortfolio.length === 0) {
      console.log("VideoPortfolio.length > 0");
      await fetchVideoPortfolio();
    }
    const post = videoPortfolio.filter((vpf) => vpf.slug === slug);
    if (post === undefined || post.length === 0) {
      return;
    }

    setSelectedVideoPortfolio(post[0]);
  };
  // Add an empty dependency array to run this effect only once.

  return (
    <VideoPortfolioContext.Provider
      value={{
        videoPortfolio,
        setVideoPortfolio,
        selectedVideoPortfolio,
        setSelectedVideoPortfolio,
        fetchVideoPortfolioBySlug,
      }}
    >
      {children}
    </VideoPortfolioContext.Provider>
  );
};

export { VideoPortfolioContext, VideoPortfolioProvider };
