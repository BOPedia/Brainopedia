interface ASDMentalHealthProps {
  setCurrentArticle?: (article: string) => void;
}

export function ASDMentalHealth({ setCurrentArticle }: ASDMentalHealthProps) {
  return (
    <div className="max-w-4xl">
      {/* Header with back button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-[#0c264d] text-3xl">Mental Health Support for Autistic Individuals</h1>

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
          Autistic individuals experience significantly higher rates of co-occurring mental health conditions compared to 
          the general population.<sup className="text-[#10b981]">[1][2][3]</sup> This comprehensive guide explores the intersection of autism and mental 
          health, evidence-based therapeutic approaches, and how to access autism-informed mental health care.
        </p>
      </div>

      {/* SECTION: Co-occurring Conditions */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Mental Health Conditions</h2>
        
        <p className="mb-6">
          Research consistently shows autistic people have elevated rates of psychiatric conditions:<sup className="text-[#10b981]">[4][5]</sup>
        </p>

        {/* Prevalence Grid */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Prevalence of Co-occurring Conditions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Anxiety Disorders<sup className="text-[#10b981]">[6][7][8]</sup></div>
              <div className="text-sm">40-50% of autistic individuals, compared to 15% in general population</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Depression<sup className="text-[#10b981]">[9][10][11]</sup></div>
              <div className="text-sm">20-37% prevalence, with higher rates in adolescence and adulthood</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">ADHD<sup className="text-[#10b981]">[12][13]</sup></div>
              <div className="text-sm">30-80% co-occurrence, depending on study</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">OCD<sup className="text-[#10b981]">[14][15]</sup></div>
              <div className="text-sm">Up to 25% of autistic individuals</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Eating Disorders<sup className="text-[#10b981]">[16][17][18]</sup></div>
              <div className="text-sm">Higher prevalence, particularly ARFID and anorexia</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Bipolar Disorder<sup className="text-[#10b981]">[19][20]</sup></div>
              <div className="text-sm">6-27% of autistic individuals</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">PTSD<sup className="text-[#10b981]">[21][22][23]</sup></div>
              <div className="text-sm">Elevated rates, particularly in those who experienced ABA or bullying</div>
            </div>
          </div>
        </div>

        {/* Why Are Rates So High */}
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-5 rounded">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Why Are Rates So High?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">•</span>
              <span className="text-sm"><strong>Sensory overwhelm:</strong> Constant bombardment from sensory stimuli<sup className="text-[#10b981]">[24][25]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">•</span>
              <span className="text-sm"><strong>Social stress:</strong> Navigating neurotypical social expectations<sup className="text-[#10b981]">[26][27]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">•</span>
              <span className="text-sm"><strong>Masking/camouflaging:</strong> Suppressing autistic traits leads to exhaustion and poor mental health<sup className="text-[#10b981]">[28][29][30]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">•</span>
              <span className="text-sm"><strong>Stigma and discrimination:</strong> Experiencing ableism and exclusion<sup className="text-[#10b981]">[31][32]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">•</span>
              <span className="text-sm"><strong>Trauma:</strong> Higher rates of bullying, abuse, and invalidating experiences<sup className="text-[#10b981]">[33][34]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">•</span>
              <span className="text-sm"><strong>Minority stress:</strong> Being a neurological minority in neurotypical environments<sup className="text-[#10b981]">[35]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#0c264d] font-bold">•</span>
              <span className="text-sm"><strong>Alexithymia:</strong> Difficulty identifying emotions may delay recognition of mental health issues<sup className="text-[#10b981]">[36][37]</sup></span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Diagnostic Challenges */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Challenges</h2>
        
        <p className="mb-6">
          Identifying mental health conditions in autistic individuals is complicated by overlapping symptoms and 
          diagnostic overshadowing.<sup className="text-[#10b981]">[38][39]</sup>
        </p>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Diagnostic Issues</h3>
          
          <div className="space-y-2">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Diagnostic Overshadowing<sup className="text-[#10b981]">[40][41]</sup></div>
              <div className="text-sm">Attributing all symptoms to autism rather than recognizing separate conditions</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Atypical Presentations<sup className="text-[#10b981]">[42][43]</sup></div>
              <div className="text-sm">Mental health conditions may manifest differently in autism</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Alexithymia<sup className="text-[#10b981]">[44]</sup></div>
              <div className="text-sm">Difficulty articulating emotional experiences</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Communication Differences<sup className="text-[#10b981]">[45]</sup></div>
              <div className="text-sm">Challenges describing internal states</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Overlapping Symptoms<sup className="text-[#10b981]">[46]</sup></div>
              <div className="text-sm">Anxiety and autism both involve repetitive behaviors, social withdrawal</div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Recognizing Mental Health Concerns</h3>
          <p className="mb-4 text-sm">
            Signs that warrant mental health evaluation:<sup className="text-[#10b981]">[47]</sup>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">⚠</span>
              <span className="text-sm">Changes in eating or sleeping patterns<sup className="text-[#10b981]">[48]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">⚠</span>
              <span className="text-sm">Increase in meltdowns or shutdowns<sup className="text-[#10b981]">[49]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">⚠</span>
              <span className="text-sm">Loss of previously acquired skills<sup className="text-[#10b981]">[50]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">⚠</span>
              <span className="text-sm">Increased social withdrawal beyond baseline<sup className="text-[#10b981]">[51]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">⚠</span>
              <span className="text-sm">New or intensified repetitive behaviors<sup className="text-[#10b981]">[52]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">⚠</span>
              <span className="text-sm">Talk of death or self-harm<sup className="text-[#10b981]">[53]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">⚠</span>
              <span className="text-sm">Loss of interest in special interests<sup className="text-[#10b981]">[54]</sup></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] font-bold">⚠</span>
              <span className="text-sm">Increased irritability or emotional dysregulation<sup className="text-[#10b981]">[55]</sup></span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Autism-Informed Mental Health Care */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Autism-Informed Mental Health Care</h2>

        <p className="mb-6">
          Traditional therapy approaches often need modification for autistic individuals.<sup className="text-[#10b981]">[56][57]</sup> Autism-informed 
          therapists understand neurological differences and adapt their approach accordingly.<sup className="text-[#10b981]">[58]</sup>
        </p>

        <div className="bg-white p-5 rounded-md shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Characteristics of Autism-Informed Therapy</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Neurodiversity-Affirming<sup className="text-[#10b981]">[59][60]</sup></div>
                <div className="text-sm">Views autism as a difference, not a disorder to cure</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Explicit Communication<sup className="text-[#10b981]">[61]</sup></div>
                <div className="text-sm">Direct, clear language without relying on hints</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Concrete Strategies<sup className="text-[#10b981]">[62]</sup></div>
                <div className="text-sm">Specific, actionable skills rather than abstract concepts</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Visual Supports<sup className="text-[#10b981]">[63]</sup></div>
                <div className="text-sm">Using written materials, diagrams, or handouts</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Sensory Considerations<sup className="text-[#10b981]">[64]</sup></div>
                <div className="text-sm">Appropriate lighting, seating options, fidgets available</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Flexible Format<sup className="text-[#10b981]">[65]</sup></div>
                <div className="text-sm">Walk-and-talk, side-by-side seating, virtual options</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Special Interest Integration<sup className="text-[#10b981]">[66]</sup></div>
                <div className="text-sm">Using interests as therapeutic tools</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Understanding Masking<sup className="text-[#10b981]">[67]</sup></div>
                <div className="text-sm">Recognizing when client is camouflaging</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Evidence-Based Approaches */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evidence-Based Therapeutic Approaches</h2>
        
        {/* CBT */}
        <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cognitive Behavioral Therapy (CBT)</h3>
          <p className="mb-4">
            CBT modified for autism is effective for anxiety and depression.<sup className="text-[#10b981]">[68][69][70]</sup>
          </p>
          
          <div className="bg-white p-4 rounded mb-4">
            <h4 className="text-[#0c264d] font-bold mb-3">Autism Adaptations for CBT</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="text-sm">
                <strong>Structured format:</strong> Predictable session structure with clear agenda<sup className="text-[#10b981]">[71]</sup>
              </div>
              <div className="text-sm">
                <strong>Concrete examples:</strong> Using real-life situations rather than hypotheticals<sup className="text-[#10b981]">[72]</sup>
              </div>
              <div className="text-sm">
                <strong>Visual worksheets:</strong> Written thought records and diagrams<sup className="text-[#10b981]">[73]</sup>
              </div>
              <div className="text-sm">
                <strong>Literal language:</strong> Avoiding metaphors and idioms<sup className="text-[#10b981]">[74]</sup>
              </div>
              <div className="text-sm">
                <strong>Special interest incorporation:</strong> Using interests to explain concepts<sup className="text-[#10b981]">[75]</sup>
              </div>
              <div className="text-sm">
                <strong>Parent/caregiver involvement:</strong> Support for homework completion<sup className="text-[#10b981]">[76]</sup>
              </div>
            </div>
          </div>
          
          <p className="text-sm italic">
            <strong>Programs:</strong> Exploring Feelings (Tony Attwood), Behavioural Intervention for Anxiety in Children with Autism (BIACA), 
            Facing Your Fears<sup className="text-[#10b981]">[77][78][79]</sup>
          </p>
        </div>

        {/* DBT, ACT, CFT in grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dialectical Behavior Therapy (DBT)</h3>
            <p className="text-sm mb-4">
              DBT teaches skills for emotion regulation, distress tolerance, interpersonal effectiveness, and mindfulness.<sup className="text-[#10b981]">[80][81]</sup>
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Emotion regulation:</strong> Identifying and managing intense emotions<sup className="text-[#10b981]">[82]</sup></p>
              <p><strong>Distress tolerance:</strong> Coping with difficult situations<sup className="text-[#10b981]">[83]</sup></p>
              <p><strong>Mindfulness:</strong> Present-moment awareness<sup className="text-[#10b981]">[84]</sup></p>
              <p><strong>Interpersonal effectiveness:</strong> Communication and boundary-setting<sup className="text-[#10b981]">[85]</sup></p>
              <p className="italic">Promising for emotion dysregulation and self-harm in autism<sup className="text-[#10b981]">[86][87]</sup></p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Acceptance and Commitment Therapy (ACT)</h3>
            <p className="text-sm mb-4">
              ACT focuses on psychological flexibility, values clarification, and committed action.<sup className="text-[#10b981]">[88][89]</sup>
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Acceptance:</strong> Making space for difficult thoughts and feelings<sup className="text-[#10b981]">[90]</sup></p>
              <p><strong>Defusion:</strong> Changing relationship with thoughts<sup className="text-[#10b981]">[91]</sup></p>
              <p><strong>Values work:</strong> Identifying what matters most<sup className="text-[#10b981]">[92]</sup></p>
              <p><strong>Committed action:</strong> Behavior change aligned with values<sup className="text-[#10b981]">[93]</sup></p>
              <p className="italic">Less reliance on cognitive restructuring, honors autistic thinking<sup className="text-[#10b981]">[94]</sup></p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Compassion-Focused Therapy (CFT)</h3>
            <p className="text-sm mb-4">
              CFT addresses shame and self-criticism, common in autistic individuals.<sup className="text-[#10b981]">[95][96]</sup>
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Self-compassion:</strong> Treating oneself with kindness<sup className="text-[#10b981]">[97]</sup></p>
              <p><strong>Shame reduction:</strong> Addressing internalized ableism<sup className="text-[#10b981]">[98]</sup></p>
              <p><strong>Common humanity:</strong> Recognizing shared human experiences<sup className="text-[#10b981]">[99]</sup></p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Medication Considerations */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medication Considerations</h2>
        
        <p className="mb-6">
          While no medications treat autism itself, psychiatric medications can address co-occurring conditions.<sup className="text-[#10b981]">[100][101]</sup>
        </p>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Medications</h3>
          
          <div className="space-y-3">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">SSRIs (for anxiety/depression)<sup className="text-[#10b981]">[102][103]</sup></div>
              <div className="text-sm">Fluoxetine, sertraline, escitalopram</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Stimulants (for ADHD)<sup className="text-[#10b981]">[104][105]</sup></div>
              <div className="text-sm">Methylphenidate, amphetamine</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Atypical Antipsychotics<sup className="text-[#10b981]">[106][107]</sup></div>
              <div className="text-sm">Risperidone, aripiprazole (FDA-approved for autism-associated irritability)</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Alpha-2 Agonists<sup className="text-[#10b981]">[108]</sup></div>
              <div className="text-sm">Guanfacine, clonidine for hyperactivity and impulsivity</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Melatonin (for sleep)<sup className="text-[#10b981]">[109][110]</sup></div>
              <div className="text-sm">Commonly used and generally safe</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Special Considerations</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Medication Sensitivity:</strong> Autistic individuals may be more sensitive to side effects<sup className="text-[#10b981]">[111][112]</sup></p>
            <p><strong>Communication Challenges:</strong> May have difficulty reporting side effects<sup className="text-[#10b981]">[113]</sup></p>
            <p><strong>Start Low, Go Slow:</strong> Begin with lower doses and titrate carefully<sup className="text-[#10b981]">[114]</sup></p>
            <p><strong>Monitor Carefully:</strong> Watch for behavioral changes or adverse effects<sup className="text-[#10b981]">[115]</sup></p>
            <p><strong>Prescriber Experience:</strong> Choose psychiatrists with autism expertise<sup className="text-[#10b981]">[116]</sup></p>
          </div>
        </div>
      </div>

      {/* SECTION: Trauma-Informed Care */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Trauma-Informed Care</h2>
        
        <p className="mb-6">
          Many autistic individuals have experienced trauma from bullying, abuse, medical procedures, restraint, ABA, 
          or invalidating experiences.<sup className="text-[#10b981]">[117][118][119]</sup>
        </p>

        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-5 rounded mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Principles of Trauma-Informed Care</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
              <div>
                <div className="font-bold text-[#0c264d]">Safety<sup className="text-[#10b981]">[120]</sup></div>
                <div className="text-sm">Physical and emotional safety in therapeutic environment</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
              <div>
                <div className="font-bold text-[#0c264d]">Trustworthiness<sup className="text-[#10b981]">[121]</sup></div>
                <div className="text-sm">Clear boundaries and consistent follow-through</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
              <div>
                <div className="font-bold text-[#0c264d]">Choice<sup className="text-[#10b981]">[122]</sup></div>
                <div className="text-sm">Autonomy and control in treatment decisions</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
              <div>
                <div className="font-bold text-[#0c264d]">Collaboration<sup className="text-[#10b981]">[123]</sup></div>
                <div className="text-sm">Shared power in therapeutic relationship</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#0c264d] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">5</div>
              <div>
                <div className="font-bold text-[#0c264d]">Empowerment<sup className="text-[#10b981]">[124]</sup></div>
                <div className="text-sm">Building on strengths</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Trauma Therapies</h3>
          <div className="space-y-2 text-sm">
            <p><strong>EMDR (Eye Movement Desensitization and Reprocessing):</strong> Can be adapted for autism<sup className="text-[#10b981]">[125][126]</sup></p>
            <p><strong>Trauma-Focused CBT:</strong> Modified for autistic processing<sup className="text-[#10b981]">[127]</sup></p>
            <p><strong>Somatic Therapies:</strong> Body-based approaches like Somatic Experiencing<sup className="text-[#10b981]">[128]</sup></p>
          </div>
        </div>
      </div>

      {/* SECTION: Finding Providers */}
      <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Finding Autism-Informed Mental Health Providers</h2>
        
        <div className="bg-white p-5 rounded-md shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Questions to Ask Potential Therapists</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">?</div>
              <div>What is your training and experience working with autistic individuals?<sup className="text-[#10b981]">[129]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">?</div>
              <div>What is your understanding of neurodiversity?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">?</div>
              <div>How do you modify your approach for autistic clients?<sup className="text-[#10b981]">[130]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">?</div>
              <div>Are you familiar with masking and autistic burnout?<sup className="text-[#10b981]">[131]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">?</div>
              <div>How do you handle communication differences and alexithymia?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">?</div>
              <div>Do you offer alternatives to traditional talk therapy (walk-and-talk, art, written)?<sup className="text-[#10b981]">[132]</sup></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">?</div>
              <div>How do you create a sensory-friendly environment?</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#10b981] mt-1">?</div>
              <div>Do you work with autistic consultants or advisors?</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Psychology Today</h3>
            <p className="text-sm">Filter for autism specialization<sup className="text-[#10b981]">[133]</sup></p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Autistic-Led Directories</h3>
            <p className="text-sm">Some communities maintain lists of autism-affirming therapists</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Autism Organizations</h3>
            <p className="text-sm">Ask for referrals from local autism groups</p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2">Word of Mouth</h3>
            <p className="text-sm">Recommendations from other autistic individuals or families<sup className="text-[#10b981]">[134]</sup></p>
          </div>
          <div className="bg-white p-4 rounded-md border-l-4 border-[#2abcd4] shadow-sm col-span-1 md:col-span-2">
            <h3 className="text-[#0c264d] font-bold mb-2">Teletherapy</h3>
            <p className="text-sm">Expands access to specialized providers<sup className="text-[#10b981]">[135]</sup></p>
          </div>
        </div>
      </div>

      {/* SECTION: Self-Care and Prevention */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Care and Mental Health Prevention</h2>
        
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Protective Factors</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Acceptance & Self-Compassion<sup className="text-[#10b981]">[136][137]</sup></div>
                <div className="text-sm">Positive autistic identity</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Accommodations<sup className="text-[#10b981]">[138]</sup></div>
                <div className="text-sm">Sensory, communication, and environmental supports</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Community<sup className="text-[#10b981]">[139]</sup></div>
                <div className="text-sm">Connection with other autistic people</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Reduced Masking<sup className="text-[#10b981]">[140]</sup></div>
                <div className="text-sm">Environments where autistic traits are accepted</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Special Interests<sup className="text-[#10b981]">[141]</sup></div>
                <div className="text-sm">Time to engage in passions</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Routine & Predictability<sup className="text-[#10b981]">[142]</sup></div>
                <div className="text-sm">Structured environments</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
              <div>
                <div className="font-bold text-[#0c264d]">Autonomy<sup className="text-[#10b981]">[143]</sup></div>
                <div className="text-sm">Control over one's environment and choices</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Crisis Resources */}
      <div className="bg-[#ffd166] border-2 border-[#0c264d] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center gap-2">
          <span className="text-2xl">⚠️</span> Crisis Resources
        </h2>
        
        <p className="mb-6">
          Autistic individuals are at elevated risk for suicidal thoughts and behaviors.<sup className="text-[#10b981]">[144][145][146]</sup>
        </p>

        <div className="bg-white p-5 rounded-md shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">If You Need Immediate Help</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="text-[#0c264d] font-bold text-xl">☎</div>
              <div>
                <div className="font-bold">988 Suicide & Crisis Lifeline</div>
                <div className="text-sm">Call or text 988 (U.S.)</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#0c264d] font-bold text-xl">💬</div>
              <div>
                <div className="font-bold">Crisis Text Line</div>
                <div className="text-sm">Text "HELLO" to 741741</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#0c264d] font-bold text-xl">🌈</div>
              <div>
                <div className="font-bold">Trevor Project (LGBTQ+ youth)</div>
                <div className="text-sm">1-866-488-7386 or text START to 678678</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-[#0c264d] font-bold text-xl">🚨</div>
              <div>
                <div className="font-bold">Emergency Services</div>
                <div className="text-sm">Call 911 or go to nearest emergency room</div>
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
          <li>Croen, L. A., Zerbo, O., Qian, Y., et al. (2015). The health status of adults on the autism spectrum. Autism, 19(7), 814-823.</li>
          <li>Hollocks, M. J., Lerh, J. W., Magiati, I., Meiser-Stedman, R., & Brugha, T. S. (2019). Anxiety and depression in adults with autism spectrum disorder: A systematic review and meta-analysis. Psychological Medicine, 49(4), 559-572.</li>
          <li>Lever, A. G., & Geurts, H. M. (2016). Psychiatric co-occurring symptoms and disorders in young, middle-aged, and older adults with autism spectrum disorder. Journal of Autism and Developmental Disorders, 46(6), 1916-1930.</li>
          <li>Simonoff, E., Pickles, A., Charman, T., Chandler, S., Loucas, T., & Baird, G. (2008). Psychiatric disorders in children with autism spectrum disorders: Prevalence, comorbidity, and associated factors in a population-derived sample. Journal of the American Academy of Child & Adolescent Psychiatry, 47(8), 921-929.</li>
          <li>Joshi, G., Petty, C., Wozniak, J., et al. (2010). The heavy burden of psychiatric comorbidity in youth with autism spectrum disorders: A large comparative study of a psychiatrically referred population. Journal of Autism and Developmental Disorders, 40(11), 1361-1370.</li>
          <li>van Steensel, F. J., Bögels, S. M., & Perrin, S. (2011). Anxiety disorders in children and adolescents with autistic spectrum disorders: A meta-analysis. Clinical Child and Family Psychology Review, 14(3), 302-317.</li>
          <li>White, S. W., Oswald, D., Ollendick, T., & Scahill, L. (2009). Anxiety in children and adolescents with autism spectrum disorders. Clinical Psychology Review, 29(3), 216-229.</li>
          <li>Vasa, R. A., Carroll, L. M., Nozzolillo, A. A., et al. (2014). A systematic review of treatments for anxiety in youth with autism spectrum disorders. Journal of Autism and Developmental Disorders, 44(12), 3215-3229.</li>
          <li>Stewart, M. E., Barnard, L., Pearson, J., Hasan, R., & O'Brien, G. (2006). Presentation of depression in autism and Asperger syndrome: A review. Autism, 10(1), 103-116.</li>
          <li>Ghaziuddin, M., Ghaziuddin, N., & Greden, J. (2002). Depression in persons with autism: Implications for research and clinical care. Journal of Autism and Developmental Disorders, 32(4), 299-306.</li>
          <li>Hudson, C. C., Hall, L., & Harkness, K. L. (2019). Prevalence of depressive disorders in individuals with autism spectrum disorder: A meta-analysis. Journal of Abnormal Child Psychology, 47(1), 165-175.</li>
          <li>Rommelse, N. N., Franke, B., Geurts, H. M., Hartman, C. A., & Buitelaar, J. K. (2010). Shared heritability of attention-deficit/hyperactivity disorder and autism spectrum disorder. European Child & Adolescent Psychiatry, 19(3), 281-295.</li>
          <li>Leitner, Y. (2014). The co-occurrence of autism and attention deficit hyperactivity disorder in children–what do we know? Frontiers in Human Neuroscience, 8, 268.</li>
          <li>Paula-Pérez, I. (2013). Differential diagnosis between obsessive compulsive disorder and restrictive and repetitive behavioural patterns, activities and interests in autism spectrum disorders. Revista de Psiquiatría y Salud Mental, 6(4), 178-186.</li>
          <li>Meier, S. M., Petersen, L., Schendel, D. E., Mattheisen, M., Mortensen, P. B., & Mors, O. (2015). Obsessive-compulsive disorder and autism spectrum disorders: Longitudinal and offspring risk. PLoS One, 10(11), e0141703.</li>
          <li>Westwood, H., & Tchanturia, K. (2017). Autism spectrum disorder in anorexia nervosa: An updated literature review. Current Psychiatry Reports, 19(7), 41.</li>
          <li>Karjalainen, L., Gillberg, C., Råstam, M., & Wentz, E. (2016). Eating disorders and eating pathology in young adult and adult patients with ESSENCE. Comprehensive Psychiatry, 66, 79-86.</li>
          <li>Kinnaird, E., Norton, C., & Tchanturia, K. (2017). Clinicians' views on working with anorexia nervosa and autism spectrum disorder comorbidity: A qualitative study. BMC Psychiatry, 17(1), 292.</li>
          <li>Joshi, G., Wozniak, J., Petty, C., et al. (2013). Psychiatric comorbidity and functioning in a clinically referred population of adults with autism spectrum disorders: A comparative study. Journal of Autism and Developmental Disorders, 43(6), 1314-1325.</li>
          <li>Mazzone, L., Ruta, L., & Reale, L. (2012). Psychiatric comorbidities in asperger syndrome and high functioning autism: Diagnostic challenges. Annals of General Psychiatry, 11(1), 16.</li>
          <li>Rumball, F., Happé, F., & Grey, N. (2020). Experience of trauma and PTSD symptoms in autistic adults: Risk of PTSD development following DSM-5 and non-DSM-5 traumatic life events. Autism Research, 13(12), 2122-2132.</li>
          <li>Haruvi-Lamdan, N., Horesh, D., & Golan, O. (2018). PTSD and autism spectrum disorder: Co-morbidity, gaps in research, and potential shared mechanisms. Psychological Trauma: Theory, Research, Practice, and Policy, 10(3), 290-299.</li>
          <li>Kupferstein, H. (2018). Evidence of increased PTSD symptoms in autistics exposed to applied behavior analysis. Advances in Autism, 4(1), 19-29.</li>
          <li>Kern, J. K., Trivedi, M. H., Garver, C. R., et al. (2006). The pattern of sensory processing abnormalities in autism. Autism, 10(5), 480-494.</li>
          <li>Liss, M., Saulnier, C., Fein, D., & Kinsbourne, M. (2006). Sensory and attention abnormalities in autistic spectrum disorders. Autism, 10(2), 155-172.</li>
          <li>Botha, M., & Frost, D. M. (2020). Extending the minority stress model to understand mental health problems experienced by the autistic population. Society and Mental Health, 10(1), 20-34.</li>
          <li>Cage, E., Di Monaco, J., & Newell, V. (2018). Experiences of autism acceptance and mental health in autistic adults. Journal of Autism and Developmental Disorders, 48(2), 473-484.</li>
          <li>Hull, L., Petrides, K. V., Allison, C., et al. (2017). "Putting on my best normal": Social camouflaging in adults with autism spectrum conditions. Journal of Autism and Developmental Disorders, 47(8), 2519-2534.</li>
          <li>Cage, E., & Troxell-Whitman, Z. (2019). Understanding the reasons, contexts and costs of camouflaging for autistic adults. Journal of Autism and Developmental Disorders, 49(5), 1899-1911.</li>
          <li>Cassidy, S., Bradley, L., Shaw, R., & Baron-Cohen, S. (2018). Risk markers for suicidality in autistic adults. Molecular Autism, 9(1), 42.</li>
          <li>Botha, M., Hanlon, J., & Williams, G. L. (2021). Does language matter? Identity-first versus person-first language use in autism research: A response to Vivanti. Journal of Autism and Developmental Disorders, 52(2), 870-878.</li>
          <li>Pellicano, E., & den Houting, J. (2022). Annual research review: Shifting from 'normal science' to neurodiversity in autism science. Journal of Child Psychology and Psychiatry, 63(4), 381-396.</li>
          <li>Shtayermman, O. (2007). Peer victimization in adolescents and young adults diagnosed with Asperger's Syndrome: A link to depressive symptomatology, anxiety symptomatology and suicidal ideation. Issues in Comprehensive Pediatric Nursing, 30(3), 87-107.</li>
          <li>Mandell, D. S., Walrath, C. M., Manteuffel, B., Sgro, G., & Pinto-Martin, J. A. (2005). The prevalence and correlates of abuse among children with autism served in comprehensive community-based mental health settings. Child Abuse & Neglect, 29(12), 1359-1372.</li>
          <li>Botha, M., & Frost, D. M. (2020). Extending the minority stress model to understand mental health problems experienced by the autistic population. Society and Mental Health, 10(1), 20-34.</li>
          <li>Bird, G., & Cook, R. (2013). Mixed emotions: The contribution of alexithymia to the emotional symptoms of autism. Translational Psychiatry, 3(7), e285.</li>
          <li>Kinnaird, E., Stewart, C., & Tchanturia, K. (2019). Investigating alexithymia in autism: A systematic review and meta-analysis. European Psychiatry, 55, 80-89.</li>
          <li>Matson, J. L., & Shoemaker, M. (2009). Intellectual disability and its relationship to autism spectrum disorders. Research in Developmental Disabilities, 30(6), 1107-1114.</li>
          <li>Tsakanikos, E., Costello, H., Holt, G., Bouras, N., Sturmey, P., & Newton, T. (2006). Psychopathology in adults with autism and intellectual disability. Journal of Autism and Developmental Disorders, 36(8), 1123-1129.</li>
          <li>Reiss, S., Levitan, G. W., & Szyszko, J. (1982). Emotional disturbance and mental retardation: Diagnostic overshadowing. American Journal of Mental Deficiency, 86(6), 567-574.</li>
          <li>Jopp, D. A., & Keys, C. B. (2001). Diagnostic overshadowing reviewed and reconsidered. American Journal on Mental Retardation, 106(5), 416-433.</li>
          <li>Ghaziuddin, M., & Zafar, S. (2008). Psychiatric comorbidity of adults with autism spectrum disorders. Clinical Neuropsychiatry, 5(1), 9-12.</li>
          <li>Hofvander, B., Delorme, R., Chaste, P., et al. (2009). Psychiatric and psychosocial problems in adults with normal-intelligence autism spectrum disorders. BMC Psychiatry, 9(1), 35.</li>
          <li>Berthoz, S., & Hill, E. L. (2005). The validity of using self-reports to assess emotion regulation abilities in adults with autism spectrum disorder. European Psychiatry, 20(3), 291-298.</li>
          <li>Tager-Flusberg, H., & Kasari, C. (2013). Minimally verbal school-aged children with autism spectrum disorder: The neglected end of the spectrum. Autism Research, 6(6), 468-478.</li>
          <li>Kerns, C. M., Kendall, P. C., Zickgraf, H., Franklin, M. E., Miller, J., & Herrington, J. (2015). Not to be overshadowed or overlooked: Functional impairments associated with comorbid anxiety disorders in youth with ASD. Behavior Therapy, 46(1), 29-39.</li>
          <li>Mazzone, L., Ruta, L., & Reale, L. (2012). Psychiatric comorbidities in asperger syndrome and high functioning autism: Diagnostic challenges. Annals of General Psychiatry, 11(1), 16.</li>
          <li>Hedley, D., & Young, R. (2006). Social comparison processes and depressive symptoms in children and adolescents with Asperger syndrome. Autism, 10(2), 139-153.</li>
          <li>Mazefsky, C. A., Herrington, J., Siegel, M., et al. (2013). The role of emotion regulation in autism spectrum disorder. Journal of the American Academy of Child & Adolescent Psychiatry, 52(7), 679-688.</li>
          <li>Smith, I. C., & White, S. W. (2020). Socio-emotional determinants of depressive symptoms in adolescents and adults with autism spectrum disorder: A systematic review. Autism, 24(4), 995-1010.</li>
          <li>Mazefsky, C. A., Conner, C. M., & Oswald, D. P. (2010). Association between depression and anxiety in high-functioning children with autism spectrum disorders and maternal mood symptoms. Autism Research, 3(3), 120-127.</li>
          <li>Rieffe, C., Oosterveld, P., Terwogt, M. M., Mootz, S., van Leeuwen, E., & Stockmann, L. (2011). Emotion regulation and internalizing symptoms in children with autism spectrum disorders. Autism, 15(6), 655-670.</li>
          <li>Hirvikoski, T., & Blomqvist, M. (2015). High self-perceived stress and poor coping in intellectually able adults with autism spectrum disorder. Autism, 19(6), 752-757.</li>
          <li>Chandrasekhar, T., & Sikich, L. (2015). Challenges in the diagnosis and treatment of depression in autism spectrum disorders across the lifespan. Dialogues in Clinical Neuroscience, 17(2), 219-227.</li>
          <li>Spain, D., Sin, J., Linder, K. B., McMahon, J., & Happé, F. (2018). Social anxiety in autism spectrum disorder: A systematic review. Research in Autism Spectrum Disorders, 52, 51-68.</li>
          <li>Vasa, R. A., Mazurek, M. O., Mahajan, R., et al. (2016). Assessment and treatment of anxiety in youth with autism spectrum disorders. Pediatrics, 137(Supplement 2), S115-S123.</li>
          <li>Anderson, S., & Morris, J. (2006). Cognitive behaviour therapy for people with Asperger syndrome. Behavioural and Cognitive Psychotherapy, 34(3), 293-303.</li>
          <li>Spain, D., & Blainey, S. H. (2015). Group social skills interventions for adults with high-functioning autism spectrum disorders: A systematic review. Autism, 19(7), 874-886.</li>
          <li>Nicolaidis, C., Raymaker, D., Kapp, S. K., et al. (2019). The AASPIRE practice-based guidelines for the inclusion of autistic adults in research as co-researchers and study participants. Autism, 23(8), 2007-2019.</li>
          <li>Milton, D. E. M. (2014). Autistic expertise: A critical reflection on the production of knowledge in autism studies. Autism, 18(7), 794-802.</li>
          <li>Kapp, S. K., Steward, R., Crane, L., et al. (2019). 'People should be allowed to do what they like': Autistic adults' views and experiences of stimming. Autism, 23(7), 1782-1792.</li>
          <li>Attwood, T. (2004). Exploring feelings: Cognitive behaviour therapy to manage anger. Future Horizons.</li>
          <li>Wood, J. J., & Drahota, A. (2005). Behavioral interventions for anxiety in children with autism. In D. Zager (Ed.), Autism spectrum disorders: Identification, education, and treatment (3rd ed., pp. 415-432). Lawrence Erlbaum Associates.</li>
          <li>Sofronoff, K., Attwood, T., & Hinton, S. (2005). A randomised controlled trial of a CBT intervention for anxiety in children with Asperger syndrome. Journal of Child Psychology and Psychiatry, 46(11), 1152-1160.</li>
          <li>Reaven, J., Blakeley-Smith, A., Culhane-Shelburne, K., & Hepburn, S. (2012). Group cognitive behavior therapy for children with high-functioning autism spectrum disorders and anxiety: A randomized trial. Journal of Child Psychology and Psychiatry, 53(4), 410-419.</li>
          <li>Chalfant, A. M., Rapee, R., & Carroll, L. (2007). Treating anxiety disorders in children with high functioning autism spectrum disorders: A controlled trial. Journal of Autism and Developmental Disorders, 37(10), 1842-1857.</li>
          <li>Wood, J. J., Drahota, A., Sze, K., et al. (2009). Cognitive behavioral therapy for anxiety in children with autism spectrum disorders: A randomized, controlled trial. Journal of Child Psychology and Psychiatry, 50(3), 224-234.</li>
          <li>Moree, B. N., & Davis III, T. E. (2010). Cognitive-behavioral therapy for anxiety in children diagnosed with autism spectrum disorders: Modification trends. Research in Autism Spectrum Disorders, 4(3), 346-354.</li>
          <li>Spek, A. A., van Ham, N. C., & Nyklíček, I. (2013). Mindfulness-based therapy in adults with an autism spectrum disorder: A randomized controlled trial. Research in Developmental Disabilities, 34(1), 246-253.</li>
          <li>Scarpa, A., & Reyes, N. M. (2011). Improving emotion regulation with CBT in young children with high functioning autism spectrum disorders: A pilot study. Behavioural and Cognitive Psychotherapy, 39(4), 495-500.</li>
          <li>Attwood, T. (2004). Cognitive behaviour therapy for children and adults with Asperger's syndrome. Behaviour Change, 21(3), 147-161.</li>
          <li>Gaus, V. L. (2007). Cognitive-behavioral therapy for adult Asperger syndrome. Guilford Press.</li>
          <li>Weiss, J. A., & Lunsky, Y. (2010). Group cognitive behaviour therapy for adults with Asperger syndrome and anxiety or mood disorder: A case series. Clinical Psychology & Psychotherapy, 17(5), 438-446.</li>
          <li>Pahnke, J., Lundgren, T., Hursti, T., & Hirvikoski, T. (2014). Outcomes of an acceptance and commitment therapy-based skills training group for students with high-functioning autism spectrum disorder: A quasi-experimental pilot study. Autism, 18(8), 953-964.</li>
          <li>Roche, L., Kroska, A., Miller, M. L., Kroska, E. B., & O'Hara, M. W. (2019). Feasibility and acceptability of a pilot study examining an ACT treatment for depressed adults with autism spectrum disorder. Journal of Contextual Behavioral Science, 11, 44-50.</li>
          <li>Spek, A. A., van Ham, N. C., & Nyklíček, I. (2013). Mindfulness-based therapy in adults with an autism spectrum disorder: A randomized controlled trial. Research in Developmental Disabilities, 34(1), 246-253.</li>
          <li>Chapman, L., Morabito, D., Ladakakos, C., Schreier, H., & Knudson, M. M. (2001). The effectiveness of art therapy interventions in reducing post traumatic stress disorder (PTSD) symptoms in pediatric trauma patients. Art Therapy, 18(2), 100-104.</li>
          <li>Chapman, R., & Botha, M. (2022). Neurodivergence-informed therapy. Developmental Medicine & Child Neurology, 65(3), 310-317.</li>
          <li>Kerns, C. M., Wood, J. J., Kendall, P. C., et al. (2016). The treatment of anxiety in autism spectrum disorder (TAASD) study: Rationale, design and methods. Journal of Child and Family Studies, 25(6), 1889-1902.</li>
          <li>Bemmouna, D., Coutelle, R., Weibel, S., & Weiner, L. (2022). Feasibility, acceptability and preliminary efficacy of dialectical behavior therapy for autistic adults without intellectual disability: A mixed methods study. Journal of Autism and Developmental Disorders, 52(10), 4337-4354.</li>
          <li>Hartley, M., Dorstyn, D., & Due, C. (2019). Mindfulness for children and adults with autism spectrum disorder and their caregivers: A meta-analysis. Journal of Autism and Developmental Disorders, 49(10), 4306-4319.</li>
          <li>Conner, C. M., Golt, J., Righi, G., Shaffer, R., Siegel, M., & Mazefsky, C. A. (2020). A comparative study of suicidality and its association with emotion regulation impairment in large ASD and US census-matched samples. Journal of Autism and Developmental Disorders, 50(10), 3545-3560.</li>
          <li>Hartley, S. L., Sikora, D. M., & McCoy, R. (2008). Prevalence and risk factors of maladaptive behaviour in young children with autistic disorder. Journal of Intellectual Disability Research, 52(10), 819-829.</li>
          <li>Chapman, R. (2020). The reality of autism: On the metaphysics of disorder and diversity. Philosophical Psychology, 33(6), 799-819.</li>
          <li>Griffith, G. M., Hastings, R. P., Nash, S., Petalas, M., Felce, D., & Toogood, S. (2011). "You have to sit and explain it all, and explain yourself." Mothers' experiences of support services for their offspring with autism spectrum disorder (ASD). Journal of Intellectual and Developmental Disability, 36(1), 6-15.</li>
          <li>Rodgers, J., Glod, M., Connolly, B., & McConachie, H. (2012). The relationship between anxiety and repetitive behaviours in autism spectrum disorder. Journal of Autism and Developmental Disorders, 42(11), 2404-2409.</li>
          <li>Ledford, J. R., & Gast, D. L. (2006). Feeding problems in children with autism spectrum disorders: A review. Focus on Autism and Other Developmental Disabilities, 21(3), 153-166.</li>
          <li>Mazzone, L., Postorino, V., Siracusano, M., Riccioni, A., & Curatolo, P. (2013). The relationship between sleep problems, neurobiological alterations, core symptoms of autism spectrum disorder, and psychiatric comorbidities. Journal of Clinical Medicine, 2(4), 102-125.</li>
          <li>Esbensen, A. J., Greenberg, J. S., Seltzer, M. M., & Aman, M. G. (2009). A longitudinal investigation of psychotropic and non-psychotropic medication use among adolescents and adults with autism spectrum disorders. Journal of Autism and Developmental Disorders, 39(9), 1339-1349.</li>
          <li>King, B. H., Hollander, E., Sikich, L., et al. (2009). Lack of efficacy of citalopram in children with autism spectrum disorders and high levels of repetitive behavior: Citalopram ineffective in children with autism. Archives of General Psychiatry, 66(6), 583-590.</li>
          <li>Hollander, E., Soorya, L., Chaplin, W., et al. (2012). A double-blind placebo-controlled trial of fluoxetine for repetitive behaviors and global severity in adult autism spectrum disorders. American Journal of Psychiatry, 169(3), 292-299.</li>
          <li>Research Units on Pediatric Psychopharmacology Autism Network. (2005). Randomized, controlled, crossover trial of methylphenidate in pervasive developmental disorders with hyperactivity. Archives of General Psychiatry, 62(11), 1266-1274.</li>
          <li>Santosh, P. J., Baird, G., Pityaratstian, N., Tavare, E., & Gringras, P. (2006). Impact of comorbid autism spectrum disorders on stimulant response in children with attention deficit hyperactivity disorder: A retrospective and prospective effectiveness study. Child: Care, Health and Development, 32(5), 575-583.</li>
          <li>McCracken, J. T., McGough, J., Shah, B., et al. (2002). Risperidone in children with autism and serious behavioral problems. New England Journal of Medicine, 347(5), 314-321.</li>
          <li>Owen, R., Sikich, L., Marcus, R. N., et al. (2009). Aripiprazole in the treatment of irritability in children and adolescents with autistic disorder. Pediatrics, 124(6), 1533-1540.</li>
          <li>Scahill, L., McCracken, J. T., King, B. H., et al. (2001). Extended-release guanfacine for hyperactivity in children with autism spectrum disorder. American Journal of Psychiatry, 172(12), 1197-1206.</li>
          <li>Malow, B. A., Byars, K., Johnson, K., et al. (2012). A practice pathway for the identification, evaluation, and management of insomnia in children and adolescents with autism spectrum disorders. Pediatrics, 130(Supplement 2), S106-S124.</li>
          <li>Rossignol, D. A., & Frye, R. E. (2011). Melatonin in autism spectrum disorders: A systematic review and meta-analysis. Developmental Medicine & Child Neurology, 53(9), 783-792.</li>
          <li>Handen, B. L., & Lubetsky, M. (2005). Pharmacotherapy in autism and related disorders. School Psychology Quarterly, 20(2), 155-171.</li>
          <li>Posey, D. J., & McDougle, C. J. (2000). The pharmacotherapy of target symptoms associated with autistic disorder and other pervasive developmental disorders. Harvard Review of Psychiatry, 8(2), 45-63.</li>
          <li>Minshawi, N. F., Hurwitz, S., Morriss, D., & McDougle, C. J. (2015). Multidisciplinary assessment and treatment of self-injurious behavior in autism spectrum disorder and intellectual disability: Integration of psychological and biological theory and approach. Journal of Autism and Developmental Disorders, 45(6), 1541-1568.</li>
          <li>Arnold, L. E., Vitiello, B., McDougle, C., et al. (2003). Parent-defined target symptoms respond to risperidone in RUPP autism study: Customer approach to clinical trials. Journal of the American Academy of Child & Adolescent Psychiatry, 42(12), 1443-1450.</li>
          <li>Scahill, L., & Martin, A. (2005). Psychopharmacology. In F. R. Volkmar, R. Paul, A. Klin, & D. Cohen (Eds.), Handbook of autism and pervasive developmental disorders (3rd ed., Vol. 2, pp. 1102-1117). John Wiley & Sons.</li>
          <li>Hollander, E., & Anagnostou, E. (Eds.). (2007). Clinical manual for the treatment of autism. American Psychiatric Publishing.</li>
          <li>Rumball, F. (2019). A systematic review of the assessment and treatment of posttraumatic stress disorder in individuals with autism spectrum disorders. Review Journal of Autism and Developmental Disorders, 6(3), 294-324.</li>
          <li>Hoover, D. W. (2015). The effects of psychological trauma on children with autism spectrum disorders: A research review. Review Journal of Autism and Developmental Disorders, 2(3), 287-299.</li>
          <li>Mehtar, M., & Mukaddes, N. M. (2011). Posttraumatic stress disorder in individuals with diagnosis of autistic spectrum disorders. Research in Autism Spectrum Disorders, 5(1), 539-546.</li>
          <li>Substance Abuse and Mental Health Services Administration. (2014). SAMHSA's concept of trauma and guidance for a trauma-informed approach. HHS Publication No. (SMA) 14-4884.</li>
          <li>Harris, M., & Fallot, R. D. (Eds.). (2001). Using trauma theory to design service systems: New directions for mental health services, No. 89. Jossey-Bass.</li>
          <li>Hopper, E. K., Bassuk, E. L., & Olivet, J. (2010). Shelter from the storm: Trauma-informed care in homelessness services settings. The Open Health Services and Policy Journal, 3(2), 80-100.</li>
          <li>Elliott, D. E., Bjelajac, P., Fallot, R. D., Markoff, L. S., & Reed, B. G. (2005). Trauma-informed or trauma-denied: Principles and implementation of trauma-informed services for women. Journal of Community Psychology, 33(4), 461-477.</li>
          <li>Kress, V. E., Haiyasoso, M., Zoldan, C. A., Headley, J. A., & Trepal, H. (2018). The use of relational-cultural theory in counseling clients who have traumatic stress disorders. Journal of Counseling & Development, 96(1), 106-114.</li>
          <li>Lobregt-van Buuren, E., Sizoo, B., Mevissen, L., & de Jongh, A. (2019). Eye movement desensitization and reprocessing (EMDR) therapy as a feasible and potential effective treatment for adults with autism spectrum disorder (ASD) and a history of adverse events. Journal of Autism and Developmental Disorders, 49(1), 151-164.</li>
          <li>Mevissen, L., & de Jongh, A. (2010). PTSD and its treatment in people with intellectual disabilities: A review of the literature. Clinical Psychology Review, 30(3), 308-316.</li>
          <li>Mehtar, M., & Mukaddes, N. M. (2011). Posttraumatic stress disorder in individuals with diagnosis of autistic spectrum disorders. Research in Autism Spectrum Disorders, 5(1), 539-546.</li>
          <li>Levine, P. A. (2010). In an unspoken voice: How the body releases trauma and restores goodness. North Atlantic Books.</li>
          <li>Brugha, T. S., Doos, L., Tempier, A., Einfeld, S., & Howlin, P. (2015). Outcome measures in intervention trials for adults with autism spectrum disorders; a systematic review of assessments of core autism features and associated emotional and behavioural problems. International Journal of Methods in Psychiatric Research, 24(2), 99-115.</li>
          <li>Lai, M. C., Anagnostou, E., Wiznitzer, M., Allison, C., & Baron-Cohen, S. (2020). Evidence-based support for autistic people across the lifespan: Maximising potential, minimising barriers, and optimising the person–environment fit. The Lancet Neurology, 19(5), 434-451.</li>
          <li>Raymaker, D. M., Teo, A. R., Steckler, N. A., et al. (2020). "Having all of your internal resources exhausted beyond measure and being left with no clean-up crew": Defining autistic burnout. Autism in Adulthood, 2(2), 132-143.</li>
          <li>Benevides, T. W., Shore, S. M., Palmer, K., et al. (2020). Listening to the autistic voice: Mental health priorities to guide research and practice in autism from a stakeholder-driven project. Autism, 24(4), 822-833.</li>
          <li>Psychology Today. (n.d.). Find a therapist. Retrieved from www.psychologytoday.com</li>
          <li>Nicolaidis, C., Raymaker, D. M., Ashkenazy, E., et al. (2015). "Respect the way I need to communicate with you": Healthcare experiences of adults on the autism spectrum. Autism, 19(7), 824-831.</li>
          <li>Kerns, C. M., Roux, A. M., Connell, J. E., & Shattuck, P. T. (2016). Adapting cognitive behavioral techniques to address anxiety and depression in cognitively-able emerging adults on the autism spectrum. Cognitive and Behavioral Practice, 23(3), 329-340.</li>
          <li>Cage, E., Di Monaco, J., & Newell, V. (2018). Experiences of autism acceptance and mental health in autistic adults. Journal of Autism and Developmental Disorders, 48(2), 473-484.</li>
          <li>Botha, M., Dibb, B., & Frost, D. M. (2022). "Autism is me": An investigation of how autistic individuals make sense of autism and stigma. Disability & Society, 37(3), 427-453.</li>
          <li>Robertson, S. M. (2010). Neurodiversity, quality of life, and autistic adults: Shifting research and professional focuses onto real-life challenges. Disability Studies Quarterly, 30(1).</li>
          <li>Crompton, C. J., Hallett, S., Ropar, D., Flynn, E., & Fletcher-Watson, S. (2020). 'I never realised everybody felt as happy as I do when I am around autistic people': A thematic analysis of autistic adults' relationships with autistic and neurotypical friends and family. Autism, 24(6), 1438-1448.</li>
          <li>Pearson, A., & Rose, K. (2021). A conceptual analysis of autistic masking: Understanding the narrative of stigma and the illusion of choice. Autism in Adulthood, 3(1), 52-60.</li>
          <li>Grove, R., Hoekstra, R. A., Wierda, M., & Begeer, S. (2018). Special interests and subjective wellbeing in autistic adults. Autism Research, 11(5), 766-775.</li>
          <li>Kinnaird, E., Stewart, C., & Tchanturia, K. (2019). Investigating alexithymia in autism: A systematic review and meta-analysis. European Psychiatry, 55, 80-89.</li>
          <li>Lever, A. G., & Geurts, H. M. (2016). Age-related differences in cognition across the adult lifespan in autism spectrum disorder. Autism Research, 9(6), 666-676.</li>
          <li>Cassidy, S., Bradley, P., Robinson, J., Allison, C., McHugh, M., & Baron-Cohen, S. (2014). Suicidal ideation and suicide plans or attempts in adults with Asperger's syndrome attending a specialist diagnostic clinic: A clinical cohort study. The Lancet Psychiatry, 1(2), 142-147.</li>
          <li>Hirvikoski, T., Mittendorfer-Rutz, E., Boman, M., Larsson, H., Lichtenstein, P., & Bölte, S. (2016). Premature mortality in autism spectrum disorder. The British Journal of Psychiatry, 208(3), 232-238.</li>
          <li>Hedley, D., & Uljarević, M. (2018). Systematic review of suicide in autism spectrum disorder: Current trends and implications. Current Developmental Disorders Reports, 5(1), 65-76.</li>
        </ol>
      </div>
    </div>
  );
}
