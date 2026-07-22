import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';

interface DiagnosisOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DiagnosisOverview({ setCurrentArticle }: DiagnosisOverviewProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Testing & Diagnosing
        </h1>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About Dyslexia
        </button>
      </div>
      
      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-lg">←</span>
        All About Dyslexia
      </button>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="overview" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Process & Criteria
          </TabsTrigger>
          <TabsTrigger 
            value="evaluation" 
            onClick={() => setCurrentArticle?.('dyslexia-diagnosis-evaluation')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Comprehensive Evaluation
          </TabsTrigger>
          <TabsTrigger 
            value="ages" 
            onClick={() => setCurrentArticle?.('dyslexia-diagnosis-ages')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Ages & Next Steps
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="animate-fadeIn">
          <p className="mb-6 text-slate-700 leading-relaxed">
            Diagnosing dyslexia requires comprehensive evaluation by qualified professionals using multiple assessment methods. Early identification enables timely intervention, which significantly improves reading outcomes. There is no single test for dyslexia—diagnosis involves gathering information from various sources to understand an individual's reading profile.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Who Can Diagnose Dyslexia?</h3>
          <p className="mb-3 text-slate-700">Several professionals are qualified to evaluate for dyslexia:</p>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li><strong>Educational psychologists:</strong> Specialize in learning and academic assessment.</li>
            <li><strong>School psychologists:</strong> Conduct evaluations within school settings.</li>
            <li><strong>Clinical psychologists:</strong> Licensed psychologists with expertise in learning disorders.</li>
            <li><strong>Neuropsychologists:</strong> Assess brain-behavior relationships.</li>
            <li><strong>Learning specialists:</strong> Professionals trained in dyslexia assessment.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Diagnostic Criteria</h3>
          <p className="mb-3 text-slate-700">DSM-5 diagnostic criteria for Specific Learning Disorder with impairment in reading:</p>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li>Difficulties learning and using academic skills for at least 6 months despite interventions.</li>
            <li>Academic skills substantially below expected for age.</li>
            <li>Difficulties begin during school years.</li>
            <li>Not better explained by other conditions.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Pattern Recognition</h3>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li>Discrepancy between listening comprehension and reading comprehension.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
            <li>Phonological processing deficits.</li>
            <li>Slow, effortful reading despite adequate instruction.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li>Unexpected difficulty relative to other abilities.</li>
          </ul>

          <div className="bg-[#f0f9ff] border-l-4 border-[#0A9DC4] p-6 rounded-r-lg mb-8 shadow-sm">
            <h3 className="text-xl font-bold mt-2 mb-4 text-[#0c264d]">Frequently Asked Questions</h3>
            
            <div className="space-y-4 text-slate-700">
              <div>
                <p className="font-semibold text-[#0c264d]">Q: How long does an evaluation take?</p>
                <p className="text-sm mt-1">A: Typically 4-6 hours of testing plus report writing; may be spread across multiple sessions.</p>
              </div>
              <div>
                <p className="font-semibold text-[#0c264d]">Q: Can dyslexia be diagnosed in kindergarten?</p>
                <p className="text-sm mt-1">A: Risk factors can be identified early, but formal diagnosis usually occurs after reading instruction begins.<sup className="text-green-600 font-bold ml-0.5">4</sup></p>
              </div>
              <div>
                <p className="font-semibold text-[#0c264d]">Q: Do adults need a formal diagnosis?</p>
                <p className="text-sm mt-1">A: Helpful for understanding oneself, accessing accommodations at work/school, and receiving appropriate support.<sup className="text-green-600 font-bold ml-0.5">5</sup></p>
              </div>
              <div>
                <p className="font-semibold text-[#0c264d]">Q: What if my child doesn't qualify for school services?</p>
                <p className="text-sm mt-1">A: Private tutoring, 504 Plan (less intensive than IEP), or pursuing a private evaluation.<sup className="text-green-600 font-bold ml-0.5">6</sup></p>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 clear-both">
            <button 
              onClick={() => setCurrentArticle?.('dyslexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
            >
              <span className="text-lg">←</span>
              All About Dyslexia
            </button>
          </div>

          {/* REFERENCES SECTION */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <em>Journal of Child Psychology and Psychiatry</em>, 53(5), 593-607.</p>
                <p>2. Catts, H. W., Adlof, S. M., & Weismer, S. E. (2006). "Language deficits in poor comprehenders: A case for the simple view of reading." <em>Journal of Speech, Language, and Hearing Research</em>, 49(2), 278-293.</p>
                <p>3. Shaywitz, S. E., & Shaywitz, B. A. (2005). "Dyslexia (specific reading disability)." <em>Biological Psychiatry</em>, 57(11), 1301-1309.</p>
                <p>4. Snowling, M. J. (2013). "Early identification and interventions for dyslexia: A contemporary view." <em>Journal of Research in Special Educational Needs</em>, 13(1), 7-14.</p>
                <p>5. Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
                <p>6. Zirkel, P. A. (2013). "Is it time for elevating the standard for FAPE under IDEA?" <em>Exceptional Children</em>, 79(4), 497-508.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In P. McCardle & V. Chhabra (Eds.), <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</li>
                <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</li>
                <li>Hale, J. B., & Fiorello, C. A. (2004). <em>School neuropsychology: A practitioner's handbook</em>. Guilford Press.</li>
                <li>National Association of School Psychologists. (2015). <em>Identification of students with specific learning disabilities</em>. Author.</li>
                <li>Mather, N., & Wendling, B. J. (2011). <em>Essentials of dyslexia assessment and intervention</em>. John Wiley & Sons.</li>
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}