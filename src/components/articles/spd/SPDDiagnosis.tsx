import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SPDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function SPDDiagnosis({ setCurrentArticle }: SPDDiagnosisProps) {
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
        SPD: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        {/* Introduction Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessment of Sensory Processing Disorder</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1709127347884-a106974ef58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2N1cGF0aW9uYWwlMjB0aGVyYXB5JTIwY2hpbGQlMjBhc3Nlc3NtZW50fGVufDF8fHx8MTc2NzQwNjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Occupational therapy assessment"
            className="w-96 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            The assessment and diagnosis of Sensory Processing Disorder involves a comprehensive evaluation of how an individual 
            receives, processes, and responds to sensory information across all sensory systems.<sup>[1][2]</sup> Evaluation is 
            typically conducted by occupational therapists with specialized training in sensory integration, though other 
            professionals may also contribute to the assessment process.<sup>[3]</sup>
          </p>
          <p className="mb-4">
            It's important to note that SPD is not currently included as a distinct diagnosis in the DSM-5 or ICD-11 diagnostic 
            manuals.<sup>[4]</sup> However, sensory processing differences are widely recognized by occupational therapists and 
            other professionals, and comprehensive assessment protocols have been developed to identify and characterize sensory 
            processing challenges.<sup>[1][2]</sup>
          </p>
        </div>

        {/* Who Conducts Assessments Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessment Professionals</h2>
          
          <p className="mb-4">
            Several types of professionals may be involved in evaluating sensory processing:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Occupational Therapists</h3>
          <p className="mb-4">
            Occupational therapists (OTs), particularly those with specialized training in sensory integration, are the primary 
            professionals who assess and diagnose SPD.<sup>[5]</sup> Many OTs pursue advanced certification in Ayres Sensory 
            Integration® (ASI) or complete extensive continuing education in sensory processing assessment and intervention.<sup>[6]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Other Professionals</h3>
          <p className="mb-4">
            Depending on the individual and presenting concerns, other professionals may contribute to the evaluation:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Psychologists:</strong> May assess for co-occurring conditions like ADHD, anxiety, or autism</li>
            <li className="mb-2"><strong>Speech-Language Pathologists:</strong> May evaluate oral-motor and feeding difficulties related to sensory processing</li>
            <li className="mb-2"><strong>Physical Therapists:</strong> May assess vestibular and proprioceptive functions affecting movement and balance</li>
            <li className="mb-2"><strong>Developmental Pediatricians:</strong> May coordinate comprehensive evaluations and rule out medical conditions<sup>[7]</sup></li>
          </ul>
        </div>

        {/* Assessment Components Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Components of Comprehensive Assessment</h2>
          
          <p className="mb-4">
            A thorough sensory processing evaluation includes multiple components to build a complete picture of an individual's 
            sensory profile:<sup>[1]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental and Sensory History</h3>
          <p className="mb-4">
            The assessment begins with gathering detailed information about:<sup>[8]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Developmental milestones and early sensory behaviors</li>
            <li className="mb-2">Prenatal, birth, and medical history</li>
            <li className="mb-2">Current sensory concerns across different environments (home, school, community)</li>
            <li className="mb-2">Daily routines and how sensory issues impact functioning</li>
            <li className="mb-2">Family history of sensory sensitivities or related conditions</li>
            <li className="mb-2">Previous interventions and their outcomes</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Standardized Questionnaires and Scales</h3>
          <p className="mb-4">
            Several validated assessment tools help identify and characterize sensory processing patterns:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Sensory Profile 2:</strong> A comprehensive questionnaire completed by caregivers that measures 
            sensory processing patterns across multiple contexts for individuals from birth through adulthood.<sup>[9]</sup> It 
            identifies patterns related to sensory modulation, discrimination, and sensory-based motor abilities.</li>
            <li className="mb-2"><strong>Sensory Processing Measure (SPM):</strong> Evaluates sensory processing, praxis, and social 
            participation in both home and school environments.<sup>[10]</sup></li>
            <li className="mb-2"><strong>Sensory Experiences Questionnaire (SEQ):</strong> Designed for young children, particularly 
            useful in research and clinical assessment of sensory features.<sup>[11]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Clinical Observations</h3>
          <p className="mb-4">
            Direct observation of the individual interacting with sensory experiences provides crucial assessment information:<sup>[3]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Responses to various sensory stimuli (tactile, auditory, visual, vestibular, proprioceptive)</li>
            <li className="mb-2">Self-regulation strategies and behaviors</li>
            <li className="mb-2">Motor coordination and praxis abilities</li>
            <li className="mb-2">Attention and arousal levels across activities</li>
            <li className="mb-2">Adaptive responses to sensory challenges<sup>[8]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Standardized Performance Assessments</h3>
          <p className="mb-4">
            For in-depth assessment, particularly for research or complex presentations, occupational therapists may use:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Sensory Integration and Praxis Tests (SIPT):</strong> A comprehensive battery of 17 tests 
            measuring various aspects of sensory integration and praxis for children ages 4-8 years.<sup>[12]</sup> Requires 
            specialized certification to administer and interpret.</li>
            <li className="mb-2"><strong>Evaluation in Ayres Sensory Integration (EASI):</strong> A newer assessment tool designed 
            to measure fidelity to Ayres Sensory Integration intervention principles and evaluate intervention outcomes.<sup>[13]</sup></li>
            <li className="mb-2">Praxis (motor planning) abilities<sup>[12]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Test of Sensory Functions in Infants (TSFI)</h3>
          <p className="mb-4">
            For infants and very young children, the TSFI assesses sensory processing and reactivity in children ages 4-18 months.<sup>[14]</sup>
          </p>
        </div>

        {/* Environmental Assessment Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental and Functional Assessment</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGdyb3VwJTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc2NzQwNjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Children in various environments"
            className="w-80 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <p className="mb-4">
            Assessment of how sensory processing affects daily life and participation is crucial:<sup>[15][16]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Observation in natural environments (home, school, community)</li>
            <li className="mb-2">Assessment of participation in age-appropriate activities</li>
            <li className="mb-2">Impact on self-care, play, learning, and social interactions<sup>[17]</sup></li>
            <li className="mb-2">Environmental factors that support or challenge sensory processing</li>
            <li className="mb-2">Family and cultural considerations in sensory experiences</li>
          </ul>
        </div>

        {/* Differential Diagnosis Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Differential Diagnosis and Co-occurring Conditions</h2>
          
          <p className="mb-4">
            A comprehensive assessment considers the relationship between sensory processing differences and other conditions, 
            screening for related diagnoses:<sup>[2]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Autism Spectrum Disorder:</strong> Sensory processing differences are common in autism, 
            and assessment should clarify whether SPD occurs independently or as part of autism.<sup>[18][19]</sup></li>
            <li className="mb-2"><strong>ADHD:</strong> Both conditions involve attention, impulse control, sensory modulation, 
            and regulation challenges.<sup>[20][21]</sup></li>
            <li className="mb-2"><strong>Anxiety Disorders:</strong> Sensory sensitivities can contribute to anxiety, and anxiety 
            can increase sensory reactivity.<sup>[22]</sup></li>
            <li className="mb-2"><strong>Developmental Coordination Disorder:</strong> Motor difficulties may stem from sensory-based 
            motor challenges or other developmental issues.</li>
            <li className="mb-2"><strong>Hearing or Vision Problems:</strong> Ruling out sensory impairments is essential.</li>
          </ul>
        </div>

        {/* Diagnostic Criteria Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Considerations</h2>
          
          <p className="mb-4">
            While SPD is not in the DSM-5, researchers and clinicians have proposed diagnostic criteria. Miller and 
            colleagues outlined criteria for diagnosing SPD subtypes:<sup>[2]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Sensory processing difficulties that interfere with participation in daily activities</li>
            <li className="mb-2">Patterns consistent with one or more SPD subtypes (modulation, discrimination, motor)</li>
            <li className="mb-2">Measurable differences on standardized sensory processing assessments<sup>[1]</sup></li>
            <li className="mb-2">Symptoms not better explained by other conditions</li>
            <li className="mb-2">Duration of symptoms (typically present for at least 6 months)</li>
          </ul>
        </div>

        {/* Assessment Process Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Assessment Process</h2>
          
          <p className="mb-4">
            Comprehensive sensory processing assessment typically unfolds over multiple sessions:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Initial Consultation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Detailed interview with parents/caregivers about sensory concerns</li>
            <li className="mb-2">Review of developmental and medical history</li>
            <li className="mb-2">Discussion of family priorities and goals for assessment<sup>[23]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Formal Assessment Sessions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Completion of standardized questionnaires</li>
            <li className="mb-2">Clinical observations and interactions with the individual</li>
            <li className="mb-2">Administration of standardized tests (if appropriate)</li>
            <li className="mb-2">Environmental observations in natural settings (if possible)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Information Gathering</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Teacher or school reports (if applicable)<sup>[10]</sup></li>
            <li className="mb-2">Records from other professionals (pediatrician, psychologist, etc.)</li>
            <li className="mb-2">Video recordings or parent observations from home</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Integration and Interpretation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Analysis of all assessment data</li>
            <li className="mb-2">Motor and coordination evaluation<sup>[12]</sup></li>
            <li className="mb-2">Identification of sensory processing patterns and subtypes</li>
            <li className="mb-2">Understanding the individual's unique sensory profile</li>
            <li className="mb-2">Determining impact on daily functioning and participation<sup>[15]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Feedback and Recommendations</h3>
          <p className="mb-4">
            The assessment concludes with a comprehensive report and feedback session providing:<sup>[24]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Clear explanation of assessment findings</li>
            <li className="mb-2">Description of the individual's sensory profile and patterns</li>
            <li className="mb-2">Recommendations for intervention and support</li>
            <li className="mb-2">Strategies for home, school, and community environments</li>
            <li className="mb-2">Referrals to other professionals if needed</li>
          </ul>
        </div>

        {/* Ongoing Assessment Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Ongoing Assessment and Monitoring</h2>
          
          <p className="mb-4">
            Assessment is not a one-time event but an ongoing process:<sup>[13]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Progress Monitoring:</strong> Regular evaluation of intervention effectiveness and changes in sensory processing</li>
            <li className="mb-2"><strong>Reassessment:</strong> Periodic comprehensive reassessments to track developmental changes and intervention outcomes</li>
            <li className="mb-2"><strong>Goal Setting and Measurement:</strong> Use of tools like Goal 
            Attainment Scaling<sup>[13]</sup></li>
            <li className="mb-2"><strong>Family Input:</strong> Continuous feedback from families about functional changes and 
            quality of life<sup>[15]</sup></li>
          </ul>
        </div>

        {/* Important Considerations Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Important Considerations</h2>
          
          <p className="mb-4">
            Several factors should be considered when approaching sensory processing assessment:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Individual Variability:</strong> Sensory processing presents differently in each person, 
            requiring individualized assessment approaches<sup>[25]</sup></li>
            <li className="mb-2"><strong>Context Matters:</strong> Sensory responses can vary across environments and states of 
            arousal, stress, or fatigue</li>
            <li className="mb-2"><strong>Cultural Sensitivity:</strong> Cultural backgrounds influence sensory experiences, 
            preferences, and responses</li>
            <li className="mb-2"><strong>Developmental Changes:</strong> Sensory processing profiles can evolve over time with 
            development and intervention</li>
            <li className="mb-2"><strong>Strengths-Based Approach:</strong> Assessment should identify not only challenges but also 
            sensory strengths and effective coping strategies<sup>[26]</sup></li>
          </ul>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Schaaf, R. C., & Lane, A. E. (2015). "Toward a best-practice protocol for assessment of sensory features in ASD." <em>Journal of Autism and Developmental Disorders</em>, 45(5), 1380-1395.</p>
          <p>[2] Miller, L. J., Anzalone, M. E., Lane, S. J., Cermak, S. A., & Osten, E. T. (2007). "Concept evolution in sensory integration: A proposed nosology for diagnosis." <em>American Journal of Occupational Therapy</em>, 61(2), 135-140.</p>
          <p>[3] Parham, L. D., & Mailloux, Z. (2015). "Sensory integration." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational Therapy for Children and Adolescents</em> (7th ed., pp. 258-303). St. Louis: Elsevier.</p>
          <p>[4] American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[5] Schaaf, R. C., Benevides, T., Mailloux, Z., et al. (2014). "An intervention for sensory difficulties in children with autism: A randomized trial." <em>Journal of Autism and Developmental Disorders</em>, 44(7), 1493-1506.</p>
          <p>[6] Parham, L. D., Roley, S. S., May-Benson, T. A., et al. (2011). "Development of a fidelity measure for research on the effectiveness of the Ayres Sensory Integration intervention." <em>American Journal of Occupational Therapy</em>, 65(2), 133-142.</p>
          <p>[7] Miller, L. J., Nielsen, D. M., Schoen, S. A., & Brett-Green, B. A. (2009). "Perspectives on sensory processing disorder: A call for translational research." <em>Frontiers in Integrative Neuroscience</em>, 3, 22.</p>
          <p>[8] Bundy, A. C., Lane, S. J., & Murray, E. A. (2002). <em>Sensory Integration: Theory and Practice</em> (2nd ed.). Philadelphia: F.A. Davis Company.</p>
          <p>[9] Dunn, W. (2014). <em>Sensory Profile 2: User's Manual</em>. Bloomington, MN: Pearson.</p>
          <p>[10] Parham, L. D., Ecker, C., Miller Kuhaneck, H., Henry, D. A., & Glennon, T. J. (2007). <em>Sensory Processing Measure (SPM): Manual</em>. Los Angeles: Western Psychological Services.</p>
          <p>[11] Baranek, G. T., David, F. J., Poe, M. D., Stone, W. L., & Watson, L. R. (2006). "Sensory Experiences Questionnaire: Discriminating sensory features in young children with autism, developmental delays, and typical development." <em>Journal of Child Psychology and Psychiatry</em>, 47(6), 591-601.</p>
          <p>[12] Ayres, A. J. (1989). <em>Sensory Integration and Praxis Tests (SIPT)</em>. Los Angeles: Western Psychological Services.</p>
          <p>[13] Mailloux, Z., Parham, L. D., Roley, S. S., Ruzzano, L., & Schaaf, R. C. (2018). "Introduction to the Evaluation in Ayres Sensory Integration (EASI)." <em>American Journal of Occupational Therapy</em>, 72(1), 7201195030.</p>
          <p>[14] DeGangi, G. A., & Greenspan, S. I. (1989). "Test of Sensory Functions in Infants (TSFI)." Los Angeles: Western Psychological Services.</p>
          <p>[15] Bar-Shalita, T., Vatine, J. J., & Parush, S. (2008). "Sensory modulation disorder: A risk factor for participation in daily life activities." <em>Developmental Medicine & Child Neurology</em>, 50(12), 932-937.</p>
          <p>[16] Ashburner, J., Ziviani, J., & Rodger, S. (2008). "Sensory processing and classroom emotional, behavioral, and educational outcomes in children with autism spectrum disorder." <em>American Journal of Occupational Therapy</em>, 62(5), 564-573.</p>
          <p>[17] Cosbey, J., Johnston, S. S., & Dunn, M. L. (2010). "Sensory processing disorders and social participation." <em>American Journal of Occupational Therapy</em>, 64(3), 462-473.</p>
          <p>[18] Lane, S. J., Reynolds, S., & Thacker, L. (2010). "Sensory over-responsivity and ADHD: Differentiating using electrodermal responses, cortisol, and anxiety." <em>Frontiers in Integrative Neuroscience</em>, 4, 8.</p>
          <p>[19] Ben-Sasson, A., Hen, L., Fluss, R., Cermak, S. A., Engel-Yeger, B., & Gal, E. (2009). "A meta-analysis of sensory modulation symptoms in individuals with autism spectrum disorders." <em>Journal of Autism and Developmental Disorders</em>, 39(1), 1-11.</p>
          <p>[20] Marco, E. J., Hinkley, L. B., Hill, S. S., & Nagarajan, S. S. (2011). "Sensory processing in autism: A review of neurophysiologic findings." <em>Pediatric Research</em>, 69(5), 48R-54R.</p>
          <p>[21] Dunn, W., & Bennett, D. (2002). "Patterns of sensory processing in children with attention deficit hyperactivity disorder." <em>OTJR: Occupation, Participation and Health</em>, 22(1), 4-15.</p>
          <p>[22] Ben-Sasson, A., Carter, A. S., & Briggs-Gowan, M. J. (2009). "Sensory over-responsivity in elementary school: Prevalence and social-emotional correlates." <em>Journal of Abnormal Child Psychology</em>, 37(5), 705-716.</p>
          <p>[23] Cermak, S. A., & Larkin, D. (2002). "Developmental coordination disorder." In A. C. Bundy, S. J. Lane, & E. A. Murray (Eds.), <em>Sensory Integration: Theory and Practice</em> (2nd ed., pp. 215-248). Philadelphia: F.A. Davis.</p>
          <p>[24] Schaaf, R. C., & Miller, L. J. (2005). "Occupational therapy using a sensory integrative approach for children with developmental disabilities." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 11(2), 143-148.</p>
          <p>[25] Case-Smith, J., & Arbesman, M. (2008). "Evidence-based review of interventions for autism used in or of relevance to occupational therapy." <em>American Journal of Occupational Therapy</em>, 62(4), 416-429.</p>
          <p>[26] Dunn, W. (2001). "The sensations of everyday life: Empirical, theoretical, and pragmatic considerations." <em>American Journal of Occupational Therapy</em>, 55(6), 608-620.</p>
        </div>
      </section>
    </article>
  );
}
