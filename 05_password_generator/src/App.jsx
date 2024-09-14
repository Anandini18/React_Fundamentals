// Importing React hooks from the 'react' library
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // useState hook to manage the length of the generated password, default value is 8
  const [length, setLength] = useState(8);

  // useState hook to manage whether numbers are allowed in the password, default is false
  const [numberAllowed, setNumberAllowed] = useState(false);

  // useState hook to manage whether special characters are allowed in the password, default is false
  const [charAllowed, setCharAllowed] = useState(false);

  // useState hook to store the generated password
  const [password, setPassword] = useState("");

  // useRef hook to reference the password input field for copying purposes
  const passwordRef = useRef(null);

  // passwordGenerator function is created using useCallback to generate the password based on user selections
  const passwordGenerator = useCallback(() => {
    let pass = ""; // Initialize an empty string to store the generated password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // String containing all alphabetic characters

    // If numbers are allowed, append numeric characters to the string
    if (numberAllowed) str += "0123456789";

    // If special characters are allowed, append them to the string
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    // Loop to generate a password of the specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // Generate a random index based on the string length
      pass += str.charAt(char); // Add the character at the generated index to the password string
    }

    // Update the password state with the generated password
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); // Dependencies include the state variables that affect password generation

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the text in the input field
    passwordRef.current?.setSelectionRange(0, 999); // Set the selection range (to ensure compatibility across browsers)
    window.navigator.clipboard.writeText(password); // Use the Clipboard API to copy the selected text
  }, [password]); // Dependencies include the current password state

  // useEffect hook to automatically generate a new password whenever length, numberAllowed, or charAllowed change
  useEffect(() => {
    passwordGenerator(); // Call the password generator function
  }, [length, numberAllowed, charAllowed, passwordGenerator]); // Dependencies include the state variables that trigger password regeneration

  // The return statement begins the rendering of JSX elements below

  return (
    <div className="w-full max-w-fit mx-auto shadow-lg rounded-lg px-10 pb-10 my-96 pt-1 bg-black text-orange-500 outline-double">
      <h1 className="text-white text-center my-10 text-4xl">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="w-full py-1 px-3 rounded-sm"
          style={{ backgroundColor: "#242424" }}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="font-semibold outline-none bg-orange-700 text-black px-3 py-0.5 shrink-0 rounded-sm"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
            style={{
              background: `linear-gradient(to right, orange ${
                ((length - 6) / (100 - 6)) * 100
              }%, #e5e7eb ${((length - 6) / (100 - 6)) * 100}%)`,
              accentColor: "orange",
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
