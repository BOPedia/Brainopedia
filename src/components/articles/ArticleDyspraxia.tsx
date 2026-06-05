import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleDyspraxiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDyspraxia({ setCurrentArticle }: ArticleDyspraxiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Dyspraxia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-living');
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
        Dyspraxia (Developmental Coordination Disorder)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Dyspraxia</strong>, also known as <strong>Developmental Coordination Disorder (DCD)</strong>, 
            is a neurological condition that affects physical coordination and movement.<sup>[1]</sup> Individuals with dyspraxia 
            may appear clumsy or have difficulty with tasks requiring motor planning and coordination.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Dyspraxia (DCD)"
            data={[
              { label: 'Other names', value: 'Developmental Coordination Disorder (DCD), Motor Learning Difficulties' },
              { label: 'Specialty', value: 'Occupational therapy, Neurology, Pediatrics' },
              { label: 'Symptoms', value: 'Poor coordination, motor planning difficulties, clumsiness' },
              { label: 'Usual onset', value: 'Present from birth, noticed in early childhood' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '5-6% of children' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1760530675678-4221135a2bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG1vdG9yJTIwc2tpbGxzJTIwY29vcmRpbmF0aW9ufGVufDF8fHx8MTc2NzQwNzE3OHww"
            alt="Child developing motor skills and coordination"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyspraxia affects approximately 5-6% of children, with males being more commonly diagnosed than females.<sup>[3]</sup> The condition involves difficulties with motor planning—the 
            process of planning and executing coordinated movements.<sup>[4]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1763468839619-45036f744d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwbW90b3IlMjBza2lsbHMlMjBoYW5kd3JpdGluZ3xlbnwxfHx8fDE3Njc0MDcxODB8MA"
            alt="Fine motor skills and handwriting challenges"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyspraxia is characterized by motor coordination difficulties including poor balance, difficulty with fine motor tasks like handwriting, and poor body awareness.<sup>[9]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG1vdG9yJTIwY29ydGV4JTIwY2VyZWJlbGx1bXxlbnwxfHx8fDE3Njc0MDcxNzl8MA"
            alt="Brain motor cortex and cerebellum - neurological basis of dyspraxia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Research suggests differences in how the brain processes information required for movement planning.<sup>[16]</sup> Imaging has shown differences in the cerebellum and motor cortex.<sup>[17]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1709127347884-a106974ef58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2N1cGF0aW9uYWwlMjB0aGVyYXB5JTIwYXNzZXNzbWVudCUyMGNoaWxkfGVufDF8fHx8MTc2NzQwNzE4MHww"
            alt="Occupational therapy assessment for dyspraxia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Diagnosis involves comprehensive assessments by occupational therapists or developmental pediatricians using standardized motor tests.<sup>[23]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1561577732-4aaa488cd807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxhbmNlJTIwY29vcmRpbmF0aW9uJTIwZXhlcmNpc2UlMjB0aGVyYXB5fGVufDF8fHx8MTc2NzQwNzE3OXww"
            alt="Balance and coordination therapy exercises"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Support includes occupational therapy, motor skills training, and educational accommodations like extra time or technology aids.<sup>[29][31]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dyspraxia</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1760530675678-4221135a2bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG1vdG9yJTIwc2tpbGxzJTIwY29vcmRpbmF0aW9ufGVufDF8fHx8MTc2NzQwNzE3OHww"
            alt="Living with dyspraxia - developing coordination skills"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with dyspraxia lead successful lives by leveraging strengths in verbal skills and creativity while using compensatory techniques.<sup>[35][37]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>DSM-5</em>. Arlington, VA: American Psychiatric Publishing.</p>
          <p>[2] Blank, R., et al. (2019). "International clinical practice recommendations on DCD." <em>DMCN</em>, 61(3), 242-285.</p>
          <p>[3] Lingam, R., et al. (2009). "Prevalence of DCD using the DSM-IV." <em>Pediatrics</em>, 123(4), e693-e700.</p>
          <p>[9] Wilmut, K., et al. (2006). "Problems in eye-hand coupling in DCD." <em>Care, Health and Dev</em>, 32(6), 665-678.</p>
          <p>[16] Zwicker, J. G., et al. (2011). "Brain activation of children with DCD is different than peers." <em>Pediatrics</em>, 126(3), e678-e686.</p>
          <p>[23] Henderson, S. E., et al. (2007). <em>MABC-2</em>. London: Pearson.</p>
          <p>[35] Kirby, A., et al. (2013). "Self-reported mood and wellbeing in adults with suspected DCD." <em>RID</em>, 34(4), 1357-1364.</p>
        </div>
      </section>
    </article>
  );
}
