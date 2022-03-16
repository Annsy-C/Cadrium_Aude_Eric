import React from 'react';
import AfficheBox from '../elements/affiche_box.js';

import silver from '../images/art_visuel/affiches/Alessio_Aprile_Silver_tree_50_x_70_cm.jpg';
import ete from '../images/art_visuel/affiches/Alphonse_Mucha_Ete_35_x_70_cm.jpg';
import path from '../images/art_visuel/affiches/Claude_Monet_Path_in_Monet_s_garden_Giverny_50_x_50_cm.jpg';
import sun from '../images/art_visuel/affiches/Claude_Monet_Sun_setting_over_the_Seine_50_x_70_cm.jpg';
import bridge from '../images/art_visuel/affiches/Claude_Monet_The_Japanese_bridge_50_x_70_cm.jpg';
import water from '../images/art_visuel/affiches/Claude_Monet_Waterlilies_40_x_60_cm.jpg';
import africa from '../images/art_visuel/affiches/Cynthia_Fields_Africa_I_50_x_100_cm.jpg';
import kiss from '../images/art_visuel/affiches/Eric_Chestier_Hayez_s_Kiss_2.0_50_x_70_cm.jpg';
import enchanteress from '../images/art_visuel/affiches/Erica_Pagnoni_Enchantress_30_x_30_cm.jpg';
import magic from '../images/art_visuel/affiches/Erica_Pagnoni_Waves_of_magic_40_x_60_cm.jpg';
import the_kiss from '../images/art_visuel/affiches/Gustav_Klimt_The_Kiss_35_x_70_cm.jpg';
import snow from '../images/art_visuel/affiches/Hiroshige_Snowy_landscape_with_woman_&_man_35_x_70_cm.jpg';
import wave from '../images/art_visuel/affiches/Hokusai_The_Wave_of_Kanagawa_50_x_100_cm.jpg';
import peacocks from '../images/art_visuel/affiches/Imao_Keinen_A_Pair_of_Peacocks_in_spring_35_x_70_cm.jpg';
import flower from '../images/art_visuel/affiches/Jan_Van_Huysum_Still_life_with_flowers_and_fruit_50_x_70_cm.jpg';
import pearl from '../images/art_visuel/affiches/Jan_Vermeer_Girl_with_A_Pearl_Earring_40_x_60_cm.jpg';
import bretagne from '../images/art_visuel/affiches/Jean_Guichard_Phare_du_Four_Bretagne_40_x_60_cm.jpg';
import heron from '../images/art_visuel/affiches/John_James_Audubon_Louisina_Heron_40_x_60_cm.jpg';
import waterfall from '../images/art_visuel/affiches/Katsushika_Hokusai_Kamida_ga_taki_waterfall_50_x_70_cm.jpg';
import incantata from '../images/art_visuel/affiches/Luigi_Florio_Foresta_incantata_30_x_40_cm.jpg';
import sails from '../images/art_visuel/affiches/Pangea_Images_Set_sails_30_x_40_cm.jpg';
import sisters from '../images/art_visuel/affiches/Pierre_Auguste_Renoir_Two_sisters_30_x_40_cm.jpg';
import wild_flower from '../images/art_visuel/affiches/Pierre_Benson_Wild_Flower_35_x_70_cm.jpg';
import mandorlo from '../images/art_visuel/affiches/Vincent_Van_Gogh_Mandorlo_in_fiore_Red_variation_35_x_70_cm.jpg';
import starry_night from '../images/art_visuel/affiches/Vincent_Van_Gogh_The_Starry_Night_40_x_60_cm.jpg';
import improvisation from '../images/art_visuel/affiches/Wassily_Kandinsky_Improvisation_sans_titre_35_x_70_cm.jpg';
import launelinie from '../images/art_visuel/affiches/Wassily_Kandinsky_Launelinie_50_x_70_cm.jpg';
import lion from '../images/art_visuel/affiches/William_Franklin_Male_Lion_40_x_60_cm.jpg';
import courtesan from '../images/art_visuel/affiches/Courtesan_Katsushika_Hokusai_30_x_40.jpg';
import diafane from '../images/art_visuel/affiches/Diafane_presenze_Giuliano_Censini_30_x_30.jpg';
import fairy from '../images/art_visuel/affiches/Fairy_of_spring_Erica_Pagnoni_30_x_30.jpg';
import fiori from '../images/art_visuel/affiches/Fiori_di_magnolia_Cristina_Mavaracchio_30_x_40.jpg';
import geometrie from '../images/art_visuel/affiches/Geometrie_complesse_Arturo_Armenti_20_x_60.jpg';
import ivory from '../images/art_visuel/affiches/Ivory_orchids_Jenny_Thomlinson_30_x_40.jpg';
import lion2 from '../images/art_visuel/affiches/Male_lion_Namibia_Anonymous_30_x_40.jpg';
import riglessi from '../images/art_visuel/affiches/Riflessi_del_tramonto_Lucas_30_x_40.jpg';
import seated from '../images/art_visuel/affiches/Seated_beauty_II_Van_Haal_30_x_40.jpg';
import goddess from '../images/art_visuel/affiches/Shimmering_goddess_Julian_Lauren_50_x_70.jpg';
import sulla from '../images/art_visuel/affiches/Sulla_spiaggia_d_inverno_Guiliano_Censini_50x50.jpg';
import vanitie from '../images/art_visuel/affiches/The_Vanitie_50x70.jpg';
import chat from '../images/art_visuel/affiches/Tournee_du_chat_noir_Theophile_Alexandre_Steinlen.jpg';

