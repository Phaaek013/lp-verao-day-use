import React from 'react';
import { Waves, TreePine, UtensilsCrossed, Baby, Dumbbell, Camera, Wifi, Car } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Waves,
      title: 'Piscinas Aquecidas e Climatizadas',
      description: 'Águas cristalinas em meio à natureza preservada',
      image: 'https://hotelserradogandarela.com.br/wp-content/uploads/2025/05/MIRANTE-DAS-AGUAS-2-1024x1024.png'
    },
    {
      icon: TreePine,
      title: 'Trilhas Ecológicas',
      description: 'Caminhe pela mata atlântica e descubra cachoeiras',
      image: 'https://hotelserradogandarela.com.br/wp-content/uploads/2025/05/TEMPLO-DA-MEDITACAO-CAPA-1.jpg'
    },
    {
      icon: UtensilsCrossed,
      title: 'Gastronomia Regional',
      description: 'Sabores autênticos de Minas Gerais',
      image: 'https://hotelserradogandarela.com.br/wp-content/uploads/elementor/thumbs/9-EVENTOS-rbzfpu5opbj14cy2ae4ob0vo6xrepsvywq36m4a0ow.jpg'
    },
    {
      icon: Baby,
      title: 'Área Kids',
      description: 'Diversão garantida para toda a família',
      image: 'https://hotelserradogandarela.com.br/wp-content/uploads/2025/11/Espaco-Kids--scaled.jpg'
    },
    {
      icon: Dumbbell,
      title: 'Beach Tennis',
      description: 'Quadra profissional para momentos de esporte',
      image: 'https://cdn.gamma.app/yn93238300aayo2/0f3a910d9b194cd8904c6bd0976d4e84/original/BEACH-TENNIS-2.jpg'
    },
    {
      icon: Camera,
      title: 'Cenários Instagramáveis',
      description: 'Paisagens de tirar o fôlego para suas fotos',
      image: 'https://hotelserradogandarela.com.br/wp-content/uploads/2025/11/Instagramavel.png'
    }
  ];

  const amenities = [
    { icon: Wifi, text: 'Wi-Fi gratuito' },
    { icon: Car, text: 'Estacionamento grátis' },
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#FAF9F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#233E32] mb-6">
            Tudo que você precisa para um dia perfeito
          </h2>
          <p className="text-lg text-[#2C2821] max-w-3xl mx-auto">
            Explore as experiências e encantos naturais que tornam o Day Use na Serra do Gandarela um momento inesquecível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <benefit.icon className="w-6 h-6 text-[#1B5F39] mr-3" />
                  <h3 className="text-xl font-bold text-[#233E32]">{benefit.title}</h3>
                </div>
                <p className="text-[#2C2821] leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center bg-white px-6 py-3 rounded-full shadow-md">
              <amenity.icon className="w-5 h-5 text-[#1B5F39] mr-2" />
              <span className="text-[#233E32] font-medium">{amenity.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;