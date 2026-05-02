import React, { useState, useEffect } from 'react';
import { ASDReferences } from '../ASDReferences';
import { OverviewContent } from './OverviewContent';
import { TherapiesContent } from './TherapiesContent';
import { EducationalContent } from './EducationalContent';
import { MedicalContent } from './MedicalContent';
import { EnvironmentalContent } from './EnvironmentalContent';
import { FamilyPrinciplesContent } from './FamilyPrinciplesContent';

interface ASDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}
export function ASDSupport({ setCurrentArticle, initialTab }: ASDSupportProps) {
  // 1. Use state so the component can re-render itself
  const [activeTab, setActiveTab] = useState(initialTab || 'overview');

  // 2. Just change the state instead of navigating
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const tabs = [
    { id: 'overview', label: 'Overview & Philosophy' },
    { id: 'early-intervention', label: 'Early Intervention' },
    { id: 'therapies', label: 'Therapies & Treatment' },
    { id: 'educational', label: 'Educational Support' },
    { id: 'medical', label: 'Medical Management' },
    { id: 'environmental', label: 'Environmental Support' },
    { id: 'family', label: 'Family & Principles' }
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`sup { color: #10b981; }`}
      </style>
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-3xl">
          Autism: Support & Services
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
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

      <div className="space-y-8">
        {activeTab === 'overview' && <OverviewContent />}
        {activeTab === 'early-intervention' && <EarlyInterventionContent />}
        {activeTab === 'therapies' && <TherapiesContent />}
        {activeTab === 'educational' && <EducationalContent />}
        {activeTab === 'medical' && <MedicalContent />}
        {activeTab === 'environmental' && <EnvironmentalContent />}
        {activeTab === 'family' && <FamilyPrinciplesContent />}
        <ASDReferences />
      </div>

      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>
    </article>
  );
}