import React from "react";
import "./sidePanel.css";
import Box from "../sidePanel/events/box";
export default function SidePanel({ titles }) {
  return (
    <div className="sidePanel">
      <Box titles={titles[0]} />
    </div>
  );
}
