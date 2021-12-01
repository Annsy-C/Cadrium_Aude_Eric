import React from 'react';

const Notfound= () => (
	<section className="section">
		<div className="container">
			<div className="notification is-info centered-content">
				<h2 className="subtitle"><em>Aucune page correspondante !</em></h2>
				<p>La page que vous tentez de rejoindre n'existe pas...</p>
				<p>Revenir à l'<a href="/">accueil</a>.</p>
			</div>
		</div>
	</section>
);

export default Notfound;