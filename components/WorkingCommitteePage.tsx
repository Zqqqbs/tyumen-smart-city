import React from 'react';

const committeeMembers = [
    { name: 'Имя Фамилия Отчество', role: 'Зам. главы города по цифровизации', isMain: true, quote: "Цифровизация — не прихоть, а необходимость. Мы внедряем современные решения, чтобы наш город стал умнее, а жизнь в нём — комфортнее для каждого жителя" },
    { name: 'Имя Фамилия Отчество', role: 'Зам. главы города по цифровизации', isMain: false },
    { name: 'Акупенко Леонид Николаевич', role: 'Руководитель комитета по информатизации', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Менеджеры проектов из комитета по IT', isMain: false },
    { name: 'Имя Фамилия Отчество', role: 'Представитель подрядчиков', isMain: false },
];

const functionalSteps = [
    "Реализация плана «Дорожной карты» Развития;",
    "Техподдержка инфраструктуры",
    "Развитие инициатив от науки, образования и бизнеса",
    "Работы с населением города по разъяснению приоритетов развития"
];

const CommitteeMemberCard: React.FC<{ member: typeof committeeMembers[0] }> = ({ member }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full bg-gray-500 mb-4"></div>
        <h4 className="font-bold text-white">{member.name}</h4>
        <p className="text-gray-400 text-sm">{member.role}</p>
    </div>
);

export const WorkingCommitteePage: React.FC = () => {
    const mainMember = committeeMembers.find(m => m.isMain);
    const otherMembers = committeeMembers.filter(m => !m.isMain);

    return (
        <>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10">Рабочий комитет</h2>
            
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
           
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
               {otherMembers.map((member, index) => (
                   <CommitteeMemberCard key={index} member={member} />
               ))}
            </div>

            <section className="py-24">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">Функционал</h2>
                <div className="relative pl-8 max-w-3xl">
                    <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-yellow-400"></div>
                    {functionalSteps.map((step, index) => (
                        <div key={index} className="relative mb-8 last:mb-0">
                            <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-yellow-400 border-4 border-[#0f293b]"></div>
                            <p className="text-xl">{step}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};