import React from 'react';
import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface DailyLifeContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function DailyLifeContent({ setCurrentArticle }: DailyLifeContentProps) {
  return (
    <div className="animate-fadeIn">
      <section className="mb-10">
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Daily Life & Practical Considerations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Communication Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Communication in Daily Life</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Dailytab-AAC-device.png" 
                    alt="Graphic representing an AAC device for communication"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Autistic people communicate in diverse ways, often diverging from neurotypical expectations:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Verbal communication:</strong> Many are fluent but may struggle with processing speed or social pragmatics.</li>
                <li><strong>Selective mutism:</strong> Speaking in certain comfortable situations but not others.</li>
                <li><strong>Nonspeaking:</strong> Roughly 25-30% of autistic people are nonspeaking or minimally speaking.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
                <li><strong>AAC users:</strong> Utilizing tablets, letter boards, or sign language to communicate.</li>
              </ul>
            </div>

            {/* Sensory Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Sensory Experiences</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Dailytab-comfy-room.png" 
                    alt="Graphic representing a comfortable, sensory-friendly room"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Sensory differences are not just "preferences"; they profoundly affect daily functioning:<sup className="text-green-600 font-bold ml-0.5">2</sup>
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Environmental management:</strong> Curating home spaces to reduce overwhelming stimuli.</li>
                <li><strong>Accommodations:</strong> Using tools like noise-canceling headphones or tinted lenses.</li>
                <li><strong>Sensory seeking:</strong> Actively engaging in "stimming" or sensory input to self-regulate.</li>
              </ul>
            </div>

            {/* Executive Function Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Executive Functioning</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Dailytab-ex-fxn-mngt.png" 
                    alt="Graphic representing executive function management"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Managing the "business of being alive" can require significantly more cognitive effort:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Visual supports:</strong> Using checklists, calendars, and timers to compensate for internal organization challenges.</li>
                <li><strong>Task initiation:</strong> Finding it difficult to start even simple tasks without a clear "on-ramp."</li>
                <li><strong>Routines:</strong> Relying on strict routines to reduce the daily cognitive load.</li>
              </ul>
            </div>

            {/* Autistic Burnout Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Energy & Burnout</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Dailytab-exhausted-girl.png" 
                    alt="Graphic representing an exhausted individual experiencing autistic burnout"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Navigating a neurotypical world requires constant adaptation and energy expenditure:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Autistic Burnout:</strong> Chronic exhaustion and loss of skills caused by prolonged masking and over-exertion.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
                <li><strong>Recovery:</strong> Needing significant, dedicated "recharge time" after social or sensory-heavy outings.</li>
                <li><strong>Pacing:</strong> Learning to measure and protect daily energy reserves.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Independent Living Section */}
      <section className="bg-[#e0f7fa] p-6 rounded-xl mb-10 border-l-4 border-[#0c264d]">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl">Independent Living Arrangements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <ul className="space-y-2 bg-white p-4 rounded shadow-sm">
            <li><strong>Independent:</strong> Living alone or with partners.</li>
            <li><strong>Supported:</strong> Living independently with visiting staff or support workers.</li>
          </ul>
          <ul className="space-y-2 bg-white p-4 rounded shadow-sm">
            <li><strong>With Family:</strong> Living with parents or relatives by choice or necessity.</li>
            <li><strong>Group Homes:</strong> Shared living environments with structured 24-hour support.</li>
          </ul>
        </div>
      </section>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Tager-Flusberg, H., & Kasari, C. (2013). "Minimally verbal school-aged children with autism spectrum disorder: The neglected end of the spectrum." <i>Autism Research</i>. https://doi.org/10.1002/aur.1329</p>
            <p>2. Belek, B. (2019). "Articulating sensory experience: What properties of the world matter to autistic people?" <i>Ethos</i>. https://doi.org/10.1111/etho.12233</p>
            <p>3. Raymaker, D. M., et al. (2020). "'Having All of Your Internal Resources Exhausted Beyond Measure': An Exploratory Study of Autistic Burnout." <i>Autism in Adulthood</i>. https://doi.org/10.1089/aut.2019.0079</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing. https://doi.org/10.1176/appi.books.9780890425787</p>
          </div>
        </div>
      </div>
    </div>
  );
}