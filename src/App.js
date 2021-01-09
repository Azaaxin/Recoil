import React from "react";
import "./styles.css";
import Cards from "../components/miniProfile/cards";
import Header from "../components/parts/headerDesktop/header";
export default function App() {
  let avatar =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
  return (
    <div className="App">
      <Header
        logo="□□□□"
        links="Browse" // Wants to add object as input
        avatarUrl={avatar}
      />
      <Cards
        name="Azaaxin"
        avatar={avatar}
        url=""
        desc="OW account at 5000SR"
      />
    </div>
  );
}
