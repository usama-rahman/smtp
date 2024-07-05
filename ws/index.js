// import WebSocket from "ws";

// const url = "ws://49.13.157.39:30000/ws";
// const socket = new WebSocket(url);

// let clientId;

// export default function wsConnection() {
//   socket.on("open", () => {
//     console.log("Connected to server");
//   });

//   socket.onmessage = (event) => {
//     console.log("Received:", event.data);
//     clientId = event.data.toString();
//   };

//   socket.on("close", () => {
//     console.log("Disconnected from server");
//   });

//   socket.on("error", (error) => {
//     console.error("WebSocket error:", error);
//   });
// }

// export { clientId };
