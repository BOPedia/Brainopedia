import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function DysgraphiaDiagnosis({ setCurrentArticle }: DysgraphiaDiagnosisProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dysgraphia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dysgraphia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Dysgraphia: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Diagnosing dysgraphia involves comprehensive evaluation by qualified professionals using standardized assessments, 
            behavioral observations, and analysis of writing samples.<sup>[1]</sup> Early and accurate diagnosis is crucial for 
            accessing appropriate interventions and accommodations.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Who Can Diagnose Dysgraphia?</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Qualified Professionals</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Educational psychologists:</strong> Specialists in learning disabilities and academic assessment<sup>[3]</sup></li>
            <li className="mb-2"><strong>Neuropsychologists:</strong> Experts in brain-behavior relationships</li>
            <li className="mb-2"><strong>School psychologists:</strong> Conduct evaluations within educational settings<sup>[4]</sup></li>
            <li className="mb-2"><strong>Occupational therapists:</strong> Assess fine motor and graphomotor skills<sup>[5]</sup></li>
            <li className="mb-2"><strong>Speech-language pathologists:</strong> When language components are involved</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multidisciplinary Approach</h3>
          <p className="mb-4">
            Comprehensive evaluation often involves a team of professionals to assess different aspects:<sup>[6]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Psychologist or neuropsychologist for cognitive and academic testing</li>
            <li className="mb-2">Occupational therapist for motor skills assessment<sup>[7]</sup></li>
            <li className="mb-2">Educational specialist for writing instruction analysis</li>
            <li className="mb-2">Medical professional to rule out vision or neurological issues<sup>[8]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">When to Seek Evaluation</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1550592704-6c76defa9985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd3JpdGluZyUyMG5vdGVib29rfGVufDF8fHx8MTc2NzM2NzIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student writing"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Red Flags in Children</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Handwriting significantly worse than peers despite practice<sup>[9]</sup></li>
            <li className="mb-2">Writing causes physical pain or fatigue</li>
            <li className="mb-2">Large discrepancy between oral and written expression<sup>[10]</sup></li>
            <li className="mb-2">Extreme frustration or avoidance of writing tasks</li>
            <li className="mb-2">Writing difficulties persist beyond grade 2-3<sup>[11]</sup></li>
            <li className="mb-2">Academic performance suffering due to writing challenges</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Red Flags in Adolescents and Adults</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Continued illegible handwriting<sup>[12]</sup></li>
            <li className="mb-2">Difficulty completing timed written tests</li>
            <li className="mb-2">Avoidance of courses or jobs requiring writing<sup>[13]</sup></li>
            <li className="mb-2">Reliance on others to write for them</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Evaluation Process</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 1: Background Information</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Developmental history:</strong> Motor milestones, language development<sup>[14]</sup></li>
            <li className="mb-2"><strong>Educational history:</strong> Academic performance, previous interventions</li>
            <li className="mb-2"><strong>Family history:</strong> Learning disabilities or writing difficulties in family<sup>[15]</sup></li>
            <li className="mb-2"><strong>Medical history:</strong> Vision, hearing, neurological conditions<sup>[16]</sup></li>
            <li className="mb-2"><strong>Current concerns:</strong> Specific writing challenges observed</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 2: Interviews</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Parent/caregiver interview:</strong> Developmental concerns, home observations<sup>[17]</sup></li>
            <li className="mb-2"><strong>Teacher interview:</strong> Classroom performance, comparison to peers</li>
            <li className="mb-2"><strong>Student interview:</strong> Self-perception of difficulties, frustrations<sup>[18]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 3: Standardized Testing</h3>
          <p className="mb-4">
            Multiple standardized assessments evaluate different aspects of writing:<sup>[19]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive and Academic Assessments</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intelligence Testing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>WISC-V or WAIS-IV:</strong> Wechsler Intelligence Scales assess cognitive abilities<sup>[20]</sup></li>
            <li className="mb-2"><strong>Purpose:</strong> Establish that writing difficulties are not due to overall cognitive delays</li>
            <li className="mb-2"><strong>Processing speed index:</strong> May reveal slow processing affecting writing<sup>[21]</sup></li>
            <li className="mb-2"><strong>Working memory index:</strong> Assesses capacity for holding information while writing<sup>[22]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Written Language Assessments</h3>
          <p className="mb-4">
            Standardized tests of writing ability:<sup>[23]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>WIAT-4:</strong> Wechsler Individual Achievement Test (spelling, sentence composition, essay composition)<sup>[24]</sup></li>
            <li className="mb-2"><strong>WJ-IV:</strong> Woodcock-Johnson Tests (spelling, writing fluency, writing samples)</li>
            <li className="mb-2"><strong>TOWL-4:</strong> Test of Written Language (handwriting, spelling, grammar, composition)<sup>[25]</sup></li>
            <li className="mb-2"><strong>GORT-5:</strong> Gray Oral Reading Test (may include written retelling)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Spelling Assessments</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>TWS-5:</strong> Test of Written Spelling<sup>[26]</sup></li>
            <li className="mb-2"><strong>Spelling subtests:</strong> From comprehensive achievement tests</li>
            <li className="mb-2"><strong>Error analysis:</strong> Examining types of spelling errors made<sup>[27]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Motor Skills Assessments</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fine Motor Assessments</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>DTVP-3:</strong> Developmental Test of Visual Perception (visual-motor integration)<sup>[28]</sup></li>
            <li className="mb-2"><strong>VMI:</strong> Beery-Buktenica Developmental Test of Visual-Motor Integration<sup>[29]</sup></li>
            <li className="mb-2"><strong>MABC-2:</strong> Movement Assessment Battery for Children (fine motor skills)</li>
            <li className="mb-2"><strong>Purdue Pegboard:</strong> Finger dexterity and manual coordination<sup>[30]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Handwriting-Specific Tests</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>ETCH:</strong> Evaluation Tool of Children's Handwriting (legibility, speed)<sup>[31]</sup></li>
            <li className="mb-2"><strong>DASH:</strong> Detailed Assessment of Speed of Handwriting</li>
            <li className="mb-2"><strong>SCRIPT:</strong> Screening for Classroom-Ready Intervention in Penmanship and dexTterity<sup>[32]</sup></li>
            <li className="mb-2"><strong>Minnesota Handwriting Assessment:</strong> Legibility and form<sup>[33]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Motor Planning Assessments</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Finger tapping speed tests<sup>[34]</sup></li>
            <li className="mb-2">Sequential motor tasks</li>
            <li className="mb-2">Praxis assessments (motor planning ability)<sup>[35]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Writing Sample Analysis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Spontaneous Writing Samples</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Collection:</strong> Gather multiple samples over time<sup>[36]</sup></li>
            <li className="mb-2"><strong>Various genres:</strong> Narrative, expository, persuasive writing</li>
            <li className="mb-2"><strong>Different conditions:</strong> Timed vs. untimed, with/without supports<sup>[37]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Copying Tasks</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Near-point copying (from paper on desk)<sup>[38]</sup></li>
            <li className="mb-2">Far-point copying (from board)</li>
            <li className="mb-2">Timed alphabet writing<sup>[39]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Analysis Criteria</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Legibility:</strong> Can writing be read?<sup>[40]</sup></li>
            <li className="mb-2"><strong>Speed:</strong> Words per minute compared to norms</li>
            <li className="mb-2"><strong>Letter formation:</strong> Correct formation and sizing<sup>[41]</sup></li>
            <li className="mb-2"><strong>Spacing:</strong> Between letters, words, lines</li>
            <li className="mb-2"><strong>Spelling:</strong> Patterns of errors<sup>[42]</sup></li>
            <li className="mb-2"><strong>Grammar and syntax:</strong> Sentence structure, punctuation</li>
            <li className="mb-2"><strong>Content quality:</strong> Ideas, organization, vocabulary<sup>[43]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral Observations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">During Testing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Pencil grip:</strong> How student holds writing instrument<sup>[44]</sup></li>
            <li className="mb-2"><strong>Body posture:</strong> Position and alignment</li>
            <li className="mb-2"><strong>Hand preference:</strong> Consistent use of dominant hand<sup>[45]</sup></li>
            <li className="mb-2"><strong>Fatigue:</strong> Signs of tiring during writing</li>
            <li className="mb-2"><strong>Frustration:</strong> Emotional responses to writing tasks<sup>[46]</sup></li>
            <li className="mb-2"><strong>Strategy use:</strong> Compensatory strategies employed</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">In Classroom</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Note-taking ability<sup>[47]</sup></li>
            <li className="mb-2">Completion of writing assignments</li>
            <li className="mb-2">Comparison to peers<sup>[48]</sup></li>
            <li className="mb-2">Avoidance behaviors</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Differential Diagnosis</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1646442064656-1f5442f906d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdGluZyUyMHByYWN0aWNlfGVufDF8fHx8MTc2NzQ1MzUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Handwriting practice"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ruling Out Other Conditions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Visual impairment:</strong> Vision screening essential<sup>[49]</sup></li>
            <li className="mb-2"><strong>Hearing loss:</strong> May affect language and writing</li>
            <li className="mb-2"><strong>Intellectual disability:</strong> Writing commensurate with overall ability?<sup>[50]</sup></li>
            <li className="mb-2"><strong>Lack of instruction:</strong> Has student received adequate writing instruction?</li>
            <li className="mb-2"><strong>English language learner status:</strong> Second language acquisition vs. disability<sup>[51]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Distinguishing from Co-occurring Conditions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Dyslexia:</strong> Reading vs. writing primary difficulty<sup>[52]</sup></li>
            <li className="mb-2"><strong>ADHD:</strong> Inattention vs. motor/language issues</li>
            <li className="mb-2"><strong>Developmental coordination disorder:</strong> Isolated writing vs. general motor difficulties<sup>[53]</sup></li>
            <li className="mb-2"><strong>Autism spectrum disorder:</strong> Broader social-communication challenges<sup>[54]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">DSM-5 Specific Learning Disorder</h3>
          <p className="mb-4">
            Dysgraphia falls under the DSM-5 category of Specific Learning Disorder with impairment in written expression:<sup>[55]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Criterion A:</strong> Difficulties in at least one academic skill (writing) persisting 6+ months despite interventions</li>
            <li className="mb-2"><strong>Criterion B:</strong> Academic skills substantially below expected for age</li>
            <li className="mb-2"><strong>Criterion C:</strong> Difficulties begin during school years<sup>[56]</sup></li>
            <li className="mb-2"><strong>Criterion D:</strong> Not better explained by other conditions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">IDEA Educational Classification</h3>
          <p className="mb-4">
            Under IDEA, dysgraphia qualifies under Specific Learning Disability (SLD):<sup>[57]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Disorder in basic psychological processes</li>
            <li className="mb-2">Affects written expression ability</li>
            <li className="mb-2">Not primarily due to other disabilities<sup>[58]</sup></li>
            <li className="mb-2">Requires special education services</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Severity Levels</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Mild:</strong> Difficulties manageable with accommodations<sup>[59]</sup></li>
            <li className="mb-2"><strong>Moderate:</strong> Requires intensive intervention</li>
            <li className="mb-2"><strong>Severe:</strong> Requires intensive, ongoing support across settings<sup>[60]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Evaluation Report</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Components of a Comprehensive Report</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Background information:</strong> Reason for referral, developmental/educational history<sup>[61]</sup></li>
            <li className="mb-2"><strong>Tests administered:</strong> List of all assessments used</li>
            <li className="mb-2"><strong>Test results:</strong> Scores and interpretations<sup>[62]</sup></li>
            <li className="mb-2"><strong>Behavioral observations:</strong> Observations during testing</li>
            <li className="mb-2"><strong>Summary and diagnosis:</strong> Integrative interpretation<sup>[63]</sup></li>
            <li className="mb-2"><strong>Recommendations:</strong> Specific interventions and accommodations</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Test Scores</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Standard scores:</strong> Mean of 100, standard deviation of 15<sup>[64]</sup></li>
            <li className="mb-2"><strong>Percentile ranks:</strong> Comparison to age peers</li>
            <li className="mb-2"><strong>Grade equivalents:</strong> Performance compared to grade levels<sup>[65]</sup></li>
            <li className="mb-2"><strong>Significant discrepancies:</strong> Between ability and writing achievement</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">School-Based Evaluations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Requesting an Evaluation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Parent/guardian request:</strong> Written request to school for evaluation<sup>[66]</sup></li>
            <li className="mb-2"><strong>Teacher referral:</strong> Concerns about academic performance</li>
            <li className="mb-2"><strong>Response to Intervention (RTI):</strong> Data showing lack of progress with interventions<sup>[67]</sup></li>
            <li className="mb-2"><strong>Timeline:</strong> Schools have specific timelines to complete evaluation (typically 60 days)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">IEP or 504 Plan</h3>
          <p className="mb-4">
            Based on evaluation results:<sup>[68]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>IEP (Individualized Education Program):</strong> For students qualifying under IDEA requiring special education</li>
            <li className="mb-2"><strong>504 Plan:</strong> For students needing accommodations but not special education<sup>[69]</sup></li>
            <li className="mb-2"><strong>Team meeting:</strong> Parents, teachers, specialists develop plan</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Private Evaluations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">When to Consider Private Testing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">School evaluation incomplete or insufficient<sup>[70]</sup></li>
            <li className="mb-2">Disagreement with school evaluation results</li>
            <li className="mb-2">More comprehensive assessment desired<sup>[71]</sup></li>
            <li className="mb-2">Adult seeking diagnosis</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Costs and Insurance</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Private evaluations can cost $1,500-$5,000+<sup>[72]</sup></li>
            <li className="mb-2">Some insurance plans may cover portion</li>
            <li className="mb-2">Sliding scale options may be available<sup>[73]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evaluating Adults</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Unique Considerations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Compensatory strategies:</strong> May mask difficulties<sup>[74]</sup></li>
            <li className="mb-2"><strong>Career impact:</strong> How writing affects work performance</li>
            <li className="mb-2"><strong>Educational history:</strong> Past struggles may indicate long-standing condition<sup>[75]</sup></li>
            <li className="mb-2"><strong>Accommodations needed:</strong> For college or workplace</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">College and Workplace Documentation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Current diagnosis required (typically within 3-5 years)<sup>[76]</sup></li>
            <li className="mb-2">Specific recommendations for accommodations</li>
            <li className="mb-2">Evidence of substantial limitation<sup>[77]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">After Diagnosis: Next Steps</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding the Diagnosis</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Review evaluation report thoroughly<sup>[78]</sup></li>
            <li className="mb-2">Ask questions about unclear findings</li>
            <li className="mb-2">Understand strengths as well as weaknesses<sup>[79]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Implementing Recommendations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Interventions:</strong> Begin recommended therapies and instruction<sup>[80]</sup></li>
            <li className="mb-2"><strong>Accommodations:</strong> Implement at school or work</li>
            <li className="mb-2"><strong>Assistive technology:</strong> Explore recommended tools<sup>[81]</sup></li>
            <li className="mb-2"><strong>Progress monitoring:</strong> Track response to interventions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Re-evaluation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Schools: Re-evaluation every 3 years (or as needed)<sup>[82]</sup></li>
            <li className="mb-2">Updates for college/workplace: As required by institution</li>
            <li className="mb-2">Monitor effectiveness of interventions<sup>[83]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Important Considerations</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Remember:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Diagnosis is a tool for accessing support, not a label<sup>[84]</sup></li>
              <li>Early identification leads to better outcomes</li>
              <li>Comprehensive evaluation considers multiple factors<sup>[85]</sup></li>
              <li>Parents have right to be involved in evaluation process</li>
              <li>Diagnosis can bring relief and understanding<sup>[86]</sup></li>
              <li>Focus on strengths and how to support challenges</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Berninger, V. W., & Wolf, B. J. (2009). <em>Teaching students with dyslexia and dysgraphia</em>. Brookes Publishing.</p>
          <p>[2] Hoy, M. M., Egan, M. Y., & Feder, K. P. (2011). "A systematic review of interventions to improve handwriting." <em>Canadian Journal of Occupational Therapy</em>, 78(1), 13-25.</p>
          <p>[3] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). Jerome M. Sattler Publisher.</p>
          <p>[4] National Association of School Psychologists. (2020). <em>Model for comprehensive and integrated school psychological services</em>.</p>
          <p>[5] American Occupational Therapy Association. (2014). "Occupational therapy practice framework." <em>American Journal of Occupational Therapy</em>, 68(Suppl. 1), S1-S48.</p>
          <p>[6] Berninger, V. W., & May, M. O. (2011). "Evidence-based diagnosis and treatment for specific learning disabilities." <em>Journal of Learning Disabilities</em>, 44(2), 167-183.</p>
          <p>[7] Feder, K. P., & Majnemer, A. (2007). "Handwriting development, competency, and intervention." <em>Developmental Medicine & Child Neurology</em>, 49(4), 312-317.</p>
          <p>[8] Handler, S. M., & Fierson, W. M. (2011). "Learning disabilities, dyslexia, and vision." <em>Pediatrics</em>, 127(3), e818-e856.</p>
          <p>[9] Graham, S., & Weintraub, N. (1996). "A review of handwriting research." <em>Educational Psychology Review</em>, 8(1), 7-87.</p>
          <p>[10] Connelly, V., Campbell, S., MacLean, M., & Barnes, J. (2006). "Contribution of lower order letter writing skills." <em>Developmental Neuropsychology</em>, 29(1), 175-196.</p>
          <p>[11] Hamstra-Bletz, L., & Blöte, A. W. (1993). "A longitudinal study on dysgraphic handwriting in primary school." <em>Journal of Learning Disabilities</em>, 26(10), 689-699.</p>
          <p>[12] Berninger, V. W., & Fuller, F. (1992). "Gender differences in orthographic, verbal, and compositional fluency." <em>Journal of School Psychology</em>, 30(4), 363-382.</p>
          <p>[13] Gregg, N., Coleman, C., Davis, M., & Chalk, J. C. (2007). "Timed essay writing: Implications for high-stakes tests." <em>Journal of Learning Disabilities</em>, 40(4), 306-318.</p>
          <p>[14] Glascoe, F. P. (2005). <em>Screening for developmental and behavioral problems</em>. <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 11(3), 173-179.</p>
          <p>[15] Schulte-Körne, G., Deimel, W., Müller, K., Gutenbrunner, C., & Remschmidt, H. (1996). "Familial aggregation of spelling disability." <em>Journal of Child Psychology and Psychiatry</em>, 37(7), 817-822.</p>
          <p>[16] Levine, M. D. (1987). <em>Developmental variation and learning disorders</em>. Educators Publishing Service.</p>
          <p>[17] Reynolds, C. R., & Kamphaus, R. W. (2015). <em>BASC-3: Behavior assessment system for children</em> (3rd ed.). Pearson.</p>
          <p>[18] Gureasko-Moore, S., DuPaul, G. J., & White, G. P. (2007). "Self-management of classroom preparedness and homework." <em>School Psychology Review</em>, 36(4), 647-664.</p>
          <p>[19] Mather, N., & Wendling, B. J. (2014). <em>Essentials of dyslexia assessment and intervention</em>. John Wiley & Sons.</p>
          <p>[20] Wechsler, D. (2014). <em>Wechsler Intelligence Scale for Children</em> (5th ed.). Pearson.</p>
          <p>[21] Berninger, V. W., & Richards, T. L. (2010). "Inter-relationships among behavioral markers, genes, brain, and treatment." <em>Future Neurology</em>, 5(4), 597-617.</p>
          <p>[22] McCutchen, D. (1996). "A capacity theory of writing: Working memory in composition." <em>Educational Psychology Review</em>, 8(3), 299-325.</p>
          <p>[23] Sattler, J. M., & Hoge, R. D. (2006). <em>Assessment of children: Behavioral, social, and clinical foundations</em> (5th ed.). Jerome M. Sattler Publisher.</p>
          <p>[24] Wechsler, D. (2020). <em>Wechsler Individual Achievement Test</em> (4th ed.). Pearson.</p>
          <p>[25] Hammill, D. D., & Larsen, S. C. (2009). <em>Test of Written Language</em> (4th ed.). Pro-Ed.</p>
          <p>[26] Larsen, S. C., Hammill, D. D., & Moats, L. C. (2013). <em>Test of Written Spelling</em> (5th ed.). Pro-Ed.</p>
          <p>[27] Moats, L. C. (1995). <em>Spelling: Development, disability, and instruction</em>. York Press.</p>
          <p>[28] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Pro-Ed.</p>
          <p>[29] Beery, K. E., & Beery, N. A. (2010). <em>The Beery-Buktenica developmental test of visual-motor integration</em>. Pearson.</p>
          <p>[30] Tiffin, J., & Asher, E. J. (1948). "The Purdue pegboard." <em>Journal of Applied Psychology</em>, 32(3), 234-247.</p>
          <p>[31] Amundson, S. J. (1995). <em>Evaluation Tool of Children's Handwriting</em>. O.T. KIDS.</p>
          <p>[32] Barnett, A. L., Henderson, S. E., Scheib, B., & Schulz, J. (2007). <em>Detailed Assessment of Speed of Handwriting</em>. Pearson.</p>
          <p>[33] Reisman, J. E. (1999). <em>Minnesota Handwriting Assessment</em>. Harcourt Assessment.</p>
          <p>[34] Deuel, R. K. (1995). "Developmental dysgraphia and motor skills disorders." <em>Journal of Child Neurology</em>, 10(Suppl 1), S6-S8.</p>
          <p>[35] Ayres, A. J. (1989). <em>Sensory Integration and Praxis Tests</em>. Western Psychological Services.</p>
          <p>[36] Rosenblum, S., Weiss, P. L., & Parush, S. (2003). "Product and process evaluation of handwriting difficulties." <em>Educational Psychology Review</em>, 15(1), 41-81.</p>
          <p>[37] Graham, S., Berninger, V. W., Abbott, R. D., Abbott, S. P., & Whitaker, D. (1997). "Role of mechanics in composing." <em>Journal of Educational Psychology</em>, 89(1), 170-182.</p>
          <p>[38] Weintraub, N., & Graham, S. (1998). "Writing legibly and quickly." <em>Learning Disabilities Research & Practice</em>, 13(3), 146-152.</p>
          <p>[39] Berninger, V. W. (2007). <em>Process Assessment of the Learner, Second Edition: Diagnostic for Reading and Writing (PAL-II RW)</em>. Pearson.</p>
          <p>[40] Graham, S., Berninger, V., & Weintraub, N. (2001). "Which manuscript letters do primary grade children write legibly?" <em>Journal of Educational Psychology</em>, 93(3), 488-497.</p>
          <p>[41] Karlsdottir, R., & Stefansson, T. (2002). "Problems in developing functional handwriting." <em>Perceptual and Motor Skills</em>, 94(2), 623-662.</p>
          <p>[42] Treiman, R. (1993). <em>Beginning to spell: A study of first-grade children</em>. Oxford University Press.</p>
          <p>[43] Hooper, S. R., Swartz, C. W., Wakely, M. B., de Kruif, R. E., & Montgomery, J. W. (2002). "Executive functions in elementary school children." <em>Journal of Learning Disabilities</em>, 35(1), 57-68.</p>
          <p>[44] Tseng, M. H., & Cermak, S. A. (1993). "The influence of ergonomic factors on handwriting performance." <em>American Journal of Occupational Therapy</em>, 47(10), 919-926.</p>
          <p>[45] Smits-Engelsman, B. C., Niemeijer, A. S., & van Galen, G. P. (2001). "Fine motor deficiencies in children diagnosed as DCD." <em>Human Movement Science</em>, 20(1-2), 161-182.</p>
          <p>[46] Nelson, J. M., & Harwood, H. (2011). "Learning disabilities and anxiety: A meta-analysis." <em>Journal of Learning Disabilities</em>, 44(1), 3-17.</p>
          <p>[47] Peverly, S. T. (2006). "The importance of handwriting speed in adult writing." <em>Developmental Neuropsychology</em>, 29(1), 197-216.</p>
          <p>[48] Rosenblum, S., Parush, S., & Weiss, P. L. (2003). "Computerized temporal handwriting characteristics." <em>American Journal of Occupational Therapy</em>, 57(2), 129-138.</p>
          <p>[49] Handler, S. M., & Fierson, W. M. (2011). "Learning disabilities, dyslexia, and vision." <em>Pediatrics</em>, 127(3), e818-e856.</p>
          <p>[50] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.).</p>
          <p>[51] Ortiz, S. O., & Dynda, A. M. (2005). "Use of intelligence tests with culturally and linguistically diverse populations." In D. P. Flanagan & P. L. Harrison (Eds.), <em>Contemporary intellectual assessment</em> (2nd ed., pp. 545-556). Guilford Press.</p>
          <p>[52] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[53] Dewey, D., Kaplan, B. J., Crawford, S. G., & Wilson, B. N. (2002). "Developmental coordination disorder." <em>Human Movement Science</em>, 21(5-6), 905-918.</p>
          <p>[54] Fuentes, C. T., Mostofsky, S. H., & Bastian, A. J. (2009). "Children with autism show specific handwriting impairments." <em>Neurology</em>, 73(19), 1532-1537.</p>
          <p>[55] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.).</p>
          <p>[56] Tannock, R. (2013). "Rethinking ADHD and LD in DSM-5." <em>Journal of Learning Disabilities</em>, 46(1), 5-8.</p>
          <p>[57] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[58] U.S. Department of Education. (2006). <em>Identification of specific learning disabilities</em>.</p>
          <p>[59] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Press.</p>
          <p>[60] Mather, N., & Wendling, B. J. (2012). <em>Essentials of evidence-based academic interventions</em>. John Wiley & Sons.</p>
          <p>[61] Lichtenstein, R., & Karge, B. D. (1997). "Consultation and collaboration in education." In A. Thomas & J. Grimes (Eds.), <em>Best practices in school psychology III</em> (pp. 121-131). NASP.</p>
          <p>[62] Shapiro, E. S. (2011). <em>Academic skills problems: Direct assessment and intervention</em> (4th ed.). Guilford Press.</p>
          <p>[63] Wilson, M. S., & Reschly, D. J. (1996). "Assessment in school psychology training and practice." <em>School Psychology Review</em>, 25(1), 9-23.</p>
          <p>[64] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). Jerome M. Sattler Publisher.</p>
          <p>[65] Salvia, J., Ysseldyke, J. E., & Witmer, S. (2016). <em>Assessment in special and inclusive education</em> (13th ed.). Cengage Learning.</p>
          <p>[66] Wright, P. W. D., & Wright, P. D. (2006). <em>Wrightslaw: Special education law</em> (2nd ed.). Harbor House Law Press.</p>
          <p>[67] Fuchs, D., & Fuchs, L. S. (2006). "Introduction to response to intervention." <em>Reading Research Quarterly</em>, 41(1), 93-99.</p>
          <p>[68] Yell, M. L. (2016). <em>The law and special education</em> (4th ed.). Pearson.</p>
          <p>[69] Section 504 of the Rehabilitation Act of 1973, 29 U.S.C. § 794.</p>
          <p>[70] National Center for Learning Disabilities. (2014). <em>The state of learning disabilities</em> (3rd ed.).</p>
          <p>[71] Wendling, B. J., & Mather, N. (2009). <em>Essentials of evidence-based academic interventions</em>. John Wiley & Sons.</p>
          <p>[72] Learning Disabilities Association of America. (2020). <em>Testing and evaluation</em>.</p>
          <p>[73] National Association of School Psychologists. (2015). <em>Position statement on private school placement and services</em>.</p>
          <p>[74] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[75] Gregg, N. (2009). <em>Adolescents and adults with learning disabilities and ADHD</em>. Guilford Press.</p>
          <p>[76] Association on Higher Education and Disability. (2012). <em>Supporting accommodation requests: Guidance on documentation practices</em>.</p>
          <p>[77] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
          <p>[78] Lerner, J., & Johns, B. (2015). <em>Learning disabilities and related disabilities</em> (13th ed.). Cengage Learning.</p>
          <p>[79] Hallahan, D. P., Pullen, P. C., & Ward, D. (2013). "A brief history of the field of learning disabilities." In H. L. Swanson, K. R. Harris, & S. Graham (Eds.), <em>Handbook of learning disabilities</em> (2nd ed., pp. 15-32). Guilford Press.</p>
          <p>[80] Graham, S., & Harris, K. R. (2009). "Almost 30 years of writing research." <em>Learning Disabilities Research & Practice</em>, 24(2), 63-77.</p>
          <p>[81] MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[82] Individuals with Disabilities Education Act, 20 U.S.C. § 1414(a)(2).</p>
          <p>[83] Fuchs, L. S., & Fuchs, D. (2002). "What is scientifically-based research on progress monitoring?" <em>National Center on Student Progress Monitoring</em>.</p>
          <p>[84] Berninger, V. W. (2009). "Highlights of programmatic, interdisciplinary research on writing." <em>Learning Disabilities Research & Practice</em>, 24(2), 68-79.</p>
          <p>[85] Hoy, M. M., Egan, M. Y., & Feder, K. P. (2011). "A systematic review of interventions to improve handwriting." <em>Canadian Journal of Occupational Therapy</em>, 78(1), 13-25.</p>
          <p>[86] Katusic, S. K., Colligan, R. C., Weaver, A. L., & Barbaresi, W. J. (2009). "The forgotten learning disability." <em>Pediatrics</em>, 123(5), 1306-1313.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dysgraphia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dysgraphia
        </a>
      </div>
    </article>
  );
}
