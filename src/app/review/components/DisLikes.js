"use client";
import { useState } from "react";

export const DisLikes = () => {
  const [disLikes, setDisLikes] = useState(0);
  return (
    <div>
      <h2>DisLikes {disLikes}</h2>
      <button
        onClick={() => {
          setDisLikes(disLikes + 1);
        }}
      ></button>
    </div>
  );
};
