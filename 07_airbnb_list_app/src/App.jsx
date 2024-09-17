// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from "./components/Card"
import data from './data'

function App() {
  // const [count, setCount] = useState(0)

  const cards = data.map((item) => {
    return(
      // <Card 
      //   key = {card.id}
      //   img = {card. coverImg}
      //   rating = {card.stats.rating}
      //   reviewCount = {card.stats.reviewCount}
      //   location = {card.location}
      //   title = {card.title}
      //   price = {card.price}
      //   openSpots = {card.openSpots}
      // />

      <Card 
        key={item.id}                  // 'key' is passed separately, required for uniquely identifying list items in React
        item={item}                    // The entire 'item' object is passed as a single prop called 'item'
                                        // Using object spread syntax means you don't need to individually pass each 
                                        // property (like img, rating, etc.) as separate props
      />
      
      )
  });

  return (
    <>
    <Navbar />
    <Hero />
    <section className='cards-list'>
      {cards}
    </section>

    
    </>
  )
}

export default App
