import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DSM5Criteria } from './DSM5Criteria';
import { DiagnosticProcess } from './DiagnosticProcess';
import { WhoCanDiagnose } from './WhoCanDiagnose';
import { AcrossLifespan } from './AcrossLifespan';
import { ChallengesDisparities } from './ChallengesDisparities';
import { AfterDiagnosis } from './AfterDiagnosis';
import { WhatIsAuDHD } from './WhatIsAuDHD';

interface ASDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ASDDiagnosis({ setCurrentArticle, initialTab }: ASDDiagnosisProps) {
  const navigate = useNavigate();
  const activeTab = initialTab || 'criteria';

  const handleTabChange = (tabId: string) => {
    navigate(`/autism-diagnosis/${tabId}`);
  };

  const tabs = [
    { id: 'criteria', label: 'DSM-5 Criteria' },
    { id: 'process', label: 'Diagnostic Process' },
    { id: 'professionals', label: 'Who Can Diagnose' },
    { id: 'lifespan', label: 'Across the Lifespan' },
    { id: 'challenges', label: 'Challenges & Disparities' },
    { id: 'after', label: 'After Diagnosis' },
    { id: 'audhd', label: 'What is AuDHD?' }
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`sup { color: #10b981; }`}
      </style>
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-3xl">
          Autism: Testing & Diagnosing
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
        {activeTab === 'criteria' && <DSM5Criteria />}
        {activeTab === 'process' && <DiagnosticProcess />}
        {activeTab === 'professionals' && <WhoCanDiagnose />}
        {activeTab === 'lifespan' && <AcrossLifespan />}
        {activeTab === 'challenges' && <ChallengesDisparities />}
        {activeTab === 'after' && <AfterDiagnosis />}
        {activeTab === 'audhd' && <WhatIsAuDHD />}
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