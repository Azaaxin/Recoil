import React from "react";
export default function Box({ titles }) {
  return (
    <div>
      <h1> {titles} </h1>
      <div className="events"></div>
    </div>
  );
}
