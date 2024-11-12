import React, { useEffect, useState } from "react";
import Tooltip from "./Tooltip";
// import Logo from "public/appLogo.png";
import "../styles/header.css";
function Header() {
  return (
    <div className="header">
      <img
        src="../assets/appLogo.png"
        alt="logo"
        className="logo"
        height={50}
        width={50}
      />
      <Tooltip content="This Application was built with Flask, React and OpenAI">
        <img src="../assets/info.png" alt="infoLogo" height={25} width={25} />
      </Tooltip>
    </div>
  );
}
export default Header;
