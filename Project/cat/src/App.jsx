import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='App'>

      <div className='whole-page'>
        <h1> Are you a cat lover?</h1>
        <h2> Discover cats from the Internet!</h2>
        <br />
        <br />
      </div>

      <div className='rightSide nav'>
        <h2>Ban List</h2>
        <h4>Selcet an attributes in your listing to ban it</h4>
      </div>

      <div className='leftSide nav'>
          <h2>Which cat have we seen</h2>
      </div>

    </div>
  )
}

export default App
