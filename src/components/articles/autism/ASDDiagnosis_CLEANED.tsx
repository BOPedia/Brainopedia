import { useState } from 'react';
import { ASDReferences, AuDHDReferences } from './ASDReferences';
import { DSM5Criteria } from './asd-diagnosis/DSM5Criteria';
import { DiagnosticProcess } from './asd-diagnosis/DiagnosticProcess';
import { WhoCanDiagnose } from './asd-diagnosis/WhoCanDiagnose';
import { AcrossLifespan } from './asd-diagnosis/AcrossLifespan';
import { ChallengesDisparities } from './asd-diagnosis/ChallengesDisparities';
import { AfterDiagnosis } from './asd-diagnosis/AfterDiagnosis';
import { WhatIsAuDHD } from './asd-diagnosis/WhatIsAuDHD';

interface ASDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

type TabType = 'criteria' | 'process' | 'professionals' | 'lifespan' | 'challenges' | 'after' | 'audhd';

export function ASDDiagnosis({ setCurrentArticle }: ASDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState<TabType>('criteria');

  const tabs = [
    { id: 'criteria' as TabType, label: 'DSM-5 Criteria', emoji: '' },
    { id: 'process' as TabType, label: 'Diagnostic Process & Tools', emoji: '' },
    { id: 'professionals' as TabType, label: 'Who Can Diagnose', emoji: '' },
    { id: 'lifespan' as TabType, label: 'Across the Lifespan', emoji: '' },
    { id: 'challenges' as TabType, label: 'Challenges & Disparities', emoji: '' },
    { id: 'after' as TabType, label: 'After Diagnosis', emoji: '' },
    { id: 'audhd' as TabType, label: 'What is AuDHD?', emoji: '' },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
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

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 !py-3 md:!py-2 rounded-md text-sm transition-colors ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === 'criteria' && <DSM5Criteria />}
        {activeTab === 'process' && <DiagnosticProcess />}
        {activeTab === 'professionals' && <WhoCanDiagnose />}
        {activeTab === 'lifespan' && <AcrossLifespan />}
        {activeTab === 'challenges' && <ChallengesDisparities />}
        {activeTab === 'after' && <AfterDiagnosis />}
        {activeTab === 'audhd' && <WhatIsAuDHD />}
      </div>

      {/* Bottom back button */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          {activeTab === 'audhd' ? <AuDHDReferences /> : <ASDReferences />}
        </div>
      </section>

    </article>
  );
}
