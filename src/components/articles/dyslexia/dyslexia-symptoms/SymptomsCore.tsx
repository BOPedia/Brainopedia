import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';

interface SymptomsCoreProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaSymptomsCore({ setCurrentArticle }: SymptomsCoreProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Symptoms & Characteristics
        </h1>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-lg">←</span>
        All About Dyslexia
      </button>
      
      <Tabs defaultValue="core" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="core" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Core Characteristics
          </TabsTrigger>
          <TabsTrigger 
            value="strengths" 
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-strengths')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Strengths
          </TabsTrigger>
          <TabsTrigger 
            value="impact" 
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-impact')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Impact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="core" className="animate-fadeIn">
          <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Primary Reading Challenges</h3>
          <p className="mb-4 text-slate-700">Dyslexia is primarily characterized by neurobiological differences that impede the development of accurate and fluent word recognition.<sup className="text-green-600 font-bold ml-0.5">1</sup></p>
          
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li><strong>Decoding difficulties:</strong> Challenges sounding out new words, often due to phonological processing deficits.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
            <li><strong>Slow, labored reading:</strong> High cognitive demand spent on decoding leaves little capacity for comprehension.</li>
            <li><strong>Inaccurate word recognition:</strong> Guessing words based on shape or context rather than mapping letter-to-sound.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li><strong>Phonological awareness:</strong> Difficulty manipulating the individual sounds (phonemes) within words.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Spelling & Writing</h3>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li><strong>Poor spelling:</strong> Often does not match phonological rules (e.g., phonetic spelling errors).<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
            <li><strong>Writing output:</strong> Written expression may be limited compared to oral vocabulary due to the mechanics of spelling and writing.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
          </ul>

          <div className="flex justify-end my-8 clear-both">
            <button 
              onClick={() => setCurrentArticle?.('dyslexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
            >
              <span className="text-lg">←</span>
              All About Dyslexia
            </button>
          </div>

          {/* REFERENCES */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Shaywitz, S. E., & Shaywitz, B. A. (2005). "Dyslexia (specific reading disability)." <em>Biological Psychiatry</em>, 57(11), 1301-1309.</p>
                <p>2. Wagner, R. K., & Torgesen, J. K. (1987). "The nature of phonological processing." <em>Psychological Bulletin</em>, 101(2), 192-212.</p>
                <p>3. Stanovich, K. E. (1988). "Explaining the differences between the dyslexic and the garden-variety poor reader." <em>Journal of Learning Disabilities</em>, 21(10), 590-604.</p>
                <p>4. Ehri, L. C. (2000). "Learning to read and learning to spell." <em>Topics in Language Disorders</em>, 20(3), 19-36.</p>
                <p>5. Graham, S., & Harris, K. R. (2009). "Almost everything you need to know about writing instruction." <em>Focus on Exceptional Children</em>, 42(2), 1-22.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}