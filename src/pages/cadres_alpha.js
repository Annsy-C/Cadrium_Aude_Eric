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
import alpha11 from'../images/cadre_visuel/ALPHA/Alpha_18_x_24.jpg';
import alpha12 from'../images/cadre_visuel/ALPHA/Alpha_50_x_100.jpg';
import alpha13 from'../images/cadre_visuel/ALPHA/Alpha_10_x_15.jpg';


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
				<div className="column">
					<CadreBox src={alpha13} alt="alpha" price="15,70 €"/>
				</div>
				<div className="column">
					<CadreBox src={alpha11} alt="alpha" price="22,90 €"/>
				</div>
				<div className="column">
					<CadreBox src={alpha1} alt="alpha" price="28,80 €"/>
				</div>
				<div className="column">
					<CadreBox src={alpha2} alt="alpha" price="30,60 €"/>
				</div>
				<div className="column">
					<CadreBox src={alpha3} alt="alpha" price="31,50 €"/>
				</div>
			</div>
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={alpha4} alt="alpha" price="37,10 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha5} alt="alpha" price="40,50 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha6} alt="alpha" price="45,40 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha7} alt="alpha" price="47,90 €"/>
				</div>
			</div>
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={alpha8} alt="alpha" price="51,70 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha9} alt="alpha" price="65,50 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={alpha10} alt="alpha" price="74,30 €"/>
				</div>
				
				<div className="column is-3">
					<CadreBox src={alpha12} alt="alpha" price="75,20 €"/>
				</div>
			</div>
		</section>
	</div>
);

export default CadresAlpha;