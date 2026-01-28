import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface HyperlexiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function HyperlexiaDiagnosis({ setCurrentArticle }: HyperlexiaDiagnosisProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('hyperlexia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Hyperlexia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Hyperlexia: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Diagnosing hyperlexia involves comprehensive evaluation of reading abilities, language development, and 
            cognitive-communicative functioning.<sup>[1]</sup> Because hyperlexia is not an official DSM-5 diagnosis, 
            assessment focuses on identifying the characteristic pattern rather than applying specific diagnostic criteria.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Challenges</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Not an Official Diagnosis</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">No DSM-5 or ICD-11 classification for hyperlexia<sup>[3]</sup></li>
            <li className="mb-2">Widely recognized by clinicians but no standardized criteria</li>
            <li className="mb-2">Described as a pattern or syndrome</li>
            <li className="mb-2">Often diagnosed alongside autism or language disorder</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Can Be Overlooked</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reading ability may mask language difficulties<sup>[4]</sup></li>
            <li className="mb-2">May be seen as "gifted" rather than having difficulties</li>
            <li className="mb-2">Comprehension problems not always apparent early</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Who Can Evaluate?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBjaGlsZHxlbnwxfHx8fDE2NzQ1MzUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Doctor child"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Qualified Professionals</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Speech-language pathologists:</strong> Language and reading assessment<sup>[5]</sup></li>
            <li className="mb-2"><strong>Neuropsychologists:</strong> Comprehensive cognitive-language evaluation</li>
            <li className="mb-2"><strong>Developmental pediatricians:</strong> Medical evaluation and developmental assessment</li>
            <li className="mb-2"><strong>Psychologists:</strong> Autism and cognitive assessment<sup>[6]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessment Components</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Case History</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Developmental history:</strong> When did child start reading? How?<sup>[7]</sup></li>
            <li className="mb-2"><strong>Language development:</strong> Speech and language milestones</li>
            <li className="mb-2"><strong>Reading behaviors:</strong> Fascination with letters, self-teaching</li>
            <li className="mb-2"><strong>Social-communication:</strong> Social interaction patterns</li>
            <li className="mb-2"><strong>Family history:</strong> Autism, language disorders, reading abilities</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Observation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Observing child's reading behaviors<sup>[8]</sup></li>
            <li className="mb-2">Social-communicative interactions</li>
            <li className="mb-2">Play and interests</li>
            <li className="mb-2">Response to language and questions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Reading Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Decoding Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Word reading:</strong> Standardized word reading tests<sup>[9]</sup></li>
            <li className="mb-2"><strong>Pseudoword decoding:</strong> Reading nonsense words</li>
            <li className="mb-2"><strong>Reading fluency:</strong> Speed and accuracy</li>
            <li className="mb-2"><strong>Age comparison:</strong> Reading typically years above age level</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Comprehension</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Comprehension tests:</strong> Understanding what was read<sup>[10]</sup></li>
            <li className="mb-2"><strong>Question answering:</strong> Literal vs. inferential questions</li>
            <li className="mb-2"><strong>Retelling:</strong> Ability to retell stories</li>
            <li className="mb-2"><strong>Discrepancy:</strong> Comprehension significantly lower than decoding</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Assessment Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">WRMT-III (Woodcock Reading Mastery Tests)</li>
            <li className="mb-2">GORT-5 (Gray Oral Reading Tests)<sup>[11]</sup></li>
            <li className="mb-2">TOWRE-2 (Test of Word Reading Efficiency)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Language Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Receptive Language</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Listening comprehension:</strong> Understanding spoken language<sup>[12]</sup></li>
            <li className="mb-2"><strong>Following directions:</strong> Multi-step instruction following</li>
            <li className="mb-2"><strong>Vocabulary comprehension:</strong> Understanding word meanings</li>
            <li className="mb-2"><strong>Typical findings:</strong> Often below expected levels</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Expressive Language</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Vocabulary production</li>
            <li className="mb-2">Sentence formulation<sup>[13]</sup></li>
            <li className="mb-2">Narrative abilities</li>
            <li className="mb-2">Conversational skills</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Tests</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">CELF-5 (Clinical Evaluation of Language Fundamentals)<sup>[14]</sup></li>
            <li className="mb-2">PPVT-5 (Peabody Picture Vocabulary Test)</li>
            <li className="mb-2">EVT-3 (Expressive Vocabulary Test)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Autism Screening and Evaluation</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGFzc2Vzc21lbnR8ZW58MXx8fHwxNjc0NTM1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child assessment"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Autism Assessment</h3>
          <p className="mb-4">
            Because hyperlexia frequently co-occurs with autism, autism evaluation is important:<sup>[15]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>ADOS-2:</strong> Autism Diagnostic Observation Schedule</li>
            <li className="mb-2"><strong>ADI-R:</strong> Autism Diagnostic Interview-Revised</li>
            <li className="mb-2"><strong>Screening tools:</strong> M-CHAT, SCQ<sup>[16]</sup></li>
            <li className="mb-2"><strong>Social communication:</strong> Detailed assessment needed</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Differentiating Types</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Type 1: No autism features, good prognosis</li>
            <li className="mb-2">Type 2: Meets full autism criteria<sup>[17]</sup></li>
            <li className="mb-2">Type 3: Some autism features that may improve</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intelligence Testing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Nonverbal IQ assessment<sup>[18]</sup></li>
            <li className="mb-2">Cognitive strengths and weaknesses</li>
            <li className="mb-2">Visual vs. verbal processing</li>
            <li className="mb-2">Typically average or above nonverbal cognition</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Visual memory (often strong)<sup>[19]</sup></li>
            <li className="mb-2">Verbal memory</li>
            <li className="mb-2">Working memory</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Profile</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Characteristic Pattern:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Reading decoding:</strong> Significantly advanced for age<sup>[20]</sup></li>
              <li><strong>Reading comprehension:</strong> Below decoding level, often below age level</li>
              <li><strong>Listening comprehension:</strong> Below expected level</li>
              <li><strong>Language development:</strong> Delayed or disordered</li>
              <li><strong>Social communication:</strong> Difficulties present<sup>[21]</sup></li>
              <li><strong>Nonverbal cognition:</strong> Typically average or above</li>
              <li><strong>Visual memory:</strong> Strength</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Additional Considerations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Medical Evaluation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Hearing screening<sup>[22]</sup></li>
            <li className="mb-2">Vision assessment</li>
            <li className="mb-2">Rule out other conditions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Longitudinal Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reassessment over time important<sup>[23]</sup></li>
            <li className="mb-2">Track comprehension development</li>
            <li className="mb-2">Monitor social-communication skills</li>
            <li className="mb-2">Determine trajectory (Type 1, 2, or 3)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Reporting and Diagnosis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Diagnostic Terminology</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">May be described as "hyperlexic reading pattern"<sup>[24]</sup></li>
            <li className="mb-2">Often diagnosed with autism and/or language disorder</li>
            <li className="mb-2">Report should describe full profile</li>
            <li className="mb-2">Recommendations based on individual needs</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). "Annotation: Hyperlexia: Disability or superability?" <em>Journal of Child Psychology and Psychiatry</em>, 44(8), 1079-1091.</p>
          <p>[2] Kupperman, P., Bligh, S., & Barouski, K. (2002). "Hyperlexia." In A. M. Wetherby & B. M. Prizant (Eds.), <em>Autism spectrum disorders</em> (pp. 357-376). Baltimore: Paul H. Brookes.</p>
          <p>[3] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[4] Nation, K. (1999). "Reading skills in hyperlexia: A developmental perspective." <em>Psychological Bulletin</em>, 125(3), 338-355.</p>
          <p>[5] American Speech-Language-Hearing Association. (n.d.). <em>Reading and writing disorders</em>. Retrieved from www.asha.org</p>
          <p>[6] Wiederholt, J. L., & Bryant, B. R. (2012). <em>Gray Oral Reading Tests</em> (5th ed.). Austin, TX: Pro-Ed.</p>
          <p>[7] Wiig, E. H., Semel, E., & Secord, W. A. (2013). <em>Clinical Evaluation of Language Fundamentals</em> (5th ed.). San Antonio, TX: Pearson.</p>
          <p>[8] Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). "Patterns of reading ability in children with autism spectrum disorder." <em>Journal of Autism and Developmental Disorders</em>, 36(7), 911-919.</p>
          <p>[9] Lord, C., Rutter, M., DiLavore, P. C., Risi, S., Gotham, K., & Bishop, S. (2012). <em>Autism Diagnostic Observation Schedule</em> (2nd ed.). Torrance, CA: Western Psychological Services.</p>
          <p>[10] Treffert, D. A. (2011). "Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder." <em>Wisconsin Medical Society</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('hyperlexia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Hyperlexia
        </a>
      </div>
    </article>
  );
}