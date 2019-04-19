import React from 'react';

const Joke = (props)=>{
    
   //let joke = {{(props.joke.question!=='') ? <p>{props.joke.question}</p> <p>{props.joke.punchLine}</p> : <p>{+props.joke.punchLine}</p>}};
    
    return(
        <div className="joke" key={props.key}>
             {(typeof props.question!=='undefined')? <p>{props.question}</p> : ''}
             <p>{props.punchLine}</p>
        </div>
    )
}

export default Joke;