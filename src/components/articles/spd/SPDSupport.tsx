import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SPDSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function SPDSupport({ setCurrentArticle }: SPDSupportProps) {
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
        SPD: Support & Management
      </h1>

      <div className="space-y-8">
        {/* Introduction Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Approaches to Supporting Sensory Processing Differences</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBsYXklMjB0aGVyYXB5fGVufDF8fHx8MTczNjgwNjQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child in therapy session"
            className="w-96 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Supporting individuals with Sensory Processing Disorder involves a multi-faceted approach that addresses both the 
            underlying neurological differences and the functional impacts on daily life.<sup>[1][2]</sup> Intervention typically 
            combines direct therapy to improve sensory processing, environmental modifications to support sensory needs, and 
            strategies to help individuals understand and manage their sensory experiences.<sup>[3]</sup>
          </p>
          <p className="mb-4">
            The goal of intervention is not to "cure" SPD but to help individuals develop better sensory processing skills, create 
            environments that support their sensory needs, and build strategies for self-regulation and participation in meaningful 
            activities.<sup>[4]</sup> A comprehensive support plan is individualized to the person's unique sensory profile and 
            functional goals.<sup>[5]</sup>
          </p>
        </div>

        {/* Ayres Sensory Integration Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Ayres Sensory Integration® (ASI) Intervention</h2>
          
          <p className="mb-4">
            Ayres Sensory Integration® (ASI) is a therapeutic approach developed by A. Jean Ayres specifically to address sensory 
            integration difficulties.<sup>[6][7]</sup> This intervention uses playful, child-directed activities to provide controlled 
            sensory experiences that challenge the nervous system to organize sensory input more effectively.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Principles of ASI</h3>
          <p className="mb-4">
            ASI intervention is characterized by several key elements:<sup>[7]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Activities provide enhanced sensation (vestibular, proprioceptive, tactile)</li>
            <li className="mb-2">Child actively participates in choosing and directing activities (self-direction)</li>
            <li className="mb-2">Activities are designed to elicit adaptive responses that challenge the child's current abilities</li>
            <li className="mb-2">Therapist creates a safe, supportive environment using specialized equipment like swings, 
            climbing structures, crash mats, and various tactile materials.<sup>[9]</sup> The therapist guides the child through 
            playful activities that are challenging yet achievable, promoting neuroplastic changes in how the brain processes 
            sensory information.<sup>[10]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Evidence for ASI</h3>
          <p className="mb-4">
            Research on ASI effectiveness shows promising results, particularly when intervention adheres to fidelity measures:<sup>[3][7]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Randomized controlled trials have shown improvements in sensory processing, motor skills, 
            and functional outcomes<sup>[11][3]</sup></li>
            <li className="mb-2">Improvements in participation, goal attainment, and quality of life</li>
            <li className="mb-2">Benefits greatest when therapy follows ASI principles with high fidelity to the approach</li>
          </ul>
        </div>

        {/* Other Therapeutic Approaches Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Other Therapeutic Approaches</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vuc29yeSUyMHRvb2xzfGVufDF8fHx8MTczNjgwNjQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Sensory therapy tools"
            className="w-80 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Wilbarger Protocol (Deep Pressure and Proprioceptive Technique)</h3>
          <p className="mb-4">
            The Wilbarger Protocol involves applying deep pressure with a therapeutic brush followed by joint compressions. 
            This technique was developed by occupational therapist Patricia Wilbarger and is used widely in sensory integration practice.<sup>[18]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory Diets</h3>
          <p className="mb-4">
            A "sensory diet" is a personalized schedule of sensory activities designed to help individuals maintain optimal 
            arousal and attention levels throughout the day.<sup>[4]</sup> Activities are chosen based on the individual's 
            sensory profile and may include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Alerting activities: crunchy snacks, bright lights, upbeat music, jumping</li>
            <li className="mb-2">Calming activities: dim lighting, soft music, slow rocking, deep breathing, heavy work (e.g., 
            chewing gum, rhythmic movement, proprioceptive input)<sup>[2]</sup></li>
            <li className="mb-2">Organizing activities: proprioceptive input like pushing/pulling, rhythmic activities</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Alert Program ("How Does Your Engine Run?")</h3>
          <p className="mb-4">
            This program teaches children to recognize their arousal states and use sensory strategies to self-regulate.<sup>[22]</sup> 
            It uses the metaphor of an engine running at different speeds to help children understand and communicate their 
            sensory needs.
          </p>
        </div>

        {/* Environmental Modifications Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Modifications and Accommodations</h2>
          
          <p className="mb-4">
            Modifying environments to reduce sensory demands or provide appropriate sensory input is a crucial component of 
            supporting individuals with SPD:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Sensory Activities by Type</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Tactile: playdough, sand, water play, different textures</li>
            <li className="mb-2">Vestibular: swinging, spinning, rolling, rocking</li>
            <li className="mb-2">Heavy work: pushing, pulling, carrying weighted objects, wall pushes<sup>[2]</sup></li>
            <li className="mb-2">Oral motor: chewing, blowing bubbles, drinking through straws</li>
            <li className="mb-2">Visual: calming visual input, reducing visual clutter</li>
            <li className="mb-2">Proprioceptive: yoga, animal walks, jumping on trampoline<sup>[18]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Home Modifications</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Creating a sensory-friendly space or "calm down corner" with soft lighting, comfortable seating, 
            and calming sensory tools<sup>[23]</sup></li>
            <li className="mb-2">Adjusting clothing choices (tagless, soft fabrics, compression clothing)</li>
            <li className="mb-2">Modifying meal times (addressing food textures, smells, eating environment)<sup>[24]</sup></li>
            <li className="mb-2">Adapting bathing routines (water temperature, pressure, bathroom lighting)</li>
            <li className="mb-2">Establishing predictable routines to reduce uncertainty and sensory surprises</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School and Educational Settings</h3>
          <p className="mb-4">
            Educational settings can implement various accommodations:<sup>[27][28]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Preferential seating (away from windows, doors, high-traffic areas)</li>
            <li className="mb-2">Movement breaks and sensory breaks throughout the day</li>
            <li className="mb-2">Alternative seating options (wobble cushions, therapy balls, standing desks)</li>
            <li className="mb-2">Noise-reducing headphones for noisy environments</li>
            <li className="mb-2">Fidget tools or sensory objects for focus<sup>[29]</sup></li>
            <li className="mb-2">Advance warning for sensory-intense activities (fire drills, assemblies)<sup>[27]</sup></li>
            <li className="mb-2">Modified physical education activities</li>
            <li className="mb-2">Extended time for tasks requiring fine motor skills</li>
          </ul>
        </div>

        {/* Specific Intervention Techniques Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Specific Intervention Techniques</h2>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Therapeutic Brushing and Deep Pressure</h3>
          <p className="mb-4">
            The Wilbarger Protocol uses a specific surgical brush and joint compression techniques to provide deep pressure and 
            compression techniques to address tactile defensiveness.<sup>[18]</sup> The protocol must be taught by a trained therapist 
            and implemented consistently for effectiveness.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Weighted Items</h3>
          <p className="mb-4">
            Weighted vests, blankets, lap pads, and other items provide proprioceptive input that can help with sensory modulation 
            and attention.<sup>[32]</sup> These should be used under occupational therapist guidance with specific wearing schedules.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cognitive Behavioral Approaches</h3>
          <p className="mb-4">
            For older children and adults, cognitive behavioral strategies can help individuals understand sensory triggers and 
            develop coping mechanisms:<sup>[33]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Identifying sensory triggers and early warning signs of overload</li>
            <li className="mb-2">Developing personalized coping strategies</li>
            <li className="mb-2">Gradual exposure to challenging sensory experiences (when appropriate)</li>
            <li className="mb-2">Mindfulness and relaxation techniques<sup>[34]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Feeding Interventions</h3>
          <p className="mb-4">
            For individuals with sensory-related feeding difficulties, specialized occupational or speech therapy may address:<sup>[35]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Gradual exposure to new textures, tastes, and smells</li>
            <li className="mb-2">Oral-motor skills and oral sensory processing</li>
            <li className="mb-2">Creating positive mealtime experiences</li>
            <li className="mb-2">Addressing underlying sensory sensitivities affecting eating</li>
          </ul>
        </div>

        {/* Assistive Technology and Tools Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assistive Technology and Sensory Tools</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1609619385002-f40334e87889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwa2lkfGVufDF8fHx8MTczNjgwNjQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child with sensory tools"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Various tools and technologies can support sensory processing needs:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Noise-canceling or noise-reducing headphones<sup>[1]</sup></li>
            <li className="mb-2">White noise machines or apps</li>
            <li className="mb-2">Earplugs for overwhelming environments</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Tactile Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Fidget tools (spinners, stress balls, textured objects)</li>
            <li className="mb-2">Chewable jewelry or pencil toppers for oral sensory needs</li>
            <li className="mb-2">Compression clothing or weighted items</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Movement and Vestibular Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Rocking chairs or therapy balls for seating<sup>[31]</sup></li>
            <li className="mb-2">Wobble cushions or balance discs</li>
            <li className="mb-2">Mini trampolines for movement breaks</li>
          </ul>
        </div>

        {/* Family and Caregiver Support Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Supporting Families and Caregivers</h2>
          
          <p className="mb-4">
            Supporting the family is an essential component of intervention:<sup>[36]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Education:</strong> Helping families understand sensory processing differences and 
            how SPD affects the individual<sup>[20]</sup></li>
            <li className="mb-2"><strong>Strategy Development:</strong> Teaching parents and caregivers sensory strategies, environmental 
            modifications, and regulation techniques<sup>[26]</sup></li>
            <li className="mb-2"><strong>Emotional Support:</strong> Acknowledging the challenges families face and connecting them 
            with support resources<sup>[28]</sup></li>
            <li className="mb-2"><strong>Advocacy Training:</strong> Empowering families to advocate for appropriate services and 
            accommodations in educational and community settings</li>
          </ul>
        </div>

        {/* Collaborative Care Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Collaborative and Interdisciplinary Care</h2>
          
          <p className="mb-4">
            Comprehensive support often involves collaboration among multiple professionals and settings:<sup>[30]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Occupational therapists leading sensory integration intervention</li>
            <li className="mb-2">Psychologists addressing co-occurring anxiety, behavioral concerns, or other mental health needs</li>
            <li className="mb-2">Communication between home, school, and therapy providers to ensure consistency<sup>[26]</sup></li>
            <li className="mb-2">Speech-language pathologists for feeding or oral-motor difficulties</li>
            <li className="mb-2">Educational teams implementing appropriate classroom supports and IEP/504 accommodations<sup>[27]</sup></li>
            <li className="mb-2">Physical therapists for gross motor and vestibular concerns</li>
          </ul>
        </div>

        {/* Important Considerations Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Important Considerations in Intervention</h2>
          
          <p className="mb-4">
            Several principles guide effective intervention for SPD:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Individualized:</strong> Intervention must be tailored to the individual's unique sensory 
            profile, needs, and goals<sup>[5]</sup></li>
            <li className="mb-2"><strong>Family-Centered:</strong> Families are partners in the intervention process, with goals 
            reflecting family priorities<sup>[37]</sup></li>
            <li className="mb-2"><strong>Evidence-Informed:</strong> Interventions should be based on current research evidence and 
            best practices, with ongoing assessment of effectiveness</li>
            <li className="mb-2"><strong>Functional Focus:</strong> Intervention targets meaningful participation in daily activities 
            and quality of life improvements</li>
            <li className="mb-2"><strong>Ongoing Assessment:</strong> Regular monitoring and adjustment of strategies based on progress 
            and implementation<sup>[28]</sup></li>
            <li className="mb-2"><strong>Holistic:</strong> Considering sensory processing within the context of the whole person, 
            including strengths, interests, and co-occurring conditions</li>
          </ul>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Schaaf, R. C., & Miller, L. J. (2005). "Occupational therapy using a sensory integrative approach for children with developmental disabilities." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 11(2), 143-148.</p>
          <p>[2] Parham, L. D., & Mailloux, Z. (2015). "Sensory integration." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational Therapy for Children and Adolescents</em> (7th ed., pp. 258-303). St. Louis: Elsevier.</p>
          <p>[3] Schaaf, R. C., Benevides, T., Mailloux, Z., et al. (2014). "An intervention for sensory difficulties in children with autism: A randomized trial." <em>Journal of Autism and Developmental Disorders</em>, 44(7), 1493-1506.</p>
          <p>[4] Williams, M. S., & Shellenberger, S. (1996). <em>How Does Your Engine Run? A Leader's Guide to the Alert Program for Self-Regulation</em>. Albuquerque, NM: TherapyWorks.</p>
          <p>[5] Miller, L. J., Coll, J. R., & Schoen, S. A. (2007). "A randomized controlled pilot study of the effectiveness of occupational therapy for children with sensory modulation disorder." <em>American Journal of Occupational Therapy</em>, 61(2), 228-238.</p>
          <p>[6] Ayres, A. J. (1972). <em>Sensory Integration and Learning Disorders</em>. Los Angeles: Western Psychological Services.</p>
          <p>[7] Parham, L. D., Roley, S. S., May-Benson, T. A., et al. (2011). "Development of a fidelity measure for research on the effectiveness of the Ayres Sensory Integration intervention." <em>American Journal of Occupational Therapy</em>, 65(2), 133-142.</p>
          <p>[8] Ayres, A. J. (1979). <em>Sensory Integration and the Child</em>. Los Angeles: Western Psychological Services.</p>
          <p>[9] Bundy, A. C., Lane, S. J., & Murray, E. A. (2002). <em>Sensory Integration: Theory and Practice</em> (2nd ed.). Philadelphia: F.A. Davis Company.</p>
          <p>[10] Schaaf, R. C., & Nightlinger, K. M. (2007). "Occupational therapy using a sensory integrative approach: A case study of effectiveness." <em>American Journal of Occupational Therapy</em>, 61(2), 239-246.</p>
          <p>[11] May-Benson, T. A., & Koomar, J. A. (2010). "Systematic review of the research evidence examining the effectiveness of interventions using a sensory integrative approach for children." <em>American Journal of Occupational Therapy</em>, 64(3), 403-414.</p>
          <p>[18] Wilbarger, P., & Wilbarger, J. L. (1991). <em>Sensory Defensiveness in Children Aged 2-12: An Intervention Guide for Parents and Other Caretakers</em>. Santa Barbara, CA: Avanti Educational Programs.</p>
          <p>[20] Kranowitz, C. S. (2005). <em>The Out-of-Sync Child: Recognizing and Coping with Sensory Processing Disorder</em>. New York: Penguin.</p>
          <p>[22] Williams, M. S., & Shellenberger, S. (1994). "How Does Your Engine Run? The Alert Program for Self-Regulation." <em>Therapy Skill Builders</em>.</p>
          <p>[23] Bagatell, N., Mirigliani, G., Patterson, C., Reyes, Y., & Test, L. (2010). "Effectiveness of therapy ball chairs on classroom participation in children with autism spectrum disorders." <em>American Journal of Occupational Therapy</em>, 64(6), 895-903.</p>
          <p>[24] Cermak, S. A., Curtin, C., & Bandini, L. G. (2010). "Food selectivity and sensory sensitivity in children with autism spectrum disorders." <em>Journal of the American Dietetic Association</em>, 110(2), 238-246.</p>
          <p>[26] Dunn, W., Cox, J., Foster, L., Mische-Lawson, L., & Tanquary, J. (2012). "Impact of a contextual intervention on child participation and parent competence among children with autism spectrum disorders: A pretest-posttest repeated-measures design." <em>American Journal of Occupational Therapy</em>, 66(5), 520-528.</p>
          <p>[27] Ashburner, J., Ziviani, J., & Rodger, S. (2008). "Sensory processing and classroom emotional, behavioral, and educational outcomes in children with autism spectrum disorder." <em>American Journal of Occupational Therapy</em>, 62(5), 564-573.</p>
          <p>[28] Bagby, M. S., Dickie, V. A., & Baranek, G. T. (2012). "How sensory experiences of children with and without autism affect family occupations." <em>American Journal of Occupational Therapy</em>, 66(1), 78-86.</p>
          <p>[29] Roley, S. S., Mailloux, Z., Miller-Kuhaneck, H., & Glennon, T. (2007). "Understanding Ayres Sensory Integration." <em>OT Practice</em>, 12(17), CE1-CE8.</p>
          <p>[30] Case-Smith, J., & Arbesman, M. (2008). "Evidence-based review of interventions for autism used in or of relevance to occupational therapy." <em>American Journal of Occupational Therapy</em>, 62(4), 416-429.</p>
          <p>[31] Schilling, D. L., Washington, K., Billingsley, F. F., & Deitz, J. (2003). "Classroom seating for children with attention deficit hyperactivity disorder: Therapy balls versus chairs." <em>American Journal of Occupational Therapy</em>, 57(5), 534-541.</p>
          <p>[32] VandenBerg, N. L. (2001). "The use of a weighted vest to increase on-task behavior in children with attention difficulties." <em>American Journal of Occupational Therapy</em>, 55(6), 621-628.</p>
          <p>[33] Reynolds, S., & Lane, S. J. (2009). "Sensory overresponsivity and anxiety in children with ADHD." <em>American Journal of Occupational Therapy</em>, 63(4), 433-440.</p>
          <p>[34] Champagne, T. (2011). "Sensory modulation and environment: Essential elements of occupation." <em>Pearson</em>.</p>
          <p>[35] Toomey, K. A., & Ross, E. S. (2011). "SOS Approach to Feeding." <em>Perspectives on Swallowing and Swallowing Disorders (Dysphagia)</em>, 20(3), 82-87.</p>
          <p>[36] Miller, L. J., Nielsen, D. M., Schoen, S. A., & Brett-Green, B. A. (2009). "Perspectives on sensory processing disorder: A call for translational research." <em>Frontiers in Integrative Neuroscience</em>, 3, 22.</p>
          <p>[37] Dunst, C. J., Trivette, C. M., & Hamby, D. W. (2007). "Meta-analysis of family-centered help giving practices research." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 13(4), 370-378.</p>
        </div>
      </section>
    </article>
  );
}
