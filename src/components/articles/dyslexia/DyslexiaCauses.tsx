import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyslexiaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCauses({ setCurrentArticle }: DyslexiaCausesProps) {
  const [activeTab, setActiveTab] = useState('brain');

  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      {/* Header and Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-bold text-[#0c264d]">Dyslexia: Causes & Risk Factors</h2>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2"
        >
          <span>←</span> All About Dyslexia
        </button>
      </div>
      
      <div className="prose max-w-none">
        {/* Intro Paragraph */}
        <p className="mb-6 text-slate-700 leading-relaxed">
          Dyslexia is a neurodevelopmental condition with strong genetic and neurobiological underpinnings.<sup className="text-green-600 font-bold ml-0.5">1</sup> Research over the past several decades has revealed that dyslexia results from differences in brain structure and function, particularly in regions involved in reading and language processing.<sup className="text-green-600 font-bold ml-0.5">2</sup> Understanding the origins of dyslexia helps demystify the condition and inform effective interventions.<sup className="text-green-600 font-bold ml-0.5">3</sup>
        </p>

        {/* INTERACTIVE TABS */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <button 
            onClick={() => setActiveTab('brain')}
            className={`py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto ${
              activeTab === 'brain' ? 'bg-[#0A9DC4] text-white shadow-md' : 'bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80'
            }`}
          >
            Brain & Neurobiology
          </button>
          
          <button 
            onClick={() => setActiveTab('genetics')}
            className={`py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto ${
              activeTab === 'genetics' ? 'bg-[#0A9DC4] text-white shadow-md' : 'bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80'
            }`}
          >
            Genetics
          </button>
          
          <button 
            onClick={() => setActiveTab('risk')}
            className={`py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto ${
              activeTab === 'risk' ? 'bg-[#0A9DC4] text-white shadow-md' : 'bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80'
            }`}
          >
            Risk Factors
          </button>
        </div>

        {/* ========================================== */}
        {/* TAB 1: BRAIN & NEUROBIOLOGY                */}
        {/* ========================================== */}
        {activeTab === 'brain' && (
          <div className="animate-fadeIn">
            <p className="mb-4 text-slate-700">
              Brain imaging studies have revealed consistent differences in brain structure and function in individuals with dyslexia:<sup className="text-green-600 font-bold ml-0.5">17</sup>
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Functional Differences</h3>
            <ul className="list-disc ml-6 space-y-2 mb-6 text-slate-700">
              <li><strong>Left hemisphere underactivation:</strong> Reduced activity in left-hemisphere reading regions during reading tasks.<sup className="text-green-600 font-bold ml-0.5">18</sup></li>
              <li><strong>Phonological processing areas:</strong> Decreased activation in inferior frontal and temporo-parietal regions involved in sound-to-letter mapping.<sup className="text-green-600 font-bold ml-0.5">19</sup></li>
              <li><strong>Visual word form area:</strong> Reduced activation in the occipito-temporal region that recognizes written words.<sup className="text-green-600 font-bold ml-0.5">20</sup></li>
              <li><strong>Compensatory activation:</strong> Increased reliance on other brain regions, including right hemisphere and frontal areas.<sup className="text-green-600 font-bold ml-0.5">21</sup></li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Structural Differences</h3>
            <ul className="list-disc ml-6 space-y-2 mb-6 text-slate-700">
              <li><strong>Gray matter:</strong> Differences in cortical thickness and volume in reading-related regions.<sup className="text-green-600 font-bold ml-0.5">22</sup></li>
              <li><strong>White matter:</strong> Reduced white matter integrity in pathways connecting language and reading areas.<sup className="text-green-600 font-bold ml-0.5">23</sup></li>
              <li><strong>Connectivity:</strong> Atypical connectivity patterns between brain regions involved in reading.<sup className="text-green-600 font-bold ml-0.5">24</sup></li>
              <li><strong>Symmetry differences:</strong> Less asymmetry in language-related brain regions.<sup className="text-green-600 font-bold ml-0.5">25</sup></li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Neural Migration and Development</h3>
            <p className="mb-3 text-slate-700">Early brain development differences may underlie dyslexia:<sup className="text-green-600 font-bold ml-0.5">26</sup></p>
            <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
              <li>Atypical neuronal migration during fetal development.</li>
              <li>Ectopias (clusters of neurons in unusual locations) in autopsy studies.<sup className="text-green-600 font-bold ml-0.5">27</sup></li>
              <li>Differences in cortical organization and layering.</li>
              <li>Altered development of reading-specialized brain circuits.</li>
            </ul>

            <div className="bg-gray-50 border-l-4 border-[#2abcd4] p-6 rounded-r-lg mb-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#0c264d]">The Phonological Deficit Hypothesis</h3>
              <p className="mb-4 text-slate-700">The most widely accepted explanation for dyslexia is the phonological deficit theory:<sup className="text-green-600 font-bold ml-0.5">28</sup></p>
              
              <h4 className="font-bold text-[#0c264d] mt-4 mb-2">Core Mechanism</h4>
              <ul className="list-disc ml-6 space-y-2 mb-4 text-slate-700 text-sm">
                <li><strong>Phonological representations:</strong> Difficulty creating, storing, or accessing mental representations of speech sounds.<sup className="text-green-600 font-bold ml-0.5">29</sup></li>
                <li><strong>Phoneme awareness:</strong> Challenges identifying and manipulating individual sounds in words.</li>
                <li><strong>Phonological memory:</strong> Reduced capacity to hold sound-based information in working memory.<sup className="text-green-600 font-bold ml-0.5">30</sup></li>
                <li><strong>Rapid naming:</strong> Slower retrieval of phonological codes from memory.<sup className="text-green-600 font-bold ml-0.5">31</sup></li>
              </ul>

              <h4 className="font-bold text-[#0c264d] mt-4 mb-2">Neural Basis</h4>
              <p className="mb-2 text-slate-700 text-sm">The phonological deficit appears to stem from:<sup className="text-green-600 font-bold ml-0.5">32</sup></p>
              <ul className="list-disc ml-6 space-y-2 text-slate-700 text-sm">
                <li>Disruption in left-hemisphere language networks.</li>
                <li>Inefficient neural processing of speech sounds.</li>
                <li>Weak connections between orthographic (visual) and phonological (sound) systems.</li>
                <li>Reduced automaticity in phonological processing.<sup className="text-green-600 font-bold ml-0.5">33</sup></li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d]">Additional Theories and Contributing Factors</h3>
            <p className="mb-4 text-slate-700">While phonological deficits are central, other theories propose additional mechanisms:<sup className="text-green-600 font-bold ml-0.5">34</sup></p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold text-[#0A9DC4] mb-2">Double-Deficit Hypothesis</h4>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li>Proposes two independent deficits: phonological awareness AND rapid automatized naming.<sup className="text-green-600 font-bold ml-0.5">35</sup></li>
                  <li>Individuals with both deficits have more severe reading difficulties.</li>
                  <li>Explains why some individuals respond differently to intervention.</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold text-[#0A9DC4] mb-2">Magnocellular/Visual Theories</h4>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li><strong>Magnocellular hypothesis:</strong> Dysfunction in magnocellular visual pathways affects visual processing during reading.<sup className="text-green-600 font-bold ml-0.5">36</sup></li>
                  <li><strong>Visual attention span:</strong> Reduced ability to process multiple letters simultaneously.<sup className="text-green-600 font-bold ml-0.5">37</sup></li>
                  <li><strong>Debate:</strong> These theories are more controversial and may explain difficulties in some but not all individuals.<sup className="text-green-600 font-bold ml-0.5">38</sup></li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 md:col-span-2">
                <h4 className="font-bold text-[#0A9DC4] mb-2">Cerebellar and Automatization Theories</h4>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li>Proposes cerebellar dysfunction affects skill automatization.<sup className="text-green-600 font-bold ml-0.5">39</sup></li>
                  <li>Reading requires automatization of many sub-skills.</li>
                  <li>Limited empirical support as primary cause but may contribute in some cases.<sup className="text-green-600 font-bold ml-0.5">40</sup></li>
                </ul>
              </div>
            </div>

            {/* BRAIN REFERENCES */}
            <div className="mt-10 pt-6 border-t-2 border-gray-100">
              <h4 className="text-sm uppercase tracking-wider text-[#0c264d] font-bold mb-4">Brain & Neurobiology References</h4>
              <ol start={17} className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                <li>Richlan, F., Kronbichler, M., & Wimmer, H. (2011). "Meta-analyzing brain dysfunctions in dyslexic children and adults." <em>NeuroImage</em>, 56(3), 1735-1742.</li>
                <li>Shaywitz, B. A., Shaywitz, S. E., Pugh, K. R., et al. (2002). "Disruption of posterior brain systems for reading in children with developmental dyslexia." <em>Biological Psychiatry</em>, 52(2), 101-110.</li>
                <li>Pugh, K. R., Mencl, W. E., Jenner, A. R., et al. (2001). "Neurobiological studies of reading and reading disability." <em>Journal of Communication Disorders</em>, 34(6), 479-492.</li>
                <li>McCandliss, B. D., Cohen, L., & Dehaene, S. (2003). "The visual word form area: Expertise for reading in the fusiform gyrus." <em>Trends in Cognitive Sciences</em>, 7(7), 293-299.</li>
                <li>Shaywitz, S. E., Shaywitz, B. A., Fulbright, R. K., et al. (2003). "Neural systems for compensation and persistence: Young adult outcome of childhood reading disability." <em>Biological Psychiatry</em>, 54(1), 25-33.</li>
                <li>Silani, G., Frith, U., Demonet, J. F., et al. (2005). "Brain abnormalities underlying altered activation in dyslexia: A voxel based morphometry study." <em>Brain</em>, 128(10), 2453-2461.</li>
                <li>Vandermosten, M., Boets, B., Wouters, J., & Ghesquière, P. (2012). "A qualitative and quantitative review of diffusion tensor imaging studies in reading and dyslexia." <em>Neuroscience & Biobehavioral Reviews</em>, 36(6), 1532-1552.</li>
                <li>Richards, T. L., & Berninger, V. W. (2008). "Abnormal fMRI connectivity in children with dyslexia during a phoneme task: Before but not after treatment." <em>Journal of Neurolinguistics</em>, 21(4), 294-304.</li>
                <li>Galaburda, A. M., Sherman, G. F., Rosen, G. D., Aboitiz, F., & Geschwind, N. (1985). "Developmental dyslexia: Four consecutive patients with cortical anomalies." <em>Annals of Neurology</em>, 18(2), 222-233.</li>
                <li>Galaburda, A. M., & Cestnick, L. (2003). "Dislexia del desarrollo." <em>Revista de Neurología</em>, 36(Suppl 1), S3-S9.</li>
                <li>Galaburda, A. M. (1993). "Neurology of developmental dyslexia." <em>Current Opinion in Neurobiology</em>, 3(2), 237-242.</li>
                <li>Ramus, F., & Szenkovits, G. (2008). "What phonological deficit?" <em>Quarterly Journal of Experimental Psychology</em>, 61(1), 129-141.</li>
                <li>Swan, D., & Goswami, U. (1997). "Phonological awareness deficits in developmental dyslexia and the phonological representations hypothesis." <em>Journal of Experimental Child Psychology</em>, 66(1), 18-41.</li>
                <li>Wagner, R. K., & Torgesen, J. K. (1987). "The nature of phonological processing and its causal role in the acquisition of reading skills." <em>Psychological Bulletin</em>, 101(2), 192-212.</li>
                <li>Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>, 63, 427-452.</li>
                <li>Vellutino, F. R., Fletcher, J. M., Snowling, M. J., & Scanlon, D. M. (2004). "Specific reading disability (dyslexia): What have we learned in the past four decades?" <em>Journal of Child Psychology and Psychiatry</em>, 45(1), 2-40.</li>
                <li>Snowling, M. J. (2000). <em>Dyslexia</em> (2nd ed.). Blackwell Publishing.</li>
                <li>Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</li>
                <li>Wolf, M., & Bowers, P. G. (1999). "The double-deficit hypothesis for the developmental dyslexias." <em>Journal of Educational Psychology</em>, 91(3), 415-438.</li>
                <li>Stein, J., & Walsh, V. (1997). "To see but not to read; the magnocellular theory of dyslexia." <em>Trends in Neurosciences</em>, 20(4), 147-152.</li>
                <li>Bosse, M. L., Tainturier, M. J., & Valdois, S. (2007). "Developmental dyslexia: The visual attention span deficit hypothesis." <em>Cognition</em>, 104(2), 198-230.</li>
                <li>Ramus, F. (2003). "Developmental dyslexia: Specific phonological deficit or general sensorimotor dysfunction?" <em>Current Opinion in Neurobiology</em>, 13(2), 212-218.</li>
                <li>Nicolson, R. I., Fawcett, A. J., & Dean, P. (2001). "Developmental dyslexia: The cerebellar deficit hypothesis." <em>Trends in Neurosciences</em>, 24(9), 508-511.</li>
                <li>Ramus, F., Pidgeon, E., & Frith, U. (2003). "The relationship between motor control and phonology in dyslexic children." <em>Journal of Child Psychology and Psychiatry</em>, 44(5), 712-722.</li>
              </ol>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* TAB 2: GENETICS                            */}
        {/* ========================================== */}
        {activeTab === 'genetics' && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d]">Genetic Foundations</h3>
            <p className="mb-6 text-slate-700">
              Dyslexia has a strong hereditary component, with genetics playing a substantial role:<sup className="text-green-600 font-bold ml-0.5">4</sup>
            </p>

            <h4 className="font-bold mb-3 text-[#0A9DC4] text-lg border-b border-gray-100 pb-2">Heritability Evidence</h4>
            <ul className="list-disc ml-6 space-y-3 text-slate-700 mb-8">
              <li><strong>Family aggregation:</strong> Dyslexia runs in families—children with a parent with dyslexia have a 40-60% chance of having dyslexia themselves.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
              <li><strong>Twin studies:</strong> Identical twins show 68% concordance for reading disability, compared to 38% for fraternal twins.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
              <li><strong>Heritability estimates:</strong> Genetic factors account for 40-70% of individual differences in reading ability.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
              <li><strong>Multigenerational patterns:</strong> Reading difficulties often span multiple generations within families.</li>
            </ul>

            <h4 className="font-bold mb-3 text-[#0A9DC4] text-lg border-b border-gray-100 pb-2">Candidate Genes</h4>
            <p className="mb-3 text-slate-700">Researchers have identified several genes associated with dyslexia and reading ability:<sup className="text-green-600 font-bold ml-0.5">8</sup></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <strong className="text-[#0c264d]">DYX1C1</strong>
                <p className="text-sm mt-1">Involved in neuronal migration during brain development.<sup className="text-green-600 font-bold ml-0.5">9</sup></p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <strong className="text-[#0c264d]">DCDC2</strong>
                <p className="text-sm mt-1">Affects neuronal migration and brain structure; variants associated with reading and spelling.<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <strong className="text-[#0c264d]">KIAA0319</strong>
                <p className="text-sm mt-1">Plays role in neuronal migration; influences brain organization for reading.<sup className="text-green-600 font-bold ml-0.5">11</sup></p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <strong className="text-[#0c264d]">ROBO1</strong>
                <p className="text-sm mt-1">Involved in axon guidance and brain connectivity.<sup className="text-green-600 font-bold ml-0.5">12</sup></p>
              </div>
            </div>
            <p className="text-slate-700 italic text-sm mb-8">Additional genes: Many other genes have been implicated, including those affecting phonological processing and rapid naming.<sup className="text-green-600 font-bold ml-0.5">13</sup></p>

            <h4 className="font-bold mb-3 text-[#0A9DC4] text-lg border-b border-gray-100 pb-2">Complex Genetic Architecture</h4>
            <p className="mb-3 text-slate-700">Dyslexia's genetics are complex rather than straightforward:<sup className="text-green-600 font-bold ml-0.5">14</sup></p>
            <ul className="list-disc ml-6 space-y-2 text-slate-700 mb-8">
              <li><strong>Polygenic:</strong> Multiple genes contribute, each with small effects.</li>
              <li><strong>Heterogeneity:</strong> Different genetic variations can lead to similar reading difficulties.</li>
              <li><strong>Gene-environment interaction:</strong> Genetic risk interacts with environmental factors like instruction quality.<sup className="text-green-600 font-bold ml-0.5">15</sup></li>
              <li><strong>Quantitative trait:</strong> Reading ability exists on a continuum; genes influence where individuals fall on this spectrum.<sup className="text-green-600 font-bold ml-0.5">16</sup></li>
            </ul>

            {/* GENETICS REFERENCES */}
            <div className="mt-10 pt-6 border-t-2 border-gray-100">
              <h4 className="text-sm uppercase tracking-wider text-[#0c264d] font-bold mb-4">Genetics References</h4>
              <ol start={4} className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                <li>Fisher, S. E., & DeFries, J. C. (2002). "Developmental dyslexia: Genetic dissection of a complex cognitive trait." <em>Nature Reviews Neuroscience</em>, 3(10), 767-780.</li>
                <li>Pennington, B. F., & Lefly, D. L. (2001). "Early reading development in children at family risk for dyslexia." <em>Child Development</em>, 72(3), 816-833.</li>
                <li>DeFries, J. C., & Alarcón, M. (1996). "Genetics of specific reading disability." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 2(1), 39-47.</li>
                <li>Byrne, B., Wadsworth, S., Corley, R., et al. (2005). "Longitudinal twin study of early literacy development: Preschool and kindergarten phases." <em>Scientific Studies of Reading</em>, 9(3), 219-235.</li>
                <li>Scerri, T. S., & Schulte-Körne, G. (2010). "Genetics of developmental dyslexia." <em>European Child & Adolescent Psychiatry</em>, 19(3), 179-197.</li>
                <li>Taipale, M., Kaminen, N., Nopola-Hemmi, J., et al. (2003). "A candidate gene for developmental dyslexia encodes a nuclear tetratricopeptide repeat domain protein dynamically regulated in brain." <em>Proceedings of the National Academy of Sciences</em>, 100(20), 11553-11558.</li>
                <li>Meng, H., Smith, S. D., Hager, K., et al. (2005). "DCDC2 is associated with reading disability and modulates neuronal development in the brain." <em>Proceedings of the National Academy of Sciences</em>, 102(47), 17053-17058.</li>
                <li>Paracchini, S., Steer, C. D., Buckingham, L. L., et al. (2008). "Association of the KIAA0319 dyslexia susceptibility gene with reading skills in the general population." <em>American Journal of Psychiatry</em>, 165(12), 1576-1584.</li>
                <li>Hannula-Jouppi, K., Kaminen-Ahola, N., Taipale, M., et al. (2005). "The axon guidance receptor gene ROBO1 is a candidate gene for developmental dyslexia." <em>PLoS Genetics</em>, 1(4), e50.</li>
                <li>Carrion-Castillo, A., Franke, B., & Fisher, S. E. (2013). "Molecular genetics of dyslexia: An overview." <em>Dyslexia</em>, 19(4), 214-240.</li>
                <li>Galaburda, A. M., LoTurco, J., Ramus, F., Fitch, R. H., & Rosen, G. D. (2006). "From genes to behavior in developmental dyslexia." <em>Nature Neuroscience</em>, 9(10), 1213-1217.</li>
                <li>Pennington, B. F., & Bishop, D. V. (2009). "Relations among speech, language, and reading disorders." <em>Annual Review of Psychology</em>, 60, 283-306.</li>
                <li>Shaywitz, S. E., Escobar, M. D., Shaywitz, B. A., Fletcher, J. M., & Makuch, R. (1992). "Evidence that dyslexia may represent the lower tail of a normal distribution of reading ability." <em>New England Journal of Medicine</em>, 326(3), 145-150.</li>
              </ol>
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* TAB 3: RISK FACTORS                        */}
        {/* ========================================== */}
        {activeTab === 'risk' && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d]">Environmental and Risk Factors</h3>
            <p className="mb-6 text-slate-700">
              While dyslexia is primarily neurobiological and genetic, environmental factors play a role:<sup className="text-green-600 font-bold ml-0.5">41</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-2 text-[#0A9DC4] border-b border-gray-100 pb-1">Quality of Instruction</h4>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li>Inadequate early reading instruction can exacerbate genetic risk.<sup className="text-green-600 font-bold ml-0.5">42</sup></li>
                  <li>High-quality, explicit phonics instruction can partially compensate for phonological deficits.</li>
                  <li>Early intervention can significantly improve outcomes.<sup className="text-green-600 font-bold ml-0.5">43</sup></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-[#0A9DC4] border-b border-gray-100 pb-1">Language Environment</h4>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li>Limited exposure to rich language and books in early childhood.</li>
                  <li>Lack of phonological awareness activities (rhyming games, sound play).</li>
                  <li>Socioeconomic factors affecting access to books and educational resources.<sup className="text-green-600 font-bold ml-0.5">44</sup></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-[#0A9DC4] border-b border-gray-100 pb-1">Language Orthography</h4>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li><strong>Deep vs. shallow orthographies:</strong> Dyslexia manifests differently across languages.<sup className="text-green-600 font-bold ml-0.5">45</sup></li>
                  <li><strong>English complexity:</strong> English has particularly complex letter-sound rules, making it harder for individuals with dyslexia.<sup className="text-green-600 font-bold ml-0.5">46</sup></li>
                  <li><strong>Transparent languages:</strong> Dyslexia in languages like Italian or Finnish may be less severe but still present.<sup className="text-green-600 font-bold ml-0.5">47</sup></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-[#0A9DC4] border-b border-gray-100 pb-1">Prenatal and Perinatal Factors</h4>
                <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                  <li>Some studies suggest associations with prenatal exposure to certain substances.<sup className="text-green-600 font-bold ml-0.5">48</sup></li>
                  <li>Premature birth and low birth weight show modest associations.<sup className="text-green-600 font-bold ml-0.5">49</sup></li>
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
                  <p className="text-sm text-slate-800"><strong>Vision problems:</strong> Dyslexia is not caused by visual deficits or eye problems.<sup className="text-green-600 font-bold ml-0.5">32</sup></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                  <p className="text-sm text-slate-800"><strong>Seeing words backwards:</strong> This is not the cause; dyslexia is a language-based disorder.<sup className="text-green-600 font-bold ml-0.5">50</sup></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                  <p className="text-sm text-slate-800"><strong>Low intelligence:</strong> Dyslexia occurs across all intelligence levels.<sup className="text-green-600 font-bold ml-0.5">51</sup></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                  <p className="text-sm text-slate-800"><strong>Lack of effort:</strong> Dyslexia is neurological, not motivational.<sup className="text-green-600 font-bold ml-0.5">52</sup></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                  <p className="text-sm text-slate-800"><strong>Poor parenting/teaching:</strong> While instruction quality matters, it doesn't cause dyslexia.<sup className="text-green-600 font-bold ml-0.5">53</sup></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                  <p className="text-sm text-slate-800"><strong>Too much screen time:</strong> No evidence that technology causes dyslexia.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d]">Integrative Understanding</h3>
            <p className="mb-4 text-slate-700">The current scientific consensus views dyslexia as a multifactorial condition:<sup className="text-green-600 font-bold ml-0.5">54</sup></p>
            <div className="bg-[#f0f9ff] p-5 rounded-lg border-l-4 border-[#0A9DC4] mb-8">
              <h4 className="font-bold mb-2 text-[#0c264d]">Multiple Levels of Causation:</h4>
              <ul className="list-disc ml-5 text-sm space-y-1 text-slate-700">
                <li><strong>Genetic level:</strong> Multiple genes affecting brain development and function.</li>
                <li><strong>Neurobiological level:</strong> Differences in brain structure, connectivity, and activation.</li>
                <li><strong>Cognitive level:</strong> Phonological processing deficits as primary mechanism.</li>
                <li><strong>Behavioral level:</strong> Reading, spelling, and writing difficulties.</li>
                <li><strong>Environmental level:</strong> Instruction quality and language environment influence expression and severity.<sup className="text-green-600 font-bold ml-0.5">55</sup></li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0c264d] border-b border-gray-100 pb-2">Implications for Intervention</h3>
                <p className="text-sm text-slate-700 mb-2">Understanding dyslexia's causes informs treatment:<sup className="text-green-600 font-bold ml-0.5">56</sup></p>
                <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                  <li>Targeted phonological training addresses core deficit.</li>
                  <li>Early intervention can capitalize on brain plasticity.</li>
                  <li>Explicit, systematic instruction compensates for inefficient neural processing.</li>
                  <li>Accommodations recognize neurobiological basis and allow demonstration of knowledge.</li>
                  <li>Understanding biological basis reduces stigma and blame.<sup className="text-green-600 font-bold ml-0.5">57</sup></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-[#0c264d] border-b border-gray-100 pb-2">Ongoing Research</h3>
                <p className="text-sm text-slate-700 mb-2">Dyslexia research continues to evolve:<sup className="text-green-600 font-bold ml-0.5">58</sup></p>
                <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                  <li>Identifying additional genetic variants and their functions.</li>
                  <li>Understanding gene-environment interactions more precisely.</li>
                  <li>Mapping neural networks involved in reading with greater detail.</li>
                  <li>Investigating brain plasticity and response to intervention.</li>
                  <li>Developing biomarkers for early identification.</li>
                  <li>Understanding heterogeneity within dyslexia population.<sup className="text-green-600 font-bold ml-0.5">59</sup></li>
                </ul>
              </div>
            </div>

            {/* RISK FACTORS REFERENCES */}
            <div className="mt-10 pt-6 border-t-2 border-gray-100">
              <h4 className="text-sm uppercase tracking-wider text-[#0c264d] font-bold mb-4">Risk Factors References</h4>
              {/* Using list-none so we can explicitly match your master cross-reference numbers like [32] */}
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed">
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[32]</span><span>Vellutino, F. R., Fletcher, J. M., Snowling, M. J., & Scanlon, D. M. (2004). "Specific reading disability (dyslexia): What have we learned in the past four decades?" <em>Journal of Child Psychology and Psychiatry</em>, 45(1), 2-40.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[41]</span><span>Snowling, M. J., & Melby-Lervåg, M. (2016). "Oral language deficits in familial dyslexia: A meta-analysis and review." <em>Psychological Bulletin</em>, 142(5), 498-545.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[42]</span><span>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[43]</span><span>Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <em>British Journal of Educational Psychology</em>, 81(1), 1-23.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[44]</span><span>Noble, K. G., Wolmetz, M. E., Ochs, L. G., Farah, M. J., & McCandliss, B. D. (2006). "Brain–behavior relationships in reading acquisition are modulated by socioeconomic factors." <em>Developmental Science</em>, 9(6), 642-654.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[45]</span><span>Ziegler, J. C., & Goswami, U. (2005). "Reading acquisition, developmental dyslexia, and skilled reading across languages: A psycholinguistic grain size theory." <em>Psychological Bulletin</em>, 131(1), 3-29.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[46]</span><span>Share, D. L. (2008). "On the Anglocentricities of current reading research and practice: The perils of overreliance on an outlier orthography." <em>Psychological Bulletin</em>, 134(4), 584-615.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[47]</span><span>Paulesu, E., Démonet, J. F., Fazio, F., et al. (2001). "Dyslexia: Cultural diversity and biological unity." <em>Science</em>, 291(5511), 2165-2167.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[48]</span><span>Espy, K. A., Molfese, D. L., Molfese, V. J., & Modglin, A. (2004). "Development of auditory event-related potentials in young children and relations to word-level reading abilities at age 8 years." <em>Annals of Dyslexia</em>, 54(1), 9-38.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[49]</span><span>Litt, J., Taylor, H. G., Klein, N., & Hack, M. (2005). "Learning disabilities in children with very low birthweight: Prevalence, neuropsychological correlates, and educational interventions." <em>Journal of Learning Disabilities</em>, 38(2), 130-141.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[50]</span><span>Fischer, F. W., Liberman, I. Y., & Shankweiler, D. (1978). "Reading reversals and developmental dyslexia: A further study." <em>Cortex</em>, 14(4), 496-510.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[51]</span><span>Ferrer, E., Shaywitz, B. A., Holahan, J. M., Marchione, K., & Shaywitz, S. E. (2010). "Uncoupling of reading and IQ over time: Empirical evidence for a definition of dyslexia." <em>Psychological Science</em>, 21(1), 93-101.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[52]</span><span>Shaywitz, S. (2003). <em>Overcoming dyslexia</em>. Knopf.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[53]</span><span>Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <em>Journal of Child Psychology and Psychiatry</em>, 53(5), 593-607.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[54]</span><span>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[55]</span><span>Snowling, M. J., & Melby-Lervåg, M. (2016). "Oral language deficits in familial dyslexia: A meta-analysis and review." <em>Psychological Bulletin</em>, 142(5), 498-545.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[56]</span><span>Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <em>Science</em>, 325(5938), 280-283.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[57]</span><span>McNulty, M. A. (2003). "Dyslexia and the life course." <em>Journal of Learning Disabilities</em>, 36(4), 363-381.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[58]</span><span>Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <em>Annual Review of Clinical Psychology</em>, 11, 283-307.</span></li>
                <li className="flex gap-2"><span className="font-bold min-w-[24px]">[59]</span><span>Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>, 63, 427-452.</span></li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}