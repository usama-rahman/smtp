import { EmailContext } from "@/context/EmailContext";
import { useContext } from "react";

export const useEmail = () => {
  const { emailData, setEmailData } = useContext(EmailContext);
  return { emailData, setEmailData };
};
