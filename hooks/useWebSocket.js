"use client";

import { useEffect, useState } from "react";
// import WebSocket from "ws";

const useWebSocket = () => {
  const [clientId, setClientId] = useState(null);
  const [emailList, setEmailList] = useState(null);

  let url = "ws://49.13.157.39:30000/ws";

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("Connected to server");
    };

    socket.onmessage = (event) => {
      // setEmailList(event.data);
      // let res = event.data;
      // let my_id = res.replace(/[{}]/g, "");
      // setClientId(my_id);
      // setClientId(event.data.client_id);
      // console.log(message.client_id);
      const message = JSON.parse(event.data);
      setEmailList(message.EmailAccount);
      setClientId(message.client_id);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }, []);

  return { clientId, emailList };
};

export default useWebSocket;
