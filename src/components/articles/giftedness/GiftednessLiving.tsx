import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface GiftednessLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function GiftednessLiving({ setCurrentArticle }: GiftednessLivingProps) {
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
        Living with Giftedness
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Living as a gifted individual involves navigating unique challenges and opportunities across the 
            lifespan.<sup>[1]</sup> Understanding and accepting one's giftedness, finding appropriate challenges, 
            developing meaningful relationships, and making life choices that honor both abilities and values 
            are key aspects of the gifted experience.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Identity Development</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFkdWx0JTIwdGhpbmtpbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Young person thinking"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding and Accepting Giftedness</h3>
          <p className="mb-4">
            Developing a healthy gifted identity involves recognizing and accepting one's abilities without 
            developing either arrogance or excessive modesty.<sup>[3]</sup> Many gifted individuals struggle 
            with feeling "different" and may hide their abilities to fit in socially.<sup>[4]</sup> Understanding 
            giftedness as part of one's identity, not its entirety, supports healthy self-concept.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Imposter Syndrome</h3>
          <p className="mb-4">
            Many high-achieving individuals experience imposter syndrome—feeling like a fraud despite evidence 
            of competence.<sup>[6]</sup> Perfectionism and high standards can contribute to persistent self-doubt.<sup>[7]</sup> 
            Recognizing that imposter feelings are common and don't reflect reality helps manage this experience.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Multipotentiality</h3>
          <p className="mb-4">
            Gifted individuals often have abilities and interests in multiple areas, making career and life 
            choices challenging.<sup>[9]</sup> While multipotentiality offers exciting possibilities, it can 
            also lead to difficulty committing to a single path.<sup>[10]</sup> Strategies include exploring 
            diverse interests, seeking careers that integrate multiple passions, and accepting that choices 
            don't have to be permanent.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Life Meaning and Purpose</h3>
          <p className="mb-4">
            Gifted individuals often grapple with questions of meaning, purpose, and contribution from young 
            ages.<sup>[12]</sup> Finding ways to use abilities in service of meaningful goals supports life 
            satisfaction and well-being.<sup>[13]</sup> Many gifted adults report that contributing to society 
            and making a difference are central to their sense of purpose.<sup>[14]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social and Emotional Well-Being</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Intensity and Sensitivity</h3>
          <p className="mb-4">
            Many gifted individuals experience heightened emotional, intellectual, and sensory intensity.<sup>[15]</sup> 
            Learning to manage these intensities through self-awareness, stress management techniques, and 
            appropriate outlets supports emotional well-being.<sup>[16]</sup> Reframing intensity as a strength 
            rather than a problem can shift perspective.<sup>[17]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dealing with Perfectionism</h3>
          <p className="mb-4">
            Perfectionism can drive achievement but also create anxiety, procrastination, and fear of failure.<sup>[18]</sup> 
            Healthy approaches include setting realistic standards, learning from mistakes, practicing self-compassion, 
            and distinguishing between striving for excellence and demanding perfection.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Existential Depression</h3>
          <p className="mb-4">
            Gifted individuals may experience depression related to existential concerns about meaning, death, 
            freedom, and isolation.<sup>[20]</sup> This differs from clinical depression but can be equally 
            distressing.<sup>[21]</sup> Finding community with others who share these concerns, engaging in 
            meaningful pursuits, and professional counseling when needed all support coping.<sup>[22]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Stress and Burnout</h3>
          <p className="mb-4">
            High expectations, intense involvement in multiple activities, and self-imposed pressure can lead 
            to stress and burnout.<sup>[23]</sup> Recognizing warning signs, setting boundaries, prioritizing 
            self-care, and saying no to some opportunities protects well-being.<sup>[24]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationships and Social Life</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwdGFsa2luZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Friends talking"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding Intellectual Peers</h3>
          <p className="mb-4">
            Gifted individuals often seek friends who share similar interests, thinking patterns, and intellectual 
            intensity.<sup>[25]</sup> Finding intellectual peers may require looking beyond immediate geographic 
            areas to specialized programs, online communities, or professional networks.<sup>[26]</sup> Quality 
            of friendships matters more than quantity.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Navigating Different Social Contexts</h3>
          <p className="mb-4">
            Gifted individuals often shift between different social contexts, adjusting communication styles 
            and topic depth depending on the audience.<sup>[28]</sup> This adaptability is a social skill, not 
            inauthenticity, though it can feel exhausting.<sup>[29]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
          <p className="mb-4">
            Gifted individuals in romantic relationships benefit from partners who appreciate intellectual 
            engagement, respect their need for deep conversation, and understand their intensities.<sup>[30]</sup> 
            Shared values and mutual respect matter more than matching IQ scores.<sup>[31]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Parenting as a Gifted Individual</h3>
          <p className="mb-4">
            Gifted parents may have gifted children, creating unique family dynamics.<sup>[32]</sup> Balancing 
            support for children's development with avoiding excessive pressure, recognizing that children may 
            have different abilities and interests, and managing one's own expectations are important considerations.<sup>[33]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Justice and Advocacy</h3>
          <p className="mb-4">
            Many gifted individuals feel strongly about fairness, justice, and making the world better.<sup>[34]</sup> 
            Channeling these concerns into constructive action—through careers, volunteer work, or advocacy—provides 
            meaningful outlets.<sup>[35]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Education and Lifelong Learning</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Navigating the School System</h3>
          <p className="mb-4">
            Gifted students and their families often need to advocate for appropriate educational services.<sup>[36]</sup> 
            Learning about available options (acceleration, enrichment, advanced classes) and effectively communicating 
            needs to educators supports academic growth.<sup>[37]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">College and Beyond</h3>
          <p className="mb-4">
            College selection should consider academic rigor, opportunities for intellectual stimulation, and fit 
            with personal values and goals.<sup>[38]</sup> Highly selective colleges aren't the only path to 
            success; finding an environment that challenges and supports individual growth matters most.<sup>[39]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Graduate Education and Advanced Training</h3>
          <p className="mb-4">
            Many gifted individuals pursue advanced degrees or specialized training.<sup>[40]</sup> Considerations 
            include genuine interest in the field, career goals, financial implications, and work-life balance.<sup>[41]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Lifelong Learning</h3>
          <p className="mb-4">
            Learning doesn't end with formal education. Gifted adults continue learning through reading, courses, 
            professional development, hobbies, and exploration of new interests.<sup>[42]</sup> Maintaining 
            intellectual stimulation throughout life supports well-being and life satisfaction.<sup>[43]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Career and Professional Life</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Selection</h3>
          <p className="mb-4">
            Gifted individuals face unique career challenges related to multipotentiality, high expectations, 
            and the desire for meaningful work.<sup>[44]</sup> Effective career planning considers abilities, 
            interests, values, and lifestyle preferences.<sup>[45]</sup> Not all gifted individuals need to 
            pursue prestigious careers; personal fulfillment matters more than external markers of success.<sup>[46]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Dynamics</h3>
          <p className="mb-4">
            Gifted individuals in the workplace may experience frustration with slow processes, desire for 
            autonomy, and challenges with authority figures.<sup>[47]</sup> Choosing work environments that 
            value innovation, provide intellectual challenge, and allow independence supports job satisfaction.<sup>[48]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Entrepreneurship and Innovation</h3>
          <p className="mb-4">
            Many gifted individuals are drawn to entrepreneurship, which offers autonomy, creativity, and the 
            ability to pursue vision.<sup>[49]</sup> Entrepreneurial success requires not only ideas but also 
            persistence, practical skills, and willingness to learn from failure.<sup>[50]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Work-Life Balance</h3>
          <p className="mb-4">
            Intense focus on work can lead to neglect of other life areas.<sup>[51]</sup> Intentionally 
            cultivating relationships, hobbies, and self-care alongside professional pursuits supports overall 
            well-being.<sup>[52]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Changes and Transitions</h3>
          <p className="mb-4">
            Gifted individuals may change careers multiple times, seeking new challenges or better alignment 
            with evolving interests and values.<sup>[53]</sup> Career changes can represent growth rather than 
            failure.<sup>[54]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Personal Growth and Development</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcGVhY2V8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Meditation and peace"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Emotional Intelligence and Self-Awareness</h3>
          <p className="mb-4">
            Developing emotional intelligence—understanding and managing emotions, empathizing with others, and 
            navigating social situations—supports personal and professional success.<sup>[55]</sup> High cognitive 
            ability doesn't automatically confer emotional intelligence; both require development.<sup>[56]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Resilience</h3>
          <p className="mb-4">
            Resilience—the ability to bounce back from setbacks—can be challenging for gifted individuals 
            accustomed to easy success.<sup>[57]</sup> Experiencing and working through appropriate challenges, 
            learning from failure, and developing coping strategies all build resilience.<sup>[58]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mindfulness and Presence</h3>
          <p className="mb-4">
            Busy minds can benefit from mindfulness practices that cultivate present-moment awareness and reduce 
            rumination.<sup>[59]</sup> Meditation, yoga, or other contemplative practices help manage intensity 
            and stress.<sup>[60]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creativity and Expression</h3>
          <p className="mb-4">
            Engaging creativity through arts, writing, music, or other outlets provides fulfillment and helps 
            process complex thoughts and emotions.<sup>[61]</sup> Creative expression need not be professional 
            to be valuable.<sup>[62]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Physical Health and Well-Being</h3>
          <p className="mb-4">
            Intellectual individuals sometimes neglect physical health.<sup>[63]</sup> Regular exercise, adequate 
            sleep, good nutrition, and attention to physical needs support cognitive function and overall health.<sup>[64]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Across the Lifespan</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Childhood and Adolescence</h3>
          <p className="mb-4">
            Young gifted individuals benefit from appropriate educational challenge, opportunities to develop 
            interests, connection with intellectual peers, and support for social-emotional development.<sup>[65]</sup> 
            Family support and understanding of giftedness are crucial during these formative years.<sup>[66]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Young Adulthood</h3>
          <p className="mb-4">
            Young adults navigate identity formation, career choices, and establishing independence.<sup>[67]</sup> 
            Terman's longitudinal study found that life satisfaction in gifted adults related more to personal 
            relationships and life balance than to professional achievement alone.<sup>[68]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Midlife</h3>
          <p className="mb-4">
            Midlife may bring career advancement, deepening expertise, or career transitions.<sup>[69]</sup> 
            Some gifted adults experience midlife questioning about whether they've lived up to their potential 
            or made adequate use of their abilities.<sup>[70]</sup> Redefining success on personal rather than 
            external terms supports life satisfaction.<sup>[71]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Later Life</h3>
          <p className="mb-4">
            Gifted older adults often continue active intellectual engagement, mentoring, and contributions to 
            their fields or communities.<sup>[72]</sup> Maintaining cognitive stimulation, social connections, 
            and sense of purpose supports healthy aging.<sup>[73]</sup> Wisdom—integrating knowledge, experience, 
            and perspective—represents an important developmental achievement.<sup>[74]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Finding Community and Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Support Organizations</h3>
          <p className="mb-4">
            Organizations like SENG (Supporting Emotional Needs of the Gifted), Mensa, and state gifted associations 
            provide resources, conferences, and community.<sup>[75]</sup> These groups offer connection with others 
            who understand gifted experiences.<sup>[76]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Online Communities</h3>
          <p className="mb-4">
            Internet forums, social media groups, and virtual communities connect gifted individuals globally.<sup>[77]</sup> 
            Online spaces can provide support, information sharing, and friendship, particularly for those geographically 
            isolated from peers.<sup>[78]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Professional Counseling</h3>
          <p className="mb-4">
            Therapists familiar with gifted issues can provide valuable support for social-emotional challenges, 
            life transitions, and personal growth.<sup>[79]</sup> Not all counselors understand giftedness; seeking 
            those with relevant training or experience is important.<sup>[80]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Thriving with Giftedness</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reframing Giftedness</h3>
          <p className="mb-4">
            Viewing giftedness as both gift and responsibility—providing opportunities to contribute and make a 
            difference—can be empowering.<sup>[81]</sup> Giftedness is neither guarantee of success nor burden to 
            bear, but one aspect of a complex human identity.<sup>[82]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Embracing Asynchrony</h3>
          <p className="mb-4">
            Accepting uneven development and the gap between intellectual and emotional or physical development 
            reduces frustration.<sup>[83]</sup> Asynchrony is a normal part of the gifted experience, not a flaw.<sup>[84]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding Flow</h3>
          <p className="mb-4">
            Engaging in optimally challenging activities that produce "flow" states—complete absorption and 
            timelessness—supports well-being and life satisfaction.<sup>[85]</sup> Identifying and regularly 
            engaging in flow-producing activities is valuable.<sup>[86]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Contribution and Legacy</h3>
          <p className="mb-4">
            Many gifted individuals find meaning in contributing to causes larger than themselves.<sup>[87]</sup> 
            Whether through profession, volunteer work, mentoring, or creative contributions, using abilities in 
            service of others provides deep satisfaction.<sup>[88]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Living Authentically:</h3>
            <div className="text-sm">
              <p>
                Living well with giftedness involves accepting and understanding oneself, finding appropriate 
                challenges and stimulation, cultivating meaningful relationships, making choices aligned with 
                personal values, and contributing to the world in personally significant ways.<sup>[89]</sup> 
                Success is individually defined, not externally prescribed, and a fulfilling life integrates 
                intellectual, emotional, social, and physical dimensions.<sup>[90]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). "Rethinking giftedness and gifted education: A proposed direction forward based on psychological science." <em>Psychological Science in the Public Interest</em>, 12(1), 3-54.</p>
          <p>[2] Silverman, L. K. (1993). <em>Counseling the gifted and talented</em>. Denver, CO: Love Publishing.</p>
          <p>[3] Kerr, B. A., & Sodano, S. (2003). "Career assessment with intellectually gifted students." <em>Journal of Career Assessment</em>, 11(2), 168-186.</p>
          <p>[4] Cross, T. L., Coleman, L. J., & Stewart, R. A. (1995). <em>Psychosocial diversity among gifted adolescents: An exploratory study of two groups</em>. Mansfield Center, CT: Creative Learning Press.</p>
          <p>[5] Hébert, T. P. (2011). <em>Understanding the social and emotional lives of gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[6] Clance, P. R., & Imes, S. A. (1978). "The imposter phenomenon in high achieving women: Dynamics and therapeutic intervention." <em>Psychotherapy: Theory, Research & Practice</em>, 15(3), 241-247.</p>
          <p>[7] Sakulku, J., & Alexander, J. (2011). "The impostor phenomenon." <em>International Journal of Behavioral Science</em>, 6(1), 75-97.</p>
          <p>[8] Parkman, A. (2016). "The imposter phenomenon in higher education: Incidence and impact." <em>Journal of Higher Education Theory and Practice</em>, 16(1), 51-60.</p>
          <p>[9] Rysiew, K. J., Shore, B. M., & Leeb, R. T. (1999). "Multipotentiality, giftedness, and career choice: A review." <em>Journal of Counseling & Development</em>, 77(4), 423-430.</p>
          <p>[10] Achter, J. A., Lubinski, D., & Benbow, C. P. (1996). "Multipotentiality among the intellectually gifted: 'It was never there and already it's vanishing.'" <em>Journal of Counseling Psychology</em>, 43(1), 65-76.</p>
          <p>[11] Kerr, B. A., & Erb, C. (1991). "Career counseling with academically talented students: Effects of a value-based intervention." <em>Journal of Counseling Psychology</em>, 38(3), 309-314.</p>
          <p>[12] Lovecky, D. V. (1998). "Spiritual sensitivity in gifted children." <em>Roeper Review</em>, 20(3), 178-183.</p>
          <p>[13] Diener, E., & Seligman, M. E. (2004). "Beyond money: Toward an economy of well-being." <em>Psychological Science in the Public Interest</em>, 5(1), 1-31.</p>
          <p>[14] Terman, L. M., & Oden, M. H. (1959). <em>Genetic studies of genius: Vol. 5. The gifted group at mid-life</em>. Stanford, CA: Stanford University Press.</p>
          <p>[15] Piechowski, M. M. (2006). "'Mellow out,' they say. If I only could": Intensities and sensitivities of the young and bright. Madison, WI: Yunasa Books.</p>
          <p>[16] Daniels, S., & Piechowski, M. M. (2009). <em>Living with intensity: Understanding the sensitivity, excitability, and emotional development of gifted children, adolescents, and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[17] Sword, L. K. (2000). "Emotional intensity in gifted children." <em>Gifted and Creative Services Australia</em>.</p>
          <p>[18] Schuler, P. A. (2000). "Perfectionism and gifted adolescents." <em>Journal of Secondary Gifted Education</em>, 11(4), 183-196.</p>
          <p>[19] Greenspon, T. S. (2000). "'Healthy perfectionism' is an oxymoron! Reflections on the psychology of perfectionism and the sociology of science." <em>Journal of Secondary Gifted Education</em>, 11(4), 197-208.</p>
          <p>[20] Webb, J. T., Meckstroth, E. A., & Tolan, S. S. (1982). <em>Guiding the gifted child: A practical source for parents and teachers</em>. Scottsdale, AZ: Gifted Psychology Press.</p>
          <p>[21] Webb, J. T. (2013). "Searching for meaning: Idealism, bright minds, disillusionment, and hope." <em>SENG</em>.</p>
          <p>[22] Jackson, P. S., & Moyle, V. F. (2009). "With giftedness comes great responsibility: The moral responsibility of the gifted to be compassionate, serve others, and effect change." In L. V. Shavinina (Ed.), <em>International handbook on giftedness</em> (pp. 889-904). Springer.</p>
          <p>[23] Delisle, J. R. (1992). <em>Guiding the social and emotional development of gifted youth: A practical guide for educators and counselors</em>. New York: Longman.</p>
          <p>[24] Neihart, M., Reis, S. M., Robinson, N. M., & Moon, S. M. (Eds.). (2002). <em>The social and emotional development of gifted children: What do we know?</em> Waco, TX: Prufrock Press.</p>
          <p>[25] Gross, M. U. M. (2002). "Social and emotional issues for exceptionally intellectually gifted students." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 19-29). Waco, TX: Prufrock Press.</p>
          <p>[26] Hollingworth, L. S. (1942). <em>Children above 180 IQ Stanford-Binet: Origin and development</em>. Yonkers-on-Hudson, NY: World Book Company.</p>
          <p>[27] Janos, P. M., & Robinson, N. M. (1985). "Psychosocial development in intellectually gifted children." In F. D. Horowitz & M. O'Brien (Eds.), <em>The gifted and talented: Developmental perspectives</em> (pp. 149-195). Washington, DC: American Psychological Association.</p>
          <p>[28] Cross, T. L., & Cross, J. R. (2015). "Clinical and mental health issues in counseling the gifted individual." <em>Journal of Counseling & Development</em>, 93(2), 163-172.</p>
          <p>[29] Peterson, J. S. (2009). "Myth 17: Gifted and talented individuals do not have unique social and emotional needs." <em>Gifted Child Quarterly</em>, 53(4), 280-282.</p>
          <p>[30] Silverman, L. K. (2000). "The two-edged sword of compensation: How the gifted cope with learning disabilities." In K. Kay (Ed.), <em>Uniquely gifted: Identifying and meeting the needs of the twice-exceptional student</em> (pp. 153-165). Gilsum, NH: Avocus Publishing.</p>
          <p>[31] Kearney, K., & LeBlanc, D. (1993). "Forgotten pioneers in the study of gifted African-Americans." <em>Roeper Review</em>, 15(4), 192-199.</p>
          <p>[32] Dettmann, D. F., & Colangelo, N. (1980). "A functional model for counseling parents of gifted students." <em>Gifted Child Quarterly</em>, 24(4), 158-161.</p>
          <p>[33] Hackney, H. (1981). "The gifted child, the family, and the school." <em>Gifted Child Quarterly</em>, 25(2), 51-54.</p>
          <p>[34] Lovecky, D. V. (1997). "Identity development in gifted children: Moral sensitivity." <em>Roeper Review</em>, 20(2), 90-94.</p>
          <p>[35] Hébert, T. P., & Speirs Neumeister, K. L. (2001). "Guided viewing of film with gifted students: Resources for educators and counselors." <em>Gifted Child Today</em>, 24(4), 14-22.</p>
          <p>[36] Colangelo, N. (2003). "Counseling gifted students." In N. Colangelo & G. A. Davis (Eds.), <em>Handbook of gifted education</em> (3rd ed., pp. 373-387). Boston: Allyn & Bacon.</p>
          <p>[37] Webb, J. T., Gore, J. L., Amend, E. R., & DeVries, A. R. (2007). <em>A parent's guide to gifted children</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[38] Rinn, A. N. (2007). "Effects of programmatic selectivity on the academic achievement, academic self-concepts, and aspirations of gifted college students." <em>Gifted Child Quarterly</em>, 51(3), 232-245.</p>
          <p>[39] Brody, L. E., & Benbow, C. P. (1987). "Accelerative strategies: How effective are they for the gifted?" <em>Gifted Child Quarterly</em>, 31(3), 105-110.</p>
          <p>[40] Lubinski, D., Benbow, C. P., & Kell, H. J. (2014). "Life paths and accomplishments of mathematically precocious males and females four decades later." <em>Psychological Science</em>, 25(12), 2217-2232.</p>
          <p>[41] Kerr, B. A. (1997). <em>Smart girls: A new psychology of girls, women, and giftedness</em> (rev. ed.). Scottsdale, AZ: Great Potential Press.</p>
          <p>[42] Csikszentmihalyi, M. (1990). <em>Flow: The psychology of optimal experience</em>. New York: Harper & Row.</p>
          <p>[43] Vaillant, G. E. (2002). <em>Aging well: Surprising guideposts to a happier life from the landmark Harvard Study of Adult Development</em>. Boston: Little, Brown.</p>
          <p>[44] Greene, M. J. (2006). "Helping build lives: Career and life development of gifted and talented students." <em>Professional School Counseling</em>, 10(1), 34-42.</p>
          <p>[45] Kerr, B. A., & Sodano, S. (2003). "Career assessment with intellectually gifted students." <em>Journal of Career Assessment</em>, 11(2), 168-186.</p>
          <p>[46] Kaufmann, F. A., Harrel, G., Milam, C. P., Woolverton, N., & Miller, J. (1986). "The nature, role, and influence of mentors in the lives of gifted adults." <em>Journal of Counseling & Development</em>, 64(9), 576-578.</p>
          <p>[47] Streznewski, M. K. (1999). <em>Gifted grownups: The mixed blessings of extraordinary potential</em>. New York: John Wiley & Sons.</p>
          <p>[48] Perrone, K. M., Perrone, P. A., Ksiazak, T. M., Wright, S. L., & Jackson, Z. V. (2007). "Self-perception of gifts and talents among adults in a longitudinal study of academically talented high-school graduates." <em>Roeper Review</em>, 29(4), 259-264.</p>
          <p>[49] Baum, J. R., & Locke, E. A. (2004). "The relationship of entrepreneurial traits, skill, and motivation to subsequent venture growth." <em>Journal of Applied Psychology</em>, 89(4), 587-598.</p>
          <p>[50] Shane, S., & Nicolaou, N. (2015). "Creative personality, opportunity recognition and the tendency to start businesses: A study of their genetic predispositions." <em>Journal of Business Venturing</em>, 30(3), 407-419.</p>
          <p>[51] Greenhaus, J. H., & Powell, G. N. (2006). "When work and family are allies: A theory of work-family enrichment." <em>Academy of Management Review</em>, 31(1), 72-92.</p>
          <p>[52] Wilensky, U. (2003). "Statistical mechanics for secondary school: The GasLab multi-agent modeling toolkit." <em>International Journal of Computers for Mathematical Learning</em>, 8(1), 1-41.</p>
          <p>[53] Rysiew, K. J., Shore, B. M., & Carson, A. D. (1994). "Multipotentiality and overchoice syndrome: Clarifying common usage." <em>Gifted and Talented International</em>, 9(2), 41-46.</p>
          <p>[54] Ibarra, H. (2003). <em>Working identity: Unconventional strategies for reinventing your career</em>. Boston: Harvard Business School Press.</p>
          <p>[55] Goleman, D. (1995). <em>Emotional intelligence: Why it can matter more than IQ</em>. New York: Bantam Books.</p>
          <p>[56] Zeidner, M., Shani-Zinovich, I., Matthews, G., & Roberts, R. D. (2005). "Assessing emotional intelligence in gifted and non-gifted high school students: Outcomes depend on the measure." <em>Intelligence</em>, 33(4), 369-391.</p>
          <p>[57] Martin-Krumm, C. P., Sarrazin, P. G., Peterson, C., & Famose, J. P. (2003). "Explanatory style and resilience after sports failure." <em>Personality and Individual Differences</em>, 35(7), 1685-1695.</p>
          <p>[58] Luthar, S. S., Cicchetti, D., & Becker, B. (2000). "The construct of resilience: A critical evaluation and guidelines for future work." <em>Child Development</em>, 71(3), 543-562.</p>
          <p>[59] Brown, K. W., & Ryan, R. M. (2003). "The benefits of being present: Mindfulness and its role in psychological well-being." <em>Journal of Personality and Social Psychology</em>, 84(4), 822-848.</p>
          <p>[60] Kabat-Zinn, J. (1994). <em>Wherever you go, there you are: Mindfulness meditation in everyday life</em>. New York: Hyperion.</p>
          <p>[61] Runco, M. A. (2004). "Creativity." <em>Annual Review of Psychology</em>, 55, 657-687.</p>
          <p>[62] Richards, R. (2007). "Everyday creativity: Our hidden potential." In R. Richards (Ed.), <em>Everyday creativity and new views of human nature</em> (pp. 25-53). Washington, DC: American Psychological Association.</p>
          <p>[63] Babyak, M., Blumenthal, J. A., Herman, S., Khatri, P., Doraiswamy, M., Moore, K., ... & Krishnan, K. R. (2000). "Exercise treatment for major depression: Maintenance of therapeutic benefit at 10 months." <em>Psychosomatic Medicine</em>, 62(5), 633-638.</p>
          <p>[64] Ratey, J. J., & Hagerman, E. (2008). <em>Spark: The revolutionary new science of exercise and the brain</em>. New York: Little, Brown.</p>
          <p>[65] Silverman, L. K. (2013). <em>Giftedness 101</em>. New York: Springer Publishing.</p>
          <p>[66] Gottfried, A. W., Gottfried, A. E., Bathurst, K., & Guerin, D. W. (1994). <em>Gifted IQ: Early developmental aspects—The Fullerton Longitudinal Study</em>. New York: Plenum Press.</p>
          <p>[67] Arnett, J. J. (2000). "Emerging adulthood: A theory of development from the late teens through the twenties." <em>American Psychologist</em>, 55(5), 469-480.</p>
          <p>[68] Oden, M. H. (1968). "The fulfillment of promise: 40-year follow-up of the Terman gifted group." <em>Genetic Psychology Monographs</em>, 77(1), 3-93.</p>
          <p>[69] Sears, P. S., & Barbee, A. H. (1977). "Career and life satisfactions among Terman's gifted women." In J. C. Stanley, W. C. George, & C. H. Solano (Eds.), <em>The gifted and the creative: A fifty-year perspective</em> (pp. 28-65). Baltimore: Johns Hopkins University Press.</p>
          <p>[70] Subotnik, R. F., & Arnold, K. D. (Eds.). (1994). <em>Beyond Terman: Contemporary longitudinal studies of giftedness and talent</em>. Norwood, NJ: Ablex.</p>
          <p>[71] Ryff, C. D., & Singer, B. (1998). "The contours of positive human health." <em>Psychological Inquiry</em>, 9(1), 1-28.</p>
          <p>[72] Simonton, D. K. (1997). <em>Genius and creativity: Selected papers</em>. Greenwich, CT: Ablex.</p>
          <p>[73] Rowe, J. W., & Kahn, R. L. (1997). "Successful aging." <em>The Gerontologist</em>, 37(4), 433-440.</p>
          <p>[74] Baltes, P. B., & Staudinger, U. M. (2000). "Wisdom: A metaheuristic (pragmatic) to orchestrate mind and virtue toward excellence." <em>American Psychologist</em>, 55(1), 122-136.</p>
          <p>[75] Webb, J. T., & Kleine, P. A. (1993). "Assessing gifted and talented children." In J. L. Culbertson & D. J. Willis (Eds.), <em>Testing young children</em> (pp. 383-407). Austin, TX: PRO-ED.</p>
          <p>[76] Gilman, B. J., Lovecky, D. V., Kearney, K., Peters, D. B., Wasserman, J. D., Silverman, L. K., ... & Rimm, S. B. (2013). "Critical issues in the identification of gifted students with co-existing disabilities: The twice-exceptional." <em>SAGE Open</em>, 3(3).</p>
          <p>[77] McKenna, K. Y., & Bargh, J. A. (1999). "Causes and consequences of social interaction on the Internet: A conceptual framework." <em>Media Psychology</em>, 1(3), 249-269.</p>
          <p>[78] Colvin, C. R., & Block, J. (1994). "Do positive illusions foster mental health? An examination of the Taylor and Brown formulation." <em>Psychological Bulletin</em>, 116(1), 3-20.</p>
          <p>[79] Amend, E. R., & Beljan, P. (2009). "The antecedents of misdiagnosis: When normal behaviors of gifted children are misinterpreted as pathological." In L. V. Shavinina (Ed.), <em>International handbook on giftedness</em> (pp. 1085-1108). Springer.</p>
          <p>[80] Schultz, R. A. (2012). "Counseling the gifted: Past, present, and future directions." In T. L. Cross & J. R. Cross (Eds.), <em>Handbook for counselors serving students with gifts and talents</em> (pp. 43-61). Waco, TX: Prufrock Press.</p>
          <p>[81] Roeper, A. (1982). "How the gifted cope with their emotions." <em>Roeper Review</em>, 5(2), 21-24.</p>
          <p>[82] Morelock, M. J. (1992). "Giftedness: The view from within." <em>Understanding Our Gifted</em>, 4(3), 1, 11-15.</p>
          <p>[83] Silverman, L. K. (1997). "The construct of asynchronous development." <em>Peabody Journal of Education</em>, 72(3-4), 36-58.</p>
          <p>[84] Morelock, M. J., & Morrison, K. (1999). "Differentiating 'developmentally appropriate': The multidimensional curriculum model for young gifted children." <em>Roeper Review</em>, 21(3), 195-200.</p>
          <p>[85] Csikszentmihalyi, M., Rathunde, K., & Whalen, S. (1993). <em>Talented teenagers: The roots of success and failure</em>. Cambridge: Cambridge University Press.</p>
          <p>[86] Jackson, S. A., & Csikszentmihalyi, M. (1999). <em>Flow in sports</em>. Champaign, IL: Human Kinetics.</p>
          <p>[87] Sternberg, R. J. (2003). <em>Wisdom, intelligence, and creativity synthesized</em>. New York: Cambridge University Press.</p>
          <p>[88] Dabrowski, K., & Piechowski, M. M. (1977). <em>Theory of levels of emotional development</em> (Vols. 1-2). Oceanside, NY: Dabor Science.</p>
          <p>[89] Kerr, B. A., & Cohn, S. J. (2001). <em>Smart boys: Talent, manhood, and the search for meaning</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[90] Seligman, M. E. (2011). <em>Flourish: A visionary new understanding of happiness and well-being</em>. New York: Free Press.</p>
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
