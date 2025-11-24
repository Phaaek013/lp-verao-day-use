import React from 'react';
import { MapPin, Clock, Car, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#233E32] mb-6">
            Como chegar
          </h2>
          <p className="text-lg text-[#2C2821] max-w-2xl mx-auto">
            Localizado estrategicamente na Serra do Gandarela, oferecemos fácil acesso e paisagens deslumbrantes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#1B5F39] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#233E32] mb-2">Endereço</h3>
                <p className="text-[#2C2821] leading-relaxed">
                  Estrada Principal de Cocho D'agua, km 5 – Cocho D'agua<br />
                  Rio Acima - MG, 34300-000<br />
                  Brasil
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-[#1B5F39] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#233E32] mb-2">Horário Day Use</h3>
                <p className="text-[#2C2821] leading-relaxed">
                  Das 10h às 17h<br />
                  Todos os dias da semana<br />
                  Check-in às 10h e Check-out às 17h
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Car className="w-6 h-6 text-[#1B5F39] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#233E32] mb-2">Como Chegar</h3>
                <p className="text-[#2C2821] leading-relaxed">
                  Apenas 37km de Belo Horizonte<br />
                  Estacionamento gratuito<br />
                  Estrada pavimentada até o hotel
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://maps.google.com/?q=Estrada+Principal+de+Cocho+D%27agua,+km+5,+Rio+Acima+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1B5F39] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#233E32] transition-all duration-300"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Ver no Google Maps
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Estrada%20Principal%20de%20Cocho%20D'agua,%20km%205,%20Rio%20Acima%20MG&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Hotel Serra do Gandarela"
              ></iframe>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-[#1B5F39] text-white p-4 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold">37 km de BH</p>
              <p className="text-xs opacity-90">Via BR-356</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;