import React, { useEffect, useState } from "react";
import { InputFiled } from "../../common/Inputs/InputFiled";
import ButtonField from "../../common/Buttons/ButtonField";
import { useNavigate } from "react-router-dom";
import Forms from "../../common/Forms/Forms";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "../../utils/utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const navigate = useNavigate();

  const handlLogin = () => {
    if (!email || !password) {
      toast.warning("Please required all fields");
      return;
    }
    const token = localStorage.getItem("token");

    const data = {
      email: email,
      password: password,
    };

    axios
      .post(`${baseUrl}/login`, data, {
        headers: {
          Authorization: `Bearer${token}`,
        },
      })
      .then((response) => {
        console.log("response", response);
        const token = response.data.jwt;
        localStorage.setItem("token",token);
        if (response.status === 200) {
          toast.success("Login successful");
        }
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error("Invalid email or password");
        }
        if (error.response.status === 401) {
          toast.error("Invalid Password");
        }
        console.log("error", error);
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
                className="text-blue-500 cursor-pointer select-none"
                onClick={() => navigate("/signup")}
              >
                &nbsp;Register
              </span>
            </p>
          }
        />
      </div>
    </>
  );
};

export default Login;
