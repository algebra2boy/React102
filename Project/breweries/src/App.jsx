import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='sidebar'>
        <Header />
        <NavBar/>
      </div>
    </div>
  )
}

export default App
