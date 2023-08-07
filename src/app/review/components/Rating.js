"use client";
import { useState } from "react";
import Reviews from "./Reviews";

export const Rating = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <h2>Rating {rating}</h2>
      <button
        onClick={() => {
          setRating(rating + 1);
        }}
      ></button>
      <hr />
      <Reviews />
    </div>
  );
};
