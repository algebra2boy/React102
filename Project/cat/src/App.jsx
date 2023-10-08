import { useState } from 'react';
import './App.css';
import CatDisplay from './components/CatDisplay';
import BanListContainer from './components/BanListContainer';
import LeftSideListContainer from './components/LeftSideListContainer';

function App() {

  const [currentCat, setCurrentCat] = useState(null);
  const [banAttributeList, setBanAttributeList] = useState([]);
  const [previoutCatHistory, setPrevioutCatHistory] = useState([]);

  const callAPI = async () => {
    const API_Link = "https://api.thecatapi.com/v1/breeds";
    const response = await fetch(API_Link);
    const cat_data = await response.json();
    const random_cat_index = Math.floor(Math.random() * cat_data.length);
    const random_cat = extractCatAttributes(cat_data[random_cat_index]);

    checkIfBanAttributeExisted(random_cat);
    await requestCatImage(random_cat);
    filterCatData(random_cat);
  }

  const requestCatImage = async (catData) => {
    const id = catData["reference_image_id"];
    const API_Link = `https://api.thecatapi.com/v1/images/${id}`;
    const response = await fetch(API_Link);
    const data = await response.json();
    setCurrentCat({ "url": data["url"] });
    setPrevioutCatHistory((prev) => [...prev, { url: data["url"], name: catData["name"] }]);
  }

  const extractCatAttributes = (catData) => {
    const { name, life_span, origin, weight, affection_level, reference_image_id } = catData;
    return { name, life_span, origin, weight, affection_level, reference_image_id };
  }

  // to prevent further images/API results with that attribute from being displayed
  const checkIfBanAttributeExisted = (catInfo) => {
    for (const [key, value] of Object.entries(catInfo)) {
      if (banAttributeList.includes(String(value))) {
        delete catInfo[key];
      }
    }
  }

  // add additional information to the catdata
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
        onSubmit={callAPI}
        catInfo={currentCat}
        clickHandler={banAttributeHandler}
      />

      <BanListContainer
        banAttributeList={banAttributeList}
        removeBanAttributeHandler={removeBanAttributeHandler}
      />

      <LeftSideListContainer
        catHistory={previoutCatHistory}
      />

    </div>
  )
}

export default App;
