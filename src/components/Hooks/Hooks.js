import React, {Component} from 'react'
import Wrapper from './../wrapper'
import Task from './Components/Task'

class Hook extends Component{
    
    state={
        list:[{id:'1', name:'Sweet dreams', check:false},
              {id:'2', name:'check number two', check:false},
              {id:'3', name:'Round around', check:false}
            ],
        loadElement: false
    }

    componentDidMount(){

        setTimeout((el)=>{
            this.setState({
                loadElement:true
            })
        },3500)
    }

    handleTask(event){
        const id = event.target.parentElement.id,
              state = {...this.state};
        
        const list = state.list.map((task)=>{
            if(task.id===id){
                task.check = !task.check
            }
            return task;
        })

        this.setState({
            list
        })

        console.log(this.state.list);
    }

    render(){

        const state = {...this.state}

        const list = state.list.map((task)=>{
            return <Task key={task.id} id={task.id} handle={this.handleTask.bind(this)}>{task.name}</Task>
        })

        const response = state.loadElement ? list : <h1>Loading...</h1> 

        return(
            <Wrapper>
                <h2>Navbar</h2>       
                    {response}
                <h2>Footer</h2>
            </Wrapper>
        )
    }
}

export default Hook;