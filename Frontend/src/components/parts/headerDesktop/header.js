import React from "react";
import "./header.css";
import Hlinks from "./headerLinks";
import {Huser} from "./headerUser";
import Hlogo from "./headerLogo";
import Hsearch from "./headerSearch";
export default function Header({ logo, links, hrefLinks, desc, id, avatarUrl, userName }) {
  return (
    <div className="head">
      <Hlogo logo={logo} />
      <Hlinks text={links} href={hrefLinks} />
      <Hsearch />
      <Huser avatarUrl={avatarUrl} userName={userName} />
    </div>
  );
}
