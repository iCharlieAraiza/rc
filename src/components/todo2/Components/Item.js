import React from 'react'

const Item = (props)=>{
    return (
        <li>
            <input type="checkbox" checked={props.completed}/> <span>{props.name}</span>
        </li>
    )
}

export default Item;