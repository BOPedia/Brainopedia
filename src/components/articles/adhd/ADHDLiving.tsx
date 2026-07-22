import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface ADHDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ADHDLiving({ setCurrentArticle, initialTab }: ADHDLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'overview');
  
  function OverviewContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] mb-4 text-2xl font-bold clear-both">Thriving with ADHD</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-living-overview-pathway.png"
            alt="Thriving with ADHD - living a full life"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

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
          
          <ImageWithFallback 
            src="/images/adhd/adhd-living-overview-strong-arms.png"
            alt="ADHD strengths - resilience and determination"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <p className="mb-4">
            While discussions of ADHD often focus on challenges, many individuals with ADHD describe genuine 
            strengths associated with their neurodivergence:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creativity and Innovation</h3>
          <p className="mb-4">
            Many people with ADHD excel at creative thinking, making unexpected connections, and approaching 
            problems from novel angles. Research demonstrates that individuals with ADHD show enhanced 
            divergent thinking and generate more original ideas in creative tasks.<sup className="text-green-600 font-bold ml-0.5">1</sup> This can be a significant 
            asset in creative fields and entrepreneurship. Studies suggest that the disinhibition and cognitive 
            flexibility associated with ADHD may contribute to creative achievement.<sup className="text-green-600 font-bold ml-0.5">2</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Hyperfocus</h3>
          <p className="mb-4">
            While sustaining attention on boring tasks can be difficult, many individuals with ADHD experience 
            intense, prolonged concentration on activities that capture their interest, leading to intense 
            productivity and skill development. This state of hyperfocus allows for deep dives into subjects 
            and can result in exceptional expertise in specific areas of interest.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Resilience</h3>
          <p className="mb-4">
            Navigating a world not built for an ADHD brain requires tremendous resilience. Many individuals 
            with ADHD develop strong problem-solving skills, adaptability, and the ability to persevere 
            through setbacks. This resilience often translates into a strong capacity to handle crises and 
            adapt quickly to change.
          </p>
        </div>

        {/* Overview Tab References */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
        
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner clear-both">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
          
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <div className="text-xs space-y-3 text-slate-600 leading-relaxed">
              <p>1. White, H. A., & Shah, P. (2006). "Uninhibited imaginations: Creativity in adults with attention-deficit/hyperactivity disorder." <em>Personality and Individual Differences</em>, 40(6), 1121-1131.</p>
              <p>2. White, H. A., & Shah, P. (2011). "Creative style and achievement in adults with attention-deficit/hyperactivity disorder." <em>Personality and Individual Differences</em>, 50(5), 673-677.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
              <li>Sedgwick, J. A., Merwood, A., & Asherson, P. (2019). "The positive aspects of attention deficit hyperactivity disorder: A qualitative investigation of successful adults with ADHD." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 11(3), 241-253.</li>
              <li>Antshel, K. M. (2018). "Attention-deficit/hyperactivity disorder (ADHD) and entrepreneurship." <em>Academy of Management Perspectives</em>, 32(2), 243-265.</li>
              <li>Archer, D. (2014). <em>The ADHD Advantage: What You Thought Was a Diagnosis May Be Your Greatest Strength</em>. Avery.</li>
              <li>Brown, T. E. (2013). <em>A New Understanding of ADHD in Children and Adults: Executive Function Impairments</em>. Routledge.</li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  function DailyLifeContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both">Daily Life and Practical Considerations</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-living-routines-checkmark.png"
          alt="Daily routines and practical strategies for ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

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

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Household Management</h3>
        <p className="mb-4">
          Executive function deficits in ADHD can make household organization challenging. Practical strategies include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Simplify systems—fewer possessions mean less to organize</li>
          <li className="mb-2">Use timers for cleaning tasks</li>
          <li className="mb-2">Create designated homes for frequently lost items</li>
          <li className="mb-2">Use automatic bill pay to avoid late fees</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Managing Finances</h3>

        <ImageWithFallback 
          src="/images/adhd/adhd-living-table-calculator-finances.png"
          alt="Financial management tools and strategies"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

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

        {/* Daily Life Tab References */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
        
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner clear-both">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
              <li>Dawson, P., & Guare, R. (2009). <em>Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential</em>. Guilford Press.</li>
              <li>Ratey, N. (2008). <em>The Disorganized Mind: Coaching Your ADHD Brain to Take Control of Your Time, Tasks, and Talents</em>. St. Martin's Press.</li>
              <li>Ramsay, J. R., & Rostain, A. L. (2015). <em>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</em>. Routledge.</li>
              <li>Barkley, R. A., & Murphy, K. R. (2006). <em>Attention-Deficit Hyperactivity Disorder: A Clinical Workbook</em> (3rd ed.). Guilford Press.</li>
              <li>Biederman, J., et al. (2012). "Adult outcome of attention-deficit/hyperactivity disorder: A controlled 16-year follow-up study." <em>Journal of Clinical Psychiatry</em>, 73(7), 941-950.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function RelationshipsContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-left clear-both">Relationships and Social Life</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-living-relationships-heart-connections.png"
          alt="Relationships and social life with ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

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

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Friendships</h3>
        <p className="mb-4">
          Social relationships can be challenging for individuals with ADHD due to difficulties with social cues, 
          impulsivity, and maintaining contact. Research shows that children and adults with ADHD often 
          experience social rejection and have fewer close friendships.<sup className="text-green-600 font-bold ml-0.5">1</sup> Strategies for maintaining friendships include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Set reminders to reach out to friends regularly</li>
          <li className="mb-2">Be upfront about ADHD-related challenges (if comfortable)</li>
          <li className="mb-2">Choose understanding friends who accept you as you are</li>
          <li className="mb-2">Practice active listening and turn-taking in conversations</li>
          <li className="mb-2">Be patient with yourself when social mistakes happen</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Parenting with ADHD</h3>

        <ImageWithFallback 
          src="/images/adhd/adhd-living-relationships-read-kids-books.png"
          alt="Parent reading to children - parenting with ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

        <p className="mb-4">
          Parents with ADHD face unique challenges and bring unique strengths to parenting. 
          Research shows that parental ADHD symptoms are associated with differences in parenting 
          behaviors, including more harsh and lax parenting and slightly less positive parenting.<sup className="text-green-600 font-bold ml-0.5">2</sup> However, 
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

        {/* Relationships Tab References */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
        
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner clear-both">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
          
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <div className="text-xs space-y-3 text-slate-600 leading-relaxed">
              <p>1. Hoza, B. (2007). "Peer functioning in children with ADHD." <em>Journal of Pediatric Psychology</em>, 32(6), 655-663.</p>
              <p>2. Johnston, C., Mash, E. J., Miller, N., & Ninowski, J. E. (2012). "Parenting in adults with attention-deficit/hyperactivity disorder (ADHD)." <em>Clinical Psychology Review</em>, 32(4), 215-228.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
              <li>Barkley, R. A. (2015). <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed.). Guilford Press.</li>
              <li>Ramsay, J. R., & Rostain, A. L. (2015). <em>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</em>. Routledge.</li>
              <li>Orlov, M. (2010). <em>The ADHD Effect on Marriage: Understand and Rebuild Your Relationship in Six Steps</em>. Specialty Press.</li>
              <li>Chronis-Tuscano, A., et al. (2011). "Very early predictors of adolescent depression and suicide attempts in children with attention-deficit/hyperactivity disorder." <em>Archives of General Psychiatry</em>, 68(12), 1267-1275.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function CareerContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-left clear-both">Education and Career</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-living-educ-career-paths.png"
          alt="Education and career paths with ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

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

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Workplace Strategies</h3>
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

        {/* Education & Career Tab References */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
        
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner clear-both">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
              <li>Barkley, R. A. (2015). <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed.). Guilford Press.</li>
              <li>Ramsay, J. R., & Rostain, A. L. (2015). <em>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</em>. Routledge.</li>
              <li>Nadeau, K. G. (2005). "Career choices and workplace challenges for individuals with ADHD." <em>Journal of Clinical Psychology</em>, 61(5), 549-563.</li>
              <li>DuPaul, G. J., & Stoner, G. (2014). <em>ADHD in the Schools: Assessment and Intervention Strategies</em> (3rd ed.). Guilford Press.</li>
              <li>Biederman, J., et al. (2005). "Functional impairments in adults with self-reports of diagnosed ADHD: A controlled study of 1001 adults in the community." <em>The Journal of Clinical Psychiatry</em>, 67(4), 524-540.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function MentalHealthContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both">Managing Stigma and Misconceptions</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-living-stigma-four-faces.png"
          alt="Managing stigma and advocating for ADHD awareness"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

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

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Self-Advocacy</h3>
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
            two-thirds of individuals with ADHD have at least one comorbid psychiatric disorder:<sup className="text-green-600 font-bold ml-0.5">1</sup>
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

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Building Self-Esteem</h3>

          <ImageWithFallback 
            src="/images/adhd/adhd-living-stigma-self-esteem.png"
            alt="Building self-esteem with ADHD"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

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

        {/* Mental Health Tab References */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
        
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner clear-both">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
          
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <div className="text-xs space-y-3 text-slate-600 leading-relaxed">
              <p>1. Kessler, R. C., Adler, L., Barkley, R., et al. (2006). "The prevalence and correlates of adult ADHD in the United States: Results from the National Comorbidity Survey Replication." <em>American Journal of Psychiatry</em>, 163(4), 716-723.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
              <li>Barkley, R. A. (2015). <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed.). Guilford Press.</li>
              <li>Hinshaw, S. P. (2018). "Attention deficit hyperactivity disorder (ADHD): Controversy, developmental mechanisms, and multiple levels of analysis." <em>Annual Review of Clinical Psychology</em>, 14, 291-316.</li>
              <li>Safren, S. A., et al. (2005). "Cognitive-behavioral therapy for ADHD in medication-treated adults with continued symptoms." <em>Behaviour Research and Therapy</em>, 43(7), 831-842.</li>
              <li>Ramsay, J. R., & Rostain, A. L. (2008). <em>Cognitive-Behavioral Therapy for Adult ADHD: An Integrative Psychosocial and Medical Approach</em>. Routledge.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function CommunityContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both">Finding Community and Support</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-living-community-hands.png"
          alt="Community support and connection - hands together"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

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

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Celebrating Neurodiversity</h3>
        <p className="mb-4">
          Many individuals embrace the neurodiversity paradigm, which views ADHD as a natural variation 
          in human neurology rather than purely a disorder or deficit. This perspective honors both challenges and 
          strengths while advocating for acceptance, accommodation, and celebrating diverse ways of thinking. 
          The neurodiversity movement emphasizes that neurological differences like ADHD are a valuable part of human 
          diversity and should be respected and valued.
        </p>

        <div className="clear-both pt-6">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both">Looking Forward</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-living-future-girl-cheers.png"
            alt="Looking forward with optimism - celebrating ADHD journey"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

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

        {/* Community Tab References */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
        
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner clear-both">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
              <li>Hallowell, E. M., & Ratey, J. J. (2011). <em>Driven to Distraction: Recognizing and Coping with Attention Deficit Disorder</em> (Rev. ed.). Anchor Books.</li>
              <li>Barkley, R. A. (2015). <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed.). Guilford Press.</li>
              <li>CHADD (Children and Adults with Attention-Deficit/Hyperactivity Disorder). <em>National Resource Center on ADHD</em>. https://chadd.org</li>
              <li>Armstrong, T. (2010). <em>Neurodiversity: Discovering the Extraordinary Gifts of Autism, ADHD, Dyslexia, and Other Brain Differences</em>. Da Capo Lifelong Books.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-full w-full">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Living with ADHD
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About ADHD
        </button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6 shadow-sm shrink-0"
      >
        <span className="text-lg">←</span>
        All About ADHD
      </button>

      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="overview" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Overview & Strengths
          </TabsTrigger>
          <TabsTrigger value="daily-life" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Daily Life & Routines
          </TabsTrigger>
          <TabsTrigger value="relationships" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Relationships
          </TabsTrigger>
          <TabsTrigger value="career" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Education & Career
          </TabsTrigger>
          <TabsTrigger value="mental-health" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Mental Health & Stigma
          </TabsTrigger>
          <TabsTrigger value="community" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Community & Future
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          {OverviewContent()}
        </TabsContent>

        {/* Daily Life Tab */}
        <TabsContent value="daily-life" className="space-y-8">
          {DailyLifeContent()}
        </TabsContent>

        {/* Relationships Tab */}
        <TabsContent value="relationships" className="space-y-8">
          {RelationshipsContent()}
        </TabsContent>

        {/* Career Tab */}
        <TabsContent value="career" className="space-y-8">
          {CareerContent()}
        </TabsContent>

        {/* Mental Health Tab */}
        <TabsContent value="mental-health" className="space-y-8">
          {MentalHealthContent()}
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community" className="space-y-8">
          {CommunityContent()}
        </TabsContent>
      </Tabs>

      <div className="flex justify-end my-8 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
        >
          <span className="text-lg">←</span>
          All About ADHD
        </button>
      </div>
    </article>
  );
}