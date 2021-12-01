import React from 'react';
import ArtBox from '../elements/art_box';

import baby from '../images/art_visuel/objet_dart/Baby_blue.jpg';
import coco from '../images/art_visuel/objet_dart/Coco.jpg';
import hug from '../images/art_visuel/objet_dart/Hug_too.jpg';
import rabbit from '../images/art_visuel/objet_dart/Orange_rabbit.jpg';
import cle1 from '../images/art_visuel/objet_dart/Arbre_Van_Gogh_porte-cle_coeur.jpg';
import cle2 from '../images/art_visuel/objet_dart/Der_kuss_porte-cle_coeur.jpg';
import cle3 from '../images/art_visuel/objet_dart/Billy_the_Artiste_blanc_porte-cle.jpg';
import cle4 from '../images/art_visuel/objet_dart/Billy_the_Artiste_bleu_porte-cle.jpg';
import cle5 from '../images/art_visuel/objet_dart/Billy_the_Artiste_rouge_porte-cle.jpg';
import cle6 from '../images/art_visuel/objet_dart/Der_Lebensbaum_grand_porte-cle.jpg';
import miroir1 from '../images/art_visuel/objet_dart/Miroir_Der_Lebensbaum.jpg';
import miroir2 from '../images/art_visuel/objet_dart/Miroir_Der_kuss.jpg';
import miroir3 from '../images/art_visuel/objet_dart/Miroir_Effet_de_soir.jpg';
import miroir4 from '../images/art_visuel/objet_dart/Miroir_Mucha.jpg';
import box1 from '../images/art_visuel/objet_dart/City_sunset.jpg';
import box2 from '../images/art_visuel/objet_dart/Der_Lebensbaum_grande_boite.jpg';
import box3 from '../images/art_visuel/objet_dart/Birds_on_a_love_wire.jpg';


const ArtDivers = () => (
	<section className="section">
		<div className="columns is-centered">
			<div className="column is-3">
				<ArtBox name="Baby Blue" src={baby} alt="Baby Blue" price="79,00 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Coco" src={coco} alt="Coco" price="79,00 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Hug too" src={hug} alt="Hug too" price="89,00 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Orange Rabbit" src={rabbit} alt="Orange Rabbit" price="79,00 €" />
			</div>
		</div>
		<div className="columns is-centered">
			<div className="column is-4">
				<ArtBox name="City Sunset" src={box1} alt="City Sunset" price="8,95 €" />
			</div>
			<div className="column is-4">
				<ArtBox name="Der Lebensbaum" src={box2} alt="Der Lebensbaum grande boîte" price="12,95 €" />
			</div>
			<div className="column is-4">
				<ArtBox name="Birds on a love Wire" src={box3} alt="Birds on a love Wire" price="8,95 €" />
			</div>
		</div>
		<div className="columns is-centered">
			<div className="column is-3">
				<ArtBox name="Der Kuss - miroir de poche" src={miroir2} alt="Der Kuss miroir de poche" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Der Lebensbaum - miroir de poche" src={miroir1} alt="Der Lebensbaum miroir de poche" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Effet de soir - miroir de poche" src={miroir3} alt="Effet de soir miroir de poche" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Mucha - miroir de poche" src={miroir4} alt="Mucha miroir de poche" price="9,95 €" />
			</div>
			
		</div>
		<div className="columns is-centered">
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
				<ArtBox name="Arbre Van Gogh - porte-clé coeur" src={cle1} alt="Arbre Van Gogh - porte-clé coeur" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Der Lebensbaum - grand porte-clé" src={cle6} alt="Der Lebensbaum - grand porte-clé" price="9,95 €" />
			</div>
			<div className="column is-3">
				<ArtBox name="Der Kuss - porte-clé coeur" src={cle2} alt="Der Kuss porte-clé coeur" price="9,95 €" />
			</div>
		</div>
	</section>
);

export default ArtDivers;