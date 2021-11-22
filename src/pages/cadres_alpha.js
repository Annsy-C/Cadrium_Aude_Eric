import React from 'react';
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
	<section className="section">
		<div className="columns">
			<div className="column is-3">
				<figure className="image">
					<img src={alpha1} alt="alpha" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={alpha2} alt="alpha" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={alpha3} alt="alpha" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={alpha4} alt="alpha" />
				</figure>
			</div>
		</div>
		<div className="columns">
			<div className="column is-3">
				<figure className="image">
					<img src={alpha5} alt="alpha" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={alpha6} alt="alpha" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={alpha7} alt="alpha" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={alpha8} alt="alpha" />
				</figure>
			</div>
		</div>
		<div className="columns">
			<div className="column is-3"></div>
			<div className="column is-3">
				<figure className="image">
					<img src={alpha9} alt="alpha" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={alpha10} alt="alpha" />
				</figure>
			</div>
			<div className="column is-3"></div>
		</div>
		
	</section>
);

export default CadresAlpha;