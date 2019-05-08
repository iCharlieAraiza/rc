import React from 'react'

const MemeDisplay = (props)=>{
    return(
        <div>
            <h1>{props.TopText}</h1>
            <h1>{props.BottomText}</h1>
        </div>

    )
}

export default MemeDisplay;