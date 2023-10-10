import { useEffect, useState } from 'react'
import './App.css'
import CoinInfo from '../Components/coinInfo';

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

        {/* each data is an object, we have to deconstruct the coin object using [] */}
        {list && Object.entries(list.Data).map(([coin]) =>
          list.Data[coin].PlatformType === "blockchain"
            ? (
              <CoinInfo
                image={list.Data[coin].ImageUrl}
                name={list.Data[coin].FullName}
                symbol={list.Data[coin].Symbol}
              />)

            : null
        )}

      </div>
    </div>
  )
}

export default App
