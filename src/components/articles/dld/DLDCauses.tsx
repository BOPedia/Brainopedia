import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DLDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DLDCauses({ setCurrentArticle }: DLDCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <div className="mb-6">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        DLD: Causes & Origins
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Developmental Language Disorder has complex, multifactorial origins involving genetic, neurobiological, 
            and environmental factors.<sup>[1]</sup> While the exact causes are still being researched, significant 
            progress has been made in understanding the biological basis of DLD.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkbmElMjBnZW5ldGljc3xlbnwxfHx8fDE2NzQ1MzUxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="DNA genetics"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Strong Genetic Component</h3>
          <p className="mb-4">
            Research strongly supports a genetic basis for DLD:<sup>[3]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Family clustering:</strong> DLD runs in families</li>
            <li className="mb-2"><strong>Twin studies:</strong> Higher concordance in identical twins than fraternal twins<sup>[4]</sup></li>
            <li className="mb-2"><strong>Heritability estimates:</strong> 50-70% of language abilities are heritable</li>
            <li className="mb-2"><strong>Family history:</strong> Children with DLD often have relatives with language or learning difficulties<sup>[5]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Candidate Genes</h3>
          <p className="mb-4">
            Several genes have been associated with language development:<sup>[6]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>FOXP2:</strong> First identified "language gene" (though not specific to DLD)</li>
            <li className="mb-2"><strong>CNTNAP2:</strong> Associated with language delays<sup>[7]</sup></li>
            <li className="mb-2"><strong>ATP2C2 and CMIP:</strong> Linked to language impairment</li>
            <li className="mb-2"><strong>Polygenic:</strong> Likely involves many genes with small effects<sup>[8]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Complex Inheritance</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Not a simple single-gene disorder</li>
            <li className="mb-2">Multiple genes interact with each other and environment<sup>[9]</sup></li>
            <li className="mb-2">Gene-environment interactions important</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurobiological Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Structure Differences</h3>
          <p className="mb-4">
            Neuroimaging studies show structural differences in children with DLD:<sup>[10]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Perisylvian regions:</strong> Differences in language-related brain areas</li>
            <li className="mb-2"><strong>White matter:</strong> Altered connectivity in language pathways<sup>[11]</sup></li>
            <li className="mb-2"><strong>Gray matter:</strong> Volume differences in frontal and temporal regions</li>
            <li className="mb-2"><strong>Asymmetry:</strong> Reduced typical left-hemisphere language asymmetry<sup>[12]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Function Differences</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Neural activation:</strong> Different patterns during language tasks<sup>[13]</sup></li>
            <li className="mb-2"><strong>Processing efficiency:</strong> Less efficient language processing</li>
            <li className="mb-2"><strong>Network connectivity:</strong> Differences in how language networks communicate<sup>[14]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Procedural Learning System</h3>
          <p className="mb-4">
            The Procedural Deficit Hypothesis suggests:<sup>[15]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Dysfunction in procedural memory system (implicit learning)</li>
            <li className="mb-2">Affects learning of grammar and other rule-based aspects<sup>[16]</sup></li>
            <li className="mb-2">Involves basal ganglia and frontal brain regions</li>
            <li className="mb-2">Compensatory reliance on declarative memory (explicit learning)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive Processing Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Working Memory Limitations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Phonological working memory:</strong> Limited capacity for holding sounds<sup>[17]</sup></li>
            <li className="mb-2"><strong>Verbal working memory:</strong> Difficulty holding and manipulating language information</li>
            <li className="mb-2"><strong>Impact on learning:</strong> Affects ability to learn new words and grammar<sup>[18]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Processing Speed</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Slower processing of linguistic information<sup>[19]</sup></li>
            <li className="mb-2">Difficulty keeping up with rapid speech</li>
            <li className="mb-2">Impacts language comprehension and production</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Processing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Some evidence of auditory processing differences<sup>[20]</sup></li>
            <li className="mb-2">Difficulty processing rapid auditory information</li>
            <li className="mb-2">Not a primary cause but may contribute</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental and Risk Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE2NzQ1MzUyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Family environment"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal and Perinatal Factors</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Premature birth:</strong> Increased risk, especially very premature<sup>[21]</sup></li>
            <li className="mb-2"><strong>Low birth weight:</strong> Associated with language delays</li>
            <li className="mb-2"><strong>Pregnancy complications:</strong> Some maternal health issues</li>
            <li className="mb-2"><strong>Not deterministic:</strong> These are risk factors, not direct causes<sup>[22]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Environment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Input matters:</strong> Quality and quantity of language exposure important<sup>[23]</sup></li>
            <li className="mb-2"><strong>Not a sole cause:</strong> DLD occurs even with rich language environment</li>
            <li className="mb-2"><strong>Exacerbating factor:</strong> Limited input may worsen outcomes</li>
            <li className="mb-2"><strong>Socioeconomic factors:</strong> Associated but not causal<sup>[24]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Recurrent Ear Infections</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Early chronic ear infections (otitis media) may contribute<sup>[25]</sup></li>
            <li className="mb-2">Inconsistent hearing affects language learning</li>
            <li className="mb-2">Not a primary cause but a risk factor</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What DLD Is NOT Caused By</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Common Misconceptions:</h3>
            <p className="mb-4">
              DLD is NOT caused by:<sup>[26]</sup>
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Poor parenting:</strong> Not due to inadequate parenting or neglect</li>
              <li><strong>Laziness:</strong> Children with DLD are trying hard</li>
              <li><strong>Low intelligence:</strong> DLD occurs across all intelligence levels</li>
              <li><strong>Autism:</strong> DLD is distinct from autism (though can co-occur)</li>
              <li><strong>Hearing loss:</strong> DLD diagnosed when hearing is normal</li>
              <li><strong>Bilingualism:</strong> Learning two languages doesn't cause DLD<sup>[27]</sup></li>
              <li><strong>Too much screen time:</strong> No evidence screen time causes DLD</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Theoretical Models</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multiple Deficit Model</h3>
          <p className="mb-4">
            Most researchers favor a multifactorial model:<sup>[28]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Multiple genetic vulnerabilities</li>
            <li className="mb-2">Plus neurobiological differences</li>
            <li className="mb-2">Interacting with environmental factors</li>
            <li className="mb-2">Results in language learning difficulties<sup>[29]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Current Research Directions</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ongoing Studies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Genetics:</strong> Genome-wide association studies<sup>[30]</sup></li>
            <li className="mb-2"><strong>Neuroimaging:</strong> Advanced brain imaging techniques</li>
            <li className="mb-2"><strong>Longitudinal research:</strong> Following children over time</li>
            <li className="mb-2"><strong>Intervention studies:</strong> Understanding how brains change with treatment<sup>[31]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Future Goals</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Better understanding of biological mechanisms</li>
            <li className="mb-2">Earlier identification through biomarkers<sup>[32]</sup></li>
            <li className="mb-2">Personalized interventions based on underlying causes</li>
            <li className="mb-2">Prevention strategies for at-risk children</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Bishop, D. V. M. (2006). "What causes specific language impairment in children?" <em>Current Directions in Psychological Science</em>, 15(5), 217-221.</p>
          <p>[2] Leonard, L. B. (2014). <em>Children with specific language impairment</em> (2nd ed.). Cambridge, MA: MIT Press.</p>
          <p>[3] Bishop, D. V. M. (2002). "The role of genes in the etiology of specific language impairment." <em>Journal of Communication Disorders</em>, 35(4), 311-328.</p>
          <p>[4] Bishop, D. V. M., North, T., & Donlan, C. (1995). "Genetic basis of specific language impairment: Evidence from a twin study." <em>Developmental Medicine & Child Neurology</em>, 37(1), 56-71.</p>
          <p>[5] Tomblin, J. B., & Buckwalter, P. R. (1998). "Heritability of poor language achievement among twins." <em>Journal of Speech, Language, and Hearing Research</em>, 41(1), 188-199.</p>
          <p>[6] Newbury, D. F., & Monaco, A. P. (2010). "Genetic advances in the study of speech and language disorders." <em>Neuron</em>, 68(2), 309-320.</p>
          <p>[7] Vernes, S. C., Newbury, D. F., Abrahams, B. S., Winchester, L., Nicod, J., Groszer, M., ... & Fisher, S. E. (2008). "A functional genetic link between distinct developmental language disorders." <em>New England Journal of Medicine</em>, 359(22), 2337-2345.</p>
          <p>[8] Rice, M. L. (2013). "Language growth and genetics of specific language impairment." <em>International Journal of Speech-Language Pathology</em>, 15(3), 223-233.</p>
          <p>[9] Badcock, N. A., Bishop, D. V. M., Hardiman, M. J., Barry, J. G., & Watkins, K. E. (2012). "Co-localisation of abnormal brain structure and function in specific language impairment." <em>Brain and Language</em>, 120(3), 310-320.</p>
          <p>[10] Verhoeven, J. S., Rommel, N., Prodi, E., Leemans, A., Zink, I., Vandewalle, E., ... & Sunaert, S. (2012). "Is there a common neuroanatomical substrate of language deficit between autism spectrum disorder and specific language impairment?" <em>Cerebral Cortex</em>, 22(10), 2263-2271.</p>
          <p>[11] Weismer, S. E., Plante, E., Jones, M., & Tomblin, J. B. (2005). "A functional magnetic resonance imaging investigation of verbal working memory in adolescents with specific language impairment." <em>Journal of Speech, Language, and Hearing Research</em>, 48(2), 405-425.</p>
          <p>[12] Ullman, M. T., & Pierpont, E. I. (2005). "Specific language impairment is not specific to language: The procedural deficit hypothesis." <em>Cortex</em>, 41(3), 399-433.</p>
          <p>[13] Gathercole, S. E., & Baddeley, A. D. (1990). "Phonological memory deficits in language disordered children: Is there a causal connection?" <em>Journal of Memory and Language</em>, 29(3), 336-360.</p>
          <p>[14] Montgomery, J. W., Magimairaj, B. M., & Finney, M. C. (2010). "Working memory and specific language impairment: An update on the relation and perspectives on assessment and treatment." <em>American Journal of Speech-Language Pathology</em>, 19(1), 78-94.</p>
          <p>[15] Leonard, L. B., Weismer, S. E., Miller, C. A., Francis, D. J., Tomblin, J. B., & Kail, R. V. (2007). "Speed of processing, working memory, and language impairment in children." <em>Journal of Speech, Language, and Hearing Research</em>, 50(2), 408-428.</p>
          <p>[16] Bishop, D. V. M., & McArthur, G. M. (2004). "Immature cortical responses to auditory stimuli in specific language impairment: Evidence from ERPs to rapid tone sequences." <em>Developmental Science</em>, 7(4), F11-F18.</p>
          <p>[17] Barre, N., Morgan, A., Doyle, L. W., & Anderson, P. J. (2011). "Language abilities in children who were very preterm and/or very low birth weight: A meta-analysis." <em>The Journal of Pediatrics</em>, 158(5), 766-774.</p>
          <p>[18] Hoff, E. (2003). "The specificity of environmental influence: Socioeconomic status affects early vocabulary development via maternal speech." <em>Child Development</em>, 74(5), 1368-1378.</p>
          <p>[19] Tomblin, J. B., Records, N. L., Buckwalter, P., Zhang, X., Smith, E., & O'Brien, M. (1997). "Prevalence of specific language impairment in kindergarten children." <em>Journal of Speech, Language, and Hearing Research</em>, 40(6), 1245-1260.</p>
          <p>[20] Roberts, J. E., Rosenfeld, R. M., & Zeisel, S. A. (2004). "Otitis media and speech and language: A meta-analysis of prospective studies." <em>Pediatrics</em>, 113(3), e238-e248.</p>
          <p>[21] Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE-2 consortium. (2016). "CATALISE: A multinational and multidisciplinary Delphi consensus study." <em>PLoS ONE</em>, 11(7), e0158753.</p>
          <p>[22] Paradis, J., Genesee, F., & Crago, M. B. (2011). <em>Dual language development and disorders: A handbook on bilingualism and second language learning</em> (2nd ed.). Baltimore: Paul H. Brookes Publishing.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>
    </article>
  );
}