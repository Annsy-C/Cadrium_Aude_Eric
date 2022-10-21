import React from 'react';
import ArtBox from '../elements/art_box';

import marina from '../images/art_visuel/chats/Marina.jpg';
import elia from '../images/art_visuel/chats/Elia.jpg';
import riposa from '../images/art_visuel/chats/Riposa.jpg';
import cle1 from '../images/art_visuel/chats/Lorena_porte_cle.png';
import cle3 from '../images/art_visuel/chats/Luca_e_Sofia_porte_cle.png';
import cle4 from '../images/art_visuel/chats/Mattia_e_Viola_porte_cle.png';
import lorena from '../images/art_visuel/chats/Lorena_e_Gulio.jpg';
import famiglia from '../images/art_visuel/chats/Famiglia_felice.jpg';
import ghiottona from '../images/art_visuel/chats/Ghiottona.jpg';
import amanda from '../images/art_visuel/chats/Amanda.jpg';
import bagno from '../images/art_visuel/chats/Il_giorno_del_bagno.jpg';
import teresa from '../images/art_visuel/chats/Teresa.jpg';
import innamorato from '../images/art_visuel/chats/Innamorato.jpg';
import cara from '../images/art_visuel/chats/Cara_e_Elio.jpg';
import laura from '../images/art_visuel/chats/Laura_e_Fabio.jpg';
import arianna from '../images/art_visuel/chats/Arianna_e_Lio.jpg';
import teo from '../images/art_visuel/chats/Teo.jpg';
import giardino from '../images/art_visuel/chats/Un_posto_in_giardino.jpg';
import piccolo from '../images/art_visuel/chats/Piccolo_giardiniere.jpg';
import fiore from '../images/art_visuel/chats/Fiore.jpg';
import vaisselle from '../images/art_visuel/chats/vaisselle.jpg';
import nicola from '../images/art_visuel/chats/Nicolas.jpg';
import dessous from '../images/art_visuel/chats/dessous_de_verre.jpg';
import luogo from '../images/art_visuel/chats/Luogo_accogliente.jpg';
import mattia from '../images/art_visuel/chats/Mattia_e_Viola.jpg';
import pallone from '../images/art_visuel/chats/Pallone.jpg';
import casa from '../images/art_visuel/chats/Casa_di_pan_di_Zenzero.jpg';


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
					<ArtBox name="Il giorno del bagno" src={bagno} alt="Il giorno del bagno" price="39,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Piccolo giardiniere" src={piccolo} alt="Piccolo giardiniere" price="32,50 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Innamorato" src={innamorato} alt="Innamorato" price="49,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Marina" src={marina} alt="Marina" price="44,95 €" />
				</div>
			</div>
			<div className="columns is-centered">
			<div className="column is-4">
					<ArtBox name="Un posto in giardino" src={giardino} alt="Un posto in giardino" price="39,95 €" />
				</div>
				<div className="column is-4">
					<ArtBox name="Famiglia Felice" src={famiglia} alt="Famiglia Felice" price="74,95 €" />
				</div>
				<div className="column is-4">
				<ArtBox name="Casa di pan di Zenzero" src={casa} alt="Casa di pan di Zenzero" price="39,95 €" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Il giorno del bagno" src={bagno} alt="Il giorno del bagno" price="39,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Piccolo giardiniere" src={piccolo} alt="Piccolo giardiniere" price="32,50 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Innamorato" src={innamorato} alt="Innamorato" price="49,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Marina" src={marina} alt="Marina" price="44,95 €" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Ghiottona" src={ghiottona} alt="Ghiottona" price="39,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Laura e Fabio" src={laura} alt="Teresa" price="27,50 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Arianna e Lio" src={arianna} alt="Arianna e Lio" price="27,50 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Luogo accogliente" src={luogo} alt="Luogo accogliente" price="32,50 €" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Teresa" src={teresa} alt="Teresa" price="19,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Nicola" src={nicola} alt="Nicola" price="19,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Riposa" src={riposa} alt="Riposa" price="19,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Teo" src={teo} alt="Teo" price="55,95 €" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Lorena e Gulio" src={lorena} alt="Lorena e Gulio" price="27,50 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Fiore" src={fiore} alt="Fiore" price="24,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Elia" src={elia} alt="Elia" price="39,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Amanda" src={amanda} alt="Amanda" price="19,95 €" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Mattia e Viola" src={mattia} alt="Mattia e Viola" price="27,50 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Pallone" src={pallone} alt="Pallone" price="39,95 €" />
				</div>
				<div className="column is-3">
				<ArtBox name="Cara e ELio" src={cara} alt="Cara e Elio" price="29,95 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Set de 4 dessous de verre" src={dessous} alt="Set de 4 dessous de verre" price="19,95 €" />
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Vaisselle Rosina" src={vaisselle} alt="Vaisselle Rosina" price="32,50 €" />
				</div>
				<div className="column is-3">
					<ArtBox name="Porte-clé Lorena" src={cle1} alt="Porte-clé Lorena" price="9,95 €" />
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
import luca from '../images/art_visuel/chats/Luca_e_Sofia.jpg';
import fortunello from '../images/art_visuel/chats/Fortunello.jpg';
import gioco from '../images/art_visuel/chats/Gioco_di_dadi.jpg';
import cle5 from '../images/art_visuel/chats/Porte-cle5.jpg';
import cle6 from '../images/art_visuel/chats/Porte-cle6.jpg';
import artista from '../images/art_visuel/chats/Artista.jpg';
import filomena from'../images/art_visuel/chats/Filomena.png';
import palladia from '../images/art_visuel/chats/Palladia_e_le_sue_amiche.jpg';
import nina from '../images/art_visuel/chats/Nina_e_Eleonora.png';
import felice from '../images/art_visuel/chats/Felice.jpg';
import impero from '../images/art_visuel/chats/Il_mio_piccolo_impero.jpg';
import clara from '../images/art_visuel/chats/Clara.jpg';
import chiara from '../images/art_visuel/chats/Chiara.png';
import mazzo from '../images/art_visuel/chats/Mazzo_di_Fiori.jpg';
import mara from '../images/art_visuel/chats/Mara.jpg';
import melitina from '../images/art_visuel/chats/Melitina.jpg';
import meneo from '../images/art_visuel/chats/Meneo_e_Alma.jpg';
import maris from '../images/art_visuel/chats/Maris.jpg';
import lettura from '../images/art_visuel/chats/Lettura.jpg';
import estiva from '../images/art_visuel/chats/Villegiatura_estiva.jpg';
import cle2 from '../images/art_visuel/chats/Gulio_porte_cle.png';

