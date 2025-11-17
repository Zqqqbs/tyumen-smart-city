
import React from 'react';
import { MANAGEMENT_STEPS } from '../constants';
import { ManagementStep } from '../types';

const StepCard: React.FC<{ step: ManagementStep }> = ({ step }) => (
  <div className="bg-[#1e3a4c] p-8 rounded-lg flex flex-col h-full">
    <div className="flex-grow">
      {step.icon}
      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
      <p className="text-gray-400 mb-6">{step.description}</p>
      <div className="grid grid-cols-2 gap-4 text-sm mb-8">
        <div>
          <p className="font-bold text-lg text-white">{step.stat1_val}</p>
          <p className="text-gray-400">{step.stat1_desc}</p>
        </div>
        <div>
          <p className="font-bold text-lg text-white">{step.stat2_val}</p>
          <p className="text-gray-400">{step.stat2_desc}</p>
        </div>
      </div>
    </div>
    <button className={`w-full py-3 rounded-md font-bold transition-colors ${step.buttonColor}`}>
      {step.buttonText}
    </button>
  </div>
);

export const ManagementSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="relative h-[40vh] md:h-[50vh] flex flex-col justify-center items-start text-white rounded-lg overflow-hidden p-8 md:p-12 mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/citymanage/1600/900')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Кто решает, как развивается Тюмень?</h2>
        </div>
      </div>

      <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Управляем городом вместе</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MANAGEMENT_STEPS.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
};
