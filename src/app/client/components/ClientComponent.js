"use client";

import ServerComponent from "./ServerComponent";

export const ClientComponent = (props) => {
  return (
    <div>
      <h1>Client component</h1>
      <button
        onClick={() => {
          alert("clicked");
        }}
      >
        click me
      </button>
      {props.children}
    </div>
  );
};
