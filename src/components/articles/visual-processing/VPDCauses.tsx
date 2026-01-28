import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface VPDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function VPDCauses({ setCurrentArticle }: VPDCausesProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('visual-processing'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Visual Processing Disorder
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Visual Processing Disorder: Causes & Origins
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Visual Processing Disorder arises from differences in how the brain processes visual information 
            rather than problems with the eyes themselves.<sup>[1]</sup> Understanding the causes involves 
            examining neurological development, genetic factors, and various influences on visual system 
            function.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Distinction: Vision vs. Visual Processing</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHNjYW58ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain imaging and neural pathways"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Eyes vs. Brain</h3>
          <p className="mb-4">
            The eyes function like cameras, capturing visual information.<sup>[3]</sup> Visual processing 
            occurs in the brain—interpreting, organizing, and making sense of what the eyes see.<sup>[4]</sup> 
            VPD involves brain-based differences, not eye-based problems.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Normal Vision with Processing Difficulties</h3>
          <p className="mb-4">
            Individuals with VPD typically have normal visual acuity—20/20 vision or correctable to normal 
            with glasses.<sup>[6]</sup> The eyes see clearly; the brain processes differently.<sup>[7]</sup> 
            This distinction is crucial for understanding VPD's origins.<sup>[8]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Basis of VPD</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Processing Pathways</h3>
          <p className="mb-4">
            Visual information travels from the retina through the optic nerve to various brain regions.<sup>[9]</sup> 
            The lateral geniculate nucleus relays information to the visual cortex.<sup>[10]</sup> From there, 
            two major pathways process visual information: the ventral stream (object recognition, "what" 
            pathway) and the dorsal stream (spatial processing, "where" pathway).<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dorsal and Ventral Stream Differences</h3>
          <p className="mb-4">
            The ventral stream, projecting to the temporal lobe, processes object identification, form, and 
            color.<sup>[12]</sup> The dorsal stream, projecting to the parietal lobe, processes spatial 
            relationships, motion, and visual-motor integration.<sup>[13]</sup> Differences in either pathway 
            can contribute to specific VPD profiles.<sup>[14]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Occipital, Parietal, and Temporal Lobe Functions</h3>
          <p className="mb-4">
            The occipital lobe processes basic visual features like edges, angles, and colors.<sup>[15]</sup> 
            The parietal lobe integrates spatial information and guides visual-motor actions.<sup>[16]</sup> 
            The temporal lobe recognizes complex objects and faces.<sup>[17]</sup> Atypical development or 
            function in these regions underlies VPD.<sup>[18]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neural Connectivity</h3>
          <p className="mb-4">
            Visual processing requires coordinated activity across multiple brain regions.<sup>[19]</sup> 
            Differences in connectivity—how brain regions communicate—may contribute to VPD.<sup>[20]</sup> 
            White matter pathways connecting visual areas may show differences in structure or function.<sup>[21]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHN0dWR5fGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Research and genetic studies"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Familial Patterns</h3>
          <p className="mb-4">
            Visual processing difficulties often run in families, suggesting genetic contributions.<sup>[22]</sup> 
            Parents or siblings of children with VPD may have similar difficulties or related conditions like 
            dyslexia.<sup>[23]</sup> Family studies support genetic influences on visual processing abilities.<sup>[24]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Shared Genetics with Learning Disabilities</h3>
          <p className="mb-4">
            VPD frequently co-occurs with dyslexia, dyscalculia, and other learning disabilities.<sup>[25]</sup> 
            Shared genetic factors may influence multiple aspects of cognitive development including visual 
            processing, language, and mathematics.<sup>[26]</sup> Genes affecting brain development broadly 
            may contribute to multiple neurodevelopmental variations.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Complex Genetic Architecture</h3>
          <p className="mb-4">
            Visual processing abilities likely involve many genes each contributing small effects.<sup>[28]</sup> 
            No single "VPD gene" has been identified; rather, multiple genetic variations interact with 
            environmental factors.<sup>[29]</sup> This complexity makes genetic research challenging.<sup>[30]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Development</h3>
          <p className="mb-4">
            Visual processing abilities develop throughout childhood as the brain matures.<sup>[31]</sup> 
            Atypical developmental trajectories—differences in timing or pattern of brain development—may 
            result in persistent visual processing differences.<sup>[32]</sup> Some visual skills continue 
            maturing into adolescence.<sup>[33]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Critical Periods</h3>
          <p className="mb-4">
            Certain developmental windows are particularly important for visual system organization.<sup>[34]</sup> 
            Early visual experience shapes neural connections in visual processing areas.<sup>[35]</sup> 
            Disruptions during critical periods may have lasting effects on visual processing abilities.<sup>[36]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neuroplasticity</h3>
          <p className="mb-4">
            The brain's ability to change and adapt—neuroplasticity—continues throughout life but is highest 
            during development.<sup>[37]</sup> This plasticity allows both the initial development of visual 
            processing skills and potential for improvement with intervention.<sup>[38]</sup> However, it 
            also means early experiences shape visual processing development.<sup>[39]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prenatal and Perinatal Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal Influences</h3>
          <p className="mb-4">
            Factors affecting fetal brain development may influence visual processing systems.<sup>[40]</sup> 
            Prenatal exposure to alcohol, drugs, infections, or toxins can affect neurological development 
            including visual pathways.<sup>[41]</sup> Maternal health and nutrition during pregnancy influence 
            fetal brain development.<sup>[42]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Premature Birth</h3>
          <p className="mb-4">
            Prematurity is associated with increased risk of various developmental differences including 
            visual processing difficulties.<sup>[43]</sup> The visual system continues developing in utero; 
            premature birth interrupts this process.<sup>[44]</sup> Complications of prematurity may affect 
            brain development.<sup>[45]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Birth Complications</h3>
          <p className="mb-4">
            Hypoxia (oxygen deprivation), birth trauma, or other perinatal complications affecting the brain 
            may impact visual processing development.<sup>[46]</sup> The extent and location of any brain 
            injury influences which functions are affected.<sup>[47]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental and Experiential Factors</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nfGVufDF8fHx8MTY3NDUzNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child learning and development"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Experience</h3>
          <p className="mb-4">
            Early visual experience shapes visual system development.<sup>[48]</sup> Rich, varied visual 
            stimulation supports optimal development.<sup>[49]</sup> Limited visual experiences or atypical 
            visual environments may affect visual processing development, though this alone rarely causes VPD.<sup>[50]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Vision Problems in Early Childhood</h3>
          <p className="mb-4">
            Uncorrected vision problems during critical developmental periods may affect visual processing 
            development.<sup>[51]</sup> If the brain receives blurry or misaligned visual input, visual 
            processing pathways may develop differently.<sup>[52]</sup> Early vision screening and correction 
            are important.<sup>[53]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Practice and Skill Development</h3>
          <p className="mb-4">
            Visual processing skills develop through use.<sup>[54]</sup> Children who engage in activities 
            developing visual skills (puzzles, drawing, construction toys, reading) practice these abilities.<sup>[55]</sup> 
            However, lack of practice typically doesn't cause VPD—rather, children with VPD may avoid 
            activities they find difficult.<sup>[56]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Conditions and Injuries</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Acquired Brain Injury</h3>
          <p className="mb-4">
            Traumatic brain injury, stroke, or other brain injuries affecting visual processing areas can 
            cause acquired visual processing difficulties.<sup>[57]</sup> Damage location determines which 
            visual processing abilities are affected.<sup>[58]</sup> This demonstrates the neurological basis 
            of visual processing.<sup>[59]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurological Conditions</h3>
          <p className="mb-4">
            Certain neurological conditions affecting brain development or function—cerebral palsy, epilepsy, 
            or neurodevelopmental disorders—may include visual processing difficulties as one component.<sup>[60]</sup> 
            The broader condition affects multiple neurological functions including visual processing.<sup>[61]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurodevelopmental Variations</h3>
          <p className="mb-4">
            VPD frequently accompanies other neurodevelopmental conditions like autism, ADHD, or learning 
            disabilities.<sup>[62]</sup> Shared neurological factors may underlie multiple conditions.<sup>[63]</sup> 
            The brain develops as an integrated system; differences in one area often relate to differences 
            in others.<sup>[64]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Magnocellular Theory</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Magnocellular vs. Parvocellular Pathways</h3>
          <p className="mb-4">
            The visual system has two parallel pathways beginning in the retina: magnocellular (processing 
            motion, contrast, and rapid changes) and parvocellular (processing color, detail, and form).<sup>[65]</sup> 
            One theory proposes that dyslexia and some visual processing difficulties involve magnocellular 
            pathway deficits.<sup>[66]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Evidence and Controversy</h3>
          <p className="mb-4">
            Research shows some individuals with reading disabilities have magnocellular pathway differences.<sup>[67]</sup> 
            However, this theory is debated—not all individuals with dyslexia or VPD show these differences, 
            and the relationship to reading difficulties is complex.<sup>[68]</sup> Magnocellular deficits 
            may contribute to some but not all cases.<sup>[69]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationship to Specific Learning Disabilities</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD and Dyslexia</h3>
          <p className="mb-4">
            Visual processing difficulties commonly co-occur with dyslexia.<sup>[70]</sup> While dyslexia 
            primarily involves phonological processing, visual processing also contributes to reading.<sup>[71]</sup> 
            Some propose shared neurological factors; others see them as separate but often co-occurring 
            conditions.<sup>[72]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD and Dyscalculia</h3>
          <p className="mb-4">
            Mathematics, particularly geometry and visual-spatial math, relies heavily on visual processing.<sup>[73]</sup> 
            Visual-spatial processing deficits contribute to some cases of dyscalculia.<sup>[74]</sup> The 
            relationship between visual processing and mathematical abilities is significant.<sup>[75]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD and Dysgraphia</h3>
          <p className="mb-4">
            Visual-motor integration is essential for handwriting.<sup>[76]</sup> Many individuals with dysgraphia 
            have visual-motor processing deficits.<sup>[77]</sup> Difficulty translating visual information 
            into motor output affects writing quality.<sup>[78]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Individual Variation in Causes</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNpdHklMjBwZW9wbGV8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Diversity of individuals"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multiple Pathways to VPD</h3>
          <p className="mb-4">
            Different individuals may develop VPD through different mechanisms.<sup>[79]</sup> Genetic factors, 
            developmental differences, or neurological variations may all contribute.<sup>[80]</sup> VPD likely 
            represents a final common pathway from multiple different origins.<sup>[81]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heterogeneity of VPD</h3>
          <p className="mb-4">
            VPD is heterogeneous—different individuals have different patterns of strengths and weaknesses.<sup>[82]</sup> 
            This reflects different underlying causes affecting different visual processing components.<sup>[83]</sup> 
            Understanding individual profiles is more important than finding single universal causes.<sup>[84]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Current Understanding and Ongoing Research</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neuroimaging Contributions</h3>
          <p className="mb-4">
            Brain imaging studies reveal structural and functional differences in visual processing regions 
            in individuals with VPD or related conditions.<sup>[85]</sup> These studies support the neurological 
            basis of VPD and identify specific brain differences.<sup>[86]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Longitudinal Studies</h3>
          <p className="mb-4">
            Following children over time helps clarify how visual processing develops and whether early 
            differences persist or improve.<sup>[87]</sup> Developmental trajectories provide insights into 
            causes and prognosis.<sup>[88]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Integration of Multiple Factors</h3>
          <p className="mb-4">
            Current understanding recognizes that VPD likely arises from interactions among genetic 
            predisposition, brain development, and environmental factors.<sup>[89]</sup> No single factor 
            alone typically causes VPD; multiple influences combine.<sup>[90]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Understanding VPD Origins:</h3>
            <div className="text-sm">
              <p>
                Visual Processing Disorder arises from neurological differences in brain regions and pathways 
                processing visual information.<sup>[91]</sup> Genetic factors, developmental differences, and 
                various neurological influences contribute to VPD's origins.<sup>[92]</sup> VPD is distinct 
                from vision problems—the eyes typically function normally while the brain processes visual 
                information differently.<sup>[93]</sup> Understanding these neurological origins helps 
                clarify that VPD reflects real brain-based differences, not lack of effort or attention.<sup>[94]</sup> 
                Ongoing research continues illuminating the complex factors contributing to visual processing 
                development and differences.<sup>[95]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[2] Williams, L. J., & DeAngelis, G. C. (2007). "The neural basis of visual processing." In M. Gazzaniga (Ed.), <em>The cognitive neurosciences</em> (4th ed., pp. 203-218). Cambridge: MIT Press.</p>
          <p>[3] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[4] Goodale, M. A., & Milner, A. D. (1992). "Separate visual pathways for perception and action." <em>Trends in Neurosciences</em>, 15(1), 20-25.</p>
          <p>[5] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[6] American Optometric Association. (2017). "Comprehensive adult eye and vision examination." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[7] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[8] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[9] Hubel, D. H., & Wiesel, T. N. (1977). "Functional architecture of macaque monkey visual cortex." <em>Proceedings of the Royal Society of London B: Biological Sciences</em>, 198(1130), 1-59.</p>
          <p>[10] Casagrande, V. A. (1994). "A third parallel visual pathway to primate area V1." <em>Trends in Neurosciences</em>, 17(7), 305-310.</p>
          <p>[11] Mishkin, M., Ungerleider, L. G., & Macko, K. A. (1983). "Object vision and spatial vision: Two cortical pathways." <em>Trends in Neurosciences</em>, 6, 414-417.</p>
          <p>[12] Goodale, M. A., & Milner, A. D. (1992). "Separate visual pathways for perception and action." <em>Trends in Neurosciences</em>, 15(1), 20-25.</p>
          <p>[13] Ungerleider, L. G., & Haxby, J. V. (1994). "'What' and 'where' in the human brain." <em>Current Opinion in Neurobiology</em>, 4(2), 157-165.</p>
          <p>[14] Williams, L. J., & DeAngelis, G. C. (2007). "The neural basis of visual processing." In M. Gazzaniga (Ed.), <em>The cognitive neurosciences</em> (4th ed., pp. 203-218). Cambridge: MIT Press.</p>
          <p>[15] Hubel, D. H., & Wiesel, T. N. (1977). "Functional architecture of macaque monkey visual cortex." <em>Proceedings of the Royal Society of London B: Biological Sciences</em>, 198(1130), 1-59.</p>
          <p>[16] Culham, J. C., & Kanwisher, N. G. (2001). "Neuroimaging of cognitive functions in human parietal cortex." <em>Current Opinion in Neurobiology</em>, 11(2), 157-163.</p>
          <p>[17] Kanwisher, N., McDermott, J., & Chun, M. M. (1997). "The fusiform face area: A module in human extrastriate cortex specialized for face perception." <em>Journal of Neuroscience</em>, 17(11), 4302-4311.</p>
          <p>[18] Williams, L. J., & DeAngelis, G. C. (2007). "The neural basis of visual processing." In M. Gazzaniga (Ed.), <em>The cognitive neurosciences</em> (4th ed., pp. 203-218). Cambridge: MIT Press.</p>
          <p>[19] Felleman, D. J., & Van Essen, D. C. (1991). "Distributed hierarchical processing in the primate cerebral cortex." <em>Cerebral Cortex</em>, 1(1), 1-47.</p>
          <p>[20] Eden, G. F., VanMeter, J. W., Rumsey, J. M., Maisog, J. M., Woods, R. P., & Zeffiro, T. A. (1996). "Abnormal processing of visual motion in dyslexia revealed by functional brain imaging." <em>Nature</em>, 382(6586), 66-69.</p>
          <p>[21] Wandell, B. A., Dumoulin, S. O., & Brewer, A. A. (2007). "Visual field maps in human cortex." <em>Neuron</em>, 56(2), 366-383.</p>
          <p>[22] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[23] Bishop, D. V. (2006). "Developmental cognitive genetics: How psychology can inform genetics and vice versa." <em>Quarterly Journal of Experimental Psychology</em>, 59(7), 1153-1168.</p>
          <p>[24] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[25] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[26] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[27] Bishop, D. V. (2006). "Developmental cognitive genetics: How psychology can inform genetics and vice versa." <em>Quarterly Journal of Experimental Psychology</em>, 59(7), 1153-1168.</p>
          <p>[28] Plomin, R., DeFries, J. C., McClearn, G. E., & McGuffin, P. (2008). <em>Behavioral genetics</em> (5th ed.). New York: Worth Publishers.</p>
          <p>[29] Bishop, D. V. (2006). "Developmental cognitive genetics: How psychology can inform genetics and vice versa." <em>Quarterly Journal of Experimental Psychology</em>, 59(7), 1153-1168.</p>
          <p>[30] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[31] Johnson, M. H. (2001). "Functional brain development in humans." <em>Nature Reviews Neuroscience</em>, 2(7), 475-483.</p>
          <p>[32] Karmiloff-Smith, A. (2009). "Nativism versus neuroconstructivism: Rethinking the study of developmental disorders." <em>Developmental Psychology</em>, 45(1), 56-63.</p>
          <p>[33] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[34] Knudsen, E. I. (2004). "Sensitive periods in the development of the brain and behavior." <em>Journal of Cognitive Neuroscience</em>, 16(8), 1412-1425.</p>
          <p>[35] Lewis, T. L., & Maurer, D. (2005). "Multiple sensitive periods in human visual development: Evidence from visually deprived children." <em>Developmental Psychobiology</em>, 46(3), 163-183.</p>
          <p>[36] Knudsen, E. I. (2004). "Sensitive periods in the development of the brain and behavior." <em>Journal of Cognitive Neuroscience</em>, 16(8), 1412-1425.</p>
          <p>[37] Kolb, B., & Gibb, R. (2011). "Brain plasticity and behaviour in the developing brain." <em>Journal of the Canadian Academy of Child and Adolescent Psychiatry</em>, 20(4), 265-276.</p>
          <p>[38] Merzenich, M. M., & Jenkins, W. M. (1993). "Reorganization of cortical representations of the hand following alterations of skin inputs induced by nerve injury, skin island transfers, and experience." <em>Journal of Hand Therapy</em>, 6(2), 89-104.</p>
          <p>[39] Lewis, T. L., & Maurer, D. (2005). "Multiple sensitive periods in human visual development: Evidence from visually deprived children." <em>Developmental Psychobiology</em>, 46(3), 163-183.</p>
          <p>[40] Rees, S., & Inder, T. (2005). "Fetal and neonatal origins of altered brain development." <em>Early Human Development</em>, 81(9), 753-761.</p>
          <p>[41] Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). "Fetal alcohol spectrum disorders: Neuropsychological and behavioral features." <em>Neuropsychology Review</em>, 21(2), 81-101.</p>
          <p>[42] Georgieff, M. K. (2007). "Nutrition and the developing brain: Nutrient priorities and measurement." <em>American Journal of Clinical Nutrition</em>, 85(2), 614S-620S.</p>
          <p>[43] Böhm, B., Smedler, A. C., & Forssberg, H. (2004). "Impulse control, working memory and other executive functions in preterm children when starting school." <em>Acta Paediatrica</em>, 93(10), 1363-1371.</p>
          <p>[44] Penn, A. A., & Shatz, C. J. (1999). "Brain waves and brain wiring: The role of endogenous and sensory-driven neural activity in development." <em>Pediatric Research</em>, 45(4), 447-458.</p>
          <p>[45] Volpe, J. J. (2009). "Brain injury in premature infants: A complex amalgam of destructive and developmental disturbances." <em>Lancet Neurology</em>, 8(1), 110-124.</p>
          <p>[46] Anderson, P., Doyle, L. W., & Victorian Infant Collaborative Study Group. (2003). "Neurobehavioral outcomes of school-age children born extremely low birth weight or very preterm in the 1990s." <em>JAMA</em>, 289(24), 3264-3272.</p>
          <p>[47] Ment, L. R., Hirtz, D., & Hüppi, P. S. (2009). "Imaging biomarkers of outcome in the developing preterm brain." <em>Lancet Neurology</em>, 8(11), 1042-1055.</p>
          <p>[48] Lewis, T. L., & Maurer, D. (2005). "Multiple sensitive periods in human visual development: Evidence from visually deprived children." <em>Developmental Psychobiology</em>, 46(3), 163-183.</p>
          <p>[49] Kovács, I. (2000). "Human development of perceptual organization." <em>Vision Research</em>, 40(10-12), 1301-1310.</p>
          <p>[50] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[51] Barrett, B. T., Bradley, A., & McGraw, P. V. (2004). "Understanding the neural basis of amblyopia." <em>The Neuroscientist</em>, 10(2), 106-117.</p>
          <p>[52] Lewis, T. L., & Maurer, D. (2005). "Multiple sensitive periods in human visual development: Evidence from visually deprived children." <em>Developmental Psychobiology</em>, 46(3), 163-183.</p>
          <p>[53] American Optometric Association. (2017). "Comprehensive pediatric eye and vision examination." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[54] Kovács, I. (2000). "Human development of perceptual organization." <em>Vision Research</em>, 40(10-12), 1301-1310.</p>
          <p>[55] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[56] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[57] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[58] Farah, M. J. (2004). <em>Visual agnosia</em> (2nd ed.). Cambridge: MIT Press.</p>
          <p>[59] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[60] Fazzi, E., Signorini, S. G., Bova, S. M., La Piana, R., Ondei, P., Bertone, C., ... & Bianchi, P. E. (2007). "Spectrum of visual disorders in children with cerebral visual impairment." <em>Journal of Child Neurology</em>, 22(3), 294-301.</p>
          <p>[61] Dutton, G. N. (2003). "Cognitive vision, its disorders and differential diagnosis in adults and children: Knowing where and what things are." <em>Eye</em>, 17(3), 289-304.</p>
          <p>[62] Dakin, S., & Frith, U. (2005). "Vagaries of visual perception in autism." <em>Neuron</em>, 48(3), 497-507.</p>
          <p>[63] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[64] Johnson, M. H. (2001). "Functional brain development in humans." <em>Nature Reviews Neuroscience</em>, 2(7), 475-483.</p>
          <p>[65] Livingstone, M., & Hubel, D. (1988). "Segregation of form, color, movement, and depth: Anatomy, physiology, and perception." <em>Science</em>, 240(4853), 740-749.</p>
          <p>[66] Stein, J. (2001). "The magnocellular theory of developmental dyslexia." <em>Dyslexia</em>, 7(1), 12-36.</p>
          <p>[67] Eden, G. F., VanMeter, J. W., Rumsey, J. M., Maisog, J. M., Woods, R. P., & Zeffiro, T. A. (1996). "Abnormal processing of visual motion in dyslexia revealed by functional brain imaging." <em>Nature</em>, 382(6586), 66-69.</p>
          <p>[68] Skottun, B. C. (2000). "The magnocellular deficit theory of dyslexia: The evidence from contrast sensitivity." <em>Vision Research</em>, 40(1), 111-127.</p>
          <p>[69] Stein, J. (2001). "The magnocellular theory of developmental dyslexia." <em>Dyslexia</em>, 7(1), 12-36.</p>
          <p>[70] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[71] Eden, G. F., VanMeter, J. W., Rumsey, J. M., Maisog, J. M., Woods, R. P., & Zeffiro, T. A. (1996). "Abnormal processing of visual motion in dyslexia revealed by functional brain imaging." <em>Nature</em>, 382(6586), 66-69.</p>
          <p>[72] Ramus, F. (2003). "Developmental dyslexia: Specific phonological deficit or general sensorimotor dysfunction?" <em>Current Opinion in Neurobiology</em>, 13(2), 212-218.</p>
          <p>[73] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[74] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[75] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[76] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[77] Cornhill, H., & Case-Smith, J. (1996). "Factors that relate to good and poor handwriting." <em>American Journal of Occupational Therapy</em>, 50(9), 732-739.</p>
          <p>[78] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[79] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[80] Johnson, M. H. (2001). "Functional brain development in humans." <em>Nature Reviews Neuroscience</em>, 2(7), 475-483.</p>
          <p>[81] Karmiloff-Smith, A. (2009). "Nativism versus neuroconstructivism: Rethinking the study of developmental disorders." <em>Developmental Psychology</em>, 45(1), 56-63.</p>
          <p>[82] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[83] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[84] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[85] Eden, G. F., VanMeter, J. W., Rumsey, J. M., Maisog, J. M., Woods, R. P., & Zeffiro, T. A. (1996). "Abnormal processing of visual motion in dyslexia revealed by functional brain imaging." <em>Nature</em>, 382(6586), 66-69.</p>
          <p>[86] Williams, L. J., & DeAngelis, G. C. (2007). "The neural basis of visual processing." In M. Gazzaniga (Ed.), <em>The cognitive neurosciences</em> (4th ed., pp. 203-218). Cambridge: MIT Press.</p>
          <p>[87] Johnson, M. H. (2001). "Functional brain development in humans." <em>Nature Reviews Neuroscience</em>, 2(7), 475-483.</p>
          <p>[88] Kovács, I. (2000). "Human development of perceptual organization." <em>Vision Research</em>, 40(10-12), 1301-1310.</p>
          <p>[89] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
          <p>[90] Bishop, D. V. (2006). "Developmental cognitive genetics: How psychology can inform genetics and vice versa." <em>Quarterly Journal of Experimental Psychology</em>, 59(7), 1153-1168.</p>
          <p>[91] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[92] Williams, L. J., & DeAngelis, G. C. (2007). "The neural basis of visual processing." In M. Gazzaniga (Ed.), <em>The cognitive neurosciences</em> (4th ed., pp. 203-218). Cambridge: MIT Press.</p>
          <p>[93] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[94] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[95] Pennington, B. F. (2006). "From single to multiple deficit models of developmental disorders." <em>Cognition</em>, 101(2), 385-413.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('visual-processing'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Visual Processing Disorder
        </a>
      </div>
    </article>
  );
}
