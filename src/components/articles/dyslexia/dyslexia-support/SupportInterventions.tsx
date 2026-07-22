import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';

interface SupportInterventionsProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportInterventions({ setCurrentArticle }: SupportInterventionsProps) {
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

      <Tabs defaultValue="interventions" className="w-full">
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
        <TabsContent value="interventions" className="animate-fadeIn">
          <p className="mb-6 text-slate-700 leading-relaxed">
            Effective support for dyslexia requires evidence-based interventions delivered by trained professionals.<sup className="text-green-600 font-bold ml-0.5">1</sup> Research consistently shows that systematic, explicit instruction in phonics and reading skills can significantly improve outcomes for individuals with dyslexia.<sup className="text-green-600 font-bold ml-0.5">2</sup> Early intervention is most effective, but support at any age can lead to meaningful improvements.
          </p>

          <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Structured Literacy Approach</h3>
          <p className="mb-4 text-slate-700">Structured literacy is an explicit, systematic approach to teaching reading that includes:</p>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li><strong>Phonology:</strong> Sound structure of language, including phonemic awareness.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li><strong>Sound-symbol association:</strong> Relationship between letters and sounds (phonics).</li>
            <li><strong>Syllable instruction:</strong> Six syllable types in English.</li>
            <li><strong>Morphology:</strong> Meaningful word parts (prefixes, suffixes, roots).<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
            <li><strong>Syntax:</strong> Sentence structure and grammar.</li>
            <li><strong>Semantics:</strong> Meaning in language.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Orton-Gillingham-Based Programs</h3>
          <p className="mb-3 text-slate-700">The Orton-Gillingham approach is a well-established method for teaching reading to individuals with dyslexia:<sup className="text-green-600 font-bold ml-0.5">5</sup></p>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li><strong>Multisensory:</strong> Engages visual, auditory, and kinesthetic-tactile pathways.</li>
            <li><strong>Systematic and sequential:</strong> Concepts taught in logical order.</li>
            <li><strong>Diagnostic and prescriptive:</strong> Instruction individualized to student needs.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
            <li><em>Examples: Wilson Reading System, Barton Reading & Spelling System.</em></li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Other Evidence-Based Programs</h3>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li><strong>Lindamood-Bell programs:</strong> LiPS (phonemic awareness) and Seeing Stars (symbol imagery).<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
            <li><strong>Reading Recovery:</strong> Early intervention for first graders.<sup className="text-green-600 font-bold ml-0.5">8</sup></li>
            <li><strong>RAVE-O:</strong> Retrieval, Automaticity, Vocabulary, Engagement, Orthography.<sup className="text-green-600 font-bold ml-0.5">9</sup></li>
            <li><strong>Leveled Literacy Intervention (LLI):</strong> Supplemental reading intervention.<sup className="text-green-600 font-bold ml-0.5">10</sup></li>
            <li><strong>Corrective Reading:</strong> Direct instruction program.<sup className="text-green-600 font-bold ml-0.5">11</sup></li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2">Building Reading Fluency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Repeated Reading</h4>
              <p className="text-sm text-slate-700">Student reads same passage multiple times until achieving target fluency.<sup className="text-green-600 font-bold ml-0.5">12</sup> Improves automaticity, rate, and expression.<sup className="text-green-600 font-bold ml-0.5">13</sup></p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Partner Reading</h4>
              <p className="text-sm text-slate-700">Reading with a more fluent reader who models good reading.<sup className="text-green-600 font-bold ml-0.5">14</sup> Includes choral and echo reading.<sup className="text-green-600 font-bold ml-0.5">15</sup></p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 md:col-span-2">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Wide Reading</h4>
              <p className="text-sm text-slate-700">Reading large amounts of text at independent level to build stamina and confidence.<sup className="text-green-600 font-bold ml-0.5">16</sup> Emphasizes high-interest, decodable books.<sup className="text-green-600 font-bold ml-0.5">17</sup></p>
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
                <p>1. Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties." <em>British Journal of Educational Psychology</em>, 81(1), 1-23.</p>
                <p>2. National Reading Panel. (2000). <em>Teaching children to read</em>. National Institute of Child Health and Human Development.</p>
                <p>3. Ehri, L. C., et al. (2001). "Phonemic awareness instruction helps children learn to read." <em>Reading Research Quarterly</em>, 36(3), 250-287.</p>
                <p>4. Carlisle, J. F. (2010). "Effects of instruction in morphological awareness on literacy achievement." <em>Reading Research Quarterly</em>, 45(4), 464-487.</p>
                <p>5. Ritchey, K. D., & Goeke, J. L. (2006). "Orton-Gillingham—based reading instruction: A review of the literature." <em>The Journal of Special Education</em>, 40(3), 171-183.</p>
                <p>6. Oakland, T., et al. (1998). "An evaluation of the dyslexia training program." <em>Journal of Learning Disabilities</em>, 31(2), 140-147.</p>
                <p>7. Torgesen, J. K., et al. (2001). "Intensive remedial instruction for children with severe reading disabilities." <em>Journal of Learning Disabilities</em>, 34(1), 33-58.</p>
                <p>8. D'Agostino, J. V., & Murphy, J. A. (2004). "A meta-analysis of Reading Recovery in United States schools." <em>Educational Evaluation and Policy Analysis</em>, 26(1), 23-38.</p>
                <p>9. Wolf, M., Miller, L., & Donnelly, K. (2000). "Retrieval, automaticity, vocabulary elaboration, orthography (RAVE-O)." <em>Journal of Learning Disabilities</em>, 33(4), 375-386.</p>
                <p>10. Ransford-Kaldon, C. R., et al. (2011). "A randomized controlled trial of a response to intervention (RTI) tier 2 literacy program: Leveled Literacy Intervention (LLI)." <em>RTI International</em>.</p>
                <p>11. Malmgren, K. W., & Leone, P. E. (2000). "Effects of a short-term auxiliary reading program on the reading skills of incarcerated youth." <em>Education and Treatment of Children</em>, 23(3), 239-247.</p>
                <p>12. Therrien, W. J. (2004). "Fluency and comprehension gains as a result of repeated reading." <em>Remedial and Special Education</em>, 25(4), 252-261.</p>
                <p>13. Samuels, S. J. (1979). "The method of repeated readings." <em>The Reading Teacher</em>, 32(4), 403-408.</p>
                <p>14. Topping, K. J. (2005). "Trends in peer learning." <em>Educational Psychology</em>, 25(6), 631-645.</p>
                <p>15. Rasinski, T. V., & Hoffman, J. V. (2003). "Oral reading in the school literacy curriculum." <em>Reading Research Quarterly</em>, 38(4), 510-522.</p>
                <p>16. Cunningham, A. E., & Stanovich, K. E. (1998). "What reading does for the mind." <em>American Educator</em>, 22, 8-17.</p>
                <p>17. Morgan, P. L., & Sideridis, G. D. (2006). "Contrasting the effectiveness of fluency interventions." <em>Learning Disabilities Research & Practice</em>, 21(4), 191-210.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</li>
                <li>International Dyslexia Association. (2020). <em>Structured literacy: An introductory guide</em>.</li>
                <li>Henry, M. K. (2010). <em>Unlocking literacy: Effective decoding and spelling instruction</em> (2nd ed.). Paul H. Brookes Publishing.</li>
                <li>Scarborough, H. S. (2001). "Connecting early language and literacy to later reading (dis)abilities." In <em>Handbook of early literacy research</em> (pp. 97-110). Guilford Press.</li>
                <li>Birsh, J. R. (Ed.). (2018). <em>Multisensory teaching of basic language skills</em> (4th ed.). Paul H. Brookes Publishing.</li>
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