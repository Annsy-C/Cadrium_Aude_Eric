import React from 'react';
import ArtBox from '../elements/art_box';

import marchand from '../images/art_visuel/artistes/Matthieu_Marchand.jpg';
import rioux from '../images/art_visuel/artistes/Laurent_Rioux.jpg';

const Artistes = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="notification is-info centered-content">
					<h2 className="title"><em>Œuvres graphiques et autres travaux</em></h2>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="columns is-centered">
				<div className="column">
					<ArtBox name="Matthieu Marchand" src={marchand} alt="chat bd de matthieu marchand" price="230,00 €"/>
				</div>
				<div className="column">
					<ArtBox name="Laurent Rioux" src={rioux} alt="chat bleu de Laurent Rioux" price="690,00 €" size=" is-4by3" />
				</div>
			</div>
		</section>
	</div>
);

export default Artistes;