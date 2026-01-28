import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SPDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function SPDSymptoms({ setCurrentArticle }: SPDSymptomsProps) {
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
        SPD: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        {/* Introduction Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding Sensory Processing Differences</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1618382521478-a0bfaf1a7604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zb3J5JTIwb3ZlcmxvYWQlMjBjb3ZlcmluZyUyMGVhcnN8ZW58MXx8fHwxNzY3NDA2NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Person experiencing sensory overload"
            className="w-96 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Sensory Processing Disorder manifests in diverse ways, affecting how individuals experience and respond to sensory 
            input from their environment and their own bodies.<sup>[1][2]</sup> The symptoms and characteristics of SPD vary 
            widely based on which sensory systems are affected, the type of processing difficulty (over-responsivity, under-responsivity, 
            or discrimination challenges), and individual differences in coping strategies.<sup>[3]</sup>
          </p>
          <p className="mb-4">
            It's important to recognize that sensory processing exists on a continuum, with everyone experiencing occasional 
            sensory sensitivities or preferences.<sup>[4]</sup> SPD is diagnosed when sensory processing differences significantly 
            interfere with daily functioning, participation in activities, emotional regulation, or quality of life.<sup>[5]</sup>
          </p>
        </div>

        {/* Sensory Over-Responsivity Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sensory Over-Responsivity (Hypersensitivity)</h2>
          
          <p className="mb-4">
            Sensory over-responsivity (SOR) occurs when the nervous system responds too strongly, too quickly, or for too long 
            to sensory stimuli that most people find tolerable or even pleasant.<sup>[6][7]</sup> Individuals with SOR may describe 
            ordinary sensations as overwhelming, painful, or intolerable. This heightened sensitivity can affect one or multiple 
            sensory systems.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Tactile Over-Responsivity</h3>
          <p className="mb-4">
            Tactile defensiveness, a term coined by occupational therapist Patricia Wilbarger, describes extreme sensitivity to 
            touch sensations.<sup>[9]</sup> Common manifestations include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Extreme discomfort with clothing tags, seams, or certain fabric textures</li>
            <li className="mb-2">Avoidance of being touched, especially light or unexpected touch<sup>[10]</sup></li>
            <li className="mb-2">Difficulty with grooming tasks like haircuts, nail trimming, or teeth brushing</li>
            <li className="mb-2">Strong preferences for specific clothing textures or styles</li>
            <li className="mb-2">Distress with messy activities like finger painting or playing in sand<sup>[11]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Over-Responsivity</h3>
          <p className="mb-4">
            Auditory over-responsivity involves heightened sensitivity to sounds:<sup>[12]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Covering ears in response to everyday sounds (vacuum cleaners, hand dryers, fire alarms)</li>
            <li className="mb-2">Distress in noisy environments like cafeterias or shopping centers</li>
            <li className="mb-2">Difficulty filtering background noise from important sounds<sup>[13]</sup></li>
            <li className="mb-2">Strong startle responses to unexpected sounds</li>
            <li className="mb-2">Discomfort with music, singing, or voices at certain pitches</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Over-Responsivity</h3>
          <p className="mb-4">
            Visual sensitivities may include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Discomfort or pain in bright lights or sunlight</li>
            <li className="mb-2">Preference for dim lighting</li>
            <li className="mb-2">Difficulty with fluorescent lighting<sup>[14]</sup></li>
            <li className="mb-2">Sensitivity to visual clutter or busy patterns</li>
            <li className="mb-2">Squinting or rubbing eyes frequently</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Olfactory and Gustatory Over-Responsivity</h3>
          <p className="mb-4">
            Over-sensitivity to smells and tastes can significantly impact eating and daily routines:<sup>[15]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Extreme reactions to smells that others barely notice</li>
            <li className="mb-2">Nausea or gagging in response to certain odors</li>
            <li className="mb-2">Highly restricted diet due to texture, taste, or smell sensitivities<sup>[16]</sup></li>
            <li className="mb-2">Difficulty eating in spaces with strong food smells</li>
            <li className="mb-2">Avoidance of certain locations due to characteristic smells</li>
          </ul>
        </div>

        {/* Sensory Under-Responsivity Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sensory Under-Responsivity (Hyposensitivity)</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1533854775446-95c4609da544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBsYXklMjBhY3RpdmV8ZW58MXx8fHwxNzM2ODA2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child engaged in active play"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Sensory under-responsivity (SUR) occurs when the nervous system requires more intense sensory input to register 
            sensations.<sup>[17]</sup> Individuals with SUR may appear passive, withdrawn, or unaware of sensory information that 
            others readily notice. They may have diminished responses to pain, temperature, or other important sensory cues.<sup>[7]</sup>
          </p>
          <p className="mb-4">
            Common characteristics of sensory under-responsivity include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">High pain threshold—may not notice injuries or seem unusually tolerant of pain</li>
            <li className="mb-2">Difficulty detecting hunger, thirst, or need to use the bathroom<sup>[18]</sup></li>
            <li className="mb-2">Slow to respond when called or touched</li>
            <li className="mb-2">Seems unaware of faces being dirty or clothes being twisted</li>
            <li className="mb-2">Difficulty detecting temperature changes (hot or cold)</li>
            <li className="mb-2">May not notice strong smells</li>
            <li className="mb-2">Appears lethargic or disengaged from surroundings<sup>[1]</sup></li>
          </ul>
        </div>

        {/* Sensory Seeking Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sensory Seeking/Craving</h2>
          
          <p className="mb-4">
            Sensory seeking behavior reflects an intense drive for sensory input.<sup>[4]</sup> While related to under-responsivity, 
            sensory seeking is characterized by active pursuit of sensory experiences rather than passive lack of response. 
            Individuals may engage in intense sensory behaviors to satisfy their sensory needs.<sup>[19]</sup>
          </p>
          <p className="mb-4">
            Common sensory-seeking behaviors include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Constantly touching objects, people, or textures</li>
            <li className="mb-2">Seeking deep pressure through tight hugs, being wrapped in blankets, or compression<sup>[20]</sup></li>
            <li className="mb-2">Excessive movement—jumping, spinning, crashing, rocking</li>
            <li className="mb-2">Making repetitive noises or seeking loud environments</li>
            <li className="mb-2">Preference for strong flavors and intense tastes</li>
            <li className="mb-2">Chewing on non-food items (clothing, pencils, toys)</li>
            <li className="mb-2">Difficulty sitting still; always in motion<sup>[11]</sup></li>
            <li className="mb-2">Risk-taking behaviors to get intense sensory input</li>
          </ul>
        </div>

        {/* Sensory Discrimination Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sensory Discrimination Difficulties</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGdyb3VwJTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc2NzQwNjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Children engaged in activities requiring sensory discrimination"
            className="w-80 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <p className="mb-4">
            Sensory discrimination disorder involves difficulty interpreting the specific qualities or characteristics of sensory 
            input—the ability to distinguish between similar sensations or identify the precise nature of sensory information.<sup>[21]</sup> 
            This can affect any sensory system and significantly impact motor skills, body awareness, and functional performance.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Tactile Discrimination Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty identifying objects by touch alone (stereognosis)<sup>[22]</sup></li>
            <li className="mb-2">Challenges distinguishing between similar textures</li>
            <li className="mb-2">Trouble locating exactly where on the body one was touched</li>
            <li className="mb-2">Difficulty with fine motor tasks requiring tactile feedback (buttons, zippers)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Proprioceptive Discrimination Challenges</h3>
          <p className="mb-4">
            Poor proprioceptive discrimination affects body awareness and motor control:<sup>[23]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Clumsiness and frequent bumping into things</li>
            <li className="mb-2">Difficulty grading force (writing too hard, breaking toys, rough with pets)</li>
            <li className="mb-2">Poor body awareness—difficulty knowing where body parts are in space<sup>[24]</sup></li>
            <li className="mb-2">Challenges with motor planning and coordination</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Vestibular Discrimination Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty with balance and coordination<sup>[25]</sup></li>
            <li className="mb-2">Uncertainty about body position in space</li>
            <li className="mb-2">Challenges with activities requiring balance (bike riding, climbing)</li>
            <li className="mb-2">Motion sickness or fear of movement</li>
          </ul>
        </div>

        {/* Motor Impacts Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sensory-Based Motor Difficulties</h2>
          
          <p className="mb-4">
            Sensory processing differences often impact motor skills, as the brain relies on accurate sensory information to 
            plan and execute movements.<sup>[26][27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Postural Disorder</h3>
          <p className="mb-4">
            Postural disorder involves difficulty stabilizing the body during movement and maintaining appropriate muscle tone:<sup>[28]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Poor posture, often slumping or leaning on furniture</li>
            <li className="mb-2">Tires easily during physical activities</li>
            <li className="mb-2">Low muscle tone or weak core muscles</li>
            <li className="mb-2">Difficulty maintaining positions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dyspraxia (Motor Planning Difficulties)</h3>
          <p className="mb-4">
            Dyspraxia, also called developmental coordination disorder, involves difficulty planning and sequencing motor actions:<sup>[29]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty learning new motor skills</li>
            <li className="mb-2">Challenges with tasks requiring multiple steps in sequence</li>
            <li className="mb-2">Poor handwriting and difficulty with drawing<sup>[30]</sup></li>
            <li className="mb-2">Awkwardness with sports or physical activities</li>
            <li className="mb-2">Trouble imitating movements or gestures</li>
          </ul>
        </div>

        {/* Emotional and Behavioral Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional and Behavioral Responses</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGVtb3Rpb24lMjB1cHNldHxlbnwxfHx8fDE3MzY4MDY0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Emotional response to sensory challenges"
            className="w-96 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Sensory processing differences frequently impact emotional regulation and behavior. The connection between sensory 
            experiences and emotional responses is significant and well-documented.<sup>[12][8]</sup>
          </p>
          <p className="mb-4">
            Common emotional and behavioral manifestations include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Meltdowns or emotional outbursts in response to sensory overload<sup>[31]</sup></li>
            <li className="mb-2">Anxiety, particularly in new or unpredictable sensory environments</li>
            <li className="mb-2">Avoidance behaviors—refusing to participate in activities due to sensory concerns<sup>[32]</sup></li>
            <li className="mb-2">Difficulty with transitions, especially involving sensory changes</li>
            <li className="mb-2">Irritability or mood changes related to sensory experiences</li>
            <li className="mb-2">Social withdrawal due to sensory discomfort in group settings<sup>[5]</sup></li>
            <li className="mb-2">Sleep difficulties related to sensory sensitivities<sup>[33]</sup></li>
          </ul>
        </div>

        {/* Impact on Daily Activities Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impact on Daily Activities</h2>
          
          <p className="mb-4">
            Sensory processing differences affect participation in everyday activities across multiple domains of life.<sup>[34]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Care and Daily Routines</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Resistance to bathing or showering due to water temperature or pressure sensitivities</li>
            <li className="mb-2">Difficulty with grooming tasks (hair brushing, nail trimming, teeth brushing)<sup>[35]</sup></li>
            <li className="mb-2">Challenges with dressing, particularly with certain fabrics or tight clothing</li>
            <li className="mb-2">Picky eating related to texture, taste, or smell sensitivities<sup>[16]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School and Learning</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty attending and concentrating in sensory-rich classrooms<sup>[31]</sup></li>
            <li className="mb-2">Challenges with handwriting due to poor motor control or tactile sensitivity</li>
            <li className="mb-2">Behavioral difficulties in response to sensory overload</li>
            <li className="mb-2">Avoidance of messy art activities or science experiments</li>
            <li className="mb-2">Difficulty in physical education or recess activities<sup>[36]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Participation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Avoidance of group activities due to sensory demands</li>
            <li className="mb-2">Difficulty with birthday parties, sporting events, or other social gatherings<sup>[5]</sup></li>
            <li className="mb-2">Challenges with reciprocal play requiring physical contact</li>
            <li className="mb-2">Misunderstandings with peers due to sensory-related behaviors</li>
          </ul>
        </div>

        {/* Individual Variation Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Individual Variation and Complexity</h2>
          
          <p className="mb-4">
            It's crucial to recognize that SPD presents differently in each individual. Most people with SPD experience a mix 
            of patterns—they might be over-responsive to some sensory inputs while under-responsive to others.<sup>[3]</sup> Sensory 
            responses can also fluctuate based on factors like stress, fatigue, illness, or environmental context.<sup>[1]</sup>
          </p>
          <p className="mb-4">
            Understanding an individual's specific sensory profile—which systems are affected, how they're affected, and what 
            environmental or internal factors influence responses—is essential for providing appropriate support and developing 
            effective coping strategies.<sup>[37]</sup>
          </p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Miller, L. J., Anzalone, M. E., Lane, S. J., Cermak, S. A., & Osten, E. T. (2007). "Concept evolution in sensory integration: A proposed nosology for diagnosis." <em>American Journal of Occupational Therapy</em>, 61(2), 135-140.</p>
          <p>[2] Ayres, A. J. (1979). <em>Sensory Integration and the Child</em>. Los Angeles: Western Psychological Services.</p>
          <p>[3] Dunn, W. (2001). "The sensations of everyday life: Empirical, theoretical, and pragmatic considerations." <em>American Journal of Occupational Therapy</em>, 55(6), 608-620.</p>
          <p>[4] Dunn, W. (1997). "The impact of sensory processing abilities on the daily lives of young children and their families: A conceptual model." <em>Infants & Young Children</em>, 9(4), 23-35.</p>
          <p>[5] Bar-Shalita, T., Vatine, J. J., & Parush, S. (2008). "Sensory modulation disorder: A risk factor for participation in daily life activities." <em>Developmental Medicine & Child Neurology</em>, 50(12), 932-937.</p>
          <p>[6] Schoen, S. A., Miller, L. J., Brett-Green, B. A., & Nielsen, D. M. (2009). "Physiological and behavioral differences in sensory processing: A comparison of children with autism spectrum disorder and sensory modulation disorder." <em>Frontiers in Integrative Neuroscience</em>, 3, 29.</p>
          <p>[7] Reynolds, S., & Lane, S. J. (2008). "Diagnostic validity of sensory over-responsivity: A review of the literature and case reports." <em>Journal of Autism and Developmental Disorders</em>, 38(3), 516-529.</p>
          <p>[8] Ben-Sasson, A., Carter, A. S., & Briggs-Gowan, M. J. (2009). "Sensory over-responsivity in elementary school: Prevalence and social-emotional correlates." <em>Journal of Abnormal Child Psychology</em>, 37(5), 705-716.</p>
          <p>[9] Wilbarger, P., & Wilbarger, J. L. (1991). <em>Sensory Defensiveness in Children Aged 2-12: An Intervention Guide for Parents and Other Caretakers</em>. Santa Barbara, CA: Avanti Educational Programs.</p>
          <p>[10] Royeen, C. B., & Lane, S. J. (1991). "Tactile processing and sensory defensiveness." In A. G. Fisher, E. A. Murray, & A. C. Bundy (Eds.), <em>Sensory Integration: Theory and Practice</em> (pp. 108-133). Philadelphia: F.A. Davis.</p>
          <p>[11] Baranek, G. T., David, F. J., Poe, M. D., Stone, W. L., & Watson, L. R. (2006). "Sensory Experiences Questionnaire: Discriminating sensory features in young children with autism, developmental delays, and typical development." <em>Journal of Child Psychology and Psychiatry</em>, 47(6), 591-601.</p>
          <p>[12] Lane, S. J., Reynolds, S., & Thacker, L. (2010). "Sensory over-responsivity and ADHD: Differentiating using electrodermal responses, cortisol, and anxiety." <em>Frontiers in Integrative Neuroscience</em>, 4, 8.</p>
          <p>[13] Davies, P. L., & Gavin, W. J. (2007). "Validating the diagnosis of sensory processing disorders using EEG technology." <em>American Journal of Occupational Therapy</em>, 61(2), 176-189.</p>
          <p>[14] Wilkins, A. J. (1995). <em>Visual Stress</em>. Oxford: Oxford University Press.</p>
          <p>[15] Farrow, C. V., & Coulthard, H. (2012). "Relationships between sensory sensitivity, anxiety and selective eating in children." <em>Appetite</em>, 58(3), 842-846.</p>
          <p>[16] Cermak, S. A., Curtin, C., & Bandini, L. G. (2010). "Food selectivity and sensory sensitivity in children with autism spectrum disorders." <em>Journal of the American Dietetic Association</em>, 110(2), 238-246.</p>
          <p>[17] Dunn, W., & Bennett, D. (2002). "Patterns of sensory processing in children with attention deficit hyperactivity disorder." <em>OTJR: Occupation, Participation and Health</em>, 22(1), 4-15.</p>
          <p>[18] Mahler, K. (2015). <em>Interoception: The Eighth Sensory System</em>. Shawnee Mission, KS: AAPC Publishing.</p>
          <p>[19] Schaaf, R. C., & Miller, L. J. (2005). "Occupational therapy using a sensory integrative approach for children with developmental disabilities." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 11(2), 143-148.</p>
          <p>[20] Edelson, S. M., Edelson, M. G., Kerr, D. C., & Grandin, T. (1999). "Behavioral and physiological effects of deep pressure on children with autism: A pilot study evaluating the efficacy of Grandin's Hug Machine." <em>American Journal of Occupational Therapy</em>, 53(2), 145-152.</p>
          <p>[21] Ayres, A. J. (1989). <em>Sensory Integration and Praxis Tests (SIPT)</em>. Los Angeles: Western Psychological Services.</p>
          <p>[22] Ayres, A. J. (1972). "Types of sensory integrative dysfunction among disabled learners." <em>American Journal of Occupational Therapy</em>, 26(1), 13-18.</p>
          <p>[23] Blanche, E. I., Reinoso, G., Chang, M. C., & Bodison, S. (2012). "Proprioceptive processing difficulties among children with autism spectrum disorders and developmental disabilities." <em>American Journal of Occupational Therapy</em>, 66(5), 621-624.</p>
          <p>[24] Blanche, E. I., Bodison, S., Chang, M. C., & Reinoso, G. (2012). "Development of the Comprehensive Observations of Proprioception (COP): Validity and reliability evidence." <em>American Journal of Occupational Therapy</em>, 66(6), 691-698.</p>
          <p>[25] Mulligan, S. (1998). "Patterns of sensory integration dysfunction: A confirmatory factor analysis." <em>American Journal of Occupational Therapy</em>, 52(10), 819-828.</p>
          <p>[26] Cermak, S. A., & Larkin, D. (2002). "Developmental coordination disorder." In A. C. Bundy, S. J. Lane, & E. A. Murray (Eds.), <em>Sensory Integration: Theory and Practice</em> (2nd ed., pp. 215-248). Philadelphia: F.A. Davis.</p>
          <p>[27] Parham, L. D., & Mailloux, Z. (2015). "Sensory integration." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational Therapy for Children and Adolescents</em> (7th ed., pp. 258-303). St. Louis: Elsevier.</p>
          <p>[28] Bundy, A. C., Lane, S. J., & Murray, E. A. (2002). <em>Sensory Integration: Theory and Practice</em> (2nd ed.). Philadelphia: F.A. Davis Company.</p>
          <p>[29] Ayres, A. J. (1985). "Developmental dyspraxia and adult-onset apraxia." <em>Sensory Integration International</em>.</p>
          <p>[30] Rosenblum, S., Weiss, P. L., & Parush, S. (2003). "Product and process evaluation of handwriting difficulties." <em>Educational Psychology Review</em>, 15(1), 41-81.</p>
          <p>[31] Ashburner, J., Ziviani, J., & Rodger, S. (2008). "Sensory processing and classroom emotional, behavioral, and educational outcomes in children with autism spectrum disorder." <em>American Journal of Occupational Therapy</em>, 62(5), 564-573.</p>
          <p>[32] Cosbey, J., Johnston, S. S., & Dunn, M. L. (2010). "Sensory processing disorders and social participation." <em>American Journal of Occupational Therapy</em>, 64(3), 462-473.</p>
          <p>[33] Reynolds, S., Lane, S. J., & Thacker, L. (2012). "Sensory processing, physiological stress, and sleep behaviors in children with and without autism spectrum disorders." <em>OTJR: Occupation, Participation and Health</em>, 32(1), 246-257.</p>
          <p>[34] Dunn, W., Myles, B. S., & Orr, S. (2002). "Sensory processing issues associated with Asperger syndrome: A preliminary investigation." <em>American Journal of Occupational Therapy</em>, 56(1), 97-102.</p>
          <p>[35] Case-Smith, J., & Arbesman, M. (2008). "Evidence-based review of interventions for autism used in or of relevance to occupational therapy." <em>American Journal of Occupational Therapy</em>, 62(4), 416-429.</p>
          <p>[36] Roley, S. S., Mailloux, Z., Miller-Kuhaneck, H., & Glennon, T. (2007). "Understanding Ayres Sensory Integration." <em>OT Practice</em>, 12(17), CE1-CE8.</p>
          <p>[37] Dunn, W. (2014). <em>Sensory Profile 2: User's Manual</em>. Bloomington, MN: Pearson.</p>
        </div>
      </section>
    </article>
  );
}
