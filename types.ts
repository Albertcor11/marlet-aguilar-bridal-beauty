
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  event: string;
}

export interface BlogPost {
  image: string;
  category: string;
  title:string;
  excerpt: string;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}
