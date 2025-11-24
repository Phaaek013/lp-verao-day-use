import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const StickyReserveButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReserve = () => {
    window.open(
      'https://wa.me/5531972322438?text=Olá! Gostaria de reservar um Day Use para a Campanha de Verão do Hotel Serra do Gandarela',
      '_blank'
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded version */}
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-4 max-w-sm animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-[#233E32] text-lg">Day Use Verão</h3>
              <p className="text-[#2C2821] text-sm">R$ 150 (semana) | R$ 200 (fim de semana)</p>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-[#2C2821] text-sm mb-4">
            Lazer completo + almoço mineiro incluso
          </p>
          
          <button
            onClick={handleReserve}
            className="w-full bg-[#1B5F39] text-white py-3 rounded-full font-semibold hover:bg-[#233E32] transition-all duration-300 flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Reservar via WhatsApp
          </button>
        </div>
      )}

      {/* Main sticky button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[#1B5F39] text-white p-4 rounded-full shadow-2xl hover:bg-[#233E32] transition-all duration-300 transform hover:scale-110 group"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-[#1B5F39] rounded-full animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-[#233E32] text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Reservar Day Use
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-[#233E32] border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default StickyReserveButton;