const Quote = () => {
  return (
    <div className="  bg-slate-300 flex flex-col justify-center  items-center h-screen ">
      <div className=" max-w-md">
        <div className=" text-3xl   font-bold">
          " The Customer Service I received was exceptional. The support team
          went above and beyond to address my concern. "
        </div>
        <div className=" flex flex-col mt-3">
          <div className="  items-start  font-semibold text-xl">
            Jules Winnfield
          </div>
          <div className=" text-gray-500 font-medium text-lg">CEO,Acme Inc</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
