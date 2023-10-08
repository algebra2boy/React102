import { useState } from 'react'
import './App.css'
import CatDisplay from './components/CatDisplay';
import BanListContainer from './components/BanListContainer';

function App() {

  const [currentCat, setCurrentCat] = useState(null);
  const [banAttributeList, setBanAttributeList] = useState([]);

  const handleSubmit = async () => {
    const API_Link = "https://api.thecatapi.com/v1/breeds";
    const response = await fetch(API_Link);
    const cat_data = await response.json();
    const random_cat_index = Math.floor(Math.random() * cat_data.length);
    const random_cat = cat_data[random_cat_index];
    await requestCatImage(random_cat["reference_image_id"]);
    filterCatData(random_cat);
  }

  const requestCatImage = async (id) => {
    const API_Link = `https://api.thecatapi.com/v1/images/${id}`;
    const response = await fetch(API_Link);
    const data = await response.json();
    setCurrentCat({ "url": data["url"] });
  }

  const filterCatData = (cat) => {
    setCurrentCat((prev) => ({
      ...prev,
      "name": cat["name"],
      "life-span": cat["life_span"] + " years",
      "origin": cat["origin"],
      "weight": cat["weight"]["imperial"] + " lbs",
      "affection_level": cat["affection_level"],
    }));
  }

  const banAttributeHandler = (e) => setBanAttributeList((prev) => [...prev, e.target.value]);
  const removeBanAttributeHandler = (e) => setBanAttributeList((prev) => prev.filter(attribute => attribute !== e.target.value));

  return (
    <div className='App'>
      <CatDisplay
        onSubmit={handleSubmit}
        catInfo={currentCat}
        clickHandler={banAttributeHandler}
      />

      <BanListContainer
        banAttributeList={banAttributeList}
        removeBanAttributeHandler={removeBanAttributeHandler}
      />

      <div className='leftSide nav'>
        <h2>Which cat have we seen</h2>
      </div>

    </div>
  )
}

export default App;
