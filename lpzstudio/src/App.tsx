import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
    <NavBar/>
      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="container">
          <h2 className="animate__animated animate__fadeInUp">Hola, soy [Tu Nombre]</h2>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">Desarrollador de software y creador de soluciones digitales.</p>
          <p className="animate__animated animate__fadeInUp animate__delay-2s">Aquí comparto mis proyectos y experiencias en el mundo de la programación.</p>
          <a href="#proyectos" className="btn animate__animated animate__fadeInUp animate__delay-3s">Explora mis proyectos</a>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section id="proyectos" className="proyectos">
        <div className="container">
          <h2 className="animate__animated animate__fadeIn">Mis Proyectos</h2>
          <div className="grid-proyectos">
            <div className="proyecto animate__animated animate__fadeInLeft">
              <img src="proyecto1.jpg" alt="Proyecto 1" />
              <h3>Proyecto 1</h3>
              <p>Descripción breve del proyecto.</p>
              <a href="#" className="btn">Ver Detalles</a>
            </div>
            <div className="proyecto animate__animated animate__fadeInUp">
              <img src="proyecto2.jpg" alt="Proyecto 2" />
              <h3>Proyecto 2</h3>
              <p>Descripción breve del proyecto.</p>
              <a href="#" className="btn">Ver Detalles</a>
            </div>
            <div className="proyecto animate__animated animate__fadeInRight">
              <img src="proyecto3.jpg" alt="Proyecto 3" />
              <h3>Proyecto 3</h3>
              <p>Descripción breve del proyecto.</p>
              <a href="#" className="btn">Ver Detalles</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="container">
          <h2 className="animate__animated animate__fadeIn">Sobre Mí</h2>
          <div className="sobre-mi-content">
            <img src="tu-foto.jpg" alt="Tu Foto" className="animate__animated animate__fadeInLeft" />
            <div className="bio animate__animated animate__fadeInRight">
              <p>¡Hola! Soy [Tu Nombre], un apasionado desarrollador de software con experiencia en [tus habilidades principales]. Me encanta crear soluciones digitales que resuelvan problemas reales.</p>
              <p>Tecnologías que manejo:</p>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Python, Django</li>
                <li>React, Node.js</li>
                <li>Git y control de versiones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="contacto">
        <div className="container">
          <h2 className="animate__animated animate__fadeIn">Contacto</h2>
          <form action="#" method="post" className="animate__animated animate__fadeInUp">
            <input type="text" name="nombre" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Correo electrónico" required />
            <textarea name="mensaje" placeholder="Mensaje" rows="5" required></textarea>
            <button type="submit" className="btn">Enviar Mensaje</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p className="logo animate__animated animate__fadeIn">LPZCode</p>
          <ul className="footer-links animate__animated animate__fadeIn">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#sobre-mi">Sobre Mí</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <div className="redes-sociales animate__animated animate__fadeIn">
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Twitter</a>
          </div>
          <p className="derechos animate__animated animate__fadeIn">© 2025 LPZCode. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
