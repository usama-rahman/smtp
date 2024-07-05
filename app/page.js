import List from "@/components/List";
import Navbar from "@/components/Navbar";
import webSocket from "@/ws";

export default function Home() {
  webSocket();
  return (
    <main className="bg-gray-950 w-full h-screen ">
      <Navbar />
      <List />
    </main>
  );
}
