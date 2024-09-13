/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Player } from '@lottiefiles/react-lottie-player'; // Import Lottie Player
import jsonAnimation from "./assets/jsonAnimation.json"

function App() {
  
  // We need a variable that can change the color, so we need state
  const [color,setColor] = useState("PaleVioletRed");

  return (
    <>
       <div
        className="w-full h-screen duration-200 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >

<div className="mb-44">
      <Player
        autoplay
        loop
        src={jsonAnimation}
        style={{ height: '300px', width: '300px' }} // Adjust size
      />
    </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-5 py-4 rounded-md">

        <button 
          onClick={() => setColor("#DE3163")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "#DE3163"}}
          >Red</button>

          <button 
          onClick={() => setColor("OrangeRed")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "OrangeRed"}}
          >Orange</button>
          {/* We can't do like : onClick={setColor()}, but we can do onClick={setColor}, but paranthesis is needed coz,we want to pass our color parameter!, so we have to use callback function!*/}
          

<button 
          onClick={() => setColor("#FFBF00")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "#FFBF00"}}
          >Yellow</button>

<button 
          onClick={() => setColor("LightSeaGreen")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "LightSeaGreen"}}
          >Green</button>

<button 
          onClick={() => setColor("DodgerBlue")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "DodgerBlue"}}
          >Blue</button>

<button 
          onClick={() => setColor("MediumSlateBlue")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "MediumSlateBlue"}}
          >Indigo</button>

<button 
          onClick={() => setColor("Orchid")}
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{backgroundColor: "Orchid"}}
          >Violet</button>
         


        </div>
      </div>
    </div>
    </>
  )
}

export default App
