"use client";
import { useWs } from "@/hooks/useWebSocket";
import { useEffect, useState } from "react";
const useWebSocket = () => {
  const {
    emailList,
    setEmailList,
    clientId,
    setClientId,
    resMail,
    setResMail,
    wsEmail,
    setWsEmail,
  } = useWs();

  let url = "ws://49.13.157.39:30000/ws";

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("Connected to server");
    };

    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        if (message.client_id) {
          setClientId(message.client_id);
        }
        if (message.EmailAccount) {
          const emails = message.EmailAccount;
          setResMail((prevmail) => [...prevmail, emails]);
        }
        if (typeof message === "object" && !Array.isArray(message)) {
          const filteredMessage = !message.client_id ? [message] : [];
          setWsEmail((prevMes) => [...prevMes, ...filteredMessage]);
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }, [url]);

  return { emailList, clientId, wsEmail, resMail };
};

export default useWebSocket;
