import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export function BrainDevelopment() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <h2 className="font-bold mb-4 text-2xl font-spartan">Brain Development in Autism</h2>
      
      <p className="mb-6 leading-relaxed">
        Genetic and environmental factors ultimately affect brain development, leading to the neurological 
        differences characteristic of autism.
      </p>

      <ImageWithFallback 
        src="/images/autism/autism-causes-Braintab-development.png" 
        alt="Brain connectivity and neural networks in autism"
        className="w-full max-w-sm mx-auto mb-8 rounded-sm shadow-sm"
      />

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Structural Differences */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-3 text-lg font-spartan">Structural Brain Differences</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Brain overgrowth:</strong> Many autistic children show accelerated brain growth in early childhood, particularly in the frontal cortex. </li>
            <li><strong>Altered connectivity:</strong> Differences in how brain regions connect and communicate.</li>
            <li><strong>Regional differences:</strong> Variations in size and structure of specific brain areas including the amygdala, cerebellum, and corpus callosum. </li>
            <li><strong>White matter differences:</strong> Atypical development of myelin and white matter tracts.   </li>
          </ul>
        </div>

        {/* Functional Differences */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-3 text-lg font-spartan">Functional Brain Differences</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li><strong>Neural connectivity patterns:</strong> Reduced long-range connectivity but increased local connectivity in some regions.</li>
            <li><strong>Social brain networks:</strong> Differences in activation of brain regions involved in social cognition.</li>
            <li><strong>Sensory processing:</strong> Atypical neural responses to sensory stimuli.</li>
            <li><strong>Default mode network:</strong> Differences in brain networks active during rest and self-referential thinking.</li>
          </ul>
        </div>
      </div>

      {/* Cellular Level Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#2abcd4] mb-10">
        <h3 className="font-bold mb-4 text-lg text-center font-spartan">Cellular and Molecular Level</h3>
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
           <div className="text-xs"><strong>Neuroinflammation:</strong> Evidence of immune activation in some autistic brains.</div>
           <div className="text-xs"><strong>Mitochondrial function:</strong> Potential mitochondrial dysfunction in some individuals.</div>
        </div>
      </div>

{/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg">
        <h3 className="font-bold mb-4 text-xl font-spartan">References</h3>
        
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-green-700 font-bold mb-3">Cited Studies & Statistics</h4>
          <ol className="list-decimal ml-5 text-xs space-y-2 text-gray-700">
            <li> None. </li>
          </ol>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">Background Sources</h4>
          <ul className="list-disc ml-5 text-[14px] leading-relaxed space-y-1 text-gray-500">
            <li>Courchesne, E., et al. (2011). "Brain growth across the life span in autism." Brain Research.</li>
            <li>Hazlett, H. C., et al. (2017). "Early brain development in infants at high risk for autism spectrum disorder." Nature.</li>
            <li>Vasa, R. A., et al. (2016). "Atypical Brain Connectivity in Autism." Journal of the American Academy of Child & Adolescent Psychiatry.</li>
            <li>Schumann, C. M., et al. (2010). "The Amygdala Is Enlarged in Children But Not Adolescents with Autism." Journal of Neuroscience.</li>
            <li>Ecker, C., et al. (2015). "The Neuroanatomy of Autism Spectrum Disorder." Biological Psychiatry.</li>
            <li>Belmonte, M. K., et al. (2004). "Autism and Abnormal Development of Brain Connectivity." Journal of Neuroscience.</li>
            <li>Pelphrey, K. A., et al. (2011). "The Social Brain in Autism." Journal of Child Psychology and Psychiatry.</li>
            <li>Robertson, C. E., & Baron-Cohen, S. (2017). "Sensory perception in autism." Nature Reviews Neuroscience.</li>
            <li>Padmanabhan, A., et al. (2017). "Default Mode Network Connectivity in Children with Autism." Scientific Reports.</li>
            <li>Zoghbi, H. Y., & Bear, M. F. (2012). "Synaptic Dysfunction in Neurodevelopmental Disorders." Cold Spring Harbor Perspectives in Biology.</li>
            <li>Stoner, R., et al. (2014). "Patches of Disorganization in the Neocortex of Children with Autism." New England Journal of Medicine.</li>
            <li>Rubenstein, J. L., & Merzenich, M. M. (2003). "Model of autism: increased ratio of excitation/inhibition in key neural systems." Genes, Brain and Behavior.</li>
            <li>Vargas, D. L., et al. (2005). "Neuroinflammation in Autism." Annals of Neurology.</li>
            <li>Rossignol, D. A., & Frye, R. E. (2012). "Mitochondrial dysfunction in autism spectrum disorders: a systematic review and meta-analysis." Molecular Psychiatry.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}