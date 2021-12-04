import React, {useState} from 'react';

const Navbar = () => 
{
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


	return(
		<div className="hero-head">
			<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						Accueil
					</a>

					<a 
						role="button" 
						className={"navbar-burger burger" + (isMenuOpen ? " is-active" : "")}
						aria-label="menu" 
						aria-expanded="false" 
						data-target="navbarBasicExample"
						onClick={openMenu}>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" className={"navbar-menu" + (isMenuOpen ? " is-active" : "")}>
					<div className="navbar-start">
						<a className="navbar-item" href="/cadres_personnalises">
							Cadres sur mesure
						</a>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link is-arrowless" href="/cadres_standards">
								Cadres Standards
							</a>
							<div className="navbar-dropdown">
								<a className="navbar-item" href="/cadres_standards/cadres_alpha">
									ALPHA
								</a>
								<a className="navbar-item" href="/cadres_standards/cadresC2">
									C2
								</a>
								<a className="navbar-item" href="/cadres_standards/cadres_scandic">
									SCANDIC
								</a>
							</div>
						</div>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link is-arrowless" href="/objets_d_art">
								Arts et Images
							</a>
							<div className="navbar-dropdown">
								<a className="navbar-item" href="/objets_d_art/art_chats">
									Les Chats de Rosina Wachtmeister
								</a>
								<a className="navbar-item" href="/objets_d_art/art_divers">
									Objets d'art décoratifs
								</a>
								<a className="navbar-item" href="/objets_d_art/illustrations">
									Affiches et reproductions
								</a>
								<a className="navbar-item" href="/objets_d_art/artistes">
									Œuvres graphiques et autres travaux
								</a>
							</div>
						</div>
						<a className="navbar-item" href="/evenements">
							Événements
						</a>
						<a className="navbar-item" href="/contact">
							Nous trouver
						</a>
					</div>
				</div>
			</nav>
		</div>
	)
};

export default Navbar;