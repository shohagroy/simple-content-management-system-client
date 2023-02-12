import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import Button from "../../components/Button";
import firstToLast from "../../Redux/actions/firstToLast";

const Home = () => {
  const [sortByView, setSortByView] = useState("firstTolast");

  const dispatch = useDispatch();

  if (sortByView === "firstTolast") {
    dispatch(firstToLast());
  }

  const { blogs } = useSelector((state) => state.postBlog);

  let content;

  if (!blogs.length) {
    content = (
      <h1 className="w-full text-center font-bold text-3xl">Loading...</h1>
    );
  } else {
    content = <BlogCard posts={blogs} />;
  }

  return (
    <section className="h-screen bg-gray-100 w-full p-2 overflow-y-scroll no-scrollbar ">
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex justify-center md:justify-end md:my-3 ">
          <div className="text-gray-500 md:font-semibold">
            <button className="bg-primary/10 text-primary rounded-md m-1 md:px-4 p-1 ">
              Technical Blog
            </button>
            <button className="m-1 md:px-4 p-1 text-gray-500 ">
              Tutorial Blog
            </button>
            <button className="m-1 md:px-4 p-1 text-gray-500 ">
              Parsonel Blog
            </button>
            <button className="m-1 md:px-4 p-1 text-gray-500 ">All</button>
          </div>
        </div>
        <h2 className="w-full px-4  py-2 md:text-lg bg-white rounded-md font-bold">
          4 items found for category Entertainment!
        </h2>
        <div className="flex  flex-col-reverse md:flex-row justify-center items-center  md:justify-between p-4">
          <div className="flex items-center">
            <p>Sort by View:</p>
            <select
              onChange={(e) => setSortByView(e.target.value)}
              className="px-4 py-2 text-gray-500 bg-white ml-3 rounded-md"
            >
              <option value="firstTolast">First Upload</option>
              <option value="lastTofirst">Last Upload</option>
            </select>
          </div>
          <div className="flex  items-center font-bold">
            <Button>Today’s Pick</Button>
            <Button>Trending</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* {[1, 1, 1, 1, 1, 1].map((post, i) => (
          <div className="">
            <BlogCard key={i} />
            <DisplayCard key={i} />
          </div>
        ))} */}
        {content}
      </div>
    </section>
  );
};

export default Home;
