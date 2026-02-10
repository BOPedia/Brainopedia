import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DLDSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function DLDSupport({ setCurrentArticle }: DLDSupportProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        DLD: Support & Management
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Effective support for DLD involves speech-language therapy, educational interventions, and environmental 
            modifications that target specific language difficulties.<sup>[1]</sup> Research shows that intensive, 
            targeted intervention can significantly improve language outcomes.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Speech-Language Therapy</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbnxlbnwxfHx8fDE2NzQ1MzUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Therapy session"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Intervention Approaches</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Explicit teaching:</strong> Direct, systematic instruction of language skills<sup>[3]</sup></li>
            <li className="mb-2"><strong>Modeling:</strong> SLP models correct language forms repeatedly</li>
            <li className="mb-2"><strong>Recasting:</strong> Repeating child's utterance with corrections<sup>[4]</sup></li>
            <li className="mb-2"><strong>Focused stimulation:</strong> Intensive exposure to target structures</li>
            <li className="mb-2"><strong>Imitation:</strong> Guided practice producing target forms<sup>[5]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Grammar Intervention</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Targeting specific grammatical morphemes (past tense, plurals)<sup>[6]</sup></li>
            <li className="mb-2">Shape Coding and other visual supports for grammar</li>
            <li className="mb-2">Sentence building activities</li>
            <li className="mb-2">Intensive practice with feedback<sup>[7]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Vocabulary Intervention</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Explicit vocabulary teaching with multiple exposures<sup>[8]</sup></li>
            <li className="mb-2">Semantic mapping and word webs</li>
            <li className="mb-2">Teaching word-learning strategies</li>
            <li className="mb-2">Practice in multiple contexts<sup>[9]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Narrative Intervention</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Teaching story grammar (setting, characters, problem, solution)<sup>[10]</sup></li>
            <li className="mb-2">Retelling with support structures</li>
            <li className="mb-2">Visual supports and graphic organizers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evidence-Based Interventions</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Research-Supported Approaches</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Meta-analyses show:</strong> Language therapy is effective<sup>[11]</sup></li>
            <li className="mb-2"><strong>Intensity matters:</strong> More frequent sessions yield better results</li>
            <li className="mb-2"><strong>Dosage:</strong> Total amount of intervention important<sup>[12]</sup></li>
            <li className="mb-2"><strong>Individual or small groups:</strong> Both can be effective</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Classroom Strategies and Accommodations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Environmental Modifications</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reduce background noise:</strong> Quiet learning environments<sup>[13]</sup></li>
            <li className="mb-2"><strong>Preferential seating:</strong> Near teacher, away from distractions</li>
            <li className="mb-2"><strong>Visual supports:</strong> Pictures, gestures, written supports</li>
            <li className="mb-2"><strong>Structured routines:</strong> Predictable classroom structure<sup>[14]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Teacher Communication Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Simplified language:</strong> Shorter, clearer sentences<sup>[15]</sup></li>
            <li className="mb-2"><strong>Slower pace:</strong> Allow processing time</li>
            <li className="mb-2"><strong>Repeat and rephrase:</strong> Say important information multiple ways</li>
            <li className="mb-2"><strong>Check comprehension:</strong> Ask child to repeat back instructions<sup>[16]</sup></li>
            <li className="mb-2"><strong>Visual cues:</strong> Pair verbal with visual information</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Extended time:</strong> For processing and responding<sup>[17]</sup></li>
            <li className="mb-2"><strong>Reduced language load:</strong> Modify assignments</li>
            <li className="mb-2"><strong>Pre-teaching vocabulary:</strong> Introduce key words before lessons</li>
            <li className="mb-2"><strong>Graphic organizers:</strong> Visual supports for organization<sup>[18]</sup></li>
            <li className="mb-2"><strong>Written instructions:</strong> Supplement verbal directions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Literacy Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Intervention</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Phonological awareness:</strong> Explicit teaching of sound awareness<sup>[19]</sup></li>
            <li className="mb-2"><strong>Decoding instruction:</strong> Systematic phonics</li>
            <li className="mb-2"><strong>Vocabulary:</strong> Direct vocabulary instruction</li>
            <li className="mb-2"><strong>Comprehension strategies:</strong> Explicit strategy teaching<sup>[20]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Writing Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Sentence combining exercises<sup>[21]</sup></li>
            <li className="mb-2">Writing templates and frames</li>
            <li className="mb-2">Graphic organizers for planning</li>
            <li className="mb-2">Word banks and vocabulary supports</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Technology and Tools</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Assistive Technology</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Text-to-speech:</strong> Reading support<sup>[22]</sup></li>
            <li className="mb-2"><strong>Speech-to-text:</strong> Writing support</li>
            <li className="mb-2"><strong>Word prediction:</strong> Help with written expression</li>
            <li className="mb-2"><strong>Visual supports:</strong> Communication apps and visuals</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Apps and Programs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Apps targeting specific language skills<sup>[23]</sup></li>
            <li className="mb-2">Interactive e-books with supports</li>
            <li className="mb-2">Language learning games</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Home Strategies for Parents</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB0b2dldGhlcnxlbnwxfHx8fDE2NzQ1MzUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Family together"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Rich language input:</strong> Talk frequently with child<sup>[24]</sup></li>
            <li className="mb-2"><strong>Modeling:</strong> Use good grammar and varied vocabulary</li>
            <li className="mb-2"><strong>Expansion:</strong> Add to child's utterances</li>
            <li className="mb-2"><strong>Recasting:</strong> Gently correct by repeating correctly<sup>[25]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Daily Activities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reading together:</strong> Daily shared book reading<sup>[26]</sup></li>
            <li className="mb-2"><strong>Conversations:</strong> Back-and-forth conversations at meals</li>
            <li className="mb-2"><strong>Narration:</strong> Talk through daily activities</li>
            <li className="mb-2"><strong>Play:</strong> Language-rich play interactions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Home Practice</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Practice therapy targets at home<sup>[27]</sup></li>
            <li className="mb-2">Make it fun and natural</li>
            <li className="mb-2">Consistency important</li>
            <li className="mb-2">Coordinate with SLP</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Communication Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills Training</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Explicit teaching of conversation skills<sup>[28]</sup></li>
            <li className="mb-2">Role-playing social situations</li>
            <li className="mb-2">Social stories and scripts</li>
            <li className="mb-2">Peer buddy systems<sup>[29]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Facilitating Friendships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Structured play opportunities</li>
            <li className="mb-2">Small group activities</li>
            <li className="mb-2">Shared interests as connection</li>
            <li className="mb-2">Adult facilitation initially<sup>[30]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Planning</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">IEP and 504 Plans</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>IEP goals:</strong> Specific, measurable language goals<sup>[31]</sup></li>
            <li className="mb-2"><strong>Service delivery:</strong> Frequency and setting of therapy</li>
            <li className="mb-2"><strong>Accommodations:</strong> Classroom modifications</li>
            <li className="mb-2"><strong>Progress monitoring:</strong> Regular assessment</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Whole-Child Approach</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Supporting the Whole Child:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Self-esteem:</strong> Focus on strengths and successes<sup>[32]</sup></li>
              <li><strong>Mental health:</strong> Address anxiety or depression if present</li>
              <li><strong>Advocacy:</strong> Teach self-advocacy skills</li>
              <li><strong>Strengths-based:</strong> Build on individual interests and abilities</li>
              <li><strong>Team approach:</strong> Collaboration among professionals and family<sup>[33]</sup></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Law, J., Garrett, Z., & Nye, C. (2004). "The efficacy of treatment for children with developmental speech and language delay/disorder." <em>Journal of Speech, Language, and Hearing Research</em>, 47(4), 924-943.</p>
          <p>[2] Ebbels, S. H. (2014). "Effectiveness of intervention for grammar in school-aged children with primary language impairments: A review of the evidence." <em>Child Language Teaching and Therapy</em>, 30(1), 7-40.</p>
          <p>[3] Camarata, S. M., Nelson, K. E., & Camarata, M. N. (1994). "Comparison of conversational-recasting and imitative procedures for training grammatical structures in children with specific language impairment." <em>Journal of Speech and Hearing Research</em>, 37(6), 1414-1423.</p>
          <p>[4] Leonard, L. B. (2014). <em>Children with specific language impairment</em> (2nd ed.). Cambridge, MA: MIT Press.</p>
          <p>[5] Ebbels, S. (2007). "Teaching grammar to school-aged children with specific language impairment using Shape Coding." <em>Child Language Teaching and Therapy</em>, 23(1), 67-93.</p>
          <p>[6] Marulis, L. M., & Neuman, S. B. (2010). "The effects of vocabulary intervention on young children's word learning: A meta-analysis." <em>Review of Educational Research</em>, 80(3), 300-335.</p>
          <p>[7] Nash, H., & Snowling, M. (2006). "Teaching new words to children with poor existing vocabulary knowledge: A controlled evaluation of the definition and context methods." <em>International Journal of Language & Communication Disorders</em>, 41(3), 335-354.</p>
          <p>[8] Petersen, D. B., Gillam, S. L., Spencer, T., & Gillam, R. B. (2010). "The effects of literate narrative intervention on children with neurologically based language impairments." <em>Journal of Speech, Language, and Hearing Research</em>, 53(4), 961-981.</p>
          <p>[9] Warren, S. F., Fey, M. E., & Yoder, P. J. (2007). "Differential treatment intensity research: A missing link to creating optimally effective communication interventions." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 13(1), 70-77.</p>
          <p>[10] Dockrell, J. E., & Shield, B. M. (2006). "Acoustical barriers in classrooms: The impact of noise on performance in the classroom." <em>British Educational Research Journal</em>, 32(3), 509-525.</p>
          <p>[11] Boyle, J., McCartney, E., O'Hare, A., & Forbes, J. (2009). "Direct versus indirect and individual versus group modes of language therapy for children with primary language impairment." <em>International Journal of Language & Communication Disorders</em>, 44(2), 162-181.</p>
          <p>[12] McGregor, K. K. (2020). "How we fail children with developmental language disorder." <em>Language, Speech, and Hearing Services in Schools</em>, 51(4), 981-992.</p>
          <p>[13] Gillam, R. B., Hartzheim, D., Studenka, B., Simonsmeier, V., & Gillam, S. (2015). "Narrative intervention for children with autism spectrum disorder (ASD)." <em>Journal of Speech, Language, and Hearing Research</em>, 58(3), 920-933.</p>
          <p>[14] Ukrainetz, T. A. (Ed.). (2006). <em>Contextualized language intervention: Scaffolding preK-12 literacy achievement</em>. Eau Claire, WI: Thinking Publications.</p>
          <p>[15] Catts, H. W., Fey, M. E., Tomblin, J. B., & Zhang, X. (2002). "A longitudinal investigation of reading outcomes in children with language impairments." <em>Journal of Speech, Language, and Hearing Research</em>, 45(6), 1142-1157.</p>
          <p>[16] Saddler, B., & Graham, S. (2005). "The effects of peer-assisted sentence-combining instruction on the writing performance of more and less skilled young writers." <em>Journal of Educational Psychology</em>, 97(1), 43-54.</p>
          <p>[17] Elkind, J., Cohen, K., & Murray, C. (1993). "Using computer-based readers to improve reading comprehension of students with dyslexia." <em>Annals of Dyslexia</em>, 43(1), 238-259.</p>
          <p>[18] Cirrin, F. M., & Gillam, R. B. (2008). "Language intervention practices for school-age children with spoken language disorders." <em>Language, Speech, and Hearing Services in Schools</em>, 39(1), S110-S137.</p>
          <p>[19] Hoff, E. (2003). "The specificity of environmental influence: Socioeconomic status affects early vocabulary development via maternal speech." <em>Child Development</em>, 74(5), 1368-1378.</p>
          <p>[20] Mol, S. E., Bus, A. G., de Jong, M. T., & Smeets, D. J. H. (2008). "Added value of dialogic parent-child book readings: A meta-analysis." <em>Early Education and Development</em>, 19(1), 7-26.</p>
          <p>[21] Conti-Ramsden, G., & Botting, N. (2004). "Social difficulties and victimization in children with SLI at 11 years of age." <em>Journal of Speech, Language, and Hearing Research</em>, 47(1), 145-161.</p>
          <p>[22] Fujiki, M., Brinton, B., & Clarke, D. (2002). "Emotion regulation in children with specific language impairment." <em>Language, Speech, and Hearing Services in Schools</em>, 33(2), 102-111.</p>
          <p>[23] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[24] Jerome, A. C., Fujiki, M., Brinton, B., & James, S. L. (2002). "Self-esteem in children with specific language impairment." <em>Journal of Speech, Language, and Hearing Research</em>, 45(4), 700-714.</p>
          <p>[25] McGregor, K. K., Goffman, L., Van Horne, A. O., Hogan, T. P., & Finestack, L. H. (2020). "Developmental language disorder: Applications for advocacy, research, and clinical service." <em>Perspectives of the ASHA Special Interest Groups</em>, 5(1), 38-46.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>
    </article>
  );
}
