import List from "@/components/List";
import Navbar from "@/components/Navbar";
import wsConnection from "@/ws";

export default function Home() {
  wsConnection();
  return (
    <main className="bg-gray-950 w-full h-screen ">
      <Navbar />
      <List />
    </main>
  );
}
