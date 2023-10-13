import { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import List from './components/List';
import CardList from './components/CardList';
import './App.css';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBreweries, setFilteredBreweries] = useState([]);

  useEffect(() => {
    const fetchAllBrewData = async () => {
      const APIURL = "https://api.openbrewerydb.org/v1/breweries";
      const response = await fetch(APIURL);
      const data = await response.json();
      setBreweries(data);
    };
    fetchAllBrewData().catch(console.error);
  }, []);

  const handleSearchTerm = (e) => setSearchTerm(e.target.value);
  const handleSubmit = () => {
    const searchCondition = (brew) => 
      brew["state"].toLowerCase().includes(searchTerm.toLowerCase())|| 
      brew["city"].toLowerCase().includes(searchTerm.toLowerCase());
    const filteredResults = breweries.filter(searchCondition);
    setFilteredBreweries(filteredResults);
  };
  const handleClear = () => setSearchTerm("");

  return (
    <div className='app'>

      <div className='sidebar'>
        <Header />
        <NavBar />
      </div>

      <div className='app-page'>
        <div className='app-row'>
          <CardList breweries={breweries} />
        </div>
        <div className='app-row'>
          <List
            breweries={filteredBreweries.length > 0 ? filteredBreweries : breweries}
            searchTerm={searchTerm}
            handleSearchTerm={handleSearchTerm}
            handleSubmit={handleSubmit}
            handleClear={handleClear} />
        </div>
      </div>

    </div>
  )
}

export default App
