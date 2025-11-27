import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './pages/Index.jsx'
import Simulador from './pages/Simulador.jsx'
import Solicitar from './pages/Solicitar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('index')

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} classNameName="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} classNameName="logo react" alt="React logo" />
        </a>
      </div>

      <nav>
        <button onClick={() => setPage('index')}>Inicio</button>
        <button onClick={() => setPage('simulador')}>Simulador</button>
        <button onClick={() => setPage('solicitar')}>Solicitar</button>
      </nav>

      <h1>Vite + React</h1>

      <div classNameName="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {page === 'index' && <Index />}
      {page === 'simulador' && <Simulador />}
      {page === 'solicitar' && <Solicitar />}

      <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App