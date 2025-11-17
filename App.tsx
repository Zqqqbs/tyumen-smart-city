import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsSection } from './components/NewsSection';
import { EventsSection } from './components/EventsSection';
import { ManagementSection } from './components/ManagementSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InitiativeBanner } from './components/InitiativeBanner';
import { ResourcesSection } from './components/ResourcesSection';
import { Footer } from './components/Footer';
import { NewPage } from './components/NewPage';
import { ManagementCouncilPage } from './components/ManagementCouncilPage';
import { CampusPage } from './components/CampusPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'campus') {
    return <CampusPage onNavigate={navigate} currentPage={currentPage} />;
  }
  
  if (currentPage === 'newPage') {
    return (
       <div className="bg-[#0f293b] text-white min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Header onNavigate={navigate} />
            <NewPage
              onNavigate={navigate}
              title="Личный кабинет"
              content="Эта страница находится в разработке. Здесь будет ваш личный кабинет."
            />
          </div>
          <Footer />
        </div>
    );
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case 'management':
        return <ManagementCouncilPage />;
      case 'home':
      default:
        return (
          <main>
            <NewsSection />
            <EventsSection />
            <ManagementSection />
            <ProjectsSection />
            <InitiativeBanner />
            <ResourcesSection />
          </main>
        );
    }
  };

  return (
    <div className="bg-[#0f293b] text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Header onNavigate={navigate} />
        <Hero onNavigate={navigate} currentPage={currentPage} />
        {renderPageContent()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
