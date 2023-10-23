import React from "react";
import LazyLoadImage from "react-lazy-load-image-component";

const MainBannerGif = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
    />
    <span>{image.caption}</span>
  </div>
);

export { MainBannerGif };
