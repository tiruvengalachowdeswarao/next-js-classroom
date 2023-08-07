"use client";
import { useState } from "react";

export const Likes = () => {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <h2>Likes {likes}</h2>
      <button
        onClick={() => {
          setLikes(likes + 1);
        }}
      ></button>
    </div>
  );
};
