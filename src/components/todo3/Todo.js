import React, {Component} from 'react'
import Task from './Components/Task'

class Todo extends Component{
    state={
        list:[
            {id:'1', name:'Task1', check:false},
            {id:'2', name:'TAsk2', check:true},
            {id:'3', name:'Task3', check:false},
            {id:'4', name:'Task4', check:false},
        ]
    }
    
    handleItem(event){
        const list = [...this.state.list],
              id=event.target.parentElement.id;


        const newList = list.map((task)=>{
            if(id===task.id){
                task.check = !task.check;
            }
            return task;
        });

        this.setState({list})

        console.log(newList);
    }

    render(){
        const state = {...this.state}

        const tasks = state.list.map((el)=>{
            return <Task key={el.id} id={el.id} handle={this.handleItem.bind(this)} check={el.check}>{el.name}</Task>
        })

        return tasks;
    }
}

export default Todo;