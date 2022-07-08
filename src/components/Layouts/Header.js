import React from 'react';
import Logo from "../../assets/img/logo.png"
import Banner from "../../assets/img/meals.jpeg"
import styles from "./Header.css"
const Header = ()=>{
    return(
        <>
        <div className="wrapper">
            <div className='wrapper_header'>
                <img src={Logo}  alt="key"/>
            <div className="wrapper_header-menu">
                <ul >
                   <a href='#'><li>Blog</li></a>
                </ul>
                <button className="btn-Login"> Login</button>
                <button className="btn-register">Register</button>
                <button className="btn-card">Card</button>
            </div>
            </div>
            <div className='wrapper_banner'>
                <img className="wrapper_banner-img" src={Banner} alt="banner"/>
            </div>
        </div>
        </>
    )
}
export default Header