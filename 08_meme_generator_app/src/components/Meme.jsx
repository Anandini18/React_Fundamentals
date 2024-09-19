/* eslint-disable no-unused-vars */
import React from "react";
import memesData from "../memesData";

export default function Meme() {

   const[memeImg , setMemeImg] = React.useState("");

  function handleClick() {
    let memeArraySize = memesData.data.memes.length;
    let imgs = memesData.data.memes;
    let randomNum = Math.floor(Math.random()*memeArraySize);
    let randomMemeUrl = imgs[randomNum].url;
    setMemeImg(randomMemeUrl);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={handleClick}>
          Get a new meme image 🖼
        </button>
        <img src={memeImg}/>
      </div>
    </main>
  );
}
