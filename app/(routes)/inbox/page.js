"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Inbox = () => {
  const [searchInboxValue, setSearchInboxValue] = useState("");

  useEffect(() => {
    setSearchInboxValue("");
  }, []);

  return (
    <>
      <div className="bg-gray-950 flex flex-col w-full h-screen">
        <div className=" flex justify-center items-center pt-4 ">
          <div className=" bg-slate-400 flex w-2/3 justify-between py-4 px-3 rounded-md">
            <Link href="/">
              <button className="before:transtion-opacity group relative isolate hidden items-center justify-center overflow-hidden rounded-md bg-gray-900 px-3 py-[0.1875rem] text-sm font-medium text-white shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-gray-900 transition duration-300 md:inline-flex">
                Back
              </button>
            </Link>

            <div className="w-80 ">
              <input
                onChange={(e) => setSearchInboxValue(e.target.value)}
                id="autocomplete-1-input"
                placeholder="Search"
                className=" focus:outline-none font-medium rounded-md mr-2 px-2  py-1 "
                type="text"
                value={searchInboxValue}
              ></input>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center ">
          <div className="w-2/3 flex justify-center items-center">
            <ul className="w-full">
              <li className="flex px-3 text-lg font-bold py-1 mt-2 rounded-sm bg-blue-400 justify-between w-full">
                <span> From </span>
                <span> Subject</span>
                <span> Date</span>
              </li>

              <Link
                href="/"
                className="flex px-3 py-1 mt-2 rounded-sm bg-slate-200 justify-between w-full"
              >
                <span> usama@gmail.com </span>
                <span className="justify-start ">
                  I hope you are doing well
                </span>
                <span> Mon, 24 Jun 2024 19:12:49 +0000</span>
              </Link>

              <li className="flex px-3 py-1 mt-2 rounded-sm bg-slate-200 justify-between w-full">
                <span> usama@gmail.com </span>
                <span className="justify-start ">
                  association dedicated to combating waste, progressively
                  expanding its
                </span>
                <span> Mon, 24 Jun 2024 19:12:49 +0000</span>
              </li>
              <li className="flex px-3 py-1 mt-2 rounded-sm bg-slate-200 justify-between w-full">
                <span> usama@gmail.com </span>
                <span className="justify-start ">
                  Here’s your confirmation code 👍
                </span>
                <span> Mon, 24 Jun 2024 19:12:49 +0000</span>
              </li>
              <li className="flex px-3 py-1 mt-2 rounded-sm bg-slate-200 justify-between w-full">
                <span> usama@gmail.com </span>
                <span className="justify-start ">
                  Founded in 2013 in Paris, NO MORE WASTE is a humanitarian
                </span>
                <span> Mon, 24 Jun 2024 19:12:49 +0000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Inbox;
