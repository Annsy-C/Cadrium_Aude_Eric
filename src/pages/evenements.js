import React from 'react';
import EvenementBox from '../elements/evenement_box';
import Box, { BoxContent, BoxImage } from "../elements/box";
import Card, { CardImage } from "../elements/card";
//import vitrine from'../images/Devanture_2.jpg';
import halloween1 from '../images/evenements/halloween1.jpg';
import halloween2 from '../images/evenements/halloween2.jpg';
import halloween3 from '../images/evenements/halloween3.jpg';

const Evenements = () => (
	<section className="section">
		<div className="columns">
			<div className="column">
				<Card>
					<CardImage src={halloween2} alt="citrouille" size="" />
				</Card>
			</div>
			<div className="column is-half">
				<EvenementBox
					title="Halloween"
					description1="Halloween s'invite chez Cadrium. Venez découvrir des citrouilles velours colorées pour égayer votre intérieur !"
					description2=""
					src={halloween1}
					alt="citrouilles"
				/>
			</div>
			<div className="column">
				<Card>
					<CardImage src={halloween3} alt="citrouille" size="" />
				</Card>
			</div>
		</div>

	</section>
);

export default Evenements;
