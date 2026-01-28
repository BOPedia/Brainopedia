import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface APDSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function APDSupport({ setCurrentArticle }: APDSupportProps) {
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
        Auditory Processing Disorder: Support & Management
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Managing Auditory Processing Disorder requires a multifaceted approach combining environmental 
            modifications, compensatory strategies, direct remediation, and appropriate accommodations.<sup>[1]</sup> 
            Effective support is individualized based on the specific deficits, age, and functional impacts.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Three-Pronged Approach to APD Management</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Team working together"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Environmental Modifications</h3>
          <p className="mb-4">
            Changing the listening environment to optimize signal-to-noise ratio and reduce auditory demands.<sup>[3]</sup> 
            This is often the most immediately effective intervention component.<sup>[4]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Compensatory Strategies</h3>
          <p className="mb-4">
            Teaching skills and strategies to work around auditory processing deficits.<sup>[5]</sup> These help 
            individuals function more effectively despite persistent difficulties.<sup>[6]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Direct Remediation</h3>
          <p className="mb-4">
            Targeted training aimed at improving underlying auditory processing abilities through neuroplasticity.<sup>[7]</sup> 
            Evidence for remediation efficacy is mixed but growing.<sup>[8]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Modifications</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Acoustic Treatment of Spaces</h3>
          <p className="mb-4">
            Reducing background noise and reverberation improves listening conditions.<sup>[9]</sup> Strategies 
            include carpeting, acoustic tiles, curtains, and strategic furniture placement to absorb sound.<sup>[10]</sup> 
            Classrooms benefit from sound field systems distributing teacher voice evenly.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Preferential Seating</h3>
          <p className="mb-4">
            Sitting near the speaker and away from noise sources (windows, doors, fans, projectors) significantly 
            improves comprehension.<sup>[12]</sup> Front-row center placement in classrooms is ideal.<sup>[13]</sup> 
            Distance from sound source dramatically affects signal-to-noise ratio.<sup>[14]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reducing Competing Sounds</h3>
          <p className="mb-4">
            Minimizing background noise during important listening tasks helps significantly.<sup>[15]</sup> Turn 
            off music, close windows during traffic times, schedule challenging work during quiet periods.<sup>[16]</sup> 
            One-on-one instruction in quiet settings may be necessary for complex material.<sup>[17]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Optimizing Signal Quality</h3>
          <p className="mb-4">
            Clear, well-articulated speech at appropriate volume helps auditory processing.<sup>[18]</sup> Speaking 
            face-to-face allows visual cues.<sup>[19]</sup> Slower presentation rate provides additional processing 
            time.<sup>[20]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assistive Technology</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaGVscHxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Assistive technology"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">FM Systems and Remote Microphone Technology</h3>
          <p className="mb-4">
            Personal FM systems (now often called remote microphone systems) dramatically improve signal-to-noise 
            ratio by transmitting the speaker's voice directly to the listener's ears.<sup>[21]</sup> The speaker 
            wears a microphone; the listener wears receivers.<sup>[22]</sup> These systems effectively overcome 
            distance and noise effects.<sup>[23]</sup> Sound field FM systems benefit entire classrooms.<sup>[24]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Captioning and Transcription</h3>
          <p className="mb-4">
            Real-time captioning during lectures or meetings provides visual access to spoken information.<sup>[25]</sup> 
            Recorded lectures with captions allow review.<sup>[26]</sup> Automated speech-to-text apps assist in 
            various settings though accuracy varies.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Recording and Playback</h3>
          <p className="mb-4">
            Recording lectures or important conversations allows repeated listening.<sup>[28]</sup> Pausing and 
            replaying clarifies missed information.<sup>[29]</sup> Many students benefit from recording rights 
            as an accommodation.<sup>[30]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Supports</h3>
          <p className="mb-4">
            Visual aids supplement auditory information.<sup>[31]</sup> Written agendas, graphic organizers, 
            PowerPoint slides, and visual schedules provide structure.<sup>[32]</sup> Pairing auditory with 
            visual input supports comprehension.<sup>[33]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Compensatory Strategies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Metalinguistic and Metacognitive Strategies</h3>
          <p className="mb-4">
            Teaching awareness of listening difficulties and active compensation strategies helps significantly.<sup>[34]</sup> 
            Strategies include predicting content, monitoring comprehension, asking for clarification, and using 
            context clues.<sup>[35]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Active Listening Skills</h3>
          <p className="mb-4">
            Explicit instruction in active listening improves comprehension.<sup>[36]</sup> This includes maintaining 
            attention, using visual cues (watching speaker's face), filtering competing sounds, and self-monitoring 
            understanding.<sup>[37]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Request Strategies</h3>
          <p className="mb-4">
            Teaching effective ways to request repetition, clarification, or slower speech empowers individuals 
            to advocate for their needs.<sup>[38]</sup> Specific requests ("Could you repeat the third step?") 
            work better than general ones ("What?").<sup>[39]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Note-Taking and Organization</h3>
          <p className="mb-4">
            Structured note-taking systems help capture and organize auditory information.<sup>[40]</sup> Outlining, 
            Cornell notes, or graphic organizers provide frameworks.<sup>[41]</sup> Accessing others' notes or 
            teacher notes ensures complete information.<sup>[42]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory Strategies</h3>
          <p className="mb-4">
            Techniques for remembering auditory information include rehearsal, chunking, visualization, and 
            mnemonic devices.<sup>[43]</sup> Writing information immediately reinforces memory.<sup>[44]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Direct Remediation and Auditory Training</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Computer-Based Training Programs</h3>
          <p className="mb-4">
            Programs like Fast ForWord, Earobics, and LACE (Listening and Communication Enhancement) provide 
            systematic auditory training.<sup>[45]</sup> These programs target specific auditory skills through 
            repetitive, adaptive exercises.<sup>[46]</sup> Evidence for efficacy is mixed, with some studies 
            showing improvement and others finding limited generalization.<sup>[47]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Deficit-Specific Training</h3>
          <p className="mb-4">
            Training targets identified deficit areas—temporal processing, dichotic listening, auditory closure, 
            or other specific skills.<sup>[48]</sup> Individualized programs based on diagnostic findings may be 
            more effective than generic approaches.<sup>[49]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Phonological Awareness Training</h3>
          <p className="mb-4">
            For individuals with phonological processing deficits, explicit phonological awareness instruction 
            benefits reading and language skills.<sup>[50]</sup> Activities focus on sound identification, 
            manipulation, and segmentation.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Discrimination Training</h3>
          <p className="mb-4">
            Systematic practice distinguishing similar sounds can improve discrimination abilities.<sup>[52]</sup> 
            Training typically progresses from gross to fine distinctions.<sup>[53]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intensity and Duration</h3>
          <p className="mb-4">
            Effective auditory training typically requires intensive practice—often daily sessions over several 
            weeks or months.<sup>[54]</sup> Brief, inconsistent training is unlikely to produce lasting change.<sup>[55]</sup> 
            Neuroplastic changes require sustained, focused practice.<sup>[56]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Accommodations</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBzdHVkZW50fGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Classroom student"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Instructional Modifications</h3>
          <p className="mb-4">
            Teachers can modify instruction to support students with APD.<sup>[57]</sup> Strategies include pre-teaching 
            vocabulary, providing visual supports, checking comprehension frequently, and allowing processing 
            time before requiring responses.<sup>[58]</sup> Breaking complex directions into steps helps.<sup>[59]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Assessment Accommodations</h3>
          <p className="mb-4">
            Testing modifications ensure assessments measure knowledge rather than auditory processing ability.<sup>[60]</sup> 
            Accommodations include extended time, quiet testing locations, directions in writing, and reading test 
            questions aloud.<sup>[61]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Assignment Modifications</h3>
          <p className="mb-4">
            Assignments can be modified to reduce auditory demands.<sup>[62]</sup> Providing written instructions, 
            allowing alternative formats for demonstrating knowledge, and reducing emphasis on auditory-heavy 
            tasks levels the playing field.<sup>[63]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">IEP and 504 Plans</h3>
          <p className="mb-4">
            Students may qualify for supports through Individualized Education Programs (IEPs) or 504 Plans.<sup>[64]</sup> 
            Eligibility varies by state as APD is not universally recognized as a qualifying condition.<sup>[65]</sup> 
            Documentation and advocacy are essential for securing appropriate services.<sup>[66]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Speech-Language Therapy</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language-Based Intervention</h3>
          <p className="mb-4">
            Many individuals with APD benefit from speech-language therapy addressing language skills.<sup>[67]</sup> 
            Therapy may target vocabulary, syntax, phonological awareness, or language processing.<sup>[68]</sup> 
            Strengthening language abilities can help compensate for auditory processing deficits.<sup>[69]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory-Based Intervention</h3>
          <p className="mb-4">
            Speech-language pathologists may provide auditory training targeting listening skills, auditory 
            memory, and following directions.<sup>[70]</sup> Activities progress systematically in difficulty.<sup>[71]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Metalinguistic Training</h3>
          <p className="mb-4">
            Teaching awareness of language structure and meaning helps compensate for auditory weaknesses.<sup>[72]</sup> 
            Using context, predicting meaning, and monitoring comprehension are valuable skills.<sup>[73]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Home and Family Strategies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creating Supportive Listening Environments</h3>
          <p className="mb-4">
            Families can optimize home listening conditions by reducing background noise (turning off TV during 
            homework, having conversations in quiet rooms).<sup>[74]</sup> Face-to-face communication and checking 
            understanding helps.<sup>[75]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication Strategies</h3>
          <p className="mb-4">
            Family members can support communication by gaining attention before speaking, speaking clearly at 
            moderate pace, rephrasing rather than just repeating, and providing information in writing when 
            possible.<sup>[76]</sup> Patience and understanding are essential.<sup>[77]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Homework Support</h3>
          <p className="mb-4">
            Homework time benefits from quiet environments, breaks to prevent fatigue, and multimodal presentation 
            of information.<sup>[78]</sup> Parents can help by reading instructions aloud, discussing concepts, 
            and providing structure.<sup>[79]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Advocacy and Education</h3>
          <p className="mb-4">
            Parents serve as advocates for their children, educating teachers and service providers about APD.<sup>[80]</sup> 
            Collaborative relationships with schools support consistent implementation of strategies.<sup>[81]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Workplace Accommodations</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Workplace office"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Environmental Modifications</h3>
          <p className="mb-4">
            Adults with APD benefit from quiet work spaces, offices with doors rather than open cubicles, and 
            noise-canceling headphones.<sup>[82]</sup> Remote work options may significantly improve functioning.<sup>[83]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication Accommodations</h3>
          <p className="mb-4">
            Requesting instructions in writing, using email rather than phone when possible, and asking for 
            meeting agendas in advance helps.<sup>[84]</sup> Recording meetings (with permission) or requesting 
            notes ensures complete information.<sup>[85]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">ADA Protections</h3>
          <p className="mb-4">
            The Americans with Disabilities Act (ADA) may protect employees with APD, requiring reasonable 
            accommodations.<sup>[86]</sup> Documentation from qualified professionals supports accommodation 
            requests.<sup>[87]</sup> Disclosure and self-advocacy are individual decisions.<sup>[88]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medical and Therapeutic Considerations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Treating Underlying Conditions</h3>
          <p className="mb-4">
            Managing co-occurring conditions improves overall functioning.<sup>[89]</sup> ADHD medication may 
            improve attention, benefiting auditory processing performance.<sup>[90]</sup> Treating anxiety or 
            depression supports engagement with interventions.<sup>[91]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ear Health Maintenance</h3>
          <p className="mb-4">
            Maintaining optimal peripheral hearing is crucial.<sup>[92]</sup> Promptly treating ear infections, 
            monitoring for hearing changes, and avoiding loud noise exposure all matter.<sup>[93]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Alternative and Complementary Approaches</h3>
          <p className="mb-4">
            Some families explore approaches like auditory integration training (AIT) or other alternative 
            therapies.<sup>[94]</sup> Evidence for these approaches is limited or mixed.<sup>[95]</sup> Critical 
            evaluation of claims and costs is important.<sup>[96]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Building on Strengths</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Learning Strengths</h3>
          <p className="mb-4">
            Many individuals with APD are strong visual learners.<sup>[97]</sup> Capitalizing on this strength 
            through visual study methods, diagrams, videos, and written information optimizes learning.<sup>[98]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hands-On and Experiential Learning</h3>
          <p className="mb-4">
            Active, experiential learning may be more effective than lecture-based instruction.<sup>[99]</sup> 
            Hands-on projects, demonstrations, and doing rather than just listening supports understanding.<sup>[100]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Talents and Interests</h3>
          <p className="mb-4">
            APD affects auditory processing but doesn't limit overall intelligence or ability.<sup>[101]</sup> 
            Many individuals excel in areas playing to their strengths—visual arts, mathematics, technology, or 
            hands-on fields.<sup>[102]</sup> Focusing on abilities rather than just deficits promotes success 
            and self-esteem.<sup>[103]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Monitoring Progress and Adjusting Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Regular Re-evaluation</h3>
          <p className="mb-4">
            Periodic reassessment tracks changes in auditory processing abilities and determines whether 
            interventions are effective.<sup>[104]</sup> As individuals mature and learn compensatory strategies, 
            needs may change.<sup>[105]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Data-Driven Decisions</h3>
          <p className="mb-4">
            Monitoring academic performance, functional skills, and quality of life outcomes guides intervention 
            adjustments.<sup>[106]</sup> What works changes over time and across settings.<sup>[107]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Collaborative Team Approach</h3>
          <p className="mb-4">
            Effective management involves collaboration among audiologists, speech-language pathologists, 
            educators, psychologists, and families.<sup>[108]</sup> Regular communication ensures consistency 
            and addresses emerging needs.<sup>[109]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Comprehensive Support Matters:</h3>
            <div className="text-sm">
              <p>
                Effective APD management combines environmental modifications, compensatory strategies, and 
                sometimes direct remediation, individualized to specific needs.<sup>[110]</sup> No single approach 
                works for everyone; comprehensive, flexible support addressing the individual's unique profile 
                yields best outcomes.<sup>[111]</sup> The goal is not to "cure" APD but to provide tools, 
                accommodations, and strategies enabling success despite auditory processing differences.<sup>[112]</sup> 
                With appropriate support, individuals with APD can thrive academically, professionally, and 
                personally.<sup>[113]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[2] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[3] American Speech-Language-Hearing Association. (2005). "(Central) auditory processing disorders." <em>Technical Report</em>. Available from www.asha.org/policy.</p>
          <p>[4] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[5] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[6] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[7] Moore, D. R., Rosenberg, J. F., & Coleman, J. S. (2005). "Discrimination training of phonemic contrasts enhances phonological processing in mainstream school children." <em>Brain and Language</em>, 94(1), 72-85.</p>
          <p>[8] Fey, M. E., Richard, G. J., Geffner, D., Kamhi, A. G., Medwetsky, L., Paul, D., ... & Schooling, T. (2011). "Auditory processing disorder and auditory/language interventions: An evidence-based systematic review." <em>Language, Speech, and Hearing Services in Schools</em>, 42(3), 246-264.</p>
          <p>[9] Crandell, C. C., & Smaldino, J. J. (2000). "Classroom acoustics for children with normal hearing and with hearing impairment." <em>Language, Speech, and Hearing Services in Schools</em>, 31(4), 362-370.</p>
          <p>[10] Nelson, P. B., Kohnert, K., Sabur, S., & Shaw, D. (2005). "Classroom noise and children learning through a second language: Double jeopardy?" <em>Language, Speech, and Hearing Services in Schools</em>, 36(3), 219-229.</p>
          <p>[11] Dockrell, J. E., & Shield, B. M. (2006). "Acoustical barriers in classrooms: The impact of noise on performance in the classroom." <em>British Educational Research Journal</em>, 32(3), 509-525.</p>
          <p>[12] Anderson, K. L., & Smaldino, J. J. (2000). "Children's home inventory for listening difficulties (CHILD)." <em>Educational Audiology Review</em>, 17(3), 3-4.</p>
          <p>[13] American Speech-Language-Hearing Association. (2005). "Acoustics in educational settings: Technical report." <em>ASHA</em>.</p>
          <p>[14] Bradley, J. S., & Sato, H. (2008). "The intelligibility of speech in elementary school classrooms." <em>Journal of the Acoustical Society of America</em>, 123(4), 2078-2086.</p>
          <p>[15] Crandell, C. C., & Smaldino, J. J. (2000). "Classroom acoustics for children with normal hearing and with hearing impairment." <em>Language, Speech, and Hearing Services in Schools</em>, 31(4), 362-370.</p>
          <p>[16] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[17] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[18] Smaldino, J. J., & Flexer, C. (2012). <em>Handbook of acoustic accessibility: Best practices for listening, learning, and literacy in the classroom</em>. New York: Thieme.</p>
          <p>[19] Arnold, P., & Hill, F. (2001). "Bisensory augmentation: A speechreading advantage when speech is clearly audible and intact." <em>British Journal of Psychology</em>, 92(2), 339-355.</p>
          <p>[20] Tallal, P., Miller, S. L., Bedi, G., Byma, G., Wang, X., Nagarajan, S. S., ... & Merzenich, M. M. (1996). "Language comprehension in language-learning impaired children improved with acoustically modified speech." <em>Science</em>, 271(5245), 81-84.</p>
          <p>[21] Schafer, E. C., & Thibodeau, L. M. (2006). "Speech recognition in noise in children with cochlear implants while listening in bilateral, bimodal, and FM-system arrangements." <em>American Journal of Audiology</em>, 15(2), 114-126.</p>
          <p>[22] Anderson, K. L., & Goldstein, H. (2004). "Speech perception benefits of FM and infrared devices to children with hearing aids in a typical classroom." <em>Language, Speech, and Hearing Services in Schools</em>, 35(2), 169-184.</p>
          <p>[23] Hawkins, D. B. (1984). "Comparisons of speech recognition in noise by mildly-to-moderately hearing-impaired children using hearing aids and FM systems." <em>Journal of Speech and Hearing Disorders</em>, 49(4), 409-418.</p>
          <p>[24] Dockrell, J. E., & Shield, B. M. (2006). "Acoustical barriers in classrooms: The impact of noise on performance in the classroom." <em>British Educational Research Journal</em>, 32(3), 509-525.</p>
          <p>[25] Stinson, M. S., Elliot, L. B., Kelly, R. R., & Liu, Y. (2009). "Deaf and hard-of-hearing students' memory of lectures with speech-to-text and interpreting/note taking services." <em>Journal of Special Education</em>, 43(1), 52-64.</p>
          <p>[26] Marschark, M., Sapere, P., Convertino, C., & Seewagen, R. (2005). "Access to postsecondary education through sign language interpreting." <em>Journal of Deaf Studies and Deaf Education</em>, 10(1), 38-50.</p>
          <p>[27] Lasecki, W. S., Miller, C. D., Sadilek, A., Abumoussa, A., Borrello, D., Kushalnagar, R., & Bigham, J. P. (2012). "Real-time captioning by groups of non-experts." <em>Proceedings of the 25th annual ACM symposium on User interface software and technology</em> (pp. 23-34).</p>
          <p>[28] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[29] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[30] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[31] Mayer, R. E. (2009). <em>Multimedia learning</em> (2nd ed.). New York: Cambridge University Press.</p>
          <p>[32] Sweller, J., Van Merrienboer, J. J., & Paas, F. G. (1998). "Cognitive architecture and instructional design." <em>Educational Psychology Review</em>, 10(3), 251-296.</p>
          <p>[33] Paivio, A. (1990). "Mental representations: A dual coding approach." <em>Oxford University Press</em>.</p>
          <p>[34] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[35] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[36] Dockrell, J. E., & Shield, B. M. (2006). "Acoustical barriers in classrooms: The impact of noise on performance in the classroom." <em>British Educational Research Journal</em>, 32(3), 509-525.</p>
          <p>[37] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[38] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[39] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[40] Kiewra, K. A. (2002). "How classroom teachers can help students learn and teach them how to learn." <em>Theory Into Practice</em>, 41(2), 71-80.</p>
          <p>[41] Piolat, A., Olive, T., & Kellogg, R. T. (2005). "Cognitive effort during note taking." <em>Applied Cognitive Psychology</em>, 19(3), 291-312.</p>
          <p>[42] Boyle, J. R., & Weishaar, M. (1997). "The effects of expert-generated versus student-generated cognitive organizers on the reading comprehension of students with learning disabilities." <em>Learning Disabilities Research & Practice</em>, 12(4), 228-235.</p>
          <p>[43] Mastropieri, M. A., & Scruggs, T. E. (1998). "Enhancing school success with mnemonic strategies." <em>Intervention in School and Clinic</em>, 33(4), 201-208.</p>
          <p>[44] Mueller, P. A., & Oppenheimer, D. M. (2014). "The pen is mightier than the keyboard: Advantages of longhand over laptop note taking." <em>Psychological Science</em>, 25(6), 1159-1168.</p>
          <p>[45] Tallal, P., Miller, S. L., Bedi, G., Byma, G., Wang, X., Nagarajan, S. S., ... & Merzenich, M. M. (1996). "Language comprehension in language-learning impaired children improved with acoustically modified speech." <em>Science</em>, 271(5245), 81-84.</p>
          <p>[46] Merzenich, M. M., Jenkins, W. M., Johnston, P., Schreiner, C., Miller, S. L., & Tallal, P. (1996). "Temporal processing deficits of language-learning impaired children ameliorated by training." <em>Science</em>, 271(5245), 77-81.</p>
          <p>[47] Strong, G. K., Torgerson, C. J., Torgerson, D., & Hulme, C. (2011). "A systematic meta-analytic review of evidence for the effectiveness of the 'Fast ForWord' language intervention program." <em>Journal of Child Psychology and Psychiatry</em>, 52(3), 224-235.</p>
          <p>[48] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[49] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[50] Torgesen, J. K., Alexander, A. W., Wagner, R. K., Rashotte, C. A., Voeller, K. K., & Conway, T. (2001). "Intensive remedial instruction for children with severe reading disabilities: Immediate and long-term outcomes from two instructional approaches." <em>Journal of Learning Disabilities</em>, 34(1), 33-58.</p>
          <p>[51] Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <em>British Journal of Educational Psychology</em>, 81(1), 1-23.</p>
          <p>[52] Moore, D. R., Rosenberg, J. F., & Coleman, J. S. (2005). "Discrimination training of phonemic contrasts enhances phonological processing in mainstream school children." <em>Brain and Language</em>, 94(1), 72-85.</p>
          <p>[53] Tremblay, K., Kraus, N., McGee, T., Ponton, C., & Otis, B. (2001). "Central auditory plasticity: Changes in the N1-P2 complex after speech-sound training." <em>Ear and Hearing</em>, 22(2), 79-90.</p>
          <p>[54] Tallal, P., Miller, S. L., Bedi, G., Byma, G., Wang, X., Nagarajan, S. S., ... & Merzenich, M. M. (1996). "Language comprehension in language-learning impaired children improved with acoustically modified speech." <em>Science</em>, 271(5245), 81-84.</p>
          <p>[55] Moore, D. R., Rosenberg, J. F., & Coleman, J. S. (2005). "Discrimination training of phonemic contrasts enhances phonological processing in mainstream school children." <em>Brain and Language</em>, 94(1), 72-85.</p>
          <p>[56] Kraus, N., & Chandrasekaran, B. (2010). "Music training for the development of auditory skills." <em>Nature Reviews Neuroscience</em>, 11(8), 599-605.</p>
          <p>[57] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[58] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[59] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[60] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities: An analysis of the interaction hypothesis." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[61] Thurlow, M. L., Lazarus, S. S., Thompson, S. J., & Morse, A. B. (2005). <em>State policies on assessment participation and accommodations for students with disabilities</em>. <em>Journal of Special Education</em>, 38(4), 232-240.</p>
          <p>[62] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[63] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[64] Yell, M. L. (2016). <em>The law and special education</em> (4th ed.). Boston: Pearson.</p>
          <p>[65] Moore, D. R., & Hunter, L. L. (2013). "Auditory processing disorder (APD) in children: A marker of neurodevelopmental syndrome." <em>Hearing, Balance and Communication</em>, 11(3), 160-167.</p>
          <p>[66] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[67] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[68] Bishop, D. V., & McArthur, G. M. (2005). "Individual differences in auditory processing in specific language impairment: A follow-up study using event-related potentials and behavioural thresholds." <em>Cortex</em>, 41(3), 327-341.</p>
          <p>[69] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[70] Chermak, G. D., & Musiek, F. E. (2002). "Auditory training: Principles and approaches for remediating and managing auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 297-308.</p>
          <p>[71] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[72] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[73] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[74] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[75] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[76] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[77] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[78] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[79] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[80] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[81] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[82] Job Accommodation Network. (2021). "Accommodation and compliance: Auditory processing disorder." <em>JAN</em>.</p>
          <p>[83] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[84] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[85] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[86] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
          <p>[87] Job Accommodation Network. (2021). "Accommodation and compliance: Auditory processing disorder." <em>JAN</em>.</p>
          <p>[88] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[89] Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). "Comorbidity of auditory processing, language, and reading disorders." <em>Journal of Speech, Language, and Hearing Research</em>, 52(3), 706-722.</p>
          <p>[90] Keith, R. W., & Engineer, P. (1991). "Effects of methylphenidate on the auditory processing abilities of children with attention deficit-hyperactivity disorder." <em>Journal of Learning Disabilities</em>, 24(10), 630-636.</p>
          <p>[91] Dawes, P., Bishop, D. V., Sirimanna, T., & Bamiou, D. E. (2008). "Profile and aetiology of children diagnosed with auditory processing disorder (APD)." <em>International Journal of Pediatric Otorhinolaryngology</em>, 72(4), 483-489.</p>
          <p>[92] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[93] Gravel, J. S., & Wallace, I. F. (2000). "Effects of otitis media with effusion on hearing in the first 3 years of life." <em>Journal of Speech, Language, and Hearing Research</em>, 43(3), 631-644.</p>
          <p>[94] Sinha, Y., Silove, N., Wheeler, D., & Williams, K. (2006). "Auditory integration training and other sound therapies for autism spectrum disorders." <em>Cochrane Database of Systematic Reviews</em>, (1), CD003681.</p>
          <p>[95] American Academy of Pediatrics. (1998). "Auditory integration training and facilitated communication for autism." <em>Pediatrics</em>, 102(2), 431-433.</p>
          <p>[96] American Speech-Language-Hearing Association. (2004). "Auditory integration training." <em>ASHA Supplement</em>, 24, 1-4.</p>
          <p>[97] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[98] Mayer, R. E. (2009). <em>Multimedia learning</em> (2nd ed.). New York: Cambridge University Press.</p>
          <p>[99] Kolb, D. A. (2014). <em>Experiential learning: Experience as the source of learning and development</em> (2nd ed.). Upper Saddle River, NJ: Pearson Education.</p>
          <p>[100] Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). "Active learning increases student performance in science, engineering, and mathematics." <em>Proceedings of the National Academy of Sciences</em>, 111(23), 8410-8415.</p>
          <p>[101] Cacace, A. T., & McFarland, D. J. (2005). "The importance of modality specificity in diagnosing central auditory processing disorder." <em>American Journal of Audiology</em>, 14(2), 112-123.</p>
          <p>[102] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[103] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[104] Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., & Riley, A. (2010). "Nature of auditory processing disorder in children." <em>Pediatrics</em>, 126(2), e382-e390.</p>
          <p>[105] DeBonis, D. A., & Moncrieff, D. (2008). "Dichotic listening in children: Age-related changes in direction and magnitude of ear advantage." <em>Brain and Cognition</em>, 67(2), 191-197.</p>
          <p>[106] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[107] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[108] Bellis, T. J. (2003). <em>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</em> (2nd ed.). Clifton Park, NY: Delmar Learning.</p>
          <p>[109] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[110] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
          <p>[111] Bellis, T. J. (2002). "Developing deficit-specific intervention plans for individuals with auditory processing disorders." <em>Seminars in Hearing</em>, 23(4), 287-295.</p>
          <p>[112] American Academy of Audiology. (2010). "Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder." <em>AAA</em>.</p>
          <p>[113] Chermak, G. D., & Musiek, F. E. (2014). <em>Handbook of central auditory processing disorder: Vol. 2. Comprehensive intervention</em> (2nd ed.). San Diego: Plural Publishing.</p>
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
