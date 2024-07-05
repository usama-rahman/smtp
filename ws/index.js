import WebSocket from "ws";

const webSocket = () => {
  const ws = new WebSocket("ws://49.13.157.39:30000/ws");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("receive: %s", data);
  });
};

export { webSocket };
