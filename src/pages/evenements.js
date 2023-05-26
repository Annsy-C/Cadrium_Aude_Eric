import React from 'react';
import EvenementBox from '../elements/evenement_box';
//import Box, { BoxContent, BoxImage } from "../elements/box";
//import Card, { CardImage } from "../elements/card";
import vitrine from'../images/Devanture_2.jpg';
//import halloween1 from '../images/evenements/halloween1.jpg';
//import halloween2 from '../images/evenements/halloween2.jpg';
//import halloween3 from '../images/evenements/halloween3.jpg';
//import noel from '../images/evenements/Noel.jpg';
import festival from '../images/evenements/festival.jpg';

const Evenements = () => (
	<section className="section">
		<div className="columns">
			<div className="column">
				<EvenementBox
					title="Foire de Chateauroux 2023"
					description1="Retrouvez nous à notre stand à la foire exposition de Chateauroux (hall 2) du mercredi 24 au lundi 29 mai ! Réductions sur une sélection de produits."
					description2="Votre magasin reste ouvert aux horaires habituels pendant la durée de la foire."
					src={festival}
					alt="festival"
				/>
			</div>
		</div>
		<div className="columns">
			<div className="column">
				<EvenementBox
					title="Nouveaux horaires à compter du 1er février 2023"
					description1="Du mardi au vendredi : 10h-12h / 14h-18h. Le samedi : 10h-18h30"
					description2="Fermeture le dimanche et le lundi"
					src={vitrine}
					alt="vitrine"
				/>
			</div>
		</div>
	</section>
);

export default Evenements;
