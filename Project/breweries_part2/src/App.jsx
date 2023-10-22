import { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import List from './components/List';
import CardList from './components/CardList';
import MyBarChart from './components/MyBarChart';
import './App.css';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBreweries, setFilteredBreweries] = useState([]);
  const [brewType, setBrewType] = useState("micro"); // default type

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
    const searchLocationCondition = (brew) =>
      brew["state"].toLowerCase().includes(searchTerm.toLowerCase()) ||
      brew["city"].toLowerCase().includes(searchTerm.toLowerCase());

    const searchBrewType = (brew) => brew.brewery_type === brewType;
    const search = (brew) => searchTerm.length === 0
      ? searchBrewType(brew)
      : searchBrewType(brew) && searchLocationCondition(brew);
    const filteredResults = breweries.filter(search)
    setFilteredBreweries(filteredResults);
  };
  const handleClear = () => {
    setFilteredBreweries([]);
    setSearchTerm("")
  };
  const handleBrewType = (e) => setBrewType(e.target.value);

  return (
    <div className='app'>

      <div className='app-page'>
        <div className='app-row'>
          <CardList breweries={breweries} />
        </div>

        <div className='app-row flex'>
          <MyBarChart
            chartData={breweries}
            attribute={"brewery_type"}
            yLabel={"Brewery Type"}
            title={"distribution of brewery type"} />
          <MyBarChart
            chartData={breweries}
            attribute={"state"}
            yLabel={"State"}
            title={"distribution of brewery in different state"} />
        </div>

        <div className='app-row'>
          <List
            breweries={filteredBreweries.length > 0 ? filteredBreweries : breweries}
            searchTerm={searchTerm}
            handleSearchTerm={handleSearchTerm}
            handleSubmit={handleSubmit}
            handleClear={handleClear}
            brewType={brewType}
            handleBrewType={handleBrewType} />
        </div>
      </div>

    </div>
  )
}

export default App
