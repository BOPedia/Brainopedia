interface ASDABATherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function ASDABATherapy({ setCurrentArticle }: ASDABATherapyProps) {
  return (
    <div className="max-w-4xl">
      {/* Header with back button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-[#0c264d] text-3xl">Applied Behavior Analysis (ABA) for Autism</h1>

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
          Applied Behavior Analysis (ABA) is one of the most widely used—and most controversial—interventions for autism.<sup className="text-[#10b981]">[1][2][3]</sup> 
          This comprehensive guide examines the evidence base, modern approaches, ethical considerations, and what families need 
          to know when considering or navigating ABA services.
        </p>
      </div>

      {/* SECTION: Understanding ABA */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding Applied Behavior Analysis</h2>
        
        <p className="mb-6">
          ABA is the application of behavioral principles—particularly operant conditioning—to modify behavior and teach 
          new skills.<sup className="text-[#10b981]">[4][5]</sup> It is based on the science of learning and behavior, systematically applying interventions 
          to improve socially significant behaviors and demonstrating experimentally that the interventions were responsible 
          for the improvement.<sup className="text-[#10b981]">[6][7]</sup>
        </p>

        {/* Nested: Core Principles as Definition Grid */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Core Principles of ABA</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Positive Reinforcement<sup className="text-[#10b981]">[8]</sup></div>
              <div className="text-sm">Increasing desired behaviors by providing rewarding consequences</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Antecedent Manipulation<sup className="text-[#10b981]">[9]</sup></div>
              <div className="text-sm">Changing the environment to prevent challenging behaviors and promote desired ones</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Task Analysis<sup className="text-[#10b981]">[10]</sup></div>
              <div className="text-sm">Breaking complex skills into smaller, teachable steps</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Prompting & Fading<sup className="text-[#10b981]">[11]</sup></div>
              <div className="text-sm">Providing support that is gradually reduced as skills develop</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Data Collection<sup className="text-[#10b981]">[12][13]</sup></div>
              <div className="text-sm">Systematic measurement of behaviors to track progress</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Generalization<sup className="text-[#10b981]">[14]</sup></div>
              <div className="text-sm">Ensuring skills transfer across settings, people, and materials</div>
            </div>
          </div>
        </div>

        <p className="text-sm italic">
          ABA is not a single intervention but rather a framework that encompasses many different techniques and approaches.<sup className="text-[#10b981]">[15]</sup> 
          Modern ABA looks very different from traditional methods developed in the 1960s-1980s.<sup className="text-[#10b981]">[16][17]</sup>
        </p>
      </div>

      {/* SECTION: Historical Context */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Historical Context and Evolution</h2>
        
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Traditional ABA: Discrete Trial Training (DTT)</h3>
          <p className="mb-4">
            Early ABA, pioneered by Ivar Lovaas in the 1960s-1980s, primarily used Discrete Trial Training (DTT)—a highly 
            structured, adult-directed teaching method.<sup className="text-[#10b981]">[18][19]</sup>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="text-sm">
              <strong>Structure:</strong> Therapist presents instruction, child responds, consequence delivered, brief pause, repeat<sup className="text-[#10b981]">[20]</sup>
            </div>
            <div className="text-sm">
              <strong>Setting:</strong> Typically at a table in a controlled environment<sup className="text-[#10b981]">[21]</sup>
            </div>
            <div className="text-sm">
              <strong>Intensity:</strong> Often 40 hours per week for young children<sup className="text-[#10b981]">[22]</sup>
            </div>
            <div className="text-sm">
              <strong>Goals:</strong> Historically focused on compliance, eye contact, reducing stimming, appearing "indistinguishable from peers"<sup className="text-[#10b981]">[23][24]</sup>
            </div>
          </div>
        </div>

        {/* The Controversy - prominent warning box */}
        <div className="bg-[#ffd166] p-5 rounded-md border-2 border-[#0c264d] shadow-md mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
            <span className="text-2xl">⚠️</span> The Controversy
          </h3>
          <p className="mb-3">
            Many autistic adults who underwent traditional ABA report lasting trauma:<sup className="text-[#10b981]">[25][26][27]</sup>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Being forced to suppress natural autistic behaviors (stimming, avoiding eye contact)<sup className="text-[#10b981]">[28][29]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Emphasis on compliance and obedience over autonomy and consent<sup className="text-[#10b981]">[30]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Using punishments or "aversives" to eliminate behaviors<sup className="text-[#10b981]">[31][32]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Teaching children to ignore their own bodies and boundaries<sup className="text-[#10b981]">[33]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Pathologizing neurological differences rather than building on strengths<sup className="text-[#10b981]">[34]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">✗</span>
              <span className="text-sm">Higher rates of PTSD symptoms among ABA recipients compared to other therapies<sup className="text-[#10b981]">[35][36]</sup></span>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Evolution of ABA Practice</h3>
          <p className="mb-4">
            The field has evolved significantly in response to these criticisms and new research:<sup className="text-[#10b981]">[37][38]</sup>
          </p>
          
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Shift to Naturalistic Approaches</div>
                <div className="text-sm">Play-based, child-led interventions<sup className="text-[#10b981]">[39][40]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Elimination of Aversives</div>
                <div className="text-sm">Positive-only approaches gaining prominence<sup className="text-[#10b981]">[41]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Assent and Consent</div>
                <div className="text-sm">Respecting when individuals refuse or need breaks<sup className="text-[#10b981]">[42][43]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Neurodiversity-Informed Practice</div>
                <div className="text-sm">Not targeting harmless autistic behaviors<sup className="text-[#10b981]">[44][45]</sup></div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Family-Centered Goals</div>
                <div className="text-sm">Prioritizing what matters to the individual and family<sup className="text-[#10b981]">[46]</sup></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Modern Approaches */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Modern ABA Approaches</h2>

        <p className="mb-6">
          Naturalistic Developmental Behavioral Interventions (NDBIs) blend ABA principles with developmental psychology, following the child's lead in natural environments.<sup className="text-[#10b981]">[47][48][49]</sup>
        </p>

        {/* PRT */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pivotal Response Treatment (PRT)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm mb-3">
                <strong>Philosophy:</strong> Target "pivotal" areas that affect multiple behaviors<sup className="text-[#10b981]">[50][51]</sup>
              </p>
              <p className="text-sm mb-3">
                <strong>Key Pivots:</strong> Motivation, self-initiation, self-management, multiple cues<sup className="text-[#10b981]">[52]</sup>
              </p>
              <p className="text-sm">
                <strong>Implementation:</strong> Child chooses activities, natural reinforcers, reinforcing attempts<sup className="text-[#10b981]">[53]</sup>
              </p>
            </div>
            <div>
              <p className="text-sm mb-3">
                <strong>Evidence:</strong> Strong research support for communication and social skills<sup className="text-[#10b981]">[54][55][56]</sup>
              </p>
              <p className="text-sm">
                <strong>Parent Involvement:</strong> Parents trained to implement throughout daily routines<sup className="text-[#10b981]">[57]</sup>
              </p>
            </div>
          </div>
        </div>

        {/* ESDM */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Start Denver Model (ESDM)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#f0f9ff] p-3 rounded">
              <div className="font-bold text-[#0c264d] mb-2 text-sm">Age Range</div>
              <div className="text-sm">12-48 months<sup className="text-[#10b981]">[58]</sup></div>
            </div>
            <div className="bg-[#f0f9ff] p-3 rounded">
              <div className="font-bold text-[#0c264d] mb-2 text-sm">Approach</div>
              <div className="text-sm">Combines developmental relationship-based approaches with ABA<sup className="text-[#10b981]">[59][60]</sup></div>
            </div>
            <div className="bg-[#f0f9ff] p-3 rounded">
              <div className="font-bold text-[#0c264d] mb-2 text-sm">Setting</div>
              <div className="text-sm">Naturalistic, play-based interactions<sup className="text-[#10b981]">[61]</sup></div>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="text-sm">
              <strong>Evidence:</strong> Improvements in IQ, language, and adaptive behavior<sup className="text-[#10b981]">[62][63][64]</sup>
            </div>
            <div className="text-sm">
              <strong>Delivery:</strong> Can be delivered by therapists or trained parents<sup className="text-[#10b981]">[65]</sup>
            </div>
          </div>
        </div>

        {/* Side-by-side: Incidental Teaching and FCT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Incidental Teaching</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Principle:</strong> Teaching happens during naturally occurring opportunities<sup className="text-[#10b981]">[66]</sup></p>
              <p><strong>Method:</strong> Adult follows child's interest, creates opportunity for communication, prompts elaboration<sup className="text-[#10b981]">[67]</sup></p>
              <p><strong>Benefits:</strong> High generalization, maintains motivation<sup className="text-[#10b981]">[68]</sup></p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Communication Training (FCT)</h3>
            <p className="text-sm mb-3">
              Teaches alternative, appropriate ways to communicate the same function that challenging behavior served.<sup className="text-[#10b981]">[69][70]</sup>
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Process:</strong> Identify function of behavior, teach functionally equivalent communication<sup className="text-[#10b981]">[71]</sup></p>
              <p><strong>Example:</strong> Child bites to escape demands → teach "break please" to access breaks<sup className="text-[#10b981]">[72]</sup></p>
              <p><strong>Evidence:</strong> Strong support for reducing challenging behaviors<sup className="text-[#10b981]">[73][74][75]</sup></p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Research Evidence */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Research Evidence</h2>
        
        <p className="mb-6">
          ABA has the largest evidence base of any autism intervention, with decades of research.<sup className="text-[#10b981]">[76][77][78]</sup>
        </p>

        <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What Research Shows</h3>
          
          <div className="space-y-2">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Skill Acquisition<sup className="text-[#10b981]">[79][80][81]</sup></div>
              <div className="text-sm">Effective for teaching communication, social, academic, and daily living skills</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Challenging Behaviors<sup className="text-[#10b981]">[82][83]</sup></div>
              <div className="text-sm">Functional assessment and intervention reduces problem behaviors</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Intensity<sup className="text-[#10b981]">[84][85]</sup></div>
              <div className="text-sm">More hours associated with greater gains, but optimal amount varies by child</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Early Intervention<sup className="text-[#10b981]">[86][87]</sup></div>
              <div className="text-sm">Starting young (before age 4) associated with better outcomes</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Individual Variation<sup className="text-[#10b981]">[88][89]</sup></div>
              <div className="text-sm">Wide range of responses; some children show dramatic progress, others minimal</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Limitations of Research</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Outcome Measures:</strong> Often focus on "typical" behavior rather than quality of life or autistic perspectives<sup className="text-[#10b981]">[90][91]</sup></p>
            <p><strong>Long-term Outcomes:</strong> Limited data on adult outcomes and potential harms<sup className="text-[#10b981]">[92]</sup></p>
            <p><strong>Comparison Studies:</strong> Few high-quality comparisons between different intervention approaches<sup className="text-[#10b981]">[93]</sup></p>
            <p><strong>Heterogeneity:</strong> "ABA" encompasses vastly different practices, making research difficult to interpret<sup className="text-[#10b981]">[94]</sup></p>
          </div>
        </div>
      </div>

      {/* SECTION: Green Flags and Red Flags */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evaluating ABA Services: Green Flags and Red Flags</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Green Flags */}
          <div className="bg-white p-5 rounded-md border-2 border-[#10b981] shadow-md">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
              <span className="text-2xl">✓</span> Green Flags: Quality ABA
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm">Naturalistic, play-based: Learning happens during fun, engaging activities<sup className="text-[#10b981]">[95]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm">Child-led: Follows the child's interests and motivations<sup className="text-[#10b981]">[96]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm">Respects autonomy: Honors "no," allows breaks, doesn't force compliance<sup className="text-[#10b981]">[97]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm">Functional goals: Targets skills that improve quality of life, not "looking normal"<sup className="text-[#10b981]">[98]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm">Respects stimming: Doesn't target self-regulatory behaviors unless harmful<sup className="text-[#10b981]">[99]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm">Communication-focused: Prioritizes functional communication, including AAC<sup className="text-[#10b981]">[100]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm">Family collaboration: Parents are equal partners in goal-setting<sup className="text-[#10b981]">[101]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm">Qualified supervision: BCBAs with autism expertise<sup className="text-[#10b981]">[102]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#10b981] font-bold">✓</span>
                <span className="text-sm">Assent-based: Respects the child's willingness to participate<sup className="text-[#10b981]">[103]</sup></span>
              </div>
            </div>
          </div>

          {/* Red Flags */}
          <div className="bg-white p-5 rounded-md border-2 border-[#0c264d] shadow-md">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
              <span className="text-2xl">✗</span> Red Flags: Harmful Practices
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">"Quiet hands": Preventing harmless stimming or hand movements<sup className="text-[#10b981]">[104]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Forced eye contact: Making eye contact a goal when it's uncomfortable<sup className="text-[#10b981]">[105]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Compliance training: Emphasizing obedience over teaching functional skills<sup className="text-[#10b981]">[106]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Withholding needs: Forcing child to ask "correctly" before meeting basic needs<sup className="text-[#10b981]">[107]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Punishments/aversives: Using anything aversive to reduce behaviors<sup className="text-[#10b981]">[108]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Blocking AAC: Refusing communication devices to "encourage" speech<sup className="text-[#10b981]">[109]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Excessive hours: 40+ hours/week leaving no time for rest or play<sup className="text-[#10b981]">[110]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Pathologizing autism: Treating autistic traits as inherently problematic<sup className="text-[#10b981]">[111]</sup></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0c264d] font-bold">✗</span>
                <span className="text-sm">Ignoring distress: Continuing sessions when child is clearly upset or overwhelmed<sup className="text-[#10b981]">[112]</sup></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Service Delivery */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">ABA Service Delivery</h2>
        
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Team Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">BCBA (Board Certified Behavior Analyst)<sup className="text-[#10b981]">[113]</sup></div>
              <div className="text-sm">Master's or doctoral level, designs programs, supervises</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">BCaBA (Board Certified Assistant BA)<sup className="text-[#10b981]">[114]</sup></div>
              <div className="text-sm">Bachelor's level, implements programs under BCBA supervision</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">RBT (Registered Behavior Technician)<sup className="text-[#10b981]">[115]</sup></div>
              <div className="text-sm">Direct therapy providers, implements programs designed by BCBA</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Supervision Ratio<sup className="text-[#10b981]">[116]</sup></div>
              <div className="text-sm">BCBAs should provide adequate oversight; 1 BCBA to 10-15 clients is common</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#2abcd4]">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Typical Service Amounts</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Early Intensive:</strong> 25-40 hours/week for young children (though this is controversial)<sup className="text-[#10b981]">[117]</sup></p>
              <p><strong>Focused Intervention:</strong> 10-25 hours/week targeting specific skills<sup className="text-[#10b981]">[118]</sup></p>
              <p><strong>Consultation Model:</strong> BCBA trains parents/teachers, minimal direct therapy<sup className="text-[#10b981]">[119]</sup></p>
            </div>
          </div>

          <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#2abcd4]">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Settings</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Home-Based:</strong> Most common for young children, facilitates generalization<sup className="text-[#10b981]">[120]</sup></p>
              <p><strong>Center-Based:</strong> Clinic setting with specialized equipment and peer interaction<sup className="text-[#10b981]">[121]</sup></p>
              <p><strong>School-Based:</strong> Support within educational setting<sup className="text-[#10b981]">[122]</sup></p>
              <p><strong>Community-Based:</strong> Teaching skills in natural community environments<sup className="text-[#10b981]">[123]</sup></p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Accessing and Funding */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Accessing and Funding ABA</h2>
        
        <div className="bg-white p-5 rounded-md shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Insurance Coverage</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Autism Insurance Mandates:</strong> Most U.S. states require private insurance to cover ABA<sup className="text-[#10b981]">[124][125]</sup></p>
            <p><strong>Medical Necessity:</strong> Typically requires autism diagnosis and physician prescription<sup className="text-[#10b981]">[126]</sup></p>
            <p><strong>Prior Authorization:</strong> Insurance must approve hours before services begin<sup className="text-[#10b981]">[127]</sup></p>
            <p><strong>Annual Caps:</strong> Some states have dollar or hour limits<sup className="text-[#10b981]">[128]</sup></p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Medicaid</h3>
            <p className="text-sm">
              Covers ABA in most states through EPSDT<sup className="text-[#10b981]">[129]</sup>
            </p>
          </div>

          <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Early Intervention</h3>
            <p className="text-sm">
              May include behavioral services through Part C (ages 0-3)<sup className="text-[#10b981]">[130]</sup>
            </p>
          </div>

          <div className="bg-white p-4 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">School District</h3>
            <p className="text-sm">
              Can provide behavioral support through IEP<sup className="text-[#10b981]">[131]</sup>
            </p>
          </div>

          <div className="bg-white p-4 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Regional Centers</h3>
            <p className="text-sm">
              In some states, developmental disability agencies fund services<sup className="text-[#10b981]">[132]</sup>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: Alternatives */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Alternatives and Complementary Approaches</h2>
        
        <p className="mb-6">
          Families may choose alternatives to traditional ABA or use them alongside behavioral interventions:<sup className="text-[#10b981]">[133]</sup>
        </p>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="text-sm">
              <strong>Relationship-Based Approaches:</strong> DIR/Floortime, RDI (Relationship Development Intervention)<sup className="text-[#10b981]">[134][135]</sup>
            </div>
            <div className="text-sm">
              <strong>Speech Therapy:</strong> Particularly for communication goals<sup className="text-[#10b981]">[136]</sup>
            </div>
            <div className="text-sm">
              <strong>Occupational Therapy:</strong> For sensory, motor, and daily living skills<sup className="text-[#10b981]">[137]</sup>
            </div>
            <div className="text-sm">
              <strong>Social Skills Groups:</strong> Peer-based learning in natural contexts<sup className="text-[#10b981]">[138]</sup>
            </div>
            <div className="text-sm">
              <strong>Parent Coaching Models:</strong> Training parents without intensive direct therapy<sup className="text-[#10b981]">[139]</sup>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Questions to Ask */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Questions to Ask ABA Providers</h2>
        
        <div className="bg-white p-5 rounded-md shadow-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>What is your philosophy regarding neurodiversity and autism?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>Do you use naturalistic, play-based approaches or primarily DTT?<sup className="text-[#10b981]">[140]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>How do you handle it when my child says "no" or wants a break?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>Will you target stimming or other harmless autistic behaviors?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>How will you involve me in goal-setting?<sup className="text-[#10b981]">[141]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>What kind of data will you collect and how will I see it?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>How often will the BCBA supervise directly?<sup className="text-[#10b981]">[142]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>Do you support AAC if my child needs it?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>How will you ensure skills generalize to real-life situations?<sup className="text-[#10b981]">[143]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">✓</div>
              <div>Have you worked with autistic adults or consulted autistic advocates?</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Making Informed Decisions */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Making Informed Decisions</h2>
        
        <p className="mb-6">
          Deciding whether to pursue ABA is deeply personal. Consider:<sup className="text-[#10b981]">[144]</sup>
        </p>

        <div className="bg-white p-5 rounded-md shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Your Child's Needs</div>
                  <div className="text-sm">What specific skills or challenges would benefit from targeted intervention?</div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Your Family's Values</div>
                  <div className="text-sm">What matters most to you—compliance, independence, communication, happiness?</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Quality of Providers</div>
                  <div className="text-sm">Do available providers align with neurodiversity-affirming practices?<sup className="text-[#10b981]">[145]</sup></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Your Child's Input</div>
                  <div className="text-sm">Even young or nonspeaking children communicate preferences; honor them<sup className="text-[#10b981]">[146]</sup></div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Time and Intensity</div>
                  <div className="text-sm">Is the recommended intensity sustainable for your family?</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">6</div>
                <div>
                  <div className="font-bold text-[#0c264d]">Other Options</div>
                  <div className="text-sm">Are there alternative or complementary services available?</div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-sm italic text-center">
            Whatever you choose, remember that you can change course. Services should work for your family, not the other way around.
          </p>
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
          <li>Foxx, R. M. (2008). Applied behavior analysis treatment of autism: The state of the art. Child and Adolescent Psychiatric Clinics of North America, 17(4), 821-834.</li>
          <li>Wilkenfeld, D. A., & McCarthy, A. M. (2020). Ethical concerns with applied behavior analysis for autism spectrum "disorder". Kennedy Institute of Ethics Journal, 30(1), 31-69.</li>
          <li>Sandoval-Norton, A. H., & Shkedy, G. (2019). How much compliance is too much compliance: Is long-term ABA therapy abuse? Cogent Psychology, 6(1), 1641258.</li>
          <li>Cooper, J. O., Heron, T. E., & Heward, W. L. (2020). Applied behavior analysis (3rd ed.). Pearson.</li>
          <li>Baer, D. M., Wolf, M. M., & Risley, T. R. (1968). Some current dimensions of applied behavior analysis. Journal of Applied Behavior Analysis, 1(1), 91-97.</li>
          <li>Behavior Analyst Certification Board. (2020). Ethics code for behavior analysts. BACB.</li>
          <li>Fisher, W. W., Piazza, C. C., & Roane, H. S. (Eds.). (2011). Handbook of applied behavior analysis. Guilford Press.</li>
          <li>Skinner, B. F. (1953). Science and human behavior. Macmillan.</li>
          <li>Carr, E. G., & Durand, V. M. (1985). Reducing behavior problems through functional communication training. Journal of Applied Behavior Analysis, 18(2), 111-126.</li>
          <li>Sarokoff, R. A., & Sturmey, P. (2004). The effects of behavioral skills training on staff implementation of discrete-trial teaching. Journal of Applied Behavior Analysis, 37(4), 535-538.</li>
          <li>MacDuff, G. S., Krantz, P. J., & McClannahan, L. E. (2001). Prompts and prompt-fading strategies for people with autism. In C. Maurice, G. Green, & R. M. Foxx (Eds.), Making a difference: Behavioral intervention for autism (pp. 37-50). Pro-Ed.</li>
          <li>Miltenberger, R. G. (2016). Behavior modification: Principles and procedures (6th ed.). Cengage Learning.</li>
          <li>Kazdin, A. E. (2011). Single-case research designs: Methods for clinical and applied settings (2nd ed.). Oxford University Press.</li>
          <li>Stokes, T. F., & Baer, D. M. (1977). An implicit technology of generalization. Journal of Applied Behavior Analysis, 10(2), 349-367.</li>
          <li>National Autism Center. (2015). Findings and conclusions: National standards project, phase 2. National Autism Center.</li>
          <li>Green, G. (1996). Early behavioral intervention for autism: What does research tell us? In C. Maurice, G. Green, & S. C. Luce (Eds.), Behavioral intervention for young children with autism (pp. 29-44). Pro-Ed.</li>
          <li>Smith, T. (2013). What is evidence-based behavior analysis? The Behavior Analyst, 36(1), 7-33.</li>
          <li>Lovaas, O. I. (1987). Behavioral treatment and normal educational and intellectual functioning in young autistic children. Journal of Consulting and Clinical Psychology, 55(1), 3-9.</li>
          <li>Smith, T., & Eikeseth, S. (2011). O. Ivar Lovaas: Pioneer of applied behavior analysis and intervention for children with autism. Journal of Autism and Developmental Disorders, 41(3), 375-378.</li>
          <li>Smith, T. (2001). Discrete trial training in the treatment of autism. Focus on Autism and Other Developmental Disabilities, 16(2), 86-92.</li>
          <li>Maurice, C., Green, G., & Luce, S. C. (Eds.). (1996). Behavioral intervention for young children with autism: A manual for parents and professionals. Pro-Ed.</li>
          <li>Sallows, G. O., & Graupner, T. D. (2005). Intensive behavioral treatment for children with autism: Four-year outcome and predictors. American Journal on Mental Retardation, 110(6), 417-438.</li>
          <li>Gernsbacher, M. A. (2003). Is one style of early behavioral intervention "scientifically proven"? Journal of Developmental and Learning Disorders, 7(1), 19-25.</li>
          <li>Kirkham, P. (2017). 'The line between intervention and abuse'–autism and applied behaviour analysis. History of the Human Sciences, 30(2), 107-126.</li>
          <li>Kupferstein, H. (2018). Evidence of increased PTSD symptoms in autistics exposed to applied behavior analysis. Advances in Autism, 4(1), 19-29.</li>
          <li>McGill, O., & Robinson, A. (2020). "Recalling hidden harms": Autistic experiences of childhood applied behaviour analysis (ABA). Advances in Autism, 7(4), 269-282.</li>
          <li>Devita-Raeburn, E. (2016). The controversy over autism's most common therapy. Spectrum News. Retrieved from spectrumnews.org</li>
          <li>Bascom, J. (Ed.). (2012). Loud hands: Autistic people, speaking. The Autistic Press.</li>
          <li>Sequenzia, A., & Grace, E. J. (Eds.). (2015). Typed words, loud voices. Autonomous Press.</li>
          <li>Leaf, J. B., Leaf, R., McEachin, J., et al. (2016). Applied behavior analysis is a science and, therefore, progressive. Journal of Autism and Developmental Disorders, 46(2), 720-731.</li>
          <li>Rekers, G. A., & Lovaas, O. I. (1974). Behavioral treatment of deviant sex-role behaviors in a male child. Journal of Applied Behavior Analysis, 7(2), 173-190.</li>
          <li>Lindsley, O. R. (1991). From technical jargon to plain English for application. Journal of Applied Behavior Analysis, 24(3), 449-458.</li>
          <li>Brown, L., Branston, M. B., Hamre-Nietupski, S., et al. (1979). A strategy for developing chronological-age-appropriate and functional curricular content for severely handicapped adolescents and young adults. Journal of Special Education, 13(1), 81-90.</li>
          <li>Chapman, R. (2020). The reality of autism: On the metaphysics of disorder and diversity. Philosophical Psychology, 33(6), 799-819.</li>
          <li>Kupferstein, H. (2018). Evidence of increased PTSD symptoms in autistics exposed to applied behavior analysis. Advances in Autism, 4(1), 19-29.</li>
          <li>Hisle-Gorman, E., Eide, M., Coll, E. R., et al. (2018). The impact of parents' concerns and provider response on health-related quality of life for children with autism spectrum disorder. Autism, 22(8), 1031-1040.</li>
          <li>Dixon, D. R., Tarbox, J., & Najdowski, A. C. (2021). ABA and the evolution of treatment for autism. In J. L. Matson (Ed.), Handbook of applied behavior analysis for children with autism (pp. 1-12). Springer.</li>
          <li>LeBlanc, L. A., Taylor, B. A., & Marchese, N. V. (2020). The training needs of behavior analysts who serve individuals with autism spectrum disorder. Behavior Analysis in Practice, 13(1), 1-11.</li>
          <li>Schreibman, L., Dawson, G., Stahmer, A. C., et al. (2015). Naturalistic developmental behavioral interventions: Empirically validated treatments for autism spectrum disorder. Journal of Autism and Developmental Disorders, 45(8), 2411-2428.</li>
          <li>Tiede, G., & Walton, K. M. (2019). Meta-analysis of naturalistic developmental behavioral interventions for young children with autism spectrum disorder. Autism, 23(8), 2080-2095.</li>
          <li>Carr, J. E., Nosik, M. R., & DeLeon, I. G. (2018). The (questionable) future of punishment. Behavior Analysis in Practice, 11(4), 277-281.</li>
          <li>Collier, K. M. (2019). Assent and dissent in children with autism. American Journal of Bioethics, 19(12), 45-47.</li>
          <li>Nicolaidis, C., Raymaker, D., Kapp, S. K., et al. (2019). The AASPIRE practice-based guidelines for the inclusion of autistic adults in research as co-researchers and study participants. Autism, 23(8), 2007-2019.</li>
          <li>Bottema-Beutel, K., Kapp, S. K., Lester, J. N., Sasson, N. J., & Hand, B. N. (2021). Avoiding ableist language: Suggestions for autism researchers. Autism in Adulthood, 3(1), 18-29.</li>
          <li>Pellicano, E., & Stears, M. (2011). Bridging autism, science and society: Moving toward an ethically informed approach to autism research. Autism Research, 4(4), 271-282.</li>
          <li>Brookman-Frazee, L., Stahmer, A. C., Baker-Ericzén, M. J., & Tsai, K. (2006). Parental perspectives on their child's relationships with therapists: Building a therapeutic alliance in parent training programs. School Psychology Quarterly, 21(1), 100.</li>
          <li>Schreibman, L., Dawson, G., Stahmer, A. C., et al. (2015). Naturalistic developmental behavioral interventions: Empirically validated treatments for autism spectrum disorder. Journal of Autism and Developmental Disorders, 45(8), 2411-2428.</li>
          <li>Sandbank, M., Bottema-Beutel, K., Crowley, S., et al. (2020). Project AIM: Autism intervention meta-analysis for studies of young children. Psychological Bulletin, 146(1), 1-29.</li>
          <li>Vivanti, G., & Dissanayake, C. (2016). Outcome for children receiving the Early Start Denver Model before and after 48 months. Journal of Autism and Developmental Disorders, 46(7), 2441-2449.</li>
          <li>Koegel, R. L., & Koegel, L. K. (2006). Pivotal Response Treatments for autism: Communication, social, and academic development. Paul H. Brookes Publishing.</li>
          <li>Koegel, L. K., Singh, A. K., & Koegel, R. L. (2010). Improving motivation for academics in children with autism. Journal of Autism and Developmental Disorders, 40(9), 1057-1066.</li>
          <li>Koegel, R. L., Schreibman, L., Good, A., et al. (1989). How to teach pivotal behaviors to children with autism: A training manual. University of California.</li>
          <li>Koegel, L. K., Koegel, R. L., Harrower, J. K., & Carter, C. M. (1999). Pivotal response intervention I: Overview of approach. Journal of the Association for Persons with Severe Handicaps, 24(3), 174-185.</li>
          <li>Ventola, P., Saulnier, C., Steinberg, E., Chawarska, K., & Klin, A. (2014). Early-emerging social adaptive skills in toddlers with autism spectrum disorders: An item analysis. Journal of Autism and Developmental Disorders, 44(2), 283-293.</li>
          <li>Mohammadzaheri, F., Koegel, L. K., Rezaee, M., & Rafiee, S. M. (2014). A randomized clinical trial comparison between pivotal response treatment (PRT) and structured applied behavior analysis (ABA) intervention for children with autism. Journal of Autism and Developmental Disorders, 44(11), 2769-2777.</li>
          <li>Bozkus-Genc, G., & Yucesoy-Ozkan, S. (2016). Meta-analysis of pivotal response training for children with autism spectrum disorder. Education and Training in Autism and Developmental Disabilities, 51(1), 13-26.</li>
          <li>Koegel, R. L., Symon, J. B., & Koegel, L. K. (2002). Parent education for families of children with autism living in geographically distant areas. Journal of Positive Behavior Interventions, 4(2), 88-103.</li>
          <li>Dawson, G., Rogers, S., Munson, J., et al. (2010). Randomized, controlled trial of an intervention for toddlers with autism: The Early Start Denver Model. Pediatrics, 125(1), e17-e23.</li>
          <li>Rogers, S. J., & Dawson, G. (2010). Early Start Denver Model for young children with autism: Promoting language, learning, and engagement. Guilford Press.</li>
          <li>Schreibman, L., & Stahmer, A. C. (2014). A randomized trial comparison of the effects of verbal and pictorial naturalistic communication strategies on spoken language for young children with autism. Journal of Autism and Developmental Disorders, 44(5), 1244-1251.</li>
          <li>Vismara, L. A., & Rogers, S. J. (2010). Behavioral treatments in autism spectrum disorder: What do we know? Annual Review of Clinical Psychology, 6, 447-468.</li>
          <li>Dawson, G., Jones, E. J., Merkle, K., et al. (2012). Early behavioral intervention is associated with normalized brain activity in young children with autism. Journal of the American Academy of Child & Adolescent Psychiatry, 51(11), 1150-1159.</li>
          <li>Estes, A., Munson, J., Rogers, S. J., Greenson, J., Winter, J., & Dawson, G. (2015). Long-term outcomes of early intervention in 6-year-old children with autism spectrum disorder. Journal of the American Academy of Child & Adolescent Psychiatry, 54(7), 580-587.</li>
          <li>Vivanti, G., Paynter, J., Duncan, E., et al. (2014). Effectiveness and feasibility of the Early Start Denver Model implemented in a group-based community childcare setting. Journal of Autism and Developmental Disorders, 44(12), 3140-3153.</li>
          <li>Rogers, S. J., Estes, A., Lord, C., et al. (2012). Effects of a brief Early Start Denver Model (ESDM)–based parent intervention on toddlers at risk for autism spectrum disorders: A randomized controlled trial. Journal of the American Academy of Child & Adolescent Psychiatry, 51(10), 1052-1065.</li>
          <li>Hart, B. M., & Risley, T. R. (1975). Incidental teaching of language in the preschool. Journal of Applied Behavior Analysis, 8(4), 411-420.</li>
          <li>McGee, G. G., Krantz, P. J., & McClannahan, L. E. (1985). The facilitative effects of incidental teaching on preposition use by autistic children. Journal of Applied Behavior Analysis, 18(1), 17-31.</li>
          <li>Charlop-Christy, M. H., & Carpenter, M. H. (2000). Modified incidental teaching sessions: A procedure for parents to increase spontaneous speech in their children with autism. Journal of Positive Behavior Interventions, 2(2), 98-112.</li>
          <li>Carr, E. G., & Durand, V. M. (1985). Reducing behavior problems through functional communication training. Journal of Applied Behavior Analysis, 18(2), 111-126.</li>
          <li>Tiger, J. H., Hanley, G. P., & Bruzek, J. (2008). Functional communication training: A review and practical guide. Behavior Analysis in Practice, 1(1), 16-23.</li>
          <li>Durand, V. M., & Carr, E. G. (1991). Functional communication training to reduce challenging behavior: Maintenance and application in new settings. Journal of Applied Behavior Analysis, 24(2), 251-264.</li>
          <li>Wacker, D. P., Harding, J. W., Berg, W. K., et al. (2011). An evaluation of persistence of treatment effects during long-term treatment of destructive behavior. Journal of the Experimental Analysis of Behavior, 96(2), 261-282.</li>
          <li>Hagopian, L. P., Fisher, W. W., Sullivan, M. T., Acquisto, J., & LeBlanc, L. A. (1998). Effectiveness of functional communication training with and without extinction and punishment: A summary of 21 inpatient cases. Journal of Applied Behavior Analysis, 31(2), 211-235.</li>
          <li>Kurtz, P. F., Boelter, E. W., Jarmolowicz, D. P., Chin, M. D., & Hagopian, L. P. (2011). An analysis of functional communication training as an empirically supported treatment for problem behavior displayed by individuals with intellectual disabilities. Research in Developmental Disabilities, 32(6), 2935-2942.</li>
          <li>Geiger, K. B., Carr, J. E., & LeBlanc, L. A. (2010). Function-based treatments for escape-maintained problem behavior: A treatment-selection model for practicing behavior analysts. Behavior Analysis in Practice, 3(1), 22-32.</li>
          <li>Reichow, B., Hume, K., Barton, E. E., & Boyd, B. A. (2018). Early intensive behavioral intervention (EIBI) for young children with autism spectrum disorders (ASD). Cochrane Database of Systematic Reviews, 5, CD009260.</li>
          <li>Wong, C., Odom, S. L., Hume, K. A., et al. (2015). Evidence-based practices for children, youth, and young adults with autism spectrum disorder: A comprehensive review. Journal of Autism and Developmental Disorders, 45(7), 1951-1966.</li>
          <li>National Research Council. (2001). Educating children with autism. National Academy Press.</li>
          <li>Matson, J. L., & Konst, M. J. (2013). What is the evidence for long term effects of early autism interventions? Research in Autism Spectrum Disorders, 7(3), 475-479.</li>
          <li>Peters-Scheffer, N., Didden, R., Korzilius, H., & Sturmey, P. (2011). A meta-analytic study on the effectiveness of comprehensive ABA-based early intervention programs for children with autism spectrum disorders. Research in Autism Spectrum Disorders, 5(1), 60-69.</li>
          <li>Makrygianni, M. K., Gena, A., Katoudi, S., & Galanis, P. (2018). The effectiveness of applied behavior analytic interventions for children with autism spectrum disorder: A meta-analytic study. Research in Autism Spectrum Disorders, 51, 18-31.</li>
          <li>Eldevik, S., Hastings, R. P., Hughes, J. C., Jahr, E., Eikeseth, S., & Cross, S. (2009). Meta-analysis of Early Intensive Behavioral Intervention for children with autism. Journal of Clinical Child & Adolescent Psychology, 38(3), 439-450.</li>
          <li>Virues-Ortega, J. (2010). Applied behavior analytic intervention for autism in early childhood: Meta-analysis, meta-regression and dose-response meta-analysis of multiple outcomes. Clinical Psychology Review, 30(4), 387-399.</li>
          <li>Dawson, G., & Bernier, R. (2013). A quarter century of progress on the early detection and treatment of autism spectrum disorder. Development and Psychopathology, 25(4pt2), 1455-1472.</li>
          <li>Magiati, I., Charman, T., & Howlin, P. (2007). A two-year prospective follow-up study of community-based early intensive behavioural intervention and specialist nursery provision for children with autism spectrum disorders. Journal of Child Psychology and Psychiatry, 48(8), 803-812.</li>
          <li>Smith, T., Groen, A. D., & Wynn, J. W. (2000). Randomized trial of intensive early intervention for children with pervasive developmental disorder. American Journal on Mental Retardation, 105(4), 269-285.</li>
          <li>Perry, A., Cummings, A., Geier, J. D., et al. (2011). Effectiveness of intensive behavioral intervention in a large, community-based program. Research in Autism Spectrum Disorders, 5(1), 592-603.</li>
          <li>Fletcher-Watson, S., Adams, J., Brook, K., et al. (2019). Making the future together: Shaping autism research through meaningful participation. Autism, 23(4), 943-953.</li>
          <li>Bottema-Beutel, K., Crowley, S., Sandbank, M., & Woynaroski, T. G. (2021). Adverse event reporting in intervention research for young autistic children. Autism, 25(2), 322-335.</li>
          <li>Howlin, P., Magiati, I., & Charman, T. (2009). Systematic review of early intensive behavioral interventions for children with autism. American Journal on Intellectual and Developmental Disabilities, 114(1), 23-41.</li>
          <li>Eikeseth, S. (2009). Outcome of comprehensive psycho-educational interventions for young children with autism. Research in Developmental Disabilities, 30(1), 158-178.</li>
          <li>Strauss, K., Vicari, S., Valeri, G., et al. (2012). Parent inclusion in Early Intensive Behavioral Intervention: The influence of parental stress, parent treatment fidelity and parent-mediated generalization of behavior targets on child outcomes. Research in Developmental Disabilities, 33(2), 688-703.</li>
          <li>Leaf, R., & McEachin, J. (Eds.). (1999). A work in progress: Behavior management strategies and a curriculum for intensive behavioral treatment of autism. DRL Books.</li>
          <li>Hart, J. E., & Whalon, K. J. (2012). Using video self-modeling via iPads to increase academic responding of an adolescent with autism spectrum disorder and intellectual disability. Education and Training in Autism and Developmental Disabilities, 47(4), 438-446.</li>
          <li>Grindle, C. F., Hastings, R. P., Saville, M., et al. (2012). Outcomes of a behavioral education model for children with autism in a mainstream school setting. Behavior Modification, 36(3), 298-319.</li>
          <li>Kodak, T., & Grow, L. (2011). Behavioral treatment of autism. In E. A. Mayville & J. A. Mulick (Eds.), Behavioral foundations of effective autism treatment (pp. 35-63). Sloan Publishing.</li>
          <li>Kasari, C., & Smith, T. (2013). Interventions in schools for children with autism spectrum disorder: Methods and recommendations. Autism, 17(3), 254-267.</li>
          <li>Gresham, F. M., Beebe-Frankenberger, M. E., & MacMillan, D. L. (1999). A selective review of treatments for children with autism: Description and methodological considerations. School Psychology Review, 28(4), 559-575.</li>
          <li>Sansosti, F. J., & Sansosti, J. M. (2013). Effective school-based service delivery for students with autism spectrum disorders: Where we are and where we need to go. Psychology in the Schools, 50(3), 229-244.</li>
          <li>Ruble, L. A., McGrew, J. H., Dalrymple, N., & Jung, L. A. (2010). Examining the quality of IEPs for young children with autism. Journal of Autism and Developmental Disorders, 40(12), 1459-1470.</li>
          <li>Yingling, M. E., Bell, B. A., & Hock, R. M. (2018). Time use of families with children who have ASD during IDEA Part C early intervention. Topics in Early Childhood Special Education, 38(3), 174-185.</li>
          <li>Autism Speaks. (n.d.). State initiatives. Retrieved from www.autismspeaks.org</li>
          <li>Mandell, D. S., Barry, C. L., Marcus, S. C., et al. (2016). Effects of autism spectrum disorder insurance mandates on the treated prevalence of autism spectrum disorder. JAMA Pediatrics, 170(9), 887-893.</li>
          <li>Parish, S. L., Thomas, K. C., Williams, C. S., & Crossman, M. K. (2015). Autism and families' financial burden: The association with health insurance coverage. American Journal on Intellectual and Developmental Disabilities, 120(2), 166-175.</li>
          <li>Gordon-Lipkin, E., Foster, J., & Peacock, G. (2016). Whittling down the wait time: Exploring models to minimize the delay from initial concern to diagnosis and treatment of autism spectrum disorder. Pediatric Clinics, 63(5), 851-859.</li>
          <li>Vohra, R., Madhavan, S., Sambamoorthi, U., & Peter, C. S. (2014). Access to services, quality of care, and family impact for children with autism, other developmental disabilities, and other mental health conditions. Autism, 18(7), 815-826.</li>
          <li>Centers for Medicare & Medicaid Services. (n.d.). Early and Periodic Screening, Diagnostic and Treatment. Retrieved from www.medicaid.gov</li>
          <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</li>
          <li>Simpson, R. L., de Boer-Ott, S. R., & Smith-Myles, B. (2003). Inclusion of learners with autism spectrum disorders in general education settings. Topics in Language Disorders, 23(2), 116-133.</li>
          <li>Ruble, L., & McGrew, J. H. (2013). Teacher and child predictors of achieving IEP goals of children with autism. Journal of Autism and Developmental Disorders, 43(12), 2748-2763.</li>
          <li>Solomon, R., Van Egeren, L. A., Mahoney, G., Huber, M. S. Q., & Zimmerman, P. (2014). PLAY Project Home Consultation intervention program for young children with autism spectrum disorders: A randomized controlled trial. Journal of Developmental and Behavioral Pediatrics, 35(8), 475-485.</li>
          <li>Greenspan, S. I., & Wieder, S. (2006). Engaging autism: Using the Floortime approach to help children relate, communicate, and think. Da Capo Press.</li>
          <li>Gutstein, S. E., Burgess, A. F., & Montfort, K. (2007). Evaluation of the relationship development intervention program. Autism, 11(5), 397-411.</li>
          <li>Paul, R., & Norbury, C. (2012). Language disorders from infancy through adolescence (4th ed.). Elsevier.</li>
          <li>Case-Smith, J., & Arbesman, M. (2008). Evidence-based review of interventions for autism used in or of relevance to occupational therapy. American Journal of Occupational Therapy, 62(4), 416-429.</li>
          <li>Reichow, B., & Volkmar, F. R. (2010). Social skills interventions for individuals with autism: Evaluation for evidence-based practices within a best evidence synthesis framework. Journal of Autism and Developmental Disorders, 40(2), 149-166.</li>
          <li>Oono, I. P., Honey, E. J., & McConachie, H. (2013). Parent-mediated early intervention for young children with autism spectrum disorders (ASD). Evidence-Based Child Health, 8(6), 2380-2479.</li>
          <li>Stahmer, A. C., Schreibman, L., & Cunningham, A. B. (2011). Toward a technology of treatment individualization for young children with autism spectrum disorders. Brain Research, 1380, 229-239.</li>
          <li>Leaf, J. B., Leaf, R., McEachin, J., et al. (2016). Applied behavior analysis is a science and, therefore, progressive. Journal of Autism and Developmental Disorders, 46(2), 720-731.</li>
          <li>Weiss, M. J., & Delmolino, L. (2006). The relationship between early learning rates and treatment outcome for children with autism receiving intensive home-based applied behavior analysis. The Behavior Analyst Today, 7(1), 96-115.</li>
          <li>Kodak, T., & Grow, L. (2011). Behavioral treatment of autism. In E. A. Mayville & J. A. Mulick (Eds.), Behavioral foundations of effective autism treatment (pp. 35-63). Sloan Publishing.</li>
          <li>Des Roches Rosa, S., Ackerman, J., Ausherman, J., et al. (2015). Thinking person's guide to autism. Thinking Person's Guide to Autism.</li>
          <li>Nicolaidis, C., Raymaker, D., Kapp, S. K., et al. (2019). The AASPIRE practice-based guidelines for the inclusion of autistic adults in research as co-researchers and study participants. Autism, 23(8), 2007-2019.</li>
          <li>Milton, D., & Bracher, M. (2013). Autistics speak but are they heard? Medical Sociology Online, 7(2), 61-69.</li>
        </ol>
      </div>
    </div>
  );
}
