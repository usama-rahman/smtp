"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useWs } from "@/hooks/useWebSocket";

const Inbox = () => {
  const [searchInboxValue, setSearchInboxValue] = useState("");
  const [singleAccount, setSingleAccount] = useState(null);

  const { wsEmail } = useWs();
  const router = useRouter();

  const searchParams = useSearchParams();
  const user = searchParams.get("user");

  function filterByEmail(accounts, user) {
    return accounts.filter((account) => account.EmailAccount.includes(user));
  }

  useEffect(() => {
    const filteredAccount = filterByEmail(wsEmail, user);

    localStorage.setItem("singleAccount", JSON.stringify(filteredAccount));

    setSingleAccount(filteredAccount);
  }, [wsEmail, user]);

  return (
    <>
      <div className="bg-gray-950 flex flex-col w-full h-screen">
        <div className=" flex justify-center items-center pt-4 ">
          <div className=" bg-slate-400 flex w-2/3 justify-between py-4 px-3 rounded-md">
            <button
              onClick={() => router.back()}
              className="before:transtion-opacity group relative isolate hidden items-center justify-center overflow-hidden rounded-md bg-gray-900 px-3 py-[0.1875rem] text-sm font-medium text-white shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-gray-900 transition duration-300 md:inline-flex"
            >
              Back
            </button>

            <h2 className="text-xl">
              {singleAccount && singleAccount[0]?.EmailAccount}{" "}
            </h2>
            <div className="w-80">
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

              {singleAccount && singleAccount[0]?.EmailContents.length === 0 ? (
                <p className="flex px-3 py-1 mt-2 rounded-sm bg-slate-200 justify-center w-full">
                  no email
                </p>
              ) : (
                singleAccount &&
                singleAccount[0]?.EmailContents.map((item, index) => (
                  <Link
                    href={`/inbox/mail?time=${item.date}`}
                    className="flex px-3 py-1 mt-2 rounded-sm bg-slate-200 justify-between w-full"
                    key={index}
                  >
                    <span> {item.from} </span>
                    <span className="justify-start ">{item.subject}</span>
                    <span> {item.date}</span>
                  </Link>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
