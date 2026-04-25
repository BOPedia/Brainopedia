import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LifespanContent } from './LifespanContent';
import { DailyLifeContent } from './DailyLifeContent';
import { RelationshipsContent } from './RelationshipsContent';
import { EducationEmploymentContent } from './EducationEmploymentContent';
import { MentalHealthContent } from './MentalHealthContent';
import { IdentityCommunityContent } from './IdentityCommunityContent';
import { ASDReferences } from '../ASDReferences'; // Adjusted path

interface ASDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function ASDLiving({ setCurrentArticle }: ASDLivingProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // URL-based tabbing
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get('tab') || 'lifespan';

  const tabs = [
    { id: 'lifespan', label: 'Across the Lifespan' },
    { id: 'daily-life', label: 'Daily Life & Functioning' },
    { id: 'relationships', label: 'Relationships & Social' },
    { id: 'education-employment', label: 'Education & Employment' },
    { id: 'mental-health', label: 'Mental Health & Wellbeing' },
    { id: 'identity-community', label: 'Identity & Community' },
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
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#0c264d]">Autism: Living with Autism</h1>
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] text-[#0c264d] px-6 py-3 rounded-lg font-bold hover:bg-[#0c264d] hover:text-white transition-all"
        >
          ← All About Autism
        </button>
      </div>

      {/* Modern Grid Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(`?tab=${tab.id}`)}
            className={`px-4 py-3 rounded-lg font-bold text-sm transition-all ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white shadow-md'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="animate-fadeIn min-h-[400px]">
        {renderTabContent()}
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm">
          <ASDReferences />
        </div>
      </section>
    </article>
  );
}