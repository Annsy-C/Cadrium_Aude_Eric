import React from 'react';
import Card, { CardImage } from '../elements/card'
import atelier from '../images/paysage.jpeg';

const Accueil = () => (
	<section className="section">
		<div className="container">
			<div className="notification is-primary">
				<div className="columns">
					<div className="column centered-content">
						<h1 className="title">Présentation de l'atelier</h1>
						<p><em>Contenu à venir</em></p>
					</div>
					<div className="column">
						<Card>
							<CardImage 
								src={atelier} 
								alt="atelier"
								size="is-4by3" />
						</Card>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Accueil;