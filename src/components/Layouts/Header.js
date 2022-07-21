import React, { useState } from "react";
import Logo from "../../assets/img/logo-godrej.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBagShopping,
  faGlassMartini,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen(!isOpen);
    console.log("Click");
  };
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
        <div className="container">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="header-menu">
            <div className="header-menu-left">
              <div
                className="header-menu-mobile-toggle"
                onClick={handleClickToggle}
              >
                {isOpen ? (
                  <FontAwesomeIcon icon={faBars} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )}
              </div>
              {menu.map((item, key) => (
                <Router key={key}>
                  <div
                    className={`header-menu-left-items${
                      isOpen ? "active" : " "
                    }`}
                  >
                    <Link to={item.path} className="item">
                      <span>{item.display}</span>
                    </Link>
                  </div>
                </Router>
              ))}
            </div>
            <div className="header-menu-right">
              <div className="header-menu-right-item">
                <FontAwesomeIcon icon={faGlassMartini} />
              </div>
              <div className="header-menu-right-item">
                <a to="/cart">
                  <FontAwesomeIcon icon={faBagShopping} />
                </a>
              </div>
              <div className="header-menu-right-item">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
