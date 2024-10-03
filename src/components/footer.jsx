import React from 'react';
import '../styles/foter.css'; // Certifique-se que o nome do arquivo CSS está correto

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Future Web. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