const Illustrations = () => (
	<section className="section">
		<div className="container">
			<div className="columns is-centered">
				<AfficheBox name="Silver Tree - Alessio Aprile" price="27,75 €" dimension="50 x 70 cm"  src={silver} size=" is-4by3"/>
				<AfficheBox name="Sun Setting over the Seine - Claude Monet" price="27,75 €" dimension="50 x 70 cm" src={sun} size=" is-4by3"/>
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Eté - Alphonse Mucha" price="25,85 €" dimension="35 x 70 cm" src={ete} />
				<AfficheBox name="The Kiss - Gustav Klimt" price="25,85 €" dimension="35 x 70 cm" src={the_kiss} />
				<AfficheBox name="Africa - Cynthia Fields" price="34,10 €" dimension="50 x 100 cm" src={africa} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="The Japanese Bridge - Claude Monet" price="27,75 €" dimension="50 x 70 cm"  src={bridge} />
				<AfficheBox name="Waterlilies - Claude Monet" price="23,00 €" dimension="40 x 60 cm" src={water}/>
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Path in Monet's Garden Giverny - Claude Monet" price="25,85 €" dimension="50 x 50 cm" src={path} />
				<AfficheBox name="Fairy of Spring - Erica Pagnoni" price="11,90 €" dimension="30 x 30 cm" src={fairy} />
				<AfficheBox name="Enchantress - Erica Pagnoni" price="11,90 €" dimension="30 x 30 cm" src={enchanteress} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Snowy Landscape with Woman and Man - Hiroshige" price="25,85 €" dimension="35 x 70 cm" src={snow} />
				<AfficheBox name="Mandorlo in Fiore Red Variation - Vincent Van Gogh" price="25,85 €" dimension="35 x 70 cm" src={mandorlo} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Waves of Magic - Erica Pagnoni" price="23,00 €" dimension="40 x 60 cm" src={magic}/>
				<AfficheBox name="Kamida Ga Taki Waterfall - Katsuhika Hokusai" price="27,75 €" dimension="50 x 70 cm" src={waterfall}/>
				<AfficheBox name="Hayez's Kiss 2.0 - Eric Chestier" price="27,75 €" dimension="50 x 70 cm"  src={kiss} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Phare du Four de Bretagne - Jean Guichard" price="27,75 €" dimension="50 x 70 cm"  src={bretagne} />
				<AfficheBox name="The Starry Night - Vincent Van Gogh" price="23,00 €" dimension="40 x 60 cm" src={starry_night}/>
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Still Life with Flowers and Fruit - Jan Van Huysum" price="27,75 €" dimension="50 x 70 cm" src={flower}/>
				<AfficheBox name="Two Sisters - Auguste Renoir" price="12,85 €" dimension="30 x 40 cm" src={sisters}/>		
				<AfficheBox name="Girl with a Pearl Earring - Jan Vermeer" price="27,75 €" dimension="50 x 70 cm"  src={pearl} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="The Wave of Kanagawa - Hokusai" price="34,10 €" dimension="50 x 100 cm" src={wave} />
				<AfficheBox name="Wild Flower - Pierre Benson" price="25,85 €" dimension="35 x 70 cm" src={wild_flower} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Launelinie - Wassily Kandinsky" price="27,75 €" dimension="50 x 70 cm" src={launelinie}/>
				<AfficheBox name="Louisiana Heron - John James Audubon" price="23,00 €" dimension="40 x 60 cm" src={heron} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Male Lion - William Franklin" price="23,00 €" dimension="40 x 60 cm" src={lion} size=" is-4by3" />
				<AfficheBox name="Sails - Pangea Image Set" price="12,85 €" dimension="30 x 40 cm" src={sails} size=" is-4by3" />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Improvisation sans titre - Wassily Kandinsky" price="25,85 €" dimension="35 x 70 cm"  src={improvisation} />
				<div className="column">
					<AfficheBox name="Diafane Presenze - Giuliano Censini" price="11,90 €" dimension="30 x 30 cm" src={diafane} />
					<AfficheBox name="Sulla Spiaggia d'Inverno - Guiliano Censini" price="25,85 €" dimension="50 x 50 cm" src={sulla} />
				</div>
				<AfficheBox name="A Pair of Peacocks in Spring - Imao Keinen" price="25,85 €" dimension="35 x 70 cm" src={peacocks}/>
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Courtesan - Katshushika Hokusai" price="12,85 €" dimension="30 x 40 cm" src={courtesan} />
				<AfficheBox name="Shimmering Goddess - Julian Lauren" price="27,75 €" dimension="50 x 70 cm" src={goddess}/>
				<AfficheBox name="Seated Beauty II - Van Haal" price="12,85 €" dimension="30 x 40 cm" src={seated} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Male Lion Namibia - Anonymous" price="12,85 €" dimension="30 x 40 cm" src={lion2} />
				<AfficheBox name="Riglessi del Tramonto - Lucas" price="12,85 €" dimension="30 x 40 cm" src={riglessi} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Geometrie Complesse - Arturo Armenti" price="13,85" dimension="20 x 60 cm" src={geometrie} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Ivory Orchids - Jenny Thominson" price="12,85 €" dimension="30 x 40 cm" src={ivory} />
				<AfficheBox name="Foresta Incantata - Luigi Florio" price="12,85 €" dimension="30 x 40 cm" src={incantata} />
				<AfficheBox name="Fiori di Magnolia - Cristina Mavaracchio" price="12,85 €" dimension="30 x 40 cm" src={fiori} />
			</div>
			<div className="columns is-centered">
				<AfficheBox name="Tournée du Chat Noir - Théophile Alexandre Steinlen" price="12,85 €" dimension="30 x 40 cm" src={chat} />
				<AfficheBox name="The Vanitie during the America's Cup - Edwin Levick" price="27,75 €" dimension="50 x 70 cm"  src={vanitie} />
			</div>
		</div>
	</section>
);

export default Illustrations;

/*
RESERVE EN CAS DE RESTOCK :

import sunset from '../images/art_visuel/affiches/Peder_Monsted_Sunset_over_a_Danish_fiord_50_x_100_cm.jpg';

<AfficheBox name="Sunset over a Danish Fiord - Peter Monsted" price="31,70 €" dimension="50 x 100 cm" src={sunset} />

*/