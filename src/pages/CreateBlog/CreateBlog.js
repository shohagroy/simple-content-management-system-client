import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { modules, formats } from "./EditorToolbar";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { POSTBLOG } from "../../Redux/actionTypes/actionTypes";

const CreateBlog = () => {
  const [contant, setContent] = useState({});
  const [blogText, setBlogText] = useState("");

  console.log(contant);
  const handelChange = (blogText) => {
    setBlogText(blogText);
    setContent({ ...contant, blogText: blogText });
  };

  const dispatch = useDispatch();

  return (
    <section className="p-2 w-100  ">
      <div className="flex justify-between w-full">
        <div className="w-full h-full text-center bg-gray-100">
          <div className="flex md:justify-center justify-between items-center">
            <RiBarChartHorizontalFill
              className="p-2 bg-primary md:hidden rounded-lg text-white m-2 cursor-pointer"
              size={30}
            />
            <h1 className="p-2 text-lg md:text-2xl font-bold">
              Create New Blog
            </h1>
            <BsTools
              className="p-2 bg-primary md:hidden rounded-lg text-white m-2 cursor-pointer"
              size={30}
            />
          </div>
          <div className="p-3">
            <input
              onChange={(e) =>
                setContent({
                  ...contant,
                  blogName: e.target.value,
                })
              }
              type="text"
              className="w-full border border-black p-2 rounded-md focus:outline-none"
              placeholder="Type Blog Name.."
              name="blogName"
              required
            />

            <div className="my-2 bg-white">
              <QuillToolbar />
              <ReactQuill
                className="md:h-[500px] h-[480px]"
                theme="snow"
                value={blogText}
                onChange={handelChange}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
              />
            </div>
            <div>
              {/* <fieldset className="w-full space-y-1 text-gray-100">
                <div className="flex">
                  <input
                    type="file"
                    name="files"
                    id="files"
                    className="px-8 py-12 w-full border-2 border-dashed rounded-md border-gray-700 text-gray-900 bg-white"
                  />
                </div>
              </fieldset> */}
              <p className="text-left font-blod mg:text-lg font-serif">
                Image Link
              </p>
              <input
                type="text"
                className="w-full border border-black p-2 rounded-md focus:outline-none"
                placeholder="Type Blog image link.."
                onChange={(e) =>
                  setContent({ ...contant, image: e.target.value })
                }
                required
              />
            </div>

            <div className="md:my-3">
              <p className="text-left font-blod mg:text-lg font-serif">Tags</p>
              <input
                type="text"
                className="w-full border border-black p-2 rounded-md focus:outline-none"
                placeholder="Type Blog Tags.."
                onChange={(e) =>
                  setContent({ ...contant, tags: e.target.value })
                }
                required
              />
            </div>
            <div className="w-full mt-3 flex justify-center items-center ">
              <button
                onClick={() => dispatch({ type: POSTBLOG, payload: contant })}
                className="bg-blue-300 hover:bg-blue-600 px-8 rounded-md py-2 font-bold duration-300 text-white"
              >
                Publish
              </button>
              <button className="bg-blue-300 mx-3 hover:bg-blue-600 px-8 rounded-md py-2 font-bold duration-300 text-white">
                To Draft
              </button>
              <button className="bg-blue-300 hover:bg-blue-600 px-8 rounded-md py-2 font-bold duration-300 text-white">
                Preview
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[400px] bg-blue-400">tools</div>
      </div>
    </section>
  );
};

export default CreateBlog;
