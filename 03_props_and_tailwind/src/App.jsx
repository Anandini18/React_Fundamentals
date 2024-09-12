/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username:"Nandini",
    age:21
  }

  let newArr = [1,2,3];

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">Tailwind Test</h1>

      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-10"> 
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/16715674/pexels-photo-16715674/free-photo-of-feral-pigeon-close-up.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>Pigeon Patrick</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>

     

      {/* MY CUSTOM CARD  */}
      {/* Passing props (propery) "channel" with value "myCard" */}
      <div className="flex flex-row gap-4 ">
      <Card username="Pigeon P." someObj = {myObj} someArr = {newArr}/>
      <Card username="P. Patrick" btnText="Visit Me"/>
      </div>
    </>
  );
}

export default App;
