import React from 'react';
import Joke from './Components/Joke'
import Data from './Data'

const Jokes = ()=>{
    const jokeList = Data.map((joke)=>{
        if(joke.question){
            return(
                <Joke punchLine={joke.punchLine} question={joke.question} key={joke.id}></Joke>
            )
        }else{
            return false;
        }

    });


    return(
       <div>   
           {jokeList}
       </div>
    )
}

export default Jokes; 