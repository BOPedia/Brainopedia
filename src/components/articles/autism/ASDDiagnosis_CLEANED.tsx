import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import definingAutismImage from '/images/9767a731c47146a94d04e907767143b26c5c976a.png';
import audhDiagramImage from '/images/33ec4ce1f032f45020d6681c6d2e7e162d97967c.png';
import audhdInfinityImage from '/images/c508b95480ef80885422135128a7d5f7a9968343.png';
import audhdEnergyInfinityImage from '/images/9c29924961f4fb97c11ad6ba6f3dc99fcbbbea44.png';
import audhdLightningInfinityImage from '/images/d5eeece90936198ad7fbad451348d968c5c1a2e0.png';
import audhdSplitFaceImage from '/images/780399a7b16de39744e0dfc36e0beff5119d96b9.png';
import audhdRainbowBrainImage from '/images/fa7e8c8312160f1735084c1ed35ee2c14c605c62.png';
import { ASDReferences, AuDHDReferences } from './ASDReferences';

interface ASDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

type TabType = 'criteria' | 'process' | 'professionals' | 'lifespan' | 'challenges' | 'after' | 'audhd';

export function ASDDiagnosis({ setCurrentArticle }: ASDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState<TabType>('criteria');

  const tabs = [
    { id: 'criteria' as TabType, label: 'DSM-5 Criteria', emoji: '' },
    { id: 'process' as TabType, label: 'Diagnostic Process & Tools', emoji: '' },
    { id: 'professionals' as TabType, label: 'Who Can Diagnose', emoji: '' },
    { id: 'lifespan' as TabType, label: 'Across the Lifespan', emoji: '' },
    { id: 'challenges' as TabType, label: 'Challenges & Disparities', emoji: '' },
    { id: 'after' as TabType, label: 'After Diagnosis', emoji: '' },
    { id: 'audhd' as TabType, label: 'What is AuDHD?', emoji: '' },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-3xl">
          Autism: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 !py-3 md:!py-2 rounded-md text-sm transition-colors ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {/* DSM-5 Criteria Tab */}
        {activeTab === 'criteria' && (
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">DSM-5 Diagnostic Criteria</h2>
            
            <div className="flex justify-center mb-6">
              <img 
                src={definingAutismImage} 
                alt="Defining Autism - Diagnostic criteria infographic"
                className="w-full max-w-2xl h-auto rounded-md border border-gray-300"
              />
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important:</strong> There is no medical test for autism. Diagnosis is based on observation 
                and assessment of characteristics and behaviors using the DSM-5 criteria.<sup>[2][3]</sup>
              </p>
            </div>

            <p className="mb-6">
              The DSM-5 (Diagnostic and Statistical Manual of Mental Disorders, 5th edition) provides the standard 
              diagnostic criteria for autism spectrum disorder used by clinicians.<sup>[3]</sup> Autism is diagnosed 
              when all criteria are met across two main domains: social communication and restricted/repetitive behaviors.
            </p>

            {/* Criterion A */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Criterion A: Social Communication and Interaction</h3>
              <p className="text-sm mb-4">
                Persistent deficits in social communication and social interaction across multiple contexts, as manifested 
                by <strong>ALL of the following</strong>:<sup>[3]</sup>
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">1. Social-Emotional Reciprocity</div>
                  <div className="text-sm">
                    Deficits in back-and-forth conversation, sharing of interests/emotions, failure to initiate or 
                    respond to social interactions
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">2. Nonverbal Communication</div>
                  <div className="text-sm">
                    Poorly integrated verbal and nonverbal communication, abnormalities in eye contact and body language, 
                    deficits in understanding and use of gestures
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">3. Developing and Maintaining Relationships</div>
                  <div className="text-sm">
                    Difficulty adjusting behavior to suit different contexts, difficulty sharing imaginative play or 
                    making friends, absence of interest in peers
                  </div>
                </div>
              </div>
            </div>

            {/* Criterion B */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Criterion B: Restricted, Repetitive Behaviors</h3>
              <p className="text-sm mb-4">
                Restricted, repetitive patterns of behavior, interests, or activities, as manifested by <strong>AT LEAST 
                TWO of the following</strong>:<sup>[3]</sup>
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">1. Stereotyped or Repetitive Movements/Speech</div>
                  <div className="text-sm">
                    Simple motor stereotypies, lining up toys, echolalia (repeating words), idiosyncratic phrases
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">2. Insistence on Sameness</div>
                  <div className="text-sm">
                    Inflexible adherence to routines, ritualized patterns, extreme distress at small changes, difficulties 
                    with transitions, rigid thinking patterns, need to take same route or eat same food every day
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">3. Highly Restricted, Fixated Interests</div>
                  <div className="text-sm">
                    Abnormal in intensity or focus—strong attachment to unusual objects, excessively circumscribed or 
                    perseverative interests (e.g., deep focus on trains, maps, specific topics)
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">4. Hyper- or Hyporeactivity to Sensory Input</div>
                  <div className="text-sm">
                    Apparent indifference to pain/temperature, adverse response to specific sounds or textures, excessive 
                    smelling or touching of objects, visual fascination with lights or movement
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Requirements */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Additional Requirements</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Criterion C: Early Developmental Period</div>
                  <div className="text-sm">
                    Symptoms must be present in the early developmental period (though may not become fully manifest 
                    until social demands exceed limited capacities, or may be masked by learned strategies)
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Criterion D: Clinically Significant Impairment</div>
                  <div className="text-sm">
                    Symptoms cause clinically significant impairment in social, occupational, or other important areas 
                    of functioning
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Criterion E: Not Better Explained By Other Conditions</div>
                  <div className="text-sm">
                    Disturbances are not better explained by intellectual disability or global developmental delay (though 
                    autism and intellectual disability can co-occur)
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Understanding the Spectrum:</strong> Autism is a spectrum, meaning people can meet these criteria 
                in diverse ways with different levels of support needs. The diagnosis focuses on patterns, not checklists. 
                Two autistic people can present very differently while both meeting diagnostic criteria.
              </p>
            </div>
          </div>
        )}

        {/* Diagnostic Process & Tools Tab */}
        {activeTab === 'process' && (
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Process & Tools</h2>
            
            <p className="mb-6">
              Diagnosing autism involves comprehensive evaluation of developmental history, behavior patterns, and 
              current functioning.<sup>[1]</sup> Early diagnosis enables earlier access to support and services, which 
              can significantly impact outcomes.
            </p>

            {/* The Diagnostic Process */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">The Three-Stage Diagnostic Process</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Stage 1: Initial Screening</div>
                  <div className="text-sm mb-2">
                    Developmental screening is recommended for all children:<sup>[5][6]</sup>
                  </div>
                  <ul className="text-sm ml-4 space-y-1">
                    <li>• <strong>General developmental screening:</strong> At 9, 18, and 24 or 30 months</li>
                    <li>• <strong>Autism-specific screening:</strong> At 18 and 24 months, or whenever concerns arise</li>
                    <li>• <strong>Common screening tools:</strong> M-CHAT-R/F (Modified Checklist for Autism in Toddlers), 
                    parental concerns questionnaires<sup>[7]</sup></li>
                  </ul>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Stage 2: Developmental-Behavioral Evaluation</div>
                  <div className="text-sm mb-2">
                    If screening suggests concern, comprehensive evaluation follows:<sup>[8]</sup>
                  </div>
                  <ul className="text-sm ml-4 space-y-1">
                    <li>• <strong>Developmental history:</strong> Detailed parent interview about milestones, behaviors, 
                    and concerns<sup>[9]</sup></li>
                    <li>• <strong>Observation:</strong> Direct observation of the child in various settings</li>
                    <li>• <strong>Standardized assessments:</strong> Structured tools to evaluate autism-specific behaviors</li>
                    <li>• <strong>Medical evaluation:</strong> Rule out other conditions, assess for co-occurring conditions<sup>[10]</sup></li>
                  </ul>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Stage 3: Comprehensive Diagnostic Evaluation</div>
                  <div className="text-sm mb-2">
                    Full diagnostic assessment may include:<sup>[11]</sup>
                  </div>
                  <ul className="text-sm ml-4 space-y-1">
                    <li>• <strong>Team approach:</strong> Developmental pediatrician, child psychologist, speech-language 
                    pathologist, occupational therapist</li>
                    <li>• <strong>Multiple settings:</strong> Observation in clinic, school, and home if possible</li>
                    <li>• <strong>Collateral information:</strong> Input from parents, teachers, therapists</li>
                    <li>• <strong>Longitudinal data:</strong> Patterns over time, not just single snapshot<sup>[12]</sup></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gold Standard Tools */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Gold Standard Diagnostic Instruments</h3>
              <p className="text-sm mb-4">
                These tools are considered the "gold standard" for autism diagnosis:<sup>[13]</sup>
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">ADOS-2 (Autism Diagnostic Observation Schedule)</div>
                  <div className="text-sm">
                    Structured observation and activities to elicit autism-related behaviors. Semi-structured play and 
                    interaction tasks. Takes 40-60 minutes. Most widely used observational assessment.<sup>[14]</sup>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">ADI-R (Autism Diagnostic Interview-Revised)</div>
                  <div className="text-sm">
                    Comprehensive parent interview covering developmental history and current behaviors. In-depth questions 
                    about social development, communication, and repetitive behaviors. Takes 1.5-3 hours.<sup>[15]</sup>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Diagnostic Tools */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Other Diagnostic & Screening Tools</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">CARS-2 (Childhood Autism Rating Scale)</div>
                  <div className="text-sm">
                    Brief rating scale based on observation. Rates 15 areas including relating to people, imitation, 
                    emotional response, body/object use, and more.<sup>[16]</sup>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">SCQ (Social Communication Questionnaire)</div>
                  <div className="text-sm">
                    Parent questionnaire screening tool. 40 yes/no questions covering social interaction, communication, 
                    and repetitive behaviors.<sup>[17]</sup>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">M-CHAT-R/F (Modified Checklist for Autism in Toddlers)</div>
                  <div className="text-sm">
                    Free screening tool for toddlers (16-30 months). Parent questionnaire with follow-up interview. 
                    Widely used in pediatric practices.<sup>[7]</sup>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Developmental Assessments</div>
                  <div className="text-sm">
                    Measure cognitive abilities, adaptive functioning, language skills. Examples: Bayley Scales, 
                    Mullen Scales, Vineland Adaptive Behavior Scales.
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Testing */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Medical and Genetic Testing</h3>
              <p className="text-sm mb-4">
                While not required for diagnosis, testing may be recommended:<sup>[18]</sup>
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Genetic Testing</div>
                  <div className="text-sm">
                    Chromosomal microarray to identify genetic causes. Recommended for all with ASD diagnosis. Can identify 
                    genetic variants in ~10-20% of cases.<sup>[19][20]</sup>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Metabolic Screening</div>
                  <div className="text-sm">
                    If specific clinical features suggest metabolic disorder (regression, seizures, dysmorphic features).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">EEG (Electroencephalogram)</div>
                  <div className="text-sm">
                    If seizures suspected or developmental regression occurred.<sup>[21]</sup>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Hearing Test</div>
                  <div className="text-sm">
                    Essential to rule out hearing loss as cause of language delay or reduced response to name.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Lead Screening</div>
                  <div className="text-sm">
                    If pica (eating non-food items) or environmental lead exposure is present.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Bottom Line:</strong> Autism diagnosis is based on behavioral observation and developmental 
                history, not blood tests or brain scans. The gold standard is ADOS-2 + ADI-R + clinical judgment by 
                experienced professionals. Medical testing helps rule out other conditions and identify co-occurring issues.
              </p>
            </div>
          </div>
        )}

        {/* Who Can Diagnose Tab */}
        {activeTab === 'professionals' && (
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Professionals Qualified to Diagnose Autism</h2>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Key Point:</strong> Autism diagnosis should be made by professionals with specific training and 
                experience in autism assessment. Not all medical or mental health professionals have this expertise.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Licensed Professionals Who Can Diagnose Autism</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Developmental Pediatricians</div>
                  <div className="text-sm">
                    Pediatricians with specialized training in developmental and behavioral disorders. Often lead autism 
                    diagnostic teams. Can prescribe medication and coordinate care.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Child Psychologists</div>
                  <div className="text-sm">
                    Doctoral-level professionals (Ph.D. or Psy.D.) trained in psychological assessment and child development. 
                    Can administer comprehensive testing including ADOS-2 and ADI-R. Cannot prescribe medication (except in 
                    a few states).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Child Psychiatrists</div>
                  <div className="text-sm">
                    Medical doctors (M.D. or D.O.) specializing in child and adolescent mental health. Can diagnose autism, 
                    prescribe medication, and treat co-occurring conditions.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Child Neurologists</div>
                  <div className="text-sm">
                    Medical doctors specializing in nervous system disorders in children. Often diagnose autism, particularly 
                    when neurological issues (seizures, regression) are present.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Neuropsychologists</div>
                  <div className="text-sm">
                    Psychologists specializing in brain-behavior relationships. Conduct comprehensive testing of cognitive, 
                    language, social, and adaptive functions. Particularly helpful for complex diagnostic cases.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Pediatricians (with training)</div>
                  <div className="text-sm">
                    General pediatricians CAN diagnose autism if they have appropriate training and experience. May refer 
                    to specialists for complex cases or comprehensive testing.
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic Team Approach */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Multidisciplinary Team Approach</h3>
              <p className="text-sm mb-4">
                The best autism evaluations often involve a team of professionals:<sup>[4][11]</sup>
              </p>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Developmental Pediatrician or Psychologist</div>
                  <div className="text-sm">
                    Leads the evaluation, conducts diagnostic assessments (ADOS-2, ADI-R), makes the diagnosis
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Speech-Language Pathologist</div>
                  <div className="text-sm">
                    Evaluates communication skills, language development, pragmatic (social) language
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Occupational Therapist</div>
                  <div className="text-sm">
                    Assesses sensory processing, fine motor skills, adaptive daily living skills
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Educational Psychologist or Special Educator</div>
                  <div className="text-sm">
                    Evaluates learning profile, academic skills, educational needs
                  </div>
                </div>
              </div>
            </div>

            {/* Who CANNOT Diagnose */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">❌ Who CANNOT Diagnose Autism</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-red-500 pl-3">
                  <div className="text-sm">
                    <strong>• Teachers or School Counselors:</strong> Can recommend evaluation but cannot diagnose
                  </div>
                </div>

                <div className="border-l-2 border-red-500 pl-3">
                  <div className="text-sm">
                    <strong>• Speech-Language Pathologists or Occupational Therapists alone:</strong> Important team members 
                    but cannot make autism diagnosis independently (varies by state)
                  </div>
                </div>

                <div className="border-l-2 border-red-500 pl-3">
                  <div className="text-sm">
                    <strong>• Licensed Clinical Social Workers (LCSWs) or Licensed Professional Counselors (LPCs):</strong> Can 
                    provide therapy but typically cannot diagnose autism (varies by state)
                  </div>
                </div>

                <div className="border-l-2 border-red-500 pl-3">
                  <div className="text-sm">
                    <strong>• Online "Autism Tests":</strong> Cannot replace professional evaluation
                  </div>
                </div>
              </div>
            </div>

            {/* Finding a Provider */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">How to Find a Qualified Professional</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Ask About Autism Experience</div>
                  <div className="text-sm">
                    Look for providers who regularly diagnose autism. Ask: "How many autism evaluations do you conduct per 
                    year?" and "Are you trained in ADOS-2 and ADI-R?"
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Get Referrals</div>
                  <div className="text-sm">
                    Ask your pediatrician for referrals to autism specialists. Connect with local autism support organizations 
                    for recommendations.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Check University Centers</div>
                  <div className="text-sm">
                    Many universities have autism centers or developmental clinics that provide evaluations (may have wait lists).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Contact Early Intervention or School Districts</div>
                  <div className="text-sm">
                    For children under 3, contact Early Intervention services. For children 3+, contact your school district's 
                    special education department—evaluations through schools are free.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm mb-2">
                <strong>Important:</strong> Wait times for autism evaluations can be 6-18 months in many areas. Don't 
                wait to seek evaluation if you have concerns. You can also access Early Intervention services or school 
                supports while waiting for a formal diagnosis.
              </p>
              <p className="text-sm">
                <strong>Cost:</strong> Evaluations can cost $1,500-$5,000 if not covered by insurance. Check your insurance 
                benefits. School-based evaluations are free but may not be as comprehensive as clinical evaluations.
              </p>
            </div>
          </div>
        )}

        {/* Across the Lifespan Tab */}
        {activeTab === 'lifespan' && (
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnosis Across the Lifespan</h2>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Key Fact:</strong> Current autism prevalence is approximately 1 in 36 children.<sup>[26]</sup> 
                Autism can be reliably diagnosed by age 2, but many individuals—especially girls, women, and those without 
                intellectual disability—are not diagnosed until adolescence or adulthood.
              </p>
            </div>

            {/* Early Childhood */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Early Childhood (Under 3 Years)</h3>
              
              <p className="text-sm mb-3">
                Autism can be reliably diagnosed by age 2, sometimes earlier:<sup>[22][23]</sup>
              </p>

              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Early Signs to Watch For</div>
                  <div className="text-sm">
                    <ul className="ml-4 space-y-1">
                      <li>• Lack of pointing by 12 months</li>
                      <li>• Reduced or unusual eye contact</li>
                      <li>• Lack of response to name by 12 months</li>
                      <li>• Loss of previously acquired skills (regression)</li>
                      <li>• Lack of babbling or gesturing by 12 months</li>
                      <li>• Limited social smiling or social engagement</li>
                      <li>• Repetitive behaviors (hand flapping, spinning, lining up toys)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Challenges in Early Diagnosis</div>
                  <div className="text-sm">
                    Developmental variability in toddlers, overlap with other developmental delays, some traits emerge later 
                    as social demands increase
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Why Early Diagnosis Matters</div>
                  <div className="text-sm">
                    Earlier diagnosis enables earlier intervention, which research shows can significantly improve outcomes. 
                    Early Intervention services (birth-3) provide support during critical developmental period.<sup>[1]</sup>
                  </div>
                </div>
              </div>
            </div>

            {/* School Age */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">School Age (3-18 Years)</h3>
              
              <p className="text-sm mb-3">
                Most autism diagnoses occur during this period:<sup>[24]</sup>
              </p>

              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Common Triggers for Evaluation</div>
                  <div className="text-sm">
                    <ul className="ml-4 space-y-1">
                      <li>• Social difficulties at school (trouble making/keeping friends, playground struggles)</li>
                      <li>• Academic challenges despite apparent intelligence</li>
                      <li>• Behavioral concerns (meltdowns, rigidity, difficulty with transitions)</li>
                      <li>• Teacher observations of "different" social interaction or play</li>
                      <li>• Sensory sensitivities affecting school participation</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Important Considerations</div>
                  <div className="text-sm">
                    Some children, particularly girls, may have developed coping strategies or "masking" that hide autistic 
                    traits.<sup>[25]</sup> This can delay diagnosis despite genuine struggles. Burnout from masking often 
                    becomes apparent in middle school or high school.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">School-Based vs. Clinical Diagnosis</div>
                  <div className="text-sm">
                    Schools can identify students as "eligible for services under autism," but this is an educational 
                    classification, not a medical diagnosis. Clinical diagnosis by qualified professional is recommended.
                  </div>
                </div>
              </div>
            </div>

            {/* Adulthood */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Adulthood</h3>
              
              <div className="flex justify-center mb-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHVsdCUyMGFzc2Vzc21lbnQlMjBldmFsdWF0aW9uJTIwdGVzdGluZ3xlbnwxfHx8fDE3Njc0MTI5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Adult assessment and evaluation"
                  className="w-full max-w-md h-auto rounded-md border border-gray-300"
                />
              </div>

              <p className="text-sm mb-3">
                Increasing numbers of adults seek autism diagnosis:<sup>[27]</sup>
              </p>

              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Barriers to Adult Diagnosis</div>
                  <div className="text-sm">
                    <ul className="ml-4 space-y-1">
                      <li>• Fewer specialists trained in adult autism assessment<sup>[28]</sup></li>
                      <li>• Lack of adult-specific diagnostic tools</li>
                      <li>• Insurance coverage issues (some insurers don't cover adult autism evaluation)</li>
                      <li>• Misconception that autism only affects children</li>
                      <li>• Long wait lists (6-24+ months)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Challenges in Adult Assessment</div>
                  <div className="text-sm">
                    <ul className="ml-4 space-y-1">
                      <li>• Retrospective developmental history (parents may not be available or remember details)</li>
                      <li>• Learned compensation strategies mask traits<sup>[29]</sup></li>
                      <li>• Co-occurring conditions (anxiety, depression) developed over years of struggling</li>
                      <li>• Adult life demands differ from childhood contexts</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Adapted Tools for Adults</div>
                  <div className="text-sm">
                    Some tools have been modified for adult populations. Clinical judgment by experienced professionals 
                    is crucial.<sup>[30]</sup> ADOS-2 includes a module for adults. Self-report measures like the AQ 
                    (Autism Quotient) can supplement assessment but don't replace comprehensive evaluation.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Common Pathways to Adult Diagnosis</div>
                  <div className="text-sm">
                    <ul className="ml-4 space-y-1">
                      <li>• Parent diagnosed after child receives autism diagnosis</li>
                      <li>• Burnout from years of masking</li>
                      <li>• Mental health treatment for anxiety/depression reveals underlying autism</li>
                      <li>• Learning about autism and recognizing oneself</li>
                      <li>• Seeking explanation for lifelong feelings of being "different"</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Impact of Late Diagnosis</div>
                  <div className="text-sm">
                    Can provide profound clarity and relief, validation of lifelong struggles, access to accommodations 
                    and services, connection to autistic community and identity, reframing of past experiences in neurodiversity-
                    affirming way.<sup>[31]</sup>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>It's Never Too Late:</strong> Many autistic adults describe diagnosis as life-changing, even 
                in their 30s, 40s, 50s, or beyond. Understanding your neurology helps you advocate for your needs, find 
                community, and practice self-compassion. If you suspect you might be autistic, seeking evaluation is valid 
                at any age.
              </p>
            </div>
          </div>
        )}

        {/* Challenges & Disparities Tab */}
        {activeTab === 'challenges' && (
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Challenges & Disparities</h2>
            
            {/* Gender Differences */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Gender Differences and Bias</h3>
              
              <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-3 rounded mb-4">
                <p className="text-sm">
                  <strong>The Ratio:</strong> Approximately 3-4 males are diagnosed for every 1 female.<sup>[80]</sup> 
                  However, this likely reflects diagnostic bias rather than true prevalence differences.
                </p>
              </div>

              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Camouflaging in Girls and Women</div>
                  <div className="text-sm">
                    Girls and women often mask or camouflage autistic traits more effectively than boys, leading to missed 
                    or delayed diagnosis.<sup>[34][35]</sup> This masking is exhausting and can lead to burnout, anxiety, 
                    and depression.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Different Presentation</div>
                  <div className="text-sm">
                    Autistic girls may show:<sup>[36][37]</sup>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• More subtle social difficulties (may have friends but relationships feel exhausting or confusing)</li>
                      <li>• Better superficial social skills (learned through observation and mimicry)</li>
                      <li>• Interests that appear more "typical" (animals, books, celebrities vs. trains or numbers)</li>
                      <li>• More internalizing behaviors (anxiety, depression) vs. externalizing</li>
                      <li>• Less obvious repetitive behaviors</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Later Diagnosis in Females</div>
                  <div className="text-sm">
                    Women are often diagnosed later than men, sometimes not until adulthood. Many are misdiagnosed with 
                    anxiety, depression, eating disorders, or personality disorders before autism is recognized.
                  </div>
                </div>
              </div>
            </div>

            {/* Racial and Ethnic Disparities */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">🌍 Racial and Ethnic Disparities</h3>
              
              <p className="text-sm mb-4">
                Significant disparities exist in autism diagnosis:<sup>[38][39]</sup>
              </p>

              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Later Diagnosis for Minority Children</div>
                  <div className="text-sm">
                    Black and Hispanic children are diagnosed on average 1-3 years later than white children.<sup>[39]</sup> 
                    This delay means missed opportunities for early intervention during critical developmental periods.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Underdiagnosis and Misdiagnosis</div>
                  <div className="text-sm">
                    Minority children are more likely to be misdiagnosed with conduct disorder, ODD, or ADHD when autism 
                    is the actual diagnosis.<sup>[40][41]</sup> They're also more likely to go undiagnosed entirely.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Access Barriers</div>
                  <div className="text-sm">
                    <ul className="ml-4 space-y-1">
                      <li>• Limited access to specialists (fewer providers in minority communities)</li>
                      <li>• Language barriers</li>
                      <li>• Cultural mistrust of healthcare system due to historical discrimination</li>
                      <li>• Lack of culturally responsive diagnostic tools</li>
                      <li>• Insurance and financial barriers</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Cultural Differences in Behavior Interpretation</div>
                  <div className="text-sm">
                    Cultural norms around eye contact, social interaction, emotional expression, and child-rearing practices 
                    differ. Clinicians must be culturally competent to avoid misinterpreting culturally normative behaviors 
                    as autism (or vice versa).<sup>[42]</sup>
                  </div>
                </div>
              </div>
            </div>

            {/* Socioeconomic Factors */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Socioeconomic Factors</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Access to Diagnostic Services</div>
                  <div className="text-sm">
                    Lower-income families have less access to specialist diagnostic services.<sup>[38]</sup> Private 
                    evaluations are expensive ($2,000-$5,000+), and public options have long wait lists.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Insurance Barriers</div>
                  <div className="text-sm">
                    Not all insurance plans cover autism evaluation. Medicaid coverage varies by state. Families may need 
                    to travel long distances to find providers who accept their insurance.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Educational Advocacy</div>
                  <div className="text-sm">
                    Resource-limited schools may be less likely to identify autism or refer for evaluation. Families with 
                    less knowledge of special education rights may not advocate effectively.
                  </div>
                </div>
              </div>
            </div>

            {/* Misdiagnosis and Missed Diagnosis */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Misdiagnosis and Missed Diagnosis</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Common Misdiagnoses:</div>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">ADHD (inattention, hyperactivity)</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">Anxiety disorders</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">OCD (repetitive behaviors)</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">Selective mutism</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">Oppositional defiant disorder</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">Personality disorders (adults)</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">Schizophrenia (in adults)</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">Language disorders</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-[#0c264d] mb-2">Why Diagnosis is Missed:</div>
                  <div className="space-y-2">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">
                        <strong>Masking/camouflaging:</strong> Learned strategies to hide autistic traits
                      </div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">
                        <strong>High intelligence:</strong> Cognitive strengths compensating for social challenges
                      </div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">
                        <strong>Co-occurring conditions:</strong> Other diagnoses obscuring autism
                      </div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">
                        <strong>Limited clinician knowledge:</strong> Especially for adults, women, people of color
                      </div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="text-sm">
                        <strong>Atypical presentation:</strong> Not matching stereotypical "autism" image
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Differential Diagnosis */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Differential Diagnosis: Conditions to Rule Out</h3>
              <p className="text-sm mb-4">
                Several conditions share features with autism and must be considered:<sup>[32]</sup>
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Intellectual Disability</div>
                  <div className="text-sm">Can co-occur; distinguish social deficits beyond cognitive level</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Language Disorders</div>
                  <div className="text-sm">Specific language impairment without broader autism features</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Social Communication Disorder</div>
                  <div className="text-sm">Social deficits without restricted/repetitive behaviors</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">ADHD</div>
                  <div className="text-sm">Inattention may appear as social disengagement</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Anxiety Disorders</div>
                  <div className="text-sm">Social avoidance from anxiety vs. social communication deficits</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Attachment Disorders</div>
                  <div className="text-sm">Distinguish from autism-related social differences</div>
                </div>
              </div>
            </div>

            {/* Co-occurring Conditions */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Common Co-occurring Conditions</h3>
              <p className="text-sm mb-4">
                Many autistic individuals have additional diagnoses:<sup>[22][43][44]</sup>
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d]">ADHD</div>
                  <div className="text-sm">30-60% co-occurrence</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d]">Anxiety Disorders</div>
                  <div className="text-sm">Up to 40%</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d]">Depression</div>
                  <div className="text-sm">Common in adolescents/adults</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d]">Intellectual Disability</div>
                  <div className="text-sm">~30%</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d]">Epilepsy</div>
                  <div className="text-sm">20-30%</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d]">Sleep Disorders</div>
                  <div className="text-sm">50-80%</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d]">GI Issues</div>
                  <div className="text-sm">Common (constipation, reflux)</div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d]">Eating Disorders</div>
                  <div className="text-sm">Higher in autistic females</div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm">
                <strong>Why This Matters:</strong> Diagnostic disparities mean that many autistic people—particularly 
                girls, women, people of color, and those without intellectual disability—are not diagnosed or are diagnosed 
                late. This delays access to support, accommodations, and community. We need better clinician training, 
                culturally responsive tools, and awareness that autism looks different across different people.
              </p>
            </div>
          </div>
        )}

        {/* After Diagnosis Tab */}
        {activeTab === 'after' && (
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">✅ After Receiving a Diagnosis</h2>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>🎯 Important:</strong> A diagnosis is a beginning, not an ending.<sup>[41]</sup> It's a doorway 
                to understanding, support, community, and self-advocacy.
              </p>
            </div>

            <p className="mb-6">
              Receiving an autism diagnosis can bring a mix of emotions—relief, grief, confusion, hope, or all of the above. 
              Whatever you're feeling is valid. Here's what typically comes next:
            </p>

            {/* Benefits of Diagnosis */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Benefits of Diagnosis</h3>
              
              <div className="space-y-3">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Understanding and Clarity</div>
                  <div className="text-sm">
                    Diagnosis provides an explanation for differences and challenges. "Now I understand why..."<sup>[42][46]</sup>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Access to Services and Support</div>
                  <div className="text-sm">
                    Eligibility for therapies, educational services, workplace accommodations, disability benefits (if needed)
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Self-Advocacy Framework</div>
                  <div className="text-sm">
                    Understanding your needs and requesting appropriate accommodations becomes clearer
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Community Connection</div>
                  <div className="text-sm">
                    Access to autistic community and identity. You're not alone—there's a whole community of people like you!<sup>[43][45]</sup>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Better Support Strategies</div>
                  <div className="text-sm">
                    Tailored strategies that work FOR autistic thinking and sensing, not against it
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Reduced Self-Blame</div>
                  <div className="text-sm">
                    Understanding that struggles stem from neurology, not character flaws or "not trying hard enough"
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Next Steps After Diagnosis</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">1. Learn About Autism</div>
                  <div className="text-sm">
                    <strong>From autistic voices, not just medical model.</strong> Read books by autistic authors, follow 
                    autistic advocates on social media, explore neurodiversity-affirming resources. Understand that autism 
                    is a different way of being, not a disease.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">2. Connect with Community</div>
                  <div className="text-sm">
                    Online and local autism communities (especially those run BY autistic people). Finding "your people" 
                    can be incredibly validating.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">3. Evaluate Support Needs</div>
                  <div className="text-sm">
                    What services or accommodations would help?<sup>[44]</sup> Not everyone needs the same supports. 
                    Think about: speech therapy, occupational therapy, social skills support (if desired), mental health 
                    support, sensory accommodations, etc.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">4. School or Workplace Planning</div>
                  <div className="text-sm">
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• <strong>Students K-12:</strong> Develop IEP (Individualized Education Program) or 504 Plan</li>
                      <li>• <strong>College students:</strong> Register with Disability Services office</li>
                      <li>• <strong>Workers:</strong> Request ADA accommodations through HR (quiet workspace, written instructions, 
                      flexible schedule, etc.)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">5. Address Co-occurring Conditions</div>
                  <div className="text-sm">
                    Treat anxiety, ADHD, sleep issues, GI problems, etc. Many autistic people's quality of life improves 
                    significantly when co-occurring conditions are addressed.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">6. Process Emotions</div>
                  <div className="text-sm">
                    Diagnosis can bring relief, grief, anger, hope, confusion, or all of these at once. Give yourself 
                    permission to feel whatever comes up. Consider therapy with an autism-affirming therapist.
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Planning for Children */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Educational Planning (for Children)</h3>
              <p className="text-sm mb-4">
                For children, diagnosis often triggers educational planning:<sup>[45][48]</sup>
              </p>
              
              <div className="space-y-2">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Develop IEP or 504 Plan:</strong> Outlines accommodations, services, and goals
                  </div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Identify Needed Services:</strong> Speech, OT, social support, academic support
                  </div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Plan Transition Services:</strong> For older students (14+), planning for post-high school
                  </div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Advocate for Appropriate Placement:</strong> Consider: mainstream with support, specialized program, 
                    homeschooling, etc.
                  </div>
                </div>
              </div>
            </div>

            {/* Ongoing Research */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Ongoing Diagnostic Research</h3>
              <p className="text-sm mb-4">
                Research continues to improve diagnostic methods:<sup>[47][50][51]</sup>
              </p>
              
              <div className="space-y-2">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Earlier identification:</strong> Tools to reliably diagnose under 18 months
                  </div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Biomarkers:</strong> Exploring eye-tracking, brain imaging, genetic markers (not yet clinically validated)
                  </div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Subtyping:</strong> Identifying autism subgroups based on biology, not just behavior<sup>[48]</sup>
                  </div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Better adult tools:</strong> Instruments designed for adult presentation
                  </div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Cultural adaptation:</strong> Culturally responsive diagnostic approaches
                  </div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="text-sm">
                    <strong>• Dimensional approaches:</strong> Measuring autistic traits dimensionally rather than categorically
                  </div>
                </div>
              </div>

              <p className="text-sm mt-4">
                Future diagnostic approaches should incorporate autistic perspectives and focus on supporting flourishing, 
                not just identifying deficits.<sup>[49]</sup>
              </p>
            </div>

            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
              <h3 className="text-[#0c264d] font-bold mb-3">Important Neurodiversity-Affirming Perspective</h3>
              <p className="text-sm text-gray-700 mb-3">
                Autism is a natural neurological variation, not a disease.<sup>[45][46]</sup> Diagnosis should lead to 
                support and accommodation, not attempts to make autistic people "indistinguishable from their peers" or 
                to eliminate autistic traits.
              </p>
              <p className="text-sm text-gray-700">
                <strong>The goal is to help autistic individuals thrive as themselves</strong>—developing their strengths, 
                accessing accommodations for challenges, and living authentic lives as autistic people. You don't need to 
                be "fixed." You need to be understood, supported, and valued for who you are.
              </p>
            </div>
          </div>
        )}

        {/* What is AuDHD? Tab */}
        {activeTab === 'audhd' && (
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is AuDHD?</h2>
            
            <p className="mb-6">
              "AuDHD" is a community-created term used primarily within neurodivergent communities to describe individuals 
              who are both autistic and have ADHD. While not an official medical diagnosis in the DSM-5-TR, this dual diagnosis 
              is increasingly recognized by clinicians and researchers as a very real and common pattern with unique characteristics 
              and support needs.
            </p>

            {/* AuDHD Infinity Symbol Image */}
            <div className="flex justify-center mb-6">
              <img src={audhdInfinityImage} alt="Infinity symbol with lightning representing AuDHD" className="w-80 h-auto rounded-lg shadow-md" />
            </div>

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

            {/* AuDHD Diagram */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              {/* Lightning Infinity Image */}
              <div className="flex justify-center mb-6">
                <img src={audhdLightningInfinityImage} alt="Gold infinity symbol with lightning representing AuDHD" className="w-64 h-auto rounded-lg shadow-md" />
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
        )}
      </div>

      {/* Bottom back button - positioned to the right above References */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          {activeTab === 'audhd' ? <AuDHDReferences /> : <ASDReferences />}
        </div>
      </section>

    </article>
  );
}
