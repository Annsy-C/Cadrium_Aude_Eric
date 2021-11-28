import React from 'react';
import ArtBox from '../elements/art_box';

import alma from '../images/art_visuel/chats/Alma.jpg';
import amici from '../images/art_visuel/chats/Amici_per_la_pelle.jpg';
import elia from '../images/art_visuel/chats/Elia.jpg';
import marina from '../images/art_visuel/chats/Marina.jpg';
import estiva from '../images/art_visuel/chats/Villeggiatura_estiva.jpg';
import cle1 from '../images/art_visuel/chats/Porte-cle1.jpg';
import cle2 from '../images/art_visuel/chats/Porte-cle2.jpg';
import cle3 from '../images/art_visuel/chats/Porte-cle3.jpg';
import cle4 from '../images/art_visuel/chats/Porte-cle4.jpg';

const ArtChats = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="notification is-primary centered-content">
					<h2 className="title"><em>Les chats de Rosina Wachtmeister</em></h2>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Alma" src={alma} alt="Alma" price="prix à venir" />
				</div>
				<div className="column is-3">
					<ArtBox name="Amici per la pelle" src={amici} alt="Amici per la pelle" price="prix à venir" />
				</div>
				<div className="column is-3">
					<ArtBox name="Elia" src={elia} alt="Elia" price="prix à venir" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Marina" src={marina} alt="Marina" price="prix à venir" />
				</div>
				<div className="column is-3">
					<ArtBox name="Villeggiatura estiva" src={estiva} alt="Villeggiatura estiva" price="prix à venir" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Porte-clé" src={cle1} alt="Porte-clé" price="prix à venir" />
				</div>
				<div className="column is-3">
					<ArtBox name="Porte-clé" src={cle2} alt="Porte-clé" price="prix à venir" />
				</div>
				<div className="column is-3">
					<ArtBox name="Porte-clé" src={cle3} alt="Porte-clé" price="prix à venir" />
				</div>
				<div className="column is-3">
					<ArtBox name="Porte-clé" src={cle4} alt="Porte-clé" price="prix à venir" />
				</div>
			</div>
		</section>
	</div>
);

export default ArtChats;