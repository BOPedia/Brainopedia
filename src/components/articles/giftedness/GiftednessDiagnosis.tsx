import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface GiftednessDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function GiftednessDiagnosis({ setCurrentArticle }: GiftednessDiagnosisProps) {
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
        Giftedness: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Identifying giftedness involves multiple assessment methods, including standardized testing, 
            behavioral observations, portfolio reviews, and performance assessments.<sup>[1]</sup> Comprehensive 
            identification practices recognize diverse manifestations of giftedness and aim to reduce bias 
            in the identification process.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Intelligence Testing</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0aW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTY3NDUzNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Educational testing"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Wechsler Intelligence Scales</h3>
          <p className="mb-4">
            The Wechsler scales (WISC-V for children, WAIS-IV for adults) are widely used to assess 
            cognitive abilities.<sup>[3]</sup> These tests provide a Full Scale IQ score and index scores 
            for Verbal Comprehension, Visual Spatial, Fluid Reasoning, Working Memory, and Processing Speed.<sup>[4]</sup> 
            They are particularly useful for identifying patterns of strengths and weaknesses.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Stanford-Binet Intelligence Scales</h3>
          <p className="mb-4">
            The Stanford-Binet (SB5) assesses five factors: Fluid Reasoning, Knowledge, Quantitative 
            Reasoning, Visual-Spatial Processing, and Working Memory.<sup>[6]</sup> It has a higher 
            ceiling than the Wechsler scales, making it particularly appropriate for identifying highly 
            and exceptionally gifted individuals.<sup>[7]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Kaufman Assessment Battery for Children</h3>
          <p className="mb-4">
            The KABC-II assesses Sequential Processing, Simultaneous Processing, Planning, Learning, 
            and Knowledge.<sup>[8]</sup> It was designed to be culturally fair and reduces emphasis on 
            verbal abilities, which may benefit students from diverse backgrounds or with language 
            differences.<sup>[9]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cognitive Abilities Test (CogAT)</h3>
          <p className="mb-4">
            The CogAT measures reasoning abilities in three domains: Verbal, Quantitative, and Nonverbal.<sup>[10]</sup> 
            It's commonly used for group screening in schools and can identify students who may benefit 
            from gifted programming.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Nonverbal Intelligence Tests</h3>
          <p className="mb-4">
            Tests like the Naglieri Nonverbal Ability Test (NNAT) and Raven's Progressive Matrices assess 
            reasoning ability without requiring language skills.<sup>[12]</sup> These instruments help 
            identify gifted students who are English language learners, have language disabilities, or 
            come from culturally diverse backgrounds.<sup>[13]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Achievement Testing</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Standardized Achievement Tests</h3>
          <p className="mb-4">
            Achievement tests measure acquired knowledge and skills in specific academic areas.<sup>[14]</sup> 
            Tests like the Woodcock-Johnson Tests of Achievement and the Wechsler Individual Achievement 
            Test provide detailed information about academic strengths and weaknesses.<sup>[15]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Above-Level Testing</h3>
          <p className="mb-4">
            Above-level testing involves administering tests designed for older students to younger, 
            high-ability students.<sup>[16]</sup> The Talent Search model, pioneered by Julian Stanley, 
            uses the SAT or ACT with middle school students to identify academically talented youth.<sup>[17]</sup> 
            This approach avoids ceiling effects and provides better differentiation among gifted students.<sup>[18]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Curriculum-Based Assessment</h3>
          <p className="mb-4">
            Curriculum-based measures assess mastery of grade-level content and can reveal students working 
            significantly above grade level.<sup>[19]</sup> These assessments help determine appropriate 
            instructional levels and identify needs for acceleration or enrichment.<sup>[20]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Creativity Assessment</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGNyZWF0aXZlJTIwd29ya3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child creative work"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Torrance Tests of Creative Thinking</h3>
          <p className="mb-4">
            The TTCT assesses divergent thinking through verbal and figural activities.<sup>[21]</sup> 
            It measures fluency (number of ideas), flexibility (variety of ideas), originality (uniqueness), 
            and elaboration (detail).<sup>[22]</sup> The TTCT is one of the most widely used creativity 
            assessments in gifted identification.<sup>[23]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Performance-Based Creativity Assessment</h3>
          <p className="mb-4">
            Authentic assessments of creative products—such as writing samples, artwork, musical 
            compositions, or inventions—provide evidence of creative ability.<sup>[24]</sup> Consensual 
            assessment technique, where experts rate products for creativity, offers a valid approach 
            to evaluating creative work.<sup>[25]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creative Behavior Inventories</h3>
          <p className="mb-4">
            Rating scales like the Scales for Rating the Behavioral Characteristics of Superior Students 
            (SRBCSS) Creativity scale assess creative behaviors and dispositions through teacher, parent, 
            or self-ratings.<sup>[26]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Behavioral Observations and Rating Scales</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Teacher Nominations and Ratings</h3>
          <p className="mb-4">
            Teacher observations provide valuable information about student abilities, motivation, and 
            learning characteristics.<sup>[27]</sup> However, teachers may overlook gifted students who 
            are quiet, underachieving, twice-exceptional, or from underrepresented groups.<sup>[28]</sup> 
            Training in gifted characteristics improves teacher identification accuracy.<sup>[29]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Parent Inventories</h3>
          <p className="mb-4">
            Parents provide unique insights into their children's development, interests, and abilities, 
            especially for young children.<sup>[30]</sup> Parent checklists and questionnaires can identify 
            early indicators of giftedness such as advanced language development, exceptional memory, and 
            intense curiosity.<sup>[31]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Nomination and Self-Assessment</h3>
          <p className="mb-4">
            Older students' self-perceptions of abilities and interests contribute to comprehensive 
            assessment.<sup>[32]</sup> Self-nomination can identify students who might be overlooked, 
            particularly those who are culturally diverse or mask their abilities.<sup>[33]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Peer Nomination</h3>
          <p className="mb-4">
            Peers can identify gifted classmates, particularly in areas like leadership, creativity, and 
            social skills that may not be evident through traditional testing.<sup>[34]</sup> Peer 
            nomination is especially useful for identifying gifted students in underrepresented populations.<sup>[35]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Portfolio and Performance Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Portfolios</h3>
          <p className="mb-4">
            Collections of student work over time demonstrate growth, achievement, and thinking processes.<sup>[36]</sup> 
            Portfolios can include writing samples, mathematics problem-solving, scientific investigations, 
            and other evidence of advanced performance.<sup>[37]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Authentic Performance Tasks</h3>
          <p className="mb-4">
            Performance assessments present complex, real-world problems that require application of 
            knowledge and skills.<sup>[38]</sup> These tasks can reveal problem-solving abilities, 
            creativity, and depth of understanding that standardized tests may miss.<sup>[39]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditions and Demonstrations</h3>
          <p className="mb-4">
            For identifying talent in specific domains—such as music, dance, visual arts, or athletics—
            auditions and demonstrations of ability provide essential information.<sup>[40]</sup> Domain 
            experts evaluate technical skill, artistic expression, and potential for development.<sup>[41]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Identification Models and Approaches</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXNzZXNzbWVudHxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student assessment"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multiple Criteria Approach</h3>
          <p className="mb-4">
            Best practice recommends using multiple measures and criteria rather than relying solely on 
            a single test score.<sup>[42]</sup> This approach increases validity and reduces the impact 
            of measurement error or test bias.<sup>[43]</sup> Criteria may include ability tests, achievement 
            tests, creativity measures, and behavioral ratings.<sup>[44]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Universal Screening</h3>
          <p className="mb-4">
            Universal screening involves assessing all students rather than relying on nominations.<sup>[45]</sup> 
            This approach significantly increases identification of gifted students from underrepresented 
            groups who might be overlooked through nomination-based systems.<sup>[46]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Local Norms and Comparative Standards</h3>
          <p className="mb-4">
            Some programs use local norms, identifying students who are gifted relative to their school 
            or district rather than national norms.<sup>[47]</sup> This approach ensures access to 
            advanced programming for high-achieving students in all communities, including those with 
            fewer resources.<sup>[48]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Response to Intervention (RtI) Model</h3>
          <p className="mb-4">
            Some schools apply RtI frameworks to gifted identification, providing increasingly challenging 
            curriculum and observing student responses.<sup>[49]</sup> Students who demonstrate exceptional 
            learning rates and high achievement with advanced content are identified for gifted services.<sup>[50]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dynamic Assessment</h3>
          <p className="mb-4">
            Dynamic assessment evaluates learning potential by teaching new concepts and observing how 
            quickly students acquire them.<sup>[51]</sup> This approach can identify gifted learners whose 
            abilities are masked by limited educational opportunities or cultural differences.<sup>[52]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Special Considerations in Identification</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identifying Twice-Exceptional Students</h3>
          <p className="mb-4">
            Twice-exceptional (2e) students present unique identification challenges as their disabilities 
            may mask their giftedness or vice versa.<sup>[53]</sup> Comprehensive assessment should examine 
            both strengths and challenges, looking for significant scatter in test scores and notable 
            discrepancies between potential and performance.<sup>[54]</sup> Best practice recommends 
            identifying and addressing both the giftedness and the disability.<sup>[55]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Culturally Responsive Identification</h3>
          <p className="mb-4">
            Students from culturally and linguistically diverse backgrounds are significantly underrepresented 
            in gifted programs.<sup>[56]</sup> Culturally responsive identification practices include using 
            nonverbal tests, considering culture-specific expressions of giftedness, providing testing in 
            students' primary language, and training educators about cultural bias.<sup>[57]</sup> Adjusting 
            cut-off scores for underrepresented populations, while controversial, has increased diversity 
            in some programs.<sup>[58]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identifying Young Gifted Children</h3>
          <p className="mb-4">
            Early identification allows for timely intervention and support.<sup>[59]</sup> Appropriate 
            instruments for young children include the WPPSI-IV, Kaufman Assessment Battery for Children, 
            and developmental checklists.<sup>[60]</sup> Parent observations are particularly valuable for 
            identifying giftedness in young children.<sup>[61]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identifying Gifted Students from Low-Income Families</h3>
          <p className="mb-4">
            Poverty can mask giftedness through limited access to enrichment, test-taking experience, and 
            academic vocabulary.<sup>[62]</sup> Effective strategies include universal screening, using 
            local norms, considering growth and learning rate, and looking for potential rather than only 
            developed abilities.<sup>[63]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identifying Underachieving Gifted Students</h3>
          <p className="mb-4">
            Gifted underachievers may perform at or below grade level despite high potential.<sup>[64]</sup> 
            Identification requires looking beyond achievement to ability tests, creativity measures, and 
            evidence of advanced reasoning or problem-solving in areas of interest.<sup>[65]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessment in Specific Talent Domains</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mathematical Talent</h3>
          <p className="mb-4">
            Mathematical talent can be assessed through above-level testing, mathematical reasoning tasks, 
            and problem-solving performance.<sup>[66]</sup> The SAT-M and ACT Math, used in talent searches, 
            effectively identify mathematically talented students.<sup>[67]</sup> Informal assessments might 
            include mathematical Olympiad problems or novel problem-solving tasks.<sup>[68]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Verbal/Linguistic Talent</h3>
          <p className="mb-4">
            Verbal talent assessment includes vocabulary tests, reading comprehension measures, verbal 
            reasoning tasks, and evaluation of writing samples.<sup>[69]</sup> Advanced reading level, 
            sophisticated use of language, and verbal precocity are key indicators.<sup>[70]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Artistic Talent</h3>
          <p className="mb-4">
            Assessment of artistic talent involves portfolio review, auditions, expert evaluation of 
            products, and observation of artistic process.<sup>[71]</sup> Evaluators consider technical 
            skill, creativity, artistic vision, and developmental level.<sup>[72]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Leadership Ability</h3>
          <p className="mb-4">
            Leadership identification uses rating scales, peer nominations, observation in group settings, 
            and evidence of leadership roles and impact.<sup>[73]</sup> Cultural variations in leadership 
            expression should be considered.<sup>[74]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Professional Guidelines and Best Practices</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">NAGC Pre-K–Grade 12 Gifted Programming Standards</h3>
          <p className="mb-4">
            The National Association for Gifted Children provides standards for identification, recommending 
            multiple, valid, and reliable measures; procedures that ensure access for all students; and 
            ongoing assessment to inform instruction.<sup>[75]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Avoiding Common Pitfalls</h3>
          <p className="mb-4">
            Common identification errors include over-reliance on a single measure, using inappropriate 
            cut-off scores, failing to account for measurement error, ignoring evidence of giftedness that 
            doesn't fit expected patterns, and inadequate consideration of cultural and linguistic diversity.<sup>[76]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ethical Considerations</h3>
          <p className="mb-4">
            Ethical assessment practices include using valid and reliable instruments, administering tests 
            according to standardized procedures, interpreting results appropriately, protecting student 
            privacy, and communicating results clearly to parents and students.<sup>[77]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ongoing Assessment</h3>
          <p className="mb-4">
            Identification should not be a one-time event. Ongoing assessment monitors student progress, 
            identifies changing needs, and reveals students whose abilities emerge over time or in response 
            to educational opportunities.<sup>[78]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Important Consideration:</h3>
            <div className="text-sm">
              <p>
                No single test or measure can capture the full complexity of giftedness. Comprehensive 
                identification uses multiple sources of information, considers diverse expressions of 
                ability, and recognizes that giftedness develops over time.<sup>[79]</sup> The goal is 
                to identify students who will benefit from differentiated educational services, not simply 
                to assign labels.<sup>[80]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Pfeiffer, S. I. (2015). <em>Essentials of gifted assessment</em>. Hoboken, NJ: John Wiley & Sons.</p>
          <p>[2] Lohman, D. F. (2005). "The role of nonverbal ability tests in identifying academically gifted students: An aptitude perspective." <em>Gifted Child Quarterly</em>, 49(2), 111-138.</p>
          <p>[3] Wechsler, D. (2014). <em>Wechsler Intelligence Scale for Children–Fifth Edition</em>. Bloomington, MN: Pearson.</p>
          <p>[4] Flanagan, D. P., & Kaufman, A. S. (2009). <em>Essentials of WISC-IV assessment</em> (2nd ed.). Hoboken, NJ: Wiley.</p>
          <p>[5] Silverman, L. K. (2009). "The measurement of giftedness." In L. V. Shavinina (Ed.), <em>International handbook on giftedness</em> (pp. 947-970). Springer Science + Business Media.</p>
          <p>[6] Roid, G. H. (2003). <em>Stanford-Binet Intelligence Scales, Fifth Edition</em>. Itasca, IL: Riverside Publishing.</p>
          <p>[7] Silverman, L. K., Gilman, B. J., & Falk, R. F. (2004). "The case for the Stanford-Binet L-M in gifted assessment." In <em>The SENG Conference Proceedings</em>.</p>
          <p>[8] Kaufman, A. S., & Kaufman, N. L. (2004). <em>Kaufman Assessment Battery for Children, Second Edition</em>. Circle Pines, MN: American Guidance Service.</p>
          <p>[9] Naglieri, J. A., & Ford, D. Y. (2005). "Increasing minority children's participation in gifted classes using the NNAT: A response to Lohman." <em>Gifted Child Quarterly</em>, 49(1), 29-36.</p>
          <p>[10] Lohman, D. F., & Hagen, E. P. (2001). <em>Cognitive Abilities Test (Form 6)</em>. Itasca, IL: Riverside Publishing.</p>
          <p>[11] Lohman, D. F., Korb, K. A., & Lakin, J. M. (2008). "Identifying academically gifted English-language learners using nonverbal tests: A comparison of the Raven, NNAT, and CogAT." <em>Gifted Child Quarterly</em>, 52(4), 275-296.</p>
          <p>[12] Naglieri, J. A. (2003). <em>Naglieri Nonverbal Ability Test–Individual Administration</em>. San Antonio, TX: Harcourt Assessment.</p>
          <p>[13] Naglieri, J. A., & Ford, D. Y. (2003). "Addressing underrepresentation of gifted minority children using the Naglieri Nonverbal Ability Test (NNAT)." <em>Gifted Child Quarterly</em>, 47(2), 155-160.</p>
          <p>[14] Johnsen, S. K. (2004). <em>Identifying gifted students: A practical guide</em>. Waco, TX: Prufrock Press.</p>
          <p>[15] Schrank, F. A., McGrew, K. S., & Mather, N. (2014). <em>Woodcock-Johnson IV Tests of Achievement</em>. Rolling Meadows, IL: Riverside.</p>
          <p>[16] Stanley, J. C. (2000). "Helping students learn only what they don't already know." <em>Psychology, Public Policy, and Law</em>, 6(1), 216-222.</p>
          <p>[17] Stanley, J. C., & Benbow, C. P. (1986). "Youths who reason exceptionally well mathematically." In R. J. Sternberg & J. E. Davidson (Eds.), <em>Conceptions of giftedness</em> (pp. 361-387). New York: Cambridge University Press.</p>
          <p>[18] Lupkowski-Shoplik, A., Benbow, C. P., Assouline, S. G., & Brody, L. E. (2003). "Talent searches: Meeting the needs of academically talented youth." In N. Colangelo & G. A. Davis (Eds.), <em>Handbook of gifted education</em> (3rd ed., pp. 204-218). Boston: Allyn & Bacon.</p>
          <p>[19] Deno, S. L. (2003). "Developments in curriculum-based measurement." <em>The Journal of Special Education</em>, 37(3), 184-192.</p>
          <p>[20] VanTassel-Baska, J. (2008). "What works in curriculum for the gifted." <em>Asia Pacific Education Review</em>, 9(4), 372-383.</p>
          <p>[21] Torrance, E. P. (1974). <em>Torrance Tests of Creative Thinking: Norms-technical manual</em>. Bensenville, IL: Scholastic Testing Service.</p>
          <p>[22] Kim, K. H. (2006). "Can we trust creativity tests? A review of the Torrance Tests of Creative Thinking (TTCT)." <em>Creativity Research Journal</em>, 18(1), 3-14.</p>
          <p>[23] Cramond, B., Matthews-Morgan, J., Bandalos, D., & Zuo, L. (2005). "A report on the 40-year follow-up of the Torrance Tests of Creative Thinking: Alive and well in the new millennium." <em>Gifted Child Quarterly</em>, 49(4), 283-291.</p>
          <p>[24] Baer, J., & McKool, S. S. (2009). "Assessing creativity using the consensual assessment technique." In C. Schreiner (Ed.), <em>Handbook of assessment technologies, methods, and applications in higher education</em> (pp. 65-77). Hershey, PA: IGI Global.</p>
          <p>[25] Amabile, T. M. (1982). "Social psychology of creativity: A consensual assessment technique." <em>Journal of Personality and Social Psychology</em>, 43(5), 997-1013.</p>
          <p>[26] Renzulli, J. S., Smith, L. H., White, A. J., Callahan, C. M., Hartman, R. K., & Westberg, K. L. (2002). <em>Scales for Rating the Behavioral Characteristics of Superior Students</em> (rev. ed.). Mansfield Center, CT: Creative Learning Press.</p>
          <p>[27] Siegle, D., Moore, M., Mann, R. L., & Wilson, H. E. (2010). "Factors that influence in-service and preservice teachers' nominations of students for gifted and talented programs." <em>Journal for the Education of the Gifted</em>, 33(3), 337-360.</p>
          <p>[28] McBee, M. T. (2006). "A descriptive analysis of referral sources for gifted identification screening by race and socioeconomic status." <em>Journal of Secondary Gifted Education</em>, 17(2), 103-111.</p>
          <p>[29] Hansen, J. B., & Feldhusen, J. F. (1994). "Comparison of trained and untrained teachers of gifted students." <em>Gifted Child Quarterly</em>, 38(3), 115-121.</p>
          <p>[30] Louis, B., & Lewis, M. (1992). "Parental beliefs about giftedness in young children and their relation to actual ability level." <em>Gifted Child Quarterly</em>, 36(1), 27-31.</p>
          <p>[31] Silverman, L. K., Chitwood, D. G., & Waters, J. L. (1986). "Young gifted children: Can parents identify giftedness?" <em>Topics in Early Childhood Special Education</em>, 6(1), 23-38.</p>
          <p>[32] Feldhusen, J. F., Asher, J. W., & Hoover, S. M. (1984). "Problems in the identification of giftedness, talent, or ability." <em>Gifted Child Quarterly</em>, 28(4), 149-151.</p>
          <p>[33] Borland, J. H., & Wright, L. (1994). "Identifying young, potentially gifted, economically disadvantaged students." <em>Gifted Child Quarterly</em>, 38(4), 164-171.</p>
          <p>[34] Cramond, B., & Martin, C. E. (1987). "Inservice and preservice teachers' attitudes toward the academically brilliant." <em>Gifted Child Quarterly</em>, 31(1), 15-19.</p>
          <p>[35] Gear, G. H. (1978). "Effects of training on teachers' accuracy in the identification of gifted children." <em>Gifted Child Quarterly</em>, 22(1), 90-97.</p>
          <p>[36] Coleman, M. R., & Gallagher, J. J. (1995). "The successful blending of gifted education with middle schools and cooperative learning: Two studies." <em>Journal for the Education of the Gifted</em>, 18(4), 362-384.</p>
          <p>[37] Shaklee, B. D., Barbour, N. E., Ambrose, R., & Hansford, S. J. (1997). <em>Designing and using portfolios</em>. Boston: Allyn & Bacon.</p>
          <p>[38] Callahan, C. M., Tomlinson, C. A., & Pizzat, P. M. (Eds.). (1993). <em>Contexts for promise: Noteworthy practices and innovations in the identification of gifted students</em>. Storrs: University of Connecticut, National Research Center on the Gifted and Talented.</p>
          <p>[39] VanTassel-Baska, J. (1998). <em>Excellence in educating gifted and talented learners</em> (3rd ed.). Denver, CO: Love Publishing.</p>
          <p>[40] Winner, E., & Martino, G. (2000). "Giftedness in non-academic domains: The case of the visual arts and music." In K. A. Heller, F. J. Mönks, R. J. Sternberg, & R. F. Subotnik (Eds.), <em>International handbook of giftedness and talent</em> (2nd ed., pp. 95-110). Amsterdam: Elsevier.</p>
          <p>[41] Clark, G., & Zimmerman, E. (2004). <em>Teaching talented art students: Principles and practices</em>. New York: Teachers College Press.</p>
          <p>[42] Sternberg, R. J., & Zhang, L. (1995). "What do we mean by giftedness? A pentagonal implicit theory." <em>Gifted Child Quarterly</em>, 39(2), 88-94.</p>
          <p>[43] Lohman, D. F. (2009). "Identifying academically talented students: Some general principles, two specific procedures." In L. V. Shavinina (Ed.), <em>International handbook on giftedness</em> (pp. 971-997). Springer.</p>
          <p>[44] National Association for Gifted Children. (2010). <em>NAGC Pre-K–Grade 12 Gifted Programming Standards</em>. Washington, DC: Author.</p>
          <p>[45] Card, D., & Giuliano, L. (2016). "Universal screening increases the representation of low-income and minority students in gifted education." <em>Proceedings of the National Academy of Sciences</em>, 113(48), 13678-13683.</p>
          <p>[46] McBee, M. T., Peters, S. J., & Miller, E. M. (2016). "The impact of the nomination stage on gifted program identification: A comprehensive psychometric analysis." <em>Gifted Child Quarterly</em>, 60(4), 258-278.</p>
          <p>[47] Frasier, M. M., García, J. H., & Passow, A. H. (1995). <em>A review of assessment issues in gifted education and their implications for identifying gifted minority students</em>. Storrs: University of Connecticut, National Research Center on the Gifted and Talented.</p>
          <p>[48] Peters, S. J., & Engerrand, K. G. (2016). "Equity and excellence: Proactive efforts in the identification of underrepresented students for gifted and talented services." <em>Gifted Child Quarterly</em>, 60(3), 159-171.</p>
          <p>[49] Coleman, M. R., & Hughes, C. E. (2009). "Meeting the needs of gifted students within an RtI framework." <em>Gifted Child Today</em>, 32(3), 14-17.</p>
          <p>[50] Hughes, C. E., & Rollins, K. (2009). "RtI for nurturing giftedness: Implications for the RtI school-based team." <em>Gifted Child Today</em>, 32(3), 31-39.</p>
          <p>[51] Lidz, C. S., & Elliott, J. G. (Eds.). (2000). <em>Dynamic assessment: Prevailing models and applications</em>. Amsterdam: JAI/Elsevier Science.</p>
          <p>[52] Kirschenbaum, R. J. (1998). "Dynamic assessment and its use with underserved gifted and talented populations." <em>Gifted Child Quarterly</em>, 42(3), 140-147.</p>
          <p>[53] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[54] Assouline, S. G., Foley Nicpon, M., & Whiteman, C. (2010). "Cognitive and psychosocial characteristics of gifted students with written language disability." <em>Gifted Child Quarterly</em>, 54(2), 102-115.</p>
          <p>[55] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[56] Ford, D. Y. (2013). <em>Recruiting and retaining culturally different students in gifted education</em>. Waco, TX: Prufrock Press.</p>
          <p>[57] Ford, D. Y., & Grantham, T. C. (2003). "Providing access for culturally diverse gifted students: From deficit to dynamic thinking." <em>Theory Into Practice</em>, 42(3), 217-225.</p>
          <p>[58] Card, D., & Giuliano, L. (2015). "Can universal screening increase the representation of low income and minority students in gifted education?" <em>National Bureau of Economic Research Working Paper</em> No. 21519.</p>
          <p>[59] Robinson, N. M. (2008). "The social world of gifted children and youth." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 33-51). New York: Springer.</p>
          <p>[60] Silverman, L. K., & Kearney, K. (1989). "Parents of the extraordinarily gifted." <em>Advanced Development</em>, 1, 41-56.</p>
          <p>[61] Sankar-DeLeeuw, N. (2004). "Case studies of gifted kindergarten children: Profiles of promise." <em>Roeper Review</em>, 26(4), 192-207.</p>
          <p>[62] Plucker, J. A., & Peters, S. J. (2016). <em>Excellence gaps in education: Expanding opportunities for talented students</em>. Cambridge, MA: Harvard Education Press.</p>
          <p>[63] Olszewski-Kubilius, P., & Clarenbach, J. (2012). "Unlocking emergent talent: Supporting high achievement of low-income, high-ability students." <em>National Association for Gifted Children</em>.</p>
          <p>[64] Reis, S. M., & McCoach, D. B. (2000). "The underachievement of gifted students: What do we know and where do we go?" <em>Gifted Child Quarterly</em>, 44(3), 152-170.</p>
          <p>[65] Siegle, D., & McCoach, D. B. (2018). "Underachievement and the gifted child." In S. I. Pfeiffer, E. Shaunessy-Dedrick, & M. Foley-Nicpon (Eds.), <em>APA handbook of giftedness and talent</em> (pp. 559-573). Washington, DC: American Psychological Association.</p>
          <p>[66] Assouline, S. G., & Lupkowski-Shoplik, A. (2011). <em>Developing math talent: A comprehensive guide to math education for gifted students in elementary and middle school</em> (2nd ed.). Waco, TX: Prufrock Press.</p>
          <p>[67] Brody, L. E., & Stanley, J. C. (2005). "Youths who reason exceptionally well mathematically and/or verbally: Using the MVT:D4 model to develop their talents." In R. J. Sternberg & J. E. Davidson (Eds.), <em>Conceptions of giftedness</em> (2nd ed., pp. 20-37). New York: Cambridge University Press.</p>
          <p>[68] Leikin, R. (2014). "Giftedness and high ability in mathematics." In S. Lerman (Ed.), <em>Encyclopedia of mathematics education</em> (pp. 247-251). Dordrecht: Springer.</p>
          <p>[69] Van Tassel-Baska, J., Johnson, D., & Avery, L. D. (2002). "Using performance tasks in the identification of economically disadvantaged and minority gifted learners: Findings from Project STAR." <em>Gifted Child Quarterly</em>, 46(2), 110-123.</p>
          <p>[70] Halsted, J. W. (2009). <em>Some of my best friends are books: Guiding gifted readers</em> (3rd ed.). Scottsdale, AZ: Great Potential Press.</p>
          <p>[71] Rostan, S. M. (2010). "Studio learning: Motivation, competence, and the development of young art students' talent and creativity." <em>Creativity Research Journal</em>, 22(3), 261-271.</p>
          <p>[72] Hetland, L., Winner, E., Veenema, S., & Sheridan, K. M. (2013). <em>Studio thinking 2: The real benefits of visual arts education</em> (2nd ed.). New York: Teachers College Press.</p>
          <p>[73] Karnes, F. A., & Bean, S. M. (Eds.). (2009). <em>Methods and materials for teaching the gifted</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[74] Matthews, D. J., & Foster, J. F. (2006). "Mystery to mastery: Shifting paradigms in gifted education." <em>Roeper Review</em>, 28(2), 64-69.</p>
          <p>[75] National Association for Gifted Children. (2019). <em>2019 Pre-K–Grade 12 Gifted Programming Standards</em>. Washington, DC: Author.</p>
          <p>[76] Pfeiffer, S. I., & Blei, S. (2008). "Gifted identification beyond the IQ test: Rating scales and other assessment procedures." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 177-198). New York: Springer.</p>
          <p>[77] American Psychological Association. (2017). <em>Ethical principles of psychologists and code of conduct</em>. Washington, DC: Author.</p>
          <p>[78] Johnsen, S. K. (2011). "A comparison of the Texas State Plan for the Education of Gifted/Talented Students and the 2010 NAGC Pre-K–Grade 12 Gifted Programming Standards." <em>Texas Association for the Gifted and Talented Tempo</em>, 32(1), 10-20.</p>
          <p>[79] Sternberg, R. J., Jarvin, L., & Grigorenko, E. L. (2011). <em>Explorations in giftedness</em>. New York: Cambridge University Press.</p>
          <p>[80] Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). "Rethinking giftedness and gifted education: A proposed direction forward based on psychological science." <em>Psychological Science in the Public Interest</em>, 12(1), 3-54.</p>
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
