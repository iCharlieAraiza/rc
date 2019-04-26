import React, {Component} from 'react'
import './App.css'

import Wrapper from './components/wrapper';

// //import Todo from './components/todo2/Todo'

// import State from './components/State/State'

// //import Counter from './components/Counter/Counter'

// import Todo from './components/todo3/Todo';

// import Hooks from './components/Hooks/Hooks'

import Starwars from './components/Starwars/Starwars'

class App extends Component{
    render(){
        return ( <Wrapper>
                    <Starwars></Starwars>
                </Wrapper>)
    }
}

export default App;