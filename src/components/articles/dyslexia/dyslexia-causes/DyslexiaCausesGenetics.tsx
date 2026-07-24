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

          <div>
          <h2 className="text-[#0c264d] mb-4 text-2xl font-bold clear-both">Introduction to Genetics in Dyslexia</h2>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-causes-geneticsTAB-Intro-gen.png"
            alt="Child Reading under Genetics tab"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          </div>


          <p className="mb-6 text-slate-700 leading-relaxed">
            Dyslexia is a neurodevelopmental condition with strong genetic and neurobiological underpinnings. Research over the past several decades has revealed that dyslexia results from differences in brain structure and function, particularly in regions involved in reading and language processing. Understanding the origins of dyslexia helps demystify the condition and inform effective interventions.
          </p>

          <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d]">Genetic Foundations</h3>
          <p className="mb-6 text-slate-700">
            Dyslexia has a strong hereditary component, with genetics playing a substantial role:<sup className="text-green-600 font-bold ml-0.5">1</sup>
          </p>

          <h4 className="text-lg font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Heritability Evidence</h4>
          <ul className="list-disc ml-6 space-y-3 text-slate-700 mb-8">
            <li><strong>Family aggregation:</strong> Dyslexia runs in families—children with a parent with dyslexia have a 40-60% chance of having dyslexia themselves.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
            <li><strong>Twin studies:</strong> Identical twins show 68% concordance for reading disability, compared to 38% for fraternal twins.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li><strong>Heritability estimates:</strong> Genetic factors account for 40-70% of individual differences in reading ability.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
            <li><strong>Multigenerational patterns:</strong> Reading difficulties often span multiple generations within families.</li>
          </ul>

          <h4 className="text-lg font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Candidate Genes</h4>
          <p className="mb-3 text-slate-700">Researchers have identified several genes associated with dyslexia and reading ability:<sup className="text-green-600 font-bold ml-0.5">5</sup></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <strong className="text-[#0c264d]">DYX1C1</strong>
              <p className="text-sm mt-1 text-slate-700">Involved in neuronal migration during brain development.<sup className="text-green-600 font-bold ml-0.5">6</sup></p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <strong className="text-[#0c264d]">DCDC2</strong>
              <p className="text-sm mt-1 text-slate-700">Affects neuronal migration and brain structure; variants associated with reading and spelling.<sup className="text-green-600 font-bold ml-0.5">7</sup></p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <strong className="text-[#0c264d]">KIAA0319</strong>
              <p className="text-sm mt-1 text-slate-700">Plays role in neuronal migration; influences brain organization for reading.<sup className="text-green-600 font-bold ml-0.5">8</sup></p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <strong className="text-[#0c264d]">ROBO1</strong>
              <p className="text-sm mt-1 text-slate-700">Involved in axon guidance and brain connectivity.<sup className="text-green-600 font-bold ml-0.5">9</sup></p>
            </div>
          </div>
          <p className="text-slate-700 italic text-sm mb-8">Additional genes: Many other genes have been implicated, including those affecting phonological processing and rapid naming.<sup className="text-green-600 font-bold ml-0.5">10</sup></p>

          <h4 className="text-lg font-bold mb-3 text-[#0A9DC4] border-b border-gray-100 pb-2">Complex Genetic Architecture</h4>
          <p className="mb-3 text-slate-700">Dyslexia's genetics are complex rather than straightforward:<sup className="text-green-600 font-bold ml-0.5">11</sup></p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700 mb-8">
            <li><strong>Polygenic:</strong> Multiple genes contribute, each with small effects.</li>
            <li><strong>Heterogeneity:</strong> Different genetic variations can lead to similar reading difficulties.</li>
            <li><strong>Gene-environment interaction:</strong> Genetic risk interacts with environmental factors like instruction quality.<sup className="text-green-600 font-bold ml-0.5">12</sup></li>
            <li><strong>Quantitative trait:</strong> Reading ability exists on a continuum; genes influence where individuals fall on this spectrum.<sup className="text-green-600 font-bold ml-0.5">13</sup></li>
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

          {/* REFERENCES SECTION */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Fisher, S. E., & DeFries, J. C. (2002). "Developmental dyslexia: Genetic dissection of a complex cognitive trait." <em>Nature Reviews Neuroscience</em>, 3(10), 767-780.</p>
                <p>2. Pennington, B. F., & Lefly, D. L. (2001). "Early reading development in children at family risk for dyslexia." <em>Child Development</em>, 72(3), 816-833.</p>
                <p>3. DeFries, J. C., & Alarcón, M. (1996). "Genetics of specific reading disability." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 2(1), 39-47.</p>
                <p>4. Byrne, B., Wadsworth, S., Corley, R., et al. (2005). "Longitudinal twin study of early literacy development: Preschool and kindergarten phases." <em>Scientific Studies of Reading</em>, 9(3), 219-235.</p>
                <p>5. Scerri, T. S., & Schulte-Körne, G. (2010). "Genetics of developmental dyslexia." <em>European Child & Adolescent Psychiatry</em>, 19(3), 179-197.</p>
                <p>6. Taipale, M., Kaminen, N., Nopola-Hemmi, J., et al. (2003). "A candidate gene for developmental dyslexia encodes a nuclear tetratricopeptide repeat domain protein dynamically regulated in brain." <em>Proceedings of the National Academy of Sciences</em>, 100(20), 11553-11558.</p>
                <p>7. Meng, H., Smith, S. D., Hager, K., et al. (2005). "DCDC2 is associated with reading disability and modulates neuronal development in the brain." <em>Proceedings of the National Academy of Sciences</em>, 102(47), 17053-17058.</p>
                <p>8. Paracchini, S., Steer, C. D., Buckingham, L. L., et al. (2008). "Association of the KIAA0319 dyslexia susceptibility gene with reading skills in the general population." <em>American Journal Psychiatry</em>, 165(12), 1576-1584.</p>
                <p>9. Hannula-Jouppi, K., Kaminen-Ahola, N., Taipale, M., et al. (2005). "The axon guidance receptor gene ROBO1 is a candidate gene for developmental dyslexia." <em>PLoS Genetics</em>, 1(4), e50.</p>
                <p>10. Carrion-Castillo, A., Franke, B., & Fisher, S. E. (2013). "Molecular genetics of dyslexia: An overview." <em>Dyslexia</em>, 19(4), 214-240.</p>
                <p>11. Galaburda, A. M., LoTurco, J., Ramus, F., Fitch, R. H., & Rosen, G. D. (2006). "From genes to behavior in developmental dyslexia." <em>Nature Neuroscience</em>, 9(10), 1213-1217.</p>
                <p>12. Pennington, B. F., & Bishop, D. V. (2009). "Relations among speech, language, and reading disorders." <em>Annual Review of Psychology</em>, 60, 283-306.</p>
                <p>13. Shaywitz, S. E., Escobar, M. D., Shaywitz, B. A., Fletcher, J. M., & Makuch, R. (1992). "Evidence that dyslexia may represent the lower tail of a normal distribution of reading ability." <em>New England Journal of Medicine</em>, 326(3), 145-150.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}