import React from 'react';
import EvenementBox from '../elements/evenement_box';
import vitrine from '../images/paysage.jpeg';

const Evenements = () => (
	<section className="section">
		<EvenementBox 
			title="Horaires Exceptionnels"
			description="Pour préparer la période des fêtes, Cadrium sera ouvert exceptionellement le dimanche 19 décembre de 10h à 12h et de 14h à 18h30 et le lundi 20 décembre de 14h à 18h30."
			src={vitrine}
			alt="vitrine de noël"
		/>
	</section>
);

export default Evenements;