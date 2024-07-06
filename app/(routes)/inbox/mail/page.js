"use client";

import convertToUTCWithOffset from "@/hooks/useDate";
import { useRouter, useSearchParams } from "next/navigation";

const Email = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const time = searchParams.get("time");

  const localStorageData =
    typeof window !== "undefined"
      ? localStorage.getItem("singleAccount")
      : null;
  const allMessage = localStorageData ? JSON.parse(localStorageData)[0] : null;

  const emailTime = convertToUTCWithOffset(time);

  const singleMessage = allMessage.EmailContents.filter((email) =>
    email.date.includes(emailTime)
  );
  if (!singleMessage) {
    return <div>Email not found</div>;
  }
  console.log(singleMessage);

  return (
    <>
      <div className="bg-gray-950 flex flex-col w-full h-screen">
        <div className=" flex flex-col  justify-center items-center pt-4 ">
          <div className=" bg-slate-400 flex w-2/3 justify-between py-4 px-3 rounded-md">
            <button
              onClick={() => router.back()}
              className="before:transtion-opacity group relative isolate hidden items-center justify-center overflow-hidden rounded-md bg-gray-900 px-3 py-[0.1875rem] text-sm font-medium text-white shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-gray-900 transition duration-300 md:inline-flex"
            >
              Back
            </button>
          </div>
          <div className=" bg-slate-400 flex w-2/3 flex-col mt-4 py-4 px-3 rounded-md">
            <div className="mb-4">
              <h2>
                Subject : <span> {singleMessage[0].subject} </span>
              </h2>
              <h2>
                From: <span> {singleMessage[0].from}</span>
              </h2>
              <h2>
                Date : <span> {singleMessage[0].date}</span>
              </h2>
            </div>

            <div dangerouslySetInnerHTML={{ __html: singleMessage[0].body }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
