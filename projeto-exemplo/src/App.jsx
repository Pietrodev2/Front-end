import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nome, setNome] = useState("Mundo")

  return (
    <>
    <div>
      <h1>Ola {nome}</h1>
      <button onClick={ () => setNome('Gustavo')}>Entrar</button>
    </div>
    </>
  )
}

export default App
