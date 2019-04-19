import React, {Component} from 'react'
import './App.css'

import Wrapper from './components/wrapper';

//import Todo from './components/todo2/Todo'

import State from './components/State/State'

//import Counter from './components/Counter/Counter'

import Todo from './components/todo3/Todo';

class App extends Component{
    render(){
        return ( <Wrapper>
                    <Todo></Todo>
                    <State></State>
                </Wrapper>)
    }
}

export default App;