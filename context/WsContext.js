"use client";

import { createContext, useState } from "react";

const WsContext = createContext();

const WsProvider = ({ children }) => {
  const [emailList, setEmailList] = useState([]);
  const [clientId, setClientId] = useState(null);
  const [resMail, setResMail] = useState([]);
  const [wsEmail, setWsEmail] = useState([]);

  return (
    <WsContext.Provider
      value={{
        emailList,
        setEmailList,
        clientId,
        setClientId,
        resMail,
        setResMail,
        wsEmail,
        setWsEmail,
      }}
    >
      {children}
    </WsContext.Provider>
  );
};

export default WsProvider;
export { WsContext };
