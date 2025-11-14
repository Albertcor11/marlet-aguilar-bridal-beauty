
import React from 'react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">Hagamos Magia Juntas</h2>
        <p className="text-lg text-brand-text max-w-2xl mx-auto mb-10">Estoy emocionada por conocerte y ser parte de tu día especial. Contáctame para consultar disponibilidad y agendar tu cita.</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-4 px-8 rounded-full flex items-center hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-lg w-64 justify-center">
            <i className="fab fa-whatsapp mr-3 text-2xl"></i> Agendar por WhatsApp
          </a>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white font-bold py-4 px-8 rounded-full flex items-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 text-lg w-64 justify-center">
            <i className="fab fa-instagram mr-3 text-2xl"></i> Ver en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
