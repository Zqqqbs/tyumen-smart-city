import React from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const loginIconUrl = 'https://i.postimg.cc/c1PN7WYk/138-1387657-app-icon-set-login-icon-comments-avatar-icon.png';

  return (
    <header className="py-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="https://i.postimg.cc/GtNNrpMg/3-26.png" alt="City Logo" className="h-10 w-10 object-contain" />
        <span className="text-white text-sm md:text-base max-w-[150px] leading-tight">Город, где технологии начинают путь</span>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#" className="transition-opacity hover:opacity-80">
          <img src="https://i.postimg.cc/KvRB03jT/icons8_vk_50.png" alt="VK" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} />
        </a>
        <a href="#" className="transition-opacity hover:opacity-80">
          <img src="https://i.postimg.cc/nLM1Hyzc/icons8-telegram-50.png" alt="Telegram" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} />
        </a>
        <a href="#" className="transition-opacity hover:opacity-80">
          <img src="https://i.postimg.cc/jSMXYxsW/icons8-odnoklassniki-v-kruge-50.png" alt="Odnoklassniki" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} />
        </a>
        <button
          onClick={() => onNavigate('newPage')}
          className="transition-opacity hover:opacity-80 focus:outline-none"
          aria-label="Личный кабинет"
        >
          <img
            src={loginIconUrl}
            alt="Личный кабинет"
            className="h-7 w-7"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </button>
      </div>
    </header>
  );
};