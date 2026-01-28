import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TwiceExceptionalDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function TwiceExceptionalDiagnosis({ setCurrentArticle }: TwiceExceptionalDiagnosisProps) {
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
        Twice-Exceptional: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Identifying twice-exceptional students requires comprehensive assessment that captures both 
            exceptional abilities and disabilities.<sup>[1]</sup> The assessment process must look beyond 
            average performance to recognize the masking effects that make 2e identification particularly 
            challenging.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Challenges in Identification</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Nlc3NtZW50JTIwdGVzdGluZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Assessment testing"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Masking Effect</h3>
          <p className="mb-4">
            The primary challenge in identifying 2e students is that strengths and weaknesses mask each other.<sup>[3]</sup> 
            High ability compensates for disability, resulting in average or near-average performance that hides 
            both exceptionalities.<sup>[4]</sup> Students may use superior reasoning to work around basic skill 
            deficits, preventing either the gift or disability from being obvious.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identification Bias</h3>
          <p className="mb-4">
            Teacher and parent expectations often prevent recognition of twice-exceptionality.<sup>[6]</sup> 
            Gifted students are expected to excel consistently, so when they struggle, it's often attributed to 
            lack of effort rather than disability.<sup>[7]</sup> Conversely, students identified with disabilities 
            may not be considered for gifted services.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Single-Exception Identification</h3>
          <p className="mb-4">
            Most identification systems are designed to identify either giftedness or disability, not both.<sup>[9]</sup> 
            Once students are identified with one exceptionality, the other may be overlooked.<sup>[10]</sup> 
            Students may receive services for their disability without gifted programming, or vice versa.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Inconsistent Performance</h3>
          <p className="mb-4">
            The hallmark inconsistency of 2e students complicates identification.<sup>[12]</sup> Performance 
            that varies dramatically across tasks, formats, or time periods may be misinterpreted as motivational 
            issues rather than recognized as a pattern indicating twice-exceptionality.<sup>[13]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Comprehensive Cognitive Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intelligence Testing</h3>
          <p className="mb-4">
            Comprehensive IQ testing is essential for identifying twice-exceptionality.<sup>[14]</sup> The 
            Wechsler scales (WISC-V, WAIS-IV) provide detailed profiles across multiple domains including 
            Verbal Comprehension, Visual Spatial, Fluid Reasoning, Working Memory, and Processing Speed.<sup>[15]</sup> 
            The Stanford-Binet Fifth Edition offers higher ceilings appropriate for identifying profound 
            giftedness alongside disabilities.<sup>[16]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Analyzing Subtest Scatter</h3>
          <p className="mb-4">
            2e students typically show significant scatter among subtests and index scores.<sup>[17]</sup> 
            Discrepancies of 20+ points between highest and lowest index scores are common.<sup>[18]</sup> 
            Large scatter itself can be a red flag for twice-exceptionality, indicating uneven cognitive 
            development.<sup>[19]</sup> Analyzing patterns of strength and weakness provides more insight 
            than overall IQ scores alone.<sup>[20]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Beyond Full Scale IQ</h3>
          <p className="mb-4">
            Full Scale IQ (FSIQ) may be misleading for 2e students when there is significant scatter.<sup>[21]</sup> 
            A moderate FSIQ may mask both superior abilities and significant weaknesses.<sup>[22]</sup> The 
            General Ability Index (GAI), which excludes working memory and processing speed, often better 
            represents reasoning ability in 2e students.<sup>[23]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Nonverbal Intelligence Measures</h3>
          <p className="mb-4">
            Nonverbal tests like the NNAT or Raven's Progressive Matrices can reveal giftedness in students 
            with language-based disabilities.<sup>[24]</sup> These measures reduce the impact of reading, 
            writing, or verbal processing difficulties on ability assessment.<sup>[25]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Achievement Testing</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identifying Discrepancies</h3>
          <p className="mb-4">
            Achievement testing reveals discrepancies between ability and performance that characterize 
            twice-exceptionality.<sup>[26]</sup> Tests like the Woodcock-Johnson IV and WIAT-III assess 
            reading, mathematics, and written expression.<sup>[27]</sup> Significant gaps between cognitive 
            ability and academic achievement suggest learning disabilities even in high-ability students.<sup>[28]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Grade-Level vs. Ability-Level Performance</h3>
          <p className="mb-4">
            2e students may perform at or above grade level while still underperforming relative to their 
            cognitive ability.<sup>[29]</sup> Grade-level performance can mask disabilities when intellectual 
            potential would predict much higher achievement.<sup>[30]</sup> Comparison to intellectual level 
            rather than grade level is critical for 2e identification.<sup>[31]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Above-Level Testing</h3>
          <p className="mb-4">
            Above-level testing using instruments designed for older students can reveal gifts in 2e children 
            whose disabilities depress grade-level achievement.<sup>[32]</sup> Advanced ability may be apparent 
            only when assessment ceiling is raised.<sup>[33]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Specific Learning Disability Assessment</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcmVhZGluZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student reading assessment"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Disability Evaluation</h3>
          <p className="mb-4">
            Comprehensive reading assessment includes phonological awareness, decoding, fluency, vocabulary, 
            and comprehension measures.<sup>[34]</sup> Tests like the TOWRE, CTOPP, and GORT evaluate specific 
            reading skills.<sup>[35]</sup> Gifted students with dyslexia may show superior comprehension when 
            material is read aloud, revealing the discrepancy between decoding and understanding.<sup>[36]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Writing Disability Evaluation</h3>
          <p className="mb-4">
            Written expression assessment should examine both the product and the process of writing.<sup>[37]</sup> 
            Comparing oral and written expression can reveal dysgraphia in gifted students.<sup>[38]</sup> 
            Tests of handwriting speed, spelling, written syntax, and composition provide comprehensive 
            evaluation.<sup>[39]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Math Disability Evaluation</h3>
          <p className="mb-4">
            Mathematical assessment should distinguish between calculation and reasoning abilities.<sup>[40]</sup> 
            Gifted students with dyscalculia may excel at mathematical reasoning while struggling with basic 
            calculation or number facts.<sup>[41]</sup> Evaluation of number sense, calculation fluency, and 
            problem-solving reveals the pattern of strengths and weaknesses.<sup>[42]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">ADHD and Executive Function Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Distinguishing ADHD from Giftedness</h3>
          <p className="mb-4">
            ADHD and giftedness share overlapping characteristics including high energy, intensity, questioning 
            authority, and boredom with routine tasks.<sup>[43]</sup> Comprehensive evaluation must differentiate 
            ADHD from behaviors related to giftedness alone.<sup>[44]</sup> Key differentiators include 
            consistency across settings, impairment in areas of interest, and response to appropriate challenge.<sup>[45]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Rating Scales</h3>
          <p className="mb-4">
            Behavior rating scales completed by multiple observers (parents, teachers, self) provide information 
            about ADHD symptoms across settings.<sup>[46]</sup> Scales like the Conners, BASC, and BRIEF assess 
            attention, hyperactivity/impulsivity, and executive functions.<sup>[47]</sup> Patterns specific to 
            2e students include strong performance in preferred activities alongside impairment in others.<sup>[48]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Performance-Based Executive Function Tests</h3>
          <p className="mb-4">
            Tests of executive function assess planning, organization, inhibition, flexibility, and working 
            memory.<sup>[49]</sup> However, structured testing conditions may not reveal executive function 
            weaknesses apparent in daily life.<sup>[50]</sup> Combining performance tests with behavioral 
            rating scales provides comprehensive assessment.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Continuous Performance Tests</h3>
          <p className="mb-4">
            CPTs measure sustained attention, impulsivity, and response consistency.<sup>[52]</sup> While useful, 
            these tests have limitations with gifted populations who may compensate during brief testing.<sup>[53]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Autism Spectrum Assessment in Gifted Individuals</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Differentiating Autism from Giftedness</h3>
          <p className="mb-4">
            Some gifted characteristics overlap with autism including intense interests, preference for routine, 
            literal thinking, and social difficulties.<sup>[54]</sup> Comprehensive autism evaluation must 
            distinguish autistic features from those related to giftedness alone.<sup>[55]</sup> Key differentiators 
            include qualitative social-communication impairments and restricted, repetitive behaviors.<sup>[56]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Diagnostic Instruments</h3>
          <p className="mb-4">
            Gold-standard autism assessment includes the ADOS-2 (Autism Diagnostic Observation Schedule) and 
            ADI-R (Autism Diagnostic Interview-Revised).<sup>[57]</sup> These instruments may require adaptation 
            for gifted individuals who may mask autistic traits through compensation.<sup>[58]</sup> Clinical 
            judgment considering both autism and giftedness is essential.<sup>[59]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">High-Functioning Autism and Giftedness</h3>
          <p className="mb-4">
            Intellectually gifted individuals with autism present unique assessment challenges.<sup>[60]</sup> 
            Strong cognitive abilities may mask social-communication difficulties in structured settings.<sup>[61]</sup> 
            Assessment should examine social understanding in complex, naturalistic situations where compensation 
            is more difficult.<sup>[62]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social-Emotional and Behavioral Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mental Health Screening</h3>
          <p className="mb-4">
            2e students experience elevated rates of anxiety, depression, and other emotional difficulties.<sup>[63]</sup> 
            Comprehensive assessment should screen for mental health concerns using instruments like the BASC, 
            CBCL, or Beck inventories.<sup>[64]</sup> Understanding the relationship between twice-exceptionality 
            and emotional well-being is important for intervention planning.<sup>[65]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Perfectionism and Self-Esteem</h3>
          <p className="mb-4">
            Assessment should examine perfectionism, self-concept, and self-esteem, which are often problematic 
            in 2e students.<sup>[66]</sup> Discrepancies between students' awareness of their intellectual 
            capacity and their actual performance can severely impact self-perception.<sup>[67]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Behavioral Observations</h3>
          <p className="mb-4">
            Structured observations in multiple settings provide insights into how 2e characteristics manifest 
            in different contexts.<sup>[68]</sup> Observing students in challenging academic work, preferred 
            activities, and social situations reveals patterns of strength and weakness.<sup>[69]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Portfolio and Performance Assessment</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd29ya3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student work portfolio"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Work Samples</h3>
          <p className="mb-4">
            Collections of student work reveal patterns that standardized testing may miss.<sup>[70]</sup> 
            Portfolios should include examples showing both strengths (complex reasoning, creativity) and 
            challenges (writing difficulties, calculation errors).<sup>[71]</sup> The discrepancy between 
            sophisticated thinking and basic skill execution is often apparent in work samples.<sup>[72]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Authentic Performance Tasks</h3>
          <p className="mb-4">
            Complex, open-ended tasks may better reveal gifts than structured assessments, particularly for 
            students whose disabilities affect test performance.<sup>[73]</sup> Projects, presentations, and 
            demonstrations can show advanced abilities that standardized tests don't capture.<sup>[74]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Curriculum-Based Assessment</h3>
          <p className="mb-4">
            Examining performance on grade-level and above-level curriculum provides functional information 
            about students' instructional needs.<sup>[75]</sup> Response to challenging curriculum helps 
            identify both gifts and areas requiring support.<sup>[76]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Interviews and Rating Scales</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Parent Interviews</h3>
          <p className="mb-4">
            Parents provide essential developmental history and observations of abilities and challenges 
            across settings.<sup>[77]</sup> Early development, interests, and behavioral patterns help 
            understand the full picture of twice-exceptionality.<sup>[78]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Teacher Input</h3>
          <p className="mb-4">
            Teachers observe academic performance, work habits, and social-emotional functioning daily.<sup>[79]</sup> 
            Multiple teacher perspectives across different subjects reveal patterns of strength and weakness.<sup>[80]</sup> 
            Training teachers to recognize 2e characteristics improves identification accuracy.<sup>[81]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Student Self-Report</h3>
          <p className="mb-4">
            Older students' perspectives on their experiences, frustrations, and awareness of their abilities 
            provide important insights.<sup>[82]</sup> Self-report measures of academic self-concept, motivation, 
            and learning preferences inform understanding of 2e students.<sup>[83]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gifted Characteristics Checklists</h3>
          <p className="mb-4">
            Rating scales like the SRBCSS (Scales for Rating the Behavioral Characteristics of Superior 
            Students) assess various dimensions of giftedness.<sup>[84]</sup> These tools help identify 
            advanced abilities that may coexist with disabilities.<sup>[85]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assessment Best Practices</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Comprehensive Evaluation</h3>
          <p className="mb-4">
            Best practice requires comprehensive assessment examining cognitive abilities, academic achievement, 
            processing skills, executive functions, social-emotional functioning, and behavioral characteristics.<sup>[86]</sup> 
            No single measure captures the complexity of twice-exceptionality.<sup>[87]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Looking for Scatter and Discrepancies</h3>
          <p className="mb-4">
            Evaluators must actively look for discrepancies within ability tests, between ability and achievement, 
            across academic areas, and between potential and performance.<sup>[88]</sup> Significant scatter 
            itself is diagnostically meaningful for twice-exceptionality.<sup>[89]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Considering Compensation</h3>
          <p className="mb-4">
            Assessment must consider how students compensate for disabilities using their strengths.<sup>[90]</sup> 
            Compensation may mask both the disability (making performance appear adequate) and the gift (requiring 
            excessive effort that disguises advanced ability).<sup>[91]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multiple Methods and Sources</h3>
          <p className="mb-4">
            Using multiple assessment methods (standardized tests, observations, work samples, ratings) and 
            multiple informants (parents, teachers, student) provides comprehensive understanding.<sup>[92]</sup> 
            Triangulation of data from various sources increases identification accuracy.<sup>[93]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Qualified Evaluators</h3>
          <p className="mb-4">
            Evaluators should understand both giftedness and disabilities to recognize twice-exceptionality.<sup>[94]</sup> 
            Training in 2e assessment and interpretation is essential for accurate identification.<sup>[95]</sup> 
            Collaboration between gifted specialists and special education professionals optimizes evaluation.<sup>[96]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Interpreting Results</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding the Full Profile</h3>
          <p className="mb-4">
            Interpretation must consider the entire profile of strengths and weaknesses rather than focusing 
            on isolated scores.<sup>[97]</sup> The pattern of abilities reveals more than any single score.<sup>[98]</sup> 
            Both gifts and disabilities must be acknowledged and addressed.<sup>[99]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Avoiding Single-Label Thinking</h3>
          <p className="mb-4">
            Students should not be categorized as "gifted with mild difficulties" or "disabled with some 
            strengths," but recognized as genuinely twice-exceptional with significant abilities and significant 
            challenges.<sup>[100]</sup> Both exceptionalities deserve equal consideration.<sup>[101]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Linking Assessment to Intervention</h3>
          <p className="mb-4">
            Assessment results should directly inform educational planning.<sup>[102]</sup> Understanding 
            specific patterns of strength and weakness guides development of appropriate accommodations, 
            modifications, and differentiation strategies.<sup>[103]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Assessment Principles:</h3>
            <div className="text-sm">
              <p>
                Effective identification of twice-exceptional students requires looking beyond average 
                performance to recognize both exceptional abilities and significant challenges.<sup>[104]</sup> 
                Comprehensive assessment using multiple methods and informed interpretation by knowledgeable 
                professionals are essential for accurate identification and appropriate educational planning.<sup>[105]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[2] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[3] Brody, L. E., & Mills, C. J. (1997). "Gifted children with learning disabilities: A review of the issues." <em>Journal of Learning Disabilities</em>, 30(3), 282-296.</p>
          <p>[4] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[5] Silverman, L. K. (2009). "The two-edged sword of compensation: How the gifted cope with learning disabilities." <em>Gifted Education International</em>, 25(2), 115-130.</p>
          <p>[6] Bianco, M., & Leech, N. L. (2010). "Twice-exceptional learners: Effects of teacher preparation and disability labels on gifted referrals." <em>Teacher Education and Special Education</em>, 33(4), 319-334.</p>
          <p>[7] McBee, M. T. (2006). "A descriptive analysis of referral sources for gifted identification screening by race and socioeconomic status." <em>Journal of Secondary Gifted Education</em>, 17(2), 103-111.</p>
          <p>[8] Crepeau-Hobson, M. F., & Bianco, M. (2011). "Identification of gifted students with learning disabilities in a response-to-intervention era: Psychoeducational practice recommendations." <em>Psychology in the Schools</em>, 48(2), 102-113.</p>
          <p>[9] Nielsen, M. E. (2002). "Gifted students with learning disabilities: Recommendations for identification and programming." <em>Exceptionality</em>, 10(2), 93-111.</p>
          <p>[10] McCoach, D. B., Kehle, T. J., Bray, M. A., & Siegle, D. (2001). "Best practices in the identification of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 403-411.</p>
          <p>[11] Baldwin, L., Baum, S., Pereles, D., & Hughes, C. (2015). "Twice-exceptional learners: The journey toward a shared vision." <em>Gifted Child Today</em>, 38(4), 206-214.</p>
          <p>[12] Beckley, D. (1998). "Gifted and learning disabled: Twice exceptional students." <em>National Research Center on the Gifted and Talented Newsletter</em>, Spring, 1-3.</p>
          <p>[13] Baum, S. M., Cooper, C. R., & Neu, T. W. (2001). "Dual differentiation: An approach for meeting the curricular needs of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 477-490.</p>
          <p>[14] Assouline, S. G., & Whiteman, C. S. (2011). "Twice-exceptionality: Implications for school psychologists in the post-IDEA 2004 era." <em>Journal of Applied School Psychology</em>, 27(4), 380-402.</p>
          <p>[15] Wechsler, D. (2014). <em>Wechsler Intelligence Scale for Children–Fifth Edition</em>. Bloomington, MN: Pearson.</p>
          <p>[16] Roid, G. H. (2003). <em>Stanford-Binet Intelligence Scales, Fifth Edition</em>. Itasca, IL: Riverside Publishing.</p>
          <p>[17] Assouline, S. G., Foley Nicpon, M., & Whiteman, C. (2010). "Cognitive and psychosocial characteristics of gifted students with written language disability." <em>Gifted Child Quarterly</em>, 54(2), 102-115.</p>
          <p>[18] Silverman, L. K. (2009). "The measurement of giftedness." In L. V. Shavinina (Ed.), <em>International handbook on giftedness</em> (pp. 947-970). Springer.</p>
          <p>[19] Kaufman, A. S., Raiford, S. E., & Coalson, D. L. (2016). <em>Intelligent testing with the WISC-V</em>. Hoboken, NJ: John Wiley & Sons.</p>
          <p>[20] Flanagan, D. P., & Kaufman, A. S. (2009). <em>Essentials of WISC-IV assessment</em> (2nd ed.). Hoboken, NJ: Wiley.</p>
          <p>[21] Raiford, S. E., Weiss, L. G., Rolfhus, E., & Coalson, D. (2005). "WISC-IV technical report# 4. General ability index." <em>The Psychological Corporation</em>.</p>
          <p>[22] Lovett, B. J., & Lewandowski, L. J. (2006). "Gifted students with learning disabilities: Who are they?" <em>Journal of Learning Disabilities</em>, 39(6), 515-527.</p>
          <p>[23] Saklofske, D. H., Prifitera, A., Weiss, L. G., Rolfhus, E., & Zhu, J. (2005). "Clinical interpretation of the WISC-IV FSIQ and GAI." In A. Prifitera, D. H. Saklofske, & L. G. Weiss (Eds.), <em>WISC-IV clinical use and interpretation: Scientist-practitioner perspectives</em> (pp. 33-65). San Diego, CA: Elsevier Academic Press.</p>
          <p>[24] Naglieri, J. A., & Ford, D. Y. (2003). "Addressing underrepresentation of gifted minority children using the Naglieri Nonverbal Ability Test (NNAT)." <em>Gifted Child Quarterly</em>, 47(2), 155-160.</p>
          <p>[25] Lohman, D. F., Korb, K. A., & Lakin, J. M. (2008). "Identifying academically gifted English-language learners using nonverbal tests: A comparison of the Raven, NNAT, and CogAT." <em>Gifted Child Quarterly</em>, 52(4), 275-296.</p>
          <p>[26] Ruban, L. M., & Reis, S. M. (2005). "Identification and assessment of gifted students with learning disabilities." <em>Theory Into Practice</em>, 44(2), 115-124.</p>
          <p>[27] Schrank, F. A., McGrew, K. S., & Mather, N. (2014). <em>Woodcock-Johnson IV Tests of Achievement</em>. Rolling Meadows, IL: Riverside.</p>
          <p>[28] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). New York: Guilford Press.</p>
          <p>[29] van Viersen, S., Kroesbergen, E. H., Slot, E. M., & de Bree, E. H. (2014). "High reading skills mask dyslexia in gifted children." <em>Journal of Learning Disabilities</em>, 49(2), 189-199.</p>
          <p>[30] Foley-Nicpon, M., Assouline, S. G., & Colangelo, N. (2013). "Twice-exceptional learners: Who needs to know what?" <em>Gifted Child Quarterly</em>, 57(3), 169-180.</p>
          <p>[31] Schultz, S. M. (2012). "Twice-exceptional students: Achieving brilliance despite learning challenges." <em>Communiqué</em>, 40(8), 19-21.</p>
          <p>[32] Stanley, J. C., & Benbow, C. P. (1986). "Youths who reason exceptionally well mathematically." In R. J. Sternberg & J. E. Davidson (Eds.), <em>Conceptions of giftedness</em> (pp. 361-387). New York: Cambridge University Press.</p>
          <p>[33] Lupkowski-Shoplik, A., Benbow, C. P., Assouline, S. G., & Brody, L. E. (2003). "Talent searches: Meeting the needs of academically talented youth." In N. Colangelo & G. A. Davis (Eds.), <em>Handbook of gifted education</em> (3rd ed., pp. 204-218). Boston: Allyn & Bacon.</p>
          <p>[34] Shaywitz, S. E. (2003). <em>Overcoming dyslexia: A new and complete science-based program for reading problems at any level</em>. New York: Alfred A. Knopf.</p>
          <p>[35] Wagner, R. K., Torgesen, J. K., Rashotte, C. A., & Pearson, N. A. (2013). <em>Comprehensive Test of Phonological Processing–Second Edition (CTOPP-2)</em>. Austin, TX: PRO-ED.</p>
          <p>[36] von Károlyi, C., Winner, E., Gray, W., & Sherman, G. F. (2003). "Dyslexia linked to talent: Global visual-spatial ability." <em>Brain and Language</em>, 85(3), 427-431.</p>
          <p>[37] Berninger, V. W., & May, M. O. (2011). "Evidence-based diagnosis and treatment for specific learning disabilities involving impairments in written and/or oral language." <em>Journal of Learning Disabilities</em>, 44(2), 167-183.</p>
          <p>[38] Weinfeld, R., Barnes-Robinson, L., Jeweler, S., & Shevitz, B. R. (2006). <em>Smart kids with learning difficulties: Overcoming obstacles and realizing potential</em>. Waco, TX: Prufrock Press.</p>
          <p>[39] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[40] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[41] Assouline, S. G., & Lupkowski-Shoplik, A. (2011). <em>Developing math talent: A comprehensive guide to math education for gifted students in elementary and middle school</em> (2nd ed.). Waco, TX: Prufrock Press.</p>
          <p>[42] Mazzocco, M. M., & Myers, G. F. (2003). "Complexities in identifying and defining mathematics learning disability in the primary school-age years." <em>Annals of Dyslexia</em>, 53(1), 218-253.</p>
          <p>[43] Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <em>Misdiagnosis and dual diagnoses of gifted children and adults: ADHD, bipolar, OCD, Asperger's, depression, and other disorders</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[44] Mullet, D. R., & Rinn, A. N. (2015). "Giftedness and ADHD: Identification, misdiagnosis, and dual diagnosis." <em>Roeper Review</em>, 37(4), 195-207.</p>
          <p>[45] Kaufmann, F., Kalbfleisch, M. L., & Castellanos, F. X. (2000). "Attention deficit disorders and gifted students: What do we really know?" <em>National Research Center on the Gifted and Talented</em>.</p>
          <p>[46] DuPaul, G. J., Power, T. J., Anastopoulos, A. D., & Reid, R. (2016). <em>ADHD Rating Scale–5 for children and adolescents: Checklists, norms, and clinical interpretation</em>. New York: Guilford Press.</p>
          <p>[47] Gioia, G. A., Isquith, P. K., Guy, S. C., & Kenworthy, L. (2000). <em>Behavior Rating Inventory of Executive Function: BRIEF</em>. Lutz, FL: Psychological Assessment Resources.</p>
          <p>[48] Moon, S. M., Zentall, S. S., Grskovic, J. A., Hall, A., & Stormont, M. (2001). "Emotional and social characteristics of boys with AD/HD and giftedness: A comparative case study." <em>Journal for the Education of the Gifted</em>, 24(3), 207-247.</p>
          <p>[49] Delis, D. C., Kaplan, E., & Kramer, J. H. (2001). <em>Delis-Kaplan Executive Function System (D-KEFS)</em>. San Antonio, TX: The Psychological Corporation.</p>
          <p>[50] Toplak, M. E., West, R. F., & Stanovich, K. E. (2013). "Practitioner review: Do performance-based measures and ratings of executive function assess the same construct?" <em>Journal of Child Psychology and Psychiatry</em>, 54(2), 131-143.</p>
          <p>[51] McAuley, T., Chen, S., Goos, L., Schachar, R., & Crosbie, J. (2010). "Is the behavior rating inventory of executive function more strongly associated with measures of impairment or executive function?" <em>Journal of the International Neuropsychological Society</em>, 16(3), 495-505.</p>
          <p>[52] Conners, C. K. (2014). <em>Conners Continuous Performance Test 3rd Edition (Conners CPT 3)</em>. Toronto, Canada: Multi-Health Systems.</p>
          <p>[53] Antshel, K. M., Faraone, S. V., Maglione, K., Doyle, A., Fried, R., Seidman, L., & Biederman, J. (2008). "Temporal stability of ADHD in the high-IQ population: Results from the MGH Longitudinal Family Studies of ADHD." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 47(7), 817-825.</p>
          <p>[54] Amend, E. R., Schuler, P., Beaver-Gavin, K., & Beights, R. (2009). "A unique challenge: Sorting out the differences between giftedness and Asperger's disorder." <em>Gifted Child Today</em>, 32(4), 57-63.</p>
          <p>[55] Little, C. (2002). "Which is it? Asperger's syndrome or giftedness? Defining the differences." <em>Gifted Child Today</em>, 25(1), 58-63.</p>
          <p>[56] Neihart, M. (2000). "Gifted children with Asperger's syndrome." <em>Gifted Child Quarterly</em>, 44(4), 222-230.</p>
          <p>[57] Lord, C., Rutter, M., DiLavore, P. C., Risi, S., Gotham, K., & Bishop, S. L. (2012). <em>Autism Diagnostic Observation Schedule–Second Edition (ADOS-2)</em>. Torrance, CA: Western Psychological Services.</p>
          <p>[58] Foley-Nicpon, M., Doobay, A. F., & Assouline, S. G. (2010). "Parent, teacher, and self perceptions of psychosocial functioning in intellectually gifted children and adolescents with autism spectrum disorder." <em>Journal of Autism and Developmental Disorders</em>, 40(8), 1028-1038.</p>
          <p>[59] Melogno, S., Pinto, M. A., & Levi, G. (2012). "Profile of the linguistic and metalinguistic abilities of a gifted child with autism spectrum disorder: A case study." <em>Child Language Teaching and Therapy</em>, 28(2), 157-173.</p>
          <p>[60] Assouline, S. G., Foley Nicpon, M., & Doobay, A. (2009). "Profoundly gifted girls and autism spectrum disorder: A psychometric case study comparison." <em>Gifted Child Quarterly</em>, 53(2), 89-105.</p>
          <p>[61] Saulnier, C. A., & Klin, A. (2007). "Brief report: Social and communication abilities and disabilities in higher functioning individuals with autism and Asperger syndrome: The Vineland and the ADOS." <em>Journal of Autism and Developmental Disorders</em>, 37(4), 788-793.</p>
          <p>[62] Baron-Cohen, S., Wheelwright, S., Skinner, R., Martin, J., & Clubley, E. (2001). "The autism-spectrum quotient (AQ): Evidence from Asperger syndrome/high-functioning autism, males and females, scientists and mathematicians." <em>Journal of Autism and Developmental Disorders</em>, 31(1), 5-17.</p>
          <p>[63] Neihart, M. (2002). "Gifted children and depression." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 93-101). Waco, TX: Prufrock Press.</p>
          <p>[64] Reynolds, C. R., & Kamphaus, R. W. (2015). <em>Behavior Assessment System for Children–Third Edition (BASC-3)</em>. Circle Pines, MN: American Guidance Service.</p>
          <p>[65] Foley Nicpon, M., Rickels, H., Assouline, S. G., & Richards, A. (2012). "Self-esteem and self-concept examination among gifted students with ADHD." <em>Journal for the Education of the Gifted</em>, 35(3), 220-240.</p>
          <p>[66] Schuler, P. A. (2000). "Perfectionism and gifted adolescents." <em>Journal of Secondary Gifted Education</em>, 11(4), 183-196.</p>
          <p>[67] Vespi, L., & Yewchuk, C. (1992). "A phenomenological study of the social/emotional characteristics of gifted learning disabled children." <em>Journal for the Education of the Gifted</em>, 16(1), 55-72.</p>
          <p>[68] Mather, N., & Jaffe, L. (2016). <em>Woodcock-Johnson IV: Reports, recommendations, and strategies</em>. Hoboken, NJ: John Wiley & Sons.</p>
          <p>[69] Callahan, C. M., Tomlinson, C. A., & Pizzat, P. M. (Eds.). (1993). <em>Contexts for promise: Noteworthy practices and innovations in the identification of gifted students</em>. Storrs: University of Connecticut, National Research Center on the Gifted and Talented.</p>
          <p>[70] Shaklee, B. D., Barbour, N. E., Ambrose, R., & Hansford, S. J. (1997). <em>Designing and using portfolios</em>. Boston: Allyn & Bacon.</p>
          <p>[71] Coleman, M. R., & Gallagher, J. J. (1995). "The successful blending of gifted education with middle schools and cooperative learning: Two studies." <em>Journal for the Education of the Gifted</em>, 18(4), 362-384.</p>
          <p>[72] Baum, S. M., & Owen, S. V. (1988). "High ability/learning disabled students: How are they different?" <em>Gifted Child Quarterly</em>, 32(3), 321-326.</p>
          <p>[73] VanTassel-Baska, J. (1998). <em>Excellence in educating gifted and talented learners</em> (3rd ed.). Denver, CO: Love Publishing.</p>
          <p>[74] Van Tassel-Baska, J., Johnson, D., & Avery, L. D. (2002). "Using performance tasks in the identification of economically disadvantaged and minority gifted learners: Findings from Project STAR." <em>Gifted Child Quarterly</em>, 46(2), 110-123.</p>
          <p>[75] Deno, S. L. (2003). "Developments in curriculum-based measurement." <em>The Journal of Special Education</em>, 37(3), 184-192.</p>
          <p>[76] VanTassel-Baska, J. (2008). "What works in curriculum for the gifted." <em>Asia Pacific Education Review</em>, 9(4), 372-383.</p>
          <p>[77] Louis, B., & Lewis, M. (1992). "Parental beliefs about giftedness in young children and their relation to actual ability level." <em>Gifted Child Quarterly</em>, 36(1), 27-31.</p>
          <p>[78] Neumeister, K. S., Yssel, N., & Burney, V. H. (2013). "The influence of primary caregivers in fostering success in twice-exceptional children." <em>Gifted Child Quarterly</em>, 57(4), 263-274.</p>
          <p>[79] Siegle, D., Moore, M., Mann, R. L., & Wilson, H. E. (2010). "Factors that influence in-service and preservice teachers' nominations of students for gifted and talented programs." <em>Journal for the Education of the Gifted</em>, 33(3), 337-360.</p>
          <p>[80] Hansen, J. B., & Feldhusen, J. F. (1994). "Comparison of trained and untrained teachers of gifted students." <em>Gifted Child Quarterly</em>, 38(3), 115-121.</p>
          <p>[81] Bianco, M., Harris, B., Garrison-Wade, D., & Leech, N. (2011). "Gifted girls: Gender bias in gifted referrals." <em>Roeper Review</em>, 33(3), 170-181.</p>
          <p>[82] Feldhusen, J. F., Asher, J. W., & Hoover, S. M. (1984). "Problems in the identification of giftedness, talent, or ability." <em>Gifted Child Quarterly</em>, 28(4), 149-151.</p>
          <p>[83] McCoach, D. B., & Siegle, D. (2003). "Factors that differentiate underachieving gifted students from high-achieving gifted students." <em>Gifted Child Quarterly</em>, 47(2), 144-154.</p>
          <p>[84] Renzulli, J. S., Smith, L. H., White, A. J., Callahan, C. M., Hartman, R. K., & Westberg, K. L. (2002). <em>Scales for Rating the Behavioral Characteristics of Superior Students</em> (rev. ed.). Mansfield Center, CT: Creative Learning Press.</p>
          <p>[85] Pfeiffer, S. I., & Blei, S. (2008). "Gifted identification beyond the IQ test: Rating scales and other assessment procedures." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 177-198). New York: Springer.</p>
          <p>[86] Assouline, S. G., Foley Nicpon, M., & Huber, D. H. (2006). "The impact of vulnerabilities and strengths on the academic experiences of twice-exceptional students: A message to school counselors." <em>Professional School Counseling</em>, 10(1), 14-24.</p>
          <p>[87] Trail, B. A. (2011). <em>Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[88] Reis, S. M., & Colbert, R. (2004). "Counseling needs of academically talented students with learning disabilities." <em>Professional School Counseling</em>, 8(2), 156-167.</p>
          <p>[89] McCallum, R. S., Bell, S. M., Coles, J. T., Miller, K. C., Hopkins, M. B., & Hilton-Prillhart, A. (2013). "A model for screening twice-exceptional students (gifted with learning disabilities) within a response to intervention paradigm." <em>Gifted Child Quarterly</em>, 57(4), 209-222.</p>
          <p>[90] Hannah, C. L., & Shore, B. M. (1995). "Metacognition and high intellectual ability: Insights from the study of learning-disabled gifted students." <em>Gifted Child Quarterly</em>, 39(2), 95-109.</p>
          <p>[91] Silverman, L. K. (2000). "The two-edged sword of compensation: How the gifted cope with learning disabilities." In K. Kay (Ed.), <em>Uniquely gifted: Identifying and meeting the needs of the twice-exceptional student</em> (pp. 153-165). Gilsum, NH: Avocus Publishing.</p>
          <p>[92] Sternberg, R. J., & Zhang, L. (1995). "What do we mean by giftedness? A pentagonal implicit theory." <em>Gifted Child Quarterly</em>, 39(2), 88-94.</p>
          <p>[93] Lohman, D. F. (2009). "Identifying academically talented students: Some general principles, two specific procedures." In L. V. Shavinina (Ed.), <em>International handbook on giftedness</em> (pp. 971-997). Springer.</p>
          <p>[94] Gilman, B. J., Lovecky, D. V., Kearney, K., Peters, D. B., Wasserman, J. D., Silverman, L. K., ... & Rimm, S. B. (2013). "Critical issues in the identification of gifted students with co-existing disabilities: The twice-exceptional." <em>SAGE Open</em>, 3(3).</p>
          <p>[95] Pfeiffer, S. I. (2015). <em>Essentials of gifted assessment</em>. Hoboken, NJ: John Wiley & Sons.</p>
          <p>[96] Foley-Nicpon, M. (2013). "Gifted child quarterly and talent development for gifted students with co-occurring disabilities: Thoughts on twice-exceptionality." <em>Gifted Child Quarterly</em>, 57(4), 271-272.</p>
          <p>[97] Kaufman, A. S. (2009). <em>IQ testing 101</em>. New York: Springer Publishing.</p>
          <p>[98] Flanagan, D. P., Ortiz, S. O., & Alfonso, V. C. (2013). <em>Essentials of cross-battery assessment</em> (3rd ed.). Hoboken, NJ: Wiley.</p>
          <p>[99] Coleman, M. R. (2005). "Academic strategies that work for gifted students with learning disabilities." <em>Teaching Exceptional Children</em>, 38(1), 28-32.</p>
          <p>[100] Yssel, N., Prater, M. A., & Smith, D. (2010). "How can such a smart kid not get it? Finding the right fit for twice-exceptional students in our schools." <em>Gifted Child Today</em>, 33(1), 54-61.</p>
          <p>[101] Baum, S. M., & Owen, S. V. (2004). <em>To be gifted and learning disabled: Strategies for helping bright students with LD, ADHD, and more</em>. Mansfield Center, CT: Creative Learning Press.</p>
          <p>[102] Mather, N., & Wendling, B. J. (2014). <em>Essentials of dyslexia assessment and intervention</em>. Hoboken, NJ: Wiley.</p>
          <p>[103] King, E. W. (2005). "Addressing the social and emotional needs of twice-exceptional students." <em>Teaching Exceptional Children</em>, 38(1), 16-20.</p>
          <p>[104] National Association for Gifted Children. (2013). <em>Position statement: Students with gifts and talents who have learning disabilities</em>. Washington, DC: Author.</p>
          <p>[105] Johnsen, S. K. (2004). <em>Identifying gifted students: A practical guide</em>. Waco, TX: Prufrock Press.</p>
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
