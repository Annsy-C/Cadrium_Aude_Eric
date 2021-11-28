import React from 'react';
import ArtBox from '../elements/art_box';

import baby from '../images/art_visuel/Baby_blue.jpg';
import coco from '../images/art_visuel/Coco.jpg';
import hug from '../images/art_visuel/Hug_too.jpg';
import rabbit from '../images/art_visuel/Orange_rabbit.jpg';

const ArtDivers = () => (
	<section className="section">
		<div className="columns is-centered">
				<div className="column is-3">
					<ArtBox name="Baby Blue" src={baby} alt="Baby Blue" price="prix à venir" />
				</div>
				<div className="column is-3">
					<ArtBox name="Coco" src={coco} alt="Coco" price="prix à venir" />
				</div>
				<div className="column is-3">
					<ArtBox name="Hug too" src={hug} alt="Hug too" price="prix à venir" />
				</div>
				<div className="column is-3">
					<ArtBox name="Orange Rabbit" src={rabbit} alt="Orange Rabbit" price="prix à venir" />
				</div>
			</div>
	</section>
);

export default ArtDivers;