import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="bg-indigo-600  text-center text-white lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left ">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">About</a>
              </p>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">Blog</a>
              </p>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">Jobs</a>
              </p>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">Press</a>
              </p>
              <p>
                <a className="text-white dark:text-neutral-200">Partners</a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Soluations
              </h6>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">Marketing</a>
              </p>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">Analytics</a>
              </p>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">Commerce</a>
              </p>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">Commerce</a>
              </p>
              <p>
                <a className="text-white dark:text-neutral-200">Insight</a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Documentation
              </h6>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">Guides</a>
              </p>
              <p className="mb-4">
                <a className="text-white dark:text-neutral-200">API Status</a>
              </p>
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Legal
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Claim
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Privacy
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Terms
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
