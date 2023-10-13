import { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import List from './components/List';
import './App.css';

function App() {
  const [breweries, setBreweries] = useState([]);


  useEffect(() => {
    const fetchAllBrewData = async () => {
      const APIURL = "https://api.openbrewerydb.org/v1/breweries";
      const response = await fetch(APIURL);
      const data = await response.json();
      setBreweries(data);
    };
    fetchAllBrewData().catch(console.error);
  }, []);

  return (
    <div className='app'>
      <div className='sidebar'>
        <Header />
        <NavBar/>
      </div>
      <div className='app-page'>
        <div className='app-row'>
          <List breweries={breweries}/>
        </div> 
      </div>
    </div>
  )
}

export default App
