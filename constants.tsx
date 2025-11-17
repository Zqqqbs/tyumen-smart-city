import React from 'react';
import { NewsArticle, EventItem, ManagementStep, Project, Resource } from './types';

export const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);

export const BookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M4 19.5A2.5 2.5 0 0 1 1.5 17V7c0-1.5 1-2.5 2.5-2.5"/><path d="M20 7h-5.5a2.5 2.5 0 0 0-2.5 2.5V22"/></svg>
);
export const WalletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12V7H5a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2v4Z"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
);

export const NEWS_ARTICLES: NewsArticle[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/news1/600/400', date: '01.05.2025 19:45', description: 'Краткое описание новости' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/news2/600/400', date: '01.05.2025 19:45', description: 'Краткое описание новости' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/news3/600/400', date: '01.05.2025 19:45', description: 'Краткое описание новости' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/news4/600/400', date: '01.05.2025 19:45', description: 'Краткое описание новости' },
];

export const NEWS_CATEGORIES = ['Все', 'Тюмень в рейтингах и оценках', 'Новые цифровые сервисы', 'Новости бизнеса', 'Развитие цифровых сервисов'];

export const EVENTS: EventItem[] = [
  { id: 1, title: 'Календарь событий в городе', bgColor: 'bg-pink-200', textColor: 'text-gray-800', colSpan: 2, rowSpan: 2 },
  { id: 2, title: 'Центр робототехники и АСУ зовет вас на «День цифры»', imageUrl: 'https://picsum.photos/seed/event2/600/400', bgColor: 'bg-sky-200', textColor: 'text-gray-800' },
  { id: 3, title: 'Ждем руководителей ИТ-компаний на встрече ИТ-сообщества', imageUrl: 'https://picsum.photos/seed/event3/600/400', bgColor: 'bg-[#1e3a4c]', textColor: 'text-white' },
  { id: 4, title: 'Приглашаем тюменцев повысить квалификацию или освоить новую профессию в области цифровых технологий', imageUrl: 'https://picsum.photos/seed/event4/600/400', bgColor: 'bg-[#1e3a4c]', textColor: 'text-white' },
  { id: 5, title: 'Тюменцы могут участвовать в новом сезоне Международного чемпионата по битве роботов', imageUrl: 'https://picsum.photos/seed/event5/600/400', bgColor: 'bg-gray-300', textColor: 'text-gray-800' },
];

export const EVENT_CATEGORIES = ['Все', 'Конференции и саммиты', 'Хакатоны', 'Выставки и демо-дни', 'Акселератор', 'Стартап-чемпионаты', 'Цифровые фестивали', 'Технические воркшопы'];

export const MANAGEMENT_STEPS: ManagementStep[] = [
    {
      id: 1,
      icon: <LightbulbIcon className="text-yellow-400 mb-4" />,
      title: "Предлагайте идеи",
      description: "Возможно, именно ваш проект будет реализован следующим",
      stat1_val: "XX Идей",
      stat1_desc: "находятся на рассмотрение",
      stat2_val: "XX Проектов",
      stat2_desc: "реализовано",
      buttonText: "Принять участие",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-gray-800"
    },
    {
      id: 2,
      icon: <BookIcon className="text-yellow-400 mb-4" />,
      title: "Получите одобрение",
      description: "Возможно, заявка на ваш проект будет реализован следующим",
      stat1_val: "XX Проектов",
      stat1_desc: "рассмотрено администрацией",
      stat2_val: "XX Идей",
      stat2_desc: "одобрено администрацией",
      buttonText: "Принять участие",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-gray-800"
    },
    {
      id: 3,
      icon: <WalletIcon className="text-yellow-400 mb-4" />,
      title: "Найдите спонсоров",
      description: "Или поддержите понравившийся проект сами. Его уже выдвинули?",
      stat1_val: "XX Проектов",
      stat1_desc: "проспонсировано администрацией",
      stat2_val: "XX Граждан",
      stat2_desc: "находятся спонсорами",
      buttonText: "Стать спонсором",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-gray-800"
    }
];

export const PROJECT_CATEGORIES = ['Все', 'Управление городом', 'Транспорт и логистика', 'Энергетика и экология', 'Безопасность и защита данных', 'ЖКХ и городская инфраструктура', 'Здравоохранение', 'Образование'];

export const PROJECT_IMAGES: Record<string, string[]> = {
    'Управление городом': [
        'https://picsum.photos/seed/manage1/400/300',
        'https://picsum.photos/seed/manage2/400/300',
    ],
    'Транспорт и логистика': [
        'https://picsum.photos/seed/transport1/400/300',
    ],
    'Здравоохранение': [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1887&auto=format&fit=crop',
    ],
    'Образование': [
        'https://picsum.photos/seed/edu1/400/300',
        'https://picsum.photos/seed/edu2/400/300',
    ],
};

export const PROJECTS: Project[] = [
    { id: 1, title: 'Цифровые проекты города', description: '', bgColor: 'bg-emerald-100', textColor: 'text-gray-800' },
    { id: 2, description: 'Краткое описание проекта', category: 'Управление городом' },
    { id: 3, description: 'Краткое описание проекта', category: 'Транспорт и логистика' },
    { id: 4, description: 'Краткое описание проекта', category: 'Здравоохранение' },
    { id: 5, description: 'Краткое описание проекта', category: 'Образование' },
];
  
export const RESOURCES: Resource[] = [
    { id: 1, icon: 'https://picsum.photos/seed/gov1/80/80', name: 'Правительство Российской Федерации' },
    { id: 2, icon: 'https://picsum.photos/seed/gov2/80/80', name: 'Правительство Тюменской области' },
    { id: 3, icon: 'https://picsum.photos/seed/gov3/80/80', name: 'Администрация города Тюмени' },
    { id: 4, icon: 'https://picsum.photos/seed/gov4/80/80', name: 'Тюменская городская Дума' },
    { id: 5, icon: 'https://picsum.photos/seed/app1/80/80', name: 'Тюмень наш дом' },
    { id: 6, icon: 'https://picsum.photos/seed/app2/80/80', name: 'Моя школа' },
    { id: 7, icon: 'https://picsum.photos/seed/app3/80/80', name: 'Мой терапевт 72' },
    { id: 8, icon: 'https://picsum.photos/seed/app4/80/80', name: 'Телемед 72' },
    { id: 9, icon: 'https://picsum.photos/seed/portal1/80/80', name: 'Портал услуг города Тюмени' },
    { id: 10, icon: 'https://picsum.photos/seed/portal2/80/80', name: 'Портал "Я решаю!"' },
    { id: 11, icon: 'https://picsum.photos/seed/portal3/80/80', name: 'Портал цифровых сервисов' },
    { id: 12, icon: 'https://picsum.photos/seed/portal4/80/80', name: 'Транспорт 72' },
];

export const FOOTER_LINKS = {
    'О проекте': ['Команда', 'Новости', 'FAQ', 'Партнёры'],
    'Участникам': ['Как создать проект', 'FAQ', 'Поддержка'],
    'SmartCity': ['Портал "Я решаю!"', 'Правительство Российской Федерации', 'Правительство Тюменской области', 'Администрация города Тюмени', 'Портал услуг города Тюмени', 'Тюменская городская Дума'],
    'Наши сервисы': ['Портал цифровых сервисов', 'Моя школа', 'Тюмень наш дом', 'Мой терапевт 72', 'Транспорт 72', 'Телемед 72']
};