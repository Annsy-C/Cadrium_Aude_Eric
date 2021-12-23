import React from 'react';
import EvenementBox from '../elements/evenement_box';
import vitrine from'../images/Devanture_2.jpg';
import interieur from'../images/Interieur.jpg';

const Evenements = () => (
	<section className="section">
		<EvenementBox 
			title="Ouverture Exceptionnelle"
			description1="Pour le nouvel an, votre magasin sera exceptionnellement ouvert le vendredi 31 décembre de 10h à 15h."
			description2=""
			src={interieur}
			alt="vitrine"
		/>
		<EvenementBox 
			title="Fermeture Exceptionnelle"
			description1="Votre magasin fermera ses portes exceptionnellement le mardi 4 janvier 2022."
			description2="Réouverture prévue le mercredi 5 janvier 2022 à 10h."
			src={vitrine}
			alt="vitrine de noël"
		/>
	</section>
);

export default Evenements;
