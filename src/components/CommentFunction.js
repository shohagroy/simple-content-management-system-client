import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import postComment from "../Redux/actions/postComment";

const CommentFunction = ({ post, id }) => {
  const [commentLoading, setCommentLoading] = useState(false);

  const { user, loading, error } = useSelector(
    (state) => state.loginUser.userAuth
  );

  const dispatch = useDispatch();

  const { comments } = useSelector((state) => state.postBlog);
  const postComments = comments.filter((comment) => comment.postId === id);

  const commentHandelar = (e) => {
    setCommentLoading(true);
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const postId = post._id;
    const commentDate = new Date();

    const publicComment = { comment, userEmail, userName, postId, commentDate };

    dispatch(postComment(publicComment));

    form.comment.value = "";
    form.userName.value = "";
    form.userEmail.value = "";
  };
  return (
    <div>
      <div className="md:my-6 w-full">
        <form onSubmit={(e) => commentHandelar(e)}>
          <p>Leave a Comment:</p>
          <textarea
            name="comment"
            placeholder="Enter your comment hare..."
            cols="30"
            rows="4"
            required
            className="w-full border-2 border-black p-2"
          ></textarea>
          <div>
            <p>
              Fill in your details below or{" "}
              <Link to="/login" className="text-blue-400 font-bold">
                Login
              </Link>
            </p>
          </div>
          <input
            type="text"
            name="userName"
            value={user?.displayname}
            required
            className="w-full border p-2 my-1 border-black"
            placeholder="Name (Require)"
          />
          <input
            type="email"
            name="userEmail"
            required
            defaultValue={user?.email}
            className="w-full border p-2 my-1 border-black"
            placeholder="Email (Require)"
          />

          <div className="w-full flex justify-end my-2">
            <button className="py-2 px-6 hover:bg-primary hover:text-white duration-300 rounded-md border">
              {commentLoading ? "Please Wait..." : "Post Comment"}
            </button>
          </div>
        </form>
      </div>

      {/* comment card */}
      {postComments?.length > 0 && (
        <div className="w-full">
          <p className="text-xl">
            <span className="font-bold">{postComments.length}</span> comment to
            "<span className="font-bold">{post.blogName}</span>"
          </p>

          {postComments?.map((comment) => (
            <div
              key={comment._id}
              className="w-full bg-white shadow-md border md:p-3 mt-2 rounded-md"
            >
              <div className="flex items-center">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?3"
                  alt=""
                  className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                />
                <p className="ml-3 ">
                  <span className="font-bold">{comment.userName}</span> Says:
                </p>
              </div>
              <p>
                {" "}
                <small>
                  {new Date(comment?.commentDate).toLocaleString()}{" "}
                </small>
              </p>

              <p className="font-serif py-2">{comment.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentFunction;
