import React from "react";
import { AiOutlineEye, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

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
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className=" object-contain w-100 h-64 sm:h-96 lg:col-span-5 bg-white "
            />
            <div className="p-6 space-y-2 lg:col-span-7 relative">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>

              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>

              <div className="md:absolute pt-2 w-full md:pr-10 bottom-4 ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      alt=""
                      className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                      src="https://source.unsplash.com/40x40/?portrait?3"
                    />
                    <div className="flex flex-col justify-center ml-4">
                      <p>Jane Cooper</p>
                      <span className="text-xs md:text-md text-gray-400">
                        February 19, 2021
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center">
                      <AiOutlineEye size={20} className="mt-1" />
                      <p className=" font-bold m-1">1.5M</p>
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
                    <button></button>
                    <Button>
                      <FaArrowRight className="" size={30} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between md:hidden">
                <div className="flex items-center">
                  <AiOutlineEye size={20} className="mt-1" />
                  <p className=" font-bold m-1">1.5M</p>
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

    // <div className="max-w-[1200px] mx-auto my-2 bg-white rounded-md p-4 flex items-center flex-col md:flex-row h-full">
    //   <div className="">
    //     <img
    //       className="h-[300px] w-full"
    //       src="https://source.unsplash.com/100x100/?portrait"
    //       alt="Blog"
    //     />
    //   </div>
    //   <div>
    //     <h2 className="font-bold md:text-2xl md:my-2">
    //       The best fashion influencers to follow for sartorial inspiration
    //     </h2>
    //     <p>
    //       From our favourite UK influencers to the best missives from Milan and
    //       the coolest New Yorkers, read on some of the best fashion blogs out
    //       there, and for even more inspiration, do head to our separate black
    //       fashion influencer round-up. Fancy some shopping deals? Check out
    //       these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma
    //       Black Friday and Gucci Black Friday...
    //     </p>
    // <div>
    //   <div>
    //     <img src="" alt="author" />
    //     <div>
    //       <p>Jane Cooper</p>
    //       <p>Jan 10, 2022 </p>
    //     </div>
    //   </div>
    //   <div>
    //     <AiOutlineEye />
    //     <p className="md:text-xl font-bold">1.5M</p>
    //   </div>
    //   <div>
    //     <AiOutlineStar />
    //     <AiFillStar className="text-yellow-300" />
    //     <AiOutlineStar />
    //     <AiOutlineStar />
    //     <AiOutlineStar />
    //   </div>
    //   <div>
    //     <FaArrowRight />
    //   </div>
    // </div>
    //   </div>
    // </div>
  );
};

export default BlogCard;
