import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import "../style/Header.css"

export default () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
        </header>
    )
}