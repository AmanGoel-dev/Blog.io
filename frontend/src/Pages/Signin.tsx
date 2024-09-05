import Quote from "../Components/Quote";
import LoginAuth from "../Components/LoginAuth";

const Signin = () => {
  return (
    <div className="  grid grid-cols-1 lg:grid-cols-2">
      <div className=" flex justify-center items-center">
        <LoginAuth />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
