import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteDiagnosis({ setCurrentArticle }: TouretteDiagnosisProps) {
  return (
    <article className="max-w-6xl font-spartan animate-fadeIn">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          TS: Testing & Diagnosing
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
            src="/images/tourette/tourette-diagnosis-main.webp"
            alt="Neurologist examination - diagnosing Tourette syndrome"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <p className="mb-4">
            Tourette syndrome is diagnosed clinically based on the presence of both motor and vocal tics lasting more than one year. There is no blood test or imaging study that can diagnose TS. The diagnostic criteria include both multiple motor tics and one or more vocal tics present at some point, tics occurring many times a day nearly every day or intermittently for more than one year, onset before age 18, and symptoms not caused by substance use or another medical condition.
          </p>
          <p className="mb-4">
            Diagnosis is typically made by a neurologist, psychiatrist, or developmental pediatrician. The evaluation includes detailed history, neurological examination, and assessment for co-occurring conditions such as ADHD, OCD, anxiety, or learning differences. Medical tests may be ordered to rule out other causes of tic-like movements. The Yale Global Tic Severity Scale (YGTSS) is commonly used to assess tic severity and impact on functioning.
          </p>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both"></div>
      
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
            <p>Eddy, C. M., et al. (2009). "Neuropsychological aspects of Tourette syndrome: A review." <i>Journal of Psychosomatic Research</i>. https://doi.org/10.1016/j.jpsychores.2009.07.009</p>
            <p>Leckman, J. F., et al. (1989). "The Yale Global Tic Severity Scale: Initial testing of a clinician-rated scale of tic severity." <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>. https://doi.org/10.1097/00004583-198907000-00015</p>
            <p>Müller-Vahl, K. R., et al. (2019). "Tic disorders revisited: Introduction of the term 'tic spectrum disorders'." <i>European Child & Adolescent Psychiatry</i>. https://doi.org/10.1007/s00787-018-1246-y</p>
            <p>Roessner, V., et al. (2011). "European clinical guidelines for Tourette syndrome and other tic disorders. Part II: Pharmacological treatment." <i>European Child & Adolescent Psychiatry</i>. https://doi.org/10.1007/s00787-011-0163-5</p>
            <p>Scahill, L., et al. (2014). "The prevalence of tic disorders and clinical characteristics in children." <i>Journal of Obsessive-Compulsive and Related Disorders</i>. https://doi.org/10.1016/j.jocrd.2014.03.002</p>
            <p>Singer, H. S. (2005). "Tourette's syndrome: From behaviour to biology." <i>The Lancet Neurology</i>. https://doi.org/10.1016/S1474-4422(05)01012-4</p>
            <p>World Health Organization. (2018). <i>International classification of diseases for mortality and morbidity statistics</i> (11th ed.). Geneva: WHO. https://icd.who.int/</p>
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