import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Belo Horizonte',
      text: 'Um dia maravilhoso! A natureza, as piscinas e a hospitalidade fizeram toda a diferença. Voltaremos com certeza!',
      rating: 5
    },
    {
      name: 'João Santos',
      location: 'São Paulo',
      text: 'Lugar perfeito para relaxar e se reconectar com a família. As crianças adoraram a área kids e nós, a tranquilidade.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      location: 'Rio de Janeiro',
      text: 'A experiência superou todas as expectativas. Comida deliciosa, paisagens incríveis e atendimento impecável.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#233E32] mb-6">
            O que nossos visitantes dizem
          </h2>
          <p className="text-lg text-[#2C2821] max-w-2xl mx-auto">
            Histórias reais de quem viveu momentos especiais conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FAF9F4] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-[#1B5F39] mb-4 opacity-60" />
              
              <p className="text-[#2C2821] mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-[#233E32]">{testimonial.name}</h4>
                  <p className="text-sm text-[#2C2821]/70">{testimonial.location}</p>
                </div>
                
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#2C2821] mb-6">Junte-se a centenas de visitantes satisfeitos</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-[#233E32] font-bold text-xl">4.9/5</span>
            <span className="text-[#2C2821]">(+200 avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;