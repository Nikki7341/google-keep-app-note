import React, { useState } from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppFooter from "./NoteAppFooter";
import CreateNote from "./CreateNote";
import Note from "./Note";


const NoteApp = () => {
    const [addItem, setAddItem] = useState([]);

const addNote = (note) => {
    //alert("i am Clicked ");
    setAddItem((prevData) => {
        return [...prevData, note];
    });
    console.log(note);
    
};
const onDelete = (id) => {
    setAddItem((olddata) => 
    olddata.filter((currdata, index) => {
        return index !== id; 
    })
    );
};
    return ( 
    <>
        <NoteAppHeader />
        <CreateNote passNote = {addNote} />
        {addItem.map((val, index) => {
            return ( 
                <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem = {onDelete}
             />
            ); 
        })}
        <NoteAppFooter />
    </>
    );
};

export default NoteApp; 