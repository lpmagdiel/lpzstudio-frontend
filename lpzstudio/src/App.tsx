import './styles/App.css'
import { NavBar } from './components/NavBar'
import { VisualTitle } from './components/VisualTitle'
import { InfoBox } from './components/InfoBox'
import { ContactForm } from './components/ContactForm'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <header className='center flex-col gap-3'>
        <h1>Hola, soy Magdiel López</h1>
        <p>Desarrollador de software y creador de soluciones digitales.</p>
        <p>Aquí comparto mis proyectos y experiencias en el mundo de la programación.</p>
      </header>
      <VisualTitle text='Herramientas' animation />
      <div className="grid grid-auto-cols gap-2 pd-1">
        <InfoBox title='MAGMA2D' description='Mini librería para juegos en html5 canvas' />
        <InfoBox title='DUMMIESGO' description='Crea imágenes para tus pruebas' />
        <InfoBox title='LOCAL2JSON' description='Almacenar datos en tu web de forma local y fácil con localstorage' />
        <InfoBox title='JSONVIEWER' description='Visualiza de forma grafica tus archivos json' />
        <InfoBox title='hola' description='mundo' />
      </div>
      <VisualTitle text='Proyectos' />
      <VisualTitle text='Blog' />
      <VisualTitle text='Contacto' />
      <ContactForm />
      <footer>
        <div className="container">
          <img src='./logo/icon64.png'/>
        </div>
        <div className="container">
          <div className="redes-sociales animate__animated animate__fadeIn">
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Twitter</a>
          </div>
          <p className="derechos animate__animated animate__fadeIn">© 2025 LPZStudio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
