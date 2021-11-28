import React from 'react';
import Card, { CardContent, CardTitle , CardImage } from '../elements/card';
import chat from '../images/art_visuel/chats/chat_general.jpg';
import goebel from '../images/art_visuel/goebel.jpg';
import portrait from '../images/portrait.jpeg';


const ObjetsDArt = () => (
	<section className="section">
			<div className="columns">
				<div className="column">
					<a href="/objets_d_art/art_chats">
						<Card>
							<CardContent>
								<CardTitle title="Les Chats de Rosina" />
							</CardContent>
							<CardImage src={chat} alt="objets d'art chat" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/objets_d_art/art_divers">
						<Card>
							<CardContent>
								<CardTitle title="Objets d'Art divers" />
							</CardContent>
							<CardImage src={goebel} alt="objet d'art divers" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/objets_d_art/illustration">
						<Card>
							<CardContent>
								<CardTitle title="Illustrations" />
							</CardContent>
							<CardImage src={portrait} alt="illustrations" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
			</div>
		</section>
);

export default ObjetsDArt;