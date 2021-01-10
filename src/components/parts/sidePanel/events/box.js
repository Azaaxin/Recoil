import React from "react";
export default function Box({ titles, eventNames }) {
  return (
    <div>
      <h1> {titles} </h1>
      <div className="events">
        {eventNames.map((item,index)=>{
         return <li key={index}>{item}</li>
        })}

      </div>
    </div>
  );
}
