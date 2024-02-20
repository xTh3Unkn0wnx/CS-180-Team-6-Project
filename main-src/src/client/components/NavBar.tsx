import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <h3>Live Active</h3>
        <ul>
          <li> <Link to={"/home"}>Home</Link> </li>
          <li> <Link to={"/hello"}>About</Link> </li>
          <li> <Link to={"/hello"}>Services</Link></li>
          <li> <Link to={"/"}>Login</Link></li>
        </ul>
      </nav>
    </div>
  );
};