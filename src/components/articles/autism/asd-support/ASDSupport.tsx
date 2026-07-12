import React, { useState, useEffect } from 'react';

// Updated paths based on your articleMap directory structure
import { OverviewContent } from './OverviewContent';
import { EarlyInterventionContent } from './EarlyInterventionContent';
import { TherapiesContent } from './TherapiesContent';
import { EducationalContent } from './EducationalContent';
import { MedicalContent } from './MedicalContent';
import { EnvironmentalContent } from './EnvironmentalContent';
import { FamilyPrinciplesContent } from './FamilyPrinciplesContent';
import { SafetyContent } from './SafetyContent'; // <-- New Safety Import!

interface ASDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ASDSupport({ setCurrentArticle, initialTab }: ASDSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'overview');

  // --- THE FIX ---
  // This forces React to change the tab if the router sends a new instruction
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);
  // ---------------

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
    { id: 'family', label: 'Family & Principles' },
    { id: 'safety', label: 'Safety Across Lifespan' } // <-- New Safety Tab!
  ];

  // Reusable button to ensure the key 'autism' is consistent
  const BackButton = () => (
    <button 
      onClick={() => setCurrentArticle?.('autism')}
      className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
    >
      <span className="text-xl">←</span>
      All About Autism
    </button>
  );

  return (
    <article className="max-w-6xl">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-3xl">
          Autism: Support & Management
        </h1>
        <BackButton />
      </div>

      {/* --- TAB NAVIGATION --- */}
      {/* Kept your original md:grid-cols-3! */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-6 py-3 rounded-md text-sm transition-colors font-medium ${
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
      <div className="space-y-8">
        {activeTab === 'overview' && <OverviewContent setCurrentArticle={setCurrentArticle} />}
        {activeTab === 'early-intervention' && <EarlyInterventionContent setCurrentArticle={setCurrentArticle} />}
        {activeTab === 'therapies' && <TherapiesContent setCurrentArticle={setCurrentArticle} />}
        {activeTab === 'educational' && <EducationalContent setCurrentArticle={setCurrentArticle} />}
        {activeTab === 'medical' && <MedicalContent setCurrentArticle={setCurrentArticle} />}
        {activeTab === 'environmental' && <EnvironmentalContent setCurrentArticle={setCurrentArticle} />}
        {activeTab === 'family' && <FamilyPrinciplesContent setCurrentArticle={setCurrentArticle} />}
        {activeTab === 'safety' && <SafetyContent setCurrentArticle={setCurrentArticle} />} {/* <-- New Render! */}
      </div>

      <div className="flex justify-end mt-8 mb-6">
        <BackButton />
      </div>
    </article>
  );
}