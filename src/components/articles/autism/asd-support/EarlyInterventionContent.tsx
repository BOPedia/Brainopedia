interface EarlyInterventionContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function EarlyInterventionContent({ setCurrentArticle }: EarlyInterventionContentProps) {
  return (
    <>
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
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Federal Programs</h4>
              </div>
              <p className="text-sm">
                Part C of IDEA provides early intervention services for infants and toddlers with developmental 
                delays, ages 0-3<sup>[4]</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Service Coordination</h4>
              </div>
              <p className="text-sm">
                A service coordinator helps families navigate services and develop an Individualized Family 
                Service Plan (IFSP)<sup>[5]</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Home-Based Services</h4>
              </div>
              <p className="text-sm">
                Services often delivered in the child's natural environment—home, daycare, or community 
                settings<sup>[6]</sup>
              </p>
            </div>

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
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Re-framing Behaviors</h4>
              </div>
              <p className="text-sm">
                Understanding behaviors through a neurodivergent lens—from re-framing aggression as dysregulation 
                to recognizing communication attempts and sensory needs.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Sensory Overload</h4>
              </div>
              <p className="text-sm">
                Recognizing signs of sensory overload, understanding individual sensory profiles, and 
                identifying triggers across environments.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Communication Struggles</h4>
              </div>
              <p className="text-sm">
                Understanding diverse communication styles, recognizing nonverbal communication, and supporting 
                all forms of expression.
              </p>
            </div>

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
