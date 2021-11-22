import React from 'react';
import Card, { CardContent, CardTitle , CardImage } from '../elements/card';
import cadre from '../images/portrait.jpeg';

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
							<CardImage src={cadre} alt="cadres Alpha" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/cadres_standards/cadresC2">
						<Card>
							<CardContent>
								<CardTitle title="Cadres C2" />
							</CardContent>
							<CardImage src={cadre} alt="cadres C2" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/cadres_standards/cadres_scandic">
						<Card>
							<CardContent>
								<CardTitle title="Cadres Scandic" />
							</CardContent>
							<CardImage src={cadre} alt="cadres Scandic" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
			</div>
		</section>
	</div>
);

export default CadresStandards;