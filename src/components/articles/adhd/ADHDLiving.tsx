import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';

interface ADHDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDLiving({ setCurrentArticle }: ADHDLivingProps) {
  function OverviewContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Thriving with ADHD</h2>
          
          <p className="mb-4">
            Individuals with ADHD lead full and successful lives across all areas of society. While ADHD 
            presents challenges, many people with ADHD also describe unique strengths and appreciate aspects 
            of how their brain works. Living well with ADHD involves understanding one's unique pattern of 
            symptoms, developing personalized coping strategies, accessing appropriate accommodations in work 
            and education, and connecting with supportive communities.
          </p>
          <p className="mb-4">
            The experience of having ADHD is deeply personal and varies widely from person to person. This 
            section explores what daily life with ADHD can look like and strategies for building a fulfilling 
            life that honors both challenges and strengths.
          </p>
        </div>

        <div className="clear-both pt-6">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Recognizing Strengths in ADHD</h2>
          
          <p className="mb-4">
            While discussions of ADHD often focus on challenges, many individuals with ADHD describe genuine 
            strengths associated with their neurodivergence:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creativity and Innovation</h3>
          <p className="mb-4">
            Many people with ADHD excel at creative thinking, making unexpected connections, and approaching 
            problems from novel angles. Research demonstrates that individuals with ADHD show enhanced 
            divergent thinking and generate more original ideas in creative tasks. This can be a significant 
            asset in creative fields and entrepreneurship. Studies suggest that the disinhibition and cognitive 
            flexibility associated with ADHD may contribute to creative achievement.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hyperfocus</h3>
          <p className="mb-4">
            While sustaining attention on boring tasks can be difficult, many individuals with ADHD experience 
            intense, prolonged concentration on activities that capture their interest, leading to exceptional 
            productivity. This phenomenon, sometimes called "hyperfocus," represents a state of intense 
            absorption that can result in remarkable achievements. The ability to hyperfocus is often reported 
            as one of the most valuable aspects of having ADHD.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Energy and Enthusiasm</h3>
          <p className="mb-4">
            The high energy that can be challenging in some contexts can also be a tremendous strength. Many 
            people with ADHD bring enthusiasm, spontaneity, and infectious energy to their relationships and work, 
            making them engaging collaborators and passionate advocates for causes they care about. This energy 
            and drive can translate into high levels of productivity when properly channeled.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Resilience and Adaptability</h3>
          <p className="mb-4">
            Growing up with ADHD often means developing resilience and learning to adapt to changing circumstances. 
            Many individuals with ADHD become skilled at thinking on their feet and pivoting when plans change 
            unexpectedly. This adaptability and problem-solving under pressure can be invaluable in fast-paced 
            or unpredictable environments.
          </p>
        </div>
      </>
    );
  }

  function DailyLifeContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life and Practical Considerations</h2>
        
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Morning and Evening Routines</h3>
        <p className="mb-4">
          Establishing consistent routines can significantly reduce daily stress and improve functioning for individuals with ADHD. Strategies that help:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Prepare the night before (lay out clothes, pack bags)</li>
          <li className="mb-2">Use multiple alarms with different sounds</li>
          <li className="mb-2">Create visible checklists for tasks</li>
          <li className="mb-2">Build in extra time for transitions</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Household Management</h3>
        <p className="mb-4">
          Executive function deficits in ADHD can make household organization challenging. Practical strategies include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Simplify systems—fewer possessions mean less to organize</li>
          <li className="mb-2">Use timers for cleaning tasks</li>
          <li className="mb-2">Create designated homes for frequently lost items</li>
          <li className="mb-2">Use automatic bill pay to avoid late fees</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Finances</h3>
        <p className="mb-4">
          Impulsivity and difficulty with planning can significantly affect financial management. Adults with ADHD 
          are more likely to experience financial difficulties, including impulsive spending, difficulty saving, and 
          problems managing bills and debt. Protective strategies include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Use automatic transfers to savings accounts</li>
          <li className="mb-2">Set up all bills on autopay to avoid late fees</li>
          <li className="mb-2">Build in waiting periods (24-48 hours) before making large purchases</li>
          <li className="mb-2">Use apps that track spending automatically</li>
          <li className="mb-2">Work with a financial advisor or accountability partner</li>
          <li className="mb-2">Delete shopping apps to add friction to impulse purchases</li>
        </ul>
      </div>
    );
  }

  function RelationshipsContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-left">Relationships and Social Life</h2>
        
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
        <p className="mb-4">
          Navigating romantic relationships with ADHD can present unique challenges. ADHD symptoms can 
          affect relationship satisfaction, with partners of individuals with ADHD reporting higher levels of 
          relationship distress. However, many couples successfully navigate these challenges with awareness, 
          communication, and targeted strategies:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Communication:</strong> Be open about ADHD and educate partners about how it affects you</li>
          <li className="mb-2"><strong>Listening:</strong> Develop strategies like taking notes during important conversations</li>
          <li className="mb-2"><strong>Forgetfulness:</strong> Use shared calendars and reminders for important dates and commitments</li>
          <li className="mb-2"><strong>Division of labor:</strong> Play to each partner's strengths in household tasks</li>
          <li className="mb-2"><strong>Couples therapy:</strong> Consider working with a therapist who understands ADHD</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Friendships</h3>
        <p className="mb-4">
          Social relationships can be challenging for individuals with ADHD due to difficulties with social cues, 
          impulsivity, and maintaining contact. Research shows that children and adults with ADHD often 
          experience social rejection and have fewer close friendships. Strategies for maintaining friendships include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Set reminders to reach out to friends regularly</li>
          <li className="mb-2">Be upfront about ADHD-related challenges (if comfortable)</li>
          <li className="mb-2">Choose understanding friends who accept you as you are</li>
          <li className="mb-2">Practice active listening and turn-taking in conversations</li>
          <li className="mb-2">Be patient with yourself when social mistakes happen</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Parenting with ADHD</h3>
        <p className="mb-4">
          Parents with ADHD face unique challenges and bring unique strengths to parenting. 
          Research shows that parental ADHD symptoms are associated with differences in parenting 
          behaviors, including more harsh and lax parenting and slightly less positive parenting. However, 
          these associations are relatively small, and many parents with ADHD successfully raise healthy, 
          well-adjusted children with the right strategies and support.
        </p>
        <p className="mb-4">
          Parenting stress is often higher for parents with ADHD, but treatment of parental ADHD can 
          improve both parent and child outcomes. Effective strategies include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Use visual schedules and routines for the whole family</li>
          <li className="mb-2">Build in flexibility and practice self-compassion</li>
          <li className="mb-2">Partner with other adults (co-parent, family, friends) for support</li>
          <li className="mb-2">Model self-advocacy and self-acceptance for your children</li>
          <li className="mb-2">Bring creativity, playfulness, and energy to parenting</li>
          <li className="mb-2">Seek treatment for your own ADHD to be at your best</li>
        </ul>
      </div>
    );
  }

  function CareerContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-left">Education and Career</h2>
        
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Choosing Career Paths</h3>
        <p className="mb-4">
          ADHD can significantly impact occupational functioning and career success. However, choosing 
          careers that align with ADHD strengths and interests can lead to high levels of success and satisfaction. 
          Consider careers that:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Provide variety and novelty rather than repetitive tasks</li>
          <li className="mb-2">Allow movement and hands-on work</li>
          <li className="mb-2">Engage creative abilities (art, design, writing, music)</li>
          <li className="mb-2">Offer high-stimulation environments (emergency services, journalism)</li>
          <li className="mb-2">Support entrepreneurship (with strong support systems in place)</li>
          <li className="mb-2">Provide clear deadlines and external accountability</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Strategies</h3>
        <p className="mb-4">
          Adults with ADHD often experience workplace difficulties including problems with time management, 
          organization, and interpersonal relationships. However, targeted strategies and accommodations 
          can significantly improve functioning:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Request reasonable accommodations through HR if needed</li>
          <li className="mb-2">Use productivity techniques (Pomodoro, time blocking)</li>
          <li className="mb-2">Create an environment that minimizes distractions</li>
          <li className="mb-2">Build in accountability through regular check-ins</li>
          <li className="mb-2">Play to your strengths and delegate or outsource weaker areas</li>
          <li className="mb-2">Consider disclosing ADHD to access formal supports</li>
        </ul>
      </div>
    );
  }

  function MentalHealthContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Managing Stigma and Misconceptions</h2>
        
        <p className="mb-4">
          Stigma surrounding ADHD remains a significant barrier to diagnosis, treatment, and self-acceptance. 
          Public misconceptions about ADHD are common and can lead to internalized shame and reluctance to seek help.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Myths</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">"ADHD isn't real" — ADHD is a well-researched neurological condition with extensive scientific support</li>
          <li className="mb-2">"ADHD is just laziness" — ADHD involves genuine neurobiological differences affecting executive function</li>
          <li className="mb-2">"Only children have ADHD" — ADHD is a lifelong condition affecting millions of adults</li>
          <li className="mb-2">"Medications are dangerous" — Properly prescribed ADHD medication is safe and effective</li>
          <li className="mb-2">"People with ADHD just need to try harder" — Effort alone cannot overcome neurobiological differences</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Advocacy</h3>
        <p className="mb-4">
          Effective self-advocacy is crucial for accessing appropriate supports and accommodations. Key strategies include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Educate yourself about ADHD and your legal rights</li>
          <li className="mb-2">Decide when and how to disclose your diagnosis</li>
          <li className="mb-2">Request accommodations when needed in education and employment</li>
          <li className="mb-2">Connect with ADHD communities for support and validation</li>
          <li className="mb-2">Challenge stigma and educate others when appropriate</li>
        </ul>

        <div className="clear-both pt-6">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Mental Health and Self-Care</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Co-occurring Mental Health Conditions</h3>
          <p className="mb-4">
            ADHD frequently co-occurs with other mental health conditions, with research showing that approximately 
            two-thirds of individuals with ADHD have at least one comorbid psychiatric disorder:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Anxiety disorders (25-40% of individuals with ADHD)</li>
            <li className="mb-2">Depression (18-30%)</li>
            <li className="mb-2">Substance use disorders (15-20% in adults)</li>
            <li className="mb-2">Sleep disorders (25-55%)</li>
            <li className="mb-2">Emotional dysregulation and rejection sensitive dysphoria</li>
          </ul>
          <p className="mb-4">
            It's essential to seek professional help if you experience symptoms of co-occurring conditions, as treating 
            both ADHD and comorbid disorders leads to better outcomes.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Self-Esteem</h3>
          <p className="mb-4">
            Growing up with ADHD often involves repeated experiences of failure, criticism, and negative feedback, which 
            can significantly impact self-esteem. Adults with ADHD frequently report lower self-esteem and higher 
            levels of shame compared to neurotypical peers. Cognitive strategies can help manage ADHD-related challenges:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Recognize and celebrate your accomplishments, both large and small</li>
            <li className="mb-2">Reframe ADHD as a difference rather than a deficit</li>
            <li className="mb-2">Challenge negative self-talk and internalized shame</li>
            <li className="mb-2">Remember that your worth is not determined by productivity</li>
            <li className="mb-2">Practice self-compassion and acknowledge the effort you put in</li>
            <li className="mb-2">Seek therapy to address trauma from past negative experiences</li>
          </ul>
        </div>
      </div>
    );
  }

  function CommunityContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Finding Community and Support</h2>
        
        <p className="mb-4">
          Connecting with others who understand ADHD can be invaluable for reducing isolation, gaining practical strategies, 
          and building self-acceptance. Social support is associated with better outcomes and quality of life 
          for individuals with ADHD.
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Support groups:</strong> Local or online ADHD support groups provide connection and shared experiences</li>
          <li className="mb-2"><strong>Online communities:</strong> Forums, social media groups (e.g., r/ADHD, ADDitude community)</li>
          <li className="mb-2"><strong>Organizations:</strong> CHADD (Children and Adults with Attention-Deficit/Hyperactivity Disorder), ADDA (Attention Deficit Disorder Association)</li>
          <li className="mb-2"><strong>Coaching:</strong> ADHD coaches provide accountability and strategy development</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Celebrating Neurodiversity</h3>
        <p className="mb-4">
          Many individuals embrace the neurodiversity paradigm, which views ADHD as a natural variation 
          in human neurology rather than purely a disorder or deficit. This perspective honors both challenges and 
          strengths while advocating for acceptance, accommodation, and celebrating diverse ways of thinking. 
          The neurodiversity movement emphasizes that neurological differences like ADHD are a valuable part of human 
          diversity and should be respected and valued.
        </p>

        <div className="clear-both pt-6">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward</h2>
          
          <p className="mb-4">
            Living with ADHD is a journey of self-discovery, learning, and growth. As understanding of your 
            own ADHD deepens and you develop systems that work for you, life often becomes more manageable 
            and fulfilling. Many people with ADHD report that while they wouldn't necessarily choose to have 
            ADHD, they also wouldn't want to give up the unique perspective and strengths it brings.
          </p>
          <p className="mb-4">
            Remember that you are not alone. Millions of people live successful, meaningful lives with ADHD. 
            With the right support, strategies, and self-understanding, you can build a life that works for 
            your unique brain and honors both your challenges and your considerable strengths.
          </p>
        </div>

        <div className="clear-both mt-8 p-4 bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] rounded">
          <p className="text-sm">
            <strong>Remember:</strong> Living well with ADHD looks different for everyone. Be patient with 
            yourself as you discover what works for you, and don't hesitate to seek support from healthcare 
            providers, coaches, therapists, and community when you need it.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-full w-full">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          Living with ADHD
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="overview" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 !h-auto">
            Overview & Strengths
          </TabsTrigger>
          <TabsTrigger value="daily-life" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 !h-auto">
            Daily Life & Routines
          </TabsTrigger>
          <TabsTrigger value="relationships" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 !h-auto">
            Relationships
          </TabsTrigger>
          <TabsTrigger value="career" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 !h-auto">
            Education & Career
          </TabsTrigger>
          <TabsTrigger value="mental-health" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 !h-auto">
            Mental Health & Stigma
          </TabsTrigger>
          <TabsTrigger value="community" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 !h-auto">
            Community & Future
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          <OverviewContent />
        </TabsContent>

        {/* Daily Life Tab */}
        <TabsContent value="daily-life" className="space-y-8">
          <DailyLifeContent />
        </TabsContent>

        {/* Relationships Tab */}
        <TabsContent value="relationships" className="space-y-8">
          <RelationshipsContent />
        </TabsContent>

        {/* Career Tab */}
        <TabsContent value="career" className="space-y-8">
          <CareerContent />
        </TabsContent>

        {/* Mental Health Tab */}
        <TabsContent value="mental-health" className="space-y-8">
          <MentalHealthContent />
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community" className="space-y-8">
          <CommunityContent />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end my-8">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Park, J. L., Hudec, K. L., & Johnston, C. (2017). "Parental ADHD symptoms and parenting behaviors: A meta-analytic review." <em>Clinical Psychology Review</em>, 55, 25-39.</p>
          <p>[2] Biederman, J., et al. (2012). "Adult outcome of attention-deficit/hyperactivity disorder: A controlled 16-year follow-up study." <em>Journal of Clinical Psychiatry</em>, 73(7), 941-950.</p>
          <p>[3] Klein, R. G., et al. (2012). "Clinical and functional outcome of childhood attention-deficit/hyperactivity disorder 33 years later." <em>Archives of General Psychiatry</em>, 69(12), 1295-1303.</p>
          <p>[4] Sedgwick, J. A., Merwood, A., & Asherson, P. (2019). "The positive aspects of attention deficit hyperactivity disorder: A qualitative investigation of successful adults with ADHD." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 11(3), 241-253.</p>
          <p>[5] Young, S., Bramham, J., Gray, K., & Rose, E. (2008). "The experience of receiving a diagnosis and treatment of ADHD in adulthood: A qualitative study of clinically referred patients using interpretative phenomenological analysis." <em>Journal of Attention Disorders</em>, 11(4), 493-503.</p>
          <p>[6] Matheson, L., Asherson, P., Wong, I. C., et al. (2013). "Adult ADHD patient experiences of impairment, service provision and clinical management in England: A qualitative study." <em>BMC Health Services Research</em>, 13, 184.</p>
          <p>[7] Barkley, R. A., & Murphy, K. R. (2006). <em>Attention-Deficit Hyperactivity Disorder: A Clinical Workbook</em> (3rd ed.). Guilford Press.</p>
          <p>[8] Brown, T. E. (2013). <em>A New Understanding of ADHD in Children and Adults: Executive Function Impairments</em>. Routledge.</p>
          <p>[9] Ramsay, J. R., & Rostain, A. L. (2015). <em>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</em>. Routledge.</p>
          <p>[10] Safren, S. A., Sprich, S., Perlman, C., & Otto, M. W. (2005). <em>Mastering Your Adult ADHD: A Cognitive-Behavioral Treatment Program, Therapist Guide</em>. Oxford University Press.</p>
          <p>[11] Harrison, A. G., Armstrong, I. T., Harrison, L. E., Lange, R. T., & Iverson, G. L. (2014). "Comparing psychoeducational assessment screening procedures for university students requesting accommodations." <em>Canadian Journal of School Psychology</em>, 29(1), 5-21.</p>
          <p>[12] DuPaul, G. J., & Stoner, G. (2014). <em>ADHD in the Schools: Assessment and Intervention Strategies</em> (3rd ed.). Guilford Press.</p>
          <p>[13] CHADD. (2023). <em>About ADHD</em>. Children and Adults with Attention-Deficit/Hyperactivity Disorder. Retrieved from www.chadd.org</p>
          <p>[14] Attention Deficit Disorder Association. (2023). <em>Adult ADHD Toolkit</em>. Retrieved from add.org</p>
          <p>[15] Hinshaw, S. P. (2018). "Attention deficit hyperactivity disorder (ADHD): Controversy, developmental mechanisms, and multiple levels of analysis." <em>Annual Review of Clinical Psychology</em>, 14, 291-316.</p>
          <p>[16] Faraone, S. V., et al. (2015). "Attention-deficit/hyperactivity disorder." <em>Nature Reviews Disease Primers</em>, 1, 15020.</p>
          <p>[17] Dawson, P., & Guare, R. (2009). <em>Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential</em>. Guilford Press.</p>
          <p>[18] Ratey, N. (2008). <em>The Disorganized Mind: Coaching Your ADHD Brain to Take Control of Your Time, Tasks, and Talents</em>. St. Martin's Press.</p>
          <p>[19] Antshel, K. M. (2018). "Attention-deficit/hyperactivity disorder (ADHD) and entrepreneurship." <em>Academy of Management Perspectives</em>, 32(2), 243-265.</p>
          <p>[20] Archer, D. (2014). <em>The ADHD Advantage: What You Thought Was a Diagnosis May Be Your Greatest Strength</em>. Avery.</p>
        </div>
      </section>
    </article>
  );
}
