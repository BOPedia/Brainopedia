import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyscalculiaLiving({ setCurrentArticle, initialTab }: DyscalculiaLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'daily-life');

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
          Living with Dyscalculia
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
          onClick={() => setActiveTab('daily-life')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'daily-life'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Life & Emotions
        </button>
        <button
          onClick={() => setActiveTab('education-career')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'education-career'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Education & Career
        </button>
        <button
          onClick={() => setActiveTab('strategies-support')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'strategies-support'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Strategies & Support
        </button>
      </div>

      {/* ==========================================
          TAB 1: DAILY LIFE & EMOTIONS
      ========================================== */}
      {activeTab === 'daily-life' && (
        <div className="space-y-6 animate-fadeIn">
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Living with dyscalculia presents unique challenges in a world driven by numbers, schedules, and financial transactions.<sup>1</sup> However, with self-awareness, targeted strategies, and a supportive environment, individuals can successfully navigate these daily hurdles and lead fulfilling lives.<sup>2</sup>
          </p>

          {/* Daily Challenges Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Navigating Daily Logistics</h2>
            
            <div className="clearfix mb-6">
              <ImageWithFallback 
                src="/images/dyscalculia-living-daily-life.webp"
                alt="Confident individual managing daily tasks with dyscalculia"
                className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
              />
              <p className="text-sm text-slate-700 leading-relaxed">
                Dyscalculia impacts far more than academic testing; it seeps into the foundational logistics of adult independence.<sup>3</sup> Routine tasks that neurotypical individuals process automatically often require intense cognitive effort and careful planning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Time Management</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Reading clocks:</strong> Extreme difficulty quickly interpreting analog clocks, making digital displays essential.<sup>4</sup></li>
                  <li><strong>Estimating time:</strong> A poor internal sense of time passage, leading to chronic lateness or over-scheduling.</li>
                  <li><strong>Scheduling:</strong> Trouble coordinating multiple appointments and mentally calculating travel times between them.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Financial Tasks</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Counting change:</strong> Difficulty quickly calculating or verifying correct change at physical registers.<sup>5</sup></li>
                  <li><strong>Budgeting:</strong> Tracking daily spending and projecting monthly savings is mentally exhausting.</li>
                  <li><strong>Tipping:</strong> Mentally calculating 15% or 20% tips in social settings causes significant anxiety.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practical Hurdles Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Everyday Complexities</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Beyond time and money, dyscalculia disrupts spatial reasoning and procedural sequences required for household management. Tasks involving ratios, measurements, or spatial navigation often require the use of external tools or compensatory apps.<sup>2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Shopping & Pricing</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Value comparisons:</strong> Inability to quickly compare unit costs (e.g., price per ounce) between two brands.</li>
                  <li><strong>Sales discounts:</strong> Struggling to estimate what an item will cost when marked "30% off."</li>
                  <li><strong>Checkout estimates:</strong> Surprises at the cash register because the running mental total was inaccurate.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Cooking & Navigation</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Recipe ratios:</strong> Safely doubling or halving a recipe's ingredient measurements is highly error-prone.</li>
                  <li><strong>Procedural timing:</strong> Coordinating a multi-step meal so everything finishes at the same time.</li>
                  <li><strong>Spatial maps:</strong> Reading physical maps, estimating travel distances, and understanding highway exit numbers.<sup>1</sup></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emotional Impact Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional & Social Impact</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The invisible nature of dyscalculia often leads to profound emotional distress, as individuals are frequently misjudged as careless or unintelligent.<sup>4</sup> Building resilience requires dismantling the shame associated with utilizing accommodations in public spaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Internal Experiences</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Embarrassment:</strong> Feeling intense shame when pulling out a calculator for seemingly "simple" tasks.</li>
                  <li><strong>Imposter syndrome:</strong> Feeling inadequate despite possessing high intelligence and competence in other domains.</li>
                  <li><strong>Math anxiety:</strong> Experiencing a visceral, panic-like response when confronted with sudden numerical demands.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Social Situations</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Splitting bills:</strong> Anxiety when asked to divide a restaurant check quickly among friends.</li>
                  <li><strong>Game nights:</strong> Avoiding board games, card games, or casino games that require rapid mental math.</li>
                  <li><strong>Disclosure fatigue:</strong> Constantly deciding whether it is worth explaining the learning difference to new acquaintances.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EDUCATION & CAREER
      ========================================== */}
      {activeTab === 'education-career' && (
        <div className="space-y-6 animate-fadeIn">
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            The traditional education system and modern workplace are highly reliant on numerical fluency, often creating artificial barriers for those with dyscalculia.<sup>2</sup> By focusing on individual strengths and securing legal accommodations, individuals can pursue highly successful academic and professional trajectories.<sup>3</sup>
          </p>

          {/* Educational Journey Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Educational Journey</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              From early childhood through higher education, dyscalculia requires constant self-advocacy to secure the tools necessary to prove conceptual mastery.<sup>1</sup> Without interventions, the cumulative nature of math education can result in profound learned helplessness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Primary & Secondary</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Early realization:</strong> Watching peers easily grasp concepts while the student struggles to memorize basic facts.</li>
                  <li><strong>Homework disparity:</strong> Spending hours longer on math assignments compared to classmates.</li>
                  <li><strong>Testing trauma:</strong> Timed arithmetic tests causing significant, lasting anxiety and mental blocks.<sup>4</sup></li>
                  <li><strong>Gatekeeping:</strong> Standardized tests (SAT, ACT) presenting massive barriers to college admission without accommodations.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Higher Education</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Mandatory credits:</strong> Navigating university core requirements that demand advanced algebra or statistics.</li>
                  <li><strong>Self-advocacy shift:</strong> Transitioning to an environment where the student must proactively request their own ADA accommodations.</li>
                  <li><strong>Major selection:</strong> Frequently altering career aspirations to intentionally avoid math-heavy STEM degree paths.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career & Workplace Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Career & Employment</h2>
            
            <div className="clearfix mb-6">
              <ImageWithFallback 
                src="/images/dyscalculia-living-career.webp"
                alt="Professional working in fulfilling career with accommodations"
                className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
              />
              <p className="text-sm text-slate-700 leading-relaxed">
                Many adults with dyscalculia excel professionally by leaning into their verbal, creative, and interpersonal strengths.<sup>2</sup> Success in the workplace often involves finding the right organizational culture and utilizing assistive technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Workplace Hurdles</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Mental calculations:</strong> The pressure of being asked to estimate costs or timelines on the spot during meetings.</li>
                  <li><strong>Data saturation:</strong> Modern roles increasingly demanding spreadsheet management and data analysis.</li>
                  <li><strong>Inventory & scheduling:</strong> Roles requiring precise tracking of stock, hours, or complex shift rotations.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Ideal Accommodations</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Written instructions:</strong> Requesting all numerical data (like dates or budgets) be sent via email rather than spoken verbally.</li>
                  <li><strong>Task modification:</strong> Swapping duties so a colleague handles the invoicing while the dyscalculic employee handles the writing.</li>
                  <li><strong>Unrestricted tools:</strong> Using specialized calculators and accounting software to verify all manual entries.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: STRATEGIES & SUPPORT
      ========================================== */}
      {activeTab === 'strategies-support' && (
        <div className="space-y-6 animate-fadeIn">
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Living effectively with dyscalculia is fundamentally about working smarter, not harder, through the unapologetic use of technology.<sup>2</sup> By embracing these tools and focusing on inherent strengths, individuals can protect their mental health and achieve significant personal success.<sup>4</sup>
          </p>

          {/* Coping Strategies Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Coping Strategies & Tools</h2>
            
            <div className="clearfix mb-6">
              <ImageWithFallback 
                src="/images/dyscalculia-living-support.webp"
                alt="Supportive tools and technology aiding dyscalculia management"
                className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
              />
              <p className="text-sm text-slate-700 leading-relaxed">
                The modern smartphone has revolutionized independence for those with dyscalculia. Offloading the burden of calculation and memory to reliable digital systems allows the brain to focus its energy on executing the actual task.<sup>5</sup>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Digital Assistance</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Budgeting apps:</strong> Programs like YNAB or Mint that automate categorization and visually display spending limits.</li>
                  <li><strong>Smart speakers:</strong> Utilizing voice assistants to instantly set timers, alarms, and calendar reminders.</li>
                  <li><strong>GPS & navigation:</strong> Relying on mapping apps to calculate exact arrival times and provide step-by-step spatial directions.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Environmental Tweaks</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Automation:</strong> Setting up auto-pay for all bills to completely eliminate the risk of forgotten dates or late fees.</li>
                  <li><strong>Visual charts:</strong> Keeping printed measurement conversion charts permanently taped inside kitchen cabinets.</li>
                  <li><strong>Digital default:</strong> Replacing all analog clocks in the home and on personal devices with digital displays.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strengths Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths & Resilience</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Dyscalculia is characterized by a specific deficit in number processing, not a global cognitive delay. Because the brain develops uniquely, many individuals with dyscalculia excel in areas requiring holistic, big-picture thinking and deep empathy.<sup>2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Common Strengths</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Creative problem solving:</strong> Years of finding "workarounds" builds highly innovative, out-of-the-box thinking.</li>
                  <li><strong>Verbal intelligence:</strong> Frequently demonstrating exceptional vocabulary, reading comprehension, and written communication skills.</li>
                  <li><strong>Intuitive reasoning:</strong> Grasping the overall concept or aesthetic of a project much faster than linear thinkers.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">A Message of Hope</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Value beyond math:</strong> Dyscalculia does not define your worth or your potential for a brilliant career.<sup>1</sup></li>
                  <li><strong>Tool acceptance:</strong> Using a calculator is a smart utilization of resources, not a moral failure.</li>
                  <li><strong>Thriving:</strong> With self-awareness and appropriate accommodations, the limits of dyscalculia can be completely managed.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resources Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Resources & Rights</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              You are not alone in this journey. Numerous organizations exist to provide legal support, educational templates, and community connection for those navigating life with dyscalculia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Legal Protections</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>IDEA & 504 Plans:</strong> Guarantees K-12 students the right to specialized instruction and accommodations.</li>
                  <li><strong>The ADA:</strong> Protects college students and employees from discrimination and mandates "reasonable accommodations."</li>
                  <li><strong>Disclosure power:</strong> You control if and when to disclose your diagnosis to an employer or university.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Key Organizations</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Understood.org:</strong> The most comprehensive resource for learning differences and self-advocacy templates.</li>
                  <li><strong>Dyscalculia.org:</strong> Dedicated specifically to math learning disabilities and diagnostic resources.</li>
                  <li><strong>NCLD:</strong> The National Center for Learning Disabilities provides extensive policy and workplace guidance.</li>
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
            <p>1. Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
            <p>2. Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
            <p>3. Kaufmann, L., Mazzocco, M. M., Dowker, A., von Aster, M., Göbel, S. M., Grabner, R. H., ... & Nuerk, H. C. (2013). "Dyscalculia from a developmental and differential perspective." <em>Frontiers in Psychology</em>, 4, 516.</p>
            <p>4. Burny, E., Valcke, M., & Desoete, A. (2012). "Clock reading: An underestimated topic in children with mathematics difficulties." <em>Journal of Learning Disabilities</em>, 45(4), 351-360.</p>
            <p>5. Desoete, A., Ceulemans, A., De Weerdt, F., & Pieters, S. (2012). "Can we predict mathematical learning disabilities from symbolic and non-symbolic comparison tasks in kindergarten?" <em>British Journal of Educational Psychology</em>, 82(1), 64-81.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Chinn, S. (2012). <em>The trouble with maths: A practical guide to helping learners with numeracy difficulties</em> (2nd ed.). Routledge.</li>
            <li>Dweck, C. S. (2006). <em>Mindset: The new psychology of success</em>. Random House.</li>
            <li>Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</li>
            <li>Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}