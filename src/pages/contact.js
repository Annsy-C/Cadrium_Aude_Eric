import React from 'react';
import Card, { CardImage } from '../elements/card';
import contact from '../images/contact.jpg';
import parking from '../images/parking.jpeg';

const Contact = () => (
	<section className="section">
		<div className="container">
			<div className="notification is-info">
				<p>Un parking est disponible juste à côté de la boutique.</p>
				<br />
				<div className="columns">
					<div className="column">
						<Card height="">
							<CardImage
								src={contact}
								alt="contact"
								size="is-4by3" />
						</Card>
					</div>
					<div className="column">
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
);

export default Contact;