import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; active?: boolean; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, active, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-white text-lg py-2 transition-colors hover:text-yellow-300 ${
        active ? 'border-b-2 border-yellow-400' : ''
      }`}
    >
      {children}
    </a>
  );
};

interface HeroProps {
    onNavigate: (page: string) => void;
    currentPage: string;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, currentPage }) => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex flex-col justify-end text-white rounded-lg overflow-hidden p-8 md:p-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/tyumen/1600/900')" }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-black text-white leading-none">
          ТЮМЕНЬ
          <br />
          <span className="text-yellow-400">SMART CITY</span>
        </h1>
        <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          <NavLink href="#" active={currentPage === 'home'} onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Главная</NavLink>
          <NavLink href="#" active={currentPage === 'management'} onClick={(e) => { e.preventDefault(); onNavigate('management'); }}>Управление "Умным городом"</NavLink>
          <NavLink href="#" active={currentPage === 'campus'} onClick={(e) => { e.preventDefault(); onNavigate('campus'); }}>Межвузовский кампус</NavLink>
          <NavLink href="#">Технопредпринимательство</NavLink>
        </nav>
      </div>
    </section>
  );
};
