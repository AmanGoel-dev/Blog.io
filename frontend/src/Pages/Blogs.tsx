import React from "react";
import Blogcard from "../Components/Blogcard";
import Appbar from "../Components/Appbar";

import Useblogs from "../Hooks/Useblogs";
import Skeleton from "../Components/Skeleton";
const Blogs = () => {
  const { loading, blogs } = Useblogs();
  if (loading) {
    return (
      <div>
        <div className=" space-y-10">
          <div className=" flex justify-center m-5  ">
            <div className=" w-2/4">
              <Skeleton />
            </div>
          </div>
          <div className=" flex justify-center m-5 ">
            <div className=" w-2/4">
              <Skeleton />
            </div>
          </div>
          <div className=" flex justify-center m-5 ">
            <div className=" w-2/4">
              <Skeleton />
            </div>
          </div>
          <div className=" flex justify-center m-5 ">
            <div className=" w-2/4">
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className=" flex justify-center">
        <div className="w-[50rem]">
          {blogs.map((blog: any) => {
            return (
              <Blogcard
                id={blog.id}
                key={blog.id}
                authorname={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"Dec 6,2023"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
