import "./buttons.css";
import React from "react";
import { Link } from 'react-router-dom';

export default function Buttons({ value, url, id, handleClick }) {
  return (
    <button className="regularBtn" id={id} onClick={handleClick}>
      {value}
    </button>
  );
}

 export function ButtonBig({ value, url, id, handleClick }) {
  return (
    <a href={handleClick} >
      <button className="buttonBig" id={id}>
        {value}
      </button>
    </a>
  ); 
}