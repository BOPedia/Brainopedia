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
          <p>
            <strong>Autism spectrum disorder (ASD)</strong> is a neurodevelopmental condition characterized 
            by differences in social communication and interaction, alongside restricted or repetitive patterns of 
            behavior, interests, or activities. The term "spectrum" reflects the wide variation in challenges and 
            strengths possessed by each person with autism.
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
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4">
            <ImageWithFallback
              src="/images/autism/autism-main-overview.png"
              alt="Autism Overview"
              className="w-48 h-auto float-right ml-4 mb-4 rounded"
            />
            Autism is a lifelong neurodevelopmental condition that affects how people perceive the world and interact 
            with others. Autism affects approximately 1 in 36 children in the United States according to 2023 CDC data,<sup className="text-green-600 font-bold ml-0.5">1</sup> with 
            increasing recognition and diagnosis rates in recent years. It's important to recognize that autism is 
            not a disease or disorder that needs to be "cured."
          </p>
          
          <p className="mb-4">
            Many autistic individuals and advocates promote the concept of neurodiversity, viewing autism as a natural 
            variation in human neurology rather than a deficit. The neurodiversity paradigm emphasizes acceptance, 
            accommodation, and celebration of neurological differences while providing support where needed.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4">
            <ImageWithFallback
              src="/images/autism/autism-main-symptoms.png"
              alt="Autism Symptoms and Characteristics"
              className="w-48 h-auto float-right ml-4 mb-4 rounded"
            />
            Autism is characterized by differences in social communication and interaction, alongside restricted or 
            repetitive behaviors and interests. The way these characteristics present varies significantly from person 
            to person, which is why autism is described as a spectrum. Common areas of difference include difficulty 
            interpreting social cues and body language, challenges with verbal and nonverbal communication, differences 
            in sensory processing (hyper- or hypo-sensitivity), preference for routine and predictability, and intense 
            or focused interests in specific topics.
          </p>
          
          <p className="mb-4">
            It's crucial to understand that these characteristics exist on a continuum, and each autistic individual 
            has a unique profile of strengths and challenges. Many autistic people also possess remarkable abilities 
            in pattern recognition, attention to detail, creative thinking, and sustained focus on areas of interest.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4">
            <ImageWithFallback
              src="/images/autism/autism-main-causes.png"
              alt="Autism Causes and Origins"
              className="w-48 h-auto float-right ml-4 mb-4 rounded"
            />
            The exact causes of autism are not fully understood, but research indicates that both genetic and environmental factors contribute to its development.<sup className="text-green-600 font-bold ml-0.5">2</sup> Autism is best understood as arising from differences in brain development that occur before birth. Studies have identified hundreds of genes associated with autism, though no single gene causes autism in most cases.<sup className="text-green-600 font-bold ml-0.5">3</sup>
          </p>
          
          <p className="mb-4">
            Brain imaging studies have revealed differences in brain structure and connectivity in autistic individuals, particularly in areas related to social cognition, sensory processing, and executive function.<sup className="text-green-600 font-bold ml-0.5">4</sup> These neurological differences help explain why autistic people may process information, perceive sensory input, and interact socially in ways that differ from neurotypical individuals.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4">
            <ImageWithFallback
              src="/images/autism/autism-main-diagnosis.png"
              alt="Autism Testing and Diagnosis"
              className="w-48 h-auto float-right ml-4 mb-4 rounded"
            />
            Autism is typically diagnosed through comprehensive developmental and behavioral evaluation by qualified professionals such as developmental pediatricians, child psychologists, or neurologists. There is no medical test (like a blood test or brain scan) for autism. Diagnosis is based on observation of behavior and developmental history using standardized diagnostic criteria from the DSM-5-TR, among other gold standard measures.<sup className="text-green-600 font-bold ml-0.5">5</sup>
          </p>
          
          <p className="mb-4">
            While autism can often be reliably diagnosed by age 2, many children are not diagnosed until they are older, and some adults are diagnosed later in life after years of unrecognized struggles. The DSM-5-TR includes three levels of support needs (Level 1, 2, and 3)<sup className="text-green-600 font-bold ml-0.5">5</sup> to help describe the amount of assistance an individual may require in daily functioning.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4">
            <ImageWithFallback
              src="/images/autism/autism-main-support.png"
              alt="Autism Support and Management"
              className="w-48 h-auto float-right ml-4 mb-4 rounded"
            />
            Support for autistic individuals should be individualized based on their unique needs, strengths, and 
            preferences. The goal is to provide accommodations and support that help autistic people thrive while 
            respecting their neurological differences. Support may include educational accommodations such as 
            modified assignments and sensory-friendly environments, therapeutic interventions including speech therapy 
            and occupational therapy, environmental modifications to reduce sensory overwhelm, and mental health 
            services for co-occurring conditions like anxiety.
          </p>
          
          <p className="mb-4">
            Many autistic adults and advocates emphasize the importance of neurodiversity-affirming approaches that 
            focus on acceptance, building on strengths, and providing support without trying to eliminate autistic 
            traits that are part of the person's identity.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Autism</h2>
          
          <p className="mb-4">
            <ImageWithFallback
              src="/images/autism/autism-main-living.png"
              alt="Living with Autism"
              className="w-48 h-auto float-right ml-4 mb-4 rounded"
            />
            Autistic individuals lead full and meaningful lives across all areas of society. While autism presents 
            challenges, many autistic people also describe unique strengths and perspectives that enrich their lives 
            and communities. These may include exceptional attention to detail, deep knowledge in areas of interest, 
            creative and innovative thinking, and strong sense of justice and authenticity.
          </p>
          
          <p className="mb-4">
            Topics related to living with autism include recognizing and celebrating autistic strengths, navigating 
            daily life with appropriate accommodations, connecting with the autistic community and finding peer support, 
            fostering positive autistic identity, developing self-advocacy skills, and understanding legal protections 
            like the Americans with Disabilities Act (ADA).
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References: Autism Overview</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
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