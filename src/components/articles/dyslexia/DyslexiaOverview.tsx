import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

interface DyslexiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaOverview({ setCurrentArticle }: DyslexiaOverviewProps) {
  const navigate = useNavigate();

  return (
    <article className="max-w-6xl animate-fadeIn">

      {/* Main Title & Desktop Back Button - NOT BOLD */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d]">
          Dyslexia: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button - NOT BOLD */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-10"
      >
        <span className="text-xl">←</span>
        All About Dyslexia
      </button>

      <div className="space-y-16">
        
        {/* SECTION 1: WHAT IS DYSLEXIA? */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2">What is Dyslexia?</h2>
            
            <p className="leading-relaxed">
              <strong>Dyslexia</strong> is a specific learning disorder that primarily affects reading and language processing.<sup className="text-green-600 font-bold ml-0.5">1</sup> 
              It is neurobiological in origin and characterized by difficulties with accurate and/or fluent word recognition, 
              poor spelling, and decoding abilities.<sup className="text-green-600 font-bold ml-0.5">2</sup> These difficulties typically result from a deficit in the 
              phonological component of language that is often unexpected in relation to other cognitive abilities.<sup className="text-green-600 font-bold ml-0.5">3</sup>
            </p>
            <p className="leading-relaxed">
              Importantly, dyslexia is not a reflection of low intelligence or lack of effort. Many individuals with dyslexia 
              have average or above-average intelligence and can be highly successful when provided with appropriate support 
              and accommodations.<sup className="text-green-600 font-bold ml-0.5">4</sup>
            </p>

            <div className="bg-white rounded-md border-l-4 border-[#2abcd4] p-5 shadow-sm mt-6">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">The IDA Definition</h3>
              <p className="italic text-gray-700 text-sm leading-relaxed">
                "Dyslexia is a specific learning disability that is neurobiological in origin. It is characterized by 
                difficulties with accurate and/or fluent word recognition and by poor spelling and decoding abilities. 
                These difficulties typically result from a deficit in the phonological component of language that is often 
                unexpected in relation to other cognitive abilities and the provision of effective classroom instruction."<sup className="text-green-600 font-bold ml-0.5">5</sup>
              </p>
            </div>
          </div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/images/dyslexia/dyslexia-overview-books-fly.png"
            className="w-full max-w-[250px] h-auto rounded-lg shadow-sm"
            aria-label="abstract painting of books flying out of a swirl"
          >
            <source src="/images/dyslexia/dyslexia-overview-books-fly.mp4" type="video/mp4" />
            
            {/* Fallback image for older browsers or if the video fails to load */}
            <img 
              src="/images/dyslexia/dyslexia-overview-books-fly.png" 
              alt="abstract painting of books flying out of a swirl"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </video>
        </section>

        {/* SECTION 1.5: KEY CHARACTERISTICS (ICON GRID) */}
        <section>
          <h3 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-[#ffd166] pb-2">Key Characteristics</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Phonological Processing</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Trouble with the sound structure of language.<sup className="text-green-600 font-bold ml-0.5">6</sup></p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Word Decoding</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Difficulty sounding out written words.<sup className="text-green-600 font-bold ml-0.5">7</sup></p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Reading Fluency</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Slow, effortful reading even of familiar text.<sup className="text-green-600 font-bold ml-0.5">8</sup></p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Spelling Difficulties</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Persistent spelling errors despite instruction.<sup className="text-green-600 font-bold ml-0.5">9</sup></p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Neurobiological Basis</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Differences in brain structure/function related to reading.<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Unexpected Difficulty</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Challenges not explained by intelligence or instruction.<sup className="text-green-600 font-bold ml-0.5">11</sup></p>
            </div>
          </div>
        </section>

        {/* SECTION 2: PREVALENCE & CO-OCCURRING */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2 mb-4">How Common is Dyslexia?</h2>
              <p className="leading-relaxed mb-4">
                Dyslexia is the most common neurocognitive disorder, representing 80% of all learning disabilities.<sup className="text-green-600 font-bold ml-0.5">18</sup> It occurs across all languages and writing systems, though its manifestation may vary depending on the language.<sup className="text-green-600 font-bold ml-0.5">19</sup>
              </p>
              <p className="leading-relaxed">
                Historically, it was thought to be more common in males. However, recent research suggests similar rates in males and females, indicating that girls may frequently be under-identified in classroom settings.<sup className="text-green-600 font-bold ml-0.5">21</sup>
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-xl mb-3">Dyslexia as a Spectrum</h3>
              <p className="leading-relaxed mb-3">
                Dyslexia exists on a continuum of severity, and its manifestation varies heavily among individuals.<sup className="text-green-600 font-bold ml-0.5">22</sup> No two individuals with dyslexia are exactly alike.<sup className="text-green-600 font-bold ml-0.5">24</sup>
              </p>
              <ul className="list-disc ml-6 text-sm text-slate-700 space-y-2">
                <li><strong>Mild:</strong> Reading difficulties that respond well to intervention.</li>
                <li><strong>Moderate:</strong> More significant challenges requiring intensive, sustained intervention.</li>
                <li><strong>Severe:</strong> Persistent, substantial difficulties despite appropriate intervention.<sup className="text-green-600 font-bold ml-0.5">23</sup></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-xl mb-3">Co-occurring Conditions</h3>
              <p className="leading-relaxed mb-3">
                Dyslexia frequently co-occurs with other neurodevelopmental and mental health conditions:<sup className="text-green-600 font-bold ml-0.5">25</sup>
              </p>
              <ul className="list-disc ml-6 text-sm text-slate-700 space-y-2">
                <li><strong>ADHD:</strong> 25-40% of individuals with dyslexia also have ADHD.<sup className="text-green-600 font-bold ml-0.5">26</sup></li>
                <li><strong>Dysgraphia:</strong> Writing difficulties often co-occur with dyslexia.<sup className="text-green-600 font-bold ml-0.5">27</sup></li>
                <li><strong>Dyscalculia:</strong> Some individuals have both reading and math learning disabilities.<sup className="text-green-600 font-bold ml-0.5">28</sup></li>
                <li><strong>Anxiety and depression:</strong> Higher rates due to academic struggles and negative experiences.<sup className="text-green-600 font-bold ml-0.5">29</sup></li>
                <li><strong>Language disorders:</strong> Broader oral language difficulties may be present.<sup className="text-green-600 font-bold ml-0.5">30</sup></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center">
            {/* Dyslexia By The Numbers Infobox */}
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 w-full max-w-sm shadow-sm">
              <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">Dyslexia by the Numbers</h3>
              
              <div className="mb-6 pb-6 border-b-2 border-gray-200 text-center">
                <div className="text-4xl font-bold text-[#2abcd4]">5-20%</div>
                <div className="text-sm text-[#0c264d] mt-1">of the global population has some<br/>degree of dyslexia<sup className="text-green-600 font-bold ml-0.5">17</sup></div>
              </div>

              <div className="mb-6 pb-6 border-b-2 border-gray-200 text-center">
                <div className="bg-[#0c264d] text-white rounded p-4">
                  <div className="text-3xl font-bold">80%</div>
                  <div className="text-sm mt-1">of all diagnosed learning disabilities are Dyslexia<sup className="text-green-600 font-bold ml-0.5">18</sup></div>
                </div>
              </div>

              <div>
                <div className="text-sm text-center mb-3 text-[#0c264d] font-bold">High Overlap with ADHD</div>
                <div className="flex justify-center items-center gap-3">
                  <div className="bg-[#ffd166]/20 border border-[#ffd166] rounded p-3 text-center w-full">
                    <div className="font-bold text-[#0c264d] text-xl">25-40%</div>
                    <div className="text-xs text-gray-700 mt-1">of those with Dyslexia<br/>also have ADHD<sup className="text-green-600 font-bold ml-0.5">26</sup></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE READING BRAIN */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2">Understanding the Reading Brain</h2>
            
            <p className="leading-relaxed">
              Reading is not a natural process for the human brain—it must be taught and learned.<sup className="text-green-600 font-bold ml-0.5">31</sup> Proficient 
              reading requires several brain systems working together seamlessly, including visual processing (recognizing letters), 
              phonological processing (connecting letters to sounds),<sup className="text-green-600 font-bold ml-0.5">32</sup> orthographic processing,<sup className="text-green-600 font-bold ml-0.5">33</sup> semantic processing,<sup className="text-green-600 font-bold ml-0.5">34</sup> and working memory.<sup className="text-green-600 font-bold ml-0.5">35</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold text-xl mt-4 mb-2">Differences in the Dyslexic Brain</h3>
            <p className="leading-relaxed mb-3">
              Brain imaging studies show that individuals with dyslexia show different patterns of brain activation during reading tasks:<sup className="text-green-600 font-bold ml-0.5">36</sup>
            </p>
            <ul className="list-disc ml-6 text-sm text-slate-700 space-y-2 mb-6">
              <li><strong>Underactivation:</strong> Reduced activity in left hemisphere regions typically involved in reading.<sup className="text-green-600 font-bold ml-0.5">37</sup></li>
              <li><strong>Compensatory activation:</strong> Increased reliance on other brain regions, such as frontal areas and right hemisphere regions.<sup className="text-green-600 font-bold ml-0.5">38</sup></li>
              <li><strong>White matter differences:</strong> Atypical connectivity in neural pathways supporting reading.<sup className="text-green-600 font-bold ml-0.5">39</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold text-xl mt-4 mb-2">The Phonological Core Deficit</h3>
            <p className="leading-relaxed">
              The most well-established explanation for dyslexia is the <strong>phonological deficit hypothesis</strong>.<sup className="text-green-600 font-bold ml-0.5">41</sup> 
              This theory proposes that dyslexia stems from a specific impairment in the representation, storage, and/or retrieval of speech sounds. 
              When phonological processing is impaired, learning letter-sound correspondences is difficult, sounding out words is challenging, and reading remains effortful rather than automatic.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center pt-8">
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-overview-books-fly.png"
              alt="abstract painting of books flying out of a swirl"
              className="w-full max-w-[250px] h-auto rounded-lg shadow-sm" 
            />
          </div>
        </section>

        {/* SECTION 4: STRENGTHS & MOVING FORWARD */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2">Dyslexia and Strengths</h2>
            <p className="leading-relaxed">
              While dyslexia presents undeniable challenges in traditional academic settings, many individuals with dyslexia 
              also demonstrate notable cognitive and creative strengths:<sup className="text-green-600 font-bold ml-0.5">43</sup>
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-disc ml-6 text-sm text-slate-700 mb-6">
              <li><strong>Creative thinking:</strong> Generating novel ideas<sup className="text-green-600 font-bold ml-0.5">44</sup></li>
              <li><strong>Visual-spatial reasoning:</strong> Mentally manipulating 3D objects<sup className="text-green-600 font-bold ml-0.5">45</sup></li>
              <li><strong>Big-picture thinking:</strong> Seeing broad connections<sup className="text-green-600 font-bold ml-0.5">46</sup></li>
              <li><strong>Problem-solving:</strong> Innovative approaches<sup className="text-green-600 font-bold ml-0.5">47</sup></li>
              <li><strong>Narrative reasoning:</strong> Storytelling strengths<sup className="text-green-600 font-bold ml-0.5">48</sup></li>
              <li><strong>Resilience:</strong> Determination from overcoming adversity<sup className="text-green-600 font-bold ml-0.5">49</sup></li>
            </ul>

            <p className="leading-relaxed text-sm italic text-gray-600 border-l-4 border-[#ffd166] pl-4">
              Many highly successful individuals in diverse fields—including entrepreneurs, artists, scientists, and leaders—have dyslexia.<sup className="text-green-600 font-bold ml-0.5">50</sup>
            </p>

            <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2 mt-8">Moving Forward</h2>
            <p className="leading-relaxed">
              Dyslexia is a well-researched, neurobiological condition that affects reading but does not limit potential. 
              With understanding, appropriate instruction, accommodations, and support, individuals with dyslexia can develop 
              strong reading skills and succeed academically, professionally, and personally.<sup className="text-green-600 font-bold ml-0.5">51</sup>
            </p>
            <p className="leading-relaxed">
              The key is recognizing dyslexia early, providing evidence-based intervention, celebrating strengths, and 
              fostering an environment where individuals with dyslexia can thrive.<sup className="text-green-600 font-bold ml-0.5">52</sup>
            </p>
          </div>
          
          <div className="lg:col-span-5 flex justify-center pt-8">
            <ImageWithFallback 
              src="/images/dyslexia/YOUR-STRENGTHS-IMAGE.png" 
              alt="Student success and confidence"
              className="w-full max-w-[350px] h-auto rounded-lg shadow-sm"
            />
          </div>
        </section>

      </div>

      {/* Bottom navigation button - NOT BOLD */}
      <div className="mt-16 mb-6 flex flex-col md:flex-row md:justify-end">
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-md"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
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
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>Lyon, G. R., Shaywitz, S. E., & Shaywitz, B. A. (2003). "A definition of dyslexia." <i>Annals of Dyslexia</i>, 53(1), 1-14.</li>
            <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
            <li>Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <i>Annual Review of Clinical Psychology</i>, 11, 283-307.</li>
            <li>Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders." <i>Journal of Child Psychology and Psychiatry</i>, 53(5), 593-607.</li>
            <li>International Dyslexia Association. (2002). "Definition of dyslexia."</li>
            <li>Vellutino, F. R., Fletcher, J. M., Snowling, M. J., & Scanlon, D. M. (2004). "Specific reading disability (dyslexia)." <i>Journal of Child Psychology and Psychiatry</i>, 45(1), 2-40.</li>
            <li>Rack, J. P., Snowling, M. J., & Olson, R. K. (1992). "The nonword reading deficit in developmental dyslexia." <i>Reading Research Quarterly</i>, 27(1), 29-53.</li>
            <li>Wolf, M., & Bowers, P. G. (1999). "The double-deficit hypothesis for the developmental dyslexias." <i>Journal of Educational Psychology</i>, 91(3), 415-438.</li>
            <li>Ehri, L. C. (2000). "Learning to read and learning to spell." <i>Topics in Language Disorders</i>, 20(3), 19-36.</li>
            <li>Fischer, F. W., Liberman, I. Y., & Shankweiler, D. (1978). "Reading reversals and developmental dyslexia." <i>Cortex</i>, 14(4), 496-510.</li>
            <li>Ferrer, E., Shaywitz, B. A., Holahan, J. M., Marchione, K., & Shaywitz, S. E. (2010). "Uncoupling of reading and IQ over time." <i>Psychological Science</i>, 21(1), 93-101.</li>
            <li>Shaywitz, S. (2003). <i>Overcoming dyslexia</i>. Knopf.</li>
            <li>Bruck, M. (1990). "Word-recognition skills of adults with childhood diagnoses of dyslexia." <i>Developmental Psychology</i>, 26(3), 439-454.</li>
            <li>Peterson, R. L., & Pennington, B. F. (2012). "Developmental dyslexia." <i>The Lancet</i>, 379(9830), 1997-2007.</li>
            <li>Shaywitz, S. E., Shaywitz, B. A., Fletcher, J. M., & Escobar, M. D. (1990). "Prevalence of reading disability in boys and girls." <i>JAMA</i>, 264(8), 998-1002.</li>
            <li>National Institute of Child Health and Human Development. (2000). <i>Report of the National Reading Panel</i>.</li>
            <li>Ziegler, J. C., & Goswami, U. (2005). "Reading acquisition, developmental dyslexia, and skilled reading across languages." <i>Psychological Bulletin</i>, 131(1), 3-29.</li>
            <li>Snowling, M. J., & Melby-Lervåg, M. (2016). "Oral language deficits in familial dyslexia." <i>Psychological Bulletin</i>, 142(5), 498-545.</li>
            <li>Quinn, J. M., & Wagner, R. K. (2015). "Gender differences in reading impairment." <i>Journal of Learning Disabilities</i>, 48(4), 433-445.</li>
            <li>Shaywitz, S. E., Escobar, M. D., Shaywitz, B. A., Fletcher, J. M., & Makuch, R. (1992). "Evidence that dyslexia may represent the lower tail of a normal distribution of reading ability." <i>New England Journal of Medicine</i>, 326(3), 145-150.</li>
            <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <i>Learning disabilities: From identification to intervention</i>. Guilford Publications.</li>
            <li>Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <i>Cognition</i>, 101(2), 385-413.</li>
            <li>Pennington, B. F., & Bishop, D. V. (2009). "Relations among speech, language, and reading disorders." <i>Annual Review of Psychology</i>, 60, 283-306.</li>
            <li>Willcutt, E. G., & Pennington, B. F. (2000). "Psychiatric comorbidity in children and adolescents with reading disability." <i>Journal of Child Psychology and Psychiatry</i>, 41(8), 1039-1048.</li>
            <li>Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia." <i>Journal of School Psychology</i>, 46(1), 1-21.</li>
            <li>Landerl, K., & Moll, K. (2010). "Comorbidity of learning disorders." <i>Journal of Child Psychology and Psychiatry</i>, 51(3), 287-294.</li>
            <li>Boetsch, E. A., Green, P. A., & Pennington, B. F. (1996). "Psychosocial correlates of dyslexia across the life span." <i>Development and Psychopathology</i>, 8(3), 539-562.</li>
            <li>Catts, H. W., Adlof, S. M., Hogan, T. P., & Weismer, S. E. (2005). "Are specific language impairment and dyslexia distinct disorders?" <i>Journal of Speech, Language, and Hearing Research</i>, 48(6), 1378-1396.</li>
            <li>Dehaene, S. (2009). <i>Reading in the brain</i>. Penguin.</li>
            <li>Wagner, R. K., & Torgesen, J. K. (1987). "The nature of phonological processing." <i>Psychological Bulletin</i>, 101(2), 192-212.</li>
            <li>Perfetti, C. (2007). "Reading ability: Lexical quality to comprehension." <i>Scientific Studies of Reading</i>, 11(4), 357-383.</li>
            <li>Swanson, H. L., & Berninger, V. (1995). "The role of working memory in skilled and less skilled readers." <i>Intelligence</i>, 21(1), 83-108.</li>
            <li>Shaywitz, B. A., Shaywitz, S. E., Pugh, K. R., et al. (2002). "Disruption of posterior brain systems for reading in children with developmental dyslexia." <i>Biological Psychiatry</i>, 52(2), 101-110.</li>
            <li>Pugh, K. R., Mencl, W. E., Jenner, A. R., et al. (2001). "Neurobiological studies of reading and reading disability." <i>Journal of Communication Disorders</i>, 34(6), 479-492.</li>
            <li>Richlan, F., Kronbichler, M., & Wimmer, H. (2011). "Meta-analyzing brain dysfunctions in dyslexic children and adults." <i>Neuroimage</i>, 56(3), 1735-1742.</li>
            <li>Vandermosten, M., Boets, B., Wouters, J., & Ghesquière, P. (2012). "A qualitative and quantitative review of diffusion tensor imaging studies in reading and dyslexia." <i>Neuroscience & Biobehavioral Reviews</i>, 36(6), 1532-1552.</li>
            <li>Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <i>Science</i>, 325(5938), 280-283.</li>
            <li>Ramus, F., & Szenkovits, G. (2008). "What phonological deficit?" <i>Quarterly Journal of Experimental Psychology</i>, 61(1), 129-141.</li>
            <li>Wagner, R. K., Torgesen, J. K., Rashotte, C. A., et al. (1997). "Changing relations between phonological processing abilities and word-level reading." <i>Developmental Psychology</i>, 33(3), 468-479.</li>
            <li>Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency." <i>Annual Review of Psychology</i>, 63, 427-452.</li>
            <li>Snowling, M. J. (2000). <i>Dyslexia</i> (2nd ed.). Blackwell Publishing.</li>
            <li>Eide, B. L., & Eide, F. F. (2011). <i>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</i>. Penguin.</li>
            <li>Wolff, U., & Lundberg, I. (2002). "The prevalence of dyslexia among art students." <i>Dyslexia</i>, 8(1), 34-42.</li>
            <li>von Károlyi, C., Winner, E., Gray, W., & Sherman, G. F. (2003). "Dyslexia linked to talent: Global visual-spatial ability." <i>Brain and Language</i>, 85(3), 427-431.</li>
            <li>Schneps, M. H., Brockmole, J. R., Sonnert, G., & Pomplun, M. (2012). "History of reading struggles linked to enhanced learning in low spatial frequency scenes." <i>PloS One</i>, 7(4), e35724.</li>
            <li>Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <i>Dyslexia</i>, 15(4), 328-346.</li>
            <li>Griffiths, Y., & Snowling, M. J. (2002). "Predictors of exception word and nonword reading in dyslexic children." <i>Journal of Educational Psychology</i>, 94(1), 34-43.</li>
            <li>Morrison, F. J., & Cooney, R. R. (2002). "Parenting and academic achievement: Multiple paths to early literacy." <i>Parenting and the child's world</i> (pp. 141-160). Psychology Press.</li>
            <li>West, T. G. (1997). <i>In the mind's eye</i>. Prometheus Books.</li>
            <li>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." <i>The voice of evidence in reading research</i>. Paul H. Brookes.</li>
            <li>Shaywitz, S. E., Shaywitz, B. A., Fulbright, R. K., et al. (2003). "Neural systems for compensation and persistence." <i>Biological Psychiatry</i>, 54(1), 25-33.</li>
            <li>Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties." <i>British Journal of Educational Psychology</i>, 81(1), 1-23.</li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>. 
            </li>
            <li>
              American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}