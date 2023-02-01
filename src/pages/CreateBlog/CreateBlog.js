import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { modules, formats } from "./EditorToolbar";
import { AiOutlineBars } from "react-icons/ai";
import { BsTools } from "react-icons/bs";

const CreateBlog = () => {
  const [value, setValue] = useState("");

  console.log(value);
  const handelChange = (value) => {
    setValue(value);
  };

  const addBlogHandelar = (e) => {
    e.preventDefault();
    console.log(e);
    const blogName = e.target.blogName.value;
    console.log(blogName, value);
  };
  return (
    <section className="p-2 w-100  ">
      <div className="flex justify-between w-full">
        <div className="w-full text-center bg-gray-100">
          <div className="flex md:justify-center justify-between items-center">
            <AiOutlineBars
              className="p-2 bg-primary md:hidden rounded-lg text-white m-2"
              size={40}
            />
            <h1 className="p-2 text-lg md:text-2xl font-bold">
              Create New Blog
            </h1>
            <BsTools
              className="p-2 bg-primary md:hidden rounded-lg text-white m-2"
              size={40}
            />
          </div>
          <form onSubmit={addBlogHandelar} className="p-3">
            <input
              type="text"
              className="w-full border border-black p-2 rounded-md focus:outline-none"
              placeholder="Type Blog Name.."
              name="blogName"
              required
            />

            <div className="my-2 bg-white">
              <QuillToolbar />
              <ReactQuill
                className="md:h-[550px] h-[480px]"
                theme="snow"
                value={value}
                onChange={handelChange}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
              />
            </div>
            <div>
              <fieldset className="w-full space-y-1 text-gray-100">
                <div className="flex">
                  <input
                    type="file"
                    name="files"
                    id="files"
                    className="px-8 py-12 w-full border-2 border-dashed rounded-md border-gray-700 text-gray-900 bg-white"
                  />
                </div>
              </fieldset>
            </div>
            <div className="w-full mt-3 flex justify-end">
              <button className="bg-blue-300 hover:bg-blue-600 px-8 rounded-md py-2 font-bold duration-300 text-white">
                Add Your Blog
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-[400px] bg-blue-400">tools</div>
      </div>
    </section>
  );
};

export default CreateBlog;
