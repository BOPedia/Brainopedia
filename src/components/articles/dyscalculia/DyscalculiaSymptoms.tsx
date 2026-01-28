import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyscalculiaSymptoms({ setCurrentArticle }: DyscalculiaSymptomsProps) {
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
        Dyscalculia: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Dyscalculia presents differently across individuals and developmental stages, but certain core symptoms are 
            consistently observed.<sup>[1]</sup> Recognizing these signs early can lead to timely intervention and support, 
            improving mathematical outcomes and reducing math anxiety.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Mathematical Symptoms</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1632571401005-458e9d244591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwbWF0aGVtYXRpY3MlMjBzdHVkZW50fGVufDF8fHx8MTc2NzQ1MjMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Calculator and mathematics"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Number Sense Deficits</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Poor understanding of quantity:</strong> Difficulty grasping what numbers represent<sup>[3]</sup></li>
            <li className="mb-2"><strong>Magnitude comparison problems:</strong> Trouble determining which number is larger</li>
            <li className="mb-2"><strong>Number line difficulties:</strong> Cannot accurately place numbers on a number line<sup>[4]</sup></li>
            <li className="mb-2"><strong>Subitizing deficits:</strong> Cannot instantly recognize small quantities (1-4 items)</li>
            <li className="mb-2"><strong>Estimation problems:</strong> Poor at estimating quantities, distances, or calculations<sup>[5]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Counting Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Struggles with rote counting, especially beyond 20<sup>[6]</sup></li>
            <li className="mb-2">Difficulty counting backwards</li>
            <li className="mb-2">Problems counting by twos, fives, or tens<sup>[7]</sup></li>
            <li className="mb-2">Loses track when counting objects</li>
            <li className="mb-2">May skip numbers or count the same item twice</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Arithmetic Operation Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Addition and subtraction:</strong> Relies on finger counting long past appropriate age<sup>[8]</sup></li>
            <li className="mb-2"><strong>Multiplication and division:</strong> Extreme difficulty memorizing times tables</li>
            <li className="mb-2"><strong>Procedural errors:</strong> Makes frequent calculation mistakes<sup>[9]</sup></li>
            <li className="mb-2"><strong>Place value confusion:</strong> Doesn't understand ones, tens, hundreds columns</li>
            <li className="mb-2"><strong>Borrowing/carrying errors:</strong> Struggles with multi-digit operations<sup>[10]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Math Fact Retrieval</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Cannot automatically recall basic math facts (3+4=7, 6×7=42)<sup>[11]</sup></li>
            <li className="mb-2">Must recalculate every time instead of retrieving from memory</li>
            <li className="mb-2">Shows no improvement in speed despite extensive practice<sup>[12]</sup></li>
            <li className="mb-2">May remember facts one day but forget them the next</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms by Age Group</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Childhood (Ages 3-6)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty learning to count to 10<sup>[13]</sup></li>
            <li className="mb-2">Trouble recognizing numbers and number symbols</li>
            <li className="mb-2">Cannot understand one-to-one correspondence (one number = one object)<sup>[14]</sup></li>
            <li className="mb-2">Difficulty comparing quantities (more/less, bigger/smaller)</li>
            <li className="mb-2">Problems recognizing patterns<sup>[15]</sup></li>
            <li className="mb-2">Struggles with simple board games involving counting</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Elementary School (Ages 6-11)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Persistent finger counting for simple calculations<sup>[16]</sup></li>
            <li className="mb-2">Cannot memorize addition and subtraction facts</li>
            <li className="mb-2">Difficulty learning multiplication tables<sup>[17]</sup></li>
            <li className="mb-2">Trouble with word problems and mathematical reasoning</li>
            <li className="mb-2">Confusion about math symbols (+, -, ×, ÷, =)<sup>[18]</sup></li>
            <li className="mb-2">Difficulty telling time on analog clocks</li>
            <li className="mb-2">Problems understanding money and making change<sup>[19]</sup></li>
            <li className="mb-2">Struggles with measurement concepts</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle School (Ages 11-14)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty with fractions, decimals, and percentages<sup>[20]</sup></li>
            <li className="mb-2">Problems understanding negative numbers</li>
            <li className="mb-2">Struggles with algebraic concepts<sup>[21]</sup></li>
            <li className="mb-2">Difficulty understanding graphs and charts</li>
            <li className="mb-2">Problems with geometric concepts and spatial reasoning<sup>[22]</sup></li>
            <li className="mb-2">Cannot estimate reasonable answers</li>
            <li className="mb-2">Avoids math-related activities<sup>[23]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">High School and Beyond (Ages 14+)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Continued reliance on calculators for basic operations<sup>[24]</sup></li>
            <li className="mb-2">Difficulty with advanced mathematics (algebra, geometry, calculus)</li>
            <li className="mb-2">Problems applying math to real-world situations<sup>[25]</sup></li>
            <li className="mb-2">Struggles with financial mathematics (interest, loans, budgets)</li>
            <li className="mb-2">Difficulty with statistics and data interpretation<sup>[26]</sup></li>
            <li className="mb-2">May avoid careers requiring math skills</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Associated Cognitive Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Working Memory Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Cannot hold numbers in mind while performing operations<sup>[27]</sup></li>
            <li className="mb-2">Forgets steps in multi-step problems</li>
            <li className="mb-2">Difficulty with mental math<sup>[28]</sup></li>
            <li className="mb-2">Trouble following multi-step instructions with numerical components</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Processing Speed Issues</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Very slow at completing math problems<sup>[29]</sup></li>
            <li className="mb-2">Cannot finish timed math tests</li>
            <li className="mb-2">Takes significantly longer than peers on calculations<sup>[30]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Attention and Executive Function</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty maintaining focus during math tasks<sup>[31]</sup></li>
            <li className="mb-2">Problems organizing mathematical work on paper</li>
            <li className="mb-2">Struggles with planning approach to complex problems<sup>[32]</sup></li>
            <li className="mb-2">Makes careless errors due to attention lapses</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Spatial Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Problems aligning numbers in columns<sup>[33]</sup></li>
            <li className="mb-2">Difficulty reading charts, graphs, and tables</li>
            <li className="mb-2">Trouble with geometric concepts and spatial relationships<sup>[34]</sup></li>
            <li className="mb-2">Cannot visualize mathematical concepts</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life Symptoms</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1754304342295-6094fe41e60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NzQ1MjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Math education in classroom"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Time-Related Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty reading analog clocks<sup>[35]</sup></li>
            <li className="mb-2">Problems understanding time concepts (hours, minutes, seconds)</li>
            <li className="mb-2">Trouble estimating time duration<sup>[36]</sup></li>
            <li className="mb-2">Frequently late due to poor time sense</li>
            <li className="mb-2">Difficulty managing schedules and appointments<sup>[37]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Money Management Problems</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty recognizing coins and bills<sup>[38]</sup></li>
            <li className="mb-2">Cannot calculate correct change</li>
            <li className="mb-2">Problems comparing prices while shopping<sup>[39]</sup></li>
            <li className="mb-2">Struggles with budgeting and financial planning</li>
            <li className="mb-2">Difficulty understanding bank statements and credit card bills<sup>[40]</sup></li>
            <li className="mb-2">Problems calculating tips at restaurants</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Measurement and Estimation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Trouble measuring ingredients while cooking<sup>[41]</sup></li>
            <li className="mb-2">Difficulty using rulers and measuring tapes</li>
            <li className="mb-2">Problems estimating distances<sup>[42]</sup></li>
            <li className="mb-2">Cannot gauge amounts (how much gas, how many people, etc.)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Navigation and Direction</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty reading maps<sup>[43]</sup></li>
            <li className="mb-2">Problems following directional instructions with numbers</li>
            <li className="mb-2">Trouble estimating distances when driving or walking<sup>[44]</sup></li>
            <li className="mb-2">Gets lost easily in familiar places</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional and Behavioral Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Math Anxiety</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Extreme nervousness about math tasks<sup>[45]</sup></li>
            <li className="mb-2">Physical symptoms when facing math (sweating, nausea, rapid heartbeat)</li>
            <li className="mb-2">Panic during math tests<sup>[46]</sup></li>
            <li className="mb-2">Fear of being called on during math class</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Avoidance Behaviors</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Refuses to do math homework<sup>[47]</sup></li>
            <li className="mb-2">Avoids situations requiring calculation</li>
            <li className="mb-2">Makes excuses to miss math class<sup>[48]</sup></li>
            <li className="mb-2">Eliminates career options involving mathematics</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Esteem Issues</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Feels "stupid" or inadequate in math<sup>[49]</sup></li>
            <li className="mb-2">Negative self-talk about mathematical ability</li>
            <li className="mb-2">Compares self unfavorably to peers<sup>[50]</sup></li>
            <li className="mb-2">Develops learned helplessness regarding mathematics</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Frustration and Emotional Reactions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Meltdowns or tantrums during math tasks<sup>[51]</sup></li>
            <li className="mb-2">Extreme frustration despite effort</li>
            <li className="mb-2">Gives up easily on mathematical problems<sup>[52]</sup></li>
            <li className="mb-2">Becomes withdrawn or aggressive around math</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Compensatory Strategies Observed</h2>
          
          <p className="mb-4">
            Individuals with dyscalculia often develop strategies to cope with their difficulties:<sup>[53]</sup>
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Excessive finger counting:</strong> Continues well beyond typical developmental age<sup>[54]</sup></li>
            <li className="mb-2"><strong>Tally marks:</strong> Uses marks instead of numbers for counting</li>
            <li className="mb-2"><strong>Calculator dependence:</strong> Relies on calculator for all calculations<sup>[55]</sup></li>
            <li className="mb-2"><strong>Memorizing procedures:</strong> Learns steps without understanding concepts</li>
            <li className="mb-2"><strong>Asking for help:</strong> Consistently needs assistance with mathematical tasks<sup>[56]</sup></li>
            <li className="mb-2"><strong>Avoiding precision:</strong> Uses rounded numbers or approximations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Red Flags Requiring Evaluation</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Consider professional evaluation if:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Child is more than one year behind peers in math despite good instruction<sup>[57]</sup></li>
              <li>Mathematical difficulties are significantly worse than other academic areas</li>
              <li>Uses immature counting strategies (finger counting) well past age 8-9<sup>[58]</sup></li>
              <li>Cannot memorize basic math facts despite extensive practice</li>
              <li>Shows extreme math anxiety or avoidance behaviors<sup>[59]</sup></li>
              <li>Has family history of dyscalculia or math learning disabilities</li>
              <li>Difficulties persist despite targeted intervention<sup>[60]</sup></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[2] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[3] Dehaene, S. (2011). <em>The number sense: How the mind creates mathematics</em>. Oxford University Press.</p>
          <p>[4] Siegler, R. S., & Booth, J. L. (2004). "Development of numerical estimation in young children." <em>Child Development</em>, 75(2), 428-444.</p>
          <p>[5] Mazzocco, M. M., Feigenson, L., & Halberda, J. (2011). "Preschoolers' precision of the approximate number system predicts later school mathematics performance." <em>PLoS One</em>, 6(9), e23749.</p>
          <p>[6] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[7] von Aster, M. G., & Shalev, R. S. (2007). "Number development and developmental dyscalculia." <em>Developmental Medicine & Child Neurology</em>, 49(11), 868-873.</p>
          <p>[8] Jordan, N. C., Hanich, L. B., & Kaplan, D. (2003). "Arithmetic fact mastery in young children: A longitudinal investigation." <em>Journal of Experimental Child Psychology</em>, 85(2), 103-119.</p>
          <p>[9] Geary, D. C., Hoard, M. K., & Bailey, D. H. (2012). "Fact retrieval deficits in low achieving children and children with mathematical learning disability." <em>Journal of Learning Disabilities</em>, 45(4), 291-307.</p>
          <p>[10] Landerl, K., Bevan, A., & Butterworth, B. (2004). "Developmental dyscalculia and basic numerical capacities: A study of 8–9-year-old students." <em>Cognition</em>, 93(2), 99-125.</p>
          <p>[11] Butterworth, B. (2003). "Dyscalculia screener." <em>London: nferNelson</em>.</p>
          <p>[12] Price, G. R., Mazzocco, M. M., & Ansari, D. (2013). "Why mental arithmetic counts: Brain activation during single digit arithmetic predicts high school math scores." <em>Journal of Neuroscience</em>, 33(1), 156-163.</p>
          <p>[13] Starkey, P., & Cooper, R. G. (1980). "Perception of numbers by human infants." <em>Science</em>, 210(4473), 1033-1035.</p>
          <p>[14] Gelman, R., & Gallistel, C. R. (1978). <em>The child's understanding of number</em>. Harvard University Press.</p>
          <p>[15] Rittle-Johnson, B., Fyfe, E. R., McLean, L. E., & McEldoon, K. L. (2013). "Emerging understanding of patterning in 4-year-olds." <em>Journal of Cognition and Development</em>, 14(3), 376-396.</p>
          <p>[16] Baroody, A. J. (1987). "The development of counting strategies for single-digit addition." <em>Journal for Research in Mathematics Education</em>, 18(2), 141-157.</p>
          <p>[17] De Smedt, B., Verschaffel, L., & Ghesquière, P. (2009). "The predictive value of numerical magnitude comparison for individual differences in mathematics achievement." <em>Journal of Experimental Child Psychology</em>, 103(4), 469-479.</p>
          <p>[18] Rubinsten, O., & Henik, A. (2005). "Automatic activation of internal magnitudes: A study of developmental dyscalculia." <em>Neuropsychology</em>, 19(5), 641-648.</p>
          <p>[19] Kaufmann, L., Mazzocco, M. M., Dowker, A., von Aster, M., Göbel, S. M., Grabner, R. H., ... & Nuerk, H. C. (2013). "Dyscalculia from a developmental and differential perspective." <em>Frontiers in Psychology</em>, 4, 516.</p>
          <p>[20] Mazzocco, M. M., & Devlin, K. T. (2008). "Parts and 'holes': Gaps in rational number sense among children with vs. without mathematical learning disabilities." <em>Developmental Science</em>, 11(5), 681-691.</p>
          <p>[21] Booth, J. L., & Siegler, R. S. (2008). "Numerical magnitude representations influence arithmetic learning." <em>Child Development</em>, 79(4), 1016-1031.</p>
          <p>[22] Karagiannakis, G., Baccaglini-Frank, A., & Papadatos, Y. (2014). "Mathematical learning difficulties subtypes classification." <em>Frontiers in Human Neuroscience</em>, 8, 57.</p>
          <p>[23] Ashcraft, M. H., & Moore, A. M. (2009). "Mathematics anxiety and the affective drop in performance." <em>Journal of Psychoeducational Assessment</em>, 27(3), 197-205.</p>
          <p>[24] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[25] Geary, D. C., Hoard, M. K., Nugent, L., & Bailey, D. H. (2012). "Mathematical cognition deficits in children with learning disabilities and persistent low achievement: A five-year prospective study." <em>Journal of Educational Psychology</em>, 104(1), 206-223.</p>
          <p>[26] Ashcraft, M. H., & Krause, J. A. (2007). "Working memory, math performance, and math anxiety." <em>Psychonomic Bulletin & Review</em>, 14(2), 243-248.</p>
          <p>[27] Passolunghi, M. C., & Mammarella, I. C. (2012). "Selective spatial working memory impairment in a group of children with mathematics learning disabilities and poor problem-solving skills." <em>Journal of Learning Disabilities</em>, 45(4), 341-350.</p>
          <p>[28] Swanson, H. L., & Beebe-Frankenberger, M. (2004). "The relationship between working memory and mathematical problem solving in children at risk and not at risk for serious math difficulties." <em>Journal of Educational Psychology</em>, 96(3), 471-491.</p>
          <p>[29] Bull, R., & Johnston, R. S. (1997). "Children's arithmetical difficulties: Contributions from processing speed, item identification, and short-term memory." <em>Journal of Experimental Child Psychology</em>, 65(1), 1-24.</p>
          <p>[30] Geary, D. C., & Brown, S. C. (1991). "Cognitive addition: Strategy choice and speed-of-processing differences in gifted, normal, and mathematically disabled children." <em>Developmental Psychology</em>, 27(3), 398-406.</p>
          <p>[31] Zentall, S. S. (1990). "Fact-retrieval automatization and math problem solving by learning disabled, attention-disordered, and normal adolescents." <em>Journal of Educational Psychology</em>, 82(4), 856-865.</p>
          <p>[32] Lucangeli, D., & Cabrele, S. (2006). "The relationship of metacognitive knowledge, skills and beliefs in children with and without mathematics learning disabilities." In A. Desoete & M. Veenman (Eds.), <em>Metacognition in mathematics education</em> (pp. 103-133). Nova Science Publishers.</p>
          <p>[33] Shalev, R. S., Auerbach, J., Manor, O., & Gross-Tsur, V. (2000). "Developmental dyscalculia: Prevalence and prognosis." <em>European Child & Adolescent Psychiatry</em>, 9(2), S58-S64.</p>
          <p>[34] Szűcs, D., Devine, A., Soltesz, F., Nobes, A., & Gabriel, F. (2013). "Developmental dyscalculia is related to visuo-spatial memory and inhibition impairment." <em>Cortex</em>, 49(10), 2674-2688.</p>
          <p>[35] Burny, E., Valcke, M., & Desoete, A. (2012). "Clock reading: An underestimated topic in children with mathematics difficulties." <em>Journal of Learning Disabilities</em>, 45(4), 351-360.</p>
          <p>[36] Desoete, A., Ceulemans, A., De Weerdt, F., & Pieters, S. (2012). "Can we predict mathematical learning disabilities from symbolic and non-symbolic comparison tasks in kindergarten? Findings from a longitudinal study." <em>British Journal of Educational Psychology</em>, 82(1), 64-81.</p>
          <p>[37] Burny, E., Valcke, M., & Desoete, A. (2009). "Towards an agenda for studying learning and instruction focusing on time-related competences in children." <em>Educational Studies</em>, 35(5), 481-492.</p>
          <p>[38] Kaufmann, L., & Nuerk, H. C. (2005). "Numerical development: Current issues and future perspectives." <em>Psychology Science</em>, 47(1), 142-170.</p>
          <p>[39] Toll, S. W., Van Viersen, S., Kroesbergen, E. H., & Van Luit, J. E. (2015). "The development of (non-)symbolic comparison skills throughout kindergarten and their relations with basic mathematical skills." <em>Learning and Individual Differences</em>, 38, 10-17.</p>
          <p>[40] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[41] Chinn, S. (2012). <em>The trouble with maths: A practical guide to helping learners with numeracy difficulties</em> (2nd ed.). Routledge.</p>
          <p>[42] Newcombe, N. S., Levine, S. C., & Mix, K. S. (2015). "Thinking about quantity: The intertwined development of spatial and numerical cognition." <em>Wiley Interdisciplinary Reviews: Cognitive Science</em>, 6(6), 491-505.</p>
          <p>[43] Hegarty, M., & Waller, D. (2004). "A dissociation between mental rotation and perspective-taking spatial abilities." <em>Intelligence</em>, 32(2), 175-191.</p>
          <p>[44] Mix, K. S., & Cheng, Y. L. (2012). "The relation between space and math: Developmental and educational implications." <em>Advances in Child Development and Behavior</em>, 42, 197-243.</p>
          <p>[45] Rubinsten, O., & Tannock, R. (2010). "Mathematics anxiety in children with developmental dyscalculia." <em>Behavioral and Brain Functions</em>, 6(1), 46.</p>
          <p>[46] Dowker, A., Sarkar, A., & Looi, C. Y. (2016). "Mathematics anxiety: What have we learned in 60 years?" <em>Frontiers in Psychology</em>, 7, 508.</p>
          <p>[47] Krinzinger, H., Kaufmann, L., & Willmes, K. (2009). "Math anxiety and math ability in early primary school years." <em>Journal of Psychoeducational Assessment</em>, 27(3), 206-225.</p>
          <p>[48] Ma, X., & Xu, J. (2004). "The causal ordering of mathematics anxiety and mathematics achievement: A longitudinal panel analysis." <em>Journal of Adolescence</em>, 27(2), 165-179.</p>
          <p>[49] Kohn, J., Wyschkon, A., Ballaschk, K., Ihle, W., & Esser, G. (2013). "Math anxiety and its relation to basic numerical and spatial processing in primary school." <em>Zeitschrift für Kinder-und Jugendpsychiatrie und Psychotherapie</em>, 41(6), 395-404.</p>
          <p>[50] Reyna, V. F., & Brainerd, C. J. (2007). "The importance of mathematics in health and human judgment: Numeracy, risk communication, and medical decision making." <em>Learning and Individual Differences</em>, 17(2), 147-159.</p>
          <p>[51] Ramirez, G., Gunderson, E. A., Levine, S. C., & Beilock, S. L. (2013). "Math anxiety, working memory, and math achievement in early elementary school." <em>Journal of Cognition and Development</em>, 14(2), 187-202.</p>
          <p>[52] Hannula, M. M., Maijala, H., & Pehkonen, E. (2004). "Development of understanding and self-confidence in mathematics; Grades 5–8." In M. J. Høines & A. B. Fuglestad (Eds.), <em>Proceedings of the 28th Conference of the International Group for the Psychology of Mathematics Education</em> (Vol. 3, pp. 17-24).</p>
          <p>[53] Dowker, A. (2005). <em>Individual differences in arithmetic: Implications for psychology, neuroscience and education</em>. Psychology Press.</p>
          <p>[54] Geary, D. C., Bow-Thomas, C. C., & Yao, Y. (1992). "Counting knowledge and skill in cognitive addition: A comparison of normal and mathematically disabled children." <em>Journal of Experimental Child Psychology</em>, 54(3), 372-391.</p>
          <p>[55] Grabner, R. H., Ansari, D., Koschutnig, K., Reishofer, G., Ebner, F., & Neuper, C. (2009). "To retrieve or to calculate? Left angular gyrus mediates the retrieval of arithmetic facts during problem solving." <em>Neuropsychologia</em>, 47(2), 604-608.</p>
          <p>[56] Jordan, N. C., Kaplan, D., Ramineni, C., & Locuniak, M. N. (2009). "Early math matters: Kindergarten number competence and later mathematics outcomes." <em>Developmental Psychology</em>, 45(3), 850-867.</p>
          <p>[57] Mazzocco, M. M., & Myers, G. F. (2003). "Complexities in identifying and defining mathematics learning disability in the primary school-age years." <em>Annals of Dyslexia</em>, 53(1), 218-253.</p>
          <p>[58] Geary, D. C. (1993). "Mathematical disabilities: Cognitive, neuropsychological, and genetic components." <em>Psychological Bulletin</em>, 114(2), 345-362.</p>
          <p>[59] Ashcraft, M. H., & Ridley, K. S. (2005). "Math anxiety and its cognitive consequences." In J. I. D. Campbell (Ed.), <em>Handbook of mathematical cognition</em> (pp. 315-327). Psychology Press.</p>
          <p>[60] Fuchs, L. S., Fuchs, D., Compton, D. L., Powell, S. R., Seethaler, P. M., Capizzi, A. M., ... & Fletcher, J. M. (2006). "The cognitive correlates of third-grade skill in arithmetic, algorithmic computation, and arithmetic word problems." <em>Journal of Educational Psychology</em>, 98(1), 29-43.</p>
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
