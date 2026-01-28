import { useState } from 'react';
import { ASDReferences } from './ASDReferences';

interface ASDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: TabType;
}

type TabType = 'overview' | 'early-intervention' | 'therapies' | 'educational' | 'medical' | 'environmental' | 'family';

export function ASDSupport({ setCurrentArticle, initialTab = 'overview' }: ASDSupportProps) {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  const tabs = [
    { id: 'overview' as TabType, label: 'Overview & Philosophy' },
    { id: 'early-intervention' as TabType, label: 'Early Intervention' },
    { id: 'therapies' as TabType, label: 'Therapies & Treatment' },
    { id: 'educational' as TabType, label: 'Educational Support' },
    { id: 'medical' as TabType, label: 'Medical Management' },
    { id: 'environmental' as TabType, label: 'Environmental Support' },
    { id: 'family' as TabType, label: 'Family & Principles' },
  ];

  function renderTabContent(tab: TabType) {
    switch (tab) {
      case 'overview':
        return <OverviewContent />;
      case 'early-intervention':
        return <EarlyInterventionContent />;
      case 'therapies':
        return <TherapiesContent />;
      case 'educational':
        return <EducationalContent />;
      case 'medical':
        return <MedicalContent />;
      case 'environmental':
        return <EnvironmentalContent />;
      case 'family':
        return <FamilyPrinciplesContent />;
      default:
        return null;
    }
  }

  function OverviewContent() {
    return (
      <>
        {/* Introduction */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support Philosophy & Approach</h2>
          
          <p className="mb-4">
            Support for autistic individuals should be individualized, strengths-based, and centered on improving 
            quality of life rather than simply reducing autistic traits.<sup className="text-[#10b981]">[1]</sup> The goal is to help autistic 
            people thrive as themselves, not to make them "indistinguishable from their peers."<sup className="text-[#10b981]">[2]</sup> Effective 
            support respects neurodiversity while providing accommodations and skills to navigate a neurotypical world.
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
            <h3 className="text-[#0c264d] font-bold mb-3">Core Support Principles:</h3>
            <ul className="text-sm space-y-2">
              <li>✓ <strong>Presume competence:</strong> Assume understanding and potential even when not obvious<sup className="text-[#10b981]">[56]</sup></li>
              <li>✓ <strong>Respect autonomy:</strong> Support choice-making and self-determination<sup className="text-[#10b981]">[57]</sup></li>
              <li>✓ <strong>Focus on quality of life:</strong> Not just skill acquisition or behavior reduction</li>
              <li>✓ <strong>Build on strengths and interests:</strong> Leverage special interests for learning and engagement</li>
              <li>✓ <strong>Accept autistic ways of being:</strong> Don't target harmless behaviors like stimming</li>
              <li>✓ <strong>Listen to autistic voices:</strong> Center autistic perspectives in decisions<sup className="text-[#10b981]">[58]</sup></li>
              <li>✓ <strong>Teach to the individual:</strong> One size does not fit all</li>
              <li>✓ <strong>Support communication:</strong> Provide access to communication methods that work</li>
              <li>✓ <strong>Create sensory-friendly environments:</strong> Reduce barriers rather than expecting constant adaptation</li>
              <li>✓ <strong>Promote inclusion:</strong> Support participation in community life<sup className="text-[#10b981]">[59]</sup></li>
            </ul>
          </div>
        </div>

        {/* Unsupported Treatments */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Unsupported and Harmful "Treatments" to Avoid</h2>
          
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4">
            <h3 className="text-center text-[#0c264d] font-bold mb-4">Treatments Lacking Evidence or Potentially Harmful</h3>
            <div className="text-sm space-y-3">
              <p><strong>Bleach/"MMS" protocols:</strong> Extremely dangerous; can cause serious harm or death<sup>[49]</sup></p>
              <p><strong>Chelation therapy:</strong> Not supported by evidence; has caused deaths<sup>[50]</sup></p>
              <p><strong>Hyperbaric oxygen chambers:</strong> Little evidence to prove effectiveness<sup>[51]</sup></p>
              <p><strong>Secretin:</strong> Thoroughly debunked<sup>[52]</sup></p>
              <p><strong>Facilitated communication/RPM:</strong> Discredited; shown to reflect facilitator's thoughts, not autistic person's<sup>[53]</sup></p>
              <p><strong>Conversion/compliance-focused interventions:</strong> Harmful to mental health and self-esteem<sup>[54]</sup></p>
              <p><strong>Restrictive diets without medical indication:</strong> Limited evidence; may cause nutritional deficiencies<sup>[55]</sup></p>
            </div>
          </div>

          <p className="mb-4">
            Always consult with qualified medical professionals and be skeptical of "miracle cures" or treatments 
            promising to eliminate autism.<sup>[56]</sup>
          </p>
        </div>
      </>
    );
  }

  function EarlyInterventionContent() {
    return (
      <>
        {/* Early Intervention Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Early Intervention (Ages 0-3)</h2>
          
          <p className="mb-6">
            Early intervention services can significantly impact developmental trajectories for autistic children. 
            A person-centered approach focuses on understanding symptoms, implementing effective strategies, and 
            connecting with appropriate services to improve individual lives.<sup>[3]</sup>
          </p>

          {/* Early Intervention Services */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Early Intervention Services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Federal Programs */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Federal Programs</h4>
                </div>
                <p className="text-sm">
                  Part C of IDEA provides early intervention services for infants and toddlers with developmental 
                  delays, ages 0-3<sup>[4]</sup>
                </p>
              </div>

              {/* Service Coordination */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Service Coordination</h4>
                </div>
                <p className="text-sm">
                  A service coordinator helps families navigate services and develop an Individualized Family 
                  Service Plan (IFSP)<sup>[5]</sup>
                </p>
              </div>

              {/* Home-Based Services */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Home-Based Services</h4>
                </div>
                <p className="text-sm">
                  Services often delivered in the child's natural environment—home, daycare, or community 
                  settings<sup>[6]</sup>
                </p>
              </div>

              {/* Parent Coaching */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Parent Coaching</h4>
                </div>
                <p className="text-sm">
                  Teaching parents and caregivers strategies to support development throughout daily routines 
                  and activities<sup>[7]</sup>
                </p>
              </div>
            </div>

            {/* Evidence-Based Approaches */}
            <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Evidence-Based Approaches</h4>
              </div>
              <p className="text-sm mb-3">
                Research-supported early intervention models include:
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Early Start Denver Model (ESDM)</li>
                <li>• Pivotal Response Treatment (PRT)</li>
                <li>• Naturalistic Developmental Behavioral Interventions (NDBIs)</li>
                <li>• Project ImPACT (parent-mediated intervention)<sup>[8][9]</sup></li>
              </ul>
            </div>
          </div>

          {/* Research on Early Intervention */}
          <div className="bg-[#ffd166] p-5 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-[#0c264d] font-bold text-lg">Research on Early Intervention</h3>
            </div>
            <p className="text-[#0c264d] text-sm">
              Research shows that early, intensive intervention can improve outcomes, though every child's response is 
              individual.<sup>[10]</sup>
            </p>
          </div>

          {/* Researching Strategies */}
          <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Researching Strategies</h3>
            <p className="mb-6 text-sm">
              A diagnosis often brings the task of choosing effective supports and treatment approaches, which can 
              be stressful or manageable depending on the individual. Combining approaches is common, and a strong 
              support system with clear communication among the care team is essential for success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center">Medically Driven</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Evidence-based methods</li>
                  <li>• Clinical assessments</li>
                  <li>• Structured protocols</li>
                  <li>• Professional oversight</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center">Educational & Social</h4>
                <ul className="space-y-1 text-xs">
                  <li>• School-based supports</li>
                  <li>• Community programs</li>
                  <li>• Social skills groups</li>
                  <li>• Peer connections</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                  <span className="text-4xl">♾️</span>
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center">Needs-Guided</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Less structured choices</li>
                  <li>• Individual preferences</li>
                  <li>• Flexible approaches</li>
                  <li>• Family-centered care</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigating Roadmaps */}
          <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Navigating Roadmaps</h3>
            <p className="mb-6 text-sm">
              Roadmaps outline the typical steps along an autism pathway, from diagnosis through life stages. 
              The overview spans the entire lifespan with resources organized into stage-specific roadmaps.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">Early Intervention (Ages 0-3)</div>
                  <div className="text-sm">Diagnosis, Part C services, IFSP development, home-based supports, 
                  parent coaching, and naturalistic interventions.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">School Years (Ages 3-21)</div>
                  <div className="text-sm">IEP development, special education services, classroom accommodations, 
                  therapies, and educational supports.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#ffd166] text-[#0c264d] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">Transition Years (Ages 14-21)</div>
                  <div className="text-sm">Transition planning, vocational training, post-secondary education 
                  preparation, and independent living skills.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#0c264d] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">Young Adulthood (Ages 18-30)</div>
                  <div className="text-sm">Employment, higher education, relationships, housing, financial 
                  independence, and community participation.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">Adulthood (Ages 30+)</div>
                  <div className="text-sm">Career development, relationships, family planning, aging with autism, 
                  healthcare navigation, and long-term support needs.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Provider Options & Services */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Provider Options & Services</h3>
            <p className="mb-6 text-sm">
              Explore provider options and relevant online documents. Discover organizations, navigate barriers, 
              and understand the types of information available to help you make informed choices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Who Offers Support */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Who Offers Support</h4>
                </div>
                <ul className="space-y-1 text-xs">
                  <li>• Developmental pediatricians</li>
                  <li>• Speech-language pathologists</li>
                  <li>• Occupational therapists</li>
                  <li>• Behavior analysts (BCBAs)</li>
                  <li>• Early intervention specialists</li>
                  <li>• Service coordinators</li>
                </ul>
              </div>

              {/* Organizations */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Organizations</h4>
                </div>
                <ul className="space-y-1 text-xs">
                  <li>• State Part C programs</li>
                  <li>• Regional centers</li>
                  <li>• Parent training centers</li>
                  <li>• Autism support organizations</li>
                  <li>• Family resource centers</li>
                  <li>• Community programs</li>
                </ul>
              </div>
            </div>

            {/* Navigating Barriers */}
            <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Navigating Barriers</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="text-center">
                  <div className="font-bold text-[#0c264d] mb-1">Language</div>
                  <div>Translation services, multilingual providers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#0c264d] mb-1">Finances</div>
                  <div>Free/low-cost services, sliding scales</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#0c264d] mb-1">Insurance</div>
                  <div>Coverage navigation, Medicaid options</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#0c264d] mb-1">Where to Start</div>
                  <div>Referral processes, first steps</div>
                </div>
              </div>
            </div>
          </div>

          {/* Understanding Symptoms During the Early Intervention Period */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Understanding Symptoms During the Early Intervention Period</h3>
            <p className="mb-4 text-sm">
              Exploring autism and neurodivergence sets the stage for deeper analysis: understanding symptoms helps 
              identify strengths and challenges for autistic individuals of all ages, caregivers, providers, and 
              the general public, with humane strategies to support understanding.
            </p>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>For Complete Symptom Information:</strong> See the{' '}
                <a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); setCurrentArticle?.('autism-symptoms'); }}
                  className="text-[#0c264d] underline font-bold hover:text-[#2abcd4]"
                >
                  Symptoms & Characteristics page
                </a>
                {' '}which includes a comprehensive Symptoms Wheel visual guide to understanding autistic experiences across all areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Re-framing Behaviors */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Re-framing Behaviors</h4>
                </div>
                <p className="text-sm">
                  Understanding behaviors through a neurodivergent lens—from re-framing aggression as dysregulation 
                  to recognizing communication attempts and sensory needs.
                </p>
              </div>

              {/* Sensory Experiences */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Sensory Overload</h4>
                </div>
                <p className="text-sm">
                  Recognizing signs of sensory overload, understanding individual sensory profiles, and 
                  identifying triggers across environments.
                </p>
              </div>

              {/* Communication */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Communication Struggles</h4>
                </div>
                <p className="text-sm">
                  Understanding diverse communication styles, recognizing nonverbal communication, and supporting 
                  all forms of expression.
                </p>
              </div>

              {/* Attention & Focus */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Attention Needs</h4>
                </div>
                <p className="text-sm">
                  Recognizing differences in attention patterns, understanding hyperfocus and distractibility, 
                  and supporting individual attention styles.
                </p>
              </div>
            </div>
          </div>

          {/* Research & Outcomes */}
          <div className="bg-white border-l-4 border-[#10b981] p-5 rounded-md shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[#0c264d] font-bold text-lg">Research on Early Intervention</h4>
            </div>
            <p className="text-sm">
              Research shows that early, intensive intervention can improve outcomes, though every child's 
              response is individual. The most effective programs are family-centered, delivered in natural 
              environments, and respect the child's neurodivergent development.<sup>[10]</sup>
            </p>
          </div>

          {/* Key Principle Callout */}
          <div className="bg-[#ffd166] border-2 border-[#0c264d] p-5 rounded-lg shadow-md">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
              Remember
            </h3>
            <p className="text-sm">
              Early intervention isn't about "fixing" autism—it's about supporting development, building 
              communication skills, and helping families understand and support their autistic child. The goal 
              is to enhance quality of life and help children reach their individual potential, not to make 
              them less autistic.
            </p>
          </div>
        </div>
      </>
    );
  }

  function TherapiesContent() {
    return (
      <>
        {/* Therapeutic Interventions Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Therapeutic Interventions</h2>
          
          <p className="mb-6">
            Various therapeutic interventions can support autistic individuals across the lifespan. The most beneficial 
            approach is highly individualized and should be based on the person's specific strengths, challenges, and 
            goals—not on trying to make someone appear less autistic.<sup>[11]</sup>
          </p>

          {/* Speech and Language Therapy Card */}
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Speech and Language Therapy</h3>
            <p className="mb-4">
              Speech-language pathologists (SLPs) help with all forms of communication—verbal, nonverbal, and alternative.<sup>[12]</sup> They work on expressive and receptive language, pragmatic (social) language skills, and may provide AAC systems for nonspeaking individuals or address feeding difficulties related to sensory processing.
            </p>
            <button
              onClick={() => setCurrentArticle?.('autism-speech-therapy')}
              className="text-[#10b981] hover:underline font-semibold"
            >
              Read more about Speech and Language Therapy →
            </button>
          </div>

          {/* Occupational Therapy Card */}
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Occupational Therapy (OT)</h3>
            <p className="mb-4">
              Occupational therapists help with sensory processing, motor coordination, self-care skills, and participation in daily activities.<sup>[13]</sup> They may work on sensory integration, fine and gross motor skills, executive functioning strategies, and identifying helpful accommodations like sensory tools or environmental modifications.
            </p>
            <button
              onClick={() => setCurrentArticle?.('autism-occupational-therapy')}
              className="text-[#10b981] hover:underline font-semibold"
            >
              Read more about Occupational Therapy →
            </button>
          </div>

          {/* Applied Behavior Analysis Card */}
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Applied Behavior Analysis (ABA)</h3>
            <p className="mb-4">
              ABA uses behavioral principles to teach skills and is one of the most researched autism interventions.<sup>[14][15][16]</sup> However, it's also controversial—many autistic adults report trauma from compliance-focused ABA that targeted harmless autistic behaviors.<sup>[17]</sup> Modern approaches emphasize naturalistic, play-based methods that respect autonomy and neurodiversity.<sup>[18]</sup>
            </p>
            <button
              onClick={() => setCurrentArticle?.('autism-aba-therapy')}
              className="text-[#10b981] hover:underline font-semibold"
            >
              Read more about ABA Therapy →
            </button>
          </div>

          {/* Social Skills Support Card */}
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills Support</h3>
            <p className="mb-4">
              Social skills interventions teach interaction strategies while respecting autistic communication styles.<sup>[19]</sup> This includes social skills groups, peer-mediated interventions, social stories, and video modeling.<sup>[20][21][22]</sup> Neurodiversity-informed approaches recognize the "double empathy problem"—that social challenges are bidirectional between autistic and non-autistic people.<sup>[23]</sup>
            </p>
            <button
              onClick={() => setCurrentArticle?.('autism-social-skills')}
              className="text-[#10b981] hover:underline font-semibold"
            >
              Read more about Social Skills Support →
            </button>
          </div>

          {/* Mental Health Support Card */}
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mental Health Support</h3>
            <p className="mb-4">
              Autistic individuals have elevated rates of anxiety, depression, and other mental health conditions.<sup>[24]</sup> Autism-informed therapists adapt evidence-based approaches like CBT, ACT, and DBT for autistic thinking styles and sensory needs.<sup>[25][26][27]</sup> Trauma-informed care is especially important, as many autistic people have experienced bullying, abuse, or invalidating experiences.
            </p>
            <button
              onClick={() => setCurrentArticle?.('autism-mental-health')}
              className="text-[#10b981] hover:underline font-semibold"
            >
              Read more about Mental Health Support →
            </button>
          </div>

          {/* Choosing the Right Approach */}
          <div className="mt-8 mb-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Choosing the Right Approach</h2>
            
            <p className="mb-6">
              Not every autistic person needs every type of therapy. The right combination depends on individual needs, goals, 
              and priorities.<sup>[28]</sup>
            </p>

            {/* Decision-Making Framework */}
            <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Decision-Making Framework</h3>
              <p className="mb-6 text-sm">
                Choosing therapeutic approaches requires thoughtful consideration of individual needs, preferences, and 
                circumstances. A person-centered framework prioritizes autonomy, quality of life, and respect for 
                neurodivergent ways of being.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Start with Priorities */}
                <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-[#0c264d] font-bold text-lg">Start with Priorities</h4>
                  </div>
                  <p className="text-sm">
                    What skills or supports would most improve quality of life right now? Focus on meaningful goals 
                    rather than conformity.
                  </p>
                </div>

                {/* Listen to Autistic Voices */}
                <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-[#0c264d] font-bold text-lg">Listen to Autistic Voices</h4>
                  </div>
                  <p className="text-sm">
                    If the individual can communicate their preferences, center their input. Their lived experience 
                    is invaluable.
                  </p>
                </div>

                {/* Consider Intensity */}
                <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-[#0c264d] font-bold text-lg">Consider Intensity</h4>
                  </div>
                  <p className="text-sm">
                    More hours isn't always better. Balance therapy with rest, play, and family time to avoid 
                    burnout and overwhelm.
                  </p>
                </div>

                {/* Neurodiversity-Affirming Providers */}
                <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">♾️</span>
                    <h4 className="text-[#0c264d] font-bold text-lg">Affirming Providers</h4>
                  </div>
                  <p className="text-sm">
                    Seek therapists who respect autistic neurology and don't pathologize harmless differences like 
                    stimming or special interests.
                  </p>
                </div>

                {/* Monitor for Harm */}
                <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-[#0c264d] font-bold text-lg">Monitor for Harm</h4>
                  </div>
                  <p className="text-sm">
                    Watch for increased anxiety, shutdowns, loss of skills, or resistance to therapy. These are 
                    signs something isn't working.
                  </p>
                </div>

                {/* You Can Change Course */}
                <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-[#0c264d] font-bold text-lg">You Can Change Course</h4>
                  </div>
                  <p className="text-sm">
                    Starting one approach doesn't mean you're locked in forever. Flexibility and adjustment are 
                    part of the process.
                  </p>
                </div>
              </div>
            </div>

            {/* Red Flags in Therapy */}
            <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Red Flags to Watch For</h3>
              
              <p className="mb-6 text-sm">
                Some therapy goals and methods can be harmful. Be cautious of approaches that prioritize appearance 
                over well-being, or compliance over autonomy.<sup>[29]</sup>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="text-center mb-3">
                  </div>
                  <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Masking & Conformity</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Making person appear "less autistic"</li>
                    <li>• "Indistinguishable from peers" goals</li>
                    <li>• Targeting harmless stims or interests</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="text-center mb-3">
                  </div>
                  <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Forced Discomfort</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Forcing eye contact</li>
                    <li>• Forcing physical touch</li>
                    <li>• Ignoring sensory boundaries</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="text-center mb-3">
                  </div>
                  <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Punishment & Aversives</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Using punishment methods</li>
                    <li>• Withholding necessities</li>
                    <li>• Aversive conditioning</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="text-center mb-3">
                  </div>
                  <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Dismissing Autonomy</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Prioritizing compliance over communication</li>
                    <li>• Dismissing distress as "behavior"</li>
                    <li>• Excluding individual from goal-setting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function EducationalContent() {
    return (
      <>
        {/* Educational Support Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Support</h2>
          
          <p className="mb-6">
            Under the Individuals with Disabilities Education Act (IDEA), autistic students are entitled to 
            a free appropriate public education (FAPE) with services tailored to their unique needs.<sup>[28]</sup>
          </p>

          {/* Special Education Services */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Special Education Services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* IEP */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">IEP (Individualized Education Program)</h4>
                </div>
                <p className="text-sm mb-3">
                  Legally binding document outlining goals, services, and accommodations for students ages 3-21<sup>[29]</sup>
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Annual goals and progress monitoring</li>
                  <li>• Specialized instruction and services</li>
                  <li>• Accommodations and modifications</li>
                  <li>• Placement decisions</li>
                </ul>
              </div>

              {/* 504 Plan */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">504 Plan</h4>
                </div>
                <p className="text-sm mb-3">
                  Accommodations for students who don't need specialized instruction<sup>[30]</sup>
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Covers K-12 and college</li>
                  <li>• Focuses on access and barriers</li>
                  <li>• Less intensive than IEP</li>
                  <li>• Covers broader disabilities</li>
                </ul>
              </div>

              {/* LRE */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Least Restrictive Environment (LRE)</h4>
                </div>
                <p className="text-sm">
                  Students should be educated with non-disabled peers to the maximum extent appropriate, 
                  with supports provided as needed<sup>[31]</sup>
                </p>
              </div>

              {/* Related Services */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Related Services</h4>
                </div>
                <p className="text-sm mb-2">
                  Support services necessary for students to benefit from special education:
                </p>
                <ul className="space-y-1 text-xs">
                  <li>• Speech-language therapy</li>
                  <li>• Occupational therapy</li>
                  <li>• Counseling services</li>
                  <li>• Transportation</li>
                  <li>• Assistive technology</li>
                </ul>
              </div>
            </div>

            {/* Transition Planning */}
            <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Transition Planning</h4>
              </div>
              <p className="text-sm">
                Beginning at age 14-16, IEPs must include transition planning for post-secondary education, 
                employment, and independent living<sup>[32]</sup>
              </p>
            </div>
          </div>

          {/* Educational Accommodations */}
          <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Educational Accommodations</h3>
            <p className="mb-6 text-sm">
              Common helpful accommodations that can support autistic students in accessing the curriculum:<sup>[33]</sup>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Environmental */}
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-3 text-center">Environmental</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Quiet workspace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Noise-canceling headphones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Sensory-friendly lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Movement breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Fidget tools allowed</span>
                  </li>
                </ul>
              </div>

              {/* Instructional */}
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-3 text-center">Instructional</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Visual schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Written instructions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Advance notice of changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Reduced homework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Modified assignments</span>
                  </li>
                </ul>
              </div>

              {/* Assessment */}
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-3 text-center">Assessment</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Extended time on tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Alternative formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Quiet testing room</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Oral responses allowed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Calculator/computer use</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Support Callout */}
            <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Social Skills Support</h4>
              </div>
              <p className="text-sm">
                Social skills groups, lunch bunches, peer buddy systems, and structured recess support can 
                help autistic students navigate social situations at school.
              </p>
            </div>
          </div>

          {/* Educational Placement Options */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Educational Placement Options</h3>
            <p className="mb-6 text-sm">
              Placement should be determined by the student's individual needs, following the principle of 
              least restrictive environment:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">General Education with Supports</div>
                  <div className="text-sm">Full inclusion in general education classroom with accommodations, 
                  modifications, and support services. Student participates in all typical classroom activities 
                  with appropriate supports.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#2abcd4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">Resource Room</div>
                  <div className="text-sm">Part-time specialized instruction in a resource room for specific 
                  subjects or skills, with the rest of the day spent in general education. Often used for reading, 
                  math, or academic support.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#ffd166] text-[#0c264d] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">Special Education Classroom</div>
                  <div className="text-sm">Self-contained classroom with smaller class size, specialized 
                  curriculum, and intensive support. May include opportunities for inclusion in general education 
                  for certain subjects or activities.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#0c264d] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">Specialized School</div>
                  <div className="text-sm">School specifically designed for students with disabilities, with 
                  specialized staff, programs, and therapeutic services on-site. May be public or private.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">Homeschooling</div>
                  <div className="text-sm">Some families choose to homeschool with support from online programs, 
                  co-ops, therapists, and educational consultants. May still access some school services depending 
                  on state laws.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Principle Callout */}
          <div className="bg-[#ffd166] border-2 border-[#0c264d] p-5 rounded-lg shadow-md">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
              Remember
            </h3>
            <p className="text-sm">
              Parents are equal members of the IEP team. You have the right to participate fully in educational 
              decisions, request evaluations, bring advocates, and if needed, pursue dispute resolution. Don't 
              hesitate to ask questions and advocate for your child's needs.
            </p>
          </div>
        </div>
      </>
    );
  }

  function MedicalContent() {
    return (
      <>
        {/* Medical Management Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medical Management</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Medication</h3>
          <p className="mb-4">
            There is no medication for autism itself, but medications may help co-occurring conditions:<sup>[34]</sup>
          </p>

          <div className="bg-gray-700 border-l-4 border-[#0c264d] p-4 mb-4">
            <p className="text-white">
              <strong>Important:</strong> All prescription and over-the-counter medications should only be used under the guidance and recommendations of a qualified medical professional. This information is for educational purposes only and does not replace professional medical advice.
            </p>
          </div>

          {/* Medications Chart */}
          <div className="mb-6 overflow-x-auto max-w-4xl">
            <style>
              {`
                .medication-table td { padding: 0.5rem !important; font-size: 0.75rem; }
                .medication-table th { padding: 0.5rem !important; }
              `}
            </style>
            <table className="medication-table w-full border-2 border-[#2abcd4] rounded-lg text-sm">
              <thead>
                <tr className="bg-[#ffd166] text-[#0c264d]">
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">Medication</th>
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">Class</th>
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">FDA Status</th>
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">Target Symptoms</th>
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">Warnings & Side Effects</th>
                  <th className="text-left text-xs">Notes</th>
                </tr>
              </thead>
              <tbody>
                {/* BEHAVIOR (Irritability/Aggression) */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">BEHAVIOR (Irritability, Aggression, Self-Injury)</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Risperidone</strong><br/>(Risperdal)</td>
                  <td className="p-3 border-r border-gray-300">Atypical Antipsychotic</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm">FDA Approved</span></td>
                  <td className="p-3 border-r border-gray-300">Irritability, aggression, self-injury, tantrums</td>
                  <td className="p-3 border-r border-gray-300">Significant weight gain, increased appetite, metabolic syndrome, elevated prolactin, sedation, extrapyramidal symptoms (EPS), tardive dyskinesia risk</td>
                  <td className="p-3">Ages 5-16; monitor weight gain, metabolic effects<sup>[35]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Aripiprazole</strong><br/>(Abilify)</td>
                  <td className="p-3 border-r border-gray-300">Atypical Antipsychotic</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm">FDA Approved</span></td>
                  <td className="p-3 border-r border-gray-300">Irritability, aggression, self-injury</td>
                  <td className="p-3 border-r border-gray-300">Weight gain (less than risperidone), sedation, drooling, tremor, akathisia (restlessness), potential metabolic effects, tardive dyskinesia risk</td>
                  <td className="p-3">Ages 6-17; less weight gain than risperidone<sup>[35]</sup></td>
                </tr>
                
                {/* ATTENTION & IMPULSIVITY (ADHD) */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">ATTENTION & IMPULSIVITY (ADHD Symptoms)</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Methylphenidate</strong><br/>(Ritalin, Concerta)</td>
                  <td className="p-3 border-r border-gray-300">Stimulant</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Hyperactivity, inattention, impulsivity</td>
                  <td className="p-3 border-r border-gray-300">Decreased appetite, weight loss, insomnia, irritability/emotional lability, increased heart rate/blood pressure, growth suppression, potential for tics, rebound effects</td>
                  <td className="p-3">Effective for co-occurring ADHD; monitor for increased irritability<sup>[36]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Amphetamine salts</strong><br/>(Adderall)</td>
                  <td className="p-3 border-r border-gray-300">Stimulant</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Hyperactivity, inattention</td>
                  <td className="p-3 border-r border-gray-300">Similar to methylphenidate: appetite suppression, weight loss, insomnia, irritability, cardiovascular effects, anxiety, potential for abuse</td>
                  <td className="p-3">For ADHD symptoms; may reduce appetite<sup>[36]</sup></td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Atomoxetine</strong><br/>(Strattera)</td>
                  <td className="p-3 border-r border-gray-300">Non-Stimulant ADHD Med</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Hyperactivity, inattention</td>
                  <td className="p-3 border-r border-gray-300">Nausea, decreased appetite, fatigue, mood changes, increased heart rate/blood pressure, rare liver toxicity, black box warning for suicidal ideation in children</td>
                  <td className="p-3">Alternative to stimulants; takes weeks to work<sup>[36]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Guanfacine</strong><br/>(Intuniv)</td>
                  <td className="p-3 border-r border-gray-300">Alpha-2 Agonist</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Hyperactivity, impulsivity</td>
                  <td className="p-3 border-r border-gray-300">Sedation, fatigue, low blood pressure, dizziness, headache, irritability; do not stop abruptly (rebound hypertension)</td>
                  <td className="p-3">May help with emotional regulation<sup>[36]</sup></td>
                </tr>
                
                {/* MOOD (Anxiety/Depression) */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">MOOD (Anxiety, OCD, Depression)</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Sertraline</strong><br/>(Zoloft)</td>
                  <td className="p-3 border-r border-gray-300">SSRI</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Anxiety, OCD, depression</td>
                  <td className="p-3 border-r border-gray-300">Nausea, diarrhea, insomnia, activation/restlessness, behavioral disinhibition, black box warning for suicidal ideation in youth, sexual side effects</td>
                  <td className="p-3">Monitor for activation/behavioral side effects<sup>[37]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Fluoxetine</strong><br/>(Prozac)</td>
                  <td className="p-3 border-r border-gray-300">SSRI</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Anxiety, OCD, depression, repetitive behaviors</td>
                  <td className="p-3 border-r border-gray-300">Similar to sertraline; autistic individuals may have heightened sensitivity: activation, agitation, insomnia, GI upset, suicidal ideation warning</td>
                  <td className="p-3">Mixed evidence; autistic individuals may be more sensitive to side effects<sup>[37]</sup></td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Escitalopram</strong><br/>(Lexapro)</td>
                  <td className="p-3 border-r border-gray-300">SSRI</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Anxiety, depression</td>
                  <td className="p-3 border-r border-gray-300">Nausea, headache, drowsiness, insomnia, fatigue, suicidal ideation warning in youth; generally better tolerated than other SSRIs</td>
                  <td className="p-3">Generally well-tolerated<sup>[37]</sup></td>
                </tr>
                
                {/* SLEEP */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">SLEEP</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Melatonin</strong></td>
                  <td className="p-3 border-r border-gray-300">Hormone Supplement</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Sleep onset insomnia</td>
                  <td className="p-3 border-r border-gray-300">Generally safe; mild: daytime drowsiness, headache, dizziness; rarely vivid dreams or nightmares; not FDA regulated (quality varies)</td>
                  <td className="p-3">First-line for sleep; well-studied in autism, generally safe<sup>[38]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Clonidine</strong><br/>(Catapres)</td>
                  <td className="p-3 border-r border-gray-300">Alpha-2 Agonist</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Sleep, hyperactivity</td>
                  <td className="p-3 border-r border-gray-300">Sedation (often desired for sleep), low blood pressure, dizziness, dry mouth, constipation; do not stop abruptly (rebound hypertension)</td>
                  <td className="p-3">Sedating; monitor blood pressure<sup>[38]</sup></td>
                </tr>
                
                {/* SEIZURES/EPILEPSY */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">SEIZURES/EPILEPSY</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Valproic acid</strong><br/>(Depakote)</td>
                  <td className="p-3 border-r border-gray-300">Anticonvulsant/Mood Stabilizer</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Seizures, mood instability, aggression</td>
                  <td className="p-3 border-r border-gray-300">Weight gain, hair loss, tremor, liver toxicity (requires monitoring), pancreatitis risk, teratogenic (causes birth defects), polycystic ovary syndrome</td>
                  <td className="p-3">For co-occurring epilepsy; monitor liver function<sup>[39]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Levetiracetam</strong><br/>(Keppra)</td>
                  <td className="p-3 border-r border-gray-300">Anticonvulsant</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
                  <td className="p-3 border-r border-gray-300">Seizures</td>
                  <td className="p-3 border-r border-gray-300">Behavioral changes (irritability, aggression, mood swings), fatigue, dizziness, infection risk; generally fewer side effects than older anticonvulsants</td>
                  <td className="p-3">For epilepsy; generally well-tolerated<sup>[39]</sup></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <strong>Important:</strong> Autistic individuals may be more sensitive to medication side effects. Start low, go slow, and 
            monitor carefully.<sup>[40]</sup> Always work with a qualified healthcare provider who understands autism when considering medication.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Co-occurring Medical Conditions</h3>
          
          <h4 className="text-[#0c264d] font-bold mb-3">Gastrointestinal Issues</h4>
          <p className="mb-4">
            Gastrointestinal problems affect 46-84% of autistic individuals, significantly higher than the general population.<sup>[41]</sup> Common issues include chronic constipation, diarrhea, abdominal pain, gastroesophageal reflux disease (GERD), and feeding difficulties.
          </p>

          <div className="bg-gray-700 border-l-4 border-[#0c264d] p-4 mb-4">
            <p className="text-white">
              <strong>Important:</strong> All prescription and over-the-counter medications should only be used under the guidance and recommendations of a qualified medical professional. This information is for educational purposes only and does not replace professional medical advice.
            </p>
          </div>

          {/* GI Medications Chart */}
          <div className="mb-6 overflow-x-auto max-w-4xl">
            <table className="medication-table w-full border-2 border-[#2abcd4] rounded-lg text-sm">
              <thead>
                <tr className="bg-[#ffd166] text-[#0c264d]">
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">Medication/Supplement</th>
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">Type</th>
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">Rx/OTC</th>
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">Indication</th>
                  <th className="text-left border-r border-[#0c264d]/20 text-xs">Warnings & Side Effects</th>
                  <th className="text-left text-xs">Notes & Considerations</th>
                </tr>
              </thead>
              <tbody>
                {/* Constipation Treatments */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">CONSTIPATION (Most Common GI Issue in Autism)</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Polyethylene glycol 3350</strong><br/>(MiraLAX, GlycoLax)</td>
                  <td className="p-3 border-r border-gray-300">Osmotic Laxative</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">Chronic constipation</td>
                  <td className="p-3 border-r border-gray-300">Bloating, gas, nausea; rare allergic reactions; electrolyte imbalance with prolonged use</td>
                  <td className="p-3">First-line treatment; safe for long-term use; tasteless powder mixes in liquids<sup>[65]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Lactulose</strong></td>
                  <td className="p-3 border-r border-gray-300">Osmotic Laxative</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td>
                  <td className="p-3 border-r border-gray-300">Constipation</td>
                  <td className="p-3 border-r border-gray-300">Gas, bloating, cramping, diarrhea if overdosed; avoid in galactosemia</td>
                  <td className="p-3">Prescription alternative; sweet taste may be better tolerated<sup>[65]</sup></td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Docusate sodium</strong><br/>(Colace)</td>
                  <td className="p-3 border-r border-gray-300">Stool Softener</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">Mild constipation</td>
                  <td className="p-3 border-r border-gray-300">Throat irritation, mild stomach cramping; rare rash or allergic reaction</td>
                  <td className="p-3">Gentle; works by softening stool; less effective for chronic issues<sup>[65]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Senna</strong><br/>(Senokot, Ex-Lax)</td>
                  <td className="p-3 border-r border-gray-300">Stimulant Laxative</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">Occasional constipation</td>
                  <td className="p-3 border-r border-gray-300">Abdominal cramping, diarrhea; long-term use can cause dependency, electrolyte imbalance, "lazy bowel"</td>
                  <td className="p-3">Short-term use only; not for chronic use<sup>[65]</sup></td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Fiber supplements</strong><br/>(Metamucil, Benefiber)</td>
                  <td className="p-3 border-r border-gray-300">Bulk-forming Laxative</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">Prevention of constipation</td>
                  <td className="p-3 border-r border-gray-300">Gas, bloating; choking risk if not mixed properly; can worsen constipation without adequate water intake</td>
                  <td className="p-3">Requires adequate fluid intake<sup>[66]</sup></td>
                </tr>
                
                {/* Reflux/GERD Treatments */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">REFLUX & GERD (Gastroesophageal Reflux Disease)</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Omeprazole</strong><br/>(Prilosec)</td>
                  <td className="p-3 border-r border-gray-300">Proton Pump Inhibitor (PPI)</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span> / <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td>
                  <td className="p-3 border-r border-gray-300">GERD, heartburn</td>
                  <td className="p-3 border-r border-gray-300">Long-term: decreased calcium absorption, increased fracture risk, vitamin B12 deficiency, C. diff infection risk; short-term: headache, nausea, diarrhea</td>
                  <td className="p-3">Most effective for acid suppression; available OTC or prescription strength<sup>[67]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Lansoprazole</strong><br/>(Prevacid)</td>
                  <td className="p-3 border-r border-gray-300">Proton Pump Inhibitor (PPI)</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td>
                  <td className="p-3 border-r border-gray-300">GERD</td>
                  <td className="p-3 border-r border-gray-300">Similar to omeprazole: long-term bone and nutrient concerns; headache, diarrhea, abdominal pain</td>
                  <td className="p-3">Available in dissolvable tablets; easier for children<sup>[67]</sup></td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Ranitidine alternatives</strong><br/>(Famotidine/Pepcid)</td>
                  <td className="p-3 border-r border-gray-300">H2 Blocker</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span> / <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td>
                  <td className="p-3 border-r border-gray-300">Mild-moderate reflux</td>
                  <td className="p-3 border-r border-gray-300">Headache, dizziness, constipation, diarrhea; rarely confusion or agitation in children</td>
                  <td className="p-3">Less potent than PPIs; Zantac (ranitidine) recalled, famotidine is alternative<sup>[67]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Calcium carbonate</strong><br/>(Tums, Rolaids)</td>
                  <td className="p-3 border-r border-gray-300">Antacid</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">Occasional heartburn</td>
                  <td className="p-3 border-r border-gray-300">Constipation; excessive use can cause milk-alkali syndrome (high calcium), kidney stones</td>
                  <td className="p-3">Quick relief; chewable tablets; not for chronic use<sup>[67]</sup></td>
                </tr>
                
                {/* Diarrhea Treatments */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">DIARRHEA</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Loperamide</strong><br/>(Imodium)</td>
                  <td className="p-3 border-r border-gray-300">Anti-diarrheal</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">Acute diarrhea</td>
                  <td className="p-3 border-r border-gray-300">Constipation, drowsiness, dizziness; rare: severe constipation, megacolon, cardiac arrhythmias with overdose; avoid in bacterial infections</td>
                  <td className="p-3">Short-term use; check with doctor before using in children<sup>[68]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Bismuth subsalicylate</strong><br/>(Pepto-Bismol)</td>
                  <td className="p-3 border-r border-gray-300">Anti-diarrheal/Antacid</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">Diarrhea, nausea, upset stomach</td>
                  <td className="p-3 border-r border-gray-300">Black tongue/stool (harmless); contains salicylate—risk of Reye's syndrome in children, especially with viral illness; avoid with aspirin allergy</td>
                  <td className="p-3">Avoid in children under 12 without medical advice<sup>[68]</sup></td>
                </tr>
                
                {/* Probiotics & Digestive Support */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">PROBIOTICS & DIGESTIVE SUPPORT</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Probiotics</strong><br/>(Culturelle, Align, VSL#3)</td>
                  <td className="p-3 border-r border-gray-300">Live Bacteria Supplement</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">General GI health, dysbiosis</td>
                  <td className="p-3 border-r border-gray-300">Generally safe; mild gas or bloating initially; rare risk of infection in immunocompromised individuals</td>
                  <td className="p-3">Emerging evidence for autism; may help with bowel regularity; safe to try<sup>[69]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Digestive enzymes</strong></td>
                  <td className="p-3 border-r border-gray-300">Enzyme Supplement</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">Bloating, gas, indigestion</td>
                  <td className="p-3 border-r border-gray-300">Generally well-tolerated; possible allergic reactions; diarrhea or stomach upset at high doses</td>
                  <td className="p-3">Limited evidence; may help specific enzyme deficiencies<sup>[70]</sup></td>
                </tr>
                
                {/* Abdominal Pain/Cramping */}
                <tr className="bg-[#2abcd4]">
                  <td colSpan={6} className="p-2 font-bold text-white">ABDOMINAL PAIN & CRAMPING</td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Simethicone</strong><br/>(Gas-X, Mylicon)</td>
                  <td className="p-3 border-r border-gray-300">Anti-gas/Anti-foaming</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td>
                  <td className="p-3 border-r border-gray-300">Gas, bloating</td>
                  <td className="p-3 border-r border-gray-300">Minimal side effects; very safe; rare allergic reaction</td>
                  <td className="p-3">Very safe; breaks up gas bubbles; liquid drops available for children<sup>[71]</sup></td>
                </tr>
                <tr className="bg-gray-200 border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Hyoscyamine</strong><br/>(Levsin)</td>
                  <td className="p-3 border-r border-gray-300">Antispasmodic</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td>
                  <td className="p-3 border-r border-gray-300">Abdominal cramping, IBS</td>
                  <td className="p-3 border-r border-gray-300">Dry mouth, blurred vision, drowsiness, constipation, urinary retention; heat intolerance; rarely confusion or agitation</td>
                  <td className="p-3">Reduces intestinal spasms; monitor for side effects<sup>[71]</sup></td>
                </tr>
                <tr className="bg-white border-b border-[#2abcd4]">
                  <td className="p-3 border-r border-gray-300"><strong>Dicyclomine</strong><br/>(Bentyl)</td>
                  <td className="p-3 border-r border-gray-300">Antispasmodic</td>
                  <td className="p-3 border-r border-gray-300"><span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td>
                  <td className="p-3 border-r border-gray-300">IBS, abdominal pain</td>
                  <td className="p-3 border-r border-gray-300">Similar to hyoscyamine: dry mouth, dizziness, blurred vision; contraindicated in infants under 6 months (serious respiratory events)</td>
                  <td className="p-3">For functional abdominal pain; use with caution in children<sup>[71]</sup></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-[#2abcd4] p-4 mb-6">
            <p className="mb-2"><strong>Important GI Management Considerations:</strong></p>
            <ul className="list-disc ml-6 text-sm space-y-1">
              <li><strong>Rule out underlying conditions:</strong> Celiac disease, food allergies, inflammatory bowel disease should be evaluated<sup>[72]</sup></li>
              <li><strong>Dietary modifications:</strong> Some children benefit from addressing food selectivity, increasing fiber, or identifying trigger foods<sup>[73]</sup></li>
              <li><strong>Hydration:</strong> Ensure adequate fluid intake, especially with fiber supplements or laxatives<sup>[74]</sup></li>
              <li><strong>Communication challenges:</strong> Nonverbal children may show behavioral changes as only sign of GI distress<sup>[75]</sup></li>
              <li><strong>Medication side effects:</strong> Some psychotropic medications can worsen constipation<sup>[76]</sup></li>
              <li><strong>Toileting issues:</strong> Address sensory aversions, fear of toilet, or lack of interoceptive awareness<sup>[77]</sup></li>
            </ul>
          </div>

          <h4 className="text-[#0c264d] font-bold mb-3">Other Co-occurring Medical Conditions</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Sleep disorders:</strong> Insomnia, irregular sleep-wake cycles; sleep hygiene, melatonin<sup>[42]</sup></li>
            <li className="mb-2"><strong>Seizure disorders:</strong> Higher prevalence in autism; regular neurology follow-up<sup>[43]</sup></li>
            <li className="mb-2"><strong>Immune dysregulation:</strong> Some evidence of immune differences; manage allergies, autoimmune conditions<sup>[44]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Healthcare Considerations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Communication supports:</strong> AAC devices, visual supports for medical visits</li>
            <li className="mb-2"><strong>Sensory accommodations:</strong> Weighted lap pads, noise-canceling headphones, dimmed lights in exam rooms</li>
            <li className="mb-2"><strong>Preventive care:</strong> Don't neglect routine care (dental, vision, well visits) despite challenges<sup>[45]</sup></li>
            <li className="mb-2"><strong>Transition to adult care:</strong> Plan transition from pediatric to adult providers<sup>[46]</sup></li>
          </ul>
        </div>
      </>
    );
  }

  function EnvironmentalContent() {
    return (
      <>
        {/* Environmental Modifications Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Modifications and Accommodations</h2>

          <p className="mb-6">
            Creating supportive environments reduces barriers and allows autistic individuals to thrive by addressing 
            sensory needs, providing clear communication, and establishing predictable structures.<sup>[47]</sup>
          </p>

          {/* Sensory Accommodations - Main Section */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Sensory Accommodations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sound */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Sound</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Noise-canceling headphones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>White noise machines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Quiet spaces for breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Warning before loud noises</span>
                  </li>
                </ul>
              </div>

              {/* Light */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Light</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Dimmer switches for control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Natural lighting when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Avoid fluorescent lights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Sunglasses option available</span>
                  </li>
                </ul>
              </div>

              {/* Touch */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">✋</span>
                  <h4 className="text-[#0c264d] font-bold text-lg">Touch</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Seamless, tag-free clothing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Weighted blankets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Compression garments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Fidget tools available</span>
                  </li>
                </ul>
              </div>

              {/* Movement */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Movement</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Regular sensory breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Movement opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Wobble stools, standing desks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Alternative seating options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Calm Spaces Callout */}
            <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Calm Spaces</h4>
              </div>
              <p className="text-sm">
                Designated quiet areas for sensory regulation and emotional reset. Should include low lighting, 
                comfortable seating, and calming sensory items.
              </p>
            </div>
          </div>

          {/* Visual Supports Section */}
          <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Visual Supports</h3>
            <p className="mb-6 text-sm">
              Visual supports make abstract concepts concrete, reduce language processing demands, and provide 
              permanent reference points.<sup>[48]</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#0c264d]">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-[#0c264d] font-bold">Visual Schedules</h4>
                </div>
                <p className="text-sm">Pictures or words showing daily routines and transitions</p>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#2abcd4]">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-[#0c264d] font-bold">Social Stories</h4>
                </div>
                <p className="text-sm">Visual explanations of social situations</p>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-[#0c264d] font-bold">First-Then Boards</h4>
                </div>
                <p className="text-sm">Showing order of activities</p>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-[#0c264d] font-bold">Choice Boards</h4>
                </div>
                <p className="text-sm">Visual presentation of options</p>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#2abcd4]">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-[#0c264d] font-bold">Visual Timers</h4>
                </div>
                <p className="text-sm">Showing passage of time concretely</p>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#0c264d]">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-[#0c264d] font-bold">Visual Labels</h4>
                </div>
                <p className="text-sm">Labels on storage, locations, and materials</p>
              </div>
            </div>
          </div>

          {/* Structure and Predictability Section */}
          <div className="mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Structure and Predictability</h3>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <p className="mb-4 text-sm">
                Predictable environments reduce anxiety and allow autistic individuals to focus energy on learning 
                and engagement rather than constant environmental monitoring.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#2abcd4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Consistent Routines</div>
                    <div className="text-sm">Maintain predictable daily schedules and sequences</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#2abcd4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Advance Warnings</div>
                    <div className="text-sm">Provide notice before transitions or changes</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#2abcd4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Clear Expectations</div>
                    <div className="text-sm">Explicitly state rules and behavioral expectations</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-[#2abcd4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Organized Spaces</div>
                    <div className="text-sm">Keep environment organization consistent and logical</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Communication Accommodations */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Communication Accommodations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold">Explicit Language</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Use direct, literal language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Avoid idioms and sarcasm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Say exactly what you mean</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Allow processing time</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold">AAC & Alternative Communication</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Speech-generating devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Picture exchange systems (PECS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Written communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Sign language or gestures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Workplace/School Accommodations */}
          <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Workplace & School Accommodations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center">Physical Space</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Quiet workspace option</li>
                  <li>• Natural lighting preference</li>
                  <li>• Temperature control</li>
                  <li>• Minimal visual distractions</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                  <span className="text-4xl">⏰</span>
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center">Scheduling</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Flexible hours</li>
                  <li>• Break schedule adjustments</li>
                  <li>• Advance notice of changes</li>
                  <li>• Written agendas provided</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-3">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center">Communication</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Written instructions</li>
                  <li>• Email over phone calls</li>
                  <li>• Clear expectations stated</li>
                  <li>• Regular check-ins</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-[#ffd166] border-2 border-[#0c264d] p-5 rounded-lg shadow-md">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
              Key Principle
            </h3>
            <p className="text-sm">
              Environmental accommodations aren't "special treatment"—they're removing barriers so autistic 
              individuals can access the same opportunities as everyone else. The goal is to change the environment 
              to fit the person, not force the person to fit the environment.
            </p>
          </div>
        </div>
      </>
    );
  }

  function FamilyPrinciplesContent() {
    return (
      <>
        {/* Family Support Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Family Support</h2>

          <p className="mb-6">
            Supporting an autistic family member impacts the whole family. Families need support, resources, 
            and understanding to thrive alongside their autistic loved ones.<sup>[57]</sup>
          </p>

          {/* Family Support Resources Grid */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Family Support Resources</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Parent Training */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Parent Training Programs</h4>
                </div>
                <p className="text-sm">
                  Evidence-based programs teaching strategies to support child development and behavior<sup>[58]</sup>
                </p>
              </div>

              {/* Respite Care */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Respite Care</h4>
                </div>
                <p className="text-sm">
                  Temporary relief care allowing families necessary breaks to rest and recharge<sup>[59]</sup>
                </p>
              </div>

              {/* Support Groups */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Support Groups</h4>
                </div>
                <p className="text-sm">
                  Connection with other autism families for shared experiences and mutual support
                </p>
              </div>

              {/* Sibling Support */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Sibling Support</h4>
                </div>
                <p className="text-sm">
                  Programs and resources specifically for siblings of autistic children<sup>[60]</sup>
                </p>
              </div>

              {/* Mental Health Support */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Mental Health Support</h4>
                </div>
                <p className="text-sm">
                  Therapy and counseling for family members experiencing stress, anxiety, or depression
                </p>
              </div>

              {/* Financial Assistance */}
              <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="text-[#0c264d] font-bold text-lg">Financial Assistance</h4>
                </div>
                <p className="text-sm">
                  Understanding benefits like SSI, Medicaid waivers, tax deductions, and other financial resources
                </p>
              </div>
            </div>
          </div>

          {/* Advocacy Training */}
          <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-[#0c264d] font-bold text-lg">Advocacy Training</h3>
            </div>
            <p className="mb-4 text-sm">
              Learning to effectively advocate for your family member's needs across settings:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-2">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">School Advocacy</h4>
                <ul className="space-y-1 text-xs">
                  <li>• IEP/504 meetings</li>
                  <li>• Requesting evaluations</li>
                  <li>• Understanding rights</li>
                  <li>• Documenting concerns</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-2">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Medical Advocacy</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Communicating with doctors</li>
                  <li>• Requesting accommodations</li>
                  <li>• Getting referrals</li>
                  <li>• Insurance navigation</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="text-center mb-2">
                </div>
                <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Community Advocacy</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Access to programs</li>
                  <li>• Public accommodations</li>
                  <li>• Legal protections</li>
                  <li>• Awareness education</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Principles of Good Support Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Principles of Effective, Respectful Support</h2>

          <p className="mb-6">
            Quality autism support is grounded in neurodiversity-affirming principles that respect autistic 
            ways of being while providing meaningful assistance.
          </p>

          <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Core Principles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Presume Competence<sup>[61]</sup></div>
                  <div className="text-sm">Assume understanding and potential even when not obvious</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Respect Autonomy<sup>[62]</sup></div>
                  <div className="text-sm">Support choice-making and self-determination</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Focus on Quality of Life</div>
                  <div className="text-sm">Not just skill acquisition or behavior reduction</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Build on Strengths</div>
                  <div className="text-sm">Leverage special interests for learning and engagement</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Accept Autistic Ways of Being</div>
                  <div className="text-sm">Don't target harmless behaviors like stimming</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Listen to Autistic Voices<sup>[63]</sup></div>
                  <div className="text-sm">Center autistic perspectives in decisions</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Teach to the Individual</div>
                  <div className="text-sm">One size does not fit all</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Support Communication</div>
                  <div className="text-sm">Provide access to communication methods that work</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Create Sensory-Friendly Environments</div>
                  <div className="text-sm">Reduce barriers rather than expecting constant adaptation</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">Promote Inclusion<sup>[64]</sup></div>
                  <div className="text-sm">Support participation in community life</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Principle Callout */}
          <div className="bg-[#ffd166] border-2 border-[#0c264d] p-5 rounded-lg shadow-md">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
              Remember
            </h3>
            <p className="text-sm">
              "Nothing about us without us" — autistic individuals should be included in decisions about 
              their own support, services, and lives. The best support respects autonomy, builds on strengths, 
              and centers the autistic person's own goals and preferences.
            </p>
          </div>
        </div>
      </>
    );
  }

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
          Autism: Support & Management
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-md text-sm transition-colors ${
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
      <div className="space-y-8">{renderTabContent(activeTab)}</div>

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

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <ASDReferences />
        </div>
      </section>
    </article>
  );
}