import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

interface DyslexiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

const dyslexiaHeroImage = '/images/dyslexia/dyslexia-hero.png';
const brainImage = '/images/dyslexia/brain.png';

export function DyslexiaOverview({ setCurrentArticle, initialTab }: DyslexiaOverviewProps) {
  const navigate = useNavigate();
  const activeTab = initialTab || 'what';

  return (
    <article className="max-w-6xl animate-fadeIn">

      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-bold">
          Dyslexia: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Dyslexia
      </button>

      {/* Tab Navigation - MOVED TO TOP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => navigate('/dyslexia-overview/what')}
          className={`px-6 py-3 rounded-md transition-colors font-bold ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          What is Dyslexia?
        </button>
        <button
          onClick={() => navigate('/dyslexia-overview/types')}
          className={`px-6 py-3 rounded-md transition-colors font-bold ${
            activeTab === 'types'
              ? 'bg-[#0A9DC4] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Types & Presentations
        </button>
        <button
          onClick={() => navigate('/dyslexia-overview/facts')}
          className={`px-6 py-3 rounded-md transition-colors font-bold ${
            activeTab === 'facts'
              ? 'bg-[#0A9DC4] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Key Facts & Stats
        </button>
      </div>

      {/* Introduction */}
      <div className="mb-10 bg-[#f0f9ff] p-6 rounded-lg border-l-4 border-[#2abcd4]">
        <ImageWithFallback 
          src="/images/dyslexia/dyslexia-overview-intro.png"
          alt="word salad with dyslexia in the middle"
          className="w-48 md:w-80 h-auto rounded-md shadow-sm float-right ml-6 mb-4"
        />
        <p className="mb-4 text-gray-800">
          Dyslexia is a specific learning disorder that primarily affects reading and language processing.<sup className="text-green-600 font-bold ml-0.5">1</sup> 
          It is neurobiological in origin and characterized by difficulties with accurate and/or fluent word recognition, 
          poor spelling, and decoding abilities.<sup className="text-green-600 font-bold ml-0.5">2</sup> These difficulties typically result from a deficit in the 
          phonological component of language that is often unexpected in relation to other cognitive abilities.<sup className="text-green-600 font-bold ml-0.5">3</sup>
        </p>
        <p className="text-gray-800">
          Importantly, dyslexia is not a reflection of low intelligence or lack of effort. Many individuals with dyslexia 
          have average or above-average intelligence and can be highly successful when provided with appropriate support 
          and accommodations.<sup className="text-green-600 font-bold ml-0.5">4</sup>
        </p>
      </div>

      {/* TAB 1: What is Dyslexia? */}
      {activeTab === 'what' && (
        <div className="space-y-8 animate-fadeIn">
          {/* What is Dyslexia Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">What is Dyslexia?</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Definition</h3>
            <p className="mb-4 text-gray-700">
              The International Dyslexia Association (IDA) defines dyslexia as:<sup className="text-green-600 font-bold ml-0.5">5</sup>
            </p>
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-6 shadow-sm">
              <p className="italic text-gray-700">
                "Dyslexia is a specific learning disability that is neurobiological in origin. It is characterized by 
                difficulties with accurate and/or fluent word recognition and by poor spelling and decoding abilities. 
                These difficulties typically result from a deficit in the phonological component of language that is often 
                unexpected in relation to other cognitive abilities and the provision of effective classroom instruction. 
                Secondary consequences may include problems in reading comprehension and reduced reading experience that 
                can impede growth of vocabulary and background knowledge."
              </p>
            </div>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Key Characteristics</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Phonological processing difficulties:</strong> Trouble with the sound structure of language<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
              <li><strong>Word decoding problems:</strong> Difficulty sounding out written words<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
              <li><strong>Reading fluency challenges:</strong> Slow, effortful reading even of familiar text<sup className="text-green-600 font-bold ml-0.5">8</sup></li>
              <li><strong>Spelling difficulties:</strong> Persistent spelling errors despite instruction<sup className="text-green-600 font-bold ml-0.5">9</sup></li>
              <li><strong>Neurobiological basis:</strong> Differences in brain structure and function related to reading<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
              <li><strong>Unexpected difficulty:</strong> Reading challenges not explained by intellectual ability, sensory problems, or lack of instruction<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
            </ul>
          </div>

          {/* What Dyslexia is NOT Section */}
          <div className="mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Common Misconceptions</h2>
            
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4 shadow-sm">
              <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">What Dyslexia Is NOT:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <p className="bg-red-50 p-3 rounded"><strong>✗ Visual problem:</strong> Dyslexia is not primarily a vision problem; it's language-based.<sup className="text-green-600 font-bold ml-0.5">6</sup></p>
                <p className="bg-red-50 p-3 rounded"><strong>✗ Seeing letters backwards:</strong> While letter reversals can occur, this is not the core issue and is common in early literacy for all children.<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
                <p className="bg-red-50 p-3 rounded"><strong>✗ Low intelligence:</strong> Dyslexia occurs across the IQ range; many individuals with dyslexia have average or above-average intelligence.<sup className="text-green-600 font-bold ml-0.5">11</sup></p>
                <p className="bg-red-50 p-3 rounded"><strong>✗ Laziness:</strong> Reading difficulties are neurologically based, not due to lack of effort.<sup className="text-green-600 font-bold ml-0.5">12</sup></p>
                <p className="bg-red-50 p-3 rounded"><strong>✗ Something you outgrow:</strong> Dyslexia is lifelong, though individuals can learn to read and manage challenges effectively.<sup className="text-green-600 font-bold ml-0.5">13</sup></p>
                <p className="bg-red-50 p-3 rounded"><strong>✗ Rare:</strong> Dyslexia is common, affecting millions of people worldwide.<sup className="text-green-600 font-bold ml-0.5">14</sup></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Types & Presentations */}
      {activeTab === 'types' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Prevalence Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">How Common is Dyslexia?</h2>
            
            <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Prevalence:</strong> Dyslexia affects approximately 5-10% of the population, with some estimates as high as 15-20%.<sup className="text-green-600 font-bold ml-0.5">15</sup></li>
              <li><strong>Most common learning disability:</strong> Dyslexia represents 80% of all learning disabilities.<sup className="text-green-600 font-bold ml-0.5">16</sup></li>
              <li><strong>Cross-linguistic:</strong> Dyslexia occurs across all languages and writing systems, though manifestation may vary.<sup className="text-green-600 font-bold ml-0.5">17</sup></li>
              <li><strong>Socioeconomic distribution:</strong> Affects individuals across all socioeconomic levels.<sup className="text-green-600 font-bold ml-0.5">18</sup></li>
              <li><strong>Gender:</strong> Historically thought to be more common in males, but recent research suggests similar rates in males and females; girls may be under-identified.<sup className="text-green-600 font-bold ml-0.5">19</sup></li>
            </ul>
          </div>

          {/* Spectrum and Severity Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Dyslexia as a Spectrum</h2>
            
            <p className="mb-4 text-gray-700">
              Dyslexia exists on a continuum of severity, and its manifestation varies among individuals:<sup className="text-green-600 font-bold ml-0.5">20</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Severity Levels</h3>
            <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Mild:</strong> Reading difficulties that respond well to intervention; individuals develop functional reading skills with support.</li>
              <li><strong>Moderate:</strong> More significant challenges requiring intensive, sustained intervention; reading remains effortful.</li>
              <li><strong>Severe:</strong> Persistent, substantial difficulties despite appropriate intervention; may require extensive accommodations throughout life.<sup className="text-green-600 font-bold ml-0.5">21</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Variation</h3>
            <p className="mb-4 text-gray-700">
              No two individuals with dyslexia are exactly alike. Variation occurs in:<sup className="text-green-600 font-bold ml-0.5">22</sup>
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-1">
              <li>Specific pattern of strengths and weaknesses</li>
              <li>Response to intervention</li>
              <li>Compensatory strategies developed</li>
              <li>Co-occurring conditions or strengths</li>
              <li>Impact on academic and life functioning</li>
            </ul>
          </div>

          {/* Co-occurring Conditions Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Co-occurring Conditions</h2>
            
            <p className="mb-4 text-gray-700">
              Dyslexia frequently co-occurs with other conditions:<sup className="text-green-600 font-bold ml-0.5">23</sup>
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
              <li><strong>ADHD:</strong> 25-40% of individuals with dyslexia also have ADHD.<sup className="text-green-600 font-bold ml-0.5">24</sup></li>
              <li><strong>Dysgraphia:</strong> Writing difficulties often co-occur with dyslexia.<sup className="text-green-600 font-bold ml-0.5">25</sup></li>
              <li><strong>Dyscalculia:</strong> Some individuals have both reading and math learning disabilities.<sup className="text-green-600 font-bold ml-0.5">26</sup></li>
              <li><strong>Anxiety and depression:</strong> Higher rates due to academic struggles and negative experiences.<sup className="text-green-600 font-bold ml-0.5">27</sup></li>
              <li><strong>Language disorders:</strong> Broader oral language difficulties may be present.<sup className="text-green-600 font-bold ml-0.5">28</sup></li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: Key Facts & Stats */}
      {activeTab === 'facts' && (
        <div className="space-y-8 animate-fadeIn">
          {/* The Reading Brain Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Understanding the Reading Brain</h2>
            
            <ImageWithFallback 
              src={brainImage} 
              alt="Reading brain representation"
              className="w-48 md:w-64 h-auto rounded-md shadow-sm float-left mr-6 mb-4"
            />
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Typical Reading Works</h3>
            <p className="mb-4 text-gray-700">
              Reading is not a natural process for the human brain—it must be taught and learned.<sup className="text-green-600 font-bold ml-0.5">2</sup> Proficient 
              reading requires several brain systems working together:
            </p>
            <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-1">
              <li><strong>Visual processing:</strong> Recognizing letters and letter patterns</li>
              <li><strong>Phonological processing:</strong> Connecting letters to sounds (phonemes)<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
              <li><strong>Orthographic processing:</strong> Recognizing spelling patterns and whole words<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
              <li><strong>Semantic processing:</strong> Accessing word meanings<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
              <li><strong>Working memory:</strong> Holding information while processing text<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg mt-8 clear-both">Differences in Dyslexia</h3>
            <p className="mb-4 text-gray-700">
              Brain imaging studies show that individuals with dyslexia show different patterns of brain activation during 
              reading tasks:<sup className="text-green-600 font-bold ml-0.5">29</sup>
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Underactivation:</strong> Reduced activity in left hemisphere regions typically involved in reading, particularly in the parieto-temporal and occipito-temporal areas.<sup className="text-green-600 font-bold ml-0.5">30</sup></li>
              <li><strong>Compensatory activation:</strong> Increased reliance on other brain regions, such as frontal areas and right hemisphere regions.<sup className="text-green-600 font-bold ml-0.5">31</sup></li>
              <li><strong>White matter differences:</strong> Atypical connectivity in neural pathways supporting reading.<sup className="text-green-600 font-bold ml-0.5">32</sup></li>
              <li><strong>Phonological circuit disruption:</strong> Particular difficulty in the neural systems that connect letters to sounds.<sup className="text-green-600 font-bold ml-0.5">33</sup></li>
            </ul>
          </div>

          {/* Phonological Core Deficit Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">The Phonological Core Deficit</h2>
            
            <p className="mb-4 text-gray-700">
              The most well-established explanation for dyslexia is the phonological deficit hypothesis.<sup className="text-green-600 font-bold ml-0.5">34</sup> This 
              theory proposes that dyslexia stems from a specific impairment in the representation, storage, and/or retrieval 
              of speech sounds.
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What is Phonological Processing?</h3>
            <p className="mb-4 text-gray-700">
              Phonological processing involves several related skills:<sup className="text-green-600 font-bold ml-0.5">35</sup>
            </p>
            <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Phonological awareness:</strong> Ability to identify and manipulate sounds in spoken language (rhyming, segmenting words into syllables or individual sounds)</li>
              <li><strong>Phonological memory:</strong> Ability to hold phonological information in short-term memory</li>
              <li><strong>Rapid automatized naming (RAN):</strong> Speed of retrieving phonological codes from long-term memory<sup className="text-green-600 font-bold ml-0.5">36</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Phonological Deficits Affect Reading</h3>
            <p className="mb-4 text-gray-700">
              When phonological processing is impaired:<sup className="text-green-600 font-bold ml-0.5">37</sup>
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-1">
              <li>Learning letter-sound correspondences is difficult</li>
              <li>Sounding out (decoding) unfamiliar words is challenging</li>
              <li>Building a sight vocabulary is slower because the phonological route is less effective</li>
              <li>Spelling suffers because it requires strong phonological representations</li>
              <li>Reading remains effortful rather than becoming automatic</li>
            </ul>
          </div>

          {/* Strengths Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Dyslexia and Strengths</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1765648636178-60e73bcc865e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3VjY2VzcyUyMGNvbmZpZGVuY2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3Njc0MTUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Student success and confidence"
              className="w-48 md:w-64 h-auto rounded-md shadow-sm float-left mr-6 mb-4"
            />
            
            <p className="mb-4 text-gray-700">
              While dyslexia presents challenges, many individuals with dyslexia also demonstrate notable strengths:<sup className="text-green-600 font-bold ml-0.5">38</sup>
            </p>
            <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Creative thinking:</strong> Strong ability to think outside the box and generate novel ideas.<sup className="text-green-600 font-bold ml-0.5">39</sup></li>
              <li><strong>Visual-spatial reasoning:</strong> Enhanced ability to think in pictures and mentally manipulate 3D objects.<sup className="text-green-600 font-bold ml-0.5">40</sup></li>
              <li><strong>Big-picture thinking:</strong> Ability to see connections and patterns others might miss.<sup className="text-green-600 font-bold ml-0.5">41</sup></li>
              <li><strong>Problem-solving:</strong> Innovative approaches to challenges.<sup className="text-green-600 font-bold ml-0.5">42</sup></li>
              <li><strong>Narrative reasoning:</strong> Strength in storytelling and understanding complex narratives.<sup className="text-green-600 font-bold ml-0.5">43</sup></li>
              <li><strong>Resilience:</strong> Persistence and determination developed through overcoming challenges.<sup className="text-green-600 font-bold ml-0.5">44</sup></li>
            </ul>
            <p className="mb-4 text-gray-700 clear-both">
              Many successful individuals in diverse fields—including entrepreneurs, artists, scientists, and leaders—have dyslexia.<sup className="text-green-600 font-bold ml-0.5">45</sup>
            </p>
          </div>

          {/* Importance of Early Identification Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">The Importance of Understanding Dyslexia</h2>
            
            <p className="mb-4 text-gray-700">
              Understanding dyslexia is crucial because:<sup className="text-green-600 font-bold ml-0.5">46</sup>
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Early identification matters:</strong> Early intervention leads to better outcomes.<sup className="text-green-600 font-bold ml-0.5">47</sup></li>
              <li><strong>Appropriate instruction is essential:</strong> Individuals with dyslexia need structured, explicit, multisensory reading instruction.<sup className="text-green-600 font-bold ml-0.5">48</sup></li>
              <li><strong>Accommodations enable success:</strong> With appropriate support, individuals with dyslexia can achieve their potential.<sup className="text-green-600 font-bold ml-0.5">49</sup></li>
              <li><strong>Self-understanding is empowering:</strong> Understanding dyslexia helps individuals advocate for themselves and develop effective strategies.<sup className="text-green-600 font-bold ml-0.5">50</sup></li>
              <li><strong>Reduces negative impact:</strong> Proper identification and support prevent secondary issues like low self-esteem and school dropout.<sup className="text-green-600 font-bold ml-0.5">51</sup></li>
            </ul>
          </div>

          {/* Looking Forward Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Moving Forward</h2>
            
            <p className="mb-4 text-gray-700">
              Dyslexia is a well-researched, neurobiological condition that affects reading but does not limit potential. 
              With understanding, appropriate instruction, accommodations, and support, individuals with dyslexia can develop 
              strong reading skills and succeed academically, professionally, and personally.<sup className="text-green-600 font-bold ml-0.5">52</sup>
            </p>
            
            <p className="mb-4 text-gray-700">
              The key is recognizing dyslexia early, providing evidence-based intervention, celebrating strengths, and 
              fostering an environment where individuals with dyslexia can thrive.<sup className="text-green-600 font-bold ml-0.5">33</sup>
            </p>
          </div>
        </div>
      )}

      {/* Bottom navigation button */}
      <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-end">
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
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
            <li>Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <i>Journal of Child Psychology and Psychiatry</i>, 53(5), 593-607.</li>
            <li>International Dyslexia Association. (2002). "Definition of dyslexia."</li>
            <li>Vellutino, F. R., Fletcher, J. M., Snowling, M. J., & Scanlon, D. M. (2004). "Specific reading disability (dyslexia): What have we learned in the past four decades?" <i>Journal of Child Psychology and Psychiatry</i>, 45(1), 2-40.</li>
            <li>Rack, J. P., Snowling, M. J., & Olson, R. K. (1992). "The nonword reading deficit in developmental dyslexia: A review." <i>Reading Research Quarterly</i>, 27(1), 29-53.</li>
            <li>Wolf, M., & Bowers, P. G. (1999). "The double-deficit hypothesis for the developmental dyslexias." <i>Journal of Educational Psychology</i>, 91(3), 415-438.</li>
            <li>Ehri, L. C. (2000). "Learning to read and learning to spell: Two sides of a coin." <i>Topics in Language Disorders</i>, 20(3), 19-36.</li>
            <li>Fischer, F. W., Liberman, I. Y., & Shankweiler, D. (1978). "Reading reversals and developmental dyslexia: A further study." <i>Cortex</i>, 14(4), 496-510.</li>
            <li>Ferrer, E., Shaywitz, B. A., Holahan, J. M., Marchione, K., & Shaywitz, S. E. (2010). "Uncoupling of reading and IQ over time: Empirical evidence for a definition of dyslexia." <i>Psychological Science</i>, 21(1), 93-101.</li>
            <li>Shaywitz, S. (2003). <i>Overcoming dyslexia: A new and complete science-based program for reading problems at any level</i>. Knopf.</li>
            <li>Bruck, M. (1990). "Word-recognition skills of adults with childhood diagnoses of dyslexia." <i>Developmental Psychology</i>, 26(3), 439-454.</li>
            <li>Peterson, R. L., & Pennington, B. F. (2012). "Developmental dyslexia." <i>The Lancet</i>, 379(9830), 1997-2007.</li>
            <li>Shaywitz, S. E., Shaywitz, B. A., Fletcher, J. M., & Escobar, M. D. (1990). "Prevalence of reading disability in boys and girls." <i>JAMA</i>, 264(8), 998-1002.</li>
            <li>National Institute of Child Health and Human Development. (2000). <i>Report of the National Reading Panel</i>. NIH Publication No. 00-4769.</li>
            <li>Ziegler, J. C., & Goswami, U. (2005). "Reading acquisition, developmental dyslexia, and skilled reading across languages: A psycholinguistic grain size theory." <i>Psychological Bulletin</i>, 131(1), 3-29.</li>
            <li>Snowling, M. J., & Melby-Lervåg, M. (2016). "Oral language deficits in familial dyslexia: A meta-analysis and review." <i>Psychological Bulletin</i>, 142(5), 498-545.</li>
            <li>Quinn, J. M., & Wagner, R. K. (2015). "Gender differences in reading impairment and in the identification of impaired readers: Results from a large-scale study of at-risk readers." <i>Journal of Learning Disabilities</i>, 48(4), 433-445.</li>
            <li>Shaywitz, S. E., Escobar, M. D., Shaywitz, B. A., Fletcher, J. M., & Makuch, R. (1992). "Evidence that dyslexia may represent the lower tail of a normal distribution of reading ability." <i>New England Journal of Medicine</i>, 326(3), 145-150.</li>
            <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <i>Learning disabilities: From identification to intervention</i> (2nd ed.). Guilford Publications.</li>
            <li>Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <i>Cognition</i>, 101(2), 385-413.</li>
            <li>Pennington, B. F., & Bishop, D. V. (2009). "Relations among speech, language, and reading disorders." <i>Annual Review of Psychology</i>, 60, 283-306.</li>
            <li>Willcutt, E. G., & Pennington, B. F. (2000). "Psychiatric comorbidity in children and adolescents with reading disability." <i>Journal of Child Psychology and Psychiatry</i>, 41(8), 1039-1048.</li>
            <li>Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <i>Journal of School Psychology</i>, 46(1), 1-21.</li>
            <li>Landerl, K., & Moll, K. (2010). "Comorbidity of learning disorders: Prevalence and familial transmission." <i>Journal of Child Psychology and Psychiatry</i>, 51(3), 287-294.</li>
            <li>Boetsch, E. A., Green, P. A., & Pennington, B. F. (1996). "Psychosocial correlates of dyslexia across the life span." <i>Development and Psychopathology</i>, 8(3), 539-562.</li>
            <li>Catts, H. W., Adlof, S. M., Hogan, T. P., & Weismer, S. E. (2005). "Are specific language impairment and dyslexia distinct disorders?" <i>Journal of Speech, Language, and Hearing Research</i>, 48(6), 1378-1396.</li>
            <li>Shaywitz, B. A., Shaywitz, S. E., Pugh, K. R., et al. (2002). "Disruption of posterior brain systems for reading in children with developmental dyslexia." <i>Biological Psychiatry</i>, 52(2), 101-110.</li>
            <li>Pugh, K. R., Mencl, W. E., Jenner, A. R., et al. (2001). "Neurobiological studies of reading and reading disability." <i>Journal of Communication Disorders</i>, 34(6), 479-492.</li>
            <li>Richlan, F., Kronbichler, M., & Wimmer, H. (2011). "Meta-analyzing brain dysfunctions in dyslexic children and adults." <i>Neuroimage</i>, 56(3), 1735-1742.</li>
            <li>Vandermosten, M., Boets, B., Wouters, J., & Ghesquière, P. (2012). "A qualitative and quantitative review of diffusion tensor imaging studies in reading and dyslexia." <i>Neuroscience & Biobehavioral Reviews</i>, 36(6), 1532-1552.</li>
            <li>Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <i>Science</i>, 325(5938), 280-283.</li>
            <li>Ramus, F., & Szenkovits, G. (2008). "What phonological deficit?" <i>Quarterly Journal of Experimental Psychology</i>, 61(1), 129-141.</li>
            <li>Wagner, R. K., Torgesen, J. K., Rashotte, C. A., et al. (1997). "Changing relations between phonological processing abilities and word-level reading as children develop from beginning to skilled readers." <i>Developmental Psychology</i>, 33(3), 468-479.</li>
            <li>Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <i>Annual Review of Psychology</i>, 63, 427-452.</li>
            <li>Snowling, M. J. (2000). <i>Dyslexia</i> (2nd ed.). Blackwell Publishing.</li>
            <li>Eide, B. L., & Eide, F. F. (2011). <i>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</i>. Penguin.</li>
            <li>Wolff, U., & Lundberg, I. (2002). "The prevalence of dyslexia among art students." <i>Dyslexia</i>, 8(1), 34-42.</li>
            <li>von Károlyi, C., Winner, E., Gray, W., & Sherman, G. F. (2003). "Dyslexia linked to talent: Global visual-spatial ability." <i>Brain and Language</i>, 85(3), 427-431.</li>
            <li>Schneps, M. H., Brockmole, J. R., Sonnert, G., & Pomplun, M. (2012). "History of reading struggles linked to enhanced learning in low spatial frequency scenes." <i>PloS One</i>, 7(4), e35724.</li>
            <li>Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <i>Dyslexia</i>, 15(4), 328-346.</li>
            <li>Griffiths, Y., & Snowling, M. J. (2002). "Predictors of exception word and nonword reading in dyslexic children: The severity hypothesis." <i>Journal of Educational Psychology</i>, 94(1), 34-43.</li>
            <li>Morrison, F. J., & Cooney, R. R. (2002). "Parenting and academic achievement: Multiple paths to early literacy." <i>Parenting and the child's world</i> (pp. 141-160). Psychology Press.</li>
            <li>West, T. G. (1997). <i>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties</i>. Prometheus Books.</li>
            <li>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." <i>The voice of evidence in reading research</i> (pp. 355-382). Paul H. Brookes.</li>
            <li>Shaywitz, S. E., Shaywitz, B. A., Fulbright, R. K., et al. (2003). "Neural systems for compensation and persistence: Young adult outcome of childhood reading disability." <i>Biological Psychiatry</i>, 54(1), 25-33.</li>
            <li>Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <i>British Journal of Educational Psychology</i>, 81(1), 1-23.</li>
            <li>Shaywitz, S. E., & Shaywitz, B. A. (2008). "Paying attention to reading: The neurobiology of reading and dyslexia." <i>Development and Psychopathology</i>, 20(4), 1329-1349.</li>
            <li>McNulty, M. A. (2003). "Dyslexia and the life course." <i>Journal of Learning Disabilities</i>, 36(4), 363-381.</li>
            <li>Daniel, S. S., Walsh, A. K., Goldston, D. B., et al. (2006). "Suicidality, school dropout, and reading problems among adolescents." <i>Journal of Learning Disabilities</i>, 39(6), 507-514.</li>
            <li>Swanson, H. L., Harris, K. R., & Graham, S. (Eds.). (2013). <i>Handbook of learning disabilities</i> (2nd ed.). Guilford Press.</li>
          </ol>
        </div>
      </div>
    </article>
  );
}