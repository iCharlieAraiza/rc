import React from 'react'
import TodoItem from './Components/TodoItem'

const List = ()=>{
    
    let list = [];
    
    for(let i=0; i<10; i++){
        list.push(<TodoItem></TodoItem>)
    }

    return(
        <ul className="todo-list">
            {list}
        </ul>
    )
}

export default List;