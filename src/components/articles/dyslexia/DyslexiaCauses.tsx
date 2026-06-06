import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyslexiaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCauses({ setCurrentArticle }: DyslexiaCausesProps) {
  // This state controls which tab is currently visible
  const [activeTab, setActiveTab] = useState('brain');

  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      {/* Header and Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-bold text-[#0c264d]">Dyslexia: Causes & Risk Factors</h2>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2"
        >
          <span>←</span> All About Dyslexia
        </button>
      </div>
      
      <div className="prose max-w-none">
        {/* Intro Paragraph from Screenshot */}
        <p className="mb-6 text-slate-700 leading-relaxed">
          Dyslexia is a neurodevelopmental condition with strong genetic and neurobiological underpinnings.<sup className="text-green-600 font-bold ml-0.5">1</sup> Research over the past several decades has revealed that dyslexia results from differences in brain structure and function, particularly in regions involved in reading and language processing.<sup className="text-green-600 font-bold ml-0.5">2</sup> Understanding the origins of dyslexia helps demystify the condition and inform effective interventions.<sup className="text-green-600 font-bold ml-0.5">3</sup>
        </p>

        {/* INTERACTIVE TABS */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <button 
            onClick={() => setActiveTab('brain')}
            className={`py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto ${
              activeTab === 'brain' 
                ? 'bg-[#0A9DC4] text-white shadow-md' 
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80'
            }`}
          >
            Brain & Neurobiology
          </button>
          
          <button 
            onClick={() => setActiveTab('genetics')}
            className={`py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto ${
              activeTab === 'genetics' 
                ? 'bg-[#0A9DC4] text-white shadow-md' 
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80'
            }`}
          >
            Genetics
          </button>
          
          <button 
            onClick={() => setActiveTab('risk')}
            className={`py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto ${
              activeTab === 'risk' 
                ? 'bg-[#0A9DC4] text-white shadow-md' 
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80'
            }`}
          >
            Risk Factors
          </button>
        </div>

        {/* TAB CONTENT: BRAIN & NEUROBIOLOGY */}
        {activeTab === 'brain' && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d]">Brain Differences</h3>
            <p className="mb-4 text-slate-700">
              Neuroimaging studies have revealed distinct differences in the brains of individuals with dyslexia:
            </p>

            <ul className="list-disc ml-6 space-y-2 mb-6 text-slate-700">
              <li>Reduced activity in the left hemisphere reading networks</li>
              <li>Differences in white matter connectivity between language areas</li>
              <li>Variations in brain structure in regions processing phonological information</li>
              <li>Altered patterns of neural activation during reading tasks</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Phonological Processing Deficit</h3>
            <p className="mb-4 text-slate-700">
              The most widely accepted explanation for dyslexia is a deficit in phonological processing—the ability to recognize and manipulate the sound structure of language. This core deficit affects:
            </p>

            <ul className="list-disc ml-6 space-y-2 mb-4 text-slate-700">
              <li>Sound-letter correspondence (phonics)</li>
              <li>Breaking words into component sounds</li>
              <li>Recognizing rhyming patterns</li>
              <li>Rapid naming of letters and objects</li>
            </ul>
          </div>
        )}

        {/* TAB CONTENT: GENETICS */}
        {activeTab === 'genetics' && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d]">Genetic Factors</h3>
            <p className="mb-4 text-slate-700">
              Dyslexia has a strong genetic component and often runs in families. Studies show that children with a parent or sibling with dyslexia have a significantly higher risk of developing the condition themselves.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-4 border border-gray-200 shadow-sm">
              <h4 className="font-bold mb-3 text-[#0c264d] text-lg">Genetic Research Findings:</h4>
              <ul className="list-disc ml-6 space-y-2 text-slate-700">
                <li>Multiple genes have been associated with dyslexia risk</li>
                <li>Heritability estimates range from 40-60%</li>
                <li>Gene variants affect brain development and neural connections</li>
                <li>Family history is one of the strongest predictors</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-bold mt-6 mb-3 text-[#0c264d]">Important Notes</h3>
            <ul className="list-disc ml-6 space-y-2 mb-4 text-slate-700">
              <li>Dyslexia is not caused by lack of intelligence or poor teaching</li>
              <li>Vision problems do not cause dyslexia, though they may coexist</li>
              <li>The condition is present from birth but may not be apparent until school age</li>
              <li>Early intervention can significantly improve outcomes regardless of cause</li>
            </ul>
          </div>
        )}

        {/* TAB CONTENT: RISK FACTORS */}
        {activeTab === 'risk' && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d]">Environmental and Risk Factors</h3>
            <p className="mb-6 text-slate-700">
              While dyslexia is primarily neurobiological and genetic, environmental factors play a role:<sup className="text-green-600 font-bold ml-0.5">41</sup>
            </p>

            <h4 className="font-bold mb-2 text-[#0c264d] text-xl">Quality of Instruction</h4>
            <ul className="list-disc ml-6 space-y-2 mb-6 text-slate-700">
              <li>Inadequate early reading instruction can exacerbate genetic risk<sup className="text-green-600 font-bold ml-0.5">42</sup></li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-[#ffd166] p-6 mb-4 shadow-sm">
              <h4 className="font-bold mb-3 text-[#0c264d] text-lg">Additional Potential Risk Factors:</h4>
              <ul className="list-disc ml-6 space-y-2 text-slate-700">
                <li>Premature birth or low birth weight</li>
                <li>Exposure to toxins during pregnancy (nicotine, alcohol, drugs)</li>
                <li>Limited early literacy exposure</li>
                <li>Chronic ear infections affecting hearing development</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}