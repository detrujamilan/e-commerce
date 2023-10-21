import React, { useState } from "react";
import { InputFiled } from "../../common/Inputs/InputFiled";
import ButtonField from "../../common/Buttons/ButtonField";
import { useNavigate } from "react-router-dom";
import Forms from "../../common/Forms/Forms";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlLogin = () => {
    if (!email || !password) {
      toast.warning("Please required all fields");
      return;
    }
  };
  return (
    <>
      <ToastContainer />
      <Forms
        pagetitle={"Login"}
        EmailLabel={"Email Address"}
        emailInput={
          <InputFiled
            value={email}
            type="email"
            className="w-[20rem] "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        }
        PasswordLabel={"Password"}
        passwordInput={
          <InputFiled
            value={password}
            type="password"
            className="w-[20rem] "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        }
        ButtonField={
          <ButtonField
            title={"Login"}
            className="w-full mt-5"
            onclick={handlLogin}
          />
        }
        pageDescription={
          <p className="mt-5">
            Not a member?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              &nbsp;Register
            </span>
          </p>
        }
      />
    </>
  );
};

export default Login;