import { useState } from 'react'// декларативный 
import reactLogo from './assets/react.svg' // декларативный 
import viteLogo from '/vite.svg'// декларативный 
import './App.css'// декларативный 

function App() {
  const [count, setCount] = useState(0) // Декларативный  
  const currentYear = new Date().getFullYear(); // Императивный   

  return ( // Весь код Декларативный  
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
	  <footer>
		<p> { currentYear } </p>
	  </footer>
    </>
  )
}

export default App // Декларативный   
