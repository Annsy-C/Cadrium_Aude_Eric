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
							Cadres Personnalisés
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
								Objets d'Art
							</a>
							<div className="navbar-dropdown">
								<a className="navbar-item" href="/objets_d_art/art_chats">
									Chats de Rosina Wachtmeister
								</a>
								<a className="navbar-item" href="/objets_d_art/art_divers">
									Divers
								</a>
							</div>
						</div>
						<a className="navbar-item" href="/evenements">
							Evenements
						</a>
						<a className="navbar-item" href="/contact">
							Contact
						</a>
					</div>
				</div>
			</nav>
		</div>
	)
};

export default Navbar;