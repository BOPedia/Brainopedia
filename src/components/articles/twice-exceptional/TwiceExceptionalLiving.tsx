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
          <p>[3]-[103] See full reference list in the original twice-exceptional living article. Key sources include Foley-Nicpon, Assouline, & Colangelo (2013); Baum, Schader, & Owen (2017); Raskind et al. (1999); Gerber, Ginsberg, & Reiff (1992); Dweck (2006); and Armstrong (2010).</p>
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
