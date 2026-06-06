import React, { useState } from 'react';
import { DyslexiaSymptomsTabCore } from './DyslexiaSymptomsTabCore';
import { DyslexiaSymptomsTabReading } from './DyslexiaSymptomsTabReading';
import { DyslexiaSymptomsTabWriting } from './DyslexiaSymptomsTabWriting';
import { DyslexiaSymptomsTabAge } from './DyslexiaSymptomsTabAge';

interface DyslexiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyslexiaSymptoms({ setCurrentArticle, initialTab }: DyslexiaSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'core');

  return (
    <article className="max-w-6xl animate-fadeIn">

      {/* Main Title & Desktop Back Button - NOT BOLD */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d]">
          Dyslexia: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button - NOT BOLD */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Dyslexia
      </button>

      {/* Introduction Box */}
      <div className="mb-8 bg-[#f0f9ff] p-6 rounded-lg border-l-4 border-[#2abcd4]">
        <p className="mb-4 text-gray-800 leading-relaxed">
          Dyslexia manifests differently across individuals and developmental stages, but certain characteristic patterns 
          emerge.<sup className="text-green-600 font-bold ml-0.5">1</sup> Understanding these signs enables early identification and appropriate intervention, which 
          significantly improves outcomes.<sup className="text-green-600 font-bold ml-0.5">2</sup> The hallmark features involve difficulties with phonological 
          processing, reading fluency, spelling, and word decoding.<sup className="text-green-600 font-bold ml-0.5">3</sup>
        </p>
      </div>

      {/* Tab Navigation - NOT BOLD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
        <button
          onClick={() => setActiveTab('core')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'core'
              ? 'bg-[#0c264d] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Core Symptoms
        </button>
        <button
          onClick={() => setActiveTab('reading')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'reading'
              ? 'bg-[#0c264d] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Reading Challenges
        </button>
        <button
          onClick={() => setActiveTab('writing')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'writing'
              ? 'bg-[#0c264d] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Writing & Spelling
        </button>
        <button
          onClick={() => setActiveTab('age')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'age'
              ? 'bg-[#0c264d] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Age-Specific Signs
        </button>
      </div>

      {/* Render Active Tab Content from Child Files */}
      <div className="min-h-[400px]">
        {activeTab === 'core' && <DyslexiaSymptomsTabCore />}
        {activeTab === 'reading' && <DyslexiaSymptomsTabReading />}
        {activeTab === 'writing' && <DyslexiaSymptomsTabWriting />}
        {activeTab === 'age' && <DyslexiaSymptomsTabAge />}
      </div>

      {/* Bottom navigation button */}
      <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-end">
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-md"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
      </div>
    </article>
  );
}