import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { EnvironmentalFactors } from './EnvironmentalFactors';
import { GeneticsHeredity } from './GeneticsHeredity';
import { BrainDevelopment } from './BrainDevelopment';
import { MythsMisconceptions } from './MythsMisconceptions';
import { CurrentResearch } from './CurrentResearch';

export function ASDCauses() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extracts the tab from the URL (?tab=...)
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get('tab') || 'environmental';

  const tabs = [
    { id: 'environmental', label: 'Environmental Factors' },
    { id: 'brain', label: 'Brain Development' },
    { id: 'myths', label: 'Myths & Misconceptions' },
    { id: 'genetics', label: 'Genetics & Heredity' },
    { id: 'research', label: 'Current Research' },
  ];

  function renderContent() {
    switch (activeTab) {
      case 'environmental': return <EnvironmentalFactors />;
      case 'genetics': return <GeneticsHeredity />;
      case 'brain': return <BrainDevelopment />;
      case 'myths': return <MythsMisconceptions />;
      case 'research': return <CurrentResearch />;
      default: return <EnvironmentalFactors />;
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={() => navigate('/autism')} // Adjust path if your main page is different
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2 rounded-lg font-bold text-sm shadow-sm hover:bg-[#ffc133] transition-colors"
        >
          ← All About Autism
        </button>
      </div>

      <h1 className="text-3xl font-bold text-[#0c264d] mb-8">Autism: Causes & Risk Factors</h1>

      {/* The True Tabs Style */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(`?tab=${tab.id}`)}
            className={`px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 shadow-sm ${
              activeTab === tab.id
                ? 'bg-[#2abcd4] text-white shadow-md transform scale-105'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffc133]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Article Content */}
      <div className="animate-fadeIn">
        {renderContent()}
      </div>
    </div>
  );
}