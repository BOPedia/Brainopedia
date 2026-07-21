import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleAutismProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleAutism({ setCurrentArticle }: ArticleAutismProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-support');
      }
    },
    { 
      id: 'living', 
      title: 'Daily Living',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Autism Spectrum Disorder (ASD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-700">
            <strong>Autism spectrum disorder (ASD)</strong> is a neurodevelopmental condition characterized 
            by differences in social communication and interaction, alongside restricted or repetitive patterns of 
            behavior, interests, or activities. The term "spectrum" reflects the wide variation in challenges and 
            strengths possessed by each person.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Autism Spectrum Disorder"
            image="/images/autism/autism-main-infobox.png"
            data={[
              { label: 'Other names', value: 'Autism, ASD' },
              { label: 'Specialty', value: 'Psychiatry, Pediatrics, Neurology' },
              { label: 'Symptoms', value: 'Social communication differences, restricted interests, repetitive behaviors' },
              { label: 'Usual onset', value: 'Early childhood' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '1 in 36 children (USA, 2023)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          <p className="text-base leading-relaxed text-gray-700">
            <ImageWithFallback
              src="/images/autism/autism-main-overview.png"
              alt="Autism Overview"
              className="w-64 h-auto float-right ml-6 mb-4 rounded-md shadow-sm"
            />
            Autism is a lifelong neurodevelopmental condition that affects how people perceive the world. Affecting approximately 1 in 36 children in the United States,<sup className="text-green-600 font-bold ml-0.5">1</sup> it is viewed through the neurodiversity paradigm as a natural human variation to be accepted and accommodated, rather than a disease to be "cured."
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-overview');
            }}
            className="mt-4 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          <p className="text-base leading-relaxed text-gray-700">
            <ImageWithFallback
              src="/images/autism/autism-main-symptoms.png"
              alt="Autism Symptoms and Characteristics"
              className="w-64 h-auto float-right ml-6 mb-4 rounded-md shadow-sm"
            />
            Autism involves differences in social communication, sensory processing, and a preference for predictable routines. Because it is a spectrum, every individual has a unique profile of challenges and remarkable strengths, such as deep focus, creative thinking, and advanced pattern recognition.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-symptoms');
            }}
            className="mt-4 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          <p className="text-base leading-relaxed text-gray-700">
            <ImageWithFallback
              src="/images/autism/autism-main-causes.png"
              alt="Autism Causes and Origins"
              className="w-64 h-auto float-right ml-6 mb-4 rounded-md shadow-sm"
            />
            Arising from differences in early brain development, autism's exact causes involve complex genetic and environmental factors.<sup className="text-green-600 font-bold ml-0.5">2, 3</sup> Brain imaging shows variations in neurological connectivity that help explain these differences in social cognition and sensory processing.<sup className="text-green-600 font-bold ml-0.5">4</sup>
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-causes');
            }}
            className="mt-4 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          <p className="text-base leading-relaxed text-gray-700">
            <ImageWithFallback
              src="/images/autism/autism-main-diagnosis.png"
              alt="Autism Testing and Diagnosis"
              className="w-64 h-auto float-right ml-6 mb-4 rounded-md shadow-sm"
            />
            There is no medical test for autism. It is diagnosed through comprehensive behavioral evaluations by professionals using standardized criteria, such as the DSM-5-TR.<sup className="text-green-600 font-bold ml-0.5">5</sup> While often identified in early childhood, many individuals are diagnosed later in life after years of unrecognized struggles.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-diagnosis');
            }}
            className="mt-4 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          <p className="text-base leading-relaxed text-gray-700">
            <ImageWithFallback
              src="/images/autism/autism-main-support.png"
              alt="Autism Support and Management"
              className="w-64 h-auto float-right ml-6 mb-4 rounded-md shadow-sm"
            />
            Effective support is highly individualized, focusing on tools that help a person thrive—like sensory accommodations, speech therapy, and occupational therapy. Affirming care prioritizes well-being, autonomy, and skill-building without trying to erase a person's core autistic traits.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-support');
            }}
            className="mt-4 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Autism</h2>
          <p className="text-base leading-relaxed text-gray-700">
            <ImageWithFallback
              src="/images/autism/autism-main-living.png"
              alt="Living with Autism"
              className="w-64 h-auto float-right ml-6 mb-4 rounded-md shadow-sm"
            />
            Autistic individuals lead meaningful lives across all areas of society. Topics in this section cover navigating daily accommodations, fostering a positive autistic identity, building self-advocacy skills, understanding legal protections, and connecting with the broader autistic community.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-living');
            }}
            className="mt-4 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
{/* CITED STUDIES: GREEN */}
<div className="mb-6">
  <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
    Cited Studies & Statistics
  </h4>
  <ol className="list-decimal list-inside text-xs space-y-3 text-slate-600 leading-relaxed">
    <li>
      Centers for Disease Control and Prevention. (2023). "Data & Statistics on Autism Spectrum Disorder." U.S. Department of Health and Human Services.
    </li>
    <li>
      Sandin, S., et al. (2014). "The familial risk of autism." <i>JAMA</i>, 311(17), 1770-1777.
    </li>
    <li>
      De Rubeis, S., et al. (2014). "Synaptic, transcriptional and chromatin genes disrupted in autism." <i>Nature</i>, 515(7526), 209-215.
    </li>
    <li>
      Courchesne, E., et al. (2011). "Brain growth across the life span in autism: age-specific changes in anatomical pathology." <i>Brain Research</i>, 1380, 138-145.
    </li>
    <li>
      American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.).
    </li>
  </ol>
</div>
        
        {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              Autistic Self Advocacy Network (ASAN). "About Autism." National advocacy organization run by and for autistic individuals.
            </li>
            <li>
              National Institute of Mental Health (NIMH). (2023). "Autism Spectrum Disorder." National Institutes of Health.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}