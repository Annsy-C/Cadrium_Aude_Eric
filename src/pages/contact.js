import React from 'react';
import Card, { CardImage } from '../elements/card';
import contact from '../images/contact.jpg';
import parking from '../images/parking.jpeg';

const Contact = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="notification is-info centered-content">
					<h2 className="title">CADRIUM vous accueille :</h2>
					<p><em>Du Mardi au Vendredi de 10h à 12h et de 14h à 18h30</em></p>
					<p><em>Le Samedi de 10h à 18h30</em></p>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="notification is-info">
					<div className="columns">
						<div className="column">
							<Card height="">
								<CardImage
									src={contact}
									alt="contact"
									size="is-4by3" />
							</Card>
						</div>
						<div className="column centered-content">
							<p>Le parking du centre-ville est disponible juste à côté de la boutique.</p>
							<p>La première heure de stationnement est gratuite.</p>
							<br />
							<Card height="">
								<CardImage 
									src={parking} 
									alt="parking"
									size="is-4by3" />
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Contact;