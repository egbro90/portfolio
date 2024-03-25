import React from "react";
import DarkTheme from "../store/DarkTheme";
import { Routes, Route, Link } from "react-router-dom";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

const Header = () => {
    const { dark, handleTheme } = DarkTheme();
    return (
        <>
            <header>
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