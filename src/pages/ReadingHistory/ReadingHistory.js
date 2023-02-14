import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import removeReadingHistory from "../../Redux/actions/removeReadingHistory";

const ReadingHistory = () => {
  const { readingBlog } = useSelector((state) => state.postBlog);
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="max-w-[1200px] min-h-[70vh] mx-auto ">
        <div className="p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-900">
          <h2 className="text-xl font-semibold">Your Reading History..</h2>
          <ul className="flex flex-col divide-y divide-gray-700">
            {readingBlog?.map((blog) => (
              <li
                key={blog._id}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                    src={blog.image}
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                          {blog.blogName}
                        </h3>
                        <p className="text-sm text-gray-400">Tutorial Blog</p>
                      </div>
                      <div className="text-right">
                        <Link to={`/blog/${blog._id}`}>
                          <Button>Continue Reading</Button>
                        </Link>

                        <button
                          className="p-2 px-3 bg-red-600 rounded-md text-white"
                          onClick={() =>
                            dispatch(removeReadingHistory(blog._id))
                          }
                        >
                          Remove From History
                        </button>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: blog.blogText.slice(0, 500),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-center space-x-4">
            <Link to="/" type="button" className="">
              <Button> Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingHistory;
