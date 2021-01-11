import React from "react";
import { Link } from 'react-router-dom';
export default function Hlinks({ text, onClick, href }) {
  return (
    <>
      <div className="header_browse_menu">
        <Link to={href} onClick={onClick}>
          {text}
        </Link>
      </div>
    </>
  );
}
