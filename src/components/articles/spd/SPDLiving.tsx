import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SPDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function SPDLiving({ setCurrentArticle }: SPDLivingProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('spd'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to SPD
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        SPD: Living with Sensory Processing Disorder
      </h1>

      <div className="space-y-8">
        {/* Introduction Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Thriving with Sensory Processing Differences</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGdyb3VwJTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc2NzQwNjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="People thriving with sensory differences"
            className="w-96 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Living with Sensory Processing Disorder involves developing self-awareness, creating supportive environments, building 
            effective coping strategies, and advocating for appropriate accommodations.<sup>[1][2]</sup> While SPD presents unique 
            challenges, many individuals with sensory processing differences lead fulfilling, successful lives across all domains—
            education, careers, relationships, and personal pursuits.<sup>[3]</sup>
          </p>
          <p className="mb-4">
            This section explores practical strategies for navigating daily life with SPD, from childhood through adulthood, 
            focusing on self-understanding, environmental modifications, self-advocacy, and building a supportive network.<sup>[4]</sup>
          </p>
        </div>

        {/* Understanding Your Sensory Profile Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding Your Sensory Profile</h2>
          
          <p className="mb-4">
            Self-awareness is foundational to living well with SPD. Understanding your individual sensory profile involves:<sup>[4]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identifying Sensory Triggers</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Which sensory inputs are challenging (sounds, lights, textures, smells, movements)?</li>
            <li className="mb-2">What specific qualities are problematic (loud vs. high-pitched sounds, bright vs. fluorescent lights)?</li>
            <li className="mb-2">When and where do sensory difficulties typically occur?<sup>[6]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Recognizing Sensory Needs and Preferences</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">What sensory experiences are calming or organizing?</li>
            <li className="mb-2">What activities help with regulation and focus?</li>
            <li className="mb-2">Which environments feel comfortable and supportive?<sup>[7]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Noticing Warning Signs of Overload</h3>
          <p className="mb-4">
            Learning to recognize early signs of sensory overload allows for proactive intervention:<sup>[8]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Physical signs (tension, headaches, fatigue)</li>
            <li className="mb-2">Emotional changes (irritability, anxiety, withdrawal)</li>
            <li className="mb-2">Cognitive effects (difficulty concentrating, feeling overwhelmed)</li>
            <li className="mb-2">Sensory changes (sounds seem louder, lights seem brighter)<sup>[8]</sup></li>
          </ul>
        </div>

        {/* Daily Life Strategies Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strategies for Daily Living</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creating Sensory-Friendly Routines</h3>
          <p className="mb-4">
            Establishing consistent routines reduces uncertainty and helps manage sensory demands:<sup>[9]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Build in regular sensory breaks throughout the day</li>
            <li className="mb-2">Schedule demanding tasks during optimal times (when well-regulated)</li>
            <li className="mb-2">Plan transitions between activities and environments<sup>[10]</sup></li>
            <li className="mb-2">Incorporate calming or organizing sensory activities (morning routine, transitions from 
            school, work to home)<sup>[11]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Modifying Self-Care Activities</h3>
          <p className="mb-4">
            Self-care activities that involve intense sensory experiences can be modified:<sup>[13]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Bathing/Showering:</strong> Adjust water temperature and pressure, use preferred products, 
            modify lighting and sound</li>
            <li className="mb-2"><strong>Grooming:</strong> Find tolerable hair care products, use electric toothbrushes or manual ones 
            that minimize sensory input<sup>[13]</sup></li>
            <li className="mb-2"><strong>Clothing:</strong> Choose comfortable fabrics, remove tags, select loose-fitting or 
            compression styles based on preferences</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Eating and Nutrition</h3>
          <p className="mb-4">
            Sensory sensitivities can significantly impact eating, but strategies can help:<sup>[16][16]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Respect food preferences while gradually expanding tolerated foods</li>
            <li className="mb-2">Consider textures, temperatures, and presentations that work</li>
            <li className="mb-2">Explore nutritional supplements if diet is very limited</li>
            <li className="mb-2">Create calm eating environments with minimal sensory distractions<sup>[16]</sup></li>
          </ul>
        </div>

        {/* Social and Recreational Life Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social and Recreational Participation</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwc29jaWFsJTIwZ2F0aGVyaW5nfGVufDF8fHx8MTczNjgwNjQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Friends in social gathering"
            className="w-80 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Choose social activities and venues that match your sensory needs</li>
            <li className="mb-2">Set boundaries around sensory demands (duration, intensity, environment)</li>
            <li className="mb-2">Select activities based on sensory demands (hiking, small gatherings vs. concerts, crowded events)<sup>[19]</sup></li>
            <li className="mb-2">Communicate needs to friends and family</li>
            <li className="mb-2">Plan recovery time after sensorially demanding events</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Explaining SPD to Others</h3>
          <p className="mb-4">
            Educating others about SPD supports understanding and accommodation:<sup>[11]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Use simple, clear language appropriate to the listener's age and understanding</li>
            <li className="mb-2">Focus on specific needs rather than abstract concepts</li>
            <li className="mb-2">Explain what helps and what doesn't<sup>[20]</sup></li>
            <li className="mb-2">Frame SPD as a difference in how the nervous system processes information, not a choice or behavioral issue</li>
          </ul>
        </div>

        {/* Educational Success Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Supporting Educational Success</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Age Strategies</h3>
          <p className="mb-4">
            Students with SPD can thrive academically with appropriate accommodations and strategies:<sup>[24][13]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Use sensory tools discreetly (fidgets, chewable items, noise-reducing headphones)</li>
            <li className="mb-2">Request movement breaks or access to a quiet space</li>
            <li className="mb-2">Communicate with teachers about sensory needs<sup>[26]</sup></li>
            <li className="mb-2">Develop organizational systems that reduce sensory overwhelm</li>
            <li className="mb-2">Advocate for appropriate seating and lighting</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Formal Accommodations</h3>
          <p className="mb-4">
            Formal accommodations through IEPs or 504 plans can include:<sup>[13]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Sensory breaks and movement opportunities</li>
            <li className="mb-2">Alternative seating options</li>
            <li className="mb-2">Modified assignments (oral reports vs. written, alternative demonstration of knowledge)</li>
            <li className="mb-2">Extended time for tasks impacted by sensory processing</li>
            <li className="mb-2">Access to sensory tools and quiet spaces<sup>[27]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Higher Education</h3>
          <p className="mb-4">
            College students with SPD can access disability services for accommodations and may benefit from:<sup>[29]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Choosing sensory-friendly housing (single room, quiet floor)</li>
            <li className="mb-2">Selecting class times and formats that match sensory needs</li>
            <li className="mb-2">Using assistive technology and sensory tools</li>
            <li className="mb-2">Building a support network and accessing campus resources</li>
          </ul>
        </div>

        {/* Employment Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Career and Employment</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzM2ODA2NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Workplace environment"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Selection</h3>
          <p className="mb-4">
            Consider sensory demands when exploring careers:<sup>[19]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Work environments (open office vs. private space, quiet vs. busy, indoor vs. outdoor)</li>
            <li className="mb-2">Sensory aspects of job tasks</li>
            <li className="mb-2">Schedule flexibility and control over work conditions</li>
            <li className="mb-2">Opportunities to use strengths related to sensory processing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Accommodations</h3>
          <p className="mb-4">
            Under the ADA, employees may request reasonable accommodations:<sup>[30]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Workspace modifications (lighting, noise-canceling headphones, private office or cubicle)</li>
            <li className="mb-2">Flexible scheduling or remote work options</li>
            <li className="mb-2">Modified break schedules for sensory regulation</li>
            <li className="mb-2">Adjusted dress codes for sensory comfort<sup>[31]</sup></li>
          </ul>
        </div>

        {/* Self-Advocacy Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Building Self-Advocacy Skills</h2>
          
          <p className="mb-4">
            Self-advocacy—the ability to understand and communicate one's needs—is crucial for living well with SPD:<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Self-Advocacy Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Self-awareness:</strong> Understanding your sensory profile, triggers, and needs</li>
            <li className="mb-2"><strong>Communication:</strong> Expressing needs clearly and respectfully<sup>[33]</sup></li>
            <li className="mb-2"><strong>Problem-solving:</strong> Identify potential solutions and negotiate accommodations<sup>[11]</sup></li>
            <li className="mb-2"><strong>Knowledge of rights:</strong> Understanding legal protections and available accommodations</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developing Advocacy Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Practice explaining SPD and specific needs in various contexts</li>
            <li className="mb-2">Role-play challenging conversations<sup>[35]</sup></li>
            <li className="mb-2">Build allies (teachers, supervisors, family members) who support advocacy efforts<sup>[32]</sup></li>
            <li className="mb-2">Start with small advocacy efforts and build confidence over time</li>
          </ul>
        </div>

        {/* Mental Health and Wellbeing Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Mental Health and Emotional Wellbeing</h2>
          
          <p className="mb-4">
            Living with sensory processing differences can impact mental health and emotional well-being:<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Stress and Anxiety</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Recognize connections between sensory experiences and emotional states<sup>[37]</sup></li>
            <li className="mb-2">Develop stress management strategies (sensory breaks, relaxation, exercise)</li>
            <li className="mb-2">Seek professional support when needed (therapy, counseling)</li>
            <li className="mb-2">Practice mindfulness and relaxation techniques<sup>[38]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Resilience</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Focus on strengths and abilities alongside challenges</li>
            <li className="mb-2">Celebrate successes and progress</li>
            <li className="mb-2">Connect with others who understand sensory processing differences</li>
            <li className="mb-2">Maintain perspective—SPD is one aspect of identity, not the whole person<sup>[39]</sup></li>
          </ul>
        </div>

        {/* Family Life Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Family Life and Parenting</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">For Parents of Children with SPD</h3>
          <p className="mb-4">
            For parents with SPD or raising children with sensory differences:<sup>[32]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Learn about sensory processing to understand your child's experiences</li>
            <li className="mb-2">Modify home environments to support sensory needs<sup>[42]</sup></li>
            <li className="mb-2">Collaborate with occupational therapists and educators</li>
            <li className="mb-2">Advocate for appropriate services and accommodations</li>
            <li className="mb-2">Take care of your own sensory and emotional needs</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Supporting Children's Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Help children understand their sensory profiles</li>
            <li className="mb-2">Teach self-regulation strategies appropriate to developmental level</li>
            <li className="mb-2">Build your child's self-awareness and self-advocacy skills<sup>[11]</sup></li>
            <li className="mb-2">Connect with other families for support and shared experiences<sup>[32]</sup></li>
          </ul>
        </div>

        {/* Lifelong Journey Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">SPD as a Lifelong Journey</h2>
          
          <p className="mb-4">
            Living with SPD is a lifelong journey of self-discovery, adaptation, and growth:<sup>[40]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Sensory needs change:</strong> Sensory profiles can evolve with development, life circumstances, 
            and intervention<sup>[4]</sup></li>
            <li className="mb-2"><strong>Continuous learning:</strong> Understanding of SPD deepens over time with self-reflection 
            and support<sup>[21]</sup></li>
            <li className="mb-2"><strong>Building identity:</strong> SPD is one part of a multifaceted identity that includes strengths, 
            interests, values, and relationships</li>
            <li className="mb-2"><strong>Finding community:</strong> Connecting with others who share similar experiences provides validation, 
            personal goals and meaningful participation<sup>[34]</sup></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Finding Support and Resources</h2>
          
          <p className="mb-4">
            Various resources can support living well with SPD:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Occupational therapists specializing in sensory integration</li>
            <li className="mb-2">Parent support groups and online communities</li>
            <li className="mb-2">Educational advocates and disability rights organizations</li>
            <li className="mb-2">Books, websites, and educational materials about SPD</li>
            <li className="mb-2">Mental health professionals with understanding of sensory processing</li>
          </ul>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Schaaf, R. C., & Miller, L. J. (2005). "Occupational therapy using a sensory integrative approach for children with developmental disabilities." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 11(2), 143-148.</p>
          <p>[2] Miller, L. J., Nielsen, D. M., Schoen, S. A., & Brett-Green, B. A. (2009). "Perspectives on sensory processing disorder: A call for translational research." <em>Frontiers in Integrative Neuroscience</em>, 3, 22.</p>
          <p>[3] Bar-Shalita, T., Vatine, J. J., & Parush, S. (2008). "Sensory modulation disorder: A risk factor for participation in daily life activities." <em>Developmental Medicine & Child Neurology</em>, 50(12), 932-937.</p>
          <p>[4] Dunn, W. (2001). "The sensations of everyday life: Empirical, theoretical, and pragmatic considerations." <em>American Journal of Occupational Therapy</em>, 55(6), 608-620.</p>
          <p>[6] Lane, S. J., Reynolds, S., & Thacker, L. (2010). "Sensory over-responsivity and ADHD: Differentiating using electrodermal responses, cortisol, and anxiety." <em>Frontiers in Integrative Neuroscience</em>, 4, 8.</p>
          <p>[7] Parham, L. D., & Mailloux, Z. (2015). "Sensory integration." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational Therapy for Children and Adolescents</em> (7th ed., pp. 258-303). St. Louis: Elsevier.</p>
          <p>[8] Ben-Sasson, A., Carter, A. S., & Briggs-Gowan, M. J. (2009). "Sensory over-responsivity in elementary school: Prevalence and social-emotional correlates." <em>Journal of Abnormal Child Psychology</em>, 37(5), 705-716.</p>
          <p>[9] Williams, M. S., & Shellenberger, S. (1996). <em>How Does Your Engine Run? A Leader's Guide to the Alert Program for Self-Regulation</em>. Albuquerque, NM: TherapyWorks.</p>
          <p>[10] Ashburner, J., Ziviani, J., & Rodger, S. (2008). "Sensory processing and classroom emotional, behavioral, and educational outcomes in children with autism spectrum disorder." <em>American Journal of Occupational Therapy</em>, 62(5), 564-573.</p>
          <p>[11] Dunn, W., Cox, J., Foster, L., Mische-Lawson, L., & Tanquary, J. (2012). "Impact of a contextual intervention on child participation and parent competence among children with autism spectrum disorders: A pretest-posttest repeated-measures design." <em>American Journal of Occupational Therapy</em>, 66(5), 520-528.</p>
          <p>[13] Dunn, W., Myles, B. S., & Orr, S. (2002). "Sensory processing issues associated with Asperger syndrome: A preliminary investigation." <em>American Journal of Occupational Therapy</em>, 56(1), 97-102.</p>
          <p>[16] Cermak, S. A., Curtin, C., & Bandini, L. G. (2010). "Food selectivity and sensory sensitivity in children with autism spectrum disorders." <em>Journal of the American Dietetic Association</em>, 110(2), 238-246.</p>
          <p>[19] Bar-Shalita, T., Vatine, J. J., & Parush, S. (2008). "Sensory modulation disorder: A risk factor for participation in daily life activities." <em>Developmental Medicine & Child Neurology</em>, 50(12), 932-937.</p>
          <p>[20] Kranowitz, C. S. (2005). <em>The Out-of-Sync Child: Recognizing and Coping with Sensory Processing Disorder</em>. New York: Penguin.</p>
          <p>[21] Williams, M. S., & Shellenberger, S. (1996). <em>How Does Your Engine Run?</em> Albuquerque, NM: TherapyWorks.</p>
          <p>[24] Roley, S. S., Mailloux, Z., Miller-Kuhaneck, H., & Glennon, T. (2007). "Understanding Ayres Sensory Integration." <em>OT Practice</em>, 12(17), CE1-CE8.</p>
          <p>[26] Schaaf, R. C., Benevides, T., Mailloux, Z., et al. (2014). "An intervention for sensory difficulties in children with autism: A randomized trial." <em>Journal of Autism and Developmental Disorders</em>, 44(7), 1493-1506.</p>
          <p>[27] Bagatell, N., Mirigliani, G., Patterson, C., Reyes, Y., & Test, L. (2010). "Effectiveness of therapy ball chairs on classroom participation in children with autism spectrum disorders." <em>American Journal of Occupational Therapy</em>, 64(6), 895-903.</p>
          <p>[29] Dunn, W. (2007). "Supporting children to participate successfully in everyday life by using sensory processing knowledge." <em>Infants & Young Children</em>, 20(2), 84-101.</p>
          <p>[30] Equal Employment Opportunity Commission. (1990). <em>Americans with Disabilities Act of 1990</em>. Washington, DC: U.S. Government Printing Office.</p>
          <p>[31] Cosbey, J., Johnston, S. S., & Dunn, M. L. (2010). "Sensory processing disorders and social participation." <em>American Journal of Occupational Therapy</em>, 64(3), 462-473.</p>
          <p>[32] Bagby, M. S., Dickie, V. A., & Baranek, G. T. (2012). "How sensory experiences of children with and without autism affect family occupations." <em>American Journal of Occupational Therapy</em>, 66(1), 78-86.</p>
          <p>[33] Test, D. W., Fowler, C. H., Wood, W. M., Brewer, D. M., & Eddy, S. (2005). "A conceptual framework of self-advocacy for students with disabilities." <em>Remedial and Special Education</em>, 26(1), 43-54.</p>
          <p>[34] Mailloux, Z., May-Benson, T. A., Summers, C. A., et al. (2007). "The issue is—Goal attainment scaling as a measure of meaningful outcomes for children with sensory integration disorders." <em>American Journal of Occupational Therapy</em>, 61(2), 254-259.</p>
          <p>[35] Palmer, S. B., & Wehmeyer, M. L. (2003). "Promoting self-determination in early elementary school: Teaching self-regulated problem-solving and goal-setting skills." <em>Remedial and Special Education</em>, 24(2), 115-126.</p>
          <p>[37] Reynolds, S., & Lane, S. J. (2009). "Sensory overresponsivity and anxiety in children with ADHD." <em>American Journal of Occupational Therapy</em>, 63(4), 433-440.</p>
          <p>[38] Champagne, T. (2011). <em>Sensory Modulation & Environment: Essential Elements of Occupation</em> (3rd ed.). Pearson.</p>
          <p>[39] Miller-Kuhaneck, H., Henry, D. A., Glennon, T. J., & Mu, K. (2007). "Development of the Sensory Processing Measure—School: Initial studies of reliability and validity." <em>American Journal of Occupational Therapy</em>, 61(2), 170-175.</p>
          <p>[40] Schaaf, R. C., & Miller, L. J. (2005). "Occupational therapy using a sensory integrative approach for children with developmental disabilities." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 11(2), 143-148.</p>
          <p>[42] Case-Smith, J., & Arbesman, M. (2008). "Evidence-based review of interventions for autism used in or of relevance to occupational therapy." <em>American Journal of Occupational Therapy</em>, 62(4), 416-429.</p>
        </div>
      </section>
    </article>
  );
}
