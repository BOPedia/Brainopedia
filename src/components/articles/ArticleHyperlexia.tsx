import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleHyperlexiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleHyperlexia({ setCurrentArticle }: ArticleHyperlexiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Hyperlexia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
            font-weight: 600;
          }
        `}
      </style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl font-spartan text-[#0c264d]">
        Hyperlexia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Hyperlexia</strong> is a neurodevelopmental condition characterized by an advanced ability 
            to read at an early age, often significantly beyond what would be expected for a child's 
            chronological age. However, this precocious decoding ability is typically accompanied by 
            difficulties with verbal language comprehension and social communication.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Hyperlexia"
            image="/images/hyperlexia/hyperlexia-main-infobox.png"
            data={[
              { label: 'Other names', value: 'Precocious Reading Syndrome' },
              { label: 'Specialty', value: 'Developmental Pediatrics, Speech-Language Pathology' },
              { label: 'Symptoms', value: 'Early reading ability, language comprehension difficulties' },
              { label: 'Usual onset', value: 'Ages 2-5' },
              { label: 'Duration', value: 'Lifelong, though symptoms may change over time' },
              { label: 'Frequency', value: 'Less than 1% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-overview-intro.png"
            alt="Overview of hyperlexia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Hyperlexia is relatively rare, estimated to affect fewer than 1% of the population.<sup>1</sup> Children with hyperlexia often begin reading spontaneously, without explicit instruction, sometimes as early as age 2. There are three recognized types: early readers (Type I), hyperlexia associated with autism (Type II), and a temporary form that fades over time (Type III). Despite their advanced decoding skills, individuals consistently struggle with reading comprehension.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-symptoms-intro.png"
            alt="Symptoms of hyperlexia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Hyperlexia is defined by an intense fascination with letters and numbers, leading to a self-taught ability to read before age 5. However, this is paired with stark challenges in understanding spoken language, answering "wh-" questions, or grasping abstract concepts. Socially, individuals may struggle with non-literal language (like sarcasm), rely heavily on routines, and exhibit echolalia.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-causes-intro.png"
            alt="Causes of hyperlexia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Research suggests hyperlexia involves distinct differences in the brain's language processing centers.<sup>2</sup> It represents a unique neurological pattern where visual word recognition pathways develop exceptionally early and rapidly, while language comprehension and social communication pathways develop differently. While it frequently co-occurs with autism spectrum disorder, it is a separate and distinct neurological phenomenon.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-diagnosis-intro.png"
            alt="Diagnosing hyperlexia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Identification is typically done by developmental pediatricians or speech-language pathologists, often between ages 2 and 5 when the severe contrast between reading ability and language comprehension becomes apparent. The evaluation process analyzes the gap between decoding and comprehension skills, while also screening for social communication challenges and co-occurring autism.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-support-intro.png"
            alt="Support for hyperlexia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective support leverages the individual's exceptional reading abilities to build their language comprehension. Strategies include using written words to teach spoken vocabulary, explicitly teaching reading comprehension strategies (like making inferences), and utilizing visual aids. Social communication is often supported through written social stories and explicit instruction on pragmatic language.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-living-intro.png"
            alt="Living with hyperlexia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Hyperlexia</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With early intervention, individuals with hyperlexia can make significant progress and lead fulfilling lives. The key to thriving is honoring their advanced reading and visual memory abilities while actively scaffolding their comprehension. Success involves developing personalized strategies for understanding complex language and accessing necessary accommodations in both educational and professional settings.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* REFERENCES SECTION */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-10 clear-both" />
      
      <div className="bg-white bg-opacity-50 p-6 md:p-8 rounded-xl shadow-inner">
        <h3 className="font-bold font-spartan mb-6 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES */}
        <div className="mb-8">
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Burd, L., & Kerbeshian, J. (1985). "Hyperlexia and a variant of hypergraphia." <i>Perceptual and Motor Skills</i>, 60(3), 940-942.</p>
            <p>2. Turkeltaub, P. E., Flowers, D. L., Verbalis, A., Miranda, M., Gareau, L., & Eden, G. F. (2004). "The neural basis of hyperlexic reading: An fMRI case study." <i>Neuron</i>, 41(1), 11-25.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). "Annotation: Hyperlexia: disability or superability?" <i>Journal of Child Psychology and Psychiatry</i>, 44(8), 1079-1091.</p>
            <p>Nation, K. (1999). "Reading skills in hyperlexia: A developmental perspective." <i>Psychological Bulletin</i>, 125(3), 338-355.</p>
            <p>Newman, T. M., Macomber, D., Naples, A. J., Babitz, T., Volkmar, F., & Grigorenko, E. L. (2007). "Hyperlexia in children with autism spectrum disorders." <i>Journal of Autism and Developmental Disorders</i>, 37(4), 760-774.</p>
            <p>Ostrolenk, A., Bao, V. A., Mottron, L., Collignon, O., & Bertone, A. (2019). "Hyperlexia: Systematic review, neurocognitive modelling, and outcome." <i>Neuroscience & Biobehavioral Reviews</i>, 79, 134-149.</p>
          </div>
        </div>
      </div>
    </article>
  );
}