import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineStar, AiOutlineEye, AiFillStar } from "react-icons/ai";
import CommentFunction from "../../components/CommentFunction";

const BlogFullView = () => {
  const post = useLoaderData();

  console.log(post);
  return (
    <div className="max-w-[800px]  mx-auto">
      <div className="p-3">
        <h1 className="p-2 font-bold text-2xl">{post?.blogName}</h1>

        <div>
          <div className=" pt-2 w-full md:pr-10 bottom-4 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?3"
                />
                <div className="flex flex-col justify-center ml-4">
                  <p>{post.author}</p>
                  <span className="text-xs md:text-md text-gray-400">
                    {/* February 19, 2021 */}
                    {new Date(post?.postDate).toDateString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <AiOutlineEye size={20} className="mt-1" />
                <p className=" font-bold m-1">{post.view}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between md:hidden">
            <div className="flex items-center">
              <AiOutlineEye size={20} className="mt-1" />
              <p className=" font-bold m-1">{post.view}</p>
            </div>
          </div>
        </div>

        <div className=" w-full object-fill py-3 ">
          <img src={post.image} alt="article" className="  " />
        </div>

        <div dangerouslySetInnerHTML={{ __html: post?.blogText }} />

        <div className="my-4">
          <CommentFunction post={post} />
        </div>
      </div>
    </div>
  );
};

export default BlogFullView;
