import React, { useState } from 'react';

interface DyslexiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaDiagnosis({ setCurrentArticle }: DyslexiaDiagnosisProps) {
  const [activeTab, setActiveTab] = useState('criteria');

  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      {/* Header and Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        {/* Main Title - UNBOLDED per your instructions */}
        <h2 className="text-3xl font-spartan text-[#0c264d]">Dyslexia: Diagnosis</h2>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2"
        >
          <span>←</span> All About Dyslexia
        </button>
      </div>
      
      <div className="prose max-w-none">
        {/* Intro Paragraph */}
        <p className="mb-6 text-slate-700 leading-relaxed">
          Diagnosing dyslexia requires comprehensive evaluation by qualified professionals using multiple assessment methods.<sup className="text-green-600 font-bold ml-0.5">1</sup> Early identification enables timely intervention, which significantly improves reading outcomes.<sup className="text-green-600 font-bold ml-0.5">2</sup> There is no single test for dyslexia—diagnosis involves gathering information from various sources to understand an individual's reading profile.<sup className="text-green-600 font-bold ml-0.5">3</sup>
        </p>

        {/* INTERACTIVE TABS */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <button 
            onClick={() => setActiveTab('criteria')}
            className={`py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto ${
              activeTab === 'criteria' ? 'bg-[#0A9DC4] text-white shadow-md' : 'bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80'
            }`}
          >
            Process & Criteria
          </button>
          
          <button 
            onClick={() => setActiveTab('components')}
            className={`py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto ${
              activeTab === 'components' ? 'bg-[#0A9DC4] text-white shadow-md' : 'bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80'
            }`}
          >
            Comprehensive Evaluation
          </button>
          
          <button 
            onClick={() => setActiveTab('ages')}
            className={`py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto ${
              activeTab === 'ages' ? 'bg-[#0A9DC4] text-white shadow-md' : 'bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80'
            }`}
          >
            Ages & Next Steps
          </button>
        </div>

        {/* ========================================== */}
        {/* TAB 1: PROCESS & CRITERIA                  */}
        {/* ========================================== */}
        {activeTab === 'criteria' && (
          <div className="animate-fadeIn">
            
            <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Who Can Diagnose Dyslexia?</h3>
            <p className="mb-3 text-slate-700">Several professionals are qualified to evaluate for dyslexia:<sup className="text-green-600 font-bold ml-0.5">4</sup></p>
            <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
              <li><strong>Educational psychologists:</strong> Specialize in learning and academic assessment.</li>
              <li><strong>School psychologists:</strong> Conduct evaluations within school settings.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
              <li><strong>Clinical psychologists:</strong> Licensed psychologists with expertise in learning disorders.</li>
              <li><strong>Neuropsychologists:</strong> Assess brain-behavior relationships.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
              <li><strong>Learning specialists:</strong> Professionals trained in dyslexia assessment.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Diagnostic Criteria</h3>
            <p className="mb-3 text-slate-700">DSM-5 diagnostic criteria for Specific Learning Disorder with impairment in reading:<sup className="text-green-600 font-bold ml-0.5">19</sup></p>
            <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
              <li>Difficulties learning and using academic skills for at least 6 months despite interventions.</li>
              <li>Academic skills substantially below expected for age.</li>
              <li>Difficulties begin during school years.</li>
              <li>Not better explained by other conditions.<sup className="text-green-600 font-bold ml-0.5">20</sup></li>
            </ul>

            <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Pattern Recognition</h3>
            <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
              <li>Discrepancy between listening comprehension and reading comprehension.<sup className="text-green-600 font-bold ml-0.5">21</sup></li>
              <li>Phonological processing deficits.</li>
              <li>Slow, effortful reading despite adequate instruction.<sup className="text-green-600 font-bold ml-0.5">22</sup></li>
              <li>Unexpected difficulty relative to other abilities.</li>
            </ul>

            <div className="bg-[#f0f9ff] border-l-4 border-[#0A9DC4] p-6 rounded-r-lg mb-8 shadow-sm">
              <h3 className="text-xl font-bold mt-2 mb-4 text-[#0c264d]">Frequently Asked Questions</h3>
              
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold text-[#0c264d]">Q: How long does an evaluation take?</p>
                  <p className="text-sm mt-1">A: Typically 4-6 hours of testing plus report writing; may be spread across multiple sessions.<sup className="text-green-600 font-bold ml-0.5">39</sup></p>
                </div>
                <div>
                  <p className="font-semibold text-[#0c264d]">Q: Can dyslexia be diagnosed in kindergarten?</p>
                  <p className="text-sm mt-1">A: Risk factors can be identified early, but formal diagnosis usually occurs after reading instruction begins.<sup className="text-green-600 font-bold ml-0.5">40</sup></p>
                </div>
                <div>
                  <p className="font-semibold text-[#0c264d]">Q: Do adults need a formal diagnosis?</p>
                  <p className="text-sm mt-1">A: Helpful for understanding oneself, accessing accommodations at work/school, and receiving appropriate support.<sup className="text-green-600 font-bold ml-0.5">41</sup></p>
                </div>
                <div>
                  <p className="font-semibold text-[#0c264d]">Q: What if my child doesn't qualify for school services?</p>
                  <p className="text-sm mt-1">A: Private tutoring, 504 Plan (less intensive than IEP), or pursuing a private evaluation.<sup className="text-green-600 font-bold ml-0.5">42</sup></p>
                </div>
              </div>
            </div>

            {/* TAB 1 REFERENCES */}
            <div className="mt-12 pt-6 border-t-2 border-gray-100">
              <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
                <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
                <div className="mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">Cited Studies & Statistics</h4>
                  <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                    <li value={1}>Snowling, M. J. (2013). "Early identification and interventions for dyslexia: A contemporary view." <em>Journal of Research in Special Educational Needs</em>, 13(1), 7-14.</li>
                    <li value={2}>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In P. McCardle & V. Chhabra (Eds.), <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</li>
                    <li value={3}>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</li>
                    <li value={4}>Hale, J. B., & Fiorello, C. A. (2004). <em>School neuropsychology: A practitioner's handbook</em>. Guilford Press.</li>
                    <li value={5}>National Association of School Psychologists. (2015). <em>Identification of students with specific learning disabilities</em>. Author.</li>
                    <li value={6}>Mather, N., & Wendling, B. J. (2011). <em>Essentials of dyslexia assessment and intervention</em>. John Wiley & Sons.</li>
                    <li value={19}>American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). American Psychiatric Publishing.</li>
                    <li value={20}>Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <em>Journal of Child Psychology and Psychiatry</em>, 53(5), 593-607.</li>
                    <li value={21}>Catts, H. W., Adlof, S. M., & Weismer, S. E. (2006). "Language deficits in poor comprehenders: A case for the simple view of reading." <em>Journal of Speech, Language, and Hearing Research</em>, 49(2), 278-293.</li>
                    <li value={22}>Shaywitz, S. E., & Shaywitz, B. A. (2005). "Dyslexia (specific reading disability)." <em>Biological Psychiatry</em>, 57(11), 1301-1309.</li>
                    <li value={39}>Mather, N., & Wendling, B. J. (2011). <em>Essentials of dyslexia assessment and intervention</em>. John Wiley & Sons.</li>
                    <li value={40}>Snowling, M. J. (2013). "Early identification and interventions for dyslexia: A contemporary view." <em>Journal of Research in Special Educational Needs</em>, 13(1), 7-14.</li>
                    <li value={41}>Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</li>
                    <li value={42}>Zirkel, P. A. (2013). "Is it time for elevating the standard for FAPE under IDEA?" <em>Exceptional Children</em>, 79(4), 497-508.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* TAB 2: COMPONENTS OF EVALUATION            */}
        {/* ========================================== */}
        {activeTab === 'components' && (
          <div className="animate-fadeIn">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-4">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Developmental & Educational History</h3>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li>Early language development milestones.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
                  <li>Family history of reading or learning difficulties.</li>
                  <li>Previous educational experiences and interventions.<sup className="text-green-600 font-bold ml-0.5">8</sup></li>
                  <li>Current reading challenges and their impact.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Cognitive Assessment</h3>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li><strong>Intelligence testing:</strong> WISC-V, WAIS-IV, or Stanford-Binet to assess overall cognitive ability.<sup className="text-green-600 font-bold ml-0.5">9</sup></li>
                  <li><strong>Reasoning abilities:</strong> Verbal and nonverbal reasoning.</li>
                  <li><strong>Memory assessment:</strong> Working memory and long-term memory.<sup className="text-green-600 font-bold ml-0.5">10</sup></li>
                  <li><strong>Processing speed:</strong> Rate of cognitive processing.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Reading & Academic Achievement</h3>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li><strong>Word reading:</strong> Real word reading accuracy (WIAT-III, KTEA-3).<sup className="text-green-600 font-bold ml-0.5">11</sup></li>
                  <li><strong>Pseudoword decoding:</strong> Nonsense word reading to assess phonetic decoding.<sup className="text-green-600 font-bold ml-0.5">12</sup></li>
                  <li><strong>Reading fluency:</strong> Speed and accuracy of reading connected text.<sup className="text-green-600 font-bold ml-0.5">13</sup></li>
                  <li><strong>Reading comprehension:</strong> Understanding written passages.</li>
                  <li><strong>Spelling:</strong> Written spelling of words.<sup className="text-green-600 font-bold ml-0.5">14</sup></li>
                  <li><strong>Written expression:</strong> Quality and fluency of writing.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Phonological Processing</h3>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li><strong>Phonological awareness:</strong> CTOPP-2, PAT-2 to assess sound manipulation skills.<sup className="text-green-600 font-bold ml-0.5">15</sup></li>
                  <li><strong>Phonological memory:</strong> Ability to hold sound information in memory.</li>
                  <li><strong>Rapid automatized naming (RAN):</strong> Speed of retrieving familiar verbal information.<sup className="text-green-600 font-bold ml-0.5">16</sup></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Oral Language</h3>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li><strong>Vocabulary:</strong> Receptive and expressive vocabulary.<sup className="text-green-600 font-bold ml-0.5">17</sup></li>
                  <li><strong>Listening comprehension:</strong> Understanding spoken language.</li>
                  <li><strong>Morphological awareness:</strong> Understanding word structure.<sup className="text-green-600 font-bold ml-0.5">18</sup></li>
                </ul>
              </div>
            </div>

            {/* TAB 2 REFERENCES */}
            <div className="mt-12 pt-6 border-t-2 border-gray-100">
              <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
                <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
                <div className="mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">Cited Studies & Statistics</h4>
                  <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                    <li value={7}>Scarborough, H. S. (1998). "Early identification of children at risk for reading disabilities." In B. K. Shapiro, P. J. Accardo, & A. J. Capute (Eds.), <em>Specific reading disability: A view of the spectrum</em> (pp. 75-119). York Press.</li>
                    <li value={8}>Shaywitz, S. E., Morris, R., & Shaywitz, B. A. (2008). "The education of dyslexic children from childhood to young adulthood." <em>Annual Review of Psychology</em>, 59, 451-475.</li>
                    <li value={9}>Wechsler, D. (2014). <em>Wechsler Intelligence Scale for Children–Fifth Edition</em>. Pearson.</li>
                    <li value={10}>Swanson, H. L., & Berninger, V. (1995). "The role of working memory in skilled and less skilled readers' comprehension." <em>Intelligence</em>, 21(1), 83-108.</li>
                    <li value={11}>Pearson Education. (2020). <em>Wechsler Individual Achievement Test–Fourth Edition</em>. Author.</li>
                    <li value={12}>Rack, J. P., Snowling, M. J., & Olson, R. K. (1992). "The nonword reading deficit in developmental dyslexia: A review." <em>Reading Research Quarterly</em>, 27(1), 29-53.</li>
                    <li value={13}>Fuchs, L. S., Fuchs, D., Hosp, M. K., & Jenkins, J. R. (2001). "Oral reading fluency as an indicator of reading competence: A theoretical, empirical, and historical analysis." <em>Scientific Studies of Reading</em>, 5(3), 239-256.</li>
                    <li value={14}>Ehri, L. C. (2000). "Learning to read and learning to spell: Two sides of a coin." <em>Topics in Language Disorders</em>, 20(3), 19-36.</li>
                    <li value={15}>Wagner, R. K., Torgesen, J. K., Rashotte, C. A., & Pearson, N. A. (2013). <em>Comprehensive Test of Phonological Processing–Second Edition</em>. Pro-Ed.</li>
                    <li value={16}>Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>, 63, 427-452.</li>
                    <li value={17}>Perfetti, C. (2007). "Reading ability: Lexical quality to comprehension." <em>Scientific Studies of Reading</em>, 11(4), 357-383.</li>
                    <li value={18}>Carlisle, J. F. (2000). "Awareness of the structure and meaning of morphologically complex words: Impact on reading." <em>Reading and Writing</em>, 12(3), 169-190.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* TAB 3: AGES & NEXT STEPS                   */}
        {/* ========================================== */}
        {activeTab === 'ages' && (
          <div className="animate-fadeIn">
            
            <h3 className="text-2xl font-bold mt-6 mb-4 text-[#0c264d] border-b border-gray-200 pb-2">Assessment Across Age Groups</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Early Elementary (K-2nd Grade)</h4>
                <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                  <li>Focus on phonological awareness and early decoding skills.<sup className="text-green-600 font-bold ml-0.5">23</sup></li>
                  <li>Letter-sound knowledge assessment.</li>
                  <li>Early screening measures (DIBELS, AIMSweb).<sup className="text-green-600 font-bold ml-0.5">24</sup></li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Later Elementary (3rd-5th Grade)</h4>
                <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                  <li>Emphasis on reading fluency and comprehension.<sup className="text-green-600 font-bold ml-0.5">25</sup></li>
                  <li>Spelling and written expression assessment.</li>
                  <li>Longer reading passages.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Middle and High School</h4>
                <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                  <li>Academic achievement across content areas.<sup className="text-green-600 font-bold ml-0.5">26</sup></li>
                  <li>Reading rate and efficiency.</li>
                  <li>Complex text comprehension.</li>
                  <li>Note-taking and study skills assessment.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Adults</h4>
                <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                  <li>Historical information about early reading difficulties.<sup className="text-green-600 font-bold ml-0.5">27</sup></li>
                  <li>Current reading and writing demands.</li>
                  <li>Compensatory strategies developed.</li>
                  <li>Impact on employment and daily functioning.<sup className="text-green-600 font-bold ml-0.5">28</sup></li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2">School-Based vs. Private Evaluation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-xl font-bold mb-3 text-[#0A9DC4]">School Evaluations</h4>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                  <li><strong>Free under IDEA:</strong> Parents can request evaluation at no cost.<sup className="text-green-600 font-bold ml-0.5">29</sup></li>
                  <li><strong>Focus on eligibility:</strong> Determines if student qualifies for special education services.</li>
                  <li><strong>Educational impact:</strong> Emphasizes how difficulties affect school performance.<sup className="text-green-600 font-bold ml-0.5">30</sup></li>
                  <li><strong>IEP or 504 Plan:</strong> Results in educational plan if eligible.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-[#0A9DC4]">Private Evaluations</h4>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                  <li><strong>Comprehensive assessment:</strong> Often more detailed and extensive.<sup className="text-green-600 font-bold ml-0.5">31</sup></li>
                  <li><strong>Broader recommendations:</strong> Includes tutoring, therapy, accommodations beyond school.</li>
                  <li><strong>Second opinion:</strong> Can be sought if parents disagree with school evaluation.</li>
                  <li><strong>Cost:</strong> Typically $1,500-$4,000 depending on comprehensiveness.<sup className="text-green-600 font-bold ml-0.5">32</sup></li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2">After Diagnosis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border border-[#2abcd4] rounded-lg p-5">
                <h4 className="text-[#0c264d] font-bold mb-3">Understanding the Report</h4>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                  <li>Standard scores and percentile ranks explained.</li>
                  <li>Pattern of strengths and weaknesses identified.<sup className="text-green-600 font-bold ml-0.5">33</sup></li>
                  <li>Specific reading skills assessed.</li>
                  <li>Diagnosis and severity level.</li>
                </ul>
              </div>

              <div className="border border-[#2abcd4] rounded-lg p-5">
                <h4 className="text-[#0c264d] font-bold mb-3">Recommendations</h4>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                  <li><strong>Intervention:</strong> Evidence-based reading programs.<sup className="text-green-600 font-bold ml-0.5">34</sup></li>
                  <li><strong>Accommodations:</strong> Extended time, audiobooks, assistive technology.<sup className="text-green-600 font-bold ml-0.5">35</sup></li>
                  <li><strong>Educational planning:</strong> IEP or 504 Plan development.</li>
                  <li><strong>Progress monitoring:</strong> Regular assessment of response to intervention.<sup className="text-green-600 font-bold ml-0.5">36</sup></li>
                </ul>
              </div>

              <div className="border border-[#2abcd4] rounded-lg p-5">
                <h4 className="text-[#0c264d] font-bold mb-3">Next Steps</h4>
                <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                  <li>Share results with school to access services.<sup className="text-green-600 font-bold ml-0.5">37</sup></li>
                  <li>Find qualified reading specialist or tutor.</li>
                  <li>Educate family members about dyslexia.</li>
                  <li>Connect with support organizations.<sup className="text-green-600 font-bold ml-0.5">38</sup></li>
                  <li>Address emotional impact and build self-esteem.</li>
                </ul>
              </div>
            </div>

            {/* TAB 3 REFERENCES */}
            <div className="mt-12 pt-6 border-t-2 border-gray-100">
              <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
                <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">Cited Studies & Statistics</h4>
                  <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                    <li value={23}>Good, R. H., & Kaminski, R. A. (Eds.). (2002). <em>Dynamic Indicators of Basic Early Literacy Skills</em> (6th ed.). Institute for the Development of Educational Achievement.</li>
                    <li value={24}>Compton, D. L., Fuchs, D., Fuchs, L. S., & Bryant, J. D. (2006). "Selecting at-risk readers in first grade for early intervention." <em>Journal of Educational Psychology</em>, 98(2), 394-409.</li>
                    <li value={25}>Wolf, M., & Katzir-Cohen, T. (2001). "Reading fluency and its intervention." <em>Scientific Studies of Reading</em>, 5(3), 211-239.</li>
                    <li value={26}>Swanson, H. L. (1999). "Reading comprehension and working memory in learning-disabled readers: Is the phonological loop more important than the executive system?" <em>Journal of Experimental Child Psychology</em>, 72(1), 1-31.</li>
                    <li value={27}>Bruck, M. (1990). "Word-recognition skills of adults with childhood diagnoses of dyslexia." <em>Developmental Psychology</em>, 26(3), 439-454.</li>
                    <li value={28}>McNulty, M. A. (2003). "Dyslexia and the life course." <em>Journal of Learning Disabilities</em>, 36(4), 363-381.</li>
                    <li value={29}>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</li>
                    <li value={30}>Flanagan, D. P., Alfonso, V. C., & Mascolo, J. T. (2011). <em>Essentials of specific learning disability identification</em>. John Wiley & Sons.</li>
                    <li value={31}>Schultz, E. K., & Stephens, T. L. (2015). "Core concepts for implementing response to intervention." In S. Jimerson, M. Burns, & A. VanDerHeyden (Eds.), <em>Handbook of response to intervention</em> (pp. 41-58). Springer.</li>
                    <li value={32}>Simos, P. G., Fletcher, J. M., Bergman, E., et al. (2002). "Dyslexia-specific brain activation profile becomes normal following successful remedial training." <em>Neurology</em>, 58(8), 1203-1213.</li>
                    <li value={33}>Berninger, V. W., & Abbott, R. D. (2010). "Listening comprehension, oral expression, reading comprehension, and written expression: Related yet unique language systems in grades 1, 3, 5, and 7." <em>Journal of Educational Psychology</em>, 102(3), 635-651.</li>
                    <li value={34}>Torgesen, J. K., Alexander, A. W., Wagner, R. K., et al. (2001). "Intensive remedial instruction for children with severe reading disabilities." <em>Journal of Learning Disabilities</em>, 34(1), 33-58.</li>
                    <li value={35}>Edyburn, D. L. (2013). "Critical issues in advancing the special education technology evidence base." <em>Exceptional Children</em>, 80(1), 7-24.</li>
                    <li value={36}>Fuchs, L. S., & Fuchs, D. (2006). "Introduction to response to intervention: What, why, and how valid is it?" <em>Reading Research Quarterly</em>, 41(1), 93-99.</li>
                    <li value={37}>Rock, M. L. (2000). "Parents as equal partners: Balancing the scales in IEP development." <em>Teaching Exceptional Children</em>, 32(6), 30-37.</li>
                    <li value={38}>International Dyslexia Association. (2021). <em>Resources for families and individuals</em>. Retrieved from https://dyslexiaida.org</li>
                  </ol>
                </div>

                {/* BACKGROUND SOURCES: CYAN */}
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                    Background Sources
                  </h4>
                  <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
                    <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                    <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}