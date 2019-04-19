import React,{Component} from 'react';
import Card from './Components/Card'


class State extends Component{
    state ={
        data:[
            {name: 'Carlos Araisa',age: 26,check: true},
            {name: 'Jodkas',age: 27,check: false},
            {name: 'Luke',age: 74,check: false},
        ],
    }

    render(){

        const people = this.state.data.map(person=>{
            return <Card name={person.name} age={person.age}></Card>
        })


        return (
            people
        )
    }
}

export default State;