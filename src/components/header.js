import React from 'react';
/*import header_pic from '../images/header-1.jpg';*/
import Navbar from './navbar';

const Header = () => (
	<section className="hero is-fixed-top is-primary is-medium header-image">
		<div className="hero-body">
			<div className="container center">
				{/* <figure class="image">
  					<img src={header_pic} alt="bandeau" width="100"/>
				</figure> */}
			</div>
		</div>
		<Navbar />
	</section>
);

export default Header;