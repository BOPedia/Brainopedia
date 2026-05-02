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
  // 1. State management
  const [activeTab, setActiveTab] = useState(initialTab || 'lifespan');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  // 2. Tab names updated to match your screenshot exactly
  const tabs = [
    { id: 'lifespan', label: 'Across the Lifespan' },
    { id: 'daily-life', label: 'Daily Life & Functioning' },
    { id: 'relationships', label: 'Relationships & Social' },
    { id: 'education-employment', label: 'Education & Employment' },
    { id: 'mental-health', label: 'Mental Health & Wellbeing' },
    { id: 'identity-community', label: 'Identity & Community' }
  ];

  // 3. Content rendering logic
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
      {/* Top Header */}
{/* --- PAGE HEADER SECTION --- */}
      {/* Replicating the exact Support & Services header pattern */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          Autism: Daily Living
        </h1>

        <BackButton />
      </div>

      {/* Modern Grid Tabs (Matches Screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-3 rounded-lg font-bold text-sm transition-all shadow-sm ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white shadow-md'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="animate-fadeIn min-h-[400px]">
        {renderTabContent()}
      </div>

      {/* References */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl font-spartan">References</h2>
        <div className="text-base">
          <ASDReferences />
        </div>
      </section>

      {/* Bottom Back Button */}
      <div className="flex justify-end mt-12 mb-6 border-t border-gray-100 pt-8">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>
    </article>
  );
}