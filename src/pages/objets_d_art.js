import React from 'react';
import Card, { CardContent, CardTitle , CardImage } from '../elements/card';
import paysage from '../images/paysage.jpeg';


const ObjetsDArt = () => (
	<section className="section">
			<div className="columns">
				<div className="column">
					<a href="/objets_d_art/art_chats">
						<Card>
							<CardContent>
								<CardTitle title="Les Chats de Rosina Wachtmeister" />
							</CardContent>
							<CardImage src={paysage} alt="objets d'art chat" hoverable="true" size="is-4by3"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/objets_d_art/art_divers">
						<Card>
							<CardContent>
								<CardTitle title="Objets d'Art divers" />
							</CardContent>
							<CardImage src={paysage} alt="objet d'art divers" hoverable="true" size="is-4by3"/>
						</Card>
					</a>
				</div>
			</div>
		</section>
);

export default ObjetsDArt;