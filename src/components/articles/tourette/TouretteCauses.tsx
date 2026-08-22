import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TouretteCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteCauses({ setCurrentArticle }: TouretteCausesProps) {
  return (
    <article className="max-w-6xl font-spartan animate-fadeIn">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          TS: Causes & Origins
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
            src="/images/tourette/tourette-causes-main.webp"
            alt="Brain basal ganglia - neurological basis of Tourette syndrome"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <p className="mb-4">
            Tourette syndrome has a strong genetic component, with studies showing increased risk in family members of individuals with TS.<sup className="text-[#10b981] font-bold ml-0.5">1, 2</sup> However, the genetics are complex, likely involving multiple genes interacting with environmental factors. Neurologically, TS involves differences in brain circuits connecting the basal ganglia, thalamus, and frontal cortex—areas involved in movement control and habit formation.
          </p>
          <p className="mb-4">
            Research suggests differences in neurotransmitter systems, particularly dopamine, serotonin, and GABA.<sup className="text-[#10b981] font-bold ml-0.5">3, 4</sup> Brain imaging studies have revealed structural and functional differences in people with TS, particularly in the circuits that regulate voluntary movements and inhibit unwanted actions.<sup className="text-[#10b981] font-bold ml-0.5">5</sup> These neurological differences help explain why individuals with TS experience difficulty suppressing tics and experience premonitory urges. Environmental factors such as prenatal complications and autoimmune responses may also contribute to tic expression.
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
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. O'Rourke, J. A., et al. (2009). "The genetics of Tourette syndrome: A review." <i>Journal of Psychosomatic Research</i>. https://doi.org/10.1016/j.jpsychores.2009.06.008</p>
            <p>2. Pauls, D. L., et al. (2014). "The inheritance of Tourette disorder: A review." <i>Journal of Obsessive-Compulsive and Related Disorders</i>. https://doi.org/10.1016/j.jocrd.2014.03.007</p>
            <p>3. Singer, H. S., & Minzer, K. (2003). "Neurobiology of Tourette's syndrome: Concepts of neuroanatomic localization and neurochemical abnormalities." <i>Brain and Development</i>. https://doi.org/10.1016/S0387-7604(03)00074-1</p>
            <p>4. Buse, J., et al. (2013). "Neuromodulation in Tourette syndrome: Dopamine and beyond." <i>Neuroscience & Biobehavioral Reviews</i>. https://doi.org/10.1016/j.neubiorev.2013.02.008</p>
            <p>5. Peterson, B. S., et al. (2003). "Basal ganglia volumes in patients with Gilles de la Tourette syndrome." <i>Archives of General Psychiatry</i>. https://doi.org/10.1001/archpsyc.60.4.415</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Jackson, G. M., et al. (2015). "Inhibition, disinhibition, and the control of action in Tourette syndrome." <i>Trends in Cognitive Sciences</i>. https://doi.org/10.1016/j.tics.2015.08.006</p>
            <p>Martino, D., et al. (2015). "The role of immune mechanisms in Tourette syndrome." <i>Brain Research</i>. https://doi.org/10.1016/j.brainres.2014.10.043</p>
            <p>Mataix-Cols, D., et al. (2015). "Familial risks of Tourette syndrome and chronic tic disorders: A population-based cohort study." <i>JAMA Psychiatry</i>. https://doi.org/10.1001/jamapsychiatry.2015.0627</p>
            <p>Mink, J. W. (2001). "Basal ganglia dysfunction in Tourette's syndrome: A new hypothesis." <i>Pediatric Neurology</i>. https://doi.org/10.1016/S0887-8994(01)00262-4</p>
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