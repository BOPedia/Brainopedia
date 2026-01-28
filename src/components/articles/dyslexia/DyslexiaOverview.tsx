import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';
import dyslexiaHeroImage from 'figma:asset/20d85079837e56566282ae526b7653d98192ce1a.png';
import brainImage from 'figma:asset/f95b130fc411c648852280a75f4b4f82892469be.png';

interface DyslexiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaOverview({ setCurrentArticle }: DyslexiaOverviewProps) {
  const [activeTab, setActiveTab] = useState('what');

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>

      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
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

      {/* Introduction */}
      <div className="mb-8">
        <p className="mb-4">
          Dyslexia is a specific learning disorder that primarily affects reading and language processing.<sup>[1]</sup> 
          It is neurobiological in origin and characterized by difficulties with accurate and/or fluent word recognition, 
          poor spelling, and decoding abilities.<sup>[2]</sup> These difficulties typically result from a deficit in the 
          phonological component of language that is often unexpected in relation to other cognitive abilities.<sup>[3]</sup>
        </p>
        
        <ImageWithFallback 
          src={dyslexiaHeroImage} 
          alt="Child with reading difficulties"
          className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />
        
        <p className="mb-4">
          Importantly, dyslexia is not a reflection of low intelligence or lack of effort. Many individuals with dyslexia 
          have average or above-average intelligence and can be highly successful when provided with appropriate support 
          and accommodations.<sup>[4]</sup>
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => setActiveTab('what')}
          className={`px-6 py-3 rounded-md transition-colors ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          What is Dyslexia?
        </button>
        <button
          onClick={() => setActiveTab('types')}
          className={`px-6 py-3 rounded-md transition-colors ${
            activeTab === 'types'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Types & Presentations
        </button>
        <button
          onClick={() => setActiveTab('facts')}
          className={`px-6 py-3 rounded-md transition-colors ${
            activeTab === 'facts'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Key Facts & Stats
        </button>
      </div>

      {/* TAB 1: What is Dyslexia? */}
      {activeTab === 'what' && (
        <div className="space-y-8">
          {/* What is Dyslexia Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is Dyslexia?</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Definition</h3>
            <p className="mb-4">
              The International Dyslexia Association (IDA) defines dyslexia as:<sup>[5]</sup>
            </p>
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
              <p className="italic text-sm">
                "Dyslexia is a specific learning disability that is neurobiological in origin. It is characterized by 
                difficulties with accurate and/or fluent word recognition and by poor spelling and decoding abilities. 
                These difficulties typically result from a deficit in the phonological component of language that is often 
                unexpected in relation to other cognitive abilities and the provision of effective classroom instruction. 
                Secondary consequences may include problems in reading comprehension and reduced reading experience that 
                can impede growth of vocabulary and background knowledge."
              </p>
            </div>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Key Characteristics</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Phonological processing difficulties:</strong> Trouble with the sound structure of language<sup>[6]</sup></li>
              <li className="mb-2"><strong>Word decoding problems:</strong> Difficulty sounding out written words<sup>[7]</sup></li>
              <li className="mb-2"><strong>Reading fluency challenges:</strong> Slow, effortful reading even of familiar text<sup>[8]</sup></li>
              <li className="mb-2"><strong>Spelling difficulties:</strong> Persistent spelling errors despite instruction<sup>[9]</sup></li>
              <li className="mb-2"><strong>Neurobiological basis:</strong> Differences in brain structure and function related to reading<sup>[10]</sup></li>
              <li className="mb-2"><strong>Unexpected difficulty:</strong> Reading challenges not explained by intellectual ability, sensory problems, or lack of instruction<sup>[11]</sup></li>
            </ul>
          </div>

          {/* What Dyslexia is NOT Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Common Misconceptions</h2>
            
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4">
              <h3 className="text-center text-[#0c264d] font-bold mb-4">What Dyslexia Is NOT:</h3>
              <div className="text-sm space-y-3">
                <p><strong>✗ Visual problem:</strong> Dyslexia is not primarily a vision problem; it's language-based<sup>[6]</sup></p>
                <p><strong>✗ Seeing letters backwards:</strong> While letter reversals can occur, this is not the core issue and is common in early literacy for all children<sup>[34]</sup></p>
                <p><strong>✗ Low intelligence:</strong> Dyslexia occurs across the IQ range; many individuals with dyslexia have average or above-average intelligence<sup>[35]</sup></p>
                <p><strong>✗ Laziness:</strong> Reading difficulties are neurologically based, not due to lack of effort<sup>[36]</sup></p>
                <p><strong>✗ Something you outgrow:</strong> Dyslexia is lifelong, though individuals can learn to read and manage challenges effectively<sup>[37]</sup></p>
                <p><strong>✗ Rare:</strong> Dyslexia is common, affecting millions of people worldwide<sup>[38]</sup></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Types & Presentations */}
      {activeTab === 'types' && (
        <div className="space-y-8">
          {/* Prevalence Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">How Common is Dyslexia?</h2>
            
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Prevalence:</strong> Dyslexia affects approximately 5-10% of the population, with some estimates as high as 15-20%<sup>[29]</sup></li>
              <li className="mb-2"><strong>Most common learning disability:</strong> Dyslexia represents 80% of all learning disabilities<sup>[30]</sup></li>
              <li className="mb-2"><strong>Cross-linguistic:</strong> Dyslexia occurs across all languages and writing systems, though manifestation may vary<sup>[31]</sup></li>
              <li className="mb-2"><strong>Socioeconomic distribution:</strong> Affects individuals across all socioeconomic levels<sup>[32]</sup></li>
              <li className="mb-2"><strong>Gender:</strong> Historically thought to be more common in males, but recent research suggests similar rates in males and females; girls may be under-identified<sup>[33]</sup></li>
            </ul>
          </div>

          {/* Spectrum and Severity Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyslexia as a Spectrum</h2>
            
            <p className="mb-4">
              Dyslexia exists on a continuum of severity, and its manifestation varies among individuals:<sup>[26]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Severity Levels</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Mild:</strong> Reading difficulties that respond well to intervention; individuals develop functional reading skills with support</li>
              <li className="mb-2"><strong>Moderate:</strong> More significant challenges requiring intensive, sustained intervention; reading remains effortful</li>
              <li className="mb-2"><strong>Severe:</strong> Persistent, substantial difficulties despite appropriate intervention; may require extensive accommodations throughout life<sup>[27]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Variation</h3>
            <p className="mb-4">
              No two individuals with dyslexia are exactly alike. Variation occurs in:<sup>[28]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Specific pattern of strengths and weaknesses</li>
              <li className="mb-2">Response to intervention</li>
              <li className="mb-2">Compensatory strategies developed</li>
              <li className="mb-2">Co-occurring conditions or strengths</li>
              <li className="mb-2">Impact on academic and life functioning</li>
            </ul>
          </div>

          {/* Co-occurring Conditions Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
            
            <p className="mb-4">
              Dyslexia frequently co-occurs with other conditions:<sup>[47]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>ADHD:</strong> 25-40% of individuals with dyslexia also have ADHD<sup>[48]</sup></li>
              <li className="mb-2"><strong>Dysgraphia:</strong> Writing difficulties often co-occur with dyslexia<sup>[49]</sup></li>
              <li className="mb-2"><strong>Dyscalculia:</strong> Some individuals have both reading and math learning disabilities<sup>[50]</sup></li>
              <li className="mb-2"><strong>Anxiety and depression:</strong> Higher rates due to academic struggles and negative experiences<sup>[51]</sup></li>
              <li className="mb-2"><strong>Language disorders:</strong> Broader oral language difficulties may be present<sup>[52]</sup></li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: Key Facts & Stats */}
      {activeTab === 'facts' && (
        <div className="space-y-8">
          {/* The Reading Brain Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding the Reading Brain</h2>
            
            <img 
              src={brainImage} 
              alt="Reading brain representation"
              className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
            />
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Typical Reading Works</h3>
            <p className="mb-4">
              Reading is not a natural process for the human brain—it must be taught and learned.<sup>[12]</sup> Proficient 
              reading requires several brain systems working together:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Visual processing:</strong> Recognizing letters and letter patterns</li>
              <li className="mb-2"><strong>Phonological processing:</strong> Connecting letters to sounds (phonemes)<sup>[13]</sup></li>
              <li className="mb-2"><strong>Orthographic processing:</strong> Recognizing spelling patterns and whole words<sup>[14]</sup></li>
              <li className="mb-2"><strong>Semantic processing:</strong> Accessing word meanings<sup>[15]</sup></li>
              <li className="mb-2"><strong>Working memory:</strong> Holding information while processing text<sup>[16]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Differences in Dyslexia</h3>
            <p className="mb-4">
              Brain imaging studies show that individuals with dyslexia show different patterns of brain activation during 
              reading tasks:<sup>[17]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Underactivation:</strong> Reduced activity in left hemisphere regions typically involved in reading, particularly in the parieto-temporal and occipito-temporal areas<sup>[18]</sup></li>
              <li className="mb-2"><strong>Compensatory activation:</strong> Increased reliance on other brain regions, such as frontal areas and right hemisphere regions<sup>[19]</sup></li>
              <li className="mb-2"><strong>White matter differences:</strong> Atypical connectivity in neural pathways supporting reading<sup>[20]</sup></li>
              <li className="mb-2"><strong>Phonological circuit disruption:</strong> Particular difficulty in the neural systems that connect letters to sounds<sup>[21]</sup></li>
            </ul>
          </div>

          {/* Phonological Core Deficit Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Phonological Core Deficit</h2>
            
            <p className="mb-4">
              The most well-established explanation for dyslexia is the phonological deficit hypothesis.<sup>[22]</sup> This 
              theory proposes that dyslexia stems from a specific impairment in the representation, storage, and/or retrieval 
              of speech sounds.
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What is Phonological Processing?</h3>
            <p className="mb-4">
              Phonological processing involves several related skills:<sup>[23]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Phonological awareness:</strong> Ability to identify and manipulate sounds in spoken language (rhyming, segmenting words into syllables or individual sounds)</li>
              <li className="mb-2"><strong>Phonological memory:</strong> Ability to hold phonological information in short-term memory</li>
              <li className="mb-2"><strong>Rapid automatized naming (RAN):</strong> Speed of retrieving phonological codes from long-term memory<sup>[24]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Phonological Deficits Affect Reading</h3>
            <p className="mb-4">
              When phonological processing is impaired:<sup>[25]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Learning letter-sound correspondences is difficult</li>
              <li className="mb-2">Sounding out (decoding) unfamiliar words is challenging</li>
              <li className="mb-2">Building a sight vocabulary is slower because the phonological route is less effective</li>
              <li className="mb-2">Spelling suffers because it requires strong phonological representations</li>
              <li className="mb-2">Reading remains effortful rather than becoming automatic</li>
            </ul>
          </div>

          {/* Strengths Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyslexia and Strengths</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1765648636178-60e73bcc865e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3VjY2VzcyUyMGNvbmZpZGVuY2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3Njc0MTUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Student success and confidence"
              className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
            />
            
            <p className="mb-4">
              While dyslexia presents challenges, many individuals with dyslexia also demonstrate notable strengths:<sup>[39]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Creative thinking:</strong> Strong ability to think outside the box and generate novel ideas<sup>[40]</sup></li>
              <li className="mb-2"><strong>Visual-spatial reasoning:</strong> Enhanced ability to think in pictures and mentally manipulate 3D objects<sup>[41]</sup></li>
              <li className="mb-2"><strong>Big-picture thinking:</strong> Ability to see connections and patterns others might miss<sup>[42]</sup></li>
              <li className="mb-2"><strong>Problem-solving:</strong> Innovative approaches to challenges<sup>[43]</sup></li>
              <li className="mb-2"><strong>Narrative reasoning:</strong> Strength in storytelling and understanding complex narratives<sup>[44]</sup></li>
              <li className="mb-2"><strong>Resilience:</strong> Persistence and determination developed through overcoming challenges<sup>[45]</sup></li>
            </ul>
            <p className="mb-4">
              Many successful individuals in diverse fields—including entrepreneurs, artists, scientists, and leaders—have dyslexia.<sup>[46]</sup>
            </p>
          </div>

          {/* Importance of Early Identification Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Importance of Understanding Dyslexia</h2>
            
            <p className="mb-4">
              Understanding dyslexia is crucial because:<sup>[53]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Early identification matters:</strong> Early intervention leads to better outcomes<sup>[54]</sup></li>
              <li className="mb-2"><strong>Appropriate instruction is essential:</strong> Individuals with dyslexia need structured, explicit, multisensory reading instruction<sup>[55]</sup></li>
              <li className="mb-2"><strong>Accommodations enable success:</strong> With appropriate support, individuals with dyslexia can achieve their potential<sup>[56]</sup></li>
              <li className="mb-2"><strong>Self-understanding is empowering:</strong> Understanding dyslexia helps individuals advocate for themselves and develop effective strategies<sup>[57]</sup></li>
              <li className="mb-2"><strong>Reduces negative impact:</strong> Proper identification and support prevent secondary issues like low self-esteem and school dropout<sup>[58]</sup></li>
            </ul>
          </div>

          {/* Looking Forward Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Moving Forward</h2>
            
            <p className="mb-4">
              Dyslexia is a well-researched, neurobiological condition that affects reading but does not limit potential. 
              With understanding, appropriate instruction, accommodations, and support, individuals with dyslexia can develop 
              strong reading skills and succeed academically, professionally, and personally.<sup>[59]</sup>
            </p>
            
            <p className="mb-4">
              The key is recognizing dyslexia early, providing evidence-based intervention, celebrating strengths, and 
              fostering an environment where individuals with dyslexia can thrive.<sup>[21]</sup>
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

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Lyon, G. R., Shaywitz, S. E., & Shaywitz, B. A. (2003). "A definition of dyslexia." <em>Annals of Dyslexia</em>, 53(1), 1-14.</p>
          <p>[2] American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). American Psychiatric Publishing.</p>
          <p>[3] Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <em>Annual Review of Clinical Psychology</em>, 11, 283-307.</p>
          <p>[4] Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <em>Journal of Child Psychology and Psychiatry</em>, 53(5), 593-607.</p>
          <p>[5] International Dyslexia Association. (2002). "Definition of dyslexia." Retrieved from https://dyslexiaida.org/definition-of-dyslexia/</p>
          <p>[6] Vellutino, F. R., Fletcher, J. M., Snowling, M. J., & Scanlon, D. M. (2004). "Specific reading disability (dyslexia): What have we learned in the past four decades?" <em>Journal of Child Psychology and Psychiatry</em>, 45(1), 2-40.</p>
          <p>[7] Rack, J. P., Snowling, M. J., & Olson, R. K. (1992). "The nonword reading deficit in developmental dyslexia: A review." <em>Reading Research Quarterly</em>, 27(1), 29-53.</p>
          <p>[8] Wolf, M., & Bowers, P. G. (1999). "The double-deficit hypothesis for the developmental dyslexias." <em>Journal of Educational Psychology</em>, 91(3), 415-438.</p>
          <p>[9] Ehri, L. C. (2000). "Learning to read and learning to spell: Two sides of a coin." <em>Topics in Language Disorders</em>, 20(3), 19-36.</p>
          <p>[10] Shaywitz, S. E., & Shaywitz, B. A. (2005). "Dyslexia (specific reading disability)." <em>Biological Psychiatry</em>, 57(11), 1301-1309.</p>
          <p>[11] Stanovich, K. E. (1988). "Explaining the differences between the dyslexic and the garden-variety poor reader: The phonological-core variable-difference model." <em>Journal of Learning Disabilities</em>, 21(10), 590-604.</p>
          <p>[12] Dehaene, S. (2009). <em>Reading in the brain: The new science of how we read</em>. Penguin.</p>
          <p>[13] Wagner, R. K., & Torgesen, J. K. (1987). "The nature of phonological processing and its causal role in the acquisition of reading skills." <em>Psychological Bulletin</em>, 101(2), 192-212.</p>
          <p>[14] Shaywitz, S. E., Morris, R., & Shaywitz, B. A. (2008). "The education of dyslexic children from childhood to young adulthood." <em>Annual Review of Psychology</em>, 59, 451-475.</p>
          <p>[15] Perfetti, C. (2007). "Reading ability: Lexical quality to comprehension." <em>Scientific Studies of Reading</em>, 11(4), 357-383.</p>
          <p>[16] Swanson, H. L., & Berninger, V. (1995). "The role of working memory in skilled and less skilled readers' comprehension." <em>Intelligence</em>, 21(1), 83-108.</p>
          <p>[17] Shaywitz, B. A., Shaywitz, S. E., Pugh, K. R., et al. (2002). "Disruption of posterior brain systems for reading in children with developmental dyslexia." <em>Biological Psychiatry</em>, 52(2), 101-110.</p>
          <p>[18] Pugh, K. R., Mencl, W. E., Jenner, A. R., et al. (2001). "Neurobiological studies of reading and reading disability." <em>Journal of Communication Disorders</em>, 34(6), 479-492.</p>
          <p>[19] Richlan, F., Kronbichler, M., & Wimmer, H. (2011). "Meta-analyzing brain dysfunctions in dyslexic children and adults." <em>Neuroimage</em>, 56(3), 1735-1742.</p>
          <p>[20] Vandermosten, M., Boets, B., Wouters, J., & Ghesquière, P. (2012). "A qualitative and quantitative review of diffusion tensor imaging studies in reading and dyslexia." <em>Neuroscience & Biobehavioral Reviews</em>, 36(6), 1532-1552.</p>
          <p>[21] Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <em>Science</em>, 325(5938), 280-283.</p>
          <p>[22] Ramus, F., & Szenkovits, G. (2008). "What phonological deficit?" <em>Quarterly Journal of Experimental Psychology</em>, 61(1), 129-141.</p>
          <p>[23] Wagner, R. K., Torgesen, J. K., Rashotte, C. A., et al. (1997). "Changing relations between phonological processing abilities and word-level reading as children develop from beginning to skilled readers." <em>Developmental Psychology</em>, 33(3), 468-479.</p>
          <p>[24] Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>, 63, 427-452.</p>
          <p>[25] Snowling, M. J. (2000). <em>Dyslexia</em> (2nd ed.). Blackwell Publishing.</p>
          <p>[26] Shaywitz, S. E., Escobar, M. D., Shaywitz, B. A., Fletcher, J. M., & Makuch, R. (1992). "Evidence that dyslexia may represent the lower tail of a normal distribution of reading ability." <em>New England Journal of Medicine</em>, 326(3), 145-150.</p>
          <p>[27] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</p>
          <p>[28] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[29] Shaywitz, S. E., Shaywitz, B. A., Fletcher, J. M., & Escobar, M. D. (1990). "Prevalence of reading disability in boys and girls." <em>JAMA</em>, 264(8), 998-1002.</p>
          <p>[30] National Institute of Child Health and Human Development. (2000). <em>Report of the National Reading Panel</em>. NIH Publication No. 00-4769.</p>
          <p>[31] Ziegler, J. C., & Goswami, U. (2005). "Reading acquisition, developmental dyslexia, and skilled reading across languages: A psycholinguistic grain size theory." <em>Psychological Bulletin</em>, 131(1), 3-29.</p>
          <p>[32] Snowling, M. J., & Melby-Lervåg, M. (2016). "Oral language deficits in familial dyslexia: A meta-analysis and review." <em>Psychological Bulletin</em>, 142(5), 498-545.</p>
          <p>[33] Quinn, J. M., & Wagner, R. K. (2015). "Gender differences in reading impairment and in the identification of impaired readers: Results from a large-scale study of at-risk readers." <em>Journal of Learning Disabilities</em>, 48(4), 433-445.</p>
          <p>[34] Fischer, F. W., Liberman, I. Y., & Shankweiler, D. (1978). "Reading reversals and developmental dyslexia: A further study." <em>Cortex</em>, 14(4), 496-510.</p>
          <p>[35] Ferrer, E., Shaywitz, B. A., Holahan, J. M., Marchione, K., & Shaywitz, S. E. (2010). "Uncoupling of reading and IQ over time: Empirical evidence for a definition of dyslexia." <em>Psychological Science</em>, 21(1), 93-101.</p>
          <p>[36] Shaywitz, S. (2003). <em>Overcoming dyslexia: A new and complete science-based program for reading problems at any level</em>. Knopf.</p>
          <p>[37] Bruck, M. (1990). "Word-recognition skills of adults with childhood diagnoses of dyslexia." <em>Developmental Psychology</em>, 26(3), 439-454.</p>
          <p>[38] Peterson, R. L., & Pennington, B. F. (2012). "Developmental dyslexia." <em>The Lancet</em>, 379(9830), 1997-2007.</p>
          <p>[39] Eide, B. L., & Eide, F. F. (2011). <em>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</em>. Penguin.</p>
          <p>[40] Wolff, U., & Lundberg, I. (2002). "The prevalence of dyslexia among art students." <em>Dyslexia</em>, 8(1), 34-42.</p>
          <p>[41] von Károlyi, C., Winner, E., Gray, W., & Sherman, G. F. (2003). "Dyslexia linked to talent: Global visual-spatial ability." <em>Brain and Language</em>, 85(3), 427-431.</p>
          <p>[42] Schneps, M. H., Brockmole, J. R., Sonnert, G., & Pomplun, M. (2012). "History of reading struggles linked to enhanced learning in low spatial frequency scenes." <em>PloS One</em>, 7(4), e35724.</p>
          <p>[43] Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <em>Dyslexia</em>, 15(4), 328-346.</p>
          <p>[44] Griffiths, Y., & Snowling, M. J. (2002). "Predictors of exception word and nonword reading in dyslexic children: The severity hypothesis." <em>Journal of Educational Psychology</em>, 94(1), 34-43.</p>
          <p>[45] Morrison, F. J., & Cooney, R. R. (2002). "Parenting and academic achievement: Multiple paths to early literacy." In J. G. Borkowski, S. L. Ramey, & M. Bristol-Power (Eds.), <em>Parenting and the child's world: Influences on academic, intellectual, and social-emotional development</em> (pp. 141-160). Psychology Press.</p>
          <p>[46] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties, computer images and the ironies of creativity</em>. Prometheus Books.</p>
          <p>[47] Pennington, B. F., & Bishop, D. V. (2009). "Relations among speech, language, and reading disorders." <em>Annual Review of Psychology</em>, 60, 283-306.</p>
          <p>[48] Willcutt, E. G., & Pennington, B. F. (2000). "Psychiatric comorbidity in children and adolescents with reading disability." <em>Journal of Child Psychology and Psychiatry</em>, 41(8), 1039-1048.</p>
          <p>[49] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[50] Landerl, K., & Moll, K. (2010). "Comorbidity of learning disorders: Prevalence and familial transmission." <em>Journal of Child Psychology and Psychiatry</em>, 51(3), 287-294.</p>
          <p>[51] Boetsch, E. A., Green, P. A., & Pennington, B. F. (1996). "Psychosocial correlates of dyslexia across the life span." <em>Development and Psychopathology</em>, 8(3), 539-562.</p>
          <p>[52] Catts, H. W., Adlof, S. M., Hogan, T. P., & Weismer, S. E. (2005). "Are specific language impairment and dyslexia distinct disorders?" <em>Journal of Speech, Language, and Hearing Research</em>, 48(6), 1378-1396.</p>
          <p>[53] Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In P. McCardle & V. Chhabra (Eds.), <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</p>
          <p>[54] Shaywitz, S. E., Shaywitz, B. A., Fulbright, R. K., et al. (2003). "Neural systems for compensation and persistence: Young adult outcome of childhood reading disability." <em>Biological Psychiatry</em>, 54(1), 25-33.</p>
          <p>[55] Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <em>British Journal of Educational Psychology</em>, 81(1), 1-23.</p>
          <p>[56] Shaywitz, S. E., & Shaywitz, B. A. (2008). "Paying attention to reading: The neurobiology of reading and dyslexia." <em>Development and Psychopathology</em>, 20(4), 1329-1349.</p>
          <p>[57] McNulty, M. A. (2003). "Dyslexia and the life course." <em>Journal of Learning Disabilities</em>, 36(4), 363-381.</p>
          <p>[58] Daniel, S. S., Walsh, A. K., Goldston, D. B., Arnold, E. M., Reboussin, B. A., & Wood, F. B. (2006). "Suicidality, school dropout, and reading problems among adolescents." <em>Journal of Learning Disabilities</em>, 39(6), 507-514.</p>
          <p>[59] Swanson, H. L., Harris, K. R., & Graham, S. (Eds.). (2013). <em>Handbook of learning disabilities</em> (2nd ed.). Guilford Press.</p>
        </div>
      </section>
    </article>
  );
}