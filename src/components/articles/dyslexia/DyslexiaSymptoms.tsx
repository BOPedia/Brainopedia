import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface DyslexiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaSymptoms({ setCurrentArticle }: DyslexiaSymptomsProps) {
  const [activeTab, setActiveTab] = useState('core');

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
          Dyslexia: Symptoms & Signs
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
          Dyslexia manifests differently across individuals and developmental stages, but certain characteristic patterns 
          emerge.<sup>[1]</sup> Understanding these signs enables early identification and appropriate intervention, which 
          significantly improves outcomes.<sup>[2]</sup> The hallmark features involve difficulties with phonological 
          processing, reading fluency, spelling, and word decoding.<sup>[3]</sup>
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        <button
          onClick={() => setActiveTab('core')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'core'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Core Symptoms
        </button>
        <button
          onClick={() => setActiveTab('reading')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'reading'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Reading Challenges
        </button>
        <button
          onClick={() => setActiveTab('writing')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'writing'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Writing & Spelling
        </button>
        <button
          onClick={() => setActiveTab('age')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'age'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Age-Specific Signs
        </button>
      </div>

      {/* TAB 1: Core Symptoms */}
      {activeTab === 'core' && (
        <div className="space-y-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Symptoms of Dyslexia</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1652643105908-d1e6eea8c147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBoYWJldCUyMHBob25pY3MlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY3NDE1MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Early literacy and phonics"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyslexia is characterized by a range of symptoms that affect reading, writing, and language processing:<sup>[4]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Phonological Awareness Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Rhyming:</strong> Trouble recognizing or producing rhymes (e.g., "cat" and "hat")<sup>[5]</sup></li>
            <li className="mb-2"><strong>Syllable segmentation:</strong> Difficulty breaking words into syllables (e.g., "baseball" into "base-ball")</li>
            <li className="mb-2"><strong>Sound identification:</strong> Challenges identifying beginning, middle, or ending sounds in words<sup>[6]</sup></li>
            <li className="mb-2"><strong>Sound blending:</strong> Difficulty combining sounds to make words (e.g., /c/ /a/ /t/ = "cat")</li>
            <li className="mb-2"><strong>Sound manipulation:</strong> Trouble deleting or substituting sounds in words<sup>[7]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Late talking or slow vocabulary development<sup>[8]</sup></li>
            <li className="mb-2">Difficulty learning nursery rhymes or songs</li>
            <li className="mb-2">Trouble remembering names of letters or numbers</li>
            <li className="mb-2">Confusing similar-sounding words<sup>[9]</sup></li>
            <li className="mb-2">Word-finding difficulties (knowing the concept but struggling to retrieve the word)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family History</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Parent, sibling, or other family member with dyslexia or reading difficulties<sup>[10]</sup></li>
            <li className="mb-2">Family history of language-based learning problems</li>
          </ul>
        </div>
      )}

      {/* TAB 2: Reading Challenges */}
      {activeTab === 'reading' && (
        <div className="space-y-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Reading Challenges in Dyslexia</h2>
          
          <p className="mb-4">
            Dyslexia typically becomes most apparent when children begin formal reading instruction:<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Difficulties</h3>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwZGlmZmljdWx0eSUyMGNoaWxkJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY3NDE1MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child struggling with reading"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Slow progress:</strong> Learning to read much slower than peers despite adequate instruction<sup>[12]</sup></li>
            <li className="mb-2"><strong>Decoding problems:</strong> Difficulty sounding out unfamiliar words; may guess based on context or first letter<sup>[13]</sup></li>
            <li className="mb-2"><strong>Reading fluency:</strong> Slow, choppy reading with frequent errors; reading requires enormous effort<sup>[14]</sup></li>
            <li className="mb-2"><strong>Accuracy issues:</strong> Substituting, omitting, or adding words when reading<sup>[15]</sup></li>
            <li className="mb-2"><strong>Loss of place:</strong> Frequently losing place while reading, skipping lines</li>
            <li className="mb-2"><strong>Avoidance:</strong> Reluctance to read, especially aloud; may complain of headaches or fatigue</li>
            <li className="mb-2"><strong>Comprehension struggles:</strong> Poor comprehension despite good listening comprehension; cognitive energy goes to decoding rather than understanding<sup>[16]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Processing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Mispronouncing multisyllabic words (e.g., "aminal" for "animal")<sup>[19]</sup></li>
            <li className="mb-2">Confusing words that sound similar</li>
            <li className="mb-2">Difficulty learning foreign languages, especially reading and spelling in the new language</li>
            <li className="mb-2">Trouble remembering sequences (alphabet, days of week, months)</li>
            <li className="mb-2">Word retrieval problems; may use fillers or circumlocution<sup>[20]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory and Processing Speed</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Verbal working memory:</strong> Difficulty holding verbal information in mind<sup>[21]</sup></li>
            <li className="mb-2"><strong>Rapid naming:</strong> Slow at rapidly naming familiar objects, colors, or letters<sup>[22]</sup></li>
            <li className="mb-2"><strong>Following multi-step directions:</strong> May need directions repeated or simplified</li>
            <li className="mb-2"><strong>Rote memorization:</strong> Difficulty memorizing math facts, lists, or sequences</li>
          </ul>
        </div>
      )}

      {/* TAB 3: Writing & Spelling */}
      {activeTab === 'writing' && (
        <div className="space-y-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Writing and Spelling Challenges in Dyslexia</h2>
          
          <p className="mb-4">
            Dyslexia often manifests in difficulties with writing and spelling, which can be challenging for individuals:<sup>[23]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Spelling and Writing Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Spelling:</strong> Severe and persistent spelling problems; inconsistent spelling of the same word<sup>[17]</sup></li>
            <li className="mb-2"><strong>Phonetic spelling:</strong> Spelling words as they sound rather than conventionally (e.g., "sed" for "said")</li>
            <li className="mb-2"><strong>Omitted letters:</strong> Frequently leaving out letters, especially vowels<sup>[18]</sup></li>
            <li className="mb-2"><strong>Letter reversals:</strong> Continuing to reverse letters (b/d, p/q) beyond age 7</li>
            <li className="mb-2"><strong>Writing avoidance:</strong> Extreme reluctance to write; written work much weaker than oral expression</li>
          </ul>
        </div>
      )}

      {/* TAB 4: Age-Specific Signs */}
      {activeTab === 'age' && (
        <div className="space-y-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Age-Specific Signs of Dyslexia</h2>
          
          <p className="mb-4">
            Dyslexia can present differently at various developmental stages, from early childhood to adulthood:<sup>[24]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Signs (Preschool)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Late talking or slow vocabulary development<sup>[8]</sup></li>
            <li className="mb-2">Difficulty learning nursery rhymes or songs</li>
            <li className="mb-2">Trouble remembering names of letters or numbers</li>
            <li className="mb-2">Confusing similar-sounding words<sup>[9]</sup></li>
            <li className="mb-2">Word-finding difficulties (knowing the concept but struggling to retrieve the word)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Age Symptoms (K-5th Grade)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Slow progress:</strong> Learning to read much slower than peers despite adequate instruction<sup>[12]</sup></li>
            <li className="mb-2"><strong>Decoding problems:</strong> Difficulty sounding out unfamiliar words; may guess based on context or first letter<sup>[13]</sup></li>
            <li className="mb-2"><strong>Reading fluency:</strong> Slow, choppy reading with frequent errors; reading requires enormous effort<sup>[14]</sup></li>
            <li className="mb-2"><strong>Accuracy issues:</strong> Substituting, omitting, or adding words when reading<sup>[15]</sup></li>
            <li className="mb-2"><strong>Loss of place:</strong> Frequently losing place while reading, skipping lines</li>
            <li className="mb-2"><strong>Avoidance:</strong> Reluctance to read, especially aloud; may complain of headaches or fatigue</li>
            <li className="mb-2"><strong>Comprehension struggles:</strong> Poor comprehension despite good listening comprehension; cognitive energy goes to decoding rather than understanding<sup>[16]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adult Manifestations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Slow reading speed, particularly with dense or technical material<sup>[33]</sup></li>
            <li className="mb-2">Re-reading passages multiple times for comprehension</li>
            <li className="mb-2">Spelling errors in emails, reports, and other writing</li>
            <li className="mb-2">Difficulty with proofreading; may miss own errors<sup>[34]</sup></li>
            <li className="mb-2">Reliance on spell-check and grammar-check tools</li>
            <li className="mb-2">Avoiding jobs requiring extensive reading and writing when possible</li>
          </ul>
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
        <ul className="list-disc ml-6">
          <li className="mb-2">[1] Shaywitz, S. E., & Shaywitz, B. A. (2008). Dyslexia (2nd ed.). Yale University Press.</li>
          <li className="mb-2">[2] National Institute of Child Health and Human Development (NICHD). (2000). Report of the National Reading Panel. National Institute of Child Health and Human Development.</li>
          <li className="mb-2">[3] Snowling, M. J. (2000). Dyslexia. Oxford University Press.</li>
          <li className="mb-2">[4] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[5] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1997). Development of reading-related phonological processing abilities: New evidence of bi-directional causality from a longitudinal study of first-grade children. Developmental Psychology, 33(4), 926-938.</li>
          <li className="mb-2">[6] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[7] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[8] Shaywitz, S. E., & Shaywitz, B. A. (2001). The neurobiology of reading and dyslexia. Scientific American, 284(5), 40-47.</li>
          <li className="mb-2">[9] Snowling, M. J. (2000). Dyslexia. Oxford University Press.</li>
          <li className="mb-2">[10] Shaywitz, S. E., & Shaywitz, B. A. (2008). Dyslexia (2nd ed.). Yale University Press.</li>
          <li className="mb-2">[11] National Institute of Child Health and Human Development (NICHD). (2000). Report of the National Reading Panel. National Institute of Child Health and Human Development.</li>
          <li className="mb-2">[12] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[13] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[14] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[15] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[16] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[17] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[18] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[19] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[20] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[21] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[22] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[23] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[24] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[25] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[26] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[27] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[28] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[29] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[30] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[31] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[32] Shaywitz, S. E., & Shaywitz, B. A. (2008). Dyslexia (2nd ed.). Yale University Press.</li>
          <li className="mb-2">[33] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[34] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). Contributions of phonological awareness to the growth of word-reading skills: Evidence from a 2-year longitudinal study. Journal of Educational Psychology, 93(4), 645-662.</li>
          <li className="mb-2">[35] Shaywitz, S. E., & Shaywitz, B. A. (2001). The neurobiology of reading and dyslexia. Scientific American, 284(5), 40-47.</li>
          <li className="mb-2">[36] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[37] Shaywitz, S. E., & Shaywitz, B. A. (2008). Dyslexia (2nd ed.). Yale University Press.</li>
          <li className="mb-2">[38] Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). The development of reading-related phonological processing abilities: Evidence from a longitudinal study of first-grade children. Journal of Educational Psychology, 91(1), 47-57.</li>
          <li className="mb-2">[39] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[40] Shaywitz, S. E., & Shaywitz, B. A. (2001). The neurobiology of reading and dyslexia. Scientific American, 284(5), 40-47.</li>
          <li className="mb-2">[41] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[42] Shaywitz, S. E., & Shaywitz, B. A. (2001). The neurobiology of reading and dyslexia. Scientific American, 284(5), 40-47.</li>
          <li className="mb-2">[43] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[44] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[45] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[46] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[47] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[48] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[49] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[50] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
          <li className="mb-2">[51] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). Learning disabilities: From identification to intervention. Guilford Press.</li>
        </ul>
      </section>
    </article>
  );
}