"use client";

import { createContext, useState } from "react";

const EmailContext = createContext();

const EmailProvider = ({ children }) => {
  const [emailData, setEmailData] = useState("");

  return (
    <EmailContext.Provider value={{ emailData, setEmailData }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;
export { EmailContext };
