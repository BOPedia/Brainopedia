import { Hand, ArrowUpFromLine, Mountain, VolumeX, Zap, MessageSquare, Baby, GraduationCap, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function ADHDSymptomsTabHyperactivity() {
  return (
    <>
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Hyperactivity Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/adhd/adhd-hyperactivity-street-view.png"
              alt="Hyperactivity in everyday life - street view"
              className="w-32 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
            />

            
            <p className="mb-6">
              Hyperactivity involves excessive motor activity and restlessness. While often associated with children, 
              hyperactivity persists into adulthood, though it typically manifests differently.
            </p>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Hyperactivity Symptoms:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Hand className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Fidgeting and Squirming</div>
                    <div className="text-sm">Fidgeting with hands or feet, or squirming in seat</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <ArrowUpFromLine className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Leaving Seat</div>
                    <div className="text-sm">Leaving seat in situations when remaining seated is expected</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Mountain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Running or Climbing</div>
                    <div className="text-sm">Running or climbing in inappropriate situations (children) or feelings of restlessness (adults)</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <VolumeX className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Can't Play Quietly</div>
                    <div className="text-sm">Inability to engage in leisure activities quietly</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">"On the Go"</div>
                    <div className="text-sm">Being "on the go" or acting as if "driven by a motor"</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Talking Excessively</div>
                    <div className="text-sm">Talking more than typical for the situation</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hyperactivity Across the Lifespan</h3>
              
              <ImageWithFallback 
                src="/images/adhd/adhd-hyperactivity-lifespan.png"
                alt="Hyperactivity changes across the lifespan"
                className="w-full max-w-xs mx-auto mb-4 rounded"
              />

              {/* Timeline */}
              <div className="relative">
                {/* Horizontal line connecting all stages - hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-[#2abcd4]" style={{zIndex: 0}}></div>
                
                {/* Timeline items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative" style={{zIndex: 1}}>
                  {/* Childhood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Baby className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Childhood</div>
                      <div className="text-sm">Running around excessively, difficulty playing quietly, constantly 
                      climbing on furniture, inability to sit still during meals or class time.</div>
                    </div>
                  </div>
                  
                  {/* Adolescence */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <GraduationCap className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adolescence</div>
                      <div className="text-sm">Feeling restless during classes, tapping feet or clicking pens, 
                      needing to move around frequently, difficulty sitting through movies or long activities.</div>
                    </div>
                  </div>
                  
                  {/* Adulthood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Briefcase className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adulthood</div>
                      <div className="text-sm">Internal sense of restlessness, choosing active jobs over sedentary ones, 
                      fidgeting during meetings, feeling uncomfortable in situations requiring stillness, constantly keeping 
                      busy.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mt-6">
              <p className="text-sm">
                <strong>Age Trend:</strong> Hyperactivity symptoms tend to decrease with age, which is why many adults report 
                that as children they "couldn't sit still" but now feel more internally restless rather than physically hyperactive.
              </p>
            </div>

            {/* Research on Hyperactivity Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mt-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Research on Hyperactivity as a Core ADHD Symptom</h3>
              
              <p className="mb-4">
                Studies on ADHD hyperactivity show it is a persistent, quantifiable, and core symptom often characterized by 
                excessive, non-goal-directed movement and high levels of behavioral impulsivity. Research utilizes infrared motion 
                analysis, behavioral observation, and self-report surveys to track these behaviors across the lifespan, noting that 
                they often manifest as high thought variability and social challenges.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Objective Measurement of Hyperactive Movement</h4>
                  <p className="text-sm mb-2">
                    A National Institutes of Health (NIH) study used infrared motion analysis to objectively quantify hyperactive 
                    behavior in children with ADHD<sup style={{color: '#10b981'}}>[1]</sup>. The research found that boys with ADHD 
                    moved their heads 2.3 times more often and 3.4 times as far as typical children<sup style={{color: '#10b981'}}>[1]</sup>, 
                    demonstrating that hyperactivity is a measurable neurobiological phenomenon rather than simply "excess energy."
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Persistence of Hyperactivity in Adults</h4>
                  <p className="text-sm mb-2">
                    Research indicates that while hyperactivity may decrease with age, it still persists in many adults with ADHD<sup style={{color: '#10b981'}}>[2]</sup>. 
                    Studies comparing head and lower extremity movements to control groups have documented that hyperactive symptoms 
                    remain present and measurable in adulthood, though they often manifest differently than in childhood<sup style={{color: '#10b981'}}>[2]</sup>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Behavioral and Cognitive Aspects</h4>
                  <p className="text-sm mb-2">
                    Studies indicate that hyperactive, rather than inattentive, symptoms are specifically linked to increased 
                    variability in thought content<sup style={{color: '#10b981'}}>[3]</sup>. This finding suggests that the motor 
                    restlessness characteristic of hyperactivity may reflect underlying cognitive processes, including difficulty 
                    maintaining stable thought patterns.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Impact on Social Functioning</h4>
                  <p className="text-sm mb-2">
                    Research highlights that hyperactivity/impulsivity is a strong predictor of social impairment, particularly in 
                    early childhood<sup style={{color: '#10b981'}}>[4]</sup>. The excessive movement and difficulty with behavioral 
                    inhibition associated with hyperactivity can interfere with peer relationships and social development during 
                    critical developmental periods.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Neurobiological Basis</h4>
                  <p className="text-sm mb-2">
                    Findings indicate that levels of hyperactivity correlate with dopamine D₂ receptor density in the caudate<sup style={{color: '#10b981'}}>[5]</sup>, 
                    providing evidence for the neurobiological underpinnings of hyperactive behavior. This research supports the 
                    understanding that hyperactivity is rooted in brain structure and neurochemistry, not simply behavioral choices.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Prevalence and Treatment</h4>
                  <p className="text-sm mb-2">
                    Studies show that while the inattentive type is common, the hyperactive/impulsive and combined types account for a 
                    significant portion of ADHD cases<sup style={{color: '#10b981'}}>[6]</sup>. Research has evaluated the impact of 
                    methylphenidate, which has been shown to reduce the three main symptoms: hyperactivity, impulsiveness, and 
                    inattentiveness<sup style={{color: '#10b981'}}>[7]</sup>, demonstrating that targeted pharmacological treatment can 
                    effectively address hyperactive symptoms.
                  </p>
                </div>
              </div>

              <div className="bg-[#e8f5e8] border-l-4 border-[#0c264d] p-4 rounded mt-5">
                <p className="text-sm">
                  <strong>Clinical Implications:</strong> These findings suggest that hyperactivity is not just "excess energy" but a 
                  significant neurobiological component of ADHD that affects behavioral, cognitive, and social functioning, often 
                  requiring targeted treatment. Understanding hyperactivity as a measurable, persistent, and biologically-based symptom 
                  helps reduce stigma and supports evidence-based intervention approaches.
                </p>
              </div>
            </div>
          </div>

          {/* References Section */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-3">
              <p>[1] Teicher, M. H., Ito, Y., Glod, C. A., & Barber, N. I. (1996). Objective measurement of hyperactivity and attentional problems in ADHD. <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 35(3), 334-342.</p>
              <p>[2] Teicher, M. H., Polcari, A., Fourligas, N., Vitaliano, G., & Navalta, C. P. (2012). Hyperactivity persists in male and female adults with ADHD and remains a highly discriminative feature of the disorder: A case-control study. <em>BMC Psychiatry</em>, 12, 190.</p>
              <p>[3] Shaw, G. A., & Giambra, L. (1993). Task-unrelated thoughts of college students diagnosed as hyperactive in childhood. <em>Developmental Neuropsychology</em>, 9(1), 17-30.</p>
              <p>[4] McQuade, J. D., & Hoza, B. (2008). Peer problems in attention deficit hyperactivity disorder: Current status and future directions. <em>Developmental Disabilities Research Reviews</em>, 14(4), 320-324.</p>
              <p>[5] Volkow, N. D., Wang, G. J., Kollins, S. H., Wigal, T. L., Newcorn, J. H., Telang, F., ... & Swanson, J. M. (2009). Evaluating dopamine reward pathway in ADHD: Clinical implications. <em>JAMA</em>, 302(10), 1084-1091.</p>
              <p>[6] Willcutt, E. G. (2012). The prevalence of DSM-IV attention-deficit/hyperactivity disorder: A meta-analytic review. <em>Neurotherapeutics</em>, 9(3), 490-499.</p>
              <p>[7] Greenhill, L. L., Halperin, J. M., & Abikoff, H. (1999). Stimulant medications. <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 38(5), 503-512.</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
              <p>Barkley, R. A. (2015). "Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment" (4th ed.). <em>Guilford Press</em>.</p>
              <p>Faraone, S. V., et al. (2006). "Age-dependent decline of symptoms of attention deficit hyperactivity disorder: impact of remission definition and symptom type." <em>American Journal of Psychiatry</em>, 163(5), 816-823.</p>
              <p>Sibley, M. H., et al. (2012). "Diagnosing ADHD in adolescence." <em>Journal of Consulting and Clinical Psychology</em>, 80(1), 139-150.</p>
              <p>Wilens, T. E., & Spencer, T. J. (2010). "Understanding attention-deficit/hyperactivity disorder from childhood to adulthood." <em>Postgraduate Medicine</em>, 122(5), 97-109.</p>
            </div>
          </div>
    </>
  );
}