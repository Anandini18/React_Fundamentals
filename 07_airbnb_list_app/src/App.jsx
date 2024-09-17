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

  const cards = data.map((card) => {
    return(
      <Card 
        key = {card.id}
        img = {card.coverImg}
        rating = {card.stats.rating}
        reviewCount = {card.stats.reviewCount}
        location = {card.location}
        title = {card.title}
        price = {card.price}
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
