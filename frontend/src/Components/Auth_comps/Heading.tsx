import React from "react";
interface props {
  label: string;
}

const Heading = ({ label }: props) => {
  return <div className=" text-4xl font-extrabold text-center">{label}</div>;
};

export default Heading;
