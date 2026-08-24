import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticlePANDASProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticlePANDAS({ setCurrentArticle }: ArticlePANDASProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('pandas-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('pandas-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('pandas-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('pandas-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('pandas-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with PANDAS/PANS',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('pandas-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        PANDAS
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-[#0c264d]">PANDAS</strong> (Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections) is a condition where a streptococcal infection triggers an autoimmune response that affects the brain, leading to a sudden onset of neuropsychiatric symptoms in children.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> This acquired brain condition represents a dramatic, overnight shift in how the child's brain processes information, regulates intense emotions, and controls behavior.
          </p>
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>
        
        <div className="w-full">
          <InfoBox 
            title="PANDAS" 
            image="/images/pandas/pandas-main-infobox.webp"
            data={[
              { label: 'Full name', value: 'Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections' },
              { label: 'Specialty', value: 'Pediatric Neurology, Immunology, Psychiatry' },
              { label: 'Cause', value: 'Autoimmune response to streptococcal infection' },
              { label: 'Age of onset', value: 'Prepubertal (ages 3 to puberty)' },
              { label: 'Duration', value: 'Variable (episodic, chronic, or resolves)' },
              { label: 'Primary symptoms', value: 'Sudden onset OCD and/or tics' },
            ]} 
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/pandas/pandas-overview-intro.webp"
            alt="Immune system and autoimmune brain inflammation" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            PANDAS occurs when a child's immune system, after fighting a common streptococcal infection, mistakenly attacks the basal ganglia—a critical brain region responsible for movement control and behavioral regulation.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> This fierce autoimmune inflammation causes a sudden, dramatic onset of severe obsessive-compulsive disorder (OCD) and motor tics, effectively transforming the child's neurological functioning overnight.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('pandas-overview');
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
            src="/images/pandas/pandas-symptoms-intro.webp"
            alt="Child anxiety and behavioral changes in PANDAS" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            The hallmark of PANDAS is the abrupt, explosive onset of severe OCD behaviors and vocal or motor tics that appear within days to weeks of a strep infection.<sup className="text-[#10b981] font-bold ml-0.5">9</sup> Accompanying these core features are often profound personality changes, including intense separation anxiety, extreme emotional lability, age-inappropriate behavioral regression, and heavily disrupted sleep patterns.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('pandas-symptoms');
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
            src="/images/pandas/pandas-causes-intro.webp"
            alt="Streptococcal infection triggering PANDAS" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            PANDAS represents an acquired brain difference where an environmental trigger—specifically a Group A streptococcal infection—causes a devastatingly misdirected immune response.<sup className="text-[#10b981] font-bold ml-0.5">6</sup> Instead of solely attacking the bacteria, the child's antibodies cross-react and attack their own brain tissue, sparking rapid neuroinflammation that severely disrupts normal psychiatric and neurological functioning.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('pandas-causes');
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
            src="/images/pandas/pandas-diagnosis-intro.webp"
            alt="Medical testing and diagnosis for PANDAS" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Because there is no single definitive lab test for PANDAS, diagnosis heavily relies on clinical evaluation proving the sudden, prepubertal onset of OCD or tics temporally linked to a recent strep infection.<sup className="text-[#10b981] font-bold ml-0.5">23</sup> Evaluations aggressively utilize rapid strep tests, blood antibody titers (ASO and anti-DNase B), and rigorous neuropsychiatric assessments, though diagnosis frequently remains controversial within broader medical communities.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('pandas-diagnosis');
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
            src="/images/pandas/pandas-support-intro.webp"
            alt="Treatment and therapy for children with PANDAS" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Treatment must aggressively target both the underlying infection through antibiotics and the resulting severe neuroinflammation using immunomodulatory therapies like NSAIDs, corticosteroids, or Intravenous Immunoglobulin (IVIG) for severe cases.<sup className="text-[#10b981] font-bold ml-0.5">30</sup> Simultaneously, families must utilize Cognitive-Behavioral Therapy (CBT), psychiatric medications, and strict school accommodations to help the child physically manage the intense behavioral fallout.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('pandas-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with PANDAS/PANS</h2>
          
          <ImageWithFallback 
            src="/images/pandas/pandas-living-intro.webp"
            alt="Family support and child recovery from PANDAS" 
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm" 
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Living with PANDAS means navigating an incredibly volatile, episodic condition where a child may fully recover with treatment or endure chronic symptom flares following every new immune challenge.<sup className="text-[#10b981] font-bold ml-0.5">38</sup> Families must remain hyper-vigilant for new strep exposures, maintain robust educational accommodations, and relentlessly advocate within medical systems to protect their child's rapidly shifting neurological reality.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('pandas-living');
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
            <p>1. Swedo, S. E., Leonard, H. L., Garvey, M., et al. (1998). "Pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections: Clinical description of the first 50 cases." <i>American Journal of Psychiatry</i>. https://doi.org/10.xxxx/xxxxx</p>
            <p>2. Frankovich, J., Thienemann, M., Pearlstein, J., Crable, A., Brown, K., & Chang, K. (2015). "Multidisciplinary clinic dedicated to treating youth with pediatric acute-onset neuropsychiatric syndrome: Presenting characteristics of the first 47 consecutive patients." <i>Journal of Child and Adolescent Psychopharmacology</i>. https://doi.org/10.xxxx/xxxxx</p>
            <p>3. Swedo, S. E., Leckman, J. F., & Rose, N. R. (2012). "From research subgroup to clinical syndrome: Modifying the PANDAS criteria to describe PANS (pediatric acute-onset neuropsychiatric syndrome)." <i>Pediatrics & Therapeutics</i>. https://doi.org/10.xxxx/xxxxx</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Williams, K. A., & Swedo, S. E. (2015). "Post-infectious autoimmune disorders: Sydenham's chorea, PANDAS and beyond." <i>Brain Research</i>. https://doi.org/10.xxxx/xxxxx</li>
            <li>Murphy, T. K., Storch, E. A., Turner, A., Reid, J. M., Tan, J., & Lewin, A. B. (2010). "Maternal history of autoimmune disease in children presenting with tics and/or obsessive-compulsive disorder." <i>Journal of Neuroimmunology</i>. https://doi.org/10.xxxx/xxxxx</li>
          </ul>
        </div>
      </div>
    </article>
  );
}