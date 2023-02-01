import React from 'react';
import Card, { CardImage } from '../elements/card';
import parking from '../images/parking.jpeg';

const Contact = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="notification is-info centered-content">
					<h2 className="title">CADRIUM vous accueille :</h2>
					<p><em>Du Mardi au Vendredi de 10h à 12h et de 14h à 18h</em></p>
					<p><em>Le Samedi de 10h à 18h30</em></p>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="notification is-info centered-content">
					<h1 className="subtitle">Boutique située 31 rue Ledru Rollin, 36 OOO Châteauroux</h1>
          			<p>cadrium@gmail.com</p>
					<div className="columns is-centered">
					  <div className="column">
					  	<p><a href="https://www.facebook.com/cadrium" target="blank">page facebook</a></p>
					  </div>
					  <div className="column">
					  	<p>02 54 07 37 56</p>	
					  </div>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="notification is-info">
					<div className="columns">
						<div className="column map-responsive">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1132.858229776487!2d1.6954619899173444!3d46.81169934548151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fba1fd86ba69ff%3A0xf593d950461a7d4a!2sCadrium!5e0!3m2!1sfr!2sfr!4v1638185413008!5m2!1sfr!2sfr" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" title="map"></iframe>
						</div>
						<div className="column centered-content">
							<p>Le parking Centre-ville est disponible juste à côté de la boutique.</p>
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