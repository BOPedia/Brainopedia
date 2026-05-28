import React from 'react';
import { ASDComorbidities } from '../../../infographics/ASDComorbidities';
import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface MentalHealthContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function MentalHealthContent({ setCurrentArticle }: MentalHealthContentProps) {
  return (
    <div className="animate-fadeIn">
      <section className="mb-10">
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Mental Health & Wellbeing
          </h2>

          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Co-occurring Conditions</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Autistic individuals often experience co-occurring mental health conditions. These are frequently not 
                "part of autism" itself, but rather a result of the chronic stress of living in a world not 
                designed for neurodivergent needs.
              </p>

              {/* Your Infographic */}
              <div className="flex justify-center my-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ASDComorbidities />
              </div>

              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li><strong>Anxiety:</strong> 40-50% prevalence. Often related to social unpredictability or sensory overwhelm.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
                <li><strong>Depression:</strong> 20-37% prevalence. Frequently linked to the exhaustion of "masking."<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
                <li><strong>ADHD:</strong> 30-60% prevalence. Significant overlap in executive function challenges.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
                <li><strong>OCD:</strong> 17-37% prevalence. Distinct from, but often co-occurring with, autistic repetitive behaviors.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
                <li><strong>Sleep Disorders:</strong> 40-83% prevalence. Affects overall emotional regulation and daily functioning.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              
              {/* Threats to Wellbeing Card */}
              <div className="border-t-4 border-[#2abcd4] rounded-md p-5 bg-white shadow-sm flex flex-col">
                <div className="text-center">
                  <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Threats to Wellbeing</h3>
                </div>
                
                <div className="mx-auto w-40 mb-4">
                  <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                    <ImageWithFallback 
                      src="/images/autism/autism-living-MHandWtab-head-sideview.png" 
                      alt="Side profile of a head representing mental health threats"
                    />
                  </div>
                </div>

                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• <strong>Masking:</strong> Suppressing traits to fit in, leading to burnout.</li>
                  <li>• <strong>Invalidation:</strong> Being told your sensory struggles "aren't real."</li>
                  <li>• <strong>Lack of Autonomy:</strong> Feeling a lack of control over one's environment.</li>
                </ul>
              </div>

              {/* Protective Factors Card */}
              <div className="border-t-4 border-[#10b981] rounded-md p-5 bg-white shadow-sm flex flex-col">
                <div className="text-center">
                  <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Protective Factors</h3>
                </div>
                
                <div className="mx-auto w-40 mb-4">
                  <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                    <video 
                      src="/images/autism/autism-living-MHandWtab-female-motion.mp4" 
                      poster="/images/autism/autism-living-MHandWtab-female-motion.png"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-auto block"
                      aria-label="Abstract figure in motion representing protective factors"
                    />
                  </div>
                </div>

                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• <strong>Neuro-Affirming Support:</strong> Care that respects autistic ways of being.</li>
                  <li>• <strong>Special Interests:</strong> Using deep passions for regulation and joy.</li>
                  <li>• <strong>Community:</strong> Connection with other autistic people.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>
              Hollocks, M. J., Lerh, J. W., Magiati, I., Meiser-Stedman, R., & Brugha, T. S. (2019). "Anxiety and depression in adults with autism spectrum disorder: a systematic review and meta-analysis." <i>Psychological Medicine</i>, 49(4), 559-572.
            </li>
            <li>
              Hudson, C. C., Hall, L., & Harkness, K. L. (2019). "Prevalence of depressive disorders in individuals with autism spectrum disorder: a meta-analysis." <i>Journal of Abnormal Child Psychology</i>, 47(1), 165-175.
            </li>
            <li>
              Leitner, Y. (2014). "The co-occurrence of autism and attention deficit hyperactivity disorder in children–what do we know?" <i>Frontiers in Human Neuroscience</i>, 8, 268.
            </li>
            <li>
              Meier, S. M., Petersen, L., Schendel, D. E., et al. (2015). "Obsessive-compulsive disorder and autism spectrum disorders: longitudinal and offspring risk." <i>PLoS One</i>, 10(11).
            </li>
            <li>
              Carmassi, C., Palagini, L., Caruso, D., et al. (2019). "Systematic review of sleep disturbances and circadian sleep desynchronization in autism spectrum disorder: Toward an integrative and comprehensive model." <i>Frontiers in Psychiatry</i>, 10, 366. <i>(Note: Replaces Schwichtenberg as standard representative study)</i>
            </li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}