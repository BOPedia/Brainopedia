import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleBipolarProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleBipolar({ setCurrentArticle }: ArticleBipolarProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Bipolar Disorder',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('bipolar-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Bipolar Disorder
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-[#0c264d]">Bipolar disorder</strong> is a neurological condition characterized by significant shifts 
            in mood, energy, and activity levels. Increasingly viewed through a neurodivergent lens, bipolar 
            disorder represents a distinct pattern of energy cycles, creativity, and emotional intensity rooted 
            in brain chemistry and neural processing differences.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Bipolar Disorder"
            image="/images/bipolar/bipolar-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Manic-depressive illness' },
              { label: 'Specialty', value: 'Psychiatry, Psychology' },
              { label: 'Symptoms', value: 'Mood shifts, energy cycles, varying activity levels' },
              { label: 'Usual onset', value: 'Late teens to early adulthood' },
              { label: 'Duration', value: 'Lifelong neurotype' },
              { label: 'Frequency', value: '2.8% of adults' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/bipolar/bipolar-overview-intro.webp"
            alt="Overview of Bipolar Disorder"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Bipolar disorder affects approximately 2.8% of adults in the United States, representing a distinct neurotype characterized by profound shifts in mood, energy, and activity levels.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> Rather than simply being viewed as a mood deficit, the neurodivergent perspective recognizes these cyclical variations as a fundamental difference in brain chemistry that often brings periods of exceptional creativity alongside significant regulatory challenges.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-overview');
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
            src="/images/bipolar/bipolar-symptoms-intro.webp"
            alt="Symptoms of Bipolar Disorder"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Individuals with bipolar disorder experience distinct cycles between depressive episodes of low energy and manic or hypomanic periods marked by elevated mood, racing thoughts, and highly intensive productivity. While these natural cycles can foster deep emotional sensitivity and innovative thinking, the unpredictability of these extreme mood shifts often requires careful management to prevent impulsivity and severe sleep disruption.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-symptoms');
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
            src="/images/bipolar/bipolar-causes-intro.webp"
            alt="Causes of Bipolar Disorder"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Brain imaging studies demonstrate that bipolar disorder involves structural and functional differences in the brain circuits responsible for emotion regulation, reward processing, and circadian rhythms.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> While environmental factors and trauma can trigger episodes, the condition is rooted in a strong genetic vulnerability that alters how the brain's dopamine and serotonin neurotransmitter systems operate.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-causes');
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
            src="/images/bipolar/bipolar-diagnosis-intro.webp"
            alt="Diagnosing Bipolar Disorder"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Clinical diagnosis requires a comprehensive evaluation by mental health professionals to identify a historical pattern of mood episodes, specifically distinguishing between Bipolar I (full manic episodes) and Bipolar II (hypomanic and major depressive episodes). Because the condition is characterized by cycles that must be observed over time, accurate diagnosis often requires extensive mood tracking and careful screening to rule out overlapping neurodivergent profiles like ADHD.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-diagnosis');
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
            src="/images/bipolar/bipolar-support-intro.webp"
            alt="Support for Bipolar Disorder"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            A neurodivergent-affirming approach to management balances symptom stability with self-acceptance, typically utilizing a combination of mood-stabilizing medications and targeted therapies like Cognitive-Behavioral Therapy (CBT). Because bipolar brains are highly sensitive to circadian rhythm disruptions, implementing rigorous lifestyle practices—especially maintaining a strict sleep schedule and managing environmental stress—is absolutely critical for long-term stability.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Bipolar Disorder</h2>
          
          <ImageWithFallback 
            src="/images/bipolar/bipolar-living-intro.webp"
            alt="Living with Bipolar Disorder"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            With dedicated treatment and strong self-awareness, individuals with bipolar disorder successfully navigate their natural energy cycles to lead highly fulfilling lives and excel in their careers. Long-term thriving involves diligently tracking mood triggers, leveraging the intense focus of hypomanic periods strategically, and viewing the condition as a unique neurological rhythm rather than a personal failing.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('bipolar-living');
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
            <p>1. Merikangas, K. R., Jin, R., He, J. P., et al. (2011). Prevalence and correlates of bipolar spectrum disorder in the World Mental Health Survey Initiative. <i>Archives of General Psychiatry</i>. https://doi.org/10.1001/archgenpsychiatry.2011.12</p>
            <p>2. Strakowski, S. M., Adler, C. M., Almeida, J., et al. (2012). The functional neuroanatomy of bipolar disorder: A consensus model. <i>Bipolar Disorders</i>. https://doi.org/10.1111/j.1399-5618.2012.01022.x</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.). American Psychiatric Publishing. https://doi.org/10.1176/appi.books.9780890425596</li>
            <li>Jamison, K. R. (1993). <i>Touched with fire: Manic-depressive illness and the artistic temperament</i>. Free Press. https://www.simonandschuster.com/books/Touched-with-Fire/Kay-Redfield-Jamison/9780684831831</li>
          </ul>
        </div>
      </div>
    </article>
  );
}