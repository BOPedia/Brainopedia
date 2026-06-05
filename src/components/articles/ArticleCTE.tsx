import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleCTEProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleCTE({ setCurrentArticle }: ArticleCTEProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with CTE',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-living');
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
        Chronic Traumatic Encephalopathy (CTE)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Chronic Traumatic Encephalopathy (CTE)</strong> is a progressive neurodegenerative 
            disease found in people with a history of repetitive head impacts, including symptomatic 
            concussions as well as asymptomatic subconcussive hits to the head.<sup>[1]</sup> CTE has been most commonly 
            found in contact sport athletes (football, boxing, hockey), military veterans, and others with 
            a history of repetitive brain trauma.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Chronic Traumatic Encephalopathy"
            data={[
              { label: 'Other names', value: 'CTE, formerly "punch drunk syndrome"' },
              { label: 'Specialty', value: 'Neurology, Neuropathology' },
              { label: 'Cause', value: 'Repeated head impacts over time' },
              { label: 'Classification', value: 'Acquired neurodegenerative disease' },
              { label: 'Diagnosis', value: 'Currently only after death (post-mortem)' },
              { label: 'Duration', value: 'Progressive, lifelong' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1742410699412-986830ab6f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHByb3RlaW4lMjBuZXVyb2RlZ2VuZXJhdGl2ZSUyMGRpc2Vhc2V8ZW58MXx8fHwxNzY3NDEwNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Brain protein accumulation in neurodegenerative disease"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            CTE is characterized by the buildup of an abnormal protein called tau in the brain.<sup>[3]</sup> This 
            tau protein forms clumps that slowly spread throughout the brain, killing brain cells.<sup>[4]</sup> CTE 
            is different from other brain injuries because it is caused by repeated trauma over months 
            or years, rather than a single incident.<sup>[5]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1740908900846-271f4f021b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBsb3NzJTIwY29nbml0aXZlJTIwZGVjbGluZSUyMGRlbWVudGlhfGVufDF8fHx8MTc2NzQxMDYxOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cognitive decline and memory loss in CTE"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            CTE symptoms typically appear years or even decades after the last brain trauma.<sup>[12]</sup> In CTE, tau proteins 
            become abnormal and accumulate in the brain particularly around small blood vessels at the depths of sulci.<sup>[13]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1508355588587-46f3cdb5da07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNwb3J0cyUyMGhlYWQlMjBpbXBhY3QlMjBjb25jdXNzaW9ufGVufDF8fHx8MTc2NzQxMDYyMHww"
            alt="Contact sports and repeated head impacts causing CTE"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            The primary cause of CTE is repeated head impacts over time.<sup>[21]</sup> These can include multiple concussions over time, 
            subconcussive hits, and blast exposure.<sup>[22]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1741259712613-86d5b919d446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHRpc3N1ZSUyMG1pY3Jvc2NvcGUlMjByZXNlYXJjaCUyMHBhdGhvbG9neXxlbnwxfHx8fDE3Njc0MTA2MjB8MA"
            alt="Brain tissue pathology research and microscopic examination"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4 text-red-700 font-semibold">
            Currently, CTE can only be definitively diagnosed after death through neuropathological examination of brain tissue.<sup>[30]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1766299892683-d50398e31823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VwcG9ydCUyMHRyZWF0bWVudCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY3NDEwNjIxfDA"
            alt="Medical support and healthcare management for CTE"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            While there is currently no cure for CTE, individuals with a history of repetitive head trauma and concerning symptoms 
            can benefit from comprehensive support and medical management.<sup>[37]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with CTE</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1764006145420-df3006edf060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjYXJlZ2l2ZXIlMjBzdXBwb3J0JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzQxMDYyMXww"
            alt="Family support and caregiving for individuals with CTE"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Living with suspected CTE involves managing progressive cognitive decline and emotional changes while coping with diagnostic uncertainty.<sup>[46]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-living');
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
          <p>[1] McKee, A. C., et al. (2016). "The first NINDS/NIBIB consensus meeting to define neuropathological criteria for the diagnosis of chronic traumatic encephalopathy." <em>Acta Neuropathologica</em>, 131(1), 75-86.</p>
          <p>[2] Mez, J., et al. (2017). "Clinicopathological evaluation of chronic traumatic encephalopathy in players of American football." <em>JAMA</em>, 318(4), 360-370.</p>
          <p>[3] McKee, A. C., et al. (2013). "The spectrum of disease in chronic traumatic encephalopathy." <em>Brain</em>, 136(1), 43-64.</p>
          <p>[4] Stein, T. D., Alvarez, V. E., & McKee, A. C. (2014). "Chronic traumatic encephalopathy: A spectrum of neuropathological changes following repetitive brain trauma."</p>
          <p>[10] Omalu, B. I., et al. (2005). "Chronic traumatic encephalopathy in a National Football League player." <em>Neurosurgery</em>, 57(1), 128-134.</p>
          <p>[30] Bieniek, K. F., et al. (2015). "Chronic traumatic encephalopathy pathology in a neurodegenerative disorders brain bank." <em>Acta Neuropathologica</em>, 130(6), 877-889.</p>
          <p>[36] Nowinski, C. J., et al. (2017). "Applying the Bradford Hill criteria for causation to repetitive head impacts and chronic traumatic encephalopathy." <em>Frontiers in Neurology</em>, 8, 266.</p>
          <p>[37] Iverson, G. L., & Karr, J. E. (2022). "Chronic traumatic encephalopathy: Known causes, unknown effects." <em>Physical Medicine and Rehabilitation Clinics</em>, 33(2), 375-392.</p>
          <p>[46] Victoroff, J. (2013). "Traumatic encephalopathy: Review and provisional research diagnostic criteria." <em>NeuroRehabilitation</em>, 32(2), 211-224.</p>
        </div>
      </section>
    </article>
  );
}
