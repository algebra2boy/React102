import BaristaForm from './Components/baristaForm';
import './App.css'
import milk from "./assets/milk.png"

function App() {
  return (
    <div>
      <div className='title-container'>
        <img src={milk} alt="milk" width="70px"/>
        <h1 className='title'>On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm /> 
    </div>
  )
}

export default App
