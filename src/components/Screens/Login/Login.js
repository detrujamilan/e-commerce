import React, { useState } from "react";
import { InputFiled } from "../../../common/Inputs/InputFiled";
import ButtonField from "../../../common/Buttons/ButtonField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login
        </h2>
      </div>

      <div className="mt-10 flex justify-center flex-col items-center ">
        <div>
          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <InputFiled
                className="w-[20rem] "
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <InputFiled
                value={password}
                className="w-[20rem] "
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <ButtonField
            className="mt-5 w-full"
            title={"Login"}
            onclick={() => {
              console.log("hello");
            }}
          />
        </div>
        <p className="mt-5">
          Not a member?
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              navigate("/signup");
            }}
          >
            &nbsp;Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
