import { useState } from 'react';
import { ASDReferences } from './ASDReferences';
import { OverviewContent } from './asd-support/OverviewContent';
import { EarlyInterventionContent } from './asd-support/EarlyInterventionContent';
import { TherapiesContent } from './asd-support/TherapiesContent';
import { EducationalContent } from './asd-support/EducationalContent';
import { MedicalContent } from './asd-support/MedicalContent';
import { EnvironmentalContent } from './asd-support/EnvironmentalContent';
import { FamilyPrinciplesContent } from './asd-support/FamilyPrinciplesContent';

interface ASDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: TabType;
}

type TabType = 'overview' | 'early-intervention' | 'therapies' | 'educational' | 'medical' | 'environmental' | 'family';

export function ASDSupport({ setCurrentArticle, initialTab = 'overview' }: ASDSupportProps) {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview & Philosophy' },
    { id: 'early-intervention' as TabType, label: 'Early Intervention' },
    { id: 'therapies' as TabType, label: 'Therapies & Treatment' },
    { id: 'educational' as TabType, label: 'Educational Support' },
    { id: 'medical' as TabType, label: 'Medical Management' },
    { id: 'environmental' as TabType, label: 'Environmental Support' },
    { id: 'family' as TabType, label: 'Family & Principles' },
  ];

  function renderTabContent(tab: TabType) {
    switch (tab) {
      case 'overview':
        return <OverviewContent />;
      case 'early-intervention':
        return <EarlyInterventionContent setCurrentArticle={setCurrentArticle} />;
      case 'therapies':
        return <TherapiesContent setCurrentArticle={setCurrentArticle} />;
      case 'educational':
        return <EducationalContent />;
      case 'medical':
        return <MedicalContent />;
      case 'environmental':
        return <EnvironmentalContent />;
      case 'family':
        return <FamilyPrinciplesContent />;
      default:
        return null;
    }
  }

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
          Autism: Support & Management
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
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

      {/* Tab Content */}
      <div className="space-y-8">{renderTabContent(activeTab)}</div>

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

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <ASDReferences />
        </div>
      </section>
    </article>
  );
}
