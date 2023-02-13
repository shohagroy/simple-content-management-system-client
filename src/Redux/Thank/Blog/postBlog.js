import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CREATEPOST } from "../../actionTypes/actionTypes";

const blogPublish = (content) => {
  return async (dispatch, getStore) => {
    console.log(content);
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/create-blog`,
      content
    );

    const data = res.data;

    if (data.insertedId) {
    }
    const { postBlog, dashbord } = getStore();

    console.log(postBlog.blogs);

    // const newData = [...postBlog.blogs, ...]

    const newPost = { ...content, _id: data.insertedId };

    const updateData = [...postBlog.blogs, newPost];

    dispatch({ type: CREATEPOST, payload: updateData });
  };
  // const navigate = useNavigate();
  // fetch(`${process.env.REACT_APP_SERVER_URL}/create-blog`, {
  //   method: "POST",
  //   headers: {
  //     authorization: `Bearer ${JSON.parse(localStorage.getItem("user-token"))}`,
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(content),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.insertedId) {
  //       return data.insertedId;
  //     }
  //     console.log(data);
  //   })
  //   .catch((err) => console.error(err));
};

export default blogPublish;
