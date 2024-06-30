"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className=" flex justify-center items-center pt-4 ">
      <div className=" bg-slate-400 flex w-2/3 justify-between py-4 px-3 rounded-md">
        <Link href="upload-email">
          <button className="before:transtion-opacity group relative isolate hidden items-center justify-center overflow-hidden rounded-md bg-gray-900 px-3 py-[0.1875rem] text-sm font-medium text-white shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-gray-900 transition duration-300 md:inline-flex">
            Upload Email
          </button>
        </Link>

        <div className="w-80 ">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            id="autocomplete-1-input"
            placeholder="Search"
            className=" focus:outline-none font-medium rounded-md mr-2 px-2  py-1 "
            type="text"
            value={searchValue}
          ></input>
          <Link href="/login">
            <button className="before:transtion-opacity group relative isolate hidden items-center justify-center overflow-hidden rounded-md bg-gray-900 px-2  py-1  text-sm font-medium text-white shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-gray-900 transition duration-300 md:inline-flex">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
