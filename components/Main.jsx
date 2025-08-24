import Typed from 'react-typed'
import React from 'react'

export default function Main() {
    return (
        <main>
            <h1> 
                <Typed strings={"Hello my name is Declan Gallagher"}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                    </h1>
            <h2>I bring ideas to life on the web with code and creativity.</h2>
        </main>
    )
}