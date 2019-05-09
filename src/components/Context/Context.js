import React, {Component} from 'react'

const MyContext = React.createContext();

class PersonProvider extends Component{
    
    state={
        name: "Bambuvhas"
    }

    render(){
        return (<MyContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyContext.Provider >)
    }

}

export {PersonProvider};
export default MyContext;