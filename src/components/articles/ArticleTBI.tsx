import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleTBIProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleTBI({ setCurrentArticle }: ArticleTBIProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with TBI',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Traumatic Brain Injury (TBI)</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p>
            <strong>Traumatic Brain Injury (TBI)</strong> occurs when an external force injures the brain, 
            causing temporary or permanent changes to cognitive function, emotional regulation, sensory 
            processing, and behavior.<sup>[1]</sup> When these changes persist beyond initial recovery, TBI becomes a 
            form of acquired neurodivergence.<sup>[2]</sup>
          </p>
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>
        <div className="w-full">
          <InfoBox title="Traumatic Brain Injury" data={[
            { label: 'Other names', value: 'TBI, acquired brain injury' },
            { label: 'Specialty', value: 'Neurology, Rehabilitation Medicine' },
            { label: 'Cause', value: 'External force injuring the brain' },
            { label: 'Classification', value: 'Acquired neurodivergence when permanent' },
            { label: 'Duration', value: 'Variable (days to lifelong)' },
            { label: 'Frequency', value: '2.8 million new cases annually (US)' },
          ]} />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1758691463110-697a814b2033?w=1080&q=80" alt="Brain imaging showing traumatic brain injury" className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Approximately 2.8 million TBIs occur annually in the United States alone, with an estimated 5.3 million Americans currently living with TBI-related disabilities.<sup>[3]</sup> TBI can result from falls, motor vehicle accidents, and other impacts.<sup>[4]</sup></p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1740908900846-271f4f021b6a?w=1080&q=80" alt="Cognitive and memory challenges following TBI" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">TBI can affect any aspect of cognition depending on injury location and severity.<sup>[10]</sup> Common challenges include attention, memory, executive functioning, and emotional regulation.<sup>[11]</sup></p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1758404958502-44f156617bae?w=1080&q=80" alt="Emergency trauma - causes of traumatic brain injury" className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">TBI occurs when an external force injures the brain.<sup>[20]</sup> Causes include falls, vehicle accidents, and sports injuries.<sup>[21]</sup> Severity ranges from mild concussion to severe TBI.<sup>[23]</sup></p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?w=1080&q=80" alt="Brain imaging and neurological testing for TBI diagnosis" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">TBI is diagnosed through clinical assessment and imaging (CT/MRI).<sup>[28]</sup> Comprehensive evaluation includes neuropsychological testing and functional assessments.<sup>[31]</sup></p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?w=1080&q=80" alt="Rehabilitation and therapeutic support for TBI recovery" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Recovery requires rehabilitation services including cognitive, speech, and occupational therapy.<sup>[35]</sup> Accommodations and mental health support are also essential.<sup>[37]</sup></p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with TBI</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1695370993551-8ac683cd6134?w=1080&q=80" alt="Adaptation and quality of life after TBI" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Living with TBI means navigating a changed neurological reality.<sup>[42]</sup> With appropriate support, individuals can adapt and maintain a high quality of life.<sup>[43]</sup></p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Maas, A. I., et al. (2008). "Moderate and severe traumatic brain injury in adults." <em>The Lancet Neurology</em>.</p>
          <p>[2] Rabinowitz, A. R., & Levin, H. S. (2014). "Cognitive sequelae of traumatic brain injury." <em>Psychiatric Clinics</em>.</p>
          <p>[3] Taylor, C. A., et al. (2017). "Traumatic brain injury-related emergency department visits." <em>MMWR</em>.</p>
          <p>[10] McAllister, T. W., et al. (2006). "Mechanisms of working memory dysfunction after TBI." <em>Journal of Neurotrauma</em>.</p>
          <p>[20] Ghajar, J. (2000). "Traumatic brain injury." <em>The Lancet</em>.</p>
          <p>[28] Teasdale, G., & Jennett, B. (1974). "Assessment of coma." <em>The Lancet</em>.</p>
          <p>[35] Cicerone, K. D., et al. (2011). "Evidence-based cognitive rehabilitation." <em>Archives of Physical Medicine and Rehabilitation</em>.</p>
          <p>[42] Cantor, J. B., et al. (2008). "Fatigue after traumatic brain injury." <em>The Journal of Head Trauma Rehabilitation</em>.</p>
        </div>
      </section>
    </article>
  );
}
