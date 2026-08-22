import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

interface DyscalculiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyscalculiaOverview({ setCurrentArticle, initialTab }: DyscalculiaOverviewProps) {
  const navigate = useNavigate();
  const activeTab = initialTab || 'what';

  return (
    <article className="max-w-6xl font-spartan">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Dyscalculia: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Dyscalculia
        </button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('dyscalculia')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Dyscalculia
      </button>

      {/* Introduction */}
      <div className="mb-8 flow-root">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1509228468518-180dd4864904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwZGlmZmljdWx0eSUyMG51bWJlcnN8ZW58MXx8fHwxNzM4NzU2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Mathematical concepts and numbers"
          className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />
        
        <p className="mb-4 text-slate-700 leading-relaxed">
          Dyscalculia is a specific learning disorder that affects a person's ability to understand and work with numbers and mathematical concepts. 
          It is neurobiological in origin and characterized by difficulties with number sense, memorization of arithmetic facts, 
          accurate or fluent calculation, and mathematical reasoning.
        </p>
        
        <p className="mb-4 text-slate-700 leading-relaxed">
          Importantly, dyscalculia is not a reflection of low intelligence or lack of effort. Many individuals with dyscalculia 
          have average or above-average intelligence and can be highly successful when provided with appropriate support 
          and accommodations.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6 clear-both">
        <button
          onClick={() => navigate('/dyscalculia-overview/what')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          What is Dyscalculia?
        </button>
        <button
          onClick={() => navigate('/dyscalculia-overview/types')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'types'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Types & Presentations
        </button>
        <button
          onClick={() => navigate('/dyscalculia-overview/facts')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'facts'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Key Facts & Stats
        </button>
      </div>

      {/* TAB 1: What is Dyscalculia? */}
      {activeTab === 'what' && (
        <div className="space-y-8">
          {/* What is Dyscalculia Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is Dyscalculia?</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Definition</h3>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Dyscalculia is defined as:
            </p>
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
              <p className="italic text-sm text-slate-700 leading-relaxed">
                "A specific learning disability affecting the normal acquisition of arithmetic skills. Dyscalculia 
                is characterized by difficulties in understanding number concepts, learning math facts, and performing 
                accurate and fluent calculations. These difficulties are not primarily explained by intellectual 
                disability, inadequate instruction, or sensory deficits."
              </p>
            </div>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Key Characteristics</h3>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2"><strong>Number sense deficits:</strong> Difficulty understanding what numbers represent</li>
              <li className="mb-2"><strong>Calculation problems:</strong> Struggles with basic arithmetic operations</li>
              <li className="mb-2"><strong>Math fact retrieval:</strong> Difficulty memorizing math facts like multiplication tables</li>
              <li className="mb-2"><strong>Procedural difficulties:</strong> Challenges with multi-step math procedures</li>
              <li className="mb-2"><strong>Neurobiological basis:</strong> Differences in brain structure and function related to numerical processing</li>
              <li className="mb-2"><strong>Unexpected difficulty:</strong> Math challenges not explained by overall intellectual ability</li>
            </ul>
          </div>

          {/* What Dyscalculia is NOT Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Common Misconceptions</h2>
            
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4">
              <h3 className="text-center text-[#0c264d] font-bold mb-4">What Dyscalculia Is NOT:</h3>
              <div className="text-sm space-y-3 text-slate-700">
                <p><strong>✗ Math anxiety:</strong> While anxiety can co-occur, dyscalculia is a neurobiological condition, not just fear of math</p>
                <p><strong>✗ Laziness or lack of effort:</strong> Difficulties are brain-based, not due to insufficient motivation</p>
                <p><strong>✗ Low intelligence:</strong> Dyscalculia occurs across the IQ range; many individuals have average or above-average intelligence</p>
                <p><strong>✗ Poor teaching:</strong> While quality instruction matters, dyscalculia persists despite good teaching</p>
                <p><strong>✗ Something you outgrow:</strong> Dyscalculia is lifelong, though individuals can learn strategies to manage challenges</p>
                <p><strong>✗ Being "bad at math":</strong> Dyscalculia is a specific neurological difference, not simply being weaker in math</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Types & Presentations */}
      {activeTab === 'types' && (
        <div className="space-y-8">
          {/* Prevalence Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">How Common is Dyscalculia?</h2>
            
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2"><strong>Prevalence:</strong> Dyscalculia affects approximately 3-7% of the population<sup className="text-[#10b981] font-bold ml-0.5">1</sup></li>
              <li className="mb-2"><strong>Equally affects all genders:</strong> Research suggests similar rates in males and females<sup className="text-[#10b981] font-bold ml-0.5">2</sup></li>
              <li className="mb-2"><strong>Cross-cultural:</strong> Occurs across all cultures and countries</li>
              <li className="mb-2"><strong>Socioeconomic distribution:</strong> Affects individuals across all socioeconomic levels</li>
              <li className="mb-2"><strong>Often undiagnosed:</strong> Many individuals with dyscalculia are not formally identified</li>
            </ul>
          </div>

          {/* Spectrum and Severity Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyscalculia as a Spectrum</h2>
            
            <p className="mb-4 text-slate-700 leading-relaxed">
              Dyscalculia exists on a continuum of severity, and its manifestation varies among individuals:
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Severity Levels</h3>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2"><strong>Mild:</strong> Difficulties with specific areas of math; responds well to targeted intervention</li>
              <li className="mb-2"><strong>Moderate:</strong> More significant challenges requiring sustained intervention; math remains effortful</li>
              <li className="mb-2"><strong>Severe:</strong> Persistent, substantial difficulties despite appropriate intervention; may need extensive accommodations</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Variation</h3>
            <p className="mb-4 text-slate-700 leading-relaxed">
              No two individuals with dyscalculia are exactly alike. Variation occurs in:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2">Specific pattern of strengths and weaknesses</li>
              <li className="mb-2">Response to intervention</li>
              <li className="mb-2">Compensatory strategies developed</li>
              <li className="mb-2">Co-occurring conditions</li>
              <li className="mb-2">Impact on daily functioning</li>
            </ul>
          </div>

          {/* Co-occurring Conditions Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
            
            <p className="mb-4 text-slate-700 leading-relaxed">
              Dyscalculia frequently co-occurs with other conditions:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2"><strong>Dyslexia:</strong> Up to 60% of individuals with dyslexia also show symptoms of dyscalculia<sup className="text-[#10b981] font-bold ml-0.5">3</sup></li>
              <li className="mb-2"><strong>ADHD:</strong> Higher rates of math difficulties in individuals with ADHD</li>
              <li className="mb-2"><strong>Anxiety disorders:</strong> Math anxiety and general anxiety often co-occur</li>
              <li className="mb-2"><strong>Dysgraphia:</strong> Writing difficulties can compound math challenges</li>
              <li className="mb-2"><strong>Working memory deficits:</strong> Often present alongside dyscalculia</li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: Key Facts & Stats */}
      {activeTab === 'facts' && (
        <div className="space-y-8">
          {/* The Mathematical Brain Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding the Mathematical Brain</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Typical Math Processing Works</h3>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Mathematical thinking requires several brain systems working together:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2"><strong>Number sense:</strong> Intuitive understanding of quantities and their relationships</li>
              <li className="mb-2"><strong>Visual-spatial processing:</strong> Mental manipulation of numerical information</li>
              <li className="mb-2"><strong>Working memory:</strong> Holding and manipulating numerical information</li>
              <li className="mb-2"><strong>Long-term memory:</strong> Storing and retrieving math facts and procedures</li>
              <li className="mb-2"><strong>Executive functions:</strong> Planning, organizing, and monitoring mathematical problem-solving</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Differences in Dyscalculia</h3>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Brain imaging studies show that individuals with dyscalculia show different patterns of brain activation:<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2"><strong>Parietal lobe differences:</strong> Reduced activity in the intraparietal sulcus, critical for number processing</li>
              <li className="mb-2"><strong>Reduced number sense:</strong> Weaker intuitive understanding of quantity</li>
              <li className="mb-2"><strong>Working memory challenges:</strong> Difficulty holding numerical information in mind</li>
              <li className="mb-2"><strong>Procedural difficulties:</strong> Challenges automating mathematical procedures</li>
            </ul>
          </div>

          {/* Number Sense Deficit Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Number Sense Deficit</h2>
            
            <p className="mb-4 text-slate-700 leading-relaxed">
              The most well-established explanation for dyscalculia involves impaired number sense—the intuitive 
              understanding of quantities and their relationships.
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What is Number Sense?</h3>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Number sense involves several related skills:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2"><strong>Subitizing:</strong> Quickly recognizing small quantities without counting</li>
              <li className="mb-2"><strong>Magnitude comparison:</strong> Judging which of two numbers is larger</li>
              <li className="mb-2"><strong>Estimation:</strong> Approximating quantities and calculation results</li>
              <li className="mb-2"><strong>Number line understanding:</strong> Mental representation of numbers on a continuum</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Number Sense Deficits Affect Math</h3>
            <p className="mb-4 text-slate-700 leading-relaxed">
              When number sense is impaired:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2">Understanding what numbers represent becomes difficult</li>
              <li className="mb-2">Learning basic arithmetic facts is challenging</li>
              <li className="mb-2">Mental math and estimation are very difficult</li>
              <li className="mb-2">Understanding mathematical symbols and their relationships is impaired</li>
              <li className="mb-2">Math remains effortful rather than becoming automatic</li>
            </ul>
          </div>

          {/* Strengths Section */}
          <div className="flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyscalculia and Strengths</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRoaW5raW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Mzg3NTYxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Creative collaboration and thinking"
              className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
            />
            
            <p className="mb-4 text-slate-700 leading-relaxed">
              While dyscalculia presents challenges with numbers, many individuals also demonstrate notable strengths:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2"><strong>Verbal reasoning:</strong> Strong language and communication skills</li>
              <li className="mb-2"><strong>Creative problem-solving:</strong> Finding innovative non-mathematical solutions</li>
              <li className="mb-2"><strong>Intuitive thinking:</strong> Strong gut instincts and holistic understanding</li>
              <li className="mb-2"><strong>Visual and artistic abilities:</strong> Many excel in visual arts and design</li>
              <li className="mb-2"><strong>Persistence:</strong> Resilience developed through overcoming challenges</li>
              <li className="mb-2"><strong>Empathy:</strong> Understanding the struggles of others</li>
            </ul>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Many successful individuals in diverse fields have dyscalculia and have found ways to work with their strengths.
            </p>
          </div>

          {/* Importance of Understanding Section */}
          <div className="clear-both pt-4">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Importance of Understanding Dyscalculia</h2>
            
            <p className="mb-4 text-slate-700 leading-relaxed">
              Understanding dyscalculia is crucial because:
            </p>
            <ul className="list-disc ml-6 mb-4 text-slate-700 leading-relaxed">
              <li className="mb-2"><strong>Early identification matters:</strong> Early intervention leads to better outcomes</li>
              <li className="mb-2"><strong>Appropriate instruction is essential:</strong> Individuals need explicit, systematic math instruction</li>
              <li className="mb-2"><strong>Accommodations enable success:</strong> Tools like calculators can level the playing field</li>
              <li className="mb-2"><strong>Self-understanding is empowering:</strong> Understanding dyscalculia helps individuals advocate for themselves</li>
              <li className="mb-2"><strong>Reduces negative impact:</strong> Proper support prevents secondary issues like math anxiety and avoidance</li>
            </ul>
          </div>

          {/* Looking Forward Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Moving Forward</h2>
            
            <p className="mb-4 text-slate-700 leading-relaxed">
              Dyscalculia is a well-researched, neurobiological condition that affects mathematical thinking but does not limit potential. 
              With understanding, appropriate instruction, accommodations, and support, individuals with dyscalculia can develop 
              functional math skills and succeed academically, professionally, and personally.
            </p>
            
            <p className="mb-4 text-slate-700 leading-relaxed">
              The key is recognizing dyscalculia early, providing evidence-based intervention, celebrating strengths, and 
              fostering an environment where individuals with dyscalculia can thrive.
            </p>
          </div>
        </div>
      )}

      {/* Bottom navigation button */}
      <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-end clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Dyscalculia
        </button>
      </div>

      
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Shalev, R. S., Auerbach, J., Manor, O., & Gross-Tsur, V. (2000). "Developmental dyscalculia: Prevalence and prognosis." <em>European Child & Adolescent Psychiatry</em>. https://doi.org/10.1007/s007870070009</p>
            <p>2. Devine, A., Soltész, F., Nobes, A., Goswami, U., & Szűcs, D. (2013). "Gender differences in developmental dyscalculia depend on diagnostic criteria." <em>Learning and Instruction</em>. https://doi.org/10.1016/j.learninstruc.2013.02.004</p>
            <p>3. Landerl, K., & Moll, K. (2010). "Comorbidity of learning disorders: Prevalence and familial transmission." <em>Journal of Child Psychology and Psychiatry</em>. https://doi.org/10.1111/j.1469-7610.2009.02164.x</p>
            <p>4. Arsalidou, M., & Taylor, M. J. (2011). "Is 2+2=4? Meta-analyses of brain areas needed for numbers and calculations." <em>NeuroImage</em>. https://doi.org/10.1016/j.neuroimage.2010.10.009</p>
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