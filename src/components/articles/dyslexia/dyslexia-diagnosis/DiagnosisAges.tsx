import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';

interface DiagnosisAgesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DiagnosisAges({ setCurrentArticle }: DiagnosisAgesProps) {
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
      
      <Tabs defaultValue="ages" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="overview" 
            onClick={() => setCurrentArticle?.('dyslexia-diagnosis-overview')}
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
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Ages & Next Steps
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ages" className="animate-fadeIn">
          <h3 className="text-2xl font-bold mt-2 mb-4 text-[#0c264d] border-b border-gray-200 pb-2">Assessment Across Age Groups</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Early Elementary (K-2nd Grade)</h4>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li>Focus on phonological awareness and early decoding skills.</li>
                <li>Letter-sound knowledge assessment.</li>
                <li>Early screening measures (DIBELS, AIMSweb).<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Later Elementary (3rd-5th Grade)</h4>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li>Emphasis on reading fluency and comprehension.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
                <li>Spelling and written expression assessment.</li>
                <li>Longer reading passages.</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Middle and High School</h4>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li>Academic achievement across content areas.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
                <li>Reading rate and efficiency.</li>
                <li>Complex text comprehension.</li>
                <li>Note-taking and study skills assessment.</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Adults</h4>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li>Historical information about early reading difficulties.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
                <li>Current reading and writing demands.</li>
                <li>Compensatory strategies developed.</li>
                <li>Impact on employment and daily functioning.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2">School-Based vs. Private Evaluation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-xl font-bold mb-3 text-[#0A9DC4]">School Evaluations</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li><strong>Free under IDEA:</strong> Parents can request evaluation at no cost.</li>
                <li><strong>Focus on eligibility:</strong> Determines if student qualifies for special education services.</li>
                <li><strong>Educational impact:</strong> Emphasizes how difficulties affect school performance.</li>
                <li><strong>IEP or 504 Plan:</strong> Results in educational plan if eligible.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3 text-[#0A9DC4]">Private Evaluations</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li><strong>Comprehensive assessment:</strong> Often more detailed and extensive.</li>
                <li><strong>Broader recommendations:</strong> Includes tutoring, therapy, accommodations beyond school.</li>
                <li><strong>Second opinion:</strong> Can be sought if parents disagree with school evaluation.</li>
                <li><strong>Cost:</strong> Typically $1,500-$4,000 depending on comprehensiveness.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2">After Diagnosis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-[#2abcd4] rounded-lg p-5">
              <h4 className="text-[#0c264d] font-bold mb-3">Understanding the Report</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li>Standard scores and percentile ranks explained.</li>
                <li>Pattern of strengths and weaknesses identified.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
                <li>Specific reading skills assessed.</li>
                <li>Diagnosis and severity level.</li>
              </ul>
            </div>

            <div className="border border-[#2abcd4] rounded-lg p-5">
              <h4 className="text-[#0c264d] font-bold mb-3">Recommendations</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li><strong>Intervention:</strong> Evidence-based reading programs.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
                <li><strong>Accommodations:</strong> Extended time, audiobooks, assistive technology.<sup className="text-green-600 font-bold ml-0.5">8</sup></li>
                <li><strong>Educational planning:</strong> IEP or 504 Plan development.</li>
                <li><strong>Progress monitoring:</strong> Regular assessment of response to intervention.<sup className="text-green-600 font-bold ml-0.5">9</sup></li>
              </ul>
            </div>

            <div className="border border-[#2abcd4] rounded-lg p-5">
              <h4 className="text-[#0c264d] font-bold mb-3">Next Steps</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li>Share results with school to access services.<sup className="text-green-600 font-bold ml-0.5">10</sup></li>
                <li>Find qualified reading specialist or tutor.</li>
                <li>Educate family members about dyslexia.</li>
                <li>Connect with support organizations.</li>
                <li>Address emotional impact and build self-esteem.</li>
              </ul>
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
                <p>1. Compton, D. L., Fuchs, D., Fuchs, L. S., & Bryant, J. D. (2006). "Selecting at-risk readers in first grade for early intervention." <em>Journal of Educational Psychology</em>, 98(2), 394-409.</p>
                <p>2. Wolf, M., & Katzir-Cohen, T. (2001). "Reading fluency and its intervention." <em>Scientific Studies of Reading</em>, 5(3), 211-239.</p>
                <p>3. Swanson, H. L. (1999). "Reading comprehension and working memory in learning-disabled readers: Is the phonological loop more important than the executive system?" <em>Journal of Experimental Child Psychology</em>, 72(1), 1-31.</p>
                <p>4. Bruck, M. (1990). "Word-recognition skills of adults with childhood diagnoses of dyslexia." <em>Developmental Psychology</em>, 26(3), 439-454.</p>
                <p>5. McNulty, M. A. (2003). "Dyslexia and the life course." <em>Journal of Learning Disabilities</em>, 36(4), 363-381.</p>
                <p>6. Berninger, V. W., & Abbott, R. D. (2010). "Listening comprehension, oral expression, reading comprehension, and written expression: Related yet unique language systems in grades 1, 3, 5, and 7." <em>Journal of Educational Psychology</em>, 102(3), 635-651.</p>
                <p>7. Torgesen, J. K., Alexander, A. W., Wagner, R. K., et al. (2001). "Intensive remedial instruction for children with severe reading disabilities." <em>Journal of Learning Disabilities</em>, 34(1), 33-58.</p>
                <p>8. Edyburn, D. L. (2013). "Critical issues in advancing the special education technology evidence base." <em>Exceptional Children</em>, 80(1), 7-24.</p>
                <p>9. Fuchs, L. S., & Fuchs, D. (2006). "Introduction to response to intervention: What, why, and how valid is it?" <em>Reading Research Quarterly</em>, 41(1), 93-99.</p>
                <p>10. Rock, M. L. (2000). "Parents as equal partners: Balancing the scales in IEP development." <em>Teaching Exceptional Children</em>, 32(6), 30-37.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Good, R. H., & Kaminski, R. A. (Eds.). (2002). <em>Dynamic Indicators of Basic Early Literacy Skills</em> (6th ed.). Institute for the Development of Educational Achievement.</li>
                <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</li>
                <li>Flanagan, D. P., Alfonso, V. C., & Mascolo, J. T. (2011). <em>Essentials of specific learning disability identification</em>. John Wiley & Sons.</li>
                <li>Schultz, E. K., & Stephens, T. L. (2015). "Core concepts for implementing response to intervention." In S. Jimerson, M. Burns, & A. VanDerHeyden (Eds.), <em>Handbook of response to intervention</em> (pp. 41-58). Springer.</li>
                <li>International Dyslexia Association. (2021). <em>Resources for families and individuals</em>. Retrieved from https://dyslexiaida.org</li>
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