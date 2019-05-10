import React,{Component} from 'react'
import Data from '../data'

const MyContext = React.createContext();

class MyProvider extends Component{
    
    state={
        products:[],
        users:[],
        activeUser:{},
    }

    componentDidMount(){
        const newState = {...Data};
        newState.activeUser= newState.users[1];
        
        this.setState({...newState})

    }
    
    render(){
        
        const newState = {...this.state}
        console.log(newState,'My Context')
        
        return <MyContext.Provider value={newState}>{this.props.children}</MyContext.Provider>
    }
}

export {MyProvider}
export default MyContext;
 
