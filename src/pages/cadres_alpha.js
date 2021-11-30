import React from 'react';
import CadreBox from '../elements/cadre_box';

import alpha1 from'../images/cadre_visuel/ALPHA/CAL29250.jpg';
import alpha2 from'../images/cadre_visuel/ALPHA/CAL30250.jpg';
import alpha3 from'../images/cadre_visuel/ALPHA/CAL32250.jpg';
import alpha4 from'../images/cadre_visuel/ALPHA/CAL40250.jpg';
import alpha5 from'../images/cadre_visuel/ALPHA/CAL42250.jpg';
import alpha6 from'../images/cadre_visuel/ALPHA/CAL44250.jpg';
import alpha7 from'../images/cadre_visuel/ALPHA/CAL50250.jpg';
import alpha8 from'../images/cadre_visuel/ALPHA/CAL64250.jpg';
import alpha9 from'../images/cadre_visuel/ALPHA/CAL70250.jpg';
import alpha10 from'../images/cadre_visuel/ALPHA/CAL80250.jpg';


const CadresAlpha = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="notification is-info centered-content">
					<h2 className="title">Cadres Alpha</h2>
					<p>Cadres en aluminium anodisé pour un rendu optimal au niveau de la couleur.</p>
					<p>Une collection qui allie élégance et haute qualité.</p>
					<p>Disponibles en noir anodisé mat.</p>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={alpha1} alt="alpha" price="25,90 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha2} alt="alpha" price="27,40 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha3} alt="alpha" price="28,30 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha4} alt="alpha" price="33,40 €"/>
				</div>
			</div>
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={alpha5} alt="alpha" price="36,40 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha6} alt="alpha" price="40,70 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha7} alt="alpha" price="43,00 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha8} alt="alpha" price="46,50 €"/>
				</div>
			</div>
			<div className="columns">
				<div className="column is-3"></div>
				<div className="column is-3">
					<CadreBox src={alpha9} alt="alpha" price="58,90 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha10} alt="alpha" price="66,70 €"/>
				</div>
				<div className="column is-3"></div>
			</div>
		</section>
	</div>
);

export default CadresAlpha;