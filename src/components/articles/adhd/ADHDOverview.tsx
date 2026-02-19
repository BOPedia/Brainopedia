import { ADHDOverviewReferences } from '../../references/ADHDOverviewReferences';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

interface ADHDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDOverview({ setCurrentArticle }: ADHDOverviewProps) {
  return (
    <article className="max-w-full w-full">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      <div className="space-y-8">
        {/* Introduction Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is ADHD?</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-overview-colors-bolt.png"
            alt="ADHD Overview Visual"
            className="w-48 h-auto float-right ml-4 mb-4 rounded"
          />
          
          <p className="mb-4">
            Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition characterized 
            by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning 
            or development. It is a persistent neurodevelopmental condition affecting 11.3% of children ages 5–17 in the United States, with prevalence higher in boys (14.5%) than girls (8.0%).<sup className="text-[#10b981]">[1]</sup> Among adults, the prevalence is approximately 3.1%,<sup className="text-[#10b981]">[2]</sup> making it one of the most common neurodevelopmental disorders.
          </p>
          <p className="mb-4">
            ADHD is not simply a childhood disorder—symptoms often persist into adulthood. It's a real medical condition with neurological basis, not a character flaw or result of poor parenting. Brain imaging studies reveal significant differences in brain structure and function.
          </p>
        </div>

        {/* Three Presentations Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Three Presentations of ADHD</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-overview-venn.png"
            alt="ADHD Three Presentations Venn Diagram"
            className="w-110 h-auto float-right ml-4 mb-4 rounded"
          />
          
          <p className="mb-4">
            According to the DSM-5-TR, ADHD is diagnosed in one of three presentations, based on the predominant symptom pattern over the past six months:<sup className="text-[#10b981]">[3]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Predominantly Inattentive Presentation</h3>
          <p className="mb-4">
            Individuals primarily struggle with attention and focus. They may appear forgetful, disorganized, 
            easily distracted, and have difficulty completing tasks. This presentation is sometimes still 
            referred to as "ADD" in casual conversation, though that term is no longer used in official diagnosis. 
            People with this presentation may seem to daydream or be "in their own world."
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Predominantly Hyperactive-Impulsive Presentation</h3>
          <p className="mb-4">
            Individuals primarily experience restlessness, excessive energy, difficulty sitting still, and 
            impulsive behaviors. They may fidget constantly, interrupt others, have trouble waiting their turn, 
            and act without thinking about consequences. This presentation is more commonly diagnosed in childhood 
            when hyperactive symptoms are most visible.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Combined Presentation</h3>
          <p className="mb-4">
            This is the most common type, where individuals meet criteria for both inattentive and hyperactive-impulsive 
            symptoms. People with combined presentation experience challenges across multiple domains of executive 
            functioning and may find both sustaining attention and managing impulses difficult.
          </p>
        </div>

        {/* Executive Function Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Executive Function Challenges</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-overview-executive-function.png"
            alt="ADHD Executive Function"
            className="w-48 h-auto float-right ml-4 mb-4 rounded"
          />
          
          <p className="mb-4">
            At its core, ADHD is fundamentally a disorder of executive function—the cognitive processes that 
            allow us to plan, focus attention, remember instructions, and manage multiple tasks. Executive 
            functions are controlled primarily by the prefrontal cortex of the brain.
          </p>
          <p className="mb-4">
            People with ADHD often struggle with several key executive functions:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Working memory:</strong> Holding information in mind while using it</li>
            <li className="mb-2"><strong>Inhibition:</strong> Controlling impulses and stopping automatic responses</li>
            <li className="mb-2"><strong>Emotional regulation:</strong> Managing emotional responses</li>
            <li className="mb-2"><strong>Task initiation:</strong> Getting started on activities</li>
            <li className="mb-2"><strong>Planning and prioritization:</strong> Creating roadmaps for completing tasks</li>
            <li className="mb-2"><strong>Organization:</strong> Keeping track of information and materials</li>
            <li className="mb-2"><strong>Time management:</strong> Estimating how long tasks will take</li>
            <li className="mb-2"><strong>Sustained attention:</strong> Maintaining focus over time</li>
            <li className="mb-2"><strong>Flexibility:</strong> Adapting to changing situations</li>
          </ul>
          <p className="mb-4">
            Understanding ADHD through the lens of executive function helps explain why individuals with ADHD 
            might excel in some situations (like crisis management requiring quick decisions) while struggling 
            in others (like long-term planning projects).
          </p>
        </div>

        {/* Who is Affected Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Who is Affected?</h2>
          
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 md:float-right md:ml-6 mb-4 w-full md:w-96">
            <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">ADHD in Children</h3>
            
            {/* Prevalence Stats */}
            <div className="mb-6 pb-6 border-b-2 border-gray-200">
              <div className="text-center mb-2">
                <div className="text-4xl font-bold text-[#2abcd4]">5-7%</div>
                <div className="text-sm text-[#0c264d]">of children worldwide</div>
              </div>
            </div>
            
            {/* Gender Ratio */}
            <div className="mb-6 pb-6 border-b-2 border-gray-200">
              <div className="text-center mb-3">
                <div className="text-lg font-bold text-[#0c264d]">Gender Diagnosis Ratio</div>
                <div className="text-sm text-gray-600 mb-3">(Community Samples)</div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="flex gap-1 mb-2">
                    <div className="w-8 h-8 bg-[#0A9DC4] rounded"></div>
                    <div className="w-8 h-8 bg-[#0A9DC4] rounded"></div>
                    <div className="w-8 h-8 bg-[#0A9DC4] rounded"></div>
                  </div>
                  <div className="text-sm font-bold text-[#0c264d]">Boys</div>
                </div>
                <div className="text-2xl text-gray-400">:</div>
                <div className="text-center">
                  <div className="flex gap-1 mb-2">
                    <div className="w-8 h-8 bg-[#ffd166] rounded"></div>
                  </div>
                  <div className="text-sm font-bold text-[#0c264d]">Girls</div>
                </div>
              </div>
              <div className="text-center mt-2 text-sm text-gray-600">2:1 to 3:1 ratio<sup className="text-[#10b981]">[4]</sup></div>
            </div>
            
            {/* Presentation Types */}
            <div>
              <div className="text-center mb-3">
                <div className="text-lg font-bold text-[#0c264d]">Most Common Type</div>
              </div>
              <div className="bg-[#0A9DC4] text-white rounded p-3 text-center">
                <div className="text-2xl font-bold">Combined</div>
                <div className="text-sm">50-75% of cases<sup className="text-[#10b981]">[4]</sup></div>
              </div>
            </div>
          </div>
          
          <p className="mb-4">
            ADHD affects people of all ages, genders, races, and socioeconomic backgrounds. However, there are 
            some demographic patterns worth noting:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gender Differences</h3>
          <p className="mb-4">
            Boys are diagnosed with ADHD more frequently than girls, with ratios ranging from 2:1 to 3:1 in 
            community samples.<sup className="text-[#10b981]">[4]</sup> However, this gap narrows in adulthood, and many experts believe ADHD is 
            underdiagnosed in girls and women. Girls more often present with the inattentive type, which is 
            less disruptive and therefore more likely to be missed. Girls may also develop compensatory strategies 
            or internalize their struggles, leading to later diagnosis.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Age and Development</h3>
          <p className="mb-4">
            ADHD symptoms must be present before age 12 for diagnosis, though many people aren't diagnosed until 
            adulthood. Hyperactivity symptoms often decrease with age, while inattention and executive function 
            challenges may persist or become more problematic as life demands increase.
          </p>

          {/* Adult ADHD Chart */}
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 md:float-left md:mr-6 mb-4 w-full md:w-[420px]">
            <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">ADHD in Adults<sup className="text-[#10b981]">[5]</sup></h3>
            
            {/* Adult Prevalence */}
            <div className="mb-6 pb-6 border-b-2 border-gray-200">
              <div className="text-sm text-center mb-3 text-[#0c264d] font-bold">Adult Prevalence</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0A9DC4]">2.6%</div>
                  <div className="text-xs text-gray-600 mt-1">Persistent<br/>(childhood-onset)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ffd166]">6.8%</div>
                  <div className="text-xs text-gray-600 mt-1">Symptomatic<br/>(any onset)</div>
                </div>
              </div>
            </div>

