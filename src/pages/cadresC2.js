import React from 'react';
import CadreBox from '../elements/cadre_box';

import c21 from '../images/cadre_visuel/C2/C229251.jpg';
import c22 from '../images/cadre_visuel/C2/C229253.jpg';
import c23 from '../images/cadre_visuel/C2/C230251.jpg';
import c24 from '../images/cadre_visuel/C2/C230253.jpg';
import c25 from '../images/cadre_visuel/C2/C232251.jpg';
import c26 from '../images/cadre_visuel/C2/C232253.jpg';
import c27 from '../images/cadre_visuel/C2/C240251.jpg';
import c28 from '../images/cadre_visuel/C2/C240253.jpg';
import c29 from '../images/cadre_visuel/C2/C242251.jpg';
import c210 from '../images/cadre_visuel/C2/C242253.jpg';
import c211 from '../images/cadre_visuel/C2/C250251.jpg';
import c212 from '../images/cadre_visuel/C2/C250253.jpg';
import c213 from '../images/cadre_visuel/C2/C264251.jpg';
import c214 from '../images/cadre_visuel/C2/C264253.jpg';
import c215 from '../images/cadre_visuel/C2/C270251.jpg';
import c216 from '../images/cadre_visuel/C2/C270253.jpg';
import c217 from '../images/cadre_visuel/C2/C280251.jpg';
import c218 from '../images/cadre_visuel/C2/C280253.jpg';


const CadresC2 = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="notification is-info centered-content">
					<h2 className="title">Cadres C2</h2>
					<p>Cadres en aluminium à la fois sobres et modernes.</p>
					<p>Une collection qui propose des pris attractifs.</p>
					<p>Disponibles en noir mat brossé et en gris mat brossé.</p>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={c21} alt="alpha" price="16,10 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c22} alt="alpha" price="16,10 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c23} alt="alpha" price="16,70 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c24} alt="alpha" price="16,70 €"/>
				</div>
			</div>
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={c25} alt="alpha" price="20,00 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c26} alt="alpha" price="20,00 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c27} alt="alpha" price="24,80 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c28} alt="alpha" price="24,80 €"/>
				</div>
			</div>
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={c29} alt="alpha" price="23,90 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c210} alt="alpha" price="23,90 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c211} alt="alpha" price="30,50 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c212} alt="alpha" price="30,50 €"/>
				</div>
			</div>
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={c213} alt="alpha" price="34,60 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c214} alt="alpha" price="34,60 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c215} alt="alpha" price="39,40 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c216} alt="alpha" price="39,40 €"/>
				</div>
			</div>
			<div className="columns">
				<div className="column is-3"></div>
				<div className="column is-3">
					<CadreBox src={c217} alt="alpha" price="48,10 €"/>
				</div>
				<div className="column is-3">
					<CadreBox src={c218} alt="alpha" price="48,10 €"/>
				</div>
				<div className="column is-3"></div>
			</div>
		</section>
	</div>
);

export default CadresC2;