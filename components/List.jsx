"use client";

import useWebSocket from "@/hooks/useWebSocket";
import Link from "next/link";

const List = () => {
  const { emailList, clientId } = useWebSocket();

  // console.log(emailList);
  // console.log(clientId);

  // const findClientId = (inputString) => {
  //   const regex = /"client_id"\s*:\s*(\d+)/;
  //   const match = inputString.match(regex);
  //   if (match) {
  //     return match[1];
  //   } else {
  //     return null;
  //   }
  // };
  // const matchedId = findClientId(clientId);
  // console.log(matchedId);
  // console.log(clientId);
  console.log(emailList);
  if (emailList === null) return <></>;
  // if (emailList.length === 1) return <></>;

  return (
    <div className="flex justify-center items-center pt-4">
      <div className="bg-slate-400 flex w-2/3 justify-between py-4 px-3 rounded-md">
        <div className="w-full">
          <ul className="w-full">
            {/* {emailList?.map((item) => (
              <Link
                href="/inbox"
                key={item?.id}
                className="flex px-3 py-1 mt-2 rounded-sm bg-slate-200 justify-between w-full"
              >
                {item?.email}
                <span className="text-gray-500">Click to view inbox</span>
              </Link>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default List;
