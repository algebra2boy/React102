import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import GuessContainer from './components/GuessContainer';
import { useState } from 'react';
import cardData from "./CardData.json";

const App = () => {

  const [cards, setCards] = useState(cardData);

  const [cardNumber, setCardNumber] = useState(0);

  // user input
  const [answer, setAnswer] = useState("");

  // to check whether user input is correct or incorrect (either "correct" or "incorrect")
  const [result, setResult] = useState("");

  // check if the card is toggled or not
  const [toggledCard, setToggledCard] = useState(false); // Moved from Card to App

  const getToNextCard = () => {
    setCardNumber(prev => prev + 1);
    emptyAllState();
  }

  const getToPreviousCard = () => {
    setCardNumber(prev => prev - 1);
    emptyAllState();
  }

  const emptyAllState = () => {
    // empty user's previous input
    setAnswer("");
    setResult("");
  }

  const shuffleCard = () => {
    setCards(cards.sort((a,b) => 0.5 - Math.random()));
  }


  const handleSubmit = (e) => {
    // important to disable the form refresh
    e.preventDefault();

    // make sure user can enter their guess only before seeing the flipside of the card
    if (toggledCard) {
      return;
    }

    // validate user's answer
    const card = cards[cardNumber];
    if (card.back === answer) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  };

  return (
    <div className="App">

      <Header count={cards.length} />

      <Card
        card={cards[cardNumber]}
        toggledCard={toggledCard}
        setToggledCard={setToggledCard} />

      <GuessContainer
        handleChange={(e) => setAnswer(e.target.value)}
        handleSubmit={(e) => handleSubmit(e)}
        result={result}
        // value is very important to empty the input field 
        // two-way binding, parent has the state variable, but child has the prop, which only
        // has the ready-only property, we have pass value as a prop to notify any newest data
        value={answer} />

      <div className='button-container'>

        <button
          className="previousCard"
          disabled={cardNumber === 0}
          onClick={getToPreviousCard}>⭠
        </button>

        <button
          className="nextCard"
          disabled={cardNumber === cards.length - 1}
          onClick={getToNextCard}>⭢
        </button>

        <button
          onClick={shuffleCard}>
          🔀 Shuffle
        </button>

      </div>

    </div >
  )
}

export default App
