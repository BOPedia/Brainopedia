import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface TwiceExceptionalCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function TwiceExceptionalCauses({ setCurrentArticle }: TwiceExceptionalCausesProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('twice-exceptional'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Twice-Exceptional
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Twice-Exceptional: Causes & Origins
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Understanding the causes of twice-exceptionality requires examining both the origins of giftedness 
            and the causes of various disabilities, as well as how these conditions co-occur.<sup>[1]</sup> 
            Research increasingly shows that the same neurological differences can contribute to both exceptional 
            abilities and specific challenges.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxETkElMjBzY2llbmNlfGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="DNA science"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heritability of Both Traits</h3>
          <p className="mb-4">
            Both giftedness and many disabilities have significant genetic components.<sup>[3]</sup> Intelligence 
            is highly heritable, with estimates of 50-80% genetic contribution.<sup>[4]</sup> Similarly, conditions 
            like dyslexia, ADHD, and autism show strong genetic influences.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Shared Genetic Risk Factors</h3>
          <p className="mb-4">
            Some genetic variants associated with high intelligence also increase risk for certain conditions.<sup>[6]</sup> 
            Research has identified genetic overlap between high cognitive ability and autism, ADHD, and other 
            neurodevelopmental conditions.<sup>[7]</sup> The same genes that contribute to advanced cognitive 
            abilities may increase vulnerability to certain disabilities.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pleiotropy</h3>
          <p className="mb-4">
            Pleiotropy—when one gene affects multiple traits—may explain some instances of twice-exceptionality.<sup>[9]</sup> 
            Genetic variants that enhance one cognitive ability may simultaneously create challenges in another 
            area.<sup>[10]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Patterns</h3>
          <p className="mb-4">
            Families often show clustering of both giftedness and disabilities.<sup>[11]</sup> It's common for 
            2e individuals to have family members who are gifted, have learning disabilities, or are themselves 
            twice-exceptional.<sup>[12]</sup> Studies of gifted individuals with dyslexia show strong familial 
            patterns for both traits.<sup>[13]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Structure and Function</h3>
          <p className="mb-4">
            Neuroimaging studies reveal that twice-exceptional individuals often show both the brain 
            characteristics associated with giftedness and those associated with their specific disability.<sup>[14]</sup> 
            For example, gifted individuals with dyslexia may show enhanced right-hemisphere activation typical 
            of giftedness alongside left-hemisphere differences characteristic of dyslexia.<sup>[15]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neural Connectivity Differences</h3>
          <p className="mb-4">
            Research suggests that both giftedness and certain disabilities involve atypical neural connectivity.<sup>[16]</sup> 
            Enhanced connectivity in some brain regions may support advanced abilities while reduced connectivity 
            in others contributes to specific deficits.<sup>[17]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurotransmitter Systems</h3>
          <p className="mb-4">
            Variations in neurotransmitter systems, particularly dopamine, may contribute to both high ability 
            and conditions like ADHD.<sup>[18]</sup> The same dopaminergic variations that enhance creativity 
            and divergent thinking may also affect attention regulation.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Processing Speed and Working Memory</h3>
          <p className="mb-4">
            Many 2e individuals show dissociations between reasoning abilities and processing speed or working 
            memory.<sup>[20]</sup> Advanced reasoning circuits may develop alongside weaknesses in processing 
            efficiency.<sup>[21]</sup> These processing differences have neurological underpinnings in white 
            matter connectivity and cortical processing efficiency.<sup>[22]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child development"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Asynchronous Development</h3>
          <p className="mb-4">
            Asynchronous development—uneven development across different domains—is characteristic of both 
            giftedness and many disabilities.<sup>[23]</sup> The same developmental processes that create 
            advanced abilities in some areas may contribute to delays or difficulties in others.<sup>[24]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Critical Period Variations</h3>
          <p className="mb-4">
            Brain development occurs through critical periods when specific skills are most readily acquired.<sup>[25]</sup> 
            Variations in the timing or duration of critical periods may contribute to uneven profiles of 
            abilities.<sup>[26]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal and Early Development</h3>
          <p className="mb-4">
            Both giftedness and disabilities can have origins in prenatal brain development.<sup>[27]</sup> 
            Factors affecting early brain development may influence both exceptional abilities and areas of 
            weakness.<sup>[28]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Influences</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Experiences</h3>
          <p className="mb-4">
            While twice-exceptionality has strong biological roots, environmental factors influence how abilities 
            and disabilities manifest.<sup>[29]</sup> Enriched environments may enhance gifts while also making 
            disabilities more apparent through increased demands.<sup>[30]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Compensation and Development</h3>
          <p className="mb-4">
            Environmental opportunities for developing strengths can help compensate for weaknesses.<sup>[31]</sup> 
            Conversely, lack of support for either the disability or the giftedness can impact overall development.<sup>[32]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Educational Experiences</h3>
          <p className="mb-4">
            School experiences don't cause twice-exceptionality but can affect how it presents and how students 
            cope.<sup>[33]</sup> Supportive environments may allow both abilities and challenges to be visible, 
            while unsupportive contexts may lead to masking or underachievement.<sup>[34]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Specific Condition Etiologies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Giftedness with Dyslexia</h3>
          <p className="mb-4">
            The co-occurrence of giftedness and dyslexia may reflect enhanced right-hemisphere and visual-spatial 
            abilities combined with left-hemisphere phonological processing difficulties.<sup>[35]</sup> Some 
            theories suggest that the same neural variations that enhance spatial reasoning and creativity may 
            contribute to reading challenges.<sup>[36]</sup> Geschwind and Galaburda's theory proposed that 
            prenatal testosterone influences brain lateralization, potentially creating both talents and 
            learning difficulties.<sup>[37]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Giftedness with ADHD</h3>
          <p className="mb-4">
            ADHD and giftedness share some neurological features including dopaminergic system variations.<sup>[38]</sup> 
            Both conditions are associated with divergent thinking and creativity.<sup>[39]</sup> The same 
            prefrontal cortex variations that support creative problem-solving may also affect executive function 
            and attention regulation.<sup>[40]</sup> Some research suggests that ADHD traits may confer advantages 
            for certain types of creative thinking.<sup>[41]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Giftedness with Autism</h3>
          <p className="mb-4">
            The genetic architecture of autism shows overlap with that of high intelligence.<sup>[42]</sup> 
            Some genetic variants associated with autism are also associated with high cognitive ability, 
            particularly in STEM fields.<sup>[43]</sup> The "intense world" theory of autism suggests that 
            enhanced neural connectivity may contribute to both exceptional abilities and sensory/social 
            challenges.<sup>[44]</sup> Savant abilities in autism represent an extreme form of asynchronous 
            development with peaks of extraordinary ability.<sup>[45]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Giftedness with Anxiety/Depression</h3>
          <p className="mb-4">
            While giftedness doesn't cause mental health conditions, certain features of giftedness may increase 
            vulnerability.<sup>[46]</sup> Heightened sensitivity, intensity, perfectionism, and existential 
            concerns may contribute to anxiety and depression in some gifted individuals.<sup>[47]</sup> 
            Overexcitabilities, particularly emotional and imaginational, may predispose to emotional difficulties.<sup>[48]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Theoretical Models</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Asynchrony Model</h3>
          <p className="mb-4">
            Silverman's theory of asynchronous development suggests that gifted individuals naturally develop 
            unevenly, with the degree of asynchrony often proportional to intellectual ability.<sup>[49]</sup> 
            In twice-exceptional individuals, this asynchrony is even more pronounced, creating significant 
            discrepancies between areas of strength and weakness.<sup>[50]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dual Differentiation Theory</h3>
          <p className="mb-4">
            This framework proposes that 2e students require differentiation for both their gifts and their 
            disabilities, recognizing that the two exceptionalities interact.<sup>[51]</sup> The same neurological 
            substrate that produces giftedness may also contribute to disability.<sup>[52]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurodiversity Perspective</h3>
          <p className="mb-4">
            The neurodiversity framework views twice-exceptionality as a natural variation in human neurology.<sup>[53]</sup> 
            This perspective suggests that the same brain differences that create challenges in conventional 
            environments may provide advantages in others.<sup>[54]</sup> Different neurological wiring creates 
            both strengths and weaknesses depending on demands and context.<sup>[55]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Trade-Off Model</h3>
          <p className="mb-4">
            Some researchers propose that certain cognitive abilities involve trade-offs, where enhancement 
            in one area comes at the cost of another.<sup>[56]</sup> Enhanced abilities in specific domains 
            may occur alongside vulnerabilities in others due to brain resources being allocated differently.<sup>[57]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Epigenetic Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwcmVzZWFyY2h8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Science research"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gene-Environment Interactions</h3>
          <p className="mb-4">
            Epigenetic mechanisms—how environment influences gene expression—may contribute to twice-exceptionality.<sup>[58]</sup> 
            Environmental factors can influence whether genetic predispositions manifest as abilities, disabilities, 
            or both.<sup>[59]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Stress and Development</h3>
          <p className="mb-4">
            Prenatal and early life stress can affect brain development through epigenetic mechanisms.<sup>[60]</sup> 
            These influences may contribute to the expression of both exceptional abilities and vulnerabilities.<sup>[61]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Why Both Conditions Co-Occur</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Statistical Co-Occurrence</h3>
          <p className="mb-4">
            Given the prevalence of both giftedness and disabilities in the population, some co-occurrence 
            would be expected by chance alone.<sup>[62]</sup> However, research suggests that certain combinations 
            occur more frequently than would be predicted by independent probabilities.<sup>[63]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Shared Etiological Pathways</h3>
          <p className="mb-4">
            For some combinations, shared biological pathways explain co-occurrence.<sup>[64]</sup> The same 
            genetic or neurological factors that create exceptional abilities may increase vulnerability to 
            specific disabilities.<sup>[65]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Compensation Theory</h3>
          <p className="mb-4">
            Some researchers propose that gifts may develop partly as compensation for disabilities.<sup>[66]</sup> 
            The brain's neuroplasticity may lead to enhanced development in intact pathways when other pathways 
            are impaired.<sup>[67]</sup> However, this theory doesn't fully explain twice-exceptionality, as 
            many 2e individuals show advanced abilities that exceed what compensation would require.<sup>[68]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Not Caused By:</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Poor Teaching or Parenting</h3>
          <p className="mb-4">
            Twice-exceptionality is not caused by inadequate instruction or parenting, though these factors 
            may affect how it manifests.<sup>[69]</sup> Both giftedness and disabilities have biological roots.<sup>[70]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Lack of Effort</h3>
          <p className="mb-4">
            The difficulties experienced by 2e students are not due to laziness or insufficient effort.<sup>[71]</sup> 
            Their challenges have neurological bases, and their inconsistent performance reflects genuine 
            variations in ability rather than inconsistent effort.<sup>[72]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intentional Underachievement</h3>
          <p className="mb-4">
            While some 2e students may develop patterns of underachievement, the initial discrepancy between 
            ability and achievement stems from the disability, not from deliberate choice.<sup>[73]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Current Understanding:</h3>
            <div className="text-sm">
              <p>
                Research increasingly supports the view that twice-exceptionality often reflects shared 
                neurological and genetic factors rather than simply the random co-occurrence of two separate 
                conditions.<sup>[74]</sup> The same brain differences that create exceptional abilities may 
                also create specific vulnerabilities.<sup>[75]</sup> Understanding these shared pathways helps 
                explain why certain combinations of giftedness and disability occur together and informs more 
                effective support strategies.<sup>[76]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[2] Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <em>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</em> (3rd ed.). Waco, TX: Prufrock Press.</p>
          <p>[3] Plomin, R., & Deary, I. J. (2015). "Genetics and intelligence differences: Five special findings." <em>Molecular Psychiatry</em>, 20(1), 98-108.</p>
          <p>[4] Bouchard, T. J., Jr. (2013). "The Wilson effect: The increase in heritability of IQ with age." <em>Twin Research and Human Genetics</em>, 16(5), 923-930.</p>
          <p>[5] Gialluisi, A., Andlauer, T. F., Mirza-Schreiber, N., Moll, K., Becker, J., Hoffmann, P., ... & Schulte-Körne, G. (2021). "Genome-wide association study reveals new insights into the heritability and genetic correlates of developmental dyslexia." <em>Molecular Psychiatry</em>, 26(7), 3004-3017.</p>
          <p>[6] Hill, W. D., Marioni, R. E., Maghzian, O., Ritchie, S. J., Hagenaars, S. P., McIntosh, A. M., ... & Deary, I. J. (2019). "A combined analysis of genetically correlated traits identifies 187 loci and a role for neurogenesis and myelination in intelligence." <em>Molecular Psychiatry</em>, 24(2), 169-181.</p>
          <p>[7] Clarke, T. K., Lupton, M. K., Fernandez-Pujals, A. M., Starr, J., Davies, G., Cox, S., ... & McIntosh, A. M. (2016). "Common polygenic risk for autism spectrum disorder (ASD) is associated with cognitive ability in the general population." <em>Molecular Psychiatry</em>, 21(3), 419-425.</p>
          <p>[8] Demange, P. A., Malanchini, M., Mallard, T. T., Biroli, P., Cox, S. R., Grotzinger, A. D., ... & Nivard, M. G. (2021). "Investigating the genetic architecture of noncognitive skills using GWAS-by-subtraction." <em>Nature Genetics</em>, 53(1), 35-44.</p>
          <p>[9] Pickrell, J. K., Berisa, T., Liu, J. Z., Ségurel, L., Tung, J. Y., & Hinds, D. A. (2016). "Detection and interpretation of shared genetic influences on 42 human traits." <em>Nature Genetics</em>, 48(7), 709-717.</p>
          <p>[10] Krapohl, E., Rimfeld, K., Shakeshaft, N. G., Trzaskowski, M., McMillan, A., Pingault, J. B., ... & Plomin, R. (2014). "The high heritability of educational achievement reflects many genetically influenced traits, not just intelligence." <em>Proceedings of the National Academy of Sciences</em>, 111(42), 15273-15278.</p>
          <p>[11] Winner, E. (2000). "The origins and ends of giftedness." <em>American Psychologist</em>, 55(1), 159-169.</p>
          <p>[12] Gilger, J. W., & Hynd, G. W. (2008). "Neurodevelopmental variation as a framework for thinking about the twice exceptional." <em>Roeper Review</em>, 30(4), 214-228.</p>
          <p>[13] Gilger, J. W., Pennington, B. F., & DeFries, J. C. (1992). "A twin study of the etiology of comorbidity: Attention-deficit hyperactivity disorder and dyslexia." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 31(2), 343-348.</p>
          <p>[14] van Viersen, S., Kroesbergen, E. H., Slot, E. M., & de Bree, E. H. (2014). "High reading skills mask dyslexia in gifted children." <em>Journal of Learning Disabilities</em>, 49(2), 189-199.</p>
          <p>[15] von Károlyi, C., Winner, E., Gray, W., & Sherman, G. F. (2003). "Dyslexia linked to talent: Global visual-spatial ability." <em>Brain and Language</em>, 85(3), 427-431.</p>
          <p>[16] Thatcher, R. W., North, D., & Biver, C. (2005). "EEG and intelligence: Relations between EEG coherence, EEG phase delay and power." <em>Clinical Neurophysiology</em>, 116(9), 2129-2141.</p>
          <p>[17] Geschwind, N., & Galaburda, A. M. (1987). <em>Cerebral lateralization: Biological mechanisms, associations, and pathology</em>. Cambridge, MA: MIT Press.</p>
          <p>[18] Volkow, N. D., Wang, G. J., Kollins, S. H., Wigal, T. L., Newcorn, J. H., Telang, F., ... & Swanson, J. M. (2009). "Evaluating dopamine reward pathway in ADHD: Clinical implications." <em>JAMA</em>, 302(10), 1084-1091.</p>
          <p>[19] Boot, E., Booij, J., Hasler, G., Zinkstok, J. R., de Haan, L., Linszen, D. H., & van Amelsvoort, T. A. (2008). "AMPT-induced monoamine depletion in humans: Evaluation of two alternative [123I] IBZM SPECT procedures." <em>European Journal of Nuclear Medicine and Molecular Imaging</em>, 35(7), 1350-1356.</p>
          <p>[20] Silverman, L. K. (2009). "The two-edged sword of compensation: How the gifted cope with learning disabilities." <em>Gifted Education International</em>, 25(2), 115-130.</p>
          <p>[21] Assouline, S. G., Foley Nicpon, M., & Whiteman, C. (2010). "Cognitive and psychosocial characteristics of gifted students with written language disability." <em>Gifted Child Quarterly</em>, 54(2), 102-115.</p>
          <p>[22] Penke, L., Maniega, S. M., Bastin, M. E., Valdés Hernández, M. C., Murray, C., Royle, N. A., ... & Deary, I. J. (2012). "Brain white matter tract integrity as a neural foundation for general intelligence." <em>Molecular Psychiatry</em>, 17(10), 1026-1030.</p>
          <p>[23] Silverman, L. K. (1997). "The construct of asynchronous development." <em>Peabody Journal of Education</em>, 72(3-4), 36-58.</p>
          <p>[24] Morelock, M. J., & Morrison, K. (1999). "Differentiating 'developmentally appropriate': The multidimensional curriculum model for young gifted children." <em>Roeper Review</em>, 21(3), 195-200.</p>
          <p>[25] Knudsen, E. I. (2004). "Sensitive periods in the development of the brain and behavior." <em>Journal of Cognitive Neuroscience</em>, 16(8), 1412-1425.</p>
          <p>[26] Newport, E. L., Bavelier, D., & Neville, H. J. (2001). "Critical thinking about critical periods: Perspectives on a critical period for language acquisition." In E. Dupoux (Ed.), <em>Language, brain and cognitive development: Essays in honor of Jacques Mehler</em> (pp. 481-502). Cambridge, MA: MIT Press.</p>
          <p>[27] Tau, G. Z., & Peterson, B. S. (2010). "Normal development of brain circuits." <em>Neuropsychopharmacology</em>, 35(1), 147-168.</p>
          <p>[28] Silbereis, J. C., Pochareddy, S., Zhu, Y., Li, M., & Sestan, N. (2016). "The cellular and molecular landscapes of the developing human central nervous system." <em>Neuron</em>, 89(2), 248-268.</p>
          <p>[29] Tucker-Drob, E. M., & Briley, D. A. (2014). "Continuity of genetic and environmental influences on cognition across the life span: A meta-analysis of longitudinal twin and adoption studies." <em>Psychological Bulletin</em>, 140(4), 949-979.</p>
          <p>[30] Sameroff, A. (2010). "A unified theory of development: A dialectic integration of nature and nurture." <em>Child Development</em>, 81(1), 6-22.</p>
          <p>[31] Reis, S. M., Neu, T. W., & McGuire, J. M. (1997). "Case studies of high-ability students with learning disabilities who have achieved." <em>Exceptional Children</em>, 63(4), 463-479.</p>
          <p>[32] Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). "Rethinking giftedness and gifted education: A proposed direction forward based on psychological science." <em>Psychological Science in the Public Interest</em>, 12(1), 3-54.</p>
          <p>[33] Bronfenbrenner, U., & Morris, P. A. (2006). "The bioecological model of human development." In W. Damon & R. M. Lerner (Eds.), <em>Handbook of child psychology: Vol. 1. Theoretical models of human development</em> (6th ed., pp. 793-828). Hoboken, NJ: Wiley.</p>
          <p>[34] Reis, S. M., & McCoach, D. B. (2000). "The underachievement of gifted students: What do we know and where do we go?" <em>Gifted Child Quarterly</em>, 44(3), 152-170.</p>
          <p>[35] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties, computer images and the ironies of creativity</em>. Amherst, NY: Prometheus Books.</p>
          <p>[36] Eide, B. L., & Eide, F. F. (2011). <em>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</em>. New York: Hudson Street Press.</p>
          <p>[37] Geschwind, N., & Behan, P. (1982). "Left-handedness: Association with immune disease, migraine, and developmental learning disorder." <em>Proceedings of the National Academy of Sciences</em>, 79(16), 5097-5100.</p>
          <p>[38] Antshel, K. M., Faraone, S. V., Maglione, K., Doyle, A., Fried, R., Seidman, L., & Biederman, J. (2008). "Temporal stability of ADHD in the high-IQ population: Results from the MGH Longitudinal Family Studies of ADHD." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 47(7), 817-825.</p>
          <p>[39] White, H. A., & Shah, P. (2006). "Uninhibited imaginations: Creativity in adults with attention-deficit/hyperactivity disorder." <em>Personality and Individual Differences</em>, 40(6), 1121-1131.</p>
          <p>[40] Arnsten, A. F., & Rubia, K. (2012). "Neurobiological circuits regulating attention, cognitive control, motivation, and emotion: Disruptions in neurodevelopmental psychiatric disorders." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 51(4), 356-367.</p>
          <p>[41] Fugate, C. M., Zentall, S. S., & Gentry, M. (2013). "Creativity and working memory in gifted students with and without characteristics of attention deficit hyperactive disorder." <em>Gifted Child Quarterly</em>, 57(4), 234-246.</p>
          <p>[42] Grove, J., Ripke, S., Als, T. D., Mattheisen, M., Walters, R. K., Won, H., ... & Børglum, A. D. (2019). "Identification of common genetic risk variants for autism spectrum disorder." <em>Nature Genetics</em>, 51(3), 431-444.</p>
          <p>[43] Baron-Cohen, S., Ashwin, E., Ashwin, C., Tavassoli, T., & Chakrabarti, B. (2009). "Talent in autism: Hyper-systemizing, hyper-attention to detail and sensory hypersensitivity." <em>Philosophical Transactions of the Royal Society B: Biological Sciences</em>, 364(1522), 1377-1383.</p>
          <p>[44] Markram, K., & Markram, H. (2010). "The intense world theory–A unifying theory of the neurobiology of autism." <em>Frontiers in Human Neuroscience</em>, 4, 224.</p>
          <p>[45] Treffert, D. A. (2009). "The savant syndrome: An extraordinary condition. A synopsis: Past, present, future." <em>Philosophical Transactions of the Royal Society B: Biological Sciences</em>, 364(1522), 1351-1357.</p>
          <p>[46] Neihart, M. (2002). "Gifted children and depression." In M. Neihart, S. M. Reis, N. M. Robinson, & S. M. Moon (Eds.), <em>The social and emotional development of gifted children</em> (pp. 93-101). Waco, TX: Prufrock Press.</p>
          <p>[47] Webb, J. T., Meckstroth, E. A., & Tolan, S. S. (1982). <em>Guiding the gifted child: A practical source for parents and teachers</em>. Scottsdale, AZ: Gifted Psychology Press.</p>
          <p>[48] Piechowski, M. M. (2006). "'Mellow out,' they say. If I only could": Intensities and sensitivities of the young and bright. Madison, WI: Yunasa Books.</p>
          <p>[49] Silverman, L. K. (2013). <em>Giftedness 101</em>. New York: Springer Publishing.</p>
          <p>[50] Morelock, M. J. (1992). "Giftedness: The view from within." <em>Understanding Our Gifted</em>, 4(3), 1, 11-15.</p>
          <p>[51] Baum, S. M., Cooper, C. R., & Neu, T. W. (2001). "Dual differentiation: An approach for meeting the curricular needs of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 477-490.</p>
          <p>[52] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
          <p>[53] Armstrong, T. (2010). <em>Neurodiversity: Discovering the extraordinary gifts of autism, ADHD, dyslexia, and other brain differences</em>. Philadelphia: Da Capo Press.</p>
          <p>[54] Singer, J. (2017). <em>NeuroDiversity: The birth of an idea</em>. Amazon.</p>
          <p>[55] Baron-Cohen, S. (2017). "Editorial Perspective: Neurodiversity—a revolutionary concept for autism and psychiatry." <em>Journal of Child Psychology and Psychiatry</em>, 58(6), 744-747.</p>
          <p>[56] Hills, T. T. (2006). "Animal foraging and the evolution of goal-directed cognition." <em>Cognitive Science</em>, 30(1), 3-41.</p>
          <p>[57] Cowan, N. (2010). "The magical mystery four: How is working memory capacity limited, and why?" <em>Current Directions in Psychological Science</em>, 19(1), 51-57.</p>
          <p>[58] Champagne, F. A., & Curley, J. P. (2009). "Epigenetic mechanisms mediating the long-term effects of maternal care on development." <em>Neuroscience & Biobehavioral Reviews</em>, 33(4), 593-600.</p>
          <p>[59] Meaney, M. J. (2010). "Epigenetics and the biological definition of gene × environment interactions." <em>Child Development</em>, 81(1), 41-79.</p>
          <p>[60] Bick, J., & Nelson, C. A. (2016). "Early adverse experiences and the developing brain." <em>Neuropsychopharmacology</em>, 41(1), 177-196.</p>
          <p>[61] Szyf, M. (2015). "Nongenetic inheritance and transgenerational epigenetics." <em>Trends in Molecular Medicine</em>, 21(2), 134-144.</p>
          <p>[62] McCoach, D. B., Kehle, T. J., Bray, M. A., & Siegle, D. (2001). "Best practices in the identification of gifted students with learning disabilities." <em>Psychology in the Schools</em>, 38(5), 403-411.</p>
          <p>[63] Brody, L. E., & Mills, C. J. (1997). "Gifted children with learning disabilities: A review of the issues." <em>Journal of Learning Disabilities</em>, 30(3), 282-296.</p>
          <p>[64] Gilger, J. W., & Hynd, G. W. (2008). "Neurodevelopmental variation as a framework for thinking about the twice exceptional." <em>Roeper Review</em>, 30(4), 214-228.</p>
          <p>[65] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[66] Karolyi, C. V., Ramos-Ford, V., & Gardner, H. (2003). "Multiple intelligences: A perspective on giftedness." In N. Colangelo & G. A. Davis (Eds.), <em>Handbook of gifted education</em> (3rd ed., pp. 100-112). Boston: Allyn & Bacon.</p>
          <p>[67] Merzenich, M. M., & Jenkins, W. M. (1995). "Cortical plasticity, learning, and learning dysfunction." In B. Julesz & I. Kovács (Eds.), <em>Maturational windows and adult cortical plasticity</em> (pp. 247-272). Reading, MA: Addison-Wesley.</p>
          <p>[68] Lovett, B. J., & Lewandowski, L. J. (2006). "Gifted students with learning disabilities: Who are they?" <em>Journal of Learning Disabilities</em>, 39(6), 515-527.</p>
          <p>[69] National Association for Gifted Children. (2013). <em>Position statement: Students with gifts and talents who have learning disabilities</em>. Washington, DC: Author.</p>
          <p>[70] Petrill, S. A., & Wilkerson, B. (2000). "Intelligence and achievement: A behavioral genetic perspective." <em>Educational Psychology Review</em>, 12(2), 185-199.</p>
          <p>[71] Trail, B. A. (2011). <em>Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students</em>. Waco, TX: Prufrock Press.</p>
          <p>[72] Baum, S. M., & Owen, S. V. (1988). "High ability/learning disabled students: How are they different?" <em>Gifted Child Quarterly</em>, 32(3), 321-326.</p>
          <p>[73] Rimm, S. B. (2008). "Underachievement syndrome: A national epidemic." In S. I. Pfeiffer (Ed.), <em>Handbook of giftedness in children</em> (pp. 424-443). New York: Springer.</p>
          <p>[74] Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). "Empirical investigation of twice-exceptionality: Where have we been and where are we going?" <em>Gifted Child Quarterly</em>, 55(1), 3-17.</p>
          <p>[75] Gilger, J. W., & Hynd, G. W. (2008). "Neurodevelopmental variation as a framework for thinking about the twice exceptional." <em>Roeper Review</em>, 30(4), 214-228.</p>
          <p>[76] Reis, S. M., Baum, S. M., & Burke, E. (2014). "An operational definition of twice-exceptional learners: Implications and applications." <em>Gifted Child Quarterly</em>, 58(3), 217-230.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('twice-exceptional'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Twice-Exceptional
        </a>
      </div>
    </article>
  );
}