            {/* Persistence Rate */}
            <div className="mb-6 pb-6 border-b-2 border-gray-200">
              <div className="text-sm text-center mb-3 text-[#0c264d] font-bold">Childhood to Adult Persistence</div>
              <div className="bg-gradient-to-r from-[#ffd166] to-[#2abcd4] text-white rounded p-4 text-center">
                <div className="text-4xl font-bold">50-70%</div>
                <div className="text-sm mt-2">of childhood cases persist into adulthood</div>
              </div>
            </div>

            {/* Overall Comorbidity */}
            <div className="mb-6 pb-6 border-b-2 border-gray-200">
              <div className="text-sm text-center mb-3 text-[#0c264d] font-bold">Mental Health Comorbidity</div>
              <div className="bg-[#0c264d] text-white rounded p-4 text-center">
                <div className="text-4xl font-bold">~70%</div>
                <div className="text-sm mt-2">have ≥1 comorbid mental health condition</div>
              </div>
            </div>

            {/* Gender-Specific Comorbidities */}
            <div>
              <div className="text-sm text-center mb-4 text-[#0c264d] font-bold">Gender Differences in Comorbidity</div>
              
              {/* Females */}
              <div className="mb-4">
                <div className="text-center mb-2 text-sm font-bold text-[#ffd166]">Females: Higher Rates Of</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#ffd166]/20 border border-[#ffd166] rounded p-2 text-center text-xs">
                    <div className="font-bold text-[#0c264d]">47-50%</div>
                    <div className="text-gray-700">Anxiety</div>
                  </div>
                  <div className="bg-[#ffd166]/20 border border-[#ffd166] rounded p-2 text-center text-xs">
                    <div className="font-bold text-[#0c264d]">19-53%</div>
                    <div className="text-gray-700">Depression</div>
                  </div>
                  <div className="bg-[#ffd166]/20 border border-[#ffd166] rounded p-2 text-center text-xs col-span-2">
                    <div className="text-gray-700">Bipolar Disorder, Personality Disorders</div>
                  </div>
                </div>
              </div>

