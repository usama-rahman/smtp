import { WsContext } from "@/context/WsContext";
import { useContext } from "react";

export const useWs = () => {
  const {
    emailList,
    setEmailList,
    clientId,
    setClientId,
    resMail,
    setResMail,
  } = useContext(WsContext);
  return {
    emailList,
    setEmailList,
    clientId,
    setClientId,
    resMail,
    setResMail,
  };
};
