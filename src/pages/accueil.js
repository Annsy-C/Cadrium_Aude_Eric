import React from 'react';
import Diapo from '../elements/diapo';


const Accueil = () => (
	<section className="section">
		<div className="container">
			<div className="notification is-info">
				<div className="columns">
					<div className="column centered-content">
						<h1 className="title">Présentation de l'atelier</h1>
						<br />
						<p>Atelier d'encadrement situé dans le centre-ville de Châteauroux.</p>
						<br />
						<p>Cadres sur mesure et standards, tous types d'encadrement pratiqués.</p>
						<br />
						<p>Conseils et devis en boutique.</p>
						<br />
						<p>Vente et expositions d'affiches, œuvres et objets d'art.</p>
						<br />
						<p>Clientèle particuliers et professionnels.</p>
					</div>
					<div className="column">
						<Diapo
							alt="boutique"
							size="is-4by3" 
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Accueil;
