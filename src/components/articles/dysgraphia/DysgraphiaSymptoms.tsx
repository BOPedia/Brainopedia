import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DysgraphiaSymptoms({ setCurrentArticle }: DysgraphiaSymptomsProps) {
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
        Dysgraphia: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Dysgraphia manifests through a variety of symptoms related to the physical act of writing, spelling, 
            and written expression.<sup>[1]</sup> These symptoms can range from mild to severe and often vary depending 
            on the type of dysgraphia and individual circumstances.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Handwriting Difficulties</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwaGFuZHxlbnwxfHx8fDE3Njc0NTM1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Hand writing"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Illegible Writing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Letter formation:</strong> Inconsistent or poorly formed letters<sup>[3]</sup></li>
            <li className="mb-2"><strong>Letter reversals:</strong> Confusion with letters like b/d, p/q</li>
            <li className="mb-2"><strong>Mixed case:</strong> Inconsistent use of uppercase and lowercase letters</li>
            <li className="mb-2"><strong>Overall legibility:</strong> Handwriting difficult for others (or self) to read<sup>[4]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Inconsistent Spacing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Irregular spaces between letters within words</li>
            <li className="mb-2">Inconsistent spacing between words<sup>[5]</sup></li>
            <li className="mb-2">Words running together or excessively separated</li>
            <li className="mb-2">Difficulty maintaining consistent margins</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Letter Size and Alignment Issues</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Inconsistent letter sizing within and between words</li>
            <li className="mb-2">Difficulty staying on the line<sup>[6]</sup></li>
            <li className="mb-2">Letters floating above or dropping below the baseline</li>
            <li className="mb-2">Mixture of large and small letters</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Slow Writing Speed</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Takes significantly longer to write than peers<sup>[7]</sup></li>
            <li className="mb-2">Difficulty completing timed writing tasks</li>
            <li className="mb-2">Labored, effortful writing process</li>
            <li className="mb-2">Cannot keep up with note-taking demands</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Motor and Physical Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Grip and Posture Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Unusual pencil grip:</strong> Awkward or inefficient pencil hold<sup>[8]</sup></li>
            <li className="mb-2"><strong>Excessive grip pressure:</strong> Gripping pencil too tightly or too loosely</li>
            <li className="mb-2"><strong>Hand position:</strong> Unusual hand or wrist positioning while writing</li>
            <li className="mb-2"><strong>Body posture:</strong> Awkward positioning of body, arm, or paper</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Physical Discomfort</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Hand cramping or pain while writing<sup>[9]</sup></li>
            <li className="mb-2">Muscle fatigue in hand, arm, or shoulder</li>
            <li className="mb-2">Complaints of hand hurting during writing tasks</li>
            <li className="mb-2">Frequent breaks needed to rest hand</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fine Motor Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty with other fine motor tasks (buttons, zippers, tying shoes)</li>
            <li className="mb-2">Poor coordination in finger movements<sup>[10]</sup></li>
            <li className="mb-2">Challenges with tasks requiring precision</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Spelling Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Inconsistent Spelling</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Same word spelled differently within same document<sup>[11]</sup></li>
            <li className="mb-2">Able to spell word correctly orally but not in writing</li>
            <li className="mb-2">Spelling deteriorates as writing task lengthens</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Types of Spelling Errors</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Phonetic errors (writing words as they sound)<sup>[12]</sup></li>
            <li className="mb-2">Omitting letters or syllables</li>
            <li className="mb-2">Letter reversals and transpositions</li>
            <li className="mb-2">Confusion with homophones (to/too/two, there/their/they're)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Written Expression Challenges</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1625750998663-4b2ae8f8b658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwaGFuZCUyMHBlbmNpbHxlbnwxfHx8fDE3Njc0NTM1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Writing hand pencil"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Discrepancy Between Oral and Written Abilities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Articulate verbally but struggle in writing:</strong> Can express ideas clearly when speaking<sup>[13]</sup></li>
            <li className="mb-2"><strong>Rich oral vocabulary:</strong> Limited vocabulary in written work</li>
            <li className="mb-2"><strong>Complex verbal reasoning:</strong> Simple, basic written sentences</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization and Structure</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty organizing thoughts on paper<sup>[14]</sup></li>
            <li className="mb-2">Poor paragraph structure</li>
            <li className="mb-2">Lack of clear beginning, middle, and end</li>
            <li className="mb-2">Disjointed or illogical flow of ideas</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Grammar and Syntax</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Incomplete sentences or run-on sentences</li>
            <li className="mb-2">Missing or incorrect punctuation<sup>[15]</sup></li>
            <li className="mb-2">Grammatical errors inconsistent with oral language</li>
            <li className="mb-2">Omitting or misusing small words (a, the, is)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Content and Length</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Written work much shorter than expected<sup>[16]</sup></li>
            <li className="mb-2">Lack of detail or elaboration</li>
            <li className="mb-2">Difficulty expanding on ideas</li>
            <li className="mb-2">Repetitive language or ideas</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Copying Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Near-Point Copying</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty copying from book or paper on desk<sup>[17]</sup></li>
            <li className="mb-2">Omitting or adding letters or words</li>
            <li className="mb-2">Slow, laborious copying process</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Far-Point Copying</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Greater difficulty copying from board or screen</li>
            <li className="mb-2">Losing place when looking back and forth<sup>[18]</sup></li>
            <li className="mb-2">Cannot complete copying before material is erased</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms by Age Group</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Preschool and Kindergarten</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Avoidance of drawing and coloring activities</li>
            <li className="mb-2">Difficulty learning to write name<sup>[19]</sup></li>
            <li className="mb-2">Awkward pencil grip</li>
            <li className="mb-2">Slow progress in pre-writing skills</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Elementary School (Grades 1-5)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Illegible handwriting despite practice<sup>[20]</sup></li>
            <li className="mb-2">Mixing print and cursive letters</li>
            <li className="mb-2">Inconsistent spacing and sizing</li>
            <li className="mb-2">Complaints about hand hurting</li>
            <li className="mb-2">Significant gap between oral and written work quality</li>
            <li className="mb-2">Difficulty with timed writing tasks<sup>[21]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle School and High School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Continued illegible or very slow handwriting</li>
            <li className="mb-2">Difficulty taking notes during lectures<sup>[22]</sup></li>
            <li className="mb-2">Avoidance of writing-intensive courses</li>
            <li className="mb-2">Frustration with increased writing demands</li>
            <li className="mb-2">Poor performance on essay tests despite understanding material</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adults</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Continued difficulty with handwriting<sup>[23]</sup></li>
            <li className="mb-2">Avoidance of tasks requiring writing</li>
            <li className="mb-2">Reliance on typing or voice-to-text</li>
            <li className="mb-2">Challenges with forms, applications, signatures</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral and Emotional Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Avoidance and Resistance</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Strong resistance to writing tasks</li>
            <li className="mb-2">Procrastination on written assignments<sup>[24]</sup></li>
            <li className="mb-2">Making excuses to avoid writing</li>
            <li className="mb-2">Preferring activities that don't require writing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Emotional Responses</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Frustration and anger about writing tasks<sup>[25]</sup></li>
            <li className="mb-2">Anxiety before writing assignments or tests</li>
            <li className="mb-2">Low self-esteem related to writing abilities</li>
            <li className="mb-2">Embarrassment about handwriting quality</li>
            <li className="mb-2">Feelings of being "dumb" despite average or above-average intelligence</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Regulation Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty monitoring own writing for errors</li>
            <li className="mb-2">Problems with self-editing and revision<sup>[26]</sup></li>
            <li className="mb-2">Lack of awareness of writing quality</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Important Distinctions</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">What Dysgraphia Is NOT:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Laziness:</strong> Individuals with dysgraphia are working hard, often much harder than peers<sup>[27]</sup></li>
              <li><strong>Lack of effort:</strong> Writing is genuinely difficult, not a choice</li>
              <li><strong>Low intelligence:</strong> Dysgraphia occurs across all intelligence levels</li>
              <li><strong>Poor teaching:</strong> While instruction matters, dysgraphia has neurological basis</li>
              <li><strong>Developmental delay that will be outgrown:</strong> Without intervention, difficulties typically persist</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">When to Seek Evaluation</h2>
          
          <p className="mb-4">
            Consider seeking professional evaluation if:<sup>[28]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Handwriting is significantly worse than peers despite practice</li>
            <li className="mb-2">Writing causes physical pain or extreme frustration</li>
            <li className="mb-2">Large gap between oral abilities and written work</li>
            <li className="mb-2">Writing difficulties persist beyond grade 2-3</li>
            <li className="mb-2">Academic performance suffering due to writing challenges</li>
            <li className="mb-2">Child avoids writing activities or shows high anxiety about writing</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Berninger, V. W., & Wolf, B. J. (2009). <em>Teaching students with dyslexia and dysgraphia: Lessons from teaching and science</em>. Baltimore: Paul H. Brookes Publishing.</p>
          <p>[2] Berninger, V. W. (2004). "Understanding the 'graphia' in developmental dysgraphia." In D. Dewey & D. E. Tupper (Eds.), <em>Developmental motor disorders: A neuropsychological perspective</em> (pp. 328-350). New York: Guilford Press.</p>
          <p>[3] Graham, S., & Weintraub, N. (1996). "A review of handwriting research: Progress and prospects from 1980 to 1994." <em>Educational Psychology Review</em>, 8(1), 7-87.</p>
          <p>[4] Graham, S., Berninger, V., & Weintraub, N. (2001). "Which manuscript letters do primary grade children write legibly?" <em>Journal of Educational Psychology</em>, 93(3), 488-497.</p>
          <p>[5] Weintraub, N., & Graham, S. (1998). "Writing legibly and quickly: A study of children's ability to adjust their handwriting to meet common classroom demands." <em>Learning Disabilities Research & Practice</em>, 13(3), 146-152.</p>
          <p>[6] Hamstra-Bletz, L., & Blote, A. W. (1993). "A longitudinal study on dysgraphic handwriting in primary school." <em>Journal of Learning Disabilities</em>, 26(10), 689-699.</p>
          <p>[7] Berninger, V. W., Vaughan, K. B., Abbott, R. D., Abbott, S. P., Rogan, L. W., Brooks, A., ... & Graham, S. (1997). "Treatment of handwriting problems in beginning writers: Transfer from handwriting to composition." <em>Journal of Educational Psychology</em>, 89(4), 652-666.</p>
          <p>[8] Tseng, M. H., & Cermak, S. A. (1993). "The influence of ergonomic factors and perceptual-motor abilities on handwriting performance." <em>American Journal of Occupational Therapy</em>, 47(10), 919-926.</p>
          <p>[9] Rosenblum, S., Weiss, P. L., & Parush, S. (2003). "Product and process evaluation of handwriting difficulties." <em>Educational Psychology Review</em>, 15(1), 41-81.</p>
          <p>[10] Feder, K. P., & Majnemer, A. (2007). "Handwriting development, competency, and intervention." <em>Developmental Medicine & Child Neurology</em>, 49(4), 312-317.</p>
          <p>[11] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[12] Moats, L. C. (1995). <em>Spelling: Development, disability, and instruction</em>. Baltimore: York Press.</p>
          <p>[13] Connelly, V., Campbell, S., MacLean, M., & Barnes, J. (2006). "Contribution of lower order letter writing skills to the written composition of college students with and without dyslexia." <em>Developmental Neuropsychology</em>, 29(1), 175-196.</p>
          <p>[14] Graham, S., & Harris, K. R. (2000). "The role of self-regulation and transcription skills in writing and writing development." <em>Educational Psychologist</em>, 35(1), 3-12.</p>
          <p>[15] Graham, S., & Perin, D. (2007). "A meta-analysis of writing instruction for adolescent students." <em>Journal of Educational Psychology</em>, 99(3), 445-476.</p>
          <p>[16] Graham, S., Berninger, V. W., Abbott, R. D., Abbott, S. P., & Whitaker, D. (1997). "Role of mechanics in composing of elementary school students: A new methodological approach." <em>Journal of Educational Psychology</em>, 89(1), 170-182.</p>
          <p>[17] Weintraub, N., & Graham, S. (1998). "Writing legibly and quickly." <em>Learning Disabilities Research & Practice</em>, 13(3), 146-152.</p>
          <p>[18] Rosenblum, S., Parush, S., & Weiss, P. L. (2003). "Computerized temporal handwriting characteristics of proficient and non-proficient handwriters." <em>American Journal of Occupational Therapy</em>, 57(2), 129-138.</p>
          <p>[19] Marr, D., & Cermak, S. (2002). "Predicting handwriting performance of early elementary students with the Developmental Test of Visual-Motor Integration." <em>Perceptual and Motor Skills</em>, 95(2), 661-669.</p>
          <p>[20] Graham, S., & Weintraub, N. (1996). "A review of handwriting research." <em>Educational Psychology Review</em>, 8(1), 7-87.</p>
          <p>[21] Berninger, V. W., & Fuller, F. (1992). "Gender differences in orthographic, verbal, and compositional fluency: Implications for assessing writing disabilities in primary grade children." <em>Journal of School Psychology</em>, 30(4), 363-382.</p>
          <p>[22] Peverly, S. T. (2006). "The importance of handwriting speed in adult writing." <em>Developmental Neuropsychology</em>, 29(1), 197-216.</p>
          <p>[23] Gregg, N. (2009). <em>Adolescents and adults with learning disabilities and ADHD: Assessment and accommodation</em>. New York: Guilford Press.</p>
          <p>[24] Nelson, J. M., & Harwood, H. (2011). "Learning disabilities and anxiety: A meta-analysis." <em>Journal of Learning Disabilities</em>, 44(1), 3-17.</p>
          <p>[25] Al-Yagon, M., & Mikulincer, M. (2004). "Patterns of close relationships and socioemotional and academic adjustment among school-age children with learning disabilities." <em>Learning Disabilities Research & Practice</em>, 19(1), 12-19.</p>
          <p>[26] Hayes, J. R., & Flower, L. S. (1980). "Identifying the organization of writing processes." In L. W. Gregg & E. R. Steinberg (Eds.), <em>Cognitive processes in writing</em> (pp. 3-30). Hillsdale, NJ: Lawrence Erlbaum.</p>
          <p>[27] Berninger, V. W., & Wolf, B. J. (2009). <em>Teaching students with dyslexia and dysgraphia</em>. Baltimore: Paul H. Brookes Publishing.</p>
          <p>[28] Katusic, S. K., Colligan, R. C., Weaver, A. L., & Barbaresi, W. J. (2009). "The forgotten learning disability: Epidemiology of written language disorder in a population-based birth cohort." <em>Pediatrics</em>, 123(5), 1306-1313.</p>
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
