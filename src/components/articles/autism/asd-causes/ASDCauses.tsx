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
  {/* Header Section: Title on Left, Sleek Button on Right */}
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold text-[#0c264d] font-spartan">Autism: Causes & Risk Factors</h1>
    <button 
      onClick={() => navigate('/autism')}
      className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan"
    >
      <span className="text-lg">←</span> All About Autism
    </button>
  </div>

  {/* The subtle horizontal line that anchors the header */}
  <hr className="border-t-2 border-[#0c264d] border-opacity-10 mb-8" />

  {/* ... rest of your code (Tabs and Content) */}

  
      {/* Standardized Grid Layout (Matches ASDLiving) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => navigate(`?tab=${tab.id}`)}
            className={`px-4 py-3 rounded-lg font-bold text-sm transition-all duration-200 shadow-sm font-spartan ${
              activeTab === tab.id
                ? 'bg-[#2abcd4] text-white shadow-md'
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
