import { ImageWithFallback } from '../../figma/ImageWithFallback';
import hyperlexiaChildReading from 'figma:asset/5dfdaec15563b739c9f40a6512f9682ca5b9afbb.png';
import wordsBlocks from 'figma:asset/ff61b1e81bf750d71decc70202750f66faf84dc9.png';
import comprehensionDeficits from 'figma:asset/c5136c35f7191ad4bcc0f1c013d7ebe9c7357017.png';
import echolaliaGraphic from 'figma:asset/546a047f35ad2055df9665e27532662bb48773d0.png';

interface HyperlexiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function HyperlexiaSymptoms({ setCurrentArticle }: HyperlexiaSymptomsProps) {
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
        Hyperlexia: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Hyperlexia presents with a distinctive pattern of advanced reading skills alongside significant language 
            and communication challenges.<sup>[1]</sup> The symptoms vary depending on whether hyperlexia occurs alone 
            or with autism spectrum disorder.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Reading Characteristics</h2>
          
          <ImageWithFallback 
            src={hyperlexiaChildReading} 
            alt="Child reading"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Precocious Reading Ability</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Early reading onset:</strong> Often before age 5, sometimes as early as 2-3<sup>[3]</sup></li>
            <li className="mb-2"><strong>Self-taught:</strong> Learn to read without explicit instruction</li>
            <li className="mb-2"><strong>Advanced decoding:</strong> Can read words far beyond age level<sup>[4]</sup></li>
            <li className="mb-2"><strong>Accurate pronunciation:</strong> Often pronounce words correctly despite age</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fascination with Letters and Words</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Letter obsession:</strong> Intense interest in letters, numbers, symbols<sup>[5]</sup></li>
            <li className="mb-2"><strong>Alphabet knowledge:</strong> Learning alphabet very early</li>
            <li className="mb-2"><strong>Environmental print:</strong> Reading signs, labels, logos everywhere</li>
            <li className="mb-2"><strong>Seeking text:</strong> Actively looking for things to read<sup>[6]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Behaviors</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reading aloud frequently or compulsively</li>
            <li className="mb-2">Preference for reading over other activities<sup>[7]</sup></li>
            <li className="mb-2">Memorizing books or text passages</li>
            <li className="mb-2">Reading without being asked or prompted</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Comprehension Difficulties</h2>
          
          <ImageWithFallback 
            src={comprehensionDeficits}
            alt="Reading comprehension deficits with hyperlexia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Comprehension Deficits</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Decoding-comprehension gap:</strong> Can read words but not understand meaning<sup>[8]</sup></li>
            <li className="mb-2"><strong>Literal interpretation:</strong> Missing inferential meaning</li>
            <li className="mb-2"><strong>Difficulty with questions:</strong> Can't answer "why" or "how" about what they read<sup>[9]</sup></li>
            <li className="mb-2"><strong>Context problems:</strong> Trouble using context to understand text</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Listening Comprehension</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty understanding spoken language<sup>[10]</sup></li>
            <li className="mb-2">Trouble following verbal instructions</li>
            <li className="mb-2">Limited understanding of conversations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Language Development</h2>
          
          <ImageWithFallback 
            src={echolaliaGraphic}
            alt="Echolalia is about the repeating of words and sentences"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Delayed or Disordered Speech</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Late talking:</strong> Delayed speech development despite early reading<sup>[11]</sup></li>
            <li className="mb-2"><strong>Limited expressive language:</strong> Difficulty expressing thoughts verbally</li>
            <li className="mb-2"><strong>Language disorder:</strong> May meet criteria for developmental language disorder</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Echolalia and Scripting</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Echolalia:</strong> Repeating words, phrases, or sentences<sup>[12]</sup></li>
            <li className="mb-2"><strong>Immediate echoing:</strong> Repeating what just heard</li>
            <li className="mb-2"><strong>Delayed echolalia:</strong> Repeating memorized phrases from books or media</li>
            <li className="mb-2"><strong>Scripting:</strong> Using memorized language from texts<sup>[13]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Vocabulary Patterns</h3>
          
