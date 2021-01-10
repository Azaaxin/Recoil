// Rw == Request Wall see proposal for more information
import React from "react";
import "./rw.css";
export default function Rw({ titles, eventNames, input }) {
  return (
    <div className="requestWall">
        {input.map((item,index)=>{
            return <Cards input={item} />
        })}
    </div>
  );
}

 function Cards({input}) {
  return (
    <div className="rw_card">
     {input}
    </div>
  );
}