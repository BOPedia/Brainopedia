import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleOCDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleOCD({ setCurrentArticle }: ArticleOCDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('ocd-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('ocd-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('ocd-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('ocd-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('ocd-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with OCD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('ocd-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Obsessive-Compulsive Disorder (OCD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Obsessive-compulsive disorder (OCD)</strong> is a neurological condition characterized by 
            persistent, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) 
            performed to reduce anxiety. Increasingly understood through a neurodivergent lens, OCD represents 
            a distinct pattern of brain processing involving specific neural loops and information processing differences.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="OCD"
            image="/images/ocd/ocd-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Obsessive-Compulsive Disorder' },
              { label: 'Specialty', value: 'Psychiatry, Psychology, Neurology' },
              { label: 'Symptoms', value: 'Intrusive thoughts, repetitive behaviors, anxiety' },
              { label: 'Usual onset', value: 'Childhood to early adulthood' },
              { label: 'Duration', value: 'Chronic (lifelong neurotype)' },
              { label: 'Frequency', value: '2-3% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/ocd/ocd-overview-intro.webp"
            alt="Overview of OCD"
            className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Affecting approximately 2-3% of the population, OCD is increasingly recognized as a distinct neurotype rather than simply an anxiety disorder.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> The OCD brain fundamentally processes threat, certainty, and completion differently, creating neurological "loops" of thought and behavior that manifest in various presentations such as contamination fears or "Pure-O" (primarily obsessional) symptoms.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('ocd-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/ocd/ocd-symptoms-intro.webp"
            alt="Symptoms of OCD"
            className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            OCD is primarily characterized by obsessions—intrusive, unwanted thoughts or images that cause significant distress—followed by compulsions, which are the repetitive physical or mental acts performed in an attempt to neutralize that anxiety. While these compulsions provide temporary relief, they ultimately reinforce the obsessive cycle, trapping the individual in a highly distressing, time-consuming loop of doubt and behavioral checking.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('ocd-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/ocd/ocd-causes-intro.webp"
            alt="Causes of OCD"
            className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Brain imaging studies reveal that OCD originates from structural and functional differences within the cortico-striato-thalamo-cortical (CSTC) circuit, particularly in regions responsible for error detection and behavioral inhibition.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> These neurological differences, combined with altered serotonin and dopamine systems, cause the brain's "warning system" to misfire, making it incredibly difficult to discard intrusive thoughts or feel a sense of completion.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('ocd-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/ocd/ocd-diagnosis-intro.webp"
            alt="Diagnosing OCD"
            className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            OCD is clinically diagnosed by mental health professionals through detailed clinical interviews and standardized assessment tools like the Yale-Brown Obsessive Compulsive Scale (Y-BOCS). A formal diagnosis requires that the obsessions and compulsions consume significant time (typically an hour or more per day) and cause substantial distress or impairment in daily functioning, rather than simply being a preference for neatness or order.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('ocd-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/ocd/ocd-support-intro.webp"
            alt="Support for OCD"
            className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            A neurodivergent-affirming approach to OCD combines self-acceptance with the gold-standard treatment: Exposure and Response Prevention (ERP) therapy, which involves gradually facing feared situations while actively preventing the compulsive response. This structured therapy is often highly successful when paired with Acceptance and Commitment Therapy (ACT) to help individuals tolerate uncertainty, and potentially SSRI medications to help regulate the underlying neurotransmitter systems.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('ocd-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/ocd/ocd-living-intro.webp"
            alt="Living with OCD"
            className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with OCD</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With evidence-based treatment and self-understanding, individuals successfully manage this chronic neurotype, thriving in their careers and relationships even as symptoms naturally wax and wane over time. Living well involves untangling one's identity from intrusive thoughts, practicing deep self-compassion, and recognizing the unique strengths—such as high empathy, attention to detail, and conscientiousness—that often accompany the OCD brain.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('ocd-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both"></div>
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Ruscio, A. M., Stein, D. J., Chiu, W. T., & Kessler, R. C. (2010). "The epidemiology of obsessive-compulsive disorder in the National Comorbidity Survey Replication." <i>Molecular Psychiatry</i>, 15(1), 53-63. https://doi.org/10.1038/mp.2008.94</p>
            <p>2. Milad, M. R., & Rauch, S. L. (2012). "Obsessive-compulsive disorder: Beyond segregated cortico-striatal pathways." <i>Trends in Cognitive Sciences</i>, 16(1), 43-51. https://doi.org/10.1016/j.tics.2011.11.003</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Association.</li>
            <li>Pauls, D. L., Abramovitch, A., Rauch, S. L., & Geller, D. A. (2014). "Obsessive-compulsive disorder: An integrative genetic and neurobiological perspective." <i>Nature Reviews Neuroscience</i>, 15(6), 410-424. https://doi.org/10.1038/nrn3746</li>
          </ul>
        </div>
      </div>
    </article>
  );
}