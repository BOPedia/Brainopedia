import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface CurrentResearchProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function CurrentResearch({ setCurrentArticle }: CurrentResearchProps) {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <h2 className="font-bold mb-4 text-2xl">Current Understanding & Future Research</h2>
      
      <ImageWithFallback
        src="/images/autism/autism-causes-CurrentRestab-female-researcher.png"
        alt="Female researching"
        className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
      />      
      <p className="mb-8 leading-relaxed">
        Our understanding of autism's causes continues to evolve as technology allows for deeper genetic sequencing and more nuanced neurological studies.<sup className="text-green-600 font-bold ml-0.5">1</sup>
      </p>

      <div className="clear-both"></div>

      {/* Knowledge Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* What We Know */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500">
          <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
            <span className="text-green-500">✓</span> What We Know
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><span>•</span> Autism is highly heritable but genetically complex.</li>
            <li className="flex gap-2"><span>•</span> Multiple genes and environmental factors contribute.</li>
            <li className="flex gap-2"><span>•</span> Brain development is affected during prenatal periods.</li>
            <li className="flex gap-2"><span>•</span> It is a natural neurological variation, not a disease.</li>
          </ul>
        </div>

        {/* What We're Still Learning */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
            <span className="text-[#2abcd4]">?</span> What We're Still Learning
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><span>•</span> How specific genetic variations lead to specific traits.</li>
            <li className="flex gap-2"><span>•</span> Which environmental factors matter most and for whom.</li>
            <li className="flex gap-2"><span>•</span> Why autism presentation varies so widely.</li>
            <li className="flex gap-2"><span>•</span> Biomarkers that could enable earlier identification.</li>
          </ul>
        </div>
      </div>

      {/* Research Priorities Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#ffd166] mb-10">
        <h3 className="font-bold mb-6 text-xl text-center">Current Research Priorities</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-[#f0f9ff] rounded-lg">
            <h4 className="font-bold text-sm mb-2 text-[#0c264d]">Biological Mechanisms</h4>
            <p className="text-xs">Translating genetic risk into understanding how autistic traits develop and identifying biological subtypes.</p>
          </div>
          <div className="p-4 bg-[#f0f9ff] rounded-lg">
            <h4 className="font-bold text-sm mb-2 text-[#0c264d]">Quality of Life</h4>
            <p className="text-xs">Developing interventions and supports that improve day-to-day life and understanding co-occurring conditions.</p>
          </div>
          <div className="p-4 bg-[#f0f9ff] rounded-lg md:col-span-2 text-center">
            <h4 className="font-bold text-sm mb-2 text-[#0c264d]">Neurodiversity-Led Research</h4>
            <p className="text-xs">Centering autistic voices in research priorities to ensure methods align with the needs of the community.</p>
          </div>
        </div>
      </div>

      {/* Important Perspective Box */}
      <div className="bg-[#0c264d] text-white p-8 rounded-xl shadow-lg mb-10">
        <h3 className="font-bold mb-4 text-xl flex items-center gap-2">
          Important Perspective
        </h3>
        <p className="text-sm leading-relaxed opacity-90">
          While understanding autism's causes is scientifically significant, many in the autistic community emphasize that autism is not a disease requiring a "cure" but a neurological difference requiring <strong>acceptance, accommodation, and support.</strong> 
        </p>
      </div>
      
{/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>
              Lord, C., Elsabbagh, M., Baird, G., & Veenstra-Vanderweele, J. (2018). "Autism spectrum disorder." <i>The Lancet</i>, 392(10146), 508-520.
            </li>
            <li>
              Pellicano, E., & den Houting, J. (2022). "Annual Research Review: Shifting from 'normal science' to neurodiversity in autism science." <i>Journal of Child Psychology and Psychiatry</i>, 63(4), 381-396.
            </li>
            <li>
              Lyall, K., Croen, L., Daniels, J., et al. (2017). "The changing epidemiology of autism spectrum disorders." <i>Annual Review of Public Health</i>, 38, 81-102.
            </li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              Kapp, S. K. (Ed.). (2020). <i>Autistic Community and the Neurodiversity Movement: Stories from the Frontline</i>. Palgrave Macmillan.
            </li>
            <li>
              Chapman, R., & Carel, H. (2022). "Neurodiversity, epistemic injustice, and the good human life." <i>Journal of Social Philosophy</i>, 53(4), 614-631.
            </li>
            <li>
              American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.).
            </li>
          </ul>
        </div>
      </div>
     </div>
  
  );
}
