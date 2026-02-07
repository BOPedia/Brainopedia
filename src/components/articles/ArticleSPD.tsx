import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleSPDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleSPD({ setCurrentArticle }: ArticleSPDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with SPD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-living');
      }
    },
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
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Sensory Processing Disorder (SPD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Sensory Processing Disorder (SPD)</strong> is a neurodevelopmental condition where the 
            brain has difficulty receiving, organizing, and responding to sensory information from the body 
            and environment.<sup>[1]</sup> Individuals with SPD experience the world with heightened or reduced sensitivity, 
            creating a unique sensory neurotype that shapes how they interact with their surroundings.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Sensory Processing Disorder"
            data={[
              { label: 'Other names', value: 'SPD, Sensory Integration Dysfunction' },
              { label: 'Specialty', value: 'Occupational Therapy, Neurology' },
              { label: 'Symptoms', value: 'Altered sensory responses, sensitivity variations' },
              { label: 'Related to', value: 'Often co-occurs with autism, ADHD' },
              { label: 'Frequency', value: 'Approximately 5% of children' },
              { label: 'Sensory systems', value: 'All 8 sensory systems can be affected' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1672363291676-ccaee01c31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNlbnNvcnklMjB0ZXh0dXJlJTIwdG91Y2hpbmd8ZW58MXx8fHwxNzY3NDA2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Child exploring sensory textures - sensory processing experiences"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            While SPD often co-occurs with autism, ADHD, and other neurodivergent conditions, it can also 
            exist as a distinct diagnosis.<sup>[3]</sup> The condition affects how the nervous system detects, modulates, 
            discriminates, and integrates sensory input—essentially, how the brain's "filters" work when 
            processing the constant stream of sensory information.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            Research suggests that 1 in 20 children 
            experience sensory processing challenges significant enough to impact daily functioning.<sup>[5]</sup> SPD 
            reflects differences in neurological wiring and sensory threshold regulation, creating a 
            fundamentally different lived experience of sensation.<sup>[6]</sup> SPD can affect any of the eight sensory 
            systems including the five common senses (visual, auditory, tactile, gustatory, olfactory) and 
            three hidden senses (vestibular, proprioceptive, interoceptive).<sup>[7]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1618382521478-a0bfaf1a7604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zb3J5JTIwb3ZlcmxvYWQlMjBjb3ZlcmluZyUyMGVhcnN8ZW58MXx8fHwxNzY3NDA2NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sensory overload - covering ears in response to overwhelming stimuli"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            SPD manifests in three primary patterns.<sup>[8]</sup> Sensory over-responsivity (hypersensitivity) occurs when 
            the nervous system responds too intensely to sensory input, with experiences like clothing tags or 
            textures feeling unbearable, sounds being intensely distressing, bright lights causing pain, light 
            touch feeling overwhelming, strong smells triggering nausea, and avoidance of sensory-rich environments.<sup>[9][10]</sup>
          </p>
          
          <p className="mb-4">
            Sensory under-responsivity (hyposensitivity) occurs when the nervous system requires more intense 
            sensory input to register sensation, with experiences like higher pain threshold, seeking intense 
            sensory experiences, difficulty noticing hunger or bodily needs, seeming unaware of injuries, craving 
            strong flavors, and constant movement or touching objects.<sup>[11]</sup> Sensory discrimination disorder involves 
            difficulty interpreting the specific qualities of sensory input, including challenges distinguishing 
            similar sensations, difficulty with body awareness and spatial positioning, clumsiness, trouble with 
            fine motor tasks, and difficulty judging force.<sup>[12]</sup> SPD affects daily functioning including self-care, 
            eating, sleep, social interaction, school/work performance, and emotional regulation.<sup>[13]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5lcnZvdXMlMjBzeXN0ZW0lMjBzZW5zb3J5fGVufDF8fHx8MTc2NzQwNjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain and nervous system - sensory processing pathways"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            SPD reflects differences in neurological wiring and sensory threshold regulation.<sup>[14]</sup> Research suggests 
            differences in how the nervous system detects, modulates, discriminates, and integrates sensory 
            input—essentially, how the brain's "filters" work when processing the constant stream of sensory 
            information.<sup>[15]</sup>
          </p>
          
          <p className="mb-4">
            The exact neurological mechanisms are still being studied, but brain imaging research 
            has shown differences in sensory processing areas and connectivity patterns.<sup>[16][17]</sup> SPD may have genetic 
            components and tends to run in families.<sup>[18]</sup> The condition represents a fundamental difference in how 
            the nervous system processes sensation, creating differences in sensory thresholds and responses 
            compared to neurotypical individuals.<sup>[19]</sup> Studies have identified differences in white matter microstructure 
            in sensory pathways and altered patterns of neural connectivity.<sup>[20]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1709127347884-a106974ef58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2N1cGF0aW9uYWwlMjB0aGVyYXB5JTIwY2hpbGQlMjBhc3Nlc3NtZW50fGVufDF8fHx8MTc2NzQwNjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Occupational therapy assessment - evaluating sensory processing"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            SPD is diagnosed through comprehensive evaluation by qualified professionals, typically occupational 
            therapists specializing in sensory integration.<sup>[21]</sup> The assessment includes detailed sensory history and 
            questionnaires about sensory experiences and responses, standardized sensory processing assessments 
            evaluating responses across all sensory systems, observation of sensory responses and behaviors in 
            various contexts, evaluation of motor skills and coordination, developmental history, and screening 
            for co-occurring conditions like autism or ADHD.<sup>[22][23]</sup>
          </p>
          
          <p className="mb-4">
            The evaluation identifies specific patterns of 
            sensory over-responsivity, under-responsivity, or discrimination difficulties across the eight sensory 
            systems (visual, auditory, tactile, gustatory, olfactory, vestibular, proprioceptive, interoceptive) 
            and determines how sensory processing differences impact daily functioning.<sup>[24]</sup> Common assessment tools include 
            the Sensory Profile, Sensory Processing Measure, and clinical observations using the Ayres Sensory Integration framework.<sup>[25]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1586579649032-1a9eacebf04a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHRlZCUyMGJsYW5rZXQlMjBzZW5zb3J5JTIwdG9vbHM8ZW58MXx8fHwxNzY3NDA2NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Weighted blanket and sensory tools - supports for SPD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Managing SPD involves sensory integration therapy with an occupational therapist who helps the nervous 
            system process input more effectively through targeted activities and can create a personalized "sensory 
            diet" of regulating activities.<sup>[26][27]</sup> Environmental modifications include noise-canceling headphones or earplugs, 
            sunglasses or blue-light filtering glasses, fidget tools or sensory objects, weighted blankets or compression 
            clothing, tagless seamless clothing options, and creating quiet low-sensory spaces for regulation.<sup>[28]</sup>
          </p>
          
          <p className="mb-4">
            Sensory 
            diet activities provide organizing sensory input and include heavy work activities (pushing, pulling, carrying), 
            deep pressure input (massage, compression), rhythmic movement (swinging, rocking), and oral motor activities 
            (chewing gum, crunchy foods).<sup>[29]</sup> Self-advocacy involves learning to identify sensory needs, communicate boundaries, 
            and make accommodations.<sup>[30]</sup> Understanding SPD as a neurological difference rather than a personal failing supports 
            self-acceptance and effective coping.<sup>[31]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with SPD</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1672363291676-ccaee01c31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNlbnNvcnklMjB0ZXh0dXJlJTIwdG91Y2hpbmd8ZW58MXx8fHwxNzY3NDA2NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with SPD - navigating sensory experiences"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with SPD lead successful and fulfilling lives across all areas of society.<sup>[32]</sup> With appropriate 
            accommodations and self-understanding, people with SPD develop effective strategies for navigating sensory 
            challenges and creating environments that support their sensory needs.<sup>[33]</sup> Living well with SPD involves 
            understanding one's unique sensory profile, developing personalized sensory regulation strategies, accessing 
            appropriate accommodations in education and employment, and building confidence through self-advocacy.<sup>[34]</sup>
          </p>
          
          <p className="mb-4">
            Topics 
            related to living with SPD include creating sensory-friendly home and work environments, managing sensory 
            overload and meltdowns, navigating social situations with different sensory demands, using sensory tools and 
            strategies throughout the day, building self-advocacy skills to communicate sensory needs, recognizing sensory 
            patterns and triggers, and understanding that sensory differences are a valid neurological experience rather 
            than behavioral problems.<sup>[35][36]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Miller, L. J., Anzalone, M. E., Lane, S. J., Cermak, S. A., & Osten, E. T. (2007). "Concept evolution in sensory integration: A proposed nosology for diagnosis." <em>American Journal of Occupational Therapy</em>, 61(2), 135-140.</p>
          <p>[2] Ayres, A. J. (1972). <em>Sensory integration and learning disorders</em>. Los Angeles, CA: Western Psychological Services.</p>
          <p>[3] Ben-Sasson, A., Carter, A. S., & Briggs-Gowan, M. J. (2009). "Sensory over-responsivity in elementary school: Prevalence and social-emotional correlates." <em>Journal of Abnormal Child Psychology</em>, 37(5), 705-716.</p>
          <p>[4] Dunn, W. (1997). "The impact of sensory processing abilities on the daily lives of young children and their families: A conceptual model." <em>Infants & Young Children</em>, 9(4), 23-35.</p>
          <p>[5] Ahn, R. R., Miller, L. J., Milberger, S., & McIntosh, D. N. (2004). "Prevalence of parents' perceptions of sensory processing disorders among kindergarten children." <em>American Journal of Occupational Therapy</em>, 58(3), 287-293.</p>
          <p>[6] Lane, S. J., Reynolds, S., & Thacker, L. (2010). "Sensory over-responsivity and ADHD: Differentiating using electrodermal responses, cortisol, and anxiety." <em>Frontiers in Integrative Neuroscience</em>, 4, 8.</p>
          <p>[7] Bundy, A. C., Lane, S. J., & Murray, E. A. (2002). <em>Sensory integration: Theory and practice</em> (2nd ed.). Philadelphia, PA: F. A. Davis Company.</p>
          <p>[8] Schaaf, R. C., & Lane, A. E. (2015). "Toward a best-practice protocol for assessment of sensory features in ASD." <em>Journal of Autism and Developmental Disorders</em>, 45(5), 1380-1395.</p>
          <p>[9] Schoen, S. A., Miller, L. J., Brett-Green, B. A., & Nielsen, D. M. (2009). "Physiological and behavioral differences in sensory processing: A comparison of children with autism spectrum disorder and sensory modulation disorder." <em>Frontiers in Integrative Neuroscience</em>, 3, 29.</p>
          <p>[10] Davies, P. L., & Gavin, W. J. (2007). "Validating the diagnosis of sensory processing disorders using EEG technology." <em>American Journal of Occupational Therapy</em>, 61(2), 176-189.</p>
          <p>[11] Dunn, W., & Bennett, D. (2002). "Patterns of sensory processing in children with attention deficit hyperactivity disorder." <em>OTJR: Occupation, Participation and Health</em>, 22(1), 4-15.</p>
          <p>[12] Parham, L. D., & Mailloux, Z. (2015). "Sensory integration." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children and adolescents</em> (7th ed., pp. 258-303). St. Louis, MO: Elsevier.</p>
          <p>[13] Bar-Shalita, T., Vatine, J. J., & Parush, S. (2008). "Sensory modulation disorder: A risk factor for participation in daily life activities." <em>Developmental Medicine & Child Neurology</em>, 50(12), 932-937.</p>
          <p>[14] Owen, J. P., Marco, E. J., Desai, S., et al. (2013). "Abnormal white matter microstructure in children with sensory processing disorders." <em>NeuroImage: Clinical</em>, 2, 844-853.</p>
          <p>[15] Miller, L. J., Nielsen, D. M., Schoen, S. A., & Brett-Green, B. A. (2009). "Perspectives on sensory processing disorder: A call for translational research." <em>Frontiers in Integrative Neuroscience</em>, 3, 22.</p>
          <p>[16] Marco, E. J., Hinkley, L. B., Hill, S. S., & Nagarajan, S. S. (2011). "Sensory processing in autism: A review of neurophysiologic findings." <em>Pediatric Research</em>, 69(5), 48R-54R.</p>
          <p>[17] Chang, Y. S., Owen, J. P., Desai, S. S., et al. (2014). "Autism and sensory processing disorders: Shared white matter disruption in sensory pathways but divergent connectivity in social-emotional pathways." <em>PLOS ONE</em>, 9(7), e103038.</p>
          <p>[18] Goldsmith, H. H., Van Hulle, C. A., Arneson, C. L., Schreiber, J. E., & Gernsbacher, M. A. (2006). "A population-based twin study of parentally reported tactile and auditory defensiveness in young children." <em>Journal of Abnormal Child Psychology</em>, 34(3), 393-407.</p>
          <p>[19] Brett-Green, B., Miller, L. J., Gavin, W. J., & Davies, P. L. (2008). "Multisensory integration in children: A preliminary ERP study." <em>Brain Research</em>, 1242, 283-290.</p>
          <p>[20] Tavassoli, T., Miller, L. J., Schoen, S. A., Nielsen, D. M., & Baron-Cohen, S. (2014). "Sensory over-responsivity in adults with autism spectrum conditions." <em>Autism</em>, 18(4), 428-432.</p>
          <p>[21] Schaaf, R. C., Benevides, T., Mailloux, Z., et al. (2014). "An intervention for sensory difficulties in children with autism: A randomized trial." <em>Journal of Autism and Developmental Disorders</em>, 44(7), 1493-1506.</p>
          <p>[22] Dunn, W. (2014). <em>Sensory Profile 2: User's manual</em>. Bloomington, MN: Pearson.</p>
          <p>[23] Parham, L. D., Ecker, C., Miller Kuhaneck, H., Henry, D. A., & Glennon, T. J. (2007). <em>Sensory Processing Measure (SPM): Manual</em>. Los Angeles, CA: Western Psychological Services.</p>
          <p>[24] Ayres, A. J. (1989). <em>Sensory Integration and Praxis Tests (SIPT)</em>. Los Angeles, CA: Western Psychological Services.</p>
          <p>[25] Mailloux, Z., May-Benson, T. A., Summers, C. A., et al. (2007). "The issue is—Goal attainment scaling as a measure of meaningful outcomes for children with sensory integration disorders." <em>American Journal of Occupational Therapy</em>, 61(2), 254-259.</p>
          <p>[26] Schaaf, R. C., & Nightlinger, K. M. (2007). "Occupational therapy using a sensory integrative approach: A case study of effectiveness." <em>American Journal of Occupational Therapy</em>, 61(2), 239-246.</p>
          <p>[27] May-Benson, T. A., & Koomar, J. A. (2010). "Systematic review of the research evidence examining the effectiveness of interventions using a sensory integrative approach for children." <em>American Journal of Occupational Therapy</em>, 64(3), 403-414.</p>
          <p>[28] Wilbarger, P., & Wilbarger, J. L. (1991). <em>Sensory defensiveness in children aged 2-12: An intervention guide for parents and other caretakers</em>. Santa Barbara, CA: Avanti Educational Programs.</p>
          <p>[29] Williams, M. S., & Shellenberger, S. (1996). <em>How does your engine run? A leader's guide to the Alert Program for self-regulation</em>. Albuquerque, NM: TherapyWorks.</p>
          <p>[30] Kranowitz, C. S. (2005). <em>The out-of-sync child: Recognizing and coping with sensory processing disorder</em> (Rev. ed.). New York: Penguin.</p>
          <p>[31] Pfeiffer, B. A., Koenig, K., Kinnealey, M., Sheppard, M., & Henderson, L. (2011). "Effectiveness of sensory integration interventions in children with autism spectrum disorders: A pilot study." <em>American Journal of Occupational Therapy</em>, 65(1), 76-85.</p>
          <p>[32] Dunn, W., Myles, B. S., & Orr, S. (2002). "Sensory processing issues associated with Asperger syndrome: A preliminary investigation." <em>American Journal of Occupational Therapy</em>, 56(1), 97-102.</p>
          <p>[33] Reynolds, S., Lane, S. J., & Thacker, L. (2012). "Sensory processing, physiological stress, and sleep behaviors in children with and without autism spectrum disorders." <em>OTJR: Occupation, Participation and Health</em>, 32(1), 246-257.</p>
          <p>[34] Case-Smith, J., Weaver, L. L., & Fristad, M. A. (2015). "A systematic review of sensory processing interventions for children with autism spectrum disorders." <em>Autism</em>, 19(2), 133-148.</p>
          <p>[35] Baranek, G. T., David, F. J., Poe, M. D., Stone, W. L., & Watson, L. R. (2006). "Sensory Experiences Questionnaire: Discriminating sensory features in young children with autism, developmental delays, and typical development." <em>Journal of Child Psychology and Psychiatry</em>, 47(6), 591-601.</p>
          <p>[36] Schaaf, R. C., & Miller, L. J. (2005). "Occupational therapy using a sensory integrative approach for children with developmental disabilities." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 11(2), 143-148.</p>
        </div>
      </section>
    </article>
  );
}