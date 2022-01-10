import React from 'react';
import ArtBox from '../elements/art_box';

import baby from '../images/art_visuel/objet_dart/Baby_blue.jpg';
import coco from '../images/art_visuel/objet_dart/Coco.jpg';
import hug from '../images/art_visuel/objet_dart/Hug_too.jpg';
import rabbit from '../images/art_visuel/objet_dart/Orange_rabbit.jpg';
import elephant from '../images/art_visuel/objet_dart/Spring_elephant.png';
import cle1 from '../images/art_visuel/objet_dart/Arbre_Van_Gogh_porte-cle_coeur.jpg';
import cle2 from '../images/art_visuel/objet_dart/Le_Baiser_porte_cle_coeur.png';
import cle3 from '../images/art_visuel/objet_dart/Billy_the_Artiste_blanc_porte_cle.png';
import cle4 from '../images/art_visuel/objet_dart/Billy_the_Artiste_bleu_porte_cle.png';
import cle5 from '../images/art_visuel/objet_dart/Billy_the_Artiste_rouge_porte_cle.png';
import cle6 from '../images/art_visuel/objet_dart/Arbre_de_la_vie_grand_porte_cle.png';

import cle7 from '../images/art_visuel/objet_dart/Arbre_de_la_vie_porte_cle_coeur.png';
import cle8 from '../images/art_visuel/objet_dart/L_Amandier_argent_porte_cle_coeur.png';
import cle9 from '../images/art_visuel/objet_dart/L_Amandier_bleu_grand_porte_cle.png';
import cle10 from '../images/art_visuel/objet_dart/La_maison_de_l_artiste_grand_porte_cle.png';
import cle11 from '../images/art_visuel/objet_dart/Le_Baiser_grand_porte_cle.png';
import cle12 from '../images/art_visuel/objet_dart/Les_Tournesols_porte_cle_coeur.png';
import cle13 from '../images/art_visuel/objet_dart/Nympheas_et_saule_grand_porte_cle.png';

import miroir3 from '../images/art_visuel/objet_dart/Miroir_Effet_de_soir.jpg';
import miroir4 from '../images/art_visuel/objet_dart/Miroir_Mucha.jpg';
import box1 from '../images/art_visuel/objet_dart/City_sunset.jpg';
import box2 from '../images/art_visuel/objet_dart/Der_Lebensbaum_grande_boite.jpg';
import box3 from '../images/art_visuel/objet_dart/Birds_on_a_love_wire.jpg';


const ArtDivers = () => (
	<section className="section">
		<div className="columns is-centered">
			<div className="column is-4">
				<ArtBox name="Hug too" src={hug} alt="Hug too" price="89,00 €" />
			</div>
			<div className="column is-4">
				<ArtBox name="Spring Elephant" src={elephant} alt="Spting Elephant" price="65,00 €" />
			</div>
			<div className="column is-4">
				<ArtBox name="Orange Rabbit" src={rabbit} alt="Orange Rabbit" price="79,00 €" />
			</div>
		</div>
		<div className="columns is-centered">
			<div className="column is-4">
				<ArtBox name="Baby Blue" src={baby} alt="Baby Blue" price="79,00 €" />
			</div>
			<div className="column is-4">
				<ArtBox name="Coco" src={coco} alt="Coco" price="79,00 €" />
			</div>
		</div>
		<div className="columns is-centered">
			<div className="column is-4">
				<ArtBox name="City Sunset" src={box1} alt="City Sunset" price="8,95 €" />
			</div>
			<div className="column is-4">
				<ArtBox name="L'arbre de vie (grande boîte)" src={box2} alt="Der Lebensbaum grande boîte" price="12,95 €" />
			</div>
			<div className="column is-4">
				<ArtBox name="Birds on a love Wire" src={box3} alt="Birds on a love Wire" price="8,95 €" />
			</div>
		</div>
		<div className="columns is-centered">
			<div className="column is-3">
				<ArtBox name="L'Arbre de Vie - grand porte-clé" src={cle6} alt="Der Lebensbaum - grand porte-clé" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="L'arbre de vie - porte-clé coeur" src={cle7} alt="L'arbre de vie porte-clé coeur" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Le Baiser - porte-clé coeur" src={cle2} alt="Der Kuss porte-clé coeur" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Le Baiser - grand porte-clé" src={cle11} alt="Le Baiser - grand porte-clé" price="9,95 €" />
			</div>
		</div>
		<div className="columns is-centered">
			<div className="column is-3">
				<ArtBox name="Nymphéas et Saule - grand porte-clé" src={cle13} alt="Nymphéas et Saule - grand porte-clé" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="L'amandier argent - porte-clé coeur" src={cle8} alt="L'amandier argent - porte-clé coeur" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Les Tournesols - porte-clé coeur" src={cle12} alt="Les Tournesols - porte-clé coeur" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="L'amendier bleu - grand porte-clé" src={cle9} alt="L'amendier bleu - grand porte-clé" price="9,95 €" />
			</div>
		</div>
		<div className="columns is-centered">
			<div className="column is-3">
				<ArtBox name="La Maison de l'Artiste - grand porte-clé" src={cle10} alt="La maison de l'artiste - grand porte-clé" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Billy the Artiste - porte-clé blanc" src={cle3} alt="Billy the Artiste - porte-clé blanc" price="8,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Billy the Artiste - porte-clé bleu" src={cle4} alt="Billy the Artiste - porte-clé bleu" price="8,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Billy the Artiste - porte-clé rouge" src={cle5} alt="Billy the Artiste - porte-clé rouge" price="8,95 €" />
			</div>
		</div>
		<div className="columns is-centered">
			<div className="column is-3">
					<ArtBox name="Mucha - miroir de poche" src={miroir4} alt="Mucha miroir de poche" price="9,95 €" />
				</div>
			<div className="column is-3">
				<ArtBox name="Effet de soir - miroir de poche" src={miroir3} alt="Effet de soir miroir de poche" price="9,95 €" />
			</div>
		</div>	
	</section>
);

export default ArtDivers;



/* EN RESERVE (en cas de restock :) /

import miroir1 from '../images/art_visuel/objet_dart/Miroir_Der_Lebensbaum.jpg';
import miroir2 from '../images/art_visuel/objet_dart/Miroir_Der_kuss.jpg';

<div className="column is-3">
	<ArtBox name="Der Kuss - miroir de poche" src={miroir2} alt="Der Kuss miroir de poche" price="9,95 €" />
</div>
<div className="column is-3">
	<ArtBox name="Der Lebensbaum - miroir de poche" src={miroir1} alt="Der Lebensbaum miroir de poche" price="9,95 €" />
</div>

*/