import React from 'react'

const Text = (props) =>{
    return(
        <form>
            <label>{props.children}</label>
        
            <input type="text" 
            name={props.name}
            onChange={props.handle}/>
        </form>
        
    
        )
}

export default Text;