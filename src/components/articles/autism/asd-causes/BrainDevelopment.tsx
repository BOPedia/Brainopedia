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
          src="/images/autism/autism-causes-Braintab-development.webp" 
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
      </div>

{/* Structural Differences - Stack and Center w-96 */}
      <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-8 shadow-sm mb-8">
 <h3 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Structural Differences</h3>
        
        <ImageWithFallback 
          src="/images/autism/autism-causes-Braintab-brain-structure.webp" 
          alt="Brain connectivity and neural networks in autism"
          className="w-96 h-auto block mx-auto mb-6 rounded-xl shadow-md border border-gray-300"
        />

        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed text-center mb-6">
            Specific physical differences in brain architecture are consistently observed in individuals with autism.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
            <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
              <li><strong>Brain overgrowth:</strong> Many autistic children show accelerated brain growth in early childhood, particularly in the frontal cortex.</li>
              <li><strong>Altered connectivity:</strong> Differences in how brain regions connect and structurally communicate.</li>
              <li><strong>Regional differences:</strong> Variations in size and structure of specific brain areas including the amygdala, cerebellum, and corpus callosum.</li>
              <li><strong>White matter differences:</strong> Atypical development of myelin and white matter tracts.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Functional Differences - Stack and Center w-96 */}
      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-8 shadow-sm mb-8">
        <h3 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Functional Differences</h3>
        
        <ImageWithFallback 
          src="/images/autism/autism-causes-Braintab-fxn-structure.webp" 
          alt="Brain connectivity and neural networks in autism"
          className="w-96 h-auto block mx-auto mb-6 rounded-xl shadow-md border border-gray-300"
        />

        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed text-center mb-6">
            Functional differences in the autistic brain involve how different physical regions actively work together to process information.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
              <li><strong>Neural connectivity patterns:</strong> Reduced long-range connectivity but increased local connectivity in some regions.</li>
              <li><strong>Social brain networks:</strong> Differences in activation of brain regions involved in social cognition.</li>
              <li><strong>Sensory processing:</strong> Atypical neural responses to sensory stimuli.</li>
              <li><strong>Default mode network:</strong> Differences in brain networks active during rest and self-referential thinking.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="clear-both"></div>
 <h1 className="font-bold mb-8 text-xl text-center font-spartan text-[#0c264d]">CELLULAR and MOLECULAR LEVEL</h1>
      {/* Cellular and Molecular Level Section */}

       
        
        <div className="flex flex-col gap-8 mb-8">
          
          {/* Item 1: Synapses */}
          <div className="w-full flex flex-col items-center gap-5 bg-yellow-100 p-6 rounded-xl border border-yellow-500 shadow-sm">
                       <div className="w-full  mx-auto">
              <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Synapses</h4>
              <p className="text-sm text-[#0c264d] leading-relaxed bg-[#79e1fd] p-5 rounded-lg border border-gray-200">
                Synapses are the critical junctions where neurons communicate via chemical signals. In autistic brain development, research frequently shows differences in <strong>synaptic pruning</strong>—the process where the brain eliminates extra or unused connections to streamline function. This can result in an altered number (often an overabundance) of connections, or variations in their physical structure, ultimately changing how information is processed and integrated.
              </p>
            </div> 
            <ImageWithFallback 
              src="/images/autism/autism-causes-Braintab-synapse.webp" 
              alt="Synaptic connections"
              className="w-96 rounded-lg shadow-sm object-contain bg-white"
            />

          </div>

          {/* Item: Neuronal Migration */}
          <div className="w-full flex flex-col items-center gap-5 bg-green-100 p-6 rounded-xl border border-green-500 shadow-sm">
                     <div className="w-full mx-auto">
              <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Neuronal Migration</h4>
<p className="text-sm text-[#0c264d] leading-relaxed bg-[#79e1fd] p-5 rounded-lg border border-gray-200">
  During fetal development, neurons must travel from their origin point to highly precise locations within the cortex to form functional circuits. Research indicates that in autism, this complex migration process is sometimes disrupted, creating "heterotopic patches" of misplaced neurons that structurally shift the brain toward increased local, short-range connectivity.<sup className="text-[#10b981] font-bold ml-0.5">1, 2</sup>
