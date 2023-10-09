import { useEffect, useState } from 'react'
import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {

  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const path = "https://min-api.cryptocompare.com/data/all/coinlist";
      const query = `?&api_key${API_KEY}`;
      const APIURL = path + query;
      const response = await fetch(APIURL);
      const data = await response.json();
      setList(data);
    };
    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    <div className='app'>
      <div className='whole-page'>
        <h1>My Crypto List</h1>

        {list && JSON.stringify(Object.entries(list.Data))}

        {/* {list && Object.entries(list.Data).map(([coin]) =>
          list.Data[coin].PlatformType === "blockchain"
            ? (
              <li key={list.Data[coin].FullName}>
                {list.Data[coin].FullName}
              </li>)
            : null
        )} */}

      </div>
    </div>
  )
}

export default App
