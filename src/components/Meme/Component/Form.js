import React from 'react'

const Form = (props)=>{
    
    return(
        <div>
            <input type="text" name="TopText" onChange={props.handle}/>
            <input type="text" name="BottomText" onChange={props.handle}/>
            <button>Generate</button>
        </div>
    )

}

export default Form;