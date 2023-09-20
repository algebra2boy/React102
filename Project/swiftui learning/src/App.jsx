import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { useState } from 'react';

const App = () => {

  const [cardNumber, setCardNumber] = useState(0);

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
  }

  const cards = [
    {
      "front": "Start the adventure of learning SwiftUI!",
      "back": "Press the next arrow to start the flashcards :)",
      "id": 1,
      "url": "https://i0.wp.com/shinesolutions.com/wp-content/uploads/2021/08/1024.jpeg?fit=1024%2C576&ssl=1",
      "category": "easy",
    },
    {
      "front": "How do you iterate over the view?",
      "back": "ForEach!",
      "id": 2,
      "url": "https://i.ytimg.com/vi/BwL587jEY00/maxresdefault.jpg",
      "category": "easy",
    },
    {
      "front": "What is the new database to replace CoreData?",
      "back": "SwiftData!",
      "id": 3,
      "url": "https://developer.apple.com/assets/elements/icons/swiftdata/swiftdata-96x96_2x.png",
      "category": "hard",
    },
    {
      "front": "How many ways can you make a View",
      "back": "2! ViewBuilder and computed var body",
      "id": 4,
      "url": "https://www.swiftbysundell.com/images/tips/adding-swiftui-viewbuilder-to-functions.png",
      "category": "medium",
    },
    {
      "front": "What iOS version did 2023 release?",
      "back": "iOS 17",
      "id": 5,
      "url": "https://res-academy.cache.wpscdn.com/images/seo_posts/20230919/7625cadabeed4efa940d284cd60c2990.png",
      "category": "medium",
    }
  ]

  return (
    <div className="App">
      <Header count={cards.length} />
      <Card card={cards[cardNumber]} />
      <button onClick={getToNextCard}>⭢</button>
    </div>
  )
}

export default App
