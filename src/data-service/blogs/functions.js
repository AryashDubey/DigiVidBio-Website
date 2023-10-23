import axios from "axios";
import { getPostQuery, graphqlAPI } from ".";

export async function getPosts() {
  try {
    return await axios({
      url: graphqlAPI,
      method: "post",
      data: {
        query: getPostQuery,
      },
    }).then((result) => {
      const data = result.data.data.posts;
      console.log(data);
      let posts = data;

      posts.sort(function (a, b) {
        var dateA = new Date(a.createdAt),
          dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      return posts;
    });
  } catch (e) {
    console.log(e);
  }

  console.log("set to true");
}
