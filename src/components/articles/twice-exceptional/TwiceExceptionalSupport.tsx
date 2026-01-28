import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TwiceExceptionalSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function TwiceExceptionalSupport({ setCurrentArticle }: TwiceExceptionalSupportProps) {
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
        Twice-Exceptional: Support & Management
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Supporting twice-exceptional students requires dual differentiation—simultaneously addressing 
            advanced abilities and providing accommodations for disabilities.<sup>[1]</sup> Neither the 
            giftedness nor the disability should be neglected in favor of the other.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dual Differentiation Framework</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student learning"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Strength-Based Approach</h3>
          <p className="mb-4">
            A strength-based approach emphasizes developing talents while providing support for challenges.<sup>[3]</sup> 
            Focusing on what students can do rather than only on deficits builds confidence and motivation.<sup>[4]</sup> 
            Talents should be nurtured even while addressing areas of weakness.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Addressing Both Exceptionalities</h3>
          <p className="mb-4">
            Effective programming provides both challenge for gifts and accommodations for disabilities.<sup>[6]</sup> 
            Students need access to advanced content and accelerated pacing alongside modifications for learning 
            differences.<sup>[7]</sup> Educational plans should address cognitive, academic, social-emotional, 
            and behavioral needs comprehensively.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individualized Planning</h3>
          <p className="mb-4">
            Each 2e student presents a unique profile requiring individualized support.<sup>[9]</sup> Cookie-cutter 
            approaches fail to address the specific combination of strengths and weaknesses.<sup>[10]</sup> 
            Collaborative team planning involving gifted specialists, special educators, general educators, 
            and families optimizes outcomes.<sup>[11]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Modifications and Accommodations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Curriculum Compacting</h3>
          <p className="mb-4">
            Compacting eliminates content already mastered, replacing it with more challenging material.<sup>[12]</sup> 
            This approach honors advanced abilities while freeing time for skill remediation or enrichment.<sup>[13]</sup> 
            Research shows many gifted students can demonstrate mastery of 40-50% of regular curriculum before 
            it's taught.<sup>[14]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Flexible Pacing and Grouping</h3>
          <p className="mb-4">
            Allowing students to progress at different rates in different subjects accommodates uneven 
            development.<sup>[15]</sup> Subject-specific acceleration enables advancement in areas of strength 
            while providing additional time or support in challenge areas.<sup>[16]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Differentiated Instruction</h3>
          <p className="mb-4">
            Differentiation adjusts content, process, product, and learning environment to match student needs.<sup>[17]</sup> 
            For 2e students, this means providing complex, abstract content through accessible formats with 
            appropriate scaffolding and accommodations.<sup>[18]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Assistive Technology</h3>
          <p className="mb-4">
            Technology bypasses areas of weakness while allowing students to demonstrate advanced thinking.<sup>[19]</sup> 
            Text-to-speech, speech-to-text, word prediction, graphic organizers, and calculators enable 
            students to access and produce content matching their intellectual level.<sup>[20]</sup> Assistive 
            technology is an equalizer, not a crutch.<sup>[21]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Alternative Response Formats</h3>
          <p className="mb-4">
            Allowing students to demonstrate knowledge through varied formats accommodates disabilities while 
            revealing gifts.<sup>[22]</sup> Oral presentations, videos, models, or demonstrations may better 
            showcase understanding than written tests.<sup>[23]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Specific Intervention Strategies</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwdGVhY2hlcnxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student and teacher"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Interventions</h3>
          <p className="mb-4">
            For gifted students with dyslexia, multisensory structured literacy approaches like Orton-Gillingham 
            build decoding skills.<sup>[24]</sup> However, instruction should also provide access to complex 
            text matching intellectual level through audiobooks or read-alouds.<sup>[25]</sup> Separating 
            decoding instruction from comprehension allows both needs to be met.<sup>[26]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Writing Support</h3>
          <p className="mb-4">
            For dysgraphia, assistive technology, reduced writing requirements, and focus on quality over 
            quantity help students express complex ideas.<sup>[27]</sup> Teaching keyboarding skills early 
            provides an alternative to handwriting.<sup>[28]</sup> Graphic organizers support organization 
            and planning.<sup>[29]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mathematics Interventions</h3>
          <p className="mb-4">
            Gifted students with dyscalculia benefit from separating calculation practice from conceptual 
            mathematics.<sup>[30]</sup> Calculators enable engagement with advanced problem-solving despite 
            calculation difficulties.<sup>[31]</sup> Explicit instruction in foundational number sense supports 
            development of basic skills.<sup>[32]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Executive Function Support</h3>
          <p className="mb-4">
            Teaching organizational systems, time management, planning strategies, and self-monitoring helps 
            2e students compensate for executive function weaknesses.<sup>[33]</sup> External structures like 
            checklists, calendars, and rubrics scaffold executive function skills.<sup>[34]</sup> Explicitly 
            teaching what neurotypical students absorb implicitly is essential.<sup>[35]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Placement Options</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">General Education with Support</h3>
          <p className="mb-4">
            Many 2e students can succeed in general education with appropriate accommodations, modifications, 
            and differentiation.<sup>[36]</sup> Collaboration between general and special educators enhances 
            outcomes.<sup>[37]</sup> This placement maintains access to advanced content and age peers.<sup>[38]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Specialized Twice-Exceptional Programs</h3>
          <p className="mb-4">
            Some schools offer programs specifically designed for 2e students, providing both challenge and 
            support.<sup>[39]</sup> These programs understand the 2e profile and employ staff trained in dual 
            differentiation.<sup>[40]</sup> Research on specialized 2e programs shows positive outcomes for 
            achievement and social-emotional development.<sup>[41]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gifted Programs with Accommodations</h3>
          <p className="mb-4">
            Placing 2e students in gifted programs with necessary accommodations provides intellectual challenge 
            and peer connections.<sup>[42]</sup> However, gifted teachers need training in understanding and 
            supporting disabilities.<sup>[43]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Homeschooling and Alternative Education</h3>
          <p className="mb-4">
            Some families choose homeschooling or alternative educational settings to better meet 2e needs.<sup>[44]</sup> 
            These options allow maximum individualization and flexible pacing.<sup>[45]</sup> Online gifted 
            programs combined with local support services can provide comprehensive programming.<sup>[46]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social-Emotional Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Counseling</h3>
          <p className="mb-4">
            Many 2e students benefit from counseling addressing identity, self-esteem, anxiety, depression, 
            or perfectionism.<sup>[47]</sup> Therapists should understand both giftedness and disabilities 
            to provide appropriate support.<sup>[48]</sup> Cognitive-behavioral approaches help students 
            develop coping strategies.<sup>[49]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills Training</h3>
          <p className="mb-4">
            Some 2e students, particularly those with ADHD or autism, benefit from explicit social skills 
            instruction.<sup>[50]</sup> Training should account for advanced cognitive abilities while 
            addressing social challenges.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Peer Support and Connections</h3>
          <p className="mb-4">
            Connecting with other 2e students reduces isolation and validates experiences.<sup>[52]</sup> 
            Support groups, summer programs, or online communities provide connection with similar peers.<sup>[53]</sup> 
            Finding intellectual peers who also understand challenges is particularly important.<sup>[54]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Self-Understanding</h3>
          <p className="mb-4">
            Helping students understand their twice-exceptionality promotes self-acceptance and self-advocacy.<sup>[55]</sup> 
            Learning about their cognitive profile, strengths, challenges, and strategies empowers students.<sup>[56]</sup> 
            Age-appropriate explanations help students make sense of their experiences.<sup>[57]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Addressing Perfectionism</h3>
          <p className="mb-4">
            Interventions for perfectionism include teaching growth mindset, normalizing mistakes, setting 
            realistic standards, and distinguishing between healthy striving and maladaptive perfectionism.<sup>[58]</sup> 
            The gap between intellectual capacity and execution can fuel perfectionism in 2e students.<sup>[59]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Planning and Legal Rights</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFubmluZyUyMGRvY3VtZW50c3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Planning documents"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individualized Education Program (IEP)</h3>
          <p className="mb-4">
            Students eligible for special education receive IEPs outlining services, accommodations, and 
            goals.<sup>[60]</sup> IEPs for 2e students should address both remediation and enrichment needs.<sup>[61]</sup> 
            Goals should target areas of weakness while ensuring access to advanced curriculum.<sup>[62]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">504 Plans</h3>
          <p className="mb-4">
            Students with disabilities who don't qualify for special education may receive 504 plans providing 
            accommodations.<sup>[63]</sup> These plans ensure equal access to education through modifications 
            like extended time, assistive technology, or preferential seating.<sup>[64]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gifted Education Plans</h3>
          <p className="mb-4">
            Many states require educational plans for identified gifted students.<sup>[65]</sup> For 2e students, 
            coordinating gifted and special education plans ensures comprehensive support.<sup>[66]</sup> Both 
            documents should reference each other and work together.<sup>[67]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Legal Protections</h3>
          <p className="mb-4">
            IDEA protects students with disabilities, ensuring free appropriate public education.<sup>[68]</sup> 
            Section 504 of the Rehabilitation Act and the ADA prohibit disability discrimination.<sup>[69]</sup> 
            However, no federal mandate requires gifted services, varying by state.<sup>[70]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Parent and Family Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding and Advocacy</h3>
          <p className="mb-4">
            Parents must understand both giftedness and disabilities to advocate effectively.<sup>[71]</sup> 
            Learning about twice-exceptionality, available services, and legal rights empowers families.<sup>[72]</sup> 
            Parent support groups provide community and shared experiences.<sup>[73]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Home Support</h3>
          <p className="mb-4">
            Families can support talent development through providing resources, encouraging interests, and 
            fostering intellectual curiosity.<sup>[74]</sup> Simultaneously, understanding and accommodating 
            disabilities at home reduces frustration.<sup>[75]</sup> Balancing challenge and support at home 
            mirrors school needs.<sup>[76]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Expectations</h3>
          <p className="mb-4">
            Parents must balance high expectations appropriate to abilities with realistic understanding of 
            disabilities.<sup>[77]</sup> Avoiding both underestimation and excessive pressure is challenging 
            but essential.<sup>[78]</sup> Focusing on effort, growth, and individual progress rather than 
            perfection supports healthy development.<sup>[79]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Teacher Training and Professional Development</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Twice-Exceptionality</h3>
          <p className="mb-4">
            Teachers need training in recognizing and supporting 2e students.<sup>[80]</sup> Professional 
            development should address characteristics, identification, and instructional strategies.<sup>[81]</sup> 
            Both gifted and special education teachers benefit from cross-training.<sup>[82]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Differentiation Skills</h3>
          <p className="mb-4">
            Teachers must develop skills in dual differentiation, providing both challenge and accommodation.<sup>[83]</sup> 
            Training in curriculum compacting, flexible grouping, and technology integration enhances capacity 
            to serve 2e students.<sup>[84]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Collaborative Practice</h3>
          <p className="mb-4">
            Collaboration among general educators, gifted specialists, special educators, and related service 
            providers optimizes support.<sup>[85]</sup> Teamwork allows sharing of expertise and resources.<sup>[86]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Promising Programs and Approaches</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Twice-Exceptional Summer Programs</h3>
          <p className="mb-4">
            Specialized summer programs provide intensive academic challenge alongside support for challenges.<sup>[87]</sup> 
            These programs create community among 2e students and offer respite from struggling to fit in 
            elsewhere.<sup>[88]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Talent Development Model</h3>
          <p className="mb-4">
            This approach emphasizes developing talents as the primary focus while providing necessary 
            accommodations.<sup>[89]</sup> Engaging students through their interests and strengths increases 
            motivation and willingness to work on challenges.<sup>[90]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Project-Based Learning</h3>
          <p className="mb-4">
            Complex, authentic projects allow 2e students to demonstrate advanced thinking while receiving 
            support for production challenges.<sup>[91]</sup> Project-based learning engages interests and 
            reduces emphasis on areas of weakness.<sup>[92]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Universal Design for Learning</h3>
          <p className="mb-4">
            UDL provides multiple means of representation, expression, and engagement, benefiting all learners 
            including 2e students.<sup>[93]</sup> This framework reduces barriers while maintaining high 
            expectations.<sup>[94]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Transition Planning</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Post-Secondary Education</h3>
          <p className="mb-4">
            Transition to college requires careful planning for 2e students.<sup>[95]</sup> Students need to 
            understand their rights under ADA, identify needed accommodations, and develop self-advocacy skills.<sup>[96]</sup> 
            College selection should consider both academic challenge and disability support services.<sup>[97]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Development</h3>
          <p className="mb-4">
            Career planning should leverage strengths while considering how to manage challenges in work 
            settings.<sup>[98]</sup> Many 2e adults find success in careers using their talents while 
            minimizing impact of disabilities.<sup>[99]</sup> Self-employment or flexible work arrangements 
            may be particularly suitable.<sup>[100]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Core Principles:</h3>
            <div className="text-sm">
              <p>
                Effective support for twice-exceptional students requires simultaneous attention to both 
                exceptionalities—developing gifts while supporting challenges.<sup>[101]</sup> A strength-based 
                approach that emphasizes abilities while providing necessary accommodations and modifications 
                enables 2e students to reach their potential.<sup>[102]</sup> No single intervention works for 
                all 2e students; individualized, comprehensive planning tailored to each student's unique 
                profile is essential.<sup>[103]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Baum, S. M., Cooper, C. R., & Neu, T. W. (2001). "Dual differentiation: An approach for meeting the curricular needs of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 477-490.</p>
          <p>[2] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[3] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[4] Baum, S. M., & Owen, S. V. (2004). <em>To be gifted and learning disabled: Strategies for helping bright students with LD, ADHD, and more</em>. Mansfield Center, CT: Creative Learning Press.</p>
          <p>[5] Reis, S. M., Neu, T. W., & McGuire, J. M. (1997). "Case studies of high-ability students with learning disabilities who have achieved." <em>Exceptional Children</em>, 63(4), 463-479.</p>
          <p>[6] Nielsen, M. E. (2002). "Gifted students with learning disabilities: Recommendations for identification and programming." <em>Exceptionality</em>, 10(2), 93-111.</p>
          <p>[7] Coleman, M. R. (2005). "Academic strategies that work for gifted students with learning disabilities." <em>Teaching Exceptional Children</em>, 38(1), 28-32.</p>
          <p>[8] Trail, B. A. (2011). <em>Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[9] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[10] Yssel, N., Prater, M. A., & Smith, D. (2010). "How can such a smart kid not get it? Finding the right fit for twice-exceptional students in our schools." <em>Gifted Child Today</em>, 33(1), 54-61.</p>
          <p>[11] Baldwin, L., Baum, S., Pereles, D., & Hughes, C. (2015). "Twice-exceptional learners: The journey toward a shared vision." <em>Gifted Child Today</em>, 38(4), 206-214.</p>
          <p>[12] Reis, S. M., Burns, D. E., & Renzulli, J. S. (1992). <em>Curriculum compacting: The complete guide to modifying the regular curriculum for high ability students</em>. Mansfield Center, CT: Creative Learning Press.</p>
          <p>[13] Reis, S. M., & Renzulli, J. S. (1992). "Using curriculum compacting to challenge the above-average." <em>Educational Leadership</em>, 50(2), 51-57.</p>
          <p>[14] Reis, S. M., Westberg, K. L., Kulikowich, J., Caillard, F., Hébert, T., Plucker, J., ... & Smist, J. M. (1993). "Why not let high ability students start school in January? The curriculum compacting study." <em>Research Monograph 93106</em>. Storrs: University of Connecticut, National Research Center on the Gifted and Talented.</p>
          <p>[15] Southern, W. T., & Jones, E. D. (2004). "Types of acceleration: Dimensions and issues." In N. Colangelo, S. G. Assouline, & M. U. M. Gross (Eds.), <em>A nation deceived</em> (Vol. 2, pp. 5-12). Iowa City, IA: Belin-Blank Center.</p>
          <p>[16] Rogers, K. B. (2007). "Lessons learned about educating the gifted and talented: A synthesis of the research on educational practice." <em>Gifted Child Quarterly</em>, 51(4), 382-396.</p>
          <p>[17] Tomlinson, C. A. (2001). <em>How to differentiate instruction in mixed-ability classrooms</em> (2nd ed.). Alexandria, VA: Association for Supervision and Curriculum Development.</p>
          <p>[18] Tomlinson, C. A., Kaplan, S. N., Renzulli, J. S., Purcell, J. H., Leppien, J. H., Burns, D. E., ... & Imbeau, M. B. (2009). <em>The parallel curriculum: A design to develop learner potential and challenge advanced learners</em> (2nd ed.). Thousand Oaks, CA: Corwin Press.</p>
          <p>[19] Edyburn, D. L. (2004). "2003 in review: A synthesis of the special education technology literature." <em>Journal of Special Education Technology</em>, 19(4), 57-80.</p>
          <p>[20] Bryant, B. R., & Bryant, D. P. (2012). "Assistive technology for people with disabilities." <em>Education Resources Information Center</em>.</p>
          <p>[21] Weinfeld, R., Barnes-Robinson, L., Jeweler, S., & Shevitz, B. R. (2006). <em>Smart kids with learning difficulties: Overcoming obstacles and realizing potential</em>. Waco, TX: Prufrock Press.</p>
          <p>[22] VanTassel-Baska, J. (1998). <em>Excellence in educating gifted and talented learners</em> (3rd ed.). Denver, CO: Love Publishing.</p>
          <p>[23] Van Tassel-Baska, J., Johnson, D., & Avery, L. D. (2002). "Using performance tasks in the identification of economically disadvantaged and minority gifted learners: Findings from Project STAR." <em>Gifted Child Quarterly</em>, 46(2), 110-123.</p>
          <p>[24] Ritchey, K. D., & Goeke, J. L. (2006). "Orton-Gillingham and Orton-Gillingham—based reading instruction: A review of the literature." <em>The Journal of Special Education</em>, 40(3), 171-183.</p>
          <p>[25] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties, computer images and the ironies of creativity</em>. Amherst, NY: Prometheus Books.</p>
          <p>[26] Eide, B. L., & Eide, F. F. (2011). <em>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</em>. New York: Hudson Street Press.</p>
          <p>[27] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[28] Rosenblum, S., Weiss, P. L., & Parush, S. (2003). "Product and process evaluation of handwriting difficulties." <em>Educational Psychology Review</em>, 15(1), 41-81.</p>
          <p>[29] Sturm, J. M., & Rankin-Erickson, J. L. (2002). "Effects of hand-drawn and computer-generated concept mapping on the expository writing of middle school students with learning disabilities." <em>Learning Disabilities Research & Practice</em>, 17(2), 124-139.</p>
          <p>[30] Assouline, S. G., & Lupkowski-Shoplik, A. (2011). <em>Developing math talent: A comprehensive guide to math education for gifted students in elementary and middle school</em> (2nd ed.). Waco, TX: Prufrock Press.</p>
          <p>[31] Bouck, E. C., & Flanagan, S. M. (2010). "Virtual manipulatives: What they are and how teachers can use them." <em>Intervention in School and Clinic</em>, 45(3), 186-191.</p>
          <p>[32] Geary, D. C., Hoard, M. K., Nugent, L., & Bailey, D. H. (2013). "Adolescents' functional numeracy is predicted by their school entry number system knowledge." <em>PloS one</em>, 8(1), e54651.</p>
          <p>[33] Dawson, P., & Guare, R. (2010). <em>Executive skills in children and adolescents: A practical guide to assessment and intervention</em> (2nd ed.). New York: Guilford Press.</p>
          <p>[34] Meltzer, L. (Ed.). (2010). <em>Promoting executive function in the classroom</em>. New York: Guilford Press.</p>
          <p>[35] Kaufman, C. (2010). <em>Executive function in the classroom: Practical strategies for improving performance and enhancing skills for all students</em>. Baltimore: Paul H. Brookes.</p>
          <p>[36] Crepeau-Hobson, M. F., & Bianco, M. (2011). "Identification of gifted students with learning disabilities in a response-to-intervention era: Psychoeducational practice recommendations." <em>Psychology in the Schools</em>, 48(2), 102-113.</p>
          <p>[37] Friend, M., & Cook, L. (2013). <em>Interactions: Collaboration skills for school professionals</em> (7th ed.). Upper Saddle River, NJ: Pearson.</p>
          <p>[38] McCoach, D. B., Kehle, T. J., Bray, M. A., & Siegle, D. (2001). "Best practices in the identification of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 403-411.</p>
          <p>[39] Bianco, M., Carothers, D. E., & Smiley, L. R. (2009). "Gifted students with Asperger syndrome: Strategies for strength-based programming." <em>Intervention in School and Clinic</em>, 44(4), 206-215.</p>
          <p>[40] Trail, B. A. (2011). "Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students." <em>Prufrock Press Inc</em>.</p>
          <p>[41] Assouline, S. G., Foley Nicpon, M., & Huber, D. H. (2006). "The impact of vulnerabilities and strengths on the academic experiences of twice-exceptional students: A message to school counselors." <em>Professional School Counseling</em>, 10(1), 14-24.</p>
          <p>[42] Neihart, M. (2008). "Identifying and providing services to twice exceptional children." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 115-137). New York: Springer.</p>
          <p>[43] Besnoy, K. D., Swoszowski, N. C., Newman, J. L., Floyd, A., Jones, P., & Byrne, C. (2015). "The advocacy experiences of parents of elementary age, twice-exceptional children." <em>Gifted Child Quarterly</em>, 59(2), 108-123.</p>
          <p>[44] Jolly, J. L., Matthews, M. S., & Nester, J. (2013). "Homeschooling the gifted: A parent's perspective." <em>Gifted Child Quarterly</em>, 57(2), 121-134.</p>
          <p>[45] Ensign, J. (2000). "Defying the stereotypes of special education: Homeschool students." <em>Peabody Journal of Education</em>, 75(1-2), 147-158.</p>
          <p>[46] Wallace, P. (2009). "Distance learning for gifted students: Outcomes for elementary, middle, and high school aged students." <em>Journal for the Education of the Gifted</em>, 32(3), 295-320.</p>
          <p>[47] Peterson, J. S. (2015). "School counselors and gifted kids: Respecting both cognitive and affective." <em>Journal of Counseling & Development</em>, 93(2), 153-162.</p>
          <p>[48] Wood, S. M. (2010). "Best practices in counseling the gifted in schools: What's really happening?" <em>Gifted Child Quarterly</em>, 54(1), 42-58.</p>
          <p>[49] Mendaglio, S., & Peterson, J. S. (Eds.). (2007). <em>Models of counseling gifted children, adolescents, and young adults</em>. Waco, TX: Prufrock Press.</p>
          <p>[50] Neihart, M., Reis, S. M., Robinson, N. M., & Moon, S. M. (Eds.). (2002). <em>The social and emotional development of gifted children: What do we know?</em> Waco, TX: Prufrock Press.</p>
          <p>[51] Lovecky, D. V. (2004). <em>Different minds: Gifted children with AD/HD, Asperger syndrome, and other learning deficits</em>. London: Jessica Kingsley Publishers.</p>
          <p>[52] Olenchak, F. R., & Reis, S. M. (2002). "Gifted students with learning disabilities." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 177-191). Waco, TX: Prufrock Press.</p>
          <p>[53] Hébert, T. P. (2011). <em>Understanding the social and emotional lives of gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[54] Gross, M. U. M. (2002). "Social and emotional issues for exceptionally intellectually gifted students." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 19-29). Waco, TX: Prufrock Press.</p>
          <p>[55] Foley-Nicpon, M., Assouline, S. G., & Colangelo, N. (2013). "Twice-exceptional learners: Who needs to know what?" <em>Gifted Child Quarterly</em>, 57(3), 169-180.</p>
          <p>[56] King, E. W. (2005). "Addressing the social and emotional needs of twice-exceptional students." <em>Teaching Exceptional Children</em>, 38(1), 16-20.</p>
          <p>[57] Vespi, L., & Yewchuk, C. (1992). "A phenomenological study of the social/emotional characteristics of gifted learning disabled children." <em>Journal for the Education of the Gifted</em>, 16(1), 55-72.</p>
          <p>[58] Schuler, P. A. (2000). "Perfectionism and gifted adolescents." <em>Journal of Secondary Gifted Education</em>, 11(4), 183-196.</p>
          <p>[59] Mofield, E., & Parker Peters, M. (2015). "Multidimensional perfectionism within gifted suburban adolescents: An exploratory study." <em>Journal for the Education of the Gifted</em>, 38(3), 237-259.</p>
          <p>[60] Yell, M. L., Katsiyannis, A., & Bradley, M. R. (2017). "The Individuals with Disabilities Education Act: The evolution of special education law." In J. M. Kauffman, D. P. Hallahan, & P. C. Pullen (Eds.), <em>Handbook of special education</em> (2nd ed., pp. 55-70). New York: Routledge.</p>
          <p>[61] Assouline, S. G., & Whiteman, C. S. (2011). "Twice-exceptionality: Implications for school psychologists in the post-IDEA 2004 era." <em>Journal of Applied School Psychology</em>, 27(4), 380-402.</p>
          <p>[62] Foley-Nicpon, M. (2013). "Gifted child quarterly and talent development for gifted students with co-occurring disabilities: Thoughts on twice-exceptionality." <em>Gifted Child Quarterly</em>, 57(4), 271-272.</p>
          <p>[63] Smith, T. E. C. (2002). <em>Section 504: What teachers need to know</em>. Intervention in School and Clinic, 37(5), 259-266.</p>
          <p>[64] Zirkel, P. A. (2009). "What does the law say?" <em>Teaching Exceptional Children</em>, 41(3), 65-67.</p>
          <p>[65] National Association for Gifted Children & Council of State Directors of Programs for the Gifted. (2015). <em>2014-2015 State of the states in gifted education: Policy and practice data</em>. Washington, DC: Author.</p>
          <p>[66] Coleman, M. R., & Gallagher, J. J. (1995). "State identification policies: Gifted students from special populations." <em>Roeper Review</em>, 17(4), 268-275.</p>
          <p>[67] Baldwin, L., Baum, S., Pereles, D., & Hughes, C. (2015). "Twice-exceptional learners: The journey toward a shared vision." <em>Gifted Child Today</em>, 38(4), 206-214.</p>
          <p>[68] Wright, P. W., & Wright, P. D. (2007). <em>Wrightslaw: Special education law</em> (2nd ed.). Hartfield, VA: Harbor House Law Press.</p>
          <p>[69] Americans with Disabilities Act of 1990, Pub. L. No. 101-336, 104 Stat. 328 (1990).</p>
          <p>[70] National Association for Gifted Children. (2019). <em>2019 Pre-K–Grade 12 Gifted Programming Standards</em>. Washington, DC: Author.</p>
          <p>[71] Neumeister, K. S., Yssel, N., & Burney, V. H. (2013). "The influence of primary caregivers in fostering success in twice-exceptional children." <em>Gifted Child Quarterly</em>, 57(4), 263-274.</p>
          <p>[72] Webb, J. T., Gore, J. L., Amend, E. R., & DeVries, A. R. (2007). <em>A parent's guide to gifted children</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[73] Moon, S. M., & Hall, A. S. (1998). "Family therapy with intellectually and creatively gifted children." <em>Journal of Marital and Family Therapy</em>, 24(1), 59-80.</p>
          <p>[74] Bloom, B. S. (Ed.). (1985). <em>Developing talent in young people</em>. New York: Ballantine Books.</p>
          <p>[75] Dettmann, D. F., & Colangelo, N. (1980). "A functional model for counseling parents of gifted students." <em>Gifted Child Quarterly</em>, 24(4), 158-161.</p>
          <p>[76] Colangelo, N., & Brower, P. (1987). "Labeling gifted youngsters: Long-term impact on families." <em>Gifted Child Quarterly</em>, 31(2), 75-78.</p>
          <p>[77] Jolly, J. L., & Matthews, M. S. (2012). "A critique of the literature on parenting gifted learners." <em>Journal for the Education of the Gifted</em>, 35(3), 259-290.</p>
          <p>[78] Rimm, S. B., & Lowe, B. (1988). "Family environments of underachieving gifted students." <em>Gifted Child Quarterly</em>, 32(4), 353-359.</p>
          <p>[79] Dweck, C. S. (2006). <em>Mindset: The new psychology of success</em>. New York: Random House.</p>
          <p>[80] Bianco, M., & Leech, N. L. (2010). "Twice-exceptional learners: Effects of teacher preparation and disability labels on gifted referrals." <em>Teacher Education and Special Education</em>, 33(4), 319-334.</p>
          <p>[81] Hansen, J. B., & Feldhusen, J. F. (1994). "Comparison of trained and untrained teachers of gifted students." <em>Gifted Child Quarterly</em>, 38(3), 115-121.</p>
          <p>[82] VanTassel-Baska, J., & Johnsen, S. K. (2007). "Teacher education standards for the field of gifted education: A vision of coherence for personnel preparation in the 21st century." <em>Gifted Child Quarterly</em>, 51(2), 182-205.</p>
          <p>[83] Tomlinson, C. A., & Jarvis, J. M. (2014). "Case studies of success: Supporting academic success for students with high potential from ethnic minority and economically disadvantaged backgrounds." <em>Journal for the Education of the Gifted</em>, 37(3), 191-219.</p>
          <p>[84] Westberg, K. L., & Daoust, M. E. (2003). "The results of the replication of the Classroom Practices Survey Replication in two states." <em>Research Monograph 03168</em>. Storrs: University of Connecticut, National Research Center on the Gifted and Talented.</p>
          <p>[85] Friend, M., & Bursuck, W. D. (2015). <em>Including students with special needs: A practical guide for classroom teachers</em> (7th ed.). Upper Saddle River, NJ: Pearson.</p>
          <p>[86] Villa, R. A., Thousand, J. S., & Nevin, A. I. (2013). <em>A guide to co-teaching: New lessons and strategies to facilitate student learning</em> (3rd ed.). Thousand Oaks, CA: Corwin Press.</p>
          <p>[87] Olszewski-Kubilius, P. (2007). "The role of summer programs in developing the talents of gifted students." In J. VanTassel-Baska (Ed.), <em>Serving gifted learners beyond the traditional classroom</em> (pp. 13-32). Waco, TX: Prufrock Press.</p>
          <p>[88] Barnett, L. B., & Durden, W. G. (1993). "Education patterns of academically talented youth." <em>Gifted Child Quarterly</em>, 37(4), 161-168.</p>
          <p>[89] Baum, S. M., Renzulli, J. S., & Hébert, T. P. (1995). "Reversing underachievement: Creative productivity as a systematic intervention." <em>Gifted Child Quarterly</em>, 39(4), 224-235.</p>
          <p>[90] Renzulli, J. S., & Reis, S. M. (2014). <em>The Schoolwide Enrichment Model: A how-to guide for talent development</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[91] Gallagher, S. A., & Stepien, W. J. (1996). "Content acquisition in problem-based learning: Depth versus breadth in American studies." <em>Journal for the Education of the Gifted</em>, 19(3), 257-275.</p>
          <p>[92] Baum, S. M., Gable, R. K., & List, K. (1987). <em>Chi squares, pie charts, & me: A practitioner's view of a study of learning disabled gifted youngsters</em>. Gifted Child Quarterly, 31(2), 75-77.</p>
          <p>[93] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria, VA: Association for Supervision and Curriculum Development.</p>
          <p>[94] Hall, T. E., Meyer, A., & Rose, D. H. (Eds.). (2012). <em>Universal design for learning in the classroom: Practical applications</em>. New York: Guilford Press.</p>
          <p>[95] Brinkerhoff, L. C., McGuire, J. M., & Shaw, S. F. (2002). "Postsecondary education and transition for students with learning disabilities." <em>PRO-ED</em>.</p>
          <p>[96] Reis, S. M., McGuire, J. M., & Neu, T. W. (2000). "Compensation strategies used by high-ability students with learning disabilities who succeed in college." <em>Gifted Child Quarterly</em>, 44(2), 123-134.</p>
          <p>[97] Lovett, B. J., & Lewandowski, L. J. (2015). "Testing accommodations for students with disabilities: Research-based practice." <em>American Psychological Association</em>.</p>
          <p>[98] Kerr, B. A., & Sodano, S. (2003). "Career assessment with intellectually gifted students." <em>Journal of Career Assessment</em>, 11(2), 168-186.</p>
          <p>[99] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[100] Raskind, M. H., Goldberg, R. J., Higgins, E. L., & Herman, K. L. (1999). "Patterns of change and predictors of success in individuals with learning disabilities: Results from a twenty-year longitudinal study." <em>Learning Disabilities Research & Practice</em>, 14(1), 35-49.</p>
          <p>[101] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[102] Baum, S. M., & Owen, S. V. (1988). "High ability/learning disabled students: How are they different?" <em>Gifted Child Quarterly</em>, 32(3), 321-326.</p>
          <p>[103] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
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
