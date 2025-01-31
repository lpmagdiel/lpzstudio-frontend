import './App.css'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className='app'>
    <NavBar/>
    <header className='center flex-col gap-3'>
      <h1>Hola, soy Magdiel López y esto es <span className='red-tag'>LPZ Studio</span></h1>
      <p>Desarrollador de software y creador de soluciones digitales.</p>
      <p>Aquí comparto mis proyectos y experiencias en el mundo de la programación.</p>
    </header>
    </div>
  )
}

export default App
