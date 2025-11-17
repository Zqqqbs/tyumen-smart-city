import React from 'react';
import { Footer } from './Footer';

interface CampusPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; active?: boolean; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, active, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-white text-lg py-2 transition-colors hover:text-yellow-300 ${active ? 'border-b-2 border-yellow-400' : ''}`}
  >
    {children}
  </a>
);

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
);

const CampusPageHeader = () => (
    <header className="py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <img src="https://i.postimg.cc/GtNNrpMg/3-26.png" alt="City Logo" className="h-10 w-10 object-contain" />
            <span className="text-white text-xl md:text-2xl font-bold font-serif">SMART CITY TYUMEN</span>
        </div>
        <div className="flex items-center space-x-6">
            <a href="#" className="transition-opacity hover:opacity-80"><img src="https://i.postimg.cc/KvRB03jT/icons8_vk_50.png" alt="VK" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} /></a>
            <a href="#" className="transition-opacity hover:opacity-80"><img src="https://i.postimg.cc/nLM1Hyzc/icons8-telegram-50.png" alt="Telegram" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} /></a>
            <a href="#" className="transition-opacity hover:opacity-80"><img src="https://i.postimg.cc/jSMXYxsW/icons8-odnoklassniki-v-kruge-50.png" alt="Odnoklassniki" className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} /></a>
        </div>
    </header>
);

const HeroPanel: React.FC<{ children: React.ReactNode, className?: string, style?: React.CSSProperties }> = ({ children, className = '', style }) => (
    <div className={`relative bg-cover bg-center rounded-lg overflow-hidden ${className}`} style={style}>
        <div className="absolute inset-0 bg-black/50 flex items-end p-6 md:p-8">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">{children}</h2>
        </div>
    </div>
);


const CampusHero = () => (
    <section>
        <div className="h-[60vh] grid grid-cols-5 grid-rows-2 gap-4">
            <HeroPanel className="col-span-3 row-span-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')" }}>
                Обучение в действии!
            </HeroPanel>
            
            <div className="bg-yellow-400 text-[#0f293b] p-6 md:p-8 flex items-center justify-center col-span-3 row-span-1 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">Город, где технологии начинают путь</h2>
            </div>

            <div className="col-span-2 row-span-2 grid grid-rows-2 gap-4">
                 <HeroPanel style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}>
                    Твори.<br />Разрабатывай.<br />Реализуй.
                </HeroPanel>
                 <HeroPanel style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop')" }}>
                    Кто решает, как развивается Тюмень?
                </HeroPanel>
            </div>
        </div>
    </section>
);


const AnnouncementsSection = () => (
    <section className="py-16 md:py-24">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Объявление</h2>
            <a href="#" className="text-yellow-400 hover:underline">+рассылка на почту для группы "студенты"</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-cyan-200 text-gray-800 p-6 rounded-lg flex flex-col justify-start min-h-[200px]"><h3 className="font-bold text-2xl">Объявления для студентов</h3></div>
            {Array(5).fill(0).map((_, i) => (<div key={i} className="bg-gray-400/20 p-6 rounded-lg flex items-end min-h-[200px]"><p className="text-white">Краткое описание новости</p></div>))}
        </div>
    </section>
);

const TestingSection = () => (
    <section className="py-16 md:py-24">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Тестирование</h2>
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-md transition-colors">Пройти тестирование</button>
        </div>
        <div className="bg-[#1e3a4c] p-8 rounded-lg mb-8"><p>Тестирование помогает каждому участнику проекта определить свои профессиональные навыки, склонности к определённым ролям в команде (лидер, аналитик, разработчик, маркетолог и др.), а также уровень эмоционального интеллекта и готовности к совместной работе</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1e3a4c] p-8 rounded-lg"><h3 className="font-bold text-xl mb-4">Формат</h3><ul className="space-y-2 list-disc list-inside text-gray-300"><li>Интерактивный онлайн-тест</li><li>Игровая форма (сценарий)</li><li>Индивидуальный портрет студента</li><li>Рекомендации по выбору роли в проекте</li></ul></div>
            <div className="bg-[#1e3a4c] p-8 rounded-lg"><h3 className="font-bold text-xl mb-4">Цель</h3><p className="text-gray-300">Повысить эффективность командообразования и помочь студентам найти свое место в проекте</p></div>
        </div>
    </section>
);

const StudentStoriesSection = () => {
    const students = [
        { name: 'Владимир, 21 год', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Максим, 21 год', img: 'https://images.unsplash.com/photo-1542327897-4141c5326240?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Матвей, 21 год', img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Игорь, 21 год', img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop' },
    ];
    return (
        <section className="py-16 md:py-24 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Истории студентов</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {students.map(s => (<div key={s.name} className="flex flex-col items-center"><img src={s.img} alt={s.name} className="w-40 h-40 rounded-full object-cover mb-4"/><p className="font-bold">{s.name}</p></div>))}
            </div>
            <button className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-8 rounded-md transition-colors">Посмотреть больше</button>
        </section>
    );
};

const AgendaSection = () => {
    const agendaItems = [
        { title: "Заказы бизнеса", icon: "🏢", points: ["Проекты от государственных органов и крупных организаций","Цифровизация городских услуг", "Инфраструктурные проекты", "Кейсы от партнёров", "Административные решения"] },
        { title: "Инициативные проекты", icon: "💡", points: ["Инновационные идеи от студентов и молодых специалистов","ИТ-решения", "Молодёжная политика", "Предпринимательские проекты", "Стартап-инициативы"] },
        { title: "Продолжение работ", icon: "🔄", points: ["Развитие и масштабирование существующих проектов", "Расширение функционала", "Дополнительное финансирование", "Новые рынки и партнёры", "Масштабирование решений"] },
    ];
    return (
        <section className="py-16 md:py-24">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Актуальная повестка</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {agendaItems.map(item => (
                    <div key={item.title} className="bg-[#1e3a4c] p-8 rounded-lg flex flex-col">
                         <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                        <ul className="text-sm text-gray-300 space-y-2 mb-6 flex-grow">
                            {item.points.map(p => <li key={p}>• {p}</li>)}
                        </ul>
                        <button className="mt-auto bg-cyan-200 hover:bg-cyan-300 text-gray-800 font-bold py-2.5 px-4 rounded-md transition-colors self-start">Подать заявку</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

const CurrentProjectsSection = () => (
    <section className="py-16 md:py-24">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Текущие проекты в повестке</h2>
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-300 hover:text-white"><SearchIcon/> Поиск проектов</button>
                <button className="flex items-center gap-2 text-gray-300 hover:text-white"><FilterIcon/> Все категории</button>
                <button className="flex items-center gap-2 text-gray-300 hover:text-white">Все статусы</button>
            </div>
        </div>
        <div className="space-y-8">
            <div className="bg-[#1e3a4c] p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Цифровизация городских услуг</h3>
                    <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">в работе</span>
                </div>
                <p className="text-gray-300 mb-4 max-w-4xl">Создание единой платформы для получения муниципальных услуг онлайн. Цифровизация услуг для повышения качества жизни и управляемой инфраструктуры через единую платформу взаимодействия власти, бизнеса и граждан.</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Цифровые технологии</span>
                    <div className="flex items-center gap-4"><span>Администрация города</span><span>15.01.2025</span></div>
                </div>
            </div>
            <div className="bg-[#1e3a4c] p-6 rounded-lg">
                 <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Цифровизация городских услуг</h3>
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Небезопасно</span>
                </div>
                <p className="text-gray-300 mb-4 max-w-4xl">Создание единой платформы для получения муниципальных услуг онлайн. Цифровизация услуг для повышения качества жизни и управляемой инфраструктуры через единую платформу взаимодействия власти, бизнеса и граждан.</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Цифровые технологии</span>
                    <div className="flex items-center gap-4"><span>Администрация города</span><span>15.01.2025</span></div>
                </div>
            </div>
        </div>
    </section>
);

const TeamBuildingSection = () => (
    <section className="py-16 md:py-24">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Командообразование</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 bg-[#1e3a4c] p-8 rounded-lg">
                 <h3 className="text-2xl font-bold mb-2">Планируйте свою карьеру</h3>
                 <p className="text-gray-300 mb-6">в системе умного города</p>
                 <p className="text-gray-300 mb-6">Присоединяйтесь к растущему сообществу профессионалов, которые формируют будущее нашего города через инновационные технологии и цифровые решения</p>
                 <div className="bg-cyan-200 text-gray-800 p-6 rounded-lg mb-6">
                     <h4 className="font-bold mb-4">Востребованные профессии:</h4>
                     <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                         <ul><li>• Разработчики IoT решений</li><li>• Специалисты по кибербезопасности</li><li>• DevOps-инженеры</li></ul>
                         <ul><li>• Аналитики больших данных</li><li>• UX/UI дизайнеры</li><li>• Архитекторы цифровых платформ</li></ul>
                     </div>
                 </div>
                 <div className="flex justify-between items-center mb-8 px-8">
                     <div className="text-center"><p className="font-bold text-2xl">17+</p><p className="text-sm text-gray-400">Работодателей</p></div>
                     <div className="text-center"><p className="font-bold text-2xl">Ежегодно</p><p className="text-sm text-gray-400">Ярмарка вакансий</p></div>
                 </div>
                 <button className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-md transition-colors">Зарегистрироваться</button>
            </div>
            <div className="lg:col-span-2 space-y-8">
                 <div className="bg-[#1e3a4c] p-6 rounded-lg"><h4 className="font-bold mb-2">Ближайшая ярмарка</h4><p className="text-sm">Ярмарка вакансий 2025<br/>19 декабря, 14:00<br/>ул. Пролетарская 2</p></div>
                 <div className="bg-[#1e3a4c] p-6 rounded-lg"><h4 className="font-bold mb-2">Наши команды</h4><p>Узнайте, какие команды будут участвовать</p><div className="flex justify-between my-2"><span className="text-sm">Зарегистрировано людей</span><span>172</span></div><div className="flex justify-between"><span className="text-sm">Зарегистрировано команд</span><span>12</span></div><button className="w-full mt-4 text-center text-sm bg-gray-700 hover:bg-gray-600 py-2 rounded">Посмотреть список всех команд</button></div>
            </div>
        </div>
    </section>
);

const CurrentTeamsSection = () => (
    <section className="py-16 md:py-24">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Текущие команды</h2>
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-300 hover:text-white"><SearchIcon/> Поиск команд</button>
                <button className="flex items-center gap-2 text-gray-300 hover:text-white">Все статусы</button>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6).fill(0).map((_, i) => (
            <div key={i} className="bg-[#1e3a4c] p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">Команда собрана</span>
                    { i === 1 && <button className="text-xs bg-gray-600 px-3 py-1 rounded">Набор в команду</button>}
                </div>
                <h3 className="text-xl font-bold mb-2">Умные светофоры</h3>
                <p className="text-sm text-gray-300 mb-4">Система адаптивного управления светофорами для оптимизации трафика и снижения пробок в реальном времени.</p>
                <p className="text-sm text-gray-400 mb-4">Лидер команды: Матвей</p>
                 { i === 1 && <div className="flex gap-2"><span className="text-xs border border-gray-500 rounded-full px-2 py-0.5">Нужны</span><span className="text-xs border border-gray-500 rounded-full px-2 py-0.5">Backend</span><span className="text-xs border border-gray-500 rounded-full px-2 py-0.5">Разработка</span></div>}
            </div>
            ))}
        </div>
    </section>
);

const timelineData = [
  {
    month: 'ЯНВАРЬ 2024',
    items: [
      { date: '25.01.2024', text: 'Школа лидера', color: 'bg-[#2a4157]' },
      { date: '05.02.2024', text: 'Встречи команды с бизнес-заказчиками, руководителями и менторами...', color: 'bg-gray-600' },
      { date: '05.02.2024', text: 'Сформирована вторая итерация команд-участников...', color: 'bg-gray-600' }
    ]
  },
  {
    month: 'ФЕВРАЛЬ 2024',
    items: [
      { date: '04.03.2024 - 31.03.2024', text: 'СПРИНТ 4, 5, 6, 7, 8', color: 'bg-orange-500', shape: 'circle' },
      { date: '05.02.2024 - 25.02.2024', text: 'СПРИНТ 1, 2, 3', color: 'bg-green-500', shape: 'circle' },
      { date: '06.02.2024 - 05.03.2024', text: 'Проведение встреч групп наставников для команд-участников...', color: 'bg-[#2a4157]' }
    ]
  },
   {
    month: 'МАРТ 2024',
    items: [
      { date: '19.03.2024', text: 'Коллективная рефлексия по доработке концепции, потенциальным рискам, точкам разработки', color: 'bg-blue-800' },
      { date: 'Проведение консультаций для команд-участников проектной деятельности', color: 'bg-green-600' },
      { date: 'Проведение консультаций для команд-участников проектной деятельности', color: 'bg-green-600' },
      { date: 'Проведение консультаций для команд-участников проектной деятельности', color: 'bg-green-600' },
    ]
  },
  {
    month: 'МАЙ 2024',
    items: [
      { date: '15.05.2024', text: 'Презентация «Коммерциализация и упаковка»', color: 'bg-orange-500', shape: 'circle' },
      { date: 'до 26.05.2024', text: 'Организация отраслевой экспертизы', color: 'bg-green-600' },
      { date: '05.05.2024 - 06.05.2024', text: 'Сессия с коллективным обсуждением промежуточных результатов', color: 'bg-orange-500' },
    ]
  },
  {
    month: 'ИЮНЬ 2024',
    items: [
      { date: '20.05.2024', text: '«Сражение стартапов» Россия, Белоруссия, Германия, Китай, Казахстан. Робобатл vs Дрон-биатлон', color: 'bg-blue-800' },
      { date: '23.05.2024', text: 'Конкурс «Доработанный прототип» или MVP', color: 'bg-green-600' },
      { date: '17.06.2024', text: 'Конкурс научных студенческих работ', color: 'bg-orange-500' },
    ]
  },
   {
    month: 'ИЮЛЬ 2024',
    items: [
      { date: '03.07.2024', text: 'Открытая защита проектов «Pitch Day» в Точке кипения с трансляцией на английский и русский', color: 'bg-blue-800' },
      {}, 
      { date: '10.06.2024', text: '«Сражение стартапов» Россия, Белоруссия, Германия, Китай, Казахстан. Робобатл vs Дрон-биатлон', color: 'bg-blue-800' },
    ]
  },
];

interface TimelineItemType {
    date?: string;
    text?: string;
    color?: string;
    shape?: 'circle';
}

const TimelineItem: React.FC<{item: TimelineItemType}> = ({ item }) => (
    <div className={`text-center text-xs leading-tight flex flex-col justify-center items-center font-medium min-h-[144px] ${item.color || ''} ${item.shape === 'circle' ? 'rounded-full w-36 h-36 p-2' : 'rounded-lg w-48 p-4'}`}>
        {item.date && (
            <>
                <strong className="font-bold block mb-1">{item.date}</strong>
                <span>{item.text}</span>
            </>
        )}
    </div>
);

const PathSegment: React.FC<{ month: string; direction: 'right' | 'left' }> = ({ month, direction }) => (
  <div className="h-24 w-full max-w-5xl mx-auto relative">
    <div className={`absolute h-12 w-full border-orange-400 ${direction === 'right' ? 'border-r-4 border-b-4 rounded-br-3xl' : 'border-l-4 border-b-4 rounded-bl-3xl'}`}></div>
    <div className={`absolute top-12 h-12 w-full border-orange-400 ${direction === 'right' ? 'border-l-4' : 'border-r-4'}`}></div>
    <div className="absolute top-12 left-0 w-full border-t-4 border-orange-400"></div>
    <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f293b] px-4 text-orange-400 text-sm font-semibold whitespace-nowrap">{month}</div>
  </div>
);

const TimelineSection = () => (
    <section className="py-16 md:py-24 overflow-hidden">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-20 text-center">Таймлайн</h2>
        <div className="flex flex-col items-center gap-4">
            {timelineData.map((row, index) => (
                <React.Fragment key={index}>
                    <div className="flex justify-between items-stretch w-full max-w-5xl mx-auto gap-4">
                        {row.items.map((item, itemIndex) => <TimelineItem key={itemIndex} item={item} />)}
                    </div>
                    {index < timelineData.length - 1 && (
                        <PathSegment month={row.month} direction={index % 2 === 0 ? 'right' : 'left'} />
                    )}
                </React.Fragment>
            ))}
        </div>
    </section>
);


const UsefulResourcesSection = () => {
    const resources = [
        { name: "Шаблон презентации", icon: "P", color: "bg-red-500" },
        { name: "Требования к презентации", icon: "W", color: "bg-blue-500" },
        { name: "Работа с гипотезами", icon: "W", color: "bg-blue-500" },
        { name: "Шаблон экономики", icon: "X", color: "bg-green-500" },
    ];
    return (
        <section className="py-16 md:py-24">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Полезные ресурсы</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {resources.map(r => (
                    <div key={r.name} className="bg-[#1e3a4c] p-6 rounded-lg flex flex-col items-center justify-center text-center h-40">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-3xl ${r.color} mb-4`}>{r.icon}</div>
                        <p>{r.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const CampusPage: React.FC<CampusPageProps> = ({ onNavigate, currentPage }) => {
    return (
        <div className="bg-[#0f293b] text-white min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <CampusPageHeader />
                <CampusHero />
                
                <nav className="my-8 flex flex-wrap gap-x-8 gap-y-2 border-b-2 border-gray-700/50 pb-4">
                    <NavLink href="#" active={currentPage === 'home'} onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Главная</NavLink>
                    <NavLink href="#" active={currentPage === 'management'} onClick={(e) => { e.preventDefault(); onNavigate('management'); }}>Управление "Умным городом"</NavLink>
                    <NavLink href="#" active={currentPage === 'campus'} onClick={(e) => { e.preventDefault(); onNavigate('campus'); }}>Межвузовский кампус</NavLink>
                    <NavLink href="#" onClick={(e) => e.preventDefault()}>Технопредпринимательство</NavLink>
                </nav>

                <main>
                     <AnnouncementsSection />
                     <TestingSection />
                     <StudentStoriesSection />
                     <AgendaSection />
                     <CurrentProjectsSection />
                     <TeamBuildingSection />
                     <CurrentTeamsSection />
                     <TimelineSection />
                     <UsefulResourcesSection />
                </main>
            </div>
            <Footer />
        </div>
    );
};