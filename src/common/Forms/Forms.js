import React from "react";

const Forms = ({
  pagetitle,
  EmailLabel,
  PasswordLabel,
  passwordInput,
  emailInput,
  ButtonField,
  pageDescription,
  ButtonFieldLogin,
  firstNameLabel,
  firstNameInput,
  lastNameInput,
  lastNameLabel,
}) => {
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {pagetitle}
          </h2>
        </div>

        <div className="mt-10 flex justify-center flex-col items-center ">
          <div>
            <div className="mt-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                {firstNameLabel}
              </label>
              <div className="mt-2">{firstNameInput}</div>
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                {lastNameLabel}
              </label>
              <div className="mt-2">{lastNameInput}</div>
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                {EmailLabel}
              </label>
              <div className="mt-2">{emailInput}</div>
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                {PasswordLabel}
              </label>
              <div className="mt-2">{passwordInput}</div>
            </div>
            {ButtonField}
            {ButtonFieldLogin}
          </div>
          {pageDescription}
        </div>
      </div>
    </div>
  );
};

export default Forms;
