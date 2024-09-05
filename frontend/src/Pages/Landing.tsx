import image from "../Utils/personal-blog.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className=" grid grid-cols-2 m-10 ">
      <div className=" m-10 space-y-9 flex  justify-center  flex-col">
        <div className=" animate-bounce text-8xl font-mono font-bold">
          Blog.io
        </div>
        <div className=" text-4xl text-slate-500 ">
          Share your stories ideas,experiences with the world
        </div>
        <Link to="/signup">
          <button
            type="button"
            className=" text-white max-w-sm bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            Start Blogging
          </button>
        </Link>
      </div>
      <div>
        <img className=" rounded-xl" src={image} alt="image" />
      </div>
    </div>
  );
};

export default Landing;
