import React, { useEffect } from "react";
import { HiUserGroup } from "react-icons/hi";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import PostTable from "../../components/PostTable";
import { useDispatch, useSelector } from "react-redux";
import dashbordCallData from "../../Redux/actions/dashbord/dashbordDataCall";

const Dashbord = () => {
  const dispatch = useDispatch();
  const { dashbord, postBlog, loginUser } = useSelector((state) => state);

  console.log(loginUser.userAuth);

  const { dashbordData } = dashbord;

  useEffect(() => {
    if (loginUser.userAuth) {
      dispatch(dashbordCallData(loginUser.userAuth));
    }
  }, [dispatch, loginUser]);

  return (
    <div className="w-full grid grid-cols-8">
      <div className=" col-span-6">
        <div className="grid grid-cols-4 gap-4 ">
          <div className="flex justify-center shadow-md p-4 items-center bg-white rounded-md m-3">
            <HiUserGroup
              size={60}
              className="p-2 bg-green-400/20 text-green-500 rounded-md"
            />
            <div className="text-center ml-4">
              <p className="text-2xl font-bold">15,340</p>
              <p>Followers</p>
            </div>
          </div>

          <div className="flex justify-center shadow-md p-4 items-center bg-white rounded-md m-3">
            <BsFillFileEarmarkPostFill
              size={60}
              className="p-2 bg-orange-400/20 text-orange-500 rounded-md"
            />
            <div className="text-center ml-4">
              <p className="text-2xl font-bold">{dashbordData.length}</p>
              <p>Post</p>
            </div>
          </div>

          <div className="flex justify-center shadow-md p-4 items-center bg-white rounded-md m-3">
            <FcLike
              size={60}
              className="p-2 bg-red-400/20 text-red-500 rounded-md"
            />
            <div className="text-center ml-4">
              <p className="text-2xl font-bold">12K</p>
              <p>Like</p>
            </div>
          </div>

          <div className="flex justify-center shadow-md p-4 items-center bg-white rounded-md m-3">
            <AiOutlineLineChart
              size={60}
              className="p-2 bg-blue-400/20 text-blue-500 rounded-md"
            />
            <div className="text-center ml-4">
              <p className="text-2xl font-bold">
                {dashbordData?.reduce(
                  (value, post) => value + parseInt(post.view),
                  0
                )}
              </p>
              <p>Total View</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white row-span-2 col-span-2 p-2">
        <div className="px-4">
          <p className=" font-bold text-xl">Resent Comment</p>
        </div>

        {[1, 1, 1, 1, 1].map((comment, i) => (
          <div key={i} className="rounded-md bg-white m-2 shadow-lg p-4 flex">
            <img
              className="w-[80px] h-[80px] rounded-xl"
              src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
              alt=""
            />
            <p className="mx-2">
              <span className="text-primary font-bold">Puja Roy</span>{" "}
              <span className="text-gray-400">has commented</span> <br /> i
              think ISO will make Apple user will feel happy with many new{" "}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full   col-span-6 p-4">
        <PostTable posts={dashbordData} />
      </div>
    </div>
  );
};

export default Dashbord;
