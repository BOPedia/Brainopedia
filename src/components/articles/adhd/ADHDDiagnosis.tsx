import { ADHDComorbidities } from '../../infographics/ADHDComorbidities';
import { ADHDDiagnosticProfessionals } from '../../infographics/ADHDDiagnosticProfessionals';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface ADHDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ADHDDiagnosis({ setCurrentArticle, initialTab }: ADHDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'process');

  return (
    <article className="max-w-full w-full">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ADHD
      </button>

      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
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
            
            <ImageWithFallback 
              src="/images/adhd/adhd-diag-proc-ball-over-head-boy.png"
              alt="The ADHD diagnostic process - clinical evaluation"
              className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
            />

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6 clear-both">
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
              Disorders (DSM-5-TR)<sup className="text-green-600 font-bold ml-0.5">1</sup>. To receive an ADHD diagnosis, an individual must display a persistent 
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

            {/* Bottom button */}
            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
            
            <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
              <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
                  Cited Studies & Statistics
                </h4>
                <div className="text-xs space-y-3 text-slate-600 leading-relaxed">
                  <p>1. American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
                </div>
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
                populations<sup className="text-green-600 font-bold ml-0.5">1</sup>.
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
                    Directly based on DSM-5 criteria<sup className="text-green-600 font-bold ml-0.5">2</sup>. Brief questionnaire (18 items matching the 18 DSM symptoms) 
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
                    WHO-developed screening tool specifically for adults<sup className="text-green-600 font-bold ml-0.5">3</sup>. Brief version (6 items) available for quick screening. 
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

            {/* Bottom button */}
            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
            
            <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
              <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
                  Cited Studies & Statistics
                </h4>
                <div className="text-xs space-y-3 text-slate-600 leading-relaxed">
                  <p>1. DuPaul, G. J., Power, T. J., Anastopoulos, A. D., & Reid, R. (2016). <em>ADHD Rating Scale-5 for Children and Adolescents: Checklists, Norms, and Clinical Interpretation</em>. Guilford Press.</p>
                  <p>2. American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
                  <p>3. Kessler, R. C., et al. (2005). "The World Health Organization Adult ADHD Self-Report Scale (ASRS): A short screening scale for use in the general population." <em>Psychological Medicine</em>, 35(2), 245-256.</p>
                </div>
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

            {/* Bottom button */}
            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-xl">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
            
            <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
              <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                  Background Sources
                </h4>
                <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
                  <li>Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD). "Professional Directory." Retrieved from chadd.org</li>
                  <li>American Academy of Pediatrics. "Clinical Practice Guideline for the Diagnosis, Evaluation, and Treatment of ADHD in Children and Adolescents." Pediatrics.</li>
                  <li>American Psychological Association. "Understanding ADHD: Information for Psychologists." Retrieved from apa.org</li>
                  <li>American Academy of Child and Adolescent Psychiatry. "ADHD Resource Center." Retrieved from aacap.org</li>
                  <li>Psychology Today. "Find a Therapist Directory - ADHD Specialists." Retrieved from psychologytoday.com</li>
                </ul>
              </div>
            </div>

          </div>
        </TabsContent>

        {/* Adult Diagnosis Tab */}
        <TabsContent value="adults" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnosing ADHD in Adults</h2>
            
            <ImageWithFallback 
              src="/images/adhd/adhd-adult-dx-adult-male.png"
              alt="Adult ADHD diagnosis - recognizing symptoms in adulthood"
              className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
            />

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6 clear-both">
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
                    DSM-5 requires symptoms to have been present before age 12.<sup className="text-green-600 font-bold ml-0.5">1</sup> This can be difficult to document decades 
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
                      <li>• Brown Attention-Def