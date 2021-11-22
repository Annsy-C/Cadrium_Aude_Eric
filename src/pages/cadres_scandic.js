import React from 'react';
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
	<section className="section">
		<div className="columns">
			<div className="column is-3">
				<figure className="image">
					<img src={scandic1} alt="cadre scandic" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={scandic2} alt="cadre scandic" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={scandic3} alt="cadre scandic" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={scandic4} alt="cadre scandic" />
				</figure>
			</div>
		</div>
		<div className="columns">
			<div className="column is-3">
				<figure className="image">
					<img src={scandic5} alt="cadre scandic" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={scandic6} alt="cadre scandic" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={scandic7} alt="cadre scandic" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={scandic8} alt="cadre scandic" />
				</figure>
			</div>
		</div>
		<div className="columns is-centered">
			<div className="column is-3">
				<figure className="image">
					<img src={scandic9} alt="cadre scandic" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={scandic10} alt="cadre scandic" />
				</figure>
			</div>
			<div className="column is-3">
				<figure className="image">
					<img src={scandic11} alt="cadre scandic" />
				</figure>
			</div>
		</div>
	</section>
);

export default CadresScandic;