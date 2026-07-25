import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

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
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Testing & Diagnosis Overview
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-diagnosis-overview-TAB-intro.png"
              alt="Overview of dyslexia diagnosis process"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Diagnosing dyslexia requires comprehensive evaluation by qualified professionals using multiple assessment methods. Early identification enables timely intervention, which significantly improves reading outcomes. There is no single test for dyslexia—diagnosis involves gathering information from various sources to understand an individual's reading profile.
            </p>
          </div>

          {/* Who Can Diagnose Cards */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Who Can Diagnose Dyslexia?</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">Educational Psychologists</h4>
              <p className="text-sm text-slate-700 flex-grow">Specialize in learning and academic assessment.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">School Psychologists</h4>
              <p className="text-sm text-slate-700 flex-grow">Conduct evaluations within school settings.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">Clinical Psychologists</h4>
              <p className="text-sm text-slate-700 flex-grow">Licensed psychologists with expertise in learning disorders.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">Neuropsychologists</h4>
              <p className="text-sm text-slate-700 flex-grow">Assess brain-behavior relationships.</p>
            </div>

                      <div className="bg-white p-5 rounded-xl border-t-4 border-[#0c264d] shadow-sm flex flex-col justify-center items-center">
               <ImageWithFallback 
                 src="/images/dyslexia/dyslexia-diagnosis-overview-TAB-professionals.png"
                 alt="Diagnostic professionals"
                 className="w-full h-auto rounded-md"
               />
            </div>
            
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">Learning Specialists</h4>
              <p className="text-sm text-slate-700 flex-grow">Professionals trained specifically in dyslexia assessment.</p>
            </div>
  
          </div>

          {/* Criteria & Patterns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Criteria Card */}
            <div className="bg-gray-300 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Diagnostic Criteria</h4>
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-diagnosis-overview-TAB-criteria.png"
                alt="DSM-5 Diagnostic Criteria"
                className="w-full h-auto rounded-md border border-gray-200 mb-5 bg-white"
              />
              <p className="text-sm text-slate-800 mb-4 font-medium text-center">
                DSM-5 criteria for Specific Learning Disorder with impairment in reading:
              </p>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Difficulties learning and using academic skills for at least 6 months despite interventions.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Academic skills substantially below expected for age.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Difficulties begin during school years.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Not better explained by other conditions.
                </div>
              </div>
            </div>

            {/* Pattern Recognition Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Pattern Recognition</h4>
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-diagnosis-overview-TAB-patterns.png"
                alt="Pattern Recognition in Dyslexia"
                className="w-full h-auto rounded-md border border-gray-200 mb-5 bg-white"
              />
              <p className="text-sm text-slate-800 mb-4 font-medium text-center">
                Evaluators look for specific profiles and discrepancies:
              </p>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Discrepancy between listening comprehension and reading comprehension.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Evident phonological processing deficits.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Slow, effortful reading despite adequate instruction.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Unexpected difficulty relative to other abilities.
                </div>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <div className="bg-[#0c264d] border-l-4 border-[#ffd166] p-6 mb-10 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-[#ffd166] mb-5 uppercase text-sm tracking-wider">
              Frequently Asked Questions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0A9DC4] mb-1">How long does an evaluation take?</p>
                <p className="text-sm text-slate-700">Typically 4-6 hours of testing plus report writing; may be spread across multiple sessions.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0A9DC4] mb-1">Can dyslexia be diagnosed in kindergarten?</p>
                <p className="text-sm text-slate-700">Risk factors can be identified early, but formal diagnosis usually occurs after reading instruction begins.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0A9DC4] mb-1">Do adults need a formal diagnosis?</p>
                <p className="text-sm text-slate-700">It is highly helpful for understanding oneself, accessing accommodations at work or school, and receiving appropriate support.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0A9DC4] mb-1">What if my child doesn't qualify for school services?</p>
                <p className="text-sm text-slate-700">Options include private tutoring, advocating for a 504 Plan (which is less intensive than an IEP), or pursuing a private evaluation.</p>
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
            
            {/* Empty Cited Studies Section left as a structural placeholder per standard */}
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed italic" style={{ textIndent: 0 }}>
                <p>No explicit statistical claims or empirical studies directly cited in the text of this section.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
                <li>Catts, H. W., Adlof, S. M., & Weismer, S. E. (2006). "Language deficits in poor comprehenders: A case for the simple view of reading." <em>Journal of Speech, Language, and Hearing Research</em>.</li>
                <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</li>
                <li>Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>.</li>
                <li>Hale, J. B., & Fiorello, C. A. (2004). <em>School neuropsychology: A practitioner's handbook</em>. Guilford Press.</li>
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>Mather, N., & Wendling, B. J. (2011). <em>Essentials of dyslexia assessment and intervention</em>. John Wiley & Sons.</li>
                <li>National Association of School Psychologists. (2015). <em>Identification of students with specific learning disabilities</em>. Author.</li>
                <li>Shaywitz, S. E., & Shaywitz, B. A. (2005). "Dyslexia (specific reading disability)." <em>Biological Psychiatry</em>.</li>
                <li>Snowling, M. J. (2013). "Early identification and interventions for dyslexia: A contemporary view." <em>Journal of Research in Special Educational Needs</em>.</li>
                <li>Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <em>Journal of Child Psychology and Psychiatry</em>.</li>
                <li>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In P. McCardle & V. Chhabra (Eds.), <em>The voice of evidence in reading research</em>. Paul H. Brookes.</li>
                <li>Zirkel, P. A. (2013). "Is it time for elevating the standard for FAPE under IDEA?" <em>Exceptional Children</em>.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}