import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <div className="bg-black bg-opacity-40 absolute inset-0"></div>
      <div className="text-center z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          MARLET AGUILAR
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 font-sans" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          Belleza Natural para Novias en Oaxaca
        </p>
        <a href="#contact" onClick={handleScrollToContact} className="bg-brand-primary text-brand-text font-bold py-3 px-8 rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 transform hover:scale-105">
          Agendar una Cita
        </a>
      </div>
    </section>
  );
};

export default Hero;