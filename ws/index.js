import WebSocket from "ws";

const wsConnection = () => {
  let clientId = "";
  const ws = new WebSocket("ws://49.13.157.39:30000/ws");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    clientId = data.toString();
  });

  setTimeout(() => {
    return clientId;
  }, 1000);
};

export default wsConnection;
