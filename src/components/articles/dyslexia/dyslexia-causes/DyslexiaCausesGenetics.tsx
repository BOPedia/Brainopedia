import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface DyslexiaCausesGeneticsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCausesGenetics({ setCurrentArticle }: DyslexiaCausesGeneticsProps) {
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
      
      <Tabs defaultValue="genetics" className="w-full">
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

        <TabsContent value="genetics" className="animate-fadeIn">

          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Genetic Foundations
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-causes-geneticsTAB-Intro-gen.webp"
              alt="Child Reading under Genetics tab"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Dyslexia is a neurodevelopmental condition with strong genetic and neurobiological underpinnings. Research over the past several decades has revealed that dyslexia results from differences in brain structure and function, particularly in regions involved in reading and language processing. Dyslexia has a strong hereditary component, with genetics playing a substantial role.
            </p>
          </div>

          {/* Heritability Evidence */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Heritability Evidence
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Family Aggregation</h4>
              <p className="text-sm text-slate-700 flex-grow">
                Dyslexia runs strongly in families. Children who have a parent with dyslexia have a 40-60% chance of having dyslexia themselves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Twin Studies</h4>
              <p className="text-sm text-slate-700 flex-grow">
                Identical twins show a 68% concordance rate for reading disability, compared to 38% for fraternal twins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Heritability Estimates</h4>
              <p className="text-sm text-slate-700 flex-grow">
                Genetic factors account for 40-70% of the individual differences seen in reading ability across the population.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Multigenerational Patterns</h4>
              <p className="text-sm text-slate-700 flex-grow">
                Reading difficulties and learning differences consistently span multiple generations within families.
              </p>
            </div>
          </div>

          {/* Candidate Genes */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Candidate Genes
          </h3>
          <p className="mb-8 text-slate-700 text-center max-w-2xl mx-auto">
            Researchers have identified several specific genes strongly associated with dyslexia and reading ability:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-300 border-t-4 border-[#0c264d] rounded-xl p-5 shadow-sm">
              <strong className="text-[#0c264d] text-lg block mb-2">DYX1C1</strong>
              <p className="text-sm text-slate-700">Heavily involved in neuronal migration during early brain development.</p>
            </div>
            <div className="bg-gray-300 border-t-4 border-[#ffd166] rounded-xl p-5 shadow-sm">
              <strong className="text-[#0c264d] text-lg block mb-2">DCDC2</strong>
              <p className="text-sm text-slate-700">Affects neuronal migration and brain structure; variants are highly associated with reading and spelling outcomes.</p>
            </div>
            <div className="bg-gray-300 border-t-4 border-[#0A9DC4] rounded-xl p-5 shadow-sm">
              <strong className="text-[#0c264d] text-lg block mb-2">KIAA0319</strong>
              <p className="text-sm text-slate-700">Plays a critical role in neuronal migration and directly influences brain organization for reading.</p>
            </div>
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-5 shadow-sm">
              <strong className="text-[#0c264d] text-lg block mb-2">ROBO1</strong>
              <p className="text-sm text-slate-700">Involved in axon guidance and overarching brain connectivity.</p>
            </div>
          </div>

          <div className="bg-[#0c264d] border-l-4 border-[#ffd166] p-5 rounded-r-lg mb-12 shadow-sm">
            <p className="text-sm text-slate-200 flex items-start gap-3">
              <svg className="w-5 h-5 text-[#ffd166] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span><strong>Additional Genes:</strong> Many other genes have been implicated, including those specifically affecting phonological processing and rapid naming speeds.</span>
            </p>
          </div>

          {/* Complex Genetic Architecture */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Complex Genetic Architecture
          </h3>
          <p className="mb-6 text-slate-700 text-center max-w-2xl mx-auto">
            Dyslexia's genetics are deeply complex and multifactorial rather than straightforward:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm">
                <span className="text-[#ffd166] font-bold">1</span>
              </div>
              <div>
                <strong className="text-[#0c264d] block mb-1">Polygenic</strong>
                <p className="text-sm text-slate-700">Multiple genes contribute simultaneously, each with relatively small individual effects.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm">
                <span className="text-[#0c264d] font-bold">2</span>
              </div>
              <div>
                <strong className="text-[#0c264d] block mb-1">Heterogeneity</strong>
                <p className="text-sm text-slate-700">Different genetic variations across individuals can lead to very similar reading difficulties.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <strong className="text-[#0c264d] block mb-1">Gene-Environment Interaction</strong>
                <p className="text-sm text-slate-700">Underlying genetic risk heavily interacts with environmental factors like instructional quality.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <strong className="text-[#0c264d] block mb-1">Quantitative Trait</strong>
                <p className="text-sm text-slate-700">Reading ability exists on a continuum; genes influence where individuals fall on this spectrum.</p>
              </div>
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
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed italic" style={{ textIndent: 0 }}>
                <p>No explicit statistical claims or empirical studies directly cited in the text of this section.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing. https://doi.org/10.1176/appi.books.9780890425787</p>
                <p>Byrne, B., et al. (2005). "Longitudinal twin study of early literacy development: Preschool and kindergarten phases." <i>Scientific Studies of Reading</i>. https://doi.org/10.1207/s1532799xssr0903_3</p>
                <p>Carrion-Castillo, A., et al. (2013). "Molecular genetics of dyslexia: An overview." <i>Dyslexia</i>. https://doi.org/10.1002/dys.1464</p>
                <p>DeFries, J. C., & Alarcón, M. (1996). "Genetics of specific reading disability." <i>Mental Retardation and Developmental Disabilities Research Reviews</i>. https://doi.org/10.1002/(SICI)1098-2779(1996)2:1%3C39::AID-MRDD8%3E3.0.CO;2-H</p>
                <p>Fisher, S. E., & DeFries, J. C. (2002). "Developmental dyslexia: Genetic dissection of a complex cognitive trait." <i>Nature Reviews Neuroscience</i>. https://doi.org/10.1038/nrn936</p>
                <p>Galaburda, A. M., et al. (2006). "From genes to behavior in developmental dyslexia." <i>Nature Neuroscience</i>. https://doi.org/10.1038/nn1772</p>
                <p>Hannula-Jouppi, K., et al. (2005). "The axon guidance receptor gene ROBO1 is a candidate gene for developmental dyslexia." <i>PLoS Genetics</i>. https://doi.org/10.1371/journal.pgen.0010050</p>
                <p>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>. https://dyslexiaida.org/dyslexia-in-the-classroom/</p>
                <p>Meng, H., et al. (2005). "DCDC2 is associated with reading disability and modulates neuronal development in the brain." <i>Proceedings of the National Academy of Sciences</i>. https://doi.org/10.1073/pnas.0508591102</p>
                <p>Paracchini, S., et al. (2008). "Association of the KIAA0319 dyslexia susceptibility gene with reading skills in the general population." <i>American Journal of Psychiatry</i>. https://doi.org/10.1176/appi.ajp.2008.07121872</p>
                <p>Pennington, B. F., & Bishop, D. V. (2009). "Relations among speech, language, and reading disorders." <i>Annual Review of Psychology</i>. https://doi.org/10.1146/annurev.psych.60.110707.163548</p>
                <p>Pennington, B. F., & Lefly, D. L. (2001). "Early reading development in children at family risk for dyslexia." <i>Child Development</i>. https://doi.org/10.1111/1467-8624.00317</p>
                <p>Scerri, T. S., & Schulte-Körne, G. (2010). "Genetics of developmental dyslexia." <i>European Child & Adolescent Psychiatry</i>. https://doi.org/10.1007/s00787-009-0081-0</p>
                <p>Shaywitz, S. E., et al. (1992). "Evidence that dyslexia may represent the lower tail of a normal distribution of reading ability." <i>New England Journal of Medicine</i>. https://doi.org/10.1056/NEJM199201163260303</p>
                <p>Taipale, M., et al. (2003). "A candidate gene for developmental dyslexia encodes a nuclear tetratricopeptide repeat domain protein dynamically regulated in brain." <i>Proceedings of the National Academy of Sciences</i>. https://doi.org/10.1073/pnas.1833911100</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}