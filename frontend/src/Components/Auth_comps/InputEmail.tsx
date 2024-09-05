import { ChangeEvent } from "react";
interface props {
  placeholder: string;
  label: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Inputemail = ({ placeholder, label, onchange }: props) => {
  return (
    <div>
      <div className="  text-base font-bold text-left py-2 text-black">
        {label}
      </div>
      <input
        type="email"
        name="email"
        placeholder={placeholder}
        className=" px-2 py-1 border border-slate-300 rounded w-full"
        onChange={onchange}
      />
    </div>
  );
};

export default Inputemail;
