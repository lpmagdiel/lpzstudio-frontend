"use client";
import React from 'react';
import './NavBar.css';

export type NavBarProps = {
	// types...
}

export const NavBar: React.FC<NavBarProps> = ({ }) => {
	return (
		<div className='navbar'>
			<header>
				<div className="container">
					<h1 className="logo animate__animated animate__fadeInLeft">LPZCode</h1>
					<nav>
						<ul>
							<li><a href="#inicio" className="animate__animated animate__fadeInDown">Inicio</a></li>
							<li><a href="#proyectos" className="animate__animated animate__fadeInDown">Proyectos</a></li>
							<li><a href="#sobre-mi" className="animate__animated animate__fadeInDown">Sobre Mí</a></li>
							<li><a href="#contacto" className="animate__animated animate__fadeInDown">Contacto</a></li>
						</ul>
					</nav>
					<a href="#proyectos" className="btn animate__animated animate__fadeInRight">Ver Proyectos</a>
				</div>
			</header>
		</div>
	);
};