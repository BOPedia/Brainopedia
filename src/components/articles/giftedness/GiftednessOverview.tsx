import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface GiftednessOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function GiftednessOverview({ setCurrentArticle }: GiftednessOverviewProps) {
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
        Giftedness: Overview
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Giftedness refers to exceptional intellectual ability, creativity, or talent that is significantly 
            above average compared to peers of the same age.<sup>[1]</sup> Gifted individuals demonstrate 
            advanced cognitive processing, rapid learning, and often show exceptional performance in one or 
            more domains.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is Giftedness?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nfGVufDF8fHx8MTY3NDUzNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child learning"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Defining Giftedness</h3>
          <p className="mb-4">
            There is no single universally accepted definition of giftedness. The U.S. Department of Education 
            defines gifted students as those who demonstrate outstanding levels of aptitude or competence in one 
            or more domains.<sup>[3]</sup> The National Association for Gifted Children (NAGC) emphasizes that 
            giftedness is asynchronous development in which advanced cognitive abilities and heightened intensity 
            combine to create unique learning needs.<sup>[4]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Historical Perspectives</h3>
          <p className="mb-4">
            The study of giftedness began in the early 20th century with Lewis Terman's longitudinal research on 
            high-IQ individuals.<sup>[5]</sup> Early conceptions focused primarily on intellectual ability as 
            measured by IQ tests, typically identifying individuals scoring above 130 on standardized tests.<sup>[6]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Modern Conceptualizations</h3>
          <p className="mb-4">
            Contemporary models recognize giftedness as multidimensional. Renzulli's Three-Ring Conception 
            identifies three interlocking components: above-average ability, creativity, and task commitment.<sup>[7]</sup> 
            Gardner's theory of multiple intelligences expanded understanding to include various domains such as 
            linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, 
            and naturalistic intelligence.<sup>[8]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Types and Models of Giftedness</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intellectual Giftedness</h3>
          <p className="mb-4">
            Intellectual giftedness typically refers to exceptional general cognitive ability, often identified 
            through IQ testing.<sup>[9]</sup> These individuals demonstrate advanced reasoning, abstract thinking, 
            problem-solving abilities, and capacity for learning.<sup>[10]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creative-Productive Giftedness</h3>
          <p className="mb-4">
            Renzulli distinguished between "schoolhouse giftedness" (high test scores and academic achievement) 
            and "creative-productive giftedness" (applying abilities to develop original ideas and products).<sup>[11]</sup> 
            Creative giftedness involves originality, fluency, flexibility, and elaboration in thinking.<sup>[12]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Specific Academic Aptitude</h3>
          <p className="mb-4">
            Some individuals show exceptional ability in specific academic areas such as mathematics, science, 
            or language arts while performing at grade level in other subjects.<sup>[13]</sup> Julian Stanley's 
            work with mathematically precocious youth highlighted domain-specific giftedness.<sup>[14]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Talent Development Models</h3>
          <p className="mb-4">
            Gagné's Differentiated Model of Giftedness and Talent (DMGT) distinguishes between natural abilities 
            (gifts) and systematically developed competencies (talents), emphasizing the role of intrapersonal and 
            environmental catalysts in talent development.<sup>[15]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Levels of Giftedness</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdGhpbmtpbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student thinking"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Moderately Gifted</h3>
          <p className="mb-4">
            IQ range approximately 130-144, representing about 2-3% of the population.<sup>[16]</sup> These 
            individuals typically succeed in advanced academic programs with appropriate support.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Highly Gifted</h3>
          <p className="mb-4">
            IQ range approximately 145-159, representing about 0.1-1% of the population.<sup>[17]</sup> These 
            students often require significant curriculum differentiation and may experience social-emotional 
            challenges due to extreme asynchrony.<sup>[18]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Exceptionally Gifted</h3>
          <p className="mb-4">
            IQ 160 and above, representing fewer than 1 in 10,000 individuals.<sup>[19]</sup> These rare 
            individuals face unique challenges in finding appropriate educational placements and intellectual 
            peers, and may experience significant asynchronous development.<sup>[20]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Profoundly Gifted</h3>
          <p className="mb-4">
            IQ 180 and above, representing perhaps 1 in a million.<sup>[21]</sup> These individuals require 
            extremely specialized educational approaches and often face considerable challenges in social-emotional 
            adjustment.<sup>[22]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Special Populations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Twice-Exceptional (2e) Learners</h3>
          <p className="mb-4">
            Twice-exceptional students are both gifted and have one or more disabilities, such as learning 
            disabilities, ADHD, autism, or physical disabilities.<sup>[23]</sup> Their giftedness may mask 
            their disability or vice versa, making identification challenging.<sup>[24]</sup> These students 
            require dual differentiation to address both their advanced abilities and their areas of difficulty.<sup>[25]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Culturally Diverse Gifted Students</h3>
          <p className="mb-4">
            Students from culturally and linguistically diverse backgrounds are underrepresented in gifted 
            programs due to identification bias, differing cultural values, and socioeconomic barriers.<sup>[26]</sup> 
            Non-traditional identification methods and culturally responsive programming are essential to ensure 
            equitable access.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Economically Disadvantaged Gifted Students</h3>
          <p className="mb-4">
            Gifted students from low-income families face barriers including limited access to enrichment 
            opportunities, fewer resources, and lower expectations.<sup>[28]</sup> Early identification and 
            intervention programs like Project EXCITE have shown success in supporting these students.<sup>[29]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gifted Girls and Gender Issues</h3>
          <p className="mb-4">
            Gifted girls, particularly in mathematics and science, may experience stereotype threat, social 
            pressure to hide abilities, and declining achievement in adolescence.<sup>[30]</sup> Supportive 
            environments and mentorship programs can help maintain engagement and achievement.<sup>[31]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Asynchronous Development</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What is Asynchrony?</h3>
          <p className="mb-4">
            Asynchronous development refers to uneven development across different domains—intellectual, physical, 
            social, and emotional.<sup>[32]</sup> A gifted child might have the intellectual capacity of a 
            teenager while having the emotional regulation of a typical age peer, creating internal conflict 
            and external misunderstanding.<sup>[33]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Impact on Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Cognitive-Emotional Gap:</strong> Advanced thinking about complex issues without corresponding emotional maturity<sup>[34]</sup></li>
            <li className="mb-2"><strong>Social Challenges:</strong> Difficulty relating to age peers due to different interests and thinking patterns<sup>[35]</sup></li>
            <li className="mb-2"><strong>Physical Development:</strong> Intellectual advancement may outpace physical coordination<sup>[36]</sup></li>
            <li className="mb-2"><strong>Perfectionism:</strong> High standards combined with executive function limitations can lead to frustration<sup>[37]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overexcitabilities</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGdyb3VwfGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Children in group"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dabrowski's Theory</h3>
          <p className="mb-4">
            Kazimierz Dabrowski proposed that gifted individuals often exhibit heightened responsiveness to 
            stimuli, called overexcitabilities (OEs), across five domains.<sup>[38]</sup> These intensities 
            are viewed as indicators of developmental potential.<sup>[39]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Five Types of Overexcitabilities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Psychomotor:</strong> Surplus of energy, rapid speech, impulsivity, need for movement<sup>[40]</sup></li>
            <li className="mb-2"><strong>Sensual:</strong> Heightened sensory experiences, appreciation for beauty, sensory sensitivities<sup>[41]</sup></li>
            <li className="mb-2"><strong>Intellectual:</strong> Intense curiosity, love of learning, questioning, problem-solving<sup>[42]</sup></li>
            <li className="mb-2"><strong>Imaginational:</strong> Vivid imagination, metaphorical thinking, creativity<sup>[43]</sup></li>
            <li className="mb-2"><strong>Emotional:</strong> Deep feelings, strong attachments, concern for others, empathy<sup>[44]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence and Demographics</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Common is Giftedness?</h3>
          <p className="mb-4">
            Prevalence depends on the definition used. If giftedness is defined as IQ ≥130 (approximately 2 
            standard deviations above the mean), about 2-3% of the population qualifies.<sup>[45]</sup> Broader 
            definitions that include multiple criteria or domain-specific talents identify 10-15% of students.<sup>[46]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Participation in Gifted Programs</h3>
          <p className="mb-4">
            In the United States, approximately 6-8% of students participate in gifted and talented programs, 
            though this varies widely by state and district.<sup>[47]</sup> Significant disparities exist in 
            identification rates across racial, ethnic, and socioeconomic groups.<sup>[48]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gender Distribution</h3>
          <p className="mb-4">
            Overall, giftedness is found equally in males and females.<sup>[49]</sup> However, representation 
            varies by domain, with more boys identified in mathematics and more girls in verbal areas.<sup>[50]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurobiological Basis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Structure and Function</h3>
          <p className="mb-4">
            Neuroimaging studies have found differences in brain structure and function among gifted individuals, 
            including variations in cortical thickness, neural efficiency, and connectivity.<sup>[51]</sup> The 
            prefrontal cortex, associated with executive functions and complex reasoning, shows enhanced 
            development in gifted individuals.<sup>[52]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neural Efficiency Theory</h3>
          <p className="mb-4">
            Research suggests that gifted individuals' brains may work more efficiently, requiring less neural 
            activation to perform cognitive tasks compared to typical peers.<sup>[53]</sup> This efficiency may 
            contribute to faster processing speed and working memory capacity.<sup>[54]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genetic and Environmental Factors</h3>
          <p className="mb-4">
            Twin and adoption studies indicate that intelligence has a strong genetic component, with heritability 
            estimates ranging from 50-80%.<sup>[55]</sup> However, environmental factors—including educational 
            opportunities, family support, and socioeconomic status—significantly influence the development and 
            expression of abilities.<sup>[56]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Implications</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Need for Differentiation</h3>
          <p className="mb-4">
            Gifted students require differentiated curriculum and instruction to meet their learning needs.<sup>[57]</sup> 
            Without appropriate challenge, gifted students may become disengaged, develop poor study habits, or 
            underachieve.<sup>[58]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social-Emotional Considerations</h3>
          <p className="mb-4">
            While early research suggested gifted students were better adjusted than peers, contemporary 
            understanding recognizes that giftedness can create unique social-emotional vulnerabilities.<sup>[59]</sup> 
            Heightened sensitivity, perfectionism, and existential concerns are common among gifted individuals.<sup>[60]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Important Note:</h3>
            <div className="text-sm">
              <p>
                Giftedness is not a guarantee of success or achievement. Without appropriate educational 
                opportunities, support, and personal effort, potential may not be realized.<sup>[61]</sup> 
                Environmental factors, motivation, and persistence play crucial roles in talent development.<sup>[62]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] National Association for Gifted Children. (2019). "What is giftedness?" Retrieved from www.nagc.org</p>
          <p>[2] Silverman, L. K. (2013). <em>Giftedness 101</em>. New York: Springer Publishing.</p>
          <p>[3] U.S. Department of Education. (1993). <em>National excellence: A case for developing America's talent</em>. Washington, DC: Office of Educational Research and Improvement.</p>
          <p>[4] Columbus Group. (1991). Unpublished transcript of the meeting of the Columbus Group. Columbus, OH.</p>
          <p>[5] Terman, L. M. (1925). <em>Genetic studies of genius: Vol. 1. Mental and physical traits of a thousand gifted children</em>. Stanford, CA: Stanford University Press.</p>
          <p>[6] Hollingworth, L. S. (1942). <em>Children above 180 IQ Stanford-Binet: Origin and development</em>. Yonkers-on-Hudson, NY: World Book Company.</p>
          <p>[7] Renzulli, J. S. (1978). "What makes giftedness? Reexamining a definition." <em>Phi Delta Kappan</em>, 60(3), 180-184.</p>
          <p>[8] Gardner, H. (1983). <em>Frames of mind: The theory of multiple intelligences</em>. New York: Basic Books.</p>
          <p>[9] Sternberg, R. J. (2003). "Giftedness according to the theory of successful intelligence." In N. Colangelo & G. A. Davis (Eds.), <em>Handbook of gifted education</em> (3rd ed., pp. 88-99). Boston: Allyn & Bacon.</p>
          <p>[10] Robinson, A., Shore, B. M., & Enersen, D. L. (2007). <em>Best practices in gifted education: An evidence-based guide</em>. Waco, TX: Prufrock Press.</p>
          <p>[11] Renzulli, J. S. (1986). "The three-ring conception of giftedness: A developmental model for creative productivity." In R. J. Sternberg & J. E. Davidson (Eds.), <em>Conceptions of giftedness</em> (pp. 53-92). New York: Cambridge University Press.</p>
          <p>[12] Torrance, E. P. (1974). <em>Torrance Tests of Creative Thinking</em>. Bensenville, IL: Scholastic Testing Service.</p>
          <p>[13] Feldhusen, J. F. (1995). "Talent identification and development in education (TIDE)." <em>Gifted Education International</em>, 10(3), 128-134.</p>
          <p>[14] Stanley, J. C. (1996). "In the beginning: The Study of Mathematically Precocious Youth." In C. P. Benbow & D. Lubinski (Eds.), <em>Intellectual talent: Psychometric and social issues</em> (pp. 225-235). Baltimore: Johns Hopkins University Press.</p>
          <p>[15] Gagné, F. (2004). "Transforming gifts into talents: The DMGT as a developmental theory." <em>High Ability Studies</em>, 15(2), 119-147.</p>
          <p>[16] Gross, M. U. M. (2004). <em>Exceptionally gifted children</em> (2nd ed.). London: RoutledgeFalmer.</p>
          <p>[17] Silverman, L. K. (2009). "The measurement of giftedness." In L. V. Shavinina (Ed.), <em>International handbook on giftedness</em> (pp. 947-970). Springer Science + Business Media.</p>
          <p>[18] Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <em>Misdiagnosis and dual diagnoses of gifted children and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[19] Kearney, K. (1996). "Highly gifted children in full inclusion classrooms." <em>Highly Gifted Children</em>, 12(4), 1-10.</p>
          <p>[20] Gross, M. U. M. (1993). <em>Exceptionally gifted children</em>. London: Routledge.</p>
          <p>[21] Hollingworth, L. S. (1942). <em>Children above 180 IQ Stanford-Binet: Origin and development</em>. Yonkers-on-Hudson, NY: World Book Company.</p>
          <p>[22] Silverman, L. K. (2012). "Asynchronous development: A key to counseling the gifted." In T. L. Cross & J. R. Cross (Eds.), <em>Handbook for counselors serving students with gifts and talents</em> (pp. 261-279). Waco, TX: Prufrock Press.</p>
          <p>[23] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[24] Brody, L. E., & Mills, C. J. (1997). "Gifted children with learning disabilities: A review of the issues." <em>Journal of Learning Disabilities</em>, 30(3), 282-296.</p>
          <p>[25] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[26] Ford, D. Y. (2013). <em>Recruiting and retaining culturally different students in gifted education</em>. Waco, TX: Prufrock Press.</p>
          <p>[27] Naglieri, J. A., & Ford, D. Y. (2003). "Addressing underrepresentation of gifted minority children using the Naglieri Nonverbal Ability Test (NNAT)." <em>Gifted Child Quarterly</em>, 47(2), 155-160.</p>
          <p>[28] Plucker, J. A., & Peters, S. J. (2016). "Excellence gaps in education: Expanding opportunities for talented students." <em>Harvard Education Press</em>.</p>
          <p>[29] Olszewski-Kubilius, P., & Clarenbach, J. (2012). "Unlocking emergent talent: Supporting high achievement of low-income, high-ability students." <em>National Association for Gifted Children</em>.</p>
          <p>[30] Kerr, B. A., & McKay, R. (2014). <em>Smart girls in the 21st century: Understanding talented girls and women</em>. Tucson, AZ: Great Potential Press.</p>
          <p>[31] Reis, S. M. (1998). <em>Work left undone: Choices and compromises of talented females</em>. Mansfield Center, CT: Creative Learning Press.</p>
          <p>[32] Silverman, L. K. (1997). "The construct of asynchronous development." <em>Peabody Journal of Education</em>, 72(3-4), 36-58.</p>
          <p>[33] Morelock, M. J. (1992). "Giftedness: The view from within." <em>Understanding Our Gifted</em>, 4(3), 1, 11-15.</p>
          <p>[34] Alsop, G. (2003). "Asynchrony: Intuitively valid and theoretically reliable." <em>Roeper Review</em>, 25(3), 118-127.</p>
          <p>[35] Janos, P. M., & Robinson, N. M. (1985). "Psychosocial development in intellectually gifted children." In F. D. Horowitz & M. O'Brien (Eds.), <em>The gifted and talented: Developmental perspectives</em> (pp. 149-195). Washington, DC: American Psychological Association.</p>
          <p>[36] Silverman, L. K. (2002). <em>Upside-down brilliance: The visual-spatial learner</em>. Denver, CO: DeLeon Publishing.</p>
          <p>[37] Schuler, P. A. (2000). "Perfectionism and gifted adolescents." <em>Journal of Secondary Gifted Education</em>, 11(4), 183-196.</p>
          <p>[38] Dabrowski, K. (1964). <em>Positive disintegration</em>. Boston: Little, Brown.</p>
          <p>[39] Piechowski, M. M. (2006). "'Mellow out,' they say. If I only could": Intensities and sensitivities of the young and bright." Madison, WI: Yunasa Books.</p>
          <p>[40] Daniels, S., & Piechowski, M. M. (2009). <em>Living with intensity: Understanding the sensitivity, excitability, and emotional development of gifted children, adolescents, and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[41] Lind, S. (2001). "Overexcitability and the gifted." <em>SENG Newsletter</em>, 1(1), 3-6.</p>
          <p>[42] Piechowski, M. M., & Colangelo, N. (1984). "Developmental potential of the gifted." <em>Gifted Child Quarterly</em>, 28(2), 80-88.</p>
          <p>[43] Runco, M. A. (2014). <em>Creativity: Theories and themes: Research, development, and practice</em> (2nd ed.). Amsterdam: Elsevier.</p>
          <p>[44] Sword, L. K. (2000). "Emotional intensity in gifted children." <em>Gifted and Creative Services Australia</em>.</p>
          <p>[45] Pfeiffer, S. I. (2015). <em>Essentials of gifted assessment</em>. Hoboken, NJ: John Wiley & Sons.</p>
          <p>[46] Marland, S. P., Jr. (1972). <em>Education of the gifted and talented: Report to the Congress of the United States by the U.S. Commissioner of Education</em>. Washington, DC: U.S. Government Printing Office.</p>
          <p>[47] National Center for Education Statistics. (2020). "Percentage of public school students enrolled in gifted and talented programs." <em>Digest of Education Statistics</em>.</p>
          <p>[48] Yoon, S. Y., & Gentry, M. (2009). "Racial and ethnic representation in gifted programs: Current status and promising practices." <em>Educational Research Review</em>, 4(3), 205-220.</p>
          <p>[49] Halpern, D. F. (2012). <em>Sex differences in cognitive abilities</em> (4th ed.). New York: Psychology Press.</p>
          <p>[50] Lubinski, D., & Benbow, C. P. (2006). "Study of Mathematically Precocious Youth after 35 years: Uncovering antecedents for the development of math-science expertise." <em>Perspectives on Psychological Science</em>, 1(4), 316-345.</p>
          <p>[51] Shaw, P., Greenstein, D., Lerch, J., Clasen, L., Lenroot, R., Gogtay, N., ... & Giedd, J. (2006). "Intellectual ability and cortical development in children and adolescents." <em>Nature</em>, 440(7084), 676-679.</p>
          <p>[52] Jung, R. E., & Haier, R. J. (2007). "The Parieto-Frontal Integration Theory (P-FIT) of intelligence: Converging neuroimaging evidence." <em>Behavioral and Brain Sciences</em>, 30(2), 135-154.</p>
          <p>[53] Neubauer, A. C., & Fink, A. (2009). "Intelligence and neural efficiency." <em>Neuroscience & Biobehavioral Reviews</em>, 33(7), 1004-1023.</p>
          <p>[54] Haier, R. J., Siegel, B. V., Nuechterlein, K. H., Hazlett, E., Wu, J. C., Paek, J., ... & Buchsbaum, M. S. (1988). "Cortical glucose metabolic rate correlates of abstract reasoning and attention studied with positron emission tomography." <em>Intelligence</em>, 12(2), 199-217.</p>
          <p>[55] Plomin, R., & Deary, I. J. (2015). "Genetics and intelligence differences: Five special findings." <em>Molecular Psychiatry</em>, 20(1), 98-108.</p>
          <p>[56] Tucker-Drob, E. M., & Bates, T. C. (2016). "Large cross-national differences in gene x socioeconomic status interaction on intelligence." <em>Psychological Science</em>, 27(2), 138-149.</p>
          <p>[57] Tomlinson, C. A., Kaplan, S. N., Renzulli, J. S., Purcell, J. H., Leppien, J. H., Burns, D. E., ... & Imbeau, M. B. (2009). <em>The parallel curriculum: A design to develop learner potential and challenge advanced learners</em> (2nd ed.). Thousand Oaks, CA: Corwin Press.</p>
          <p>[58] Reis, S. M., & McCoach, D. B. (2000). "The underachievement of gifted students: What do we know and where do we go?" <em>Gifted Child Quarterly</em>, 44(3), 152-170.</p>
          <p>[59] Neihart, M., Reis, S. M., Robinson, N. M., & Moon, S. M. (Eds.). (2002). <em>The social and emotional development of gifted children: What do we know?</em> Waco, TX: Prufrock Press.</p>
          <p>[60] Webb, J. T., Gore, J. L., Amend, E. R., & DeVries, A. R. (2007). <em>A parent's guide to gifted children</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[61] Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). "Rethinking giftedness and gifted education: A proposed direction forward based on psychological science." <em>Psychological Science in the Public Interest</em>, 12(1), 3-54.</p>
          <p>[62] Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). "The role of deliberate practice in the acquisition of expert performance." <em>Psychological Review</em>, 100(3), 363-406.</p>
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