</p>
            </div>   
            <ImageWithFallback 
              src="/images/autism/autism-causes-Braintab-fetus-brain-firings.webp" 
              alt="Neuronal migration during fetal development"
              className="w-full rounded-lg shadow-sm object-contain bg-white"
            />

          </div>

          {/* Item 3: E/I Balance */}
          <div className="w-full flex flex-col items-center gap-5 bg-blue-100 p-6 rounded-xl border border-blue-500 shadow-sm">
            <ImageWithFallback 
              src="/images/autism/autism-cause-Braintab-EI.webp" 
              alt="E/I Balance neurotransmission"
              className="w-full rounded-lg shadow-sm object-contain bg-white"
            />
            <div className="w-full mx-auto">
              <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">E/I Balance</h4>
              <div className="text-sm text-[#0c264d] leading-relaxed bg-[#79e1fd] p-5 rounded-lg border border-gray-200">
                <p className="mb-3">The brain relies on a delicate, constant balance between excitatory neurotransmitters (which activate cells) and inhibitory neurotransmitters (which calm brain activity). In autism, this ratio is often shifted:</p>
                <ul className="space-y-2 pl-2">
                  <li><strong className="text-[#0c264d]">Too Much Excitation:</strong> Driven by neurotransmitters like Glutamate, an overabundance of excitatory signals can lead to sensory overwhelm, racing thoughts, anxiety, and poor sleep.</li>
                  <li><strong className="text-[#0c264d]">Too Much Inhibition:</strong> Driven by neurotransmitters like GABA and Glycine, excess inhibition can result in low motivation, fatigue, or brain fog.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 4: Mitochondrial Function */}
          <div className="w-full flex flex-col items-center gap-5 bg-purple-50 p-6 rounded-xl border border-purple-300 shadow-sm">
            <ImageWithFallback 
              src="/images/autism/autism-causes-Braintab-mitochondrial.webp" 
              alt="Mitochondrial function and cellular energy"
              className="w-96 rounded-lg shadow-sm object-contain bg-white"
            />
            <div className="w-full mx-auto">
              <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Mitochondrial Function</h4>
              <p className="text-sm text-[#0c264d] leading-relaxed bg-[#79e1fd] p-5 rounded-lg border border-gray-200">
                Mitochondria are the powerhouses of the cell, producing the ATP needed to fuel highly intensive neurological processes. Emerging research indicates that a subset of autistic individuals experience mitochondrial dysfunction. This dysfunction can disrupt essential energy production, impair the regulation of oxidative stress (redox balance), and affect calcium signaling—all of which are vital for healthy, sustained neurodevelopment and daily functioning.
              </p>
            </div>
          </div>

          {/* Item 5: Neuroinflammation */}
          <div className="w-full flex flex-col items-center gap-5 bg-orange-100 p-6 rounded-xl border border-orange-500 shadow-sm">
            <ImageWithFallback 
              src="/images/autism/autism-causes-Braintab-neuroinflammation.webp" 
              alt="Neuroinflammation in the brain"
              className="w-96 rounded-lg shadow-sm object-contain bg-white"
            />
            <div className="w-full mx-auto">
              <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Neuroinflammation</h4>
              <p className="text-sm text-[#0c264d] leading-relaxed bg-[#79e1fd] p-5 rounded-lg border border-gray-200">
                The brain is protected by specialized immune cells called microglia, which guard against harm and respond to threats. In some autistic brains, there is evidence of chronic immune activation, known as neuroinflammation. Instead of returning to a baseline resting state after a threat has passed, these immune cells remain active, releasing inflammatory signals that can interfere with healthy synaptic function, mood regulation, and cognitive processing.
              </p>
            </div>
          </div>

        </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both"></div>
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed italic" style={{ textIndent: 0 }}>
<p>1. Courchesne, E., Mouton, P. R., Calhoun, M. E., Semendeferi, K., Ahrens-Barbeau, C., Hallet, M. J., Barnes, C. C., & Pierce, K. (2011). Brain growth across the life span in autism: Age-specific changes in anatomical pathology. <i>Brain Research</i>. https://doi.org/10.1016/j.brainres.2010.11.043</p>
    <p>2. Belmonte, M. K., Allen, G., Beckel-Mitchener, A., Boulanger, L. M., Carper, R. A., & Webb, S. J. (2004). Autism and abnormal development of brain connectivity. <i>Journal of Neuroscience</i>. https://doi.org/10.1523/JNEUROSCI.4346-04.2004</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Belmonte, M. K., et al. (2004). "Autism and abnormal development of brain connectivity." <i>Journal of Neuroscience</i>. https://doi.org/10.1523/JNEUROSCI.4346-04.2004</p>
            <p>Courchesne, E., et al. (2011). "Brain growth across the life span in autism: age-specific changes in anatomical pathology." <i>Brain Research</i>. https://doi.org/10.1016/j.brainres.2010.11.043</p>
            <p>Hazlett, H. C., et al. (2017). "Early brain development in infants at high risk for autism spectrum disorder." <i>Nature</i>. https://doi.org/10.1038/nature21369</p>
            <p>Robertson, C. E., & Baron-Cohen, S. (2017). "Sensory perception in autism." <i>Nature Reviews Neuroscience</i>. https://doi.org/10.1038/nrn.2017.112</p>
            <p>Rubenstein, J. L., & Merzenich, M. M. (2003). "Model of autism: increased ratio of excitation/inhibition in key neural systems." <i>Genes, Brain and Behavior</i>. https://doi.org/10.1034/j.1601-183X.2003.00037.x</p>
            <p>Vargas, D. L., et al. (2005). "Neuroglial activation and neuroinflammation in the brain of patients with autism." <i>Annals of Neurology</i>. https://doi.org/10.1002/ana.20315</p>
            <p>Zoghbi, H. Y., & Bear, M. F. (2012). "Synaptic Dysfunction in Neurodevelopmental Disorders Associated with Autism and Intellectual Disabilities." <i>Cold Spring Harbor Perspectives in Biology</i>. https://doi.org/10.1101/cshperspect.a009886</p>
          </div>
        </div>
      </div>
    </div>
  
  );
}