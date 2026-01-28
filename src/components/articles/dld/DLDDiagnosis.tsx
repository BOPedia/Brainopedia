import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DLDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function DLDDiagnosis({ setCurrentArticle }: DLDDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <div className="mb-6">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        DLD: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Diagnosing Developmental Language Disorder requires comprehensive assessment by qualified professionals, 
            typically speech-language pathologists.<sup>[1]</sup> The diagnostic process involves standardized testing, 
            observations, and consideration of the child's language use in everyday contexts.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Who Can Diagnose DLD?</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Qualified Professionals</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Speech-Language Pathologists (SLPs):</strong> Primary professionals for DLD assessment<sup>[3]</sup></li>
            <li className="mb-2"><strong>Educational psychologists:</strong> May identify language concerns</li>
            <li className="mb-2"><strong>Developmental pediatricians:</strong> Medical screening and referral</li>
            <li className="mb-2"><strong>Neuropsychologists:</strong> Comprehensive cognitive-language assessment<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">CATALISE Diagnostic Criteria</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0JTIwYXNzZXNzbWVudHxlbnwxfHx8fDE2NzQ1MzUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Test assessment"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">International Consensus Criteria</h3>
          <p className="mb-4">
            The 2017 CATALISE consensus established diagnostic criteria:<sup>[5]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Language difficulties:</strong> Persistent problems with language learning and use</li>
            <li className="mb-2"><strong>Functional impact:</strong> Language difficulties interfere with daily life<sup>[6]</sup></li>
            <li className="mb-2"><strong>Not explained by:</strong> Known biomedical condition, intellectual disability, hearing impairment, lack of opportunity</li>
            <li className="mb-2"><strong>Standardized tests:</strong> Typically perform below age expectations on language tests</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Flexibility in Criteria</h3>
          <p className="mb-4">
            CATALISE moved away from strict cutoff scores:<sup>[7]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Clinical judgment important alongside test scores</li>
            <li className="mb-2">Functional impact prioritized over arbitrary cutoffs</li>
            <li className="mb-2">Allows identification of children who need support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Assessment Process</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Case History</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Developmental history:</strong> Language milestones, early development<sup>[8]</sup></li>
            <li className="mb-2"><strong>Medical history:</strong> Hearing, health conditions, medications</li>
            <li className="mb-2"><strong>Family history:</strong> Language or learning difficulties in relatives<sup>[9]</sup></li>
            <li className="mb-2"><strong>Educational history:</strong> School performance and concerns</li>
            <li className="mb-2"><strong>Current concerns:</strong> Specific difficulties parents and teachers notice</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hearing Screening</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Essential to rule out hearing loss as primary cause<sup>[10]</sup></li>
            <li className="mb-2">Full audiological evaluation if concerns exist</li>
            <li className="mb-2">History of ear infections documented</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Standardized Language Testing</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Comprehensive Language Assessment</h3>
          <p className="mb-4">
            Multiple domains should be assessed:<sup>[11]</sup>
          </p>

          <h4 className="font-bold mb-2">Receptive Language Tests</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>CELF-5:</strong> Clinical Evaluation of Language Fundamentals<sup>[12]</sup></li>
            <li className="mb-2"><strong>PPVT-5:</strong> Peabody Picture Vocabulary Test</li>
            <li className="mb-2"><strong>TROG-2:</strong> Test for Reception of Grammar</li>
            <li className="mb-2">Assesses understanding of words, sentences, and grammar</li>
          </ul>

          <h4 className="font-bold mb-2">Expressive Language Tests</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>CELF-5:</strong> Expressive subtests<sup>[13]</sup></li>
            <li className="mb-2"><strong>EVT-3:</strong> Expressive Vocabulary Test</li>
            <li className="mb-2"><strong>Sentence formulation tasks:</strong> Grammar and syntax</li>
            <li className="mb-2"><strong>Naming tasks:</strong> Word retrieval abilities</li>
          </ul>

          <h4 className="font-bold mb-2">Comprehensive Batteries</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>CELF-5:</strong> Ages 5-21<sup>[14]</sup></li>
            <li className="mb-2"><strong>CASL-2:</strong> Comprehensive Assessment of Spoken Language</li>
            <li className="mb-2"><strong>OWLS-II:</strong> Oral and Written Language Scales</li>
            <li className="mb-2">Assess multiple language domains comprehensively</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Language Sample Analysis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Naturalistic Language Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Spontaneous speech:</strong> Recording natural conversation or play<sup>[15]</sup></li>
            <li className="mb-2"><strong>Narrative samples:</strong> Telling stories or retelling events</li>
            <li className="mb-2"><strong>Analysis of grammar:</strong> Types and frequency of errors<sup>[16]</sup></li>
            <li className="mb-2"><strong>Vocabulary use:</strong> Diversity and sophistication</li>
            <li className="mb-2"><strong>Sentence complexity:</strong> Length and complexity of utterances</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Clinical Markers</h3>
          <p className="mb-4">
            Certain grammatical markers are particularly sensitive to DLD:<sup>[17]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Past tense -ed errors</li>
            <li className="mb-2">Third person singular -s omission</li>
            <li className="mb-2">Auxiliary verb (is, are, was, were) errors<sup>[18]</sup></li>
            <li className="mb-2">These grammatical markers help differentiate DLD from typical development</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Additional Assessments</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Phonological Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Speech sound production</li>
            <li className="mb-2">Phonological awareness skills<sup>[19]</sup></li>
            <li className="mb-2">Important for literacy predictions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Nonverbal Cognitive Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Nonverbal IQ testing to rule out intellectual disability<sup>[20]</sup></li>
            <li className="mb-2">Not required by CATALISE but often helpful</li>
            <li className="mb-2">Helps understand cognitive profile</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Working Memory and Processing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Phonological working memory tasks<sup>[21]</sup></li>
            <li className="mb-2">Processing speed assessment</li>
            <li className="mb-2">Helps identify underlying processing difficulties</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Questionnaires and Rating Scales</h2>
          
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>CCC-2:</strong> Children's Communication Checklist<sup>[22]</sup></li>
            <li className="mb-2"><strong>CELF-5 Pragmatics Profile:</strong> Social communication</li>
            <li className="mb-2"><strong>Parent/teacher questionnaires:</strong> Real-world language use<sup>[23]</sup></li>
            <li className="mb-2">Provides functional perspective beyond test scores</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Differential Diagnosis</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNjc0NTM1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student learning"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Distinguishing from Other Conditions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Autism Spectrum Disorder:</strong> ASD has social-communication deficits plus restricted interests<sup>[24]</sup></li>
            <li className="mb-2"><strong>Intellectual Disability:</strong> DLD has language more impaired than nonverbal cognition</li>
            <li className="mb-2"><strong>Hearing Impairment:</strong> Audiological evaluation rules out<sup>[25]</sup></li>
            <li className="mb-2"><strong>Environmental deprivation:</strong> History and improvements with exposure</li>
            <li className="mb-2"><strong>Selective mutism:</strong> Speaks normally in some situations</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Co-occurring Conditions</h3>
          <p className="mb-4">
            Important to identify co-occurring conditions:<sup>[26]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">ADHD commonly co-occurs</li>
            <li className="mb-2">Reading disabilities (dyslexia)</li>
            <li className="mb-2">Speech sound disorders</li>
            <li className="mb-2">Each needs separate assessment and treatment</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Early Identification</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Screening Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Brief screening measures for early detection<sup>[27]</sup></li>
            <li className="mb-2">Well-child visits ideal time for screening</li>
            <li className="mb-2">Parent report measures valuable</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Late Talkers</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Not all late talkers have DLD<sup>[28]</sup></li>
            <li className="mb-2">But many children with DLD were late talkers</li>
            <li className="mb-2">Monitoring and follow-up essential</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Classification</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Based Services</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">May qualify under "Speech or Language Impairment" category<sup>[29]</sup></li>
            <li className="mb-2">IEP (Individualized Education Program) eligibility</li>
            <li className="mb-2">504 Plan alternative if doesn't meet IEP criteria</li>
            <li className="mb-2">School-based SLP services<sup>[30]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Diagnostic Report</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Components:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Background information and reason for referral</li>
              <li>Developmental, medical, and family history</li>
              <li>Tests administered and behavioral observations<sup>[31]</sup></li>
              <li>Test results with scores and interpretations</li>
              <li>Language sample analysis</li>
              <li>Summary of strengths and weaknesses</li>
              <li>Diagnostic impressions and classification</li>
              <li>Detailed, actionable recommendations<sup>[32]</sup></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Speech-Language-Hearing Association. (n.d.). <em>Spoken language disorders</em>. Retrieved from www.asha.org</p>
          <p>[2] Leonard, L. B. (2014). <em>Children with specific language impairment</em> (2nd ed.). Cambridge, MA: MIT Press.</p>
          <p>[3] Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE-2 consortium. (2016). "CATALISE: A multinational and multidisciplinary Delphi consensus study." <em>PLoS ONE</em>, 11(7), e0158753.</p>
          <p>[4] Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE consortium. (2017). "Phase 2 of CATALISE." <em>Journal of Child Psychology and Psychiatry</em>, 58(10), 1068-1080.</p>
          <p>[5] Tomblin, J. B., & Buckwalter, P. R. (1998). "Heritability of poor language achievement among twins." <em>Journal of Speech, Language, and Hearing Research</em>, 41(1), 188-199.</p>
          <p>[6] Wiig, E. H., Semel, E., & Secord, W. A. (2013). <em>Clinical Evaluation of Language Fundamentals</em> (5th ed.). San Antonio, TX: Pearson.</p>
          <p>[7] Heilmann, J., Nockerts, A., & Miller, J. F. (2010). "Language sampling: Does the length of the transcript matter?" <em>Language, Speech, and Hearing Services in Schools</em>, 41(4), 393-404.</p>
          <p>[8] Rice, M. L., & Wexler, K. (1996). "Toward tense as a clinical marker of specific language impairment in English-speaking children." <em>Journal of Speech and Hearing Research</em>, 39(6), 1239-1257.</p>
          <p>[9] Rice, M. L., Wexler, K., & Hershberger, S. (1998). "Tense over time." <em>Journal of Speech, Language, and Hearing Research</em>, 41(6), 1412-1431.</p>
          <p>[10] Catts, H. W., Fey, M. E., Tomblin, J. B., & Zhang, X. (2002). "A longitudinal investigation of reading outcomes in children with language impairments." <em>Journal of Speech, Language, and Hearing Research</em>, 45(6), 1142-1157.</p>
          <p>[11] Gathercole, S. E., & Baddeley, A. D. (1990). "Phonological memory deficits in language disordered children." <em>Journal of Memory and Language</em>, 29(3), 336-360.</p>
          <p>[12] Bishop, D. V. M. (2003). <em>Children's Communication Checklist</em> (2nd ed.). London: Psychological Corporation.</p>
          <p>[13] Mueller, K. L., & Tomblin, J. B. (2012). "Examining the comorbidity of language disorders and ADHD." <em>Topics in Language Disorders</em>, 32(3), 228-246.</p>
          <p>[14] Law, J., Boyle, J., Harris, F., Harkness, A., & Nye, C. (2000). "The feasibility of universal screening for primary speech and language delay." <em>Developmental Medicine & Child Neurology</em>, 42(3), 190-200.</p>
          <p>[15] Rice, M. L., Taylor, C. L., & Zubrick, S. R. (2008). "Language outcomes of 7-year-old children with or without a history of late language emergence at 24 months." <em>Journal of Speech, Language, and Hearing Research</em>, 51(2), 394-407.</p>
          <p>[16] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>
    </article>
  );
}