import React from 'react';
import header_pic from '../images/header-2.jpg';
import Navbar from './navbar';

const Header = () => (
	<section className="hero is-fixed-top is-primary is-small">
		<div className="hero-body">
			<div className="container center">
				<div className="columns is-centered">
					<div className="column is-6">
						<figure class="image">
							<img src={header_pic} alt="bandeau" />
						</figure>
					</div>
				</div>
			</div>
		</div>
		<Navbar />
	</section>
);

export default Header;