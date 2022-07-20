import React from "react";
import Logo from "../../assets/img/logo-godrej.png";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBagShopping,faGlassMartini,faBars } from '@fortawesome/free-solid-svg-icons'
import header from './Header.css'
const Header = () => {
  const menu = [
    {
      display: "Trang chủ",
      path: "/",
    },
    {
      display: "Sản phẩm",
      path: "/catalog",
    },
    {
      display: "Phụ kiện",
      path: "/accessories",
    },
    {
      display: "Liên hệ",
      path: "/contact",
    },
  ];
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-header-top">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="header-top-menu">
            <div className="header-menu-mobile-toggle">
            <FontAwesomeIcon icon={faBars} />
            </div>
            {menu.map((item, key) => (
              <Router key={key}>
                <div className="header-menu-left-items">
                  <Link to={item.path} className="item">
                    <span>{item.display}</span>
                  </Link>
                </div>
              </Router>
            ))}
          </div>
          <div className="header-menu-right-items">
            <div className="item-search">
            <FontAwesomeIcon icon={faGlassMartini} />
            </div>
            <div className="item-cart">
              <a to="/cart">
              <FontAwesomeIcon icon={faBagShopping} />
              </a>
            </div>
            <div className="item-user">
            <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
