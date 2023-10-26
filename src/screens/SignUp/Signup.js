import React, { useEffect, useState } from "react";
import { InputFiled } from "../../common/Inputs/InputFiled";
import ButtonField from "../../common/Buttons/ButtonField";
import { useNavigate } from "react-router-dom";
import Forms from "../../common/Forms/Forms";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      toast.warning("Please required all fields");
      return;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <ToastContainer />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: screenHeight,
          alignItems: "center",
        }}
      >
        <Forms
          pagetitle={"Sign in to your account"}
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
              title={"Sign Up"}
              className="w-full mt-5"
              onclick={handleSignup}
            />
          }
          pageDescription={
            <p className="mt-5">
              Already a user?
              <span
                className="text-blue-500 cursor-pointer select-none"
                onClick={() => navigate("/")}
              >
                &nbsp;LOGIN
              </span>
            </p>
          }
        />
      </div>
    </>
  );
};

export default Signup;
