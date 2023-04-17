import React from 'react';
import './footer.css';
import cyber from '../../assets/footer/miw-cyber.jpg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-block">
        <div>
          <img src={cyber} alt="cyber" />
        </div>
        <div>Guilty pleasures... cyber-x</div>
        <div>React-2023</div>
      </div>
    </footer>
  );
};
