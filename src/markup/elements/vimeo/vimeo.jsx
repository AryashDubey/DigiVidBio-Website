import React from "react";
import ReactPlayer from "react-player";

const STYLES = {
  videoIframeContainer: {
    position: "relative",
    paddingTop: "56.25%", // This maintains a 16:9 aspect ratio
    width: "100%",
  },
  videoIframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
};

const VimeoEmbed = () => {
  return (
    <div style={STYLES.videoIframeContainer}>
      <ReactPlayer
        url="https://player.vimeo.com/video/884981797?h=751e2127ad&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
        controls
        style={STYLES.videoIframe}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VimeoEmbed;
