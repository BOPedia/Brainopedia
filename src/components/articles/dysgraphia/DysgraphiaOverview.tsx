import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DysgraphiaOverview({ setCurrentArticle }: DysgraphiaOverviewProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dysgraphia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dysgraphia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Dysgraphia: Overview
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Dysgraphia is a specific learning disability that affects writing abilities, making the physical act of 
            writing difficult despite adequate instruction and normal intelligence.<sup>[1]</sup> It is one of the 
            lesser-known learning disabilities but can significantly impact academic performance and daily functioning.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is Dysgraphia?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwaGFuZHxlbnwxfHx8fDE3Njc0NTM1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Hand writing"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Definition</h3>
          <p className="mb-4">
            The term "dysgraphia" comes from the Greek words "dys" (impaired) and "graphia" (writing). 
            It refers to difficulties with the mechanics of writing that are not due to lack of instruction, 
            intellectual disability, or neurological damage.<sup>[3]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Features</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Impaired handwriting:</strong> Illegible or slow handwriting</li>
            <li className="mb-2"><strong>Difficulty with spelling:</strong> Inconsistent spelling errors<sup>[4]</sup></li>
            <li className="mb-2"><strong>Challenges with written expression:</strong> Gap between oral and written abilities</li>
            <li className="mb-2"><strong>Physical discomfort:</strong> Hand cramping or fatigue while writing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Not Just "Bad Handwriting"</h3>
          <p className="mb-4">
            Dysgraphia is a neurologically-based condition, not simply poor penmanship or laziness. It involves 
            underlying processing difficulties that make writing an effortful and often frustrating task.<sup>[5]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Types of Dysgraphia</h2>
          
          <p className="mb-4">
            Researchers have identified different types of dysgraphia based on the underlying causes:<sup>[6]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">1. Dyslexic Dysgraphia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Illegible spontaneously written work</li>
            <li className="mb-2">Normal spelling when typing or using oral spelling tests</li>
            <li className="mb-2">Normal copying abilities</li>
            <li className="mb-2">Associated with reading difficulties</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">2. Motor Dysgraphia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Poor fine motor skills affecting letter formation<sup>[7]</sup></li>
            <li className="mb-2">Illegible writing across all tasks</li>
            <li className="mb-2">May have normal spelling ability orally</li>
            <li className="mb-2">Slow, effortful writing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">3. Spatial Dysgraphia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulties with spatial aspects of writing</li>
            <li className="mb-2">Problems with letter spacing and sizing</li>
            <li className="mb-2">Difficulty staying on lines</li>
            <li className="mb-2">Related to visual-spatial processing</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Common is Dysgraphia?</h3>
          <p className="mb-4">
            Exact prevalence is difficult to determine due to varying definitions and diagnostic criteria, 
            but studies suggest:<sup>[8]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Affects approximately 5-20% of children</li>
            <li className="mb-2">Often called "the forgotten learning disability" due to less awareness</li>
            <li className="mb-2">Affects individuals across all intelligence levels</li>
            <li className="mb-2">Can persist into adulthood if not addressed<sup>[9]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gender Differences</h3>
          <p className="mb-4">
            Research on gender prevalence is limited, but some studies suggest boys may be more frequently 
            identified, possibly due to motor skill development differences.<sup>[10]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNjc0NTM1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student learning"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <p className="mb-4">
            Dysgraphia frequently occurs alongside other conditions:<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Co-occurring Conditions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Dyslexia:</strong> Reading and writing difficulties often overlap<sup>[12]</sup></li>
            <li className="mb-2"><strong>ADHD:</strong> Attention difficulties compound writing challenges</li>
            <li className="mb-2"><strong>Developmental Coordination Disorder (Dyspraxia):</strong> Motor planning difficulties</li>
            <li className="mb-2"><strong>Autism Spectrum Disorder:</strong> Motor and executive function challenges<sup>[13]</sup></li>
            <li className="mb-2"><strong>Language disorders:</strong> Broader language processing difficulties</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impact on Daily Life</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Impact</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty taking notes during lectures<sup>[14]</sup></li>
            <li className="mb-2">Slower completion of written assignments</li>
            <li className="mb-2">Poor performance on timed tests requiring written responses</li>
            <li className="mb-2">Frustration leading to avoidance of writing tasks</li>
            <li className="mb-2">Lower grades despite understanding content<sup>[15]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social and Emotional Impact</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Embarrassment about handwriting quality</li>
            <li className="mb-2">Low self-esteem related to academic struggles<sup>[16]</sup></li>
            <li className="mb-2">Anxiety about writing tasks</li>
            <li className="mb-2">Being perceived as "lazy" or "not trying hard enough"</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Everyday Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Filling out forms and applications</li>
            <li className="mb-2">Writing shopping lists or reminders</li>
            <li className="mb-2">Signing documents</li>
            <li className="mb-2">Taking phone messages</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnosis and Classification</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">DSM-5 Classification</h3>
          <p className="mb-4">
            In the DSM-5, dysgraphia falls under the category of "Specific Learning Disorder with impairment in 
            written expression."<sup>[17]</sup> This represents a shift from previous editions that had separate 
            categories for different learning disabilities.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Educational Classification</h3>
          <p className="mb-4">
            Under IDEA (Individuals with Disabilities Education Act), students with dysgraphia may qualify for 
            special education services under the category of "Specific Learning Disability."<sup>[18]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths and Abilities</h2>
          
          <p className="mb-4">
            It's important to recognize that individuals with dysgraphia often have significant strengths:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Strong verbal abilities:</strong> Often articulate and expressive when speaking<sup>[19]</sup></li>
            <li className="mb-2"><strong>Creative thinking:</strong> Innovative problem-solving approaches</li>
            <li className="mb-2"><strong>Visual-spatial strengths:</strong> May excel in art, design, or spatial reasoning</li>
            <li className="mb-2"><strong>Intellectual abilities:</strong> Dysgraphia occurs across all intelligence levels<sup>[20]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prognosis and Outlook</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">With Appropriate Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Skills can improve with targeted intervention<sup>[21]</sup></li>
            <li className="mb-2">Assistive technology provides effective alternatives to handwriting</li>
            <li className="mb-2">Accommodations can level the playing field</li>
            <li className="mb-2">Many successful individuals have dysgraphia<sup>[22]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Lifelong Condition</h3>
          <p className="mb-4">
            While dysgraphia is typically a lifelong condition, its impact can be significantly reduced through:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Early identification and intervention</li>
            <li className="mb-2">Use of compensatory strategies and technology<sup>[23]</sup></li>
            <li className="mb-2">Appropriate accommodations in educational and work settings</li>
            <li className="mb-2">Understanding and support from educators and employers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Role of Technology</h2>
          
          <p className="mb-4">
            Modern technology has dramatically improved outcomes for individuals with dysgraphia:<sup>[24]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Word processing reduces handwriting demands</li>
            <li className="mb-2">Speech-to-text software provides alternative input methods</li>
            <li className="mb-2">Digital communication (email, texts) is often easier than handwriting</li>
            <li className="mb-2">Most professional work now done digitally rather than by hand</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Advocacy and Awareness</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The "Forgotten" Learning Disability</h3>
          <p className="mb-4">
            Dysgraphia has been called "the forgotten learning disability" because it receives less attention 
            than dyslexia or ADHD.<sup>[25]</sup> Increasing awareness is important for:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Earlier identification and intervention</li>
            <li className="mb-2">Reducing stigma and misunderstanding</li>
            <li className="mb-2">Ensuring appropriate accommodations</li>
            <li className="mb-2">Supporting individuals and families affected by dysgraphia</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Ahead</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Takeaways:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Dysgraphia is a specific learning disability affecting writing, not a result of laziness or lack of effort</li>
              <li>It can significantly impact academic performance and daily functioning</li>
              <li>Multiple types exist, each with different underlying causes<sup>[26]</sup></li>
              <li>Often co-occurs with other neurodevelopmental conditions</li>
              <li>With appropriate support, accommodations, and technology, individuals with dysgraphia can succeed</li>
              <li>Awareness and early intervention are crucial for positive outcomes</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Berninger, V. W., & Wolf, B. J. (2009). <em>Teaching students with dyslexia and dysgraphia: Lessons from teaching and science</em>. Baltimore: Paul H. Brookes Publishing.</p>
          <p>[2] Katusic, S. K., Colligan, R. C., Weaver, A. L., & Barbaresi, W. J. (2009). "The forgotten learning disability: Epidemiology of written language disorder in a population-based birth cohort." <em>Pediatrics</em>, 123(5), 1306-1313.</p>
          <p>[3] Berninger, V. W. (2004). "Understanding the 'graphia' in developmental dysgraphia: A developmental neuropsychological perspective." In D. Dewey & D. E. Tupper (Eds.), <em>Developmental motor disorders: A neuropsychological perspective</em> (pp. 328-350). New York: Guilford Press.</p>
          <p>[4] Graham, S., & Weintraub, N. (1996). "A review of handwriting research: Progress and prospects from 1980 to 1994." <em>Educational Psychology Review</em>, 8(1), 7-87.</p>
          <p>[5] Berninger, V. W., & Richards, T. L. (2010). "Inter-relationships among behavioral markers, genes, brain, and treatment in dyslexia and dysgraphia." <em>Future Neurology</em>, 5(4), 597-617.</p>
          <p>[6] Deuel, R. K. (1995). "Developmental dysgraphia and motor skills disorders." <em>Journal of Child Neurology</em>, 10(Suppl 1), S6-S8.</p>
          <p>[7] Rosenblum, S., Weiss, P. L., & Parush, S. (2003). "Product and process evaluation of handwriting difficulties." <em>Educational Psychology Review</em>, 15(1), 41-81.</p>
          <p>[8] Katusic, S. K., Colligan, R. C., Weaver, A. L., & Barbaresi, W. J. (2009). "The forgotten learning disability." <em>Pediatrics</em>, 123(5), 1306-1313.</p>
          <p>[9] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[10] Berninger, V. W., & Fuller, F. (1992). "Gender differences in orthographic, verbal, and compositional fluency: Implications for assessing writing disabilities in primary grade children." <em>Journal of School Psychology</em>, 30(4), 363-382.</p>
          <p>[11] Willcutt, E. G., Pennington, B. F., Olson, R. K., & DeFries, J. C. (2007). "Understanding comorbidity: A twin study of reading disability and attention-deficit/hyperactivity disorder." <em>Developmental Neuropsychology</em>, 31(2), 129-153.</p>
          <p>[12] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[13] Fuentes, C. T., Mostofsky, S. H., & Bastian, A. J. (2009). "Children with autism show specific handwriting impairments." <em>Neurology</em>, 73(19), 1532-1537.</p>
          <p>[14] Peverly, S. T. (2006). "The importance of handwriting speed in adult writing." <em>Developmental Neuropsychology</em>, 29(1), 197-216.</p>
          <p>[15] Graham, S., Berninger, V. W., Abbott, R. D., Abbott, S. P., & Whitaker, D. (1997). "Role of mechanics in composing of elementary school students: A new methodological approach." <em>Journal of Educational Psychology</em>, 89(1), 170-182.</p>
          <p>[16] Nelson, J. M., & Harwood, H. (2011). "Learning disabilities and anxiety: A meta-analysis." <em>Journal of Learning Disabilities</em>, 44(1), 3-17.</p>
          <p>[17] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[18] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[19] Connelly, V., Campbell, S., MacLean, M., & Barnes, J. (2006). "Contribution of lower order letter writing skills to the written composition of college students with and without dyslexia." <em>Developmental Neuropsychology</em>, 29(1), 175-196.</p>
          <p>[20] Berninger, V. W., & Wolf, B. J. (2009). <em>Teaching students with dyslexia and dysgraphia</em>. Baltimore: Paul H. Brookes Publishing.</p>
          <p>[21] Graham, S., & Harris, K. R. (2009). "Almost 30 years of writing research: Making sense of it all with The Wrath of Khan." <em>Learning Disabilities Research & Practice</em>, 24(2), 63-77.</p>
          <p>[22] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties, computer images, and the ironies of creativity</em>. Amherst, NY: Prometheus Books.</p>
          <p>[23] MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[24] Berninger, V. W., Abbott, R. D., Augsburger, A., & Garcia, N. (2009). "Comparison of pen and keyboard transcription modes in children with and without learning disabilities." <em>Learning Disability Quarterly</em>, 32(3), 123-141.</p>
          <p>[25] Katusic, S. K., Colligan, R. C., Weaver, A. L., & Barbaresi, W. J. (2009). "The forgotten learning disability." <em>Pediatrics</em>, 123(5), 1306-1313.</p>
          <p>[26] Berninger, V. W., & May, M. O. (2011). "Evidence-based diagnosis and treatment for specific learning disabilities involving impairments in written and/or oral language." <em>Journal of Learning Disabilities</em>, 44(2), 167-183.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dysgraphia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dysgraphia
        </a>
      </div>
    </article>
  );
}
