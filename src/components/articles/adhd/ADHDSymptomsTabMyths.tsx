import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function ADHDSymptomsTabMyths() {
  return (
    <>
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Myths & Misconceptions About ADHD</h2>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm">
                <strong>Important:</strong> Social media has created a lot of confusion about what is and isn't ADHD. 
                While awareness is wonderful, misinformation can lead to self-misdiagnosis, trivializing real struggles, 
                or missing other conditions that need treatment. This section addresses commonly claimed "ADHD symptoms" 
                that are either not actually ADHD, need much more research, or are misunderstood.
              </p>
            </div>



            {/* NOT Actually ADHD */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">NOT Actually ADHD (or Not Diagnostic Criteria)</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Object Permanence Issues"</div>
                  <div className="text-sm">
                    This term is completely misused on social media. Object permanence is a developmental milestone 
                    that infants achieve (knowing things exist when you can't see them). What people actually mean is 
                    <strong> working memory issues</strong> ("out of sight, out of mind"), which IS real in ADHD, 
                    but the term "object permanence" is scientifically incorrect in this context.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Rejection Sensitive Dysphoria (RSD)"</div>
                  <div className="text-sm">
                    This is controversial. It was coined by ONE researcher (Dr. William Dodson) and is NOT in the 
                    DSM-5 or ICD-11. It's not recognized as an official symptom by most ADHD experts. Emotional 
                    dysregulation IS real in ADHD (~70% experience it)<sup style={{color: '#10b981'}}>[1]</sup>, but "RSD" as a specific construct lacks 
                    scientific validation and peer-reviewed research.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Face Blindness (Prosopagnosia)</div>
                  <div className="text-sm">
                    No established link to ADHD. This is a separate neurological condition affecting facial recognition.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Aphantasia (Inability to Visualize)</div>
                  <div className="text-sm">
                    No research linking this to ADHD specifically. Aphantasia is a separate phenomenon where people 
                    cannot form mental images.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Synesthesia</div>
                  <div className="text-sm">
                    Not related to ADHD; it's a separate neurological phenomenon where one sense triggers another 
                    (like seeing colors when hearing music).
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Being "Gifted"</div>
                  <div className="text-sm">
                    While twice-exceptional people exist (ADHD + giftedness), ADHD doesn't cause giftedness or vice versa. 
                    They can co-occur but are separate traits.
                  </div>
                </div>
              </div>
            </div>

            {/* Needs More Research */}


            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Needs MUCH More Research / Overstated</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Time Blindness"</div>
                  <div className="text-sm">
                    While ADHD involves time perception difficulties, "time blindness" is not a clinical term and is 
                    often overgeneralized on social media. The actual symptom is difficulty with time estimation and 
                    time management, not literally being "blind" to time.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Maladaptive Daydreaming</div>
                  <div className="text-sm">
                    This is being studied as a separate condition, not specifically an ADHD symptom. While people with 
                    ADHD can daydream, maladaptive daydreaming is its own phenomenon.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Sensory Processing Issues</div>
                  <div className="text-sm">
                    These are MUCH more strongly associated with autism spectrum disorder. While there may be some 
                    sensory differences in ADHD (mostly related to distractibility), claiming Sensory Processing 
                    Disorder (SPD) is an ADHD trait is misleading and confuses two distinct conditions.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Doom Piles" / "Doom Boxes"</div>
                  <div className="text-sm">
                    These are symptoms of executive dysfunction and organizational difficulties, which ARE real in ADHD. 
                    However, the cutesy social media terms can trivialize real struggles and aren't clinical terminology.
                  </div>
                </div>
              </div>
            </div>

            {/* Misattributed or Over-Romanticized */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Misattributed or Over-Romanticized</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Every Instance of Procrastination</div>
                  <div className="text-sm">
                    Not all procrastination is ADHD. Everyone procrastinates sometimes. ADHD procrastination is 
                    chronic, severe, and related to executive dysfunction—not laziness or poor time management skills.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Being Quirky/Creative</div>
                  <div className="text-sm">
                    Creativity isn't a symptom of ADHD. ADHD is a neurodevelopmental disability, not a personality 
                    type or quirky trait. While some people with ADHD are creative, many aren't—and many creative 
                    people don't have ADHD.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"ADHD Makes You More Empathetic"</div>
                  <div className="text-sm">
                    No evidence supports this. Some people with ADHD are highly empathetic, some aren't. Empathy 
                    levels vary across all humans regardless of neurology.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <ImageWithFallback 
                    src="/images/adhd-justice.png"
                    alt="Lady Justice statue"
                    className="w-64 h-auto rounded mb-2"
                  />
                  <div className="font-bold text-[#0c264d] mb-1">"Strong Sense of Justice"</div>
                  <div className="text-sm">
                    While many people with ADHD report experiencing intense reactions to perceived injustice, this 
                    isn't an inherent ADHD trait. More likely explanations include: <strong>emotional dysregulation</strong>{' '}
                    (intense emotional reactions to anything perceived as unfair), <strong>black-and-white thinking</strong>{' '}
                    (difficulty with nuance due to executive dysfunction), <strong>personal experiences</strong> (many with 
                    ADHD have been misunderstood or treated unfairly, increasing sensitivity), and <strong>low frustration 
                    tolerance</strong> (quick emotional reactions when things don't seem right). If social justice becomes a 
                    special interest, hyperfocus can also play a role. The "justice sensitivity" narrative is appealing 
                    because it frames ADHD traits positively, but it's an oversimplification of complex emotional and 
                    cognitive processes.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"ADHD Tax"</div>
                  <div className="text-sm">
                    This is a social media term for the financial consequences of ADHD symptoms (late fees, replacing 
                    lost items, impulse purchases), not an actual symptom. While the consequences are real, it's 
                    important to distinguish between symptoms and their effects.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">"Neurospicy"</div>
                  <div className="text-sm">
                    Cutesy language that many actually disabled people find infantilizing and dismissive of real struggles. 
                    ADHD is a disability recognized by the ADA, not a fun personality quirk.
                  </div>
                </div>
              </div>
            </div>

            {/* Real but Overstated */}
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Real But Overstated/Oversimplified</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Emotional Dysregulation</div>
                  <div className="text-sm">
                    This IS common in ADHD (~70% experience it)<sup style={{color: '#10b981'}}>[1]</sup> but it's NOT one of the 18 DSM-5 diagnostic criteria<sup style={{color: '#10b981'}}>[2]</sup>. 
                    Social media often presents it as the main feature of ADHD when it's actually an associated feature, 
                    not a core diagnostic symptom.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Executive Dysfunction</div>
                  <div className="text-sm">
                    Real and core to ADHD. However, "ADHD paralysis" is an oversimplification of complex executive 
                    function challenges. It's not literal paralysis—it's task initiation difficulty, decision fatigue, 
                    or overwhelm from executive demands.
                  </div>
                </div>

                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Hyperfocus</div>
                  <div className="text-sm">
                    Real in ADHD but often romanticized. Hyperfocus can be problematic (forgetting to eat, ignoring 
                    responsibilities) and is better understood as difficulty regulating attention—not a superpower.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
              <p className="text-sm mb-2">
                <strong>The Bottom Line:</strong> ADHD is a real neurodevelopmental disorder with specific 
                diagnostic criteria in the DSM-5. While social media has increased awareness (which is great!), 
                it has also spread misinformation that can:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>Lead to self-misdiagnosis</li>
                <li>Trivialize the real struggles of people with ADHD</li>
                <li>Confuse ADHD with other conditions (especially autism)</li>
                <li>Make it harder for people to get accurate diagnoses</li>
                <li>Create unrealistic expectations about symptoms</li>
              </ul>
              <p className="text-sm mt-3">
                <strong>If you think you have ADHD:</strong> See a qualified healthcare provider for proper 
                evaluation. Don't rely on social media for diagnosis. ADHD is complex and requires professional 
                assessment.
              </p>
            </div>
          </div>

          {/* References for Myths & Misconceptions Tab */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-2">
              <p>[1] Shaw, P., Stringaris, A., Nigg, J., & Leibenluft, E. (2014). "Emotion dysregulation in attention deficit hyperactivity disorder." <em>American Journal of Psychiatry</em>, 171(3), 276-293.</p>
              <p>[2] American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>Barkley, R. A. (2015). <em>Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment</em> (4th ed.). Guilford Press.</p>
              <p>Nigg, J. T., et al. (2020). "Annual Research Review: On the relations among self-regulation, self-control, executive functioning, effortful control, cognitive control, impulsivity, risk-taking, and inhibition for developmental psychopathology." <em>Journal of Child Psychology and Psychiatry</em>, 61(3), 356-384.</p>
              <p>Faraone, S. V., et al. (2021). "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder." <em>Neuroscience & Biobehavioral Reviews</em>, 128, 789-818.</p>
              <p>Sedgwick, J. A., et al. (2019). "Social cognition in attention-deficit hyperactivity disorder (ADHD)." <em>Neuroscience & Biobehavioral Reviews</em>, 100, 252-271.</p>
            </div>
          </div>
    </>
  );
}
