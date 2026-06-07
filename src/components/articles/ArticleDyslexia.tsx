import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleDyslexiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDyslexia({ setCurrentArticle }: ArticleDyslexiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-symptoms-core');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-causes-brain');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-diagnosis-overview');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-support-interventions');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Dyslexia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-living-overview');
      }
    },
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
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Dyslexia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p>
            <strong>Dyslexia</strong> is a specific learning difference that primarily affects reading and language 
            processing. It is characterized by difficulties with accurate and/or fluent word recognition, poor 
            spelling, and decoding abilities. These difficulties typically result from a deficit in the phonological 
            component of language that is often unexpected in relation to other cognitive abilities.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="Dyslexia"
            image="/images/dyslexia/dyslexia-main-infobox.png"
            data={[
              { label: 'Other names', value: 'Reading disorder, specific learning disorder with impairment in reading' },
              { label: 'Specialty', value: 'Educational psychology, Neurology' },
              { label: 'Symptoms', value: 'Reading difficulties, poor spelling, slow reading' },
              { label: 'Usual onset', value: 'Early childhood (often noticed in school)' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '5-10% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          <p className="mb-4">Dyslexia is one of the most common learning differences... (Read the full Overview page for more).</p>
          <button onClick={() => setCurrentArticle?.('dyslexia-overview')} className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold">Read more →</button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          <p className="mb-4">Dyslexia is characterized by difficulties with reading accuracy and fluency...</p>
          <button onClick={() => setCurrentArticle?.('dyslexia-symptoms-tabcore')} className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold">Read more →</button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          <p className="mb-4">Dyslexia has a strong genetic component and tends to run in families...</p>
          <button onClick={() => setCurrentArticle?.('dyslexia-causes-brain')} className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold">Read more →</button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          <p className="mb-4">Dyslexia is diagnosed through comprehensive evaluation...</p>
          <button onClick={() => setCurrentArticle?.('dyslexia-diagnosis-overview')} className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold">Read more →</button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          <p className="mb-4">Evidence-based reading interventions are essential...</p>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-interventions')} className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold">Read more →</button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dyslexia</h2>
          <p className="mb-4">Individuals with dyslexia lead successful and fulfilling lives...</p>
          <button onClick={() => setCurrentArticle?.('dyslexia-living-overview')} className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold">Read more →</button>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        {/* ... existing references ... */}
      </section>
    </article>
  );
}