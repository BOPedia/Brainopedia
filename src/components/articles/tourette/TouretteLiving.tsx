import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteLiving({ setCurrentArticle }: TouretteLivingProps) {
  return (
    <article className="max-w-6xl font-spartan animate-fadeIn">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Living with Tourette Syndrome
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
            src="/images/tourette/tourette-living-main.png"
            alt="Living with Tourette syndrome - successful navigation"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <p className="mb-4">
            Individuals with Tourette syndrome lead successful and fulfilling lives across all areas of society. For many individuals, tics improve significantly in late adolescence or early adulthood, though some continue to experience tics throughout life. Living with TS involves navigating tics, premonitory urges, and often co-occurring conditions, while combating misconceptions and stigma. With appropriate support and understanding, people with TS develop effective strategies for managing tics and thrive in education, careers, and relationships.
          </p>
          <p className="mb-4">
            Living well with Tourette syndrome involves understanding one's tic patterns and triggers, developing strategies for managing tics and premonitory urges, accessing appropriate accommodations in education and employment, addressing co-occurring conditions, and building self-advocacy skills. Topics related to living with Tourette syndrome include managing tics in different environments, addressing stigma and misconceptions (particularly around coprolalia which only affects 10-15%), navigating school and workplace accommodations, managing co-occurring conditions like ADHD and OCD, building self-esteem and confidence, connecting with the Tourette community, educating others about the reality of TS beyond media portrayals, and understanding that tics often improve in adulthood.
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
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed italic" style={{ textIndent: 0 }}>
            <p>No explicit statistical claims or empirical studies directly cited in the text of this section.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Burd, L., et al. (2001). "Long-term follow-up of an epidemiologically defined cohort of patients with Tourette syndrome." <i>Journal of Child Neurology</i>. https://doi.org/10.1177/088307380101600605</p>
            <p>Conelea, C. A., et al. (2011). "Exploring the impact of chronic tic disorders on youth: Results from the Tourette Syndrome Impact Survey." <i>Child Psychiatry & Human Development</i>. https://doi.org/10.1007/s10578-010-0209-8</p>
            <p>Cutler, D., et al. (2009). "The quality of life of young people with Tourette syndrome." <i>Child: Care, Health and Development</i>. https://doi.org/10.1111/j.1365-2214.2009.00958.x</p>
            <p>Elstner, K., et al. (2001). "Quality of life (QOL) of patients with Gilles de la Tourette's syndrome." <i>Acta Psychiatrica Scandinavica</i>. https://doi.org/10.1034/j.1600-0447.2001.00041.x</p>
            <p>Groth, C., et al. (2017). "Course of Tourette syndrome and comorbidities in a large prospective clinical study." <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>. https://doi.org/10.1016/j.jaac.2017.01.010</p>
            <p>Storch, E. A., et al. (2005). "Reliability and validity of the Yale Global Tic Severity Scale." <i>Psychological Assessment</i>. https://doi.org/10.1037/1040-3590.17.4.486</p>
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