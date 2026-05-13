import React, { useState } from 'react';
import { ASDReferences } from '../ASDReferences';

// --- ACTUAL IMPORTS ---
// Matching your file system
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
  // Initialized with 5 tabs as per project requirements
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
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          Autism: Causes & Risk Factors
        </h1>

        <BackButton />
      </div>

      {/* --- 5-TAB NAVIGATION GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-4 rounded-lg text-sm transition-colors font-normal shadow-sm ${
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
        
        {/* FIXED: Merged the two lines so the prop is passed only when active */}
        {activeTab === 'genetics' && (
          <GeneticsHeredity setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'current-research' && <CurrentResearch />}
        
      </div>
    </article>
  );
}