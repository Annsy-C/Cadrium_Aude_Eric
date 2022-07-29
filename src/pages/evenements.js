import React from 'react';
import EvenementBox from '../elements/evenement_box';
import vitrine from'../images/Devanture_2.jpg';

const Evenements = () => (
	<section className="section">
		<EvenementBox 
			title="Fermeture Exceptionnelle"
			description1="Votre magasin fermera ses portes exceptionnellement le  vendredi 29 et le samedi 30 juillet 2022."
			description2=""
			src={vitrine}
			alt="vitrine de noël"
		/>
	</section>
);

export default Evenements;
