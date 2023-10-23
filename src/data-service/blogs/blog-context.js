import { createContext, useEffect, useState } from "react";
import { getPosts } from "./functions";

const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState();
  const fetchBlogs = async () => {
    const blogPosts = [];
    const posts = await getPosts();
    if (posts.length === 0) {
      return;
    }
    posts.forEach((post) => {
      blogPosts.push(post);
    });

    setBlogs(blogPosts);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogBySlug = async (slug) => {
    console.log("fetchBlogBySlug" + slug);

    if (blogs.length === 0) {
      console.log("blogs.length > 0");
      await fetchBlogs();
    }
    const post = blogs.filter((blog_post) => blog_post.slug === slug);
    if (post === undefined || post.length === 0) {
      return;
    }

    setSelectedBlog(post[0]);
  };
  // Add an empty dependency array to run this effect only once.

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        selectedBlog,
        setSelectedBlog,
        fetchBlogBySlug,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogContextProvider };
