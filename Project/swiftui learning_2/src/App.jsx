import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import GuessContainer from './components/GuessContainer';
import { useState } from 'react';
import cards from "./CardData.json";

const App = () => {

  const [cardNumber, setCardNumber] = useState(0);
  // user input
  const [answer, setAnswer] = useState("");
  // to check whether user input is correct or incorrect (either "correct" or "incorrect")
  const [result, setResult] = useState("");

  const getToNextCard = () => {
    setCardNumber(prev => {
      // reach to the end of the list, then loop back to the beginning 
      if (prev >= cards.length - 1) {
        return 0;
        // keep incrementing
      } else {
        return prev + 1;
      }
    });
    setAnswer("");
    setResult("");
  }

  const handleSubmit = (e) => {
    // important to disable the form refresh
    e.preventDefault();

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
      <Card card={cards[cardNumber]} />
      {answer}
      <GuessContainer
        handleChange={(e) => setAnswer(e.target.value)}
        handleSubmit={(e) => handleSubmit(e)}
        result={result} 
        // value is very important to empty the input field 
        // two-way binding, parent has the state variable, but child has the prop, which only
        // has the ready-only property, we have pass value as a prop to notify any newest data
        value={answer}/>
      <button onClick={getToNextCard}>⭢</button>
    </div>
  )
}

export default App
