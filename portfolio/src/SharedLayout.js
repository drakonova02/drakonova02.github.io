import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";

export default () => {
    return (
        <div className="wrapper-page">
            <Header />
            <Outlet />
        </div>
    )
}