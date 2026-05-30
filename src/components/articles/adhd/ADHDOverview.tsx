import React from 'react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { Clock } from 'lucide-react';

interface ADHDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDOverview({ setCurrentArticle }: ADHDOverviewProps) {
  return (
    <article className="max-w-full w-full">
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d]">
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

      <div className="space-y-16">
        {/* WHAT IS ADHD? */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-[#0c264d] font-bold text-2xl border-b pb-2">What is ADHD?</h2>
            <p className="leading-relaxed">
              <strong>Attention-Deficit/Hyperactivity Disorder (ADHD)</strong> is a neurodevelopmental condition characterized 
              by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning 
              or development. It is a persistent neurodevelopmental condition affecting 11.3% of children ages 5–17 in the United States, with prevalence higher in boys (14.5%) than girls (8.0%).<sup className="text-green-600 font-bold ml-0.5">1</sup> Among adults, the prevalence is approximately 3.1%,<sup className="text-green-600 font-bold ml-0.5">2</sup> making it one of the most common neurodevelopmental disorders.
            </p>
            <p className="leading-relaxed">
              ADHD is not simply a childhood disorder—symptoms often persist into adulthood. It's a real medical condition with neurological basis, not a character flaw or result of poor parenting. Brain imaging studies reveal significant differences in brain structure and function.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center pt-10">
            <ImageWithFallback 
              src="/images/adhd/adhd-overview-squirrel.png"
              alt="ADHD Overview Visual"
              className="w-64 h-auto rounded-lg shadow-sm"
            />
          </div>
        </section>

        {/* THREE PRESENTATIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-[#0c264d] font-bold text-2xl border-b pb-2">The Three Presentations of ADHD</h2>
            <p className="leading-relaxed">
              According to the DSM-5-TR, ADHD is diagnosed in one of three presentations, based on the predominant symptom pattern over the past six months:<sup className="text-green-600 font-bold ml-0.5">3</sup>
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-1">Predominantly Inattentive Presentation</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Individuals primarily struggle with attention and focus. They may appear forgetful, disorganized, 
                  easily distracted, and have difficulty completing tasks. This presentation is sometimes still 
                  referred to as "ADD" in casual conversation, though that term is no longer used in official diagnosis. 
                  People with this presentation may seem to daydream or be "in their own world."
                </p>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-1">Predominantly Hyperactive-Impulsive Presentation</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Individuals primarily experience restlessness, excessive energy, difficulty sitting still, and 
                  impulsive behaviors. They may fidget constantly, interrupt others, have trouble waiting their turn, 
                  and act without thinking about consequences. This presentation is more commonly diagnosed in childhood 
                  when hyperactive symptoms are most visible.
                </p>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-1">Combined Presentation</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  This is the most common type, where individuals meet criteria for both inattentive and hyperactive-impulsive 
                  symptoms. People with combined presentation experience challenges across multiple domains of executive 
                  functioning and may find both sustaining attention and managing impulses difficult.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:pt-12">
            <ImageWithFallback 
              src="/images/adhd/adhd-overview-venn.png"
              alt="ADHD Three Presentations Venn Diagram"
              className="w-full max-w-md h-auto rounded-lg"
            />
          </div>
        </section>

        {/* EXECUTIVE FUNCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-[#0c264d] font-bold text-2xl border-b pb-2">Executive Function Challenges</h2>
            <p className="leading-relaxed">
              At its core, ADHD is fundamentally a disorder of executive function—the cognitive processes that 
              allow us to plan, focus attention, remember instructions, and manage multiple tasks. Executive 
              functions are controlled primarily by the prefrontal cortex of the brain.
            </p>
            <p className="leading-relaxed">
              People with ADHD often struggle with several key executive functions:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-disc ml-6 text-sm text-slate-700">
              <li><strong>Working memory:</strong> Holding information in mind while using it</li>
              <li><strong>Inhibition:</strong> Controlling impulses and stopping automatic responses</li>
              <li><strong>Emotional regulation:</strong> Managing emotional responses</li>
              <li><strong>Task initiation:</strong> Getting started on activities</li>
              <li><strong>Planning and prioritization:</strong> Creating roadmaps for tasks</li>
              <li><strong>Organization:</strong> Keeping track of materials and details</li>
              <li><strong>Time management:</strong> Estimating how long tasks will take</li>
              <li><strong>Sustained attention:</strong> Maintaining focus over time</li>
              <li><strong>Flexibility:</strong> Adapting to changing situations</li>
            </ul>
            <p className="leading-relaxed pt-2">
              Understanding ADHD through the lens of executive function helps explain why individuals with ADHD 
              might excel in some situations (like crisis management requiring quick decisions) while struggling 
              in others (like long-term planning projects).
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:pt-14">
            <ImageWithFallback 
              src="/images/adhd/adhd-overview-executive-function.png"
              alt="ADHD Executive Function"
              className="w-48 h-auto rounded-lg shadow-sm"
            />
          </div>
        </section>

        {/* WHO IS AFFECTED */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-[#0c264d] font-bold text-2xl border-b pb-2">Who is Affected?</h2>
            <p className="leading-relaxed">
              ADHD affects people of all ages, genders, races, and socioeconomic backgrounds. However, there are 
              some demographic patterns worth noting:
            </p>

            <h3 className="text-[#0c264d] font-bold text-lg mb-1">Gender Differences</h3>
            <p className="leading-relaxed text-sm text-slate-700">
              Boys are diagnosed with ADHD more frequently than girls, with ratios ranging from 2:1 to 3:1 in 
              community samples.<sup className="text-green-600 font-bold ml-0.5">4</sup> However, this gap narrows in adulthood, and many experts believe ADHD is 
              underdiagnosed in girls and women. Girls more often present with the inattentive type, which is 
              less disruptive and therefore more likely to be missed. Girls may also develop compensatory strategies 
              or internalize their struggles, leading to later diagnosis.
            </p>

            <h3 className="text-[#0c264d] font-bold text-lg mb-1">Age and Development</h3>
            <p className="leading-relaxed text-sm text-slate-700">
              ADHD symptoms must be present before age 12 for diagnosis, though many people aren't diagnosed until 
              adulthood. Hyperactivity symptoms often decrease with age, while inattention and executive function 
              challenges may persist or become more problematic as life demands increase.
            </p>
          </div>
          
          <div className="lg:col-span-5 w-full flex justify-center">
            {/* Infographic Box locked inside its own column */}
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 w-full max-w-sm shadow-sm">
              <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">ADHD in Children</h3>
              <div className="mb-6 pb-6 border-b-2 border-gray-200 text-center">
                <div className="text-4xl font-bold text-[#2abcd4]">5-7%</div>
                <div className="text-sm text-[#0c264d]">of children worldwide</div>
              </div>
              
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
                <div className="text-center mt-2 text-sm text-gray-600">2:1 to 3:1 ratio<sup className="text-green-600 font-bold ml-0.5">4</sup></div>
              </div>
              
              <div className="bg-[#0A9DC4] text-white rounded p-3 text-center">
                <div className="text-2xl font-bold">Combined Presentation</div>
                <div className="text-sm">50-75% of cases<sup className="text-green-600 font-bold ml-0.5">4</sup></div>
              </div>
            </div>
          </div>
        </section>

        {/* ADULT ADHD & DAILY IMPACT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 w-full flex justify-center order-last lg:order-first">
            {/* Adult ADHD Chart locked inside its own column */}
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 w-full max-w-md shadow-sm">
              <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">ADHD in Adults<sup className="text-green-600 font-bold ml-0.5">5</sup></h3>
              <div className="mb-6 pb-6 border-b-2 border-gray-200 grid grid-cols-2 gap-3">
                <div className="text-center border-r border-gray-200">
                  <div className="text-3xl font-bold text-[#0A9DC4]">2.6%</div>
                  <div className="text-xs text-gray-600 mt-1">Persistent<br/>(childhood-onset)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ffd166]">6.8%</div>
                  <div className="text-xs text-gray-600 mt-1">Symptomatic<br/>(any onset)</div>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b-2 border-gray-200">
                <div className="bg-gradient-to-r from-[#ffd166] to-[#2abcd4] text-white rounded p-4 text-center">
                  <div className="text-4xl font-bold">50-70%</div>
                  <div className="text-sm mt-2 font-bold">of childhood cases persist into adulthood</div>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b-2 border-gray-200">
                <div className="bg-[#0c264d] text-white rounded p-4 text-center">
                  <div className="text-4xl font-bold">~70%</div>
                  <div className="text-sm mt-2">have ≥1 comorbid mental health condition</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-center mb-4 text-[#0c264d] font-bold">Gender Differences in Comorbidity</div>
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
                  </div>
                </div>
                <div>
                  <div className="text-center mb-2 text-sm font-bold text-[#0A9DC4]">Males: Higher Rates Of</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#0A9DC4]/20 border border-[#0A9DC4] rounded p-2 text-center text-xs">
                      <div className="text-gray-700">Substance Use</div>
                    </div>
                    <div className="bg-[#0A9DC4]/20 border border-[#0A9DC4] rounded p-2 text-center text-xs">
                      <div className="text-gray-700">Schizophrenia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-[#0c264d] font-bold text-2xl border-b pb-2">Cultural Considerations</h3>
            <p className="leading-relaxed">
              Diagnosis rates vary across countries and cultures, reflecting differences in awareness, access to 
              healthcare, diagnostic practices, and cultural attitudes toward mental health. Some cultural contexts 
              may normalize or stigmatize ADHD symptoms differently.
            </p>

            <h2 className="text-[#0c264d] font-bold text-2xl border-b pb-2 pt-4">Impact on Daily Life</h2>
            <p className="leading-relaxed">
              ADHD can significantly impact various life domains:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700">
              <li><strong>Academic/Work:</strong> Difficulty completing assignments, meeting deadlines, staying organized, and maintaining consistent performance</li>
              <li><strong>Relationships:</strong> Challenges with listening, following through on commitments, emotional regulation, and managing conflict</li>
              <li><strong>Self-esteem:</strong> Repeated experiences of failure or criticism can lead to low self-confidence and negative self-perception</li>
              <li><strong>Daily functioning:</strong> Struggles with routine tasks like paying bills, household management, and personal organization</li>
              <li><strong>Safety:</strong> Increased risk of accidents due to inattention or impulsivity, particularly in driving</li>
            </ul>
            <p className="leading-relaxed text-sm pt-2">
              However, it's important to recognize that many individuals with ADHD also describe unique strengths, 
              including creativity, ability to hyperfocus on interesting tasks, high energy, resilience, and 
              thinking outside the box.
            </p>
          </div>
        </section>

        {/* UNDERSTANDING THE SPECTRUM */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-[#0c264d] font-bold text-2xl border-b pb-2">Understanding ADHD as a Spectrum</h2>
            <p className="leading-relaxed">
              ADHD exists on a spectrum, and no two people with ADHD are exactly alike. Symptoms vary in type, 
              severity, and combination. Some individuals are mildly affected and develop effective coping strategies 
              with minimal support, while others experience significant impairment requiring comprehensive treatment.
            </p>
            <p className="leading-relaxed">
              Additionally, ADHD commonly co-occurs with other conditions including learning disabilities, anxiety 
              disorders, depression, autism spectrum disorder, and sleep disorders. These co-occurring conditions 
              can complicate diagnosis and treatment, making individualized assessment and care essential.
            </p>
            <p className="leading-relaxed">
              Understanding ADHD as a complex, multifaceted condition—rather than a simple checklist of behaviors—is 
              crucial for effective support and treatment.
            </p>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center">
            {/* Spectrum box locked inside column */}
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 w-full max-w-md shadow-sm">
              <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">The ADHD Spectrum</h3>
              <div className="mb-6">
                <div className="text-sm text-center mb-2 text-[#0c264d] font-bold">Symptom Severity</div>
                <div className="h-16 rounded-lg overflow-hidden relative" style={{ background: 'linear-gradient(to right, #ffd166 0%, #2abcd4 50%, #0c264d 100%)' }}>
                  <div className="absolute inset-0 flex items-center justify-between px-4 text-white text-xs font-bold">
                    <span className="text-[#0c264d]">Mild</span>
                    <span>Moderate</span>
                    <span>Severe</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-center mb-3 text-[#0c264d] font-bold">Common Co-occurring Conditions<sup className="text-green-600 font-bold ml-0.5">6</sup></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#0A9DC4]/20 border border-[#0A9DC4] rounded p-2 text-center text-xs">
                    <div className="font-bold text-[#0c264d]">59%</div>
                    <div className="text-gray-700">Autism</div>
                  </div>
                  <div className="bg-[#ffd166]/20 border border-[#ffd166] rounded p-2 text-center text-xs">
                    <div className="font-bold text-[#0c264d]">10-92%</div>
                    <div className="text-gray-700">Learning Disorders</div>
                  </div>
                </div>
                <div className="text-xs text-center mt-3 text-gray-600 italic">60-100% of children with ADHD have ≥1 comorbid condition</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-12 w-full">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>Reuben, C., & Elgaddal, N. (2024). "ADHD in Children Ages 5–17 Years: US, 2020–2022." <i>NCHS Data Brief</i>, No. 499.</li>
            <li>Ayano, G., et al. (2023). "Prevalence of attention deficit hyperactivity disorder in adults: Umbrella review." <i>Psychiatry Research</i>, 328, 115449.</li>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.).</li>
            <li>Willcutt, E. G. (2012). "The prevalence of DSM-IV attention-deficit/hyperactivity disorder: a meta-analytic review." <i>Neurotherapeutics</i>, 9(3).</li>
            <li>Song, P., et al. (2021). "The global prevalence of adult attention-deficit hyperactivity disorder: A systematic review and meta-analysis." <i>Journal of Global Health</i>, 11.</li>
            <li>Larsson, H., et al. (2024). "The psychiatric comorbidity of ADHD." <i>Molecular Psychiatry</i>.</li>
          </ol>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed pl-2">
            <li>Centers for Disease Control and Prevention. (2024). "Data and Statistics About ADHD." CDC.</li>
            <li>National Institute of Mental Health. (2024). "Attention-Deficit/Hyperactivity Disorder (ADHD)." NIMH.</li>
            <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.).</li>
          </ul>
        </div>
      </div>
    </article>
  );
}