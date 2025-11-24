import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://hotelserradogandarela.com.br/wp-content/uploads/2025/05/Logo-Gandarela.png" 
              alt="Hotel Serra do Gandarela" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#dayuse" className="text-[#233E32] hover:text-[#1B5F39] transition-colors font-medium">
              Day Use
            </a>
            <a href="#beneficios" className="text-[#233E32] hover:text-[#1B5F39] transition-colors font-medium">
              Benefícios
            </a>
            <a href="#localizacao" className="text-[#233E32] hover:text-[#1B5F39] transition-colors font-medium">
              Localização
            </a>
            <a href="#contato" className="text-[#233E32] hover:text-[#1B5F39] transition-colors font-medium">
              Contato
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#reservar"
              className="bg-[#1B5F39] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#233E32] transition-all duration-300 transform hover:scale-105"
            >
              Reservar Day Use
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-[#233E32]" /> : <Menu className="h-6 w-6 text-[#233E32]" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#dayuse" className="text-[#233E32] hover:text-[#1B5F39] transition-colors font-medium">
                Day Use
              </a>
              <a href="#beneficios" className="text-[#233E32] hover:text-[#1B5F39] transition-colors font-medium">
                Benefícios
              </a>
              <a href="#localizacao" className="text-[#233E32] hover:text-[#1B5F39] transition-colors font-medium">
                Localização
              </a>
              <a href="#contato" className="text-[#233E32] hover:text-[#1B5F39] transition-colors font-medium">
                Contato
              </a>
              <a
                href="#reservar"
                className="bg-[#1B5F39] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#233E32] transition-all duration-300 text-center"
              >
                Reservar Day Use
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;