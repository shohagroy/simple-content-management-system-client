import React from "react";

const PostTable = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Article Title</th>
              <th>Publish Date</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Like</th>
              <th>Viewers</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, i) => (
              <tr>
                <th>{i + 1}</th>
                <td className="  object-cover">
                  <img
                    className="rounded-md w-[80px] "
                    src="https://media.istockphoto.com/id/1331943301/photo/blog-light-bulb-sign.jpg?b=1&s=170667a&w=0&k=20&c=MFRhBXsnOE7tYSjYx2CLRJgGDzUD5Kxh9c0tH-wP7dk="
                    alt=""
                  />
                  <p className="w-[500px] overflow-hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti suscipit laudantium eos quis, commodi dignissimos
                    quaerat dolor odio hic quidem?
                  </p>
                </td>
                <td>Mar 21, 2023</td>
                <td>
                  <button className="btn">Tutorial</button>
                </td>
                <td>100</td>
                <td>13K</td>
                <td>30K</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostTable;
