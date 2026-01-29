import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleTwiceExceptionalProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleTwiceExceptional({ setCurrentArticle }: ArticleTwiceExceptionalProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Twice Exceptionality',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Twice Exceptional (2e)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Twice Exceptional</strong> (often abbreviated as 2e) refers to individuals who are both 
            intellectually gifted and have one or more learning differences, disabilities, or neurodivergent 
            conditions.<sup>[1]</sup> These students possess high cognitive abilities alongside specific learning challenges, 
            creating a unique profile of strengths and difficulties.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Twice Exceptional (2e)"
            image={twiceExceptionalImage}
            data={[
              { label: 'Other names', value: 'Gifted with Learning Disabilities, Gifted/LD, 2e' },
              { label: 'Specialty', value: 'Gifted Education, Educational Psychology' },
              { label: 'Symptoms', value: 'Coexistence of high ability and learning challenges' },
              { label: 'First described', value: '1970s-1980s in gifted education literature' },
              { label: 'Duration', value: 'Lifelong profile' },
              { label: 'Frequency', value: '2-5% of student population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1759922378146-8e143fb47cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWxlbnRlZCUyMHN0dWRlbnQlMjBsZWFybmluZ3xlbnwxfHx8fDE3Njc0MDUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Talented student engaged in learning - twice exceptional profile"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Twice exceptional individuals represent approximately 2-5% of the student population, though 
            many remain unidentified due to the masking effect where their strengths can hide their 
            challenges, and vice versa.<sup>[3]</sup> Their giftedness may camouflage their disabilities, while their 
            disabilities may mask their talents.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            Common combinations include giftedness with ADHD, autism 
            spectrum disorder, dyslexia, dyscalculia, dysgraphia, anxiety disorders, or sensory processing 
            differences.<sup>[5]</sup> The interplay between high ability and learning differences creates distinct 
            educational and social-emotional needs that require specialized understanding and support.<sup>[6]</sup> 2e 
            individuals often think differently, demonstrating exceptional creativity, problem-solving 
            abilities, and deep interests in specific subjects while simultaneously struggling with tasks 
            that peers find routine.<sup>[7]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1725399633864-ae5493e9f1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGR1YWwlMjBwYXRod2F5c3xlbnwxfHx8fDE3Njc0MDUwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dual pathways in the brain - representing twice exceptional cognitive profile"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Twice exceptional individuals demonstrate advanced reasoning and problem-solving skills, exceptional 
            creativity and original thinking, sophisticated vocabulary and verbal abilities, deep intense interests 
            in particular subjects, ability to see patterns and make connections, strong long-term memory and 
            retention, heightened curiosity and love of learning, and advanced understanding of complex concepts.<sup>[8][9]</sup>
          </p>
          
          <p className="mb-4">
            Simultaneously, they may struggle with specific academic skills (reading, writing, math, organization), 
            executive functioning (planning, time management, task initiation), attention regulation and focus, 
            processing speed or working memory, fine or gross motor coordination, social communication and peer 
            relationships, sensory sensitivities, and anxiety, perfectionism, or emotional regulation.<sup>[10]</sup> The social-emotional 
            profile includes asynchronous development (uneven skill levels across areas), heightened sensitivity and 
            intensity, perfectionism and fear of failure, frustration from the gap between understanding and output, 
            feelings of being misunderstood, and low self-esteem despite high abilities.<sup>[11][12]</sup> The masking effect means 
            giftedness may hide learning disabilities or disabilities may hide giftedness, creating inconsistent 
            performance and potential underachievement.<sup>[13]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1759922378146-8e143fb47cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWxlbnRlZCUyMHN0dWRlbnQlMjBsZWFybmluZ3xlbnwxfHx8fDE3Njc0MDUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Neurological basis of twice exceptionality - complex cognitive profile"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Twice exceptionality represents the co-occurrence of intellectual giftedness with one or more 
            neurodivergent conditions or learning differences.<sup>[14]</sup> Giftedness itself involves neurological differences 
            in brain development, processing speed, and connectivity that support advanced cognitive abilities.<sup>[15]</sup> When 
            combined with other neurodevelopmental differences (such as ADHD, autism, dyslexia, or other learning 
            disabilities), each with their own neurological basis, this creates a unique cognitive profile.<sup>[16]</sup>
          </p>
          
          <p className="mb-4">
            Both giftedness and learning differences have genetic components and tend to run in families.<sup>[17]</sup> The "twice 
            exceptional" profile is not a single condition but rather describes the intersection of high intellectual 
            ability with specific learning challenges, each with their own neurological foundations.<sup>[18]</sup> Research suggests 
            that the combination creates unique patterns of brain organization and functioning that result in the 
            characteristic strengths and challenges observed in 2e individuals.<sup>[19]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1766297246931-7b861269dab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXNzZXNzbWVudCUyMHRlc3Rpbmd8ZW58MXx8fHwxNzY3NDA1MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Comprehensive assessment and testing - identifying twice exceptionality"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Identifying twice exceptional individuals requires comprehensive evaluation by professionals familiar 
            with both giftedness and learning differences.<sup>[20]</sup> The assessment process should include comprehensive 
            cognitive assessment (IQ testing with subtest analysis), academic achievement testing across all subject 
            areas, evaluation for specific learning disabilities, assessment of executive functioning skills, screening 
            for ADHD, autism, or other neurodevelopmental conditions, social-emotional and behavioral assessments, 
            portfolio review of work samples showing strengths and weaknesses, and teacher and parent observations.<sup>[21]</sup>
          </p>
          
          <p className="mb-4">
            Key indicators include significant scatter in test scores, discrepancy between ability and achievement, 
            exceptional strengths alongside surprising weaknesses, creative problem-solving despite poor test performance, 
            or behavioral issues stemming from frustration.<sup>[22]</sup> Early identification is crucial to prevent issues like 
            academic underachievement, behavioral problems, or diminished self-esteem.<sup>[23]</sup> The identification requires 
            looking beyond overall achievement to examine both peaks and valleys in abilities.<sup>[24]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758525860449-fa3602fceb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHN1cHBvcnQlMjB0dXRvcmluZ3xlbnwxfHx8fDE3Njc0MDUwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Educational support and tutoring - interventions for twice exceptional students"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Support for twice exceptional individuals includes strength-based instruction that builds on interests and 
            abilities, differentiated curriculum addressing both gifts and challenges, acceleration in areas of strength, 
            explicit instruction and support in areas of difficulty, project-based and inquiry-driven learning opportunities, 
            allowing alternative ways to demonstrate knowledge, and honors or gifted classes with appropriate accommodations.<sup>[25][26]</sup>
          </p>
          
          <p className="mb-4">
            Accommodations and modifications include assistive technology (speech-to-text, text-to-speech, graphic organizers), 
            extended time or reduced workload when appropriate, flexible deadlines and chunked assignments, alternative 
            assessment formats, organizational support and executive function coaching, and modified homework assignments 
            focusing on mastery not repetition.<sup>[27]</sup> Social-emotional support includes counseling to address perfectionism and 
            anxiety, teaching self-advocacy skills, building growth mindset and resilience, connecting with other 2e peers, 
            and validating feelings of frustration and asynchrony.<sup>[28]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Twice Exceptionality</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758270704262-ecc82b23dc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwZGl2ZXJzZSUyMHN0dWRlbnR8ZW58MXx8fHwxNzY3NDA1MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Successful diverse student - thriving with twice exceptionality"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Twice exceptional individuals lead successful and fulfilling lives across all areas of society. With appropriate 
            understanding and accommodation, 2e individuals can achieve at high levels and develop their unique talents.<sup>[29]</sup> Many 
            2e adults find success in careers that leverage their exceptional abilities while providing flexibility for their 
            challenges, often in creative, entrepreneurial, research, or specialized technical fields.<sup>[30]</sup>
          </p>
          
          <p className="mb-4">
            Living well as twice 
            exceptional involves understanding one's unique profile of strengths and challenges, developing strategies to 
            support areas of difficulty while maximizing strengths, accessing appropriate accommodations in education and 
            employment, and building confidence through recognizing and celebrating exceptional abilities.<sup>[31]</sup> Topics include 
            leveraging giftedness and creative abilities in career and personal life, managing learning challenges with 
            accommodations and technology, building self-advocacy skills, managing perfectionism and anxiety, finding community 
            with other 2e individuals, and recognizing that inconsistency and asynchrony are characteristic features rather 
            than personal failings.<sup>[32]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em>. Waco, TX: Prufrock Press.</p>
          <p>[2] National Education Association. (2006). <em>The twice-exceptional dilemma</em>. Washington, DC: NEA.</p>
          <p>[3] Foley Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[4] Brody, L. E., & Mills, C. J. (1997). "Gifted children with learning disabilities: A review of the issues." <em>Journal of Learning Disabilities</em>, 30(3), 282-296.</p>
          <p>[5] Assouline, S. G., Foley Nicpon, M., & Whiteman, C. (2010). "Cognitive and psychosocial characteristics of gifted students with written language disability." <em>Gifted Child Quarterly</em>, 54(2), 102-115.</p>
          <p>[6] Trail, B. A. (2011). <em>Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[7] Neihart, M. (2008). "Identifying and providing services to twice exceptional children." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 115-137). New York: Springer.</p>
          <p>[8] Silverman, L. K. (2009). "The two-edged sword of compensation: How the gifted cope with learning disabilities." <em>Gifted Education International</em>, 25(2), 115-130.</p>
          <p>[9] Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <em>Misdiagnosis and dual diagnoses of gifted children and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[10] McCoach, D. B., Kehle, T. J., Bray, M. A., & Siegle, D. (2001). "Best practices in the identification of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 403-411.</p>
          <p>[11] Moon, S. M., & Reis, S. M. (2004). "Acceleration and twice-exceptional students." In N. Colangelo, S. Assouline, & M. Gross (Eds.), <em>A nation deceived: How schools hold back America's brightest students</em> (Vol. 2, pp. 109-119). Iowa City: The Connie Belin & Jacqueline N. Blank International Center.</p>
          <p>[12] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[13] Crepeau-Hobson, M. F., & Bianco, M. (2007). "Identification of gifted students with learning disabilities in a response-to-intervention era." <em>Psychology in the Schools</em>, 44(8), 827-842.</p>
          <p>[14] Lovett, B. J., & Lewandowski, L. J. (2006). "Gifted students with learning disabilities: Who are they?" <em>Journal of Learning Disabilities</em>, 39(6), 515-527.</p>
          <p>[15] Jung, R. E., & Haier, R. J. (2007). "The Parieto-Frontal Integration Theory (P-FIT) of intelligence: Converging neuroimaging evidence." <em>Behavioral and Brain Sciences</em>, 30(2), 135-154.</p>
          <p>[16] Kaufmann, F. A., Kalbfleisch, M. L., & Castellanos, F. X. (2000). "Attention deficit disorders and gifted students: What do we really know?" <em>Storrs: The National Research Center on the Gifted and Talented</em>.</p>
          <p>[17] Plomin, R., & Deary, I. J. (2015). "Genetics and intelligence differences: Five special findings." <em>Molecular Psychiatry</em>, 20(1), 98-108.</p>
          <p>[18] Foley-Nicpon, M., Assouline, S. G., & Colangelo, N. (2013). "Twice-exceptional learners: Who needs to know what?" <em>Gifted Child Quarterly</em>, 57(3), 169-180.</p>
          <p>[19] Gilman, B. J., Lovecky, D. V., Kearney, K., et al. (2013). "Critical issues in the identification of gifted students with co-existing disabilities: The twice-exceptional." <em>Sage Open</em>, 3(3), 1-16.</p>
          <p>[20] Assouline, S. G., Foley Nicpon, M., & Doobay, A. (2009). "Profoundly gifted girls and autism spectrum disorder: A psychometric case study comparison." <em>Gifted Child Quarterly</em>, 53(2), 89-105.</p>
          <p>[21] Minner, S. (1990). "Teacher evaluations of case descriptions of LD gifted children." <em>Gifted Child Quarterly</em>, 34(1), 37-39.</p>
          <p>[22] Baum, S. M., & Owen, S. V. (2004). "To be gifted and learning disabled: Strategies for helping bright students with LD, ADHD, and more." <em>Mansfield Center, CT: Creative Learning Press</em>.</p>
          <p>[23] Nielsen, M. E. (2002). <em>Gifted students with learning disabilities: Recommendations for identification and programming</em>. Exceptionality, 10(2), 93-111.</p>
          <p>[24] Coleman, M. R. (2005). "Academic strategies that work for gifted students with learning disabilities." <em>Teaching Exceptional Children</em>, 38(1), 28-32.</p>
          <p>[25] Weinfeld, R., Barnes-Robinson, L., Jeweler, S., & Roffman Shevitz, B. (2013). <em>Smart kids with learning difficulties: Overcoming obstacles and realizing potential</em> (2nd ed.). Waco, TX: Prufrock Press.</p>
          <p>[26] Baum, S. M., & Schader, R. M. (2019). "Twice-exceptional students: Gifted students with disabilities." In J. A. Plucker & C. M. Callahan (Eds.), <em>Critical issues and practices in gifted education</em> (3rd ed., pp. 623-640). Waco, TX: Prufrock Press.</p>
          <p>[27] Yssel, N., Prater, M. A., & Smith, D. (2010). "How can such a smart kid not get it? Finding the right fit for twice-exceptional students in our schools." <em>Gifted Child Today</em>, 33(1), 54-61.</p>
          <p>[28] King, E. W. (2005). "Addressing the social and emotional needs of twice-exceptional students." <em>Teaching Exceptional Children</em>, 38(1), 16-20.</p>
          <p>[29] Vespi, L., & Yewchuk, C. (1992). "A phenomenological study of the social/emotional characteristics of gifted learning disabled children." <em>Journal for the Education of the Gifted</em>, 16(1), 55-72.</p>
          <p>[30] Rizza, M. G., & Morrison, W. F. (2003). "Uncovering stereotypes and identifying characteristics of gifted students with emotional/behavioral disabilities." <em>Roeper Review</em>, 25(2), 73-77.</p>
          <p>[31] Dare, L., & Nowicki, E. A. (2018). "Conceptualizing twice exceptionality: A literature review and implications for inclusive education." <em>Exceptionality Education International</em>, 28(3), 1-23.</p>
          <p>[32] Beckmann, E., & Minnaert, A. (2018). "Non-cognitive characteristics of gifted students with learning disabilities: An in-depth systematic review." <em>Frontiers in Psychology</em>, 9, 504.</p>
        </div>
      </section>
    </article>
  );
}