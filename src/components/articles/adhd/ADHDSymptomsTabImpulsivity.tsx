import { MessageCircle, Clock, Users, TrendingUp, ShoppingCart, AlertTriangle, Baby, GraduationCap, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function ADHDSymptomsTabImpulsivity() {
  return (
    <>
  
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impulsivity Symptoms</h2>
            
            <p className="mb-6">
              Impulsivity involves acting without forethought or consideration of consequences. It reflects difficulty 
              with inhibition—the ability to stop oneself from acting on immediate impulses.
            </p>
             
            {/* Lifespan Development Section */}
            <div className="clear-both mt-8 bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Impulsivity Across the Lifespan</h3>
              
              <ImageWithFallback 
                src="/images/adhd/adhd-impulsivity-shopping.png"
                alt="Impulse shopping - impulsivity in daily life"
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
                      <div className="text-sm text-slate-700">Grabbing toys from others, running into the street without looking, 
                      shouting out in class, difficulty waiting in line or taking turns.</div>
                    </div>
                  </div>
                  
                  {/* Adolescence */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <GraduationCap className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adolescence</div>
                      <div className="text-sm text-slate-700">Experimenting with risky behaviors, saying hurtful things without 
                      thinking, impulsive spending, quick decisions about relationships or commitments.</div>
                    </div>
                  </div>
                  
                  {/* Adulthood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Briefcase className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adulthood</div>
                      <div className="text-sm text-slate-700">Impulse purchases, quitting jobs suddenly, interrupting conversations, 
                      risky driving, making major life decisions without adequate planning.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mt-6 shadow-sm">
              <p className="text-sm text-[#0c264d]">
                <strong>Two Sides:</strong> Impulsivity can have serious consequences including financial problems, relationship difficulties, 
                legal issues, and safety concerns. However, it can also manifest as spontaneity and willingness to 
                take creative risks.
              </p>
            </div>

            {/* Research on Impulsivity Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mt-6 mb-6">

              <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Research on Impulsivity as a Core ADHD Symptom</h3>
                  <ImageWithFallback 
                  src="/images/adhd/adhd-impulsivity-purple-wires.png"
                  alt="Impulsivity and neural connections"
                  className="w-32 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm"
                  />
              <p className="mb-4 leading-relaxed">
                Studies confirm that impulsivity is a core symptom of ADHD across the lifespan, characterized by deficits in motor, 
                cognitive, and attentional control<sup className="text-green-600 font-bold ml-0.5">1</sup>. Research indicates that children and adults 
                with ADHD show higher rates of impulsive decision-making, such as instant gratification seeking and difficulty waiting, which 
                are linked to structural changes in the caudate nucleus and frontostriatal pathways<sup className="text-green-600 font-bold ml-0.5">2</sup>.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-bold text-[#0c264d] mb-1 text-base">Longitudinal Developmental Impact</h4>
                  <p className="text-sm mb-2 text-slate-700 leading-relaxed">
                    A 2024 study highlighted that key impulsive behaviors—specifically difficulty waiting turn, blurting out, and 
                    interrupting—are central to ADHD and disruptive behavior disorder (DBD) from childhood through adolescence<sup className="text-green-600 font-bold ml-0.5">3</sup>. 
                    This longitudinal research demonstrates how these core symptoms persist and evolve throughout developmental stages.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-1 text-base">Decision-Making & Reward Delays</h4>
                  <p className="text-sm mb-2 text-slate-700 leading-relaxed">
                    Research shows adults with ADHD often prioritize immediate, less valuable rewards over delayed, higher-value ones 
                    (delay discounting)<sup className="text-green-600 font-bold ml-0.5">4</sup>. A 2016 meta-analysis found this impulsive decision-making 
                    was consistently present across ages<sup className="text-green-600 font-bold ml-0.5">5</sup>, indicating that difficulty with delayed 
                    gratification is a stable feature of ADHD throughout the lifespan.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-1 text-base">Dimensions of Impulsivity</h4>
                  <p className="text-sm mb-2 text-slate-700 leading-relaxed">
                    Adults with ADHD exhibit higher impulsivity across three main dimensions: motor (acting without thinking), cognitive 
                    (poor planning), and attentional (short attention span)<sup className="text-green-600 font-bold ml-0.5">6</sup>. This multi-dimensional 
                    conceptualization helps explain why impulsivity manifests in diverse ways across different life situations and contexts.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-1 text-base">Neurobiological Basis</h4>
                  <p className="text-sm mb-2 text-slate-700 leading-relaxed">
                    Unlike other conditions, ADHD-related impulsivity is strongly associated with structural differences in the caudate 
                    nucleus and frontostriatal pathways<sup className="text-green-600 font-bold ml-0.5">2</sup>. These neurological findings provide 
                    evidence for the biological underpinnings of impulsive behavior in ADHD and distinguish it from impulsivity seen in 
                    other psychiatric conditions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-1 text-base">Behavioral Consequences</h4>
                  <p className="text-sm mb-2 text-slate-700 leading-relaxed">
                    High levels of impulsivity in ADHD are associated with increased risk for poor interpersonal skills, substance abuse, 
                    and dangerous behavior<sup className="text-green-600 font-bold ml-0.5">7</sup>. These adverse outcomes underscore the importance of 
                    addressing impulsivity through appropriate interventions and support systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0c264d] mb-1 text-base">Commonly Used Measures</h4>
                  <p className="text-sm mb-2 text-slate-700">
                    Researchers use several standardized tools to measure and quantify impulsivity in ADHD:
                  </p>
                  <ul className="text-sm space-y-1 ml-4 text-slate-700">
                    <li>• <strong>Barratt Impulsiveness Scale (BIS):</strong> Measures cognitive, motor, and non-planning impulsivity</li>
                    <li>• <strong>Continuous Performance Task (CPT-II):</strong> Measures errors of commission (impulsive actions)</li>
                    <li>• <strong>Iowa Gambling Task (IGT):</strong> Evaluates risky decision-making</li>
                  </ul>
                </div>
              </div>
              <div className="clear-both"></div>

              <div className="bg-[#d6e9ff] border-l-4 border-[#0c264d] p-4 rounded mt-6 shadow-sm">
                <p className="text-sm text-[#0c264d]">
                  <strong>Clinical Significance:</strong> These studies, often published in journals like <em>Journal of Child Psychology 
                  and Psychiatry</em> and covered in PubMed and PMC, emphasize that ADHD impulsivity is a neurobiological trait that 
                  requires distinct management compared to other disorders.
                </p>
              </div>
            </div>
          

          {/* ===== REFERENCES SECTION ===== */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
            
{/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Nigg, J. T. (2017). Annual Research Review: On the relations among self-regulation, self-control, executive functioning, effortful control, cognitive control, impulsivity, risk-taking, and inhibition for developmental psychopathology. <em>Journal of Child Psychology and Psychiatry</em>, 58(4), 361-383.</p>
                <p>2. Plichta, M. M., & Scheres, A. (2014). Ventral-striatal responsiveness during reward anticipation in ADHD and its relation to trait impulsivity in the healthy population: A meta-analytic review of the fMRI literature. <em>Neuroscience & Biobehavioral Reviews</em>, 38, 125-134.</p>
                <p>3. Burns, G. L., et al. (2024). Longitudinal developmental relations of ADHD and oppositional defiant disorder symptoms with impulsivity symptoms in childhood and early adolescence. <em>Journal of Child Psychology and Psychiatry</em>, 65(1), 42-53.</p>
                <p>4. Sonuga-Barke, E. J., & Fairchild, G. (2012). Neuroeconomics of attention-deficit/hyperactivity disorder: differential influences of medial, dorsal, and ventral prefrontal brain networks on suboptimal decision making? <em>Biological Psychiatry</em>, 72(2), 126-133.</p>
                <p>5. Jackson, J. N., & MacKillop, J. (2016). Attention-deficit/hyperactivity disorder and monetary delay discounting: A meta-analysis of case-control studies. <em>Biological Psychiatry: Cognitive Neuroscience and Neuroimaging</em>, 1(4), 316-325.</p>
                <p>6. Moeller, F. G., et al. (2001). Psychiatric aspects of impulsivity. <em>American Journal of Psychiatry</em>, 158(11), 1783-1793.</p>
                <p>7. Barkley, R. A., & Fischer, M. (2010). The unique contribution of emotional impulsiveness to impairment in major life activities in hyperactive children as adults. <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 49(5), 503-513.</p>
              </div>
            </div>
            
            {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
                <li>
                  American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).
                </li>
                <li>
                  Barkley, R. A. (2015). "Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment" (4th ed.). <em>Guilford Press</em>.
                </li>
                <li>
                  Dalley, J. W., & Robbins, T. W. (2017). "Fractionating impulsivity: neuropsychiatric implications." <em>Nature Reviews Neuroscience</em>, 18(3), 158-171.
                </li>
                <li>
                  Solanto, M. V. (2011). "Cognitive-behavioral therapy for adult ADHD: Targeting executive dysfunction." <em>Guilford Press</em>.
                </li>
              </ul>
            </div>
          </div>
    </>
  );
}