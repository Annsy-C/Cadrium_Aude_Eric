import React from 'react';
import Box, { BoxTitle, BoxParagraph, BoxContent, BoxImage } from '../elements/box';
import Card, { CardContent, CardImage, CardTitle } from '../elements/card';
import aluminium from '../images/cadre_visuel/Sur_mesure_Aluminium.jpg';
import charme from '../images/cadre_visuel/Sur_mesure_Charme.jpg';
import colors from '../images/cadre_visuel/Colors.jpg';
import nature from '../images/cadre_visuel/Sur_mesure_Nature.jpg';
import interieur from '../images/Interieur.jpg';

const CadresPersonnalises = () => (
	<div>
		<section className="section">
			<div className="container">
				<Box background="info">
					<BoxContent>
						<BoxTitle title="Cadres sur mesure" />
						<BoxParagraph>
							<p>Réalisation de devis et prise de commande directement en boutique.</p>
							<p>Large choix de baguettes, en aluminium ou en bois, disponibles en divers formats et coloris.</p>
							<p>Conseils personnalisés selon les caractéristiques de votre sujet, vos envies, vos goûts, votre intérieur... toujours en priorisant une conservation optimale de l’œuvre.</p>
							<p>Deux types de verre proposés : classique ou qualité musée.</p>
						</BoxParagraph>
					</BoxContent>
					<div className="column is-4">
								<BoxImage src={interieur} size="is-4by3" alt="cadres de présentation" />
							</div>
				</Box>
			</div>
		</section>
		<section className="section">
			<div className="columns is-centered">
				<div className="column">
					<Card>
						<CardContent>
							<CardTitle title="Charme" />
						</CardContent>
						<CardImage 
							src={charme} 
							alt="baguettes Charme"
							size="is-1by2" />
					</Card>
				</div>
				<div className="column">
					<Card>
						<CardContent>
							<CardTitle title="Aluminium" />
						</CardContent>
						<CardImage 
							src={aluminium} 
							alt="baguettes aluminium"
							size="is-1by2" />
					</Card>
				</div>
				<div className="column">
					<Card >
						<CardContent>
							<CardTitle title="Colors" />
						</CardContent>
						<CardImage 
							src={colors} 
							alt="baguettes colors"
							size="is-1by2" />
					</Card>
				</div>
				<div className="column">
					<Card>
						<CardContent>
							<CardTitle title="Nature" />
						</CardContent>
						<CardImage 
							src={nature} 
							alt="baguettes nature"
							size="is-1by2" />
					</Card>
				</div>
			</div>
		</section>
	</div>
);

export default CadresPersonnalises;