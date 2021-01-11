import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./styles.css";
import SidePanel from "./components/parts/sidePanel/sidePanel";
import Header from "./components/parts/headerDesktop/header";
import Rw from "./components/parts/requestWall/rw";
export default function App() {
  let avatar =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          logo="□□□□□"
          links="Browse" hrefLinks="/" // Wants to add object as input
          avatarUrl={avatar}
          userName="Azaaxin"
        />
        <div className="bodyWrapper">
          <SidePanel titles={["my events", "box"]} eventNames={["my group", "overwatch", "league of legends"]}/>
          <Route path="/" exact render={() => <Rw input={["my events", "box", "my events", "my events", "box", "my events", "box", "my events", "box", "my events", "box", "my events", "box", "my events", "box"]}/>}/> 
        </div>
      </div>
    </BrowserRouter>
  );
}