import React from "react";
import { Link } from "react-router-dom";
const Appbar = ({ authorname }: { authorname: string }) => {
  return (
    <div className=" flex justify-between  p-4 px-10 items-center border-b-2">
      <Link to="/blogs">
        <div className=" font-bold text-lg hover:cursor-pointer">Blog.io</div>
      </Link>

      <div className=" space-x-2 flex  items-center justify-center">
        <Link to="/publish">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            New Blog
          </button>
        </Link>

        <div className=" rounded-full text-base bg-gray-300 text-center w-10 h-10 flex justify-center items-center">
          {authorname[0]}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
