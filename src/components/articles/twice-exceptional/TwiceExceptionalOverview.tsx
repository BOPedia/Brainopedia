import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TwiceExceptionalOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function TwiceExceptionalOverview({ setCurrentArticle }: TwiceExceptionalOverviewProps) {
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
        Twice-Exceptional: Overview
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Twice-exceptional (2e) individuals are those who demonstrate both exceptional abilities or talents 
            and one or more disabilities.<sup>[1]</sup> This dual exceptionality creates unique educational, 
            social, and emotional needs that require specialized understanding and support.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is Twice-Exceptionality?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student learning"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Defining Twice-Exceptionality</h3>
          <p className="mb-4">
            The term "twice-exceptional" was coined to describe students who possess both high ability and 
            disability.<sup>[3]</sup> The National Association for Gifted Children defines 2e students as 
            those who demonstrate exceptional capability in one or more domains while also exhibiting learning, 
            developmental, physical, or emotional disabilities.<sup>[4]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Historical Perspective</h3>
          <p className="mb-4">
            Recognition of twice-exceptionality emerged in the 1970s and 1980s as educators observed students 
            with extraordinary talents who also struggled significantly in certain areas.<sup>[5]</sup> Early 
            research by Whitmore documented gifted students with learning disabilities who were often 
            underidentified for both their gifts and disabilities.<sup>[6]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prevalence</h3>
          <p className="mb-4">
            Exact prevalence is difficult to determine due to identification challenges, but research suggests 
            that 2-5% of students may be twice-exceptional.<sup>[7]</sup> Some estimates indicate that 14-20% 
            of gifted students may have a learning disability.<sup>[8]</sup> These students are significantly 
            underrepresented in both gifted programs and special education services.<sup>[9]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Common Combinations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Giftedness with Learning Disabilities</h3>
          <p className="mb-4">
            Many 2e students demonstrate high intellectual ability while experiencing specific learning 
            disabilities in reading (dyslexia), mathematics (dyscalculia), or written expression (dysgraphia).<sup>[10]</sup> 
            These students may excel in verbal reasoning while struggling with basic academic skills.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Giftedness with ADHD</h3>
          <p className="mb-4">
            The combination of giftedness and ADHD is increasingly recognized.<sup>[12]</sup> These students 
            may demonstrate exceptional abilities in areas of interest while exhibiting inattention, 
            impulsivity, or hyperactivity that interferes with consistent performance.<sup>[13]</sup> The 
            overlap in characteristics can complicate identification of both conditions.<sup>[14]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Giftedness with Autism Spectrum Disorder</h3>
          <p className="mb-4">
            Gifted individuals with autism present a complex profile combining exceptional intellectual or 
            creative abilities with social-communication challenges and restricted interests.<sup>[15]</sup> 
            Some demonstrate remarkable talents in specific domains while experiencing significant difficulty 
            with social interaction and adaptive functioning.<sup>[16]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Giftedness with Emotional/Behavioral Disorders</h3>
          <p className="mb-4">
            Some gifted students experience anxiety, depression, OCD, or other emotional disorders.<sup>[17]</sup> 
            The intensity and sensitivity often associated with giftedness may contribute to emotional 
            vulnerability.<sup>[18]</sup> These students require support for both their advanced abilities 
            and mental health needs.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Giftedness with Physical Disabilities</h3>
          <p className="mb-4">
            Students with physical disabilities, sensory impairments, or chronic health conditions can also 
            be gifted.<sup>[20]</sup> These students may face accessibility barriers that mask their 
            abilities or limit opportunities for talent development.<sup>[21]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Paradox of Twice-Exceptionality</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdGhpbmtpbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student thinking"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Masking Effects</h3>
          <p className="mb-4">
            A central challenge in twice-exceptionality is that strengths and weaknesses can mask each other.<sup>[22]</sup> 
            High ability may compensate for disability, resulting in average performance that hides both the 
            giftedness and the disability.<sup>[23]</sup> Alternatively, the disability may be so prominent 
            that gifts go unrecognized.<sup>[24]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Three Identification Patterns</h3>
          <p className="mb-4">
            Baum identified three patterns of 2e identification:<sup>[25]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Identified gifted, disability unrecognized:</strong> Students in gifted programs who struggle but aren't identified for support</li>
            <li className="mb-2"><strong>Identified with disability, giftedness unrecognized:</strong> Students receiving special education without recognition of high potential</li>
            <li className="mb-2"><strong>Neither exceptionality recognized:</strong> Students performing at grade level, with strengths compensating for weaknesses</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Internal Experience</h3>
          <p className="mb-4">
            2e students often experience significant internal conflict between their areas of strength and 
            weakness.<sup>[26]</sup> They may be acutely aware of the gap between their intellectual capacity 
            and their performance, leading to frustration, anxiety, and lowered self-esteem.<sup>[27]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Characteristics of 2e Learners</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cognitive Profile</h3>
          <p className="mb-4">
            2e students typically show significant scatter in cognitive abilities, with substantial differences 
            between their strengths and weaknesses.<sup>[28]</sup> IQ test profiles often reveal marked 
            discrepancies between verbal and performance scores or among different index scores.<sup>[29]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Performance</h3>
          <p className="mb-4">
            Academic performance is often inconsistent and unpredictable.<sup>[30]</sup> Students may 
            demonstrate sophisticated reasoning on complex topics while struggling with basic skills like 
            spelling or calculation.<sup>[31]</sup> Performance may vary significantly depending on interest, 
            format, or support provided.<sup>[32]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social-Emotional Characteristics</h3>
          <p className="mb-4">
            2e students often experience heightened sensitivity, perfectionism, and asynchronous development.<sup>[33]</sup> 
            They may struggle with peer relationships due to both their giftedness and disability.<sup>[34]</sup> 
            Many experience anxiety, particularly related to performance and fear of failure.<sup>[35]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Behavioral Observations</h3>
          <p className="mb-4">
            Common behavioral characteristics include exceptional verbal abilities paired with weak organizational 
            skills, creative problem-solving alongside difficulty with routine tasks, intense interests in 
            specific areas, and resistance to tasks in areas of weakness.<sup>[36]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Challenges Faced by 2e Students</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Identification Difficulties</h3>
          <p className="mb-4">
            2e students are frequently overlooked for both gifted and special education services.<sup>[37]</sup> 
            Traditional identification methods may not capture their unique profile, and educators may focus 
            on either strengths or weaknesses rather than recognizing both.<sup>[38]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Educational Mismatches</h3>
          <p className="mb-4">
            When placed in either gifted or special education programs, 2e students' full range of needs 
            often goes unmet.<sup>[39]</sup> Gifted programs may not provide necessary accommodations, while 
            special education placements may lack appropriate challenge.<sup>[40]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Underachievement</h3>
          <p className="mb-4">
            Many 2e students underachieve, performing below their potential due to frustration, lack of 
            appropriate support, or loss of motivation.<sup>[41]</sup> Underachievement can become a 
            self-perpetuating cycle as students disengage from learning.<sup>[42]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social-Emotional Struggles</h3>
          <p className="mb-4">
            The combination of asynchronous development, perfectionism, and awareness of their discrepant 
            abilities creates significant social-emotional challenges.<sup>[43]</sup> Depression and anxiety 
            are common, particularly in adolescence.<sup>[44]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Misdiagnosis</h3>
          <p className="mb-4">
            Characteristics of giftedness can be misinterpreted as symptoms of ADHD, oppositional behavior, 
            or other disorders.<sup>[45]</sup> Conversely, disabilities may be attributed to laziness or 
            underachievement rather than recognized as genuine impairments.<sup>[46]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths and Abilities</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Students success"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Areas of Excellence</h3>
          <p className="mb-4">
            Despite their challenges, 2e students demonstrate remarkable abilities in their strength areas.<sup>[47]</sup> 
            Many show exceptional creativity, complex problem-solving skills, advanced reasoning, deep knowledge 
            in areas of interest, and unique perspectives.<sup>[48]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Resilience and Persistence</h3>
          <p className="mb-4">
            Many 2e individuals develop significant resilience through navigating their dual exceptionalities.<sup>[49]</sup> 
            They often demonstrate remarkable persistence in pursuing their passions despite obstacles.<sup>[50]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Compensatory Strategies</h3>
          <p className="mb-4">
            2e students frequently develop sophisticated compensatory strategies to work around their 
            challenges.<sup>[51]</sup> These adaptive approaches demonstrate their cognitive flexibility 
            and problem-solving abilities.<sup>[52]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Unique Contributions</h3>
          <p className="mb-4">
            The combination of high ability and different neurological processing can lead to innovative 
            thinking and unique contributions.<sup>[53]</sup> Many successful innovators, artists, and 
            scientists have been twice-exceptional.<sup>[54]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Theoretical Frameworks</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Strength-Based Approach</h3>
          <p className="mb-4">
            Baum, Schader, and Owen advocate for a strength-based approach that focuses on developing talents 
            while providing accommodations for challenges.<sup>[55]</sup> This perspective emphasizes what 
            students can do rather than focusing solely on deficits.<sup>[56]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Talent Development Model</h3>
          <p className="mb-4">
            The talent development framework recognizes that 2e students need both acceleration/enrichment 
            for their gifts and remediation/accommodation for their disabilities.<sup>[57]</sup> Neither 
            aspect should be neglected in favor of the other.<sup>[58]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurodiverse Perspective</h3>
          <p className="mb-4">
            Contemporary neurodiversity frameworks view twice-exceptionality as representing different ways 
            of thinking and learning rather than simply deficits to be remediated.<sup>[59]</sup> This 
            perspective values the unique cognitive profiles of 2e individuals.<sup>[60]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Historical Examples</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Notable Twice-Exceptional Individuals</h3>
          <p className="mb-4">
            Many accomplished individuals are believed to have been twice-exceptional, including Albert Einstein 
            (suspected dyslexia and ADHD), Thomas Edison (learning disabilities), and Temple Grandin (autism).<sup>[61]</sup> 
            These examples demonstrate that twice-exceptionality need not limit achievement when strengths are 
            developed and appropriate support is provided.<sup>[62]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Contemporary Recognition</h3>
          <p className="mb-4">
            Growing awareness of twice-exceptionality has led to better identification and support, though 
            significant challenges remain.<sup>[63]</sup> Advocacy organizations, specialized schools, and 
            research initiatives continue to advance understanding and services for 2e learners.<sup>[64]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Importance of Recognition</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Impact of Identification</h3>
          <p className="mb-4">
            Proper identification of both giftedness and disability is crucial for providing appropriate 
            educational services.<sup>[65]</sup> When only one exceptionality is recognized, students receive 
            incomplete support that fails to address their full range of needs.<sup>[66]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Understanding</h3>
          <p className="mb-4">
            Understanding their twice-exceptionality helps students make sense of their experiences and 
            develop positive identity.<sup>[67]</sup> Many 2e individuals report that learning about 
            twice-exceptionality was transformative in understanding themselves.<sup>[68]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Advocacy and Support</h3>
          <p className="mb-4">
            Recognition enables families and educators to advocate effectively for appropriate services.<sup>[69]</sup> 
            Understanding the unique needs of 2e learners guides development of effective interventions.<sup>[70]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Core Understanding:</h3>
            <div className="text-sm">
              <p>
                Twice-exceptional students are not simply gifted students with disabilities or disabled students 
                with gifts—they are a unique population whose strengths and challenges interact in complex ways.<sup>[71]</sup> 
                Effective support requires addressing both exceptionalities simultaneously through dual 
                differentiation that develops talents while providing necessary accommodations and support.<sup>[72]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] National Education Association. (2006). <em>The twice-exceptional dilemma</em>. Washington, DC: Author.</p>
          <p>[2] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[3] Baldwin, L., Baum, S., Pereles, D., & Hughes, C. (2015). "Twice-exceptional learners: The journey toward a shared vision." <em>Gifted Child Today</em>, 38(4), 206-214.</p>
          <p>[4] National Association for Gifted Children. (2013). <em>Position statement: Students with gifts and talents who have learning disabilities</em>. Washington, DC: Author.</p>
          <p>[5] Brody, L. E., & Mills, C. J. (1997). "Gifted children with learning disabilities: A review of the issues." <em>Journal of Learning Disabilities</em>, 30(3), 282-296.</p>
          <p>[6] Whitmore, J. R. (1980). <em>Giftedness, conflict, and underachievement</em>. Boston: Allyn & Bacon.</p>
          <p>[7] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[8] McCoach, D. B., Kehle, T. J., Bray, M. A., & Siegle, D. (2001). "Best practices in the identification of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 403-411.</p>
          <p>[9] Assouline, S. G., Foley Nicpon, M., & Whiteman, C. (2010). "Cognitive and psychosocial characteristics of gifted students with written language disability." <em>Gifted Child Quarterly</em>, 54(2), 102-115.</p>
          <p>[10] Reis, S. M., & McCoach, D. B. (2002). "Underachievement in gifted students." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 81-91). Waco, TX: Prufrock Press.</p>
          <p>[11] Silverman, L. K. (2009). "The two-edged sword of compensation: How the gifted cope with learning disabilities." <em>Gifted Education International</em>, 25(2), 115-130.</p>
          <p>[12] Foley Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[13] Moon, S. M., Zentall, S. S., Grskovic, J. A., Hall, A., & Stormont, M. (2001). "Emotional and social characteristics of boys with AD/HD and giftedness: A comparative case study." <em>Journal for the Education of the Gifted</em>, 24(3), 207-247.</p>
          <p>[14] Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <em>Misdiagnosis and dual diagnoses of gifted children and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[15] Neihart, M. (2000). "Gifted children with Asperger's syndrome." <em>Gifted Child Quarterly</em>, 44(4), 222-230.</p>
          <p>[16] Foley-Nicpon, M., Doobay, A. F., & Assouline, S. G. (2010). "Parent, teacher, and self perceptions of psychosocial functioning in intellectually gifted children and adolescents with autism spectrum disorder." <em>Journal of Autism and Developmental Disorders</em>, 40(8), 1028-1038.</p>
          <p>[17] Neihart, M. (2002). "Gifted children and depression." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 93-101). Waco, TX: Prufrock Press.</p>
          <p>[18] Sword, L. K. (2000). "Emotional intensity in gifted children." <em>Gifted and Creative Services Australia</em>.</p>
          <p>[19] Peterson, J. S. (2009). "Myth 17: Gifted and talented individuals do not have unique social and emotional needs." <em>Gifted Child Quarterly</em>, 53(4), 280-282.</p>
          <p>[20] Willard-Holt, C. (1998). "Academic and personality characteristics of gifted students with cerebral palsy: A multiple case study." <em>Exceptional Children</em>, 65(1), 37-50.</p>
          <p>[21] Cline, S., & Schwartz, D. (1999). <em>Diverse populations of gifted children: Meeting their needs in the regular classroom and beyond</em>. Upper Saddle River, NJ: Merrill.</p>
          <p>[22] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[23] Brody, L. E., & Mills, C. J. (1997). "Gifted children with learning disabilities: A review of the issues." <em>Journal of Learning Disabilities</em>, 30(3), 282-296.</p>
          <p>[24] Bianco, M., & Leech, N. L. (2010). "Twice-exceptional learners: Effects of teacher preparation and disability labels on gifted referrals." <em>Teacher Education and Special Education</em>, 33(4), 319-334.</p>
          <p>[25] Baum, S. (1990). <em>Gifted but learning disabled: A puzzling paradox</em>. Reston, VA: Council for Exceptional Children. (ERIC Digest #E479)</p>
          <p>[26] Reis, S. M., & Colbert, R. (2004). "Counseling needs of academically talented students with learning disabilities." <em>Professional School Counseling</em>, 8(2), 156-167.</p>
          <p>[27] Vespi, L., & Yewchuk, C. (1992). "A phenomenological study of the social/emotional characteristics of gifted learning disabled children." <em>Journal for the Education of the Gifted</em>, 16(1), 55-72.</p>
          <p>[28] Assouline, S. G., Foley Nicpon, M., & Huber, D. H. (2006). "The impact of vulnerabilities and strengths on the academic experiences of twice-exceptional students: A message to school counselors." <em>Professional School Counseling</em>, 10(1), 14-24.</p>
          <p>[29] Silverman, L. K. (2009). "The measurement of giftedness." In L. V. Shavinina (Ed.), <em>International handbook on giftedness</em> (pp. 947-970). Springer.</p>
          <p>[30] Nielsen, M. E. (2002). <em>Gifted students with learning disabilities: Recommendations for identification and programming</em>. Exceptionality, 10(2), 93-111.</p>
          <p>[31] Baum, S. M., Cooper, C. R., & Neu, T. W. (2001). "Dual differentiation: An approach for meeting the curricular needs of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 477-490.</p>
          <p>[32] Beckley, D. (1998). "Gifted and learning disabled: Twice exceptional students." <em>National Research Center on the Gifted and Talented Newsletter</em>, Spring, 1-3.</p>
          <p>[33] Neihart, M. (2008). "Identifying and providing services to twice exceptional children." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 115-137). New York: Springer.</p>
          <p>[34] Crepeau-Hobson, M. F., & Bianco, M. (2011). "Identification of gifted students with learning disabilities in a response-to-intervention era: Psychoeducational practice recommendations." <em>Psychology in the Schools</em>, 48(2), 102-113.</p>
          <p>[35] Foley Nicpon, M., Rickels, H., Assouline, S. G., & Richards, A. (2012). "Self-esteem and self-concept examination among gifted students with ADHD." <em>Journal for the Education of the Gifted</em>, 35(3), 220-240.</p>
          <p>[36] Trail, B. A. (2011). <em>Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[37] Gilman, B. J. (2008). "Challenging highly gifted learners." <em>Waco, TX: Prufrock Press</em>.</p>
          <p>[38] McCallum, R. S., Bell, S. M., Coles, J. T., Miller, K. C., Hopkins, M. B., & Hilton-Prillhart, A. (2013). "A model for screening twice-exceptional students (gifted with learning disabilities) within a response to intervention paradigm." <em>Gifted Child Quarterly</em>, 57(4), 209-222.</p>
          <p>[39] Foley-Nicpon, M. (2013). "Gifted child quarterly and talent development for gifted students with co-occurring disabilities: Thoughts on twice-exceptionality." <em>Gifted Child Quarterly</em>, 57(4), 271-272.</p>
          <p>[40] Coleman, M. R. (2005). "Academic strategies that work for gifted students with learning disabilities." <em>Teaching Exceptional Children</em>, 38(1), 28-32.</p>
          <p>[41] Reis, S. M., & McCoach, D. B. (2000). "The underachievement of gifted students: What do we know and where do we go?" <em>Gifted Child Quarterly</em>, 44(3), 152-170.</p>
          <p>[42] Supplee, P. L. (1990). "Reaching the gifted underachiever: Program strategy and design." <em>New York: Teachers College Press</em>.</p>
          <p>[43] King, E. W. (2005). "Addressing the social and emotional needs of twice-exceptional students." <em>Teaching Exceptional Children</em>, 38(1), 16-20.</p>
          <p>[44] Mullet, D. R., & Rinn, A. N. (2015). "Giftedness and ADHD: Identification, misdiagnosis, and dual diagnosis." <em>Roeper Review</em>, 37(4), 195-207.</p>
          <p>[45] Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <em>Misdiagnosis and dual diagnoses of gifted children and adults: ADHD, bipolar, OCD, Asperger's, depression, and other disorders</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[46] Silverman, L. K. (2009). "The two-edged sword of compensation: How the gifted cope with learning disabilities." <em>Gifted Education International</em>, 25(2), 115-130.</p>
          <p>[47] Reis, S. M., Neu, T. W., & McGuire, J. M. (1997). "Case studies of high-ability students with learning disabilities who have achieved." <em>Exceptional Children</em>, 63(4), 463-479.</p>
          <p>[48] Yssel, N., Prater, M. A., & Smith, D. (2010). "How can such a smart kid not get it? Finding the right fit for twice-exceptional students in our schools." <em>Gifted Child Today</em>, 33(1), 54-61.</p>
          <p>[49] Baum, S. M., & Owen, S. V. (2004). "To be gifted and learning disabled: Strategies for helping bright students with LD, ADHD, and more." <em>Mansfield Center, CT: Creative Learning Press</em>.</p>
          <p>[50] Olenchak, F. R., & Reis, S. M. (2002). "Gifted students with learning disabilities." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 177-191). Waco, TX: Prufrock Press.</p>
          <p>[51] Hannah, C. L., & Shore, B. M. (1995). "Metacognition and high intellectual ability: Insights from the study of learning-disabled gifted students." <em>Gifted Child Quarterly</em>, 39(2), 95-109.</p>
          <p>[52] Ruban, L. M., & Reis, S. M. (2005). "Identification and assessment of gifted students with learning disabilities." <em>Theory Into Practice</em>, 44(2), 115-124.</p>
          <p>[53] West, T. G. (1991). <em>In the mind's eye: Visual thinkers, gifted people with learning difficulties, computer images, and the ironies of creativity</em>. Buffalo, NY: Prometheus Books.</p>
          <p>[54] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[55] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[56] Baum, S. M., & Owen, S. V. (1988). "High ability/learning disabled students: How are they different?" <em>Gifted Child Quarterly</em>, 32(3), 321-326.</p>
          <p>[57] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[58] Baldwin, L., Baum, S., Pereles, D., & Hughes, C. (2015). "Twice-exceptional learners: The journey toward a shared vision." <em>Gifted Child Today</em>, 38(4), 206-214.</p>
          <p>[59] Armstrong, T. (2010). <em>Neurodiversity: Discovering the extraordinary gifts of autism, ADHD, dyslexia, and other brain differences</em>. Philadelphia: Da Capo Press.</p>
          <p>[60] Eide, B. L., & Eide, F. F. (2011). <em>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</em>. New York: Hudson Street Press.</p>
          <p>[61] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties, computer images and the ironies of creativity</em>. Amherst, NY: Prometheus Books.</p>
          <p>[62] Grandin, T., & Panek, R. (2013). <em>The autistic brain: Thinking across the spectrum</em>. Boston: Houghton Mifflin Harcourt.</p>
          <p>[63] Ronksley-Pavia, M. (2015). "A model of twice-exceptionality: Explaining and defining the apparent paradoxical combination of disability and giftedness in childhood." <em>Journal for the Education of the Gifted</em>, 38(3), 318-340.</p>
          <p>[64] Trail, B. A. (2011). <em>Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[65] Coleman, M. R. (2005). "Academic strategies that work for gifted students with learning disabilities." <em>Teaching Exceptional Children</em>, 38(1), 28-32.</p>
          <p>[66] Nielsen, M. E. (2002). "Gifted students with learning disabilities: Recommendations for identification and programming." <em>Exceptionality</em>, 10(2), 93-111.</p>
          <p>[67] Foley-Nicpon, M., Assouline, S. G., & Colangelo, N. (2013). "Twice-exceptional learners: Who needs to know what?" <em>Gifted Child Quarterly</em>, 57(3), 169-180.</p>
          <p>[68] Neumeister, K. S., Yssel, N., & Burney, V. H. (2013). "The influence of primary caregivers in fostering success in twice-exceptional children." <em>Gifted Child Quarterly</em>, 57(4), 263-274.</p>
          <p>[69] Amend, E. R., Schuler, P., Beaver-Gavin, K., & Beights, R. (2009). "A unique challenge: Sorting out the differences between giftedness and Asperger's disorder." <em>Gifted Child Today</em>, 32(4), 57-63.</p>
          <p>[70] Assouline, S. G., & Whiteman, C. S. (2011). "Twice-exceptionality: Implications for school psychologists in the post-IDEA 2004 era." <em>Journal of Applied School Psychology</em>, 27(4), 380-402.</p>
          <p>[71] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[72] Baum, S. M., Cooper, C. R., & Neu, T. W. (2001). "Dual differentiation: An approach for meeting the curricular needs of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 477-490.</p>
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
