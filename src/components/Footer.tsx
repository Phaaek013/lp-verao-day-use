import React from 'react';
import { MessageCircle, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#233E32] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="https://hotelserradogandarela.com.br/wp-content/uploads/2025/05/Logo-Gandarela.png" 
              alt="Hotel Serra do Gandarela" 
              className="h-12 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Reconecte-se com a natureza na Serra do Gandarela. 
              Uma experiência única de tranquilidade e aventura.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/hotelgandarela/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#1B5F39] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/p/Hotel-Serra-do-Gandarela-100083247101924/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#1B5F39] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#1B5F39]">Contato</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5531972322438"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-3 text-[#1B5F39]" />
                (31) 9 7232-2438
              </a>
              <a
                href="tel:+5531995813270"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-3 text-[#1B5F39]" />
                (31) 9 9581-3270
              </a>
              <a
                href="mailto:suporte@hotelserradogandarela.com.br"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-[#1B5F39]" />
                suporte@hotelserradogandarela.com.br
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#1B5F39]">Day Use</h3>
            <div className="space-y-3 text-gray-300">
              <p>Horário: 10h às 17h (Check-in: 10h | Check-out: 17h)</p>
              <p>Valor: R$ 150,00 dia de semana e R$ 200,00 finais de semana</p>
              <p>Inclui: Experiências ao ar livre, lazer completo (como apresentado aqui) e almoço mineiro. Acomodações não inclusas no Day Use.</p>
              <p>Reservas: Antecedência mínima de 24h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Hotel Serra do Gandarela. Desenvolvido por Lions Creative Marketing em parceria com Vortix.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;