"use client";

import { useWs } from "@/hooks/useWebSocket";
import Link from "next/link";

const List = () => {
  const { resMail, wsEmail } = useWs();
  console.log(wsEmail);

  function extractUsername(email) {
    const parts = email.split("@");
    const username = parts[0];
    return username;
  }

  if (!wsEmail || wsEmail.length === 0) return <></>;
  return (
    <div className="flex justify-center items-center pt-4">
      <div className="bg-slate-400 flex w-2/3 justify-between py-4 px-3 rounded-md">
        <div className="w-full">
          <ul className="w-full">
            {wsEmail?.map((item, index) => (
              <Link
                href={`/inbox?user=${extractUsername(item.EmailAccount)}`}
                key={index}
                className="flex px-3 py-1 mt-2 rounded-sm bg-slate-200 justify-between w-full"
              >
                {item.EmailAccount}

                <span className="text-gray-500">Click to view inbox</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default List;
