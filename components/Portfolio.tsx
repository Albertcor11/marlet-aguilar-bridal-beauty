
import React from 'react';

const PortfolioImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
  <div className="group relative overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
    <img src={src} alt={alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>
  </div>
);

const portfolioImages = [
    { src: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Retrato de novia con maquillaje elegante" },
    { src: "https://images.pexels.com/photos/3779409/pexels-photo-3779409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Novia sonriendo con maquillaje luminoso" },
    { src: "https://images.pexels.com/photos/295771/pexels-photo-295771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Novia sonriendo con maquillaje natural" },
    { src: "https://images.pexels.com/photos/1689753/pexels-photo-1689753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Novia elegante con ramo de flores" },
    { src: "https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Novia con velo y maquillaje sofisticado" },
    { src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Detalle de peinado de novia con flores" },
    { src: (import.meta as any).env.BASE_URL + 'marlet.jpg', alt: "Primer plano de maquillaje de novia detallado" },
    { src: "https://images.pexels.com/photos/1311771/pexels-photo-1311771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Novia feliz en el día de su boda" },
];
  
const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-brand-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">Portafolio</h2>
          <p className="text-lg text-brand-text max-w-2xl mx-auto mb-12">Una muestra de la magia que creamos juntas.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioImages.map((image, index) => (
            <PortfolioImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
