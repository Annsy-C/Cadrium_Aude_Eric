import React from 'react';
import EvenementBox from '../elements/evenement_box';
//import Box, { BoxContent, BoxImage } from "../elements/box";
//import Card, { CardImage } from "../elements/card";
import vitrine1 from'../images/Devanture_1.jpg';
import vitrine2 from'../images/Devanture_2.jpg';
//import halloween1 from '../images/evenements/halloween1.jpg';
//import halloween2 from '../images/evenements/halloween2.jpg';
//import halloween3 from '../images/evenements/halloween3.jpg';
//import noel from '../images/evenements/Noel.jpg';
//import festival from '../images/evenements/festival.jpg';

const Evenements = () => (
	<section className="section">
		<div className="columns">
			<div className="column">
				<EvenementBox
					title="Horaires d'été du 11 juillet au 20 août 2023"
					description1="Mardi, mercredi,vendredi de 10h à 12h et de 14h à 18h. Samedi de 10h à 18h30. Fermeture les lundi, jeudi et dimanche."
					description2="Congés annuels : fermeture du mardi 4 au samedi 8 juillet inclus. Réouverture mardi 11 juillet."
					src={vitrine2}
					alt="vitrine"
				/>
			</div>
		</div>
		<div className="columns">
			<div className="column">
				<EvenementBox
					title="Nouveaux horaires à compter du 1er février 2023"
					description1="Du mardi au vendredi : 10h-12h / 14h-18h. Le samedi : 10h-18h30"
					description2="Fermeture le dimanche et le lundi"
					src={vitrine1}
					alt="vitrine"
				/>
			</div>
		</div>
	</section>
);

export default Evenements;
