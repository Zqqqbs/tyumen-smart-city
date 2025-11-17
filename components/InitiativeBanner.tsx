
import React from 'react';

export const InitiativeBanner: React.FC = () => {
  return (
    <section className="py-12">
      <div className="bg-[#1e40af] p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="font-serif text-2xl font-bold mb-4">ПРОЕКТ ИНИЦИАТИВНОГО БЮДЖЕТИРОВАНИЯ «ТВОЙ БЮДЖЕТ»</h3>
          <p className="text-gray-200">
            Проект даёт жителям Тюмени возможность предлагать и поддерживать локальные проекты для улучшения города. Это практика активного участия граждан в городском развитии.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img src="https://picsum.photos/seed/budgetlogo/200/200" alt="Твой Бюджет" className="w-40 h-40 bg-white p-4 rounded-lg" />
        </div>
      </div>
    </section>
  );
};
