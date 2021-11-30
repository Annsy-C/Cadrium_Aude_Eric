import React from 'react';
import Card, { CardContent, CardTitle , CardImage } from '../elements/card';

import alpha from '../images/cadre_visuel/ALPHA/Cadres_Alpha.jpg';
import c2 from '../images/cadre_visuel/C2/collection_C2.jpg';
import scandic from '../images/cadre_visuel/SCANDIC/collection_Scandic.jpg';
import passe1 from '../images/cadre_visuel/passe_partout1.JPG';
import passe2 from '../images/cadre_visuel/passe_partout2.jpg';

const CadresStandards = () => (
	<div>
		<section className="section">
			<div className="columns">
				<div className="column">
					<a href="/cadres_standards/cadres_alpha">
						<Card>
							<CardContent>
								<CardTitle title="Cadres Alpha" />
							</CardContent>
							<CardImage src={alpha} alt="cadres Alpha" hoverable="true" size="is-3by5"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/cadres_standards/cadresC2">
						<Card>
							<CardContent>
								<CardTitle title="Cadres C2" />
							</CardContent>
							<CardImage src={c2} alt="cadres C2" hoverable="true" size="is-3by5"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/cadres_standards/cadres_scandic">
						<Card>
							<CardContent>
								<CardTitle title="Cadres Scandic" />
							</CardContent>
							<CardImage src={scandic} alt="cadres Scandic" hoverable="true" size="is-3by5"/>
						</Card>
					</a>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="notification is-info centered-content">
					<div className="columns">
						<div className="column">
							<Card>
								<CardImage src={passe1} alt="passe-partout" size="is-1by1" />
							</Card>
						</div>
						<div className="column">
							<h2 className="title">Passe-partout Nielsen Bainbridge</h2>
							<br />
							<p>Disponibles en différentes tailles et coloris, également sur mesure</p>
						</div>
						<div className="column">
							<Card>
								<CardImage src={passe2} alt="passe-partout" size="is-1by1" />
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default CadresStandards;