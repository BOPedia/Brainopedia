import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DLDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DLDSymptoms({ setCurrentArticle }: DLDSymptomsProps) {
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
        DLD: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Developmental Language Disorder manifests through difficulties across multiple domains of language, 
            including grammar, vocabulary, understanding, and expression.<sup>[1]</sup> Symptoms vary significantly 
            among individuals but typically persist across development.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Early Language Development</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwdGFsa2luZ3xlbnwxfHx8fDE2NzQ1MzUxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Baby talking"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Delayed Language Milestones</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>First words:</strong> May appear late (after 18-24 months)<sup>[3]</sup></li>
            <li className="mb-2"><strong>Word combinations:</strong> Delayed two-word phrases (after 2.5-3 years)</li>
            <li className="mb-2"><strong>Vocabulary growth:</strong> Slower acquisition of new words<sup>[4]</sup></li>
            <li className="mb-2"><strong>Pattern:</strong> Consistently behind peers in language development</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Warning Signs (Ages 2-3)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Limited vocabulary for age</li>
            <li className="mb-2">Not combining words by age 2<sup>[5]</sup></li>
            <li className="mb-2">Difficulty understanding simple instructions</li>
            <li className="mb-2">Not using sentences by age 3</li>
            <li className="mb-2">Frequent communication frustration</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Grammar and Morphology Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Grammatical Morphemes</h3>
          <p className="mb-4">
            Children with DLD have particular difficulty with grammatical morphemes:<sup>[6]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Past tense -ed:</strong> "walk" instead of "walked"</li>
            <li className="mb-2"><strong>Third person -s:</strong> "He walk" instead of "He walks"<sup>[7]</sup></li>
            <li className="mb-2"><strong>Plural -s:</strong> Omitting or incorrectly using plurals</li>
            <li className="mb-2"><strong>Possessive 's:</strong> "Dad car" instead of "Dad's car"</li>
            <li className="mb-2"><strong>Auxiliary verbs:</strong> "He going" instead of "He is going"<sup>[8]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sentence Structure</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Simple sentences:</strong> Using short, simple sentences when peers use complex ones<sup>[9]</sup></li>
            <li className="mb-2"><strong>Sentence fragments:</strong> Incomplete sentences</li>
            <li className="mb-2"><strong>Word order errors:</strong> Incorrect arrangement of words</li>
            <li className="mb-2"><strong>Limited complexity:</strong> Avoiding complex grammatical structures<sup>[10]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Question Formation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty forming questions correctly</li>
            <li className="mb-2">"What you doing?" instead of "What are you doing?"<sup>[11]</sup></li>
            <li className="mb-2">Rising intonation as primary question marker</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Vocabulary and Word-Finding Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Limited Vocabulary</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Smaller vocabulary:</strong> Know fewer words than same-age peers<sup>[12]</sup></li>
            <li className="mb-2"><strong>Slow word learning:</strong> Need more exposures to learn new words</li>
            <li className="mb-2"><strong>Shallow knowledge:</strong> Less detailed understanding of word meanings<sup>[13]</sup></li>
            <li className="mb-2"><strong>Concrete language:</strong> Difficulty with abstract or figurative language</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Word-Finding Problems</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Tip-of-the-tongue:</strong> Knowing a word but unable to retrieve it<sup>[14]</sup></li>
            <li className="mb-2"><strong>Circumlocution:</strong> Talking around a word ("that thing you eat with")</li>
            <li className="mb-2"><strong>Substitutions:</strong> Using general words like "thing" or "stuff"</li>
            <li className="mb-2"><strong>Pauses and hesitations:</strong> Frequent pauses while searching for words<sup>[15]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Receptive Language Difficulties</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxpc3RlbmluZ3xlbnwxfHx8fDE2NzQ1MzUxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child listening"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Spoken Language</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Following directions:</strong> Difficulty with multi-step instructions<sup>[16]</sup></li>
            <li className="mb-2"><strong>Complex sentences:</strong> Trouble understanding complex grammar</li>
            <li className="mb-2"><strong>Processing speed:</strong> Need more time to process spoken language<sup>[17]</sup></li>
            <li className="mb-2"><strong>Longer utterances:</strong> Difficulty with long, complex sentences</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Comprehension Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Over-reliance on context clues<sup>[18]</sup></li>
            <li className="mb-2">Understanding routine situations better than novel ones</li>
            <li className="mb-2">Appearing to understand when actually confused</li>
            <li className="mb-2">Difficulty asking for clarification</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Narrative and Discourse Skills</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Storytelling Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Story structure:</strong> Lacking clear beginning, middle, end<sup>[19]</sup></li>
            <li className="mb-2"><strong>Missing details:</strong> Leaving out important information</li>
            <li className="mb-2"><strong>Sequence problems:</strong> Events out of order</li>
            <li className="mb-2"><strong>Cohesion:</strong> Difficulty connecting ideas smoothly<sup>[20]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Conversational Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty maintaining topics</li>
            <li className="mb-2">Trouble taking turns appropriately<sup>[21]</sup></li>
            <li className="mb-2">Limited ability to repair communication breakdowns</li>
            <li className="mb-2">Challenges with conversational contingency (responding relevantly)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Phonological and Speech Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Speech Sound Production</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">May have co-occurring speech sound disorders<sup>[22]</sup></li>
            <li className="mb-2">Not a defining feature but often present</li>
            <li className="mb-2">Speech may be less clear than peers</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Phonological Awareness</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Rhyming:</strong> Difficulty recognizing or producing rhymes<sup>[23]</sup></li>
            <li className="mb-2"><strong>Sound manipulation:</strong> Trouble with tasks like deleting sounds</li>
            <li className="mb-2"><strong>Syllable awareness:</strong> Difficulty counting syllables</li>
            <li className="mb-2"><strong>Reading risk:</strong> Phonological weaknesses predict reading difficulties<sup>[24]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Academic Language Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Literacy Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reading comprehension:</strong> Understanding written text<sup>[25]</sup></li>
            <li className="mb-2"><strong>Written expression:</strong> Difficulty writing sentences and paragraphs</li>
            <li className="mb-2"><strong>Spelling:</strong> Challenges with spelling patterns<sup>[26]</sup></li>
            <li className="mb-2"><strong>Grammar in writing:</strong> Same grammatical errors as in speech</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Vocabulary</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty learning subject-specific vocabulary<sup>[27]</sup></li>
            <li className="mb-2">Trouble with abstract academic concepts</li>
            <li className="mb-2">Challenges understanding textbook language</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Communication Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pragmatic Language</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Social use of language:</strong> Using language appropriately in context<sup>[28]</sup></li>
            <li className="mb-2"><strong>Inferencing:</strong> Understanding implied meaning</li>
            <li className="mb-2"><strong>Perspective-taking:</strong> Considering listener's knowledge<sup>[29]</sup></li>
            <li className="mb-2"><strong>Social nuances:</strong> Missing subtle social-linguistic cues</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Peer Interactions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty joining group conversations</li>
            <li className="mb-2">Misunderstanding jokes and teasing<sup>[30]</sup></li>
            <li className="mb-2">Trouble negotiating and compromising verbally</li>
            <li className="mb-2">Social withdrawal due to language difficulties</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms by Age</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Preschool (Ages 3-5)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Limited vocabulary</li>
            <li className="mb-2">Short, simple sentences<sup>[31]</sup></li>
            <li className="mb-2">Grammatical errors</li>
            <li className="mb-2">Difficulty following directions</li>
            <li className="mb-2">Trouble participating in conversations</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School Age (Ages 6-12)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Persistent grammatical difficulties<sup>[32]</sup></li>
            <li className="mb-2">Reading and writing challenges</li>
            <li className="mb-2">Difficulty with academic language</li>
            <li className="mb-2">Social difficulties with peers</li>
            <li className="mb-2">Trouble understanding complex instructions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adolescence (Ages 13-18)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Continued language difficulties though may be less obvious<sup>[33]</sup></li>
            <li className="mb-2">Academic struggles across subjects</li>
            <li className="mb-2">Complex social language challenges</li>
            <li className="mb-2">Written expression difficulties</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adults</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Persistent but often subtle difficulties<sup>[34]</sup></li>
            <li className="mb-2">Challenges in education and employment</li>
            <li className="mb-2">Social communication difficulties</li>
            <li className="mb-2">Compensatory strategies developed</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Individual Variability</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Important Points:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Heterogeneous condition:</strong> No two individuals with DLD are exactly alike<sup>[35]</sup></li>
              <li><strong>Varying severity:</strong> Ranges from mild to severe</li>
              <li><strong>Different profiles:</strong> Some have more expressive difficulties, others more receptive</li>
              <li><strong>Changing presentation:</strong> Symptoms evolve across development<sup>[36]</sup></li>
              <li><strong>Compensation:</strong> Individuals develop strategies to work around difficulties</li>
              <li><strong>Not always obvious:</strong> May appear to understand when actually confused</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Leonard, L. B. (2014). <em>Children with specific language impairment</em> (2nd ed.). Cambridge, MA: MIT Press.</p>
          <p>[2] Rice, M. L. (2013). "Language growth and genetics of specific language impairment." <em>International Journal of Speech-Language Pathology</em>, 15(3), 223-233.</p>
          <p>[3] Rice, M. L., Taylor, C. L., & Zubrick, S. R. (2008). "Language outcomes of 7-year-old children with or without a history of late language emergence at 24 months." <em>Journal of Speech, Language, and Hearing Research</em>, 51(2), 394-407.</p>
          <p>[4] Rice, M. L., Wexler, K., & Hershberger, S. (1998). "Tense over time: The longitudinal course of tense acquisition in children with specific language impairment." <em>Journal of Speech, Language, and Hearing Research</em>, 41(6), 1412-1431.</p>
          <p>[5] Rice, M. L., & Wexler, K. (1996). "Toward tense as a clinical marker of specific language impairment in English-speaking children." <em>Journal of Speech and Hearing Research</em>, 39(6), 1239-1257.</p>
          <p>[6] Redmond, S. M. (2016). "Markers, models, and measurement error: Exploring the links between attention deficits and language impairments." <em>Journal of Speech, Language, and Hearing Research</em>, 59(1), 62-71.</p>
          <p>[7] McGregor, K. K., Oleson, J., Bahnsen, A., & Duff, D. (2013). "Children with developmental language impairment have vocabulary deficits characterized by limited breadth and depth." <em>International Journal of Language & Communication Disorders</em>, 48(3), 307-319.</p>
          <p>[8] Dockrell, J. E., Messer, D., George, R., & Wilson, G. (1998). "Children with word-finding difficulties—prevalence, presentation and naming problems." <em>International Journal of Language & Communication Disorders</em>, 33(4), 445-454.</p>
          <p>[9] Bishop, D. V. M. (1997). <em>Uncommon understanding: Development and disorders of language comprehension in children</em>. Hove, UK: Psychology Press.</p>
          <p>[10] Leonard, L. B., Weismer, S. E., Miller, C. A., Francis, D. J., Tomblin, J. B., & Kail, R. V. (2007). "Speed of processing, working memory, and language impairment in children." <em>Journal of Speech, Language, and Hearing Research</em>, 50(2), 408-428.</p>
          <p>[11] Norbury, C. F., & Bishop, D. V. M. (2003). "Narrative skills of children with communication impairments." <em>International Journal of Language & Communication Disorders</em>, 38(3), 287-313.</p>
          <p>[12] Shriberg, L. D., Tomblin, J. B., & McSweeny, J. L. (1999). "Prevalence of speech delay in 6-year-old children and comorbidity with language impairment." <em>Journal of Speech, Language, and Hearing Research</em>, 42(6), 1461-1481.</p>
          <p>[13] Catts, H. W., Fey, M. E., Tomblin, J. B., & Zhang, X. (2002). "A longitudinal investigation of reading outcomes in children with language impairments." <em>Journal of Speech, Language, and Hearing Research</em>, 45(6), 1142-1157.</p>
          <p>[14] Bishop, D. V. M., & Clarkson, B. (2003). "Written language as a window into residual language deficits: A study of children with persistent and residual speech and language impairments." <em>Cortex</em>, 39(2), 215-237.</p>
          <p>[15] Norbury, C. F. (2005). "The relationship between theory of mind and metaphor: Evidence from children with language impairment and autistic spectrum disorder." <em>British Journal of Developmental Psychology</em>, 23(3), 383-399.</p>
          <p>[16] Conti-Ramsden, G., & Botting, N. (2004). "Social difficulties and victimization in children with SLI at 11 years of age." <em>Journal of Speech, Language, and Hearing Research</em>, 47(1), 145-161.</p>
          <p>[17] Conti-Ramsden, G., Durkin, K., Simkin, Z., & Knox, E. (2009). "Specific language impairment and school outcomes. I: Identifying and explaining variability at the end of compulsory education." <em>International Journal of Language & Communication Disorders</em>, 44(1), 15-35.</p>
          <p>[18] Clegg, J., Hollis, C., Mawhood, L., & Rutter, M. (2005). "Developmental language disorders—a follow-up in later adult life." <em>Journal of Child Psychology and Psychiatry</em>, 46(2), 128-149.</p>
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