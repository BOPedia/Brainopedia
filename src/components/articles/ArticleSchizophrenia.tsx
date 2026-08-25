import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleSchizophreniaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleSchizophrenia({ setCurrentArticle }: ArticleSchizophreniaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('schizophrenia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('schizophrenia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('schizophrenia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('schizophrenia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('schizophrenia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Schizophrenia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('schizophrenia-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Schizophrenia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-[#0c264d]">Schizophrenia</strong> is a complex neurological condition that affects how a person perceives reality, thinks, and experiences the world. As understanding evolves, many advocates recognize schizophrenia as representing a distinct neurotype—a fundamentally different way of processing information and experiencing consciousness.
          </p>
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>
        
        <div className="w-full">
          <InfoBox 
            title="Schizophrenia" 
            image="/images/schizophrenia/schizophrenia-main-infobox.webp"
            data={[
              { label: 'Specialty', value: 'Psychiatry, Psychology, Neurology' },
              { label: 'Symptoms', value: 'Altered perception, different thought patterns, varied experiences' },
              { label: 'Usual onset', value: 'Late teens to early 30s' },
              { label: 'Duration', value: 'Lifelong neurotype' },
              { label: 'Frequency', value: 'Approximately 1% of population' },
              { label: 'Related conditions', value: 'Schizoaffective disorder' },
            ]} 
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/schizophrenia/schizophrenia-overview-intro.webp"
            alt="Perception and reality - understanding schizophrenia" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Schizophrenia affects approximately 1% of the global population and involves differences in brain structure, neurotransmitter function, and neural connectivity.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> Research shows variations in brain regions responsible for perception, thought organization, and reality testing, representing a unique form of consciousness that deserves understanding and respect.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('schizophrenia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <ImageWithFallback 
            src="/images/schizophrenia/schizophrenia-symptoms-intro.webp"
            alt="Abstract thought patterns - characteristics of schizophrenia" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Schizophrenia involves a range of experiences categorized into positive symptoms like hallucinations or delusions, and negative symptoms like reduced emotional expression or motivation.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> Viewing schizophrenia through a neurodivergent lens acknowledges that these experiences represent real neurological phenomena, highlighting the exceptional creativity and profound philosophical insights many individuals demonstrate.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('schizophrenia-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <ImageWithFallback 
            src="/images/schizophrenia/schizophrenia-causes-intro.webp"
            alt="Brain neurotransmitters - neurological basis of schizophrenia" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Schizophrenia involves differences in brain structure and neurotransmitter function—particularly dopamine and glutamate—affecting how the brain organizes thoughts and tests reality. While it has a strong genetic component involving multiple interacting genes, environmental factors like prenatal complications or childhood trauma can contribute to its development in those with genetic vulnerability.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('schizophrenia-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <ImageWithFallback 
            src="/images/schizophrenia/schizophrenia-diagnosis-intro.webp"
            alt="Psychiatric evaluation - diagnosing schizophrenia" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Schizophrenia is diagnosed clinically by mental health professionals through detailed clinical interviews, psychiatric history, and assessing symptoms over a period of at least six months. The evaluation process includes medical screening to rule out other causes, with early intervention and coordinated specialty care programs showing significantly improved outcomes for individuals.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('schizophrenia-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <ImageWithFallback 
            src="/images/schizophrenia/schizophrenia-support-intro.webp"
            alt="Therapy and recovery support - managing schizophrenia" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            A neurodivergent-affirming approach emphasizes collaboration and quality of life, combining individualized antipsychotic medications with therapies like CBT to help develop coping strategies.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> Essential support systems also include peer communities, supported employment programs, and trauma-informed care that recognizes the abilities and potential of the individual rather than simply attempting to eliminate their unique experiences.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('schizophrenia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Schizophrenia</h2>
          
          <ImageWithFallback 
            src="/images/schizophrenia/schizophrenia-living-intro.webp"
            alt="Living with schizophrenia - navigating unique experiences" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Schizophrenia is a lifelong neurotype that individuals learn to navigate, leading meaningful and fulfilling lives across all areas of society. With appropriate treatment, peer support, and strong self-advocacy skills, people with schizophrenia thrive in education and careers while successfully leveraging their creativity and unique insights.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('schizophrenia-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.). American Psychiatric Publishing. https://doi.org/10.1176/appi.books.9780890425596</p>
            <p>2. Geekie, J., Randal, P., Lampshire, D., & Read, J. (2012). <i>Experiencing psychosis: Personal and professional perspectives</i>. Routledge. https://doi.org/10.4324/9780203803158</p>
            <p>3. Saha, S., Chant, D., Welham, J., & McGrath, J. (2005). A systematic review of the prevalence of schizophrenia. <i>PLoS Medicine</i>. https://doi.org/10.1371/journal.pmed.0020141</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Karlsgodt, K. H., Sun, D., & Cannon, T. D. (2010). Structural and functional brain abnormalities in schizophrenia. <i>Current Directions in Psychological Science</i>. https://doi.org/10.1177/0963721410377601</li>
            <li>Longden, E., Corstens, D., Escher, S., & Romme, M. (2012). Voice hearing in a biographical context: A model for formulating the relationship between voices and life history. <i>Psychosis</i>. https://doi.org/10.1080/17522439.2011.596566</li>
          </ul>
        </div>
      </div>
    </article>
  );
}