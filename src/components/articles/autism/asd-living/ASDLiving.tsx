import React, { useState, useEffect } from 'react';
import { ASDReferences } from '../ASDReferences';
import { LifespanContent } from './LifespanContent';
import { DailyLifeContent } from './DailyLifeContent';
import { RelationshipsContent } from './RelationshipsContent';
import { EducationEmploymentContent } from './EducationEmploymentContent';
import { MentalHealthContent } from './MentalHealthContent';
import { IdentityCommunityContent } from './IdentityCommunityContent';

interface ASDLivingProps {
  setCurrentArticle?: (id: string) => void;
  initialTab?: string;
}

export function ASDLiving({ setCurrentArticle, initialTab }: ASDLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'lifespan');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  // --- ADD THIS DEFINITION HERE ---
  const BackButton = () => (
    <button 
      onClick={() => setCurrentArticle?.('autism')}
      className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
    >
      <span className="text-xl">←</span>
      All About Autism
    </button>
  );

  const tabs = [
    { id: 'lifespan', label: 'Across the Lifespan' },
    { id: 'daily-life', label: 'Daily Life & Functioning' },
    { id: 'relationships', label: 'Relationships & Social' },
    { id: 'education-employment', label: 'Education & Employment' },
    { id: 'mental-health', label: 'Mental Health & Wellbeing' },
    { id: 'identity-community', label: 'Identity & Community' }
  ];

  function renderTabContent() {
    switch (activeTab) {
      case 'lifespan': return <LifespanContent />;
      case 'daily-life': return <DailyLifeContent />;
      case 'relationships': return <RelationshipsContent />;
      case 'education-employment': return <EducationEmploymentContent />;
      case 'mental-health': return <MentalHealthContent />;
      case 'identity-community': return <IdentityCommunityContent />;
      default: return <LifespanContent />;
    }
  }

  return (
    <article className="max-w-6xl">
      {/* --- PAGE HEADER SECTION --- */}
      {/* Updated the text to match "Living with ASD" standards */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          Autism: Daily Living
        </h1>

        <BackButton />
      </div>

      {/* Tab Navigation Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-4 rounded-lg text-sm transition-colors font-bold shadow-sm ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>

      {/* References Section */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-12" />
      <div className="bg-white bg-opacity-50 p-8 rounded-lg">
        <h3 className="font-bold mb-6 text-xl text-[#0c264d]">References</h3>
        <ASDReferences />
      </div>

      <div className="flex justify-end mt-12 mb-6">
        <BackButton />
      </div>
    </article>
  );
}