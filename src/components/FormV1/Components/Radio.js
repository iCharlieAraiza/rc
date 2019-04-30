import React from 'react'

const Radio = (props) =>{
    
    return  (   
            <label>
                <input 
                type='radio' 
                value={props.value} 
                name={props.name}
                onChange={props.handle}/>
                {props.children}
            </label>
            )
}

export default Radio;