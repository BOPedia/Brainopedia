import React from 'react';

interface DyslexiaCausesBrainProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCausesBrain({ setCurrentArticle }: DyslexiaCausesBrainProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      {/* Header and Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        {/* Main Title - Unbolded */}
        <h2 className="text-3xl font-spartan text-[#0c264d]">Causes: Brain & Neurobiology</h2>
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
          Dyslexia is a neurodevelopmental condition with strong genetic and neurobiological underpinnings.<sup className="text-green-600 font-bold ml-0.5">1</sup> Research over the past several decades has revealed that dyslexia results from differences in brain structure and function, particularly in regions involved in reading and language processing.<sup className="text-green-600 font-bold ml-0.5">2</sup> Understanding the origins of dyslexia helps demystify the condition and inform effective interventions.<sup className="text-green-600 font-bold ml-0.5">3</sup>
        </p>

        <p className="mb-4 text-slate-700">
          Brain imaging studies have revealed consistent differences in brain structure and function in individuals with dyslexia:<sup className="text-green-600 font-bold ml-0.5">4</sup>
        </p>

        {/* Interior Headers remain bolded */}
        <h3 className="text-xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Functional Differences</h3>
        <ul className="list-disc ml-6 space-y-2 mb-6 text-slate-700">
          <li><strong>Left hemisphere underactivation:</strong> Reduced activity in left-hemisphere reading regions during reading tasks.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
          <li><strong>Phonological processing areas:</strong> Decreased activation in inferior frontal and temporo-parietal regions involved in sound-to-letter mapping.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
          <li><strong>Visual word form area:</strong> Reduced activation in the occipito-temporal region that recognizes written words.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
          <li><strong>Compensatory activation:</strong> Increased reliance on other brain regions, including right hemisphere and frontal areas.<sup className="text-green-600 font-bold ml-0.5">8</sup></li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Structural Differences</h3>
        <ul className="list-disc ml-6 space-y-2 mb-6 text-slate-700">
          <li><strong>Gray matter:</strong> Differences in cortical thickness and volume in reading-related regions.<sup className="text-green-600 font-bold ml-0.5">9</sup></li>
          <li><strong>White matter:</strong> Reduced white matter integrity in pathways connecting language and reading areas.<sup className="text-green-600 font-bold ml-0.5">10</sup></li>
          <li><strong>Connectivity:</strong> Atypical connectivity patterns between brain regions involved in reading.<sup className="text-green-600 font-bold ml-0.5">11</sup></li>
          <li><strong>Symmetry differences:</strong> Less asymmetry in language-related brain regions.<sup className="text-green-600 font-bold ml-0.5">12</sup></li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Neural Migration and Development</h3>
        <p className="mb-3 text-slate-700">Early brain development differences may underlie dyslexia:<sup className="text-green-600 font-bold ml-0.5">13</sup></p>
        <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
          <li>Atypical neuronal migration during fetal development.</li>
          <li>Ectopias (clusters of neurons in unusual locations) in autopsy studies.<sup className="text-green-600 font-bold ml-0.5">14</sup></li>
          <li>Differences in cortical organization and layering.</li>
          <li>Altered development of reading-specialized brain circuits.</li>
        </ul>

        <div className="bg-gray-50 border-l-4 border-[#2abcd4] p-6 rounded-r-lg mb-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-3 text-[#0c264d]">The Phonological Deficit Hypothesis</h3>
          <p className="mb-4 text-slate-700">The most widely accepted explanation for dyslexia is the phonological deficit theory:<sup className="text-green-600 font-bold ml-0.5">15</sup></p>
          
          <h4 className="font-bold text-[#0c264d] mt-4 mb-2">Core Mechanism</h4>
          <ul className="list-disc ml-6 space-y-2 mb-4 text-slate-700 text-sm">
            <li><strong>Phonological representations:</strong> Difficulty creating, storing, or accessing mental representations of speech sounds.<sup className="text-green-600 font-bold ml-0.5">16</sup></li>
            <li><strong>Phoneme awareness:</strong> Challenges identifying and manipulating individual sounds in words.</li>
            <li><strong>Phonological memory:</strong> Reduced capacity to hold sound-based information in working memory.<sup className="text-green-600 font-bold ml-0.5">17</sup></li>
            <li><strong>Rapid naming:</strong> Slower retrieval of phonological codes from memory.<sup className="text-green-600 font-bold ml-0.5">18</sup></li>
          </ul>

          <h4 className="font-bold text-[#0c264d] mt-4 mb-2">Neural Basis</h4>
          <p className="mb-2 text-slate-700 text-sm">The phonological deficit appears to stem from:<sup className="text-green-600 font-bold ml-0.5">19</sup></p>
          <ul className="list-disc ml-6 space-y-2 text-slate-700 text-sm">
            <li>Disruption in left-hemisphere language networks.</li>
            <li>Inefficient neural processing of speech sounds.</li>
            <li>Weak connections between orthographic (visual) and phonological (sound) systems.</li>
            <li>Reduced automaticity in phonological processing.<sup className="text-green-600 font-bold ml-0.5">20</sup></li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d]">Additional Theories and Contributing Factors</h3>
        <p className="mb-4 text-slate-700">While phonological deficits are central, other theories propose additional mechanisms:<sup className="text-green-600 font-bold ml-0.5">21</sup></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-[#0A9DC4] mb-2">Double-Deficit Hypothesis</h4>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li>Proposes two independent deficits: phonological awareness AND rapid automatized naming.<sup className="text-green-600 font-bold ml-0.5">22</sup></li>
              <li>Individuals with both deficits have more severe reading difficulties.</li>
              <li>Explains why some individuals respond differently to intervention.</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-[#0A9DC4] mb-2">Magnocellular/Visual Theories</h4>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li><strong>Magnocellular hypothesis:</strong> Dysfunction in magnocellular visual pathways affects visual processing during reading.<sup className="text-green-600 font-bold ml-0.5">23</sup></li>
              <li><strong>Visual attention span:</strong> Reduced ability to process multiple letters simultaneously.<sup className="text-green-600 font-bold ml-0.5">24</sup></li>
              <li><strong>Debate:</strong> These theories are more controversial and may explain difficulties in some but not all individuals.<sup className="text-green-600 font-bold ml-0.5">25</sup></li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 md:col-span-2">
            <h4 className="font-bold text-[#0A9DC4] mb-2">Cerebellar and Automatization Theories</h4>
            <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
              <li>Proposes cerebellar dysfunction affects skill automatization.<sup className="text-green-600 font-bold ml-0.5">26</sup></li>
              <li>Reading requires automatization of many sub-skills.</li>
              <li>Limited empirical support as primary cause but may contribute in some cases.<sup className="text-green-600 font-bold ml-0.5">27</sup></li>
            </ul>
          </div>
        </div>

        {/* REFERENCES SECTION (Renumbered 1-27) */}
        <div className="mt-12 pt-6 border-t-2 border-gray-100">
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              {/* Natural numbering starting at 1, no brackets */}
              <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                <li>Peterson, R. L., & Pennington, B. F. (2015). "Developmental dyslexia." <em>Annual Review of Clinical Psychology</em>, 11, 283-307.</li>
                <li>Gabrieli, J. D. (2009). "Dyslexia: A new synergy between education and cognitive neuroscience." <em>Science</em>, 325(5938), 280-283.</li>
                <li>Norton, E. S., Beach, S. D., & Gabrieli, J. D. (2015). "Neurobiology of dyslexia." <em>Current Opinion in Neurobiology</em>, 30, 73-78.</li>
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