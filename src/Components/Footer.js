import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#2C1810] to-[#1A0F08] text-white py-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Informations de contact */}
          <div className="group">
            <h3 className="text-2xl font-bold mb-6 text-[#F4E4BC] tracking-wide">Contactez-nous</h3>
            <div className="space-y-4">
              <div className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] p-2 rounded-lg mr-4 shadow-lg">
                  <MapPin className="w-5 h-5 text-[#1A0F08]" />
                </div>
                <div>
                  <p className="text-[#F4E4BC] font-medium">Adresse</p>
                  <span className="text-[#C4B59A] text-sm leading-relaxed">
                    123 Avenue des Palmiers<br />
                    Sousse, Tunisie 4000
                  </span>
                </div>
              </div>
              <div className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] p-2 rounded-lg mr-4 shadow-lg">
                  <Phone className="w-5 h-5 text-[#1A0F08]" />
                </div>
                <div>
                  <p className="text-[#F4E4BC] font-medium">Téléphone</p>
                  <span className="text-[#C4B59A] text-sm">+216 73 123 456</span>
                </div>
              </div>
              <div className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] p-2 rounded-lg mr-4 shadow-lg">
                  <Mail className="w-5 h-5 text-[#1A0F08]" />
                </div>
                <div>
                  <p className="text-[#F4E4BC] font-medium">Email</p>
                  <span className="text-[#C4B59A] text-sm">contact@velyssaresort.tn</span>
                </div>
              </div>
            </div>
          </div>

          {/* À propos */}
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-[#F4E4BC] mb-2 tracking-wide">Velyssa Resort</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] mx-auto rounded-full"></div>
            </div>
            <p className="text-[#C4B59A] leading-relaxed mb-6 max-w-sm mx-auto">
              Un havre de paix et de luxe au cœur de la Tunisie. Découvrez une expérience 
              inoubliable dans notre resort 5 étoiles avec vue sur la mer Méditerranée.
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-[#D4AF37]/20 to-[#B8941F]/20 px-6 py-3 rounded-full border border-[#D4AF37]/30">
              <div className="flex text-[#D4AF37] mr-3">
                <span className="text-lg">★★★★★</span>
              </div>
              <span className="text-[#F4E4BC] font-medium">Resort 5 étoiles</span>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="text-right">
            <h3 className="text-2xl font-bold mb-6 text-[#F4E4BC] tracking-wide">Suivez-nous</h3>
            <p className="text-[#C4B59A] mb-6 max-w-sm ml-auto">
              Restez connectés pour découvrir nos dernières offres et actualités
            </p>
            <div className="flex justify-end space-x-4 mb-6">
              <a 
                href="https://facebook.com/velyssaresort" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-[#3C2415] to-[#2C1810] hover:from-[#D4AF37] hover:to-[#B8941F] p-4 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-110 border border-[#D4AF37]/20 hover:border-[#D4AF37]"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-[#D4AF37] group-hover:text-[#1A0F08] transition-colors duration-300" />
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://instagram.com/velyssaresort" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-[#3C2415] to-[#2C1810] hover:from-[#D4AF37] hover:to-[#B8941F] p-4 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-110 border border-[#D4AF37]/20 hover:border-[#D4AF37]"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#D4AF37] group-hover:text-[#1A0F08] transition-colors duration-300" />
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://twitter.com/velyssaresort" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-[#3C2415] to-[#2C1810] hover:from-[#D4AF37] hover:to-[#B8941F] p-4 rounded-xl transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-110 border border-[#D4AF37]/20 hover:border-[#D4AF37]"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-[#D4AF37] group-hover:text-[#1A0F08] transition-colors duration-300" />
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="text-center border-t border-[#D4AF37]/20 pt-8">
          <p className="text-[#C4B59A] text-sm">
            &copy; 2025 Velyssa Resort. Tous droits réservés. | 
            <a href="/mentions-legales" className="hover:text-[#F4E4BC] ml-1 transition-colors duration-300">Mentions légales</a> | 
            <a href="/politique-confidentialite" className="hover:text-[#F4E4BC] ml-1 transition-colors duration-300">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;