import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TwiceExceptionalLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function TwiceExceptionalLiving({ setCurrentArticle }: TwiceExceptionalLivingProps) {
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
        Living with Twice-Exceptionality
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Living as a twice-exceptional individual involves navigating the unique challenges and opportunities 
            that come from possessing both exceptional abilities and significant challenges.<sup>[1]</sup> 
            Success requires self-understanding, effective strategies, supportive relationships, and environments 
            that honor both aspects of one's exceptionalities.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Identity and Self-Understanding</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWZsZWN0aW5nfGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Person reflecting"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Your Profile</h3>
          <p className="mb-4">
            Understanding one's specific pattern of strengths and challenges is foundational to success.<sup>[3]</sup> 
            Learning about your twice-exceptionality—what it means, how it manifests, and how it affects various 
            areas of life—provides a framework for making sense of experiences.<sup>[4]</sup> This understanding 
            often brings relief and validation.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Integrating Both Identities</h3>
          <p className="mb-4">
            Developing an integrated identity that acknowledges both giftedness and disability is important for 
            psychological well-being.<sup>[6]</sup> Neither aspect should be ignored or overemphasized at the 
            expense of the other.<sup>[7]</sup> You are not defined solely by either your gifts or your challenges, 
            but by the complex interplay of both.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Internal Experience</h3>
          <p className="mb-4">
            Many 2e individuals describe feeling "different" from both typical learners and from others who are 
            gifted or who have disabilities.<sup>[9]</sup> The internal experience often includes awareness of 
            significant discrepancies between abilities and performance, leading to confusion and frustration.<sup>[10]</sup> 
            Understanding that these feelings are common among 2e individuals can reduce isolation.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Overcoming Imposter Syndrome</h3>
          <p className="mb-4">
            Many 2e individuals experience imposter syndrome—feeling like a fraud despite evidence of high 
            ability.<sup>[12]</sup> Disabilities can fuel self-doubt, making accomplishments feel undeserved.<sup>[13]</sup> 
            Recognizing this pattern and actively challenging distorted thinking helps manage imposter feelings.<sup>[14]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Journey</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Navigating School</h3>
          <p className="mb-4">
            School years can be challenging for 2e students who often feel they don't fit in gifted programs, 
            special education settings, or general classrooms.<sup>[15]</sup> Finding the right educational 
            environment—whether traditional school, specialized program, homeschooling, or alternative education—
            significantly impacts success and well-being.<sup>[16]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Advocating for Your Needs</h3>
          <p className="mb-4">
            Self-advocacy skills are essential.<sup>[17]</sup> Learning to communicate your needs, request 
            accommodations, explain your profile, and seek support when necessary empowers you throughout life.<sup>[18]</sup> 
            Advocacy includes both asking for help and declining services that don't fit your needs.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">College and Higher Education</h3>
          <p className="mb-4">
            College presents both opportunities and challenges for 2e students.<sup>[20]</sup> Success requires 
            selecting appropriate schools, accessing disability services, managing increased independence, and 
            developing effective study strategies.<sup>[21]</sup> Many 2e students thrive in college where they 
            can focus on interests and choose accessible formats.<sup>[22]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Graduate and Professional Education</h3>
          <p className="mb-4">
            Advanced degrees can be rewarding for 2e individuals who find their passion.<sup>[23]</sup> However, 
            challenges with academic writing, comprehensive exams, or dissertation work may require additional 
            support.<sup>[24]</sup> Many successful professionals are twice-exceptional, demonstrating that 
            advanced education is achievable.<sup>[25]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Career and Work Life</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwc3VjY2Vzc3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Work success"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding the Right Fit</h3>
          <p className="mb-4">
            Career selection should leverage strengths while managing challenges.<sup>[26]</sup> Successful 2e 
            adults often work in fields utilizing their talents where disabilities have minimal impact.<sup>[27]</sup> 
            Careers in science, technology, arts, entrepreneurship, and specialized fields attract many 2e 
            individuals.<sup>[28]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Accommodations</h3>
          <p className="mb-4">
            Under the ADA, employees with documented disabilities can request reasonable accommodations.<sup>[29]</sup> 
            Accommodations might include assistive technology, flexible scheduling, modified communication formats, 
            or environmental adjustments.<sup>[30]</sup> Deciding whether and when to disclose disabilities is a 
            personal choice with pros and cons.<sup>[31]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Entrepreneurship</h3>
          <p className="mb-4">
            Many 2e individuals gravitate toward self-employment or entrepreneurship, which offers autonomy, 
            flexibility, and ability to structure work around strengths.<sup>[32]</sup> Entrepreneurship allows 
            focus on creative, strategic thinking while delegating or accommodating areas of weakness.<sup>[33]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Workplace Challenges</h3>
          <p className="mb-4">
            Common workplace challenges include organization, time management, written communication, or social 
            navigation.<sup>[34]</sup> Developing personalized systems, using technology, and knowing when to ask 
            for help support workplace success.<sup>[35]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Changes and Growth</h3>
          <p className="mb-4">
            2e adults may change careers multiple times, seeking better fit or following evolving interests.<sup>[36]</sup> 
            Career changes can represent growth and self-knowledge rather than failure.<sup>[37]</sup> The combination 
            of diverse abilities often enables success across different fields.<sup>[38]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationships and Social Life</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding Your People</h3>
          <p className="mb-4">
            Finding friends and partners who appreciate both your abilities and accept your challenges is 
            important.<sup>[39]</sup> Many 2e individuals feel most comfortable with others who are also 2e, 
            gifted, neurodiverse, or who simply value authenticity.<sup>[40]</sup> Quality of relationships 
            matters more than quantity.<sup>[41]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication in Relationships</h3>
          <p className="mb-4">
            Open communication about needs, preferences, and challenges strengthens relationships.<sup>[42]</sup> 
            Partners, friends, and family who understand your twice-exceptionality can provide better support.<sup>[43]</sup> 
            However, you're not obligated to disclose more than feels comfortable.<sup>[44]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
          <p className="mb-4">
            Successful romantic relationships involve partners who value intellectual connection, accept differences, 
            and support both growth and accommodation needs.<sup>[45]</sup> Communication about how twice-exceptionality 
            affects daily life, responsibilities, and plans helps prevent misunderstandings.<sup>[46]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Parenting as a 2e Adult</h3>
          <p className="mb-4">
            2e adults who become parents may have 2e children, creating unique family dynamics.<sup>[47]</sup> 
            Understanding your own profile helps you support your children while avoiding projection or 
            over-identification.<sup>[48]</sup> Balancing support for children's development with managing your 
            own needs requires intentional effort.<sup>[49]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Mental Health and Well-Being</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Anxiety and Depression</h3>
          <p className="mb-4">
            Rates of anxiety and depression are elevated among 2e individuals.<sup>[50]</sup> Factors include 
            perfectionism, social difficulties, chronic stress from navigating challenges, and awareness of 
            discrepancies between potential and achievement.<sup>[51]</sup> Professional counseling, medication 
            when appropriate, and self-care strategies all support mental health.<sup>[52]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Processing Emotional Intensity</h3>
          <p className="mb-4">
            Many 2e individuals experience emotional intensity characteristic of giftedness.<sup>[53]</sup> 
            Learning to manage intense emotions through mindfulness, emotional regulation skills, creative 
            expression, or physical activity supports well-being.<sup>[54]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Perfectionism and Self-Compassion</h3>
          <p className="mb-4">
            Perfectionism is common and problematic for 2e individuals.<sup>[55]</sup> Developing self-compassion—
            treating yourself with kindness rather than harsh judgment—counters perfectionism.<sup>[56]</sup> 
            Accepting that mistakes and struggles are part of being human, not personal failures, promotes 
            resilience.<sup>[57]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Therapy and Counseling</h3>
          <p className="mb-4">
            Working with therapists who understand both giftedness and disabilities provides valuable support.<sup>[58]</sup> 
            Therapy can address identity issues, relationship challenges, anxiety, depression, or life transitions.<sup>[59]</sup> 
            Cognitive-behavioral, acceptance-based, and strength-focused approaches can be particularly helpful.<sup>[60]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Practical Life Management</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6YXRpb24lMjBwbGFubmluZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Organization and planning"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization and Time Management</h3>
          <p className="mb-4">
            Executive function challenges affect daily life management.<sup>[61]</sup> Developing personalized 
            systems for organization, time management, and task completion is essential.<sup>[62]</sup> Tools 
            like calendars, apps, lists, routines, and environmental structure support executive functioning.<sup>[63]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Technology and Tools</h3>
          <p className="mb-4">
            Technology can be transformative for 2e adults.<sup>[64]</sup> Assistive technology, productivity 
            apps, organizational tools, and communication platforms enable management of challenges while 
            leveraging strengths.<sup>[65]</sup> Finding the right tools and learning to use them effectively 
            takes experimentation.<sup>[66]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Support Systems</h3>
          <p className="mb-4">
            Successful 2e adults often build support systems including family, friends, professionals, and 
            services that help manage areas of challenge.<sup>[67]</sup> Asking for and accepting help is a 
            strength, not weakness.<sup>[68]</sup> Outsourcing tasks in areas of weakness frees energy for 
            strengths.<sup>[69]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Care and Balance</h3>
          <p className="mb-4">
            Maintaining physical health, adequate sleep, good nutrition, and regular exercise supports cognitive 
            and emotional functioning.<sup>[70]</sup> Balance between work, relationships, interests, and rest 
            prevents burnout.<sup>[71]</sup> Recognizing your own limits and respecting them is important.<sup>[72]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Personal Growth and Development</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developing Your Gifts</h3>
          <p className="mb-4">
            Continuing to develop talents and pursue interests provides fulfillment and purpose.<sup>[73]</sup> 
            Whether through career, hobbies, creative pursuits, or volunteer work, using your abilities 
            meaningfully contributes to life satisfaction.<sup>[74]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Learning and Growth Mindset</h3>
          <p className="mb-4">
            Adopting a growth mindset—believing abilities can develop through effort—supports resilience.<sup>[75]</sup> 
            Viewing challenges as opportunities for learning rather than evidence of inadequacy promotes 
            continued growth.<sup>[76]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding Meaning and Purpose</h3>
          <p className="mb-4">
            Many 2e individuals grapple with questions of meaning and purpose.<sup>[77]</sup> Finding ways to 
            contribute, make a difference, or pursue meaningful goals provides direction and satisfaction.<sup>[78]</sup> 
            Your unique combination of abilities and experiences may enable contributions others cannot make.<sup>[79]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Embracing Authenticity</h3>
          <p className="mb-4">
            Living authentically—being true to yourself rather than trying to conform to others' expectations—
            supports well-being.<sup>[80]</sup> Accepting both your strengths and challenges without pretense 
            allows genuine connection and reduces stress.<sup>[81]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Community and Connection</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding Community</h3>
          <p className="mb-4">
            Connecting with other 2e individuals through support groups, online communities, conferences, or 
            social media reduces isolation.<sup>[82]</sup> Shared experiences create understanding and validation 
            that's difficult to find elsewhere.<sup>[83]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Advocacy and Awareness</h3>
          <p className="mb-4">
            Some 2e adults become advocates, working to improve understanding and services for others.<sup>[84]</sup> 
            Sharing your story, educating others, or working for systemic change can be personally meaningful 
            and benefit the 2e community.<sup>[85]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mentorship</h3>
          <p className="mb-4">
            Both receiving mentorship from older 2e adults and mentoring younger ones provides connection and 
            support.<sup>[86]</sup> Learning from others' experiences and sharing your own creates community 
            and helps navigate common challenges.<sup>[87]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Success Stories and Role Models</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Notable Twice-Exceptional Individuals</h3>
          <p className="mb-4">
            Many accomplished individuals are believed to have been twice-exceptional, including scientists, 
            inventors, artists, and entrepreneurs.<sup>[88]</sup> Albert Einstein, Thomas Edison, and Temple 
            Grandin are frequently cited examples.<sup>[89]</sup> Their achievements demonstrate that 
            twice-exceptionality need not limit success.<sup>[90]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Contemporary Success</h3>
          <p className="mb-4">
            Research on successful adults with learning disabilities reveals common factors including self-awareness, 
            realistic goal-setting, persistence, use of support systems, and leveraging strengths.<sup>[91]</sup> 
            Many 2e adults report that their unique perspective and problem-solving abilities contribute to their 
            success.<sup>[92]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Redefining Success</h3>
          <p className="mb-4">
            Success for 2e individuals may look different than conventional definitions.<sup>[93]</sup> Personal 
            fulfillment, meaningful relationships, contributing to areas of passion, and living authentically 
            may matter more than traditional markers like prestigious careers or wealth.<sup>[94]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Lifelong Development</h3>
          <p className="mb-4">
            Twice-exceptionality is a lifelong experience, not something you outgrow.<sup>[95]</sup> However, 
            self-understanding, effective strategies, and life experience often make management easier over time.<sup>[96]</sup> 
            Many 2e adults report that life improves significantly after school years when they gain more control 
            over their environments and pursuits.<sup>[97]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hope and Possibility</h3>
          <p className="mb-4">
            While twice-exceptionality presents real challenges, it also brings unique gifts and perspectives.<sup>[98]</sup> 
            With appropriate support, self-understanding, and opportunity to develop talents, 2e individuals can 
            lead fulfilling, successful lives.<sup>[99]</sup> Your combination of abilities and challenges makes 
            you uniquely you—not better or worse than others, simply different.<sup>[100]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Living Well with Twice-Exceptionality:</h3>
            <div className="text-sm">
              <p>
                Success as a twice-exceptional individual involves self-understanding, developing effective strategies, 
                building supportive relationships, creating environments that work for you, and accepting both your 
                abilities and challenges.<sup>[101]</sup> While the journey has unique challenges, many 2e individuals 
                report that their distinctive combination of strengths and weaknesses contributes to their creativity, 
                problem-solving, and unique contributions to the world.<sup>[102]</sup> You are not defined by either 
                your gifts or your challenges alone, but by how you navigate and integrate both into a meaningful 
                life.<sup>[103]</sup>
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
          <p>[3] Foley-Nicpon, M., Assouline, S. G., & Colangelo, N. (2013). "Twice-exceptional learners: Who needs to know what?" <em>Gifted Child Quarterly</em>, 57(3), 169-180.</p>
          <p>[4] King, E. W. (2005). "Addressing the social and emotional needs of twice-exceptional students." <em>Teaching Exceptional Children</em>, 38(1), 16-20.</p>
          <p>[5] Vespi, L., & Yewchuk, C. (1992). "A phenomenological study of the social/emotional characteristics of gifted learning disabled children." <em>Journal for the Education of the Gifted</em>, 16(1), 55-72.</p>
          <p>[6] Reis, S. M., & Colbert, R. (2004). "Counseling needs of academically talented students with learning disabilities." <em>Professional School Counseling</em>, 8(2), 156-167.</p>
          <p>[7] Neihart, M. (2008). "Identifying and providing services to twice exceptional children." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 115-137). New York: Springer.</p>
          <p>[8] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[9] Cross, T. L., Coleman, L. J., & Stewart, R. A. (1995). <em>Psychosocial diversity among gifted adolescents: An exploratory study of two groups</em>. Mansfield Center, CT: Creative Learning Press.</p>
          <p>[10] Assouline, S. G., Foley Nicpon, M., & Huber, D. H. (2006). "The impact of vulnerabilities and strengths on the academic experiences of twice-exceptional students: A message to school counselors." <em>Professional School Counseling</em>, 10(1), 14-24.</p>
          <p>[11] Olenchak, F. R., & Reis, S. M. (2002). "Gifted students with learning disabilities." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 177-191). Waco, TX: Prufrock Press.</p>
          <p>[12] Clance, P. R., & Imes, S. A. (1978). "The imposter phenomenon in high achieving women: Dynamics and therapeutic intervention." <em>Psychotherapy: Theory, Research & Practice</em>, 15(3), 241-247.</p>
          <p>[13] Sakulku, J., & Alexander, J. (2011). "The impostor phenomenon." <em>International Journal of Behavioral Science</em>, 6(1), 75-97.</p>
          <p>[14] Parkman, A. (2016). "The imposter phenomenon in higher education: Incidence and impact." <em>Journal of Higher Education Theory and Practice</em>, 16(1), 51-60.</p>
          <p>[15] Yssel, N., Prater, M. A., & Smith, D. (2010). "How can such a smart kid not get it? Finding the right fit for twice-exceptional students in our schools." <em>Gifted Child Today</em>, 33(1), 54-61.</p>
          <p>[16] Trail, B. A. (2011). <em>Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[17] Test, D. W., Fowler, C. H., Wood, W. M., Brewer, D. M., & Eddy, S. (2005). "A conceptual framework of self-advocacy for students with disabilities." <em>Remedial and Special Education</em>, 26(1), 43-54.</p>
          <p>[18] Palmer, S. B., & Wehmeyer, M. L. (2003). "Promoting self-determination in early elementary school: Teaching self-regulated problem-solving and goal-setting skills." <em>Remedial and Special Education</em>, 24(2), 115-126.</p>
          <p>[19] Webb, J. T., Gore, J. L., Amend, E. R., & DeVries, A. R. (2007). <em>A parent's guide to gifted children</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[20] Brinkerhoff, L. C., McGuire, J. M., & Shaw, S. F. (2002). <em>Postsecondary education and transition for students with learning disabilities</em>. Austin, TX: PRO-ED.</p>
          <p>[21] Reis, S. M., McGuire, J. M., & Neu, T. W. (2000). "Compensation strategies used by high-ability students with learning disabilities who succeed in college." <em>Gifted Child Quarterly</em>, 44(2), 123-134.</p>
          <p>[22] Lovett, B. J., & Lewandowski, L. J. (2015). <em>Testing accommodations for students with disabilities: Research-based practice</em>. Washington, DC: American Psychological Association.</p>
          <p>[23] Lubinski, D., Benbow, C. P., & Kell, H. J. (2014). "Life paths and accomplishments of mathematically precocious males and females four decades later." <em>Psychological Science</em>, 25(12), 2217-2232.</p>
          <p>[24] Reis, S. M., Neu, T. W., & McGuire, J. M. (1997). "Case studies of high-ability students with learning disabilities who have achieved." <em>Exceptional Children</em>, 63(4), 463-479.</p>
          <p>[25] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[26] Kerr, B. A., & Sodano, S. (2003). "Career assessment with intellectually gifted students." <em>Journal of Career Assessment</em>, 11(2), 168-186.</p>
          <p>[27] Raskind, M. H., Goldberg, R. J., Higgins, E. L., & Herman, K. L. (1999). "Patterns of change and predictors of success in individuals with learning disabilities: Results from a twenty-year longitudinal study." <em>Learning Disabilities Research & Practice</em>, 14(1), 35-49.</p>
          <p>[28] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties, computer images and the ironies of creativity</em>. Amherst, NY: Prometheus Books.</p>
          <p>[29] Americans with Disabilities Act of 1990, Pub. L. No. 101-336, 104 Stat. 328 (1990).</p>
          <p>[30] Schreiner, M. B. (2007). "Effective self-advocacy: What students and special educators need to know." <em>Intervention in School and Clinic</em>, 42(5), 300-304.</p>
          <p>[31] Madaus, J. W., Foley, T. E., McGuire, J. M., & Ruban, L. M. (2002). "Employment self-disclosure of postsecondary graduates with learning disabilities: Rates and rationales." <em>Journal of Learning Disabilities</em>, 35(4), 364-369.</p>
          <p>[32] Shane, S., & Nicolaou, N. (2015). "Creative personality, opportunity recognition and the tendency to start businesses: A study of their genetic predispositions." <em>Journal of Business Venturing</em>, 30(3), 407-419.</p>
          <p>[33] Baum, J. R., & Locke, E. A. (2004). "The relationship of entrepreneurial traits, skill, and motivation to subsequent venture growth." <em>Journal of Applied Psychology</em>, 89(4), 587-598.</p>
          <p>[34] Neri, M. T., & Kroll, T. (2003). "Understanding the consequences of access barriers to health care: Experiences of adults with disabilities." <em>Disability and Rehabilitation</em>, 25(2), 85-96.</p>
          <p>[35] Greenhaus, J. H., & Powell, G. N. (2006). "When work and family are allies: A theory of work-family enrichment." <em>Academy of Management Review</em>, 31(1), 72-92.</p>
          <p>[36] Ibarra, H. (2003). <em>Working identity: Unconventional strategies for reinventing your career</em>. Boston: Harvard Business School Press.</p>
          <p>[37] Rysiew, K. J., Shore, B. M., & Carson, A. D. (1994). "Multipotentiality and overchoice syndrome: Clarifying common usage." <em>Gifted and Talented International</em>, 9(2), 41-46.</p>
          <p>[38] Achter, J. A., Lubinski, D., & Benbow, C. P. (1996). "Multipotentiality among the intellectually gifted: 'It was never there and already it's vanishing.'" <em>Journal of Counseling Psychology</em>, 43(1), 65-76.</p>
          <p>[39] Janos, P. M., & Robinson, N. M. (1985). "Psychosocial development in intellectually gifted children." In F. D. Horowitz & M. O'Brien (Eds.), <em>The gifted and talented: Developmental perspectives</em> (pp. 149-195). Washington, DC: American Psychological Association.</p>
          <p>[40] Gross, M. U. M. (2002). "Social and emotional issues for exceptionally intellectually gifted students." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 19-29). Waco, TX: Prufrock Press.</p>
          <p>[41] Hébert, T. P. (2011). <em>Understanding the social and emotional lives of gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[42] Gottman, J. M., & Silver, N. (1999). <em>The seven principles for making marriage work</em>. New York: Three Rivers Press.</p>
          <p>[43] Neumeister, K. S., Yssel, N., & Burney, V. H. (2013). "The influence of primary caregivers in fostering success in twice-exceptional children." <em>Gifted Child Quarterly</em>, 57(4), 263-274.</p>
          <p>[44] Greene, R. W., & Winkler, J. M. (2019). "Collaborative & proactive solutions (CPS): A review of research findings in families, schools, and treatment facilities." <em>Clinical Child and Family Psychology Review</em>, 22(4), 549-561.</p>
          <p>[45] Kerr, B. A. (1997). <em>Smart girls: A new psychology of girls, women, and giftedness</em> (rev. ed.). Scottsdale, AZ: Great Potential Press.</p>
          <p>[46] Moon, S. M., & Hall, A. S. (1998). "Family therapy with intellectually and creatively gifted children." <em>Journal of Marital and Family Therapy</em>, 24(1), 59-80.</p>
          <p>[47] Colangelo, N., & Brower, P. (1987). "Labeling gifted youngsters: Long-term impact on families." <em>Gifted Child Quarterly</em>, 31(2), 75-78.</p>
          <p>[48] Dettmann, D. F., & Colangelo, N. (1980). "A functional model for counseling parents of gifted students." <em>Gifted Child Quarterly</em>, 24(4), 158-161.</p>
          <p>[49] Hackney, H. (1981). "The gifted child, the family, and the school." <em>Gifted Child Quarterly</em>, 25(2), 51-54.</p>
          <p>[50] Neihart, M. (2002). "Gifted children and depression." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 93-101). Waco, TX: Prufrock Press.</p>
          <p>[51] Foley Nicpon, M., Rickels, H., Assouline, S. G., & Richards, A. (2012). "Self-esteem and self-concept examination among gifted students with ADHD." <em>Journal for the Education of the Gifted</em>, 35(3), 220-240.</p>
          <p>[52] Peterson, J. S. (2015). "School counselors and gifted kids: Respecting both cognitive and affective." <em>Journal of Counseling & Development</em>, 93(2), 153-162.</p>
          <p>[53] Daniels, S., & Piechowski, M. M. (2009). <em>Living with intensity: Understanding the sensitivity, excitability, and emotional development of gifted children, adolescents, and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[54] Sword, L. K. (2000). "Emotional intensity in gifted children." <em>Gifted and Creative Services Australia</em>.</p>
          <p>[55] Schuler, P. A. (2000). "Perfectionism and gifted adolescents." <em>Journal of Secondary Gifted Education</em>, 11(4), 183-196.</p>
          <p>[56] Neff, K. D. (2003). "The development and validation of a scale to measure self-compassion." <em>Self and Identity</em>, 2(3), 223-250.</p>
          <p>[57] Greenspon, T. S. (2000). "'Healthy perfectionism' is an oxymoron! Reflections on the psychology of perfectionism and the sociology of science." <em>Journal of Secondary Gifted Education</em>, 11(4), 197-208.</p>
          <p>[58] Wood, S. M. (2010). "Best practices in counseling the gifted in schools: What's really happening?" <em>Gifted Child Quarterly</em>, 54(1), 42-58.</p>
          <p>[59] Mendaglio, S., & Peterson, J. S. (Eds.). (2007). <em>Models of counseling gifted children, adolescents, and young adults</em>. Waco, TX: Prufrock Press.</p>
          <p>[60] Hayes, S. C., Strosahl, K. D., & Wilson, K. G. (2011). <em>Acceptance and commitment therapy: The process and practice of mindful change</em> (2nd ed.). New York: Guilford Press.</p>
          <p>[61] Dawson, P., & Guare, R. (2010). <em>Executive skills in children and adolescents: A practical guide to assessment and intervention</em> (2nd ed.). New York: Guilford Press.</p>
          <p>[62] Meltzer, L. (Ed.). (2010). <em>Promoting executive function in the classroom</em>. New York: Guilford Press.</p>
          <p>[63] Kaufman, C. (2010). <em>Executive function in the classroom: Practical strategies for improving performance and enhancing skills for all students</em>. Baltimore: Paul H. Brookes.</p>
          <p>[64] Edyburn, D. L. (2004). "2003 in review: A synthesis of the special education technology literature." <em>Journal of Special Education Technology</em>, 19(4), 57-80.</p>
          <p>[65] Bryant, B. R., & Bryant, D. P. (2012). "Assistive technology for people with disabilities." <em>Education Resources Information Center</em>.</p>
          <p>[66] Alper, S., & Raharinirina, S. (2006). "Assistive technology for individuals with disabilities: A review and synthesis of the literature." <em>Journal of Special Education Technology</em>, 21(2), 47-64.</p>
          <p>[67] Reiff, H. B., Gerber, P. J., & Ginsberg, R. (1997). "Exceeding expectations: Successful adults with learning disabilities." <em>Austin, TX: PRO-ED</em>.</p>
          <p>[68] Goldberg, R. J., Higgins, E. L., Raskind, M. H., & Herman, K. L. (2003). "Predictors of success in individuals with learning disabilities: A qualitative analysis of a 20-year longitudinal study." <em>Learning Disabilities Research & Practice</em>, 18(4), 222-236.</p>
          <p>[69] Greenhaus, J. H., Collins, K. M., & Shaw, J. D. (2003). "The relation between work–family balance and quality of life." <em>Journal of Vocational Behavior</em>, 63(3), 510-531.</p>
          <p>[70] Ratey, J. J., & Hagerman, E. (2008). <em>Spark: The revolutionary new science of exercise and the brain</em>. New York: Little, Brown.</p>
          <p>[71] Maslach, C., Schaufeli, W. B., & Leiter, M. P. (2001). "Job burnout." <em>Annual Review of Psychology</em>, 52(1), 397-422.</p>
          <p>[72] Brown, B. (2010). <em>The gifts of imperfection: Let go of who you think you're supposed to be and embrace who you are</em>. Center City, MN: Hazelden Publishing.</p>
          <p>[73] Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). "Rethinking giftedness and gifted education: A proposed direction forward based on psychological science." <em>Psychological Science in the Public Interest</em>, 12(1), 3-54.</p>
          <p>[74] Csikszentmihalyi, M. (1990). <em>Flow: The psychology of optimal experience</em>. New York: Harper & Row.</p>
          <p>[75] Dweck, C. S. (2006). <em>Mindset: The new psychology of success</em>. New York: Random House.</p>
          <p>[76] Yeager, D. S., & Dweck, C. S. (2012). "Mindsets that promote resilience: When students believe that personal characteristics can be developed." <em>Educational Psychologist</em>, 47(4), 302-314.</p>
          <p>[77] Lovecky, D. V. (1998). "Spiritual sensitivity in gifted children." <em>Roeper Review</em>, 20(3), 178-183.</p>
          <p>[78] Diener, E., & Seligman, M. E. (2004). "Beyond money: Toward an economy of well-being." <em>Psychological Science in the Public Interest</em>, 5(1), 1-31.</p>
          <p>[79] Sternberg, R. J. (2003). <em>Wisdom, intelligence, and creativity synthesized</em>. New York: Cambridge University Press.</p>
          <p>[80] Rogers, C. R. (1961). <em>On becoming a person: A therapist's view of psychotherapy</em>. Boston: Houghton Mifflin.</p>
          <p>[81] Brown, B. (2012). <em>Daring greatly: How the courage to be vulnerable transforms the way we live, love, parent, and lead</em>. New York: Gotham Books.</p>
          <p>[82] McKenna, K. Y., & Bargh, J. A. (1999). "Causes and consequences of social interaction on the Internet: A conceptual framework." <em>Media Psychology</em>, 1(3), 249-269.</p>
          <p>[83] Pennebaker, J. W., & Seagal, J. D. (1999). "Forming a story: The health benefits of narrative." <em>Journal of Clinical Psychology</em>, 55(10), 1243-1254.</p>
          <p>[84] Besnoy, K. D., Swoszowski, N. C., Newman, J. L., Floyd, A., Jones, P., & Byrne, C. (2015). "The advocacy experiences of parents of elementary age, twice-exceptional children." <em>Gifted Child Quarterly</em>, 59(2), 108-123.</p>
          <p>[85] Wehmeyer, M. L., & Schwartz, M. (1997). "Self-determination and positive adult outcomes: A follow-up study of youth with mental retardation or learning disabilities." <em>Exceptional Children</em>, 63(2), 245-255.</p>
          <p>[86] Hébert, T. P., & Olenchak, F. R. (2000). "Mentors for gifted underachieving males: Developing potential and realizing promise." <em>Gifted Child Quarterly</em>, 44(3), 196-207.</p>
          <p>[87] Siegle, D. (2005). "Developing mentorship programs for gifted students." In F. A. Karnes & S. M. Bean (Eds.), <em>Methods and materials for teaching the gifted</em> (2nd ed., pp. 265-293). Waco, TX: Prufrock Press.</p>
          <p>[88] West, T. G. (1991). <em>In the mind's eye: Visual thinkers, gifted people with learning difficulties, computer images, and the ironies of creativity</em>. Buffalo, NY: Prometheus Books.</p>
          <p>[89] Grandin, T., & Panek, R. (2013). <em>The autistic brain: Thinking across the spectrum</em>. Boston: Houghton Mifflin Harcourt.</p>
          <p>[90] Eide, B. L., & Eide, F. F. (2011). <em>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</em>. New York: Hudson Street Press.</p>
          <p>[91] Raskind, M. H., Goldberg, R. J., Higgins, E. L., & Herman, K. L. (2002). "Teaching 'life success' to students with LD: Lessons learned from a 20-year study." <em>Intervention in School and Clinic</em>, 37(4), 201-208.</p>
          <p>[92] Reiff, H. B., Ginsberg, R., & Gerber, P. J. (1995). "New perspectives on teaching from successful adults with learning disabilities." <em>Remedial and Special Education</em>, 16(2), 96-107.</p>
          <p>[93] Ryff, C. D., & Singer, B. (1998). "The contours of positive human health." <em>Psychological Inquiry</em>, 9(1), 1-28.</p>
          <p>[94] Seligman, M. E. (2011). <em>Flourish: A visionary new understanding of happiness and well-being</em>. New York: Free Press.</p>
          <p>[95] Streznewski, M. K. (1999). <em>Gifted grownups: The mixed blessings of extraordinary potential</em>. New York: John Wiley & Sons.</p>
          <p>[96] Perrone, K. M., Perrone, P. A., Ksiazak, T. M., Wright, S. L., & Jackson, Z. V. (2007). "Self-perception of gifts and talents among adults in a longitudinal study of academically talented high-school graduates." <em>Roeper Review</em>, 29(4), 259-264.</p>
          <p>[97] Oden, M. H. (1968). "The fulfillment of promise: 40-year follow-up of the Terman gifted group." <em>Genetic Psychology Monographs</em>, 77(1), 3-93.</p>
          <p>[98] Armstrong, T. (2010). <em>Neurodiversity: Discovering the extraordinary gifts of autism, ADHD, dyslexia, and other brain differences</em>. Philadelphia: Da Capo Press.</p>
          <p>[99] Baum, S. M., & Owen, S. V. (2004). <em>To be gifted and learning disabled: Strategies for helping bright students with LD, ADHD, and more</em>. Mansfield Center, CT: Creative Learning Press.</p>
          <p>[100] Singer, J. (2017). <em>NeuroDiversity: The birth of an idea</em>. Amazon.</p>
          <p>[101] Ronksley-Pavia, M. (2015). "A model of twice-exceptionality: Explaining and defining the apparent paradoxical combination of disability and giftedness in childhood." <em>Journal for the Education of the Gifted</em>, 38(3), 318-340.</p>
          <p>[102] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[103] Baldwin, L., Baum, S., Pereles, D., & Hughes, C. (2015). "Twice-exceptional learners: The journey toward a shared vision." <em>Gifted Child Today</em>, 38(4), 206-214.</p>
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
