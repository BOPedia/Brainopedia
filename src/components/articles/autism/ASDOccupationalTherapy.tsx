interface ASDOccupationalTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function ASDOccupationalTherapy({ setCurrentArticle }: ASDOccupationalTherapyProps) {
  return (
    <div className="max-w-4xl">
      {/* Header with back button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-[#0c264d] text-3xl">Occupational Therapy for Autism</h1>

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
          Occupational therapy (OT) helps autistic individuals develop skills for daily living, sensory processing, motor 
          coordination, and participation in meaningful activities.<sup className="text-[#10b981]">[1][2][3]</sup> This comprehensive guide explores 
          evidence-based OT approaches, what to expect, and how to maximize therapy outcomes.
        </p>
      </div>

      {/* SECTION: Understanding OT in Autism */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding Occupational Therapy</h2>
        
        <p className="mb-6">
          "Occupation" in OT refers to any meaningful activity a person engages in throughout daily life, from self-care 
          to play to work.<sup className="text-[#10b981]">[4]</sup> For autistic individuals, OT addresses the unique ways sensory, motor, and cognitive 
          differences impact participation in these activities.<sup className="text-[#10b981]">[5][6]</sup>
        </p>

        {/* Nested: Primary Focus Areas as Definition Grid */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Primary Focus Areas</h3>
          
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Sensory Processing<sup className="text-[#10b981]">[7][8]</sup></div>
                <div className="text-sm">Understanding and responding to sensory input across all systems</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Fine Motor Skills<sup className="text-[#10b981]">[9]</sup></div>
                <div className="text-sm">Hand strength, coordination, handwriting, tool use</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Gross Motor Skills<sup className="text-[#10b981]">[10]</sup></div>
                <div className="text-sm">Balance, coordination, body awareness</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Self-Care Skills<sup className="text-[#10b981]">[11]</sup></div>
                <div className="text-sm">Dressing, grooming, toileting, eating</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Executive Functioning<sup className="text-[#10b981]">[12][13]</sup></div>
                <div className="text-sm">Planning, organization, time management</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Play & Social Participation<sup className="text-[#10b981]">[14][15]</sup></div>
                <div className="text-sm">Age-appropriate play skills, engaging with peers and community</div>
              </div>
            </div>
          </div>
        </div>

        {/* Callout box */}
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
          <p className="text-sm">
            <strong>Neurodiversity Perspective:</strong> Neurodiversity-affirming OT recognizes that autistic individuals process the world differently, not deficiently.<sup className="text-[#10b981]">[16][17]</sup> 
            The goal is not to make someone "less autistic" but to support their ability to engage in activities they find 
            meaningful while respecting their neurological differences.<sup className="text-[#10b981]">[18]</sup>
          </p>
        </div>
      </div>

      {/* SECTION: Sensory Processing */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sensory Processing and Integration</h2>
        
        <p className="mb-6">
          The majority of autistic individuals experience sensory processing differences, including hyper-sensitivity, 
          hypo-sensitivity, or seeking behaviors across sensory systems.<sup className="text-[#10b981]">[19][20][21]</sup>
        </p>

        {/* The Eight Sensory Systems */}
        <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#2abcd4] mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">The Eight Sensory Systems</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded border-l-2 border-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-1">Visual<sup className="text-[#10b981]">[22]</sup></div>
              <div className="text-sm">Sight, light sensitivity, visual processing</div>
            </div>
            <div className="bg-white p-3 rounded border-l-2 border-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-1">Auditory<sup className="text-[#10b981]">[23]</sup></div>
              <div className="text-sm">Sound sensitivity, auditory processing</div>
            </div>
            <div className="bg-white p-3 rounded border-l-2 border-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-1">Tactile<sup className="text-[#10b981]">[24]</sup></div>
              <div className="text-sm">Touch, texture, temperature, pain</div>
            </div>
            <div className="bg-white p-3 rounded border-l-2 border-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-1">Olfactory<sup className="text-[#10b981]">[25]</sup></div>
              <div className="text-sm">Smell sensitivity and processing</div>
            </div>
            <div className="bg-white p-3 rounded border-l-2 border-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-1">Gustatory<sup className="text-[#10b981]">[26]</sup></div>
              <div className="text-sm">Taste, food textures, oral sensitivity</div>
            </div>
            <div className="bg-white p-3 rounded border-l-2 border-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-1">Vestibular<sup className="text-[#10b981]">[27]</sup></div>
              <div className="text-sm">Balance, movement, spatial orientation</div>
            </div>
            <div className="bg-white p-3 rounded border-l-2 border-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-1">Proprioceptive<sup className="text-[#10b981]">[28]</sup></div>
              <div className="text-sm">Body awareness, where body is in space</div>
            </div>
            <div className="bg-white p-3 rounded border-l-2 border-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-1">Interoceptive<sup className="text-[#10b981]">[29][30]</sup></div>
              <div className="text-sm">Internal body signals (hunger, thirst, bathroom)</div>
            </div>
          </div>
        </div>

        {/* SUBSECTION: Ayres Sensory Integration */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ayres Sensory Integration® (ASI)</h3>
          <p className="mb-4">
            ASI is a specific frame of reference within OT that uses play-based, child-directed activities to help the nervous 
            system organize sensory information more effectively.<sup className="text-[#10b981]">[31][32]</sup> It requires specialized certification and 
            specific equipment.<sup className="text-[#10b981]">[33]</sup>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-[#f0f9ff] p-3 rounded">
              <div className="font-bold text-[#0c264d] mb-2 text-sm">Evidence Base</div>
              <div className="text-sm">Moderate evidence supports ASI for improving individualized goals in autism<sup className="text-[#10b981]">[34][35][36]</sup></div>
            </div>
            <div className="bg-[#f0f9ff] p-3 rounded">
              <div className="font-bold text-[#0c264d] mb-2 text-sm">Key Principles</div>
              <div className="text-sm">Child-led, playful, just-right challenge, sensory-rich environment<sup className="text-[#10b981]">[37]</sup></div>
            </div>
            <div className="bg-[#f0f9ff] p-3 rounded">
              <div className="font-bold text-[#0c264d] mb-2 text-sm">Activities</div>
              <div className="text-sm">Swinging, climbing, jumping, tactile play, heavy work<sup className="text-[#10b981]">[38]</sup></div>
            </div>
          </div>
        </div>

        {/* SUBSECTION: Sensory-Based Interventions */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory-Based Interventions</h3>
          <p className="mb-4">
            OTs use various sensory strategies to support regulation and participation:<sup className="text-[#10b981]">[39]</sup>
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
              <div>
                <div className="font-bold text-[#0c264d]">Sensory Diets</div>
                <div className="text-sm">Personalized activity schedules providing appropriate sensory input throughout the day<sup className="text-[#10b981]">[40][41]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
              <div>
                <div className="font-bold text-[#0c264d]">Environmental Modifications</div>
                <div className="text-sm">Adjusting lighting, noise, seating, visual clutter<sup className="text-[#10b981]">[42]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
              <div>
                <div className="font-bold text-[#0c264d]">Sensory Tools</div>
                <div className="text-sm">Weighted items, fidgets, chewable jewelry, noise-canceling headphones<sup className="text-[#10b981]">[43][44]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
              <div>
                <div className="font-bold text-[#0c264d]">Deep Pressure</div>
                <div className="text-sm">Weighted blankets, compression vests, firm touch<sup className="text-[#10b981]">[45][46]</sup></div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Considerations - prominent warning box */}
        <div className="bg-[#ffd166] p-5 rounded-md border-2 border-[#0c264d] shadow-md">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
            <span className="text-2xl">⚠️</span> Important Considerations
          </h3>
          <p className="mb-3">
            While sensory strategies can be helpful, it's essential to:<sup className="text-[#10b981]">[47]</sup>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Respect when someone says a sensory input is uncomfortable or painful<sup className="text-[#10b981]">[48]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Avoid forcing sensory experiences (like brushing protocols without consent)<sup className="text-[#10b981]">[49][50]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Recognize that sensory needs change and are highly individual<sup className="text-[#10b981]">[51]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✓</span>
              <span className="text-sm">Support self-advocacy around sensory needs<sup className="text-[#10b981]">[52]</sup></span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Motor Skills Development */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Motor Skills Development</h2>

        <div className="bg-white p-5 rounded-md shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Fine Motor Skills</h3>
          <p className="mb-4">
            Many autistic children experience delays in fine motor development or specific challenges with hand skills.<sup className="text-[#10b981]">[53][54]</sup>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Handwriting<sup className="text-[#10b981]">[55]</sup></div>
              <div className="text-sm">Letter formation, spacing, sizing, pencil grip</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Tool Use<sup className="text-[#10b981]">[56]</sup></div>
              <div className="text-sm">Scissors, utensils, buttons, zippers</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Hand Strength & Dexterity<sup className="text-[#10b981]">[57]</sup></div>
              <div className="text-sm">Through play activities and therapeutic exercises</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Bilateral Coordination<sup className="text-[#10b981]">[58]</sup></div>
              <div className="text-sm">Using both hands together effectively</div>
            </div>
          </div>
          
          <p className="mt-4 text-sm italic">
            For individuals who struggle significantly with handwriting, OTs may recommend assistive technology like keyboards, 
            speech-to-text, or modified writing tools.<sup className="text-[#10b981]">[59][60]</sup>
          </p>
        </div>

        <div className="bg-white p-5 rounded-md shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Gross Motor Skills</h3>
          <p className="mb-4">
            While gross motor challenges are less common than fine motor difficulties in autism, some individuals benefit 
            from support with:<sup className="text-[#10b981]">[61]</sup>
          </p>
          
          <div className="space-y-3">
            <div className="border-l-2 border-[#0c264d] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Balance and Coordination<sup className="text-[#10b981]">[62]</sup></div>
              <div className="text-sm">Activities on unstable surfaces, balance beams, ball skills</div>
            </div>
            <div className="border-l-2 border-[#0c264d] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Motor Planning (Praxis)<sup className="text-[#10b981]">[63][64]</sup></div>
              <div className="text-sm">Planning and executing new movement sequences</div>
            </div>
            <div className="border-l-2 border-[#0c264d] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Body Awareness<sup className="text-[#10b981]">[65]</sup></div>
              <div className="text-sm">Understanding where the body is in space</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Activities of Daily Living */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Activities of Daily Living (ADLs)</h2>
        
        <p className="mb-6">
          OTs help autistic individuals develop independence in self-care tasks, recognizing that the path to independence 
          may look different and take longer than for neurotypical peers.<sup className="text-[#10b981]">[66][67]</sup>
        </p>

        {/* Side-by-side: ADLs and Teaching Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Common ADL Goals */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common ADL Goals</h3>
            <div className="space-y-2">
              <div className="text-sm">
                <strong>Dressing:</strong> Task analysis, backward chaining, adaptive clothing<sup className="text-[#10b981]">[68]</sup>
              </div>
              <div className="text-sm">
                <strong>Grooming:</strong> Tooth brushing, hair care, bathing routines<sup className="text-[#10b981]">[69]</sup>
              </div>
              <div className="text-sm">
                <strong>Toileting:</strong> Managing sensory aspects, establishing routines<sup className="text-[#10b981]">[70]</sup>
              </div>
              <div className="text-sm">
                <strong>Feeding:</strong> Utensil use, food exploration, mealtime routines<sup className="text-[#10b981]">[71][72]</sup>
              </div>
              <div className="text-sm">
                <strong>Sleep Hygiene:</strong> Bedtime routines, sensory environment<sup className="text-[#10b981]">[73]</sup>
              </div>
            </div>
          </div>

          {/* Right: Teaching Strategies */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Teaching Strategies</h3>
            <div className="space-y-2">
              <div className="text-sm">
                <strong>Task Analysis:</strong> Breaking skills into small, manageable steps<sup className="text-[#10b981]">[74]</sup>
              </div>
              <div className="text-sm">
                <strong>Visual Supports:</strong> Picture schedules, step-by-step visuals<sup className="text-[#10b981]">[75]</sup>
              </div>
              <div className="text-sm">
                <strong>Backward Chaining:</strong> Starting with the last step and working backward<sup className="text-[#10b981]">[76]</sup>
              </div>
              <div className="text-sm">
                <strong>Repetition & Routine:</strong> Consistent practice in natural contexts<sup className="text-[#10b981]">[77]</sup>
              </div>
              <div className="text-sm">
                <strong>Adaptive Equipment:</strong> Modified tools to increase independence<sup className="text-[#10b981]">[78]</sup>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Executive Functioning */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Executive Functioning Support</h2>
        
        <p className="mb-6">
          Executive function challenges are common in autism, affecting organization, planning, time management, and 
          cognitive flexibility.<sup className="text-[#10b981]">[79][80][81]</sup>
        </p>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">OT Strategies for Executive Function</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Visual Organization Systems</div>
                  <div className="text-sm">Color-coding, labeled containers, picture schedules<sup className="text-[#10b981]">[82]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Time Management Tools</div>
                  <div className="text-sm">Visual timers, schedules, checklists<sup className="text-[#10b981]">[83]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Routine Development</div>
                  <div className="text-sm">Creating predictable sequences for tasks<sup className="text-[#10b981]">[84]</sup></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Environmental Design</div>
                  <div className="text-sm">Setting up spaces to support organization<sup className="text-[#10b981]">[85]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Cognitive Strategies</div>
                  <div className="text-sm">Self-talk, problem-solving frameworks<sup className="text-[#10b981]">[86]</sup></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Assessment Process */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">OT Assessment Process</h2>
        
        <p className="mb-6">
          Comprehensive OT evaluation in autism should be individualized and consider multiple domains.<sup className="text-[#10b981]">[87]</sup>
        </p>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Assessment Tools</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Sensory Profile 2:</strong> Caregiver questionnaire assessing sensory processing patterns<sup className="text-[#10b981]">[88]</sup></p>
            <p><strong>Bruininks-Oseretsky Test of Motor Proficiency (BOT-2):</strong> Standardized motor assessment<sup className="text-[#10b981]">[89]</sup></p>
            <p><strong>Beery-Buktenica Developmental Test of Visual-Motor Integration (VMI):</strong> Visual-motor coordination<sup className="text-[#10b981]">[90]</sup></p>
            <p><strong>Goal Attainment Scaling (GAS):</strong> Individualized goal measurement<sup className="text-[#10b981]">[91]</sup></p>
            <p><strong>Canadian Occupational Performance Measure (COPM):</strong> Client-centered goal setting<sup className="text-[#10b981]">[92]</sup></p>
          </div>
        </div>

        <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Essential Questions for Your OT</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>What is your training and experience with autism?<sup className="text-[#10b981]">[93]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>Do you have ASI certification if doing sensory integration therapy?<sup className="text-[#10b981]">[94]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>How will you incorporate my child's interests into therapy?<sup className="text-[#10b981]">[95]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>What is your philosophy regarding neurodiversity?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>How will you involve me/family in the therapy process?<sup className="text-[#10b981]">[96]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>What outcomes should we expect, and how will you measure progress?<sup className="text-[#10b981]">[97]</sup></div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Implementation */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What to Expect in OT Sessions</h2>
        
        <p className="mb-6">
          OT sessions are typically play-based and child-directed, particularly for younger children.<sup className="text-[#10b981]">[98]</sup> Activities 
          are designed to look like play while targeting specific therapeutic goals.<sup className="text-[#10b981]">[99]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Therapy Settings & Their Advantages</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-md border-2 border-[#0c264d] shadow-sm">
            <h4 className="text-[#0c264d] font-bold mb-2">Clinic-Based</h4>
            <p className="text-sm mb-2">Access to specialized equipment (swings, climbing structures)<sup className="text-[#10b981]">[103]</sup></p>
          </div>

          <div className="bg-white p-4 rounded-md border-2 border-[#0c264d] shadow-sm">
            <h4 className="text-[#0c264d] font-bold mb-2">School-Based</h4>
            <p className="text-sm mb-2">Addresses educational participation directly<sup className="text-[#10b981]">[104]</sup></p>
          </div>

          <div className="bg-white p-4 rounded-md border-2 border-[#0c264d] shadow-sm">
            <h4 className="text-[#0c264d] font-bold mb-2">Home-Based</h4>
            <p className="text-sm mb-2">Works on skills in natural environment<sup className="text-[#10b981]">[105]</sup></p>
          </div>

          <div className="bg-white p-4 rounded-md border-2 border-[#0c264d] shadow-sm">
            <h4 className="text-[#0c264d] font-bold mb-2">Community-Based</h4>
            <p className="text-sm mb-2">Supports participation in community activities<sup className="text-[#10b981]">[106]</sup></p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Frequency and Duration</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Typical frequency:</strong> 1-3 times per week, 30-60 minutes per session<sup className="text-[#10b981]">[100]</sup></p>
            <p><strong>Duration of services:</strong> Often ongoing for months to years, depending on needs<sup className="text-[#10b981]">[101]</sup></p>
            <p><strong>Re-evaluation:</strong> Typically every 6-12 months to update goals<sup className="text-[#10b981]">[102]</sup></p>
          </div>
        </div>
      </div>

      {/* SECTION: Accessing Services */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Accessing OT Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Insurance */}
          <div className="bg-white p-4 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Insurance Coverage</h3>
            <p className="text-sm">
              Many plans cover OT, especially with autism diagnosis<sup className="text-[#10b981]">[107]</sup>
            </p>
          </div>

          {/* Public Programs */}
          <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Public Programs</h3>
            <p className="text-sm mb-2">
              <strong>Ages 0-3:</strong> Early Intervention (Part C of IDEA)<sup className="text-[#10b981]">[108]</sup><br/>
              <strong>Ages 3-21:</strong> School-based services (IEPs)<sup className="text-[#10b981]">[109]</sup><br/>
              <strong>All ages:</strong> Medicaid coverage<sup className="text-[#10b981]">[110]</sup>
            </p>
          </div>

          {/* Private Pay */}
          <div className="bg-white p-4 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Private Pay</h3>
            <p className="text-sm">
              Typically $75-$200 per session depending on location<sup className="text-[#10b981]">[111]</sup>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: Supporting at Home */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Supporting OT Goals at Home</h2>
        
        <div className="bg-white p-5 rounded-md shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Implement Home Programs</div>
                  <div className="text-sm">Practice strategies and activities recommended by OT<sup className="text-[#10b981]">[112]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Create Sensory Spaces</div>
                  <div className="text-sm">Designate areas for calming or alerting sensory input<sup className="text-[#10b981]">[113]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Embed Practice in Routines</div>
                  <div className="text-sm">Work on skills during natural daily activities<sup className="text-[#10b981]">[114]</sup></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Use Visual Supports</div>
                  <div className="text-sm">Implement schedules, checklists, and visual reminders<sup className="text-[#10b981]">[115]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Respect Sensory Needs</div>
                  <div className="text-sm">Honor requests for breaks or sensory accommodations<sup className="text-[#10b981]">[116]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">6</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Communicate with OT</div>
                  <div className="text-sm">Share observations about what's working and what's challenging<sup className="text-[#10b981]">[117]</sup></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <li>Case-Smith, J., & Arbesman, M. (2008). Evidence-based review of interventions for autism used in or of relevance to occupational therapy. American Journal of Occupational Therapy, 62(4), 416-429.</li>
          <li>Tomchek, S. D., & Koenig, K. P. (2016). Occupational therapy practice guidelines for individuals with autism spectrum disorder. AOTA Press.</li>
          <li>American Occupational Therapy Association. (2015). Occupational therapy for children and youth using sensory integration theory and methods in school-based practice. American Journal of Occupational Therapy, 69(Suppl. 3), 6913410040.</li>
          <li>American Occupational Therapy Association. (2020). Occupational therapy practice framework: Domain and process (4th ed.). American Journal of Occupational Therapy, 74(Suppl. 2), 7412410010.</li>
          <li>Schaaf, R. C., & Lane, A. E. (2015). Toward a best-practice protocol for assessment of sensory features in ASD. Journal of Autism and Developmental Disorders, 45(5), 1380-1395.</li>
          <li>Watling, R., & Hauer, S. (2015). Effectiveness of Ayres Sensory Integration® and sensory-based interventions for people with autism spectrum disorder: A systematic review. American Journal of Occupational Therapy, 69(5), 6905180030.</li>
          <li>Miller, L. J., Anzalone, M. E., Lane, S. J., Cermak, S. A., & Osten, E. T. (2007). Concept evolution in sensory integration: A proposed nosology for diagnosis. American Journal of Occupational Therapy, 61(2), 135-140.</li>
          <li>Baranek, G. T., David, F. J., Poe, M. D., Stone, W. L., & Watson, L. R. (2006). Sensory Experiences Questionnaire: Discriminating sensory features in young children with autism, developmental delays, and typical development. Journal of Child Psychology and Psychiatry, 47(6), 591-601.</li>
          <li>Feder, K. P., & Majnemer, A. (2007). Handwriting development, competency, and intervention. Developmental Medicine & Child Neurology, 49(4), 312-317.</li>
          <li>Fournier, K. A., Hass, C. J., Naik, S. K., Lodha, N., & Cauraugh, J. H. (2010). Motor coordination in autism spectrum disorders: A synthesis and meta-analysis. Journal of Autism and Developmental Disorders, 40(10), 1227-1240.</li>
          <li>Jasmin, E., Couture, M., McKinley, P., Reid, G., Fombonne, E., & Gisel, E. (2009). Sensori-motor and daily living skills of preschool children with autism spectrum disorders. Journal of Autism and Developmental Disorders, 39(2), 231-241.</li>
          <li>Kenworthy, L., Yerys, B. E., Anthony, L. G., & Wallace, G. L. (2008). Understanding executive control in autism spectrum disorders in the lab and in the real world. Neuropsychology Review, 18(4), 320-338.</li>
          <li>Demetriou, E. A., Lampit, A., Quintana, D. S., et al. (2018). Autism spectrum disorders: A meta-analysis of executive function. Molecular Psychiatry, 23(5), 1198-1204.</li>
          <li>Barton, E. E., & Wolery, M. (2008). Teaching pretend play to children with disabilities: A review of the literature. Topics in Early Childhood Special Education, 28(2), 109-125.</li>
          <li>Hilton, C. L., Crouch, M. C., & Israel, H. (2008). Out-of-school participation patterns in children with high-functioning autism spectrum disorders. American Journal of Occupational Therapy, 62(5), 554-563.</li>
          <li>Kapp, S. K., Gillespie-Lynch, K., Sherman, L. E., & Hutman, T. (2013). Deficit, difference, or both? Autism and neurodiversity. Developmental Psychology, 49(1), 59-71.</li>
          <li>Chapman, R., & Bovell, V. (2021). Neurodiversity, advocacy, anti-therapy. In S. Bertilsdotter Rosqvist, N. Chown, & A. Stenning (Eds.), Neurodiversity studies: A new critical paradigm (pp. 161-177). Routledge.</li>
          <li>Milton, D. E. M. (2014). Autistic expertise: A critical reflection on the production of knowledge in autism studies. Autism, 18(7), 794-802.</li>
          <li>Tomchek, S. D., & Dunn, W. (2007). Sensory processing in children with and without autism: A comparative study using the short sensory profile. American Journal of Occupational Therapy, 61(2), 190-200.</li>
          <li>Ben-Sasson, A., Hen, L., Fluss, R., Cermak, S. A., Engel-Yeger, B., & Gal, E. (2009). A meta-analysis of sensory modulation symptoms in individuals with autism spectrum disorders. Journal of Autism and Developmental Disorders, 39(1), 1-11.</li>
          <li>Lane, S. J., Mailloux, Z., Schoen, S., et al. (2019). Neural foundations of Ayres Sensory Integration®. Brain Sciences, 9(7), 153.</li>
          <li>Simmons, D. R., Robertson, A. E., McKay, L. S., Toal, E., McAleer, P., & Pollick, F. E. (2009). Vision in autism spectrum disorders. Vision Research, 49(22), 2705-2739.</li>
          <li>O'Connor, K. (2012). Auditory processing in autism spectrum disorder: A review. Neuroscience & Biobehavioral Reviews, 36(2), 836-854.</li>
          <li>Cascio, C. J., Moana-Filho, E. J., Guest, S., et al. (2008). Perceptual and neural response to affective tactile texture stimulation in adults with autism spectrum disorders. Autism Research, 1(3), 192-200.</li>
          <li>Luisier, A. C., Petitpierre, G., Ferdenzi, C., et al. (2015). Odor perception in children with autism spectrum disorder and its relationship to food neophobia. Frontiers in Psychology, 6, 1830.</li>
          <li>Cermak, S. A., Curtin, C., & Bandini, L. G. (2010). Food selectivity and sensory sensitivity in children with autism spectrum disorders. Journal of the American Dietetic Association, 110(2), 238-246.</li>
          <li>Gepner, B., & Mestre, D. R. (2002). Brief report: Postural reactivity to fast visual motion differentiates autistic from children with Asperger syndrome. Journal of Autism and Developmental Disorders, 32(3), 231-238.</li>
          <li>Blanche, E. I., Reinoso, G., Chang, M. C., & Bodison, S. (2012). Proprioceptive processing difficulties among children with autism spectrum disorders and developmental disabilities. American Journal of Occupational Therapy, 66(5), 621-624.</li>
          <li>Mahler, K. (2015). Interoception: The eighth sensory system. AAPC Publishing.</li>
          <li>Garfinkel, S. N., Tiley, C., O'Keeffe, S., et al. (2016). Discrepancies between dimensions of interoception in autism: Implications for emotion and anxiety. Biological Psychology, 114, 117-126.</li>
          <li>Ayres, A. J. (2005). Sensory integration and the child: Understanding hidden sensory challenges (25th anniversary ed.). Western Psychological Services.</li>
          <li>Schaaf, R. C., Benevides, T., Mailloux, Z., et al. (2014). An intervention for sensory difficulties in children with autism: A randomized trial. Journal of Autism and Developmental Disorders, 44(7), 1493-1506.</li>
          <li>Parham, L. D., Roley, S. S., May-Benson, T. A., et al. (2011). Development of a fidelity measure for research on the effectiveness of the Ayres Sensory Integration® intervention. American Journal of Occupational Therapy, 65(2), 133-142.</li>
          <li>Schaaf, R. C., Dumont, R. L., Arbesman, M., & May-Benson, T. A. (2018). Efficacy of occupational therapy using Ayres Sensory Integration®: A systematic review. American Journal of Occupational Therapy, 72(1), 7201190010.</li>
          <li>Schoen, S. A., Lane, S. J., Mailloux, Z., et al. (2019). A systematic review of Ayres Sensory Integration intervention for children with autism. Autism Research, 12(1), 6-19.</li>
          <li>Case-Smith, J., Weaver, L. L., & Fristad, M. A. (2015). A systematic review of sensory processing interventions for children with autism spectrum disorders. Autism, 19(2), 133-148.</li>
          <li>Miller, L. J., Coll, J. R., & Schoen, S. A. (2007). A randomized controlled pilot study of the effectiveness of occupational therapy for children with sensory modulation disorder. American Journal of Occupational Therapy, 61(2), 228-238.</li>
          <li>Schaaf, R. C., & Mailloux, Z. (2015). Clinician's guide for implementing Ayres Sensory Integration: Promoting participation for children with autism. AOTA Press.</li>
          <li>Williams, M. S., & Shellenberger, S. (1996). How does your engine run? A leader's guide to the Alert Program for Self-Regulation. TherapyWorks.</li>
          <li>Wilbarger, P., & Wilbarger, J. L. (1991). Sensory defensiveness in children aged 2-12: An intervention guide for parents and other caretakers. Avanti Educational Programs.</li>
          <li>Devlin, S., Healy, O., Leader, G., & Hughes, B. M. (2011). Comparison of behavioral intervention and sensory-integration therapy in the treatment of challenging behavior. Journal of Autism and Developmental Disorders, 41(10), 1303-1320.</li>
          <li>Dunn, W. (2007). Supporting children to participate successfully in everyday life by using sensory processing knowledge. Infants & Young Children, 20(2), 84-101.</li>
          <li>Bagatell, N., Mirigliani, G., Patterson, C., Reyes, Y., & Test, L. (2010). Effectiveness of therapy ball chairs on classroom participation in children with autism spectrum disorders. American Journal of Occupational Therapy, 64(6), 895-903.</li>
          <li>Losinski, M., Sanders, S., & Wiseman, N. (2016). Examining the use of sensory integration therapy with students with autism spectrum disorder: A review of the evidence from 1990-2015. Journal of Behavioral Education, 25(4), 401-424.</li>
          <li>Fertel-Daly, D., Bedell, G., & Hinojosa, J. (2001). Effects of a weighted vest on attention to task and self-stimulatory behaviors in preschoolers with pervasive developmental disorders. American Journal of Occupational Therapy, 55(6), 629-640.</li>
          <li>Bodison, S. C., & Parham, L. D. (2018). Specific sensory techniques and sensory environmental modifications for children and youth with sensory integration difficulties: A systematic review. American Journal of Occupational Therapy, 72(1), 7201190040.</li>
          <li>Baranek, G. T. (2002). Efficacy of sensory and motor interventions for children with autism. Journal of Autism and Developmental Disorders, 32(5), 397-422.</li>
          <li>Robledo, J., Donnellan, A. M., & Strandt-Conroy, K. (2012). An exploration of sensory and movement differences from the perspective of individuals with autism. Frontiers in Integrative Neuroscience, 6, 107.</li>
          <li>Hodgetts, S., Nicholas, D., Zwaigenbaum, L., & McConnell, D. (2013). Parents' and professionals' perceptions of family-centered care for children with autism spectrum disorder across service sectors. Social Science & Medicine, 96, 138-146.</li>
          <li>Leary, M. R., & Hill, D. A. (1996). Moving on: Autism and movement disturbance. Mental Retardation, 34(1), 39-53.</li>
          <li>Lang, R., O'Reilly, M., Healy, O., et al. (2012). Sensory integration therapy for autism spectrum disorders: A systematic review. Research in Autism Spectrum Disorders, 6(3), 1004-1018.</li>
          <li>Kranowitz, C. S. (2006). The out-of-sync child: Recognizing and coping with sensory processing disorder. Penguin.</li>
          <li>Fuentes, C. T., Mostofsky, S. H., & Bastian, A. J. (2009). Children with autism show specific handwriting impairments. Neurology, 73(19), 1532-1537.</li>
          <li>Hilton, C. L., Zhang, Y., Whilte, M. R., Klohr, C. L., & Constantino, J. (2012). Motor impairment in sibling pairs concordant and discordant for autism spectrum disorders. Autism, 16(4), 430-441.</li>
          <li>Kushki, A., Chau, T., & Anagnostou, E. (2011). Handwriting difficulties in children with autism spectrum disorders: A scoping review. Journal of Autism and Developmental Disorders, 41(12), 1706-1716.</li>
          <li>Provost, B., Lopez, B. R., & Heimerl, S. (2007). A comparison of motor delays in young children: Autism spectrum disorder, developmental delay, and developmental concerns. Journal of Autism and Developmental Disorders, 37(2), 321-328.</li>
          <li>Case-Smith, J. (1996). Fine motor outcomes in preschool children who receive occupational therapy services. American Journal of Occupational Therapy, 50(1), 52-61.</li>
          <li>Tomchek, S. D., Huebner, R. A., & Dunn, W. (2014). Patterns of sensory processing in children with an autism spectrum disorder. Research in Autism Spectrum Disorders, 8(9), 1214-1224.</li>
          <li>Parham, L. D., Ecker, C., Miller Kuhaneck, H., Henry, D. A., & Glennon, T. J. (2007). Sensory Processing Measure (SPM): Manual. Western Psychological Services.</li>
          <li>American Psychiatric Association. (2013). Diagnostic and statistical manual of mental disorders (5th ed.). American Psychiatric Publishing.</li>
          <li>Maurer, M., & Damasio, A. R. (1982). Childhood autism from the point of view of behavioral neurology. Journal of Autism and Developmental Disorders, 12(2), 195-205.</li>
          <li>Paquet, A., Olliac, B., Bouvard, M. P., Golse, B., & Vaivre-Douret, L. (2016). The semiology of motor disorders in autism spectrum disorders as highlighted from a standardized neuro-psychomotor assessment. Frontiers in Psychology, 7, 1292.</li>
          <li>Dziuk, M. A., Gidley Larson, J. C., Apostu, A., Mahone, E. M., Denckla, M. B., & Mostofsky, S. H. (2007). Dyspraxia in autism: Association with motor, social, and communicative deficits. Developmental Medicine & Child Neurology, 49(10), 734-739.</li>
          <li>Ming, X., Brimacombe, M., & Wagner, G. C. (2007). Prevalence of motor impairment in autism spectrum disorders. Brain and Development, 29(9), 565-570.</li>
          <li>MacNeil, L. K., & Mostofsky, S. H. (2012). Specificity of dyspraxia in children with autism. Neuropsychology, 26(2), 165-171.</li>
          <li>Dunn, W., Cox, J., Foster, L., Mische-Lawson, L., & Tanquary, J. (2012). Impact of a contextual intervention on child participation and parent competence among children with autism spectrum disorders: A pretest-posttest repeated-measures design. American Journal of Occupational Therapy, 66(5), 520-528.</li>
          <li>Green, D., Charman, T., Pickles, A., et al. (2009). Impairment in movement skills of children with autistic spectrum disorders. Developmental Medicine & Child Neurology, 51(4), 311-316.</li>
          <li>Segal, R. (2008). Family routines and rituals: A context for occupational therapy interventions. American Journal of Occupational Therapy, 58(5), 499-508.</li>
          <li>Lam, K. S., & Aman, M. G. (2007). The Repetitive Behavior Scale-Revised: Independent validation in individuals with autism spectrum disorders. Journal of Autism and Developmental Disorders, 37(5), 855-866.</li>
          <li>Williams, K. E., Gibbons, B. G., & Schreck, K. A. (2005). Comparing selective eaters with and without developmental disabilities. Journal of Developmental and Physical Disabilities, 17(3), 299-309.</li>
          <li>Nadon, G., Feldman, D. E., Dunn, W., & Gisel, E. (2011). Association of sensory processing and eating problems in children with autism spectrum disorders. Autism Research and Treatment, 2011, 541926.</li>
          <li>Reynolds, S., Lane, S. J., & Thacker, L. (2012). Sensory processing, physiological stress, and sleep behaviors in children with and without autism spectrum disorders. OTJR: Occupation, Participation and Health, 32(1), 246-257.</li>
          <li>Shepherd, J. (2001). Self-care and adaptations for independent living. In J. Case-Smith (Ed.), Occupational therapy for children (4th ed., pp. 489-527). Mosby.</li>
          <li>Case-Smith, J., & Arbesman, M. (2008). Evidence-based review of interventions for autism used in or of relevance to occupational therapy. American Journal of Occupational Therapy, 62(4), 416-429.</li>
          <li>Snell, M. E., & Brown, F. (2011). Instruction of students with severe disabilities (7th ed.). Pearson.</li>
          <li>Krantz, P. J., MacDuff, M. T., & McClannahan, L. E. (1993). Programming participation in family activities for children with autism: Parents' use of photographic activity schedules. Journal of Applied Behavior Analysis, 26(1), 137-138.</li>
          <li>Hill, E. L. (2004). Executive dysfunction in autism. Trends in Cognitive Sciences, 8(1), 26-32.</li>
          <li>Ozonoff, S., & Jensen, J. (1999). Brief report: Specific executive function profiles in three neurodevelopmental disorders. Journal of Autism and Developmental Disorders, 29(2), 171-177.</li>
          <li>Pellicano, E. (2010). Individual differences in executive function and central coherence predict developmental changes in theory of mind in autism. Developmental Psychology, 46(2), 530-544.</li>
          <li>Hume, K., & Odom, S. (2007). Effects of an individual work system on the independent functioning of students with autism. Journal of Autism and Developmental Disorders, 37(6), 1166-1180.</li>
          <li>Mesibov, G. B., Shea, V., & Schopler, E. (2005). The TEACCH approach to autism spectrum disorders. Springer.</li>
          <li>Dettmer, S., Simpson, R. L., Myles, B. S., & Ganz, J. B. (2000). The use of visual supports to facilitate transitions of students with autism. Focus on Autism and Other Developmental Disabilities, 15(3), 163-169.</li>
          <li>Hume, K., Loftin, R., & Lantz, J. (2009). Increasing independence in autism spectrum disorders: A review of three focused interventions. Journal of Autism and Developmental Disorders, 39(9), 1329-1338.</li>
          <li>Russell, J. (1997). Autism as an executive disorder. Oxford University Press.</li>
          <li>Coster, W., Law, M., Bedell, G., et al. (2013). School participation, supports and barriers of students with and without disabilities. Child: Care, Health and Development, 39(4), 535-543.</li>
          <li>Dunn, W. (2014). Sensory Profile 2: User's manual. Pearson.</li>
          <li>Bruininks, R. H., & Bruininks, B. D. (2005). Bruininks-Oseretsky Test of Motor Proficiency (2nd ed.). Pearson.</li>
          <li>Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). Beery-Buktenica Developmental Test of Visual-Motor Integration (6th ed.). Pearson.</li>
          <li>Kiresuk, T. J., Smith, A., & Cardillo, J. E. (Eds.). (1994). Goal Attainment Scaling: Applications, theory, and measurement. Psychology Press.</li>
          <li>Law, M., Baptiste, S., Carswell, A., McColl, M. A., Polatajko, H., & Pollock, N. (2014). Canadian Occupational Performance Measure (5th ed.). CAOT Publications.</li>
          <li>Miller Kuhaneck, H., & Watling, R. (2015). Autism: A comprehensive occupational therapy approach (3rd ed.). AOTA Press.</li>
          <li>Schaaf, R. C., & Miller, L. J. (2005). Occupational therapy using a sensory integrative approach for children with developmental disabilities. Mental Retardation and Developmental Disabilities Research Reviews, 11(2), 143-148.</li>
          <li>Rodger, S., & Kennedy-Behr, A. (2017). Occupation-centred practice with children: A practical guide for occupational therapists (2nd ed.). Wiley-Blackwell.</li>
          <li>Humphry, R., & Wakeford, L. (2006). An occupation-centered discussion of development and implications for practice. American Journal of Occupational Therapy, 60(3), 258-267.</li>
          <li>Dunst, C. J., Hamby, D., Trivette, C. M., Raab, M., & Bruder, M. B. (2000). Everyday family and community life and children's naturally occurring learning opportunities. Journal of Early Intervention, 23(3), 151-164.</li>
          <li>Cohn, E. S., Miller, L. J., & Tickle-Degnen, L. (2000). Parental hopes for therapy outcomes: Children with sensory modulation disorders. American Journal of Occupational Therapy, 54(1), 36-43.</li>
          <li>Roley, S. S., Mailloux, Z., Parham, L. D., et al. (2015). Sensory integration and praxis patterns in children with autism. American Journal of Occupational Therapy, 69(1), 6901220010.</li>
          <li>Swinth, Y., & Case-Smith, J. (2015). Methods to support play and leisure. In J. Case-Smith & J. O'Brien (Eds.), Occupational therapy for children and adolescents (7th ed., pp. 539-574). Elsevier.</li>
          <li>Miller Kuhaneck, H., Spitzer, S. L., & Miller, E. (2010). Activity analysis, creativity, and playfulness in pediatric occupational therapy: Making play just right. Jones & Bartlett Learning.</li>
          <li>Baranek, G. T., Woynaroski, T. G., Nowell, S., Turner-Brown, L., DuBay, M., & Crais, E. R. (2018). Cascading effects of attention disengagement and sensory seeking on social symptoms in a community sample of infants at-risk for a future diagnosis of autism spectrum disorder. Developmental Cognitive Neuroscience, 29, 30-40.</li>
          <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</li>
          <li>American Occupational Therapy Association. (n.d.). Autism. Retrieved from www.aota.org</li>
          <li>Mandell, D. S., & Novak, M. (2005). The role of culture in families' treatment decisions for children with autism spectrum disorders. Mental Retardation and Developmental Disabilities Research Reviews, 11(2), 110-115.</li>
          <li>Centers for Medicare & Medicaid Services. (2014). Medicaid and CHIP: Coverage of autism-related services. Retrieved from www.medicaid.gov</li>
          <li>American Occupational Therapy Association. (2021). Private practice fee survey. Retrieved from www.aota.org</li>
          <li>Polatajko, H. J., Mandich, A. D., Missiuna, C., et al. (2001). Cognitive orientation to daily occupational performance (CO-OP): Part III—The protocol in brief. Physical & Occupational Therapy in Pediatrics, 20(2-3), 107-123.</li>
          <li>Case-Smith, J., & Arbesman, M. (2008). Evidence-based review of interventions for autism used in or of relevance to occupational therapy. American Journal of Occupational Therapy, 62(4), 416-429.</li>
          <li>Dunst, C. J., Bruder, M. B., Trivette, C. M., Raab, M., & McLean, M. (2001). Natural learning opportunities for infants, toddlers, and preschoolers. Young Exceptional Children, 4(3), 18-25.</li>
          <li>Dix, S., Dempsey, I., & Luiselli, J. K. (2015). Increasing the engagement of children with autism spectrum disorder in activities of daily living: A review. Review Journal of Autism and Developmental Disorders, 2(4), 328-344.</li>
          <li>Prizant, B. M., Wetherby, A. M., Rubin, E., Laurent, A. C., & Rydell, P. J. (2006). The SCERTS Model: A comprehensive educational approach for children with autism spectrum disorders. Paul H. Brookes Publishing.</li>
          <li>Baranek, G. T. (2002). Efficacy of sensory and motor interventions for children with autism. Journal of Autism and Developmental Disorders, 32(5), 397-422.</li>
        </ol>
      </div>
    </div>
  );
}
