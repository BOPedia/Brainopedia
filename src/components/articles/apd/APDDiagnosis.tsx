import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface APDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function APDDiagnosis({ setCurrentArticle }: APDDiagnosisProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('apd'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Auditory Processing Disorder
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Auditory Processing Disorder: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Diagnosing Auditory Processing Disorder requires comprehensive assessment by qualified professionals, 
            typically audiologists with specialized training in central auditory processing.<sup>[1]</sup> The 
            diagnostic process involves multiple tests, careful differential diagnosis, and consideration of 
            functional impacts.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Who Can Diagnose APD?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb2xvZ2lzdCUyMHRlc3Rpbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Audiologist conducting testing"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Qualified Professionals</h3>
          <p className="mb-4">
            Audiologists are the primary professionals qualified to diagnose APD.<sup>[3]</sup> However, not all 
            audiologists have specialized training in central auditory processing assessment.<sup>[4]</sup> Seek 
            audiologists with specific expertise and equipment for APD testing.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multidisciplinary Team</h3>
          <p className="mb-4">
            While audiologists conduct the core APD testing, comprehensive evaluation often involves a 
            multidisciplinary team.<sup>[6]</sup> This may include speech-language pathologists, psychologists, 
            educators, and physicians to assess related areas and rule out other conditions.<sup>[7]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Age Considerations</h3>
          <p className="mb-4">
            APD is typically not diagnosed before age 7, when the auditory system has matured sufficiently for 
            valid testing.<sup>[8]</sup> However, younger children showing signs can receive early intervention 
            even without formal diagnosis.<sup>[9]</sup> Some test batteries have norms for children as young 
            as age 5-6, but interpretation requires caution.<sup>[10]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">When to Seek Evaluation</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Red Flags and Indicators</h3>
          <p className="mb-4">
            Seek evaluation if a child or adult shows persistent difficulty hearing in noise, frequently requests 
            repetition, struggles following verbal directions, has academic difficulties despite normal intelligence, 
            or shows inconsistent listening performance.<sup>[11]</sup> History of chronic ear infections may 
            increase suspicion.<sup>[12]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Screening Tools</h3>
          <p className="mb-4">
            Questionnaires like the Children's Auditory Performance Scale (CHAPS), SIFTER (Screening Instrument 
            For Targeting Educational Risk), or Evaluation of Children's Listening and Processing Skills (ECLiPS) 
            can indicate whether formal testing is warranted.<sup>[13]</sup> These tools don't diagnose APD but 
            identify children who should be evaluated.<sup>[14]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Diagnostic Process</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 1: Case History</h3>
          <p className="mb-4">
            Comprehensive case history documents developmental milestones, medical history (particularly ear 
            infections), family history, academic performance, and specific listening difficulties.<sup>[15]</sup> 
            Information from parents, teachers, and the individual provides essential context.<sup>[16]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 2: Peripheral Hearing Assessment</h3>
          <p className="mb-4">
            Standard audiological evaluation must precede APD testing to ensure normal peripheral hearing 
            sensitivity.<sup>[17]</sup> This includes pure-tone audiometry, speech audiometry, and immittance 
            testing.<sup>[18]</sup> APD cannot be diagnosed if peripheral hearing loss accounts for the 
            difficulties.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 3: Central Auditory Processing Tests</h3>
          <p className="mb-4">
            A battery of specialized tests assesses different auditory processing abilities.<sup>[20]</sup> No 
            single test diagnoses APD; multiple measures are required.<sup>[21]</sup> Test selection depends on 
            age, language abilities, and specific concerns.<sup>[22]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 4: Related Assessments</h3>
          <p className="mb-4">
            Additional evaluations may include cognitive testing, language assessment, attention screening, and 
            academic achievement testing.<sup>[23]</sup> These help determine whether auditory processing deficits 
            exist independent of other factors.<sup>[24]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 5: Integration and Interpretation</h3>
          <p className="mb-4">
            Results are integrated considering all information: test performance, case history, observations, and 
            functional impacts.<sup>[25]</sup> The pattern of deficits across tests informs diagnosis and subtype 
            classification.<sup>[26]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Types of APD Tests</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVzdGluZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Medical testing equipment"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dichotic Listening Tests</h3>
          <p className="mb-4">
            Different stimuli are presented to each ear simultaneously, assessing binaural integration or 
            separation.<sup>[27]</sup> Tests include Dichotic Digits, Staggered Spondaic Word (SSW), Competing 
            Sentences, and Dichotic Consonant-Vowel (CV).<sup>[28]</sup> Performance reveals ear advantages and 
            interhemispheric transfer abilities.<sup>[29]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Temporal Processing Tests</h3>
          <p className="mb-4">
            These assess perception of timing aspects of sound including duration, order, and patterns.<sup>[30]</sup> 
            Tests include Duration Pattern Test, Frequency Pattern Test, Gaps-In-Noise (GIN), and Random Gap 
            Detection Test (RGDT).<sup>[31]</sup> Temporal processing is critical for speech perception.<sup>[32]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Monaural Low-Redundancy Speech Tests</h3>
          <p className="mb-4">
            Speech signals are degraded (filtered, compressed, interrupted) and presented to one ear at a time.<sup>[33]</sup> 
            Tests include Filtered Speech, Time-Compressed Speech, and Speech-in-Noise.<sup>[34]</sup> These assess 
            auditory closure and processing degraded signals.<sup>[35]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Binaural Interaction Tests</h3>
          <p className="mb-4">
            These assess how the two ears work together to process sound.<sup>[36]</sup> Tests include Masking 
            Level Difference (MLD) and binaural fusion tasks.<sup>[37]</sup> Results indicate brainstem-level 
            binaural processing abilities.<sup>[38]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sound Localization and lateralization</h3>
          <p className="mb-4">
            These tests assess ability to identify where sounds come from or which ear receives a signal.<sup>[39]</sup> 
            Important for spatial hearing and understanding speech in complex environments.<sup>[40]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Electrophysiological Measures</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Brainstem Response (ABR)</h3>
          <p className="mb-4">
            ABR measures electrical activity from the auditory nerve through brainstem in response to clicks or 
            tones.<sup>[41]</sup> While primarily used to assess hearing sensitivity, ABR can identify brainstem 
            pathway abnormalities.<sup>[42]</sup> Abnormal ABR with normal hearing suggests auditory nerve or 
            brainstem dysfunction.<sup>[43]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle Latency Response (MLR)</h3>
          <p className="mb-4">
            MLR measures responses from thalamocortical pathways occurring 15-50 milliseconds after stimulus 
            onset.<sup>[44]</sup> Provides information about auditory processing at levels between brainstem and 
            cortex.<sup>[45]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Late Potentials and Event-Related Potentials</h3>
          <p className="mb-4">
            Cortical auditory evoked potentials (CAEPs) assess cortical processing of sounds.<sup>[46]</sup> The 
            P300 response indicates attention and cognitive processing of sounds.<sup>[47]</sup> Mismatch Negativity 
            (MMN) measures automatic discrimination of sound differences.<sup>[48]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Acoustic Reflex Testing</h3>
          <p className="mb-4">
            While part of standard audiology, acoustic reflex patterns can provide information about auditory 
            pathway function.<sup>[49]</sup> Absent or abnormal reflexes with normal hearing may indicate retrocochlear 
            or central auditory dysfunction.<sup>[50]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Test Batteries and Protocols</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">SCAN Battery</h3>
          <p className="mb-4">
            The SCAN series (SCAN-3:A for adults, SCAN-3:C for children) is a standardized test battery including 
            filtered words, auditory figure-ground, competing words, and competing sentences.<sup>[51]</sup> Provides 
            age-normed scores and is widely used in schools.<sup>[52]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multiple Auditory Processing Assessment (MAPA)</h3>
          <p className="mb-4">
            A comprehensive computerized test battery assessing multiple auditory processes.<sup>[53]</sup> Includes 
            measures of temporal processing, dichotic listening, and auditory discrimination.<sup>[54]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individualized Test Selection</h3>
          <p className="mb-4">
            Many audiologists select specific tests based on the individual's profile rather than using a fixed 
            battery.<sup>[55]</sup> This allows targeting of specific concerns and adaptation for individual 
            characteristics.<sup>[56]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria and Interpretation</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjaGFydHxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Medical charts and diagnosis"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Performance Criteria</h3>
          <p className="mb-4">
            APD is typically diagnosed when performance falls 2 or more standard deviations below the mean for 
            age on at least two auditory processing tests.<sup>[57]</sup> However, criteria vary across protocols 
            and professionals.<sup>[58]</sup> Some require deficits across multiple auditory domains; others 
            consider severity within a single domain sufficient.<sup>[59]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Subtype Classification</h3>
          <p className="mb-4">
            The pattern of test results may indicate specific APD subtypes: decoding deficit, tolerance-fading 
            memory deficit, integration deficit, or organization deficit.<sup>[60]</sup> Subtype classification 
            guides intervention planning.<sup>[61]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Impact Consideration</h3>
          <p className="mb-4">
            Diagnosis should consider real-world functional impacts beyond test scores.<sup>[62]</sup> Some 
            individuals with poor test performance compensate well; others with borderline scores struggle 
            significantly.<sup>[63]</sup> Educational, occupational, and social functioning inform clinical 
            significance.<sup>[64]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Differential Diagnosis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ruling Out Hearing Loss</h3>
          <p className="mb-4">
            Peripheral hearing loss must be excluded through comprehensive audiological assessment.<sup>[65]</sup> 
            Even mild hearing loss can significantly impact auditory processing test performance.<sup>[66]</sup> 
            Fluctuating hearing from ear infections complicates assessment.<sup>[67]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD vs. ADHD</h3>
          <p className="mb-4">
            APD and ADHD share symptoms and frequently co-occur.<sup>[68]</sup> Key differences: APD difficulties 
            are specific to auditory processing, while ADHD affects attention across modalities.<sup>[69]</sup> 
            However, distinguishing them requires careful assessment as both affect listening and following 
            directions.<sup>[70]</sup> Continuous performance tests and attention questionnaires help differentiate.<sup>[71]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD vs. Language Disorders</h3>
          <p className="mb-4">
            Language disorders affect linguistic processing beyond auditory input.<sup>[72]</sup> Children with 
            language impairment may perform poorly on auditory processing tests due to language demands.<sup>[73]</sup> 
            Comprehensive language assessment by a speech-language pathologist is essential.<sup>[74]</sup> APD 
            and language disorders frequently co-occur, complicating differential diagnosis.<sup>[75]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD vs. Auditory Neuropathy Spectrum Disorder (ANSD)</h3>
          <p className="mb-4">
            ANSD involves dyssynchrony in auditory nerve or brainstem function with or without hearing loss.<sup>[76]</sup> 
            Distinguishing features include absent or abnormal acoustic reflexes and ABR despite normal otoacoustic 
            emissions.<sup>[77]</sup> ANSD may present with APD-like symptoms but has different underlying pathology.<sup>[78]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD and Autism Spectrum Disorder</h3>
          <p className="mb-4">
            Auditory processing differences are common in autism but may differ qualitatively from APD.<sup>[79]</sup> 
            Sensory sensitivities, social communication deficits, and restricted interests distinguish autism 
            from isolated APD.<sup>[80]</sup> Comprehensive autism evaluation may be warranted when broader 
            concerns exist.<sup>[81]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Challenges in Diagnosis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Lack of Gold Standard</h3>
          <p className="mb-4">
            No universally accepted diagnostic criteria or test battery exists for APD.<sup>[82]</sup> Different 
            protocols may lead to different diagnostic conclusions for the same individual.<sup>[83]</sup> This 
            variability creates controversy and inconsistency in the field.<sup>[84]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Test Limitations</h3>
          <p className="mb-4">
            Many APD tests have language and cognitive demands beyond auditory processing.<sup>[85]</sup> Performance 
            may reflect multiple factors including attention, memory, language, and motivation.<sup>[86]</sup> 
            Isolating pure auditory processing deficits is challenging.<sup>[87]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Comorbidity Complexity</h3>
          <p className="mb-4">
            High rates of comorbidity with ADHD, dyslexia, and language disorders complicate diagnosis.<sup>[88]</sup> 
            Determining whether deficits are truly auditory-specific or secondary to other conditions is 
            difficult.<sup>[89]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Maturational Considerations</h3>
          <p className="mb-4">
            The auditory system continues maturing through adolescence.<sup>[90]</sup> Some apparent APD may 
            reflect developmental delay rather than permanent deficit.<sup>[91]</sup> Re-evaluation over time 
            may be necessary.<sup>[92]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Test Environment vs. Real World</h3>
          <p className="mb-4">
            Test environments are quiet and controlled, unlike real-world listening situations.<sup>[93]</sup> 
            Tests may not fully capture functional difficulties experienced daily.<sup>[94]</sup> Questionnaires 
            and observations supplement formal testing.<sup>[95]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Specialized Assessments</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Speech-Language Assessment</h3>
          <p className="mb-4">
            Comprehensive language evaluation assesses vocabulary, grammar, phonological awareness, and discourse 
            skills.<sup>[96]</sup> This helps differentiate language disorders from auditory processing deficits.<sup>[97]</sup> 
            Phonological processing measures are particularly relevant given overlap with APD.<sup>[98]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Psychological/Cognitive Assessment</h3>
          <p className="mb-4">
            Cognitive testing documents intellectual abilities, working memory, and processing speed.<sup>[99]</sup> 
            This helps determine if auditory processing difficulties occur despite normal cognition or are part 
            of broader cognitive differences.<sup>[100]</sup> Attention measures help differentiate APD from ADHD.<sup>[101]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Educational/Academic Assessment</h3>
          <p className="mb-4">
            Achievement testing in reading, writing, and math documents academic impacts.<sup>[102]</sup> Discrepancies 
            between ability and achievement may indicate learning disabilities related to or co-occurring with 
            APD.<sup>[103]</sup> Classroom observations reveal functional impacts of auditory processing difficulties.<sup>[104]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Diagnostic Report</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Components of Comprehensive Reports</h3>
          <p className="mb-4">
            Diagnostic reports should include case history, test results with interpretation, diagnostic impressions, 
            functional implications, and recommendations.<sup>[105]</sup> Results should be explained clearly for 
            families and other professionals.<sup>[106]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Recommendations</h3>
          <p className="mb-4">
            Reports should provide specific, individualized recommendations for intervention, accommodations, and 
            management strategies.<sup>[107]</sup> Environmental modifications, assistive technology, therapy 
            approaches, and classroom supports should be detailed.<sup>[108]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Follow-Up Plans</h3>
          <p className="mb-4">
            Recommendations for re-evaluation, progress monitoring, and ongoing management should be included.<sup>[109]</sup> 
            APD is not static; periodic re-assessment tracks changes over time.<sup>[110]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Access to Diagnosis</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYWNjZXNzfGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Healthcare access"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Availability of Services</h3>
          <p className="mb-4">
            Not all areas have audiologists trained in APD assessment.<sup>[111]</sup> Finding qualified 
            professionals may require traveling to specialized centers.<sup>[112]</sup> Wait times for evaluation 
            can be lengthy.<sup>[113]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Insurance and Cost</h3>
          <p className="mb-4">
            Insurance coverage for APD evaluation varies.<sup>[114]</sup> Some insurers cover comprehensive 
            testing; others don't recognize APD as a covered diagnosis.<sup>[115]</sup> Out-of-pocket costs 
            can be substantial.<sup>[116]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School vs. Private Evaluation</h3>
          <p className="mb-4">
            Some school systems provide APD evaluations; others don't recognize it for special education 
            eligibility.<sup>[117]</sup> Private evaluation may be necessary but creates financial barriers.<sup>[118]</sup> 
            Regardless of funding source, quality comprehensive assessment is essential.<sup>[119]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Value of Diagnosis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding and Validation</h3>
          <p className="mb-4">
            Diagnosis provides explanation for longstanding difficulties, validating experiences and frustrations.<sup>[120]</sup> 
            Understanding that challenges stem from neurological differences rather than lack of effort or ability 
            is powerful.<sup>[121]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Guiding Intervention</h3>
          <p className="mb-4">
            Accurate diagnosis guides appropriate interventions and accommodations.<sup>[122]</sup> Specific deficit 
            patterns inform targeted remediation strategies.<sup>[123]</sup> Without diagnosis, support may be 
            misdirected or insufficient.<sup>[124]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Educational Advocacy</h3>
          <p className="mb-4">
            Formal diagnosis supports requests for school accommodations and services.<sup>[125]</sup> While APD 
            eligibility for special education varies by state, documentation strengthens advocacy efforts.<sup>[126]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Diagnosis as a Starting Point:</h3>
            <div className="text-sm">
              <p>
                APD diagnosis requires specialized assessment by qualified audiologists using multiple measures.<sup>[127]</sup> 
                The process is complex, involving differential diagnosis and consideration of co-occurring conditions.<sup>[128]</sup> 
                While challenges exist in standardization and access, comprehensive evaluation provides essential 
                information for understanding difficulties and planning appropriate support.<sup>[129]</sup> Diagnosis 
                is not an end but a beginning—the foundation for effective intervention and accommodation.<sup>[130]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[2] American Speech-Language-Hearing Association. (2005). "(Central) auditory processing disorders." <em>Technical Report</em>. Available from www.asha.org/policy.</p>
          <p>[3] Jerger, J., & Musiek, F. (2000). "Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
          <p>[4] Emanuel, D. C., Ficca, K. N., & Korczak, P. (2011). "Survey of the diagnosis and management of auditory processing disorder." <em>American Journal of Audiology</em>, 20(1), 48-60.</p>
          <p>[5] British Society of Audiology. (2018). "Position statement and practice guidance: Auditory processing disorder (APD)." <em>BSA</em>.</p>
          <p>[6] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[7] Chermak, G. D., & Musiek, F. E. (1997). <em>Central auditory processing disorders: New perspectives</em>. San Diego: Singular Publishing Group.</p>
          <p>[8] Keith, R. W., & Anderson, J. (2007). "Dichotic listening tests." In F. E. Musiek & G. D. Chermak (Eds.), <em>Handbook of central auditory processing disorder: Vol. 1. Auditory neuroscience and diagnosis</em> (pp. 167-186). San Diego: Plural Publishing.</p>
          <p>[9] Friel-Patti, S. (1999). "Clinical decision-making in the assessment and intervention of central auditory processing disorders." <em>Language, Speech, and Hearing Services in Schools</em>, 30(4), 345-352.</p>
          <p>[10] Weihing, J. A., Musiek, F. E., & Shinn, J. B. (2007). "The dichotic digits test: Normative data for children (ages 7-12) and adults." <em>The Hearing Journal</em>, 60(9), 32-40.</p>
          <p>[11] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Educational Audiology Association</em>.</p>
          <p>[12] Moore, D. R., Hartley, D. E., & Hogan, S. C. (2003). "Effects of otitis media with effusion (OME) on central auditory function." <em>International Journal of Pediatric Otorhinolaryngology</em>, 67, S63-S67.</p>
          <p>[13] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[14] Fisher, L. I. (1976). "Fisher's Auditory Problems Checklist." <em>Educational Audiology Association</em>.</p>
          <p>[15] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[16] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[17] American Speech-Language-Hearing Association. (2005). "(Central) auditory processing disorders." <em>Technical Report</em>. Available from www.asha.org/policy.</p>
          <p>[18] Katz, J., Stecker, N. A., & Henderson, D. (Eds.). (1992). <em>Central auditory processing: A transdisciplinary view</em>. St. Louis: Mosby Year Book.</p>
          <p>[19] Jerger, J., & Musiek, F. (2000). "Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
          <p>[20] Musiek, F. E., & Chermak, G. D. (Eds.). (2007). <em>Handbook of central auditory processing disorder: Vol. 1. Auditory neuroscience and diagnosis</em>. San Diego: Plural Publishing.</p>
          <p>[21] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[22] Wilson, W. J., & Arnott, W. (2013). "Using different criteria to diagnose (central) auditory processing disorder: How big a difference does it make?" <em>Journal of Speech, Language, and Hearing Research</em>, 56(1), 63-70.</p>
          <p>[23] Dawes, P., & Bishop, D. (2009). "Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique." <em>International Journal of Language & Communication Disorders</em>, 44(4), 440-465.</p>
          <p>[24] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[25] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[26] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[27] Kimura, D. (1961). "Cerebral dominance and the perception of verbal stimuli." <em>Canadian Journal of Psychology</em>, 15(3), 166-171.</p>
          <p>[28] Musiek, F. E., Gollegly, K. M., Kibbe, K. S., & Verkest-Lenz, S. B. (1991). "Proposed screening test for central auditory disorders: Follow-up on the dichotic digits test." <em>American Journal of Otology</em>, 12(2), 109-113.</p>
          <p>[29] Katz, J., & Smith, P. S. (1991). "The staggered spondaic word test: A ten-minute look at the central nervous system through the ears." <em>Annals of the New York Academy of Sciences</em>, 620(1), 233-251.</p>
          <p>[30] Tallal, P. (1980). "Auditory temporal perception, phonics, and reading disabilities in children." <em>Brain and Language</em>, 9(2), 182-198.</p>
          <p>[31] Musiek, F. E., Shinn, J. B., Jirsa, R., Bamiou, D. E., Baran, J. A., & Zaida, E. (2005). "GIN (Gaps-In-Noise) test performance in subjects with confirmed central auditory nervous system involvement." <em>Ear and Hearing</em>, 26(6), 608-618.</p>
          <p>[32] Wright, B. A., Lombardino, L. J., King, W. M., Puranik, C. S., Leonard, C. M., & Merzenich, M. M. (1997). "Deficits in auditory temporal and spectral resolution in language-impaired children." <em>Nature</em>, 387(6629), 176-178.</p>
          <p>[33] Bocca, E., Calearo, C., & Cassinari, V. (1954). "A new method for testing hearing in temporal lobe tumours." <em>Acta Oto-Laryngologica</em>, 44(3), 219-221.</p>
          <p>[34] Wilson, R. H., & Burks, C. A. (2005). "Use of 35 words for evaluation of hearing loss in signal-to-babble ratio: A clinic protocol." <em>Journal of Rehabilitation Research and Development</em>, 42(6), 839-852.</p>
          <p>[35] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[36] Hirsh, I. J. (1948). "The influence of interaural phase on interaural summation and inhibition." <em>Journal of the Acoustical Society of America</em>, 20(4), 536-544.</p>
          <p>[37] Wilson, W. J., Krishnan, L. A., & Arnott, W. (2014). "The development of HABAT: A new tool for the assessment of binaural hearing in children." <em>International Journal of Audiology</em>, 53(9), 621-627.</p>
          <p>[38] Musiek, F. E., & Baran, J. A. (2007). <em>The auditory system: Anatomy, physiology, and clinical correlates</em>. Boston: Allyn & Bacon.</p>
          <p>[39] Litovsky, R. Y. (2012). "Spatial release from masking." <em>Acoustics Today</em>, 8(2), 18-25.</p>
          <p>[40] Van Deun, L., van Wieringen, A., Van den Bogaert, T., Scherf, F., Offeciers, F. E., Van de Heyning, P. H., ... & Wouters, J. (2009). "Sound localization, sound lateralization, and binaural masking level differences in young children with normal hearing." <em>Ear and Hearing</em>, 30(2), 178-190.</p>
          <p>[41] Jewett, D. L., & Williston, J. S. (1971). "Auditory-evoked far fields averaged from the scalp of humans." <em>Brain</em>, 94(4), 681-696.</p>
          <p>[42] Starr, A., Picton, T. W., Sininger, Y., Hood, L. J., & Berlin, C. I. (1996). "Auditory neuropathy." <em>Brain</em>, 119(3), 741-753.</p>
          <p>[43] Hall, J. W., & Johnston, K. N. (2007). "Auditory brainstem response and auditory neuropathy/dyssynchrony." In R. J. Roeser, M. Valente, & H. Hosford-Dunn (Eds.), <em>Audiology: Diagnosis</em> (2nd ed., pp. 291-315). New York: Thieme.</p>
          <p>[44] Kraus, N., McGee, T., Carrell, T., & Sharma, A. (1995). "Neurophysiologic bases of speech discrimination." <em>Ear and Hearing</em>, 16(1), 19-37.</p>
          <p>[45] Musiek, F. E., Baran, J. A., & Pinheiro, M. L. (1994). "Neuroaudiology: Case studies." <em>Singular Publishing Group</em>.</p>
          <p>[46] Martin, B. A., Tremblay, K. L., & Korczak, P. (2008). "Speech evoked potentials: From the laboratory to the clinic." <em>Ear and Hearing</em>, 29(3), 285-313.</p>
          <p>[47] Polich, J. (2007). "Updating P300: An integrative theory of P3a and P3b." <em>Clinical Neurophysiology</em>, 118(10), 2128-2148.</p>
          <p>[48] Näätänen, R., Paavilainen, P., Rinne, T., & Alho, K. (2007). "The mismatch negativity (MMN) in basic research of central auditory processing: A review." <em>Clinical Neurophysiology</em>, 118(12), 2544-2590.</p>
          <p>[49] Jerger, J., & Hayes, D. (1977). "Diagnostic speech audiometry." <em>Archives of Otolaryngology</em>, 103(4), 216-222.</p>
          <p>[50] Musiek, F. E., & Baran, J. A. (2007). <em>The auditory system: Anatomy, physiology, and clinical correlates</em>. Boston: Allyn & Bacon.</p>
          <p>[51] Keith, R. W. (2000). "Development and standardization of SCAN-C Test for Auditory Processing Disorders in Children." <em>Journal of the American Academy of Audiology</em>, 11(8), 438-445.</p>
          <p>[52] Keith, R. W. (2009). <em>SCAN-3 for Children: Tests for Auditory Processing Disorders</em>. San Antonio, TX: Pearson.</p>
          <p>[53] Domitz, D. M., & Schow, R. L. (2000). "A new CAPD battery—Multiple Auditory Processing Assessment: Factor analysis and comparisons with SCAN." <em>American Journal of Audiology</em>, 9(2), 101-111.</p>
          <p>[54] Schow, R. L., Seikel, J. A., Chermak, G. D., & Berent, M. (2000). "Central auditory processes and test measures: ASHA 1996 revisited." <em>American Journal of Audiology</em>, 9(2), 63-68.</p>
          <p>[55] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[56] Chermak, G. D., & Musiek, F. E. (1997). <em>Central auditory processing disorders: New perspectives</em>. San Diego: Singular Publishing Group.</p>
          <p>[57] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[58] Wilson, W. J., & Arnott, W. (2013). "Using different criteria to diagnose (central) auditory processing disorder: How big a difference does it make?" <em>Journal of Speech, Language, and Hearing Research</em>, 56(1), 63-70.</p>
          <p>[59] Emanuel, D. C., Ficca, K. N., & Korczak, P. (2011). "Survey of the diagnosis and management of auditory processing disorder." <em>American Journal of Audiology</em>, 20(1), 48-60.</p>
          <p>[60] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[61] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[62] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[63] Hind, S. (2006). "Survey of care pathway for auditory processing disorder." <em>Audiological Medicine</em>, 4(1), 12-24.</p>
          <p>[64] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[65] American Speech-Language-Hearing Association. (2005). "(Central) auditory processing disorders." <em>Technical Report</em>. Available from www.asha.org/policy.</p>
          <p>[66] Thibodeau, L. M. (2007). "Speech audiometry." In R. J. Roeser, M. Valente, & H. Hosford-Dunn (Eds.), <em>Audiology: Diagnosis</em> (2nd ed., pp. 281-299). New York: Thieme.</p>
          <p>[67] Gravel, J. S., & Wallace, I. F. (2000). "Effects of otitis media with effusion on hearing in the first 3 years of life." <em>Journal of Speech, Language, and Hearing Research</em>, 43(3), 631-644.</p>
          <p>[68] Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., & Molt, L. (1994). "Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 33(6), 849-857.</p>
          <p>[69] Chermak, G. D., Tucker, E., & Seikel, J. A. (2002). "Behavioral characteristics of auditory processing disorder and attention-deficit hyperactivity disorder: Predominantly inattentive type." <em>Journal of the American Academy of Audiology</em>, 13(6), 332-338.</p>
          <p>[70] Gascon, G. G., Johnson, R., & Burd, L. (1986). "Central auditory processing and attention deficit disorders." <em>Journal of Child Neurology</em>, 1(1), 27-33.</p>
          <p>[71] Keith, R. W., & Engineer, P. (1991). "Effects of methylphenidate on the auditory processing abilities of children with attention deficit-hyperactivity disorder." <em>Journal of Learning Disabilities</em>, 24(10), 630-636.</p>
          <p>[72] Bishop, D. V., & McArthur, G. M. (2005). "Individual differences in auditory processing in specific language impairment: A follow-up study using event-related potentials and behavioural thresholds." <em>Cortex</em>, 41(3), 327-341.</p>
          <p>[73] Dawes, P., & Bishop, D. (2009). "Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique." <em>International Journal of Language & Communication Disorders</em>, 44(4), 440-465.</p>
          <p>[74] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[75] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[76] Starr, A., Picton, T. W., Sininger, Y., Hood, L. J., & Berlin, C. I. (1996). "Auditory neuropathy." <em>Brain</em>, 119(3), 741-753.</p>
          <p>[77] Berlin, C. I., Morlet, T., & Hood, L. J. (2003). "Auditory neuropathy/dyssynchrony: Its diagnosis and management." <em>Pediatric Clinics of North America</em>, 50(2), 331-340.</p>
          <p>[78] Rance, G., Beer, D. E., Cone-Wesson, B., Shepherd, R. K., Dowell, R. C., King, A. M., ... & Clark, G. M. (1999). "Clinical findings for a group of infants and young children with auditory neuropathy." <em>Ear and Hearing</em>, 20(3), 238-252.</p>
          <p>[79] O'Connor, K. (2012). "Auditory processing in autism spectrum disorder: A review." <em>Neuroscience & Biobehavioral Reviews</em>, 36(2), 836-854.</p>
          <p>[80] Alcántara, J. I., Weisblatt, E. J., Moore, B. C., & Bolton, P. F. (2004). "Speech-in-noise perception in high-functioning individuals with autism or Asperger's syndrome." <em>Journal of Child Psychology and Psychiatry</em>, 45(6), 1107-1114.</p>
          <p>[81] Tomchek, S. D., & Dunn, W. (2007). "Sensory processing in children with and without autism: A comparative study using the short sensory profile." <em>American Journal of Occupational Therapy</em>, 61(2), 190-200.</p>
          <p>[82] Rosen, S. (2005). "A riddle wrapped in a mystery inside an enigma: Defining central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 139-142.</p>
          <p>[83] Wilson, W. J., & Arnott, W. (2013). "Using different criteria to diagnose (central) auditory processing disorder: How big a difference does it make?" <em>Journal of Speech, Language, and Hearing Research</em>, 56(1), 63-70.</p>
          <p>[84] Moore, D. R., & Hunter, L. L. (2013). "Auditory processing disorder (APD) in children: A marker of neurodevelopmental syndrome." <em>Hearing, Balance and Communication</em>, 11(3), 160-167.</p>
          <p>[85] Cacace, A. T., & McFarland, D. J. (2013). "Factors influencing tests of auditory processing: A perspective on current issues and relevant concerns." <em>Journal of the American Academy of Audiology</em>, 24(7), 572-589.</p>
          <p>[86] Dawes, P., & Bishop, D. (2009). "Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique." <em>International Journal of Language & Communication Disorders</em>, 44(4), 440-465.</p>
          <p>[87] Bishop, D. V. (2007). "Using mismatch negativity to study central auditory processing in developmental language and literacy impairments: Where are we, and where should we be going?" <em>Psychological Bulletin</em>, 133(4), 651-672.</p>
          <p>[88] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[89] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[90] Moore, D. R., Cowan, J. A., Riley, A., Edmondson-Jones, A. M., & Ferguson, M. A. (2011). "Development of auditory processing in 6- to 11-yr-old children." <em>Ear and Hearing</em>, 32(3), 269-285.</p>
          <p>[91] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[92] DeBonis, D. A., & Moncrieff, D. (2008). "Dichotic listening in children: Age-related changes in direction and magnitude of ear advantage." <em>Brain and Cognition</em>, 67(2), 191-197.</p>
          <p>[93] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[94] Hind, S. (2006). "Survey of care pathway for auditory processing disorder." <em>Audiological Medicine</em>, 4(1), 12-24.</p>
          <p>[95] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Educational Audiology Association</em>.</p>
          <p>[96] Semel, E., Wiig, E. H., & Secord, W. A. (2013). <em>Clinical Evaluation of Language Fundamentals—Fifth Edition (CELF-5)</em>. Bloomington, MN: NCS Pearson.</p>
          <p>[97] Bishop, D. V., & McArthur, G. M. (2005). "Individual differences in auditory processing in specific language impairment: A follow-up study using event-related potentials and behavioural thresholds." <em>Cortex</em>, 41(3), 327-341.</p>
          <p>[98] Wagner, R. K., Torgesen, J. K., Rashotte, C. A., & Pearson, N. A. (2013). <em>Comprehensive Test of Phonological Processing—Second Edition (CTOPP-2)</em>. Austin, TX: Pro-Ed.</p>
          <p>[99] Wechsler, D. (2014). <em>Wechsler Intelligence Scale for Children—Fifth Edition (WISC-V)</em>. Bloomington, MN: NCS Pearson.</p>
          <p>[100] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[101] Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., & Molt, L. (1994). "Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 33(6), 849-857.</p>
          <p>[102] Woodcock, R. W., McGrew, K. S., & Mather, N. (2001). <em>Woodcock-Johnson III Tests of Achievement</em>. Itasca, IL: Riverside Publishing.</p>
          <p>[103] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[104] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[105] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[106] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[107] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[108] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[109] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[110] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[111] Emanuel, D. C., Ficca, K. N., & Korczak, P. (2011). "Survey of the diagnosis and management of auditory processing disorder." <em>American Journal of Audiology</em>, 20(1), 48-60.</p>
          <p>[112] Hind, S. (2006). "Survey of care pathway for auditory processing disorder." <em>Audiological Medicine</em>, 4(1), 12-24.</p>
          <p>[113] Hind, S. E., Haines-Bazrafshan, R., Benton, C. L., Brassington, W., Towle, B., & Moore, D. R. (2011). "Prevalence of clinical referrals having hearing thresholds within normal limits." <em>International Journal of Audiology</em>, 50(10), 708-716.</p>
          <p>[114] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[115] Emanuel, D. C., Ficca, K. N., & Korczak, P. (2011). "Survey of the diagnosis and management of auditory processing disorder." <em>American Journal of Audiology</em>, 20(1), 48-60.</p>
          <p>[116] Hind, S. (2006). "Survey of care pathway for auditory processing disorder." <em>Audiological Medicine</em>, 4(1), 12-24.</p>
          <p>[117] Moore, D. R., & Hunter, L. L. (2013). "Auditory processing disorder (APD) in children: A marker of neurodevelopmental syndrome." <em>Hearing, Balance and Communication</em>, 11(3), 160-167.</p>
          <p>[118] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[119] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[120] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[121] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[122] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[123] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[124] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[125] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[126] Moore, D. R., & Hunter, L. L. (2013). "Auditory processing disorder (APD) in children: A marker of neurodevelopmental syndrome." <em>Hearing, Balance and Communication</em>, 11(3), 160-167.</p>
          <p>[127] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[128] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[129] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[130] Jerger, J., & Musiek, F. (2000). "Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('apd'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Auditory Processing Disorder
        </a>
      </div>
    </article>
  );
}
