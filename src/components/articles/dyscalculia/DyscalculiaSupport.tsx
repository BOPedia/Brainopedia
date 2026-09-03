import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyscalculiaSupport({ setCurrentArticle, initialTab }: DyscalculiaSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'interventions');

  return (
    <article className="max-w-6xl font-spartan">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      
      {/* Header Area */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Dyscalculia Support & Strategies
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
          onClick={() => setActiveTab('interventions')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'interventions'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Interventions
        </button>
        <button
          onClick={() => setActiveTab('accommodations')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'accommodations'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Accommodations
        </button>
        <button
          onClick={() => setActiveTab('home')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'home'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Home & Emotional
        </button>
      </div>

      {/* ==========================================
          TAB 1: INTERVENTIONS
      ========================================== */}
      {activeTab === 'interventions' && (
        <div className="space-y-6 animate-fadeIn">
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Effective intervention for dyscalculia relies on explicit, highly systematic instruction that targets the root deficits in fundamental number sense.<sup>1</sup> Rather than pushing memorization, successful strategies utilize multi-sensory techniques to help the brain build new, reliable neural pathways for mathematical reasoning.<sup>2</sup>
          </p>

          {/* Educational Interventions Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Interventions</h2>
            
            <div className="clearfix mb-6">
              <ImageWithFallback 
                src="/images/dyscalculia/dyscalculia-support-interventions.webp"
                alt="Multi-sensory math instruction using physical blocks"
                className="w-32 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
              />
              <p className="text-sm text-slate-700 leading-relaxed">
                Direct instruction must focus heavily on bridging the gap between abstract numerical symbols and their physical quantities.<sup>3</sup> This is achieved by anchoring mathematical concepts in tangible, physical space before gradually introducing standard equations.<sup>1</sup>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Instructional Models</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Concrete-Representational-Abstract (CRA):</strong> A vital sequence progressing from physical blocks to drawn pictures, and finally to numbers.<sup>2</sup></li>
                  <li><strong>Explicit verbalization:</strong> Requiring students to talk through their mathematical reasoning aloud to engage language processing centers.</li>
                  <li><strong>Micro-stepping:</strong> Breaking complex mathematical procedures down into the smallest possible discrete steps.<sup>4</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Physical Tools</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Base-ten blocks:</strong> Essential for visualizing place value and understanding regrouping in addition and subtraction.</li>
                  <li><strong>Cuisenaire rods:</strong> Colored wooden rods that help students physically manipulate and compare relative magnitudes.<sup>2</sup></li>
                  <li><strong>Fraction tiles:</strong> Tangible pieces that allow students to physically see how parts constitute a whole.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arithmetic Strategies Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Targeted Arithmetic Strategies</h2>
            
            <div className="clearfix mb-6">
              <ImageWithFallback 
                src="/images/dyscalculia/dyscalculia-support-arithmetic.webp"
                alt="Visual number lines and dot pattern strategies"
                className="w-32 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
              />
              <p className="text-sm text-slate-700 leading-relaxed">
                Because individuals with dyscalculia frequently struggle to memorize math facts, interventions must provide alternative, logic-based pathways for basic arithmetic.<sup>3</sup> These targeted strategies bypass the need for rote memorization by teaching students how to efficiently derive answers using visual and spatial reasoning.<sup>2</sup>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Spatial Number Sense</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Extensive number lines:</strong> Using physical and visual number lines heavily to map out distances between quantities.<sup>1</sup></li>
                  <li><strong>Subitizing practice:</strong> Training the brain to instantly recognize small quantities using consistent dot patterns (like on dice).</li>
                  <li><strong>Ten-frames:</strong> Using visual grids to help students quickly anchor numbers in relation to five and ten.<sup>2</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Derivation Techniques</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Decomposition:</strong> Teaching how to break numbers apart (e.g., seeing 8 as 5 and 3) to simplify addition.<sup>4</sup></li>
                  <li><strong>Anchoring to known facts:</strong> Using known doubles (like 4+4=8) to easily solve adjacent problems (like 4+5=9).</li>
                  <li><strong>Finger math:</strong> Permitting and encouraging the use of fingers as a legitimate tool for maintaining working memory during calculations.<sup>3</sup></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ACCOMMODATIONS
      ========================================== */}
      {activeTab === 'accommodations' && (
        <div className="space-y-6 animate-fadeIn">
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Classroom accommodations are essential tools that remove arbitrary barriers, allowing students with dyscalculia to demonstrate their true understanding of mathematical concepts.<sup>4</sup> Without these modifications, testing often measures a student's working memory deficits rather than their actual mastery of the subject matter.<sup>3</sup>
          </p>

          {/* Classroom Accommodations Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Classroom Accommodations</h2>
            
            <div className="clearfix mb-6">
              <ImageWithFallback 
                src="/images/dyscalculia/dyscalculia-support-accommodations.webp"
                alt="Student using reference sheets and extended time"
                className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
              />
              <p className="text-sm text-slate-700 leading-relaxed">
                Reasonable modifications must address the immense cognitive fatigue caused by numerical processing delays.<sup>1</sup> Adjusting the format, volume, and pacing of assignments ensures the student can engage with complex logic without being paralyzed by arithmetic fatigue.<sup>4</sup>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Testing Adjustments</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Extended time:</strong> Providing 1.5x or 2x time on math-heavy assessments to accommodate slower processing speeds.</li>
                  <li><strong>Reference sheets:</strong> Allowing unrestricted access to multiplication tables and formula sheets.<sup>2</sup></li>
                  <li><strong>Reduced workload:</strong> Assigning fewer problems (e.g., only odd numbers) to test mastery without exhausting the student.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Formatting Support</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Graph paper:</strong> Supplying grid paper to help the student cleanly align numbers vertically during calculations.<sup>2</sup></li>
                  <li><strong>Visual cues:</strong> Highlighting operational signs (+, -, x) in different colors to prevent careless errors.</li>
                  <li><strong>More white space:</strong> Providing worksheets with ample blank space to reduce visual clutter and anxiety.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assistive Technology</h2>
            
            <div className="clearfix mb-6">
              <ImageWithFallback 
                src="/images/dyscalculia/dyscalculia-support-technology.webp"
                alt="Calculators and digital math tools"
                className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
              />
              <p className="text-sm text-slate-700 leading-relaxed">
                Assistive technology acts as a vital cognitive bridge, allowing individuals with dyscalculia to bypass severe calculation deficits and engage directly with higher-level problem solving.<sup>3</sup> By offloading basic arithmetic to digital tools, the student's working memory is freed to focus on algebraic logic and real-world applications.<sup>1</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Essential Digital Tools</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Calculators:</strong> Consistent, unrestricted access to basic or talking calculators for all routine arithmetic tasks.<sup>4</sup></li>
                <li><strong>Text-to-Speech:</strong> Software that reads word problems aloud to help untangle complex linguistic framing from the math equation.</li>
                <li><strong>Digital graphing:</strong> Programs that cleanly format equations and graphs, removing the fine-motor strain of drawing them perfectly by hand.</li>
                <li><strong>Audio recording:</strong> Allowing the recording of math lectures so students can review sequential steps without the pressure of live note-taking.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: HOME & EMOTIONAL
      ========================================== */}
      {activeTab === 'home' && (
        <div className="space-y-6 animate-fadeIn">
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Supporting an individual with dyscalculia requires addressing the profound emotional toll that chronic mathematical failure takes on self-esteem.<sup>4</sup> A supportive home environment can rebuild confidence by integrating math into low-stress, practical daily routines while actively working to dismantle math anxiety.<sup>2</sup>
          </p>

          {/* Home Environment Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support in Daily Life</h2>
            
            <div className="clearfix mb-6">
              <ImageWithFallback 
                src="/images/dyscalculia/dyscalculia-support-home.webp"
                alt="Engaging in practical math through cooking"
                className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
              />
              <p className="text-sm text-slate-700 leading-relaxed">
                The home should serve as a safe space where individuals can interact with numbers freely, completely separated from the high-stakes pressure of academic grading.<sup>2</sup> Integrating mathematical concepts into tangible, everyday activities helps build practical number sense organically.<sup>1</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Everyday Math Activities</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Cooking and baking:</strong> A highly visual, practical way to practice fractions, measuring volumes, and estimating time.</li>
                <li><strong>Board games:</strong> Games involving dice, counting spaces, or handling play money build sequential skills in an enjoyable environment.</li>
                <li><strong>Shopping routines:</strong> Casually estimating total costs, talking about sale percentages, and handling physical cash during small errands.</li>
                <li><strong>Time management:</strong> Using analog clocks at home and setting visual timers to help develop a physical sense of time passing.<sup>4</sup></li>
              </ul>
            </div>
          </div>

          {/* Anxiety Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Managing Math Anxiety</h2>
            
            <div className="clearfix mb-6">
              <ImageWithFallback 
                src="/images/dyscalculia/dyscalculia-support-anxiety.webp"
                alt="Creating a supportive emotional environment"
                className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
              />
              <p className="text-sm text-slate-700 leading-relaxed">
                Because dyscalculia often leads to severe math anxiety, emotional regulation is just as critical as academic tutoring.<sup>3</sup> Parents and educators must actively validate the student's neurological struggle while simultaneously modeling confident, shame-free self-advocacy.<sup>4</sup>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Building Confidence</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>De-stigmatizing mistakes:</strong> Treating incorrect answers as helpful data points rather than failures.</li>
                  <li><strong>Validating the struggle:</strong> Acknowledging dyscalculia as a real neurological difference, completely unrelated to intelligence.<sup>1</sup></li>
                  <li><strong>Highlighting strengths:</strong> Actively fostering the child's talents in reading, art, or sports to build a well-rounded identity.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Advocacy & Stress</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Praising process:</strong> Rewarding the effort, logic, and problem-solving attempts over achieving the final correct answer.<sup>2</sup></li>
                  <li><strong>Advocacy modeling:</strong> Teaching the individual how to comfortably request accommodations, like asking for a calculator without shame.</li>
                  <li><strong>Homework boundaries:</strong> Enforcing strict time limits on math homework to prevent evening meltdowns and family conflict.</li>
                </ul>
              </div>
            </div>
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
            <p>1. Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>. https://doi.org/10.1126/science.1201536</p>
            <p>2. Chinn, S. (2012). <em>The trouble with maths: A practical guide to helping learners with numeracy difficulties</em> (2nd ed.). Routledge.</p>
            <p>3. Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>. https://doi.org/10.1177/00222194040370010201</p>
            <p>4. Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>. https://doi.org/10.3238/arztebl.2012.0767</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., text rev.). American Psychiatric Association.</li>
            <li>Dehaene, S. (2011). The number sense: How the mind creates mathematics. Oxford University Press.</li>
            <li>Mazzocco, M. M. (2007). "Defining and differentiating mathematical learning disabilities and difficulties." Why is math so hard for some children?. Paul H. Brookes Publishing.</li>
            <li>Wilson, A. J., & Dehaene, S. (2007). "Number sense and developmental dyscalculia." Human behavior, learning, and the developing brain. Guilford Press.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}