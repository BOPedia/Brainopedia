import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface APDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function APDSymptoms({ setCurrentArticle }: APDSymptomsProps) {
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
        Auditory Processing Disorder: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            The symptoms of Auditory Processing Disorder reflect difficulty processing auditory information 
            despite normal hearing sensitivity.<sup>[1]</sup> These characteristics manifest across listening, 
            academic, social, and behavioral domains, creating a complex profile that varies among individuals.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Auditory Symptoms</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1567787758801-42c8b5e28e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsaXN0ZW5pbmclMjBoZWFkcGhvbmVzfGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Person listening with headphones"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty Hearing in Noise</h3>
          <p className="mb-4">
            The hallmark symptom of APD is difficulty understanding speech in background noise.<sup>[3]</sup> 
            While individuals may hear well in quiet environments, their performance deteriorates significantly 
            when competing sounds are present.<sup>[4]</sup> This affects functioning in classrooms, restaurants, 
            parties, or anywhere with ambient noise.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Frequent Requests for Repetition</h3>
          <p className="mb-4">
            Individuals with APD frequently say "what?" or "huh?" even when speech is audible.<sup>[6]</sup> 
            They need information repeated, often multiple times, to process it accurately.<sup>[7]</sup> This 
            isn't due to inattention but reflects genuine difficulty processing what was heard.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty with Auditory Discrimination</h3>
          <p className="mb-4">
            Distinguishing between similar-sounding words or phonemes is challenging.<sup>[9]</sup> Words like 
            "cat" and "cap" or "think" and "thick" may sound identical.<sup>[10]</sup> This affects spelling, 
            reading, and communication accuracy.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sound Localization Difficulties</h3>
          <p className="mb-4">
            Determining where sounds come from may be difficult.<sup>[12]</sup> This affects safety (not knowing 
            where a car horn came from) and social situations (not knowing who spoke in a group).<sup>[13]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Temporal Processing Problems</h3>
          <p className="mb-4">
            Difficulty processing the timing and order of sounds affects perception of rapid speech, music, 
            and tone patterns.<sup>[14]</sup> Understanding fast talkers or keeping up with rapid verbal 
            exchanges is challenging.<sup>[15]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Language and Communication Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Following Directions Difficulties</h3>
          <p className="mb-4">
            Multi-step verbal directions are particularly challenging.<sup>[16]</sup> By the time the third 
            step is given, the first may be forgotten or misunderstood.<sup>[17]</sup> Written directions are 
            typically processed more successfully.<sup>[18]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Delayed Verbal Responses</h3>
          <p className="mb-4">
            Response time to verbal questions or instructions may be slow as the brain processes the auditory 
            input.<sup>[19]</sup> This delay is often misinterpreted as inattention or cognitive delay.<sup>[20]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty Understanding Abstract Language</h3>
          <p className="mb-4">
            Idioms, figurative language, sarcasm, or humor may be difficult to comprehend when delivered 
            verbally.<sup>[21]</sup> The prosodic cues that signal non-literal meaning may not be processed 
            effectively.<sup>[22]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Inconsistent Listening Performance</h3>
          <p className="mb-4">
            Performance varies depending on listening conditions, fatigue level, and task complexity.<sup>[23]</sup> 
            This inconsistency is confusing to others who may not understand why someone "hears when they want 
            to."<sup>[24]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Academic Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2xhc3Nyb29tfGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student in classroom"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading and Spelling Difficulties</h3>
          <p className="mb-4">
            Phonological processing deficits associated with APD affect phonics-based reading and spelling.<sup>[25]</sup> 
            Decoding unfamiliar words, distinguishing similar-sounding words, and spelling phonetically irregular 
            words are challenging.<sup>[26]</sup> Reading comprehension may suffer when decoding is effortful.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Note-Taking Challenges</h3>
          <p className="mb-4">
            Simultaneously listening to lectures and writing notes is extremely difficult.<sup>[28]</sup> By 
            the time information is processed and written, the speaker has moved on.<sup>[29]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Better Performance with Visual Materials</h3>
          <p className="mb-4">
            Visual learning modalities are often strengths.<sup>[30]</sup> Reading material independently yields 
            better comprehension than listening to the same material.<sup>[31]</sup> Charts, diagrams, and 
            written instructions are processed more effectively than verbal equivalents.<sup>[32]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty with Verbal Tests</h3>
          <p className="mb-4">
            Performance on tests with verbal instructions or auditory components underestimates actual knowledge.<sup>[33]</sup> 
            Written tests better reflect understanding.<sup>[34]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language-Based Learning Challenges</h3>
          <p className="mb-4">
            Subjects relying heavily on verbal instruction or oral participation pose greater challenges.<sup>[35]</sup> 
            Foreign language learning, which requires auditory discrimination of new phonemes, is particularly 
            difficult.<sup>[36]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Attention and Memory Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Apparent Inattention</h3>
          <p className="mb-4">
            Individuals with APD often appear inattentive or distracted, particularly during verbal instruction.<sup>[37]</sup> 
            This reflects the difficulty of sustained auditory processing rather than true attention deficit, 
            though ADHD commonly co-occurs.<sup>[38]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Memory Difficulties</h3>
          <p className="mb-4">
            Remembering verbally presented information—phone numbers, names, lists, or instructions—is 
            challenging.<sup>[39]</sup> This affects both short-term (working memory) and long-term retention 
            of auditory information.<sup>[40]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty Filtering Background Noise</h3>
          <p className="mb-4">
            The brain struggles to filter out irrelevant sounds and focus on target speech.<sup>[41]</sup> 
            All sounds may seem equally important, making selective attention to relevant auditory information 
            difficult.<sup>[42]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mental Fatigue from Listening</h3>
          <p className="mb-4">
            The cognitive effort required for auditory processing leads to "listening fatigue."<sup>[43]</sup> 
            By the end of a school or work day, auditory processing capacity may be depleted.<sup>[44]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social and Behavioral Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Communication Difficulties</h3>
          <p className="mb-4">
            Following conversations in groups or noisy social settings is exhausting and often unsuccessful.<sup>[45]</sup> 
            Missing parts of conversations leads to confusion or inappropriate responses.<sup>[46]</sup> Social 
            gatherings may be avoided due to listening challenges.<sup>[47]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty Reading Social Cues</h3>
          <p className="mb-4">
            Prosodic deficits affect understanding of emotion, sarcasm, or intent conveyed through tone.<sup>[48]</sup> 
            Jokes may be taken literally, or sarcasm missed entirely.<sup>[49]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Behavioral Frustration</h3>
          <p className="mb-4">
            Frustration from communication breakdowns may manifest as irritability, withdrawal, or acting out.<sup>[50]</sup> 
            Younger children may have tantrums when overwhelmed by auditory demands.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Preference for Solitary or Quiet Activities</h3>
          <p className="mb-4">
            Activities requiring minimal auditory processing may be preferred.<sup>[52]</sup> Reading, art, 
            building, or computer activities in quiet environments provide relief from listening demands.<sup>[53]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sensory Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2lzZSUyMHNlbnNpdGl2ZXxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Noise sensitivity concept"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Hypersensitivity</h3>
          <p className="mb-4">
            Some individuals with APD also experience sound sensitivity or hyperacusis.<sup>[54]</sup> Certain 
            sounds may be uncomfortable or even painful.<sup>[55]</sup> This differs from phonophobia (fear 
            of sounds) and represents genuine sensory sensitivity.<sup>[56]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty with Multiple Sensory Inputs</h3>
          <p className="mb-4">
            Processing auditory information while managing visual or other sensory input is challenging.<sup>[57]</sup> 
            Multisensory environments may be particularly overwhelming.<sup>[58]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Musical and Prosodic Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty with Music</h3>
          <p className="mb-4">
            Musical processing may be affected, including difficulty carrying a tune, learning songs, or 
            discriminating pitch.<sup>[59]</sup> However, musical abilities vary widely among individuals 
            with APD.<sup>[60]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prosodic Processing Deficits</h3>
          <p className="mb-4">
            Difficulty processing speech melody, rhythm, and intonation affects comprehension of emotional 
            content and pragmatic meaning.<sup>[61]</sup> The same words spoken with different intonation 
            may not be perceived as having different meanings.<sup>[62]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Age-Related Manifestations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Childhood (Preschool)</h3>
          <p className="mb-4">
            Young children may show delayed language development, difficulty learning songs or rhymes, 
            frequent "what?" responses, or behavioral issues in noisy environments.<sup>[63]</sup> They may 
            not respond to name being called or follow simple directions.<sup>[64]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Elementary School Years</h3>
          <p className="mb-4">
            Academic difficulties emerge as classroom listening demands increase.<sup>[65]</sup> Reading and 
            spelling problems, difficulty following teacher instructions, poor note-taking, and social 
            challenges become apparent.<sup>[66]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adolescence</h3>
          <p className="mb-4">
            Increased academic complexity, faster-paced instruction, and complex social communication create 
            growing challenges.<sup>[67]</sup> However, compensatory strategies and environmental modifications 
            may improve functioning.<sup>[68]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adulthood</h3>
          <p className="mb-4">
            Adults with APD continue experiencing difficulty in meetings, lectures, phone conversations, or 
            social gatherings.<sup>[69]</sup> Workplace challenges include difficulty with verbal instructions, 
            conference calls, or open office environments.<sup>[70]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Distinguishing APD from Similar Conditions</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD vs. Hearing Loss</h3>
          <p className="mb-4">
            Unlike hearing loss, APD involves normal hearing sensitivity with impaired processing.<sup>[71]</sup> 
            Hearing tests show normal thresholds, but speech understanding in noise is disproportionately 
            affected.<sup>[72]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD vs. ADHD</h3>
          <p className="mb-4">
            Both conditions involve apparent inattention and difficulty following directions.<sup>[73]</sup> 
            Key differences include that APD symptoms are specific to auditory processing, while ADHD affects 
            attention across modalities.<sup>[74]</sup> However, the two frequently co-occur.<sup>[75]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">APD vs. Language Disorders</h3>
          <p className="mb-4">
            Language disorders affect linguistic processing beyond auditory input.<sup>[76]</sup> APD symptoms 
            should be disproportionate to language abilities and improve with visual input.<sup>[77]</sup> 
            However, distinguishing the two can be complex as they often overlap.<sup>[78]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Variability in Presentation</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Differences</h3>
          <p className="mb-4">
            APD manifests differently in each individual based on specific auditory processing deficits, 
            cognitive abilities, co-occurring conditions, and environmental factors.<sup>[79]</sup> No two 
            individuals present identically.<sup>[80]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Compensatory Masking</h3>
          <p className="mb-4">
            Strong cognitive abilities, context use, lip-reading, or written support may mask APD symptoms.<sup>[81]</sup> 
            In optimal conditions, individuals may appear to have no difficulties, while struggling significantly 
            in challenging listening situations.<sup>[82]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Recognizing APD:</h3>
            <div className="text-sm">
              <p>
                The core feature of APD is difficulty processing auditory information despite normal hearing, 
                particularly in background noise.<sup>[83]</sup> Additional symptoms include frequent requests 
                for repetition, difficulty following verbal directions, inconsistent listening performance, 
                academic challenges in listening-heavy tasks, and social communication difficulties.<sup>[84]</sup> 
                Symptoms vary among individuals and across contexts, making comprehensive assessment essential 
                for accurate diagnosis.<sup>[85]</sup>
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
          <p>[3] Moore, D. R., Cowan, J. A., Riley, A., Edmondson-Jones, A. M., & Ferguson, M. A. (2011). "Development of auditory processing in 6- to 11-yr-old children." <em>Ear and Hearing</em>, 32(3), 269-285.</p>
          <p>[4] Neijenhuis, K., Snik, A., Priester, G., van Kordenoordt, S., & van den Broek, P. (2002). "Age effects and normative data on a Dutch test battery for auditory processing disorders." <em>International Journal of Audiology</em>, 41(6), 334-346.</p>
          <p>[5] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[6] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Educational Audiology Association</em>.</p>
          <p>[7] Keith, R. W. (2000). "Development and standardization of SCAN-C Test for Auditory Processing Disorders in Children." <em>Journal of the American Academy of Audiology</em>, 11(8), 438-445.</p>
          <p>[8] Chermak, G. D., & Musiek, F. E. (1997). <em>Central auditory processing disorders: New perspectives</em>. San Diego: Singular Publishing Group.</p>
          <p>[9] Tallal, P. (1980). "Auditory temporal perception, phonics, and reading disabilities in children." <em>Brain and Language</em>, 9(2), 182-198.</p>
          <p>[10] Thibodeau, L. M. (2007). "Speech audiometry." In R. J. Roeser, M. Valente, & H. Hosford-Dunn (Eds.), <em>Audiology: Diagnosis</em> (2nd ed., pp. 281-299). New York: Thieme.</p>
          <p>[11] McArthur, G. M., & Bishop, D. V. (2001). "Auditory perceptual processing in people with reading and oral language impairments: Current issues and recommendations." <em>Dyslexia</em>, 7(3), 150-170.</p>
          <p>[12] Litovsky, R. Y. (2012). "Spatial release from masking." <em>Acoustics Today</em>, 8(2), 18-25.</p>
          <p>[13] Van Deun, L., van Wieringen, A., Van den Bogaert, T., Scherf, F., Offeciers, F. E., Van de Heyning, P. H., ... & Wouters, J. (2009). "Sound localization, sound lateralization, and binaural masking level differences in young children with normal hearing." <em>Ear and Hearing</em>, 30(2), 178-190.</p>
          <p>[14] Tallal, P., Miller, S. L., Bedi, G., Byma, G., Wang, X., Nagarajan, S. S., ... & Merzenich, M. M. (1996). "Language comprehension in language-learning impaired children improved with acoustically modified speech." <em>Science</em>, 271(5245), 81-84.</p>
          <p>[15] Wright, B. A., Lombardino, L. J., King, W. M., Puranik, C. S., Leonard, C. M., & Merzenich, M. M. (1997). "Deficits in auditory temporal and spectral resolution in language-impaired children." <em>Nature</em>, 387(6629), 176-178.</p>
          <p>[16] Keith, R. W., & Anderson, J. (2007). "Dichotic listening tests." In F. E. Musiek & G. D. Chermak (Eds.), <em>Handbook of central auditory processing disorder: Vol. 1. Auditory neuroscience and diagnosis</em> (pp. 167-186). San Diego: Plural Publishing.</p>
          <p>[17] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[18] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[19] Montgomery, J. W. (2008). "Role of auditory attention in the real-time processing of simple grammar by children with specific language impairment: A preliminary investigation." <em>International Journal of Language & Communication Disorders</em>, 43(5), 499-527.</p>
          <p>[20] Dawes, P., Bishop, D. V., Sirimanna, T., & Bamiou, D. E. (2008). "Profile and aetiology of children diagnosed with auditory processing disorder (APD)." <em>International Journal of Pediatric Otorhinolaryngology</em>, 72(4), 483-489.</p>
          <p>[21] Baum, S. R., & Pell, M. D. (1999). "The neural bases of prosody: Insights from lesion studies and neuroimaging." <em>Aphasiology</em>, 13(8), 581-608.</p>
          <p>[22] Doherty, C. P., & Daniloff, R. G. (1993). "Perception of temporal and spectral information in nonsense syllables by normal and language-impaired children." <em>Language, Speech, and Hearing Services in Schools</em>, 24(4), 199-207.</p>
          <p>[23] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[24] Hind, S. (2006). "Survey of care pathway for auditory processing disorder." <em>Audiological Medicine</em>, 4(1), 12-24.</p>
          <p>[25] McArthur, G. M., & Bishop, D. V. (2004). "Frequency discrimination deficits in people with specific language impairment: Reliability, validity, and linguistic correlates." <em>Journal of Speech, Language, and Hearing Research</em>, 47(3), 527-541.</p>
          <p>[26] Goswami, U., Thomson, J., Richardson, U., Stainthorp, R., Hughes, D., Rosen, S., & Scott, S. K. (2002). "Amplitude envelope onsets and developmental dyslexia: A new hypothesis." <em>Proceedings of the National Academy of Sciences</em>, 99(16), 10911-10916.</p>
          <p>[27] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[28] Friel-Patti, S. (1999). "Clinical decision-making in the assessment and intervention of central auditory processing disorders." <em>Language, Speech, and Hearing Services in Schools</em>, 30(4), 345-352.</p>
          <p>[29] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[30] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[31] Moore, D. R. (2011). "The diagnosis and management of auditory processing disorder." <em>Language, Speech, and Hearing Services in Schools</em>, 42(3), 303-308.</p>
          <p>[32] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[33] Keith, R. W. (2000). "SCAN-C: Test for Auditory Processing Disorders in Children—Revised." <em>San Antonio, TX: Psychological Corporation</em>.</p>
          <p>[34] Bellis, T. J. (2011). "Assessment and management of central auditory processing disorders: From science to practice." <em>Plural Publishing</em>.</p>
          <p>[35] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[36] Tallal, P., Miller, S., & Fitch, R. H. (1993). "Neurobiological basis of speech: A case for the preeminence of temporal processing." <em>Annals of the New York Academy of Sciences</em>, 682(1), 27-47.</p>
          <p>[37] Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., & Molt, L. (1994). "Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 33(6), 849-857.</p>
          <p>[38] Gascon, G. G., Johnson, R., & Burd, L. (1986). "Central auditory processing and attention deficit disorders." <em>Journal of Child Neurology</em>, 1(1), 27-33.</p>
          <p>[39] Musiek, F. E., Gollegly, K. M., Kibbe, K. S., & Verkest-Lenz, S. B. (1991). "Proposed screening test for central auditory disorders: Follow-up on the dichotic digits test." <em>American Journal of Otology</em>, 12(2), 109-113.</p>
          <p>[40] Dawes, P., & Bishop, D. (2009). "Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique." <em>International Journal of Language & Communication Disorders</em>, 44(4), 440-465.</p>
          <p>[41] Moore, D. R., Cowan, J. A., Riley, A., Edmondson-Jones, A. M., & Ferguson, M. A. (2011). "Development of auditory processing in 6- to 11-yr-old children." <em>Ear and Hearing</em>, 32(3), 269-285.</p>
          <p>[42] Hind, S. E., Haines-Bazrafshan, R., Benton, C. L., Brassington, W., Towle, B., & Moore, D. R. (2011). "Prevalence of clinical referrals having hearing thresholds within normal limits." <em>International Journal of Audiology</em>, 50(10), 708-716.</p>
          <p>[43] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[44] Hornsby, B. W., Naylor, G., & Bess, F. H. (2016). "A taxonomy of fatigue concepts and their relation to hearing loss." <em>Ear and Hearing</em>, 37, 136S-144S.</p>
          <p>[45] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[46] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[47] Hind, S. (2006). "Survey of care pathway for auditory processing disorder." <em>Audiological Medicine</em>, 4(1), 12-24.</p>
          <p>[48] Baum, S. R., & Pell, M. D. (1999). "The neural bases of prosody: Insights from lesion studies and neuroimaging." <em>Aphasiology</em>, 13(8), 581-608.</p>
          <p>[49] Doherty, C. P., & Daniloff, R. G. (1993). "Perception of temporal and spectral information in nonsense syllables by normal and language-impaired children." <em>Language, Speech, and Hearing Services in Schools</em>, 24(4), 199-207.</p>
          <p>[50] Dawes, P., Bishop, D. V., Sirimanna, T., & Bamiou, D. E. (2008). "Profile and aetiology of children diagnosed with auditory processing disorder (APD)." <em>International Journal of Pediatric Otorhinolaryngology</em>, 72(4), 483-489.</p>
          <p>[51] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Educational Audiology Association</em>.</p>
          <p>[52] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[53] Chermak, G. D., & Musiek, F. E. (1997). <em>Central auditory processing disorders: New perspectives</em>. San Diego: Singular Publishing Group.</p>
          <p>[54] Khalfa, S., Dubal, S., Veuillet, E., Perez-Diaz, F., Jouvent, R., & Collet, L. (2002). "Psychometric normalization of a hyperacusis questionnaire." <em>ORL</em>, 64(6), 436-442.</p>
          <p>[55] Tyler, R. S., Pienkowski, M., Roncancio, E. R., Jun, H. J., Brozoski, T., Dauman, N., ... & Moore, B. C. (2014). "A review of hyperacusis and future directions: part I. Definitions and manifestations." <em>American Journal of Audiology</em>, 23(4), 402-419.</p>
          <p>[56] Jastreboff, P. J., & Jastreboff, M. M. (2014). "Treatments for decreased sound tolerance (hyperacusis and misophonia)." <em>Seminars in Hearing</em>, 35(2), 105-120.</p>
          <p>[57] Tomchek, S. D., & Dunn, W. (2007). "Sensory processing in children with and without autism: A comparative study using the short sensory profile." <em>American Journal of Occupational Therapy</em>, 61(2), 190-200.</p>
          <p>[58] Musiek, F. E., & Baran, J. A. (2007). <em>The auditory system: Anatomy, physiology, and clinical correlates</em>. Boston: Allyn & Bacon.</p>
          <p>[59] Anvari, S. H., Trainor, L. J., Woodside, J., & Levy, B. A. (2002). "Relations among musical skills, phonological processing, and early reading ability in preschool children." <em>Journal of Experimental Child Psychology</em>, 83(2), 111-130.</p>
          <p>[60] Peretz, I., & Zatorre, R. J. (2005). "Brain organization for music processing." <em>Annual Review of Psychology</em>, 56, 89-114.</p>
          <p>[61] Baum, S. R., & Pell, M. D. (1999). "The neural bases of prosody: Insights from lesion studies and neuroimaging." <em>Aphasiology</em>, 13(8), 581-608.</p>
          <p>[62] Doherty, C. P., & Daniloff, R. G. (1993). "Perception of temporal and spectral information in nonsense syllables by normal and language-impaired children." <em>Language, Speech, and Hearing Services in Schools</em>, 24(4), 199-207.</p>
          <p>[63] Friel-Patti, S. (1999). "Clinical decision-making in the assessment and intervention of central auditory processing disorders." <em>Language, Speech, and Hearing Services in Schools</em>, 30(4), 345-352.</p>
          <p>[64] Smoski, W. J., Brunt, M. A., & Tannahill, J. C. (1998). "Children's Auditory Performance Scale." <em>Educational Audiology Association</em>.</p>
          <p>[65] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[66] Keith, R. W. (2000). "Development and standardization of SCAN-C Test for Auditory Processing Disorders in Children." <em>Journal of the American Academy of Audiology</em>, 11(8), 438-445.</p>
          <p>[67] DeBonis, D. A., & Moncrieff, D. (2008). "Dichotic listening in children: Age-related changes in direction and magnitude of ear advantage." <em>Brain and Cognition</em>, 67(2), 191-197.</p>
          <p>[68] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[69] Bamiou, D. E., Musiek, F. E., & Luxon, L. M. (2001). "Aetiology and clinical presentations of auditory processing disorders—a review." <em>Archives of Disease in Childhood</em>, 85(5), 361-365.</p>
          <p>[70] Fuente, A., & McPherson, B. (2006). "Organic solvents and hearing loss: The challenge for audiology." <em>International Journal of Audiology</em>, 45(7), 367-381.</p>
          <p>[71] American Speech-Language-Hearing Association. (2005). "(Central) auditory processing disorders." <em>Technical Report</em>. Available from www.asha.org/policy.</p>
          <p>[72] Jerger, J., & Musiek, F. (2000). "Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
          <p>[73] Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., & Molt, L. (1994). "Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 33(6), 849-857.</p>
          <p>[74] Chermak, G. D., Tucker, E., & Seikel, J. A. (2002). "Behavioral characteristics of auditory processing disorder and attention-deficit hyperactivity disorder: Predominantly inattentive type." <em>Journal of the American Academy of Audiology</em>, 13(6), 332-338.</p>
          <p>[75] Gascon, G. G., Johnson, R., & Burd, L. (1986). "Central auditory processing and attention deficit disorders." <em>Journal of Child Neurology</em>, 1(1), 27-33.</p>
          <p>[76] Bishop, D. V., & McArthur, G. M. (2005). "Individual differences in auditory processing in specific language impairment: A follow-up study using event-related potentials and behavioural thresholds." <em>Cortex</em>, 41(3), 327-341.</p>
          <p>[77] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[78] Dawes, P., & Bishop, D. (2009). "Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique." <em>International Journal of Language & Communication Disorders</em>, 44(4), 440-465.</p>
          <p>[79] Bellis, T. J., & Ferre, J. M. (1999). "Multidimensional approach to the differential diagnosis of central auditory processing disorders in children." <em>Journal of the American Academy of Audiology</em>, 10(6), 319-328.</p>
          <p>[80] Wilson, W. J., & Arnott, W. (2013). "Using different criteria to diagnose (central) auditory processing disorder: How big a difference does it make?" <em>Journal of Speech, Language, and Hearing Research</em>, 56(1), 63-70.</p>
          <p>[81] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[82] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[83] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[84] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[85] Jerger, J., & Musiek, F. (2000). "Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children." <em>Journal of the American Academy of Audiology</em>, 11(9), 467-474.</p>
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
