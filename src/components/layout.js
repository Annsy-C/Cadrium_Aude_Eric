import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Header />
		<section className="section has-background-info">
			<div className="container">
				<div className="columns">
					<div className="column is-offset-1 is-10">
						{children}
					</div>
				</div>
			</div>
		</section>
		<Footer />
	</div>
);

export default Layout;
