import React, { useState } from 'react'; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { DiagnosticProcess } from './DiagnosticProcess';
import { AdultDiagnosis } from './AdultDiagnosis';
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
  const [activeTab, setActiveTab] = useState(initialTab || 'process');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const tabs = [
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
        <h1 className="text-3xl font-bold text-[#0c264d]">
          Autism: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">&larr;</span>
          All About Autism
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-6 py-3 rounded-md text-sm transition-colors font-bold ${
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
        {activeTab === 'process' && (
          <Tabs defaultValue="child-general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-3 mb-6 bg-transparent h-auto p-0">
              <TabsTrigger 
                value="child-general" 
                className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !py-3 font-bold"
              >
                Child / General Diagnosis
              </TabsTrigger>
              <TabsTrigger 
                value="adult" 
                className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !py-3 font-bold"
              >
                Adult Diagnosis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="child-general">
              <DiagnosticProcess setCurrentArticle={setCurrentArticle} />
            </TabsContent>

            <TabsContent value="adult">
              <AdultDiagnosis setCurrentArticle={setCurrentArticle} />
            </TabsContent>
          </Tabs>
        )}

        {activeTab === 'professionals' && <WhoCanDiagnose />}
        {activeTab === 'lifespan' && <AcrossLifespan />}
        {activeTab === 'challenges' && <ChallengesDisparities />}
        {activeTab === 'after' && <AfterDiagnosis />}
        {activeTab === 'audhd' && <WhatIsAuDHD />}
      </div>

      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">&larr;</span>
          All About Autism
        </button>
      </div>
    </article>
  );
}