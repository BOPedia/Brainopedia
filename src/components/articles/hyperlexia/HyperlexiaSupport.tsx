import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface HyperlexiaSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function HyperlexiaSupport({ setCurrentArticle }: HyperlexiaSupportProps) {
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
        Hyperlexia: Support & Management
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Supporting children with hyperlexia involves leveraging their reading strengths while addressing language 
            comprehension and social-communication needs.<sup>[1]</sup> Intervention should be individualized based on 
            whether hyperlexia occurs alone or with autism.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Leveraging Reading as a Strength</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBib29rfGVufDF8fHx8MTY3NDUzNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child reading book"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Using Reading as a Learning Tool</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Visual supports:</strong> Use written words alongside spoken language<sup>[3]</sup></li>
            <li className="mb-2"><strong>Reading to learn:</strong> Teach concepts through reading</li>
            <li className="mb-2"><strong>Written schedules:</strong> Visual schedules and routines</li>
            <li className="mb-2"><strong>Social stories:</strong> Written stories to teach social concepts<sup>[4]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading as Communication Aid</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Writing or typing to communicate</li>
            <li className="mb-2">Using text alongside pictures<sup>[5]</sup></li>
            <li className="mb-2">Written choice boards</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Language Comprehension Intervention</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Reading Comprehension</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Explicit comprehension strategies:</strong> Direct teaching of understanding<sup>[6]</sup></li>
            <li className="mb-2"><strong>Questioning:</strong> Teaching to ask and answer questions about text</li>
            <li className="mb-2"><strong>Vocabulary instruction:</strong> Building word meanings, not just recognition</li>
            <li className="mb-2"><strong>Inferencing:</strong> Explicitly teaching "reading between the lines"<sup>[7]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Listening Comprehension</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Building spoken language understanding<sup>[8]</sup></li>
            <li className="mb-2">Following directions practice</li>
            <li className="mb-2">Answering questions about verbal information</li>
            <li className="mb-2">Connecting listening and reading comprehension</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Speech-Language Therapy</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Receptive language:</strong> Understanding spoken language<sup>[9]</sup></li>
            <li className="mb-2"><strong>Expressive language:</strong> Verbal expression and communication</li>
            <li className="mb-2"><strong>Vocabulary:</strong> Word meanings, not just reading words</li>
            <li className="mb-2"><strong>Grammar:</strong> Sentence structure and language formulation</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pragmatic Language</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Social use of language<sup>[10]</sup></li>
            <li className="mb-2">Conversational skills</li>
            <li className="mb-2">Understanding context and non-literal language</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Strategies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Classroom Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Written supports:</strong> Provide written instructions and information<sup>[11]</sup></li>
            <li className="mb-2"><strong>Visual aids:</strong> Charts, graphic organizers, visual schedules</li>
            <li className="mb-2"><strong>Pre-teaching:</strong> Introduce vocabulary and concepts before lessons</li>
            <li className="mb-2"><strong>Comprehension checks:</strong> Frequent checking of understanding<sup>[12]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Teaching Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Explicit, direct instruction</li>
            <li className="mb-2">Breaking down complex information<sup>[13]</sup></li>
            <li className="mb-2">Using child's reading interest to engage</li>
            <li className="mb-2">Connecting reading to real-world meaning</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Skills Support</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGZyaWVuZHN8ZW58MXx8fHwxNjc0NTM1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Children friends"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills Training</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Social stories:</strong> Written stories teaching social situations<sup>[14]</sup></li>
            <li className="mb-2"><strong>Role-playing:</strong> Practicing social interactions</li>
            <li className="mb-2"><strong>Explicit teaching:</strong> Direct instruction in social skills</li>
            <li className="mb-2"><strong>Peer interactions:</strong> Structured peer activities<sup>[15]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Using Reading for Social Learning</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Books about emotions and social situations</li>
            <li className="mb-2">Written scripts for social scenarios<sup>[16]</sup></li>
            <li className="mb-2">Reading about characters' thoughts and feelings</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Applied Behavior Analysis (ABA)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">May be appropriate if autism is present<sup>[17]</sup></li>
            <li className="mb-2">Teaching functional skills</li>
            <li className="mb-2">Reducing interfering behaviors</li>
            <li className="mb-2">Building communication and social skills</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Reading Perseveration</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Setting limits on reading time if interfering<sup>[18]</sup></li>
            <li className="mb-2">Using reading as reward for other activities</li>
            <li className="mb-2">Expanding interests beyond reading</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Parent and Home Strategies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Using Reading at Home</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Shared reading:</strong> Read together and discuss<sup>[19]</sup></li>
            <li className="mb-2"><strong>Ask questions:</strong> Help child think about meaning</li>
            <li className="mb-2"><strong>Connect to life:</strong> Relate reading to real experiences</li>
            <li className="mb-2"><strong>Expand vocabulary:</strong> Explain words, not just read them<sup>[20]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language-Rich Environment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Talk frequently with child</li>
            <li className="mb-2">Narrate daily activities<sup>[21]</sup></li>
            <li className="mb-2">Ask and answer questions</li>
            <li className="mb-2">Encourage verbal expression</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Technology and Tools</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Helpful Technology</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Interactive e-books with comprehension supports</li>
            <li className="mb-2">Visual schedule apps<sup>[22]</sup></li>
            <li className="mb-2">Communication apps if needed</li>
            <li className="mb-2">Educational apps targeting comprehension</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Planning</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">IEP or 504 Plan</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>May qualify:</strong> Under speech-language impairment or autism<sup>[23]</sup></li>
            <li className="mb-2"><strong>Goals:</strong> Language comprehension, social communication</li>
            <li className="mb-2"><strong>Accommodations:</strong> Visual supports, written instructions</li>
            <li className="mb-2"><strong>Services:</strong> Speech therapy, special education support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Key Principles</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Effective Support Strategies:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Leverage reading strength:</strong> Use as tool for learning<sup>[24]</sup></li>
              <li><strong>Focus on comprehension:</strong> Not just decoding</li>
              <li><strong>Build language skills:</strong> Spoken and written understanding</li>
              <li><strong>Address social needs:</strong> Explicit social skills teaching</li>
              <li><strong>Individualize approach:</strong> Based on child's specific profile<sup>[25]</sup></li>
              <li><strong>Collaborate:</strong> Parents, teachers, therapists working together</li>
              <li><strong>Early intervention:</strong> Start support as soon as identified</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Kupperman, P., Bligh, S., & Barouski, K. (2002). "Hyperlexia." In A. M. Wetherby & B. M. Prizant (Eds.), <em>Autism spectrum disorders</em> (pp. 357-376). Baltimore: Paul H. Brookes.</p>
          <p>[2] Treffert, D. A. (2011). "Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder." <em>Wisconsin Medical Society</em>.</p>
          <p>[3] Gray, C. (2010). <em>The new social story book</em>. Arlington, TX: Future Horizons.</p>
          <p>[4] Nation, K. (1999). "Reading skills in hyperlexia: A developmental perspective." <em>Psychological Bulletin</em>, 125(3), 338-355.</p>
          <p>[5] American Speech-Language-Hearing Association. (n.d.). <em>Language disorders</em>. Retrieved from www.asha.org</p>
          <p>[6] National Research Council. (2001). <em>Educating children with autism</em>. Washington, DC: National Academy Press.</p>
          <p>[7] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[8] Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). "Annotation: Hyperlexia: Disability or superability?" <em>Journal of Child Psychology and Psychiatry</em>, 44(8), 1079-1091.</p>
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
