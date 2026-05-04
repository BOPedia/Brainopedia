import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export function EnvironmentalFactors() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <h2 className="font-bold mb-4 text-2xl font-spartan">Environmental Factors</h2>
      
      <ImageWithFallback 
        src="/images/autism/autism-causes-Envirotab-toddler-in-nature.png" 
        alt="Toddler in nature representing environmental factors"
        className="w-full max-w-sm mx-auto mb-8 rounded-sm shadow-sm"
      />
      
      <p className="mb-6 leading-relaxed">
        While genetics are crucial, environmental factors—particularly during pregnancy and early development—also contribute to autism risk.<sup className="text-green-600 font-bold ml-0.5">[2]</sup> "Environmental" refers to non-genetic factors, not just pollution or toxins.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Section 1: Prenatal */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-3 text-lg font-spartan">Prenatal Factors</h3>
          <p className="text-sm mb-3 text-navy-800 italic">Factors during pregnancy associated with increased risk:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Advanced parental age:</strong> Both maternal and paternal age over 35.<sup className="text-green-600 font-bold ml-0.5">[2]</sup></li>
            <li><strong>Maternal infections:</strong> Severe infections, particularly in the second trimester.<sup className="text-green-600 font-bold ml-0.5">[3]</sup></li>
            <li><strong>Maternal immune activation:</strong> Immune responses affecting fetal brain development.<sup className="text-green-600 font-bold ml-0.5">[3]</sup></li>
            <li><strong>Certain medications:</strong> Valproic acid exposure during pregnancy.<sup className="text-green-600 font-bold ml-0.5">[4]</sup></li>
            <li><strong>Prenatal nutrition:</strong> Deficiencies in nutrients like folic acid.<sup className="text-green-600 font-bold ml-0.5">[3]</sup></li>
            <li><strong>Gestational diabetes:</strong> Metabolic conditions affecting development.<sup className="text-green-600 font-bold ml-0.5">[1]</sup></li>
            <li><strong>Air pollution:</strong> Exposure during pregnancy and early life.<sup className="text-green-600 font-bold ml-0.5">[3]</sup></li>
          </ul>
        </div>

        {/* Section 2: Neonatal */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-3 text-lg font-spartan">Perinatal and Neonatal Factors</h3>
          <p className="text-sm mb-3 text-gray-600 italic">Complications around birth associated with modest risk increases:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Preterm birth:</strong> Birth before 37 weeks, especially very preterm birth.<sup className="text-green-600 font-bold ml-0.5">[1]</sup></li>
            <li><strong>Low birth weight:</strong> Particularly very low birth weight infants.<sup className="text-green-600 font-bold ml-0.5">[1]</sup></li>
            <li><strong>Birth complications:</strong> Significant oxygen deprivation (hypoxia).<sup className="text-green-600 font-bold ml-0.5">[3]</sup></li>
            <li><strong>Multiple births:</strong> Twins/multiples have a slightly elevated risk.<sup className="text-green-600 font-bold ml-0.5">[1]</sup></li>
          </ul>
        </div>
      </div>

      <div className="bg-[#2abcd4] bg-opacity-10 p-6 rounded-lg border-2 border-dashed border-[#2abcd4] mb-10">
        <h3 className="font-bold mb-2 text-lg font-spartan">Gene-Environment Interactions</h3>
        <p className="text-sm leading-relaxed">
          Environmental factors likely don't act alone but interact with genetic susceptibility. Genetic vulnerability may determine which environmental factors affect a child, or environmental factors may "trigger" a genetic risk in susceptible individuals.<sup className="text-green-600 font-bold ml-0.5">[2]</sup>
        </p>
      </div>

      {/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg">
        <h3 className="font-bold mb-4 text-xl font-spartan text-[#0c264d]">References</h3>
        
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-green-500 font-bold mb-3">Cited Studies & Statistics</h4>
          <ol className="list-decimal ml-5 text-xs space-y-2 text-navy-500 font-spartan">
            <li>Centers for Disease Control and Prevention. (2023). "Autism Spectrum Disorder (ASD): Data and Statistics." CDC.</li>
            <li>Bai, D., et al. (2019). "Association of genetic and environmental factors with autism in a 5-country cohort." JAMA Psychiatry, 76(10), 1035-1043.</li>
            <li>Modabbernia, A., et al. (2017). "Environmental risk factors for autism: An evidence-based review of systematic reviews." Molecular Autism, 8(1), 13.</li>
            <li>Lyall, K., et al. (2017). "The changing epidemiology of autism spectrum disorders." Annual Review of Public Health, 38, 81-102.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-cyan-500 font-bold mb-3">Background Sources</h4>
          <ul className="list-disc ml-5 text-[14px] leading-relaxed space-y-1 text-navy-800 font-spartan">
            <li>American Psychiatric Association. (2013). Diagnostic and Statistical Manual of Mental Disorders (5th ed.).</li>
            <li>Lord, C., et al. (2018). "Autism spectrum disorder." The Lancet, 392(10146), 508-520.</li>
            <li>Taylor, L. E., et al. (2014). "Vaccines are not associated with autism: An evidence-based meta-analysis." Vaccine, 32(29).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}