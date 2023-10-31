import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const unShowFooter =
    location.pathname !== "/" &&
    location.pathname !== "/signup" &&
    location.pathname !== "*";

  if (!unShowFooter) {
    return null;
  }

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
                <Link className="text-white dark:text-neutral-200">About</Link>
              </p>
              <p className="mb-4">
                <Link className="text-white dark:text-neutral-200">Blog</Link>
              </p>
              <p className="mb-4">
                <Link className="text-white dark:text-neutral-200">Jobs</Link>
              </p>
              <p className="mb-4">
                <Link className="text-white dark:text-neutral-200">Press</Link>
              </p>
              <p>
                <Link className="text-white dark:text-neutral-200">
                  Partners
                </Link>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Soluations
              </h6>
              <p className="mb-4">
                <Link className="text-white dark:text-neutral-200">
                  Marketing
                </Link>
              </p>
              <p className="mb-4">
                <Link className="text-white dark:text-neutral-200">
                  Analytics
                </Link>
              </p>
              <p className="mb-4">
                <Link className="text-white dark:text-neutral-200">
                  Commerce
                </Link>
              </p>
              <p className="mb-4">
                <Link className="text-white dark:text-neutral-200">
                  Commerce
                </Link>
              </p>
              <p>
                <Link className="text-white dark:text-neutral-200">
                  Insight
                </Link>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Documentation
              </h6>
              <p className="mb-4">
                <Link className="text-white dark:text-neutral-200">Guides</Link>
              </p>
              <p className="mb-4">
                <Link className="text-white dark:text-neutral-200">
                  API Status
                </Link>
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
