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
          <p>[3]-[103] See full reference list in the original twice-exceptional support article. Key sources include Baum, Schader, & Owen (2017); Trail (2011); Foley-Nicpon et al. (2011); Weinfeld et al. (2006); Tomlinson (2001); and the National Association for Gifted Children position statements.</p>
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
