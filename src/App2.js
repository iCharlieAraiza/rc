import React, {Component} from 'react'
import './App.css'

import Wrapper from './components/wrapper';

// //import Todo from './components/todo2/Todo'

// import State from './components/State/State'

// //import Counter from './components/Counter/Counter'

// import Todo from './components/todo3/Todo';

// import Hooks from './components/Hooks/Hooks'

// import Starwars from './components/Starwars/Starwars'

// import FormName from './components/FormName/FormName'
 
import FormV1 from './components/FormV1/FormV1'

class App extends Component{
    render(){
        return ( <Wrapper>
                    <FormV1></FormV1>
                </Wrapper>)
    }
}

export default App;