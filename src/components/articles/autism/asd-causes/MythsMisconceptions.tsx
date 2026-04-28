import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export function MythsMisconceptions() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <h2 className="font-bold mb-4 text-2xl">Myths & Misconceptions</h2>
      
      <p className="mb-8 leading-relaxed">
        Despite extensive scientific research, several persistent myths about the causes of autism continue to circulate. Understanding what does <strong>not</strong> cause autism is as important as understanding what does.
      </p>

      {/* Main Myth Highlight */}
      <div className="bg-white rounded-xl shadow-md border-2 border-red-100 p-6 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <ImageWithFallback 
              src="/images/autism/autism-causes-Mythstab-vax.png" 
              alt="Scientific debunking of vaccine myths"
              className="w-full rounded-lg shadow-sm border-4 border-white"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-red-600 font-bold text-xl mb-2 flex items-center gap-2">
              <span>✗</span> The Vaccine Myth
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Extensive global studies involving millions of children have consistently shown <strong>no link</strong> between vaccines (including the MMR vaccine) and autism.<sup className="text-green-600 font-bold ml-0.5">[1]</sup>
            </p>
            <div className="bg-green-50 p-3 rounded-md border-l-4 border-green-500">
              <p className="text-xs text-green-800">
                <strong>The Fact:</strong> The original 1998 study that suggested a link was found to be fraudulent and was retracted. Modern science confirms vaccines are safe and do not cause ASD.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Other Myths */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-3 text-lg italic text-gray-500">"Refrigerator Mothers"</h3>
          <p className="text-sm">
            In the 1950s, a harmful theory suggested "cold" parenting caused autism. 
            <strong> Science has totally debunked this.</strong> Autism is a biological developmental difference, not a result of parenting style.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-3 text-lg italic text-gray-500">Dietary Choices</h3>
          <p className="text-sm">
            While nutrition is important for overall health, specific foods or diets (like gluten or casein) are <strong>not causes</strong> of autism, nor are they "cures."
          </p>
        </div>
      </div>

      {/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg">
        <h3 className="font-bold mb-4 text-xl">References</h3>
        
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-green-700 font-bold mb-3">Cited Studies & Statistics</h4>
          <ol className="list-decimal ml-5 text-xs space-y-2 text-gray-700">
            <li>Centers for Disease Control and Prevention. (2023). "Vaccines Do Not Cause Autism."</li>
            <li>American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., text rev.).</li>
            <li>Institute of Medicine. (2004). "Immunization Safety Review: Vaccines and Autism."</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">Background Sources</h4>
          <ul className="list-disc ml-5 text-[14px] leading-relaxed space-y-1 text-gray-500">
            <li>Lord, C., et al. (2018). "Autism spectrum disorder." The Lancet.</li>
            <li>Hviid, A., et al. (2019). "Measles, Mumps, Rubella Vaccination and Autism." Annals of Internal Medicine.</li>
            <li>Kapp, S. K. (2020). Autistic community and the neurodiversity movement.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}