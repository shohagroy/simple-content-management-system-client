const firstToLast = () => {
  return (dispatch, getStore) => {
    console.log("first to last call");
    const { postBlog } = getStore();
    const { blogs, comments } = postBlog;

    console.log(blogs, comments);

    const firstUpload = blogs.sort((a, b) => a.postDate - b.postDate);

    console.log(firstUpload);
  };
};

export default firstToLast;
