"use client";

import { setEmailObj } from "@/utils/data";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const UploadModal = () => {
  const [areaValue, setAreaValue] = useState("");

  const lines = areaValue
    .trim()
    .split("\n")
    .filter((line) => line);

  const delimiterRegex = /[\t ,]+/;

  const emailPasswords = lines.map((line) => {
    const [username, password] = line.split(delimiterRegex);
    return { username, password };
  });

  const result = {
    email_addresses: emailPasswords,
  };

  const jsonString = JSON.stringify(result);

  setEmailObj(jsonString);
  console.log(jsonString);

  const handleSubmitUpload = async () => {
    await axios.post("http://49.13.157.39:30000/fetch-emails/", {
      email_addresses: jsonString,
      client_id: wsClientId,
    });
  };

  return (
    <div className=" flex justify-center items-center pt-4 bg-slate-950 h-screen  ">
      <div className="bg-slate-400 flex flex-col items-center  w-2/3 justify-between py-4 px-3 rounded-md">
        <textarea
          id="emailandpass"
          rows="10"
          cols="70"
          className="rounded-md px-3 py-2 outline-none "
          onChange={(e) => setAreaValue(e.target.value)}
        />
        <div className="mt-4">
          <Link
            href="/"
            className=" items-center justify-center overflow-hidden rounded-md bg-red-800 px-3 py-1 text-sm font-medium text-white ring-1 ring-red-800 transition duration-300 md:inline-flex mr-4"
          >
            Close
          </Link>
          <button
            onClick={handleSubmitUpload}
            className=" items-center justify-center overflow-hidden rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-white ring-1 ring-gray-900 transition duration-300 md:inline-flex"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default UploadModal;
