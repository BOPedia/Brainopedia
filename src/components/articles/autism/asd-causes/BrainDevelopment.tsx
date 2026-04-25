import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export function BrainDevelopment() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <h2 className="font-bold mb-4 text-2xl">Brain Development in Autism</h2>
      
      <p className="mb-6 leading-relaxed">
        Genetic and environmental factors ultimately affect brain development, leading to the neurological differences characteristic of autism.<sup className="text-green-600 font-bold ml-0.5">[4]</sup>
      </p>

      <ImageWithFallback 
        src="/images/autism/autism-causes-Braintab-development.png" 
        alt="Brain connectivity and neural networks in autism"
        className="w-full max-w-lg mx-auto mb-8 rounded-lg shadow-sm"
      />

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Structural Differences */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-3 text-lg">Structural Brain Differences</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Brain overgrowth:</strong> Accelerated growth in early childhood, particularly in the frontal cortex.<sup className="text-green-600 font-bold ml-0.5">[4]</sup></li>
            <li><strong>Altered connectivity:</strong> Differences in how brain regions connect and communicate.</li>
            <li><strong>Regional differences:</strong> Variations in the amygdala, cerebellum, and corpus callosum.</li>
            <li><strong>White matter:</strong> Atypical development of myelin and white matter tracts.</li>
          </ul>
        </div>

        {/* Functional Differences */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-3 text-lg">Functional Brain Differences</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Connectivity patterns:</strong> Reduced long-range connectivity with increased local connectivity.</li>
            <li><strong>Social brain networks:</strong> Differences in regions involved in social cognition.</li>
            <li><strong>Sensory processing:</strong> Atypical neural responses to sensory stimuli.</li>
            <li><strong>Default mode network:</strong> Differences in networks active during rest.</li>
          </ul>
        </div>
      </div>

      {/* Cellular Level Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#2abcd4] mb-10">
        <h3 className="font-bold mb-4 text-lg text-center">Cellular and Molecular Level</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-3">
            <div className="font-bold text-[#2abcd4] mb-1">Synapses</div>
            <p className="text-xs">Altered number, structure, or function of synaptic connections.</p>
          </div>
          <div className="p-3">
            <div className="font-bold text-[#2abcd4] mb-1">Neuronal Migration</div>
            <p className="text-xs">Atypical positioning of neurons during fetal development.</p>
          </div>
          <div className="p-3">
            <div className="font-bold text-[#2abcd4] mb-1">E/I Balance</div>
            <p className="text-xs">Imbalance between excitatory and inhibitory neurotransmission.</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap justify-center gap-6">
           <div className="text-xs"><strong>Neuroinflammation:</strong> Evidence of immune activation.</div>
           <div className="text-xs"><strong>Mitochondria:</strong> Potential mitochondrial dysfunction.</div>
        </div>
      </div>

      {/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg">
        <h3 className="font-bold mb-4 text-xl">References</h3>
        
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-green-700 font-bold mb-3">Cited Studies & Statistics</h4>
          <ol className="list-decimal ml-5 text-xs space-y-2 text-gray-700">
            <li>Centers for Disease Control and Prevention. (2023). "Data and Statistics."</li>
            <li>Bai, D., et al. (2019). "Association of genetic and environmental factors."</li>
            <li>Geschwind, D. H., & State, M. W. (2015). "Gene hunting in autism."</li>
            <li>Courchesne, E., et al. (2011). "Brain growth across the life span in autism." Brain Research.</li>
            <li>American Psychiatric Association. (2022). DSM-5-TR.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">Background Sources</h4>
          <ul className="list-disc ml-5 text-[10px] leading-relaxed space-y-1 text-gray-500">
            <li>Lord, C., et al. (2018). "Autism spectrum disorder." The Lancet.</li>
            <li>Kapp, S. K. (2020). Autistic community and the neurodiversity movement.</li>
            <li>Robertson, C. E., & Baron-Cohen, S. (2017). "Sensory perception in autism." Nature Reviews Neuroscience.</li>
            <li>Zwaigenbaum, L., et al. (2015). "Early identification and interventions for autism."</li>
          </ul>
        </div>
      </div>
    </div>
  );
}