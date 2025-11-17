
import React from 'react';
import { NEWS_ARTICLES, NEWS_CATEGORIES } from '../constants';
import { FilterSidebar } from './FilterSidebar';
import { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="bg-[#1e3a4c] rounded-lg overflow-hidden">
    <img src={article.imageUrl} alt={article.description} className="w-full h-48 object-cover" />
    <div className="p-4">
      <p className="text-gray-400 text-sm mb-2">{article.date}</p>
      <p className="text-white">{article.description}</p>
    </div>
  </div>
);

export const NewsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10">Цифровые новости</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <FilterSidebar categories={NEWS_CATEGORIES} activeCategory="Тюмень в рейтингах и оценках" />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};
