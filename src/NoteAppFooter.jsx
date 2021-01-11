import React from "react";

const NoteAppFooter = () => {
    const year = new Date().getFullYear();
    return <>
        <div className="footer">
        <footer> copyright © {year} </footer>
        </div>
    </>

};

export default NoteAppFooter; 