import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface BrainDevelopmentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function BrainDevelopment({ setCurrentArticle }: BrainDevelopmentProps) {
  return (
   <div className="space-y-6">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Brain Development</h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-causes-Braintab-development.png" 
          alt="Brain connectivity and neural networks in autism"
          className="w-48 h-auto float-left mr-6 mb-4 rounded-xl shadow-md border border-gray-300"
        />
        
        <p className="mb-4 leading-relaxed text-[#0c264d]">
          Genetic and environmental factors ultimately shape brain development, leading to the neurological differences characteristic of autism. It is crucial to understand that the autistic brain is not a "broken" or "damaged" neurotypical brain. Instead, it develops along a completely different, naturally occurring trajectory from day one—operating on a different neurological blueprint.
        </p>
        
        <p className="mb-4 leading-relaxed text-[#0c264d]">
          While this neurology represents a valid human variation, the challenges that accompany it are profoundly real. Particularly for those with higher support needs, severe sensory differences or communication barriers are not just social inconveniences—they can cause intense physiological and psychological distress. 
        </p>

        <p className="mb-8 leading-relaxed text-[#0c264d]">
          Therefore, understanding autistic brain development isn't about finding a way to "fix a broken machine." It is about learning how to soothe a nervous system that is often overwhelmed, bridging communication gaps, and providing the exact environmental supports needed to alleviate distress and improve quality of life.
        </p>
        
        <div className="clear-both"></div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Structural Differences */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-3 text-lg font-spartan text-[#0c264d]">Structural Brain Differences</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
            <li><strong>Brain overgrowth:</strong> Many autistic children show accelerated brain growth in early childhood, particularly in the frontal cortex.<sup>1</sup></li>
            <li><strong>Altered connectivity:</strong> Differences in how brain regions connect and structurally communicate.</li>
            <li><strong>Regional differences:</strong> Variations in size and structure of specific brain areas including the amygdala, cerebellum, and corpus callosum.</li>
            <li><strong>White matter differences:</strong> Atypical development of myelin and white matter tracts.</li>
          </ul>
        </div>

        {/* Functional Differences */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-3 text-lg font-spartan text-[#0c264d]">Functional Brain Differences</h3>
          <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
            <li><strong>Neural connectivity patterns:</strong> Reduced long-range connectivity but increased local connectivity in some regions.<sup>2</sup></li>
            <li><strong>Social brain networks:</strong> Differences in activation of brain regions involved in social cognition.</li>
            <li><strong>Sensory processing:</strong> Atypical neural responses to sensory stimuli.</li>
            <li><strong>Default mode network:</strong> Differences in brain networks active during rest and self-referential thinking.</li>
          </ul>
        </div>
      </div>

      {/* --- CENTERED GRAPHIC SECTION: MOVING NEURON VIDEO --- */} 
      <div className="text-center w-full mb-12"> 
        <div className="mx-auto w-64 mb-8 rounded-xl overflow-hidden"> 
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/images/autism/autism-causes-Braintab-moving-neuron.png"
            className="w-full h-auto object-contain"
            aria-label="animation of a moving neuron representing brain connectivity"
          >
            <source 
              src="/images/autism/autism-causes-Braintab-moving-neuron.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div> 
      </div>

      {/* Cellular Level Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#2abcd4] mb-10">
        <h3 className="font-bold mb-4 text-lg text-center font-spartan text-[#0c264d]">Cellular and Molecular Level</h3>
        
        {/* The Grid: 3 columns */}
        <div className="grid md:grid-cols-3 gap-4 text-center mb-8">
          <div className="p-3">
            <div className="font-bold text-[#2abcd4] mb-1">Synapses</div>
            <p className="text-sm text-gray-700">Altered number, structure, or function of synaptic connections.</p>
          </div>
          <div className="p-3">
            <div className="font-bold text-[#2abcd4] mb-1">Neuronal Migration</div>
            <p className="text-sm text-gray-700">Atypical positioning of neurons during fetal development.</p>
          </div>
          <div className="p-3">
            <div className="font-bold text-[#2abcd4] mb-1">E/I Balance</div>
            <p className="text-sm text-gray-700">Imbalance between excitatory and inhibitory neurotransmission.<sup>3</sup></p>
          </div>
        </div> {/* <-- Closed the grid here so the video sits below it! */}

        {/* --- CENTERED GRAPHIC SECTION: SYNAPSE VIDEO --- */} 
        {/* Removed col-span-full since it is now safely outside the grid, and removed bottom margin to make it flush with the text below */}
        <div className="text-center w-full mb-0"> 
          <div className="mx-auto w-64 mb-0 rounded-xl overflow-hidden"> 
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              poster="/images/autism/autism-causes-Braintab-synapse.png"
              className="w-full h-auto object-contain"
              aria-label="animation of an active synapse"
            >
              <source 
                src="/images/autism/autism-causes-Braintab-synapse.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div> 
        </div>

        {/* Flush bottom text section */}
        <div className="mt-0 pt-0 flex flex-wrap justify-center gap-6">
           <div className="text-sm text-gray-700"><strong>Neuroinflammation:</strong> Evidence of immune activation in some autistic brains.</div>
           <div className="text-sm text-gray-700"><strong>Mitochondrial function:</strong> Potential mitochondrial dysfunction in some individuals.</div>
        </div>
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
              Courchesne, E., et al. (2011). "Brain growth across the life span in autism: age-specific changes in anatomical pathology." <i>Brain Research</i>, 1380, 138-145.
            </li>
            <li>
              Belmonte, M. K., et al. (2004). "Autism and abnormal development of brain connectivity." <i>Journal of Neuroscience</i>, 24(42), 9228-9231.
            </li>
            <li>
              Rubenstein, J. L., & Merzenich, M. M. (2003). "Model of autism: increased ratio of excitation/inhibition in key neural systems." <i>Genes, Brain and Behavior</i>, 2(5), 255-267.
            </li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              Hazlett, H. C., et al. (2017). "Early brain development in infants at high risk for autism spectrum disorder." <i>Nature</i>.
            </li>
            <li>
              Robertson, C. E., & Baron-Cohen, S. (2017). "Sensory perception in autism." <i>Nature Reviews Neuroscience</i>.
            </li>
            <li>
              Vargas, D. L., et al. (2005). "Neuroinflammation in Autism." <i>Annals of Neurology</i>.
            </li>
            <li>
              Zoghbi, H. Y., & Bear, M. F. (2012). "Synaptic Dysfunction in Neurodevelopmental Disorders." <i>Cold Spring Harbor Perspectives in Biology</i>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}