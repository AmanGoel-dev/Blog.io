import UserBlog from "../Hooks/UserBlog";
import { useParams } from "react-router-dom";
import FullBlog from "../Components/FullBlog";

const Blog = () => {
  const { id } = useParams();

  const { loading, blog } = UserBlog({ id });

  if (loading) {
    return (
      <div className=" flex  justify-center items-center h-screen">
        <div className="w-full max-w-2xl mx-auto animate-pulse p-9 space-y-10">
          <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600 "></h1>
          <div>
            <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
        </div>
      </div>
    );
  }
  if (!blog) {
    return (
      <div className=" m-12 flex justify-center items-center  ">
        <div className=" text-3xl font-bold border-2 p-4 ">Blog not found.</div>
        ;
      </div>
    );
  }

  return (
    <div>
      <div className=" m-12">
        <FullBlog
          title={blog.title}
          content={blog.content}
          author={blog.author}
        />
      </div>
    </div>
  );
};

export default Blog;
