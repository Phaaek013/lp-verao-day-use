import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section id="reservar" className="py-20 bg-gradient-to-r from-[#1B5F39] to-[#233E32] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://cdn.gamma.app/yn93238300aayo2/02cbacbfad5d4117b487eafc430dea5c/original/REDARIO-2-1024x1024.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Não perca esta oportunidade!
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            O Verão na Serra do Gandarela está esperando por você.
            Faça sua reserva agora e garanta seu dia especial na natureza.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="https://wa.me/5531972322438?text=Olá! Gostaria de reservar um Day Use para a Campanha de Verão do Hotel Serra do Gandarela"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Reservar via WhatsApp
          </a>
          
          <a
            href="tel:+5531972322438"
            className="flex items-center bg-white text-[#1B5F39] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone className="w-6 h-6 mr-3" />
            Ligar Agora
          </a>
        </div>

        <div className="text-center mt-8 text-white/80">
          <p className="text-sm">
            Atendimento para Reservas: Segunda à Sábado, das 8:00 às 18:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;