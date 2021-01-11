import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListComponents from "./ListComponents";

const NewToDoList = () => {
    const[item, setItem] = useState("");
    const[newItem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);

    };
    const listOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item];
        });
        setItem(" ");
    };
    return( 
        <>
            <div className="main_div">
                <div className="center_div">
                <br />
                    <h1> New ToDo List </h1>
                    <br />
                    <input type="text" value= {item} placeholder="Add Items" onChange={itemEvent}></input>
                    <Button className="newBtn" onClick={listOfItems}> <AddIcon /></Button>
                    
                    <br />
                    <ol>
                        {newItem.map((val, index) => {
                            return <ListComponents key={index} text={val} />
                        })}
                    </ol>
                <h2> BY USING MATERIAL UI icons</h2>
                </div>
            </div>
            
        </>
    )

};

export default NewToDoList;