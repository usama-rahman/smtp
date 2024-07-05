"use client";
import { useEmail } from "@/hooks/useEmail";
import useWebSocket from "@/hooks/useWebSocket";

const SubmitBtn = () => {
  const { emailData } = useEmail();
  const clientId = useWebSocket("ws://49.13.157.39:30000/ws");

  const handleSubmitUpload = async () => {
    try {
      await fetch("http://49.13.157.39:30000/fetch-emails/", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          "Content-Type": "application/json",
          Referer: "http://49.13.157.39:55000/",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: `{"email_addresses": ${emailData} , ${clientId} }`,
      });
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  return (
    <button
      onClick={handleSubmitUpload}
      className="items-center justify-center overflow-hidden rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-white ring-1 ring-gray-900 transition duration-300 md:inline-flex"
    >
      Submit
    </button>
  );
};

export default SubmitBtn;
