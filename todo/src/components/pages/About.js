import React from 'react'

function About() {
  return (
    // Kind of "ghost" element. Doesn't visible in DOM. But weneed it for JSX. Always need to return 1 element
    <React.Fragment>
      <h1>About</h1>
      <p> This is Todo app v1.0.0 bla bla bla Lorem</p>
    </React.Fragment>
  )
}

export default About;