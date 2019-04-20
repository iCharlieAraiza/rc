import React from 'react'

const Task = (props)=>{
    return <li id={props.id}><input type="checkbox" onChange={(event)=>{props.handle(event)}}/><span>{props.children}</span></li>
}

export default Task;