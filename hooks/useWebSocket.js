"use client";

import { useEffect, useState } from "react";
// import WebSocket from "ws";

const useWebSocket = (url) => {
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("Connected to server");
    };

    socket.onmessage = (event) => {
      console.log("Received:", event);
      let res = event.data;
      let my_id = res.replace(/[{}]/g, "");
      setClientId(my_id);
    };

    socket.onclose = () => {
      console.log("Disconnected from server");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }, []);

  return clientId;
};

export default useWebSocket;
