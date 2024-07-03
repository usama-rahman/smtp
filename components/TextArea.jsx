"use client";
import { useState } from "react";

const TextArea = () => {
  const [areaValue, setAreaValue] = useState("");
  console.log(areaValue);
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
