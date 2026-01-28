import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SPDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function SPDOverview({ setCurrentArticle }: SPDOverviewProps) {
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
        SPD: Overview
      </h1>

      <div className="space-y-8">
        {/* What is SPD Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is Sensory Processing Disorder?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1672363291676-ccaee01c31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNlbnNvcnklMjB0ZXh0dXJlJTIwdG91Y2hpbmd8ZW58MXx8fHwxNzY3NDA2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child exploring sensory textures"
            className="w-96 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Sensory Processing Disorder (SPD), also known as Sensory Integration Dysfunction, is a neurodevelopmental condition 
            in which the brain has difficulty receiving, organizing, and responding to sensory information from the body and 
            environment.<sup>[1][2]</sup> This condition affects how individuals perceive and react to sensory stimuli, creating 
            a fundamentally different lived experience of sensation compared to neurotypical individuals.<sup>[3]</sup>
          </p>
          <p className="mb-4">
            The concept of sensory integration was first developed by occupational therapist A. Jean Ayres in the 1960s and 1970s.<sup>[4][5]</sup> 
            Ayres described how the brain must organize and interpret sensory information from multiple systems to produce appropriate 
            adaptive responses.<sup>[6]</sup> When this integration process doesn't function optimally, individuals may experience 
            difficulty with everyday tasks, social interactions, learning, and emotional regulation.<sup>[7]</sup>
          </p>
        </div>

        {/* The Eight Sensory Systems Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Eight Sensory Systems</h2>
          
          <p className="mb-4">
            While most people are familiar with the five classical senses, SPD can affect all eight sensory systems that provide 
            the brain with information about the world and the body:<sup>[8][9]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Five External Senses</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Visual:</strong> Processing information through sight, including light, color, contrast, and movement</li>
            <li className="mb-2"><strong>Auditory:</strong> Processing sounds, including pitch, volume, rhythm, and location</li>
            <li className="mb-2"><strong>Tactile:</strong> Processing touch sensations, including texture, pressure, temperature, and pain<sup>[10]</sup></li>
            <li className="mb-2"><strong>Gustatory:</strong> Processing taste, including sweet, sour, salty, bitter, and umami</li>
            <li className="mb-2"><strong>Olfactory:</strong> Processing smells and odors from the environment</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Three "Hidden" Internal Senses</h3>
          <p className="mb-4">
            These lesser-known sensory systems are crucial for body awareness, balance, and internal regulation:<sup>[11]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Vestibular:</strong> The sense of balance and spatial orientation, processed through the inner ear, 
            detecting head position and movement<sup>[12]</sup></li>
            <li className="mb-2"><strong>Proprioceptive:</strong> The sense of body position and movement, processed through receptors in 
            muscles, joints, and tendons, providing awareness of where body parts are in space<sup>[13]</sup></li>
            <li className="mb-2"><strong>Interoceptive:</strong> The sense of internal body states, including hunger, thirst, temperature, 
            heart rate, breathing, and need for bathroom use<sup>[14]</sup></li>
          </ul>
        </div>

        {/* Prevalence Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence and Recognition</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGdyb3VwJTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc2NzQwNjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Diverse group of children representing SPD prevalence"
            className="w-80 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <p className="mb-4">
            Research estimates that approximately 5-16% of children experience sensory processing challenges significant enough 
            to impact daily functioning.<sup>[15][16]</sup> SPD is particularly common in children with autism spectrum disorder, 
            ADHD, and other developmental differences,<sup>[17][18]</sup> though it can also occur independently in otherwise 
            typically developing children.<sup>[19]</sup>
          </p>
          <p className="mb-4">
            The recognition and understanding of SPD has evolved significantly since Ayres' initial work. While SPD is not currently 
            included as a distinct diagnosis in the DSM-5 or ICD-11, it is widely recognized by occupational therapists and other 
            professionals who work with children and adults experiencing sensory processing challenges.<sup>[20][21]</sup> Many researchers 
            and clinicians advocate for SPD to be recognized as a distinct diagnosis to improve access to services and support.<sup>[22]</sup>
          </p>
        </div>

        {/* Three Patterns Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Three Primary Patterns of SPD</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1618382521478-a0bfaf1a7604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zb3J5JTIwb3ZlcmxvYWQlMjBjb3ZlcmluZyUyMGVhcnN8ZW58MXx8fHwxNzY3NDA2NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Person covering ears - sensory over-responsivity"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Lucy Jane Miller and colleagues proposed a comprehensive nosology for SPD that identifies three main subtypes of 
            sensory processing difficulties:<sup>[1]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">1. Sensory Modulation Disorder (SMD)</h3>
          <p className="mb-4">
            Sensory Modulation Disorder involves difficulty regulating responses to sensory stimuli. This can present in three ways:<sup>[23]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Sensory Over-Responsivity (SOR):</strong> Responding too strongly or for too long to sensory 
            stimuli that most people find tolerable. Individuals may experience ordinary sensations as overwhelming, painful, or 
            intolerable.<sup>[24][25]</sup></li>
            <li className="mb-2"><strong>Sensory Under-Responsivity (SUR):</strong> Having diminished or delayed responses to sensory 
            input. Individuals may not notice sensations that others readily detect, appearing unresponsive or passive.<sup>[26]</sup></li>
            <li className="mb-2"><strong>Sensory Seeking/Craving (SS):</strong> Having an intense drive to seek sensory experiences, 
            often engaging in intense sensory behaviors to satisfy sensory needs.<sup>[27]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">2. Sensory Discrimination Disorder (SDD)</h3>
          <p className="mb-4">
            Sensory Discrimination Disorder involves difficulty interpreting the specific qualities or characteristics of sensory 
            stimuli—distinguishing similarities and differences between sensations.<sup>[28]</sup> This can affect any sensory system and 
            may impact motor skills, body awareness, and the ability to distinguish between similar sensory inputs.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">3. Sensory-Based Motor Disorder (SBMD)</h3>
          <p className="mb-4">
            Sensory-Based Motor Disorder involves difficulty using sensory information to plan and execute motor actions. This 
            includes postural disorder (difficulty stabilizing the body during movement) and dyspraxia (difficulty planning and 
            sequencing motor actions).<sup>[29]</sup>
          </p>
        </div>

        {/* Theoretical Framework Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Theoretical Frameworks</h2>
          
          <p className="mb-4">
            Several theoretical models help explain sensory processing differences:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ayres Sensory Integration Theory</h3>
          <p className="mb-4">
            A. Jean Ayres developed sensory integration (SI) theory to explain how the brain organizes sensory information for 
            functional use.<sup>[4][5]</sup> The theory proposes that the ability to process and integrate sensory information is 
            foundational for learning, behavior, and development. Ayres described sensory integration as "the neurological process 
            that organizes sensation from one's own body and from the environment and makes it possible to use the body effectively 
            within the environment."<sup>[30]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dunn's Model of Sensory Processing</h3>
          <p className="mb-4">
            Winnie Dunn proposed a model based on neurological thresholds and behavioral responses to sensory input.<sup>[30][31][32]</sup> 
            Her framework describes four patterns: Low Registration (high threshold, passive response), Sensation Seeking (high threshold, 
            active response), Sensory Sensitivity (low threshold, passive response), and Sensation Avoiding (low threshold, active response). 
            This model emphasizes that sensory processing occurs on a continuum rather than as distinct categories.<sup>[31]</sup>
          </p>
        </div>

        {/* Impact on Daily Life Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impact on Daily Life and Development</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGdyb3VwJTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc2NzQwNjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Children in daily activities"
            className="w-80 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <p className="mb-4">
            Sensory processing differences can significantly affect multiple areas of functioning and development. Self-care activities 
            like eating, dressing, bathing, and grooming may be challenging due to sensory sensitivities or poor body awareness.<sup>[32]</sup> 
            Sleep difficulties are common, with bedtime routines and sleep quality affected by sensory needs.<sup>[33]</sup>
          </p>
          <p className="mb-4">
            Social participation can be impacted as sensory processing differences may affect play preferences, comfort in 
            social settings, and ability to participate in group activities.<sup>[3]</sup> Academic performance may be 
            affected by difficulty with attention in sensory-rich classrooms, challenges with fine motor tasks like handwriting, 
            and behavioral responses to sensory overload.<sup>[34]</sup>
          </p>
          <p className="mb-4">
            Emotional regulation challenges are common, as sensory overload or seeking can trigger anxiety, frustration, or 
            meltdowns.<sup>[23]</sup> Family stress may increase as parents navigate daily challenges, advocate for support, 
            and manage behavioral responses.<sup>[35]</sup>
          </p>
        </div>

        {/* Co-occurring Conditions Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
          
          <p className="mb-4">
            SPD frequently co-occurs with other neurodevelopmental conditions. Research indicates that 70-90% of individuals with 
            autism spectrum disorder experience sensory processing differences.<sup>[17][36]</sup> Sensory processing challenges are 
            also common in individuals with ADHD, with studies showing significantly higher rates of sensory symptoms compared to 
            typically developing peers.<sup>[18][23]</sup>
          </p>
          <p className="mb-4">
            Other conditions frequently associated with sensory processing differences include developmental coordination disorder 
            (dyspraxia), anxiety disorders, and learning disabilities.<sup>[29]</sup> Understanding these patterns of co-occurrence 
            helps clinicians provide comprehensive assessment and intervention that addresses the full range of an individual's needs.
          </p>
        </div>

        {/* Neuroscience Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Basis</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5lcnZvdXMlMjBzeXN0ZW0lMjBzZW5zb3J5fGVufDF8fHx8MTc2NzQwNjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain and nervous system"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Emerging research using neuroimaging and other technologies has begun to identify neurological differences associated 
            with sensory processing challenges. Studies have found differences in white matter microstructure in sensory pathways,<sup>[37]</sup> 
            altered patterns of brain connectivity,<sup>[38]</sup> and differences in how the brain responds to sensory stimuli.<sup>[39]</sup>
          </p>
          <p className="mb-4">
            Research also suggests that genetic factors may contribute to sensory processing differences. Twin studies have shown 
            that sensory processing traits have moderate heritability, indicating both genetic and environmental influences.<sup>[40]</sup>
          </p>
        </div>

        {/* Assessment and Intervention Overview Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessment and Intervention Overview</h2>
          
          <p className="mb-4">
            Comprehensive assessment of sensory processing typically involves occupational therapists with specialized training 
            in sensory integration.<sup>[41]</sup> Standardized assessments like the Sensory Profile and Sensory Processing Measure 
            are commonly used to identify patterns and severity of sensory processing differences.<sup>[42][43]</sup>
          </p>
          <p className="mb-4">
            Intervention approaches focus on helping individuals develop better sensory processing skills and creating 
            environments that support sensory needs.<sup>[7]</sup> Ayres Sensory Integration® intervention uses playful 
            activities to provide controlled sensory experiences that challenge the nervous system to organize sensory input 
            more effectively.<sup>[44][45]</sup> Environmental modifications, sensory diets (scheduled sensory activities), and 
            accommodations in home, school, and community settings are also important components of support.<sup>[46]</sup>
          </p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Miller, L. J., Anzalone, M. E., Lane, S. J., Cermak, S. A., & Osten, E. T. (2007). "Concept evolution in sensory integration: A proposed nosology for diagnosis." <em>American Journal of Occupational Therapy</em>, 61(2), 135-140.</p>
          <p>[2] Bundy, A. C., Lane, S. J., & Murray, E. A. (2002). <em>Sensory Integration: Theory and Practice</em> (2nd ed.). Philadelphia: F.A. Davis Company.</p>
          <p>[3] Bar-Shalita, T., Vatine, J. J., & Parush, S. (2008). "Sensory modulation disorder: A risk factor for participation in daily life activities." <em>Developmental Medicine & Child Neurology</em>, 50(12), 932-937.</p>
          <p>[4] Ayres, A. J. (1972). <em>Sensory Integration and Learning Disorders</em>. Los Angeles: Western Psychological Services.</p>
          <p>[5] Ayres, A. J. (1979). <em>Sensory Integration and the Child</em>. Los Angeles: Western Psychological Services.</p>
          <p>[6] Ayres, A. J. (1972). "Types of sensory integrative dysfunction among disabled learners." <em>American Journal of Occupational Therapy</em>, 26(1), 13-18.</p>
          <p>[7] Schaaf, R. C., & Miller, L. J. (2005). "Occupational therapy using a sensory integrative approach for children with developmental disabilities." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 11(2), 143-148.</p>
          <p>[8] Parham, L. D., & Mailloux, Z. (2015). "Sensory integration." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational Therapy for Children and Adolescents</em> (7th ed., pp. 258-303). St. Louis: Elsevier.</p>
          <p>[9] Lane, S. J. (2002). "Sensory modulation." In A. C. Bundy, S. J. Lane, & E. A. Murray (Eds.), <em>Sensory Integration: Theory and Practice</em> (2nd ed., pp. 101-122). Philadelphia: F.A. Davis.</p>
          <p>[10] Royeen, C. B., & Lane, S. J. (1991). "Tactile processing and sensory defensiveness." In A. G. Fisher, E. A. Murray, & A. C. Bundy (Eds.), <em>Sensory Integration: Theory and Practice</em> (pp. 108-133). Philadelphia: F.A. Davis.</p>
          <p>[11] Blanche, E. I., Bodison, S., Chang, M. C., & Reinoso, G. (2012). "Development of the Comprehensive Observations of Proprioception (COP): Validity and reliability evidence." <em>American Journal of Occupational Therapy</em>, 66(6), 691-698.</p>
          <p>[12] Mulligan, S. (1998). "Patterns of sensory integration dysfunction: A confirmatory factor analysis." <em>American Journal of Occupational Therapy</em>, 52(10), 819-828.</p>
          <p>[13] Blanche, E. I., Reinoso, G., Chang, M. C., & Bodison, S. (2012). "Proprioceptive processing difficulties among children with autism spectrum disorders and developmental disabilities." <em>American Journal of Occupational Therapy</em>, 66(5), 621-624.</p>
          <p>[14] Mahler, K. (2015). <em>Interoception: The Eighth Sensory System</em>. Shawnee Mission, KS: AAPC Publishing.</p>
          <p>[15] Ahn, R. R., Miller, L. J., Milberger, S., & McIntosh, D. N. (2004). "Prevalence of parents' perceptions of sensory processing disorders among kindergarten children." <em>American Journal of Occupational Therapy</em>, 58(3), 287-293.</p>
          <p>[16] Ben-Sasson, A., Carter, A. S., & Briggs-Gowan, M. J. (2009). "Sensory over-responsivity in elementary school: Prevalence and social-emotional correlates." <em>Journal of Abnormal Child Psychology</em>, 37(5), 705-716.</p>
          <p>[17] Ben-Sasson, A., Hen, L., Fluss, R., Cermak, S. A., Engel-Yeger, B., & Gal, E. (2009). "A meta-analysis of sensory modulation symptoms in individuals with autism spectrum disorders." <em>Journal of Autism and Developmental Disorders</em>, 39(1), 1-11.</p>
          <p>[18] Dunn, W., & Bennett, D. (2002). "Patterns of sensory processing in children with attention deficit hyperactivity disorder." <em>OTJR: Occupation, Participation and Health</em>, 22(1), 4-15.</p>
          <p>[19] Miller, L. J., Nielsen, D. M., Schoen, S. A., & Brett-Green, B. A. (2009). "Perspectives on sensory processing disorder: A call for translational research." <em>Frontiers in Integrative Neuroscience</em>, 3, 22.</p>
          <p>[20] Schaaf, R. C., & Lane, A. E. (2015). "Toward a best-practice protocol for assessment of sensory features in ASD." <em>Journal of Autism and Developmental Disorders</em>, 45(5), 1380-1395.</p>
          <p>[21] American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[22] Miller, L. J., Coll, J. R., & Schoen, S. A. (2007). "A randomized controlled pilot study of the effectiveness of occupational therapy for children with sensory modulation disorder." <em>American Journal of Occupational Therapy</em>, 61(2), 228-238.</p>
          <p>[23] Lane, S. J., Reynolds, S., & Thacker, L. (2010). "Sensory over-responsivity and ADHD: Differentiating using electrodermal responses, cortisol, and anxiety." <em>Frontiers in Integrative Neuroscience</em>, 4, 8.</p>
          <p>[24] Schoen, S. A., Miller, L. J., Brett-Green, B. A., & Nielsen, D. M. (2009). "Physiological and behavioral differences in sensory processing: A comparison of children with autism spectrum disorder and sensory modulation disorder." <em>Frontiers in Integrative Neuroscience</em>, 3, 29.</p>
          <p>[25] Davies, P. L., & Gavin, W. J. (2007). "Validating the diagnosis of sensory processing disorders using EEG technology." <em>American Journal of Occupational Therapy</em>, 61(2), 176-189.</p>
          <p>[26] Reynolds, S., & Lane, S. J. (2008). "Diagnostic validity of sensory over-responsivity: A review of the literature and case reports." <em>Journal of Autism and Developmental Disorders</em>, 38(3), 516-529.</p>
          <p>[27] Dunn, W. (1997). "The impact of sensory processing abilities on the daily lives of young children and their families: A conceptual model." <em>Infants & Young Children</em>, 9(4), 23-35.</p>
          <p>[28] Ayres, A. J. (1989). <em>Sensory Integration and Praxis Tests (SIPT)</em>. Los Angeles: Western Psychological Services.</p>
          <p>[29] Cermak, S. A., & Larkin, D. (2002). "Developmental coordination disorder." In A. C. Bundy, S. J. Lane, & E. A. Murray (Eds.), <em>Sensory Integration: Theory and Practice</em> (2nd ed., pp. 215-248). Philadelphia: F.A. Davis.</p>
          <p>[30] Dunn, W. (2001). "The sensations of everyday life: Empirical, theoretical, and pragmatic considerations." <em>American Journal of Occupational Therapy</em>, 55(6), 608-620.</p>
          <p>[31] Dunn, W. (2007). "Supporting children to participate successfully in everyday life by using sensory processing knowledge." <em>Infants & Young Children</em>, 20(2), 84-101.</p>
          <p>[32] Dunn, W., Myles, B. S., & Orr, S. (2002). "Sensory processing issues associated with Asperger syndrome: A preliminary investigation." <em>American Journal of Occupational Therapy</em>, 56(1), 97-102.</p>
          <p>[33] Reynolds, S., Lane, S. J., & Thacker, L. (2012). "Sensory processing, physiological stress, and sleep behaviors in children with and without autism spectrum disorders." <em>OTJR: Occupation, Participation and Health</em>, 32(1), 246-257.</p>
          <p>[34] Ashburner, J., Ziviani, J., & Rodger, S. (2008). "Sensory processing and classroom emotional, behavioral, and educational outcomes in children with autism spectrum disorder." <em>American Journal of Occupational Therapy</em>, 62(5), 564-573.</p>
          <p>[35] Bagby, M. S., Dickie, V. A., & Baranek, G. T. (2012). "How sensory experiences of children with and without autism affect family occupations." <em>American Journal of Occupational Therapy</em>, 66(1), 78-86.</p>
          <p>[36] Marco, E. J., Hinkley, L. B., Hill, S. S., & Nagarajan, S. S. (2011). "Sensory processing in autism: A review of neurophysiologic findings." <em>Pediatric Research</em>, 69(5), 48R-54R.</p>
          <p>[37] Owen, J. P., Marco, E. J., Desai, S., et al. (2013). "Abnormal white matter microstructure in children with sensory processing disorders." <em>NeuroImage: Clinical</em>, 2, 844-853.</p>
          <p>[38] Chang, Y. S., Owen, J. P., Desai, S. S., et al. (2014). "Autism and sensory processing disorders: Shared white matter disruption in sensory pathways but divergent connectivity in social-emotional pathways." <em>PLOS ONE</em>, 9(7), e103038.</p>
          <p>[39] Brett-Green, B., Miller, L. J., Gavin, W. J., & Davies, P. L. (2008). "Multisensory integration in children: A preliminary ERP study." <em>Brain Research</em>, 1242, 283-290.</p>
          <p>[40] Goldsmith, H. H., Van Hulle, C. A., Arneson, C. L., Schreiber, J. E., & Gernsbacher, M. A. (2006). "A population-based twin study of parentally reported tactile and auditory defensiveness in young children." <em>Journal of Abnormal Child Psychology</em>, 34(3), 393-407.</p>
          <p>[41] Schaaf, R. C., Benevides, T., Mailloux, Z., et al. (2014). "An intervention for sensory difficulties in children with autism: A randomized trial." <em>Journal of Autism and Developmental Disorders</em>, 44(7), 1493-1506.</p>
          <p>[42] Dunn, W. (2014). <em>Sensory Profile 2: User's Manual</em>. Bloomington, MN: Pearson.</p>
          <p>[43] Parham, L. D., Ecker, C., Miller Kuhaneck, H., Henry, D. A., & Glennon, T. J. (2007). <em>Sensory Processing Measure (SPM): Manual</em>. Los Angeles: Western Psychological Services.</p>
          <p>[44] Schaaf, R. C., & Nightlinger, K. M. (2007). "Occupational therapy using a sensory integrative approach: A case study of effectiveness." <em>American Journal of Occupational Therapy</em>, 61(2), 239-246.</p>
          <p>[45] May-Benson, T. A., & Koomar, J. A. (2010). "Systematic review of the research evidence examining the effectiveness of interventions using a sensory integrative approach for children." <em>American Journal of Occupational Therapy</em>, 64(3), 403-414.</p>
          <p>[46] Williams, M. S., & Shellenberger, S. (1996). <em>How Does Your Engine Run? A Leader's Guide to the Alert Program for Self-Regulation</em>. Albuquerque, NM: TherapyWorks.</p>
        </div>
      </section>
    </article>
  );
}
