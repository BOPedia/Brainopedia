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
        setCurrentArticle?.('dyslexia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Dyslexia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-living');
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
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Dyslexia</strong> is a specific learning difference that primarily affects reading and language 
            processing. It is characterized by difficulties with accurate and/or fluent word recognition, poor 
            spelling, and decoding abilities. These difficulties typically result from a deficit in the phonological 
            component of language that is often unexpected in relation to other cognitive abilities.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Dyslexia"
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
          
          <p className="mb-4">
            Dyslexia is one of the most common learning differences, affecting approximately 5-10% of the population.<sup>[1]</sup> 
            It is important to understand that dyslexia is not related to intelligence—many individuals with dyslexia 
            have average to above-average intelligence and may excel in areas such as creative thinking, problem-solving, 
            and visual-spatial reasoning. The term "dyslexia" comes from the Greek words "dys" (difficulty) and "lexia" 
            (words).
          </p>
          
          <p className="mb-4">
            While dyslexia primarily affects reading, it can also impact writing, spelling, and sometimes spoken 
            language. The condition is neurobiological in origin and persists throughout life, though with appropriate 
            support and interventions, individuals with dyslexia can become successful readers and learners.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4">
            Dyslexia is characterized by difficulties with reading accuracy and fluency, poor spelling, and challenges 
            with decoding words. Common signs include difficulty recognizing familiar words, slow and laborious reading, 
            poor spelling even of common words, difficulty with phonological awareness (recognizing and manipulating 
            sounds in words), and trouble with reading comprehension due to decoding difficulties. Many individuals with 
            dyslexia demonstrate strengths in creative and innovative thinking, problem-solving and reasoning, visual-spatial 
            skills, and big-picture conceptualization.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4">
            Dyslexia has a strong genetic component and tends to run in families. Research has identified several genes 
            associated with reading difficulties, though the genetic picture is complex with multiple genes contributing 
            to the condition.<sup>[2]</sup> Neuroimaging studies have shown that people with dyslexia show differences in brain activity, 
            particularly in the left hemisphere regions involved in reading, including the phonological processing regions, 
            the visual word form area, and neural connectivity between reading-related brain regions.<sup>[3]</sup> These neurological 
            differences explain why reading—which requires integrating visual information with language sounds and meanings—is 
            particularly challenging for people with dyslexia.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4">
            Dyslexia is diagnosed through comprehensive evaluation by qualified professionals such as educational 
            psychologists, school psychologists, or neuropsychologists. The assessment typically includes standardized 
            tests of reading, writing, and spelling, phonological processing assessments, evaluation of cognitive abilities, 
            educational and developmental history, observation and interview with the individual and family, and assessment 
            of other learning and attention issues. Early identification is important, as intervention is most effective 
            when provided early. However, dyslexia can be diagnosed and supported at any age.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4">
            Evidence-based reading interventions are essential for individuals with dyslexia. Effective approaches include 
            structured literacy programs (such as Orton-Gillingham and Wilson Reading System), explicit phonics instruction, 
            multisensory teaching methods, and systematic and cumulative instruction. Accommodations and assistive technology 
            play important roles, including extended time on tests and assignments, audiobooks and text-to-speech software, 
            speech-to-text for writing, and alternative assessment methods. Support also includes building self-advocacy 
            skills and providing emotional support as individuals navigate learning challenges.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dyslexia</h2>
          
          <p className="mb-4">
            Individuals with dyslexia lead successful and fulfilling lives across all areas of society. Many successful 
            individuals have dyslexia, including entrepreneurs, artists, scientists, and leaders, demonstrating that 
            dyslexia often coexists with strengths in creative thinking, problem-solving, and big-picture conceptualization. 
            Living well with dyslexia involves understanding one's learning profile, developing personalized strategies 
            and compensatory skills, accessing appropriate accommodations in education and employment, and building 
            confidence through areas of strength. Topics include recognizing and celebrating dyslexic strengths, 
            navigating academic and professional environments, self-advocacy, and understanding legal protections.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-living');
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
          <p>[1] Lyon, G. R., Shaywitz, S. E., & Shaywitz, B. A. (2003). "A definition of dyslexia." <em>Annals of Dyslexia</em>, 53(1), 1-14.</p>
          <p>[2] Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <em>Annual Review of Clinical Psychology</em>, 11, 283-307.</p>
          <p>[3] Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <em>Science</em>, 325(5938), 280-283.</p>
        </div>
      </section>
    </article>
  );
}