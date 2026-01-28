interface ASDSpeechTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function ASDSpeechTherapy({ setCurrentArticle }: ASDSpeechTherapyProps) {
  return (
    <div className="max-w-4xl">
      {/* Header with back button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-[#0c264d] text-3xl">Speech and Language Therapy for Autism</h1>

        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          Therapies & Treatment
        </button>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Speech-language therapy is one of the most common interventions for autistic individuals, addressing communication 
          challenges across verbal and nonverbal modalities.<sup>[1][2][3]</sup> This comprehensive guide explores evidence-based 
          approaches, implementation strategies, and what families and individuals should know when pursuing speech therapy.
        </p>
      </div>

      {/* SECTION: Understanding Communication in Autism */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding Communication in Autism</h2>
        
        <p className="mb-6">
          Autistic individuals experience a wide range of communication profiles, from nonspeaking to highly verbal.<sup>[4][5]</sup> 
          Approximately 25-30% of autistic children are minimally verbal or nonspeaking, while others may have extensive 
          vocabularies but struggle with pragmatic language use.<sup>[6][7]</sup>
        </p>
        
        {/* Nested: Communication Challenges as Definition Grid */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Common Communication Patterns</h3>
          
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Expressive Language<sup>[8]</sup></div>
                <div className="text-sm">Using words, phrases, or sentences to communicate wants and needs</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Receptive Language<sup>[9]</sup></div>
                <div className="text-sm">Understanding spoken language, following directions, processing verbal information</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Pragmatic Language<sup>[10][11]</sup></div>
                <div className="text-sm">Social use of language—turn-taking, topic maintenance, reading context</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Echolalia<sup>[12][13]</sup></div>
                <div className="text-sm">Repeating words or phrases, immediate or delayed; often functional</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Prosody Differences<sup>[14]</sup></div>
                <div className="text-sm">Atypical intonation, rhythm, or stress patterns in speech</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Literal Interpretation<sup>[15]</sup></div>
                <div className="text-sm">Challenges with figurative language, sarcasm, idioms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Callout box */}
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
          <p className="text-sm">
            <strong>Neurodiversity Perspective:</strong> Communication differences are not inherently deficits.<sup>[16]</sup> 
            Therapy should focus on functional communication and quality of life rather than making autistic individuals 
            appear "more neurotypical."<sup>[17][18]</sup>
          </p>
        </div>
      </div>

      {/* SECTION: Role of Speech-Language Pathologists */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Role of Speech-Language Pathologists</h2>
        
        <p className="mb-6">
          Speech-language pathologists (SLPs) are trained professionals who assess, diagnose, and treat communication 
          disorders.<sup>[19]</sup> When working with autistic individuals, SLPs should have specialized training in autism 
          and neurodiversity-affirming practices.<sup>[20][21]</sup>
        </p>

        {/* What SLPs Address - as flowing prose with embedded terms */}
        <div className="bg-white p-5 rounded-md border-2 border-[#0c264d] mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What SLPs Address in Autism</h3>
          <p className="mb-3">
            SLPs work on <strong>functional communication</strong>—developing ways to express needs, wants, thoughts, and feelings 
            effectively.<sup>[22]</sup> This includes implementing <strong>alternative and augmentative communication (AAC)</strong> 
            systems for nonspeaking or minimally verbal individuals,<sup>[23][24]</sup> as well as teaching <strong>social 
            communication</strong> skills like conversation, perspective-taking, and understanding social contexts.<sup>[25]</sup>
          </p>
          <p>
            They also address <strong>language comprehension</strong> (understanding spoken and written language),<sup>[26]</sup> 
            <strong>speech sound production</strong> when articulation challenges are present,<sup>[27]</sup> and 
            <strong>feeding and swallowing</strong> difficulties related to oral-motor or sensory challenges.<sup>[28][29]</sup>
          </p>
        </div>
      </div>

      {/* SECTION: Assessment Process */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessment Process</h2>
        
        <p className="mb-6">
          Comprehensive speech-language assessment for autism should be individualized, strength-based, and culturally 
          responsive.<sup>[30][31]</sup> The evaluation includes gathering case history,<sup>[32]</sup> standardized testing 
          (though this may not capture autistic communication strengths),<sup>[33][34]</sup> natural observation across 
          settings,<sup>[35]</sup> dynamic assessment of how the individual responds to teaching,<sup>[36]</sup> and AAC 
          consideration when appropriate.<sup>[37]</sup>
        </p>

        {/* Questions as a highlighted checklist */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Essential Questions to Ask Your SLP</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>Do you have experience working with autistic individuals?<sup>[38]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>What is your philosophy regarding neurodiversity and autism?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>How will you incorporate the individual's interests and strengths?<sup>[39]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>Will you consider AAC if appropriate, or focus only on verbal speech?<sup>[40]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>How will you involve family members in the therapy process?<sup>[41]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>Are your goals functional and meaningful to daily life?<sup>[42]</sup></div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Evidence-Based Approaches */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evidence-Based Approaches</h2>

        {/* SUBSECTION: NDBIs */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Naturalistic Developmental Behavioral Interventions (NDBIs)</h3>
          <p className="mb-4">
            NDBIs are play-based, child-led interventions that blend developmental and behavioral approaches.<sup>[43][44]</sup> 
            These methods are considered gold-standard for early communication intervention in autism.<sup>[45]</sup>
          </p>
          
          {/* Three approaches side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-[#2abcd4] rounded p-3 bg-[#f0f9ff]">
              <div className="font-bold text-[#0c264d] mb-2">Pivotal Response Treatment (PRT)</div>
              <p className="text-sm">Focuses on pivotal areas like motivation and self-initiation to create broad impacts<sup>[46][47]</sup></p>
            </div>
            <div className="border border-[#2abcd4] rounded p-3 bg-[#f0f9ff]">
              <div className="font-bold text-[#0c264d] mb-2">Early Start Denver Model (ESDM)</div>
              <p className="text-sm">Comprehensive intervention for toddlers combining relationship-based and behavioral strategies<sup>[48][49]</sup></p>
            </div>
            <div className="border border-[#2abcd4] rounded p-3 bg-[#f0f9ff]">
              <div className="font-bold text-[#0c264d] mb-2">JASPER</div>
              <p className="text-sm">Targets foundational social communication skills: Joint Attention, Symbolic Play, Engagement, and Regulation<sup>[50][51]</sup></p>
            </div>
          </div>
        </div>

        {/* SUBSECTION: AAC */}
        <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#2abcd4] mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Augmentative and Alternative Communication (AAC)</h3>
          <p className="mb-4">
            AAC includes any form of communication beyond verbal speech.<sup>[52][53]</sup>
          </p>
          
          {/* Key research finding callout */}
          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-3 rounded mb-4">
            <p className="text-sm">
              <strong>Critical Research Finding:</strong> AAC does not inhibit speech development and often facilitates it.<sup>[54][55][56]</sup>
            </p>
          </div>

          {/* AAC Options as a visual progression */}
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="text-[#0c264d] font-bold mb-3">AAC Technology Levels</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="bg-[#0c264d] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">1</div>
                <div>
                  <div className="font-bold text-[#0c264d]">No-Tech AAC</div>
                  <div className="text-sm">Gestures, sign language, body language<sup>[57]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#0c264d] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">2</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Low-Tech AAC</div>
                  <div className="text-sm">Picture Exchange Communication System (PECS), communication boards, picture cards<sup>[58][59]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#0c264d] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">3</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Mid-Tech AAC</div>
                  <div className="text-sm">Simple voice output devices, single-message communicators<sup>[60]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#0c264d] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">4</div>
                <div>
                  <div className="font-bold text-[#0c264d]">High-Tech AAC</div>
                  <div className="text-sm">Speech-generating devices (SGDs), tablet apps like Proloquo2Go, TouchChat, LAMP Words for Life<sup>[61][62]</sup></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUBSECTION: Other Approaches - simpler presentation */}
        <div className="space-y-4">
          <div>
            <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Social Communication Interventions</h3>
            <p className="text-sm">
              Interventions include Social Stories™ (written descriptions of social situations),<sup>[63][64]</sup> 
              video modeling (learning through watching),<sup>[65][66]</sup> script training (practicing conversation 
              sequences),<sup>[67]</sup> and peer-mediated interventions where neurotypical peers learn to support 
              autistic communication.<sup>[68][69]</sup>
            </p>
          </div>

          <div>
            <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Parent-Mediated Interventions</h3>
            <p className="text-sm">
              Training parents and caregivers to support communication throughout daily routines is highly effective.<sup>[70][71][72]</sup> 
              Programs like Hanen's More Than Words teach parents responsive communication strategies that can be integrated 
              naturally into everyday activities.<sup>[73][74]</sup>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: Implementation */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Implementation: What to Expect</h2>
        
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Therapy Settings & Their Advantages</h3>
        
        {/* Side-by-side setting cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-md border-2 border-[#0c264d] shadow-sm">
            <h4 className="text-[#0c264d] font-bold mb-2">Home-Based</h4>
            <p className="text-sm mb-2">Facilitates generalization, involves family naturally, uses familiar materials and comfortable environment<sup>[76]</sup></p>
          </div>

          <div className="bg-white p-4 rounded-md border-2 border-[#0c264d] shadow-sm">
            <h4 className="text-[#0c264d] font-bold mb-2">Clinic-Based</h4>
            <p className="text-sm mb-2">Access to specialized equipment and materials, controlled environment, fewer distractions<sup>[77]</sup></p>
          </div>

          <div className="bg-white p-4 rounded-md border-2 border-[#0c264d] shadow-sm">
            <h4 className="text-[#0c264d] font-bold mb-2">School-Based</h4>
            <p className="text-sm mb-2">Supports educational goals, collaboration with teachers, peer interaction opportunities, part of IEP services<sup>[78]</sup></p>
          </div>

          <div className="bg-white p-4 rounded-md border-2 border-[#0c264d] shadow-sm">
            <h4 className="text-[#0c264d] font-bold mb-2">Teletherapy</h4>
            <p className="text-sm mb-2">Increased accessibility, reduced travel burden, home comfort, flexible scheduling<sup>[79][80]</sup></p>
          </div>
        </div>

        <p className="mb-6">
          <strong>Typical frequency:</strong> 1-5 sessions per week, each 30-60 minutes, based on individual needs.<sup>[81]</sup> 
          More frequent, shorter sessions often work better for young children.<sup>[82]</sup>
        </p>

        {/* Red Flags - prominent warning box */}
        <div className="bg-[#ffd166] p-5 rounded-md border-2 border-[#0c264d] shadow-md">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
            <span className="text-2xl">⚠️</span> Red Flags in Speech Therapy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Withholding AAC to "force" verbal speech<sup>[83]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Suppressing echolalia without understanding its function<sup>[84][85]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Rigid, compliance-based approaches vs. play-based learning<sup>[86]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Ignoring the individual's interests and preferences<sup>[87]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Goals focused on appearing "normal" vs. functional communication<sup>[88]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Lack of family involvement or home programming<sup>[89]</sup></span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Accessing Services */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Accessing Speech Therapy Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Insurance */}
          <div className="bg-white p-4 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Insurance Coverage</h3>
            <p className="text-sm">
              Many insurance plans cover speech therapy for autism, especially following autism insurance mandates in most U.S. 
              states.<sup>[90][91]</sup> Coverage varies by state and plan.<sup>[92]</sup>
            </p>
          </div>

          {/* Public Programs */}
          <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Public Programs</h3>
            <p className="text-sm mb-2">
              <strong>Ages 0-3:</strong> Early Intervention through Part C of IDEA<sup>[93]</sup><br/>
              <strong>Ages 3-21:</strong> School-based services through IEPs<sup>[94]</sup><br/>
              <strong>All ages:</strong> Medicaid coverage<sup>[95]</sup>
            </p>
          </div>

          {/* Private Pay */}
          <div className="bg-white p-4 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Private Pay</h3>
            <p className="text-sm">
              Typically $100-$250 per session, varying by location and provider credentials.<sup>[96]</sup> Some SLPs offer 
              sliding scale fees or payment plans.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: Supporting Communication at Home */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Supporting Communication at Home</h2>
        
        <div className="bg-white p-5 rounded-md shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Family Strategies That Make a Difference</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Follow Their Lead</div>
                  <div className="text-sm">Join in their activities and interests<sup>[97]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Create Opportunities</div>
                  <div className="text-sm">Set up situations where communication is needed and wanted<sup>[98]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Use Visual Supports</div>
                  <div className="text-sm">Pictures, schedules, and visual aids support understanding<sup>[99]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Model Language</div>
                  <div className="text-sm">Narrate activities, expand utterances, provide language models<sup>[100]</sup></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Allow Processing Time</div>
                  <div className="text-sm">Give extra time to respond; don't rush<sup>[101]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">6</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Respect All Communication</div>
                  <div className="text-sm">Honor gestures, vocalizations, AAC, and other forms of expression<sup>[102]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">7</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Reduce Demands</div>
                  <div className="text-sm">Balance teaching with connection and enjoyment<sup>[103]</sup></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Research and Future Directions */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Current Research and Future Directions</h2>
        
        <p className="mb-4">
          Research continues to refine our understanding of communication intervention in autism.<sup>[104]</sup> Current areas 
          of focus include identifying best practices for minimally verbal individuals past age 5,<sup>[105][106]</sup> integrating 
          technology like apps, VR, and AI,<sup>[107][108]</sup> developing literacy-based AAC approaches,<sup>[109]</sup> 
          adapting interventions for diverse cultural and linguistic backgrounds,<sup>[110][111]</sup> and centering autistic 
          voices in determining communication priorities and outcomes.<sup>[112][113]</sup>
        </p>
      </div>

      {/* Bottom back button - positioned to the right above References */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          Therapies & Treatment
        </button>
      </div>

      {/* References */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <ol className="list-decimal ml-6 space-y-2 text-sm">
          <li>Paul, R., & Norbury, C. (2012). Language disorders from infancy through adolescence (4th ed.). Elsevier.</li>
          <li>American Speech-Language-Hearing Association. (2006). Guidelines for speech-language pathologists in diagnosis, assessment, and treatment of autism spectrum disorders across the life span.</li>
          <li>National Research Council. (2001). Educating children with autism. National Academy Press.</li>
          <li>Tager-Flusberg, H., & Kasari, C. (2013). Minimally verbal school-aged children with autism spectrum disorder. Journal of Autism and Developmental Disorders, 43(4), 729-738.</li>
          <li>Wodka, E. L., Mathy, P., & Kalb, L. (2013). Predictors of phrase and fluent speech in children with autism and severe language delay. Pediatrics, 131(4), e1128-e1134.</li>
          <li>Anderson, D. K., Lord, C., Risi, S., et al. (2007). Patterns of growth in verbal abilities among children with autism spectrum disorder. Journal of Consulting and Clinical Psychology, 75(4), 594-604.</li>
          <li>Rose, V., Trembath, D., Keen, D., & Paynter, J. (2016). The proportion of minimally verbal children with autism spectrum disorder in a community-based early intervention programme. Journal of Intellectual Disability Research, 60(5), 464-477.</li>
          <li>Gernsbacher, M. A., Morson, E. M., & Grace, E. J. (2016). Language development in autism. In Neurobiology of language (pp. 879-886). Academic Press.</li>
          <li>Hudry, K., Leadbitter, K., Temple, K., et al. (2010). Preschoolers with autism show greater impairment in receptive compared with expressive language abilities. International Journal of Language & Communication Disorders, 45(6), 681-690.</li>
          <li>Adams, C. (2002). Practitioner review: The assessment of language pragmatics. Journal of Child Psychology and Psychiatry, 43(8), 973-987.</li>
          <li>Volden, J., & Phillips, L. (2010). Measuring pragmatic language in speakers with autism spectrum disorders. American Journal of Speech-Language Pathology, 19(3), 204-212.</li>
          <li>Prizant, B. M., & Duchan, J. F. (1981). The functions of immediate echolalia in autistic children. Journal of Speech and Hearing Disorders, 46(3), 241-249.</li>
          <li>Stiegler, L. N. (2015). Examining the echolalia literature: Where do speech-language pathologists stand? American Journal of Speech-Language Pathology, 24(4), 750-762.</li>
          <li>McCann, J., & Peppé, S. (2003). Prosody in autism spectrum disorders. International Journal of Language & Communication Disorders, 38(3), 325-350.</li>
          <li>Norbury, C. F. (2005). The relationship between theory of mind and metaphor. British Journal of Developmental Psychology, 23(3), 383-399.</li>
          <li>Milton, D. E. M. (2012). On the ontological status of autism: The 'double empathy problem'. Disability & Society, 27(6), 883-887.</li>
          <li>Kapp, S. K. (Ed.). (2019). Autistic community and the neurodiversity movement: Stories from the frontline. Palgrave Macmillan.</li>
          <li>Dwyer, P. (2022). The neurodiversity approach(es): What are they and what do they mean for researchers? Human Development, 66(2), 73-92.</li>
          <li>American Speech-Language-Hearing Association. (n.d.). Speech-language pathologists. Retrieved from www.asha.org</li>
          <li>Bottema-Beutel, K., Kapp, S. K., Lester, J. N., et al. (2021). Avoiding ableist language: Suggestions for autism researchers. Autism in Adulthood, 3(1), 18-29.</li>
          <li>Pearson, J. N., & Rose, K. (2021). A conceptual analysis of autistic masking. Autism in Adulthood, 3(1), 17-24.</li>
          <li>Flippin, M., Reszka, S., & Watson, L. R. (2010). Effectiveness of the Picture Exchange Communication System (PECS) on communication and speech for children with autism spectrum disorders. American Journal of Speech-Language Pathology, 19(2), 178-195.</li>
          <li>Ganz, J. B., Davis, J. L., Lund, E. M., et al. (2012). Meta-analysis of PECS with individuals with ASD. American Journal of Intellectual and Developmental Disabilities, 117(4), 293-314.</li>
          <li>Logan, K., Iacono, T., & Trembath, D. (2017). A systematic review of research into aided AAC to increase social-communicative functions in children with autism spectrum disorder. Augmentative and Alternative Communication, 33(1), 51-64.</li>
          <li>Kasari, C., Brady, N., Lord, C., & Tager-Flusberg, H. (2013). Assessing the minimally verbal school-aged child with autism spectrum disorder. Autism Research, 6(6), 479-493.</li>
          <li>Ellis Weismer, S., Lord, C., & Esler, A. (2010). Early language patterns of toddlers on the autism spectrum. Journal of Child Psychology and Psychiatry, 51(9), 1021-1029.</li>
          <li>Shriberg, L. D., Paul, R., Black, L. M., & Van Santen, J. P. (2011). The hypothesis of apraxia of speech in children with autism spectrum disorder. Journal of Autism and Developmental Disorders, 41(4), 405-426.</li>
          <li>Sharp, W. G., Jaquess, D. L., Morton, J. F., & Herzinger, C. V. (2010). Pediatric feeding disorders: A quantitative synthesis of treatment outcomes. Clinical Child and Family Psychology Review, 13(4), 348-365.</li>
          <li>Ledford, J. R., & Gast, D. L. (2006). Feeding problems in children with autism spectrum disorders. Focus on Autism and Other Developmental Disabilities, 21(3), 153-166.</li>
          <li>Crais, E. R., Watson, L. R., & Baranek, G. T. (2009). Use of gesture development in profiling children's prelinguistic communication skills. American Journal of Speech-Language Pathology, 18(1), 95-108.</li>
          <li>Prelock, P. A., Hutchins, T., & Glascoe, F. P. (2008). Speech-language impairment: How to identify the most common and least diagnosed disability of childhood. The Medscape Journal of Medicine, 10(6), 136.</li>
          <li>Paul, R., Chawarska, K., Cicchetti, D., & Volkmar, F. (2008). Language outcomes of toddlers with autism spectrum disorders. In A. M. Wetherby et al. (Eds.), Communication in autism (pp. 37-58). Guilford Press.</li>
          <li>Eigsti, I. M., de Marchena, A. B., Schuh, J. M., & Kelley, E. (2011). Language acquisition in autism spectrum disorders. Journal of Neurodevelopmental Disorders, 3(1), 52-64.</li>
          <li>Tager-Flusberg, H. (2006). Defining language phenotypes in autism. Clinical Neuroscience Research, 6(3-4), 219-224.</li>
          <li>Wetherby, A. M., & Prizant, B. M. (2000). Autism spectrum disorders: A transactional developmental perspective. Paul H. Brookes Publishing.</li>
          <li>Hasson, N., & Joffe, V. (2007). The case for dynamic assessment in speech and language therapy. Child Language Teaching and Therapy, 23(1), 9-25.</li>
          <li>Beukelman, D. R., & Mirenda, P. (2013). Augmentative & alternative communication: Supporting children and adults with complex communication needs (4th ed.). Paul H. Brookes Publishing.</li>
          <li>Betz, A. M., Higbee, T. S., & Reagon, K. A. (2008). Using joint activity schedules to promote peer engagement in preschoolers with autism. Journal of Applied Behavior Analysis, 41(2), 237-241.</li>
          <li>Koegel, L. K., Koegel, R. L., Harrower, J. K., & Carter, C. M. (1999). Pivotal response intervention I: Overview of approach. Journal of the Association for Persons with Severe Handicaps, 24(3), 174-185.</li>
          <li>Romski, M., & Sevcik, R. A. (2005). Augmentative communication and early intervention: Myths and realities. Infants & Young Children, 18(3), 174-185.</li>
          <li>McConachie, H., & Diggle, T. (2007). Parent implemented early intervention for young children with autism spectrum disorder. Journal of Evaluation in Clinical Practice, 13(1), 120-129.</li>
          <li>Schlosser, R. W., & Raghavendra, P. (2004). Evidence-based practice in augmentative and alternative communication. Augmentative and Alternative Communication, 20(1), 1-21.</li>
          <li>Schreibman, L., Dawson, G., Stahmer, A. C., et al. (2015). Naturalistic developmental behavioral interventions: Empirically validated treatments for autism spectrum disorder. Journal of Autism and Developmental Disorders, 45(8), 2411-2428.</li>
          <li>Tiede, G., & Walton, K. M. (2019). Meta-analysis of naturalistic developmental behavioral interventions for young children with autism spectrum disorder. Autism, 23(8), 2080-2095.</li>
          <li>Sandbank, M., Bottema-Beutel, K., Crowley, S., et al. (2020). Project AIM: Autism intervention meta-analysis for studies of young children. Psychological Bulletin, 146(1), 1-29.</li>
          <li>Koegel, R. L., & Koegel, L. K. (2006). Pivotal Response Treatments for autism. Paul H. Brookes Publishing.</li>
          <li>Koegel, L. K., Singh, A. K., & Koegel, R. L. (2010). Improving motivation for academics in children with autism. Journal of Autism and Developmental Disorders, 40(9), 1057-1066.</li>
          <li>Dawson, G., Rogers, S., Munson, J., et al. (2010). Randomized, controlled trial of an intervention for toddlers with autism: The Early Start Denver Model. Pediatrics, 125(1), e17-e23.</li>
          <li>Rogers, S. J., Estes, A., Lord, C., et al. (2012). Effects of a brief Early Start Denver Model (ESDM)–based parent intervention on toddlers at risk for autism spectrum disorders. Journal of the American Academy of Child & Adolescent Psychiatry, 51(10), 1052-1065.</li>
          <li>Kasari, C., Freeman, S., & Paparella, T. (2006). Joint attention and symbolic play in young children with autism: A randomized controlled intervention study. Journal of Child Psychology and Psychiatry, 47(6), 611-620.</li>
          <li>Goods, K. S., Ishijima, E., Chang, Y. C., & Kasari, C. (2013). Preschool based JASPER intervention in minimally verbal children with autism: Pilot RCT. Journal of Autism and Developmental Disorders, 43(5), 1050-1056.</li>
          <li>Light, J., & McNaughton, D. (2014). Communicative competence for individuals who require augmentative and alternative communication. Augmentative and Alternative Communication, 30(1), 1-18.</li>
          <li>Beukelman, D. R., & Light, J. C. (2020). Augmentative & alternative communication: Supporting children and adults with complex communication needs (5th ed.). Paul H. Brookes Publishing.</li>
          <li>Millar, D. C., Light, J. C., & Schlosser, R. W. (2006). The impact of augmentative and alternative communication intervention on the speech production of individuals with developmental disabilities. Journal of Speech, Language, and Hearing Research, 49(2), 248-264.</li>
          <li>Schlosser, R. W., & Wendt, O. (2008). Effects of augmentative and alternative communication intervention on speech production in children with autism. American Journal of Speech-Language Pathology, 17(3), 212-230.</li>
          <li>Kasari, C., Kaiser, A., Goods, K., et al. (2014). Communication interventions for minimally verbal children with autism: Sequential multiple assignment randomized trial. Journal of the American Academy of Child & Adolescent Psychiatry, 53(6), 635-646.</li>
          <li>Grove, N., & Walker, M. (1990). The Makaton Vocabulary: Using manual signs and graphic symbols to develop interpersonal communication. Augmentative and Alternative Communication, 6(1), 15-28.</li>
          <li>Bondy, A., & Frost, L. (2001). The Picture Exchange Communication System. Behavior Modification, 25(5), 725-744.</li>
          <li>Carr, D., & Felce, J. (2007). The effects of PECS teaching to phase III on the communicative interactions between children with autism and their teachers. Journal of Autism and Developmental Disorders, 37(4), 724-737.</li>
          <li>Schepis, M. M., Reid, D. H., Behrmann, M. M., & Sutton, K. A. (1998). Increasing communicative interactions of young children with autism using a voice output communication aid and naturalistic teaching. Journal of Applied Behavior Analysis, 31(4), 561-578.</li>
          <li>McNaughton, D., & Light, J. (2013). The iPad and mobile technology revolution: Benefits and challenges for individuals who require augmentative and alternative communication. Augmentative and Alternative Communication, 29(2), 107-116.</li>
          <li>van der Meer, L., Kagohara, D., Achmadi, D., et al. (2012). Speech-generating devices versus manual signing for children with developmental disabilities. Research in Developmental Disabilities, 33(5), 1658-1669.</li>
          <li>Gray, C. (2010). The new social story book (10th anniversary ed.). Future Horizons.</li>
          <li>Kokina, A., & Kern, L. (2010). Social Story interventions for students with autism spectrum disorders: A meta-analysis. Journal of Autism and Developmental Disorders, 40(7), 812-826.</li>
          <li>Bellini, S., & Akullian, J. (2007). A meta-analysis of video modeling and video self-modeling interventions for children and adolescents with autism spectrum disorders. Exceptional Children, 73(3), 264-287.</li>
          <li>Wang, S. Y., Cui, Y., & Parrila, R. (2011). Examining the effectiveness of peer-mediated and video-modeling social skills interventions for children with autism spectrum disorders. Research in Autism Spectrum Disorders, 5(1), 562-569.</li>
          <li>Krantz, P. J., & McClannahan, L. E. (1998). Social interaction skills for children with autism: A script-fading procedure for beginning readers. Journal of Applied Behavior Analysis, 31(2), 191-202.</li>
          <li>Chan, J. M., Lang, R., Rispoli, M., et al. (2009). Use of peer-mediated interventions in the treatment of autism spectrum disorders: A systematic review. Research in Autism Spectrum Disorders, 3(4), 876-889.</li>
          <li>Watkins, L., O'Reilly, M., Kuhn, M., et al. (2015). A review of peer-mediated social interaction interventions for students with autism in inclusive settings. Journal of Autism and Developmental Disorders, 45(4), 1070-1083.</li>
          <li>Hampton, L. H., & Kaiser, A. P. (2016). Intervention effects on spoken-language outcomes for children with autism: A systematic review and meta-analysis. Journal of Intellectual Disability Research, 60(5), 444-463.</li>
          <li>Oono, I. P., Honey, E. J., & McConachie, H. (2013). Parent-mediated early intervention for young children with autism spectrum disorders (ASD). Evidence-Based Child Health, 8(6), 2380-2479.</li>
          <li>Pickles, A., Le Couteur, A., Leadbitter, K., et al. (2016). Parent-mediated social communication therapy for young children with autism (PACT): Long-term follow-up of a randomised controlled trial. The Lancet, 388(10059), 2501-2509.</li>
          <li>Sussman, F. (2012). More than words: A parent's guide to building interaction and language skills for children with autism spectrum disorder or social communication difficulties (2nd ed.). Hanen Centre.</li>
          <li>Carter, A. S., Messinger, D. S., Stone, W. L., et al. (2011). A randomized controlled trial of Hanen's 'More Than Words' in toddlers with early autism symptoms. Journal of Child Psychology and Psychiatry, 52(7), 741-752.</li>
          <li>Cowan, R. J., & Allen, K. D. (2007). Using naturalistic procedures to enhance learning in individuals with autism: A focus on generalized teaching within the school setting. Psychology in the Schools, 44(7), 701-715.</li>
          <li>Ingersoll, B., & Dvortcsak, A. (2010). Teaching social communication to children with autism: A practitioner's guide to parent training. Guilford Press.</li>
          <li>Williams, M. E., & Shellenberger, S. (1996). How does your engine run? A leader's guide to the Alert Program for Self-Regulation. TherapyWorks.</li>
          <li>Ruble, L. A., McGrew, J. H., & Toland, M. D. (2012). Goal attainment scaling as an outcome measure in randomized controlled trials of psychosocial interventions in autism. Journal of Autism and Developmental Disorders, 42(9), 1974-1983.</li>
          <li>Sutherland, R., Trembath, D., & Roberts, J. (2018). Telehealth and autism: A systematic search and review of the literature. International Journal of Speech-Language Pathology, 20(3), 324-336.</li>
          <li>Boisvert, M., Lang, R., Andrianopoulos, M., & Boscardin, M. L. (2010). Telepractice in the assessment and treatment of individuals with autism spectrum disorders: A systematic review. Developmental Neurorehabilitation, 13(6), 423-432.</li>
          <li>Warren, Z., McPheeters, M. L., Sathe, N., et al. (2011). A systematic review of early intensive intervention for autism spectrum disorders. Pediatrics, 127(5), e1303-e1311.</li>
          <li>Reed, P., Osborne, L. A., & Corness, M. (2007). Brief report: Relative effectiveness of different home-based behavioral approaches to early teaching intervention. Journal of Autism and Developmental Disorders, 37(9), 1815-1821.</li>
          <li>Cress, C. J., & Marvin, C. A. (2003). Common questions about AAC services in early intervention. Augmentative and Alternative Communication, 19(4), 254-272.</li>
          <li>Grossi, D., Marcone, R., Cinquegrana, T., & Gallucci, M. (2013). On the differential nature of induced and incidental echolalia in autism. Journal of Intellectual Disability Research, 57(10), 903-912.</li>
          <li>Stiegler, L. N. (2015). Examining the echolalia literature: Where do speech-language pathologists stand? American Journal of Speech-Language Pathology, 24(4), 750-762.</li>
          <li>Ingersoll, B., & Schreibman, L. (2006). Teaching reciprocal imitation skills to young children with autism using a naturalistic behavioral approach. Journal of Autism and Developmental Disorders, 36(4), 487-505.</li>
          <li>Baker, J. E. (2003). Social skills training for children and adolescents with Asperger syndrome and social-communication problems. Autism Asperger Publishing Company.</li>
          <li>Bottema-Beutel, K., Kapp, S. K., Lester, J. N., et al. (2021). Avoiding ableist language: Suggestions for autism researchers. Autism in Adulthood, 3(1), 18-29.</li>
          <li>Brookman-Frazee, L., Stahmer, A. C., Baker-Ericzén, M. J., & Tsai, K. (2006). Parental perspectives on their child's relationships with therapists: Building a therapeutic alliance in parent training programs. School Psychology Quarterly, 21(1), 100.</li>
          <li>Autism Speaks. (n.d.). State initiatives. Retrieved from www.autismspeaks.org</li>
          <li>Mandell, D. S., Barry, C. L., Marcus, S. C., et al. (2016). Effects of autism spectrum disorder insurance mandates on the treated prevalence of autism spectrum disorder. JAMA Pediatrics, 170(9), 887-893.</li>
          <li>Parish, S. L., Thomas, K. C., Williams, C. S., & Crossman, M. K. (2015). Autism and families' financial burden: The association with health insurance coverage. American Journal on Intellectual and Developmental Disabilities, 120(2), 166-175.</li>
          <li>Individuals with Disabilities Education Act (IDEA), 20 U.S.C. § 1400 (2004).</li>
          <li>Yell, M. L., Katsiyannis, A., Drasgow, E., & Herbst, M. (2003). Developing legally correct and educationally appropriate programs for students with autism spectrum disorders. Focus on Autism and Other Developmental Disabilities, 18(3), 182-191.</li>
          <li>Centers for Medicare & Medicaid Services. (n.d.). Early and Periodic Screening, Diagnostic and Treatment. Retrieved from www.medicaid.gov</li>
          <li>American Speech-Language-Hearing Association. (2020). Private practice fee guide. Retrieved from www.asha.org</li>
          <li>Woods, J. J., & Wetherby, A. M. (2003). Early identification of and intervention for infants and toddlers who are at risk for autism spectrum disorder. Language, Speech, and Hearing Services in Schools, 34(3), 180-193.</li>
          <li>Prizant, B. M., Wetherby, A. M., Rubin, E., et al. (2006). The SCERTS Model: A comprehensive educational approach for children with autism spectrum disorders. Paul H. Brookes Publishing.</li>
          <li>Hodgdon, L. A. (1995). Visual strategies for improving communication: Practical supports for school and home. QuirkRoberts Publishing.</li>
          <li>Girolametto, L., Weitzman, E., & Clements-Baartman, J. (1998). Vocabulary intervention for children with Down syndrome: Parent training using focused stimulation. Infant-Toddler Intervention, 8(2), 109-125.</li>
          <li>Paul, R. (2008). Interventions to improve communication in autism. Child and Adolescent Psychiatric Clinics of North America, 17(4), 835-856.</li>
          <li>Iacono, T., Trembath, D., & Erickson, S. (2016). The role of augmentative and alternative communication for children with autism: Current status and future trends. Neuropsychiatric Disease and Treatment, 12, 2349-2361.</li>
          <li>Greenspan, S. I., & Wieder, S. (2006). Engaging autism: Using the Floortime approach to help children relate, communicate, and think. Da Capo Press.</li>
          <li>Lord, C., Charman, T., Havdahl, A., et al. (2022). The Lancet Commission on the future of care and clinical research in autism. The Lancet, 399(10321), 271-334.</li>
          <li>Tager-Flusberg, H., & Kasari, C. (2013). Minimally verbal school-aged children with autism spectrum disorder: The neglected end of the spectrum. Autism Research, 6(6), 468-478.</li>
          <li>Chenausky, K., Norton, A., Tager-Flusberg, H., & Schlaug, G. (2016). Auditory-motor mapping training: Comparing the effects of a novel speech treatment to a control treatment for minimally verbal children with autism. PLoS One, 11(11), e0164930.</li>
          <li>Grynszpan, O., Weiss, P. L., Perez-Diaz, F., & Gal, E. (2014). Innovative technology-based interventions for autism spectrum disorders: A meta-analysis. Autism, 18(4), 346-361.</li>
          <li>Bernardini, S., Porayska-Pomsta, K., & Smith, T. J. (2014). ECHOES: An intelligent serious game for fostering social communication in children with autism. Information Sciences, 264, 41-60.</li>
          <li>Hanser, G. A., & Erickson, K. A. (2007). Integrated word identification and communication instruction for students with complex communication needs: Preliminary results. Focus on Autism and Other Developmental Disabilities, 22(4), 268-278.</li>
          <li>Magaña, S., Lopez, K., Aguinaga, A., & Morton, H. (2013). Access to diagnosis and treatment services among Latino children with autism spectrum disorders. Intellectual and Developmental Disabilities, 51(3), 141-153.</li>
          <li>Tek, S., & Landa, R. J. (2012). Differences in autism symptoms between minority and non-minority toddlers. Journal of Autism and Developmental Disorders, 42(9), 1967-1973.</li>
          <li>Fletcher-Watson, S., Adams, J., Brook, K., et al. (2019). Making the future together: Shaping autism research through meaningful participation. Autism, 23(4), 943-953.</li>
          <li>Milton, D., & Bracher, M. (2013). Autistics speak but are they heard? Medical Sociology Online, 7(2), 61-69.</li>
        </ol>
      </div>
    </div>
  );
}
