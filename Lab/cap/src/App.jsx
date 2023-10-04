import './App.css';
import APIForm from './components/APIForm';
import { useState } from 'react';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {

  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: ""
  });

  const submitForm = () => {

    const defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };

    if (inputs.url === "" || inputs.url === " ") {
      alert("You forgot to submit an url!");
    } else {
      for (const [key, value] of Object.entries(inputs)) {
        if (value == "") {
          inputs.key = defaultValues[key];
        }
      }
    }
  }

  return (
    <div className='whole-page'>
      <h1>Build Your Own Screenshot! 📸</h1>

      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim()
          }))
        }
        onSubmit={submitForm}
      />
      <br />
    </div>
  )
}

export default App
