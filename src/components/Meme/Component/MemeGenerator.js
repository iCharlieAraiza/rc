import React from 'react'
import Form from './Form'
import MemeDisplay from './MemeDisplay'

const MemeGenerator = (props) => {

    return(

        <main className="meme-wrapper">

            <section>
                <Form {...props} handle={props.handle}></Form>
            </section>
            
            <section>
                <MemeDisplay {...props}>>                 
                </MemeDisplay>
            </section>

        </main>
    )

}

export default MemeGenerator;

