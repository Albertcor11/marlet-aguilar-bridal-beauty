
import React from 'react';
import { blogPosts } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-brand-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">Consejos de Belleza</h2>
          <p className="text-lg text-brand-text max-w-2xl mx-auto mb-12">Tips y secretos para que luzcas espectacular en tu camino al altar.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="overflow-hidden h-56">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-brand-accent text-sm font-semibold mb-2">{post.category}</p>
                <h3 className="text-xl font-serif font-semibold text-brand-text mb-3">{post.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <a href="#" className="font-bold text-brand-accent hover:text-brand-text transition-colors">Leer más <i className="fas fa-arrow-right ml-1"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;