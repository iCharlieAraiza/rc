import React,{Component} from 'react';
import Item from './Components/Item'

class Todo extends Component{
    
    items = [{name:'hola', completed:true},
            {name:'como estais',completed:false},
            {name: 'espero no del todo mal', completed:false}]

    render(){
        const list = this.items.map((item)=>{
            return <Item name={item.name} completed={(item.completed) ? item.completed : ''} ></Item>
        })
        return (<div className="todo-list">
                    <ul>
                        {list}
                    </ul>
                </div>)
    }
}

export default Todo;