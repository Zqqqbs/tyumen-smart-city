import React from 'react';

const monitoringGroupMembers = [
    { name: 'Имя Фамилия Отчество', role: 'Руководитель ЦУПа', isMain: true, quote: "Цифровые технологии уже сегодня меняют мир вокруг нас. Наш город не остаётся в стороне — мы внедряем инновации, чтобы создать безопасную, доступную и удобную для всех среду." },
    { name: 'Имя Фамилия Отчество', role: 'Руководитель ЦУПа', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Аналитик', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Аналитик', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Аналитик', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Представитель общественной интегратор', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Социолог', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Социолог', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Маркетолог', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Специалист из университета', isMain: false },
];

const ratings = [
    { number: '1', org: 'Минстрой', text: 'Рейтинг IQ городов” среди крупных городов с населением от 250 тыс.', year: '2024 год' },
    { number: '7', org: 'Минцифры', text: 'Рейтинг субъектов РФ по внедрению платформы обратной связи', year: '2025 год' },
    { number: '2', org: 'Минстрой', text: 'Индекс качества городской среды среди крупных городов с населением от 250 тыс.', year: '2025 год' },
    { number: '3', org: 'Журнал Forbes', text: 'Рейтинг лучших городов для бизнеса', year: '2024 год' },
    { number: '20', org: 'Минстрой', text: 'Светофор Оценки эффективности строительного и цифрового развития отрасли субъектами РФ', year: '2025 год' },
    { number: '7', org: 'Уральский институт управления-филиала РАНХиГС', text: 'Рейтинг социально-экономической устойчивости муниципалитета Тюмени', year: '2025 год' },
    { number: '10', org: 'Минстрой', text: 'Оценка эффективности ведения ИСУП субъектами РФ', year: '2025 год' },
    { number: '23/11', org: 'Минтранс', text: 'Рейтинг субъектов РФ по достижению показателей цифровой зрелости в сфере транспорта', year: '2025 год' },
];

const inDevelopmentItems = Array(8).fill('Название');

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const MemberCard: React.FC<{ member: typeof monitoringGroupMembers[0] }> = ({ member }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full bg-gray-500 mb-4"></div>
        <h4 className="font-bold text-white">{member.name}</h4>
        <p className="text-gray-400 text-sm">{member.role}</p>
    </div>
);


const RatingCard: React.FC<{ rating: typeof ratings[0] }> = ({ rating }) => (
    <div className="bg-[#1e3a4c] p-6 rounded-lg flex gap-6">
        <div className="font-serif font-black text-6xl text-white">{rating.number}</div>
        <div>
            <h4 className="font-bold text-white mb-1">{rating.org}</h4>
            <p className="text-gray-300 text-sm mb-2">{rating.text}</p>
            <p className="text-gray-400 text-xs">{rating.year}</p>
        </div>
    </div>
);

export const MonitoringGroupPage: React.FC = () => {
    const mainMember = monitoringGroupMembers.find(m => m.isMain);
    const otherMembers = monitoringGroupMembers.filter(m => !m.isMain);

    return (
        <>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10">Мониторинговая группа</h2>
            
            {mainMember && (
                 <div className="bg-[#1e3a4c] rounded-lg p-8 md:flex items-center gap-8 mb-12">
                    <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0 flex justify-center">
                        <div className="w-52 h-52 rounded-full bg-gray-500"></div>
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold">{mainMember.name}</h3>
                        <p className="text-yellow-400 mb-6">{mainMember.role}</p>
                        <blockquote className="border-l-4 border-yellow-400 pl-6 text-lg italic text-gray-300">
                            "{mainMember.quote}"
                        </blockquote>
                    </div>
                </div>
            )}
           
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10">
               {otherMembers.map((member, index) => (
                   <MemberCard key={index} member={member} />
               ))}
            </div>

            <section className="py-24">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Рейтинги и позиции города Тюмень</h2>
                <p className="max-w-3xl mb-12 text-gray-300">"Первостепенная задача нашего комитета повышения города Тюмени в рейтингах для комфортной жизни в нашем городе"</p>
                <p className="mb-12 text-sm text-gray-400">Максим Викторович Афанасьев - глава города Тюмени</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ratings.map((rating, index) => (
                        <RatingCard key={index} rating={rating} />
                    ))}
                </div>
            </section>

             <section className="py-16">
                 <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">В процессе разработки</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                     {inDevelopmentItems.map((item, index) => (
                         <div key={index} className={`bg-[#1e3a4c] rounded-lg p-6 flex flex-col items-center justify-center text-center h-40 ${index === 7 ? 'border-2 border-sky-500' : ''}`}>
                            <CameraIcon />
                            <p className="mt-4 text-sm font-medium">{item}</p>
                         </div>
                     ))}
                 </div>
            </section>
        </>
    );
};