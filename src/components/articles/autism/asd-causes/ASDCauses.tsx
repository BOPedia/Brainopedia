import React, { useState } from 'react';
import { ASDReferences } from '../ASDReferences';

// --- ACTUAL IMPORTS ---
// Matching your file system: Screenshot 2026-05-01 at 10.18.03 PM.jpg
import { EnvironmentalFactors } from './EnvironmentalFactors';
import { BrainDevelopment } from './BrainDevelopment';
import { MythsMisconceptions } from './MythsMisconceptions';
import { GeneticsHeredity } from './GeneticsHeredity';
import { CurrentResearch } from './CurrentResearch';

interface ASDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ASDCauses({ setCurrentArticle, initialTab }: ASDCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'environmental');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const tabs = [
    { id: 'environmental', label: 'Environmental Factors' },
    { id: 'brain', label: 'Brain Development' },
    { id: 'myths', label: 'Myths & Misconceptions' },
    { id: 'genetics', label: 'Genetics & Heredity' },
    { id: 'current-research', label: 'Current Research' }
  ];

  const BackButton = () => (
    <button 
      onClick={() => setCurrentArticle?.('autism')}
      className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
    >
      <span className="text-xl">←</span>
      All About Autism
    </button>
  );

  return (
    <article className="max-w-6xl">
      <style>
        {`sup { color: #10b981; }`}
      </style>
{/* --- PAGE HEADER SECTION --- */}
      {/* Replicating the exact Support & Services header pattern */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          Autism: Causes & Risk Factors
        </h1>

        <BackButton />
      </div>

      {/* --- 5-TAB NAVIGATION GRID --- */}
      {/* Layout verified in Screenshot 2026-05-01 at 10.13.53 PM.jpg */}
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

      {/* --- CONTENT SECTION --- */}
      <div className="space-y-8 min-h-[400px]">
        {activeTab === 'environmental' && <EnvironmentalFactors />}
        {activeTab === 'brain' && <BrainDevelopment />}
        {activeTab === 'myths' && <MythsMisconceptions />}
        {activeTab === 'genetics' && <GeneticsHeredity />}
        {activeTab === 'current-research' && <CurrentResearch />}
        
        {/* --- REFERENCES SECTION --- */} 
        {/* Wrapped in semi-transparent standard styling */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-12" />
        
        <div className="bg-white bg-opacity-50 p-8 rounded-lg">
          <h3 className="font-bold mb-6 text-xl text-[#0c264d]">References</h3>
          <ASDReferences />
        </div>
      </div>

      <div className="flex justify-end mt-12 mb-6">
        <BackButton />
      </div>
    </article>
  );
}