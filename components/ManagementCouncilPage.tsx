import React, { useState } from 'react';
import { WorkingCommitteePage } from './WorkingCommitteePage';
import { MonitoringGroupPage } from './MonitoringGroupPage';

const councilMembers = [
    { name: 'Максим Викторович Афанасьев', role: 'Глава города Тюмень', imageUrl: 'https://i.ibb.co/Yy62v31/image.png' },
    { name: 'Имя Фамилия Отчество', role: 'Зам. главы по цифровизации', imageUrl: null },
    { name: 'Акупенко Леонид Николаевич', role: 'Руководитель комитета по IT', imageUrl: null },
    { name: 'Имя Фамилия Отчество', role: 'Глава дорожного департамента', imageUrl: null },
    { name: 'Имя Фамилия Отчество', role: 'Представитель образования и науки', imageUrl: null },
    { name: 'Имя Фамилия Отчество', role: 'Представитель партнеров от бизнеса', imageUrl: null },
    { name: 'Имя Фамилия Отчество', role: 'Общественник', imageUrl: null },
];

const strategySteps = [
    "Описание", "Описание", "Описание", "Описание", "Описание", "Описание", "Описание"
];

const roadmapSteps = [
    { title: "Заголовок", date: "МЕСЯЦ, ГОД" },
    { title: "Заголовок", date: "МЕСЯЦ, ГОД" },
    { title: "Заголовок", date: "МЕСЯЦ, ГОД" },
    { title: "Заголовок", date: "МЕСЯЦ, ГОД" },
    { title: "Заголовок", date: "МЕСЯЦ, ГОД" },
    { title: "Заголовок", date: "МЕСЯЦ, ГОД" },
];

const Tab: React.FC<{ active?: boolean, onClick: () => void, children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button onClick={onClick} className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
        active ? 'bg-sky-500 text-white' : 'bg-[#1e3a4c] text-gray-300 hover:bg-sky-600'
    }`}>
        {children}
    </button>
);

const CouncilMemberCard: React.FC<{ member: typeof councilMembers[0] }> = ({ member }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full bg-gray-300 mb-4 overflow-hidden flex items-center justify-center">
            {member.imageUrl ? (
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full bg-gray-500"></div>
            )}
        </div>
        <h4 className="font-bold text-white">{member.name}</h4>
        <p className="text-gray-400 text-sm">{member.role}</p>
    </div>
);

const CouncilPageContent: React.FC = () => {
    const [mainMember, ...otherMembers] = councilMembers;

    return (
        <>
            <section>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10">Состав совета</h2>
                <div className="bg-[#1e3a4c] rounded-lg p-8 md:flex gap-8 mb-12">
                    <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
                        <img src={mainMember.imageUrl} alt={mainMember.name} className="rounded-lg w-full object-cover" />
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold">{mainMember.name}</h3>
                        <p className="text-yellow-400 mb-6">{mainMember.role}</p>
                        <blockquote className="border-l-4 border-yellow-400 pl-6 text-xl italic text-gray-300">
                            "Цифровые технологии — это не будущее, это настоящее нашего города. Мы активно внедряем инновации, чтобы сделать жизнь горожан комфортнее и доступнее"
                        </blockquote>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10">
                   <CouncilMemberCard member={mainMember} />
                   {otherMembers.map((member, index) => (
                       <CouncilMemberCard key={index} member={member} />
                   ))}
                </div>
            </section>
            
            <section className="py-24">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">Стратегия развития</h2>
                <div className="relative pl-8">
                    <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-yellow-400"></div>
                    {strategySteps.map((step, index) => (
                        <div key={index} className="relative mb-8 last:mb-0">
                            <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-yellow-400 border-4 border-[#0f293b]"></div>
                            <p className="text-lg">{step}</p>
                        </div>
                    ))}
                </div>
            </section>

             <section className="py-16">
                 <h2 className="font-serif text-4xl md:text-5xl font-bold mb-20">Дорожная карта</h2>
                 <div className="relative flex justify-between items-end h-40 border-b-2 border-yellow-400/30">
                     {roadmapSteps.map((step, index) => (
                        <div key={index} className="relative flex-1 flex flex-col items-center text-center px-2">
                            <div
                                className="w-0.5 bg-yellow-400/80 mb-4"
                                style={{ height: `${[4, 6, 3, 5, 7, 4][index]}rem` }}
                            ></div>
                            <h4 className="font-bold">{step.title}</h4>
                            <p className="text-xs text-gray-400">{step.date}</p>
                        </div>
                     ))}
                 </div>
            </section>
        </>
    );
}

export const ManagementCouncilPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('council');

    const renderContent = () => {
        switch (activeTab) {
            case 'committee':
                return <WorkingCommitteePage />;
            case 'monitoring':
                return <MonitoringGroupPage />;
            case 'council':
            default:
                return <CouncilPageContent />;
        }
    };

    return (
        <main className="py-12">
            <div className="flex flex-wrap gap-4 mb-12">
                <Tab active={activeTab === 'council'} onClick={() => setActiveTab('council')}>Совет умного города</Tab>
                <Tab active={activeTab === 'committee'} onClick={() => setActiveTab('committee')}>Рабочий комитет</Tab>
                <Tab active={activeTab === 'monitoring'} onClick={() => setActiveTab('monitoring')}>Мониторинговая группа</Tab>
            </div>

            {renderContent()}
        </main>
    );
};