import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import autismImage from '/images/3a7dcb09116104195e5e8a37e185103749d6b928.png';
import headTreeImage from '/images/5f11e56c270c5efb90c51c5ae58341793f69b892.png';
import infinityImage from '/images/126d67e86c70ea337968a740b9a3620f270ac828.png';
import definingAutismImage from '/images/c8896b2045cb9a0216439e3db10a90868b353bf6.png';
import causesImage from '/images/488067e40418115ac50daf188a385765d6d4ec8e.png';
import diagnosticImage from '/images/13a8ccef05828b80bb5455b56f7d9831b3528cfe.png';
import supportImage from '/images/e351c385946b6f97d01ee18365cbc391b2ab1fbf.png';
import livingImage from '/images/47b3302e9f3e75c1e604c8b94c69f362fa414bb0.png';
import overviewImage from '/images/5cbfd882ed6ad64741b6f6a5ec57f173f973ac2d.png';
import { ASDReferences } from './autism/ASDReferences';

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
      title: 'Living with Autism',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-living');
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
            image={autismImage}
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
          
          <img 
            src={overviewImage} 
            alt="Abstract artistic representation of diverse minds and perspectives in autism"
            className="w-80 h-auto rounded-md float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Autism is a lifelong neurodevelopmental condition that affects how people perceive the world and interact 
            with others. Autism affects approximately 1 in 36 children in the United States according to 2023 CDC data,<sup style={{color: '#10b981'}}>[1]</sup> with 
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
          
          <img 
            src={definingAutismImage} 
            alt="Defining Autism - Diagnostic criteria showing social communication and repetitive behaviors requirements"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
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
          
          <img 
            src={causesImage} 
            alt="Causes of Autism - Genetic and environmental factors contributing to autism development"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            The exact causes of autism are not fully understood, but research indicates that both genetic and environmental factors contribute to its development.<sup style={{color: '#10b981'}}>[2]</sup> Autism is best understood as arising from differences in brain development that occur before birth. Studies have identified hundreds of genes associated with autism, though no single gene causes autism in most cases.<sup style={{color: '#10b981'}}>[3]</sup>
          </p>
          
          <p className="mb-4">
            Brain imaging studies have revealed differences in brain structure and connectivity in autistic individuals, particularly in areas related to social cognition, sensory processing, and executive function.<sup style={{color: '#10b981'}}>[4]</sup> These neurological differences help explain why autistic people may process information, perceive sensory input, and interact socially in ways that differ from neurotypical individuals.
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
          
          <img 
            src={diagnosticImage} 
            alt="Healthcare provider conducting autism diagnostic assessment with child"
            className="w-80 h-auto rounded-md float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Autism is typically diagnosed through comprehensive developmental and behavioral evaluation by qualified professionals such as developmental pediatricians, child psychologists, or neurologists. There is no medical test (like a blood test or brain scan) for autism; diagnosis is based on observation of behavior and developmental history using standardized diagnostic criteria from the DSM-5-TR.<sup style={{color: '#10b981'}}>[5]</sup>
          </p>
          
          <p className="mb-4">
            While autism can often be reliably diagnosed by age 2, many children are not diagnosed until they are older, and some adults are diagnosed later in life after years of unrecognized struggles. The DSM-5-TR includes three levels of support needs (Level 1, 2, and 3)<sup style={{color: '#10b981'}}>[5]</sup> to help describe the amount of assistance an individual may require in daily functioning.
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
          
          <img 
            src={supportImage} 
            alt="Support for autism - Individualized interventions and accommodations"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
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
          
          <img 
            src={livingImage} 
            alt="Living with autism - Celebrating neurodiversity and autistic identity"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
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

      <ASDReferences />
    </article>
  );
}