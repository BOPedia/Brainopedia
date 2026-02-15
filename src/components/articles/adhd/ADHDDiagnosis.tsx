import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ADHDComorbidities } from '../../infographics/ADHDComorbidities';
import { ADHDDiagnosticProfessionals } from '../../infographics/ADHDDiagnosticProfessionals';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';

interface ADHDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDDiagnosis({ setCurrentArticle }: ADHDDiagnosisProps) {

  return (
    <article className="max-w-full w-full">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      <Tabs defaultValue="process" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="process" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Diagnostic Process
          </TabsTrigger>
          <TabsTrigger value="tests" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Tests & Assessments
          </TabsTrigger>
          <TabsTrigger value="professionals" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Who Can Diagnose
          </TabsTrigger>
          <TabsTrigger value="adults" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Adult Diagnosis
          </TabsTrigger>
          <TabsTrigger value="challenges" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Challenges & Comorbidities
          </TabsTrigger>
          <TabsTrigger value="after" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            After Diagnosis
          </TabsTrigger>
          <TabsTrigger value="research" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Recent Research
          </TabsTrigger>
          <TabsTrigger value="audhd" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            What is AuDHD?
          </TabsTrigger>
        </TabsList>

        {/* Diagnostic Process Tab */}
        <TabsContent value="process" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The ADHD Diagnostic Process</h2>
            <ImageWithFallback src="/images/adhd/adhd-diag-proc-ball-over-head-boy.png" alt="Boy balancing ball representing the ADHD diagnostic process" className="w-full max-w-md mx-auto rounded-lg mb-4" />
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important:</strong> There is no single test for ADHD. Diagnosis requires a comprehensive 
                evaluation by a qualified healthcare professional using multiple sources of information.
              </p>
            </div>



            <p className="mb-4">
              ADHD diagnosis requires a comprehensive evaluation by a qualified healthcare professional—typically a 
              psychiatrist, psychologist, pediatrician, or neurologist with training in ADHD assessment. 
              The diagnostic process involves gathering information from multiple sources to determine whether symptoms 
              meet diagnostic criteria and to rule out other conditions that might better explain the difficulties.
            </p>

            <p className="mb-6">
              ADHD diagnosis is based on the criteria outlined in the Diagnostic and Statistical Manual of Mental 
              Disorders (DSM-5-TR)<sup className="text-[#10b981]">[1]</sup>. To receive an ADHD diagnosis, an individual must display a persistent 
              pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development, 
              with symptoms present before age 12, occurring in multiple settings, and not better explained by another 
              condition.
            </p>

            {/* Evaluation Components */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Components of an ADHD Evaluation</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">1. Clinical Interview</div>
                  <div className="text-sm">
                    The clinician conducts detailed interviews with the individual (and parents/caregivers for children) 
                    about current symptoms, developmental history, medical history, family history, and functional 
                    impairment in various settings. This provides context and detailed information 
                    that rating scales alone cannot capture.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">2. Rating Scales and Questionnaires</div>
                  <div className="text-sm">
                    Standardized rating scales completed by the individual, parents, teachers, or other observers 
                    provide quantitative data about symptom frequency and severity. These tools 
                    have demonstrated reliability and validity across diverse populations.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">3. Behavioral Observations</div>
                  <div className="text-sm">
                    Clinicians observe the individual's behavior during the evaluation, though it's important to note 
                    that many people with ADHD can focus well in novel, one-on-one situations, so lack of symptoms 
                    during evaluation doesn't rule out ADHD.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">4. Medical Examination</div>
                  <div className="text-sm">
                    A physical examination and review of medical history help rule out medical conditions that could 
                    cause ADHD-like symptoms (thyroid problems, sleep disorders, hearing or vision problems, etc.).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">5. Psychological or Educational Testing</div>
                  <div className="text-sm">
                    While not required for ADHD diagnosis, testing may be conducted to identify learning disabilities, 
                    assess intellectual functioning, or evaluate executive function skills.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">6. Review of Records</div>
                  <div className="text-sm">
                    Report cards, performance reviews, or other documentation can provide evidence of long-standing 
                    patterns of difficulty.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>For Complete DSM-5 Criteria:</strong> See the{' '}
                <a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); setCurrentArticle?.('adhd-symptoms'); }}
                  className="text-[#0c264d] underline font-bold hover:text-[#2abcd4]"
                >
                  Symptoms & Characteristics page
                </a>
                {' '}for the full list of 18 diagnostic criteria.
              </p>
            </div>

            {/* Bottom button - right aligned above References */}
            <div className="flex justify-end my-8">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>

            {/* References for Diagnostic Process Tab */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
              
              <h3 className="text-[#0c264d] font-semibold mb-2">Cited Manual</h3>
              <div className="text-sm space-y-2">
                <p>[1] American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tests & Assessments Tab */}
        <TabsContent value="tests" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Tests & Assessments Used in ADHD Evaluation</h2>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important Note:</strong> Not all of these tests are needed for every evaluation. Your clinician 
                will select the appropriate assessments based on your individual situation, age, and presenting concerns. 
                ADHD can be diagnosed with clinical interview and rating scales alone—additional testing is used when needed 
                to clarify diagnosis or identify co-occurring conditions.
              </p>
            </div>

            {/* ADHD-Specific Rating Scales */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">ADHD-Specific Rating Scales</h3>
              <p className="text-sm mb-4">
                These standardized questionnaires are completed by parents, teachers, the individual, or other observers 
                to rate ADHD symptom frequency and severity. These tools have demonstrated reliability and validity across diverse 
                populations<sup className="text-[#10b981]">[1]</sup>.
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Conners Rating Scales (4th Edition)</div>
                  <div className="text-sm">
                    One of the most widely used ADHD rating scales. Versions available for parents, teachers, and 
                    self-report. Assesses ADHD symptoms, executive function, learning problems, and peer relations.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">ADHD Rating Scale-5 (ADHD-RS-5)</div>
                  <div className="text-sm">
                    Directly based on DSM-5 criteria<sup className="text-[#10b981]">[2]</sup>. Brief questionnaire (18 items matching the 18 DSM symptoms) 
                    with versions for home and school settings.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Vanderbilt ADHD Diagnostic Rating Scales</div>
                  <div className="text-sm">
                    Free, publicly available scales often used in primary care settings. Includes screening for common 
                    comorbidities (anxiety, depression, ODD, conduct disorder).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">SNAP-IV Rating Scale</div>
                  <div className="text-sm">
                    Swanson, Nolan, and Pelham questionnaire. Includes DSM-based ADHD items plus oppositional defiant 
                    disorder symptoms. Free and widely used in research.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Brown Attention-Deficit Disorder Scales</div>
                  <div className="text-sm">
                    Focuses on executive function aspects of ADHD (activation, focus, effort, emotion, memory, action). 
                    Versions for children, adolescents, and adults.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Adult ADHD Self-Report Scale (ASRS)</div>
                  <div className="text-sm">
                    WHO-developed screening tool specifically for adults<sup className="text-[#10b981]">[3]</sup>. Brief version (6 items) available for quick screening. 
                    Free and widely used.
                  </div>
                </div>
              </div>
            </div>

            {/* Continuous Performance Tests */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Continuous Performance Tests (CPTs)</h3>
              <p className="text-sm mb-4">
                Computer-based tests that measure sustained attention, impulsivity, and response variability. Not required 
                for diagnosis but can provide objective data about attention and impulse control.
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Conners Continuous Performance Test (CPT-3)</div>
                  <div className="text-sm">
                    14-minute computer test where individuals respond to target letters appearing on screen. Measures 
                    inattention, impulsivity, sustained attention, and vigilance.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Test of Variables of Attention (TOVA)</div>
                  <div className="text-sm">
                    21.6-minute visual or auditory attention test. Measures response time, variability, impulsivity, 
                    and sustained attention.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Integrated Visual and Auditory (IVA-2)</div>
                  <div className="text-sm">
                    Tests both visual and auditory attention and response control. Provides separate scores for attention 
                    and impulse control.
                  </div>
                </div>
              </div>

              <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-3 rounded mt-4">
                <p className="text-sm">
                  <strong>Limitation:</strong> CPTs should NEVER be used alone to diagnose ADHD. Many people with ADHD 
                  perform normally on these tests (especially in the novel testing environment), and abnormal results can 
                  occur with other conditions like anxiety or sleep deprivation.
                </p>
              </div>
            </div>

            {/* Executive Function Assessments */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Executive Function Assessments</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Behavior Rating Inventory of Executive Function (BRIEF-2)</div>
                  <div className="text-sm">
                    Questionnaire assessing real-world executive function behaviors (working memory, planning, organization, 
                    task initiation, emotional control, etc.). Versions for children, adults, preschoolers, and self-report.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Delis-Kaplan Executive Function System (D-KEFS)</div>
                  <div className="text-sm">
                    Comprehensive battery of performance-based tests measuring verbal and nonverbal executive functions 
                    (flexibility, inhibition, problem-solving, planning, creativity, impulse control).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Wisconsin Card Sorting Test (WCST)</div>
                  <div className="text-sm">
                    Measures abstract reasoning, cognitive flexibility, and set-shifting ability (changing strategies 
                    when rules change).
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual & Academic Testing */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Intellectual & Academic Achievement Tests</h3>
              <p className="text-sm mb-4">
                These are NOT required for ADHD diagnosis but may be used to identify learning disabilities, intellectual 
                giftedness, or cognitive strengths/weaknesses.
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Wechsler Intelligence Scales</div>
                  <div className="text-sm">
                    <strong>WISC-V</strong> (children), <strong>WAIS-IV</strong> (adults), <strong>WPPSI-IV</strong> (preschoolers). 
                    Comprehensive IQ tests measuring verbal comprehension, visual-spatial reasoning, working memory, processing 
                    speed, and fluid reasoning.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Wechsler Individual Achievement Test (WIAT-4)</div>
                  <div className="text-sm">
                    Assesses academic achievement in reading, writing, and math. Used to identify learning disabilities 
                    that commonly co-occur with ADHD.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Woodcock-Johnson Tests of Achievement (WJ IV)</div>
                  <div className="text-sm">
                    Comprehensive battery measuring academic skills and cognitive abilities. Often used for educational 
                    planning and accommodations.
                  </div>
                </div>
              </div>
            </div>

            {/* Broadband Behavior Scales */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Broadband Behavior & Emotional Scales</h3>
              <p className="text-sm mb-4">
                These assess a wide range of behavioral and emotional problems, not just ADHD. Helpful for identifying 
                comorbid conditions.
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Child Behavior Checklist (CBCL) / Adult Behavior Checklist (ABCL)</div>
                  <div className="text-sm">
                    Part of the Achenbach System. Screens for anxiety, depression, social problems, thought problems, 
                    attention problems, aggressive behavior, and rule-breaking behavior.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Behavior Assessment System for Children (BASC-3)</div>
                  <div className="text-sm">
                    Comprehensive assessment of adaptive and problem behaviors in children and adolescents. Includes 
                    parent, teacher, and self-report forms.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Bottom Line:</strong> A typical ADHD evaluation uses clinical interview + 1-2 rating scales 
                (like Conners or Vanderbilt) + medical history. Additional testing (CPTs, IQ tests, achievement tests) 
                is added only when there are questions about learning disabilities, intellectual functioning, or diagnostic 
                uncertainty. Quality of clinical judgment matters more than quantity of tests!
              </p>
            </div>

            {/* Bottom button - right aligned above References */}
            <div className="flex justify-end my-8">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>

            {/* References for Tests & Assessments Tab */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
              
              <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies and Tools</h3>
              <div className="text-sm space-y-2">
                <p>[1] DuPaul, G. J., Power, T. J., Anastopoulos, A. D., & Reid, R. (2016). <em>ADHD Rating Scale-5 for Children and Adolescents: Checklists, Norms, and Clinical Interpretation</em>. Guilford Press.</p>
                <p>[2] American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
                <p>[3] Kessler, R. C., et al. (2005). "The World Health Organization Adult ADHD Self-Report Scale (ASRS): A short screening scale for use in the general population." <em>Psychological Medicine</em>, 35(2), 245-256.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Who Can Diagnose Tab */}
        <TabsContent value="professionals" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Professionals Qualified to Diagnose ADHD</h2>
            
            <div className="flex justify-center mb-6">
              <ADHDDiagnosticProfessionals className="w-80 h-auto rounded-md border border-gray-300" />
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Key Point:</strong> Several types of licensed healthcare professionals can diagnose ADHD. 
                What matters most is that they have specific training and experience in ADHD assessment.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Licensed Professionals Who Can Diagnose ADHD</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Psychiatrists</div>
                  <div className="text-sm">
                    Medical doctors (M.D. or D.O.) specializing in mental health. Can diagnose ADHD, prescribe medication, 
                    and provide therapy. Often specialize in child/adolescent or adult psychiatry.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Psychologists</div>
                  <div className="text-sm">
                    Doctoral-level professionals (Ph.D. or Psy.D.) trained in psychological assessment and diagnosis. 
                    Can conduct comprehensive testing and therapy but cannot prescribe medication (except in a few states).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Pediatricians or Family Physicians</div>
                  <div className="text-sm">
                    Primary care doctors (M.D. or D.O.) can diagnose and treat ADHD, particularly those with ADHD training. 
                    Often the first point of contact for families seeking evaluation.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Neurologists</div>
                  <div className="text-sm">
                    Medical doctors specializing in nervous system disorders. Child neurologists often diagnose ADHD, 
                    especially when neurological conditions are suspected.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Nurse Practitioners (NPs) & Physician Assistants (PAs)</div>
                  <div className="text-sm">
                    Advanced practice providers in mental health or primary care settings. Psychiatric Mental Health Nurse 
                    Practitioners (PMHNPs) can diagnose ADHD and prescribe medication in most states.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Neuropsychologists</div>
                  <div className="text-sm">
                    Psychologists specializing in brain-behavior relationships. Conduct comprehensive testing of cognitive 
                    functions, particularly helpful when diagnostic picture is complex or learning disabilities are suspected.
                  </div>
                </div>
              </div>
            </div>

            {/* Who CANNOT Diagnose */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Who CANNOT Diagnose ADHD</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-red-500 pl-3">
                  <div className="text-sm">
                    <strong>• Teachers or School Counselors:</strong> Can recommend evaluation but cannot diagnose
                  </div>
                </div>

                <div className="border-l-2 border-red-500 pl-3">
                  <div className="text-sm">
                    <strong>• Licensed Clinical Social Workers (LCSWs):</strong> Can provide therapy but typically cannot 
                    diagnose ADHD (varies by state)
                  </div>
                </div>

                <div className="border-l-2 border-red-500 pl-3">
                  <div className="text-sm">
                    <strong>• Licensed Professional Counselors (LPCs):</strong> Can provide therapy but typically cannot 
                    diagnose ADHD (varies by state)
                  </div>
                </div>

                <div className="border-l-2 border-red-500 pl-3">
                  <div className="text-sm">
                    <strong>• Online "ADHD Tests":</strong> Cannot replace professional evaluation
                  </div>
                </div>
              </div>
            </div>

            {/* Finding a Provider */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">How to Find a Qualified Professional</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Ask About ADHD Experience</div>
                  <div className="text-sm">
                    Look for providers who regularly diagnose and treat ADHD. Ask: "What percentage of your practice 
                    involves ADHD?" and "How many ADHD evaluations do you conduct per year?"
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Use Professional Directories</div>
                  <div className="text-sm">
                    CHADD (Children and Adults with ADHD) maintains a directory of professionals with ADHD expertise. 
                    Psychology Today's directory allows filtering by specialty.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Check Credentials</div>
                  <div className="text-sm">
                    Verify that the provider is licensed in your state. Look for additional ADHD-specific training or 
                    certifications.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Ask Your Primary Care Doctor</div>
                  <div className="text-sm">
                    Your doctor can provide referrals to specialists in your area who have ADHD expertise.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Pro Tip:</strong> Look for professionals with specific ADHD training beyond their general license. 
                Organizations like CHADD offer professional training programs. Experience matters—a provider who regularly 
                works with ADHD will have better diagnostic accuracy than one who sees it occasionally.
              </p>
            </div>

            {/* Bottom button - right aligned above References */}
            <div className="flex justify-end my-8">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>

            {/* References for Who Can Diagnose Tab */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
              
              <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
              <div className="text-sm space-y-2">
                <p>Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD). "Professional Directory." Retrieved from chadd.org</p>
                <p>American Academy of Pediatrics. "Clinical Practice Guideline for the Diagnosis, Evaluation, and Treatment of ADHD in Children and Adolescents." Pediatrics.</p>
                <p>American Psychological Association. "Understanding ADHD: Information for Psychologists." Retrieved from apa.org</p>
                <p>American Academy of Child and Adolescent Psychiatry. "ADHD Resource Center." Retrieved from aacap.org</p>
                <p>Psychology Today. "Find a Therapist Directory - ADHD Specialists." Retrieved from psychologytoday.com</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Adult Diagnosis Tab */}
        <TabsContent value="adults" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnosing ADHD in Adults</h2>
            <ImageWithFallback src="/images/adhd/adhd-adult-dx-adult-male.png" alt="Adult male representing adult ADHD diagnosis" className="w-full max-w-md mx-auto rounded-lg mb-4" />
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Did You Know?</strong> Many adults with ADHD were never diagnosed as children. Girls, 
                individuals with the inattentive presentation, and those who compensated well academically often 
                go undiagnosed until adulthood when coping strategies can no longer keep up with demands.
              </p>
            </div>

            <p className="mb-6">
              Adult ADHD diagnosis presents unique challenges. Many adults seeking evaluation never 
              received a childhood diagnosis but struggled for years without understanding why. 
              The diagnostic process for adults is similar to children but adapted for adult-specific contexts and 
              challenges.
            </p>

            {/* Unique Challenges */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Unique Challenges in Adult ADHD Diagnosis</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Childhood Evidence Requirement</div>
                  <div className="text-sm">
                    DSM-5 requires symptoms to have been present before age 12.<sup className="text-[#10b981]">[1]</sup> This can be difficult to document decades 
                    later. Clinicians may rely on report cards, adult recall, or parent interviews when available.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Symptom Presentation Changes</div>
                  <div className="text-sm">
                    Hyperactivity often manifests as internal restlessness in adults rather than obvious physical movement. 
                    Adults develop compensatory strategies that mask symptoms, making diagnosis more challenging.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Comorbidities Complicate Picture</div>
                  <div className="text-sm">
                    Adults often have co-occurring anxiety, depression, or substance use disorders developed over years 
                    of struggling with undiagnosed ADHD. Clinicians must determine which symptoms belong to which condition.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Lack of Collateral Information</div>
                  <div className="text-sm">
                    Unlike children, adults often don't have teachers or parents available to provide observations. 
                    Partners or close friends may provide input when available.
                  </div>
                </div>
              </div>
            </div>

            {/* Adult-Specific Evaluation Components */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Adult-Specific Evaluation Components</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Childhood History Assessment</div>
                  <div className="text-sm">
                    Evidence of childhood symptoms is required, though formal childhood diagnosis is not. May include:
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• School records (report cards with comments like "doesn't pay attention," "fidgety," "doesn't finish work")</li>
                      <li>• Parent interviews (if parents are living and available)</li>
                      <li>• Adult recall of childhood struggles</li>
                      <li>• Standardized childhood symptom scales completed retrospectively</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Adult-Specific Rating Scales</div>
                  <div className="text-sm">
                    Assess symptoms in work, household management, relationship, and parenting contexts:
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• Adult ADHD Self-Report Scale (ASRS)</li>
                      <li>• Conners Adult ADHD Rating Scales (CAARS)</li>
                      <li>• Barkley Adult ADHD Rating Scale (BAARS-IV)</li>
                      <li>• Brown Attention-Deficit Disorder Scales for Adults</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Differential Diagnosis Focus</div>
                  <div className="text-sm">
                    Clinicians must carefully distinguish ADHD from adult-onset conditions like:
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• Anxiety disorders (can cause distractibility and restlessness)</li>
                      <li>• Depression (can cause poor concentration and low motivation)</li>
                      <li>• Bipolar disorder (can involve impulsivity and racing thoughts)</li>
                      <li>• Substance use disorders</li>
                      <li>• Sleep disorders (sleep deprivation mimics ADHD)</li>
                      <li>• Medical conditions (thyroid, menopause, etc.)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Functional Impairment Assessment</div>
                  <div className="text-sm">
                    Adults must demonstrate impairment in multiple areas:
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• Work performance (missed deadlines, disorganization, job changes)</li>
                      <li>• Relationships (forgetfulness, not listening, emotional outbursts)</li>
                      <li>• Daily responsibilities (paying bills, household management, time management)</li>
                      <li>• Driving safety (accidents, speeding tickets)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Adult ADHD Presentations */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Common Adult ADHD Presentations</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">The High-Achiever</div>
                  <div className="text-sm">
                    Compensated through high intelligence or supportive structure in school. Symptoms become unmanageable 
                    in college, graduate school, or complex work environments when supports fade and demands increase.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">The Inattentive "Daydreamer"</div>
                  <div className="text-sm">
                    Often women who were never disruptive in school. Described as "spacey," "in their own world," or 
                    "not living up to potential." Diagnosed in adulthood when organizational demands overwhelm them.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">The Parent Diagnosed Alongside Their Child</div>
                  <div className="text-sm">
                    Recognizes their own childhood experiences while going through their child's ADHD evaluation. 
                    Common pathway to adult diagnosis.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">The Career Struggler</div>
                  <div className="text-sm">
                    Multiple job changes, underemployment despite intelligence, chronic lateness, missed deadlines, 
                    and difficulty with paperwork/administrative tasks.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm mb-2">
                <strong>Relief and Validation:</strong> Many adults describe a sense of profound relief upon receiving 
                an ADHD diagnosis. It provides an explanation for lifelong struggles and validates experiences of feeling 
                "different" or "not living up to potential."
              </p>
              <p className="text-sm">
                <strong>It's Never Too Late:</strong> ADHD diagnosis and treatment can be life-changing at any age. 
                Adults in their 30s, 40s, 50s, and beyond benefit from understanding their ADHD and accessing appropriate 
                support.
              </p>
            </div>

            {/* Bottom button - right aligned above References */}
            <div className="flex justify-end my-8">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>

            {/* References for Adult Diagnosis Tab */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
              
              <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
              <div className="text-sm space-y-2">
                <p>[1] American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
              </div>
              
              <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
              <div className="text-sm space-y-2">
                <p>Kessler, R. C., Adler, L., Barkley, R., Biederman, J., Conners, C. K., Demler, O., ... & Zaslavsky, A. M. (2006). "The prevalence and correlates of adult ADHD in the United States: Results from the National Comorbidity Survey Replication." <em>American Journal of Psychiatry</em>, 163(4), 716-723.</p>
                <p>Ramsay, J. R., & Rostain, A. L. (2015). <em>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</em>. Routledge.</p>
                <p>Barkley, R. A., Murphy, K. R., & Fischer, M. (2008). <em>ADHD in Adults: What the Science Says</em>. Guilford Press.</p>
                <p>National Institute of Mental Health. "Attention-Deficit/Hyperactivity Disorder in Adults." Retrieved from nimh.nih.gov</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Challenges & Comorbidities Tab */}
        <TabsContent value="challenges" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Challenges & Comorbidities</h2>
            <ImageWithFallback src="/images/adhd/adhd-challenges-question-mark-maze.png" alt="Question mark in a maze representing diagnostic challenges" className="w-full max-w-md mx-auto rounded-lg mb-4" />
            
            {/* Challenges Section */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Challenges in ADHD Diagnosis</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Symptom Overlap with Other Conditions</div>
                  <div className="text-sm">
                    Many conditions share symptoms with ADHD, including anxiety, depression, 
                    learning disabilities, sleep disorders, thyroid conditions, 
                    and autism spectrum disorder. Skilled clinicians must carefully differentiate ADHD 
                    from these other conditions or recognize when they co-occur.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Subjective Nature of Assessment</div>
                  <div className="text-sm">
                    ADHD diagnosis relies heavily on subjective reports and observations rather than objective tests. 
                    Different observers may have different perspectives on symptom severity. Teacher ratings and parent ratings 
                    often show only modest correlation, reflecting genuine differences in behavior across settings as well as 
                    rater biases.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Diagnostic Biases</div>
                  <div className="text-sm">
                    Girls, women, and adults with inattentive presentation are often overlooked. 
                    Cultural factors, socioeconomic status, and implicit biases can 
                    affect who gets evaluated and diagnosed. Girls with ADHD are significantly more likely 
                    to have the inattentive presentation, which is less disruptive and therefore less likely to prompt referral 
                    for evaluation.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Lack of Objective Biomarkers</div>
                  <div className="text-sm">
                    There are no blood tests, brain scans, or genetic tests that can definitively diagnose ADHD. While 
                    neuroimaging research shows differences in ADHD brains, these aren't used for individual diagnosis.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Situational Variability</div>
                  <div className="text-sm">
                    ADHD symptoms often improve in novel, interesting, or one-on-one situations (like a clinical evaluation!). 
                    A child or adult may appear completely fine during assessment but struggle significantly in real-world settings.
                  </div>
                </div>
              </div>
            </div>

            {/* Differential Diagnosis */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Conditions to Rule Out (Differential Diagnosis)</h3>
              <p className="text-sm mb-4">
                Part of the diagnostic process involves considering other conditions that could explain symptoms instead of ADHD.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Sleep Disorders</div>
                  <div className="text-sm">Sleep deprivation or sleep apnea can cause inattention and hyperactivity</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Learning Disabilities</div>
                  <div className="text-sm">Dyslexia or other LDs can look like inattention during academic tasks</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Anxiety</div>
                  <div className="text-sm">Worry and rumination can cause distraction and restlessness</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Depression</div>
                  <div className="text-sm">Can cause concentration problems and low motivation</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Thyroid Issues</div>
                  <div className="text-sm">Both hyper- and hypothyroidism can mimic ADHD symptoms</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Hearing/Vision Problems</div>
                  <div className="text-sm">Undetected sensory issues can cause apparent inattention</div>
                </div>
              </div>
            </div>

            {/* Comorbidities */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Common Co-occurring Conditions (Comorbidities)</h3>
              <p className="text-sm mb-4">
                ADHD rarely travels alone. About two-thirds of children and adults with ADHD have at least one 
                other condition.
              </p>
              
              <div className="flex justify-center mb-6">
                <ADHDComorbidities className="w-full max-w-lg h-auto rounded-md border border-gray-300" />
              </div>

              <div className="space-y-3">
                <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]">
                  <div className="font-bold text-[#0c264d] mb-1">Oppositional Defiant Disorder (ODD)</div>
                  <div className="text-sm">Occurs in ~40% of children with ADHD. Characterized by defiance, irritability, and vindictiveness.</div>
                </div>
                <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]">
                  <div className="font-bold text-[#0c264d] mb-1">Anxiety Disorders</div>
                  <div className="text-sm">Occurs in ~30% of individuals with ADHD. Excessive worry, nervousness, or specific phobias.</div>
                </div>
                <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]">
                  <div className="font-bold text-[#0c264d] mb-1">Learning Disabilities</div>
                  <div className="text-sm">Occurs in ~30-50% of individuals with ADHD. Dyslexia, dyscalculia, or dysgraphia.</div>
                </div>
                <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]">
                  <div className="font-bold text-[#0c264d] mb-1">Autism Spectrum Disorder (ASD)</div>
                  <div className="text-sm">Significant overlap. Many individuals (AuDHD) meet criteria for both conditions.</div>
                </div>
                <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]">
                  <div className="font-bold text-[#0c264d] mb-1">Mood Disorders</div>
                  <div className="text-sm">Depression and bipolar disorder co-occur more frequently with ADHD than in the general population.</div>
                </div>
              </div>
            </div>

            {/* Bottom button - right aligned above References */}
            <div className="flex justify-end my-8">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>
          </div>
        </TabsContent>

        {/* After Diagnosis Tab */}
        <TabsContent value="after" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Comes After Diagnosis?</h2>
            <ImageWithFallback src="/images/adhd/adhd-after-dx-treatment-roadmap.png" alt="Treatment roadmap showing steps after ADHD diagnosis" className="w-full max-w-md mx-auto rounded-lg mb-4" />
            
            <p className="mb-6">
              Receiving an ADHD diagnosis is just the first step. The post-diagnosis period involves 
              understanding what the diagnosis means for you, developing a treatment plan, and building a support 
              system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">1. Education & Acceptance</h3>
                <ul className="text-sm space-y-2 list-disc ml-4">
                  <li>Learn about ADHD neurobiology (it's not a character flaw!)</li>
                  <li>Identify your specific strengths and challenges</li>
                  <li>Process emotional reactions (relief, grief, anger)</li>
                  <li>Connect with ADHD communities for support</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">2. Treatment Planning</h3>
                <ul className="text-sm space-y-2 list-disc ml-4">
                  <li>Discuss medication options with your provider</li>
                  <li>Consider therapy (CBT, coaching) for skill-building</li>
                  <li>Address lifestyle factors (sleep, exercise, nutrition)</li>
                  <li>Treat co-occurring conditions if present</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">3. Accommodations</h3>
                <ul className="text-sm space-y-2 list-disc ml-4">
                  <li><strong>School:</strong> Request IEP or 504 Plan meeting</li>
                  <li><strong>College:</strong> Register with Disability Services</li>
                  <li><strong>Work:</strong> Identify helpful workplace modifications</li>
                  <li><strong>Home:</strong> Organize environment to support executive function</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">4. Skill Building</h3>
                <ul className="text-sm space-y-2 list-disc ml-4">
                  <li>Develop organizational systems that work for YOUR brain</li>
                  <li>Learn time management strategies (timers, planners)</li>
                  <li>Practice emotional regulation techniques</li>
                  <li>Build self-advocacy skills</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Remember:</strong> Treatment is a marathon, not a sprint. It often takes time to find the right 
                medication dosage, therapist, or organizational system. Be patient with yourself and keep communicating 
                with your treatment team.
              </p>
            </div>

            {/* Bottom button - right aligned above References */}
            <div className="flex justify-end my-8">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>
          </div>
        </TabsContent>

        {/* Recent Research Tab */}
        <TabsContent value="research" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Recent Research in ADHD Diagnosis</h2>
            
            <p className="mb-6">
              The field of ADHD research is rapidly evolving. Here are some key recent findings relevant to diagnosis:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Objective Diagnostic Markers</h3>
                <p className="text-sm">
                  Researchers are exploring the use of objective markers like eye-tracking, actigraphy (movement tracking), 
                  and EEG patterns to supplement clinical diagnosis. While not yet ready for standalone diagnostic use, 
                  these tools show promise for improving diagnostic accuracy in the future.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Machine Learning and AI</h3>
                <p className="text-sm">
                  Studies are investigating how artificial intelligence can analyze patterns in behavioral data, 
                  neuroimaging, and genetic information to identify ADHD subtypes and predict treatment response 
                  more accurately.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Adult-Onset ADHD?</h3>
                <p className="text-sm">
                  Recent longitudinal studies have sparked debate about "adult-onset" ADHD. While some researchers 
                  propose ADHD can emerge in adulthood without childhood symptoms, others argue these cases likely 
                  represent missed childhood symptoms, sub-threshold childhood symptoms, or other conditions mimicking 
                  ADHD. The consensus remains that ADHD is a neurodevelopmental condition starting in childhood, even 
                  if not recognized until later.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Sluggish Cognitive Tempo (SCT)</h3>
                <p className="text-sm">
                  Research continues into "Sluggish Cognitive Tempo" (sometimes called Cognitive Disengagement Syndrome), 
                  characterized by daydreaming, mental fogginess, and slow processing. It is currently considered distinct 
                  from but related to ADHD Inattentive presentation, though it is not yet an official DSM diagnosis.
                </p>
              </div>
            </div>

            {/* Bottom button - right aligned above References */}
            <div className="flex justify-end my-8">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>
          </div>
        </TabsContent>

        {/* AuDHD Tab */}
        <TabsContent value="audhd" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">AuDHD: The Intersection of Autism and ADHD</h2>
            <ImageWithFallback src="/images/adhd/adhd-audhd-sun-swirl.png" alt="Sun swirl pattern representing the AuDHD intersection" className="w-full max-w-md mx-auto rounded-lg mb-4" />
            
            <p className="mb-4">
              "AuDHD" is a community term for having both Autism Spectrum Disorder (ASD) and ADHD. Until 2013, 
              the DSM-IV prohibited diagnosing both conditions in the same person. The DSM-5 removed this restriction, 
              acknowledging that these conditions frequently co-occur.
            </p>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prevalence of Co-occurrence</h3>
              <ImageWithFallback src="/images/adhd/adhd-audhd-bolt-gold-infinity.png" alt="Gold infinity symbol with lightning bolt representing AuDHD prevalence" className="w-full max-w-md mx-auto rounded-lg mb-4" />
              <ul className="text-sm space-y-2 list-disc ml-4">
                <li><strong>30-80%</strong> of autistic people also meet criteria for ADHD</li>
                <li><strong>20-50%</strong> of people with ADHD also meet criteria for autism</li>
                <li>Both conditions share genetic risks and neurobiological features</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Shared Traits</h3>
                <ImageWithFallback src="/images/adhd/adhd-audhd-split-face.png" alt="Split face illustration representing shared autism and ADHD traits" className="w-full max-w-md mx-auto rounded-lg mb-4" />
                <ul className="text-sm space-y-2 list-disc ml-4">
                  <li>Executive function challenges</li>
                  <li>Sensory processing differences</li>
                  <li>Social differences</li>
                  <li>Hyperfocus / deep interests</li>
                  <li>Emotional dysregulation</li>
                  <li>Stimming / fidgeting</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Conflicting Needs (The "Paradox")</h3>
                <ImageWithFallback src="/images/adhd/adhd-audhd-infinity-on-brain.png" alt="Infinity symbol on brain representing conflicting needs in AuDHD" className="w-full max-w-md mx-auto rounded-lg mb-4" />
                <p className="text-sm mb-2">AuDHD can feel like a constant internal tug-of-war:</p>
                <ul className="text-sm space-y-2 list-disc ml-4">
                  <li><strong>Routine vs. Novelty:</strong> Autism craves sameness; ADHD craves newness.</li>
                  <li><strong>Order vs. Chaos:</strong> Autism wants organization; ADHD struggles to maintain it.</li>
                  <li><strong>Social:</strong> ADHD may want to socialize impulsively; Autism may find it draining.</li>
                  <li><strong>Focus:</strong> Autism may hyperfocus; ADHD may struggle to sustain attention.</li>
                </ul>
              </div>
            </div>

            <p className="mb-4">
              Diagnosing AuDHD can be complex because one condition can mask the other. For example, strict autistic 
              routines might mask ADHD disorganization, or ADHD social impulsivity might mask autistic social withdrawal. 
              Comprehensive evaluation by a clinician experienced in both conditions is essential.
            </p>

            {/* Bottom button - right aligned above References */}
            <div className="flex justify-end my-8">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}
