"use client";
import React from 'react';
import './InfoBox.css';

export type InfoBoxProps = {
	title: string,
	description: string,
	link?: string
}

export const InfoBox: React.FC<InfoBoxProps> = ({ link = '', title = '', description = '' }) => {
	return (
		<div className='infobox'>
			<div>
				<p><b>{title}</b></p>
				<p>{description}</p>
			</div>
			<div>
				{link?<a><button>VER</button></a>:<button>VER</button>}
			</div>
		</div>
	);
};
