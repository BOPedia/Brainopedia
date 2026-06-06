import React from 'react';

interface DyslexiaCausesGeneticsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCausesGenetics({ setCurrentArticle }: DyslexiaCausesGeneticsProps) {
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
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#0A9DC4] text-white shadow-md"
          >
            Genetics
          </button>
          
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-causes-risk')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm"
          >
            Risk Factors
          </button>
        </div>

        {/* PAGE CONTENT */}
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

        {/* REFERENCES SECTION (Renumbered 1-13) */}
        <div className="mt-12 pt-6 border-t-2 border-gray-100">
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                <li>Fisher, S. E., & DeFries, J. C. (2002). "Developmental dyslexia: Genetic dissection of a complex cognitive trait." <em>Nature Reviews Neuroscience</em>, 3(10), 767-780.</li>
                <li>Pennington, B. F., & Lefly, D. L. (2001). "Early reading development in children at family risk for dyslexia." <em>Child Development</em>, 72(3), 816-833.</li>
                <li>DeFries, J. C., & Alarcón, M. (1996). "Genetics of specific reading disability." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 2(1), 39-47.</li>
                <li>Byrne, B., Wadsworth, S., Corley, R., et al. (2005). "Longitudinal twin study of early literacy development: Preschool and kindergarten phases." <em>Scientific Studies of Reading</em>, 9(3), 219-235.</li>
                <li>Scerri, T. S., & Schulte-Körne, G. (2010). "Genetics of developmental dyslexia." <em>European Child & Adolescent Psychiatry</em>, 19(3), 179-197.</li>
                <li>Taipale, M., Kaminen, N., Nopola-Hemmi, J., et al. (2003). "A candidate gene for developmental dyslexia encodes a nuclear tetratricopeptide repeat domain protein dynamically regulated in brain." <em>Proceedings of the National Academy of Sciences</em>, 100(20), 11553-11558.</li>
                <li>Meng, H., Smith, S. D., Hager, K., et al. (2005). "DCDC2 is associated with reading disability and modulates neuronal development in the brain." <em>Proceedings of the National Academy of Sciences</em>, 102(47), 17053-17058.</li>
                <li>Paracchini, S., Steer, C. D., Buckingham, L. L., et al. (2008). "Association of the KIAA0319 dyslexia susceptibility gene with reading skills in the general population." <em>American Journal Psychiatry</em>, 165(12), 1576-1584.</li>
                <li>Hannula-Jouppi, K., Kaminen-Ahola, N., Taipale, M., et al. (2005). "The axon guidance receptor gene ROBO1 is a candidate gene for developmental dyslexia." <em>PLoS Genetics</em>, 1(4), e50.</li>
                <li>Carrion-Castillo, A., Franke, B., & Fisher, S. E. (2013). "Molecular genetics of dyslexia: An overview." <em>Dyslexia</em>, 19(4), 214-240.</li>
                <li>Galaburda, A. M., LoTurco, J., Ramus, F., Fitch, R. H., & Rosen, G. D. (2006). "From genes to behavior in developmental dyslexia." <em>Nature Neuroscience</em>, 9(10), 1213-1217.</li>
                <li>Pennington, B. F., & Bishop, D. V. (2009). "Relations among speech, language, and reading disorders." <em>Annual Review of Psychology</em>, 60, 283-306.</li>
                <li>Shaywitz, S. E., Escobar, M. D., Shaywitz, B. A., Fletcher, J. M., & Makuch, R. (1992). "Evidence that dyslexia may represent the lower tail of a normal distribution of reading ability." <em>New England Journal of Medicine</em>, 326(3), 145-150.</li>
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