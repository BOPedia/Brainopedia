import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DyslexiaSymptomsTabCore } from './DyslexiaSymptomsTabCore';
import { DyslexiaSymptomsTabReading } from './DyslexiaSymptomsTabReading';
import { DyslexiaSymptomsTabWriting } from './DyslexiaSymptomsTabWriting';
import { DyslexiaSymptomsTabAge } from './DyslexiaSymptomsTabAge';

interface DyslexiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyslexiaSymptoms({ setCurrentArticle, initialTab }: DyslexiaSymptomsProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(initialTab || 'core');

  return (
    <article className="max-w-6xl animate-fadeIn">

      {/* Main Title & Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d]">
          Dyslexia: Symptoms & Signs
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button */}
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

      {/* Render Active Tab Content */}
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

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>Shaywitz, S. E., & Shaywitz, B. A. (2008). <i>Dyslexia</i> (2nd ed.). Yale University Press.</li>
            <li>National Institute of Child Health and Human Development. (2000). <i>Report of the National Reading Panel</i>.</li>
            <li>Snowling, M. J. (2000). <i>Dyslexia</i>. Oxford University Press.</li>
            <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). <i>Learning disabilities: From identification to intervention</i>. Guilford Press.</li>
            <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1997). "Development of reading-related phonological processing abilities." <i>Developmental Psychology</i>, 33(4), 926-938.</li>
            <li>Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). "Contributions of phonological awareness to the growth of word-reading skills." <i>Journal of Educational Psychology</i>, 93(4), 645-662.</li>
            <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). "The development of reading-related phonological processing abilities." <i>Journal of Educational Psychology</i>, 91(1), 47-57.</li>
            <li>Shaywitz, S. E., & Shaywitz, B. A. (2001). "The neurobiology of reading and dyslexia." <i>Scientific American</i>, 284(5), 40-47.</li>
          </ol>
        </div>
      </div>
    </article>
  );
}