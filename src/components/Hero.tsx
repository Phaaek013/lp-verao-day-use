import React from 'react';
import { ArrowDown, Calendar, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-[#FAF9F4] via-green-50 to-[#FAF9F4]">
      <div className="absolute inset-0 bg-[url('https://cdn.gamma.app/yn93238300aayo2/c90283c095434e5f818f953fdbca467c/original/MIRANTE-DAS-AGUAS-2.jpg')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <Calendar className="w-5 h-5 text-[#1B5F39] mr-2" />
            <span className="text-[#233E32] font-medium">Campanha de Verão 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#233E32] mb-6 leading-tight">
            Desperte para o
            <span className="text-[#1B5F39] block">Verão</span>
            na Serra
          </h1>
          
          <p className="text-lg md:text-xl text-[#2C2821] mb-8 max-w-2xl mx-auto leading-relaxed">
            Viva um dia inesquecível em meio à natureza exuberante da Serra do Gandarela. 
            Desconecte-se da rotina e reconecte-se com o que realmente importa.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#dayuse"
              className="bg-[#1B5F39] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#233E32] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Descobrir Day Use
            </a>
            <div className="flex items-center text-[#233E32] bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <Clock className="w-5 h-5 mr-2 text-[#1B5F39]" />
              <span className="font-medium">Das 10h às 17h</span>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-[#1B5F39] mx-auto" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#FAF9F4] to-transparent"></div>
    </section>
  );
};

export default Hero;