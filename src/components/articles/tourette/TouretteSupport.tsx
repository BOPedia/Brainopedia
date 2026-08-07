import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteSupport({ setCurrentArticle }: TouretteSupportProps) {
  return (
    <article className="max-w-6xl font-spartan animate-fadeIn">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          TS: Support & Management
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
            src="/images/tourette/tourette-support-main.webp"
            alt="Behavioral therapy and support - managing Tourette syndrome"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <p className="mb-4">
            Many individuals with mild TS do not require treatment. When intervention is needed, treatment decisions should be based on how much the tics interfere with daily functioning, not just their presence or severity. Behavioral therapies include Comprehensive Behavioral Intervention for Tics (CBIT), Habit Reversal Training (HRT), Exposure and Response Prevention (ERP), psychoeducation about tics, and relaxation and stress management techniques.
          </p>
          <p className="mb-4">
            When behavioral approaches are insufficient, medication may be considered to help reduce tic severity, though all have potential side effects and treatment should be individualized and carefully monitored. Supporting co-occurring conditions is crucial and includes treatment for ADHD if present, management of OCD symptoms, therapy for anxiety or mood disorders, and educational support and accommodations. Environmental and social support involves education for family, teachers, and peers about TS, reducing stigma and misconceptions, school accommodations (extended time, quiet space for tic release), support groups and community connection, and advocacy and self-advocacy skills.
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
            <p>Conelea, C. A., et al. (2011). "The impact of a stress induction task on tic frequencies in youth with Tourette syndrome." <i>Behaviour Research and Therapy</i>. https://doi.org/10.1016/j.brat.2011.05.006</p>
            <p>Piacentini, J., et al. (2010). "Behavior therapy for children with Tourette disorder: A randomized controlled trial." <i>JAMA</i>. https://doi.org/10.1001/jama.2010.607</p>
            <p>Pringsheim, T., et al. (2019). "Comprehensive systematic review summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders." <i>Neurology</i>. https://doi.org/10.1212/WNL.0000000000007467</p>
            <p>Pringsheim, T., et al. (2019). "Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders." <i>Neurology</i>. https://doi.org/10.1212/WNL.0000000000007466</p>
            <p>Rizzo, R., et al. (2017). "Gilles de la Tourette syndrome, depression, depressive illness, and correlates in a child and adolescent population." <i>Journal of Child and Adolescent Psychopharmacology</i>. https://doi.org/10.1089/cap.2016.0093</p>
            <p>Verdellen, C., et al. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part III: Behavioural and psychosocial interventions." <i>European Child & Adolescent Psychiatry</i>. https://doi.org/10.1007/s00787-011-0167-1</p>
            <p>Wilhelm, S., et al. (2012). "Randomized trial of behavior therapy for adults with Tourette syndrome." <i>Archives of General Psychiatry</i>. https://doi.org/10.1001/archgenpsychiatry.2011.1528</p>
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