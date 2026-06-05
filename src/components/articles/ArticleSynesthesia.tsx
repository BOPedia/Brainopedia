import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleSynesthesiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleSynesthesia({ setCurrentArticle }: ArticleSynesthesiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Synesthesia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-living');
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
        Synesthesia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p>
            <strong>Synesthesia</strong> is a neurological phenomenon in which stimulation of one sensory or cognitive 
            pathway leads to involuntary experiences in a second sensory or cognitive pathway.<sup>[1]</sup> For example, a person 
            with synesthesia might see colors when hearing music, or taste flavors when reading words.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="Synesthesia"
            data={[
              { label: 'Other names', value: 'Synaesthesia' },
              { label: 'Specialty', value: 'Neurology, Psychology' },
              { label: 'Symptoms', value: 'Involuntary joining of sensory experiences' },
              { label: 'Usual onset', value: 'Present from birth, often recognized later' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '2-4% of population (estimated)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1765363674916-cb6d520fd8ce?w=1080&q=80"
            alt="Colorful abstract sensory perception - understanding synesthesia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            The term "synesthesia" comes from the Greek words "syn" (together) and "aisthesis" (sensation), literally 
            meaning "joined sensation."<sup>[3]</sup> Synesthesia is a lifelong condition that people are typically born with, 
            though it may not be recognized until later in life.<sup>[4]</sup> It is estimated to occur in about 2-4% of the 
            population, though this may be higher as many people don't realize their experiences are unusual.<sup>[5]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1736176421274-546a4eaf57d6?w=1080&q=80"
            alt="Music colors and sound visualization - chromesthesia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            There are many documented forms of synesthesia involving various combinations of senses and cognitive 
            processes.<sup>[10]</sup> Grapheme-color synesthesia (the most common form) occurs when letters and numbers are perceived 
            as inherently colored, with each synesthete having their own unique color associations.<sup>[11]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1719550371336-7bb64b5cacfa?w=1080&q=80"
            alt="Brain neural connections - neurological basis of synesthesia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Synesthesia has a strong genetic component and tends to run in families, though the specific genes involved 
            are still being researched.<sup>[19][20]</sup> Studies suggest that synesthesia results from increased connectivity or cross-activation 
            between brain regions that are normally separate.<sup>[21]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1664261836174-b419b196326c?w=1080&q=80"
            alt="Psychological testing and questionnaire - identifying synesthesia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Synesthesia is typically identified through self-report and validated through consistency testing.<sup>[27]</sup> The identification 
            process includes detailed questionnaires about synesthetic experiences and consistency testing.<sup>[28]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1664497967316-b2788db919b5?w=1080&q=80"
            alt="Creative art and multi-sensory expression - synesthetic experiences"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Synesthesia is not considered a disorder requiring treatment or "management" in the traditional sense.<sup>[33]</sup> Instead, 
            understanding and embracing synesthesia involves recognizing it as a unique way of perceiving the world.<sup>[34]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Synesthesia</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1765363674916-cb6d520fd8ce?w=1080&q=80"
            alt="Living with synesthesia - rich sensory experiences"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with synesthesia lead successful and fulfilling lives across all areas of society.<sup>[40]</sup> Living 
            with synesthesia enriches perception of the world and can enhance creativity and memory.<sup>[42]</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-living');
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
          <p>[1] Cytowic, R. E., & Eagleman, D. M. (2009). <em>Wednesday is indigo blue</em>. MIT Press.</p>
          <p>[2] Baron-Cohen, S., & Harrison, J. E. (1997). <em>Synaesthesia</em>. Blackwell Publishers.</p>
          <p>[3] Simner, J., & Hubbard, E. M. (2013). <em>The Oxford handbook of synesthesia</em>. Oxford University Press.</p>
          <p>[4] Baron-Cohen, S., et al. (1996). "Synaesthesia: Prevalence and familiality." <em>Perception</em>, 25(9), 1073-1079.</p>
          <p>[5] Simner, J., et al. (2006). "Synaesthesia: The prevalence of atypical cross-modal experiences." <em>Perception</em>, 35(8), 1024-1033.</p>
          <p>[10] Day, S. (2005). "Some demographic and socio-cultural aspects of synesthesia." <em>Synesthesia: Perspectives from cognitive neuroscience</em>.</p>
          <p>[19] Tomson, S. N., et al. (2011). "The genetics of colored sequence synesthesia." <em>Behavioural Brain Research</em>, 223(1), 48-52.</p>
          <p>[27] Eagleman, D. M., et al. (2007). "A standardized test battery for the study of synesthesia." <em>Journal of Neuroscience Methods</em>, 159(1), 139-145.</p>
          <p>[33] Cytowic, R. E. (2002). <em>Synesthesia: A union of the senses</em>. MIT Press.</p>
          <p>[40] Galeyev, B., & Vanechkina, I. (2001). "Was Scriabin a synesthete?" <em>Leonardo</em>, 34(4), 357-361.</p>
        </div>
      </section>
    </article>
  );
}
