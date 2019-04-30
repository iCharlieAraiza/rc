import React from 'react';

const Checkbox = (props) =>{
    return (
        <labe>
            <input type='checkbox' value="true" onChange={props.handle}/>
            {props.children}
        </labe>
        )
}

export default Checkbox;