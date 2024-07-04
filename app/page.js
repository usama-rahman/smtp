import List from "@/components/List";
import Navbar from "@/components/Navbar";
import WebSocket from "ws";

export default function Home() {
  let clientID;

  const ws = new WebSocket("ws://49.13.157.39:30000/ws");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    clientID = data;
    console.log("receive: %s", data);
    console.log(clientID);
  });

  return (
    <main className="bg-gray-950 w-full h-screen ">
      <Navbar />
      <List />
    </main>
  );
}
