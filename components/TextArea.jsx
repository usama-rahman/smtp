"use client";

import { useEffect, useState } from "react";
import { useEmail } from "@/hooks/useEmail";

const TextArea = () => {
  const { setEmailData } = useEmail();
  const [areaValue, setAreaValue] = useState("");

  useEffect(() => {
    const lines = areaValue
      .trim()
      .split("\n")
      .filter((line) => line);

    const delimiterRegex = /[\t ,]+/;

    const emailPasswords = lines.map((line) => {
      const [username, password] = line.split(delimiterRegex);
      return { username, password };
    });

    let jsonString = JSON.stringify(emailPasswords);
    setEmailData(jsonString);
  }, [areaValue, setEmailData]);

  return (
    <textarea
      id="emailandpass"
      rows="10"
      cols="70"
      className="rounded-md px-3 py-2 outline-none "
      onChange={(e) => setAreaValue(e.target.value)}
    />
  );
};

export default TextArea;
