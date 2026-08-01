import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteSymptoms({ setCurrentArticle }: TouretteSymptomsProps) {
  return (
    <article className="max-w-6xl font-spartan animate-fadeIn">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          TS: Symptoms & Characteristics
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
            src="/images/tourette/tourette-symptoms-main.png"
            alt="Facial expressions and movements - characteristics of tics"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <p className="mb-4">
            Tourette syndrome is characterized by both motor and vocal tics. Motor tics can be simple (eye blinking, head jerking, shoulder shrugging, facial grimacing, nose twitching, jaw movements) or complex (touching objects or people, jumping, hopping, twirling, spinning, making gestures, bending or gyrating). Vocal (phonic) tics can also be simple (throat clearing, coughing, grunting, sniffing, barking, yelping, clicking sounds) or complex (repeating words or phrases echolalia, repeating one's own words palilalia, using socially inappropriate words coprolalia which affects only 10-15%,<sup className="text-[#10b981] font-bold ml-0.5">1, 2</sup> making animal sounds).
          </p>
          <p className="mb-4">
            Tics wax and wane in frequency and severity, can change type and location over time, may worsen with stress, excitement, or fatigue, often decrease during focused activities, can typically be temporarily suppressed with effort, and typically decrease during sleep. Many individuals with TS also have co-occurring conditions such as ADHD (50-60%), OCD (30-40%), anxiety disorders, or learning differences, which often cause more functional impairment than the tics themselves.<sup className="text-[#10b981] font-bold ml-0.5">3, 4</sup>
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
            <p>1. Robertson, M. M. (2000). "Tourette syndrome, associated conditions and the complexities of treatment." <i>Brain</i>. https://doi.org/10.1093/brain/123.3.425</p>
            <p>2. Van Borsel, J., & Tetnowski, J. A. (2007). "Fluency disorders in genetic syndromes." <i>Journal of Fluency Disorders</i>. https://doi.org/10.1016/j.jfludis.2007.07.002</p>
            <p>3. Hirschtritt, M. E., et al. (2015). "Lifetime prevalence, age of risk, and genetic relationships of comorbid psychiatric disorders in Tourette syndrome." <i>JAMA Psychiatry</i>. https://doi.org/10.1001/jamapsychiatry.2014.2650</p>
            <p>4. Robertson, M. M., et al. (2009). "The international prevalence, epidemiology, and clinical phenomenology of Tourette syndrome: A cross-cultural perspective." <i>Journal of Psychosomatic Research</i>. https://doi.org/10.1016/j.jpsychores.2009.08.005</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Conelea, C. A., & Woods, D. W. (2008). "The influence of contextual factors on tic expression in Tourette's syndrome: A review." <i>Journal of Psychosomatic Research</i>. https://doi.org/10.1016/j.jpsychores.2008.04.010</p>
            <p>Jankovic, J., & Kurlan, R. (2011). "Tourette syndrome: Evolving concepts." <i>Movement Disorders</i>. https://doi.org/10.1002/mds.23618</p>
            <p>Leckman, J. F., et al. (2014). "Clinical features of Tourette syndrome and tic disorders." <i>Journal of Obsessive-Compulsive and Related Disorders</i>. https://doi.org/10.1016/j.jocrd.2014.03.004</p>
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