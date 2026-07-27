import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface DyslexiaCausesBrainProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCausesBrain({ setCurrentArticle }: DyslexiaCausesBrainProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Causes & Origins
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
      
      <Tabs defaultValue="brain" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="brain" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Brain & Neurobiology
          </TabsTrigger>
          <TabsTrigger 
            value="genetics" 
            onClick={() => setCurrentArticle?.('dyslexia-causes-genetics')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Genetics
          </TabsTrigger>
          <TabsTrigger 
            value="risk" 
            onClick={() => setCurrentArticle?.('dyslexia-causes-risk')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Risk Factors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="brain" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Brain & Neurobiology
            </h2>
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Dyslexia is a neurodevelopmental condition with strong genetic and neurobiological underpinnings. Brain imaging studies have revealed consistent differences in brain structure and function, particularly in regions involved in reading and language processing. Understanding these origins helps demystify the condition and inform effective interventions.
            </p>
          </div>

          {/* Functional Differences */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Functional Differences
          </h3>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Left Hemisphere Underactivation</h4>
              <p className="text-sm text-slate-700 flex-grow">Reduced neural activity is observed in the left-hemisphere reading regions during active reading tasks.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Phonological Processing Areas</h4>
              <p className="text-sm text-slate-700 flex-grow">Decreased activation in inferior frontal and temporo-parietal regions involved in crucial sound-to-letter mapping.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Visual Word Form Area</h4>
              <p className="text-sm text-slate-700 flex-grow">Reduced activation in the occipito-temporal region responsible for recognizing written words.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Compensatory Activation</h4>
              <p className="text-sm text-slate-700 flex-grow">Increased reliance on other brain regions, including the right hemisphere and frontal areas, to compensate.</p>
            </div>
          </div>
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-causes-BrainNeuroTAB-Functional Diff.png"
            alt="Functional differences in the dyslexic brain"
            className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          {/* Structural Differences */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Structural Differences
          </h3>
         
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 border-l-4 border-[#0c264d] p-5 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-[#0c264d] text-lg mb-1">Gray Matter</h4>
              <p className="text-sm text-slate-700">Differences in cortical thickness and volume in reading-related regions.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#ffd166] p-5 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-[#0c264d] text-lg mb-1">White Matter</h4>
              <p className="text-sm text-slate-700">Reduced white matter integrity in pathways connecting language and reading areas.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#0A9DC4] p-5 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-[#0c264d] text-lg mb-1">Connectivity</h4>
              <p className="text-sm text-slate-700">Atypical connectivity patterns between brain regions involved in reading.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#2abcd4] p-5 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-[#0c264d] text-lg mb-1">Symmetry Differences</h4>
              <p className="text-sm text-slate-700">Less asymmetry typically found in language-related brain regions.</p>
            </div>
          </div>
 <ImageWithFallback 
            src="/images/dyslexia/dyslexia-causes-BrainNeuroTAB-Structural.png"
            alt="Structural differences in the dyslexic brain"
            className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />
          {/* Neural Migration */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Neural Migration & Development
          </h3>
          
          <p className="mb-6 text-slate-700 text-center">Early brain development differences may underlie dyslexia:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex items-start gap-3">
               <svg className="w-5 h-5 text-[#0A9DC4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="text-sm text-slate-700 font-medium">Atypical neuronal migration during fetal development.</span>
            </div>
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex items-start gap-3">
               <svg className="w-5 h-5 text-[#0A9DC4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="text-sm text-slate-700 font-medium">Ectopias (clusters of neurons in unusual locations).</span>
            </div>
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex items-start gap-3">
               <svg className="w-5 h-5 text-[#0A9DC4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="text-sm text-slate-700 font-medium">Differences in cortical organization and layering.</span>
            </div>
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex items-start gap-3">
               <svg className="w-5 h-5 text-[#0A9DC4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="text-sm text-slate-700 font-medium">Altered development of reading-specialized brain circuits.</span>
            </div>
          </div>
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-causes-BrainNeuroTAB-Neural-Mig.png"
            alt="Neural migration and development differences in dyslexia"
            className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />
          {/* Phonological Deficit Hypothesis */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            The Phonological Deficit Hypothesis
          </h3>
          <p className="mb-8 text-slate-700 text-center max-w-2xl mx-auto">
            The most widely accepted explanation for dyslexia is the phonological deficit theory.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            {/* Split Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#0c264d] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <svg className="w-10 h-10 text-[#ffd166] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <h4 className="font-bold text-white text-xl">Core Mechanism</h4>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong className="text-[#0c264d]">Phonological Representations:</strong> Difficulty creating, storing, or accessing mental representations of speech sounds.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong className="text-[#0c264d]">Phoneme Awareness:</strong> Challenges identifying and manipulating individual sounds in words.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong className="text-[#0c264d]">Phonological Memory:</strong> Reduced capacity to hold sound-based information in working memory.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong className="text-[#0c264d]">Rapid Naming:</strong> Slower retrieval of phonological codes from memory.</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Split Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#0A9DC4] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <svg className="w-10 h-10 text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                <h4 className="font-bold text-white text-xl">Neural Basis</h4>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div>Disruption in left-hemisphere language networks.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div>Inefficient neural processing of speech sounds.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div>Weak connections between orthographic (visual) and phonological (sound) systems.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div>Reduced automaticity in phonological processing.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Theories */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Additional Theories
          </h3>
          <p className="mb-8 text-slate-700 text-center max-w-2xl mx-auto">
            While phonological deficits are central, other theories propose additional mechanisms:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border-t-4 border-[#0c264d] rounded-xl p-6 shadow-md flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 mx-auto">
                <svg className="w-6 h-6 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-3 text-center">Double-Deficit</h4>
              <ul className="space-y-2 text-slate-700 text-sm flex-grow">
                <li className="flex items-start gap-2"><span className="text-[#0c264d] font-bold mt-0.5">•</span> Proposes two independent deficits: phonological awareness AND rapid automatized naming.</li>
                <li className="flex items-start gap-2"><span className="text-[#0c264d] font-bold mt-0.5">•</span> Individuals with both deficits have more severe reading difficulties.</li>
                <li className="flex items-start gap-2"><span className="text-[#0c264d] font-bold mt-0.5">•</span> Explains why some individuals respond differently to intervention.</li>
              </ul>
            </div>

            <div className="bg-white border-t-4 border-[#ffd166] rounded-xl p-6 shadow-md flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 mx-auto">
                <svg className="w-6 h-6 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-3 text-center">Magnocellular</h4>
              <ul className="space-y-2 text-slate-700 text-sm flex-grow">
                <li className="flex items-start gap-2"><span className="text-[#ffd166] font-bold mt-0.5">•</span> Dysfunction in magnocellular pathways affects visual processing during reading.</li>
                <li className="flex items-start gap-2"><span className="text-[#ffd166] font-bold mt-0.5">•</span> Reduced ability to process multiple letters simultaneously.</li>
                <li className="flex items-start gap-2"><span className="text-[#ffd166] font-bold mt-0.5">•</span> More controversial; may explain difficulties in some but not all individuals.</li>
              </ul>
            </div>

            <div className="bg-white border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 mx-auto">
                <svg className="w-6 h-6 text-[#0A9DC4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-3 text-center">Cerebellar</h4>
              <ul className="space-y-2 text-slate-700 text-sm flex-grow">
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Proposes cerebellar dysfunction affects skill automatization.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Reading requires the automatization of many sub-skills.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Limited empirical support as a primary cause but may contribute in some cases.</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end my-8 clear-both">
            <button 
              onClick={() => setCurrentArticle?.('dyslexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
            >
              <span className="text-lg">←</span>
              All About Dyslexia
            </button>
          </div>

          {/* REFERENCES SECTION */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* Empty Cited Studies Section left as a structural placeholder per standard */}
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed italic" style={{ textIndent: 0 }}>
                <p>No explicit statistical claims or empirical studies directly cited in the text of this section.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
                <li>Bosse, M. L., Tainturier, M. J., & Valdois, S. (2007). "Developmental dyslexia: The visual attention span deficit hypothesis." <em>Cognition</em>.</li>
                <li>Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <em>Science</em>.</li>
                <li>Galaburda, A. M. (1993). "Neurology of developmental dyslexia." <em>Current Opinion in Neurobiology</em>.</li>
                <li>Galaburda, A. M., & Cestnick, L. (2003). "Dislexia del desarrollo." <em>Revista de Neurología</em>.</li>
                <li>Galaburda, A. M., Sherman, G. F., Rosen, G. D., Aboitiz, F., & Geschwind, N. (1985). "Developmental dyslexia: Four consecutive patients with cortical anomalies." <em>Annals of Neurology</em>.</li>
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>McCandliss, B. D., Cohen, L., & Dehaene, S. (2003). "The visual word form area: Expertise for reading in the fusiform gyrus." <em>Trends in Cognitive Sciences</em>.</li>
                <li>Nicolson, R. I., Fawcett, A. J., & Dean, P. (2001). "Developmental dyslexia: The cerebellar deficit hypothesis." <em>Trends in Neurosciences</em>.</li>
                <li>Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>.</li>
                <li>Norton, E. S., Beach, S. D., & Gabrieli, J. D. (2015). "Neurobiology of dyslexia." <em>Current Opinion in Neurobiology</em>.</li>
                <li>Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>.</li>
                <li>Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <em>Annual Review of Clinical Psychology</em>.</li>
                <li>Pugh, K. R., Mencl, W. E., Jenner, A. R., et al. (2001). "Neurobiological studies of reading and reading disability." <em>Journal of Communication Disorders</em>.</li>
                <li>Ramus, F. (2003). "Developmental dyslexia: Specific phonological deficit or general sensorimotor dysfunction?" <em>Current Opinion in Neurobiology</em>.</li>
                <li>Ramus, F., & Szenkovits, G. (2008). "What phonological deficit?" <em>Quarterly Journal of Experimental Psychology</em>.</li>
                <li>Ramus, F., Pidgeon, E., & Frith, U. (2003). "The relationship between motor control and phonology in dyslexic children." <em>Journal of Child Psychology and Psychiatry</em>.</li>
                <li>Richards, T. L., & Berninger, V. W. (2008). "Abnormal fMRI connectivity in children with dyslexia during a phoneme task: Before but not after treatment." <em>Journal of Neurolinguistics</em>.</li>
                <li>Richlan, F., Kronbichler, M., & Wimmer, H. (2011). "Meta-analyzing brain dysfunctions in dyslexic children and adults." <em>NeuroImage</em>.</li>
                <li>Shaywitz, B. A., Shaywitz, S. E., Pugh, K. R., et al. (2002). "Disruption of posterior brain systems for reading in children with developmental dyslexia." <em>Biological Psychiatry</em>.</li>
                <li>Shaywitz, S. E., Shaywitz, B. A., Fulbright, R. K., et al. (2003). "Neural systems for compensation and persistence: Young adult outcome of childhood reading disability." <em>Biological Psychiatry</em>.</li>
                <li>Silani, G., Frith, U., Demonet, J. F., et al. (2005). "Brain abnormalities underlying altered activation in dyslexia: A voxel based morphometry study." <em>Brain</em>.</li>
                <li>Snowling, M. J. (2000). <em>Dyslexia</em> (2nd ed.). Blackwell Publishing.</li>
                <li>Stein, J., & Walsh, V. (1997). "To see but not to read; the magnocellular theory of dyslexia." <em>Trends in Neurosciences</em>.</li>
                <li>Swan, D., & Goswami, U. (1997). "Phonological awareness deficits in developmental dyslexia and the phonological representations hypothesis." <em>Journal of Experimental Child Psychology</em>.</li>
                <li>Vandermosten, M., Boets, B., Wouters, J., & Ghesquière, P. (2012). "A qualitative and quantitative review of diffusion tensor imaging studies in reading and dyslexia." <em>Neuroscience & Biobehavioral Reviews</em>.</li>
                <li>Vellutino, F. R., Fletcher, J. M., Snowling, M. J., & Scanlon, D. M. (2004). "Specific reading disability (dyslexia): What have we learned in the past four decades?" <em>Journal of Child Psychology and Psychiatry</em>.</li>
                <li>Wagner, R. K., & Torgesen, J. K. (1987). "The nature of phonological processing and its causal role in the acquisition of reading skills." <em>Psychological Bulletin</em>.</li>
                <li>Wolf, M., & Bowers, P. G. (1999). "The double-deficit hypothesis for the developmental dyslexias." <em>Journal of Educational Psychology</em>.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}