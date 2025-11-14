
import React from 'react';
import { testimonials } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-brand-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-12">Lo que dicen mis clientas</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-background p-8 rounded-lg shadow-lg text-left relative">
              <i className="fa-solid fa-quote-left text-brand-accent text-7xl absolute -top-5 -left-5 opacity-10"></i>
              <p className="text-brand-text italic mb-6 z-10 relative">"{testimonial.quote}"</p>
              <div className="font-semibold text-brand-text">{testimonial.name}</div>
              <div className="text-sm text-brand-accent">{testimonial.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
