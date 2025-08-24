import {TypeWriter} from 'react-typed'
import React from 'react'

export default function Main() {
    return (
        <main>
  <h1>
    <Typewriter
      options={{
        strings: ["Hello", "my", "name", "is", "Declan", "Gallagher"],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 50,
      }}
    />
  </h1>
  <h2>I bring ideas to life on the web with code and creativity.</h2>
</main>
    )
}