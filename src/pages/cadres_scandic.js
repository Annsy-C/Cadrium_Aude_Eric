import React from 'react';
import CadreBox from '../elements/cadre_box';

import scandic1 from '../images/cadre_visuel/SCANDIC/DSC29006.jpg';
import scandic2 from '../images/cadre_visuel/SCANDIC/DSC30006.jpg';
import scandic3 from '../images/cadre_visuel/SCANDIC/DSC32006.jpg';
import scandic4 from '../images/cadre_visuel/SCANDIC/DSC40006.jpg';
import scandic5 from '../images/cadre_visuel/SCANDIC/DSC42006.jpg';
import scandic6 from '../images/cadre_visuel/SCANDIC/DSC44006.jpg';
import scandic7 from '../images/cadre_visuel/SCANDIC/DSC50006.jpg';
import scandic8 from '../images/cadre_visuel/SCANDIC/DSC54006.jpg';
import scandic9 from '../images/cadre_visuel/SCANDIC/DSC64006.jpg';
import scandic10 from '../images/cadre_visuel/SCANDIC/DSC70006.jpg';
import scandic11 from '../images/cadre_visuel/SCANDIC/DSC80006.jpg';


const CadresScandic = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="notification is-info centered-content">
					<h2 className="title">Cadres Scandic</h2>
					<p>Cadres en bois, avec le coloris chêne massif.</p>
					<p>Une collection aux couleurs naturelles.</p>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={scandic1} alt="alpha" price="(prix à venir)"/>
				</div>
				<div className="column is-3">
					<CadreBox src={scandic2} alt="alpha" price="(prix à venir)"/>
				</div>
				<div className="column is-3">
					<CadreBox src={scandic3} alt="alpha" price="(prix à venir)"/>
				</div>
				<div className="column is-3">
					<CadreBox src={scandic4} alt="alpha" price="(prix à venir)"/>
				</div>
			</div>
			<div className="columns">
				<div className="column is-3">
					<CadreBox src={scandic5} alt="alpha" price="(prix à venir)"/>
				</div>
				<div className="column is-3">
					<CadreBox src={scandic6} alt="alpha" price="(prix à venir)"/>
				</div>
				<div className="column is-3">
					<CadreBox src={scandic7} alt="alpha" price="(prix à venir)"/>
				</div>
				<div className="column is-3">
					<CadreBox src={scandic8} alt="alpha" price="(prix à venir)"/>
				</div>
			</div>
			<div className="columns is-centered">
				<div className="column is-3">
					<CadreBox src={scandic9} alt="alpha" price="(prix à venir)"/>
				</div>
				<div className="column is-3">
					<CadreBox src={scandic10} alt="alpha" price="(prix à venir)"/>
				</div>
				<div className="column is-3">
					<CadreBox src={scandic11} alt="alpha" price="(prix à venir)"/>
				</div>
			</div>
		</section>
	</div>
);

export default CadresScandic;