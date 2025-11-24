import React from 'react';
import { Star, Users, Utensils, Waves } from 'lucide-react';

const DayUseSection = () => {
  const features = [
    { icon: Waves, text: 'Piscinas Aquecidas e Climatizadas' },
    { icon: Utensils, text: 'Gastronomia local' },
    { icon: Users, text: 'Área para famílias' },
  ];

  const images = [
    'https://cdn.gamma.app/yn93238300aayo2/bee0a42898104dcfa767ab0fb586ab87/original/acima-das-piscinas-1.jpg',
    'https://cdn.gamma.app/yn93238300aayo2/26d73773230c4a199da5744631e73d98/original/CASCATA-CAPA-1.jpg',
    'https://cdn.gamma.app/yn93238300aayo2/b271ab59f9134592a478c3a116e8299e/original/GAZEBOS-CAPA.jpg',
  ];

  return (
    <section id="dayuse" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#1B5F39]/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-[#1B5F39] mr-2" />
            <span className="text-[#1B5F39] font-semibold">Experiência Day Use</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#233E32] mb-6">
            Um dia perfeito na natureza
          </h2>
          
          <p className="text-lg text-[#2C2821] max-w-3xl mx-auto leading-relaxed">
            Explore as experiências e encantos naturais que tornam o Day Use na Serra do Gandarela um momento inesquecível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? 'col-span-2 h-64' : 'h-48'
                }`}
              >
                <img
                  src={image}
                  alt={`Hotel Serra do Gandarela ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div>
            <div className="bg-[#1B5F39]/5 p-8 rounded-2xl border border-[#1B5F39]/20 mb-8">
              <h3 className="text-2xl font-bold text-[#233E32] mb-4">Day Use Verão</h3>
              <div className="flex flex-col mb-4">
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-[#1B5F39]">R$ 150</span>
                  <span className="text-[#2C2821] ml-2">dia de semana</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-[#1B5F39]">R$ 200</span>
                  <span className="text-[#2C2821] ml-2">finais de semana</span>
                </div>
              </div>
              <p className="text-[#2C2821] mb-6">
                Inclui acesso às áreas comuns de lazer mostradas nesta página, um almoço típico mineiro e contato direto com a natureza.
              </p>
              
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <feature.icon className="w-5 h-5 text-[#1B5F39] mr-3" />
                    <span className="text-[#2C2821]">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="https://wa.me/5531972322438?text=Olá! Gostaria de reservar um Day Use para a Campanha de Verão"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#1B5F39] text-white text-center py-3 rounded-full font-semibold hover:bg-[#233E32] transition-all duration-300 transform hover:scale-105"
              >
                Reservar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayUseSection;