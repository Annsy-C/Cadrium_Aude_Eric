import React from 'react';
import Box, { BoxTitle, BoxParagraph, BoxContent } from '../elements/box';
import Card, { CardImage } from '../elements/card';
import aluminium from '../images/cadre_visuel/Sur_mesure_Aluminium.jpg';
import charme from '../images/cadre_visuel/Sur_mesure_Charme.jpg';
import colors from '../images/cadre_visuel/Sur_mesure_Colors.jpg';
import nature from '../images/cadre_visuel/Sur_mesure_Nature.jpg';

const CadresPersonnalises = () => (
	<div>
		<section className="section">
			<div className="container">
				<Box background="info">
					<BoxContent>
						<BoxTitle title="Cadres sur mesure" />
						<BoxParagraph>
							<p>Réalisation de devis et prise de commande directement en boutique.</p>
							<p>Plus de 500 baguettes au choix, aluminium ou bois.</p>
							<p>Conseils personnalisés selon les caractéristiques de votre sujet, vos envies, vos goûts, votre intérieur... toujours en priorisant une conservation optimale de l’œuvre.</p>
							<p>Deux types de verre proposés : classique ou qualité musée.</p>
						</BoxParagraph>
					</BoxContent>
				</Box>
			</div>
		</section>
		<section className="section">
			<div className="columns">
				<div className="column">
					<Card>
						<CardImage 
							src={charme} 
							alt="baguettes aluminium"
							size="is-2by1" />
					</Card>
				</div>
				<div className="column">
					<Card>
						<CardImage 
							src={aluminium} 
							alt="baguettes aluminium"
							size="is-2by1" />
					</Card>
				</div>
			</div>
			<div className="columns">
				<div className="column">
					<Card >
						<CardImage 
							src={colors} 
							alt="baguettes aluminium"
							size="is-2by1" />
					</Card>
				</div>
				<div className="column">
					<Card>
						<CardImage 
							src={nature} 
							alt="baguettes aluminium"
							size="is-2by1" />
					</Card>
				</div>
			</div>
		</section>
	</div>
);

export default CadresPersonnalises;