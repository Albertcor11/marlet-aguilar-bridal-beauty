import { Service, Testimonial, BlogPost } from './types';

export const services: Service[] = [
  {
    icon: 'fa-solid fa-ring',
    title: 'Maquillaje para Novias',
    description: 'Un servicio de lujo diseñado para que luzcas radiante en tu día más especial. Usamos productos de alta gama para un look natural y duradero.'
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Cursos de Automaquillaje',
    description: 'Aprende a resaltar tu belleza natural con técnicas profesionales. Cursos personalizados individuales o en grupo para todos los niveles.'
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Asesorías de Belleza',
    description: 'Descubre los colores, productos y estilos que mejor te sientan. Una asesoría completa para renovar tu neceser y tu rutina de belleza.'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Marlet superó todas mis expectativas. El maquillaje duró toda la noche y me sentí como una princesa. ¡La recomiendo al 100%!',
    name: 'Ana G.',
    event: 'Boda en Oaxaca'
  },
  {
    quote: 'El curso de automaquillaje fue increíble. Marlet es una maestra paciente y talentosa. ¡Finalmente sé cómo hacerme un delineado perfecto!',
    name: 'Laura M.',
    event: 'Curso Personalizado'
  },
  {
    quote: 'Contraté a Marlet para mi sesión de fotos de compromiso y el resultado fue espectacular. Un maquillaje natural que resaltó mis facciones.',
    name: 'Carmen R.',
    event: 'Sesión de Fotos'
  }
];

export const blogPosts: BlogPost[] = [
  {
    image: 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cuidado de la Piel',
    title: '5 Pasos para Preparar tu Piel Antes del Día de la Boda',
    excerpt: 'Una piel radiante es la base de un maquillaje perfecto. Descubre los secretos para llegar al altar con un cutis de ensueño...'
  },
  {
    image: 'https://images.pexels.com/photos/10189658/pexels-photo-10189658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Tendencias',
    title: 'Tendencias de Maquillaje Nupcial para 2024',
    excerpt: 'Desde labios audaces hasta looks monocromáticos, te contamos qué se llevará en el mundo de la belleza nupcial este año.'
  },
  {
    image: 'https://images.pexels.com/photos/7139702/pexels-photo-7139702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Consejos',
    title: 'El Kit de Retoque Esencial para Novias',
    excerpt: '¿Qué llevar en tu bolso para mantenerte perfecta durante todo el evento? Te preparamos la lista definitiva...'
  }
];

export const navLinks = [
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Portafolio', href: '#portfolio' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contacto', href: '#contact' },
];

export const WHATSAPP_LINK = "https://wa.me/529513993568"; // Replace with actual number
export const INSTAGRAM_LINK = "https://www.instagram.com/marletaguilar_/"; // Replace with actual profile