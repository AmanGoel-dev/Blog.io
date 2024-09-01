import React, { ChangeEvent } from "react";

interface props {
  placeholder: string;
  label: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Inputpassword = ({ placeholder, label, onchange }: props) => {
  return (
    <div>
      <div className="   text-base font-bold text-left py-2 text-black">
        {label}
      </div>
      <input
        type="password"
        name="password"
        className=" py-1 px-2 w-full border border-slate-300 rounded"
        placeholder={placeholder}
        onChange={onchange}
      />
    </div>
  );
};

export default Inputpassword;
