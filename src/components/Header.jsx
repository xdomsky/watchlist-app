import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"

export const Header = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/" className="logo">DOMSKY</Link>
        <div className="hiddenLinks">
          <Link to="/">Watch List</Link>
          <Link to="/watched">Watched</Link>
          <Link to="/add" className="button">Add</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Watch List</Link>
        <Link to="/watched">Watched</Link>
        <Link to="/add" className="button">Add</Link>
        <button onClick={toggleNavbar}>
          <div class="hamburger-menu">
            <span class="bar-menu"></span>
            <span class="bar-menu"></span>
            <span class="bar-menu"></span>
          </div>
        </button>
      </div>
    </div>
  );
};
