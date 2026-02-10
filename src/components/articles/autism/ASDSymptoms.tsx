import React from 'react';
import { ASDReferences } from './ASDReferences';
import { CoreSymptoms } from './asd-symptoms/CoreSymptoms';
import { SocialCommunication } from './asd-symptoms/SocialCommunication';
import { RepetitiveBehaviors } from './asd-symptoms/RepetitiveBehaviors';
import { AdditionalCharacteristics } from './asd-symptoms/AdditionalCharacteristics';
import { StrengthsAbilities } from './asd-symptoms/StrengthsAbilities';

interface ASDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function ASDSymptoms({ setCurrentArticle }: ASDSymptomsProps) {
  const [activeTab, setActiveTab] = React.useState('core');

  const tabs = [
    { id: 'core', label: 'Core Symptoms', emoji: '' },
    { id: 'social', label: 'Social Communication', emoji: '' },
    { id: 'repetitive', label: 'Restricted/Repetitive Behaviors', emoji: '' },
    { id: 'additional', label: 'Additional Characteristics', emoji: '' },
    { id: 'strengths', label: 'Strengths & Abilities', emoji: '' },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-3xl">
          Autism: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-md text-sm transition-colors ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === 'core' && <CoreSymptoms />}
        {activeTab === 'social' && <SocialCommunication />}
        {activeTab === 'repetitive' && <RepetitiveBehaviors />}
        {activeTab === 'additional' && <AdditionalCharacteristics />}
        {activeTab === 'strengths' && <StrengthsAbilities />}
      </div>

      {/* Bottom back button */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <ASDReferences />
        </div>
      </section>
    </article>
  );
}
