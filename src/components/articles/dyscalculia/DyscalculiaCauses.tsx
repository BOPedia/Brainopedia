import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyscalculiaCauses({ setCurrentArticle }: DyscalculiaCausesProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyscalculia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyscalculia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Dyscalculia: Causes & Origins
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Dyscalculia is a neurodevelopmental condition with complex, multifactorial origins.<sup>[1]</sup> Research 
            indicates that genetic factors, brain differences, and environmental influences all contribute to mathematical 
            learning disabilities.<sup>[2]</sup> Understanding these causes helps reduce stigma and informs more effective 
            interventions.
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758685848478-b57d7aff2a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG1hdGhlbWF0aWNzJTIwc2NpZW5jZXxlbnwxfHx8fDE3Njc0NTIzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain mathematics science"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heritability of Mathematical Ability</h3>
          <p className="mb-4">
            Mathematical ability and disability run in families, suggesting significant genetic influence:<sup>[3]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Twin studies:</strong> Identical twins show higher concordance for math abilities than fraternal twins<sup>[4]</sup></li>
            <li className="mb-2"><strong>Family studies:</strong> 40-50% of siblings of children with dyscalculia also have math difficulties<sup>[5]</sup></li>
            <li className="mb-2"><strong>Heritability estimates:</strong> Genetic factors account for 30-70% of individual differences in math ability<sup>[6]</sup></li>
            <li className="mb-2"><strong>Parental history:</strong> Children with a parent who struggled with math are at higher risk<sup>[7]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Specific Genes and Chromosomal Regions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Chromosome 20p:</strong> Associated with numerical processing deficits<sup>[8]</sup></li>
            <li className="mb-2"><strong>Multiple genes involved:</strong> Likely polygenic condition with many contributing genes<sup>[9]</sup></li>
            <li className="mb-2"><strong>Shared genetics with dyslexia:</strong> Some genetic overlap between reading and math disabilities<sup>[10]</sup></li>
            <li className="mb-2"><strong>ROBO1 gene:</strong> Implicated in both reading and mathematical difficulties<sup>[11]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gene-Environment Interactions</h3>
          <p className="mb-4">
            Genetic predisposition interacts with environmental factors to produce dyscalculia:<sup>[12]</sup> High-quality 
            math instruction can help children with genetic risk, while poor instruction can worsen outcomes.<sup>[13]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Brain Structure and Function</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Regions Involved in Mathematical Processing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Intraparietal sulcus (IPS):</strong> Core region for number sense and magnitude processing<sup>[14]</sup></li>
            <li className="mb-2"><strong>Angular gyrus:</strong> Important for arithmetic fact retrieval and verbally-mediated calculation<sup>[15]</sup></li>
            <li className="mb-2"><strong>Prefrontal cortex:</strong> Working memory and executive control during math tasks<sup>[16]</sup></li>
            <li className="mb-2"><strong>Hippocampus:</strong> Learning and memory for mathematical procedures<sup>[17]</sup></li>
            <li className="mb-2"><strong>Occipito-temporal regions:</strong> Visual processing of numerical symbols<sup>[18]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Structural Brain Differences in Dyscalculia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reduced gray matter:</strong> Less gray matter volume in intraparietal sulcus<sup>[19]</sup></li>
            <li className="mb-2"><strong>White matter differences:</strong> Abnormal white matter tracts connecting mathematical processing regions<sup>[20]</sup></li>
            <li className="mb-2"><strong>Structural connectivity:</strong> Altered connections between parietal and frontal regions<sup>[21]</sup></li>
            <li className="mb-2"><strong>Cortical thickness:</strong> Variations in cortical thickness in number-related areas<sup>[22]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Brain Differences</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reduced IPS activation:</strong> Less activity in intraparietal sulcus during number tasks<sup>[23]</sup></li>
            <li className="mb-2"><strong>Atypical patterns:</strong> Different activation patterns compared to typical learners<sup>[24]</sup></li>
            <li className="mb-2"><strong>Compensatory activation:</strong> Increased reliance on frontal regions and verbal strategies<sup>[25]</sup></li>
            <li className="mb-2"><strong>Connectivity issues:</strong> Weaker functional connectivity between mathematical processing regions<sup>[26]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive Mechanisms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Deficit: Number Sense</h3>
          <p className="mb-4">
            The most influential theory proposes that deficient number sense is the core deficit in dyscalculia:<sup>[27]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Approximate number system (ANS):</strong> Impaired ability to represent and manipulate approximate quantities<sup>[28]</sup></li>
            <li className="mb-2"><strong>Magnitude representation:</strong> Difficulty with understanding numerical magnitude<sup>[29]</sup></li>
            <li className="mb-2"><strong>Number-space mapping:</strong> Problems mapping numbers onto mental number line<sup>[30]</sup></li>
            <li className="mb-2"><strong>Developmental cascade:</strong> Early number sense deficits lead to downstream math difficulties<sup>[31]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Working Memory Deficits</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Visuospatial working memory:</strong> Difficulty holding visual-spatial information in mind<sup>[32]</sup></li>
            <li className="mb-2"><strong>Verbal working memory:</strong> Problems maintaining numerical information verbally<sup>[33]</sup></li>
            <li className="mb-2"><strong>Central executive:</strong> Impaired coordination of multiple cognitive processes<sup>[34]</sup></li>
            <li className="mb-2"><strong>Impact on math:</strong> Working memory crucial for multi-step calculations and word problems<sup>[35]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Processing Speed</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Slower processing speed for numerical information<sup>[36]</sup></li>
            <li className="mb-2">Difficulty with rapid automatized naming of numbers</li>
            <li className="mb-2">Impacts fact retrieval and computational fluency<sup>[37]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Executive Function Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Planning and organization:</strong> Difficulty organizing approach to mathematical problems<sup>[38]</sup></li>
            <li className="mb-2"><strong>Inhibition:</strong> Problems suppressing irrelevant information during calculations<sup>[39]</sup></li>
            <li className="mb-2"><strong>Cognitive flexibility:</strong> Difficulty switching between mathematical strategies<sup>[40]</sup></li>
            <li className="mb-2"><strong>Metacognition:</strong> Poor awareness of own mathematical thinking processes<sup>[41]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1654917475197-e5b701b1dee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGNvdW50aW5nJTIwbnVtYmVyc3xlbnwxfHx8fDE3Njc0NTIzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child counting numbers"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Number Sense Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Innate number sense:</strong> Even infants show basic numerical abilities<sup>[42]</sup></li>
            <li className="mb-2"><strong>Atypical development:</strong> Children with dyscalculia show delayed or atypical number sense emergence<sup>[43]</sup></li>
            <li className="mb-2"><strong>Critical periods:</strong> Early childhood may be particularly important for mathematical foundations<sup>[44]</sup></li>
            <li className="mb-2"><strong>Cumulative deficits:</strong> Early difficulties compound, creating widening gaps<sup>[45]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Maturation and Brain Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Mathematical brain networks continue developing through adolescence<sup>[46]</sup></li>
            <li className="mb-2">Delayed maturation of parietal cortex may contribute to dyscalculia<sup>[47]</sup></li>
            <li className="mb-2">Changes in strategy use and fact retrieval with development<sup>[48]</sup></li>
            <li className="mb-2">Some improvement possible with intervention, but core deficits often persist<sup>[49]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental and Educational Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Quality of Math Instruction</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Not the primary cause:</strong> Dyscalculia is neurological, not simply result of poor teaching<sup>[50]</sup></li>
            <li className="mb-2"><strong>Can exacerbate or ameliorate:</strong> Good instruction helps; poor instruction worsens outcomes<sup>[51]</sup></li>
            <li className="mb-2"><strong>Teaching approaches matter:</strong> Explicit, systematic instruction most effective<sup>[52]</sup></li>
            <li className="mb-2"><strong>Early intervention critical:</strong> Early, intensive support can improve trajectories<sup>[53]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Math Anxiety</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Bi-directional relationship:</strong> Math difficulties cause anxiety; anxiety impairs performance<sup>[54]</sup></li>
            <li className="mb-2"><strong>Working memory interference:</strong> Anxiety consumes working memory resources needed for math<sup>[55]</sup></li>
            <li className="mb-2"><strong>Avoidance:</strong> Anxiety leads to avoiding math, reducing practice and learning<sup>[56]</sup></li>
            <li className="mb-2"><strong>Intergenerational transmission:</strong> Parent math anxiety can affect child outcomes<sup>[57]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Socioeconomic Factors</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Dyscalculia occurs across all socioeconomic levels<sup>[58]</sup></li>
            <li className="mb-2">SES affects access to assessment and intervention resources</li>
            <li className="mb-2">Early math experiences at home influence mathematical development<sup>[59]</sup></li>
            <li className="mb-2">Quality of schooling and educational resources varies by SES<sup>[60]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurobiological Risk Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal and Perinatal Factors</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Prematurity:</strong> Premature birth associated with increased risk of math difficulties<sup>[61]</sup></li>
            <li className="mb-2"><strong>Low birth weight:</strong> Linked to mathematical learning challenges<sup>[62]</sup></li>
            <li className="mb-2"><strong>Prenatal alcohol exposure:</strong> Can affect numerical processing<sup>[63]</sup></li>
            <li className="mb-2"><strong>Hypoxia:</strong> Oxygen deprivation during birth may impact brain development<sup>[64]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurological Conditions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Epilepsy:</strong> Some epilepsy syndromes associated with dyscalculia<sup>[65]</sup></li>
            <li className="mb-2"><strong>Turner syndrome:</strong> High rates of mathematical difficulties<sup>[66]</sup></li>
            <li className="mb-2"><strong>Fragile X syndrome:</strong> Often includes numerical processing deficits<sup>[67]</sup></li>
            <li className="mb-2"><strong>22q11.2 deletion syndrome:</strong> Frequently presents with dyscalculia<sup>[68]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Comorbid Conditions</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Shared Etiology with Other Learning Disabilities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Dyslexia:</strong> 40-60% comorbidity; shared genetic and cognitive factors<sup>[69]</sup></li>
            <li className="mb-2"><strong>ADHD:</strong> Attention and executive function deficits impact both conditions<sup>[70]</sup></li>
            <li className="mb-2"><strong>Dysgraphia:</strong> Writing difficulties can affect mathematical notation<sup>[71]</sup></li>
            <li className="mb-2"><strong>Working memory:</strong> Central deficit across multiple learning disabilities<sup>[72]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Domain-Specific vs. Domain-General Deficits</h3>
          <p className="mb-4">
            Debate continues about whether dyscalculia results from:<sup>[73]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Domain-specific deficits:</strong> Specific impairment in numerical processing</li>
            <li className="mb-2"><strong>Domain-general deficits:</strong> General cognitive difficulties (working memory, attention) affecting math<sup>[74]</sup></li>
            <li className="mb-2"><strong>Likely both:</strong> Evidence for multiple subtypes with different underlying causes<sup>[75]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cultural and Linguistic Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cross-Cultural Consistency</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Dyscalculia identified across diverse cultures and countries<sup>[76]</sup></li>
            <li className="mb-2">Core numerical deficits appear universal<sup>[77]</sup></li>
            <li className="mb-2">Prevalence rates similar across cultures (3-7%)<sup>[78]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language and Number Systems</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Number word structure:</strong> Languages with transparent number systems (Chinese) may facilitate learning<sup>[79]</sup></li>
            <li className="mb-2"><strong>Irregular number words:</strong> English "eleven" vs. "ten-one" makes place value harder<sup>[80]</sup></li>
            <li className="mb-2"><strong>Not causative:</strong> Language structure affects typical development but doesn't cause dyscalculia<sup>[81]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Current Theoretical Models</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Core Deficit Models</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Number sense deficit:</strong> Impaired approximate number system<sup>[82]</sup></li>
            <li className="mb-2"><strong>Access deficit:</strong> Intact representations but difficulty accessing them<sup>[83]</sup></li>
            <li className="mb-2"><strong>Multiple deficits:</strong> Combination of number sense and other cognitive impairments<sup>[84]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Models</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Delay vs. deficit:</strong> Is dyscalculia delayed development or qualitatively different processing?<sup>[85]</sup></li>
            <li className="mb-2"><strong>Cumulative model:</strong> Early difficulties cascade into broader mathematical impairments<sup>[86]</sup></li>
            <li className="mb-2"><strong>Subtypes:</strong> Different pathways to mathematical difficulties<sup>[87]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Does NOT Cause Dyscalculia</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Important Clarifications:</h3>
            <div className="text-sm space-y-2">
              <p><strong>Dyscalculia is NOT caused by:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Low intelligence or intellectual disability<sup>[88]</sup></li>
                <li>Laziness or lack of motivation</li>
                <li>Poor parenting or family dysfunction<sup>[89]</sup></li>
                <li>Simply disliking math or avoiding math practice</li>
                <li>Inadequate instruction alone (though poor teaching worsens outcomes)<sup>[90]</sup></li>
                <li>Cultural or linguistic disadvantage (occurs across all groups)</li>
              </ul>
              <p className="mt-3">
                Dyscalculia is a legitimate neurological condition with biological bases, not a character flaw or result 
                of insufficient effort.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[2] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[3] Shalev, R. S., Manor, O., Kerem, B., Ayali, M., Badichi, N., Friedlander, Y., & Gross-Tsur, V. (2001). "Developmental dyscalculia is a familial learning disability." <em>Journal of Learning Disabilities</em>, 34(1), 59-65.</p>
          <p>[4] Kovas, Y., Haworth, C. M., Dale, P. S., & Plomin, R. (2007). "The genetic and environmental origins of learning abilities and disabilities in the early school years." <em>Monographs of the Society for Research in Child Development</em>, 72(3), 1-144.</p>
          <p>[5] Shalev, R. S., Manor, O., Kerem, B., Ayali, M., Badichi, N., Friedlander, Y., & Gross-Tsur, V. (2001). "Developmental dyscalculia is a familial learning disability." <em>Journal of Learning Disabilities</em>, 34(1), 59-65.</p>
          <p>[6] Hart, S. A., Petrill, S. A., Thompson, L. A., & Plomin, R. (2009). "The ABCs of math: A genetic analysis of mathematics and its links with reading ability and general cognitive ability." <em>Journal of Educational Psychology</em>, 101(2), 388-402.</p>
          <p>[7] Gross-Tsur, V., Manor, O., & Shalev, R. S. (1996). "Developmental dyscalculia: Prevalence and demographic features." <em>Developmental Medicine & Child Neurology</em>, 38(1), 25-33.</p>
          <p>[8] Francks, C., MacPhie, I. L., & Monaco, A. P. (2002). "The genetic basis of dyslexia." <em>The Lancet Neurology</em>, 1(8), 483-490.</p>
          <p>[9] Docherty, S. J., Davis, O. S., Kovas, Y., Meaburn, E. L., Dale, P. S., Petrill, S. A., ... & Plomin, R. (2010). "A genome-wide association study identifies multiple loci associated with mathematics ability and disability." <em>Genes, Brain and Behavior</em>, 9(2), 234-247.</p>
          <p>[10] Kovas, Y., & Plomin, R. (2006). "Generalist genes: Implications for the cognitive sciences." <em>Trends in Cognitive Sciences</em>, 10(5), 198-203.</p>
          <p>[11] Hannula-Jouppi, K., Kaminen-Ahola, N., Taipale, M., Eklund, R., Nopola-Hemmi, J., Kääriäinen, H., & Kere, J. (2005). "The axon guidance receptor gene ROBO1 is a candidate gene for developmental dyslexia." <em>PLoS Genetics</em>, 1(4), e50.</p>
          <p>[12] Davis, N., Cannistraci, C. J., Rogers, B. P., Gatenby, J. C., Fuchs, L. S., Anderson, A. W., & Gore, J. C. (2009). "Aberrant functional activation in school age children at-risk for mathematical disability: A functional imaging study of simple arithmetic skill." <em>Neuropsychologia</em>, 47(12), 2470-2479.</p>
          <p>[13] Geary, D. C., Hoard, M. K., Nugent, L., & Bailey, D. H. (2012). "Mathematical cognition deficits in children with learning disabilities and persistent low achievement: A five-year prospective study." <em>Journal of Educational Psychology</em>, 104(1), 206-223.</p>
          <p>[14] Dehaene, S., Piazza, M., Pinel, P., & Cohen, L. (2003). "Three parietal circuits for number processing." <em>Cognitive Neuropsychology</em>, 20(3-6), 487-506.</p>
          <p>[15] Grabner, R. H., Ansari, D., Koschutnig, K., Reishofer, G., Ebner, F., & Neuper, C. (2009). "To retrieve or to calculate? Left angular gyrus mediates the retrieval of arithmetic facts during problem solving." <em>Neuropsychologia</em>, 47(2), 604-608.</p>
          <p>[16] Menon, V. (2010). "Developmental cognitive neuroscience of arithmetic: Implications for learning and education." <em>ZDM Mathematics Education</em>, 42(6), 515-525.</p>
          <p>[17] Qin, S., Cho, S., Chen, T., Rosenberg-Lee, M., Geary, D. C., & Menon, V. (2014). "Hippocampal-neocortical functional reorganization underlies children's cognitive development." <em>Nature Neuroscience</em>, 17(9), 1263-1269.</p>
          <p>[18] Grotheer, M., Herrmann, K. H., & Kovács, G. (2016). "Neuroimaging evidence of a bilateral representation for visually presented numbers." <em>Journal of Neuroscience</em>, 36(1), 88-97.</p>
          <p>[19] Rotzer, S., Kucian, K., Martin, E., von Aster, M., Klaver, P., & Loenneker, T. (2008). "Optimized voxel-based morphometry in children with developmental dyscalculia." <em>NeuroImage</em>, 39(1), 417-422.</p>
          <p>[20] Rykhlevskaia, E., Uddin, L. Q., Kondos, L., & Menon, V. (2009). "Neuroanatomical correlates of developmental dyscalculia: Combined evidence from morphometry and tractography." <em>Frontiers in Human Neuroscience</em>, 3, 51.</p>
          <p>[21] Kucian, K., Loenneker, T., Martin, E., & von Aster, M. (2011). "Non-symbolic numerical distance effect in children with and without developmental dyscalculia: A parametric fMRI study." <em>Developmental Neuropsychology</em>, 36(6), 741-762.</p>
          <p>[22] Isaacs, E. B., Edmonds, C. J., Lucas, A., & Gadian, D. G. (2001). "Calculation difficulties in children of very low birthweight: A neural correlate." <em>Brain</em>, 124(9), 1701-1707.</p>
          <p>[23] Price, G. R., Holloway, I., Räsänen, P., Vesterinen, M., & Ansari, D. (2007). "Impaired parietal magnitude processing in developmental dyscalculia." <em>Current Biology</em>, 17(24), R1042-R1043.</p>
          <p>[24] Kucian, K., von Aster, M., Loenneker, T., Dietrich, T., & Martin, E. (2008). "Development of neural networks for exact and approximate calculation: A FMRI study." <em>Developmental Neuropsychology</em>, 33(4), 447-473.</p>
          <p>[25] Kaufmann, L., Vogel, S. E., Starke, M., Kremser, C., Schocke, M., & Wood, G. (2009). "Developmental dyscalculia: Compensatory mechanisms in left intraparietal regions in response to nonsymbolic magnitudes." <em>Behavioral and Brain Functions</em>, 5(1), 35.</p>
          <p>[26] Jolles, D., Ashkenazi, S., Kochalka, J., Evans, T., Richardson, J., Rosenberg-Lee, M., ... & Menon, V. (2016). "Parietal hyper-connectivity, aberrant brain organization, and circuit-based biomarkers in children with mathematical disabilities." <em>Developmental Science</em>, 19(4), 613-631.</p>
          <p>[27] Butterworth, B. (2005). "The development of arithmetical abilities." <em>Journal of Child Psychology and Psychiatry</em>, 46(1), 3-18.</p>
          <p>[28] Piazza, M., Facoetti, A., Trussardi, A. N., Berteletti, I., Conte, S., Lucangeli, D., ... & Zorzi, M. (2010). "Developmental trajectory of number acuity reveals a severe impairment in developmental dyscalculia." <em>Cognition</em>, 116(1), 33-41.</p>
          <p>[29] Dehaene, S. (2011). <em>The number sense: How the mind creates mathematics</em>. Oxford University Press.</p>
          <p>[30] Siegler, R. S., & Opfer, J. E. (2003). "The development of numerical estimation: Evidence for multiple representations of numerical quantity." <em>Psychological Science</em>, 14(3), 237-250.</p>
          <p>[31] Jordan, N. C., Kaplan, D., Ramineni, C., & Locuniak, M. N. (2009). "Early math matters: Kindergarten number competence and later mathematics outcomes." <em>Developmental Psychology</em>, 45(3), 850-867.</p>
          <p>[32] Passolunghi, M. C., & Mammarella, I. C. (2012). "Selective spatial working memory impairment in a group of children with mathematics learning disabilities and poor problem-solving skills." <em>Journal of Learning Disabilities</em>, 45(4), 341-350.</p>
          <p>[33] Swanson, H. L., & Beebe-Frankenberger, M. (2004). "The relationship between working memory and mathematical problem solving in children at risk and not at risk for serious math difficulties." <em>Journal of Educational Psychology</em>, 96(3), 471-491.</p>
          <p>[34] Bull, R., & Scerif, G. (2001). "Executive functioning as a predictor of children's mathematics ability: Inhibition, switching, and working memory." <em>Developmental Neuropsychology</em>, 19(3), 273-293.</p>
          <p>[35] Raghubar, K. P., Barnes, M. A., & Hecht, S. A. (2010). "Working memory and mathematics: A review of developmental, individual difference, and cognitive approaches." <em>Learning and Individual Differences</em>, 20(2), 110-122.</p>
          <p>[36] Bull, R., & Johnston, R. S. (1997). "Children's arithmetical difficulties: Contributions from processing speed, item identification, and short-term memory." <em>Journal of Experimental Child Psychology</em>, 65(1), 1-24.</p>
          <p>[37] Geary, D. C., & Brown, S. C. (1991). "Cognitive addition: Strategy choice and speed-of-processing differences in gifted, normal, and mathematically disabled children." <em>Developmental Psychology</em>, 27(3), 398-406.</p>
          <p>[38] Lucangeli, D., & Cabrele, S. (2006). "The relationship of metacognitive knowledge, skills and beliefs in children with and without mathematics learning disabilities." In A. Desoete & M. Veenman (Eds.), <em>Metacognition in mathematics education</em> (pp. 103-133). Nova Science Publishers.</p>
          <p>[39] Szűcs, D., Devine, A., Soltesz, F., Nobes, A., & Gabriel, F. (2013). "Developmental dyscalculia is related to visuo-spatial memory and inhibition impairment." <em>Cortex</em>, 49(10), 2674-2688.</p>
          <p>[40] Van der Sluis, S., de Jong, P. F., & van der Leij, A. (2004). "Inhibition and shifting in children with learning deficits in arithmetic and reading." <em>Journal of Experimental Child Psychology</em>, 87(3), 239-266.</p>
          <p>[41] Garrett, A. J., Mazzocco, M. M., & Baker, L. (2006). "Development of the metacognitive skills of prediction and evaluation in children with or without math disability." <em>Learning Disabilities Research & Practice</em>, 21(2), 77-88.</p>
          <p>[42] Feigenson, L., Dehaene, S., & Spelke, E. (2004). "Core systems of number." <em>Trends in Cognitive Sciences</em>, 8(7), 307-314.</p>
          <p>[43] Mazzocco, M. M., Feigenson, L., & Halberda, J. (2011). "Preschoolers' precision of the approximate number system predicts later school mathematics performance." <em>PLoS One</em>, 6(9), e23749.</p>
          <p>[44] Siegler, R. S., & Ramani, G. B. (2009). "Playing linear number board games—but not circular ones—improves low-income preschoolers' numerical understanding." <em>Journal of Educational Psychology</em>, 101(3), 545-560.</p>
          <p>[45] Morgan, P. L., Farkas, G., & Wu, Q. (2009). "Five-year growth trajectories of kindergarten children with learning difficulties in mathematics." <em>Journal of Learning Disabilities</em>, 42(4), 306-321.</p>
          <p>[46] Rivera, S. M., Reiss, A. L., Eckert, M. A., & Menon, V. (2005). "Developmental changes in mental arithmetic: Evidence for increased functional specialization in the left inferior parietal cortex." <em>Cerebral Cortex</em>, 15(11), 1779-1790.</p>
          <p>[47] Ansari, D., & Dhital, B. (2006). "Age-related changes in the activation of the intraparietal sulcus during nonsymbolic magnitude processing: An event-related functional magnetic resonance imaging study." <em>Journal of Cognitive Neuroscience</em>, 18(11), 1820-1828.</p>
          <p>[48] Siegler, R. S. (1996). <em>Emerging minds: The process of change in children's thinking</em>. Oxford University Press.</p>
          <p>[49] Shalev, R. S., Manor, O., & Gross-Tsur, V. (2005). "Developmental dyscalculia: A prospective six-year follow-up." <em>Developmental Medicine & Child Neurology</em>, 47(2), 121-125.</p>
          <p>[50] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[51] Fuchs, L. S., Fuchs, D., Powell, S. R., Seethaler, P. M., Cirino, P. T., & Fletcher, J. M. (2008). "Intensive intervention for students with mathematics disabilities: Seven principles of effective practice." <em>Learning Disability Quarterly</em>, 31(2), 79-92.</p>
          <p>[52] Gersten, R., Chard, D. J., Jayanthi, M., Baker, S. K., Morphy, P., & Flojo, J. (2009). "Mathematics instruction for students with learning disabilities: A meta-analysis of instructional components." <em>Review of Educational Research</em>, 79(3), 1202-1242.</p>
          <p>[53] Bryant, D. P., Bryant, B. R., Gersten, R., Scammacca, N., & Chavez, M. M. (2008). "Mathematics intervention for first-and second-grade students with mathematics difficulties: The effects of tier 2 intervention delivered as booster lessons." <em>Remedial and Special Education</em>, 29(1), 20-32.</p>
          <p>[54] Rubinsten, O., & Tannock, R. (2010). "Mathematics anxiety in children with developmental dyscalculia." <em>Behavioral and Brain Functions</em>, 6(1), 46.</p>
          <p>[55] Ashcraft, M. H., & Krause, J. A. (2007). "Working memory, math performance, and math anxiety." <em>Psychonomic Bulletin & Review</em>, 14(2), 243-248.</p>
          <p>[56] Dowker, A., Sarkar, A., & Looi, C. Y. (2016). "Mathematics anxiety: What have we learned in 60 years?" <em>Frontiers in Psychology</em>, 7, 508.</p>
          <p>[57] Maloney, E. A., Ramirez, G., Gunderson, E. A., Levine, S. C., & Beilock, S. L. (2015). "Intergenerational effects of parents' math anxiety on children's math achievement and anxiety." <em>Psychological Science</em>, 26(9), 1480-1488.</p>
          <p>[58] Gross-Tsur, V., Manor, O., & Shalev, R. S. (1996). "Developmental dyscalculia: Prevalence and demographic features." <em>Developmental Medicine & Child Neurology</em>, 38(1), 25-33.</p>
          <p>[59] LeFevre, J. A., Skwarchuk, S. L., Smith-Chant, B. L., Fast, L., Kamawar, D., & Bisanz, J. (2009). "Home numeracy experiences and children's math performance in the early school years." <em>Canadian Journal of Behavioural Science</em>, 41(2), 55-66.</p>
          <p>[60] Jordan, N. C., Kaplan, D., Locuniak, M. N., & Ramineni, C. (2007). "Predicting first‐grade math achievement from developmental number sense trajectories." <em>Learning Disabilities Research & Practice</em>, 22(1), 36-46.</p>
          <p>[61] Isaacs, E. B., Edmonds, C. J., Lucas, A., & Gadian, D. G. (2001). "Calculation difficulties in children of very low birthweight: A neural correlate." <em>Brain</em>, 124(9), 1701-1707.</p>
          <p>[62] Taylor, H. G., Klein, N., Minich, N. M., & Hack, M. (2000). "Middle-school-age outcomes in children with very low birthweight." <em>Child Development</em>, 71(6), 1495-1511.</p>
          <p>[63] Coles, C. D., Platzman, K. A., Raskind-Hood, C. L., Brown, R. T., Falek, A., & Smith, I. E. (1997). "A comparison of children affected by prenatal alcohol exposure and attention deficit, hyperactivity disorder." <em>Alcoholism: Clinical and Experimental Research</em>, 21(1), 150-161.</p>
          <p>[64] Gadian, D. G., Aicardi, J., Watkins, K. E., Porter, D. A., Mishkin, M., & Vargha-Khadem, F. (2000). "Developmental amnesia associated with early hypoxic-ischaemic injury." <em>Brain</em>, 123(3), 499-507.</p>
          <p>[65] Fastenau, P. S., Shen, J., Dunn, D. W., Perkins, S. M., Hermann, B. P., & Austin, J. K. (2004). "Neuropsychological predictors of academic underachievement in pediatric epilepsy: Moderating roles of demographic, seizure, and psychosocial variables." <em>Epilepsia</em>, 45(10), 1261-1272.</p>
          <p>[66] Rovet, J. F. (1993). "The psychoeducational characteristics of children with Turner syndrome." <em>Journal of Learning Disabilities</em>, 26(5), 333-341.</p>
          <p>[67] Rivera, S. M., Menon, V., White, C. D., Glaser, B., & Reiss, A. L. (2002). "Functional brain activation during arithmetic processing in females with fragile X syndrome is related to FMR1 protein expression." <em>Human Brain Mapping</em>, 16(4), 206-218.</p>
          <p>[68] De Smedt, B., Devriendt, K., Fryns, J. P., Vogels, A., Gewillig, M., & Swillen, A. (2007). "Intellectual abilities in a large sample of children with Velo-Cardio-Facial Syndrome: An update." <em>Journal of Intellectual Disability Research</em>, 51(9), 666-670.</p>
          <p>[69] Landerl, K., Fussenegger, B., Moll, K., & Willburger, E. (2009). "Dyslexia and dyscalculia: Two learning disorders with different cognitive profiles." <em>Journal of Experimental Child Psychology</em>, 103(3), 309-324.</p>
          <p>[70] Zentall, S. S. (1990). "Fact-retrieval automatization and math problem solving by learning disabled, attention-disordered, and normal adolescents." <em>Journal of Educational Psychology</em>, 82(4), 856-865.</p>
          <p>[71] Pieters, S., Desoete, A., Roeyers, H., Vanderswalmen, R., & Van Waelvelde, H. (2012). "Behind mathematical learning disabilities: What about visual perception and motor skills?" <em>Learning and Individual Differences</em>, 22(4), 498-504.</p>
          <p>[72] Swanson, H. L., & Sachse-Lee, C. (2001). "Mathematical problem solving and working memory in children with learning disabilities: Both executive and phonological processes are important." <em>Journal of Experimental Child Psychology</em>, 79(3), 294-321.</p>
          <p>[73] Rubinsten, O., & Henik, A. (2009). "Developmental dyscalculia: Heterogeneity might not mean different mechanisms." <em>Trends in Cognitive Sciences</em>, 13(2), 92-99.</p>
          <p>[74] Geary, D. C., Hoard, M. K., Byrd-Craven, J., Nugent, L., & Numtee, C. (2007). "Cognitive mechanisms underlying achievement deficits in children with mathematical learning disability." <em>Child Development</em>, 78(4), 1343-1359.</p>
          <p>[75] Karagiannakis, G., Baccaglini-Frank, A., & Papadatos, Y. (2014). "Mathematical learning difficulties subtypes classification." <em>Frontiers in Human Neuroscience</em>, 8, 57.</p>
          <p>[76] Reigosa-Crespo, V., Valdés-Sosa, M., Butterworth, B., Estévez, N., Rodríguez, M., Santos, E., ... & Lage, A. (2012). "Basic numerical capacities and prevalence of developmental dyscalculia: The Havana Survey." <em>Developmental Psychology</em>, 48(1), 123-135.</p>
          <p>[77] Dehaene, S., Izard, V., Spelke, E., & Pica, P. (2008). "Log or linear? Distinct intuitions of the number scale in Western and Amazonian indigene cultures." <em>Science</em>, 320(5880), 1217-1220.</p>
          <p>[78] Ramaa, S., & Gowramma, I. P. (2002). "A systematic procedure for identifying and classifying children with dyscalculia among primary school children in India." <em>Dyslexia</em>, 8(2), 67-85.</p>
          <p>[79] Miller, K. F., Smith, C. M., Zhu, J., & Zhang, H. (1995). "Preschool origins of cross-national differences in mathematical competence: The role of number-naming systems." <em>Psychological Science</em>, 6(1), 56-60.</p>
          <p>[80] Miura, I. T., Okamoto, Y., Kim, C. C., Steere, M., & Fayol, M. (1993). "First graders' cognitive representation of number and understanding of place value: Cross-national comparisons: France, Japan, Korea, Sweden, and the United States." <em>Journal of Educational Psychology</em>, 85(1), 24-30.</p>
          <p>[81] Göbel, S. M., Watson, S. E., Lervåg, A., & Hulme, C. (2014). "Children's arithmetic development: It is number knowledge, not the approximate number sense, that counts." <em>Psychological Science</em>, 25(3), 789-798.</p>
          <p>[82] Butterworth, B. (2005). "The development of arithmetical abilities." <em>Journal of Child Psychology and Psychiatry</em>, 46(1), 3-18.</p>
          <p>[83] De Smedt, B., & Gilmore, C. K. (2011). "Defective number module or impaired access? Numerical magnitude processing in first graders with mathematical difficulties." <em>Journal of Experimental Child Psychology</em>, 108(2), 278-292.</p>
          <p>[84] Wilson, A. J., & Dehaene, S. (2007). "Number sense and developmental dyscalculia." In D. Coch, G. Dawson, & K. W. Fischer (Eds.), <em>Human behavior, learning, and the developing brain: Atypical development</em> (pp. 212-238). Guilford Press.</p>
          <p>[85] Geary, D. C., Hoard, M. K., Nugent, L., & Byrd-Craven, J. (2008). "Development of number line representations in children with mathematical learning disability." <em>Developmental Neuropsychology</em>, 33(3), 277-299.</p>
          <p>[86] Jordan, N. C., Kaplan, D., Ramineni, C., & Locuniak, M. N. (2009). "Early math matters: Kindergarten number competence and later mathematics outcomes." <em>Developmental Psychology</em>, 45(3), 850-867.</p>
          <p>[87] Kaufmann, L., Mazzocco, M. M., Dowker, A., von Aster, M., Göbel, S. M., Grabner, R. H., ... & Nuerk, H. C. (2013). "Dyscalculia from a developmental and differential perspective." <em>Frontiers in Psychology</em>, 4, 516.</p>
          <p>[88] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[89] Shalev, R. S., Manor, O., Kerem, B., Ayali, M., Badichi, N., Friedlander, Y., & Gross-Tsur, V. (2001). "Developmental dyscalculia is a familial learning disability." <em>Journal of Learning Disabilities</em>, 34(1), 59-65.</p>
          <p>[90] Gersten, R., Chard, D. J., Jayanthi, M., Baker, S. K., Morphy, P., & Flojo, J. (2009). "Mathematics instruction for students with learning disabilities: A meta-analysis of instructional components." <em>Review of Educational Research</em>, 79(3), 1202-1242.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyscalculia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyscalculia
        </a>
      </div>
    </article>
  );
}
