import { ImageWithFallback } from '../../figma/ImageWithFallback';
import diagnosticImage from 'figma:asset/1633ca9bea59b4a3b3e6b7087c479ee2360f3c66.png';
import medicalHistoryImage from 'figma:asset/13509ca3eb0e859780ec761411a2f35349774273.png';
import diagnosticChallengesImage from 'figma:asset/dc8813866664b088af6ab645df5ef5d3699cf358.png';
import treatmentRoadmapImage from 'figma:asset/6d14691114fd0d1363978e24997dce57afb96618.png';
import adultDiagnosisImage from 'figma:asset/81570279914c41152278b5a853728e4705e84424.png';
import audhDiagramImage from 'figma:asset/33ec4ce1f032f45020d6681c6d2e7e162d97967c.png';
import audhdInfinityImage from 'figma:asset/9522bb5b80697a394d3085c97b3a065b760f50d9.png';
import audhdLightningInfinityImage from 'figma:asset/67726bc2825ca35cab087855bb90d3dff1a7574a.png';
import audhdSplitFaceImage from 'figma:asset/780399a7b16de39744e0dfc36e0beff5119d96b9.png';
import audhdRainbowBrainImage from 'figma:asset/fa7e8c8312160f1735084c1ed35ee2c14c605c62.png';
import audhdAbstractArtImage from 'figma:asset/8a38b0193430013fb5adb9caa4f9c9e4981c6637.png';
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
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important:</strong> There is no single test for ADHD. Diagnosis requires a comprehensive 
                evaluation by a qualified healthcare professional using multiple sources of information.
              </p>
            </div>

            <div className="flex justify-center mb-6">
              <img 
                src={diagnosticImage} 
                alt="Medical consultation representing the diagnostic process"
                className="max-w-xs h-auto rounded-md border border-gray-300"
              />
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
            
            <div className="flex justify-center mb-6">
              <img 
                src={adultDiagnosisImage} 
                alt="Adult professional representing adult ADHD diagnosis"
                className="w-80 h-auto rounded-md border border-gray-300"
              />
            </div>

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
            
            <div className="flex justify-center mb-6">
              <img 
                src={diagnosticChallengesImage} 
                alt="Diagnostic challenges illustration"
                className="w-80 h-auto rounded-md border border-gray-300"
              />
            </div>

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
                Part of the diagnostic process involves considering other conditions that could explain symptoms instead of ADHD:
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Learning Disabilities</div>
                  <div className="text-sm">Dyslexia, dyscalculia, etc.</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Intellectual Disability</div>
                  <div className="text-sm">Cognitive limitations</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Sensory Impairments</div>
                  <div className="text-sm">Vision or hearing problems</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Sleep Disorders</div>
                  <div className="text-sm">Sleep apnea, insomnia</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Medical Conditions</div>
                  <div className="text-sm">Thyroid, anemia, etc.</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Medication Side Effects</div>
                  <div className="text-sm">Some medications cause ADHD-like symptoms</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Stress/Trauma</div>
                  <div className="text-sm">Adjustment to life changes</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Anxiety Disorders</div>
                  <div className="text-sm">Can cause distractibility and restlessness</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Mood Disorders</div>
                  <div className="text-sm">Depression, bipolar disorder</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Autism Spectrum Disorder</div>
                  <div className="text-sm">Can involve attention differences</div>
                </div>
              </div>
            </div>

            {/* Comorbidities Section */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Common Comorbidities (Co-Occurring Conditions)</h3>
              
              <div className="flex justify-center mb-4">
                <ADHDComorbidities className="w-96" />
              </div>

              <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-3 rounded mb-4">
                <p className="text-sm">
                  <strong>Key Statistic:</strong> About two-thirds (60-70%) of individuals with ADHD have at least one 
                  co-occurring condition.<sup className="text-[#10b981]">[1]</sup> This is the rule, not the exception!
                </p>
              </div>

              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Anxiety Disorders (25-40%)<sup className="text-[#10b981]">[2]</sup></div>
                  <div className="text-sm">
                    Generalized anxiety, social anxiety, and panic disorders are common. The overlap between ADHD and 
                    anxiety is particularly high.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Depression (18-30%)<sup className="text-[#10b981]">[3]</sup></div>
                  <div className="text-sm">
                    Major depressive disorder and dysthymia frequently co-occur with ADHD, often developing after years 
                    of struggling with undiagnosed ADHD.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Oppositional Defiant Disorder (40% in children)<sup className="text-[#10b981]">[4]</sup></div>
                  <div className="text-sm">
                    Argumentative, defiant behavior. Very common in children with ADHD.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Learning Disabilities (30-50%)<sup className="text-[#10b981]">[5]</sup></div>
                  <div className="text-sm">
                    Dyslexia, dyscalculia, dysgraphia, and other specific learning disorders commonly co-occur.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Autism Spectrum Disorder (30-50%)<sup className="text-[#10b981]">[6]</sup></div>
                  <div className="text-sm">
                    High co-occurrence rates. DSM-5 now allows dual diagnosis of ADHD and ASD (previously not permitted).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Substance Use Disorders (15-20%)<sup className="text-[#10b981]">[7]</sup></div>
                  <div className="text-sm">
                    Higher rates of alcohol and drug use disorders, often as self-medication for untreated ADHD.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Sleep Disorders</div>
                  <div className="text-sm">
                    Delayed sleep phase syndrome, restless leg syndrome, and insomnia are common in ADHD.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Clinical Importance:</strong> Identifying comorbid conditions is crucial for comprehensive 
                treatment planning. Treatment approaches may need to address multiple conditions 
                simultaneously. For example, treating ADHD alone without addressing co-occurring anxiety may not lead 
                to full improvement.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* After Diagnosis Tab */}
        <TabsContent value="after" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">After Receiving a Diagnosis</h2>
            
            <div className="flex justify-center mb-6">
              <img 
                src={treatmentRoadmapImage} 
                alt="Treatment planning roadmap"
                className="w-80 h-auto rounded-md border border-gray-300"
              />
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important:</strong> Receiving an ADHD diagnosis is just the beginning, not the end. 
                The diagnosis opens the door to effective treatment, accommodations, and self-understanding that 
                can be truly life-changing.
              </p>
            </div>

            <p className="mb-6">
              Receiving an ADHD diagnosis is just the beginning. After diagnosis, important next steps 
              include education, treatment planning, accessing support, and regular follow-up.
            </p>

            {/* Next Steps */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Important Next Steps</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">1. Learn About ADHD</div>
                  <div className="text-sm">
                    Education is crucial. Understanding how ADHD affects you specifically helps you develop effective 
                    strategies and self-compassion. Read books, attend workshops, join support groups, 
                    and explore evidence-based resources.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">2. Develop a Treatment Plan</div>
                  <div className="text-sm">
                    Work with your healthcare provider to create a comprehensive plan that may include:
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• <strong>Medication:</strong> Stimulants or non-stimulants (see Treatment page)</li>
                      <li>• <strong>Therapy:</strong> CBT, coaching, skills training</li>
                      <li>• <strong>Accommodations:</strong> School or workplace supports</li>
                      <li>• <strong>Lifestyle changes:</strong> Exercise, sleep, nutrition, organization systems</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">3. Connect with Support</div>
                  <div className="text-sm">
                    Find communities and resources:
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• CHADD (Children and Adults with ADHD)</li>
                      <li>• Local support groups</li>
                      <li>• Online communities (carefully vetted for accurate information)</li>
                      <li>• ADHD coaches or therapists</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">4. Obtain Accommodations</div>
                  <div className="text-sm">
                    If you're in school or working, explore accommodations:
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• <strong>Students:</strong> 504 Plan or IEP (K-12), Disability Services (college)</li>
                      <li>• <strong>Workers:</strong> ADA accommodations (extended deadlines, quiet workspace, written instructions, etc.)</li>
                      <li>• <strong>Testing:</strong> Extended time, distraction-reduced environment for SAT, MCAT, Bar Exam, etc.</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">5. Regular Follow-Up</div>
                  <div className="text-sm">
                    Monitor treatment effectiveness with regular check-ins. ADHD management often requires 
                    adjustments over time as life circumstances change. Stay in touch with your treatment team.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">6. Practice Self-Compassion</div>
                  <div className="text-sm">
                    Many people with ADHD carry years of shame, self-blame, and negative self-talk. Understanding that 
                    your struggles are neurological, not character flaws, can be incredibly healing.
                  </div>
                </div>
              </div>
            </div>

            {/* Common Emotions After Diagnosis */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Common Emotions After Diagnosis</h3>
              <p className="text-sm mb-4">
                Getting diagnosed can bring up complex feelings. All of these are normal:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Relief</div>
                  <div className="text-sm">
                    "Finally, an explanation for why I've struggled so much." Many people feel validated and relieved 
                    to have a name for their experiences.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Grief</div>
                  <div className="text-sm">
                    "What might have been different if I'd known sooner?" Grieving lost opportunities or years of 
                    struggling is normal, especially for late-diagnosed adults.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Overwhelm</div>
                  <div className="text-sm">
                    "What do I do now?" There's a lot of information to process. Take it one step at a time.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Uncertainty</div>
                  <div className="text-sm">
                    "Am I really ADHD, or am I just lazy/broken?" Internalized stigma can make acceptance difficult. 
                    Remember: ADHD is a real neurological condition, not a character flaw.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Hope</div>
                  <div className="text-sm">
                    "Things can get better from here." With proper treatment and support, most people with ADHD see 
                    significant improvement in functioning and quality of life.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm mb-2">
                <strong>The Path Forward:</strong> An accurate diagnosis opens the door to effective treatment and 
                support, allowing individuals to better understand themselves and develop strategies that work with 
                their unique brain.
              </p>
              <p className="text-sm mt-3">
                <strong>Remember:</strong> ADHD is highly treatable. With the right combination of medication, therapy, 
                accommodations, and support, most people with ADHD can thrive. Your diagnosis is the first step toward 
                a better understanding of yourself and a more supported future.
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

            {/* References for After Diagnosis Tab */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
              
              <h3 className="text-[#0c264d] font-semibold mb-2">Background Sources</h3>
              <div className="text-sm space-y-2">
                <p>Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD). "After Diagnosis: Next Steps." Retrieved from chadd.org</p>
                <p>Barkley, R. A. (2015). <em>Taking Charge of ADHD: The Complete, Authoritative Guide for Parents</em> (4th ed.). Guilford Press.</p>
                <p>Ramsay, J. R. (2020). <em>Rethinking Adult ADHD: Helping Clients Turn Intentions into Actions</em>. American Psychological Association.</p>
                <p>Nadeau, K. G., & Quinn, P. O. (2002). <em>Understanding Women with AD/HD</em>. Advantage Books.</p>
                <p>American Academy of Pediatrics. "ADHD: What Every Parent Needs to Know." Retrieved from aap.org</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Recent Research Tab */}
        <TabsContent value="research" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Recent Research & Innovations in ADHD Diagnosis</h2>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>About This Tab:</strong> This section highlights cutting-edge research and innovations in ADHD 
                diagnostic practices from 2015-2026. These are emerging findings and evolving best practices that are 
                shaping the future of ADHD assessment.
              </p>
            </div>

            <p className="mb-6">
              The field of ADHD diagnosis has advanced significantly in recent years, with new research improving 
              diagnostic accuracy, accessibility, and understanding of the assessment process. These developments are 
              helping clinicians make more reliable diagnoses and reducing barriers to evaluation for diverse populations.
            </p>

            {/* Structured Diagnostic Interviews */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Structured vs. Semi-Structured Interviews</h3>
              
              <p className="text-sm mb-4">
                Research demonstrates that semi-structured clinical interviews significantly improve diagnostic 
                reliability and consistency compared to unstructured conversations. These interviews follow 
                a standardized format while allowing clinicians flexibility to probe for clarification and context. 
                Studies show that structured diagnostic interviews reduce diagnostic variability and improve inter-rater 
                reliability across different clinicians.
              </p>
              
              <p className="text-sm mb-4">
                The Diagnostic Interview for ADHD in Adults (DIVA) and the Conners' Adult ADHD Diagnostic Interview 
                for DSM-5 (CAADID) are examples of semi-structured tools that have demonstrated strong psychometric 
                properties in research. For children, the Schedule for Affective Disorders and Schizophrenia 
                for School-Age Children (K-SADS) includes ADHD modules with high validity.
              </p>
            </div>

            {/* Functional Impairment Assessment */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Assessing Functional Impairment</h3>
              
              <p className="text-sm mb-4">
                Recent research emphasizes that functional impairment assessment is often inadequate in clinical 
                practice, yet it is a critical component of ADHD diagnosis. Simply meeting symptom criteria 
                is insufficient—the symptoms must cause significant impairment in real-world functioning across multiple 
                domains. Studies show that approximately 40-50% of individuals with elevated ADHD symptoms 
                do not experience clinically significant impairment and therefore should not receive a diagnosis.<sup className="text-[#10b981]">[1]</sup>
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4] mb-4">
                <div className="text-sm font-bold text-[#0c264d] mb-2">Key Domains of Functional Impairment:</div>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• <strong>Academic/Occupational:</strong> Grade performance, work productivity, task completion</li>
                  <li>• <strong>Social Relationships:</strong> Friendships, family relationships, peer conflicts</li>
                  <li>• <strong>Daily Living Skills:</strong> Self-care, organization, time management</li>
                  <li>• <strong>Emotional Functioning:</strong> Self-esteem, frustration tolerance, emotional regulation</li>
                  <li>• <strong>Safety/Risk Behaviors:</strong> Accidents, risky decision-making, substance use</li>
                </ul>
              </div>
              
              <p className="text-sm">
                The Weiss Functional Impairment Rating Scale (WFIRS) and Barkley Functional Impairment Scale (BFIS) 
                are validated tools specifically designed to assess ADHD-related impairment across these domains.
              </p>
            </div>

            {/* Differential Diagnosis */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Differential Diagnosis Process</h3>
              
              <p className="text-sm mb-4">
                A comprehensive ADHD evaluation must systematically rule out other conditions that can mimic or better 
                explain ADHD symptoms. Research indicates that misdiagnosis can occur when clinicians fail 
                to adequately consider alternative explanations for attention and behavioral difficulties.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4] mb-4">
                <div className="text-sm font-bold text-[#0c264d] mb-2">Conditions to Rule Out or Identify:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm ml-4">
                  <div>
                    <li>Sleep disorders (sleep apnea, insomnia)</li>
                    <li>Thyroid dysfunction</li>
                    <li>Hearing or vision problems</li>
                    <li>Learning disabilities</li>
                  </div>
                  <div>
                    <li>Anxiety disorders</li>
                    <li>Depression/Bipolar disorder</li>
                    <li>Trauma/PTSD</li>
                    <li>∞ Autism spectrum disorder</li>
                  </div>
                </div>
              </div>
              
              <p className="text-sm">
                Sleep disorders deserve particular attention, as research shows that children with sleep-disordered 
                breathing exhibit ADHD-like symptoms that often resolve with treatment of the sleep problem. 
                Similarly, trauma exposure can produce attention and hyperactivity symptoms that may be better explained 
                by post-traumatic stress disorder.
              </p>
            </div>

            {/* Telehealth Diagnostic Validity */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Telehealth ADHD Evaluations</h3>
              
              <p className="text-sm mb-4">
                The COVID-19 pandemic accelerated research on telehealth diagnostic assessments, with multiple studies 
                from 2020-2024 demonstrating that remote ADHD evaluations can be valid and reliable when properly 
                conducted. Research shows high concordance between in-person and telehealth diagnoses 
                when clinicians use standardized protocols and rating scales.
              </p>
              
              <p className="text-sm mb-4">
                Studies indicate that telehealth evaluations offer particular advantages for rural populations and 
                families with transportation or scheduling barriers, improving access to diagnostic services. 
                However, challenges include limited ability to observe some behavioral indicators and potential 
                technology barriers for some families.
              </p>
              
              <p className="text-sm">
                Best practices for telehealth ADHD assessment include using video conferencing, obtaining multi-informant 
                rating scales electronically, reviewing documentation remotely, and ensuring adequate technology setup 
                for both parties.
              </p>
            </div>

            {/* Diagnostic Timeline */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Timeline for Comprehensive Evaluation</h3>
              
              <p className="text-sm mb-4">
                Research on ADHD diagnostic practices reveals significant variability in evaluation duration. 
                Comprehensive evaluations typically require 2-6 hours of professional time, though this may be 
                distributed across multiple appointments.<sup className="text-[#10b981]">[2]</sup> Studies show that rushed evaluations 
                (less than 1 hour) are associated with higher rates of diagnostic errors and missed comorbidities.<sup className="text-[#10b981]">[3]</sup>
              </p>
              
              <p className="text-sm mb-4">
                A thorough evaluation timeline typically includes: initial clinical interview (60-90 minutes), 
                time for informants to complete rating scales (30-45 minutes), review of records and collateral 
                information (30-60 minutes), potential testing if indicated (2-4 hours), and feedback session 
                to discuss results and recommendations (30-60 minutes).
              </p>
              
              <p className="text-sm">
                Unfortunately, research indicates the average time from initial concern to diagnosis is 12-18 months, 
                with significant disparities based on race, socioeconomic status, and geographic location.<sup className="text-[#10b981]">[4]</sup> 
                Efforts to reduce diagnostic delay while maintaining quality are an ongoing focus of health services research.
              </p>
            </div>

            {/* Ecological Assessment */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Real-World and Ecological Assessment</h3>
              
              <p className="text-sm mb-4">
                Emerging research supports using real-world data collection methods to supplement traditional 
                office-based assessments. Studies show that ecological momentary assessment (EMA)—using 
                smartphone apps or digital diaries to capture symptoms in real-time in natural settings—can provide 
                more accurate symptom profiles than retrospective recall.
              </p>
              
              <p className="text-sm mb-4">
                Classroom observations by trained observers, when feasible, provide valuable objective data on 
                attention, activity level, and impulsivity in natural academic settings. Research 
                demonstrates that direct observation has incremental validity beyond parent and teacher ratings alone, 
                particularly for assessing hyperactive-impulsive symptoms.
              </p>
              
              <p className="text-sm">
                Recent studies have explored using wearable sensors (actigraphy) and computerized continuous performance 
                tests in naturalistic settings to objectively measure activity levels and sustained attention. 
                While promising, these approaches are primarily used in research settings and are not yet standard 
                clinical practice.
              </p>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Evolving Field:</strong> ADHD diagnostic practices continue to evolve based on emerging 
                research. These innovations are helping to make evaluations more accurate, accessible, and comprehensive 
                for diverse populations.
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

            {/* References for Recent Research Tab */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
              
              <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
              <div className="text-sm space-y-2">
                <p>[1] Sibley, M. H., et al. (2016). "Defining ADHD symptom persistence in adulthood: Optimizing sensitivity and specificity." <em>Journal of Child Psychology and Psychiatry</em>, 58(6), 655-662.</p>
                <p>[2] Epstein, J. N., et al. (2015). "Development of a multimodal ADHD clinic." <em>Journal of Attention Disorders</em>, 19(5), 395-404.</p>
                <p>[3] Sayal, K., et al. (2018). "ADHD in children and young people: Prevalence, care pathways, and service provision." <em>The Lancet Psychiatry</em>, 5(2), 175-186.</p>
                <p>[4] Coker, T. R., et al. (2016). "Racial/ethnic disparities in ADHD diagnosis and treatment." <em>Pediatrics</em>, 138(3), e20160407.</p>
              </div>
              
              <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
              <div className="text-sm space-y-2">
                <p>Ramsay, J. R., & Rostain, A. L. (2014). "The adult ADHD toolkit: Using CBT to facilitate coping inside and out." <em>Routledge</em>.</p>
                <p>DuPaul, G. J., et al. (2016). "ADHD rating scales in assessment and treatment." <em>Journal of Psychoeducational Assessment</em>, 34(1), 3-14.</p>
                <p>Asherson, P., et al. (2016). "Adult ADHD: Multi-perspective evidence-based management." <em>Neuroscience & Biobehavioral Reviews</em>, 71, 560-584.</p>
                <p>Young, S., et al. (2020). "Guidance for identification and treatment of individuals with attention deficit/hyperactivity disorder and autism spectrum disorder." <em>BMC Medicine</em>, 18, 146.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* What is AuDHD? Tab */}
        <TabsContent value="audhd" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is AuDHD?</h2>
            
            {/* Abstract Art Image */}
            <div className="flex justify-center mb-6">
              <img src={audhdAbstractArtImage} alt="Abstract art representing AuDHD" className="w-48 h-auto rounded-lg shadow-md" />
            </div>

            <p className="mb-6">
              "AuDHD" is a community-created term used primarily within neurodivergent communities to describe individuals 
              who are both autistic and have ADHD. While not an official medical diagnosis in the DSM-5-TR, this dual diagnosis 
              is increasingly recognized by clinicians and researchers as a very real and common pattern with unique characteristics 
              and support needs.
            </p>

            {/* Prevalence and Co-occurrence */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">How Common is AuDHD?</h3>
              
              <p className="text-sm mb-4">
                Research shows that autism and ADHD co-occur at remarkably high rates:
              </p>
              
              <ul className="text-sm space-y-2 ml-6 mb-4">
                <li className="mb-2">• <strong>50-70%</strong> of autistic individuals meet criteria for ADHD<sup>[1]</sup></li>
                <li className="mb-2">• <strong>30-50%</strong> of individuals with ADHD meet criteria for autism<sup>[2]</sup></li>
                <li className="mb-2">• Until the DSM-5 (2013), dual diagnosis was not officially permitted, leading to historical underdiagnosis</li>
                <li className="mb-2">• Studies indicate AuDHD may represent one of the most common forms of neurodevelopmental comorbidity<sup>[3]</sup></li>
              </ul>

              <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
                <p className="text-sm">
                  <strong>Historical Context:</strong> Before 2013, clinicians could not officially diagnose someone with 
                  both autism and ADHD simultaneously according to DSM criteria. The DSM-5 removed this exclusionary criterion, 
                  acknowledging that the conditions frequently co-occur and require recognition of both diagnoses for 
                  appropriate treatment planning.
                </p>
              </div>
            </div>

            {/* How They Interact */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">How Autism and ADHD Interact</h3>
              
              <p className="text-sm mb-4">
                When autism and ADHD co-occur, they don't simply exist side-by-side—they interact in complex ways 
                that create a unique neurodevelopmental profile:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
                  <h4 className="text-[#0c264d] font-bold text-sm mb-2">Overlapping Traits:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Executive function challenges</li>
                    <li>• Emotional regulation difficulties</li>
                    <li>• Sensory sensitivities</li>
                    <li>• Social difficulties</li>
                    <li>• Sleep problems</li>
                  </ul>
                </div>

                <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
                  <h4 className="text-[#0c264d] font-bold text-sm mb-2">Compounding Effects:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Greater functional impairment than either alone</li>
                    <li>• More severe executive dysfunction</li>
                    <li>• Increased anxiety and depression</li>
                    <li>• More complex support needs</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm">
                Research indicates that individuals with both conditions often experience more severe difficulties across 
                multiple domains compared to those with either condition alone, highlighting the importance of recognizing 
                and addressing both diagnoses.
              </p>
            </div>

            {/* AuDHD Diagram - Live Component */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              {/* Lightning Infinity Image */}
              <div className="flex justify-center mb-6">
                <img src={audhdLightningInfinityImage} alt="Gold infinity symbol with lightning representing AuDHD" className="w-full max-w-sm h-auto rounded-lg shadow-md" />
              </div>

              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Shared and Sole Symptoms</h3>
              
              <div className="mb-4 bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
                <p className="text-sm text-center">
                  <strong>Important:</strong> Individuals with AuDHD experience a variety of symptoms or traits from <strong>all three columns</strong>—
                  ADHD-only traits, autism-only traits, <em>and</em> the shared traits in the middle. Since there is no DSM-5-TR diagnosis 
                  for autism and ADHD combined together, there isn't a quantifiable way of determining a specific number of traits from 
                  each category required for a combined diagnosis. However, they can be diagnosed independently using the ADHD-only or 
                  autism-only criteria. If both are diagnosed, it can make sense for someone to identify as AuDHD unofficially.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* ADHD Only Column */}
                <div className="bg-white md:bg-[#ffd166] md:bg-opacity-30 p-3 md:p-5 rounded-lg border-l-4 md:border-l-0 md:border-2 border-[#ffd166]">
                  <h4 className="text-[#0c264d] font-bold text-center mb-4 text-lg">ADHD Only</h4>
                  <ul className="text-sm space-y-2 md:space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Hyperactivity or restlessness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Impulsivity or risk-taking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Difficulty sustaining attention on non-preferred tasks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Difficulty with time management skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Interrupting/talking excessively</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Hyperfocus on stimulating activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Forgetfulness with daily tasks</span>
                    </li>
                  </ul>
                </div>

                {/* Shared/AuDHD Column */}
                <div className="bg-white md:bg-[#0c264d] md:bg-opacity-80 p-3 md:p-5 rounded-lg border-l-4 md:border-l-0 md:border-2 border-[#0c264d] text-[#0c264d] md:text-white">
                  <h4 className="font-bold text-center mb-4 text-lg">AuDHD (Both)</h4>
                  <ul className="text-sm space-y-2 md:space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>Executive dysfunction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>Sensory processing differences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>Emotional regulation challenges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>Social difficulties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>Struggles with transitions/change</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>Sleep issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>Time perception differences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span>Rejection sensitivity</span>
                    </li>
                  </ul>
                </div>

                {/* Autism Only Column */}
                <div className="bg-white md:bg-[#2abcd4] md:bg-opacity-30 p-3 md:p-5 rounded-lg border-l-4 md:border-l-0 md:border-2 border-[#2abcd4]">
                  <h4 className="text-[#0c264d] font-bold text-center mb-4 text-lg">Autism Only</h4>
                  <ul className="text-sm space-y-2 md:space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Deep, narrow special interests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Stimming for self-regulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Need for sameness/rigid routines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Literal thinking/difficulty with figurative language</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Difficulty reading social cues/body language</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Monotropic attention (intense singular focus)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                      <span>Strong pattern recognition</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Diagnostic Challenges */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Diagnostic Considerations for AuDHD</h3>
              
              <p className="text-sm mb-4">
                Identifying both autism and ADHD in the same individual can be diagnostically complex:
              </p>

              <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4] mb-4">
                <h4 className="text-[#0c264d] font-bold text-sm mb-2">Common Diagnostic Challenges:</h4>
                <ul className="text-sm space-y-2">
                  <li><strong>Symptom overlap:</strong> Attention difficulties, social challenges, and executive dysfunction 
                  appear in both conditions, making it hard to determine which diagnosis (or both) explains specific behaviors</li>
                  <li><strong>Masking effects:</strong> Symptoms of one condition may overshadow or mask symptoms of the other, 
                  particularly in verbal, intellectually capable individuals</li>
                  <li><strong>Sequential diagnosis:</strong> Often one condition is diagnosed first (frequently ADHD in early 
                  childhood), with autism identified later when support needs aren't fully met</li>
                  <li><strong>Assessment bias:</strong> Some clinicians may assume attention difficulties in autistic individuals 
                  are part of autism rather than recognizing co-occurring ADHD</li>
                </ul>
              </div>

              <p className="text-sm mb-4">
                <strong>Best Practice:</strong> Comprehensive evaluation should systematically assess for both conditions, 
                especially when initial interventions for one diagnosis don't fully address the individual's challenges. 
                Studies show that many autistic individuals benefit from ADHD-specific interventions once ADHD is 
                properly identified.<sup>[4]</sup>
              </p>
            </div>

            {/* Why Dual Diagnosis Matters */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              {/* Split Face Image */}
              <div className="flex justify-center mb-6">
                <img src={audhdSplitFaceImage} alt="Artistic split-face painting representing dual perspectives of AuDHD" className="w-64 h-auto rounded-lg shadow-md" />
              </div>

              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Why Recognizing Both Conditions Matters</h3>
              
              <p className="text-sm mb-4">
                Accurate identification of both autism and ADHD has significant implications for treatment and support:
              </p>

              <ul className="text-sm space-y-2 ml-6 mb-4">
                <li><strong>Comprehensive treatment planning:</strong> Addressing only one condition leaves significant 
                needs unmet; both require targeted intervention</li>
                <li><strong>Medication considerations:</strong> Stimulant medications for ADHD can be helpful for autistic 
                individuals with co-occurring ADHD, but may require careful monitoring</li>
                <li><strong>Educational accommodations:</strong> Students need supports for both conditions—autism-specific 
                supports (social skills, sensory accommodations) AND ADHD supports (organizational help, attention strategies)</li>
                <li><strong>Self-understanding:</strong> Understanding both aspects of their neurodivergence helps individuals 
                develop effective strategies and advocate for appropriate support</li>
                <li><strong>Realistic expectations:</strong> Recognizing both conditions helps families, educators, and clinicians 
                set appropriate goals and understand the full scope of challenges and strengths</li>
              </ul>
            </div>

            {/* Support Strategies */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Supporting Individuals with AuDHD</h3>
              
              <p className="text-sm mb-4">
                Effective support for AuDHD requires integrating strategies from both autism and ADHD interventions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
                  <h4 className="text-[#0c264d] font-bold text-sm mb-2">From Autism Support:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Social skills instruction</li>
                    <li>• Sensory accommodations</li>
                    <li>• Predictability and routine</li>
                    <li>• Clear, direct communication</li>
                    <li>• Special interest incorporation</li>
                  </ul>
                </div>

                <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
                  <h4 className="text-[#0c264d] font-bold text-sm mb-2">From ADHD Support:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Executive function coaching</li>
                    <li>• Organizational systems</li>
                    <li>• Attention and focus strategies</li>
                    <li>• Time management tools</li>
                    <li>• Behavioral interventions</li>
                    <li>• Possible medication management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Community Recognition */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              {/* Rainbow Brain Image */}
              <div className="flex justify-center mb-6">
                <img src={audhdRainbowBrainImage} alt="Colorful infinity symbol wrapped around brain representing neurodivergent community" className="w-64 h-auto rounded-lg shadow-md" />
              </div>

              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">AuDHD in the Neurodivergent Community</h3>
              
              <p className="text-sm mb-4">
                While "AuDHD" is not found in diagnostic manuals, it has become widely embraced within neurodivergent 
                communities because:
              </p>

              <ul className="text-sm space-y-2 ml-6">
                <li>• It acknowledges the unique experience of having both conditions simultaneously</li>
                <li>• It provides identity and community for those who don't fit neatly into either "autistic" or "ADHD" categories alone</li>
                <li>• It validates the complex, sometimes contradictory experiences (e.g., craving routine vs. seeking novelty; 
                social difficulties from different sources)</li>
                <li>• It raises awareness that these conditions frequently co-occur and require integrated understanding</li>
              </ul>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Bottom Line:</strong> While "AuDHD" isn't an official diagnosis, the co-occurrence of autism 
                and ADHD is well-documented, common, and clinically significant. Individuals experiencing both conditions 
                benefit from comprehensive assessment and integrated support addressing both aspects of their neurodivergence.
              </p>
            </div>
          </div>

          {/* Back to Main Button */}
          <div className="flex justify-end mt-8 mb-4">
            <button 
              onClick={() => setCurrentArticle?.('adhd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <span className="text-xl">←</span>
              All About ADHD
            </button>
          </div>

          {/* References for What is AuDHD Tab */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cited Studies and Statistics</h3>
            <div className="text-sm space-y-2 mb-6">
              <p>[1] Antshel, K. M., & Russo, N. (2019). "Autism spectrum disorders and ADHD: Overlapping phenomenology, diagnostic issues, and treatment considerations." <em>Current Psychiatry Reports</em>, 21(5), 34.</p>
              <p>[2] Leitner, Y. (2014). "The co-occurrence of autism and attention deficit hyperactivity disorder in children–what do we know?" <em>Frontiers in Human Neuroscience</em>, 8, 268.</p>
              <p>[3] Jang, J., Matson, J. L., Williams, L. W., Tureck, K., Goldin, R. L., & Cervantes, P. E. (2013). "Rates of comorbid symptoms in children with ASD, ADHD, and comorbid ASD and ADHD." <em>Research in Developmental Disabilities</em>, 34(8), 2369-2378.</p>
              <p>[4] Mulligan, A., Anney, R. J., O'Regan, M., Chen, W., Butler, L., Fitzgerald, M., ... & Gill, M. (2009). "Autism symptoms in attention-deficit/hyperactivity disorder: A familial trait which correlates with conduct, oppositional defiant, language and motor disorders." <em>Journal of Autism and Developmental Disorders</em>, 39(2), 197-209.</p>
            </div>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). American Psychiatric Publishing.</p>
              <p>Lord, C., Elsabbagh, M., Baird, G., & Veenstra-Vanderweele, J. (2018). "Autism spectrum disorder." <em>The Lancet</em>, 392(10146), 508-520.</p>
              <p>Centers for Disease Control and Prevention. (2023). "Autism Spectrum Disorder (ASD): Data and Statistics." CDC.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}
