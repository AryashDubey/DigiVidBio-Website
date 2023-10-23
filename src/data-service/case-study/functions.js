import axios from "axios";
import { getCaseStudyQuery, graphqlAPI } from ".";

export async function getCaseStudy() {
  try {
    return await axios({
      url: graphqlAPI,
      method: "post",
      data: {
        query: getCaseStudyQuery,
      },
    }).then((result) => {
      const posts = result.data.data.caseStudies;
      console.log(posts);
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
