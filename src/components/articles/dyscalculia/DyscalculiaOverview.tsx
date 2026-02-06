import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface DyscalculiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyscalculiaOverview({ setCurrentArticle }: DyscalculiaOverviewProps) {
  const [activeTab, setActiveTab] = useState('what');

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>

      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
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
      <div className="mb-8">
        <p className="mb-4">
          Dyscalculia is a specific learning disorder that affects a person's ability to understand and work with numbers and mathematical concepts.<sup>[1]</sup> 
          It is neurobiological in origin and characterized by difficulties with number sense, memorization of arithmetic facts, 
          accurate or fluent calculation, and mathematical reasoning.<sup>[2]</sup>
        </p>
        
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1509228468518-180dd4864904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwZGlmZmljdWx0eSUyMG51bWJlcnN8ZW58MXx8fHwxNzM4NzU2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Mathematical concepts and numbers"
          className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />
        
        <p className="mb-4">
          Importantly, dyscalculia is not a reflection of low intelligence or lack of effort. Many individuals with dyscalculia 
          have average or above-average intelligence and can be highly successful when provided with appropriate support 
          and accommodations.<sup>[3]</sup>
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => setActiveTab('what')}
          className={`px-6 py-3 rounded-md transition-colors ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          What is Dyscalculia?
        </button>
        <button
          onClick={() => setActiveTab('types')}
          className={`px-6 py-3 rounded-md transition-colors ${
            activeTab === 'types'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Types & Presentations
        </button>
        <button
          onClick={() => setActiveTab('facts')}
          className={`px-6 py-3 rounded-md transition-colors ${
            activeTab === 'facts'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
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
            <p className="mb-4">
              Dyscalculia is defined as:<sup>[4]</sup>
            </p>
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
              <p className="italic text-sm">
                "A specific learning disability affecting the normal acquisition of arithmetic skills. Dyscalculia 
                is characterized by difficulties in understanding number concepts, learning math facts, and performing 
                accurate and fluent calculations. These difficulties are not primarily explained by intellectual 
                disability, inadequate instruction, or sensory deficits."
              </p>
            </div>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Key Characteristics</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Number sense deficits:</strong> Difficulty understanding what numbers represent<sup>[5]</sup></li>
              <li className="mb-2"><strong>Calculation problems:</strong> Struggles with basic arithmetic operations<sup>[6]</sup></li>
              <li className="mb-2"><strong>Math fact retrieval:</strong> Difficulty memorizing math facts like multiplication tables<sup>[7]</sup></li>
              <li className="mb-2"><strong>Procedural difficulties:</strong> Challenges with multi-step math procedures<sup>[8]</sup></li>
              <li className="mb-2"><strong>Neurobiological basis:</strong> Differences in brain structure and function related to numerical processing<sup>[9]</sup></li>
              <li className="mb-2"><strong>Unexpected difficulty:</strong> Math challenges not explained by overall intellectual ability<sup>[10]</sup></li>
            </ul>
          </div>

          {/* What Dyscalculia is NOT Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Common Misconceptions</h2>
            
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4">
              <h3 className="text-center text-[#0c264d] font-bold mb-4">What Dyscalculia Is NOT:</h3>
              <div className="text-sm space-y-3">
                <p><strong>✗ Math anxiety:</strong> While anxiety can co-occur, dyscalculia is a neurobiological condition, not just fear of math<sup>[11]</sup></p>
                <p><strong>✗ Laziness or lack of effort:</strong> Difficulties are brain-based, not due to insufficient motivation<sup>[12]</sup></p>
                <p><strong>✗ Low intelligence:</strong> Dyscalculia occurs across the IQ range; many individuals have average or above-average intelligence<sup>[13]</sup></p>
                <p><strong>✗ Poor teaching:</strong> While quality instruction matters, dyscalculia persists despite good teaching<sup>[14]</sup></p>
                <p><strong>✗ Something you outgrow:</strong> Dyscalculia is lifelong, though individuals can learn strategies to manage challenges<sup>[15]</sup></p>
                <p><strong>✗ Being "bad at math":</strong> Dyscalculia is a specific neurological difference, not simply being weaker in math<sup>[16]</sup></p>
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
            
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Prevalence:</strong> Dyscalculia affects approximately 3-7% of the population<sup>[17]</sup></li>
              <li className="mb-2"><strong>Equally affects all genders:</strong> Research suggests similar rates in males and females<sup>[18]</sup></li>
              <li className="mb-2"><strong>Cross-cultural:</strong> Occurs across all cultures and countries<sup>[19]</sup></li>
              <li className="mb-2"><strong>Socioeconomic distribution:</strong> Affects individuals across all socioeconomic levels<sup>[20]</sup></li>
              <li className="mb-2"><strong>Often undiagnosed:</strong> Many individuals with dyscalculia are not formally identified<sup>[21]</sup></li>
            </ul>
          </div>

          {/* Spectrum and Severity Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyscalculia as a Spectrum</h2>
            
            <p className="mb-4">
              Dyscalculia exists on a continuum of severity, and its manifestation varies among individuals:<sup>[22]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Severity Levels</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Mild:</strong> Difficulties with specific areas of math; responds well to targeted intervention</li>
              <li className="mb-2"><strong>Moderate:</strong> More significant challenges requiring sustained intervention; math remains effortful<sup>[23]</sup></li>
              <li className="mb-2"><strong>Severe:</strong> Persistent, substantial difficulties despite appropriate intervention; may need extensive accommodations<sup>[24]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Variation</h3>
            <p className="mb-4">
              No two individuals with dyscalculia are exactly alike. Variation occurs in:<sup>[25]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
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
            
            <p className="mb-4">
              Dyscalculia frequently co-occurs with other conditions:<sup>[26]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Dyslexia:</strong> Up to 60% of individuals with dyslexia also show symptoms of dyscalculia<sup>[27]</sup></li>
              <li className="mb-2"><strong>ADHD:</strong> Higher rates of math difficulties in individuals with ADHD<sup>[28]</sup></li>
              <li className="mb-2"><strong>Anxiety disorders:</strong> Math anxiety and general anxiety often co-occur<sup>[29]</sup></li>
              <li className="mb-2"><strong>Dysgraphia:</strong> Writing difficulties can compound math challenges<sup>[30]</sup></li>
              <li className="mb-2"><strong>Working memory deficits:</strong> Often present alongside dyscalculia<sup>[31]</sup></li>
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
            <p className="mb-4">
              Mathematical thinking requires several brain systems working together:<sup>[32]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Number sense:</strong> Intuitive understanding of quantities and their relationships<sup>[33]</sup></li>
              <li className="mb-2"><strong>Visual-spatial processing:</strong> Mental manipulation of numerical information</li>
              <li className="mb-2"><strong>Working memory:</strong> Holding and manipulating numerical information<sup>[34]</sup></li>
              <li className="mb-2"><strong>Long-term memory:</strong> Storing and retrieving math facts and procedures<sup>[35]</sup></li>
              <li className="mb-2"><strong>Executive functions:</strong> Planning, organizing, and monitoring mathematical problem-solving</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Differences in Dyscalculia</h3>
            <p className="mb-4">
              Brain imaging studies show that individuals with dyscalculia show different patterns of brain activation:<sup>[36]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Parietal lobe differences:</strong> Reduced activity in the intraparietal sulcus, critical for number processing<sup>[37]</sup></li>
              <li className="mb-2"><strong>Reduced number sense:</strong> Weaker intuitive understanding of quantity<sup>[38]</sup></li>
              <li className="mb-2"><strong>Working memory challenges:</strong> Difficulty holding numerical information in mind<sup>[39]</sup></li>
              <li className="mb-2"><strong>Procedural difficulties:</strong> Challenges automating mathematical procedures<sup>[40]</sup></li>
            </ul>
          </div>

          {/* Number Sense Deficit Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Number Sense Deficit</h2>
            
            <p className="mb-4">
              The most well-established explanation for dyscalculia involves impaired number sense—the intuitive 
              understanding of quantities and their relationships.<sup>[41]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What is Number Sense?</h3>
            <p className="mb-4">
              Number sense involves several related skills:<sup>[42]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Subitizing:</strong> Quickly recognizing small quantities without counting</li>
              <li className="mb-2"><strong>Magnitude comparison:</strong> Judging which of two numbers is larger</li>
              <li className="mb-2"><strong>Estimation:</strong> Approximating quantities and calculation results<sup>[43]</sup></li>
              <li className="mb-2"><strong>Number line understanding:</strong> Mental representation of numbers on a continuum</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Number Sense Deficits Affect Math</h3>
            <p className="mb-4">
              When number sense is impaired:<sup>[44]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Understanding what numbers represent becomes difficult</li>
              <li className="mb-2">Learning basic arithmetic facts is challenging</li>
              <li className="mb-2">Mental math and estimation are very difficult</li>
              <li className="mb-2">Understanding mathematical symbols and their relationships is impaired</li>
              <li className="mb-2">Math remains effortful rather than becoming automatic</li>
            </ul>
          </div>

          {/* Strengths Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyscalculia and Strengths</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRoaW5raW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Mzg3NTYxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Creative collaboration and thinking"
              className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
            />
            
            <p className="mb-4">
              While dyscalculia presents challenges with numbers, many individuals also demonstrate notable strengths:<sup>[45]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Verbal reasoning:</strong> Strong language and communication skills<sup>[46]</sup></li>
              <li className="mb-2"><strong>Creative problem-solving:</strong> Finding innovative non-mathematical solutions</li>
              <li className="mb-2"><strong>Intuitive thinking:</strong> Strong gut instincts and holistic understanding<sup>[47]</sup></li>
              <li className="mb-2"><strong>Visual and artistic abilities:</strong> Many excel in visual arts and design<sup>[48]</sup></li>
              <li className="mb-2"><strong>Persistence:</strong> Resilience developed through overcoming challenges</li>
              <li className="mb-2"><strong>Empathy:</strong> Understanding the struggles of others</li>
            </ul>
            <p className="mb-4">
              Many successful individuals in diverse fields have dyscalculia and have found ways to work with their strengths.<sup>[49]</sup>
            </p>
          </div>

          {/* Importance of Understanding Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Importance of Understanding Dyscalculia</h2>
            
            <p className="mb-4">
              Understanding dyscalculia is crucial because:<sup>[50]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Early identification matters:</strong> Early intervention leads to better outcomes<sup>[51]</sup></li>
              <li className="mb-2"><strong>Appropriate instruction is essential:</strong> Individuals need explicit, systematic math instruction<sup>[52]</sup></li>
              <li className="mb-2"><strong>Accommodations enable success:</strong> Tools like calculators can level the playing field<sup>[53]</sup></li>
              <li className="mb-2"><strong>Self-understanding is empowering:</strong> Understanding dyscalculia helps individuals advocate for themselves<sup>[54]</sup></li>
              <li className="mb-2"><strong>Reduces negative impact:</strong> Proper support prevents secondary issues like math anxiety and avoidance<sup>[55]</sup></li>
            </ul>
          </div>

          {/* Looking Forward Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Moving Forward</h2>
            
            <p className="mb-4">
              Dyscalculia is a well-researched, neurobiological condition that affects mathematical thinking but does not limit potential. 
              With understanding, appropriate instruction, accommodations, and support, individuals with dyscalculia can develop 
              functional math skills and succeed academically, professionally, and personally.<sup>[56]</sup>
            </p>
            
            <p className="mb-4">
              The key is recognizing dyscalculia early, providing evidence-based intervention, celebrating strengths, and 
              fostering an environment where individuals with dyscalculia can thrive.<sup>[57]</sup>
            </p>
          </div>
        </div>
      )}

      {/* Bottom navigation button */}
      <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-end">
        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Dyscalculia
        </button>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). American Psychiatric Publishing.</p>
          <p>[2] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[3] Mazzocco, M. M. (2007). "Defining and differentiating mathematical learning disabilities and difficulties." In D. B. Berch & M. M. Mazzocco (Eds.), <em>Why is math so hard for some children?</em> (pp. 29-47). Paul H. Brookes Publishing.</p>
          <p>[4] Shalev, R. S. (2004). "Developmental dyscalculia." <em>Journal of Child Neurology</em>, 19(10), 765-771.</p>
          <p>[5] Wilson, A. J., & Dehaene, S. (2007). "Number sense and developmental dyscalculia." In D. Coch, G. Dawson, & K. Fischer (Eds.), <em>Human behavior, learning, and the developing brain: Atypical development</em> (pp. 212-238). Guilford Press.</p>
          <p>[6] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[7] Geary, D. C., Hoard, M. K., & Bailey, D. H. (2012). "Fact retrieval deficits in low achieving children and children with mathematical learning disability." <em>Journal of Learning Disabilities</em>, 45(4), 291-307.</p>
          <p>[8] Fuchs, L. S., et al. (2010). "The contributions of numerosity and domain-general abilities to school readiness." <em>Child Development</em>, 81(5), 1520-1533.</p>
          <p>[9] Butterworth, B. (2010). "Foundational numerical capacities and the origins of dyscalculia." <em>Trends in Cognitive Sciences</em>, 14(12), 534-541.</p>
          <p>[10] Mazzocco, M. M., & Myers, G. F. (2003). "Complexities in identifying and defining mathematics learning disability in the primary school-age years." <em>Annals of Dyslexia</em>, 53(1), 218-253.</p>
          <p>[11] Ashcraft, M. H., & Moore, A. M. (2009). "Mathematics anxiety and the affective drop in performance." <em>Journal of Psychoeducational Assessment</em>, 27(3), 197-205.</p>
          <p>[12] Devine, A., et al. (2013). "Gender differences in developmental dyscalculia depend on diagnostic criteria." <em>Learning and Instruction</em>, 27, 31-39.</p>
          <p>[13] Mazzocco, M. M., & Räsänen, P. (2013). "Contributions of longitudinal studies to evolving definitions and knowledge of developmental dyscalculia." <em>Trends in Neuroscience and Education</em>, 2(2), 65-73.</p>
          <p>[14] Dowker, A. (2005). <em>Individual differences in arithmetic: Implications for psychology, neuroscience and education</em>. Psychology Press.</p>
          <p>[15] Shalev, R. S., Manor, O., & Gross-Tsur, V. (2005). "Developmental dyscalculia: A prospective six-year follow-up." <em>Developmental Medicine & Child Neurology</em>, 47(2), 121-125.</p>
          <p>[16] Rubinsten, O., & Henik, A. (2009). "Developmental dyscalculia: Heterogeneity might not mean different mechanisms." <em>Trends in Cognitive Sciences</em>, 13(2), 92-99.</p>
          <p>[17] Shalev, R. S., Auerbach, J., Manor, O., & Gross-Tsur, V. (2000). "Developmental dyscalculia: Prevalence and prognosis." <em>European Child & Adolescent Psychiatry</em>, 9(2), II58-II64.</p>
          <p>[18] Devine, A., Soltész, F., Nobes, A., Goswami, U., & Szűcs, D. (2013). "Gender differences in developmental dyscalculia depend on diagnostic criteria." <em>Learning and Instruction</em>, 27, 31-39.</p>
          <p>[19] Desoete, A., Ceulemans, A., De Weerdt, F., & Pieters, S. (2012). "Can we predict mathematical learning disabilities from symbolic and non-symbolic comparison tasks in kindergarten?" <em>British Journal of Educational Psychology</em>, 82(1), 64-81.</p>
          <p>[20] Jordan, N. C., & Levine, S. C. (2009). "Socioeconomic variation, number competence, and mathematics learning difficulties in young children." <em>Developmental Disabilities Research Reviews</em>, 15(1), 60-68.</p>
          <p>[21] Mazzocco, M. M. (2008). "Defining and differentiating mathematical learning disabilities and difficulties." In D. B. Berch & M. M. Mazzocco (Eds.), <em>Why is math so hard for some children?</em> (pp. 29-47). Paul H. Brookes Publishing.</p>
          <p>[22] Mazzocco, M. M., & Myers, G. F. (2003). "Complexities in identifying and defining mathematics learning disability in the primary school-age years." <em>Annals of Dyslexia</em>, 53(1), 218-253.</p>
          <p>[23] Murphy, M. M., Mazzocco, M. M., Hanich, L. B., & Early, M. C. (2007). "Cognitive characteristics of children with mathematics learning disability (MLD) vary as a function of the cutoff criterion used to define MLD." <em>Journal of Learning Disabilities</em>, 40(5), 458-478.</p>
          <p>[24] Landerl, K., Fussenegger, B., Moll, K., & Willburger, E. (2009). "Dyslexia and dyscalculia: Two learning disorders with different cognitive profiles." <em>Journal of Experimental Child Psychology</em>, 103(3), 309-324.</p>
          <p>[25] Kaufmann, L., et al. (2013). "Dyscalculia from a developmental and differential perspective." <em>Frontiers in Psychology</em>, 4, 516.</p>
          <p>[26] Wilson, A. J., et al. (2006). "Principles underlying the design of 'The Number Race', an adaptive computer game for remediation of dyscalculia." <em>Behavioral and Brain Functions</em>, 2(1), 19.</p>
          <p>[27] Landerl, K., & Moll, K. (2010). "Comorbidity of learning disorders: Prevalence and familial transmission." <em>Journal of Child Psychology and Psychiatry</em>, 51(3), 287-294.</p>
          <p>[28] Capano, L., Minden, D., Chen, S. X., Schachar, R. J., & Ickowicz, A. (2008). "Mathematical learning disorder in school-age children with attention-deficit hyperactivity disorder." <em>Canadian Journal of Psychiatry</em>, 53(6), 392-399.</p>
          <p>[29] Ashcraft, M. H., & Krause, J. A. (2007). "Working memory, math performance, and math anxiety." <em>Psychonomic Bulletin & Review</em>, 14(2), 243-248.</p>
          <p>[30] Berninger, V. W. (2008). "Defining and differentiating dysgraphia, dyslexia, and language learning disability within a working memory model." In M. Mody & E. R. Silliman (Eds.), <em>Brain, behavior, and learning in language and reading disorders</em> (pp. 103-134). Guilford Press.</p>
          <p>[31] Raghubar, K. P., Barnes, M. A., & Hecht, S. A. (2010). "Working memory and mathematics: A review of developmental, individual difference, and cognitive approaches." <em>Learning and Individual Differences</em>, 20(2), 110-122.</p>
          <p>[32] Dehaene, S., Piazza, M., Pinel, P., & Cohen, L. (2003). "Three parietal circuits for number processing." <em>Cognitive Neuropsychology</em>, 20(3-6), 487-506.</p>
          <p>[33] Feigenson, L., Dehaene, S., & Spelke, E. (2004). "Core systems of number." <em>Trends in Cognitive Sciences</em>, 8(7), 307-314.</p>
          <p>[34] Baddeley, A. (1992). "Working memory." <em>Science</em>, 255(5044), 556-559.</p>
          <p>[35] Delazer, M., et al. (2003). "Learning complex arithmetic—An fMRI study." <em>Cognitive Brain Research</em>, 18(1), 76-88.</p>
          <p>[36] Arsalidou, M., & Taylor, M. J. (2011). "Is 2+2=4? Meta-analyses of brain areas needed for numbers and calculations." <em>NeuroImage</em>, 54(3), 2382-2393.</p>
          <p>[37] Price, G. R., Holloway, I., Räsänen, P., Vesterinen, M., & Ansari, D. (2007). "Impaired parietal magnitude processing in developmental dyscalculia." <em>Current Biology</em>, 17(24), R1042-R1043.</p>
          <p>[38] Piazza, M., et al. (2010). "Developmental trajectory of number acuity reveals a severe impairment in developmental dyscalculia." <em>Cognition</em>, 116(1), 33-41.</p>
          <p>[39] Geary, D. C., Hoard, M. K., Byrd-Craven, J., & DeSoto, M. C. (2004). "Strategy choices in simple and complex addition: Contributions of working memory and counting knowledge for children with mathematical disability." <em>Journal of Experimental Child Psychology</em>, 88(2), 121-151.</p>
          <p>[40] De Smedt, B., & Gilmore, C. K. (2011). "Defective number module or impaired access? Numerical magnitude processing in first graders with mathematical difficulties." <em>Journal of Experimental Child Psychology</em>, 108(2), 278-292.</p>
          <p>[41] Wilson, A. J., & Dehaene, S. (2007). "Number sense and developmental dyscalculia." In D. Coch, G. Dawson, & K. Fischer (Eds.), <em>Human behavior, learning, and the developing brain: Atypical development</em> (pp. 212-238). Guilford Press.</p>
          <p>[42] Jordan, N. C., Glutting, J., & Ramineni, C. (2010). "The importance of number sense to mathematics achievement in first and third grades." <em>Learning and Individual Differences</em>, 20(2), 82-88.</p>
          <p>[43] Booth, J. L., & Siegler, R. S. (2008). "Numerical magnitude representations influence arithmetic learning." <em>Child Development</em>, 79(4), 1016-1031.</p>
          <p>[44] Mazzocco, M. M., Feigenson, L., & Halberda, J. (2011). "Preschoolers' precision of the approximate number system predicts later school mathematics performance." <em>PLoS One</em>, 6(9), e23749.</p>
          <p>[45] Chinn, S. (2012). <em>More trouble with maths: A complete guide to identifying and diagnosing mathematical difficulties</em> (2nd ed.). Routledge.</p>
          <p>[46] Geary, D. C. (2010). "Mathematical disabilities: Reflections on cognitive, neuropsychological, and genetic components." <em>Learning and Individual Differences</em>, 20(2), 130-133.</p>
          <p>[47] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[48] Sharma, M. C. (1989). "How children learn mathematics: Professor Mahesh Sharma talks to parents and teachers." <em>Math Notebook</em>, 7(1-2), 1-27.</p>
          <p>[49] Butterworth, B., & Yeo, D. (2004). <em>Dyscalculia guidance: Helping pupils with specific learning difficulties in maths</em>. nferNelson Publishing.</p>
          <p>[50] Gersten, R., et al. (2009). "Assisting students struggling with mathematics: Response to Intervention (RtI) for elementary and middle schools." <em>National Center for Education Evaluation and Regional Assistance</em>, IES Practice Guide.</p>
          <p>[51] Dowker, A. (2009). "What works for children with mathematical difficulties? The effectiveness of intervention schemes." <em>Research Report DCSF-RR-144</em>, Department for Children, Schools and Families.</p>
          <p>[52] Fuchs, L. S., et al. (2008). "The prevention, identification, and cognitive determinants of math difficulty." <em>Journal of Educational Psychology</em>, 100(3), 769-787.</p>
          <p>[53] Bouck, E. C., & Flanagan, S. M. (2010). "Virtual manipulatives: What they are and how teachers can use them." <em>Intervention in School and Clinic</em>, 45(3), 186-191.</p>
          <p>[54] Chinn, S. (2012). <em>The trouble with maths: A practical guide to helping learners with numeracy difficulties</em> (2nd ed.). Routledge.</p>
          <p>[55] Ashcraft, M. H., & Ridley, K. S. (2005). "Math anxiety and its cognitive consequences." In J. I. D. Campbell (Ed.), <em>Handbook of mathematical cognition</em> (pp. 315-327). Psychology Press.</p>
          <p>[56] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[57] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
        </div>
      </section>
    </article>
  );
}
