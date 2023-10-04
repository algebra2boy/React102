// const ACCESS_KEY = import.meta.env.ACCESS_KEY;
import './App.css';
import APIForm from './components/APIForm';
import Gallery from './components/Gallery';

import { useState } from 'react';


const ACCESS_KEY = "004e62ae8c6943f99f09d76652001f98"

function App() {

  const [currentImage, setCurrentImage] = useState(null);
  const [prevImages, setPrevImages] = useState([]);
  const [quota, setQuota] = useState(null);

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
      makeQuery();
    }
  }

  const makeQuery = () => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;
    let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;
    callAPI(query).catch(console.error); // catch any error returning from the API
  }

  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    // url does not exist from the returned json
    if (json.url == null) {
      alert("Oops! Something went wrong with that query, let's try again!")
    }
    else {
      setCurrentImage(json.url);
      setPrevImages((images) => [...images, json.url]);
      reset();
      getQuota();
    }
  }

  const reset = () => {
    setInputs({
      url: "",
      format: "",
      no_ads: "",
      no_cookie_banners: "",
      width: "",
      height: ""
    });
  }

  const getQuota = async () => {
    const response = await fetch("https://api.apiflash.com/v1/urltoimage/quota?access_key=" + ACCESS_KEY);
    const result = await response.json();
    setQuota(result);
    console.log(result);
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
      {currentImage ? (
        <img
          className="screenshot"
          src={currentImage}
          alt="Screenshot returned"
        />
      ) : (
        <div>

        </div>
      )}

      <div className="container">
        <h3> Current Query Status: </h3>
        <p>
          {ACCESS_KEY}
          https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY
          <br></br>
          &url={inputs.url} <br></br>
          &format={inputs.format} <br></br>
          &width={inputs.width}
          <br></br>
          &height={inputs.height}
          <br></br>
          &no_cookie_banners={inputs.no_cookie_banners}
          <br></br>
          &no_ads={inputs.no_ads}
          <br></br>
        </p>
        {quota
          ? (<p>Remaining API calls: {quota.remaining} out of {quota.limit}</p>)
          : (<p>API Call status: Will appear once you send a request</p>)
        }
      </div>

      <div className='container'>
        <Gallery images={prevImages}></Gallery>
      </div>

      <br></br>
    </div>
  )
}

export default App
