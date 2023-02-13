import { TODAYSPICK } from "../actionTypes/actionTypes";

const todaysPick = () => {
  return (dispatch, getStore) => {
    const { postBlog } = getStore();
    const { todayPost, blogs } = postBlog;
    if (!todayPost) {
      const posts = blogs.filter(
        (blog) =>
          new Date(blog.postDate).toDateString() === new Date().toDateString()
      );

      console.log(posts);

      if (!posts.length) {
        dispatch({ type: TODAYSPICK, payload: "No data found!" });
      } else {
        dispatch({ type: TODAYSPICK, payload: posts });
      }
    }
  };
};

export default todaysPick;
