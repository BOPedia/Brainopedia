import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export function CurrentResearch() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <h2 className="font-bold mb-4 text-2xl">Current Understanding & Future Research</h2>
      
      <ImageWithFallback
        src="/images/autism/autism-causes-CurrentRestab-female-researcher.png"
        alt="Female researching"
        className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
      />      
      <p className="mb-8 leading-relaxed">
        Our understanding of autism's causes continues to evolve as technology allows for deeper genetic sequencing and more nuanced neurological studies.<sup className="text-green-600 font-bold ml-0.5">[1]</sup>
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
          💡 Important Perspective
        </h3>
        <p className="text-sm leading-relaxed opacity-90">
          While understanding autism's causes is scientifically significant, many in the autistic community emphasize that autism is not a disease requiring a "cure" but a neurological difference requiring <strong>acceptance, accommodation, and support.</strong> 
        </p>
      </div>

      {/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg">
        <h3 className="font-bold mb-4 text-xl">References</h3>
        
        <div className="mb-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-green-700 font-bold mb-3">CITED STATISTICS & STUDIES</h4>
            <ol className="list-decimal ml-5 text-[14px] space-y-2 text-navy-800">
              <li>Lord, C., et al. (2018). "Autism spectrum disorder." The Lancet.</li>
              <li>Pellicano, E., & den Houting, J. (2022). "Shifting from 'normal science' to neurodiversity."</li>
              <li>Lyall, K., et al. (2017). "The changing epidemiology of autism spectrum disorders."</li>
            </ol>
          </div>
        <div>
            


            <h4 className="text-xs uppercase tracking-wider text-cyan-500 font-bold mb-3">Background Sources</h4>
            <ul className="list-disc ml-5 text-[14px] leading-relaxed space-y-1 text-navy-800">
              <li>Kapp, S. K. (2020). Autistic community and the neurodiversity movement.</li>
              <li>Chapman, R., & Carel, H. (2022). "Neurodiversity and the good human life."</li>
              <li>American Psychiatric Association. (2022). DSM-5-TR.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}