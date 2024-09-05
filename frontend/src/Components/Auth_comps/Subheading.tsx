import { Link } from "react-router-dom";

interface props {
  label: string;
  login: boolean;
}

const Subheading = ({ label, login }: props) => {
  return (
    <div className=" flex  space-x-2 text-gray-500  items-center justify-center">
      <div className=" text-center">{label}</div>
      <span className=" underline ">
        {login ? (
          <Link to="/signin">Login </Link>
        ) : (
          <Link to="/signup"> Signup </Link>
        )}{" "}
      </span>
    </div>
  );
};

export default Subheading;
