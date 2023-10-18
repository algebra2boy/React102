import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  
  const Home = () => <h1>Home</h1>;
  const About = () => <h1>About</h1>;
  const Contact = () => <h1>Contact</h1>;


  return (
   <BrowserRouter>
   <h1>HELLO</h1>
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/about" element={<About />} />
      <Route path ="/contact" element={<Contact />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