              {/* Males */}
              <div>
                <div className="text-center mb-2 text-sm font-bold text-[#0A9DC4]">Males: Higher Rates Of</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#0A9DC4]/20 border border-[#0A9DC4] rounded p-2 text-center text-xs">
                    <div className="text-gray-700">Substance<br/>Use Disorders</div>
                  </div>
                  <div className="bg-[#0A9DC4]/20 border border-[#0A9DC4] rounded p-2 text-center text-xs">
                    <div className="text-gray-700">Schizophrenia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cultural Considerations</h3>
          <p className="mb-4">
            Diagnosis rates vary across countries and cultures, reflecting differences in awareness, access to 
            healthcare, diagnostic practices, and cultural attitudes toward mental health. Some cultural contexts 
            may normalize or stigmatize ADHD symptoms differently.
          </p>
        </div>

        {/* Impact Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impact on Daily Life</h2>
          
          <p className="mb-4">
            ADHD can significantly impact various life domains:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Academic/Work:</strong> Difficulty completing assignments, meeting deadlines, staying organized, and maintaining consistent performance</li>
            <li className="mb-2"><strong>Relationships:</strong> Challenges with listening, following through on commitments, emotional regulation, and managing conflict</li>
            <li className="mb-2"><strong>Self-esteem:</strong> Repeated experiences of failure or criticism can lead to low self-confidence and negative self-perception</li>
            <li className="mb-2"><strong>Daily functioning:</strong> Struggles with routine tasks like paying bills, household management, and personal organization</li>
            <li className="mb-2"><strong>Safety:</strong> Increased risk of accidents due to inattention or impulsivity, particularly in driving</li>
          </ul>
          <p className="mb-4">
            However, it's important to recognize that many individuals with ADHD also describe unique strengths, 
            including creativity, ability to hyperfocus on interesting tasks, high energy, resilience, and 
            thinking outside the box.
          </p>
        </div>

        {/* Understanding Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding ADHD as a Spectrum</h2>
          
          <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 md:float-right md:ml-6 mb-4 w-full md:w-[420px]">
            <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">The ADHD Spectrum</h3>
            
            {/* Severity Gradient */}
            <div className="mb-6">
              <div className="text-sm text-center mb-2 text-[#0c264d] font-bold">Symptom Severity</div>
              <div className="h-16 rounded-lg overflow-hidden relative" style={{
                background: 'linear-gradient(to right, #ffd166 0%, #2abcd4 50%, #0c264d 100%)'
              }}>
                <div className="absolute inset-0 flex items-center justify-between px-4 text-white text-xs font-bold">
                  <span className="text-[#0c264d]">Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-600">
                <span>Minimal support</span>
                <span>Comprehensive care</span>
              </div>
            </div>
            
