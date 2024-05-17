import React from "react";
import { useRef } from "react";
import DarkTheme from "../store/DarkTheme";
import { Routes, Route, Link } from "react-router-dom";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

const Header = () => {
    const { dark, handleTheme } = DarkTheme();
    const header = useRef();
    let preScrollTop = 0;

    window.addEventListener('scroll', function(){
        let nextScrollTop = window.scrollY;
        
        if(preScrollTop < nextScrollTop && preScrollTop > 500) {
            header.current.classList.add('hide');
        }
        else {
            header.current.classList.remove('hide');
        }
        preScrollTop = nextScrollTop;
    });


    return (
        <>
            <header ref={header}>
                <div className="inner">
                    <div className="logo">
                        <Link to="/">Main(LOGO)</Link>
                    </div>
                    <div className="menu">
                        <Link to="/intro">PORTFOLIO INTRO</Link>
                        <Link to="/list">PORTFOLIO LIST</Link>
                        <Link to="/skill">SKILL INVENTORY</Link>
                        <div className="theme">
                            <button onClick={handleTheme}>{ dark ? <IoSunny /> : <IoMdMoon /> }</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;