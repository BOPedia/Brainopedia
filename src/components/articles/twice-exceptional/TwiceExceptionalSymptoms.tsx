import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TwiceExceptionalSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function TwiceExceptionalSymptoms({ setCurrentArticle }: TwiceExceptionalSymptomsProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('twice-exceptional'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Twice-Exceptional
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Twice-Exceptional: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Twice-exceptional students exhibit a complex profile of characteristics reflecting both their 
            areas of exceptional ability and their areas of challenge.<sup>[1]</sup> The interplay between 
            strengths and weaknesses creates unique patterns that can make identification challenging.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive Characteristics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdGhpbmtpbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student thinking"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Uneven Cognitive Profile</h3>
          <p className="mb-4">
            2e students typically demonstrate significant scatter in cognitive abilities, with substantial 
            differences between various cognitive domains.<sup>[3]</sup> Standard deviations between index 
            scores on intelligence tests may exceed 20 or more points.<sup>[4]</sup> This discrepancy often 
            leads to frustration as students are acutely aware of their internal inconsistencies.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Advanced Reasoning Abilities</h3>
          <p className="mb-4">
            Despite challenges in some areas, 2e students often demonstrate exceptional abstract reasoning, 
            complex problem-solving, and ability to see patterns and connections that others miss.<sup>[6]</sup> 
            They may grasp sophisticated concepts quickly while struggling with basic skills.<sup>[7]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Superior Verbal Abilities</h3>
          <p className="mb-4">
            Many 2e students, particularly those with learning disabilities, show remarkably advanced verbal 
            abilities.<sup>[8]</sup> They may have sophisticated vocabularies, engage in complex discussions, 
            and demonstrate mature understanding of abstract concepts through oral communication.<sup>[9]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Weak Processing Speed or Working Memory</h3>
          <p className="mb-4">
            Common among 2e students are weaknesses in processing speed, working memory, or both.<sup>[10]</sup> 
            These processing difficulties can significantly impact academic performance despite strong reasoning 
            abilities.<sup>[11]</sup> Students may need more time to complete tasks or struggle to hold 
            information in mind while manipulating it.<sup>[12]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Academic Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Inconsistent Performance</h3>
          <p className="mb-4">
            Academic performance varies dramatically depending on task type, format, interest level, and 
            support provided.<sup>[13]</sup> Students may excel on complex projects while failing basic 
            assignments.<sup>[14]</sup> This inconsistency often confuses educators and parents.<sup>[15]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Discrepancy Between Ability and Achievement</h3>
          <p className="mb-4">
            A hallmark characteristic is significant discrepancy between intellectual potential and academic 
            achievement.<sup>[16]</sup> Students may score in the gifted range on intelligence tests while 
            performing at or below grade level academically.<sup>[17]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Strong Oral, Weak Written Expression</h3>
          <p className="mb-4">
            Many 2e students can articulate sophisticated ideas orally but struggle significantly with 
            written expression.<sup>[18]</sup> Writing may be poorly organized, contain spelling and 
            grammar errors, or be extremely brief despite complex thinking.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Difficulties</h3>
          <p className="mb-4">
            2e students with dyslexia demonstrate superior comprehension when material is read to them but 
            struggle with decoding and fluency.<sup>[20]</sup> They may avoid reading despite strong interest 
            in acquiring knowledge.<sup>[21]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mathematical Reasoning vs. Calculation</h3>
          <p className="mb-4">
            Some 2e students excel at mathematical reasoning and problem-solving but struggle with basic 
            calculation, memorization of math facts, or procedural fluency.<sup>[22]</sup> They understand 
            complex mathematical concepts while making computational errors.<sup>[23]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Learning and Work Habits</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd29ya2luZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student working"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty with Organization and Planning</h3>
          <p className="mb-4">
            Executive function weaknesses are common, manifesting as disorganization, difficulty planning 
            multi-step tasks, poor time management, and trouble initiating work.<sup>[24]</sup> Despite 
            understanding what needs to be done, students struggle with execution.<sup>[25]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Attention Issues</h3>
          <p className="mb-4">
            Many 2e students show inconsistent attention—hyperfocusing on topics of interest while appearing 
            inattentive during routine tasks or less interesting material.<sup>[26]</sup> This pattern may 
            be misinterpreted as willful defiance or lack of motivation.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Resistance to Drill and Practice</h3>
          <p className="mb-4">
            2e students often strongly resist repetitive practice and drill work.<sup>[28]</sup> They may 
            refuse to complete assignments they perceive as meaningless or beneath their intellectual 
            capacity.<sup>[29]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Preference for Complexity</h3>
          <p className="mb-4">
            These students typically prefer complex, challenging material over simple, straightforward 
            tasks.<sup>[30]</sup> They may perform better on advanced concepts than on foundational skills.<sup>[31]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Incomplete or Missing Assignments</h3>
          <p className="mb-4">
            Homework and classwork are frequently incomplete or missing, not due to lack of understanding 
            but due to organizational difficulties, forgetting, or frustration with the format.<sup>[32]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social-Emotional Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heightened Sensitivity</h3>
          <p className="mb-4">
            2e students often experience emotional intensity and sensitivity characteristic of gifted 
            individuals.<sup>[33]</sup> They may be particularly sensitive to criticism, perceived injustice, 
            or awareness of their own struggles.<sup>[34]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Perfectionism</h3>
          <p className="mb-4">
            Many 2e students exhibit extreme perfectionism, with unrealistically high standards for themselves.<sup>[35]</sup> 
            When performance doesn't match internal expectations, they may experience significant distress, 
            avoid tasks, or give up entirely.<sup>[36]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Low Self-Esteem</h3>
          <p className="mb-4">
            The discrepancy between abilities and performance often results in poor self-concept and low 
            self-esteem.<sup>[37]</sup> Students may internalize failure, believing they are "lazy" or 
            "stupid" despite evidence of high ability.<sup>[38]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Anxiety and Depression</h3>
          <p className="mb-4">
            Rates of anxiety and depression are elevated among 2e students.<sup>[39]</sup> Academic stress, 
            social difficulties, and awareness of internal discrepancies contribute to emotional distress.<sup>[40]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Frustration and Anger</h3>
          <p className="mb-4">
            Frustration with their inability to demonstrate what they know may manifest as anger, irritability, 
            or behavioral outbursts.<sup>[41]</sup> Students may become defensive when challenged in areas 
            of weakness.<sup>[42]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Difficulties</h3>
          <p className="mb-4">
            Peer relationships can be challenging due to both giftedness (different interests, intensity) 
            and disability (social skills deficits, communication difficulties).<sup>[43]</sup> Students may 
            feel they don't fit in anywhere.<sup>[44]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral Characteristics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Underachievement</h3>
          <p className="mb-4">
            Many 2e students underachieve, performing significantly below their potential.<sup>[45]</sup> 
            Underachievement may be a coping mechanism to avoid failure or reduce discrepancy between 
            performance expectations and outcomes.<sup>[46]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Procrastination</h3>
          <p className="mb-4">
            Procrastination is common, stemming from perfectionism, executive function weaknesses, anxiety 
            about performance, or avoidance of difficult tasks.<sup>[47]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Argumentativeness</h3>
          <p className="mb-4">
            2e students may appear argumentative or oppositional, particularly when asked to complete tasks 
            they find difficult or meaningless.<sup>[48]</sup> This behavior often represents frustration 
            rather than defiance.<sup>[49]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Class Clown Behavior</h3>
          <p className="mb-4">
            Some 2e students use humor to deflect from academic struggles or to gain peer acceptance.<sup>[50]</sup> 
            Disruptive behavior may mask learning difficulties.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Withdrawal or Avoidance</h3>
          <p className="mb-4">
            Others respond to challenges by withdrawing, avoiding participation, or appearing passive and 
            uninvolved.<sup>[52]</sup> This response may indicate anxiety or depression.<sup>[53]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Specific Disability Patterns</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGdyb3VwfGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Students in group"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gifted with Dyslexia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Superior oral comprehension and vocabulary<sup>[54]</sup></li>
            <li className="mb-2">Slow, labored reading despite high intelligence</li>
            <li className="mb-2">Excellent listening comprehension</li>
            <li className="mb-2">Creative spelling that demonstrates understanding of concepts despite errors<sup>[55]</sup></li>
            <li className="mb-2">Strong visualization and spatial reasoning<sup>[56]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gifted with Dysgraphia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Significant gap between oral and written expression<sup>[57]</sup></li>
            <li className="mb-2">Illegible or extremely slow handwriting</li>
            <li className="mb-2">Difficulty organizing thoughts on paper despite clear oral articulation<sup>[58]</sup></li>
            <li className="mb-2">Avoidance of writing tasks</li>
            <li className="mb-2">Fatigue and frustration with handwriting<sup>[59]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gifted with ADHD</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Hyperfocus on areas of interest, inattention to other tasks<sup>[60]</sup></li>
            <li className="mb-2">High energy and intensity</li>
            <li className="mb-2">Impulsive responses that may be insightful but poorly timed<sup>[61]</sup></li>
            <li className="mb-2">Difficulty with sustained attention except in preferred activities</li>
            <li className="mb-2">Restlessness during routine or unstimulating tasks<sup>[62]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gifted with Autism Spectrum Disorder</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Advanced knowledge in specific interest areas<sup>[63]</sup></li>
            <li className="mb-2">Difficulty with social communication despite strong vocabulary<sup>[64]</sup></li>
            <li className="mb-2">Preference for routine and structure</li>
            <li className="mb-2">Intense, narrow interests that may be advanced for age<sup>[65]</sup></li>
            <li className="mb-2">Difficulty with perspective-taking despite advanced reasoning<sup>[66]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Compensatory Strategies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Using Strengths to Compensate</h3>
          <p className="mb-4">
            2e students develop sophisticated compensatory strategies, using strong reasoning to work around 
            basic skill deficits.<sup>[67]</sup> They may memorize entire passages to mask reading difficulties 
            or use elaborate calculation strategies to avoid memorizing math facts.<sup>[68]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Technology Use</h3>
          <p className="mb-4">
            Many gravitate toward technology as a compensatory tool, using spell-check, calculators, or 
            speech-to-text software to bypass areas of weakness.<sup>[69]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Avoidance Strategies</h3>
          <p className="mb-4">
            Students may develop avoidance behaviors including disruptive behavior, asking to leave class, 
            claiming illness, or simply refusing to attempt difficult tasks.<sup>[70]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Red Flags for Identification</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Significant Scatter</h3>
          <p className="mb-4">
            Large discrepancies between different cognitive abilities, between ability and achievement, or 
            between different academic subjects suggest possible twice-exceptionality.<sup>[71]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Inconsistent Performance</h3>
          <p className="mb-4">
            When a student demonstrates exceptional understanding on some tasks while failing others that 
            should be easier, 2e should be considered.<sup>[72]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Behavioral Issues in Bright Students</h3>
          <p className="mb-4">
            When clearly intelligent students exhibit behavior problems, underachieve, or seem unmotivated, 
            underlying learning difficulties may be present.<sup>[73]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Complaints About School</h3>
          <p className="mb-4">
            Students who frequently complain that school is "boring" while also struggling academically may 
            be experiencing the frustration of twice-exceptionality.<sup>[74]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Important Recognition:</h3>
            <div className="text-sm">
              <p>
                The characteristics of twice-exceptionality are complex and often contradictory, making 
                identification challenging.<sup>[75]</sup> Understanding that strengths and weaknesses coexist 
                and interact in unique ways is essential for proper identification and support.<sup>[76]</sup> 
                No single characteristic defines twice-exceptionality; rather, it's the overall pattern of 
                exceptional abilities alongside significant challenges that matters.<sup>[77]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[2] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[3] Assouline, S. G., Foley Nicpon, M., & Whiteman, C. (2010). "Cognitive and psychosocial characteristics of gifted students with written language disability." <em>Gifted Child Quarterly</em>, 54(2), 102-115.</p>
          <p>[4] Silverman, L. K. (2009). "The measurement of giftedness." In L. V. Shavinina (Ed.), <em>International handbook on giftedness</em> (pp. 947-970). Springer.</p>
          <p>[5] Vespi, L., & Yewchuk, C. (1992). "A phenomenological study of the social/emotional characteristics of gifted learning disabled children." <em>Journal for the Education of the Gifted</em>, 16(1), 55-72.</p>
          <p>[6] Hannah, C. L., & Shore, B. M. (1995). "Metacognition and high intellectual ability: Insights from the study of learning-disabled gifted students." <em>Gifted Child Quarterly</em>, 39(2), 95-109.</p>
          <p>[7] Yssel, N., Prater, M. A., & Smith, D. (2010). "How can such a smart kid not get it? Finding the right fit for twice-exceptional students in our schools." <em>Gifted Child Today</em>, 33(1), 54-61.</p>
          <p>[8] Assouline, S. G., & Whiteman, C. S. (2011). "Twice-exceptionality: Implications for school psychologists in the post-IDEA 2004 era." <em>Journal of Applied School Psychology</em>, 27(4), 380-402.</p>
          <p>[9] Reis, S. M., & Colbert, R. (2004). "Counseling needs of academically talented students with learning disabilities." <em>Professional School Counseling</em>, 8(2), 156-167.</p>
          <p>[10] Silverman, L. K. (2009). "The two-edged sword of compensation: How the gifted cope with learning disabilities." <em>Gifted Education International</em>, 25(2), 115-130.</p>
          <p>[11] McCoach, D. B., Kehle, T. J., Bray, M. A., & Siegle, D. (2001). "Best practices in the identification of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 403-411.</p>
          <p>[12] Lovett, B. J., & Lewandowski, L. J. (2006). "Gifted students with learning disabilities: Who are they?" <em>Journal of Learning Disabilities</em>, 39(6), 515-527.</p>
          <p>[13] Baum, S. M., Cooper, C. R., & Neu, T. W. (2001). "Dual differentiation: An approach for meeting the curricular needs of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 477-490.</p>
          <p>[14] Beckley, D. (1998). "Gifted and learning disabled: Twice exceptional students." <em>National Research Center on the Gifted and Talented Newsletter</em>, Spring, 1-3.</p>
          <p>[15] Nielsen, M. E. (2002). "Gifted students with learning disabilities: Recommendations for identification and programming." <em>Exceptionality</em>, 10(2), 93-111.</p>
          <p>[16] Brody, L. E., & Mills, C. J. (1997). "Gifted children with learning disabilities: A review of the issues." <em>Journal of Learning Disabilities</em>, 30(3), 282-296.</p>
          <p>[17] Ruban, L. M., & Reis, S. M. (2005). "Identification and assessment of gifted students with learning disabilities." <em>Theory Into Practice</em>, 44(2), 115-124.</p>
          <p>[18] Assouline, S. G., Foley Nicpon, M., & Huber, D. H. (2006). "The impact of vulnerabilities and strengths on the academic experiences of twice-exceptional students: A message to school counselors." <em>Professional School Counseling</em>, 10(1), 14-24.</p>
          <p>[19] Weinfeld, R., Barnes-Robinson, L., Jeweler, S., & Shevitz, B. R. (2006). <em>Smart kids with learning difficulties: Overcoming obstacles and realizing potential</em>. Waco, TX: Prufrock Press.</p>
          <p>[20] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties, computer images and the ironies of creativity</em>. Amherst, NY: Prometheus Books.</p>
          <p>[21] Eide, B. L., & Eide, F. F. (2011). <em>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</em>. New York: Hudson Street Press.</p>
          <p>[22] Schwabach, S. B. (1999). "Mathematically gifted students: How can we meet their needs?" In A. L. Costa (Ed.), <em>Developing minds: A resource book for teaching thinking</em> (3rd ed., pp. 496-501). Alexandria, VA: Association for Supervision and Curriculum Development.</p>
          <p>[23] Johnson, D. T., Boyce, L. N., & VanTassel-Baska, J. (1995). "Science curriculum review: Evaluating materials for high-ability learners." <em>Gifted Child Quarterly</em>, 39(1), 36-43.</p>
          <p>[24] Kaufmann, F., Kalbfleisch, M. L., & Castellanos, F. X. (2000). "Attention deficit disorders and gifted students: What do we really know?" <em>National Research Center on the Gifted and Talented</em>.</p>
          <p>[25] Olenchak, F. R., & Reis, S. M. (2002). "Gifted students with learning disabilities." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 177-191). Waco, TX: Prufrock Press.</p>
          <p>[26] Moon, S. M., Zentall, S. S., Grskovic, J. A., Hall, A., & Stormont, M. (2001). "Emotional and social characteristics of boys with AD/HD and giftedness: A comparative case study." <em>Journal for the Education of the Gifted</em>, 24(3), 207-247.</p>
          <p>[27] Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <em>Misdiagnosis and dual diagnoses of gifted children and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[28] Reis, S. M., Burns, D. E., & Renzulli, J. S. (1992). <em>Curriculum compacting: The complete guide to modifying the regular curriculum for high ability students</em>. Mansfield Center, CT: Creative Learning Press.</p>
          <p>[29] King, E. W. (2005). "Addressing the social and emotional needs of twice-exceptional students." <em>Teaching Exceptional Children</em>, 38(1), 16-20.</p>
          <p>[30] Baum, S. M., & Owen, S. V. (2004). <em>To be gifted and learning disabled: Strategies for helping bright students with LD, ADHD, and more</em>. Mansfield Center, CT: Creative Learning Press.</p>
          <p>[31] Coleman, M. R. (2005). "Academic strategies that work for gifted students with learning disabilities." <em>Teaching Exceptional Children</em>, 38(1), 28-32.</p>
          <p>[32] Rayneri, L. J., Gerber, B. L., & Wiley, L. P. (2006). "The relationship between classroom environment and the learning style preferences of gifted middle school students and the impact on levels of performance." <em>Gifted Child Quarterly</em>, 50(2), 104-118.</p>
          <p>[33] Daniels, S., & Piechowski, M. M. (2009). <em>Living with intensity: Understanding the sensitivity, excitability, and emotional development of gifted children, adolescents, and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[34] Sword, L. K. (2000). "Emotional intensity in gifted children." <em>Gifted and Creative Services Australia</em>.</p>
          <p>[35] Schuler, P. A. (2000). "Perfectionism and gifted adolescents." <em>Journal of Secondary Gifted Education</em>, 11(4), 183-196.</p>
          <p>[36] Parker, W. D. (1997). "An empirical typology of perfectionism in academically talented children." <em>American Educational Research Journal</em>, 34(3), 545-562.</p>
          <p>[37] Foley Nicpon, M., Rickels, H., Assouline, S. G., & Richards, A. (2012). "Self-esteem and self-concept examination among gifted students with ADHD." <em>Journal for the Education of the Gifted</em>, 35(3), 220-240.</p>
          <p>[38] McCoach, D. B., & Siegle, D. (2003). "Factors that differentiate underachieving gifted students from high-achieving gifted students." <em>Gifted Child Quarterly</em>, 47(2), 144-154.</p>
          <p>[39] Neihart, M. (2002). "Gifted children and depression." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 93-101). Waco, TX: Prufrock Press.</p>
          <p>[40] Guignard, J. H., & Zenasni, F. (2004). "Les caractéristiques émotionnelles des enfants à haut potentiel." <em>Psychologie Française</em>, 49(3), 305-319.</p>
          <p>[41] Neumeister, K. S., Yssel, N., & Burney, V. H. (2013). "The influence of primary caregivers in fostering success in twice-exceptional children." <em>Gifted Child Quarterly</em>, 57(4), 263-274.</p>
          <p>[42] Trail, B. A. (2011). <em>Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[43] Neihart, M. (2008). "Identifying and providing services to twice exceptional children." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 115-137). New York: Springer.</p>
          <p>[44] Janos, P. M., & Robinson, N. M. (1985). "Psychosocial development in intellectually gifted children." In F. D. Horowitz & M. O'Brien (Eds.), <em>The gifted and talented: Developmental perspectives</em> (pp. 149-195). Washington, DC: American Psychological Association.</p>
          <p>[45] Reis, S. M., & McCoach, D. B. (2000). "The underachievement of gifted students: What do we know and where do we go?" <em>Gifted Child Quarterly</em>, 44(3), 152-170.</p>
          <p>[46] Rimm, S. B. (2008). "Underachievement syndrome: A national epidemic." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 424-443). New York: Springer.</p>
          <p>[47] Ferrari, J. R. (1991). "Compulsive procrastination: Some self-reported characteristics." <em>Psychological Reports</em>, 68(2), 455-458.</p>
          <p>[48] Mendaglio, S. (2003). "Heightened multifaceted sensitivity of gifted students: Implications for counseling." <em>Journal of Secondary Gifted Education</em>, 14(2), 72-82.</p>
          <p>[49] Greene, R. W. (2001). <em>The explosive child: A new approach for understanding and parenting easily frustrated, chronically inflexible children</em>. New York: Harper Collins.</p>
          <p>[50] Delisle, J. R. (1992). <em>Guiding the social and emotional development of gifted youth: A practical guide for educators and counselors</em>. New York: Longman.</p>
          <p>[51] Kearney, K. (1996). "Highly gifted children in full inclusion classrooms." <em>Highly Gifted Children</em>, 12(4), 1-10.</p>
          <p>[52] Peterson, J. S. (2009). "Myth 17: Gifted and talented individuals do not have unique social and emotional needs." <em>Gifted Child Quarterly</em>, 53(4), 280-282.</p>
          <p>[53] Webb, J. T., Meckstroth, E. A., & Tolan, S. S. (1982). <em>Guiding the gifted child: A practical source for parents and teachers</em>. Scottsdale, AZ: Gifted Psychology Press.</p>
          <p>[54] Shaywitz, S. E., Shaywitz, B. A., Pugh, K. R., Fulbright, R. K., Constable, R. T., Mencl, W. E., ... & Gore, J. C. (1998). "Functional disruption in the organization of the brain for reading in dyslexia." <em>Proceedings of the National Academy of Sciences</em>, 95(5), 2636-2641.</p>
          <p>[55] von Károlyi, C., Winner, E., Gray, W., & Sherman, G. F. (2003). "Dyslexia linked to talent: Global visual-spatial ability." <em>Brain and Language</em>, 85(3), 427-431.</p>
          <p>[56] West, T. G. (1991). <em>In the mind's eye: Visual thinkers, gifted people with learning difficulties, computer images, and the ironies of creativity</em>. Buffalo, NY: Prometheus Books.</p>
          <p>[57] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[58] Graham, S., & Weintraub, N. (1996). "A review of handwriting research: Progress and prospects from 1980 to 1994." <em>Educational Psychology Review</em>, 8(1), 7-87.</p>
          <p>[59] Rosenblum, S., Weiss, P. L., & Parush, S. (2003). "Product and process evaluation of handwriting difficulties." <em>Educational Psychology Review</em>, 15(1), 41-81.</p>
          <p>[60] Fugate, C. M., Zentall, S. S., & Gentry, M. (2013). "Creativity and working memory in gifted students with and without characteristics of attention deficit hyperactive disorder." <em>Gifted Child Quarterly</em>, 57(4), 234-246.</p>
          <p>[61] Lovecky, D. V. (2004). <em>Different minds: Gifted children with AD/HD, Asperger syndrome, and other learning deficits</em>. London: Jessica Kingsley Publishers.</p>
          <p>[62] Mullet, D. R., & Rinn, A. N. (2015). "Giftedness and ADHD: Identification, misdiagnosis, and dual diagnosis." <em>Roeper Review</em>, 37(4), 195-207.</p>
          <p>[63] Foley-Nicpon, M., Doobay, A. F., & Assouline, S. G. (2010). "Parent, teacher, and self perceptions of psychosocial functioning in intellectually gifted children and adolescents with autism spectrum disorder." <em>Journal of Autism and Developmental Disorders</em>, 40(8), 1028-1038.</p>
          <p>[64] Neihart, M. (2000). "Gifted children with Asperger's syndrome." <em>Gifted Child Quarterly</em>, 44(4), 222-230.</p>
          <p>[65] Little, C. (2002). "Which is it? Asperger's syndrome or giftedness? Defining the differences." <em>Gifted Child Today</em>, 25(1), 58-63.</p>
          <p>[66] Amend, E. R., Schuler, P., Beaver-Gavin, K., & Beights, R. (2009). "A unique challenge: Sorting out the differences between giftedness and Asperger's disorder." <em>Gifted Child Today</em>, 32(4), 57-63.</p>
          <p>[67] Hannah, C. L., & Shore, B. M. (1995). "Metacognition and high intellectual ability: Insights from the study of learning-disabled gifted students." <em>Gifted Child Quarterly</em>, 39(2), 95-109.</p>
          <p>[68] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[69] Edyburn, D. L. (2004). "2003 in review: A synthesis of the special education technology literature." <em>Journal of Special Education Technology</em>, 19(4), 57-80.</p>
          <p>[70] McWhirter, J. J., McWhirter, B. T., McWhirter, E. H., & McWhirter, R. J. (2007). <em>At-risk youth: A comprehensive response</em> (4th ed.). Belmont, CA: Brooks/Cole.</p>
          <p>[71] Assouline, S. G., & Whiteman, C. S. (2011). "Twice-exceptionality: Implications for school psychologists in the post-IDEA 2004 era." <em>Journal of Applied School Psychology</em>, 27(4), 380-402.</p>
          <p>[72] Beckley, D. (1998). "Gifted and learning disabled: Twice exceptional students." <em>National Research Center on the Gifted and Talented Newsletter</em>, Spring, 1-3.</p>
          <p>[73] Bianco, M., & Leech, N. L. (2010). "Twice-exceptional learners: Effects of teacher preparation and disability labels on gifted referrals." <em>Teacher Education and Special Education</em>, 33(4), 319-334.</p>
          <p>[74] Crepeau-Hobson, M. F., & Bianco, M. (2011). "Identification of gifted students with learning disabilities in a response-to-intervention era: Psychoeducational practice recommendations." <em>Psychology in the Schools</em>, 48(2), 102-113.</p>
          <p>[75] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[76] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[77] Baldwin, L., Baum, S., Pereles, D., & Hughes, C. (2015). "Twice-exceptional learners: The journey toward a shared vision." <em>Gifted Child Today</em>, 38(4), 206-214.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('twice-exceptional'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Twice-Exceptional
        </a>
      </div>
    </article>
  );
}
