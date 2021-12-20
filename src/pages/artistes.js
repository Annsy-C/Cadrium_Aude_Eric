import React from 'react';
import ArtBox from '../elements/art_box';

import chat_bronze from '../images/art_visuel/artistes/Laurent_Rioux.jpg';
import cachalot from '../images/art_visuel/artistes/Le_Cachalot_Laurent_Rioux.jpg';
import envol from '../images/art_visuel/artistes/L_Envol_Laurent_Rioux.jpg';

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
					<ArtBox name="Le Cachalot - Laurent Rioux" src={cachalot} alt="Le Cachalot - Laurent Rioux" price="210,00 €" size=" is-4by3" />
				</div>
				<div className="column">
					<ArtBox name="Sculpture Chat en Bronze - Laurent Rioux" src={chat_bronze} alt="Sculpture Chat en Bronze - Laurent Rioux" price="690,00 €" size=" is-4by3" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-half">
					<ArtBox name="L'envol - Laurent Rioux" src={envol} alt="L'envol - Laurent Rioux" price="210,00 €" />
				</div>
			</div>
		</section>
	</div>
);

export default Artistes;

/* EN RESERVE (en cas de restock) :

import marchand from '../images/art_visuel/artistes/Matthieu_Marchand.jpg';

<div className="column">
	<ArtBox name="Matthieu Marchand" src={marchand} alt="chat bd de matthieu marchand" price="230,00 €"/>
</div>

*/