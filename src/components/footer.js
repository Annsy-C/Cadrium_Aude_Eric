import React from 'react';
import background from '../images/bandeau-1.jpg';

const Footer = () => (
    <>
      <footer className="footer center is-primary">
        <div className="content centered-content">
          <p>Boutique située 31 rue Ledru Rollin, 36 OOO Châteauroux</p>
          <p>cadrium@gmail.com --- 02 54 07 37 56</p>
          <br />
          <p><em>Site réalisé par : Anne-Sylvie Chollet-Karraz --- contact : annesylvie.chollet@gmail.com</em></p>
        </div>
      </footer>
      <footer 
        className="footer"
        style={{ 
          backgroundImage:`url(${background})`,
          minHeight:"150px",
          backgroundSize:"cover"
        }}
      >
      </footer>
    </>
)

export default Footer
