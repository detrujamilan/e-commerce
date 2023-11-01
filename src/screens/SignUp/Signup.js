import React, { useEffect, useState } from "react";
import { InputFiled } from "../../common/Inputs/InputFiled";
import ButtonField from "../../common/Buttons/ButtonField";
import { useNavigate } from "react-router-dom";
import Forms from "../../common/Forms/Forms";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "../../utils/utils";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password || !firstName || !lastName) {
      toast.warning("Please required all fields");
      return;
    }
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };

    axios
      .post(`${baseUrl}/signup`, data)
      .then((data) => {
        // if (data.status === 200) {
        //   toast.success("registration successful");
        // }
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        const token = data.data.token;
        localStorage.setItem("token", token);
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.log(error);
        // if (error.response.status === 400) {
        //   toast.error(error.response.data.message);
        // }
      });
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
          height: screenHeight - 100,
          alignItems: "center",
        }}
      >
        <Forms
          pagetitle={"Sign in to your account"}
          EmailLabel={"Email Address"}
          firstNameLabel={"First Name"}
          lastNameLabel={"Last Name"}
          firstNameInput={
            <InputFiled
              value={firstName}
              type="email"
              className="w-[20rem] "
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          }
          lastNameInput={
            <InputFiled
              value={lastName}
              type="email"
              className="w-[20rem] "
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          }
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
