import React from "react";
import logo from "./Images/logo.png";

const NoteAppHeader = () => {
    return <>
        <div className="header">
            <img src={logo} alt="logo" width ="70" height="50" />
            <h1> Google Keep </h1>
        </div>
    </>

};

export default NoteAppHeader; 