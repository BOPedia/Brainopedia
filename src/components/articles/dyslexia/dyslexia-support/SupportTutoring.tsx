import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface SupportTutoringProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportTutoring({ setCurrentArticle }: SupportTutoringProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Support & Management
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

      <Tabs defaultValue="tutoring" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="interventions" 
            onClick={() => setCurrentArticle?.('dyslexia-support-interventions')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Interventions
          </TabsTrigger>
          <TabsTrigger 
            value="tutoring" 
            onClick={() => setCurrentArticle?.('dyslexia-support-tutoring')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Tutoring
          </TabsTrigger>
          <TabsTrigger 
            value="multisensory" 
            onClick={() => setCurrentArticle?.('dyslexia-support-multisensory')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Multisensory
          </TabsTrigger>
          <TabsTrigger 
            value="technology" 
            onClick={() => setCurrentArticle?.('dyslexia-support-technology')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Tech & Tools
          </TabsTrigger>
          <TabsTrigger 
            value="executive" 
            onClick={() => setCurrentArticle?.('dyslexia-support-executive')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Executive Function
          </TabsTrigger>
          <TabsTrigger 
            value="social" 
            onClick={() => setCurrentArticle?.('dyslexia-support-social')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Social-Emotional
          </TabsTrigger>
          <TabsTrigger 
            value="home" 
            onClick={() => setCurrentArticle?.('dyslexia-support-home')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Home Support
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tutoring" className="animate-fadeIn">
          
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Tutoring & Specialized Instruction
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-support-tutoringTAB-intro.png"
              alt="Dyslexia tutoring and specialized instruction overview"
              className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm"
            />
            <p className="mb-6 text-slate-700 leading-relaxed">
              Targeted, specialized instruction is often necessary to help individuals with dyslexia build foundational reading and writing skills. Working with a qualified tutor who understands structured literacy can bridge the gap between classroom instruction and the individual's specific learning needs.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-2 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Finding a Qualified Tutor</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-tutoringTAB-credentials.png"
            alt="Tutor credentials and certifications"
            className="w-32 h-auto rounded-md border border-gray-300 shadow-sm float-right ml-6 mb-4"
          />

          <p className="mb-6 text-slate-700 leading-relaxed">
            Not all tutoring is equally effective for dyslexia. It is essential to find an educator with specific credentials and proven experience in structured literacy. Look for professionals who hold a <strong>Certified Academic Language Therapist (CALT)</strong> designation, which is the gold standard credential recognized by the International Dyslexia Association (IDA), or those certified in specific methodologies like Orton-Gillingham or the Wilson Reading System.
          </p>

          <h4 className="text-xl font-bold mt-6 mb-4 text-[#0c264d] clear-both">Resources for Search</h4>
          <div className="space-y-4 mb-10">
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#2abcd4] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/3">AOGPE</div>
              <div className="text-sm text-slate-700 md:w-2/3">The Academy of Orton-Gillingham Practitioners and Educators provides directories of accredited members.</div>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#2abcd4] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/3">IDA Branches</div>
              <div className="text-sm text-slate-700 md:w-2/3">Local branches of the International Dyslexia Association frequently maintain provider referral lists.</div>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#2abcd4] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/3">School Districts</div>
              <div className="text-sm text-slate-700 md:w-2/3">Local special education departments and school psychologists often have recommendations for trusted private practitioners.</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both text-center">Quantity of Tutoring?</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-tutoringTAB-timeline.png"
            alt="Timeline and intensity of dyslexia intervention"
            className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <h4 className="font-bold text-[#0c264d] mb-2">Session Frequency</h4>
              <p className="text-sm text-slate-700">Consistency is key. Research indicates that 2-5 sessions per week are considered most effective for driving significant growth.<sup className="text-green-600 font-bold ml-0.5">1</sup> Sessions typically last 45-90 minutes, depending on the individual's age and stamina.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <h4 className="font-bold text-[#0c264d] mb-2">Long-Term Timeline</h4>
              <p className="text-sm text-slate-700">Rewiring neural pathways for reading takes time. Studies show that significant, lasting gains typically require 2-3 years of consistent, evidence-based intervention.<sup className="text-green-600 font-bold ml-0.5">2</sup></p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 md:col-span-2">
              <h4 className="font-bold text-[#0c264d] mb-2">Grouping Dynamics</h4>
              <p className="text-sm text-slate-700">While one-on-one instruction is often preferred to allow for highly prescriptive, individualized pacing, small groups of 2-3 students can also be highly effective when led by trained instructors using structured programs.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Cost Considerations</h3>
          <div className="space-y-4 mb-10">
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/4">Private Tutoring</div>
              <div className="text-sm text-slate-700 md:w-3/4">Rates typically range from $50–$150+ per hour depending on the tutor's credentials, specialization level, and geographic location.<sup className="text-green-600 font-bold ml-0.5">3</sup></div>
            </div>
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/4">Learning Centers</div>
              <div className="text-sm text-slate-700 md:w-3/4">Programs like Lindamood-Bell, Huntington, or Sylvan offer structured, intensive programs with their own distinct fee structures and testing requirements.</div>
            </div>
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/4">School-Based Services</div>
              <div className="text-sm text-slate-700 md:w-3/4">Public education provides free specialized instruction if a student formally qualifies for an Individualized Education Program (IEP) under IDEA.</div>
            </div>
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/4">Subsidized Options</div>
              <div className="text-sm text-slate-700 md:w-3/4">Some independent tutors offer sliding scale rates, and local nonprofit community programs or university clinics may provide heavily subsidized support.</div>
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
                <p>1. Torgesen, J. K., Wagner, R. K., Rashotte, C. A., et al. (2010). "Computer-assisted instruction to prevent early reading difficulties in students at risk for dyslexia: Outcomes from two instructional approaches." <em>Annals of Dyslexia</em>. https://doi.org/10.1007/s11881-009-0032-y</p>
                <p>2. Lovett, M. W., Lacerenza, L., Borden, S. L., et al. (2000). "Components of effective remediation for developmental reading disabilities: Combining phonological and strategy-based instruction to improve outcomes." <em>Journal of Educational Psychology</em>. https://doi.org/10.1037/0022-0663.92.2.263</p>
                <p>3. Hock, M. F., Pulvers, K. A., Deshler, D. D., & Schumaker, J. B. (2001). "The effects of an after-school tutoring program on the academic performance of at-risk students and students with LD." <em>Remedial and Special Education</em>. https://doi.org/10.1177/074193250102200305</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>. https://dyslexiaida.org</li>
                <li>Joshi, R. M., Binks, E., Graham, L., et al. (2009). "Do textbooks used in university reading education courses conform to the instructional recommendations of the National Reading Panel?" <em>Journal of Learning Disabilities</em>. https://doi.org/10.1177/0022219409338739</li>
                <li>Ritter, G. W., Barnett, J. H., Denny, G. S., & Albin, G. R. (2009). "The effectiveness of volunteer tutoring programs for elementary and middle school students: A meta-analysis." <em>Review of Educational Research</em>. https://doi.org/10.3102/0034654308325690</li>
                <li>Spear-Swerling, L. (2009). "A literacy tutoring experience for prospective special educators and struggling second graders." <em>Journal of Learning Disabilities</em>. https://doi.org/10.1177/0022219409338738</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}