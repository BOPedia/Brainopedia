import React, { useState, useEffect } from 'react';
import { CoreSymptoms } from './CoreSymptoms';
import { SocialCommunication } from './SocialCommunication';
import { RepetitiveBehaviors } from './RepetitiveBehaviors';
import { AdditionalCharacteristics } from './AdditionalCharacteristics';
import { StrengthsAbilities } from './StrengthsAbilities';

interface ASDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ASDSymptoms({ setCurrentArticle, initialTab }: ASDSymptomsProps) {
  // FIX: Default to 'core' so the landing page isn't empty
  const [activeTab, setActiveTab] = useState(initialTab || 'core');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const tabs = [
    { id: 'core', label: 'Core Symptoms' },
    { id: 'social', label: 'Social Communication' },
    { id: 'repetitive', label: 'Restricted/Repetitive Behaviors' },
    { id: 'additional', label: 'Additional Characteristics' },
    { id: 'strengths', label: 'Strengths & Abilities' },
  ];

  return (
    <article className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section: Matches the "Sleek" Living Standard */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#0c264d] font-spartan">
          Autism: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan"
        >
          <span className="text-lg">←</span>All About Autism
        </button>
      </div>

      {/* THE LINE: Horizontal divider that anchors the header */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 mb-8" />

      {/* Tab Navigation: 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-3 rounded-lg font-bold text-sm transition-all duration-200 shadow-sm font-spartan ${
              activeTab === tab.id
                ? 'bg-[#2abcd4] text-white shadow-md' // Using your teal/cyan active color
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Area */}
      <div className="animate-fadeIn">
        {activeTab === 'core' && <CoreSymptoms />}
        {activeTab === 'social' && <SocialCommunication />}
        {activeTab === 'repetitive' && <RepetitiveBehaviors />}
        {activeTab === 'additional' && <AdditionalCharacteristics />}
        {activeTab === 'strengths' && <StrengthsAbilities />}
      </div>

      {/* Bottom back button: Simplified for cleaner exit */}
      <div className="flex justify-end mt-12 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan"
        >
          <span className="text-lg">←</span>All About Autism
        </button>
      </div>
    </article>
  );
}