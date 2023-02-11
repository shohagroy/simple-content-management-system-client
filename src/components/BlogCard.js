import React from "react";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

import { Link } from "react-router-dom";

const BlogCard = ({ posts }) => {
  return (
    <section className="max-w-[1200px] mx-auto ">
      {posts?.map((post) => (
        <div
          key={post._id}
          className="container my-2 bg-white rounded-md shadow-md w-full p-6 mx-auto space-y-6 sm:space-y-12"
        >
          <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white">
            <img
              src={post.image}
              alt="article"
              className=" object-cover rounded-md w-100 h-64 sm:h-96 lg:col-span-5 bg-white "
            />
            <div className="p-6 space-y-2 lg:col-span-7 relative">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {post.blogName}
              </h3>
              <div className="flex justify-end">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.blogText.slice(0, 400),
                  }}
                />
              </div>

              <div className="md:absolute pt-2 w-full md:pr-10 bottom-4 ">
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
                  <div className="hidden md:block">
                    <div className="flex items-center">
                      <AiOutlineEye size={20} className="mt-1" />
                      <p className=" font-bold m-1">{post.view}</p>
                    </div>
                    <div className="flex items-center">
                      <AiFillStar size={20} className="text-yellow-300" />
                      <AiOutlineStar size={20} className="" />
                      <AiOutlineStar size={20} className="" />
                      <AiOutlineStar size={20} className="" />
                      <AiOutlineStar size={20} className="" />
                    </div>
                  </div>

                  <div>
                    <Link to={`/blog/${post._id}`}>
                      <Button>
                        <FaArrowRight className="" size={30} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex justify-between md:hidden">
                <div className="flex items-center">
                  <AiOutlineEye size={20} className="mt-1" />
                  <p className=" font-bold m-1">{post.view}</p>
                </div>
                <div className="flex items-center">
                  <AiFillStar size={20} className="text-yellow-300" />
                  <AiOutlineStar size={20} className="" />
                  <AiOutlineStar size={20} className="" />
                  <AiOutlineStar size={20} className="" />
                  <AiOutlineStar size={20} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogCard;
