import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyscalculiaCauses({ setCurrentArticle, initialTab }: DyscalculiaCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'biology');

  return (
    <article className="max-w-6xl font-spartan">
      <style>
        {`
          sup {
            color: #10b981;
            font-weight: bold;
          }
        `}
      </style>
      
      {/* Header Area */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Dyscalculia: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          Back to Dyscalculia
        </button>
      </div>

      {/* Mobile button */}
      <button 
        onClick={() => setCurrentArticle?.('dyscalculia')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        Back to Dyscalculia
      </button>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('biology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'biology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Biology & Brain
        </button>
        <button
          onClick={() => setActiveTab('cognition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'cognition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognition & Growth
        </button>
        <button
          onClick={() => setActiveTab('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment & Myths
        </button>
      </div>

      {/* ==========================================
          TAB 1: BIOLOGY & BRAIN
      ========================================== */}
      {activeTab === 'biology' && (
        <div className="space-y-6">
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Dyscalculia is a strictly neurodevelopmental condition with complex, multifactorial origins rooted deeply in biology. Understanding that this is a genetic and neurological difference—not a behavioral choice or a reflection of intelligence—is the first critical step toward eliminating stigma and building effective interventions.
          </p>

          {/* Genetics Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Mathematical ability and disability have a strong hereditary component, frequently running through multiple generations of a family. Modern genetic research indicates that dyscalculia is a polygenic condition, meaning multiple genes interact together to influence how the brain's numerical processing centers develop.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-32">
                <ImageWithFallback 
                  src="/images/dyscalculia/dyscalculia-causes-genetics.webp"
                  alt="DNA helix and brain imagery showing genetic basis"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Heritability Patterns</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Family prevalence:</strong> Nearly 50% of siblings of children with dyscalculia also exhibit significant math difficulties.<sup>1</sup></li>
                  <li><strong>Parental history:</strong> Children with a parent who struggled with math are at a substantially higher risk.<sup>1</sup></li>
                  <li><strong>Twin studies:</strong> Identical twins show a much higher concordance for math abilities than fraternal twins, confirming genetic weight.<sup>1</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Gene Interaction</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Shared genetics:</strong> There is significant genetic overlap between reading disabilities (dyslexia) and math disabilities.<sup>2</sup></li>
                  <li><strong>ROBO1 gene:</strong> Specific genes like ROBO1 have been implicated in both reading and mathematical processing difficulties.<sup>3</sup></li>
                  <li><strong>Environment interactions:</strong> High-quality instruction can positively influence how these genetic predispositions express themselves over time.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brain Structure Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Brain Structure & Function</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="shrink-0 w-full md:w-32">
                <ImageWithFallback 
                  src="/images/dyscalculia/dyscalculia-causes-brain-structure.webp"
                  alt="Neurological mapping of parietal lobe differences"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Neuroimaging studies consistently show that dyscalculia is tied directly to physical differences in the brain's architecture, specifically within the parietal lobe.<sup>4</sup> These structural variations fundamentally alter how the brain's networks communicate during numerical tasks, forcing the individual to rely on slower, compensatory brain regions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Key Brain Regions</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Intraparietal sulcus (IPS):</strong> The core region responsible for number sense and magnitude processing.<sup>4</sup></li>
                  <li><strong>Angular gyrus:</strong> Critical for arithmetic fact retrieval and verbally-mediated calculation.</li>
                  <li><strong>Prefrontal cortex:</strong> Handles working memory and executive control during complex math tasks.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Neurological Variances</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Reduced IPS activation:</strong> Scans show less activity in the intraparietal sulcus during number-based tasks.<sup>4</sup></li>
                  <li><strong>White matter differences:</strong> Abnormal white matter tracts result in weaker functional connectivity between math processing regions.</li>
                  <li><strong>Compensatory reliance:</strong> The brain attempts to solve math by leaning heavily on frontal regions and verbal language strategies.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk Factors Card (Emerald) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurobiological Risk Factors</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Certain prenatal and early developmental events can significantly increase the likelihood of mathematical learning challenges. These early biological risk factors can impact the delicate neurological development of the brain's mathematical networks before a child ever enters a classroom.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-32">
                <ImageWithFallback 
                  src="/images/dyscalculia/dyscalculia-causes-neuro-bio-structure.webp"
                  alt="Medical risk factors and early childhood development"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-emerald-200">
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Prematurity:</strong> Premature birth is strongly associated with an increased risk of specific math difficulties.<sup>1</sup></li>
                <li><strong>Low birth weight:</strong> Consistently linked to downstream mathematical learning challenges.</li>
                <li><strong>Hypoxia:</strong> Oxygen deprivation during birth can permanently impact how specific cognitive networks develop.</li>
                <li><strong>Genetic syndromes:</strong> Conditions like Turner syndrome, Fragile X, and 22q11.2 deletion syndrome frequently present alongside dyscalculia.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: COGNITION & GROWTH
      ========================================== */}
      {activeTab === 'cognition' && (
        <div className="space-y-6">
          
          {/* Cognitive Mechanisms Card (Navy) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive Mechanisms</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="shrink-0 w-full md:w-32">
                <ImageWithFallback 
                  src="/images/dyscalculia/dyscalculia-causes-cognitive.webp"
                  alt="Mental mapping and cognitive processing of numbers"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  At the cognitive level, dyscalculia stems from a foundational deficit in innate "number sense"—the brain's natural ability to represent and manipulate approximate quantities.<sup>4</sup> This early impairment creates a devastating ripple effect, disrupting the development of working memory, processing speed, and executive functioning required for all later mathematical tasks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">The Number Sense Deficit</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Approximate number system:</strong> Impaired ability to intuitively understand numerical magnitude or compare quantities.</li>
                  <li><strong>Number-space mapping:</strong> Severe problems mapping physical numbers onto a mental number line.</li>
                  <li><strong>The Cascade effect:</strong> Because foundational number sense is flawed, all complex math built upon it becomes unstable.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Working Memory & Speed</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Visuospatial memory:</strong> Extreme difficulty holding visual-spatial information (like equations) in the mind.</li>
                  <li><strong>Processing speed:</strong> Neurologically slower at processing numerical symbols, destroying computational fluency.</li>
                  <li><strong>Executive function:</strong> Problems suppressing irrelevant information and planning multi-step approaches.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Developmental Factors Card (Emerald) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Factors</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Mathematical brain networks do not fully mature until late adolescence, meaning dyscalculia is a condition that evolves as the child grows. While intensive early intervention can foster brilliant compensatory strategies and neuroplastic growth, the core structural differences in mathematical processing persist throughout adulthood.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-32">
                <ImageWithFallback 
                  src="/images/dyscalculia/dyscalculia-causes-development.webp"
                  alt="Young child developing early number sense"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-emerald-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-emerald-200 pb-2">Early Emergence</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Innate presence:</strong> Children with dyscalculia show delayed or highly atypical number sense emergence from infancy.</li>
                  <li><strong>Cumulative deficits:</strong> Because math is sequential, these early gaps compound rapidly year over year.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-emerald-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-emerald-200 pb-2">Brain Maturation</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Delayed networks:</strong> Slower maturation of the parietal cortex contributes heavily to ongoing struggles.</li>
                  <li><strong>Strategy shifts:</strong> As the brain matures, individuals pivot away from fact retrieval and toward language-based reasoning to solve math.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comorbidities Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Shared Causes (Comorbidities)</h2>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Dyscalculia frequently shares biological etiology with other learning differences. Nearly 60% of individuals with dyslexia also experience dyscalculia, highlighting a massive genetic overlap between how the brain processes abstract reading symbols and abstract math symbols.<sup>2</sup> Similarly, the executive function and working memory deficits found in ADHD heavily disrupt the mental "scratchpad" required to execute complex math.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-32">
                <ImageWithFallback 
                  src="/images/dyscalculia/dyscalculia-causes-comorbidities.webp"
                  alt="Overlap of neurodivergent learning profiles"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ENVIRONMENT & MYTHS
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-6">
          
          {/* Environment Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental & Educational Factors</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  While external environments do not biologically cause dyscalculia, they definitively shape how severely the condition impacts a person's life. High-anxiety classrooms and poor instructional methods can rapidly exacerbate a child's natural neurodevelopmental delays, transforming a manageable learning difference into a debilitating trauma.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-32">
                <ImageWithFallback 
                  src="/images/dyscalculia/dyscalculia-causes-environment.webp"
                  alt="Classroom environment and mathematical anxiety"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Math Anxiety</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Bi-directional loop:</strong> Math difficulties trigger anxiety, and the resulting anxiety actively impairs mathematical performance.</li>
                  <li><strong>Working memory block:</strong> Panic and anxiety consume the exact working memory resources required to solve the math problem.</li>
                  <li><strong>Intergenerational effects:</strong> A parent's own severe math anxiety can negatively influence a child's mathematical confidence.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Instruction Quality</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Not the root cause:</strong> Dyscalculia persists despite excellent teaching, proving it is neurological, not educational.</li>
                  <li><strong>Amelioration:</strong> Explicit, highly systematic, multi-sensory instruction is required to help the brain build new neural pathways.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Culture & Theories Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Culture & Current Theories</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="shrink-0 w-full md:w-32">
                <ImageWithFallback 
                  src="/images/dyscalculia/dyscalculia-causes-theories.webp"
                  alt="Global mathematical concepts and cultural learning"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Dyscalculia is a universal human condition that presents with remarkably consistent prevalence rates across all languages, cultures, and socioeconomic backgrounds globally. While languages with highly logical, transparent number-naming systems (like Mandarin) may ease the early burden of counting, they do not prevent or cure the underlying neurological deficits.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Current Theoretical Models</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Core Deficit Model:</strong> Asserts that a single, specific impairment in the approximate number system is the primary driver of dyscalculia.</li>
                <li><strong>Access Deficit Model:</strong> Proposes that the brain understands quantities perfectly, but the pathways required to access and manipulate that data are broken.</li>
                <li><strong>Multiple Deficits Model:</strong> Believes dyscalculia is a combination of poor number sense colliding with broader working memory impairments.</li>
              </ul>
            </div>
          </div>

          {/* Myths & Clarifications Card (Red/White) */}
          <div className="bg-white border-4 border-red-500 rounded-xl p-6 shadow-sm">
            <h2 className="text-red-700 font-bold mb-4 text-2xl flex items-center gap-2">
              <span>⚠</span> What Does NOT Cause Dyscalculia
            </h2>
            
            <p className="mb-4 text-sm text-slate-700 font-bold">
              Dyscalculia is a legitimate neurological condition with biological bases. It is explicitly NOT caused by:
            </p>
            
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Low overall intelligence, intellectual disability, or cognitive delay.</li>
              <li>Laziness, poor attitude, or a lack of personal motivation.</li>
              <li>Poor parenting, lack of discipline, or family dysfunction.</li>
              <li>Simply "disliking math" or purposefully avoiding mathematical practice.</li>
              <li>Inadequate school instruction alone (though poor teaching undoubtedly worsens outcomes).</li>
              <li>Cultural or linguistic disadvantages.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Bottom navigation button */}
      <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-end clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          Back to Dyscalculia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Shalev, R. S., Auerbach, J., Manor, O., & Gross-Tsur, V. (2000). Developmental dyscalculia: prevalence and prognosis. <em>European Child & Adolescent Psychiatry</em>, <em>9</em>, S58-S64. https://doi.org/10.1007/s007870070009<br />Cited by: 566</p>
            <p>2. Landerl, K., & Moll, K. (2010). Comorbidity of learning disorders: prevalence and familial transmission. <em>Journal of Child Psychology and Psychiatry</em>, <em>51</em>, 287-294. https://doi.org/10.1111/j.1469-7610.2009.02164.x<br />Cited by: 749</p>
            <p>3. Hannula-Jouppi, K., Kaminen-Ahola, N., Taipale, M., et al. (2005). The Axon Guidance Receptor Gene ROBO1 Is a Candidate Gene for Developmental Dyslexia. <em>PLoS Genetics</em>, <em>1</em>, e50. https://doi.org/10.1371/journal.pgen.0010050<br />Cited by: 508</p>
            <p>4. McCaskey, U., von Aster, M., O’Gorman Tuura, R., & Kucian, K. (2017). Adolescents with Developmental Dyscalculia Do Not Have a Generalized Magnitude Deficit – Processing of Discrete and Continuous Magnitudes. <em>Frontiers in Human Neuroscience</em>, <em>11</em>. https://doi.org/10.3389/fnhum.2017.00102<br />Cited by: 53</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., text rev.). American Psychiatric Association.</li>
            <li>Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." Science.</li>
            <li>Mazzocco, M. M. (2007). "Defining and differentiating mathematical learning disabilities and difficulties." Why is math so hard for some children?. Paul H. Brookes Publishing.</li>
            <li>Wilson, A. J., & Dehaene, S. (2007). "Number sense and developmental dyscalculia." Human behavior, learning, and the developing brain. Guilford Press.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}