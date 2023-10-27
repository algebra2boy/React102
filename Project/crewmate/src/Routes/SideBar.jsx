import React from "react";
import Header from "../components/SideBar/Header";
import NavBar from "../components/SideBar/NavBar";

const SideBar = () => {
    return (
    <div className='sidebar'>
        <Header />
        <NavBar />
    </div>
    );
}

export default SideBar;