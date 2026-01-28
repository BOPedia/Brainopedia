import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface DyslexiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaDiagnosis({ setCurrentArticle }: DyslexiaDiagnosisProps) {
  const [activeTab, setActiveTab] = useState('screening');

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
          Dyslexia: Diagnosis
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Dyslexia
      </button>

      {/* Introduction */}
      <div className="mb-8">
        <p className="mb-4">
          Diagnosing dyslexia requires comprehensive evaluation by qualified professionals using multiple assessment 
          methods.<sup>[1]</sup> Early identification enables timely intervention, which significantly improves reading 
          outcomes.<sup>[2]</sup> There is no single test for dyslexia—diagnosis involves gathering information from 
          various sources to understand an individual's reading profile.<sup>[3]</sup>
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => setActiveTab('screening')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'screening'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Screening
        </button>
        <button
          onClick={() => setActiveTab('evaluation')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'evaluation'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Comprehensive Evaluation
        </button>
        <button
          onClick={() => setActiveTab('professionals')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'professionals'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Who Can Diagnose
        </button>
      </div>

      {/* TAB 1: Screening & Identification */}
      {activeTab === 'screening' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Who Can Diagnose Dyslexia?</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1643706755594-d0e8d8d42a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYXNzZXNzbWVudCUyMGNoaWxkJTIwdGVzdHxlbnwxfHx8fDE3Njc0MTUwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Reading assessment"
              className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
            />
            
            <p className="mb-4">Several professionals are qualified to evaluate for dyslexia:<sup>[4]</sup></p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Educational psychologists:</strong> Specialize in learning and academic assessment</li>
              <li className="mb-2"><strong>School psychologists:</strong> Conduct evaluations within school settings<sup>[5]</sup></li>
              <li className="mb-2"><strong>Clinical psychologists:</strong> Licensed psychologists with expertise in learning disorders</li>
              <li className="mb-2"><strong>Neuropsychologists:</strong> Assess brain-behavior relationships<sup>[6]</sup></li>
              <li className="mb-2"><strong>Learning specialists:</strong> Professionals trained in dyslexia assessment</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria</h2>
            
            <p className="mb-4">DSM-5 diagnostic criteria for Specific Learning Disorder with impairment in reading:<sup>[19]</sup></p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Difficulties learning and using academic skills for at least 6 months despite interventions</li>
              <li className="mb-2">Academic skills substantially below expected for age</li>
              <li className="mb-2">Difficulties begin during school years</li>
              <li className="mb-2">Not better explained by other conditions<sup>[20]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pattern Recognition</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Discrepancy between listening comprehension and reading comprehension<sup>[21]</sup></li>
              <li className="mb-2">Phonological processing deficits</li>
              <li className="mb-2">Slow, effortful reading despite adequate instruction<sup>[22]</sup></li>
              <li className="mb-2">Unexpected difficulty relative to other abilities</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Common Questions</h2>
            
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
              <h3 className="text-[#0c264d] font-bold mb-3">Frequently Asked Questions:</h3>
              <div className="text-sm space-y-3">
                <p><strong>Q: How long does evaluation take?</strong><br/>
                A: Typically 4-6 hours of testing plus report writing; may be spread across multiple sessions<sup>[39]</sup></p>
                <p><strong>Q: Can dyslexia be diagnosed in kindergarten?</strong><br/>
                A: Risk factors can be identified early, but formal diagnosis usually occurs after reading instruction begins<sup>[40]</sup></p>
                <p><strong>Q: Do adults need formal diagnosis?</strong><br/>
                A: Helpful for understanding oneself, accessing accommodations at work/school, and receiving appropriate support<sup>[41]</sup></p>
                <p><strong>Q: What if my child doesn't qualify for school services?</strong><br/>
                A: Private tutoring, 504 Plan (less intensive than IEP), or pursuing private evaluation<sup>[42]</sup></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Comprehensive Evaluation */}
      {activeTab === 'evaluation' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Components of Comprehensive Evaluation</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental and Educational History</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Early language development milestones<sup>[7]</sup></li>
              <li className="mb-2">Family history of reading or learning difficulties</li>
              <li className="mb-2">Previous educational experiences and interventions<sup>[8]</sup></li>
              <li className="mb-2">Current reading challenges and their impact</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cognitive Assessment</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Intelligence testing:</strong> WISC-V, WAIS-IV, or Stanford-Binet to assess overall cognitive ability<sup>[9]</sup></li>
              <li className="mb-2"><strong>Reasoning abilities:</strong> Verbal and nonverbal reasoning</li>
              <li className="mb-2"><strong>Memory assessment:</strong> Working memory and long-term memory<sup>[10]</sup></li>
              <li className="mb-2"><strong>Processing speed:</strong> Rate of cognitive processing</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading and Academic Achievement</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Word reading:</strong> Real word reading accuracy (WIAT-III, KTEA-3)<sup>[11]</sup></li>
              <li className="mb-2"><strong>Pseudoword decoding:</strong> Nonsense word reading to assess phonetic decoding<sup>[12]</sup></li>
              <li className="mb-2"><strong>Reading fluency:</strong> Speed and accuracy of reading connected text<sup>[13]</sup></li>
              <li className="mb-2"><strong>Reading comprehension:</strong> Understanding written passages</li>
              <li className="mb-2"><strong>Spelling:</strong> Written spelling of words<sup>[14]</sup></li>
              <li className="mb-2"><strong>Written expression:</strong> Quality and fluency of writing</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Phonological Processing</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Phonological awareness:</strong> CTOPP-2, PAT-2 to assess sound manipulation skills<sup>[15]</sup></li>
              <li className="mb-2"><strong>Phonological memory:</strong> Ability to hold sound information in memory</li>
              <li className="mb-2"><strong>Rapid automatized naming (RAN):</strong> Speed of retrieving familiar verbal information<sup>[16]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Oral Language</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Vocabulary:</strong> Receptive and expressive vocabulary<sup>[17]</sup></li>
              <li className="mb-2"><strong>Listening comprehension:</strong> Understanding spoken language</li>
              <li className="mb-2"><strong>Morphological awareness:</strong> Understanding word structure<sup>[18]</sup></li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: The Diagnosis Process */}
      {activeTab === 'professionals' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessment Across Age Groups</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwaW50ZXJ2ZW50aW9uJTIwdHV0b3IlMjBjaGlsZHxlbnwxfHx8fDE3Njc0MTUwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Educational intervention"
              className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
            />
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Elementary (K-2nd Grade)</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Focus on phonological awareness and early decoding skills<sup>[23]</sup></li>
              <li className="mb-2">Letter-sound knowledge assessment</li>
              <li className="mb-2">Early screening measures (DIBELS, AIMSweb)<sup>[24]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Later Elementary (3rd-5th Grade)</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Emphasis on reading fluency and comprehension<sup>[25]</sup></li>
              <li className="mb-2">Spelling and written expression assessment</li>
              <li className="mb-2">Longer reading passages</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle and High School</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Academic achievement across content areas<sup>[26]</sup></li>
              <li className="mb-2">Reading rate and efficiency</li>
              <li className="mb-2">Complex text comprehension</li>
              <li className="mb-2">Note-taking and study skills assessment</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adults</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Historical information about early reading difficulties<sup>[27]</sup></li>
              <li className="mb-2">Current reading and writing demands</li>
              <li className="mb-2">Compensatory strategies developed</li>
              <li className="mb-2">Impact on employment and daily functioning<sup>[28]</sup></li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">School-Based vs. Private Evaluation</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School Evaluations</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Free under IDEA:</strong> Parents can request evaluation at no cost<sup>[29]</sup></li>
              <li className="mb-2"><strong>Focus on eligibility:</strong> Determines if student qualifies for special education services</li>
              <li className="mb-2"><strong>Educational impact:</strong> Emphasizes how difficulties affect school performance<sup>[30]</sup></li>
              <li className="mb-2"><strong>IEP or 504 Plan:</strong> Results in educational plan if eligible</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Private Evaluations</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Comprehensive assessment:</strong> Often more detailed and extensive<sup>[31]</sup></li>
              <li className="mb-2"><strong>Broader recommendations:</strong> Includes tutoring, therapy, accommodations beyond school</li>
              <li className="mb-2"><strong>Second opinion:</strong> Can be sought if parents disagree with school evaluation</li>
              <li className="mb-2"><strong>Cost:</strong> Typically $1,500-$4,000 depending on comprehensiveness<sup>[32]</sup></li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">After Diagnosis</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding the Report</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Standard scores and percentile ranks explained</li>
              <li className="mb-2">Pattern of strengths and weaknesses identified<sup>[33]</sup></li>
              <li className="mb-2">Specific reading skills assessed</li>
              <li className="mb-2">Diagnosis and severity level</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Recommendations</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Intervention:</strong> Evidence-based reading programs<sup>[34]</sup></li>
              <li className="mb-2"><strong>Accommodations:</strong> Extended time, audiobooks, assistive technology<sup>[35]</sup></li>
              <li className="mb-2"><strong>Educational planning:</strong> IEP or 504 Plan development</li>
              <li className="mb-2"><strong>Progress monitoring:</strong> Regular assessment of response to intervention<sup>[36]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Next Steps</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Share results with school to access services<sup>[37]</sup></li>
              <li className="mb-2">Find qualified reading specialist or tutor</li>
              <li className="mb-2">Educate family members about dyslexia</li>
              <li className="mb-2">Connect with support organizations<sup>[38]</sup></li>
              <li className="mb-2">Address emotional impact and build self-esteem</li>
            </ul>
          </div>
        </div>
      )}

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Snowling, M. J. (2013). "Early identification and interventions for dyslexia: A contemporary view." <em>Journal of Research in Special Educational Needs</em>, 13(1), 7-14.</p>
          <p>[2] Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In P. McCardle & V. Chhabra (Eds.), <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</p>
          <p>[3] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</p>
          <p>[4] Hale, J. B., & Fiorello, C. A. (2004). <em>School neuropsychology: A practitioner's handbook</em>. Guilford Press.</p>
          <p>[5] National Association of School Psychologists. (2015). <em>Identification of students with specific learning disabilities</em>. Author.</p>
          <p>[6] Mather, N., & Wendling, B. J. (2011). <em>Essentials of dyslexia assessment and intervention</em>. John Wiley & Sons.</p>
          <p>[7] Scarborough, H. S. (1998). "Early identification of children at risk for reading disabilities." In B. K. Shapiro, P. J. Accardo, & A. J. Capute (Eds.), <em>Specific reading disability: A view of the spectrum</em> (pp. 75-119). York Press.</p>
          <p>[8] Shaywitz, S. E., Morris, R., & Shaywitz, B. A. (2008). "The education of dyslexic children from childhood to young adulthood." <em>Annual Review of Psychology</em>, 59, 451-475.</p>
          <p>[9] Wechsler, D. (2014). <em>Wechsler Intelligence Scale for Children–Fifth Edition</em>. Pearson.</p>
          <p>[10] Swanson, H. L., & Berninger, V. (1995). "The role of working memory in skilled and less skilled readers' comprehension." <em>Intelligence</em>, 21(1), 83-108.</p>
          <p>[11] Pearson Education. (2020). <em>Wechsler Individual Achievement Test–Fourth Edition</em>. Author.</p>
          <p>[12] Rack, J. P., Snowling, M. J., & Olson, R. K. (1992). "The nonword reading deficit in developmental dyslexia: A review." <em>Reading Research Quarterly</em>, 27(1), 29-53.</p>
          <p>[13] Fuchs, L. S., Fuchs, D., Hosp, M. K., & Jenkins, J. R. (2001). "Oral reading fluency as an indicator of reading competence: A theoretical, empirical, and historical analysis." <em>Scientific Studies of Reading</em>, 5(3), 239-256.</p>
          <p>[14] Ehri, L. C. (2000). "Learning to read and learning to spell: Two sides of a coin." <em>Topics in Language Disorders</em>, 20(3), 19-36.</p>
          <p>[15] Wagner, R. K., Torgesen, J. K., Rashotte, C. A., & Pearson, N. A. (2013). <em>Comprehensive Test of Phonological Processing–Second Edition</em>. Pro-Ed.</p>
          <p>[16] Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>, 63, 427-452.</p>
          <p>[17] Perfetti, C. (2007). "Reading ability: Lexical quality to comprehension." <em>Scientific Studies of Reading</em>, 11(4), 357-383.</p>
          <p>[18] Carlisle, J. F. (2000). "Awareness of the structure and meaning of morphologically complex words: Impact on reading." <em>Reading and Writing</em>, 12(3), 169-190.</p>
          <p>[19] American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). American Psychiatric Publishing.</p>
          <p>[20] Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <em>Journal of Child Psychology and Psychiatry</em>, 53(5), 593-607.</p>
          <p>[21] Catts, H. W., Adlof, S. M., & Weismer, S. E. (2006). "Language deficits in poor comprehenders: A case for the simple view of reading." <em>Journal of Speech, Language, and Hearing Research</em>, 49(2), 278-293.</p>
          <p>[22] Shaywitz, S. E., & Shaywitz, B. A. (2005). "Dyslexia (specific reading disability)." <em>Biological Psychiatry</em>, 57(11), 1301-1309.</p>
          <p>[23] Good, R. H., & Kaminski, R. A. (Eds.). (2002). <em>Dynamic Indicators of Basic Early Literacy Skills</em> (6th ed.). Institute for the Development of Educational Achievement.</p>
          <p>[24] Compton, D. L., Fuchs, D., Fuchs, L. S., & Bryant, J. D. (2006). "Selecting at-risk readers in first grade for early intervention." <em>Journal of Educational Psychology</em>, 98(2), 394-409.</p>
          <p>[25] Wolf, M., & Katzir-Cohen, T. (2001). "Reading fluency and its intervention." <em>Scientific Studies of Reading</em>, 5(3), 211-239.</p>
          <p>[26] Swanson, H. L. (1999). "Reading comprehension and working memory in learning-disabled readers: Is the phonological loop more important than the executive system?" <em>Journal of Experimental Child Psychology</em>, 72(1), 1-31.</p>
          <p>[27] Bruck, M. (1990). "Word-recognition skills of adults with childhood diagnoses of dyslexia." <em>Developmental Psychology</em>, 26(3), 439-454.</p>
          <p>[28] McNulty, M. A. (2003). "Dyslexia and the life course." <em>Journal of Learning Disabilities</em>, 36(4), 363-381.</p>
          <p>[29] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[30] Flanagan, D. P., Alfonso, V. C., & Mascolo, J. T. (2011). <em>Essentials of specific learning disability identification</em>. John Wiley & Sons.</p>
          <p>[31] Schultz, E. K., & Stephens, T. L. (2015). "Core concepts for implementing response to intervention." In S. Jimerson, M. Burns, & A. VanDerHeyden (Eds.), <em>Handbook of response to intervention</em> (pp. 41-58). Springer.</p>
          <p>[32] Simos, P. G., Fletcher, J. M., Bergman, E., et al. (2002). "Dyslexia-specific brain activation profile becomes normal following successful remedial training." <em>Neurology</em>, 58(8), 1203-1213.</p>
          <p>[33] Berninger, V. W., & Abbott, R. D. (2010). "Listening comprehension, oral expression, reading comprehension, and written expression: Related yet unique language systems in grades 1, 3, 5, and 7." <em>Journal of Educational Psychology</em>, 102(3), 635-651.</p>
          <p>[34] Torgesen, J. K., Alexander, A. W., Wagner, R. K., et al. (2001). "Intensive remedial instruction for children with severe reading disabilities." <em>Journal of Learning Disabilities</em>, 34(1), 33-58.</p>
          <p>[35] Edyburn, D. L. (2013). "Critical issues in advancing the special education technology evidence base." <em>Exceptional Children</em>, 80(1), 7-24.</p>
          <p>[36] Fuchs, L. S., & Fuchs, D. (2006). "Introduction to response to intervention: What, why, and how valid is it?" <em>Reading Research Quarterly</em>, 41(1), 93-99.</p>
          <p>[37] Rock, M. L. (2000). "Parents as equal partners: Balancing the scales in IEP development." <em>Teaching Exceptional Children</em>, 32(6), 30-37.</p>
          <p>[38] International Dyslexia Association. (2021). <em>Resources for families and individuals</em>. Retrieved from https://dyslexiaida.org</p>
          <p>[39] Mather, N., & Wendling, B. J. (2011). <em>Essentials of dyslexia assessment and intervention</em>. John Wiley & Sons.</p>
          <p>[40] Snowling, M. J. (2013). "Early identification and interventions for dyslexia: A contemporary view." <em>Journal of Research in Special Educational Needs</em>, 13(1), 7-14.</p>
          <p>[41] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[42] Zirkel, P. A. (2013). "Is it time for elevating the standard for FAPE under IDEA?" <em>Exceptional Children</em>, 79(4), 497-508.</p>
        </div>
      </section>

      {/* Bottom navigation button */}
      <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-end">
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
      </div>
    </article>
  );
}