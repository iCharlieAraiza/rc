import React from 'react'

const Task = (props)=>{
    return (
        <li id={props.id}>
            <input type="checkbox" onChange={(el)=>props.handle(el)} checked={props.check}/>
            <span>{props.children}</span>
        </li>
    )
}


export default Task
