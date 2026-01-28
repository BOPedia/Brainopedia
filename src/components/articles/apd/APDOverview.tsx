import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface APDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function APDOverview({ setCurrentArticle }: APDOverviewProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('apd'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Auditory Processing Disorder
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Auditory Processing Disorder: Overview
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Auditory Processing Disorder (APD), also known as Central Auditory Processing Disorder (CAPD), 
            is a neurological condition affecting how the brain processes auditory information.<sup>[1]</sup> 
            Individuals with APD have normal hearing sensitivity—their ears detect sound normally—but their 
            brains struggle to interpret, organize, and make sense of what they hear.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Definition and Core Features</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1617803021651-8df9d37672a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsaXN0ZW5pbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Person listening with headphones"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What APD Is</h3>
          <p className="mb-4">
            APD is a deficit in the neural processing of auditory information not due to higher-order language, 
            cognitive, or related factors.<sup>[3]</sup> The American Speech-Language-Hearing Association (ASHA) 
            defines it as difficulties in one or more auditory processes including sound localization, auditory 
            discrimination, auditory pattern recognition, temporal aspects of audition, and auditory performance 
            with competing or degraded signals.<sup>[4]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What APD Is Not</h3>
          <p className="mb-4">
            APD is not a hearing loss—hearing thresholds are typically normal.<sup>[5]</sup> It's not primarily 
            a language disorder, though language difficulties may co-occur.<sup>[6]</sup> It's not an attention 
            problem per se, though the two can coexist and share symptoms.<sup>[7]</sup> APD represents a specific 
            deficit in auditory processing rather than general cognitive or linguistic impairment.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Central Auditory Nervous System</h3>
          <p className="mb-4">
            The central auditory nervous system includes the auditory pathways from the brainstem through the 
            auditory cortex.<sup>[9]</sup> These structures analyze, filter, organize, and integrate auditory 
            information.<sup>[10]</sup> In APD, dysfunction occurs at these central levels despite normal 
            peripheral hearing.<sup>[11]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence and Demographics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Common Is APD?</h3>
          <p className="mb-4">
            Estimates suggest approximately 2-5% of school-aged children have APD, though prevalence estimates 
            vary widely depending on diagnostic criteria.<sup>[12]</sup> Some studies suggest higher rates, 
            particularly when including milder presentations.<sup>[13]</sup> APD is likely underdiagnosed due 
            to limited awareness and assessment availability.<sup>[14]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Age and Development</h3>
          <p className="mb-4">
            APD is typically diagnosed in children age 7 or older, when the auditory system has matured 
            sufficiently for valid testing.<sup>[15]</sup> However, signs may be apparent earlier.<sup>[16]</sup> 
            APD persists into adolescence and adulthood, though individuals often develop compensatory 
            strategies.<sup>[17]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gender Differences</h3>
          <p className="mb-4">
            Some research suggests APD may be more common in males, with male-to-female ratios of approximately 
            2:1.<sup>[18]</sup> However, this may reflect referral bias rather than true prevalence differences.<sup>[19]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Types and Subtypes of APD</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHNjYW58ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain imaging scan"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Decoding Deficit</h3>
          <p className="mb-4">
            Difficulty analyzing and identifying sounds, particularly in background noise or when signals are 
            degraded.<sup>[20]</sup> This subtype affects the brain's ability to extract acoustic features from 
            the auditory signal.<sup>[21]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prosodic Deficit</h3>
          <p className="mb-4">
            Difficulty interpreting prosody—the rhythm, stress, and intonation patterns of speech that convey 
            emotional content and meaning.<sup>[22]</sup> Individuals may miss sarcasm, tone, or emotional nuance 
            in speech.<sup>[23]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Integration Deficit</h3>
          <p className="mb-4">
            Difficulty integrating auditory information across hemispheres or with other sensory modalities.<sup>[24]</sup> 
            This affects the ability to combine auditory pieces into meaningful wholes.<sup>[25]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Output-Organization Deficit</h3>
          <p className="mb-4">
            Difficulty organizing and sequencing auditory information for output, affecting tasks requiring 
            auditory memory and sequencing.<sup>[26]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Binaural Integration/Separation Deficits</h3>
          <p className="mb-4">
            Problems integrating information from both ears or separating different signals coming to each 
            ear.<sup>[27]</sup> This affects processing in complex listening environments.<sup>[28]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Impact on Daily Life</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Challenges</h3>
          <p className="mb-4">
            APD significantly affects learning, particularly in classroom environments with background noise, 
            multiple speakers, or rapid verbal instruction.<sup>[29]</sup> Reading, spelling, and written language 
            may be affected when phonological processing is impaired.<sup>[30]</sup> Students with APD often 
            struggle to follow multi-step verbal directions or take notes from lectures.<sup>[31]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social and Communication Difficulties</h3>
          <p className="mb-4">
            Conversing in noisy environments like cafeterias or parties is challenging.<sup>[32]</sup> Individuals 
            may miss social cues conveyed through tone or inflection, affecting social relationships.<sup>[33]</sup> 
            The need to ask for repetition or appearing inattentive can impact self-esteem and social 
            acceptance.<sup>[34]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Emotional and Behavioral Effects</h3>
          <p className="mb-4">
            The constant effort required to process auditory information leads to listening fatigue.<sup>[35]</sup> 
            Frustration from communication breakdowns can lead to anxiety, withdrawal, or behavioral problems.<sup>[36]</sup> 
            Some children develop compensatory behaviors or avoidance of challenging listening situations.<sup>[37]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD and ADHD</h3>
          <p className="mb-4">
            APD frequently co-occurs with ADHD, and the two share overlapping symptoms including distractibility, 
            difficulty following directions, and inconsistent performance.<sup>[38]</sup> Some estimates suggest 
            50% or more of children with APD also have ADHD.<sup>[39]</sup> Differential diagnosis requires 
            careful assessment.<sup>[40]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD and Dyslexia</h3>
          <p className="mb-4">
            Phonological processing deficits link APD and dyslexia.<sup>[41]</sup> Many children with dyslexia 
            show auditory processing difficulties, though not all meet criteria for APD.<sup>[42]</sup> The 
            relationship between auditory processing and reading is complex and bidirectional.<sup>[43]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD and Autism Spectrum Disorder</h3>
          <p className="mb-4">
            Auditory processing differences are common in autism.<sup>[44]</sup> Many autistic individuals 
            report auditory hypersensitivity or difficulty processing speech in noise.<sup>[45]</sup> The nature 
            of auditory processing differences may differ between APD and autism, though overlap exists.<sup>[46]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language and Learning Disorders</h3>
          <p className="mb-4">
            APD often co-occurs with language impairments, though the causal relationship is debated.<sup>[47]</sup> 
            Some argue APD contributes to language difficulties; others suggest language problems affect auditory 
            processing performance.<sup>[48]</sup> Specific learning disabilities in reading, writing, or mathematics 
            may accompany APD.<sup>[49]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Historical Context and Recognition</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3J5JTIwYm9va3N8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="History books and research"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Recognition</h3>
          <p className="mb-4">
            The concept of central auditory dysfunction emerged in the 1950s-1960s from observations of adults 
            with brain lesions affecting auditory processing.<sup>[50]</sup> Helmer Myklebust's work in the 1950s 
            described children with "auditory disorders" despite normal hearing.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Development of Diagnostic Criteria</h3>
          <p className="mb-4">
            The 1996 Consensus Conference on APD provided early diagnostic guidelines.<sup>[52]</sup> ASHA published 
            technical reports in 2005 defining APD and recommending assessment practices.<sup>[53]</sup> The 
            British Society of Audiology released guidelines in 2011, updated in 2018.<sup>[54]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ongoing Controversies</h3>
          <p className="mb-4">
            Despite progress, APD remains controversial in some circles.<sup>[55]</sup> Debates continue about 
            diagnostic criteria, the relationship between auditory processing and language/cognition, treatment 
            efficacy, and whether APD represents a distinct disorder.<sup>[56]</sup> Professional disagreements 
            reflect the complexity of auditory processing and its assessment.<sup>[57]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Trajectory</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Childhood</h3>
          <p className="mb-4">
            Signs of APD may be apparent in early childhood through language delays, difficulty following 
            directions, or behavioral issues in noisy environments.<sup>[58]</sup> However, formal diagnosis is 
            typically delayed until auditory maturation allows reliable testing.<sup>[59]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Age Years</h3>
          <p className="mb-4">
            Academic demands often bring APD to attention as children struggle in classroom listening situations.<sup>[60]</sup> 
            Reading and writing difficulties may emerge related to phonological processing deficits.<sup>[61]</sup> 
            Social challenges may increase as peer interactions become more complex.<sup>[62]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adolescence and Adulthood</h3>
          <p className="mb-4">
            Some aspects of APD may improve with maturation as the auditory system develops and individuals 
            develop compensatory strategies.<sup>[63]</sup> However, core deficits typically persist into 
            adulthood.<sup>[64]</sup> Adults with APD continue to experience difficulties in challenging listening 
            environments, though they often structure their lives to minimize these challenges.<sup>[65]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prognosis and Outcomes</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Variable Outcomes</h3>
          <p className="mb-4">
            Outcomes vary widely depending on severity, co-occurring conditions, interventions received, and 
            individual factors.<sup>[66]</sup> Some individuals show significant improvement with intervention 
            and maturation; others continue to experience substantial challenges.<sup>[67]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Factors Influencing Outcomes</h3>
          <p className="mb-4">
            Early identification and intervention improve outcomes.<sup>[68]</sup> Cognitive abilities, language 
            skills, family support, and educational accommodations all influence success.<sup>[69]</sup> Development 
            of compensatory strategies and self-advocacy skills supports positive outcomes.<sup>[70]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Strengths and Abilities</h3>
          <p className="mb-4">
            While APD creates challenges, many individuals have significant strengths.<sup>[71]</sup> Visual 
            processing, hands-on learning, creativity, or specific academic areas may be areas of strength.<sup>[72]</sup> 
            With appropriate support, individuals with APD can be successful academically and professionally.<sup>[73]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Importance of Understanding APD</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Beyond "Not Listening"</h3>
          <p className="mb-4">
            APD is often misunderstood as willful inattention or defiance.<sup>[74]</sup> Understanding that 
            challenges stem from neurological differences in auditory processing, not laziness or behavior 
            problems, is crucial.<sup>[75]</sup> This understanding shifts responses from punitive to supportive.<sup>[76]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Impact on Self-Esteem</h3>
          <p className="mb-4">
            Children with undiagnosed APD may internalize messages that they're not trying hard enough or not 
            smart enough.<sup>[77]</sup> Diagnosis provides explanation and validation, helping individuals 
            understand their experiences aren't their fault.<sup>[78]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Informing Support</h3>
          <p className="mb-4">
            Understanding APD guides appropriate interventions, accommodations, and environmental modifications.<sup>[79]</sup> 
            Without this understanding, interventions may target the wrong areas or fail to address core 
            auditory processing needs.<sup>[80]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Points:</h3>
            <div className="text-sm">
              <p>
                Auditory Processing Disorder is a neurological condition affecting how the brain processes sound, 
                not a hearing loss.<sup>[81]</sup> It affects approximately 2-5% of children and often co-occurs 
                with other neurodivergent conditions.<sup>[82]</sup> APD creates real challenges in academic, 
                social, and daily life situations, but with understanding, appropriate support, and development 
                of compensatory strategies, individuals with APD can be successful.<sup>[83]</sup> Recognition 
                and accurate diagnosis are essential first steps toward effective support.<sup>[84]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Speech-Language-Hearing Association. (2005). "(Central) auditory processing disorders." <em>Technical Report</em>. Available from www.asha.org/policy.</p>
          <p>[2] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[3] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[4] ASHA Working Group on Auditory Processing Disorders. (2005). "(Central) auditory processing disorders." <em>American Speech-Language-Hearing Association</em>.</p>
          <p>[5] Chermak, G. D., & Musiek, F. E. (1997). <em>Central auditory processing disorders: New perspectives</em>. San Diego: Singular Publishing Group.</p>
          <p>[6] Dawes, P., & Bishop, D. (2009). "Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique." <em>International Journal of Language & Communication Disorders</em>, 44(4), 440-465.</p>
          <p>[7] Moore, D. R. (2006). "Auditory processing disorder (APD): Definition, diagnosis, neural basis, and intervention." <em>Audiological Medicine</em>, 4(1), 4-11.</p>
          <p>[8] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[9] Musiek, F. E., & Baran, J. A. (2007). <em>The auditory system: Anatomy, physiology, and clinical correlates</em>. Boston: Allyn & Bacon.</p>
          <p>[10] Moore, D. R. (2011). "The diagnosis and management of auditory processing disorder." <em>Language, Speech, and Hearing Services in Schools</em>, 42(3), 303-308.</p>
          <p>[11] Jerger, J., & Musiek, F. (2000). "Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
          <p>[12] Chermak, G. D., Tucker, E., & Seikel, J. A. (2002). "Behavioral characteristics of auditory processing disorder and attention-deficit hyperactivity disorder: Predominantly inattentive type." <em>Journal of the American Academy of Audiology</em>, 13(6), 332-338.</p>
          <p>[13] Hind, S. E., Haines-Bazrafshan, R., Benton, C. L., Brassington, W., Towle, B., & Moore, D. R. (2011). "Prevalence of clinical referrals having hearing thresholds within normal limits." <em>International Journal of Audiology</em>, 50(10), 708-716.</p>
          <p>[14] Wilson, W. J., & Arnott, W. (2013). "Using different criteria to diagnose (central) auditory processing disorder: How big a difference does it make?" <em>Journal of Speech, Language, and Hearing Research</em>, 56(1), 63-70.</p>
          <p>[15] Keith, R. W., & Anderson, J. (2007). "Dichotic listening tests." In F. E. Musiek & G. D. Chermak (Eds.), <em>Handbook of central auditory processing disorder: Vol. 1. Auditory neuroscience and diagnosis</em> (pp. 167-186). San Diego: Plural Publishing.</p>
          <p>[16] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[17] DeBonis, D. A., & Moncrieff, D. (2008). "Dichotic listening in children: Age-related changes in direction and magnitude of ear advantage." <em>Brain and Cognition</em>, 67(2), 191-197.</p>
          <p>[18] Neijenhuis, K., Snik, A., Priester, G., van Kordenoordt, S., & van den Broek, P. (2002). "Age effects and normative data on a Dutch test battery for auditory processing disorders." <em>International Journal of Audiology</em>, 41(6), 334-346.</p>
          <p>[19] Schow, R. L., Seikel, J. A., Chermak, G. D., & Berent, M. (2000). "Central auditory processes and test measures: ASHA 1996 revisited." <em>American Journal of Audiology</em>, 9(2), 63-68.</p>
          <p>[20] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[21] Katz, J., & Smith, P. S. (1991). "The staggered spondaic word test: A ten-minute look at the central nervous system through the ears." <em>Annals of the New York Academy of Sciences</em>, 620(1), 233-251.</p>
          <p>[22] Baum, S. R., & Pell, M. D. (1999). "The neural bases of prosody: Insights from lesion studies and neuroimaging." <em>Aphasiology</em>, 13(8), 581-608.</p>
          <p>[23] Doherty, C. P., & Daniloff, R. G. (1993). "Perception of temporal and spectral information in nonsense syllables by normal and language-impaired children." <em>Language, Speech, and Hearing Services in Schools</em>, 24(4), 199-207.</p>
          <p>[24] Musiek, F. E., Gollegly, K. M., Kibbe, K. S., & Verkest-Lenz, S. B. (1991). "Proposed screening test for central auditory disorders: Follow-up on the dichotic digits test." <em>American Journal of Otology</em>, 12(2), 109-113.</p>
          <p>[25] Bellis, T. J. (2011). "Assessment and management of central auditory processing disorders: From science to practice." <em>Plural Publishing</em>.</p>
          <p>[26] Jerger, J., & Musiek, F. (2000). "Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
          <p>[27] Kimura, D. (1961). "Cerebral dominance and the perception of verbal stimuli." <em>Canadian Journal of Psychology</em>, 15(3), 166-171.</p>
          <p>[28] Wilson, W. J., & Arnott, W. (2013). "Using different criteria to diagnose (central) auditory processing disorder: How big a difference does it make?" <em>Journal of Speech, Language, and Hearing Research</em>, 56(1), 63-70.</p>
          <p>[29] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[30] Tallal, P. (1980). "Auditory temporal perception, phonics, and reading disabilities in children." <em>Brain and Language</em>, 9(2), 182-198.</p>
          <p>[31] Keith, R. W. (2000). "Development and standardization of SCAN-C Test for Auditory Processing Disorders in Children." <em>Journal of the American Academy of Audiology</em>, 11(8), 438-445.</p>
          <p>[32] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[33] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[34] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[35] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[36] Hind, S. (2006). "Survey of care pathway for auditory processing disorder." <em>Audiological Medicine</em>, 4(1), 12-24.</p>
          <p>[37] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Educational Audiology Association</em>.</p>
          <p>[38] Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., & Molt, L. (1994). "Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 33(6), 849-857.</p>
          <p>[39] Gascon, G. G., Johnson, R., & Burd, L. (1986). "Central auditory processing and attention deficit disorders." <em>Journal of Child Neurology</em>, 1(1), 27-33.</p>
          <p>[40] Iliadou, V., Ptok, M., Grech, H., Pedersen, E. R., Brechmann, A., Deggouj, N., ... & Kiese-Himmel, C. (2017). "A European perspective on auditory processing disorder—current knowledge and future research focus." <em>Frontiers in Neurology</em>, 8, 622.</p>
          <p>[41] Tallal, P. (1980). "Auditory temporal perception, phonics, and reading disabilities in children." <em>Brain and Language</em>, 9(2), 182-198.</p>
          <p>[42] Goswami, U., Thomson, J., Richardson, U., Stainthorp, R., Hughes, D., Rosen, S., & Scott, S. K. (2002). "Amplitude envelope onsets and developmental dyslexia: A new hypothesis." <em>Proceedings of the National Academy of Sciences</em>, 99(16), 10911-10916.</p>
          <p>[43] McArthur, G. M., & Bishop, D. V. (2001). "Auditory perceptual processing in people with reading and oral language impairments: Current issues and recommendations." <em>Dyslexia</em>, 7(3), 150-170.</p>
          <p>[44] O'Connor, K. (2012). "Auditory processing in autism spectrum disorder: A review." <em>Neuroscience & Biobehavioral Reviews</em>, 36(2), 836-854.</p>
          <p>[45] Tomchek, S. D., & Dunn, W. (2007). "Sensory processing in children with and without autism: A comparative study using the short sensory profile." <em>American Journal of Occupational Therapy</em>, 61(2), 190-200.</p>
          <p>[46] Alcántara, J. I., Weisblatt, E. J., Moore, B. C., & Bolton, P. F. (2004). "Speech-in-noise perception in high-functioning individuals with autism or Asperger's syndrome." <em>Journal of Child Psychology and Psychiatry</em>, 45(6), 1107-1114.</p>
          <p>[47] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[48] Bishop, D. V., & McArthur, G. M. (2005). "Individual differences in auditory processing in specific language impairment: A follow-up study using event-related potentials and behavioural thresholds." <em>Cortex</em>, 41(3), 327-341.</p>
          <p>[49] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[50] Bocca, E., Calearo, C., & Cassinari, V. (1954). "A new method for testing hearing in temporal lobe tumours." <em>Acta Oto-Laryngologica</em>, 44(3), 219-221.</p>
          <p>[51] Myklebust, H. R. (1954). <em>Auditory disorders in children: A manual for differential diagnosis</em>. New York: Grune & Stratton.</p>
          <p>[52] Jerger, J., & Musiek, F. (2000). "Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
          <p>[53] American Speech-Language-Hearing Association. (2005). "(Central) auditory processing disorders." <em>Technical Report</em>. Available from www.asha.org/policy.</p>
          <p>[54] British Society of Audiology. (2018). "Position statement and practice guidance: Auditory processing disorder (APD)." <em>BSA</em>.</p>
          <p>[55] Moore, D. R., & Hunter, L. L. (2013). "Auditory processing disorder (APD) in children: A marker of neurodevelopmental syndrome." <em>Hearing, Balance and Communication</em>, 11(3), 160-167.</p>
          <p>[56] Rosen, S. (2005). "A riddle wrapped in a mystery inside an enigma: Defining central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 139-142.</p>
          <p>[57] Cacace, A. T., & McFarland, D. J. (2013). "Factors influencing tests of auditory processing: A perspective on current issues and relevant concerns." <em>Journal of the American Academy of Audiology</em>, 24(7), 572-589.</p>
          <p>[58] Friel-Patti, S. (1999). "Clinical decision-making in the assessment and intervention of central auditory processing disorders." <em>Language, Speech, and Hearing Services in Schools</em>, 30(4), 345-352.</p>
          <p>[59] Weihing, J. A., Musiek, F. E., & Shinn, J. B. (2007). "The dichotic digits test: Normative data for children (ages 7-12) and adults." <em>The Hearing Journal</em>, 60(9), 32-40.</p>
          <p>[60] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[61] McArthur, G. M., & Bishop, D. V. (2004). "Frequency discrimination deficits in people with specific language impairment: Reliability, validity, and linguistic correlates." <em>Journal of Speech, Language, and Hearing Research</em>, 47(3), 527-541.</p>
          <p>[62] Dawes, P., Bishop, D. V., Sirimanna, T., & Bamiou, D. E. (2008). "Profile and aetiology of children diagnosed with auditory processing disorder (APD)." <em>International Journal of Pediatric Otorhinolaryngology</em>, 72(4), 483-489.</p>
          <p>[63] Moore, D. R., Cowan, J. A., Riley, A., Edmondson-Jones, A. M., & Ferguson, M. A. (2011). "Development of auditory processing in 6- to 11-yr-old children." <em>Ear and Hearing</em>, 32(3), 269-285.</p>
          <p>[64] Bamiou, D. E., Musiek, F. E., & Luxon, L. M. (2001). "Aetiology and clinical presentations of auditory processing disorders—a review." <em>Archives of Disease in Childhood</em>, 85(5), 361-365.</p>
          <p>[65] Fuente, A., & McPherson, B. (2006). "Organic solvents and hearing loss: The challenge for audiology." <em>International Journal of Audiology</em>, 45(7), 367-381.</p>
          <p>[66] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[67] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[68] Fey, M. E., Richard, G. J., Geffner, D., Kamhi, A. G., Medwetsky, L., Paul, D., ... & Schooling, T. (2011). "Auditory processing disorder and auditory/language interventions: An evidence-based systematic review." <em>Language, Speech, and Hearing Services in Schools</em>, 42(3), 246-264.</p>
          <p>[69] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[70] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[71] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[72] Moore, D. R. (2011). "The diagnosis and management of auditory processing disorder." <em>Language, Speech, and Hearing Services in Schools</em>, 42(3), 303-308.</p>
          <p>[73] Chermak, G. D., & Musiek, F. E. (1997). <em>Central auditory processing disorders: New perspectives</em>. San Diego: Singular Publishing Group.</p>
          <p>[74] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[75] Bellis, T. J. (2011). "Assessment and management of central auditory processing disorders: From science to practice." <em>Plural Publishing</em>.</p>
          <p>[76] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[77] Dawes, P., Bishop, D. V., Sirimanna, T., & Bamiou, D. E. (2008). "Profile and aetiology of children diagnosed with auditory processing disorder (APD)." <em>International Journal of Pediatric Otorhinolaryngology</em>, 72(4), 483-489.</p>
          <p>[78] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[79] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[80] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[81] American Speech-Language-Hearing Association. (2005). "(Central) auditory processing disorders." <em>Technical Report</em>. Available from www.asha.org/policy.</p>
          <p>[82] Chermak, G. D., Tucker, E., & Seikel, J. A. (2002). "Behavioral characteristics of auditory processing disorder and attention-deficit hyperactivity disorder: Predominantly inattentive type." <em>Journal of the American Academy of Audiology</em>, 13(6), 332-338.</p>
          <p>[83] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[84] Jerger, J., & Musiek, F. (2000). "Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('apd'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Auditory Processing Disorder
        </a>
      </div>
    </article>
  );
}
