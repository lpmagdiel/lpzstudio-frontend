"use client";
import { useState } from 'react';
import './ContactForm.css';


export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor
		console.log('Formulario enviado:', formData);
		// Limpiar el formulario después del envío
		setFormData({
			name: '',
			email: '',
			message: ''
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Nombre:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="message">Mensaje:</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
				/>
			</div>
			<button type="submit">Enviar</button>
		</form>
	);
};