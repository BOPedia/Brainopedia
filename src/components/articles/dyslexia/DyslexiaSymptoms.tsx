import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

interface DyslexiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyslexiaSymptoms({ setCurrentArticle, initialTab }: DyslexiaSymptomsProps) {
  const navigate = useNavigate();
  const activeTab = initialTab || 'core';

  return (
    <article className="max-w-6xl animate-fadeIn">

      {/* Main Title & Desktop Back Button - NOT BOLD */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d]">
          Dyslexia: Symptoms & Signs
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
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Dyslexia
      </button>

      {/* Introduction Box */}
      <div className="mb-8 bg-[#f0f9ff] p-6 rounded-lg border-l-4 border-[#2abcd4]">
        <p className="mb-4 text-gray-800 leading-relaxed">
          Dyslexia manifests differently across individuals and developmental stages, but certain characteristic patterns 
          emerge.<sup className="text-green-600 font-bold ml-0.5">1</sup> Understanding these signs enables early identification and appropriate intervention, which 
          significantly improves outcomes.<sup className="text-green-600 font-bold ml-0.5">2</sup> The hallmark features involve difficulties with phonological 
          processing, reading fluency, spelling, and word decoding.<sup className="text-green-600 font-bold ml-0.5">3</sup>
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
        <button
          onClick={() => navigate('/dyslexia-symptoms/core')}
          className={`px-6 py-3 rounded-md text-sm font-bold transition-colors ${
            activeTab === 'core'
              ? 'bg-[#0c264d] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Core Symptoms
        </button>
        <button
          onClick={() => navigate('/dyslexia-symptoms/reading')}
          className={`px-6 py-3 rounded-md text-sm font-bold transition-colors ${
            activeTab === 'reading'
              ? 'bg-[#0c264d] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Reading Challenges
        </button>
        <button
          onClick={() => navigate('/dyslexia-symptoms/writing')}
          className={`px-6 py-3 rounded-md text-sm font-bold transition-colors ${
            activeTab === 'writing'
              ? 'bg-[#0c264d] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Writing & Spelling
        </button>
        <button
          onClick={() => navigate('/dyslexia-symptoms/age')}
          className={`px-6 py-3 rounded-md text-sm font-bold transition-colors ${
            activeTab === 'age'
              ? 'bg-[#0c264d] text-white shadow-md'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Age-Specific Signs
        </button>
      </div>

      {/* ========================================= */}
      {/* TAB 1: Core Symptoms */}
      {/* ========================================= */}
      {activeTab === 'core' && (
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Core Symptoms of Dyslexia</h2>
          
          <ImageWithFallback 
            src="/images/dyslexia/YOUR-CORE-SYMPTOMS-IMAGE.png" 
            alt="Early literacy and phonics"
            className="w-80 h-auto rounded-lg shadow-sm float-right ml-6 mb-4"
          />
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            Dyslexia is characterized by a range of symptoms that affect reading, writing, and language processing:<sup className="text-green-600 font-bold ml-0.5">4</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Phonological Awareness Difficulties</h3>
          <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Rhyming:</strong> Trouble recognizing or producing rhymes (e.g., "cat" and "hat").<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
            <li><strong>Syllable segmentation:</strong> Difficulty breaking words into syllables (e.g., "baseball" into "base-ball").</li>
            <li><strong>Sound identification:</strong> Challenges identifying beginning, middle, or ending sounds in words.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
            <li><strong>Sound blending:</strong> Difficulty combining sounds to make words (e.g., /c/ /a/ /t/ = "cat").</li>
            <li><strong>Sound manipulation:</strong> Trouble deleting or substituting sounds in words.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Development</h3>
          <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2 clear-both">
            <li>Late talking or slow vocabulary development.<sup className="text-green-600 font-bold ml-0.5">8</sup></li>
            <li>Difficulty learning nursery rhymes or songs.</li>
            <li>Trouble remembering names of letters or numbers.</li>
            <li>Confusing similar-sounding words.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li>Word-finding difficulties (knowing the concept but struggling to retrieve the word).</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family History</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
            <li>Parent, sibling, or other family member with dyslexia or reading difficulties.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
            <li>Family history of language-based learning problems.</li>
          </ul>
        </div>
      )}

      {/* ========================================= */}
      {/* TAB 2: Reading Challenges */}
      {/* ========================================= */}
      {activeTab === 'reading' && (
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Reading Challenges in Dyslexia</h2>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            Dyslexia typically becomes most apparent when children begin formal reading instruction:<sup className="text-green-600 font-bold ml-0.5">1</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Difficulties</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/YOUR-READING-CHALLENGES-IMAGE.png" 
            alt="Child struggling with reading"
            className="w-64 h-auto rounded-lg shadow-sm float-left mr-6 mb-4"
          />
          
          <ul className="list-disc ml-6 mb-8 text-gray-700 space-y-2">
            <li><strong>Slow progress:</strong> Learning to read much slower than peers despite adequate instruction.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
            <li><strong>Decoding problems:</strong> Difficulty sounding out unfamiliar words; may guess based on context or first letter.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li><strong>Reading fluency:</strong> Slow, choppy reading with frequent errors; reading requires enormous effort.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
            <li><strong>Accuracy issues:</strong> Substituting, omitting, or adding words when reading.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
            <li><strong>Loss of place:</strong> Frequently losing place while reading, skipping lines.</li>
            <li><strong>Avoidance:</strong> Reluctance to read, especially aloud; may complain of headaches or fatigue.</li>
            <li><strong>Comprehension struggles:</strong> Poor comprehension despite good listening comprehension; cognitive energy goes to decoding rather than understanding.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Language Processing</h3>
          <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
            <li>Mispronouncing multisyllabic words (e.g., "aminal" for "animal").<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
            <li>Confusing words that sound similar.</li>
            <li>Difficulty learning foreign languages, especially reading and spelling in the new language.</li>
            <li>Trouble remembering sequences (alphabet, days of week, months).</li>
            <li>Word retrieval problems; may use fillers or circumlocution.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory and Processing Speed</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
            <li><strong>Verbal working memory:</strong> Difficulty holding verbal information in mind.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
            <li><strong>Rapid naming:</strong> Slow at rapidly naming familiar objects, colors, or letters.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
            <li><strong>Following multi-step directions:</strong> May need directions repeated or simplified.</li>
            <li><strong>Rote memorization:</strong> Difficulty memorizing math facts, lists, or sequences.</li>
          </ul>
        </div>
      )}

      {/* ========================================= */}
      {/* TAB 3: Writing & Spelling */}
      {/* ========================================= */}
      {activeTab === 'writing' && (
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Writing and Spelling Challenges</h2>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            Dyslexia often manifests in difficulties with writing and spelling, which can be immensely frustrating for individuals:<sup className="text-green-600 font-bold ml-0.5">7</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Spelling and Writing Difficulties</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
            <li><strong>Spelling:</strong> Severe and persistent spelling problems; inconsistent spelling of the same word.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
            <li><strong>Phonetic spelling:</strong> Spelling words as they sound rather than conventionally (e.g., "sed" for "said").</li>
            <li><strong>Omitted letters:</strong> Frequently leaving out letters, especially vowels.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
            <li><strong>Letter reversals:</strong> Continuing to reverse letters (b/d, p/q) beyond age 7.</li>
            <li><strong>Writing avoidance:</strong> Extreme reluctance to write; written work much weaker than oral expression.</li>
          </ul>
        </div>
      )}

      {/* ========================================= */}
      {/* TAB 4: Age-Specific Signs */}
      {/* ========================================= */}
      {activeTab === 'age' && (
        <div className="space-y-8 animate-fadeIn">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Age-Specific Signs of Dyslexia</h2>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            Dyslexia presents differently at various developmental stages, from early childhood to adulthood:<sup className="text-green-600 font-bold ml-0.5">6</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Signs (Preschool)</h3>
          <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
            <li>Late talking or slow vocabulary development.<sup className="text-green-600 font-bold ml-0.5">8</sup></li>
            <li>Difficulty learning nursery rhymes or songs.</li>
            <li>Trouble remembering names of letters or numbers.</li>
            <li>Confusing similar-sounding words.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li>Word-finding difficulties (knowing the concept but struggling to retrieve the word).</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Age Symptoms (K-5th Grade)</h3>
          <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Slow progress:</strong> Learning to read much slower than peers despite adequate instruction.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
            <li><strong>Decoding problems:</strong> Difficulty sounding out unfamiliar words.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li><strong>Reading fluency:</strong> Slow, choppy reading with frequent errors.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
            <li><strong>Accuracy issues:</strong> Substituting, omitting, or adding words when reading.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
            <li><strong>Comprehension struggles:</strong> Poor comprehension despite good listening comprehension.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adult Manifestations</h3>
          <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
            <li>Slow reading speed, particularly with dense or technical material.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
            <li>Re-reading passages multiple times for comprehension.</li>
            <li>Spelling errors in emails, reports, and other writing.</li>
            <li>Difficulty with proofreading; may miss own errors.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
            <li>Reliance on spell-check and grammar-check tools.</li>
            <li>Avoiding jobs requiring extensive reading and writing when possible.</li>
          </ul>
        </div>
      )}

      {/* Bottom navigation button */}
      <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-end">
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
            <li>Shaywitz, S. E., & Shaywitz, B. A. (2008). <i>Dyslexia</i> (2nd ed.). Yale University Press.</li>
            <li>National Institute of Child Health and Human Development. (2000). <i>Report of the National Reading Panel</i>.</li>
            <li>Snowling, M. J. (2000). <i>Dyslexia</i>. Oxford University Press.</li>
            <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). <i>Learning disabilities: From identification to intervention</i>. Guilford Press.</li>
            <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1997). "Development of reading-related phonological processing abilities." <i>Developmental Psychology</i>, 33(4), 926-938.</li>
            <li>Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). "Contributions of phonological awareness to the growth of word-reading skills." <i>Journal of Educational Psychology</i>, 93(4), 645-662.</li>
            <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). "The development of reading-related phonological processing abilities." <i>Journal of Educational Psychology</i>, 91(1), 47-57.</li>
            <li>Shaywitz, S. E., & Shaywitz, B. A. (2001). "The neurobiology of reading and dyslexia." <i>Scientific American</i>, 284(5), 40-47.</li>
          </ol>
        </div>
      </div>
    </article>
  );
}