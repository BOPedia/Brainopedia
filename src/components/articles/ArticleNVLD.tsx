import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleNVLDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleNVLD({ setCurrentArticle }: ArticleNVLDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with NVLD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-living');
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
        Non-Verbal Learning Disability (NVLD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Non-Verbal Learning Disability (NVLD)</strong> is a neurological condition characterized 
            by a specific pattern of strengths and challenges: exceptional verbal abilities combined with 
            difficulties in visual-spatial processing, motor coordination, and social perception. This creates 
            a unique learning profile where language-based tasks come easily while non-verbal information 
            processing presents significant challenges.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Non-Verbal Learning Disability"
            image="/images/nvld/nvld-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'NVLD, NLD' },
              { label: 'Specialty', value: 'Neuropsychology, Educational Psychology' },
              { label: 'Symptoms', value: 'Strong verbal skills, visual-spatial challenges' },
              { label: 'Key pattern', value: 'Left hemisphere strengths, right hemisphere challenges' },
              { label: 'Frequency', value: 'Approximately 3-4% of population' },
              { label: 'Often confused with', value: 'Autism spectrum (but distinct)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-overview-intro.webp"
            alt="Overview of NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            NVLD represents a distinct pattern of brain organization where the right hemisphere functions differently than typical, while left hemisphere functions (like language and verbal reasoning) often exceed typical development. This neurological profile affects approximately 3-4% of the population.<sup>1</sup> While it shares some social perception challenges with autism, NVLD is a distinct condition with its own unique neurological signature.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-symptoms-intro.webp"
            alt="Symptoms of NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            NVLD presents across three primary domains: visual-spatial (trouble with maps, puzzles, and spatial relationships), motor coordination (fine and gross motor clumsiness), and social perception (difficulty reading facial expressions and non-verbal cues). In stark contrast, individuals usually demonstrate remarkable strengths in vocabulary, verbal memory, and advanced reasoning.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-causes-intro.webp"
            alt="Causes of NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Research suggests NVLD involves differences in how the right hemisphere processes information, particularly affecting visual-spatial tasks, pattern recognition, and holistic thinking.<sup>2</sup> Brain imaging reveals variations in white matter development and inter-hemispheric communication. While the specific causes aren't fully mapped, it is present from birth and tends to run in families.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-diagnosis-intro.webp"
            alt="Diagnosing NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Diagnosis requires a comprehensive neuropsychological evaluation. Assessments look for the characteristic pattern: high verbal abilities contrasting sharply with lower visual-spatial and motor skills. It is often identified in elementary school when visual-spatial and social demands increase, though some are not diagnosed until much later.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-support-intro.webp"
            alt="Support for NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective support builds on verbal strengths while accommodating challenges. Strategies include verbally explaining visual information, breaking complex tasks into sequential steps, and explicitly teaching social rules. Occupational therapy and technology, such as navigation and organizational apps, can also be highly beneficial.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-living-intro.webp"
            alt="Living with NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with NVLD</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With appropriate support, individuals with NVLD lead highly successful lives, often excelling in language-heavy careers like writing, law, or counseling. Thriving involves leveraging these exceptional verbal abilities, utilizing compensatory technology for spatial challenges, and developing explicit strategies for social navigation and self-advocacy.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-living');
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
            <p>1. Pelletier, P. M., Ahmad, S. A., & Rourke, B. P. (2001). "Classification rules for basic phonological processing disabilities and nonverbal learning disabilities: Formulation and external validity." <i>Child Neuropsychology</i>, 7(2), 84-98.</p>
            <p>2. Rourke, B. P. (1989). <i>Nonverbal Learning Disabilities: The Syndrome and the Model</i>. Guilford Press.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Bloom, E., & Heath, N. (2010). "Recognition, expression, and understanding facial expressions of emotion in adolescents with nonverbal and general learning disabilities." <i>Journal of Learning Disabilities</i>, 43(2), 180-192.</p>
            <p>Cornoldi, C., Rigoni, F., Tressoldi, P. E., & Vio, C. (1999). "Imagery deficits in nonverbal learning disabilities." <i>Journal of Learning Disabilities</i>, 32(1), 48-57.</p>
            <p>Davis, J. M., & Broitman, J. (2011). "Nonverbal learning disabilities in children: Bridging the gap between science and practice." <i>Springer Science & Business Media</i>.</p>
            <p>Drummond, C. R., Ahmad, S. A., & Rourke, B. P. (2005). "Rules for the classification of younger children with nonverbal learning disabilities and basic phonological processing disabilities." <i>Archives of Clinical Neuropsychology</i>, 20(2), 171-182.</p>
            <p>Fine, J. G., Semrud-Clikeman, M., Bledsoe, J. C., & Musielak, K. A. (2013). "A critical review of the literature on NLD as a developmental disorder." <i>Child Neuropsychology</i>, 19(2), 190-223.</p>
            <p>Forrest, B. J. (2004). "The utility of math difficulties, internalized psychopathology, and visual-spatial deficits to identify children with the nonverbal learning disability syndrome: Evidence for a visual-spatial disability." <i>Child Neuropsychology</i>, 10(2), 129-146.</p>
            <p>Klin, A., Volkmar, F. R., Sparrow, S. S., et al. (1995). "Validity and neuropsychological characterization of Asperger syndrome: Convergence with nonverbal learning disabilities syndrome." <i>Journal of Child Psychology and Psychiatry</i>, 36(7), 1127-1140.</p>
            <p>Mamen, M. (2007). <i>Understanding Nonverbal Learning Disabilities: A Common-Sense Guide for Parents and Professionals</i>. Jessica Kingsley Publishers.</p>
            <p>Palombo, J. (2006). <i>Nonverbal Learning Disabilities: A Clinical Perspective</i>. W. W. Norton & Company.</p>
            <p>Rourke, B. P., Ahmad, S. A., Collins, D. W., et al. (2002). "Child clinical/pediatric neuropsychology: Some recent advances." <i>Annual Review of Psychology</i>, 53, 309-339.</p>
            <p>Rourke, B. P., & Tsatsanis, K. D. (2000). "Nonverbal learning disabilities and Asperger syndrome." In A. Klin et al. (Eds.), <i>Asperger Syndrome</i> (pp. 231-253). Guilford Press.</p>
            <p>Semrud-Clikeman, M., & Glass, K. (2010). "The relation of humor and child development: Social, adaptive, and emotional aspects." <i>Journal of Child Neurology</i>, 25(10), 1248-1260.</p>
            <p>Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children." <i>Psychological Bulletin</i>, 107(2), 196-209.</p>
            <p>Stewart, K. (2002). <i>Helping a Child with Nonverbal Learning Disorder or Asperger's Disorder</i>. New Harbinger Publications.</p>
            <p>Tanguay, P. B. (2002). <i>Nonverbal Learning Disabilities at School: Educating Students with NLD, Asperger Syndrome and Related Conditions</i>. Jessica Kingsley Publishers.</p>
            <p>Thompson, S. (1997). <i>The Source for Nonverbal Learning Disorders</i>. LinguiSystems.</p>
            <p>Weintraub, S., & Mesulam, M. M. (1983). "Developmental learning disabilities of the right hemisphere: Emotional, interpersonal, and cognitive components." <i>Archives of Neurology</i>, 40(8), 463-468.</p>
            <p>Whitney, R. V. (2002). <i>Bridging the Gap: Raising a Child with Nonverbal Learning Disorder</i>. Perigee Books.</p>
          </div>
        </div>
      </div>
    </article>
  );
}