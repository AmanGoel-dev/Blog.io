import Quote from "../Components/Quote";
import Auth from "../Components/Auth";

const Signup = () => {
  return (
    <div className="  grid grid-cols-1 lg:grid-cols-2">
      <div className=" flex justify-center items-center">
        <Auth />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
