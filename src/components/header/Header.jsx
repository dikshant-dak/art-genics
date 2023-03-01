import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";
import logo from "../../assets/img1.jpeg"
import "./style.scss";

const Header = ({children}) => {
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} />
        </div>
        <div className="title">
                ART GENICS
        </div>
        <ul className="menuItems">
            <li className="menuItem">About Us</li>
            <li className="menuItem">Contact</li>
            <li className="menuItem">
                <HiOutlineSearch />
            </li>
        </ul>
        {children}
    </div>
  )
}

export default Header;