<ArtBox name="Amici per la pelle" src={amici} alt="Amici per la pelle" price="49,95 €" />
<ArtBox name="Luca e Sofia" src={luca} alt="Luca e Sofia" price="29,95 €" />
<ArtBox name="Fortunello" src={fortunello} alt="Fortunello" price="19,95 €" />
<ArtBox name="Porte-clé boîte" src={cle5} alt="Porte-clé boîte" price="8,95 €" />
<ArtBox name="Porte-clé boîte" src={cle6} alt="Porte-clé boîte" price="8,95 €" />
<ArtBox name="Alma" src={alma} alt="Alma" price="89,00 €" />
<ArtBox name="Gioco di Dadi" src={gioco} alt="Gioco di Dadi" price="19,95 €" />
<ArtBox name="Artista" src={artista} alt="Artista" price="34,95 €" />
<ArtBox name="Filomena" src={filomena} alt="Filomena" price="19,95 €" />
<ArtBox name="Palladia e le sue amiche" src={palladia} alt="Palladia e le sue amiche" price="8,95 €" />
<ArtBox name="Nina e Eleonora" src={nina} alt="Nina e Eleonora" price="27,50 €" />
<ArtBox name="Felice" src={felice} alt="Felice" price="24,95 €" />
<ArtBox name="Il Piccolo Impero" src={impero} alt="Il Piccolo Impero" price="32,50 €" />
<ArtBox name="Clara" src={clara} alt="Clara" price="19,95 €" />
<ArtBox name="Chiara" src={chiara} alt="Chiara" price="58,95 €" />
<ArtBox name="Mazzo di Fiori" src={mazzo} alt="Mazzo di Fiori" price="39,95 €" />
<ArtBox name="Mara" src={mara} alt="Mara" price="49,95 €" />
<ArtBox name="Melitina" src={melitina} alt="Melitina" price="19,95 €" />
<ArtBox name="Meneo e Alma" src={meneo} alt="Meneo e Alma" price="27,50 €" />
<ArtBox name="Maris" src={maris} alt="Maris" price="19,95 €" />
<ArtBox name="Lettura" src={lettura} alt="Lettura" price="34,95 €" />
<ArtBox name="Villeggiatura estiva" src={estiva} alt="Villeggiatura estiva" price="39,95 €" />
<ArtBox name="Porte-clé Gulio" src={cle2} alt="Porte-clé Gulio" price="9,95 €" />
*/

