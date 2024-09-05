import { ChangeEvent } from "react";

interface props {
  label: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, onchange }: props) => {
  return (
    <div>
      <div className=" text-base font-bold text-left py-2 text-black">
        {label}
      </div>
      <div>
        <input
          className=" w-full border border-slate-200 rounded py-1 px-2"
          type="text"
          name="name"
          placeholder="Enter your username"
          onChange={onchange}
        />
      </div>
    </div>
  );
};

export default Input;
