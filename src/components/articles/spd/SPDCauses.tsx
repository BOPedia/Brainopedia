import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SPDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function SPDCauses({ setCurrentArticle }: SPDCausesProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('spd'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to SPD
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        SPD: Causes & Origins
      </h1>

      <div className="space-y-8">
        {/* Introduction Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding the Origins of Sensory Processing Differences</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5lcnZvdXMlMjBzeXN0ZW0lMjBzZW5zb3J5fGVufDF8fHx8MTc2NzQwNjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain and nervous system pathways"
            className="w-96 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            The causes and origins of Sensory Processing Disorder are complex and multifaceted, involving neurological differences 
            in how the brain receives, processes, and integrates sensory information.<sup>[1][2]</sup> While research continues to 
            advance our understanding, SPD is recognized as a neurodevelopmental difference that reflects variations in brain 
            structure, connectivity, and function related to sensory processing.<sup>[3]</sup>
          </p>
          <p className="mb-4">
            Unlike some conditions with a single identifiable cause, SPD appears to result from a combination of genetic, 
            neurological, and environmental factors that influence how the nervous system develops and functions.<sup>[4][5]</sup> 
            Understanding these contributing factors helps frame SPD as a neurological difference rather than a behavioral 
            problem or parenting issue.
          </p>
        </div>

        {/* Neurological Basis Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Differences</h2>
          
          <p className="mb-4">
            A. Jean Ayres' foundational work proposed that sensory integration difficulties arise from inefficient neurological 
            processing—the brain's inability to organize and interpret sensory information effectively.<sup>[2][6]</sup> Modern 
            neuroimaging research has begun to identify specific neurological differences associated with sensory processing 
            challenges.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Structure and Connectivity</h3>
          <p className="mb-4">
            Research using diffusion tensor imaging (DTI) has identified differences in white matter microstructure in children 
            with sensory processing difficulties.<sup>[7]</sup> White matter contains the neural pathways that connect different 
            brain regions, and differences in these pathways can affect how efficiently sensory information travels through the 
            nervous system. Studies have found altered connectivity in sensory pathways, particularly those involved in tactile 
            and auditory processing.<sup>[8][9]</sup>
          </p>
          <p className="mb-4">
            Chang and colleagues found that children with sensory processing challenges show shared white matter disruption in 
            sensory pathways, with patterns that differ from those seen in autism spectrum disorder.<sup>[10]</sup> This suggests 
            that SPD may have distinct neurological signatures that differentiate it from other conditions.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory Processing Centers</h3>
          <p className="mb-4">
            Brain imaging studies have identified differences in how certain brain regions respond to sensory stimuli in 
            individuals with sensory processing differences.<sup>[5]</sup> The thalamus, which acts as a relay station for 
            sensory information, and sensory cortices may process information differently in individuals with SPD.<sup>[3]</sup>
          </p>
          <p className="mb-4">
            Research using EEG (electroencephalography) has shown that children with sensory over-responsivity demonstrate 
            different patterns of brain activity in response to sensory stimuli compared to typically developing children.<sup>[9][11]</sup> 
            These differences suggest variations in how the brain registers, modulates, and responds to sensory input.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurotransmitter Systems</h3>
          <p className="mb-4">
            Some research suggests that neurotransmitter systems—particularly those involving serotonin, dopamine, and GABA—may 
            play a role in sensory modulation.<sup>[12]</sup> These neurotransmitters help regulate how neurons communicate and 
            may influence sensory thresholds and responses. However, much of this research is preliminary and requires further 
            investigation.
          </p>
        </div>

        {/* Genetic Factors Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Contributions</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkbmElMjBnZW5ldGljc3xlbnwxfHx8fDE3MzY4MDY0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="DNA and genetic research"
            className="w-80 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <p className="mb-4">
            Evidence suggests that genetic factors contribute to sensory processing differences. Twin studies have demonstrated 
            that sensory processing traits have moderate heritability, indicating that both genetic and environmental factors 
            play a role.<sup>[13][14]</sup>
          </p>
          <p className="mb-4">
            Goldsmith and colleagues conducted a population-based twin study examining tactile and auditory defensiveness in 
            young children.<sup>[13]</sup> Their findings indicated significant genetic influence on these sensory traits, though 
            environmental factors also contributed. This suggests that sensory processing differences run in families and have 
            a biological basis.
          </p>
          <p className="mb-4">
            Parents of children with SPD often report experiencing similar sensory sensitivities themselves, supporting the idea 
            of familial patterns.<sup>[15]</sup> However, specific genes associated with SPD have not yet been definitively 
            identified, and the genetic architecture is likely complex, involving multiple genes with small effects rather than 
            a single causative gene.<sup>[3]</sup>
          </p>
        </div>

        {/* Prenatal and Perinatal Factors Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prenatal and Perinatal Factors</h2>
          
          <p className="mb-4">
            Various factors during pregnancy and birth may influence neurological development and sensory processing:<sup>[16]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prematurity and Birth Complications</h3>
          <p className="mb-4">
            Premature birth and low birth weight are associated with increased risk of sensory processing difficulties.<sup>[17][18]</sup> 
            The sensory systems undergo critical development during the final weeks of pregnancy, and premature infants may have 
            immature or less organized sensory processing capabilities. Additionally, premature infants often experience intensive 
            medical interventions that may affect sensory development.
          </p>
          <p className="mb-4">
            Birth complications such as fetal distress, oxygen deprivation, or other medical issues may also impact neurological 
            development in ways that affect sensory processing.<sup>[16]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal Exposures</h3>
          <p className="mb-4">
            While research is limited, some studies suggest that certain prenatal exposures—such as maternal stress, toxins, 
            or nutritional deficiencies—might influence fetal brain development and subsequent sensory processing.<sup>[3]</sup> 
            However, this remains an area requiring further investigation.
          </p>
        </div>

        {/* Environmental Influences Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental and Experiential Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGdyb3VwJTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc2NzQwNjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Children in various environments"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            While SPD has neurological and genetic foundations, environmental factors may also influence how sensory processing 
            develops and manifests:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory Experiences and Brain Development</h3>
          <p className="mb-4">
            The developing brain is shaped by sensory experiences, particularly during critical developmental periods.<sup>[6]</sup> 
            Ayres' theory emphasized the importance of sensory experiences for brain development.<sup>[6]</sup> Limited opportunities 
            for varied sensory-motor experiences might affect how sensory systems develop, though this is not the primary cause 
            of SPD.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Trauma and Adverse Experiences</h3>
          <p className="mb-4">
            In some cases, traumatic experiences or significant stress may affect sensory processing, particularly sensory 
            modulation.<sup>[20]</sup> Trauma can alter how the nervous system responds to sensory input, sometimes creating 
            sensory sensitivities or defensive responses. However, trauma-related sensory symptoms may differ from 
            neurodevelopmental sensory processing difficulties.
          </p>
        </div>

        {/* Co-occurring Conditions Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationship to Other Conditions</h2>
          
          <p className="mb-4">
            SPD frequently co-occurs with other neurodevelopmental conditions, suggesting shared neurological pathways and 
            overlapping pathways.<sup>[1]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Autism Spectrum Disorder</h3>
          <p className="mb-4">
            A high percentage of individuals with autism spectrum disorder (70-90%) also experience significant sensory processing 
            sensory challenges.<sup>[21][8]</sup> Research has identified both shared and distinct patterns of brain connectivity 
            in autism and SPD, suggesting overlapping but not identical neurological profiles.<sup>[10]</sup> Sensory symptoms are 
            now recognized in the diagnostic criteria for autism, reflecting their significance in the autistic experience.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">ADHD</h3>
          <p className="mb-4">
            Sensory processing differences are common in individuals with ADHD, with some studies finding sensory over-responsivity 
            in a significant percentage of children with attention challenges.<sup>[22][23]</sup> The overlap between ADHD and SPD includes 
            difficulties with sensory modulation, attention regulation, and executive function, as well as similarities 
            including differences in physiological responses to sensory stimuli.<sup>[12]</sup> The relationship between attention 
            and sensory processing is complex and bidirectional.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Coordination Disorder</h3>
          <p className="mb-4">
            Children with developmental coordination disorder (dyspraxia) often experience sensory processing differences, 
            particularly in proprioceptive and vestibular systems.<sup>[24]</sup> The connection between sensory processing 
            and motor planning highlights the integrated nature of sensory-motor development.
          </p>
        </div>

        {/* Theoretical Models Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Theoretical Models and Explanations</h2>
          
          <p className="mb-4">
            Several theoretical frameworks attempt to explain the mechanisms underlying sensory processing differences:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ayres Sensory Integration Theory</h3>
          <p className="mb-4">
            A. Jean Ayres proposed that SPD results from the brain's inefficient organization and integration of sensory 
            information from multiple sources.<sup>[2][6]</sup> She theorized that when sensory integration is inefficient, 
            individuals struggle to produce appropriate adaptive responses, affecting learning, behavior, and development. While 
            modern neuroscience has expanded our understanding, Ayres' foundational concepts remain influential.<sup>[25]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory Threshold and Modulation Theories</h3>
          <p className="mb-4">
            Dunn's model proposes that sensory processing patterns result from variations in neurological thresholds—the 
            amount of stimulation needed for the nervous system to notice and respond to sensory input.<sup>[26][19]</sup> Combined 
            with behavioral response patterns (passive vs. active), this model explains the diversity of sensory processing 
            profiles seen in SPD.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Predictive Coding and Bayesian Models</h3>
          <p className="mb-4">
            Recent theories suggest that sensory processing differences may involve atypical predictive processing—how the brain 
            predicts and interprets incoming sensory information.<sup>[28]</sup> These models propose that the nervous system 
            continuously makes predictions about sensory input and updates these predictions based on actual sensory experiences. 
            Differences in this predictive process might underlie sensory processing challenges.
          </p>
        </div>

        {/* Current Research Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Current Research Directions</h2>
          
          <p className="mb-4">
            Research into the causes of SPD continues to evolve, with several promising areas of investigation:
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neuroimaging Studies</h3>
          <p className="mb-4">
            Advanced neuroimaging techniques are providing new insights into the brain differences associated with sensory 
            processing challenges.<sup>[7][8]</sup> Studies using fMRI, DTI, and EEG are revealing patterns of brain structure, 
            connectivity, and activity that characterize SPD and differentiate it from other conditions.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Physiological Markers</h3>
          <p className="mb-4">
            Researchers are investigating physiological markers of sensory processing differences, including differences 
            in electrodermal responses (skin conductance), cortisol levels, and autonomic nervous system function.<sup>[11][12]</sup> 
            Identifying objective biological markers could improve diagnosis and understanding of SPD mechanisms.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genetic Research</h3>
          <p className="mb-4">
            Ongoing genetic studies aim to identify specific genes or gene variants associated with sensory processing traits.<sup>[13]</sup> 
            Understanding the genetic contributions to SPD could illuminate the biological pathways involved and potentially lead 
            to targeted interventions.
          </p>
        </div>

        {/* Important Considerations Section */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Important Considerations</h2>
          
          <p className="mb-4">
            When considering the causes and origins of SPD, several important points should be kept in mind:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Not a behavioral issue:</strong> SPD reflects genuine neurological differences in how 
            the nervous system is wired and functions, not choices, behaviors, or parenting practices.<sup>[19]</sup></li>
            <li className="mb-2"><strong>Complex and multifactorial:</strong> SPD likely results from an interaction between 
            genetic predisposition, neurological differences, and environmental factors rather than a single cause.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Individual variation:</strong> The specific causes and contributing factors may vary 
            significantly from person to person.</li>
            <li className="mb-2"><strong>Evolving understanding:</strong> Research into SPD is ongoing, and our understanding of 
            its causes continues to deepen as neuroscience advances and more studies investigate how sensory processing differences 
            emerges. Many questions remain about the precise mechanisms and causes.<sup>[1]</sup></li>
          </ul>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Miller, L. J., Anzalone, M. E., Lane, S. J., Cermak, S. A., & Osten, E. T. (2007). "Concept evolution in sensory integration: A proposed nosology for diagnosis." <em>American Journal of Occupational Therapy</em>, 61(2), 135-140.</p>
          <p>[2] Ayres, A. J. (1972). <em>Sensory Integration and Learning Disorders</em>. Los Angeles: Western Psychological Services.</p>
          <p>[3] Miller, L. J., Nielsen, D. M., Schoen, S. A., & Brett-Green, B. A. (2009). "Perspectives on sensory processing disorder: A call for translational research." <em>Frontiers in Integrative Neuroscience</em>, 3, 22.</p>
          <p>[4] Schaaf, R. C., & Lane, A. E. (2015). "Toward a best-practice protocol for assessment of sensory features in ASD." <em>Journal of Autism and Developmental Disorders</em>, 45(5), 1380-1395.</p>
          <p>[5] Brett-Green, B., Miller, L. J., Gavin, W. J., & Davies, P. L. (2008). "Multisensory integration in children: A preliminary ERP study." <em>Brain Research</em>, 1242, 283-290.</p>
          <p>[6] Ayres, A. J. (1979). <em>Sensory Integration and the Child</em>. Los Angeles: Western Psychological Services.</p>
          <p>[7] Ayres, A. J. (1972). "Types of sensory integrative dysfunction among disabled learners." <em>American Journal of Occupational Therapy</em>, 26(1), 13-18.</p>
          <p>[8] Owen, J. P., Marco, E. J., Desai, S., et al. (2013). "Abnormal white matter microstructure in children with sensory processing disorders." <em>NeuroImage: Clinical</em>, 2, 844-853.</p>
          <p>[9] Marco, E. J., Hinkley, L. B., Hill, S. S., & Nagarajan, S. S. (2011). "Sensory processing in autism: A review of neurophysiologic findings." <em>Pediatric Research</em>, 69(5), 48R-54R.</p>
          <p>[10] Davies, P. L., & Gavin, W. J. (2007). "Validating the diagnosis of sensory processing disorders using EEG technology." <em>American Journal of Occupational Therapy</em>, 61(2), 176-189.</p>
          <p>[11] Chang, Y. S., Owen, J. P., Desai, S. S., et al. (2014). "Autism and sensory processing disorders: Shared white matter disruption in sensory pathways but divergent connectivity in social-emotional pathways." <em>PLOS ONE</em>, 9(7), e103038.</p>
          <p>[12] Schoen, S. A., Miller, L. J., Brett-Green, B. A., & Nielsen, D. M. (2009). "Physiological and behavioral differences in sensory processing: A comparison of children with autism spectrum disorder and sensory modulation disorder." <em>Frontiers in Integrative Neuroscience</em>, 3, 29.</p>
          <p>[13] Lane, S. J., Reynolds, S., & Thacker, L. (2010). "Sensory over-responsivity and ADHD: Differentiating using electrodermal responses, cortisol, and anxiety." <em>Frontiers in Integrative Neuroscience</em>, 4, 8.</p>
          <p>[14] Goldsmith, H. H., Van Hulle, C. A., Arneson, C. L., Schreiber, J. E., & Gernsbacher, M. A. (2006). "A population-based twin study of parentally reported tactile and auditory defensiveness in young children." <em>Journal of Abnormal Child Psychology</em>, 34(3), 393-407.</p>
          <p>[15] Liss, M., Saulnier, C., Fein, D., & Kinsbourne, M. (2006). "Sensory and attention abnormalities in autistic spectrum disorders." <em>Autism</em>, 10(2), 155-172.</p>
          <p>[16] Ahn, R. R., Miller, L. J., Milberger, S., & McIntosh, D. N. (2004). "Prevalence of parents' perceptions of sensory processing disorders among kindergarten children." <em>American Journal of Occupational Therapy</em>, 58(3), 287-293.</p>
          <p>[17] Bundy, A. C., Lane, S. J., & Murray, E. A. (2002). <em>Sensory Integration: Theory and Practice</em> (2nd ed.). Philadelphia: F.A. Davis Company.</p>
          <p>[18] Case-Smith, J., Butcher, L., & Reed, D. (1998). "Parents' report of sensory responsiveness and temperament in preterm infants." <em>American Journal of Occupational Therapy</em>, 52(7), 547-555.</p>
          <p>[19] Bart, O., Shayevits, S., Gabis, L. V., & Morag, I. (2011). "Prediction of participation and sensory modulation of late preterm infants at 12 months: A prospective study." <em>Research in Developmental Disabilities</em>, 32(6), 2732-2738.</p>
          <p>[20] Dunn, W. (1997). "The impact of sensory processing abilities on the daily lives of young children and their families: A conceptual model." <em>Infants & Young Children</em>, 9(4), 23-35.</p>
          <p>[21] Schaaf, R. C., & Miller, L. J. (2005). "Occupational therapy using a sensory integrative approach for children with developmental disabilities." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 11(2), 143-148.</p>
          <p>[22] De Bellis, M. D. (2005). "The psychobiology of neglect." <em>Child Maltreatment</em>, 10(2), 150-172.</p>
          <p>[23] Ben-Sasson, A., Hen, L., Fluss, R., Cermak, S. A., Engel-Yeger, B., & Gal, E. (2009). "A meta-analysis of sensory modulation symptoms in individuals with autism spectrum disorders." <em>Journal of Autism and Developmental Disorders</em>, 39(1), 1-11.</p>
          <p>[24] American Psychiatric Association. (2013). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[25] Dunn, W., & Bennett, D. (2002). "Patterns of sensory processing in children with attention deficit hyperactivity disorder." <em>OTJR: Occupation, Participation and Health</em>, 22(1), 4-15.</p>
          <p>[26] Mangeot, S. D., Miller, L. J., McIntosh, D. N., et al. (2001). "Sensory modulation dysfunction in children with attention-deficit-hyperactivity disorder." <em>Developmental Medicine & Child Neurology</em>, 43(6), 399-406.</p>
          <p>[27] Cermak, S. A., & Larkin, D. (2002). "Developmental coordination disorder." In A. C. Bundy, S. J. Lane, & E. A. Murray (Eds.), <em>Sensory Integration: Theory and Practice</em> (2nd ed., pp. 215-248). Philadelphia: F.A. Davis.</p>
          <p>[28] Ben-Sasson, A., Carter, A. S., & Briggs-Gowan, M. J. (2009). "Sensory over-responsivity in elementary school: Prevalence and social-emotional correlates." <em>Journal of Abnormal Child Psychology</em>, 37(5), 705-716.</p>
          <p>[29] Dunn, W. (2001). "The sensations of everyday life: Empirical, theoretical, and pragmatic considerations." <em>American Journal of Occupational Therapy</em>, 55(6), 608-620.</p>
          <p>[30] Dunn, W. (2007). "Supporting children to participate successfully in everyday life by using sensory processing knowledge." <em>Infants & Young Children</em>, 20(2), 84-101.</p>
          <p>[31] Van de Cruys, S., Evers, K., Van der Hallen, R., et al. (2014). "Precise minds in uncertain worlds: Predictive coding in autism." <em>Psychological Review</em>, 121(4), 649-675.</p>
        </div>
      </section>
    </article>
  );
}
