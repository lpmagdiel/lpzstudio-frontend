"use client";
import React from 'react';
import './NavBar.css';

export type NavBarProps = {
	// types...
}

export const NavBar: React.FC<NavBarProps> = ({ }) => {
	return (
		<nav className="navbar">
		<div className="navbar-brand">
			<span>LPZ</span>
			<span>Studio</span>
		</div>
		<div className="navbar-links">
			<a href="#home">Inicio</a>
			<a href="#tools">Herramientas</a>
			<a href="#blog">Blog</a>
			<a href="#contact">Contacto</a>
			<div className="navbar-cta">
			<a href="#projects">
				<button>Proyectos</button>
			</a>
		</div>
		</div>
	</nav>
	);
};