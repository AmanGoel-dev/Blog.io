interface blogprops {
  title: string;
  content: string;

  author: {
    name: string;
  };
}
const FullBlog = ({ title, content, author }: blogprops) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 ">
      <div className="p-6  space-y-3 col-span-2">
        <div className=" space-y-3">
          <div className=" font-bold text-4xl "> {title} </div>
          <div className=" text-slate-500 text-sm">Posted on August 2023</div>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className=" font-serif"
        ></div>
      </div>

      <div className=" mt-16 space-y-4">
        <div className=" font-semibold text-base">Author:</div>
        <div className=" flex space-x-2  pl-3 items-center ">
          <div className=" rounded-full text-base bg-gray-300 text-center w-8 h-8 flex justify-center items-center">
            {author.name[0]}
          </div>
          <div className=" font-bold text-xl">{author.name}</div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
