import React, { ChangeEvent, useState } from "react";
import Heading from "./Auth_comps/Heading";
import Subheading from "./Auth_comps/Subheading";
import Inputemail from "./Auth_comps/InputEmail";
import Inputpassword from "./Auth_comps/Inputpassword";
import Button from "./Auth_comps/Button";
import { SigninType } from "amangoeldev-blog";
import axios from "axios";
import { Backend_Url } from "../../config";
import { useNavigate } from "react-router-dom";

const LoginAuth = () => {
  const [signinInputs, setsigninInputs] = useState<SigninType>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const Sendrequest = async () => {
    try {
      const response = await axios.post(
        `${Backend_Url}/api/v1/user/signin`,
        signinInputs
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      console.log("request failed for bakend");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setsigninInputs((c) => ({ ...c, [e.target.name]: e.target.value }));
  };

  return (
    <div className=" w-2/3 p-5 space-y-3">
      <Heading label={"Login to Account"} />
      <Subheading label={"Don't have an account?"} login={false} />
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
        <Button onclick={Sendrequest} login={true} />
      </div>
    </div>
  );
};

export default LoginAuth;
