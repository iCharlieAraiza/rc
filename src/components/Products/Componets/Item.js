import React from "react";

const Item = (props)=>{
    return(
        <li>ID: {props.id} - Product: {props.name} </li>
    )
}

export default Item;