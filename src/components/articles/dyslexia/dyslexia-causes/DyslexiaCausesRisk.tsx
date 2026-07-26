import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface DyslexiaCausesRiskProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCausesRisk({ setCurrentArticle }: DyslexiaCausesRiskProps) {
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
      
      <Tabs defaultValue="risk" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="brain" 
            onClick={() => setCurrentArticle?.('dyslexia-causes-brain')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
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
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Risk Factors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="risk" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Risk Factors & Environment
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-causes-Risk-TAB-chart.png"
              alt="Structural differences and risk factors in the dyslexic brain"
              className="block mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-sm border border-slate-200 bg-white"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Dyslexia is a genetic, neurobiological condition resulting from differences in the brain's reading and language centers. Understanding these origins helps demystify dyslexia and inform effective interventions.
            </p>
          </div>

          {/* Environmental and Risk Factors */}
          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Environmental & Risk Factors
          </h3>
          <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
            While dyslexia is primarily genetic, its severity is heavily shaped by environmental factors. A rich language environment and early, explicit instruction can significantly improve outcomes. Conversely, navigating languages with complex spelling rules (like English) or experiencing compounding early birth factors can exacerbate these underlying genetic vulnerabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Quality of Instruction */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4">Quality of Instruction</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full flex-grow text-left">
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Inadequate early reading instruction can exacerbate genetic risk.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> High-quality, explicit phonics instruction can partially compensate for phonological deficits.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Early intervention can significantly improve outcomes.</li>
              </ul>
            </div>

            {/* Language Environment */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4">Language Environment</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full flex-grow text-left">
                <li className="flex items-start gap-2"><span className="text-[#ffd166] font-bold mt-0.5">•</span> Limited exposure to rich language and books in early childhood.</li>
                <li className="flex items-start gap-2"><span className="text-[#ffd166] font-bold mt-0.5">•</span> Lack of phonological awareness activities (e.g., rhyming games, sound play).</li>
                <li className="flex items-start gap-2"><span className="text-[#ffd166] font-bold mt-0.5">•</span> Socioeconomic factors affecting access to books and educational resources.</li>
              </ul>
            </div>

            {/* Language Orthography */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4">Language Orthography</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full flex-grow text-left">
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> <strong>Deep vs. Shallow:</strong> Dyslexia manifests differently depending on the language structure.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> <strong>English Complexity:</strong> English has particularly complex, irregular letter-sound rules.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> <strong>Transparent Languages:</strong> Dyslexia in languages like Italian or Finnish is often less severe.</li>
              </ul>
            </div>

            {/* Prenatal and Perinatal Factors */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4">Pre- & Perinatal Factors</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full flex-grow text-left">
                <li className="flex items-start gap-2"><span className="text-[#2abcd4] font-bold mt-0.5">•</span> Some studies suggest associations with prenatal exposure to certain substances.</li>
                <li className="flex items-start gap-2"><span className="text-[#2abcd4] font-bold mt-0.5">•</span> Premature birth and low birth weight show modest associations.</li>
                <li className="flex items-start gap-2 text-slate-500 italic"><span className="text-[#2abcd4] font-bold mt-0.5 not-italic">•</span> These factors likely interact with genetic vulnerabilities rather than causing dyslexia independently.</li>
              </ul>
            </div>

          </div>

          {/* MYTH BUSTING BOX */}
          <div className="bg-red-50 border-t-4 border-red-500 rounded-xl p-6 mb-12 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-red-800 flex items-center gap-3 justify-center md:justify-start">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              What Does NOT Cause Dyslexia
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Vision problems:</strong> Dyslexia is not caused by visual deficits or eye problems.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Seeing backwards:</strong> This is not the cause; dyslexia is a language-based disorder.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Low intelligence:</strong> Dyslexia occurs across all intelligence levels.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Lack of effort:</strong> Dyslexia is neurological, not motivational.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Poor parenting/teaching:</strong> While instruction quality matters, it doesn't cause dyslexia.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Too much screen time:</strong> No evidence that technology causes dyslexia.</p>
              </div>
            </div>
          </div>

          {/* Integrative Understanding */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Integrative Understanding
          </h3>
          <p className="mb-6 text-slate-700 text-center">The current scientific consensus views dyslexia as a multifactorial condition:</p>
          
          <div className="bg-[#0c264d] p-6 rounded-xl shadow-md mb-12">
            <h4 className="font-bold mb-4 text-[#ffd166] text-center text-lg">Multiple Levels of Causation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <strong className="text-white block mb-1">Genetic Level:</strong>
                <span className="text-slate-300 text-sm">Multiple genes affecting brain development and function.</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <strong className="text-white block mb-1">Neurobiological Level:</strong>
                <span className="text-slate-300 text-sm">Differences in brain structure, connectivity, and activation.</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <strong className="text-white block mb-1">Cognitive Level:</strong>
                <span className="text-slate-300 text-sm">Phonological processing deficits as the primary mechanism.</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <strong className="text-white block mb-1">Behavioral Level:</strong>
                <span className="text-slate-300 text-sm">Reading, spelling, and writing difficulties.</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20 sm:col-span-2 lg:col-span-1">
                <strong className="text-white block mb-1">Environmental Level:</strong>
                <span className="text-slate-300 text-sm">Instruction quality and language environment influence expression and severity.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Implications */}
            <div className="bg-white border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[#0c264d] text-center">Implications for Intervention</h3>
              <p className="text-sm text-slate-700 mb-4 text-center">Understanding dyslexia's causes informs treatment:</p>
              <ul className="space-y-3 text-sm text-slate-700 flex-grow">
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#0A9DC4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Targeted phonological training addresses the core deficit.</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#0A9DC4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Early intervention can capitalize on natural brain plasticity.</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#0A9DC4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Explicit instruction compensates for inefficient neural processing.</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#0A9DC4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Accommodations recognize the neurobiological basis.</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#0A9DC4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Understanding the biological basis greatly reduces stigma.</li>
              </ul>
            </div>

            {/* Research */}
            <div className="bg-white border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[#0c264d] text-center">Ongoing Research</h3>
              <p className="text-sm text-slate-700 mb-4 text-center">Dyslexia research continues to rapidly evolve:</p>
              <ul className="space-y-3 text-sm text-slate-700 flex-grow">
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#2abcd4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Identifying additional genetic variants and their functions.</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#2abcd4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Understanding gene-environment interactions more precisely.</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#2abcd4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Mapping neural networks involved in reading with greater detail.</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#2abcd4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Investigating brain plasticity and response to intervention.</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-[#2abcd4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Developing biomarkers for much earlier clinical identification.</li>
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
                <li>Espy, K. A., Molfese, D. L., Molfese, V. J., & Modglin, A. (2004). "Development of auditory event-related potentials in young children and relations to word-level reading abilities at age 8 years." <em>Annals of Dyslexia</em>. https://doi.org/10.1007/s11881-004-0002-3</li>
                <li>Ferrer, E., Shaywitz, B. A., Holahan, J. M., Marchione, K., & Shaywitz, S. E. (2010). "Uncoupling of reading and IQ over time: Empirical evidence for a definition of dyslexia." <em>Psychological Science</em>. https://doi.org/10.1177/0956797609354084</li>
                <li>Fischer, F. W., Liberman, I. Y., & Shankweiler, D. (1978). "Reading reversals and developmental dyslexia: A further study." <em>Cortex</em>. https://doi.org/10.1016/S0010-9452(78)80026-X</li>
                <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</li>
                <li>Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <em>Science</em>. https://doi.org/10.1126/science.1171999</li>
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>Litt, J., Taylor, H. G., Klein, N., & Hack, M. (2005). "Learning disabilities in children with very low birthweight: Prevalence, neuropsychological correlates, and educational interventions." <em>Journal of Learning Disabilities</em>. https://doi.org/10.1177/00222194050380020301</li>
                <li>McNulty, M. A. (2003). "Dyslexia and the life course." <em>Journal of Learning Disabilities</em>. https://doi.org/10.1177/00222194030360040701</li>
                <li>Noble, K. G., Wolmetz, M. E., Ochs, L. G., Farah, M. J., & McCandliss, B. D. (2006). "Brain–behavior relationships in reading acquisition are modulated by socioeconomic factors." <em>Developmental Science</em>. https://doi.org/10.1111/j.1467-7687.2006.00542.x</li>
                <li>Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>. https://doi.org/10.1146/annurev-psych-120710-100431</li>
                <li>Paulesu, E., Démonet, J. F., Fazio, F., et al. (2001). "Dyslexia: Cultural diversity and biological unity." <em>Science</em>. https://doi.org/10.1126/science.1057179</li>
                <li>Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <em>Annual Review of Clinical Psychology</em>. https://doi.org/10.1146/annurev-clinpsy-032814-112842</li>
                <li>Share, D. L. (2008). "On the Anglocentricities of current reading research and practice: The perils of overreliance on an outlier orthography." <em>Psychological Bulletin</em>. https://doi.org/10.1037/a0013066</li>
                <li>Shaywitz, S. (2003). <em>Overcoming dyslexia</em>. Knopf.</li>
                <li>Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <em>British Journal of Educational Psychology</em>. https://doi.org/10.1111/j.2044-8279.2010.02014.x</li>
                <li>Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <em>Journal of Child Psychology and Psychiatry</em>. https://doi.org/10.1111/j.1469-7610.2011.02495.x</li>
                <li>Snowling, M. J., & Melby-Lervåg, M. (2016). "Oral language deficits in familial dyslexia: A meta-analysis and review." <em>Psychological Bulletin</em>. https://doi.org/10.1037/bul0000037</li>
                <li>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In <em>The voice of evidence in reading research</em>. Paul H. Brookes.</li>
                <li>Vellutino, F. R., Fletcher, J. M., Snowling, M. J., & Scanlon, D. M. (2004). "Specific reading disability (dyslexia): What have we learned in the past four decades?" <em>Journal of Child Psychology and Psychiatry</em>. https://doi.org/10.1046/j.0021-9630.2003.00305.x</li>
                <li>Ziegler, J. C., & Goswami, U. (2005). "Reading acquisition, developmental dyslexia, and skilled reading across languages: A psycholinguistic grain size theory." <em>Psychological Bulletin</em>. https://doi.org/10.1037/0033-2909.131.1.3</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}