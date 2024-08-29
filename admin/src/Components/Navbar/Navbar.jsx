import React from "react";
import "./Navbar.css";
// import navlogo from "../Assets/nav-logo.svg";
import logo from "../Assets/CompanyLogoedit.jpg";
import navprofileIcon from "../Assets/ProfileIcon.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-leftSide">
        <img src={logo} alt="logo" />
        <p className="logoText">
          Lion'<span className="lightgreen">A</span>
          <span className="pink">r</span>
          <span className="yellow">t</span>
          <br />
          collection
          <br />
          <span className="admPanel">Admin Panel</span>
        </p>
      </div>
      {/* <img src={navlogo} className="nav-logo" alt="" /> */}
      <img src={navprofileIcon} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
