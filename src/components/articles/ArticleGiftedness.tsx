import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleGiftednessProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleGiftedness({ setCurrentArticle }: ArticleGiftednessProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Giftedness',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-living');
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
        Giftedness
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Giftedness</strong> is a neurological difference characterized by advanced cognitive 
            abilities, exceptional intensity of experience, and asynchronous development across domains. 
            Far more than simply "being smart," giftedness represents a distinct neurotype involving 
            differences in brain structure, processing speed, pattern recognition, and emotional intensity 
            that fundamentally shape how individuals perceive and interact with the world.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Giftedness"
            image="/images/giftedness/giftedness-main-infobox.png"
            data={[
              { label: 'Other names', value: 'Intellectually gifted, high ability' },
              { label: 'Specialty', value: 'Gifted Education, Psychology' },
              { label: 'Symptoms', value: 'Advanced cognition, intensity, asynchrony' },
              { label: 'Not the same as', value: 'High achievement or academic success' },
              { label: 'Frequency', value: 'Approximately 2-10% depending on definition' },
              { label: 'Identified through', value: 'IQ testing, creativity, performance, potential' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-overview-intro.png"
            alt="Overview of giftedness"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Giftedness affects approximately 2-10% of the population, depending on how it's defined.<sup>1</sup> Research using neuroimaging has identified structural and functional differences in the brains of gifted individuals, including enhanced neural connectivity, increased synaptic efficiency, and differences in brain metabolism.<sup>2, 3</sup> It is not just high achievement; it is a distinct neurotype that comes with unique social, emotional, and existential experiences.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-symptoms-intro.png"
            alt="Symptoms of giftedness"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Gifted individuals demonstrate rapid learning, abstract thinking from a very young age, exceptional memory, and an intense preference for complexity. A hallmark of this neurotype is asynchronous development, where intellectual abilities far outpace emotional or physical development. Psychologist Kazimierz Dąbrowski also identified "overexcitabilities" in the gifted—heightened neurological intensities spanning emotional, imaginational, sensual, psychomotor, and intellectual domains.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-causes-intro.png"
            alt="Causes of giftedness"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Giftedness has a strong genetic component and represents a natural variation in human neurology that is present from birth. The differences in white matter development, neural efficiency, and neurotransmitter function create a fundamentally different way of experiencing consciousness. The overexcitabilities commonly seen in the gifted are neurological responses, not behavioral choices.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-diagnosis-intro.png"
            alt="Diagnosing giftedness"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Identification traditionally involves IQ testing (scoring in the top 2-10%), academic achievement markers, and creativity assessments. However, modern practices emphasize looking beyond just academic achievement to evaluate raw potential. Culturally sensitive identification is heavily required, as giftedness in girls, children of color, and twice-exceptional individuals is frequently overlooked or misdiagnosed.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-support-intro.png"
            alt="Support for giftedness"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Educational support must provide appropriately challenging curriculums, independent projects, and clustering with intellectual peers to prevent burnout or apathy. Social and emotional support is equally vital. Gifted individuals benefit immensely from connections with true peer groups, validation of their intense feelings, and counseling strategies aimed at managing perfectionism and existential anxiety.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-living-intro.png"
            alt="Living with giftedness"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Giftedness</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Gifted individuals lead deeply fulfilling lives when they are able to embrace their neurotype. Living well involves understanding asynchronous development, accepting internal overexcitabilities, finding intellectual community, and developing strong self-acceptance. With proper support, gifted individuals can successfully navigate their unique challenges—such as multipotentiality or feeling "different"—and utilize their intensity as an asset.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-living');
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
            <p>1. Pfeiffer, S. I. (2015). <i>Essentials of gifted assessment</i>. Hoboken, NJ: John Wiley & Sons.</p>
            <p>2. Geake, J. G., & Hansen, P. C. (2005). "Neural correlates of intelligence as revealed by fMRI of fluid analogies." <i>NeuroImage</i>, 26(2), 555-564.</p>
            <p>3. Shaw, P., Greenstein, D., Lerch, J., et al. (2006). "Intellectual ability and cortical development in children and adolescents." <i>Nature</i>, 440(7084), 676-679.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Dąbrowski, K. (1964). <i>Positive disintegration</i>. Boston: Little, Brown.</p>
            <p>Silverman, L. K. (2013). <i>Giftedness 101</i>. New York: Springer Publishing Company.</p>
            <p>Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <i>Misdiagnosis and dual diagnoses of gifted children and adults: ADHD, bipolar, OCD, Asperger's, depression, and other disorders</i>. Scottsdale, AZ: Great Potential Press.</p>
            <p>Winner, E. (1996). <i>Gifted children: Myths and realities</i>. New York: Basic Books.</p>
          </div>
        </div>
      </div>
    </article>
  );
}