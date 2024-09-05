import { Link } from "react-router-dom";

interface Blogprops {
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

const Blogcard = ({
  authorname,
  title,
  content,
  publishedDate,
  id,
}: Blogprops) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="m-6 flex flex-col space-y-2 border-b-2 p-4 min-w-60">
        <div>
          <div className=" flex justify-start pl-2  space-x-2 items-center">
            <div className=" rounded-full text-sm bg-gray-300 text-center w-7 h-7 flex justify-center items-center">
              {authorname[0]}
            </div>
            <span className=" font-light text-black">{authorname} </span>{" "}
            <span>-</span>
            <span className=" text-slate-500">{publishedDate}</span>
          </div>
        </div>
        <div className=" pl-2 text-2xl font-bold">{title}</div>
        <div className=" space-y-5">
          <div
            dangerouslySetInnerHTML={{ __html: content.slice(0, 100) }}
            className=" pl-2 text-lg font-normal  text-gray-800 font-serif"
          ></div>
          <div className=" pl-2 text-slate-500 font-thin text-sm">{`${Math.ceil(
            content.length / 100
          )} minutes `}</div>
        </div>
      </div>
    </Link>
  );
};

export default Blogcard;
