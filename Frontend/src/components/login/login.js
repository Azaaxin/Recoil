import React from "react";
import "./login.css";
import {ButtonBig} from "../buttons/regular.js";
import discord from "./content/discord.svg"

export default function Login({url}) {
  return (
    <div className="login-discord">
        <img src={discord} alt="discord logo"></img>
        <p> Hello kitty </p>
        <ButtonBig value="Login with Discord" handleClick={url}/>
    </div>
  );
}
  