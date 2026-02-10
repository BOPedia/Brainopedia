import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleAPDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleAPD({ setCurrentArticle }: ArticleAPDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with APD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-living');
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
        Auditory Processing Disorder (APD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Auditory Processing Disorder (APD)</strong>, also known as Central Auditory Processing 
            Disorder (CAPD), is a neurological condition where the brain has difficulty processing and 
            interpreting auditory information.<sup>[1]</sup> While hearing sensitivity is typically normal, the brain 
            struggles to make sense of what the ears detect—creating a unique auditory neurotype.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Auditory Processing Disorder"
            data={[
              { label: 'Other names', value: 'APD, CAPD, Central Auditory Processing Disorder' },
              { label: 'Specialty', value: 'Audiology, Speech-Language Pathology' },
              { label: 'Symptoms', value: 'Difficulty processing auditory information' },
              { label: 'Key distinction', value: 'Not a hearing loss, but brain processing difference' },
              { label: 'Frequency', value: 'Approximately 5% of school-aged children' },
              { label: 'Related to', value: 'Often co-occurs with ADHD, dyslexia, autism' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1617803021651-8df9d37672a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsaXN0ZW5pbmclMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc2NzQwNTk3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Person listening with headphones - auditory processing"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            APD affects the central auditory nervous system's ability to filter, analyze, and integrate 
            sound.<sup>[3]</sup> The ears function normally, but the auditory pathways in the brain process sound 
            differently, making it challenging to distinguish between similar sounds, filter background 
            noise, remember auditory information, or quickly process verbal instructions.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            Approximately 
            5% of school-aged children have APD, though it often goes undiagnosed.<sup>[5]</sup> The condition can occur 
            independently or alongside other neurodivergent conditions like ADHD, dyslexia, or autism.<sup>[6]</sup> APD 
            represents a fundamental difference in how the brain organizes and interprets the auditory world.<sup>[7]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1567787758801-42c8b5e28e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBub2lzZSUyMGNhbmNlbGluZyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzY3NDA1OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Person with noise canceling headphones - managing auditory challenges"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            APD is characterized by auditory discrimination difficulties including trouble distinguishing between 
            similar-sounding words, difficulty hearing subtle differences in speech sounds, mishearing words, and 
            challenges with rhyming or phonics.<sup>[8]</sup> Background noise challenges are significant, with extreme difficulty 
            understanding speech in noisy environments, inability to filter out background sounds, and feeling 
            overwhelmed in acoustically busy spaces.<sup>[9][10]</sup>
          </p>
          
          <p className="mb-4">
            Auditory memory and sequencing difficulties include trouble 
            remembering spoken information, difficulty following multi-step verbal instructions, and needing 
            information repeated multiple times.<sup>[11]</sup> Processing speed challenges include delayed responses to auditory 
            information, needing extra time to process what was said, and difficulty following fast-paced conversations.<sup>[12]</sup> 
            Some individuals also have difficulty determining where sounds are coming from (sound localization).<sup>[13]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGF1ZGl0b3J5JTIwcHJvY2Vzc2luZ3xlbnwxfHx8fDE3Njc0MDU5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain auditory processing - neurological basis of APD"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            APD is fundamentally different from hearing loss—it is not a problem with the ear's ability to detect 
            sound, but rather a problem with how the brain processes sound that the ear successfully detects.<sup>[14]</sup> The 
            ears work normally, but the brain's auditory pathways interpret the information differently, representing 
            a central processing difference rather than peripheral hearing loss.<sup>[15]</sup>
          </p>
          
          <p className="mb-4">
            Research suggests neurological 
            differences in the auditory pathways of the brain, particularly in areas responsible for filtering, 
            analyzing, and integrating sound.<sup>[16]</sup> The exact causes are not fully understood, though APD may result from 
            differences in brain development, genetics, or in some cases, factors like early chronic ear infections 
            or neurological conditions.<sup>[17][18]</sup> Brain imaging studies have revealed differences in how auditory information 
            is processed in the central auditory nervous system.<sup>[19]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1713403857782-80a39b5af884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFyaW5nJTIwdGVzdCUyMGF1ZGlvbG9naXN0fGVufDF8fHx8MTc2NzQwNTk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hearing test and audiological assessment - diagnosing APD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            APD is diagnosed by audiologists using specialized assessments that measure how the brain processes sound, 
            not just whether sounds can be heard.<sup>[20]</sup> The evaluation includes comprehensive hearing tests to rule out 
            peripheral hearing loss, specialized auditory processing tests evaluating auditory discrimination, temporal 
            processing, binaural integration, and auditory pattern recognition, speech-in-noise testing to assess 
            ability to understand speech in background noise, auditory memory and sequencing assessments, and 
            developmental and educational history.<sup>[21][22]</sup>
          </p>
          
          <p className="mb-4">
            APD is typically diagnosed in children age 7 or older, as younger 
            children's auditory systems are still developing.<sup>[23]</sup> Testing must rule out other conditions that can mimic 
            APD symptoms, such as attention difficulties, language disorders, or cognitive processing differences.<sup>[24]</sup> 
            A comprehensive multidisciplinary evaluation is often recommended.<sup>[25]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1759889392281-afb67bc793ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMHN0dWR5JTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzY3NDA1OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Quiet study environment - supportive accommodations for APD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Managing APD involves environmental accommodations such as preferential seating (front of classroom, away 
            from noise sources), reducing background noise when possible, using acoustic treatments (rugs, curtains, 
            sound-dampening panels), FM systems or personal amplification devices, and quiet work spaces for 
            concentration tasks.<sup>[26][27]</sup> Communication strategies include face-to-face communication when possible (visual 
            cues help), speaking slowly and clearly, pausing between instructions or concepts, providing written or 
            visual information alongside verbal, and using keywords and simplified language.<sup>[28]</sup>
          </p>
          
          <p className="mb-4">
            Compensatory skills include 
            note-taking or recording lectures, closed captioning for videos and media, visual organizers and written 
            schedules, and self-advocacy skills.<sup>[29]</sup> Specialized auditory training programs and therapy can help improve 
            auditory processing skills.<sup>[30]</sup> Technology tools such as speech-to-text software, noise-canceling headphones, 
            and audio speed adjustment can be beneficial.<sup>[31]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with APD</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1617803021651-8df9d37672a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsaXN0ZW5pbmclMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc2NzQwNTk3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with APD - successful navigation of auditory challenges"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with APD lead successful and fulfilling lives across all areas of society.<sup>[32]</sup> APD affects many 
            aspects of daily life including academic performance, social situations, communication, phone conversations, 
            and can cause frustration and exhaustion from constant effort to decode auditory information.<sup>[33]</sup> However, with 
            appropriate accommodations and self-understanding, people with APD develop effective strategies for navigating 
            auditory challenges.<sup>[34]</sup>
          </p>
          
          <p className="mb-4">
            Living well with APD involves understanding one's auditory processing profile, developing 
            compensatory strategies and using assistive technology, accessing appropriate accommodations in education and 
            employment, and building confidence through areas of strength.<sup>[35]</sup> Topics related to living with APD include 
            self-advocacy in requesting accommodations, managing challenging auditory environments, navigating social and 
            professional situations, using visual and written supports effectively, and understanding legal protections 
            for educational and workplace accommodations.<sup>[36]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Speech-Language-Hearing Association. (2005). <em>(Central) Auditory Processing Disorders—The Role of the Audiologist [Technical Report]</em>. Available from www.asha.org/policy.</p>
          <p>[2] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Thomson Delmar Learning.</p>
          <p>[3] Chermak, G. D., & Musiek, F. E. (1997). <em>Central auditory processing disorders: New perspectives</em>. San Diego, CA: Singular Publishing Group.</p>
          <p>[4] Moore, D. R. (2007). "Auditory processing disorders: Acquisition and treatment." <em>Journal of Communication Disorders</em>, 40(4), 295-304.</p>
          <p>[5] Chermak, G. D., Tucker, E., & Seikel, J. A. (2002). "Behavioral characteristics of auditory processing disorder and attention-deficit hyperactivity disorder: Predominantly inattentive type." <em>Journal of the American Academy of Audiology</em>, 13(6), 332-338.</p>
          <p>[6] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[7] Keith, R. W., & Novak, K. K. (1984). "Relationships between tests of central auditory function and receptive language." <em>Seminars in Hearing</em>, 5(3), 243-250.</p>
          <p>[8] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[9] Wilson, R. H., & Arnott, W. (2013). "Using different criteria to define multi-lingual participants' performance on a digits-in-noise test." <em>International Journal of Audiology</em>, 52(5), 305-313.</p>
          <p>[10] Neijenhuis, K., Snik, A., Priester, G., van Kordenoordt, S., & van den Broek, P. (2002). "Age effects and normative data on a Dutch test battery for auditory processing disorders." <em>International Journal of Audiology</em>, 41(6), 334-346.</p>
          <p>[11] Jirsa, R. E. (2002). "Clinical efficacy of electrophysiologic measures in APD management programs." <em>Seminars in Hearing</em>, 23(4), 349-355.</p>
          <p>[12] Dawes, P., & Bishop, D. V. M. (2009). "Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique." <em>International Journal of Language & Communication Disorders</em>, 44(4), 440-465.</p>
          <p>[13] Musiek, F. E., & Chermak, G. D. (2007). <em>Handbook of (central) auditory processing disorder: Auditory neuroscience and diagnosis</em> (Vol. 1). San Diego, CA: Plural Publishing.</p>
          <p>[14] American Academy of Audiology. (2010). <em>Clinical Practice Guidelines: Diagnosis, Treatment and Management of Children and Adults with Central Auditory Processing Disorder</em>. Reston, VA: Author.</p>
          <p>[15] Jerger, J., & Musiek, F. (2000). "Report of the consensus conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
          <p>[16] Kraus, N., & Chandrasekaran, B. (2010). "Music training for the development of auditory skills." <em>Nature Reviews Neuroscience</em>, 11(8), 599-605.</p>
          <p>[17] Banai, K., & Kraus, N. (2008). "The dynamic brainstem: Implications for auditory processing disorder." In D. B. McFarland & A. T. Cacace (Eds.), <em>Current controversies in central auditory processing disorder</em> (pp. 269-289). San Diego, CA: Plural Publishing.</p>
          <p>[18] Moore, D. R., Rosenberg, J. F., & Coleman, J. S. (2005). "Discrimination training of phonemic contrasts enhances phonological processing in mainstream school children." <em>Brain and Language</em>, 94(1), 72-85.</p>
          <p>[19] Hornickel, J., & Kraus, N. (2013). "Unstable representation of sound: A biological marker of dyslexia." <em>Journal of Neuroscience</em>, 33(8), 3500-3504.</p>
          <p>[20] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[21] Keith, R. W. (2000). <em>SCAN-C: Test for Auditory Processing Disorders in Children—Revised</em>. San Antonio, TX: Pearson.</p>
          <p>[22] Musiek, F. E., Shinn, J. B., Jirsa, R., Bamiou, D. E., Baran, J. A., & Zaida, E. (2005). "GIN (Gaps-In-Noise) test performance in subjects with confirmed central auditory nervous system involvement." <em>Ear and Hearing</em>, 26(6), 608-618.</p>
          <p>[23] Katz, J., Stecker, N. A., & Henderson, D. (1992). <em>Central Auditory Processing: A Transdisciplinary View</em>. St. Louis, MO: Mosby Year Book.</p>
          <p>[24] Richard, G. J., & Ferre, J. M. (2006). <em>Differential screening test for processing</em>. East Moline, IL: LinguiSystems.</p>
          <p>[25] Bamiou, D. E., Musiek, F. E., & Luxon, L. M. (2001). "Aetiology and clinical presentations of auditory processing disorders—a review." <em>Archives of Disease in Childhood</em>, 85(5), 361-365.</p>
          <p>[26] Crandell, C. C., & Smaldino, J. J. (2000). "Classroom acoustics for children with normal hearing and with hearing impairment." <em>Language, Speech, and Hearing Services in Schools</em>, 31(4), 362-370.</p>
          <p>[27] Anderson, K. L., & Goldstein, H. (2004). "Speech perception benefits of FM and infrared devices to children with hearing aids in a typical classroom." <em>Language, Speech, and Hearing Services in Schools</em>, 35(2), 169-184.</p>
          <p>[28] Ferre, J. M. (1997). "Processing power: A guide to CAPD assessment and management." <em>Communication Skill Builders</em>.</p>
          <p>[29] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[30] Tallal, P., Miller, S. L., Bedi, G., et al. (1996). "Language comprehension in language-learning impaired children improved with acoustically modified speech." <em>Science</em>, 271(5245), 81-84.</p>
          <p>[31] Schow, R. L., Seikel, J. A., Chermak, G. D., & Berent, M. (2000). "Central auditory processes and test measures: ASHA 1996 revisited." <em>American Journal of Audiology</em>, 9(2), 63-68.</p>
          <p>[32] Kelly, A. S. (2007). <em>Evidence-based practice in auditory training and auditory processing disorder</em>. In R. J. Roeser, M. Valente, & H. Hosford-Dunn (Eds.), <em>Audiology: Diagnosis</em> (2nd ed., pp. 555-577). New York: Thieme.</p>
          <p>[33] Hind, S. E., Haines-Bazrafshan, R., Benton, C. L., et al. (2011). "Prevalence of clinical referrals having hearing thresholds within normal limits." <em>International Journal of Audiology</em>, 50(10), 708-716.</p>
          <p>[34] Chermak, G. D., Silva, M. E., Nye, J., Hasbrouck, J., & Musiek, F. E. (2007). "An update on professional education and clinical practices in central auditory processing." <em>Journal of the American Academy of Audiology</em>, 18(5), 428-452.</p>
          <p>[35] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Tampa, FL: Educational Audiology Association</em>.</p>
          <p>[36] DeBonis, D. A., & Moncrieff, D. (2008). "Auditory processing disorders: An update for speech-language pathologists." <em>American Journal of Speech-Language Pathology</em>, 17(1), 4-18.</p>
        </div>
      </section>
    </article>
  );
}
