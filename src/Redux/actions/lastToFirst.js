const lastToFirst = () => {
  return (dispatch, getStore) => {
    const { postBlog } = getStore();
    const { blogs } = postBlog;

    blogs.sort((a, b) => {
      const dateA = new Date(a.postDate);
      const dateB = new Date(b.postDate);
      return dateA - dateB;
    });
  };
};

export default lastToFirst;
