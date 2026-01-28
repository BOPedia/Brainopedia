import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface GiftednessSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function GiftednessSymptoms({ setCurrentArticle }: GiftednessSymptomsProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('giftedness'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Giftedness
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Giftedness: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Gifted individuals exhibit a constellation of characteristics that distinguish them from their 
            age peers. These traits span cognitive, academic, creative, social, and emotional domains.<sup>[1]</sup> 
            It's important to note that not all gifted individuals display all characteristics, and the 
            expression of giftedness varies considerably.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmd8ZW58MXx8fHwxNjc0NTM1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child reading"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Advanced Reasoning and Problem-Solving</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Abstract thinking:</strong> Ability to understand complex concepts and abstract relationships earlier than peers<sup>[3]</sup></li>
            <li className="mb-2"><strong>Logical reasoning:</strong> Exceptional ability to see cause-and-effect relationships<sup>[4]</sup></li>
            <li className="mb-2"><strong>Pattern recognition:</strong> Quick identification of patterns and connections<sup>[5]</sup></li>
            <li className="mb-2"><strong>Complex problem-solving:</strong> Preference for tackling challenging, multifaceted problems<sup>[6]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Exceptional Memory</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Long-term memory:</strong> Remarkable retention of information learned months or years earlier<sup>[7]</sup></li>
            <li className="mb-2"><strong>Working memory:</strong> Enhanced ability to hold and manipulate information mentally<sup>[8]</sup></li>
            <li className="mb-2"><strong>Detail recall:</strong> Vivid memory for specific details, sometimes from very young ages<sup>[9]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Rapid Learning and Processing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Quick mastery:</strong> Ability to learn new concepts with minimal instruction or repetition<sup>[10]</sup></li>
            <li className="mb-2"><strong>Processing speed:</strong> Faster cognitive processing in many domains<sup>[11]</sup></li>
            <li className="mb-2"><strong>Minimal practice needed:</strong> May grasp concepts after single exposure<sup>[12]</sup></li>
            <li className="mb-2"><strong>Transfer of learning:</strong> Exceptional ability to apply knowledge to new situations<sup>[13]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Advanced Verbal Abilities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Early language development:</strong> May speak in complete sentences earlier than typical<sup>[14]</sup></li>
            <li className="mb-2"><strong>Extensive vocabulary:</strong> Use of advanced, sophisticated vocabulary<sup>[15]</sup></li>
            <li className="mb-2"><strong>Verbal fluency:</strong> Ease and facility with language expression<sup>[16]</sup></li>
            <li className="mb-2"><strong>Metaphorical thinking:</strong> Understanding and use of figurative language<sup>[17]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Learning Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Curiosity and Questioning</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Insatiable curiosity:</strong> Constant desire to understand how and why things work<sup>[18]</sup></li>
            <li className="mb-2"><strong>Probing questions:</strong> Asks complex, thought-provoking questions<sup>[19]</sup></li>
            <li className="mb-2"><strong>Challenge to authority:</strong> May question rules, traditions, or established ideas<sup>[20]</sup></li>
            <li className="mb-2"><strong>Love of learning:</strong> Intrinsic motivation to learn for its own sake<sup>[21]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intense Interests and Focus</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Deep focus:</strong> Ability to concentrate intensely on topics of interest for extended periods<sup>[22]</sup></li>
            <li className="mb-2"><strong>Passionate interests:</strong> May develop consuming interests in specific topics<sup>[23]</sup></li>
            <li className="mb-2"><strong>Expertise development:</strong> Accumulates expert-level knowledge in areas of interest<sup>[24]</sup></li>
            <li className="mb-2"><strong>Persistence:</strong> Sustained engagement with challenging material<sup>[25]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Independent and Self-Directed Learning</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Autonomy preference:</strong> Prefers to work and learn independently<sup>[26]</sup></li>
            <li className="mb-2"><strong>Self-teaching:</strong> Ability to teach themselves new skills and content<sup>[27]</sup></li>
            <li className="mb-2"><strong>Resource seeking:</strong> Actively seeks out information and resources<sup>[28]</sup></li>
            <li className="mb-2"><strong>Metacognition:</strong> Awareness and monitoring of own thinking processes<sup>[29]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Creative Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGFydHxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child creating art"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Originality and Innovation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Novel ideas:</strong> Generation of original, unique ideas and solutions<sup>[30]</sup></li>
            <li className="mb-2"><strong>Unconventional thinking:</strong> Approaches problems from unexpected angles<sup>[31]</sup></li>
            <li className="mb-2"><strong>Improvisation:</strong> Ability to adapt and create in the moment<sup>[32]</sup></li>
            <li className="mb-2"><strong>Risk-taking:</strong> Willingness to try new approaches and ideas<sup>[33]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Imagination and Fantasy</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Vivid imagination:</strong> Rich inner world and fantasy life<sup>[34]</sup></li>
            <li className="mb-2"><strong>Imaginative play:</strong> Complex, elaborate pretend scenarios<sup>[35]</sup></li>
            <li className="mb-2"><strong>Storytelling:</strong> Creation of detailed, sophisticated narratives<sup>[36]</sup></li>
            <li className="mb-2"><strong>Visualization:</strong> Strong ability to form mental images<sup>[37]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Humor and Playfulness</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Advanced sense of humor:</strong> Understanding of complex wordplay, puns, satire<sup>[38]</sup></li>
            <li className="mb-2"><strong>Creation of humor:</strong> Invents jokes and humorous scenarios<sup>[39]</sup></li>
            <li className="mb-2"><strong>Playful approach:</strong> Enjoys intellectual and creative play<sup>[40]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social and Emotional Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heightened Sensitivity</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Emotional intensity:</strong> Experiences emotions deeply and intensely<sup>[41]</sup></li>
            <li className="mb-2"><strong>Empathy:</strong> Strong awareness of others' feelings and needs<sup>[42]</sup></li>
            <li className="mb-2"><strong>Sensory sensitivity:</strong> May be particularly responsive to sensory stimuli<sup>[43]</sup></li>
            <li className="mb-2"><strong>Moral sensitivity:</strong> Strong sense of justice and fairness<sup>[44]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Perfectionism and High Standards</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Self-imposed standards:</strong> Sets extremely high expectations for self<sup>[45]</sup></li>
            <li className="mb-2"><strong>Critical self-evaluation:</strong> Harsh self-judgment of performance<sup>[46]</sup></li>
            <li className="mb-2"><strong>Fear of failure:</strong> May avoid tasks where success isn't guaranteed<sup>[47]</sup></li>
            <li className="mb-2"><strong>Dissatisfaction:</strong> Difficulty being satisfied with own work<sup>[48]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Awareness and Relationships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Preference for older companions:</strong> May gravitate toward older children or adults<sup>[49]</sup></li>
            <li className="mb-2"><strong>Different interests:</strong> Interests may not align with age peers<sup>[50]</sup></li>
            <li className="mb-2"><strong>Social perceptiveness:</strong> Keen awareness of social dynamics<sup>[51]</sup></li>
            <li className="mb-2"><strong>Need for intellectual peers:</strong> Seeks others with similar abilities and interests<sup>[52]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Existential Concerns</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Deep questions:</strong> Ponders meaning, purpose, death, infinity at young ages<sup>[53]</sup></li>
            <li className="mb-2"><strong>Concern for world issues:</strong> Worries about global problems and injustice<sup>[54]</sup></li>
            <li className="mb-2"><strong>Philosophical thinking:</strong> Engages with abstract philosophical concepts<sup>[55]</sup></li>
            <li className="mb-2"><strong>Existential depression:</strong> May experience depression related to existential concerns<sup>[56]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Academic Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student studying"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Academic Achievement</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Early reading:</strong> May teach themselves to read before formal instruction<sup>[57]</sup></li>
            <li className="mb-2"><strong>Advanced mathematics:</strong> Grasps mathematical concepts ahead of grade level<sup>[58]</sup></li>
            <li className="mb-2"><strong>Broad knowledge base:</strong> Extensive general knowledge across domains<sup>[59]</sup></li>
            <li className="mb-2"><strong>Academic acceleration:</strong> Ready for content beyond chronological age<sup>[60]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Uneven Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Asynchrony:</strong> Uneven development across domains<sup>[61]</sup></li>
            <li className="mb-2"><strong>Strength areas:</strong> May excel dramatically in some subjects<sup>[62]</sup></li>
            <li className="mb-2"><strong>Relative weaknesses:</strong> Other areas may be at or slightly above grade level<sup>[63]</sup></li>
            <li className="mb-2"><strong>Twice-exceptionality:</strong> May have learning disabilities alongside giftedness<sup>[64]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Need for Challenge</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Boredom with repetition:</strong> Becomes disengaged with drill and practice<sup>[65]</sup></li>
            <li className="mb-2"><strong>Desire for complexity:</strong> Seeks out challenging material<sup>[66]</sup></li>
            <li className="mb-2"><strong>Frustration with pace:</strong> Regular classroom pace may be too slow<sup>[67]</sup></li>
            <li className="mb-2"><strong>Need for depth:</strong> Prefers in-depth exploration over breadth<sup>[68]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Energy and Activity Level</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>High energy:</strong> May display surplus of physical and mental energy<sup>[69]</sup></li>
            <li className="mb-2"><strong>Need for less sleep:</strong> Some gifted individuals require less sleep than peers<sup>[70]</sup></li>
            <li className="mb-2"><strong>Psychomotor excitability:</strong> Difficulty sitting still, need for movement<sup>[71]</sup></li>
            <li className="mb-2"><strong>Intensity:</strong> Approaches activities with enthusiasm and intensity<sup>[72]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Attention and Focus</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Selective attention:</strong> Intense focus on interests, inattention to non-preferred tasks<sup>[73]</sup></li>
            <li className="mb-2"><strong>Sustained attention:</strong> Long attention span for challenging material<sup>[74]</sup></li>
            <li className="mb-2"><strong>Distractibility:</strong> May be easily distracted when bored or under-challenged<sup>[75]</sup></li>
            <li className="mb-2"><strong>Daydreaming:</strong> Rich inner mental life may lead to appearing unfocused<sup>[76]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Independence and Autonomy</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Self-direction:</strong> Prefers to set own goals and direction<sup>[77]</sup></li>
            <li className="mb-2"><strong>Resistance to conformity:</strong> May resist doing things "just because"<sup>[78]</sup></li>
            <li className="mb-2"><strong>Intrinsic motivation:</strong> Motivated by internal rather than external rewards<sup>[79]</sup></li>
            <li className="mb-2"><strong>Leadership:</strong> May naturally assume leadership roles<sup>[80]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Domain-Specific Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mathematical Giftedness</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Number sense:</strong> Intuitive understanding of numerical relationships<sup>[81]</sup></li>
            <li className="mb-2"><strong>Pattern recognition:</strong> Exceptional ability to identify mathematical patterns<sup>[82]</sup></li>
            <li className="mb-2"><strong>Spatial reasoning:</strong> Strong visualization of mathematical concepts<sup>[83]</sup></li>
            <li className="mb-2"><strong>Problem-solving strategies:</strong> Uses sophisticated, efficient strategies<sup>[84]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Verbal/Linguistic Giftedness</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Word fluency:</strong> Large vocabulary and ease with language<sup>[85]</sup></li>
            <li className="mb-2"><strong>Love of reading:</strong> Voracious reader across genres<sup>[86]</sup></li>
            <li className="mb-2"><strong>Writing ability:</strong> Advanced composition skills<sup>[87]</sup></li>
            <li className="mb-2"><strong>Verbal reasoning:</strong> Exceptional ability with verbal analogies and logic<sup>[88]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Scientific Giftedness</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Curiosity about natural world:</strong> Deep interest in how things work<sup>[89]</sup></li>
            <li className="mb-2"><strong>Hypothesis generation:</strong> Natural inclination toward scientific thinking<sup>[90]</sup></li>
            <li className="mb-2"><strong>Experimental approach:</strong> Enjoys testing ideas and conducting experiments<sup>[91]</sup></li>
            <li className="mb-2"><strong>Systems thinking:</strong> Understanding of complex systems and relationships<sup>[92]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Artistic/Creative Giftedness</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Aesthetic sensitivity:</strong> Heightened appreciation for beauty and art<sup>[93]</sup></li>
            <li className="mb-2"><strong>Creative expression:</strong> Produces original artistic work<sup>[94]</sup></li>
            <li className="mb-2"><strong>Attention to detail:</strong> Notices and creates fine details<sup>[95]</sup></li>
            <li className="mb-2"><strong>Technical skill:</strong> Advanced artistic technique for age<sup>[96]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Potential Challenges</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social-Emotional Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Isolation:</strong> May feel different or misunderstood by peers<sup>[97]</sup></li>
            <li className="mb-2"><strong>Hiding abilities:</strong> May underperform to fit in socially<sup>[98]</sup></li>
            <li className="mb-2"><strong>Intensity management:</strong> Emotional overexcitabilities can be overwhelming<sup>[99]</sup></li>
            <li className="mb-2"><strong>Anxiety:</strong> Heightened awareness can lead to worry and anxiety<sup>[100]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Underachievement</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Lack of challenge:</strong> May underachieve when not appropriately challenged<sup>[101]</sup></li>
            <li className="mb-2"><strong>Poor study skills:</strong> May not develop study skills if early work is too easy<sup>[102]</sup></li>
            <li className="mb-2"><strong>Motivation issues:</strong> May lose motivation in unstimulating environments<sup>[103]</sup></li>
            <li className="mb-2"><strong>Procrastination:</strong> Perfectionism combined with ease of early work can lead to procrastination<sup>[104]</sup></li>
          </ul>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Important Note:</h3>
            <div className="text-sm">
              <p>
                These characteristics represent common patterns, but gifted individuals are diverse and unique. 
                Not every gifted person exhibits all these traits, and the presence of some characteristics 
                doesn't guarantee giftedness.<sup>[105]</sup> Individual assessment and understanding are essential.<sup>[106]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Clark, B. (2012). <em>Growing up gifted: Developing the potential of children at home and at school</em> (8th ed.). Upper Saddle River, NJ: Pearson.</p>
          <p>[2] Pfeiffer, S. I. (2013). <em>Serving the gifted: Evidence-based clinical and psychoeducational practice</em>. New York: Routledge.</p>
          <p>[3] Sternberg, R. J. (1985). <em>Beyond IQ: A triarchic theory of human intelligence</em>. New York: Cambridge University Press.</p>
          <p>[4] Reasoning Development. Robinson, A., Shore, B. M., & Enersen, D. L. (2007). <em>Best practices in gifted education</em>. Waco, TX: Prufrock Press.</p>
          <p>[5] Holyoak, K. J., & Thagard, P. (1995). <em>Mental leaps: Analogy in creative thought</em>. Cambridge, MA: MIT Press.</p>
          <p>[6] Davidson, J. E., & Sternberg, R. J. (1984). "The role of insight in intellectual giftedness." <em>Gifted Child Quarterly</em>, 28(2), 58-64.</p>
          <p>[7] Geake, J. G., & Hansen, P. C. (2005). "Neural correlates of intelligence as revealed by fMRI of fluid analogies." <em>NeuroImage</em>, 26(2), 555-564.</p>
          <p>[8] Swanson, H. L. (2006). "Working memory and reading disabilities: Both phonological and executive processing deficits are important." In T. P. Alloway & S. E. Gathercole (Eds.), <em>Working memory and neurodevelopmental disorders</em> (pp. 59-88). New York: Psychology Press.</p>
          <p>[9] Plucker, J. A., & Esping, A. (2014). "Intelligence 101." New York: Springer.</p>
          <p>[10] Kanevsky, L. (1992). "The learning game." In P. S. Klein & A. J. Tannenbaum (Eds.), <em>To be young and gifted</em> (pp. 204-241). Westport, CT: Ablex.</p>
          <p>[11] Detterman, D. K., & Daniel, M. H. (1989). "Correlations of mental tests with each other and with cognitive variables are highest for low IQ groups." <em>Intelligence</em>, 13(4), 349-359.</p>
          <p>[12] Rogers, K. B. (2007). "Lessons learned about educating the gifted and talented: A synthesis of the research on educational practice." <em>Gifted Child Quarterly</em>, 51(4), 382-396.</p>
          <p>[13] Phye, G. D. (1997). <em>Handbook of academic learning: Construction of knowledge</em>. San Diego, CA: Academic Press.</p>
          <p>[14] Robinson, N. M., Dale, P. S., & Landesman, S. H. (1990). "Validity of Stanford-Binet IV with linguistically precocious toddlers." <em>Intelligence</em>, 14(2), 173-186.</p>
          <p>[15] Gross, M. U. M. (2004). <em>Exceptionally gifted children</em> (2nd ed.). London: RoutledgeFalmer.</p>
          <p>[16] Winner, E. (1996). <em>Gifted children: Myths and realities</em>. New York: Basic Books.</p>
          <p>[17] Vosniadou, S., & Ortony, A. (Eds.). (1989). <em>Similarity and analogical reasoning</em>. Cambridge: Cambridge University Press.</p>
          <p>[18] Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). "Rethinking giftedness and gifted education." <em>Psychological Science in the Public Interest</em>, 12(1), 3-54.</p>
          <p>[19] Getzels, J. W., & Jackson, P. W. (1962). <em>Creativity and intelligence: Explorations with gifted students</em>. New York: Wiley.</p>
          <p>[20] Torrance, E. P. (1962). <em>Guiding creative talent</em>. Englewood Cliffs, NJ: Prentice-Hall.</p>
          <p>[21] Gottfried, A. E., & Gottfried, A. W. (1996). "A longitudinal study of academic intrinsic motivation in intellectually gifted children: Childhood through adolescence." <em>Gifted Child Quarterly</em>, 40(4), 179-183.</p>
          <p>[22] Renzulli, J. S., Smith, L. H., White, A. J., Callahan, C. M., Hartman, R. K., & Westberg, K. L. (2002). <em>Scales for Rating the Behavioral Characteristics of Superior Students</em> (rev. ed.). Mansfield Center, CT: Creative Learning Press.</p>
          <p>[23] Csikszentmihalyi, M., Rathunde, K., & Whalen, S. (1993). <em>Talented teenagers: The roots of success and failure</em>. Cambridge: Cambridge University Press.</p>
          <p>[24] Ericsson, K. A. (Ed.). (1996). <em>The road to excellence: The acquisition of expert performance in the arts and sciences, sports, and games</em>. Mahwah, NJ: Erlbaum.</p>
          <p>[25] Renzulli, J. S. (1978). "What makes giftedness? Reexamining a definition." <em>Phi Delta Kappan</em>, 60(3), 180-184.</p>
          <p>[26] Reis, S. M., & Renzulli, J. S. (2010). "Is there still a need for gifted education? An examination of current research." <em>Learning and Individual Differences</em>, 20(4), 308-317.</p>
          <p>[27] Zimmerman, B. J., & Martinez-Pons, M. (1990). "Student differences in self-regulated learning: Relating grade, sex, and giftedness to self-efficacy and strategy use." <em>Journal of Educational Psychology</em>, 82(1), 51-59.</p>
          <p>[28] Treffinger, D. J., & Feldhusen, J. F. (1996). "Talent recognition and development: Successor to gifted education." <em>Journal for the Education of the Gifted</em>, 19(2), 181-193.</p>
          <p>[29] Sternberg, R. J. (1985). "Implicit theories of intelligence, creativity, and wisdom." <em>Journal of Personality and Social Psychology</em>, 49(3), 607-627.</p>
          <p>[30] Runco, M. A., & Albert, R. S. (1986). "The threshold theory regarding creativity and intelligence: An empirical test with gifted and nongifted children." <em>Creative Child and Adult Quarterly</em>, 11, 212-218.</p>
          <p>[31] Guilford, J. P. (1967). <em>The nature of human intelligence</em>. New York: McGraw-Hill.</p>
          <p>[32] Sawyer, R. K. (2011). <em>Explaining creativity: The science of human innovation</em> (2nd ed.). Oxford: Oxford University Press.</p>
          <p>[33] Sternberg, R. J., & Lubart, T. I. (1991). "An investment theory of creativity and its development." <em>Human Development</em>, 34(1), 1-31.</p>
          <p>[34] Piechowski, M. M. (1991). "Emotional development and emotional giftedness." In N. Colangelo & G. A. Davis (Eds.), <em>Handbook of gifted education</em> (pp. 285-306). Boston: Allyn & Bacon.</p>
          <p>[35] Singer, D. G., & Singer, J. L. (1990). <em>The house of make-believe: Children's play and the developing imagination</em>. Cambridge, MA: Harvard University Press.</p>
          <p>[36] Smolucha, L., & Smolucha, F. (1986). "A fifth Piagetian stage: The collaboration between the imaginary and logical thinking in artistic creativity." <em>Visual Arts Research</em>, 12(2), 90-99.</p>
          <p>[37] Kosslyn, S. M. (1994). <em>Image and brain: The resolution of the imagery debate</em>. Cambridge, MA: MIT Press.</p>
          <p>[38] McGhee, P. E. (1979). <em>Humor: Its origin and development</em>. San Francisco: W. H. Freeman.</p>
          <p>[39] Ziv, A. (1984). <em>Personality and sense of humor</em>. New York: Springer.</p>
          <p>[40] Tegano, D. W., Moran, J. D., & Sawyers, J. K. (1991). <em>Creativity in early childhood classrooms</em>. Washington, DC: National Education Association.</p>
          <p>[41] Piechowski, M. M., & Colangelo, N. (1984). "Developmental potential of the gifted." <em>Gifted Child Quarterly</em>, 28(2), 80-88.</p>
          <p>[42] Lovecky, D. V. (1997). "Identity development in gifted children: Moral sensitivity." <em>Roeper Review</em>, 20(2), 90-94.</p>
          <p>[43] Daniels, S., & Piechowski, M. M. (2009). <em>Living with intensity</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[44] Silverman, L. K. (1994). "The moral sensitivity of gifted children and the evolution of society." <em>Roeper Review</em>, 17(2), 110-116.</p>
          <p>[45] Parker, W. D. (1997). "An empirical typology of perfectionism in academically talented children." <em>American Educational Research Journal</em>, 34(3), 545-562.</p>
          <p>[46] Schuler, P. A. (2000). "Perfectionism and gifted adolescents." <em>Journal of Secondary Gifted Education</em>, 11(4), 183-196.</p>
          <p>[47] Hewitt, P. L., & Flett, G. L. (1991). "Perfectionism in the self and social contexts: Conceptualization, assessment, and association with psychopathology." <em>Journal of Personality and Social Psychology</em>, 60(3), 456-470.</p>
          <p>[48] Adderholdt-Elliott, M. (1987). <em>Perfectionism: What's bad about being too good?</em> Minneapolis: Free Spirit Publishing.</p>
          <p>[49] Janos, P. M., Marwood, K. A., & Robinson, N. M. (1985). "Friendship patterns in highly intelligent children." <em>Roeper Review</em>, 8(1), 46-49.</p>
          <p>[50] Hollingworth, L. S. (1926). <em>Gifted children: Their nature and nurture</em>. New York: Macmillan.</p>
          <p>[51] Silverman, L. K. (1993). "The gifted individual." In L. K. Silverman (Ed.), <em>Counseling the gifted and talented</em> (pp. 3-28). Denver, CO: Love Publishing.</p>
          <p>[52] Gross, M. U. M. (2002). "Social and emotional issues for exceptionally intellectually gifted students." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 19-29). Waco, TX: Prufrock Press.</p>
          <p>[53] Lovecky, D. V. (1998). "Spiritual sensitivity in gifted children." <em>Roeper Review</em>, 20(3), 178-183.</p>
          <p>[54] Roeper, A. (1982). "How the gifted cope with their emotions." <em>Roeper Review</em>, 5(2), 21-24.</p>
          <p>[55] Webb, J. T. (2000). "Mis-diagnosis and dual diagnosis of gifted children: Gifted and LD, ADHD, OCD, Oppositional Defiant Disorder." <em>ERIC EC Digest E598</em>.</p>
          <p>[56] Webb, J. T., Meckstroth, E. A., & Tolan, S. S. (1982). <em>Guiding the gifted child: A practical source for parents and teachers</em>. Scottsdale, AZ: Gifted Psychology Press.</p>
          <p>[57] Jackson, N. E., & Roller, C. M. (1993). "Reading with young children." Storrs: University of Connecticut, National Research Center on the Gifted and Talented.</p>
          <p>[58] Sowell, E. J., Zeigler, A. J., Bergwall, L., & Cartwright, R. M. (1990). "Identification and description of mathematically gifted students: A review of empirical research." <em>Gifted Child Quarterly</em>, 34(4), 147-154.</p>
          <p>[59] Carter, K. R., & Ormrod, J. E. (1982). "Acquisition of formal operations by intellectually gifted children." <em>Gifted Child Quarterly</em>, 26(3), 110-115.</p>
          <p>[60] Colangelo, N., Assouline, S. G., & Gross, M. U. M. (Eds.). (2004). <em>A nation deceived: How schools hold back America's brightest students</em> (Vol. 1). Iowa City, IA: The Connie Belin & Jacqueline N. Blank International Center for Gifted Education and Talent Development.</p>
          <p>[61] Silverman, L. K. (1997). "The construct of asynchronous development." <em>Peabody Journal of Education</em>, 72(3-4), 36-58.</p>
          <p>[62] Achter, J. A., Lubinski, D., & Benbow, C. P. (1996). "Multipotentiality among the intellectually gifted: 'It was never there and already it's vanishing.'" <em>Journal of Counseling Psychology</em>, 43(1), 65-76.</p>
          <p>[63] Silverman, L. K. (2002). <em>Upside-down brilliance: The visual-spatial learner</em>. Denver, CO: DeLeon Publishing.</p>
          <p>[64] Brody, L. E., & Mills, C. J. (1997). "Gifted children with learning disabilities: A review of the issues." <em>Journal of Learning Disabilities</em>, 30(3), 282-296.</p>
          <p>[65] Gallagher, J. J. (1985). <em>Teaching the gifted child</em> (3rd ed.). Boston: Allyn & Bacon.</p>
          <p>[66] Kaplan, S. N. (2009). "Myth 9: There is a single curriculum for the gifted." <em>Gifted Child Quarterly</em>, 53(4), 257-258.</p>
          <p>[67] Kulik, J. A. (2004). "Meta-analytic studies of acceleration." In N. Colangelo, S. G. Assouline, & M. U. M. Gross (Eds.), <em>A nation deceived</em> (Vol. 2, pp. 13-22). Iowa City, IA: Belin-Blank Center.</p>
          <p>[68] VanTassel-Baska, J., & Brown, E. F. (2007). "Toward best practice: An analysis of the efficacy of curriculum models in gifted education." <em>Gifted Child Quarterly</em>, 51(4), 342-358.</p>
          <p>[69] Piechowski, M. M. (2003). "From William James to Maslow and Dabrowski: Excitability of character and self-actualization." In D. Ambrose, L. M. Cohen, & A. J. Tannenbaum (Eds.), <em>Creative intelligence: Toward theoretic integration</em> (pp. 283-322). Cresskill, NJ: Hampton Press.</p>
          <p>[70] Gruber, R., Cassoff, J., Frenette, S., Wiebe, S., & Carrier, J. (2012). "Impact of sleep extension and restriction on children's emotional lability and impulsivity." <em>Pediatrics</em>, 130(5), e1155-e1161.</p>
          <p>[71] Sword, L. K. (2001). "Psycho-social needs: Understanding the emotional, intellectual and social uniqueness of growing up gifted." <em>Gifted and Creative Services Australia</em>.</p>
          <p>[72] Dabrowski, K., & Piechowski, M. M. (1977). <em>Theory of levels of emotional development</em> (Vols. 1-2). Oceanside, NY: Dabor Science.</p>
          <p>[73] Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <em>Misdiagnosis and dual diagnoses of gifted children and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[74] Fugate, C. M., Zentall, S. S., & Gentry, M. (2013). "Creativity and working memory in gifted students with and without characteristics of attention deficit hyperactive disorder." <em>Gifted Child Quarterly</em>, 57(4), 234-246.</p>
          <p>[75] Moon, S. M. (2009). "Myth 15: High-ability students don't face problems and challenges." <em>Gifted Child Quarterly</em>, 53(4), 274-276.</p>
          <p>[76] Hébert, T. P., & Furner, J. M. (1997). "Helping high ability students overcome math anxiety through bibliotherapy." <em>Journal of Secondary Gifted Education</em>, 8(4), 164-178.</p>
          <p>[77] Torrance, E. P. (1987). "Teaching for creativity." In S. G. Isaksen (Ed.), <em>Frontiers of creativity research: Beyond the basics</em> (pp. 189-215). Buffalo, NY: Bearly Limited.</p>
          <p>[78] Delisle, J. R. (1992). <em>Guiding the social and emotional development of gifted youth: A practical guide for educators and counselors</em>. New York: Longman.</p>
          <p>[79] Deci, E. L., & Ryan, R. M. (1985). <em>Intrinsic motivation and self-determination in human behavior</em>. New York: Plenum.</p>
          <p>[80] Kerr, B. A., & Sodano, S. (2003). "Career assessment with intellectually gifted students." <em>Journal of Career Assessment</em>, 11(2), 168-186.</p>
          <p>[81] Benbow, C. P., & Lubinski, D. (Eds.). (1996). <em>Intellectual talent: Psychometric and social issues</em>. Baltimore: Johns Hopkins University Press.</p>
          <p>[82] Krutetskii, V. A. (1976). <em>The psychology of mathematical abilities in school children</em> (J. Teller, Trans.; J. Kilpatrick & I. Wirszup, Eds.). Chicago: University of Chicago Press.</p>
          <p>[83] Wheatley, G. H. (1998). "Imagery and mathematics learning." <em>Focus on Learning Problems in Mathematics</em>, 20(2-3), 65-77.</p>
          <p>[84] Gavin, M. K., & Adelson, J. L. (2008). "Mathematics, elementary." In J. A. Plucker & C. M. Callahan (Eds.), <em>Critical issues and practices in gifted education</em> (pp. 367-380). Waco, TX: Prufrock Press.</p>
          <p>[85] Van Tassel-Baska, J. (2003). "Content-based curriculum for high-ability learners: An introduction." In J. VanTassel-Baska & C. A. Little (Eds.), <em>Content-based curriculum for high-ability learners</em> (pp. 1-23). Waco, TX: Prufrock Press.</p>
          <p>[86] Halsted, J. W. (2009). <em>Some of my best friends are books: Guiding gifted readers</em> (3rd ed.). Scottsdale, AZ: Great Potential Press.</p>
          <p>[87] Delcourt, M. A. B., & McKay, S. E. (1994). "The effect of project-based instruction on in-service teachers: Implementation, attitudes, and assessment." <em>Research-Based Decision Making Series</em>. Storrs: University of Connecticut, National Research Center on the Gifted and Talented.</p>
          <p>[88] Johnson-Laird, P. N. (1983). <em>Mental models: Towards a cognitive science of language, inference, and consciousness</em>. Cambridge, MA: Harvard University Press.</p>
          <p>[89] Brandwein, P. F. (1995). <em>Science talent in the young expressed within ecologies of achievement</em>. Storrs: University of Connecticut, National Research Center on the Gifted and Talented.</p>
          <p>[90] Lawson, A. E. (2010). "Basic inferences of scientific reasoning, argumentation, and discovery." <em>Science Education</em>, 94(2), 336-364.</p>
          <p>[91] Chinn, C. A., & Malhotra, B. A. (2002). "Children's responses to anomalous scientific data: How is conceptual change impeded?" <em>Journal of Educational Psychology</em>, 94(2), 327-343.</p>
          <p>[92] Hmelo-Silver, C. E., & Pfeffer, M. G. (2004). "Comparing expert and novice understanding of a complex system from the perspective of structures, behaviors, and functions." <em>Cognitive Science</em>, 28(1), 127-138.</p>
          <p>[93] Winner, E., & Martino, G. (1993). "Giftedness in the visual arts and music." In K. A. Heller, F. J. Mönks, & A. H. Passow (Eds.), <em>International handbook of research and development of giftedness and talent</em> (pp. 253-281). Oxford: Pergamon Press.</p>
          <p>[94] Rostan, S. M. (2010). "Studio learning: Motivation, competence, and the development of young art students' talent and creativity." <em>Creativity Research Journal</em>, 22(3), 261-271.</p>
          <p>[95] Willats, J. (2005). <em>Making sense of children's drawings</em>. Mahwah, NJ: Lawrence Erlbaum.</p>
          <p>[96] Milbrath, C. (1998). <em>Patterns of artistic development in children: Comparative studies of talent</em>. Cambridge: Cambridge University Press.</p>
          <p>[97] Neihart, M. (1999). "The impact of giftedness on psychological well-being: What does the empirical literature say?" <em>Roeper Review</em>, 22(1), 10-17.</p>
          <p>[98] Rimm, S. (1997). "Underachievement syndrome: A national epidemic." In N. Colangelo & G. A. Davis (Eds.), <em>Handbook of gifted education</em> (2nd ed., pp. 416-434). Boston: Allyn & Bacon.</p>
          <p>[99] Mendaglio, S., & Tillier, W. (2006). "Dabrowski's theory of positive disintegration and giftedness: Overexcitability research findings." <em>Journal for the Education of the Gifted</em>, 30(1), 68-87.</p>
          <p>[100] Guignard, J. H., & Zenasni, F. (2004). "Les caractéristiques émotionnelles des enfants à haut potentiel." <em>Psychologie Française</em>, 49(3), 305-319.</p>
          <p>[101] Reis, S. M., & McCoach, D. B. (2000). "The underachievement of gifted students: What do we know and where do we go?" <em>Gifted Child Quarterly</em>, 44(3), 152-170.</p>
          <p>[102] Whitmore, J. R. (1980). <em>Giftedness, conflict, and underachievement</em>. Boston: Allyn & Bacon.</p>
          <p>[103] Siegle, D., & McCoach, D. B. (2005). "Making a difference: Motivating gifted students who are not achieving." <em>Teaching Exceptional Children</em>, 38(1), 22-27.</p>
          <p>[104] Rayneri, L. J., Gerber, B. L., & Wiley, L. P. (2006). "The relationship between classroom environment and the learning style preferences of gifted middle school students and the impact on levels of performance." <em>Gifted Child Quarterly</em>, 50(2), 104-118.</p>
          <p>[105] Davis, G. A., Rimm, S. B., & Siegle, D. (2011). <em>Education of the gifted and talented</em> (6th ed.). Upper Saddle River, NJ: Pearson.</p>
          <p>[106] Pfeiffer, S. I. (2015). <em>Essentials of gifted assessment</em>. Hoboken, NJ: John Wiley & Sons.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('giftedness'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Giftedness
        </a>
      </div>
    </article>
  );
}