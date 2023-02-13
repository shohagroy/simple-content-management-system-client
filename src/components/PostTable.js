import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import deletedPost from "../pages/Dashbord/EditPage/deletedPost";

const PostTable = ({ posts }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Article Title</th>
              <th>Publish Date</th>
              <th>Comment</th>
              <th>Like</th>
              <th>Viewers</th>
              <th>manage</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {posts?.map((data, i) => (
              <tr>
                <th>{i + 1}</th>
                <td className="  object-cover">
                  <img
                    className="rounded-md w-[80px] "
                    src={data?.image}
                    alt={data?.blogName}
                  />
                  <p className="w-[500px] overflow-hidden">{data?.blogName}</p>
                </td>
                <td>{new Date(data?.postDate).toDateString()}</td>

                <td>{data?.comment}</td>
                <td>13K</td>
                <td>{data?.view}</td>
                <td>
                  <Link
                    to={`/dashbord/update-blog/${data._id}`}
                    className="btn btn-sm bg-blue-600 text-white "
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => dispatch(deletedPost(data._id))}
                    className="btn btn-sm bg-red-600  text-white ml-2"
                  >
                    deleted
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostTable;
