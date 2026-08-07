import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteOverview({ setCurrentArticle }: TouretteOverviewProps) {
  return (
    <article className="max-w-6xl font-spartan animate-fadeIn">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          TS: Overview
        </h1>
        <button 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:flex hidden"
        >
          <span className="text-lg">←</span>
          All About TS
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-lg">←</span>
        All About TS
      </button>

      <div className="space-y-8">
        <section className="flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-overview-main.webp"
            alt="Child with neurological condition - understanding Tourette syndrome"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <p className="mb-4">
            Tourette syndrome affects approximately 1 in 160 children, with males being diagnosed about 3-4 times more frequently than females.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> The condition is part of a spectrum of tic disorders and typically begins between ages 5 and 10, with tics often peaking in severity during early adolescence. Tics are sudden, rapid, recurrent movements or vocalizations.
          </p>
          <p className="mb-4">
            While individuals with TS have some degree of control over their tics, suppressing them requires effort and can cause discomfort or a feeling of tension that is only relieved when the tic is performed. Many people describe a premonitory urge—an uncomfortable sensation that precedes the tic. It's important to note that the common media portrayal of TS focusing on coprolalia (involuntary swearing) is misleading—only about 10-15% of people with TS experience this symptom.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> Most individuals with TS have much more subtle tics that may go unnoticed by others.
          </p>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner mb-10 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Knight, T., et al. (2012). "Prevalence of tic disorders: A systematic review and meta-analysis." <i>Pediatric Neurology</i>. https://doi.org/10.1016/j.pediatrneurol.2012.05.002</p>
            <p>2. Freeman, R. D., et al. (2000). "An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries." <i>Developmental Medicine & Child Neurology</i>. https://doi.org/10.1017/s0012162200000857</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Bloch, M. H., & Leckman, J. F. (2009). "Clinical course of Tourette syndrome." <i>Journal of Psychosomatic Research</i>. https://doi.org/10.1016/j.jpsychores.2009.09.002</p>
            <p>Cath, D. C., et al. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part I: Assessment." <i>European Child & Adolescent Psychiatry</i>. https://doi.org/10.1007/s00787-011-0164-4</p>
            <p>Jankovic, J. (2001). "Tourette's syndrome." <i>New England Journal of Medicine</i>. https://doi.org/10.1056/NEJMra011279</p>
            <p>Kwak, C., et al. (2003). "Premonitory sensory phenomenon in Tourette's syndrome." <i>Movement Disorders</i>. https://doi.org/10.1002/mds.10618</p>
            <p>Leckman, J. F., et al. (1993). "Premonitory urges in Tourette's syndrome." <i>American Journal of Psychiatry</i>. https://doi.org/10.1176/ajp.150.1.98</p>
          </div>
        </div>
      </div>

      {/* Bottom Back Button */}
      <div className="mt-8 clear-both">
        <button 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('tourette'); }} 
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 inline-flex"
        >
          <span className="text-lg">←</span>
          All About TS
        </button>
      </div>
    </article>
  );
}