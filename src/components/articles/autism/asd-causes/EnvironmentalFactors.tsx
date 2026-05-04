import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { ShieldAlert, Leaf, Factory, Beaker, BookOpen } from 'lucide-react';

// Use a NAMED export so ASDCauses.tsx can find it
export function EnvironmentalFactors() {
  return (
    <div className="space-y-8">
      {/* --- HEADER SECTION --- */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg border border-[#0c264d]/10">
        <h2 className="text-2xl font-bold font-spartan text-[#0c264d] mb-4 flex items-center gap-2">
          <Leaf className="text-green-600" /> Environmental Influences
        </h2>
        <p className="leading-relaxed font-spartan text-gray-700">
          Research into autism causes has shifted toward understanding how environmental 
          exposures during critical prenatal and early postnatal periods may interact 
          with genetic predispositions.
        </p>
      </div>

      {/* --- FLOATING GRAPHIC SECTION --- */}
      <div className="overflow-hidden bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="md:float-right md:ml-8 mb-6 md:mb-2 w-full md:w-72 text-center">
          <p className="text-[#0c264d]/70 mb-3 italic text-xs font-spartan">
            Common environmental factors under investigation
          </p>
          <div className="border rounded-lg p-2 bg-gray-50">
             {/* Replace with your actual environmental graphic path */}
            <ImageWithFallback 
              src="/images/autism-causes-Envirotab-toddler-in-nature.png" 
              alt="Environmental factors linked to ASD - toddler walks through nature"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <p className="font-spartan leading-relaxed mb-4">
          Scientists focus on <strong>modifiable risk factors</strong>—elements in our 
          surroundings that could potentially be managed to improve outcomes. This includes 
          air quality, nutrition, and exposure to specific chemical compounds.
        </p>
      </div>

      {/* --- RISK CATEGORIES GRID --- */}
      <div className="grid md:grid-cols-2 gap-6 clear-both">
        <div className="p-5 bg-white rounded-lg border-l-4 border-blue-400 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-blue-600 font-bold font-spartan">
            <Factory size={20} />
            <h3>Air Pollutants</h3>
          </div>
          <p className="text-sm font-spartan text-gray-600">
            Studies suggest a correlation between high levels of traffic-related air pollution 
            and heavy metals during pregnancy and increased ASD risk.
          </p>
        </div>

        <div className="p-5 bg-white rounded-lg border-l-4 border-purple-400 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-purple-600 font-bold font-spartan">
            <Beaker size={20} />
            <h3>Chemical Exposures</h3>
          </div>
          <p className="text-sm font-spartan text-gray-600">
            Research monitors substances like pesticides and phthalates, investigating how 
            they might impact the endocrine system and early brain development.
          </p>
        </div>
      </div>

      {/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg">
        <h3 className="font-bold mb-4 text-xl font-spartan text-[#0c264d]">References</h3>
        
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-green-500 font-bold mb-3">Cited Studies</h4>
          <ol className="list-decimal ml-5 text-xs space-y-2 text-navy-800 font-spartan">
            <li>Modabbernia, A., et al. (2017). "Environmental risk factors for autism." Molecular Autism.</li>
            <li>Lyall, K., et al. (2017). "The changing epidemiology of autism spectrum disorders." Annual Review of Public Health.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}