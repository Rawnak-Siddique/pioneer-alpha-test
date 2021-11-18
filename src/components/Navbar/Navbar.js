import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const  [sidebar, setSidebar] = useState(false);
  const showSideBar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="navbar d-flex justify-content-between" >
      <div className="navbar_main d-flex justify-content-end">
        <Link to="/" className="navbar_Link">Home</Link>
        <Link to="/about" className="navbar_Link" >About</Link>
        <Link to="/servicePackage" className="navbar_Link" >Service & Package</Link>
        <Link to="/gallery" className="navbar_Link" >Gallery</Link>
        <Link to="/faq" className="navbar_Link" >FAQ</Link>
        <Link to="/contact" className="navbar_Link" >Contact</Link>
        <MenuIcon className="navbar_Menu" onClick={showSideBar} />
      </div>
      <div className={sidebar ? "navbar_side active" :"navbar_side"}>
        <Link to="/" className="navbar_Link side">Home</Link>
        <Link to="/about" className="navbar_Link side" >About</Link>
        <Link to="/servicePackage" className="navbar_Link side" >Service & Package</Link>
        <Link to="/gallery" className="navbar_Link side" >Gallery</Link>
        <Link to="/faq" className="navbar_Link side" >FAQ</Link>
        <Link to="/contact" className="navbar_Link side" >Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
