import { AlertTriangle, Clock, EarOff, FileX, FolderOpen, Brain, Search, Wind, CalendarX, Baby, GraduationCap, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export function ADHDSymptomsTabInattention() {
  return (
    <>
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Inattention Symptoms</h2>
            
            <p className="mb-4">
              The inattentive presentation is characterized by difficulty sustaining attention and organizational 
              challenges. This is sometimes referred to as "ADD" though that term is no longer used diagnostically. 
              People with this presentation may seem forgetful, disorganized, or "spacey."
            </p>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Inattention Manifests Across Ages</h3>
              
              <ImageWithFallback 
                src="/images/adhd/adhd-inattention-across-ages.png"
                alt="ADHD Inattention Across Different Life Stages"
                className="w-full max-w-[16rem] mx-auto mb-4 rounded"
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
              		src="/images/adhd/adhd-inattention-boy-looks-out-window.png"
              		alt="ADHD Inattention"
              		className="w-32 h-auto float-right ml-4 mb-4 rounded"
           	 
            {/* Long-term Functional Outcomes Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mt-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Inattention and Long-Term Functional Outcomes</h3>
              
              <p className="mb-4">
                Several studies indicate that inattention is a stronger or more consistent predictor of negative, long-term functional 
                outcomes in adults with ADHD—specifically regarding career, education, and financial stability—compared to 
                hyperactivity/impulsivity, which tends to wane with age<sup className="text-green-600 font-bold ml-0.5">1, 2, 3</sup>.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Employment and Occupational Outcomes</h4>
                  <p className="text-sm mb-2">
                    In a study of adults with ADHD (N=149), inattentiveness was a significant predictor of employment status, 
                    while hyperactivity/impulsivity was not<sup className="text-green-600 font-bold ml-0.5">1</sup>. A later analysis confirmed a 
                    stronger-than-anticipated role for inattention in predicting negative occupational outcomes, with these outcomes 
                    often mediated by functional impairments<sup className="text-green-600 font-bold ml-0.5">1</sup>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Life Success and Relationship Satisfaction</h4>
                  <p className="text-sm mb-2">
                    Following participants over a 15-year period, research found that inattention symptoms in early/middle adulthood 
                    were consistently associated with poorer life success, including lower career and relationship satisfaction<sup className="text-green-600 font-bold ml-0.5">2</sup>. 
                    Inattention emerged as a more consistent predictor of negative life outcomes in middle adulthood, while the impact 
                    of hyperactivity/impulsivity was more complex and less stable.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-2 text-base">Financial Distress and Welfare Receipt</h4>
                  <p className="text-sm mb-2">
                    Research highlights that ADHD, particularly with inattention and executive dysfunction, leads to higher financial 
                    distress, including increased debt and default rates<sup className="text-green-600 font-bold ml-0.5">3</sup>. Additionally, 
                    inattention and aggressive behaviors in childhood predicted adult welfare receipt, whereas hyperactivity did not<sup className="text-green-600 font-bold ml-0.5">4</sup>.
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
                      like receiving disciplinary action<sup className="text-green-600 font-bold ml-0.5">2</sup>.
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

          {/* ===== REFERENCES SECTION ===== */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <ol className="list-decimal ml-5 text-xs space-y-4 text-slate-700">
                <li>
                  Gjervan, B., Torgersen, T., Nordahl, H. M., & Rasmussen, K. (2012). Functional impairment and occupational outcome in adults with ADHD. <em>Journal of Attention Disorders</em>, 16(7), 544-552; Gjervan, B., Nordahl, H. M., Hjemdal, O., & Knudsen, G. P. (2016). Functional impairments associated with ADHD in adulthood: The mediating role of emotional dysregulation. <em>Nordic Psychology</em>, 68(3), 159-173.
                </li>
                <li>
                  Henning, A., Summerfeldt, L. J., & Parker, J. D. A. (2024). Longitudinal associations between symptoms of ADHD and life success in middle adulthood. <em>Journal of Attention Disorders</em>, 28(1), 125-138.
                </li>
                <li>
                  Beauchaine, T. P., Zisner, A. R., & Sauder, C. L. (2020). ADHD, financial distress, and suicide in adulthood. <em>Science Advances</em>, 6(40), eaba1551.
                </li>
                <li>
                  Vergunst, F., Tremblay, R. E., Nagin, D., Algan, Y., Beasley, E., Park, J., ... & Côté, S. M. (2021). Association of behavior in boys from low socioeconomic neighborhoods with employment earnings in adulthood. <em>JAMA Pediatrics</em>, 175(4), 334-341.
                </li>
              </ol>
            </div>
            
            {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-4 text-slate-700 p-0 m-0">
                <li>
                  American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).
                </li>
                <li>
                  Barkley, R. A. (2015). "Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment" (4th ed.). <em>Guilford Press</em>.
                </li>
                <li>
                  Willcutt, E. G. (2012). "The prevalence of DSM-IV attention-deficit/hyperactivity disorder: A meta-analytic review." <em>Neurotherapeutics</em>, 9(3), 490-499.
                </li>
                <li>
                  Quinn, P. O., & Madhoo, M. (2014). "A review of attention-deficit/hyperactivity disorder in women and girls: Uncovering this hidden diagnosis." <em>The Primary Care Companion for CNS Disorders</em>, 16(3).
                </li>
                <li>
                  Hinshaw, S. P., et al. (2022). "Annual Research Review: Attention-deficit/hyperactivity disorder in girls and women: underrepresentation, longitudinal processes, and key directions." <em>Journal of Child Psychology and Psychiatry</em>, 63(4), 484-496.
                </li>
              </ul>
            </div>
          </div>
    </>
  );
}