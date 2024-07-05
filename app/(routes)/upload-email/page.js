// "use client";

import { useContext } from "react";
import axios from "axios";
import Link from "next/link";
import WebSocket from "ws";

import TextArea from "@/components/TextArea";
import { EmailContext } from "@/context/EmailContext";

const UploadModal = () => {
  // WebSocket connection

  let clientId = "";
  const ws = new WebSocket("ws://49.13.157.39:30000/ws");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    clientId = data.toString();
  });

  // api Request

  // const handleSubmitUpload = async () => {
  //   await axios.post("http://49.13.157.39:30000/fetch-emails/", {
  //     email_addresses: emailData,
  //     client_id: clientId,
  //   });
  // };

  return (
    <div className=" flex justify-center items-center pt-4 bg-slate-950 h-screen  ">
      <div className="bg-slate-400 flex flex-col items-center  w-2/3 justify-between py-4 px-3 rounded-md">
        <TextArea />
        <div className="mt-4">
          <Link
            href="/"
            className=" items-center justify-center overflow-hidden rounded-md bg-red-800 px-3 py-1 text-sm font-medium text-white ring-1 ring-red-800 transition duration-300 md:inline-flex mr-4"
          >
            Close
          </Link>
          <button
            // onClick={handleSubmitUpload}
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
