import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyscalculiaSupport({ setCurrentArticle }: DyscalculiaSupportProps) {
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
        Dyscalculia: Support & Management
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Effective support for dyscalculia requires evidence-based interventions, appropriate accommodations, and 
            comprehensive educational planning.<sup>[1]</sup> While dyscalculia is lifelong, with proper support individuals 
            can develop functional mathematical skills and strategies to manage daily mathematical demands.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evidence-Based Interventions</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1754304342295-6094fe41e60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NzQ1MjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Math education classroom"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Explicit, Systematic Instruction</h3>
          <p className="mb-4">
            Research consistently supports explicit, systematic teaching approaches for dyscalculia:<sup>[3]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Clear models:</strong> Teacher demonstrates thinking process explicitly<sup>[4]</sup></li>
            <li className="mb-2"><strong>Guided practice:</strong> Students practice with immediate feedback</li>
            <li className="mb-2"><strong>Gradual release:</strong> Move from heavily supported to independent practice<sup>[5]</sup></li>
            <li className="mb-2"><strong>Cumulative review:</strong> Regular review of previously taught skills</li>
            <li className="mb-2"><strong>Verbalization:</strong> Students explain their thinking aloud<sup>[6]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Number Sense Instruction</h3>
          <p className="mb-4">
            Building foundational number sense is critical for students with dyscalculia:<sup>[7]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Quantity recognition:</strong> Practice identifying and comparing quantities<sup>[8]</sup></li>
            <li className="mb-2"><strong>Number line activities:</strong> Placing numbers on number lines</li>
            <li className="mb-2"><strong>Estimation tasks:</strong> Approximating quantities and calculations<sup>[9]</sup></li>
            <li className="mb-2"><strong>Part-whole relationships:</strong> Understanding how numbers combine</li>
            <li className="mb-2"><strong>Number games:</strong> Board games and activities building number sense<sup>[10]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Concrete-Representational-Abstract (CRA) Approach</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Concrete:</strong> Use manipulatives (blocks, counters) to represent concepts<sup>[11]</sup></li>
            <li className="mb-2"><strong>Representational:</strong> Draw pictures or diagrams of mathematical concepts</li>
            <li className="mb-2"><strong>Abstract:</strong> Work with numbers and symbols alone<sup>[12]</sup></li>
            <li className="mb-2"><strong>Progression:</strong> Move through stages as understanding develops</li>
            <li className="mb-2"><strong>Research support:</strong> Highly effective for students with math difficulties<sup>[13]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Specific Intervention Programs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Number Worlds:</strong> Curriculum targeting number sense development<sup>[14]</sup></li>
            <li className="mb-2"><strong>Math Recovery:</strong> One-on-one intervention for early elementary<sup>[15]</sup></li>
            <li className="mb-2"><strong>TouchMath:</strong> Multisensory approach using touch points on numbers<sup>[16]</sup></li>
            <li className="mb-2"><strong>Schema-based instruction:</strong> Teaching problem-solving through recognizing problem types<sup>[17]</sup></li>
            <li className="mb-2"><strong>Peer-Assisted Learning Strategies (PALS):</strong> Structured peer tutoring<sup>[18]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Building Arithmetic Skills</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fact Fluency Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Teach strategies, not just memorization:</strong> Counting on, making tens, doubles<sup>[19]</sup></li>
            <li className="mb-2"><strong>Focus on relationships:</strong> If you know 5+5=10, then 5+6=11</li>
            <li className="mb-2"><strong>Practice to automaticity:</strong> Frequent, short practice sessions<sup>[20]</sup></li>
            <li className="mb-2"><strong>Multiplication strategies:</strong> Skip counting, arrays, repeated addition</li>
            <li className="mb-2"><strong>Fact families:</strong> Understanding relationships among operations<sup>[21]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multi-Digit Calculation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Place value understanding:</strong> Explicit teaching of ones, tens, hundreds<sup>[22]</sup></li>
            <li className="mb-2"><strong>Algorithm instruction:</strong> Step-by-step procedures with understanding</li>
            <li className="mb-2"><strong>Visual supports:</strong> Grid paper to align columns<sup>[23]</sup></li>
            <li className="mb-2"><strong>Error analysis:</strong> Identifying and correcting common mistakes</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Word Problem Solving</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Schema-based instruction:</strong> Teach problem structures (change, compare, combine)<sup>[24]</sup></li>
            <li className="mb-2"><strong>Visual representations:</strong> Drawing diagrams to represent problems<sup>[25]</sup></li>
            <li className="mb-2"><strong>STAR strategy:</strong> Search, Translate, Answer, Review</li>
            <li className="mb-2"><strong>Key word caution:</strong> Teach conceptual understanding, not just key words<sup>[26]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Accommodations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Calculation Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Calculator use:</strong> For non-computation-focused tasks<sup>[27]</sup></li>
            <li className="mb-2"><strong>Multiplication charts:</strong> Reference sheets for facts</li>
            <li className="mb-2"><strong>Formula sheets:</strong> Provided for tests and assignments<sup>[28]</sup></li>
            <li className="mb-2"><strong>Grid/graph paper:</strong> Helps with number alignment</li>
            <li className="mb-2"><strong>Reduced quantity:</strong> Fewer problems focusing on mastery<sup>[29]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Time and Pacing Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Extended time:</strong> 50-100% extra time on tests<sup>[30]</sup></li>
            <li className="mb-2"><strong>Breaks during testing:</strong> Prevent mental fatigue</li>
            <li className="mb-2"><strong>Untimed tests:</strong> No time pressure on math tasks<sup>[31]</sup></li>
            <li className="mb-2"><strong>Extended deadlines:</strong> Additional time for math assignments</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Presentation Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Read-aloud:</strong> Math problems read to student<sup>[32]</sup></li>
            <li className="mb-2"><strong>Larger print:</strong> Bigger numbers easier to process</li>
            <li className="mb-2"><strong>Highlighted operations:</strong> Color-coding operation signs<sup>[33]</sup></li>
            <li className="mb-2"><strong>One problem per page:</strong> Reduce visual overwhelm</li>
            <li className="mb-2"><strong>Visual aids:</strong> Number lines, hundreds charts available<sup>[34]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Response Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Show work on separate paper:</strong> More space for calculations<sup>[35]</sup></li>
            <li className="mb-2"><strong>Oral responses:</strong> Explain thinking verbally instead of writing</li>
            <li className="mb-2"><strong>Reduced writing:</strong> Multiple choice instead of constructed response<sup>[36]</sup></li>
            <li className="mb-2"><strong>Use of scribe:</strong> Someone else records mathematical work</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assistive Technology</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1632571401005-458e9d244591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwbWF0aGVtYXRpY3MlMjBzdHVkZW50fGVufDF8fHx8MTc2NzQ1MjMwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Calculator mathematics"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Calculation Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Graphing calculators:</strong> For advanced mathematics<sup>[37]</sup></li>
            <li className="mb-2"><strong>Talking calculators:</strong> Auditory feedback for entries</li>
            <li className="mb-2"><strong>Large-button calculators:</strong> Easier input<sup>[38]</sup></li>
            <li className="mb-2"><strong>Calculator apps:</strong> Smartphone calculators with photo recognition</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Digital Learning Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Virtual manipulatives:</strong> Online base-ten blocks, fraction bars<sup>[39]</sup></li>
            <li className="mb-2"><strong>Math apps:</strong> Apps targeting specific skills (e.g., DragonBox, Prodigy)<sup>[40]</sup></li>
            <li className="mb-2"><strong>Number line apps:</strong> Interactive number lines</li>
            <li className="mb-2"><strong>Math games:</strong> Engaging practice of mathematical concepts<sup>[41]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization and Support Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Graphic organizers:</strong> Templates for problem-solving steps<sup>[42]</sup></li>
            <li className="mb-2"><strong>Digital equation editors:</strong> MathType, EquatIO for typing math</li>
            <li className="mb-2"><strong>Voice-to-text:</strong> Dictate mathematical thinking<sup>[43]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">IEPs and 504 Plans</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individualized Education Program (IEP)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Eligibility:</strong> Under IDEA for students with significant educational impact<sup>[44]</sup></li>
            <li className="mb-2"><strong>Special education services:</strong> Specialized math instruction</li>
            <li className="mb-2"><strong>Measurable goals:</strong> Specific, quantifiable mathematical objectives<sup>[45]</sup></li>
            <li className="mb-2"><strong>Accommodations:</strong> Listed supports and modifications</li>
            <li className="mb-2"><strong>Related services:</strong> May include occupational therapy if motor issues<sup>[46]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">504 Plan</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Eligibility:</strong> Under Section 504 for students with disabilities affecting learning<sup>[47]</sup></li>
            <li className="mb-2"><strong>Accommodations only:</strong> No specialized instruction</li>
            <li className="mb-2"><strong>Easier to qualify:</strong> Broader eligibility than IEP<sup>[48]</sup></li>
            <li className="mb-2"><strong>Examples:</strong> Calculator use, extended time, reduced assignments</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Supporting Executive Function</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Math notebooks:</strong> Organized reference of procedures and formulas<sup>[49]</sup></li>
            <li className="mb-2"><strong>Color-coding:</strong> Different colors for different operations or concepts</li>
            <li className="mb-2"><strong>Checklists:</strong> Steps for multi-step problems<sup>[50]</sup></li>
            <li className="mb-2"><strong>Workspace organization:</strong> Clear, uncluttered work area</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Metacognitive Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Think-alouds:</strong> Model thinking process explicitly<sup>[51]</sup></li>
            <li className="mb-2"><strong>Self-questioning:</strong> "Does this answer make sense?"</li>
            <li className="mb-2"><strong>Error monitoring:</strong> Checking own work systematically<sup>[52]</sup></li>
            <li className="mb-2"><strong>Strategy selection:</strong> Choosing appropriate problem-solving approaches</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Managing Math Anxiety</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reducing Anxiety</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Growth mindset:</strong> Emphasize that math ability can improve with practice<sup>[53]</sup></li>
            <li className="mb-2"><strong>Low-pressure practice:</strong> Games and activities without grades</li>
            <li className="mb-2"><strong>Success experiences:</strong> Ensure tasks at appropriate level<sup>[54]</sup></li>
            <li className="mb-2"><strong>Relaxation techniques:</strong> Deep breathing before math tasks</li>
            <li className="mb-2"><strong>Reframe negative thoughts:</strong> Challenge "I can't do math" thinking<sup>[55]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Test Anxiety Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Practice tests:</strong> Familiarize with format in low-stakes setting<sup>[56]</sup></li>
            <li className="mb-2"><strong>Testing accommodations:</strong> Extended time, separate room</li>
            <li className="mb-2"><strong>Positive self-talk:</strong> Affirmations before tests<sup>[57]</sup></li>
            <li className="mb-2"><strong>Test preparation:</strong> Organized study strategies</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Home Support Strategies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creating a Math-Friendly Home</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Math in daily life:</strong> Cooking, shopping, games involve math<sup>[58]</sup></li>
            <li className="mb-2"><strong>Math games:</strong> Board games, card games building number sense</li>
            <li className="mb-2"><strong>Positive attitude:</strong> Avoid saying "I'm bad at math"<sup>[59]</sup></li>
            <li className="mb-2"><strong>Patience and support:</strong> Celebrate effort and progress</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Homework Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Structured time:</strong> Consistent homework routine<sup>[60]</sup></li>
            <li className="mb-2"><strong>Break into chunks:</strong> Short sessions with breaks</li>
            <li className="mb-2"><strong>Manipulatives at home:</strong> Blocks, coins for concrete practice<sup>[61]</sup></li>
            <li className="mb-2"><strong>Communication with teacher:</strong> Share what works at home</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Tutoring and Specialized Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding a Math Tutor</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Qualifications:</strong> Experience with learning disabilities<sup>[62]</sup></li>
            <li className="mb-2"><strong>Approach:</strong> Uses evidence-based, explicit instruction</li>
            <li className="mb-2"><strong>Individualized:</strong> Tailors instruction to student's needs<sup>[63]</sup></li>
            <li className="mb-2"><strong>Frequency:</strong> 2-3 times per week most effective</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[2] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[3] Gersten, R., Chard, D. J., Jayanthi, M., Baker, S. K., Morphy, P., & Flojo, J. (2009). "Mathematics instruction for students with learning disabilities." <em>Review of Educational Research</em>, 79(3), 1202-1242.</p>
          <p>[4] Archer, A. L., & Hughes, C. A. (2011). <em>Explicit instruction: Effective and efficient teaching</em>. Guilford Press.</p>
          <p>[5] Fuchs, L. S., Fuchs, D., Powell, S. R., Seethaler, P. M., Cirino, P. T., & Fletcher, J. M. (2008). "Intensive intervention for students with mathematics disabilities." <em>Learning Disability Quarterly</em>, 31(2), 79-92.</p>
          <p>[6] Montague, M. (2008). "Self-regulation strategies to improve mathematical problem solving for students with learning disabilities." <em>Learning Disability Quarterly</em>, 31(1), 37-44.</p>
          <p>[7] Gersten, R., & Chard, D. (1999). "Number sense: Rethinking arithmetic instruction for students with mathematical disabilities." <em>The Journal of Special Education</em>, 33(1), 18-28.</p>
          <p>[8] Griffin, S. (2004). "Building number sense with Number Worlds." <em>Early Childhood Research Quarterly</em>, 19(1), 173-180.</p>
          <p>[9] Siegler, R. S., & Booth, J. L. (2004). "Development of numerical estimation in young children." <em>Child Development</em>, 75(2), 428-444.</p>
          <p>[10] Siegler, R. S., & Ramani, G. B. (2009). "Playing linear number board games—but not circular ones—improves low-income preschoolers' numerical understanding." <em>Journal of Educational Psychology</em>, 101(3), 545-560.</p>
          <p>[11] Witzel, B. S., Mercer, C. D., & Miller, M. D. (2003). "Teaching algebra to students with learning difficulties: An investigation of an explicit instruction model." <em>Learning Disabilities Research & Practice</em>, 18(2), 121-131.</p>
          <p>[12] Miller, S. P., & Hudson, P. J. (2007). "Using evidence-based practices to build mathematics competence related to conceptual, procedural, and declarative knowledge." <em>Learning Disabilities Research & Practice</em>, 22(1), 47-57.</p>
          <p>[13] Bouck, E. C., & Park, J. (2018). "A systematic review of the literature on mathematics manipulatives to support students with disabilities." <em>Education and Treatment of Children</em>, 41(1), 65-106.</p>
          <p>[14] Griffin, S. (2004). "Building number sense with Number Worlds." <em>Early Childhood Research Quarterly</em>, 19(1), 173-180.</p>
          <p>[15] Wright, R. J., Martland, J., & Stafford, A. K. (2006). <em>Early numeracy: Assessment for teaching and intervention</em> (2nd ed.). SAGE Publications.</p>
          <p>[16] Bullock, J., Pierce, S., & McClelland, L. (1989). "TouchMath." <em>Innovative Learning Concepts</em>.</p>
          <p>[17] Jitendra, A. K., & Star, J. R. (2011). "Meeting the needs of students with learning disabilities in inclusive mathematics classrooms." <em>Theory Into Practice</em>, 50(1), 12-19.</p>
          <p>[18] Fuchs, L. S., Fuchs, D., Yazdian, L., & Powell, S. R. (2002). "Enhancing first-grade children's mathematical development with peer-assisted learning strategies." <em>School Psychology Review</em>, 31(4), 569-583.</p>
          <p>[19] Baroody, A. J. (2006). "Why children have difficulties mastering the basic number combinations and how to help them." <em>Teaching Children Mathematics</em>, 13(1), 22-31.</p>
          <p>[20] Burns, M. K., Codding, R. S., Boice, C. H., & Lukito, G. (2010). "Meta-analysis of acquisition and fluency math interventions with instructional and frustration level skills." <em>School Psychology Review</em>, 39(1), 69-83.</p>
          <p>[21] Gersten, R., Jordan, N. C., & Flojo, J. R. (2005). "Early identification and interventions for students with mathematics difficulties." <em>Journal of Learning Disabilities</em>, 38(4), 293-304.</p>
          <p>[22] Fuson, K. C., & Briars, D. J. (1990). "Using a base-ten blocks learning/teaching approach for first-and second-grade place-value and multidigit addition and subtraction." <em>Journal for Research in Mathematics Education</em>, 21(3), 180-206.</p>
          <p>[23] Montague, M., & Dietz, S. (2009). "Evaluating the evidence base for cognitive strategy instruction and mathematical problem solving." <em>Exceptional Children</em>, 75(3), 285-302.</p>
          <p>[24] Jitendra, A. K., Griffin, C. C., Haria, P., Leh, J., Adams, A., & Kaduvettoor, A. (2007). "A comparison of single and multiple strategy instruction on third-grade students' mathematical problem solving." <em>Journal of Educational Psychology</em>, 99(1), 115-127.</p>
          <p>[25] Van Garderen, D., & Montague, M. (2003). "Visual-spatial representation, mathematical problem solving, and students of varying abilities." <em>Learning Disabilities Research & Practice</em>, 18(4), 246-254.</p>
          <p>[26] Kintsch, W., & Greeno, J. G. (1985). "Understanding and solving word arithmetic problems." <em>Psychological Review</em>, 92(1), 109-129.</p>
          <p>[27] Bouck, E. C., & Flanagan, S. (2009). "Assistive technology and mathematics." <em>Journal of Special Education Technology</em>, 24(2), 55-60.</p>
          <p>[28] Fuchs, L. S., Fuchs, D., & Capizzi, A. M. (2005). "Identifying appropriate test accommodations for students with learning disabilities." <em>Focus on Exceptional Children</em>, 37(6), 1-8.</p>
          <p>[29] Calhoon, M. B., & Fuchs, L. S. (2003). "The effects of peer-assisted learning strategies and curriculum-based measurement on the mathematics performance of secondary students with disabilities." <em>Remedial and Special Education</em>, 24(4), 235-245.</p>
          <p>[30] Lewandowski, L. J., Lovett, B. J., & Rogers, C. L. (2008). "Extended time as a testing accommodation for students with reading disabilities." <em>Journal of Psychoeducational Assessment</em>, 26(4), 315-324.</p>
          <p>[31] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[32] Helwig, R., Rozek-Tedesco, M. A., & Tindal, G. (2002). "An oral versus a standard administration of a large-scale mathematics test." <em>The Journal of Special Education</em>, 36(1), 39-47.</p>
          <p>[33] Strickland, T. K., & Maccini, P. (2010). "Strategies for teaching algebra to students with learning disabilities." <em>Intervention in School and Clinic</em>, 46(1), 38-45.</p>
          <p>[34] Witzel, B. S., Riccomini, P. J., & Schneider, E. (2008). "Implementing CRA with secondary students with learning disabilities in mathematics." <em>Intervention in School and Clinic</em>, 43(5), 270-276.</p>
          <p>[35] Thurlow, M. L., Lazarus, S. S., Thompson, S. J., & Morse, A. B. (2005). <em>State policies on assessment participation and accommodations for students with disabilities</em>. National Center on Educational Outcomes.</p>
          <p>[36] Ketterlin-Geller, L. R., & Yovanoff, P. (2009). "Diagnostic assessments in mathematics to support instructional decision making." <em>Practical Assessment, Research, and Evaluation</em>, 14(1), 16.</p>
          <p>[37] Bouck, E. C., Satsangi, R., Doughty, T. T., & Courtney, W. T. (2014). "Virtual and concrete manipulatives: A comparison of approaches for solving mathematics problems for students with autism spectrum disorder." <em>Journal of Autism and Developmental Disorders</em>, 44(1), 180-193.</p>
          <p>[38] Satsangi, R., & Bouck, E. C. (2015). "Using virtual manipulative instruction to teach the concepts of area and perimeter to secondary students with learning disabilities." <em>Learning Disability Quarterly</em>, 38(3), 174-186.</p>
          <p>[39] Moyer-Packenham, P. S., & Westenskow, A. (2013). "Effects of virtual manipulatives on student achievement and mathematics learning." <em>International Journal of Virtual and Personal Learning Environments</em>, 4(3), 35-50.</p>
          <p>[40] Shin, M., Bryant, D. P., Powell, S. R., Jung, P. G., Ok, M. W., & Hou, F. (2021). "A meta-analysis of single-case research on mathematics interventions for students with learning disabilities." <em>Journal of Learning Disabilities</em>, 54(6), 427-443.</p>
          <p>[41] Ke, F., & Clark, K. M. (2020). "Game-based multimodal representations and mathematical problem solving." <em>International Journal of Science and Mathematics Education</em>, 18(1), 103-122.</p>
          <p>[42] Ives, B. (2007). "Graphic organizers applied to secondary algebra instruction for students with learning disorders." <em>Learning Disabilities Research & Practice</em>, 22(2), 110-118.</p>
          <p>[43] Bryant, D. P., Ok, M. W., Kang, E. Y., Kim, M. K., Lang, R., Bryant, B. R., & Pfannestiel, K. (2015). "Performance of fourth-grade students with learning disabilities on multiplication facts comparing teacher-mediated and technology-mediated interventions." <em>Journal of Behavioral Education</em>, 24(2), 255-272.</p>
          <p>[44] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[45] Yell, M. L., Shriner, J. G., & Katsiyannis, A. (2006). "Individuals with Disabilities Education Improvement Act of 2004." <em>Focus on Exceptional Children</em>, 39(1), 1-24.</p>
          <p>[46] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[47] Section 504 of the Rehabilitation Act of 1973, 29 U.S.C. § 794 (1973).</p>
          <p>[48] Zirkel, P. A. (2009). "What does the law say?" <em>Teaching Exceptional Children</em>, 41(4), 73-74.</p>
          <p>[49] Montague, M. (2008). "Self-regulation strategies to improve mathematical problem solving for students with learning disabilities." <em>Learning Disability Quarterly</em>, 31(1), 37-44.</p>
          <p>[50] Case, L. P., Harris, K. R., & Graham, S. (1992). "Improving the mathematical problem-solving skills of students with learning disabilities." <em>The Journal of Special Education</em>, 26(1), 1-19.</p>
          <p>[51] Lucangeli, D., & Cabrele, S. (2006). "The relationship of metacognitive knowledge, skills and beliefs in children with and without mathematics learning disabilities." In A. Desoete & M. Veenman (Eds.), <em>Metacognition in mathematics education</em> (pp. 103-133).</p>
          <p>[52] Garrett, A. J., Mazzocco, M. M., & Baker, L. (2006). "Development of the metacognitive skills of prediction and evaluation in children with or without math disability." <em>Learning Disabilities Research & Practice</em>, 21(2), 77-88.</p>
          <p>[53] Dweck, C. S. (2006). <em>Mindset: The new psychology of success</em>. Random House.</p>
          <p>[54] Dowker, A., Sarkar, A., & Looi, C. Y. (2016). "Mathematics anxiety: What have we learned in 60 years?" <em>Frontiers in Psychology</em>, 7, 508.</p>
          <p>[55] Ramirez, G., Gunderson, E. A., Levine, S. C., & Beilock, S. L. (2013). "Math anxiety, working memory, and math achievement in early elementary school." <em>Journal of Cognition and Development</em>, 14(2), 187-202.</p>
          <p>[56] Ashcraft, M. H., & Ridley, K. S. (2005). "Math anxiety and its cognitive consequences." In J. I. D. Campbell (Ed.), <em>Handbook of mathematical cognition</em> (pp. 315-327). Psychology Press.</p>
          <p>[57] Rubinsten, O., & Tannock, R. (2010). "Mathematics anxiety in children with developmental dyscalculia." <em>Behavioral and Brain Functions</em>, 6(1), 46.</p>
          <p>[58] LeFevre, J. A., Skwarchuk, S. L., Smith-Chant, B. L., Fast, L., Kamawar, D., & Bisanz, J. (2009). "Home numeracy experiences and children's math performance in the early school years." <em>Canadian Journal of Behavioural Science</em>, 41(2), 55-66.</p>
          <p>[59] Maloney, E. A., Ramirez, G., Gunderson, E. A., Levine, S. C., & Beilock, S. L. (2015). "Intergenerational effects of parents' math anxiety on children's math achievement and anxiety." <em>Psychological Science</em>, 26(9), 1480-1488.</p>
          <p>[60] Cooper, H., Robinson, J. C., & Patall, E. A. (2006). "Does homework improve academic achievement?" <em>Review of Educational Research</em>, 76(1), 1-62.</p>
          <p>[61] Carbonneau, K. J., Marley, S. C., & Selig, J. P. (2013). "A meta-analysis of the efficacy of teaching mathematics with concrete manipulatives." <em>Journal of Educational Psychology</em>, 105(2), 380-400.</p>
          <p>[62] Fuchs, L. S., & Fuchs, D. (2001). "Principles for the prevention and intervention of mathematics difficulties." <em>Learning Disabilities Research & Practice</em>, 16(2), 85-95.</p>
          <p>[63] Gersten, R., Beckmann, S., Clarke, B., Foegen, A., Marsh, L., Star, J. R., & Witzel, B. (2009). <em>Assisting students struggling with mathematics: Response to Intervention (RtI) for elementary and middle schools</em>. National Center for Education Evaluation and Regional Assistance.</p>
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
