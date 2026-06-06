import React from 'react';

interface DyslexiaCausesRiskProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCausesRisk({ setCurrentArticle }: DyslexiaCausesRiskProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      {/* Header and Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        {/* Main Title - Unbolded */}
        <h2 className="text-3xl font-spartan text-[#0c264d]">Dyslexia: Causes & Origins</h2>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2"
        >
          <span>←</span> All About Dyslexia
        </button>
      </div>
      
      <div className="prose max-w-none animate-fadeIn">

        {/* Intro Paragraph */}
        <p className="mb-6 text-slate-700 leading-relaxed">
          Dyslexia is a neurodevelopmental condition with strong genetic and neurobiological underpinnings. Research over the past several decades has revealed that dyslexia results from differences in brain structure and function, particularly in regions involved in reading and language processing. Understanding the origins of dyslexia helps demystify the condition and inform effective interventions.
        </p>

        {/* INTERACTIVE TABS (Route-based) */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-causes-brain')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm"
          >
            Brain & Neurobiology
          </button>
          
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-causes-genetics')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm"
          >
            Genetics
          </button>
          
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-causes-risk')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#0A9DC4] text-white shadow-md"
          >
            Risk Factors
          </button>
        </div>

        {/* PAGE CONTENT */}
        <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d]">Environmental and Risk Factors</h3>
        <p className="mb-6 text-slate-700">
          While dyslexia is primarily neurobiological and genetic, environmental factors play a role:<sup className="text-green-600 font-bold ml-0.5">1</sup>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-2 text-[#0A9DC4] border-b border-gray-100 pb-1">Quality of Instruction</h4>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li>Inadequate early reading instruction can exacerbate genetic risk.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
              <li>High-quality, explicit phonics instruction can partially compensate for phonological deficits.</li>
              <li>Early intervention can significantly improve outcomes.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-[#0A9DC4] border-b border-gray-100 pb-1">Language Environment</h4>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li>Limited exposure to rich language and books in early childhood.</li>
              <li>Lack of phonological awareness activities (rhyming games, sound play).</li>
              <li>Socioeconomic factors affecting access to books and educational resources.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-[#0A9DC4] border-b border-gray-100 pb-1">Language Orthography</h4>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li><strong>Deep vs. shallow orthographies:</strong> Dyslexia manifests differently across languages.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
              <li><strong>English complexity:</strong> English has particularly complex letter-sound rules, making it harder for individuals with dyslexia.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
              <li><strong>Transparent languages:</strong> Dyslexia in languages like Italian or Finnish may be less severe but still present.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-[#0A9DC4] border-b border-gray-100 pb-1">Prenatal and Perinatal Factors</h4>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li>Some studies suggest associations with prenatal exposure to certain substances.<sup className="text-green-600 font-bold ml-0.5">8</sup></li>
              <li>Premature birth and low birth weight show modest associations.<sup className="text-green-600 font-bold ml-0.5">9</sup></li>
              <li className="italic">These factors likely interact with genetic vulnerabilities rather than causing dyslexia independently.</li>
            </ul>
          </div>
        </div>

        {/* MYTH BUSTING BOX */}
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 text-red-800 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            What Does NOT Cause Dyslexia
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
              <p className="text-sm text-slate-800"><strong>Vision problems:</strong> Dyslexia is not caused by visual deficits or eye problems.<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
              <p className="text-sm text-slate-800"><strong>Seeing words backwards:</strong> This is not the cause; dyslexia is a language-based disorder.<sup className="text-green-600 font-bold ml-0.5">11</sup></p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
              <p className="text-sm text-slate-800"><strong>Low intelligence:</strong> Dyslexia occurs across all intelligence levels.<sup className="text-green-600 font-bold ml-0.5">12</sup></p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
              <p className="text-sm text-slate-800"><strong>Lack of effort:</strong> Dyslexia is neurological, not motivational.<sup className="text-green-600 font-bold ml-0.5">13</sup></p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
              <p className="text-sm text-slate-800"><strong>Poor parenting/teaching:</strong> While instruction quality matters, it doesn't cause dyslexia.<sup className="text-green-600 font-bold ml-0.5">14</sup></p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
              <p className="text-sm text-slate-800"><strong>Too much screen time:</strong> No evidence that technology causes dyslexia.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Integrative Understanding</h3>
        <p className="mb-4 text-slate-700">The current scientific consensus views dyslexia as a multifactorial condition:<sup className="text-green-600 font-bold ml-0.5">15</sup></p>
        <div className="bg-[#f0f9ff] p-5 rounded-lg border-l-4 border-[#0A9DC4] mb-8">
          <h4 className="font-bold mb-2 text-[#0c264d]">Multiple Levels of Causation:</h4>
          <ul className="list-disc ml-5 text-sm space-y-1 text-slate-700">
            <li><strong>Genetic level:</strong> Multiple genes affecting brain development and function.</li>
            <li><strong>Neurobiological level:</strong> Differences in brain structure, connectivity, and activation.</li>
            <li><strong>Cognitive level:</strong> Phonological processing deficits as primary mechanism.</li>
            <li><strong>Behavioral level:</strong> Reading, spelling, and writing difficulties.</li>
            <li><strong>Environmental level:</strong> Instruction quality and language environment influence expression and severity.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-[#0c264d] border-b border-gray-100 pb-2">Implications for Intervention</h3>
            <p className="text-sm text-slate-700 mb-2">Understanding dyslexia's causes informs treatment:<sup className="text-green-600 font-bold ml-0.5">16</sup></p>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
              <li>Targeted phonological training addresses core deficit.</li>
              <li>Early intervention can capitalize on brain plasticity.</li>
              <li>Explicit, systematic instruction compensates for inefficient neural processing.</li>
              <li>Accommodations recognize neurobiological basis and allow demonstration of knowledge.</li>
              <li>Understanding biological basis reduces stigma and blame.<sup className="text-green-600 font-bold ml-0.5">17</sup></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-[#0c264d] border-b border-gray-100 pb-2">Ongoing Research</h3>
            <p className="text-sm text-slate-700 mb-2">Dyslexia research continues to evolve:<sup className="text-green-600 font-bold ml-0.5">18</sup></p>
            <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
              <li>Identifying additional genetic variants and their functions.</li>
              <li>Understanding gene-environment interactions more precisely.</li>
              <li>Mapping neural networks involved in reading with greater detail.</li>
              <li>Investigating brain plasticity and response to intervention.</li>
              <li>Developing biomarkers for early identification.</li>
              <li>Understanding heterogeneity within dyslexia population.<sup className="text-green-600 font-bold ml-0.5">19</sup></li>
            </ul>
          </div>
        </div>

        {/* REFERENCES SECTION (Renumbered 1-19) */}
        <div className="mt-12 pt-6 border-t-2 border-gray-100">
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                <li>Snowling, M. J., & Melby-Lervåg, M. (2016). "Oral language deficits in familial dyslexia: A meta-analysis and review." <em>Psychological Bulletin</em>, 142(5), 498-545.</li>
                <li>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</li>
                <li>Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <em>British Journal of Educational Psychology</em>, 81(1), 1-23.</li>
                <li>Noble, K. G., Wolmetz, M. E., Ochs, L. G., Farah, M. J., & McCandliss, B. D. (2006). "Brain–behavior relationships in reading acquisition are modulated by socioeconomic factors." <em>Developmental Science</em>, 9(6), 642-654.</li>
                <li>Ziegler, J. C., & Goswami, U. (2005). "Reading acquisition, developmental dyslexia, and skilled reading across languages: A psycholinguistic grain size theory." <em>Psychological Bulletin</em>, 131(1), 3-29.</li>
                <li>Share, D. L. (2008). "On the Anglocentricities of current reading research and practice: The perils of overreliance on an outlier orthography." <em>Psychological Bulletin</em>, 134(4), 584-615.</li>
                <li>Paulesu, E., Démonet, J. F., Fazio, F., et al. (2001). "Dyslexia: Cultural diversity and biological unity." <em>Science</em>, 291(5511), 2165-2167.</li>
                <li>Espy, K. A., Molfese, D. L., Molfese, V. J., & Modglin, A. (2004). "Development of auditory event-related potentials in young children and relations to word-level reading abilities at age 8 years." <em>Annals of Dyslexia</em>, 54(1), 9-38.</li>
                <li>Litt, J., Taylor, H. G., Klein, N., & Hack, M. (2005). "Learning disabilities in children with very low birthweight: Prevalence, neuropsychological correlates, and educational interventions." <em>Journal of Learning Disabilities</em>, 38(2), 130-141.</li>
                <li>Vellutino, F. R., Fletcher, J. M., Snowling, M. J., & Scanlon, D. M. (2004). "Specific reading disability (dyslexia): What have we learned in the past four decades?" <em>Journal of Child Psychology and Psychiatry</em>, 45(1), 2-40.</li>
                <li>Fischer, F. W., Liberman, I. Y., & Shankweiler, D. (1978). "Reading reversals and developmental dyslexia: A further study." <em>Cortex</em>, 14(4), 496-510.</li>
                <li>Ferrer, E., Shaywitz, B. A., Holahan, J. M., Marchione, K., & Shaywitz, S. E. (2010). "Uncoupling of reading and IQ over time: Empirical evidence for a definition of dyslexia." <em>Psychological Science</em>, 21(1), 93-101.</li>
                <li>Shaywitz, S. (2003). <em>Overcoming dyslexia</em>. Knopf.</li>
                <li>Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <em>Journal of Child Psychology and Psychiatry</em>, 53(5), 593-607.</li>
                <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</li>
                <li>Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <em>Science</em>, 325(5938), 280-283.</li>
                <li>McNulty, M. A. (2003). "Dyslexia and the life course." <em>Journal of Learning Disabilities</em>, 36(4), 363-381.</li>
                <li>Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <em>Annual Review of Clinical Psychology</em>, 11, 283-307.</li>
                <li>Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>, 63, 427-452.</li>
              </ol>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}