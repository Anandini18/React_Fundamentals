import { useState } from 'react'
import './App.css'

function App() {

  // We get 2 values from useState in an array
  // Value at index 0  : counter
  // Value at index 1 : setCounter func
  // These names are acco. to our requeriments, we can change them 
  let [counter, setCounter] = useState(15);

  // let counter = 15;
  const addValue = () =>{

    // This will change the value wherever there's counter variable
    // That's why we have used
    counter+=1;
    setCounter(counter);
    console.log("Clicked ! "+counter);


    /**
     setCounter(counter+1)
     setCounter(counter+1)
     setCounter(counter+1)
     setCounter(counter+1)

     If I do like this in react, then why it's not getting updates as 19 (default value = 15), while when I'm doing this, it's getting updated : 

     setCounter(counter => counter+1)
     setCounter(counter => counter+1)
     setCounter(counter => counter+1)
     setCounter(counter => counter+1)
     **/
  }

  const removeValue = () =>{
    if(counter!=0){ 
    counter--;
    setCounter(counter);}
    else{
      console.log("Value is 0!");
    }
  }


 
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter : {counter}</h2>
      <button
       onClick={addValue}
      >↑</button>
      <br />
      <br />
      <button
      onClick={removeValue}>↓</button>
      
    </>
  )
}

export default App
