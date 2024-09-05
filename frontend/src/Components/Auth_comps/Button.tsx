import { MouseEvent } from "react";
import { Link } from "react-router-dom";

interface props {
  login: boolean;
  onclick: (e: MouseEvent<HTMLDivElement>) => void;
}
const Button = ({ login, onclick }: props) => {
  return (
    <div
      onClick={onclick}
      className=" bg-black text-white font-medium text-center p-2 text-lg rounded-md  hover:cursor-pointer"
    >
      {login ? (
        <Link to="/blogs">Login </Link>
      ) : (
        <Link to="/blogs">Sign Up</Link>
      )}
    </div>
  );
};

export default Button;
