import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-background">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src={(import.meta as any).env.BASE_URL + 'marlet.jpg'} alt="Foto de perfil de Marlet Aguilar, maquillista" className="rounded-lg shadow-2xl w-full object-cover h-[500px]" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">Sobre Mí</h2>
            <p className="text-lg text-brand-text mb-4 leading-relaxed">
              ¡Hola! Soy MARLET AGUILAR, una apasionada del maquillaje con una misión: resaltar la belleza única de cada novia. Con más de 8 años de experiencia en el corazón de Oaxaca, mi filosofía se centra en el "natural makeup".
            </p>
            <p className="text-lg text-brand-text mb-6 leading-relaxed">
              Creo que el maquillaje no debe ser una máscara, sino una herramienta para potenciar tu confianza y hacerte sentir la versión más radiante de ti misma en tu gran día. Mi estilo es atemporal, elegante y fresco, pensado para que te veas increíble tanto en persona como en tus fotografías.
            </p>
            <p className="font-serif text-xl text-brand-accent">"Tu belleza, tu esencia, tu día."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;