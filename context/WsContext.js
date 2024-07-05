"use client";

import { createContext, useState } from "react";

const WsContext = createContext();

const WsProvider = ({ children }) => {
  const [emailList, setEmailList] = useState([]);
  const [clientId, setClientId] = useState(null);
  const [resMail, setResMail] = useState([]);

  return (
    <WsContext.Provider
      value={{
        emailList,
        setEmailList,
        clientId,
        setClientId,
        resMail,
        setResMail,
      }}
    >
      {children}
    </WsContext.Provider>
  );
};

export default WsProvider;
export { WsContext };
