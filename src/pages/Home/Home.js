import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import firstToLast from "../../Redux/actions/firstToLast";
import lastToFirst from "../../Redux/actions/lastToFirst";
import todaysPick from "../../Redux/actions/todaysPick";
import tradindPost from "../../Redux/actions/tredingPost";

const Home = () => {
  const [sortByView, setSortByView] = useState("");
  const dispatch = useDispatch();

  const { viewPost, todayPost, trendingPost } = useSelector(
    (state) => state.postBlog
  );

  useEffect(() => {
    if (sortByView === "firstTolast") {
      dispatch(firstToLast());
    } else {
      dispatch(lastToFirst());
    }
  }, [sortByView, dispatch]);

  let content;

  if (!viewPost.length) {
    content = (
      <h1 className="w-full text-center font-bold text-3xl">Loading...</h1>
    );
  } else if (viewPost === "No data found!") {
    content = (
      <h1 className="w-full text-center font-bold text-3xl">No data found!</h1>
    );
  } else {
    content = <BlogCard posts={viewPost} />;
  }

  return (
    <section className="h-screen bg-gray-100 w-full p-2 overflow-y-scroll no-scrollbar ">
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex justify-center md:justify-end md:my-3 ">
          <div className="text-gray-500 md:font-semibold">
            <button className="m-1 md:px-4 p-1 text-gray-500">
              Technical Blog
            </button>
            <button className="bg-primary/10 text-primary rounded-md m-1 md:px-4 p-1 ">
              Tutorial Blog
            </button>
            <button className="m-1 md:px-4 p-1 text-gray-500 ">
              Parsonel Blog
            </button>
            <button className="m-1 md:px-4 p-1 text-gray-500 ">All</button>
          </div>
        </div>

        <h2 className="w-full px-4  py-2 md:text-lg bg-white rounded-md font-bold">
          {viewPost === "No data found!" ? 0 : viewPost.length} items found for
          Tutorial Blog!
        </h2>

        <div className="flex  flex-col-reverse md:flex-row justify-center items-center  md:justify-between p-4">
          <div className="flex items-center">
            <p>Sort by View:</p>
            <select
              onChange={(e) => setSortByView(e.target.value)}
              className="px-4 py-2 text-gray-500 bg-white ml-3 rounded-md"
            >
              <option value="firstTolast">First Upload</option>
              <option selected value="lastTofirst">
                Last Upload
              </option>
            </select>
          </div>
          <div className="flex  items-center font-bold">
            <button
              onClick={() => dispatch(todaysPick())}
              className={`py-2 hover:text-white text-primary px-4 border border-primary duration-300 hover:bg-primary rounded-lg m-2 ${
                todayPost && "bg-primary text-white"
              }`}
            >
              Today’s Pick
            </button>

            <button
              onClick={() => dispatch(tradindPost())}
              className={`py-2 hover:text-white text-primary px-4 border border-primary duration-300 hover:bg-primary rounded-lg m-2 ${
                trendingPost && "bg-primary text-white"
              }`}
            >
              Trending
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">{content}</div>
    </section>
  );
};

export default Home;
