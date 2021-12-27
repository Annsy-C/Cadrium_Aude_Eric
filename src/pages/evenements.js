import React from 'react';
import EvenementBox from '../elements/evenement_box';
import vitrine from'../images/Devanture_2.jpg';

const Evenements = () => (
	<section className="section">
		<EvenementBox 
			title="Fermeture Exceptionnelle"
			description1="Votre magasin fermera ses portes exceptionnellement le  vendredi 31 décembre 2021 et le mardi 4 janvier 2022."
			description2="Réouverture prévue le mercredi 5 janvier 2022 à 10h."
			src={vitrine}
			alt="vitrine de noël"
		/>
	</section>
);

export default Evenements;
