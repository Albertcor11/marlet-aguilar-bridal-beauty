import React, { useState, useRef, useEffect } from 'react';
import { askGemini } from '../services/geminiService';
import type { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: '¡Hola! Soy tu asistente virtual. ¿Cómo puedo ayudarte a conocer los servicios de MARLET AGUILAR?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponse = await askGemini(input);
      const botMessage: ChatMessage = { sender: 'bot', text: botResponse };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'bot', text: 'Tuve un problema al procesar tu solicitud. Intenta de nuevo.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-accent text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-brand-text transition-colors"
          aria-label="Abrir chat"
        >
          <i className="fa-solid fa-comments"></i>
        </button>
      </div>

      <div className={`fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[600px] flex flex-col bg-white rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        {/* Chat Header */}
        <div className="bg-brand-secondary text-brand-text p-4 rounded-t-2xl flex justify-between items-center">
          <h3 className="font-bold text-lg">Asistente Virtual</h3>
          <button onClick={() => setIsOpen(false)} className="text-brand-text hover:text-white" aria-label="Cerrar chat">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Messages */}
        <div ref={chatMessagesRef} className="flex-1 p-4 overflow-y-auto bg-brand-background">
          {messages.map((msg, index) => (
            <div key={index} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-xl px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-brand-primary text-brand-text' : 'bg-gray-200 text-gray-800'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-xl px-4 py-2 bg-gray-200 text-gray-800">
                <span className="animate-pulse">...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-accent"
              disabled={isLoading}
            />
            <button type="submit" className="bg-brand-accent text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center disabled:bg-gray-400" disabled={isLoading}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;