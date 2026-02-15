import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const adhdSymptomData = [
  { category: 'Disorganization', value: 8, fullMark: 10 },
  { category: 'Fidgeting', value: 7, fullMark: 10 },
  { category: 'Fatigue', value: 2, fullMark: 10 },
  { category: 'Risk-taking', value: 5, fullMark: 10 },
  { category: 'RSD', value: 9, fullMark: 10 },
  { category: 'Time Perception', value: 3, fullMark: 10 },
  { category: 'Emotional Dysregulation', value: 7, fullMark: 10 },
  { category: 'Motivation Issues', value: 2, fullMark: 10 },
  { category: 'Working Memory', value: 7, fullMark: 10 },
  { category: 'Executive Dysfunction', value: 8, fullMark: 10 },
  { category: 'Task Initiation', value: 9, fullMark: 10 },
  { category: 'Hyperfocus', value: 6, fullMark: 10 },
  { category: 'Sleep Difficulties', value: 7, fullMark: 10 },
  { category: 'Transitions', value: 6, fullMark: 10 },
];

export function ADHDSymptomsTabMoreA() {
  return (
    <>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Beyond the DSM-5: Additional ADHD Symptoms</h2>

            <div className="bg-[#d6e9ff] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important:</strong> These symptoms are common experiences reported by people with ADHD, though they may 
                not be present in every individual. ADHD presents differently in each person, and symptom severity can vary 
                across different life domains and situations.
              </p>
            </div>

            {/* Associated Risks and Impacts Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Associated Risks and Broader Impacts of ADHD</h3>
              
              <p className="mb-4">
                A comprehensive umbrella review analyzing over 1,000 studies found that ADHD is associated with significantly 
                increased risks across multiple life domains beyond the core symptoms<sup style={{color: '#10b981'}}>[1]</sup>. The review identified consistent 
                associations between ADHD and adverse outcomes in mental health, physical health, and social/lifestyle functioning, 
                highlighting the importance of taking a holistic approach to ADHD management and support.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Mental Health Risks</h4>
                  <p className="text-sm mb-2">
                    Research consistently shows strong associations between ADHD and various mental health challenges<sup style={{color: '#10b981'}}>[1]</sup>:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>Addiction:</strong> Higher rates of substance use disorders (alcohol, nicotine, drugs), as well as internet, gaming, and gambling addictions</li>
                    <li>• <strong>Self-harm and suicide:</strong> Significantly elevated risk of suicidal ideation, attempts, and completed suicide</li>
                    <li>• <strong>Mood disorders:</strong> Increased rates of depression and bipolar disorder</li>
                    <li>• <strong>Personality disorders:</strong> Higher prevalence of co-occurring personality disorders</li>
                    <li>• <strong>Poor self-esteem:</strong> Consistently reported across studies, often linked to depression</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Physical Health Risks</h4>
                  <p className="text-sm mb-2">
                    ADHD is associated with numerous physical health challenges:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>Sleep disorders:</strong> Higher rates of sleep problems, periodic limb movement, and bi-directional relationship between poor sleep and ADHD symptoms</li>
                    <li>• <strong>Obesity:</strong> Significant association with higher BMI and weight, particularly in Europe and Asia</li>
                    <li>• <strong>Oral health:</strong> Increased risk of tooth decay, cavities, higher plaque scores, and dental trauma</li>
                    <li>• <strong>Accidents and injuries:</strong> Higher rates of poisoning, non-intentional injury, bone fractures, and traumatic brain injury in adults</li>
                    <li>• <strong>Other conditions:</strong> Associations with asthma, migraines, chronic pain, and vision problems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Social and Lifestyle Impacts</h4>
                  <p className="text-sm mb-2">
                    ADHD significantly affects various aspects of daily life and social functioning:
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>Criminal behavior:</strong> Elevated rates of offending, convictions, and incarceration, with earlier onset of criminal activity</li>
                    <li>• <strong>Educational outcomes:</strong> Lower academic achievement, leaving school early, and achieving fewer qualifications</li>
                    <li>• <strong>Occupational challenges:</strong> Higher unemployment, frequent job changes, and lower income compared to peers</li>
                    <li>• <strong>Relationship difficulties:</strong> Challenges forming and maintaining peer and intimate relationships, poorer social skills</li>
                    <li>• <strong>Driving risks:</strong> Increased rates of accidents, collisions, road rage, and driving violations</li>
                    <li>• <strong>Risky behaviors:</strong> Higher rates of unplanned and teenage pregnancy</li>
                    <li>• <strong>Quality of life:</strong> Reduced quality of life, particularly in school, psychosocial functioning, and family/social relationships</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#e8f5e8] border-l-4 border-[#0c264d] p-4 rounded mt-5">
                <p className="text-sm">
                  <strong>Clinical Implications:</strong> These findings emphasize the importance of clinicians, educators, and 
                  families taking a holistic approach to ADHD assessment and management. Being aware of these associated risks 
                  allows for early intervention, appropriate screening for co-occurring conditions, and comprehensive support 
                  that addresses not just core symptoms but also broader impacts on health, education, relationships, and 
                  overall well-being.
                </p>
              </div>
            </div>
            
            <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Examining Additional Unofficial Symptoms of ADHD</h3>
            

            
            <p className="mb-4">
              While the DSM-5-TR focuses on the three core symptoms of inattention, hyperactivity, and impulsivity (covered 
              in the previous tabs), people with ADHD experience a much broader range of symptoms that significantly impact 
              daily life. The symptom wheel above shows additional symptoms commonly reported by individuals with ADHD, 
              rated on a scale from 0 (no symptoms) to 10 (maximum symptoms).
            </p>
            
            <p className="mb-6">
              These symptoms aren't formally part of the DSM-5 diagnostic criteria, but they're widely recognized by 
              researchers, clinicians, and the ADHD community as important aspects of the lived experience. Understanding 
              them is crucial for comprehensive self-awareness and management.
            </p>

            {/* Interactive Symptom Profile Chart */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Interactive Symptom Profile Chart</h3>
              <ImageWithFallback src="/images/adhd/adhd-more-symptoms-wheel.png" alt="ADHD symptom profile wheel showing severity ratings for traits like inattention, hyperactivity, and mood swings" className="w-full max-w-md mx-auto rounded-lg mb-4" />
              <p className="mb-4 text-sm">
                Below is an interactive visual example of one individual's symptom profile. Each person's chart will 
                look different, reflecting their unique combination of characteristics and support needs.
              </p>

              <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
                <p className="text-sm mb-2">
                  <strong>How to Read This Chart:</strong>
                </p>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Center (0):</strong> The symptom is not present or causes no difficulty</li>
                  <li>• <strong>Outer edge (10):</strong> Maximum level of impact or challenge in that area</li>
                  <li>• <strong>Each spoke:</strong> Represents a different symptom category (14 total)</li>
                  <li>• <strong>The colored area:</strong> Shows an example individual's profile across all categories</li>
                  <li>• <strong>Hover over the chart:</strong> See exact values for each category</li>
                  <li>• <strong>Different patterns:</strong> Everyone's chart looks different—no two people with ADHD have the same profile!</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#2abcd4] hidden md:block">
                <ResponsiveContainer width="100%" height={500}>
                  <RadarChart data={adhdSymptomData}>
                    <PolarGrid stroke="#2abcd4" strokeWidth={1.5} />
                    <PolarAngleAxis 
                      dataKey="category" 
                      tick={{ fill: '#0c264d', fontSize: 12, fontWeight: 'bold' }}
                      tickMargin={50}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 10]} 
                      tick={{ fill: '#0c264d', fontSize: 11, dy: 10 }}
                      tickCount={6}
                    />
                    <Radar
                      name="Example ADHD Profile"
                      dataKey="value"
                      stroke="#2abcd4"
                      fill="#2abcd4"
                      fillOpacity={0.6}
                      strokeWidth={2}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '2px solid #2abcd4',
                        borderRadius: '8px',
                        padding: '10px'
                      }}
                      labelStyle={{ color: '#0c264d', fontWeight: 'bold' }}
                    />
                    <Legend 
                      wrapperStyle={{ paddingTop: '20px' }}
                      iconType="circle"
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-[#f0f9ff] p-4 rounded mt-6">
                <p className="text-sm">
                  <strong>Why This Matters:</strong> Understanding that ADHD presents differently in every individual 
                  helps clinicians, educators, and families provide personalized support. This chart format is commonly 
                  used by professionals to visualize assessment results and track changes over time. The example shown 
                  demonstrates how one person might have significant rejection sensitive dysphoria (9/10) and task initiation 
                  difficulties (9/10) while having moderate hyperfocus tendencies (6/10)—highlighting the heterogeneity 
                  of ADHD presentation.
                </p>
              </div>
            </div>

            {/* Disorganization */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Disorganization</h3>
              <p className="mb-3">
                Chronic difficulty maintaining order in physical spaces, schedules, and digital systems. This goes beyond 
                occasional messiness to affect daily functioning, making it hard to find important items, keep track of 
                commitments, and maintain structured routines.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Disorganization in ADHD is strongly linked to Executive Function (EF) deficits.</p>
                  <p><strong>Executive Age Gap:</strong> Research by Dr. Russell Barkley suggests that individuals with ADHD may have 
                  a developmental delay in executive functioning of approximately 30–40%. For example, a 30-year-old may have the 
                  organizational skills of a 20-year-old.<sup className="text-[#10b981]">2</sup></p>
                  <p><strong>Prevalence:</strong> Studies show that 40–60% of adults with ADHD experience significant challenges in 
                  time management and organization.<sup className="text-[#10b981]">2</sup></p>
                  <p><strong>Memory Encoding:</strong> Forgetfulness in ADHD often stems from disorganized encoding of information, 
                  which prevents the brain from storing new data effectively.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#ffe8d6] p-3 rounded">
                <strong>Real-life impact:</strong> Frequently losing keys, wallets, or phones; missing appointments because 
                you forgot to write them down; cluttered workspaces that make it difficult to focus; piles of unsorted mail 
                and papers.
              </div>
            </div>

            {/* Fidgeting */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fidgeting</h3>
              <p className="mb-3">
                Constant need for physical movement or tactile stimulation, including finger tapping, leg bouncing, pen 
                clicking, hair twirling, or handling objects. While related to hyperactivity, fidgeting is often a self-regulation 
                strategy that helps with focus and emotional regulation.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Fidgeting is increasingly recognized as a compensatory mechanism for self-regulation rather than just a sign of hyperactivity.</p>
                  <p><strong>Cognitive Enhancement:</strong> A 2024 study of 70 adults found that fidgeting significantly increased during 
                  correct trials of cognitive tasks, suggesting it helps sustain attention during challenging work.<sup className="text-[#10b981]">3</sup></p>
                  <p><strong>Neurochemical Boost:</strong> Physical movement, even small gestures like foot tapping, increases levels of 
                  dopamine and norepinephrine—the same chemicals targeted by ADHD medications to sharpen focus.</p>
                  <p><strong>Engagement:</strong> Rhythmic fidgeting (e.g., leg bouncing) has been linked to 30% higher task engagement 
                  in adults during meetings compared to forced stillness.<sup className="text-[#10b981]">3</sup></p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e8f5e8] p-3 rounded">
                <strong>Real-life impact:</strong> Needing to doodle during meetings to stay focused, constantly repositioning 
                yourself in your seat, unable to keep your hands still, or needing a fidget toy to concentrate during lectures.
              </div>
            </div>

            {/* Fatigue */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fatigue</h3>
              <p className="mb-3">
                Persistent mental and physical exhaustion that isn't always relieved by rest. This can stem from the constant 
                effort required to regulate attention, manage executive functions, and cope with sensory input. The brain's 
                constant "on" state leads to burnout even when tasks seem simple to others.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>ADHD-related fatigue is often characterized as a state of chronic mental exhaustion caused by the effort required to manage symptoms.</p>
                  <p><strong>High Prevalence:</strong> One study found that 62% of people with ADHD meet the clinical criteria for fatigue.<sup className="text-[#10b981]">4</sup></p>
                  <p><strong>Executive Load:</strong> Research indicates that executive function deficits, particularly in self-management 
                  and problem-solving, directly mediate the relationship between ADHD and job burnout.<sup className="text-[#10b981]">4</sup></p>
                  <p><strong>Brain Activity:</strong> Mental fatigue is linked to dysregulated dopaminergic systems and weak alpha wave 
                  modulation, which are responsible for tuning out environmental distractions.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e6e6fa] p-3 rounded">
                <strong>Real-life impact:</strong> Feeling completely drained after social interactions or focused work, 
                needing excessive amounts of sleep, experiencing "ADHD burnout" after periods of high masking or compensation.
              </div>
            </div>

            {/* Risk-taking */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Risk-taking</h3>
              <p className="mb-3">
                Tendency to engage in behaviors with potential negative consequences, often driven by novelty-seeking, 
                impulsivity, and difficulty forecasting future outcomes. This can manifest in financial decisions, driving 
                behavior, relationship choices, or physical activities.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Research consistently links ADHD to increased engagement in risky behaviors across various domains.</p>
                  <p><strong>Laboratory Evidence:</strong> A meta-analysis of 37 studies involving over 2,300 participants found 
                  substantial evidence that individuals with ADHD are more likely to make risky decisions in controlled tasks.<sup className="text-[#10b981]">5</sup></p>
                  <p><strong>Impulsivity Drivers:</strong> Risk-taking is often driven by "overhasty learning," where individuals with 
                  ADHD update their beliefs too quickly during risk assessment, a process linked to weak functional connectivity in 
                  the frontal lobe.</p>
                  <p><strong>Real-world Impact:</strong> Extensive research shows that ADHD populations disproportionately engage in 
                  risky traffic behavior, substance abuse, gambling, and financial risk-taking.<sup className="text-[#10b981]">5</sup></p>
                </div>
              </div>
              
              <div className="text-sm bg-[#ffe8d6] p-3 rounded">
                <strong>Real-life impact:</strong> Making impulsive purchases you can't afford, speeding or driving recklessly, 
                quitting jobs without backup plans, or engaging in extreme sports without proper safety considerations.
              </div>
            </div>

            {/* Mood Swings */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mood Swings</h3>
              <p className="mb-3">
                Rapid shifts in emotional states that can occur multiple times throughout the day. These aren't the same as 
                bipolar mood episodes but reflect the emotional dysregulation common in ADHD. Emotions can feel intense, 
                change quickly, and be difficult to predict or control.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Emotional dysregulation is a prominent feature of ADHD, though it is not always listed as a primary diagnostic symptom.</p>
                  <p><strong>Prevalence in Adults:</strong> Between 30% and 70% of adults with ADHD report significant mood swings and 
                  emotional turbulence.<sup className="text-[#10b981]">6</sup></p>
                  <p><strong>Comorbidity:</strong> Adults with ADHD are four times more likely to have a mood disorder than the general 
                  population.<sup className="text-[#10b981]">6</sup></p>
                  <p><strong>Diagnostic Overlap:</strong> Symptoms often include irritability, low tolerance for frustration, and intense 
                  but short-lived emotional changes.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#fde8f3] p-3 rounded">
                <strong>Real-life impact:</strong> Going from happy to irritable to sad within minutes, having emotional 
                reactions that surprise even yourself, struggling to maintain emotional stability throughout the day.
              </div>
            </div>

            {/* Time Management Issues */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Time Management Issues</h3>
              <p className="mb-3">
                Difficulty accurately perceiving time, estimating task duration, planning schedules, and meeting deadlines. 
                Also known as "time blindness," this symptom makes it hard to gauge how long things take or how much time 
                has passed, leading to chronic lateness and poor planning.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Research highlights that individuals with ADHD have a fundamentally different perception of time compared to neurotypical peers.</p>
                  <p><strong>Altered Internal Clock:</strong> A meta-analysis indicates that people with ADHD exhibit an "accelerated internal clock," 
                  leading to systematic inaccuracies in time estimation and reproduction.<sup className="text-[#10b981]">7</sup></p>
                  <p><strong>Time Discrimination Deficits:</strong> Studies show significant difficulties in discriminating between brief durations, 
                  which contributes to chronic lateness and poor planning.<sup className="text-[#10b981]">7</sup></p>
                  <p><strong>Prospective Memory:</strong> In task-based studies, individuals with ADHD were significantly less accurate at 
                  "prospective memory" tasks—remembering to perform an action at a specific future time.<sup className="text-[#10b981]">7</sup></p>
                </div>
              </div>
              
              <div className="text-sm bg-[#e8f5e8] p-3 rounded">
                <strong>Real-life impact:</strong> Consistently underestimating how long tasks will take, losing track of time 
                completely when engaged in activities, perpetual lateness despite best intentions, last-minute rushing to meet 
                deadlines.
              </div>
            </div>

            {/* Sensory Processing */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory Processing</h3>
              <p className="mb-3">
                Heightened or unusual responses to sensory input including sounds, textures, lights, smells, and tastes. 
                This can involve both hypersensitivity (being overwhelmed by stimuli) and hyposensitivity (seeking intense 
                sensory experiences). Sensory processing differences significantly impact comfort and focus.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Recent meta-analyses have formalized the link between ADHD and atypical sensory experiences.<sup className="text-[#10b981]">8</sup></p>
                  <p><strong>Atypical Sensory Profile:</strong> Research across more than 30 studies indicates that individuals with ADHD experience 
                  significantly higher rates of sensory sensitivity, sensory avoidance, and sensory seeking.<sup className="text-[#10b981]">8</sup></p>
                  <p><strong>Multi-Modal Sensitivity:</strong> These differences are not limited to one sense but span taste, smell, movement, 
                  vision, touch, and hearing.</p>
                  <p><strong>Clinical Significance:</strong> Some researchers suggest that sensory difficulties are a core part of the ADHD phenotype 
                  and should be included in standard clinical evaluations.<sup className="text-[#10b981]">8</sup></p>
                </div>
              </div>
              
              <p className="mb-3 text-sm">
                <strong>Note:</strong> These sensory challenges can also be characteristic of{' '}
                <a href="/spd" className="text-[#2abcd4] underline hover:text-[#0c264d]">
                  Sensory Processing Disorder (SPD)
                </a>, which can occur independently or alongside ADHD. If sensory issues are a primary concern, 
                exploring SPD may provide additional insight.
              </p>
              <div className="text-sm bg-[#e6e6fa] p-3 rounded">
                <strong>Real-life impact:</strong> Clothing tags are unbearable, fluorescent lights cause headaches, certain 
                food textures are intolerable, background noise makes concentration impossible, or needing loud music and 
                intense flavors.
              </div>
            </div>

            {/* Forgetfulness */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Forgetfulness</h3>
              <p className="mb-3">
                Frequent memory lapses affecting daily activities, appointments, conversations, and tasks. This involves both 
                working memory (holding information temporarily) and prospective memory (remembering to do things in the future). 
                It's not about long-term memory but rather the executive function required to encode and retrieve information.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>The "forgetfulness" in ADHD is primarily a failure of the brain's "mental scratchpad."</p>
                  <p><strong>Working Memory Impairment:</strong> Large-scale impairments have been measured in visuospatial and phonological 
                  short-term memory (d=0.89 and d=0.55 respectively).<sup className="text-[#10b981]">9</sup></p>
                  <p><strong>Information Prioritization:</strong> A 2026 study found that while overall working memory is lower, individuals 
                  with ADHD can still prioritize "valuable" information as effectively as others; the deficit is in the total capacity, 
                  not the selection process.<sup className="text-[#10b981]">9</sup></p>
                  <p><strong>Reordering Deficits:</strong> Roughly 42% of children with ADHD exhibit severe impairment in "working memory 
                  reordering"—the ability to mentally manipulate information they just heard.<sup className="text-[#10b981]">9</sup></p>
                </div>
              </div>
              
              <div className="text-sm bg-[#ffe8d6] p-3 rounded">
                <strong>Real-life impact:</strong> Walking into rooms and forgetting why, losing track of what someone just 
                said, forgetting appointments even when they're written down, repeatedly buying items you already have at home.
              </div>
            </div>

            {/* Social Challenges */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Challenges</h3>
              <p className="mb-3">
                Difficulty with social interactions including interrupting others, missing social cues, talking excessively, 
                struggling with turn-taking in conversations, and misreading emotional expressions. These challenges stem from 
                impulsivity, inattention to social details, and executive function difficulties with self-monitoring.
              </p>
              
              <div className="bg-[#f0f9ff] p-4 rounded mb-3">
                <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
                <div className="text-sm space-y-2">
                  <p>Social difficulties are often categorized as "performance deficits" rather than "acquisition deficits."</p>
                  <p><strong>Performance Deficit:</strong> Research shows most individuals with ADHD know the social rules but struggle to 
                  apply them in real-time due to poor inhibitory control and self-regulation.<sup className="text-[#10b981]">10</sup></p>
                  <p><strong>Social Cognition:</strong> ADHD is linked to difficulties in responding to subtle social cues and managing emotions 
                  during reciprocal interactions.</p>
                </div>
              </div>
              
              <div className="text-sm bg-[#fde8f3] p-3 rounded">
                <strong>Real-life impact:</strong> Interrupting others without meaning to, dominating conversations, missing 
                hints that someone wants to leave, forgetting what was said earlier in the conversation, struggling to maintain 
                friendships.
              </div>
            </div>

            <div className="bg-[#d6e9ff] border-l-4 border-[#0c264d] p-4 rounded mb-8">
              <p className="text-sm font-bold mb-2">Additional Commonly Reported Symptoms:</p>
              <p className="text-sm">
                Beyond the symptom wheel, people with ADHD frequently report additional challenges related to working memory, 
                executive function, sleep, and more. The following symptoms expand on the lived experience of ADHD.
              </p>
            </div>
    </>
  );
}
