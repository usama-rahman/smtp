"use client";

import { useEmail } from "@/hooks/useEmail";
import wsConnection from "@/ws";
import axios from "axios";

const SubmitBtn = () => {
  const { emailData } = useEmail();

  setTimeout(() => {
    const { clientId } = wsConnection();
  }, 1200);

  const handleSubmitUpload = async () => {
    await axios.post("http://49.13.157.39:30000/fetch-emails/", {
      email_addresses: emailData,
      client_id: clientId,
    });
  };

  return (
    <button
      // onClick={handleSubmitUpload}
      className=" items-center justify-center overflow-hidden rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-white ring-1 ring-gray-900 transition duration-300 md:inline-flex"
    >
      Submit
    </button>
  );
};

export default SubmitBtn;
