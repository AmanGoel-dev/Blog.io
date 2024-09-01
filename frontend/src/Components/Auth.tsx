import React, { ChangeEvent, useState } from "react";
import Heading from "./Auth_comps/Heading";
import Subheading from "./Auth_comps/Subheading";
import Input from "./Auth_comps/Input";
import Inputemail from "./Auth_comps/InputEmail";
import Inputpassword from "./Auth_comps/Inputpassword";
import Button from "./Auth_comps/Button";
import { SignupType } from "amangoeldev-blog";
import axios from "axios";
import { Backend_Url } from "../../config";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [signupInputs, SetsignupInputs] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const Sendrequest = async () => {
    try {
      const response = await axios.post(
        `${Backend_Url}/api/v1/user/signup`,
        signupInputs
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      console.log("request failed to backend");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    SetsignupInputs((c) => ({ ...c, [e.target.name]: e.target.value }));
  };

  return (
    <div className=" w-2/3 p-5 space-y-3">
      <Heading label={"Creat an Account"} />
      <Subheading label={"Already have an account?"} login={true} />
      <Input label={"Username"} onchange={handleChange} />
      <Inputemail
        onchange={handleChange}
        label={"Email"}
        placeholder={"Example@gmail.com"}
      />
      <Inputpassword
        onchange={handleChange}
        label={"Password"}
        placeholder="John123"
      />
      <div>
        <Button onclick={Sendrequest} login={false} />
      </div>
    </div>
  );
};

export default Auth;
