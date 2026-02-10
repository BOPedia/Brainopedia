import { AlertTriangle, Clock, EarOff, FileX, FolderOpen, Brain, Search, Wind, CalendarX, Baby, GraduationCap, Briefcase } from 'lucide-react';

export function ADHDSymptomsTabInattention() {
  return (
    <>
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Inattention Symptoms</h2>
            

            
            <p className="mb-6">
              The inattentive presentation is characterized by difficulty sustaining attention and organizational 
              challenges. This is sometimes referred to as "ADD" though that term is no longer used diagnostically. 
              People with this presentation may seem forgetful, disorganized, or "spacey."
            </p>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Inattention Symptoms:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Careless Mistakes</div>
                    <div className="text-sm">Failing to give close attention to details or making careless mistakes</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Difficulty Sustaining Attention</div>
                    <div className="text-sm">Trouble maintaining focus in tasks or play activities</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <EarOff className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Not Listening</div>
                    <div className="text-sm">Appearing not to listen when spoken to directly</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <FileX className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Incomplete Tasks</div>
                    <div className="text-sm">Not following through on instructions and failing to finish tasks</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <FolderOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Organization Difficulties</div>
                    <div className="text-sm">Trouble organizing tasks and activities</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Avoidance of Mental Effort</div>
                    <div className="text-sm">Avoiding tasks that require sustained mental effort</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Losing Items</div>
                    <div className="text-sm">Frequently losing necessary items (keys, phones, paperwork)</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <Wind className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Easily Distracted</div>
                    <div className="text-sm">Being easily distracted by extraneous stimuli</div>
                  </div>
                </div>
                
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4] flex items-start gap-3">
                  <div className="bg-[#2abcd4] p-2 rounded-lg flex-shrink-0">
                    <CalendarX className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0c264d] mb-1">Forgetfulness</div>
                    <div className="text-sm">Forgetfulness in daily activities</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Inattention Manifests Across Ages</h3>
              

              
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
                      <div className="text-sm">Trouble completing homework, difficulty following multi-step directions, 
                      losing school supplies, appearing to daydream during lessons, making careless errors on schoolwork.</div>
                    </div>
                  </div>
                  
                  {/* Adolescence */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <GraduationCap className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adolescence</div>
                      <div className="text-sm">Struggling with long-term projects, difficulty keeping track of 
                      assignments across multiple classes, poor time management, bedroom and backpack disorganization.</div>
                    </div>
                  </div>
                  
                  {/* Adulthood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Briefcase className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adulthood</div>
                      <div className="text-sm">Missing deadlines at work, difficulty managing household tasks and finances, 
                      chronic lateness, trouble listening in conversations or meetings, frequently misplacing important items 
                      like wallet or keys.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mt-6">
              <p className="text-sm">
                <strong>Note:</strong> Inattentive symptoms can be less obvious than hyperactive symptoms, particularly in 
                individuals assigned female at birth, leading to underdiagnosis. These individuals may be labeled as "lazy," 
                "unmotivated," or "not living up to potential" when in fact they're struggling with executive function deficits.
              </p>
            </div>

            {/* Long-term Functional Outcomes Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mt-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Inattention and Long-Term Functional Outcomes</h3>
              
              <p className="mb-4">
                Several studies indicate that inattention is a stronger or more consistent predictor of negative, long-term functional 
                outcomes in adults with ADHD—specifically regarding career, education, and financial stability—compared to 
                hyperactivity/impulsivity, which tends to wane with age<sup style={{color: '#10b981'}}>[1][2][3]</sup>.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Employment and Occupational Outcomes</h4>
                  <p className="text-sm mb-2">
                    In a study of adults with ADHD (N=149), inattentiveness was a significant predictor of employment status, 
                    while hyperactivity/impulsivity was not<sup style={{color: '#10b981'}}>[1]</sup>. A later analysis confirmed a 
                    stronger-than-anticipated role for inattention in predicting negative occupational outcomes, with these outcomes 
                    often mediated by functional impairments<sup style={{color: '#10b981'}}>[1]</sup>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Life Success and Relationship Satisfaction</h4>
                  <p className="text-sm mb-2">
                    Following participants over a 15-year period, research found that inattention symptoms in early/middle adulthood 
                    were consistently associated with poorer life success, including lower career and relationship satisfaction<sup style={{color: '#10b981'}}>[2]</sup>. 
                    Inattention emerged as a more consistent predictor of negative life outcomes in middle adulthood, while the impact 
                    of hyperactivity/impulsivity was more complex and less stable.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Financial Distress and Welfare Receipt</h4>
                  <p className="text-sm mb-2">
                    Research highlights that ADHD, particularly with inattention and executive dysfunction, leads to higher financial 
                    distress, including increased debt and default rates<sup style={{color: '#10b981'}}>[3]</sup>. Additionally, 
                    inattention and aggressive behaviors in childhood predicted adult welfare receipt, whereas hyperactivity did not<sup style={{color: '#10b981'}}>[4]</sup>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Why Inattention Has Greater Long-Term Impact</h4>
                  <div className="bg-[#f0f9ff] p-4 rounded">
                    <p className="text-sm mb-2">
                      <strong>Stability of Symptoms:</strong> While hyperactivity/impulsivity often declines with age, inattention 
                      symptoms often remain stable or become more impairing in adulthood.
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Nature of Impairment:</strong> Inattention typically leads to chronic underachievement, such as missed 
                      deadlines, poor job performance, and lower socioeconomic status, whereas hyperactivity/impulsivity might more 
                      strongly predict immediate behavioral issues or lower job satisfaction.
                    </p>
                    <p className="text-sm">
                      <strong>Important Exception:</strong> While inattention is the stronger predictor overall, research indicates 
                      that hyperactivity/impulsivity can still be a significant predictor for specific, immediate work-related issues 
                      like receiving disciplinary action<sup style={{color: '#10b981'}}>[2]</sup>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#e8f5e8] border-l-4 border-[#0c264d] p-4 rounded mt-5">
                <p className="text-sm">
                  <strong>Clinical Implications:</strong> These findings underscore the critical importance of identifying and treating 
                  inattention symptoms in adults with ADHD. Even as hyperactive symptoms diminish with age, ongoing support for 
                  inattentive symptoms is essential for improving long-term career, financial, and relationship outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* References for Inattention Tab */}
          <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
            
            <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
            <div className="text-sm space-y-3">
              <p>[1] Gjervan, B., Torgersen, T., Nordahl, H. M., & Rasmussen, K. (2012). Functional impairment and occupational outcome in adults with ADHD. <em>Journal of Attention Disorders</em>, 16(7), 544-552; Gjervan, B., Nordahl, H. M., Hjemdal, O., & Knudsen, G. P. (2016). Functional impairments associated with ADHD in adulthood: The mediating role of emotional dysregulation. <em>Nordic Psychology</em>, 68(3), 159-173.</p>
              <p>[2] Henning, A., Summerfeldt, L. J., & Parker, J. D. A. (2024). Longitudinal associations between symptoms of ADHD and life success in middle adulthood. <em>Journal of Attention Disorders</em>, 28(1), 125-138.</p>
              <p>[3] Beauchaine, T. P., Zisner, A. R., & Sauder, C. L. (2020). ADHD, financial distress, and suicide in adulthood. <em>Science Advances</em>, 6(40), eaba1551.</p>
              <p>[4] Vergunst, F., Tremblay, R. E., Nagin, D., Algan, Y., Beasley, E., Park, J., ... & Côté, S. M. (2021). Association of behavior in boys from low socioeconomic neighborhoods with employment earnings in adulthood. <em>JAMA Pediatrics</em>, 175(4), 334-341.</p>
            </div>
            
            <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
            <div className="text-sm space-y-2">
              <p>American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
              <p>Barkley, R. A. (2015). "Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment" (4th ed.). <em>Guilford Press</em>.</p>
              <p>Willcutt, E. G. (2012). "The prevalence of DSM-IV attention-deficit/hyperactivity disorder: A meta-analytic review." <em>Neurotherapeutics</em>, 9(3), 490-499.</p>
              <p>Quinn, P. O., & Madhoo, M. (2014). "A review of attention-deficit/hyperactivity disorder in women and girls: Uncovering this hidden diagnosis." <em>The Primary Care Companion for CNS Disorders</em>, 16(3).</p>
              <p>Hinshaw, S. P., et al. (2022). "Annual Research Review: Attention-deficit/hyperactivity disorder in girls and women: underrepresentation, longitudinal processes, and key directions." <em>Journal of Child Psychology and Psychiatry</em>, 63(4), 484-496.</p>
            </div>
          </div>
    </>
  );
}
