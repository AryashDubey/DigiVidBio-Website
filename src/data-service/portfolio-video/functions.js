import axios from "axios";
import { getVideoPortfolioQuery, graphqlAPI } from ".";

export async function getVideoPortfolio() {
  try {
    return await axios({
      url: graphqlAPI,
      method: "post",
      data: {
        query: getVideoPortfolioQuery,
      },
    }).then((result) => {
      const posts = result.data.data.portfolioPosts;

      posts.sort(function (a, b) {
        var dateA = new Date(a.createdAt),
          dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      return posts;
    });
  } catch {
    console.log("error");
  }

  console.log("set to true");
}
export const portfolioContent = [
  {
    title: "Training",
    slug: "training",
    iFrameLink: "https://vimeopro.com/digivid360/training",
  },
  {
    title: "Testimonials",
    slug: "testimonials",
    iFrameLink: "https://vimeopro.com/digivid360/testimonials",
  },
  {
    title: "Pre-recorded Webinar",
    slug: "pre-recorded-webinar",
    iFrameLink: "https://vimeopro.com/digivid360/pre-recorded-webinar",
  },
  {
    title: "Sales and Marketing",
    slug: "sales-and-marketing",
    iFrameLink: "https://vimeopro.com/digivid360/sales-an-marketing",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    iFrameLink: "https://vimeopro.com/digivid360/healthcare",
  },
  {
    title: "Education",
    slug: "education",
    iFrameLink: "https://vimeopro.com/digivid360/education",
  },
  {
    title: "Customer Support",
    slug: "customer-support",
    iFrameLink: "https://vimeopro.com/digivid360/customer-support",
  },
  {
    title: "Conferences",
    slug: "conferences",
    iFrameLink: "https://vimeopro.com/digivid360/conferences",
  },
  {
    title: "Scientific Content",
    slug: "scientific-content",
    iFrameLink: "https://vimeopro.com/digivid360/scientific-content",
  },
  {
    title: "Animated Videos",
    slug: "animated-videos",
    iFrameLink: "https://vimeopro.com/digivid360/animated",
  },
];
