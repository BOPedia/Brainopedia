import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyscalculiaOverview({ setCurrentArticle }: DyscalculiaOverviewProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyscalculia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyscalculia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Dyscalculia: Overview
      </h1>

      <div className="space-y-8">
        {/* Introduction Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is Dyscalculia?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1754304342484-3256d59778e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwbnVtYmVycyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NzQ1MjMwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Math numbers and learning"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyscalculia is a specific learning disability that affects a person's ability to understand numbers and learn 
            mathematical concepts.<sup>[1]</sup> Often called "math dyslexia," dyscalculia is a lifelong condition that 
            makes everyday tasks involving numbers challenging—from telling time to counting change to understanding 
            financial concepts.<sup>[2]</sup>
          </p>
          
          <p className="mb-4">
            Unlike general math difficulties that can result from poor instruction or lack of practice, dyscalculia is 
            a specific neurological condition that affects how the brain processes numerical information.<sup>[3]</sup> 
            Individuals with dyscalculia typically have average or above-average intelligence but struggle significantly 
            with mathematical tasks that others find straightforward.<sup>[4]</sup>
          </p>

          <p className="mb-4">
            The term "dyscalculia" comes from the Greek and Latin: "dys" (badly) and "calculare" (to count).<sup>[5]</sup> 
            While it received less research attention than dyslexia historically, dyscalculia is equally prevalent, 
            affecting approximately 3-7% of the population.<sup>[6]</sup>
          </p>
        </div>

        {/* Defining Features */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Defining Features of Dyscalculia</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Characteristics</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Number sense deficits:</strong> Difficulty understanding what numbers represent and how they relate to each other<sup>[7]</sup></li>
            <li className="mb-2"><strong>Counting difficulties:</strong> Struggles with counting, especially counting backwards or by intervals</li>
            <li className="mb-2"><strong>Arithmetic challenges:</strong> Problems with basic operations (addition, subtraction, multiplication, division)<sup>[8]</sup></li>
            <li className="mb-2"><strong>Number fact retrieval:</strong> Difficulty memorizing and recalling math facts (like multiplication tables)</li>
            <li className="mb-2"><strong>Mathematical reasoning:</strong> Trouble understanding mathematical concepts and relationships<sup>[9]</sup></li>
            <li className="mb-2"><strong>Spatial processing:</strong> Difficulty with visual-spatial representations of mathematical information</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Everyday Impact</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty telling time or estimating time passage<sup>[10]</sup></li>
            <li className="mb-2">Problems with money—counting change, budgeting, financial planning</li>
            <li className="mb-2">Challenges with measurements and quantities in cooking or building projects<sup>[11]</sup></li>
            <li className="mb-2">Trouble estimating distances or understanding directions</li>
            <li className="mb-2">Difficulty keeping score in games or understanding statistics in sports<sup>[12]</sup></li>
          </ul>
        </div>

        {/* Types and Subtypes */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Types of Mathematical Difficulties</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758685848478-b57d7aff2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG1hdGhlbWF0aWNzJTIwc2NpZW5jZXxlbnwxfHx8fDE3Njc0NTIzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain and mathematics"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Dyscalculia</h3>
          <p className="mb-4">
            The most common form, present from early childhood and not caused by brain injury or other neurological 
            conditions.<sup>[13]</sup> This is the primary focus of research and intervention efforts.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Acquired Dyscalculia (Acalculia)</h3>
          <p className="mb-4">
            Mathematical difficulties that result from brain injury, stroke, or neurological disease in individuals who 
            previously had normal mathematical abilities.<sup>[14]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Subtypes by Deficit Profile</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Verbal dyscalculia:</strong> Difficulty with verbal mathematical tasks like counting or naming numbers<sup>[15]</sup></li>
            <li className="mb-2"><strong>Practognostic dyscalculia:</strong> Problems manipulating objects mathematically</li>
            <li className="mb-2"><strong>Lexical dyscalculia:</strong> Difficulty reading mathematical symbols and numbers<sup>[16]</sup></li>
            <li className="mb-2"><strong>Graphical dyscalculia:</strong> Trouble writing mathematical symbols and numbers</li>
            <li className="mb-2"><strong>Ideognostical dyscalculia:</strong> Difficulty with mental mathematical operations<sup>[17]</sup></li>
            <li className="mb-2"><strong>Operational dyscalculia:</strong> Problems performing mathematical calculations</li>
          </ul>
        </div>

        {/* Prevalence */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence and Demographics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Common is Dyscalculia?</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Overall prevalence:</strong> Affects 3-7% of the population<sup>[18]</sup></li>
            <li className="mb-2"><strong>Similar to dyslexia:</strong> As common as reading disabilities but less recognized<sup>[19]</sup></li>
            <li className="mb-2"><strong>All ages:</strong> Present from childhood through adulthood</li>
            <li className="mb-2"><strong>Persistent condition:</strong> Does not resolve with age, though individuals develop coping strategies<sup>[20]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gender Differences</h3>
          <p className="mb-4">
            Research on gender prevalence is mixed. Some studies suggest equal rates between males and females,<sup>[21]</sup> 
            while others show slightly higher rates in females.<sup>[22]</sup> Girls may be identified less frequently due to 
            societal expectations and stereotypes about math abilities.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cultural and Educational Context</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Prevalence rates are consistent across different countries and languages<sup>[23]</sup></li>
            <li className="mb-2">Educational system and teaching methods can affect identification rates</li>
            <li className="mb-2">Cultural attitudes toward math ability impact diagnosis and support<sup>[24]</sup></li>
          </ul>
        </div>

        {/* Co-occurring Conditions */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
          
          <p className="mb-4">
            Dyscalculia often occurs alongside other neurodevelopmental and learning differences:<sup>[25]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Comorbidities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Dyslexia:</strong> 40-60% of people with dyscalculia also have dyslexia<sup>[26]</sup></li>
            <li className="mb-2"><strong>ADHD:</strong> Attention difficulties often co-occur with dyscalculia<sup>[27]</sup></li>
            <li className="mb-2"><strong>Dysgraphia:</strong> Writing difficulties, including writing numbers and mathematical notation</li>
            <li className="mb-2"><strong>Developmental coordination disorder (DCD/Dyspraxia):</strong> Motor coordination challenges<sup>[28]</sup></li>
            <li className="mb-2"><strong>Anxiety disorders:</strong> Particularly math anxiety, which can be both cause and effect<sup>[29]</sup></li>
            <li className="mb-2"><strong>Working memory deficits:</strong> Difficulty holding and manipulating information mentally<sup>[30]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Distinguishing Dyscalculia from Other Conditions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Math anxiety:</strong> Fear of math that can impair performance but differs from dyscalculia<sup>[31]</sup></li>
            <li className="mb-2"><strong>General learning difficulties:</strong> Dyscalculia is specific to mathematical processing</li>
            <li className="mb-2"><strong>Poor math instruction:</strong> Low achievement due to inadequate teaching rather than learning disability<sup>[32]</sup></li>
          </ul>
        </div>

        {/* Historical Context */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Historical Understanding</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Recognition</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>1919:</strong> Swedish neurologist Salomon Henschen coined the term "acalculia"<sup>[33]</sup></li>
            <li className="mb-2"><strong>1940s:</strong> Gerstmann syndrome identified, including calculation difficulties<sup>[34]</sup></li>
            <li className="mb-2"><strong>1974:</strong> Czech researcher Ladislav Kosc defined developmental dyscalculia<sup>[35]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Modern Research Era</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>1990s-2000s:</strong> Neuroimaging reveals brain differences in mathematical processing<sup>[36]</sup></li>
            <li className="mb-2"><strong>2000s:</strong> Number sense theory becomes dominant framework<sup>[37]</sup></li>
            <li className="mb-2"><strong>2010s-present:</strong> Increased research, but still lags behind dyslexia research<sup>[38]</sup></li>
          </ul>
        </div>

        {/* Brain and Mathematical Processing */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Brain and Mathematical Processing</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Key Brain Regions for Mathematics</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Intraparietal sulcus (IPS):</strong> Critical for number sense and magnitude processing<sup>[39]</sup></li>
            <li className="mb-2"><strong>Angular gyrus:</strong> Involved in fact retrieval and language-based math</li>
            <li className="mb-2"><strong>Prefrontal cortex:</strong> Working memory and executive functions in math<sup>[40]</sup></li>
            <li className="mb-2"><strong>Hippocampus:</strong> Memory formation for mathematical facts and procedures</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Differences in Dyscalculia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reduced activity in intraparietal sulcus during number processing<sup>[41]</sup></li>
            <li className="mb-2">Differences in brain structure in regions supporting mathematical cognition<sup>[42]</sup></li>
            <li className="mb-2">Atypical connectivity between mathematical processing regions<sup>[43]</sup></li>
            <li className="mb-2">Compensatory activation of other brain regions<sup>[44]</sup></li>
          </ul>
        </div>

        {/* Number Sense */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Number Sense: The Foundation</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1654917475197-e5b701b1dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGNvdW50aW5nJTIwbnVtYmVyc3xlbnwxfHx8fDE3Njc0NTIzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child counting numbers"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What is Number Sense?</h3>
          <p className="mb-4">
            Number sense is the intuitive understanding of numbers, their relationships, and how they can be manipulated.<sup>[45]</sup> 
            It's the foundation upon which all mathematical learning is built.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Components of Number Sense</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Subitizing:</strong> Instantly recognizing small quantities without counting<sup>[46]</sup></li>
            <li className="mb-2"><strong>Magnitude comparison:</strong> Knowing which numbers are larger or smaller</li>
            <li className="mb-2"><strong>Number line estimation:</strong> Understanding where numbers fall on a continuum<sup>[47]</sup></li>
            <li className="mb-2"><strong>Approximate calculation:</strong> Mentally estimating results of operations</li>
            <li className="mb-2"><strong>Number relationships:</strong> Understanding how numbers relate to each other<sup>[48]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Deficient Number Sense in Dyscalculia</h3>
          <p className="mb-4">
            The core deficit theory suggests that impaired number sense is the fundamental problem in dyscalculia.<sup>[49]</sup> 
            This deficit affects all higher-level mathematical learning and performance.
          </p>
        </div>

        {/* Impact on Life */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impact on Daily Life and Learning</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Impact</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Mathematics anxiety and avoidance behaviors<sup>[50]</sup></li>
            <li className="mb-2">Lower grades in math-dependent subjects (science, economics, statistics)</li>
            <li className="mb-2">Reduced educational and career options<sup>[51]</sup></li>
            <li className="mb-2">Difficulty with standardized tests requiring quantitative reasoning</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Practical Daily Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Time management:</strong> Reading clocks, scheduling, time estimation<sup>[52]</sup></li>
            <li className="mb-2"><strong>Financial management:</strong> Budgeting, banking, understanding interest rates</li>
            <li className="mb-2"><strong>Shopping:</strong> Comparing prices, calculating discounts, counting change<sup>[53]</sup></li>
            <li className="mb-2"><strong>Cooking:</strong> Measuring ingredients, adjusting recipes</li>
            <li className="mb-2"><strong>Navigation:</strong> Reading maps, estimating distances, following directions<sup>[54]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Emotional and Social Impact</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Math anxiety and test anxiety<sup>[55]</sup></li>
            <li className="mb-2">Lower self-esteem related to academic performance</li>
            <li className="mb-2">Frustration and feelings of inadequacy<sup>[56]</sup></li>
            <li className="mb-2">Avoidance of situations requiring mathematical thinking</li>
          </ul>
        </div>

        {/* Strengths */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths and Abilities</h2>
          
          <p className="mb-4">
            While dyscalculia creates specific challenges, individuals often have many strengths:<sup>[57]</sup>
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Verbal abilities:</strong> Many have strong language and communication skills<sup>[58]</sup></li>
            <li className="mb-2"><strong>Creative thinking:</strong> Alternative problem-solving approaches</li>
            <li className="mb-2"><strong>Visual-spatial skills:</strong> Some individuals excel in visual thinking<sup>[59]</sup></li>
            <li className="mb-2"><strong>Artistic talents:</strong> Creativity in arts, music, design</li>
            <li className="mb-2"><strong>Intuition and empathy:</strong> Strong interpersonal skills<sup>[60]</sup></li>
          </ul>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Important Note:</h3>
            <div className="text-sm">
              <p>
                Dyscalculia is not related to overall intelligence. People with dyscalculia have average or above-average 
                IQ scores.<sup>[61]</sup> The difficulty is specific to mathematical processing, not general cognitive ability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[2] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[3] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[4] Rubinsten, O., & Henik, A. (2009). "Developmental dyscalculia: Heterogeneity might not mean different mechanisms." <em>Trends in Cognitive Sciences</em>, 13(2), 92-99.</p>
          <p>[5] Kosc, L. (1974). "Developmental dyscalculia." <em>Journal of Learning Disabilities</em>, 7(3), 164-177.</p>
          <p>[6] Shalev, R. S., Manor, O., & Gross-Tsur, V. (2005). "Developmental dyscalculia: A prospective six-year follow-up." <em>Developmental Medicine & Child Neurology</em>, 47(2), 121-125.</p>
          <p>[7] Dehaene, S. (2011). <em>The number sense: How the mind creates mathematics</em>. Oxford University Press.</p>
          <p>[8] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[9] Mazzocco, M. M., Feigenson, L., & Halberda, J. (2011). "Preschoolers' precision of the approximate number system predicts later school mathematics performance." <em>PLoS One</em>, 6(9), e23749.</p>
          <p>[10] Burny, E., Valcke, M., & Desoete, A. (2009). "Towards an agenda for studying learning and instruction focusing on time-related competences in children." <em>Educational Studies</em>, 35(5), 481-492.</p>
          <p>[11] Kaufmann, L., Mazzocco, M. M., Dowker, A., von Aster, M., Göbel, S. M., Grabner, R. H., ... & Nuerk, H. C. (2013). "Dyscalculia from a developmental and differential perspective." <em>Frontiers in Psychology</em>, 4, 516.</p>
          <p>[12] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[13] Shalev, R. S. (2007). "Prevalence of developmental dyscalculia." In D. B. Berch & M. M. M. Mazzocco (Eds.), <em>Why is math so hard for some children?</em> (pp. 49-60). Paul H. Brookes.</p>
          <p>[14] Ardila, A., & Rosselli, M. (2002). "Acalculia and dyscalculia." <em>Neuropsychology Review</em>, 12(4), 179-231.</p>
          <p>[15] Hécaen, H., Angelergues, R., & Houillier, S. (1961). "Les variétés cliniques des acalculies au cours des lésions rétrorolandiques: Approche statistique du problème." <em>Revue Neurologique</em>, 105, 85-103.</p>
          <p>[16] Cipolotti, L., & van Harskamp, N. J. (2001). "Disturbances of number processing and calculation." In R. S. Berndt (Ed.), <em>Handbook of neuropsychology</em> (2nd ed., Vol. 3, pp. 305-331). Elsevier.</p>
          <p>[17] von Aster, M. G., & Shalev, R. S. (2007). "Number development and developmental dyscalculia." <em>Developmental Medicine & Child Neurology</em>, 49(11), 868-873.</p>
          <p>[18] Gross-Tsur, V., Manor, O., & Shalev, R. S. (1996). "Developmental dyscalculia: Prevalence and demographic features." <em>Developmental Medicine & Child Neurology</em>, 38(1), 25-33.</p>
          <p>[19] Ramaa, S., & Gowramma, I. P. (2002). "A systematic procedure for identifying and classifying children with dyscalculia among primary school children in India." <em>Dyslexia</em>, 8(2), 67-85.</p>
          <p>[20] Shalev, R. S., Manor, O., Kerem, B., Ayali, M., Badichi, N., Friedlander, Y., & Gross-Tsur, V. (2001). "Developmental dyscalculia is a familial learning disability." <em>Journal of Learning Disabilities</em>, 34(1), 59-65.</p>
          <p>[21] Devine, A., Soltész, F., Nobes, A., Goswami, U., & Szűcs, D. (2013). "Gender differences in developmental dyscalculia depend on diagnostic criteria." <em>Learning and Instruction</em>, 27, 31-39.</p>
          <p>[22] Barbaresi, W. J., Katusic, S. K., Colligan, R. C., Weaver, A. L., & Jacobsen, S. J. (2005). "Math learning disorder: Incidence in a population-based birth cohort, 1976-82, Rochester, Minn." <em>Ambulatory Pediatrics</em>, 5(5), 281-289.</p>
          <p>[23] Reigosa-Crespo, V., Valdés-Sosa, M., Butterworth, B., Estévez, N., Rodríguez, M., Santos, E., ... & Lage, A. (2012). "Basic numerical capacities and prevalence of developmental dyscalculia: The Havana Survey." <em>Developmental Psychology</em>, 48(1), 123-135.</p>
          <p>[24] Dowker, A. (2005). <em>Individual differences in arithmetic: Implications for psychology, neuroscience and education</em>. Psychology Press.</p>
          <p>[25] Wilson, A. J., Andrewes, S. G., Struthers, H., Rowe, V. M., Bogdanovic, R., & Waldie, K. E. (2015). "Dyscalculia and dyslexia in adults: Cognitive bases of comorbidity." <em>Learning and Individual Differences</em>, 37, 118-132.</p>
          <p>[26] Landerl, K., Fussenegger, B., Moll, K., & Willburger, E. (2009). "Dyslexia and dyscalculia: Two learning disorders with different cognitive profiles." <em>Journal of Experimental Child Psychology</em>, 103(3), 309-324.</p>
          <p>[27] Zentall, S. S. (1990). "Fact-retrieval automatization and math problem solving by learning disabled, attention-disordered, and normal adolescents." <em>Journal of Educational Psychology</em>, 82(4), 856-865.</p>
          <p>[28] Pieters, S., Desoete, A., Roeyers, H., Vanderswalmen, R., & Van Waelvelde, H. (2012). "Behind mathematical learning disabilities: What about visual perception and motor skills?" <em>Learning and Individual Differences</em>, 22(4), 498-504.</p>
          <p>[29] Rubinsten, O., & Tannock, R. (2010). "Mathematics anxiety in children with developmental dyscalculia." <em>Behavioral and Brain Functions</em>, 6(1), 46.</p>
          <p>[30] Passolunghi, M. C., & Mammarella, I. C. (2012). "Selective spatial working memory impairment in a group of children with mathematics learning disabilities and poor problem-solving skills." <em>Journal of Learning Disabilities</em>, 45(4), 341-350.</p>
          <p>[31] Ashcraft, M. H., & Krause, J. A. (2007). "Working memory, math performance, and math anxiety." <em>Psychonomic Bulletin & Review</em>, 14(2), 243-248.</p>
          <p>[32] Geary, D. C., Hoard, M. K., Nugent, L., & Bailey, D. H. (2012). "Mathematical cognition deficits in children with learning disabilities and persistent low achievement: A five-year prospective study." <em>Journal of Educational Psychology</em>, 104(1), 206-223.</p>
          <p>[33] Henschen, S. E. (1919). "Über Sprach-, Musik- und Rechenmechanismen und ihre Lokalisationen im Grosshirn." <em>Zeitschrift für die gesamte Neurologie und Psychiatrie</em>, 52(1), 273-298.</p>
          <p>[34] Gerstmann, J. (1940). "Syndrome of finger agnosia, disorientation for right and left, agraphia and acalculia." <em>Archives of Neurology & Psychiatry</em>, 44(2), 398-408.</p>
          <p>[35] Kosc, L. (1974). "Developmental dyscalculia." <em>Journal of Learning Disabilities</em>, 7(3), 164-177.</p>
          <p>[36] Dehaene, S., Piazza, M., Pinel, P., & Cohen, L. (2003). "Three parietal circuits for number processing." <em>Cognitive Neuropsychology</em>, 20(3-6), 487-506.</p>
          <p>[37] Feigenson, L., Dehaene, S., & Spelke, E. (2004). "Core systems of number." <em>Trends in Cognitive Sciences</em>, 8(7), 307-314.</p>
          <p>[38] De Smedt, B., & Gilmore, C. K. (2011). "Defective number module or impaired access? Numerical magnitude processing in first graders with mathematical difficulties." <em>Journal of Experimental Child Psychology</em>, 108(2), 278-292.</p>
          <p>[39] Piazza, M., Izard, V., Pinel, P., Le Bihan, D., & Dehaene, S. (2004). "Tuning curves for approximate numerosity in the human intraparietal sulcus." <em>Neuron</em>, 44(3), 547-555.</p>
          <p>[40] Menon, V. (2010). "Developmental cognitive neuroscience of arithmetic: Implications for learning and education." <em>ZDM Mathematics Education</em>, 42(6), 515-525.</p>
          <p>[41] Price, G. R., Holloway, I., Räsänen, P., Vesterinen, M., & Ansari, D. (2007). "Impaired parietal magnitude processing in developmental dyscalculia." <em>Current Biology</em>, 17(24), R1042-R1043.</p>
          <p>[42] Rotzer, S., Kucian, K., Martin, E., von Aster, M., Klaver, P., & Loenneker, T. (2008). "Optimized voxel-based morphometry in children with developmental dyscalculia." <em>NeuroImage</em>, 39(1), 417-422.</p>
          <p>[43] Rykhlevskaia, E., Uddin, L. Q., Kondos, L., & Menon, V. (2009). "Neuroanatomical correlates of developmental dyscalculia: Combined evidence from morphometry and tractography." <em>Frontiers in Human Neuroscience</em>, 3, 51.</p>
          <p>[44] Kucian, K., von Aster, M., Loenneker, T., Dietrich, T., & Martin, E. (2008). "Development of neural networks for exact and approximate calculation: A FMRI study." <em>Developmental Neuropsychology</em>, 33(4), 447-473.</p>
          <p>[45] Gersten, R., & Chard, D. (1999). "Number sense: Rethinking arithmetic instruction for students with mathematical disabilities." <em>The Journal of Special Education</em>, 33(1), 18-28.</p>
          <p>[46] Mandler, G., & Shebo, B. J. (1982). "Subitizing: An analysis of its component processes." <em>Journal of Experimental Psychology: General</em>, 111(1), 1-22.</p>
          <p>[47] Siegler, R. S., & Booth, J. L. (2004). "Development of numerical estimation in young children." <em>Child Development</em>, 75(2), 428-444.</p>
          <p>[48] Griffin, S. (2004). "Building number sense with Number Worlds: A mathematics program for young children." <em>Early Childhood Research Quarterly</em>, 19(1), 173-180.</p>
          <p>[49] Butterworth, B. (2005). "The development of arithmetical abilities." <em>Journal of Child Psychology and Psychiatry</em>, 46(1), 3-18.</p>
          <p>[50] Krinzinger, H., Kaufmann, L., & Willmes, K. (2009). "Math anxiety and math ability in early primary school years." <em>Journal of Psychoeducational Assessment</em>, 27(3), 206-225.</p>
          <p>[51] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[52] Burny, E., Valcke, M., & Desoete, A. (2012). "Clock reading: An underestimated topic in children with mathematics difficulties." <em>Journal of Learning Disabilities</em>, 45(4), 351-360.</p>
          <p>[53] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[54] Szűcs, D., Devine, A., Soltesz, F., Nobes, A., & Gabriel, F. (2013). "Developmental dyscalculia is related to visuo-spatial memory and inhibition impairment." <em>Cortex</em>, 49(10), 2674-2688.</p>
          <p>[55] Dowker, A., Sarkar, A., & Looi, C. Y. (2016). "Mathematics anxiety: What have we learned in 60 years?" <em>Frontiers in Psychology</em>, 7, 508.</p>
          <p>[56] Kohn, J., Wyschkon, A., Ballaschk, K., Ihle, W., & Esser, G. (2013). "Math anxiety and its relation to basic numerical and spatial processing in primary school." <em>Zeitschrift für Kinder-und Jugendpsychiatrie und Psychotherapie</em>, 41(6), 395-404.</p>
          <p>[57] Chinn, S. (2012). <em>The trouble with maths: A practical guide to helping learners with numeracy difficulties</em> (2nd ed.). Routledge.</p>
          <p>[58] Rubinsten, O., & Henik, A. (2006). "Double dissociation of functions in developmental dyslexia and dyscalculia." <em>Journal of Educational Psychology</em>, 98(4), 854-867.</p>
          <p>[59] von Károlyi, C. (2001). "Visual-spatial strength in dyslexia: Rapid discrimination of impossible figures." <em>Journal of Learning Disabilities</em>, 34(4), 380-391.</p>
          <p>[60] Sharma, M. C. (1989). "How children learn mathematics: Professor Mahesh Sharma at the Dyscalculia Centre, London." <em>Teaching and Learning</em>, 10(1), 47-51.</p>
          <p>[61] Geary, D. C., Hoard, M. K., Byrd-Craven, J., Nugent, L., & Numtee, C. (2007). "Cognitive mechanisms underlying achievement deficits in children with mathematical learning disability." <em>Child Development</em>, 78(4), 1343-1359.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyscalculia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyscalculia
        </a>
      </div>
    </article>
  );
}
