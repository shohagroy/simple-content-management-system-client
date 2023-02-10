import { useNavigate } from "react-router-dom";

const blogPublish = (content) => {
  // const navigate = useNavigate();

  fetch(`${process.env.REACT_APP_SERVER_URL}/create-blog`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${JSON.parse(localStorage.getItem("user-token"))}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(content),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.insertedId) {
        return data.insertedId;
      }
      console.log(data);
    })
    .catch((err) => console.error(err));
};

export default blogPublish;
