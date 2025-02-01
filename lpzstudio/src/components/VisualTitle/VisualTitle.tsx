"use client";
import { useState, useRef, useEffect } from 'react';
import './VisualTitle.css';

export type VisualTitleProps = {
	text:string,
	animation?: boolean
}

export const VisualTitle: React.FC<VisualTitleProps>  = ({text='',animation=false}) => {
		const [isVisible, setIsVisible] = useState(animation);
		const elementRef = useRef(null);
	  
		useEffect(() => {
		  const observer = new IntersectionObserver(
			(entries) => {
			  entries.forEach((entry) => {
				if (entry.isIntersecting) {
				  setIsVisible(true);
				  observer.unobserve(entry.target); // Opcional: Deja de observar después de animar
				}
			  });
			},
			{
			  threshold: 0.5, // Ajusta este valor para cambiar cuándo se activa la animación
			}
		  );
	  
		  if (elementRef.current) {
			observer.observe(elementRef.current);
		  }
	  
		  // Limpia el observer cuando el componente se desmonta
		  return () => {
			if (elementRef.current) {
			  observer.unobserve(elementRef.current);
			}
		  };
		}, []);
	return (
		<div className='visualtitle'>
			<div ref={elementRef} className={`visualtitle-text ${isVisible?'visualtitle-animate':''}`}><h2>{text}</h2></div>
 		</div>
	);
};