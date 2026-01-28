import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';
import geneticImage from 'figma:asset/a9a120e724df13759561aa3fe546e9617c1cc308.png';

interface DyslexiaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCauses({ setCurrentArticle }: DyslexiaCausesProps) {
  const [activeTab, setActiveTab] = useState('brain');

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
          Dyslexia: Causes & Risk Factors
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
          Dyslexia is a neurodevelopmental condition with strong genetic and neurobiological underpinnings.<sup>[1]</sup> 
          Research over the past several decades has revealed that dyslexia results from differences in brain structure 
          and function, particularly in regions involved in reading and language processing.<sup>[2]</sup> Understanding the 
          origins of dyslexia helps demystify the condition and inform effective interventions.<sup>[3]</sup>
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => setActiveTab('brain')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'brain'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Brain & Neurobiology
        </button>
        <button
          onClick={() => setActiveTab('genetics')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'genetics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Genetics
        </button>
        <button
          onClick={() => setActiveTab('risk')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'risk'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Risk Factors
        </button>
      </div>

      {/* TAB 1: Brain & Neurobiology */}
      {activeTab === 'brain' && (
        <div className="space-y-8">
          {/* Brain Structure and Function Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurobiological Differences</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJhbCUyMHBhdGh3YXlzJTIwcmVhZGluZ3xlbnwxfHx8fDE3Njc0MTUwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Brain neural pathways"
              className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
            />
            
            <p className="mb-4">
              Brain imaging studies have revealed consistent differences in brain structure and function in individuals 
              with dyslexia:<sup>[17]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Differences</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Left hemisphere underactivation:</strong> Reduced activity in left-hemisphere reading regions during reading tasks<sup>[18]</sup></li>
              <li className="mb-2"><strong>Phonological processing areas:</strong> Decreased activation in inferior frontal and temporo-parietal regions involved in sound-to-letter mapping<sup>[19]</sup></li>
              <li className="mb-2"><strong>Visual word form area:</strong> Reduced activation in the occipito-temporal region that recognizes written words<sup>[20]</sup></li>
              <li className="mb-2"><strong>Compensatory activation:</strong> Increased reliance on other brain regions, including right hemisphere and frontal areas<sup>[21]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Structural Differences</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Gray matter:</strong> Differences in cortical thickness and volume in reading-related regions<sup>[22]</sup></li>
              <li className="mb-2"><strong>White matter:</strong> Reduced white matter integrity in pathways connecting language and reading areas<sup>[23]</sup></li>
              <li className="mb-2"><strong>Connectivity:</strong> Atypical connectivity patterns between brain regions involved in reading<sup>[24]</sup></li>
              <li className="mb-2"><strong>Symmetry differences:</strong> Less asymmetry in language-related brain regions<sup>[25]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neural Migration and Development</h3>
            <p className="mb-4">
              Early brain development differences may underlie dyslexia:<sup>[26]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Atypical neuronal migration during fetal development</li>
              <li className="mb-2">Ectopias (clusters of neurons in unusual locations) in autopsy studies<sup>[27]</sup></li>
              <li className="mb-2">Differences in cortical organization and layering</li>
              <li className="mb-2">Altered development of reading-specialized brain circuits</li>
            </ul>
          </div>

          {/* Phonological Deficit Theory Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Phonological Deficit Hypothesis</h2>
            
            <p className="mb-4">
              The most widely accepted explanation for dyslexia is the phonological deficit theory:<sup>[28]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Mechanism</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Phonological representations:</strong> Difficulty creating, storing, or accessing mental representations of speech sounds<sup>[29]</sup></li>
              <li className="mb-2"><strong>Phoneme awareness:</strong> Challenges identifying and manipulating individual sounds in words</li>
              <li className="mb-2"><strong>Phonological memory:</strong> Reduced capacity to hold sound-based information in working memory<sup>[30]</sup></li>
              <li className="mb-2"><strong>Rapid naming:</strong> Slower retrieval of phonological codes from memory<sup>[31]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neural Basis</h3>
            <p className="mb-4">
              The phonological deficit appears to stem from:<sup>[32]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Disruption in left-hemisphere language networks</li>
              <li className="mb-2">Inefficient neural processing of speech sounds</li>
              <li className="mb-2">Weak connections between orthographic (visual) and phonological (sound) systems</li>
              <li className="mb-2">Reduced automaticity in phonological processing<sup>[33]</sup></li>
            </ul>
          </div>

          {/* Alternative and Complementary Theories Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Additional Theories and Contributing Factors</h2>
            
            <p className="mb-4">
              While phonological deficits are central, other theories propose additional mechanisms:<sup>[34]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Double-Deficit Hypothesis</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Proposes two independent deficits: phonological awareness AND rapid automatized naming<sup>[35]</sup></li>
              <li className="mb-2">Individuals with both deficits have more severe reading difficulties</li>
              <li className="mb-2">Explains why some individuals respond differently to intervention</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Magnocellular/Visual Theories</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Magnocellular hypothesis:</strong> Dysfunction in magnocellular visual pathways affects visual processing during reading<sup>[36]</sup></li>
              <li className="mb-2"><strong>Visual attention span:</strong> Reduced ability to process multiple letters simultaneously<sup>[37]</sup></li>
              <li className="mb-2"><strong>Debate:</strong> These theories are more controversial and may explain difficulties in some but not all individuals with dyslexia<sup>[38]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cerebellar and Automatization Theories</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Proposes cerebellar dysfunction affects skill automatization<sup>[39]</sup></li>
              <li className="mb-2">Reading requires automatization of many sub-skills</li>
              <li className="mb-2">Limited empirical support as primary cause but may contribute in some cases<sup>[40]</sup></li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 2: Genetics & Family */}
      {activeTab === 'genetics' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Foundations</h2>
            
            <ImageWithFallback 
              src={geneticImage} 
              alt="Genetics and DNA"
              className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
            />
            
            <p className="mb-4">
              Dyslexia has a strong hereditary component, with genetics playing a substantial role:<sup>[4]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heritability Evidence</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Family aggregation:</strong> Dyslexia runs in families—children with a parent with dyslexia have a 40-60% chance of having dyslexia themselves<sup>[5]</sup></li>
              <li className="mb-2"><strong>Twin studies:</strong> Identical twins show 68% concordance for reading disability, compared to 38% for fraternal twins<sup>[6]</sup></li>
              <li className="mb-2"><strong>Heritability estimates:</strong> Genetic factors account for 40-70% of individual differences in reading ability<sup>[7]</sup></li>
              <li className="mb-2"><strong>Multigenerational patterns:</strong> Reading difficulties often span multiple generations within families</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Candidate Genes</h3>
            <p className="mb-4">
              Researchers have identified several genes associated with dyslexia and reading ability:<sup>[8]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>DYX1C1:</strong> Involved in neuronal migration during brain development<sup>[9]</sup></li>
              <li className="mb-2"><strong>DCDC2:</strong> Affects neuronal migration and brain structure; variants associated with reading and spelling<sup>[10]</sup></li>
              <li className="mb-2"><strong>KIAA0319:</strong> Plays role in neuronal migration; influences brain organization for reading<sup>[11]</sup></li>
              <li className="mb-2"><strong>ROBO1:</strong> Involved in axon guidance and brain connectivity<sup>[12]</sup></li>
              <li className="mb-2"><strong>Additional genes:</strong> Many other genes have been implicated, including those affecting phonological processing and rapid naming<sup>[13]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Complex Genetic Architecture</h3>
            <p className="mb-4">
              Dyslexia's genetics are complex rather than straightforward:<sup>[14]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Polygenic:</strong> Multiple genes contribute, each with small effects</li>
              <li className="mb-2"><strong>Heterogeneity:</strong> Different genetic variations can lead to similar reading difficulties</li>
              <li className="mb-2"><strong>Gene-environment interaction:</strong> Genetic risk interacts with environmental factors like instruction quality<sup>[15]</sup></li>
              <li className="mb-2"><strong>Quantitative trait:</strong> Reading ability exists on a continuum; genes influence where individuals fall on this spectrum<sup>[16]</sup></li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: Risk & Protective Factors */}
      {activeTab === 'risk' && (
        <div className="space-y-8">
          {/* Environmental and Risk Factors Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental and Risk Factors</h2>
            
            <p className="mb-4">
              While dyslexia is primarily neurobiological and genetic, environmental factors play a role:<sup>[41]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Quality of Instruction</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Inadequate early reading instruction can exacerbate genetic risk<sup>[42]</sup></li>
              <li className="mb-2">High-quality, explicit phonics instruction can partially compensate for phonological deficits</li>
              <li className="mb-2">Early intervention can significantly improve outcomes<sup>[43]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Environment</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Limited exposure to rich language and books in early childhood</li>
              <li className="mb-2">Lack of phonological awareness activities (rhyming games, sound play)</li>
              <li className="mb-2">Socioeconomic factors affecting access to books and educational resources<sup>[44]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Orthography</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Deep vs. shallow orthographies:</strong> Dyslexia manifests differently across languages<sup>[45]</sup></li>
              <li className="mb-2"><strong>English complexity:</strong> English has particularly complex letter-sound rules, making it harder for individuals with dyslexia<sup>[46]</sup></li>
              <li className="mb-2"><strong>Transparent languages:</strong> Dyslexia in languages like Italian or Finnish may be less severe but still present<sup>[47]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal and Perinatal Factors</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Some studies suggest associations with prenatal exposure to certain substances<sup>[48]</sup></li>
              <li className="mb-2">Premature birth and low birth weight show modest associations<sup>[49]</sup></li>
              <li className="mb-2">These factors likely interact with genetic vulnerabilities rather than causing dyslexia independently</li>
            </ul>
          </div>

          {/* What Doesn't Cause Dyslexia Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Does NOT Cause Dyslexia</h2>
            
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4">
              <h3 className="text-center text-[#0c264d] font-bold mb-4">Debunked Myths:</h3>
              <div className="text-sm space-y-3">
                <p><strong>✗ Vision problems:</strong> Dyslexia is not caused by visual deficits or eye problems<sup>[32]</sup></p>
                <p><strong>✗ Seeing words backwards:</strong> This is not the cause; dyslexia is a language-based disorder<sup>[50]</sup></p>
                <p><strong>✗ Low intelligence:</strong> Dyslexia occurs across all intelligence levels<sup>[51]</sup></p>
                <p><strong>✗ Lack of effort:</strong> Dyslexia is neurological, not motivational<sup>[52]</sup></p>
                <p><strong>✗ Poor parenting or teaching:</strong> While instruction quality matters, it doesn't cause dyslexia<sup>[53]</sup></p>
                <p><strong>✗ Too much screen time:</strong> No evidence that technology causes dyslexia</p>
              </div>
            </div>
          </div>

          {/* Current Understanding Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Integrative Understanding</h2>
            
            <p className="mb-4">
              The current scientific consensus views dyslexia as a multifactorial condition:<sup>[54]</sup>
            </p>

            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4">
              <h3 className="text-[#0c264d] font-bold mb-3">Multiple Levels of Causation:</h3>
              <ul className="text-sm space-y-2">
                <li>• <strong>Genetic level:</strong> Multiple genes affecting brain development and function</li>
                <li>• <strong>Neurobiological level:</strong> Differences in brain structure, connectivity, and activation patterns</li>
                <li>• <strong>Cognitive level:</strong> Phonological processing deficits as primary mechanism</li>
                <li>• <strong>Behavioral level:</strong> Reading, spelling, and writing difficulties</li>
                <li>• <strong>Environmental level:</strong> Instruction quality and language environment influence expression and severity<sup>[55]</sup></li>
              </ul>
            </div>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Implications for Intervention</h3>
            <p className="mb-4">
              Understanding dyslexia's causes informs treatment:<sup>[56]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Targeted phonological training addresses core deficit</li>
              <li className="mb-2">Early intervention can capitalize on brain plasticity</li>
              <li className="mb-2">Explicit, systematic instruction compensates for inefficient neural processing</li>
              <li className="mb-2">Accommodations recognize neurobiological basis and allow demonstration of knowledge</li>
              <li className="mb-2">Understanding biological basis reduces stigma and blame<sup>[57]</sup></li>
            </ul>
          </div>

          {/* Future Research Section */}
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Ongoing Research</h2>
            
            <p className="mb-4">
              Dyslexia research continues to evolve:<sup>[58]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Identifying additional genetic variants and their functions</li>
              <li className="mb-2">Understanding gene-environment interactions more precisely</li>
              <li className="mb-2">Mapping neural networks involved in reading with greater detail</li>
              <li className="mb-2">Investigating brain plasticity and response to intervention</li>
              <li className="mb-2">Developing biomarkers for early identification</li>
              <li className="mb-2">Understanding heterogeneity within dyslexia population<sup>[59]</sup></li>
            </ul>
          </div>
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
        <div className="text-sm space-y-2">
          <p>[1] Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <em>Annual Review of Clinical Psychology</em>, 11, 283-307.</p>
          <p>[2] Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <em>Science</em>, 325(5938), 280-283.</p>
          <p>[3] Norton, E. S., Beach, S. D., & Gabrieli, J. D. (2015). "Neurobiology of dyslexia." <em>Current Opinion in Neurobiology</em>, 30, 73-78.</p>
          <p>[4] Fisher, S. E., & DeFries, J. C. (2002). "Developmental dyslexia: Genetic dissection of a complex cognitive trait." <em>Nature Reviews Neuroscience</em>, 3(10), 767-780.</p>
          <p>[5] Pennington, B. F., & Lefly, D. L. (2001). "Early reading development in children at family risk for dyslexia." <em>Child Development</em>, 72(3), 816-833.</p>
          <p>[6] DeFries, J. C., & Alarcón, M. (1996). "Genetics of specific reading disability." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 2(1), 39-47.</p>
          <p>[7] Byrne, B., Wadsworth, S., Corley, R., et al. (2005). "Longitudinal twin study of early literacy development: Preschool and kindergarten phases." <em>Scientific Studies of Reading</em>, 9(3), 219-235.</p>
          <p>[8] Scerri, T. S., & Schulte-Körne, G. (2010). "Genetics of developmental dyslexia." <em>European Child & Adolescent Psychiatry</em>, 19(3), 179-197.</p>
          <p>[9] Taipale, M., Kaminen, N., Nopola-Hemmi, J., et al. (2003). "A candidate gene for developmental dyslexia encodes a nuclear tetratricopeptide repeat domain protein dynamically regulated in brain." <em>Proceedings of the National Academy of Sciences</em>, 100(20), 11553-11558.</p>
          <p>[10] Meng, H., Smith, S. D., Hager, K., et al. (2005). "DCDC2 is associated with reading disability and modulates neuronal development in the brain." <em>Proceedings of the National Academy of Sciences</em>, 102(47), 17053-17058.</p>
          <p>[11] Paracchini, S., Steer, C. D., Buckingham, L. L., et al. (2008). "Association of the KIAA0319 dyslexia susceptibility gene with reading skills in the general population." <em>American Journal of Psychiatry</em>, 165(12), 1576-1584.</p>
          <p>[12] Hannula-Jouppi, K., Kaminen-Ahola, N., Taipale, M., et al. (2005). "The axon guidance receptor gene ROBO1 is a candidate gene for developmental dyslexia." <em>PLoS Genetics</em>, 1(4), e50.</p>
          <p>[13] Carrion-Castillo, A., Franke, B., & Fisher, S. E. (2013). "Molecular genetics of dyslexia: An overview." <em>Dyslexia</em>, 19(4), 214-240.</p>
          <p>[14] Galaburda, A. M., LoTurco, J., Ramus, F., Fitch, R. H., & Rosen, G. D. (2006). "From genes to behavior in developmental dyslexia." <em>Nature Neuroscience</em>, 9(10), 1213-1217.</p>
          <p>[15] Pennington, B. F., & Bishop, D. V. (2009). "Relations among speech, language, and reading disorders." <em>Annual Review of Psychology</em>, 60, 283-306.</p>
          <p>[16] Shaywitz, S. E., Escobar, M. D., Shaywitz, B. A., Fletcher, J. M., & Makuch, R. (1992). "Evidence that dyslexia may represent the lower tail of a normal distribution of reading ability." <em>New England Journal of Medicine</em>, 326(3), 145-150.</p>
          <p>[17] Richlan, F., Kronbichler, M., & Wimmer, H. (2011). "Meta-analyzing brain dysfunctions in dyslexic children and adults." <em>NeuroImage</em>, 56(3), 1735-1742.</p>
          <p>[18] Shaywitz, B. A., Shaywitz, S. E., Pugh, K. R., et al. (2002). "Disruption of posterior brain systems for reading in children with developmental dyslexia." <em>Biological Psychiatry</em>, 52(2), 101-110.</p>
          <p>[19] Pugh, K. R., Mencl, W. E., Jenner, A. R., et al. (2001). "Neurobiological studies of reading and reading disability." <em>Journal of Communication Disorders</em>, 34(6), 479-492.</p>
          <p>[20] McCandliss, B. D., Cohen, L., & Dehaene, S. (2003). "The visual word form area: Expertise for reading in the fusiform gyrus." <em>Trends in Cognitive Sciences</em>, 7(7), 293-299.</p>
          <p>[21] Shaywitz, S. E., Shaywitz, B. A., Fulbright, R. K., et al. (2003). "Neural systems for compensation and persistence: Young adult outcome of childhood reading disability." <em>Biological Psychiatry</em>, 54(1), 25-33.</p>
          <p>[22] Silani, G., Frith, U., Demonet, J. F., et al. (2005). "Brain abnormalities underlying altered activation in dyslexia: A voxel based morphometry study." <em>Brain</em>, 128(10), 2453-2461.</p>
          <p>[23] Vandermosten, M., Boets, B., Wouters, J., & Ghesquière, P. (2012). "A qualitative and quantitative review of diffusion tensor imaging studies in reading and dyslexia." <em>Neuroscience & Biobehavioral Reviews</em>, 36(6), 1532-1552.</p>
          <p>[24] Richards, T. L., & Berninger, V. W. (2008). "Abnormal fMRI connectivity in children with dyslexia during a phoneme task: Before but not after treatment." <em>Journal of Neurolinguistics</em>, 21(4), 294-304.</p>
          <p>[25] Galaburda, A. M., Sherman, G. F., Rosen, G. D., Aboitiz, F., & Geschwind, N. (1985). "Developmental dyslexia: Four consecutive patients with cortical anomalies." <em>Annals of Neurology</em>, 18(2), 222-233.</p>
          <p>[26] Galaburda, A. M., & Cestnick, L. (2003). "Dislexia del desarrollo." <em>Revista de Neurología</em>, 36(Suppl 1), S3-S9.</p>
          <p>[27] Galaburda, A. M. (1993). "Neurology of developmental dyslexia." <em>Current Opinion in Neurobiology</em>, 3(2), 237-242.</p>
          <p>[28] Ramus, F., & Szenkovits, G. (2008). "What phonological deficit?" <em>Quarterly Journal of Experimental Psychology</em>, 61(1), 129-141.</p>
          <p>[29] Swan, D., & Goswami, U. (1997). "Phonological awareness deficits in developmental dyslexia and the phonological representations hypothesis." <em>Journal of Experimental Child Psychology</em>, 66(1), 18-41.</p>
          <p>[30] Wagner, R. K., & Torgesen, J. K. (1987). "The nature of phonological processing and its causal role in the acquisition of reading skills." <em>Psychological Bulletin</em>, 101(2), 192-212.</p>
          <p>[31] Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>, 63, 427-452.</p>
          <p>[32] Vellutino, F. R., Fletcher, J. M., Snowling, M. J., & Scanlon, D. M. (2004). "Specific reading disability (dyslexia): What have we learned in the past four decades?" <em>Journal of Child Psychology and Psychiatry</em>, 45(1), 2-40.</p>
          <p>[33] Snowling, M. J. (2000). <em>Dyslexia</em> (2nd ed.). Blackwell Publishing.</p>
          <p>[34] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[35] Wolf, M., & Bowers, P. G. (1999). "The double-deficit hypothesis for the developmental dyslexias." <em>Journal of Educational Psychology</em>, 91(3), 415-438.</p>
          <p>[36] Stein, J., & Walsh, V. (1997). "To see but not to read; the magnocellular theory of dyslexia." <em>Trends in Neurosciences</em>, 20(4), 147-152.</p>
          <p>[37] Bosse, M. L., Tainturier, M. J., & Valdois, S. (2007). "Developmental dyslexia: The visual attention span deficit hypothesis." <em>Cognition</em>, 104(2), 198-230.</p>
          <p>[38] Ramus, F. (2003). "Developmental dyslexia: Specific phonological deficit or general sensorimotor dysfunction?" <em>Current Opinion in Neurobiology</em>, 13(2), 212-218.</p>
          <p>[39] Nicolson, R. I., Fawcett, A. J., & Dean, P. (2001). "Developmental dyslexia: The cerebellar deficit hypothesis." <em>Trends in Neurosciences</em>, 24(9), 508-511.</p>
          <p>[40] Ramus, F., Pidgeon, E., & Frith, U. (2003). "The relationship between motor control and phonology in dyslexic children." <em>Journal of Child Psychology and Psychiatry</em>, 44(5), 712-722.</p>
          <p>[41] Snowling, M. J., & Melby-Lervåg, M. (2016). "Oral language deficits in familial dyslexia: A meta-analysis and review." <em>Psychological Bulletin</em>, 142(5), 498-545.</p>
          <p>[42] Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In P. McCardle & V. Chhabra (Eds.), <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</p>
          <p>[43] Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <em>British Journal of Educational Psychology</em>, 81(1), 1-23.</p>
          <p>[44] Noble, K. G., Wolmetz, M. E., Ochs, L. G., Farah, M. J., & McCandliss, B. D. (2006). "Brain–behavior relationships in reading acquisition are modulated by socioeconomic factors." <em>Developmental Science</em>, 9(6), 642-654.</p>
          <p>[45] Ziegler, J. C., & Goswami, U. (2005). "Reading acquisition, developmental dyslexia, and skilled reading across languages: A psycholinguistic grain size theory." <em>Psychological Bulletin</em>, 131(1), 3-29.</p>
          <p>[46] Share, D. L. (2008). "On the Anglocentricities of current reading research and practice: The perils of overreliance on an" outlier" orthography." <em>Psychological Bulletin</em>, 134(4), 584-615.</p>
          <p>[47] Paulesu, E., Démonet, J. F., Fazio, F., et al. (2001). "Dyslexia: Cultural diversity and biological unity." <em>Science</em>, 291(5511), 2165-2167.</p>
          <p>[48] Espy, K. A., Molfese, D. L., Molfese, V. J., & Modglin, A. (2004). "Development of auditory event-related potentials in young children and relations to word-level reading abilities at age 8 years." <em>Annals of Dyslexia</em>, 54(1), 9-38.</p>
          <p>[49] Litt, J., Taylor, H. G., Klein, N., & Hack, M. (2005). "Learning disabilities in children with very low birthweight: Prevalence, neuropsychological correlates, and educational interventions." <em>Journal of Learning Disabilities</em>, 38(2), 130-141.</p>
          <p>[50] Fischer, F. W., Liberman, I. Y., & Shankweiler, D. (1978). "Reading reversals and developmental dyslexia: A further study." <em>Cortex</em>, 14(4), 496-510.</p>
          <p>[51] Ferrer, E., Shaywitz, B. A., Holahan, J. M., Marchione, K., & Shaywitz, S. E. (2010). "Uncoupling of reading and IQ over time: Empirical evidence for a definition of dyslexia." <em>Psychological Science</em>, 21(1), 93-101.</p>
          <p>[52] Shaywitz, S. (2003). <em>Overcoming dyslexia: A new and complete science-based program for reading problems at any level</em>. Knopf.</p>
          <p>[53] Snowling, M. J., & Hulme, C. (2012). "Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM‐5." <em>Journal of Child Psychology and Psychiatry</em>, 53(5), 593-607.</p>
          <p>[54] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</p>
          <p>[55] Snowling, M. J., & Melby-Lervåg, M. (2016). "Oral language deficits in familial dyslexia: A meta-analysis and review." <em>Psychological Bulletin</em>, 142(5), 498-545.</p>
          <p>[56] Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <em>Science</em>, 325(5938), 280-283.</p>
          <p>[57] McNulty, M. A. (2003). "Dyslexia and the life course." <em>Journal of Learning Disabilities</em>, 36(4), 363-381.</p>
          <p>[58] Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <em>Annual Review of Clinical Psychology</em>, 11, 283-307.</p>
          <p>[59] Norton, E. S., & Wolf, M. (2012). "Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities." <em>Annual Review of Psychology</em>, 63, 427-452.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyslexia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyslexia
        </a>
      </div>
    </article>
  );
}