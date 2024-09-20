/* eslint-disable no-unused-vars */
import React from "react";
import memesData from "../memesData";

export default function Meme() {

  //  const[memeImg , setMemeImg] = React.useState("");
  const [meme,setMeme] = React.useState(
    {
      topText:"",
      bottomText:"",
      randomImage:"https://i.imgflip.com/1ur9b0.jpg"
    }
  )

  const [allMemeImages,setAllMemeImages] = React.useState(memesData);

  function handleClick() {
    let memeArraySize = allMemeImages.data.memes.length;
    let imgs = allMemeImages.data.memes;
    let randomNum = Math.floor(Math.random()*memeArraySize);
    let randomMemeUrl = imgs[randomNum].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage:randomMemeUrl
    }))
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={handleClick}>
          Get a new meme image 🖼
        </button>
        <img src={meme.randomImage}/>
      </div>
    </main>
  );
}