          <ImageWithFallback 
            src={wordsBlocks}
            alt="WORDS spelled in blocks"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">May use advanced written vocabulary they've read</li>
            <li className="mb-2">Limited functional vocabulary for communication<sup>[14]</sup></li>
            <li className="mb-2">Difficulty with word meanings despite recognition</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Communication Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pragmatic Language Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Conversational difficulties:</strong> Trouble with back-and-forth conversation<sup>[15]</sup></li>
            <li className="mb-2"><strong>Topic maintenance:</strong> Difficulty staying on topic</li>
            <li className="mb-2"><strong>Social cues:</strong> Missing nonverbal communication</li>
            <li className="mb-2"><strong>Inappropriate responses:</strong> Responses may not match context<sup>[16]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Interaction</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty making friends</li>
            <li className="mb-2">Preference for solitary activities (especially reading)<sup>[17]</sup></li>
            <li className="mb-2">Limited interest in peers</li>
            <li className="mb-2">May prefer adult company or being alone</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Restricted Interests</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reading as perseveration:</strong> Intense, narrow focus on reading<sup>[18]</sup></li>
            <li className="mb-2"><strong>Letters/numbers obsession:</strong> Fascination with symbols</li>
            <li className="mb-2"><strong>Specific topics:</strong> May focus on particular subjects in reading</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Repetitive Behaviors</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Repetitive reading of same books or passages<sup>[19]</sup></li>
            <li className="mb-2">Lining up books or letters</li>
            <li className="mb-2">Organizing by alphabetical order</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Need for Routine</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Preference for sameness and predictability</li>
            <li className="mb-2">Difficulty with transitions<sup>[20]</sup></li>
            <li className="mb-2">Reading as self-regulation or comfort</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive Profile</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Strengths</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Visual memory:</strong> Exceptional visual memory skills<sup>[21]</sup></li>
            <li className="mb-2"><strong>Pattern recognition:</strong> Strong ability to recognize patterns</li>
            <li className="mb-2"><strong>Rote memory:</strong> Good at memorization</li>
            <li className="mb-2"><strong>Visual learning:</strong> Learn well through visual modality</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Weaknesses</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Auditory processing difficulties<sup>[22]</sup></li>
            <li className="mb-2">Abstract reasoning challenges</li>
            <li className="mb-2">Executive function difficulties</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms by Age</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Toddler Years (Ages 2-3)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Fascination with letters and numbers</li>
            <li className="mb-2">Beginning to recognize and name letters<sup>[23]</sup></li>
            <li className="mb-2">May be reading simple words</li>
            <li className="mb-2">Delayed speech or language concerns</li>
            <li className="mb-2">Limited social interaction with peers</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Preschool (Ages 3-5)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Advanced reading ability becomes obvious<sup>[24]</sup></li>
            <li className="mb-2">Reading beyond age level</li>
            <li className="mb-2">Comprehension doesn't match decoding</li>
            <li className="mb-2">Social and communication difficulties apparent</li>
            <li className="mb-2">May show autism-like behaviors</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School Age (Ages 6+)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Comprehension gap becomes more problematic<sup>[25]</sup></li>
            <li className="mb-2">Academic challenges in subjects requiring comprehension</li>
            <li className="mb-2">Social difficulties with peers</li>
            <li className="mb-2">May need support despite reading ability</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Distinguishing Features</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Diagnostic Indicators:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Early reading:</strong> Reading before age 5 without formal instruction<sup>[26]</sup></li>
              <li><strong>Decoding-comprehension split:</strong> Reading accuracy &gt;&gt; reading comprehension</li>
              <li><strong>Language difficulties:</strong> Delayed or disordered language development</li>
              <li><strong>Letter fascination:</strong> Intense, early interest in letters/symbols<sup>[27]</sup></li>
              <li><strong>Social challenges:</strong> Difficulty with social communication</li>
              <li><strong>Not just giftedness:</strong> Gifted readers have strong comprehension too</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Nation, K. (1999). "Reading skills in hyperlexia: A developmental perspective." <em>Psychological Bulletin</em>, 125(3), 338-355.</p>
          <p>[2] Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). "Annotation: Hyperlexia: Disability or superability?" <em>Journal of Child Psychology and Psychiatry</em>, 44(8), 1079-1091.</p>
          <p>[3] Silberberg, N. E., & Silberberg, M. C. (1967). "Hyperlexia: Specific word recognition skills in young children." <em>Exceptional Children</em>, 34(1), 41-42.</p>
          <p>[4] Kupperman, P., Bligh, S., & Barouski, K. (2002). "Hyperlexia." In A. M. Wetherby & B. M. Prizant (Eds.), <em>Autism spectrum disorders</em> (pp. 357-376). Baltimore: Paul H. Brookes.</p>
          <p>[5] Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). "Patterns of reading ability in children with autism spectrum disorder." <em>Journal of Autism and Developmental Disorders</em>, 36(7), 911-919.</p>
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