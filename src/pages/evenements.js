import React from 'react';
import EvenementBox from '../elements/evenement_box';
//import Box, { BoxContent, BoxImage } from "../elements/box";
//import Card, { CardImage } from "../elements/card";
//import vitrine from'../images/Devanture_2.jpg';
//import halloween1 from '../images/evenements/halloween1.jpg';
//import halloween2 from '../images/evenements/halloween2.jpg';
//import halloween3 from '../images/evenements/halloween3.jpg';
import noel from '../images/evenements/Noel.jpg';

const Evenements = () => (
	<section className="section">
		<div className="columns">
			<div className="column">
				<EvenementBox
					title="Fêtes de fin d'année"
					description1="Pour les fêtes, votre boutique sera ouverte le 24 décembre de 10h à 16h et le 31 décembre de 10h à 16h."
					description2="Fermeture exceptionnelle pour congés à partir du 31 décembre au soir, réouverture prévue le mardi 10 janvier."
					src={noel}
					alt="noel chateauroux"
				/>
			</div>
		</div>

	</section>
);

export default Evenements;
