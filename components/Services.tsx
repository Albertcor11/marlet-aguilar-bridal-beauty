
import React from 'react';
import { services } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-brand-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-12">Mis Servicios</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-background p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-brand-accent text-5xl mb-6">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-brand-text mb-4">{service.title}</h3>
              <p className="text-brand-text leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
