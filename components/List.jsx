import Link from "next/link";

const List = () => {
  const data = [
    {
      id: 1,
      email: "usama@mail.com",
    },
    { id: 2, email: "usama@mail.com" },
    { id: 3, email: "usama@mail.com" },
  ];

  if (!data || data.length === 0) return <></>;

  return (
    <div className="flex justify-center items-center pt-4">
      <div className="bg-slate-400 flex w-2/3 justify-between py-4 px-3 rounded-md">
        <div className="w-full">
          <ul className="w-full">
            {data.map((item) => (
              <Link
                href="/inbox"
                key={item.id}
                className="flex px-3 py-1 mt-2 rounded-sm bg-slate-200 justify-between w-full"
              >
                {item.email}
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
