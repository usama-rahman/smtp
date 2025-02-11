import WebSocket from "ws";
import Link from "next/link";

import TextArea from "@/components/TextArea";
import SubmitBtn from "@/components/SubmitBtn";
import wsConnection from "@/ws";

const UploadModal = () => {
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
          <SubmitBtn />
        </div>
      </div>
    </div>
  );
};
export default UploadModal;