            {/* Symptom Variability */}
            <div className="mb-6 pb-6 border-b-2 border-gray-200">
              <div className="text-sm text-center mb-3 text-[#0c264d] font-bold">Symptom Combinations</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-24 h-6 bg-[#0A9DC4] rounded"></div>
                  <div className="text-xs">Primarily Inattentive</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-6 bg-[#ffd166] rounded"></div>
                  <div className="text-xs">Primarily Hyperactive</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-6 bg-[#0A9DC4] rounded inline-block"></div>
                  <div className="w-16 h-6 bg-[#ffd166] rounded inline-block"></div>
                  <div className="text-xs">Combined Type</div>
                </div>
              </div>
            </div>
            
            {/* Co-occurring Conditions */}
            <div>
              <div className="text-sm text-center mb-3 text-[#0c264d] font-bold">Common Co-occurring Conditions<sup className="text-[#10b981]">[6]</sup></div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-[#0A9DC4]/20 border border-[#0A9DC4] rounded p-2 text-center text-xs">
                  <div className="font-bold text-[#0c264d]">59%</div>
                  <div className="text-gray-700">Autism<br/>Spectrum</div>
                </div>
                <div className="bg-[#ffd166]/20 border border-[#ffd166] rounded p-2 text-center text-xs">
                  <div className="font-bold text-[#0c264d]">10-92%</div>
                  <div className="text-gray-700">Learning<br/>Disorders</div>
                </div>
                <div className="bg-[#0c264d]/10 border border-[#0c264d] rounded p-2 text-center text-xs">
                  <div className="font-bold text-[#0c264d]">15-35%</div>
                  <div className="text-gray-700">Anxiety<br/>Disorders</div>
                </div>
                <div className="bg-[#0A9DC4]/20 border border-[#0A9DC4] rounded p-2 text-center text-xs">
                  <div className="font-bold text-[#0c264d]">30-50%</div>
                  <div className="text-gray-700">ODD</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#ffd166]/20 border border-[#ffd166] rounded p-2 text-center text-xs">
                  <div className="font-bold text-[#0c264d]">55%</div>
                  <div className="text-gray-700">Tic<br/>Disorders</div>
                </div>
                <div className="bg-[#0c264d]/10 border border-[#0c264d] rounded p-2 text-center text-xs">
                  <div className="font-bold text-[#0c264d]">12-50%</div>
                  <div className="text-gray-700">Depression</div>
                </div>
              </div>
              <div className="text-xs text-center mt-3 text-gray-600 italic">
                60-100% of children with ADHD have ≥1 comorbid condition
              </div>
            </div>
          </div>
          
          <p className="mb-4">
            ADHD exists on a spectrum, and no two people with ADHD are exactly alike. Symptoms vary in type, 
            severity, and combination. Some individuals are mildly affected and develop effective coping strategies 
            with minimal support, while others experience significant impairment requiring comprehensive treatment.
          </p>
          <p className="mb-4">
            Additionally, ADHD commonly co-occurs with other conditions including learning disabilities, anxiety 
            disorders, depression, autism spectrum disorder, and sleep disorders. These co-occurring conditions 
            can complicate diagnosis and treatment, making individualized assessment and care essential.
          </p>
          <p className="mb-4">
            Understanding ADHD as a complex, multifaceted condition—rather than a simple checklist of behaviors—is 
            crucial for effective support and treatment. The following sections explore symptoms, causes, diagnosis, 
            and management in greater depth.
          </p>
        </div>
      </div>

      <div className="flex justify-end my-8 w-full">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      <ADHDOverviewReferences />
    </article>
  );
}