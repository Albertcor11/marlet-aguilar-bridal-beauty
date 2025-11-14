import React from 'react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-brand-text py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-2xl hover:text-white transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-2xl hover:text-white transition-colors">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" aria-label="Facebook" className="text-2xl hover:text-white transition-colors">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <p className="text-sm">&copy; {currentYear} MARLET AGUILAR Bridal Beauty. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">Diseñado con <i className="fas fa-heart text-red-400"></i> en Oaxaca</p>
      </div>
    </footer>
  );
};

export default Footer;