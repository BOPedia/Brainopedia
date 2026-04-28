import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export function EnvironmentalFactors() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <h2 className="font-bold mb-4 text-2xl">Environmental Factors</h2>
      
      <ImageWithFallback 
        src="/images/autism/autism-causes-Envirotab-toddler-in-nature.png" 
        alt="Toddler in nature representing environmental factors"
        className="w-full max-w-xs mx-auto mb-6 rounded-lg shadow-sm"
      />
      
      <p className="mb-6 leading-relaxed">
        While genetics are crucial, environmental factors—particularly during pregnancy and early development—also contribute to autism risk.<sup className="text-green-600 font-bold ml-0.5">[2]</sup> "Environmental" refers to non-genetic factors, not just pollution or toxins.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Section 1: Prenatal */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-3 text-lg">Prenatal Factors</h3>
          <p className="text-sm mb-3 text-gray-600 italic">Factors during pregnancy associated with increased risk:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Advanced parental age:</strong> Both maternal and paternal age over 35.<sup className="text-green-600 font-bold ml-0.5">[2]</sup></li>
            <li><strong>Maternal infections:</strong> Severe infections, particularly in the second trimester.</li>
            <li><strong>Maternal immune activation:</strong> Immune responses affecting fetal brain development.</li>
            <li><strong>Certain medications:</strong> Valproic acid exposure during pregnancy.<sup className="text-green-600 font-bold ml-0.5">[1]</sup></li>
            <li><strong>Prenatal nutrition:</strong> Deficiencies in nutrients like folic acid.</li>
            <li><strong>Gestational diabetes:</strong> Metabolic conditions affecting development.</li>
            <li><strong>Air pollution:</strong> Exposure during pregnancy and early life.</li>
          </ul>
        </div>

        {/* Section 2: Neonatal */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-3 text-lg">Perinatal and Neonatal Factors</h3>
          <p className="text-sm mb-3 text-gray-600 italic">Complications around birth associated with modest risk increases:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Preterm birth:</strong> Birth before 37 weeks, especially very preterm birth.</li>
            <li><strong>Low birth weight:</strong> Particularly very low birth weight infants.</li>
            <li><strong>Birth complications:</strong> Significant oxygen deprivation (hypoxia).</li>
            <li><strong>Multiple births:</strong> Twins/multiples have a slightly elevated risk.</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#2abcd4] bg-opacity-10 p-6 rounded-lg border-2 border-dashed border-[#2abcd4] mb-10">
        <h3 className="font-bold mb-2 text-lg">Gene-Environment Interactions</h3>
        <p className="text-sm leading-relaxed">
          Environmental factors likely don't act alone but interact with genetic susceptibility. Genetic vulnerability may determine which environmental factors affect a child, or environmental factors may "trigger" a genetic risk in susceptible individuals.<sup className="text-green-600 font-bold ml-0.5">[2]</sup>
        </p>
      </div>

      {/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg">
        <h3 className="font-bold mb-4 text-xl">References</h3>
        
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-green-700 font-bold mb-3">Cited Studies & Statistics</h4>
          <ol className="list-decimal ml-5 text-xs space-y-2 text-gray-700">
            <li>Centers for Disease Control and Prevention. (2023). "Autism Spectrum Disorder (ASD): Data and Statistics."</li>
            <li>Bai, D., et al. (2019). "Association of genetic and environmental factors with autism in a 5-country cohort." JAMA Psychiatry.</li>
            <li>Geschwind, D. H., & State, M. W. (2015). "Gene hunting in autism spectrum disorder." The Lancet Neurology.</li>
            <li>Courchesne, E., et al. (2011). "Brain growth across the life span in autism." Brain Research.</li>
            <li>American Psychiatric Association. (2022). DSM-5-TR.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">Background Sources</h4>
          <ul className="list-disc ml-5 text-[14px] leading-relaxed space-y-1 text-gray-500">
            <li>Lord, C., et al. (2018). "Autism spectrum disorder." The Lancet.</li>
            <li>Kapp, S. K. (2020). Autistic community and the neurodiversity movement.</li>
            <li>Pellicano, E., & den Houting, J. (2022). Annual research review: Shifting to neurodiversity in autism science.</li>
            <li>Lyall, K., et al. (2017). "The changing epidemiology of autism spectrum disorders."</li>
          </ul>
        </div>
      </div>
    </div>
  );
}