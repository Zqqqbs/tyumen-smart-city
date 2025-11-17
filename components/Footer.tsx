import React from 'react';
import { FOOTER_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e3a4c] pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-4 mb-6 md:mb-0">
            <p>&copy; Smart City Tyumen, 2025</p>
            <a href="#" className="hover:text-white">Правительство Тюменской области</a>
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Сообщить о нарушении +7-XXX-XXX-XX-XX</a>
            <a href="#" className="hover:text-white">Написать нам</a>
          </div>
          <div className="flex items-center space-x-4">
             <a href="#" className="transition-opacity hover:opacity-80">
                <img src="https://i.postimg.cc/KvRB03jT/icons8_vk_50.png" alt="VK" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
                <img src="https://i.postimg.cc/nLM1Hyzc/icons8-telegram-50.png" alt="Telegram" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} />
            </a>
            <a href="#" className="hover:text-white">Версия для слабовидящих</a>
          </div>
        </div>
      </div>
    </footer>
  );
};