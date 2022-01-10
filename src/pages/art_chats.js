import React from 'react';
import ArtBox from '../elements/art_box';


import marina from '../images/art_visuel/chats/Marina.jpg';
import chiara from '../images/art_visuel/chats/Chiara.png';
import filomena from'../images/art_visuel/chats/Filomena.png';
import nina from '../images/art_visuel/chats/Nina_e_Eleonora.png';
import mazzo from '../images/art_visuel/chats/Mazzo_di_Fiori.jpg';
import melitina from '../images/art_visuel/chats/Melitina.jpg';
import meneo from '../images/art_visuel/chats/Meneo_e_Alma.jpg';
import riposa from '../images/art_visuel/chats/Riposa.jpg';
import artista from '../images/art_visuel/chats/Artista.jpg';
import palladia from '../images/art_visuel/chats/Palladia_e_le_sue_amiche.jpg';
import cle1 from '../images/art_visuel/chats/Lorena_porte_cle.png';
import cle2 from '../images/art_visuel/chats/Gulio_porte_cle.png';
import cle3 from '../images/art_visuel/chats/Luca_e_Sofia_porte_cle.png';
import cle4 from '../images/art_visuel/chats/Mattia_e_Viola_porte_cle.png';
import impero from '../images/art_visuel/chats/Il_mio_piccolo_impero.jpg';

const ArtChats = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="notification is-info centered-content">
					<h2 className="title"><em>Les chats de Rosina Wachtmeister</em></h2>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Mazzo di Fiori" src={mazzo} alt="Mazzo di Fiori" price="39,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Il Piccolo Impero" src={impero} alt="Il Piccolo Impero" price="32,50 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Artista" src={artista} alt="Artista" price="34,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Marina" src={marina} alt="Marina" price="44,95 €" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Melitina" src={melitina} alt="Melitina" price="19,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Meneo e Alma" src={meneo} alt="Meneo e Alma" price="27,50 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Riposa" src={riposa} alt="Riposa" price="19,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Chiara" src={chiara} alt="Chiara" price="58,95 €" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Filomena" src={filomena} alt="Filomena" price="19,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Palladia e le sue amiche" src={palladia} alt="Palladia e le sue amiche" price="8,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Nina e Eleonora" src={nina} alt="Nina e Eleonora" price="27,50 €" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Porte-clé Lorena" src={cle1} alt="Porte-clé Lorena" price="9,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Porte-clé Gulio" src={cle2} alt="Porte-clé Gulio" price="9,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Porte-clé Luca e Sofia" src={cle3} alt="Porte-clé Luca e Sofia" price="9,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Porte-clé Mattia e Viola" src={cle4} alt="Porte-clé Mattia e Viola" price="9,95 €" />
				</div>
			</div>
		</section>
	</div>
);

export default ArtChats;

/* EN RESERVE (en cas de restock) :

import alma from '../images/art_visuel/chats/Alma.jpg';
import amici from '../images/art_visuel/chats/Amici_per_la_pelle.jpg';
import lettura from '../images/art_visuel/chats/Lettura.jpg';
import luca from '../images/art_visuel/chats/Luca_e_Sofia.jpg';
import amanda from '../images/art_visuel/chats/Amanda.jpg';
import fortunello from '../images/art_visuel/chats/Fortunello.jpg';
import elia from '../images/art_visuel/chats/Elia.jpg';
import estiva from '../images/art_visuel/chats/Villegiatura_estiva.jpg';
import gioco from '../images/art_visuel/chats/Gioco_di_dadi.jpg';
import cle5 from '../images/art_visuel/chats/Porte-cle5.jpg';
import cle6 from '../images/art_visuel/chats/Porte-cle6.jpg';

<ArtBox name="Amici per la pelle" src={amici} alt="Amici per la pelle" price="49,95 €" />

<ArtBox name="Lettura" src={lettura} alt="Lettura" price="34,95 €" />

<ArtBox name="Luca e Sofia" src={luca} alt="Luca e Sofia" price="29,95 €" />

<ArtBox name="Amanda" src={amanda} alt="Amanda" price="19,95 €" />

<ArtBox name="Fortunello" src={fortunello} alt="Fortunello" price="19,95 €" />

<ArtBox name="Porte-clé boîte" src={cle5} alt="Porte-clé boîte" price="8,95 €" />

<ArtBox name="Porte-clé boîte" src={cle6} alt="Porte-clé boîte" price="8,95 €" />

<ArtBox name="Alma" src={alma} alt="Alma" price="89,00 €" />

<ArtBox name="Elia" src={elia} alt="Elia" price="39,95 €" />

<ArtBox name="Villeggiatura estiva" src={estiva} alt="Villeggiatura estiva" price="39,95 €" />

<ArtBox name="Gioco di Dadi" src={gioco} alt="Gioco di Dadi" price="19,95 €" />

*/