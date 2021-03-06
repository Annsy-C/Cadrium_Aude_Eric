import React from 'react';
import Card, { CardContent, CardTitle , CardImage } from '../elements/card';
import chat from '../images/art_visuel/chat_general.jpg';
import goebel from '../images/art_visuel/goebel.jpg';
import illustrations from '../images/art_visuel/Illustrations.jpg';
import artiste from '../images/art_visuel/artistes/L_Envol_Laurent_Rioux.jpg';


const ObjetsDArt = () => (
	<section className="section">
			<div className="columns">
				<div className="column">
					<a href="/objets_d_art/art_chats">
						<Card>
							<CardContent>
								<CardTitle title="Les Chats de Rosina Wachtmeister" />
							</CardContent>
							<CardImage src={chat} alt="objets d'art chat" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/objets_d_art/art_divers">
						<Card>
							<CardContent>
								<CardTitle title="Objets d'art décoratifs" />
							</CardContent>
							<CardImage src={goebel} alt="objet d'art divers" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/objets_d_art/illustrations">
						<Card>
							<CardContent>
								<CardTitle title="Affiches et reproductions" />
							</CardContent>
							<CardImage src={illustrations} alt="illustrations" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
				<div className="column">
					<a href="/objets_d_art/artistes">
						<Card>
							<CardContent>
								<CardTitle title="Œuvres graphiques et autres travaux" />
							</CardContent>
							<CardImage src={artiste} alt="illustrations" hoverable="true" size="is-4by5"/>
						</Card>
					</a>
				</div>
			</div>
		</section>
);

export default ObjetsDArt;