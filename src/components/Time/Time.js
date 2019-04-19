import React from 'react';

const Time = ()=>{
    const date = new Date();
    const hours = date.getHours();
    return (
        <h2>{hours}</h2>
    );
}

export default Time;