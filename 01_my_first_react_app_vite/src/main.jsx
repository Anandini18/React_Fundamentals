import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// If "App" is a function imported from App.jsx , can we make a custom functiton here and then call it?
function MyApp(){
  return(
    <div>
      <h1>Custom App in the picture!</h1>
    </div>
  )
}

{/* 
  If MyApp is func, then we can also use the tradition syntax of func : 

  createRoot(document.getElementById('root')).render(
    MyApp();
  )
  
  This also works fine! 

  */}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp/>
    <App />
  </StrictMode>,
)
