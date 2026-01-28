import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface VPDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function VPDOverview({ setCurrentArticle }: VPDOverviewProps) {
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
        Visual Processing Disorder: Overview
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Visual Processing Disorder (VPD), also called visual perceptual disorder, is a neurological condition 
            affecting how the brain interprets and makes sense of visual information.<sup>[1]</sup> Despite having 
            normal eyesight and healthy eyes, individuals with VPD experience difficulties processing what they 
            see.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding Visual Processing</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHNjYW58ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain imaging and visual processing"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Vision vs. Visual Processing</h3>
          <p className="mb-4">
            Vision refers to the eye's ability to see clearly—detecting light, color, and detail.<sup>[3]</sup> 
            Visual processing, in contrast, involves what the brain does with visual information after the eyes 
            send it to the brain.<sup>[4]</sup> It's entirely possible to have 20/20 vision but still struggle 
            with visual processing.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Visual Processing System</h3>
          <p className="mb-4">
            Visual information travels from the eyes through the optic nerves to various brain regions responsible 
            for interpretation, organization, and integration with other senses and cognitive functions.<sup>[6]</sup> 
            The occipital lobe processes basic visual information; the temporal lobe identifies objects; the 
            parietal lobe manages spatial relationships and visual-motor integration.<sup>[7]</sup> In VPD, 
            differences in these processing pathways affect how visual information is interpreted and used.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multiple Visual Processing Skills</h3>
          <p className="mb-4">
            Visual processing encompasses numerous distinct but interconnected skills.<sup>[9]</sup> Individuals 
            with VPD may have deficits in one area or multiple areas, creating varied symptom profiles.<sup>[10]</sup> 
            This complexity means VPD manifests differently across individuals.<sup>[11]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Types of Visual Processing Skills</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Discrimination</h3>
          <p className="mb-4">
            The ability to notice differences between similar objects, shapes, letters, or numbers.<sup>[12]</sup> 
            Deficits cause difficulty distinguishing "b" from "d," similar-looking words, or finding differences 
            in pictures.<sup>[13]</sup> Reading becomes challenging when letters appear similar.<sup>[14]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Figure-Ground</h3>
          <p className="mb-4">
            The ability to distinguish an object from its background.<sup>[15]</sup> Difficulties manifest as 
            losing place while reading, trouble finding items in cluttered spaces, or difficulty focusing on 
            specific visual information when surrounded by other visual stimuli.<sup>[16]</sup> Busy worksheets 
            or crowded pages overwhelm.<sup>[17]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Sequencing</h3>
          <p className="mb-4">
            The ability to see and remember the order of visual information.<sup>[18]</sup> Deficits lead to 
            letter or number reversals, difficulty following sequences, problems with multi-step visual 
            instructions, or challenges remembering spelling patterns.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Memory</h3>
          <p className="mb-4">
            The ability to remember visual information—both short-term and long-term.<sup>[20]</sup> Difficulties 
            include trouble remembering what was just read, difficulty recognizing familiar faces or places, 
            problems learning sight words, or challenges visualizing information.<sup>[21]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Spatial Processing</h3>
          <p className="mb-4">
            The ability to understand spatial relationships and position in space.<sup>[22]</sup> Deficits cause 
            confusion with directions (left/right, up/down), poor spatial awareness and navigation, difficulty 
            with maps or graphs, or challenges understanding mathematical concepts involving space.<sup>[23]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Motor Integration</h3>
          <p className="mb-4">
            The ability to coordinate visual information with motor movements.<sup>[24]</sup> Also called 
            eye-hand coordination, deficits affect handwriting, catching/throwing balls, cutting with scissors, 
            or any task requiring visual guidance of movement.<sup>[25]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Closure</h3>
          <p className="mb-4">
            The ability to recognize objects or forms when only part is visible.<sup>[26]</sup> Difficulties 
            include trouble recognizing partially obscured objects, challenges identifying incomplete pictures 
            or letters, or problems predicting what comes next in a sequence.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Form Constancy</h3>
          <p className="mb-4">
            The ability to recognize objects regardless of size, orientation, or context.<sup>[28]</sup> Deficits 
            mean struggling to recognize the same letter in different fonts, sizes, or orientations, or having 
            difficulty generalizing shapes across contexts.<sup>[29]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence and Demographics</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNjaG9vbHxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Children in school setting"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Common is VPD?</h3>
          <p className="mb-4">
            Precise prevalence data for VPD is limited due to varying definitions and diagnostic criteria.<sup>[30]</sup> 
            Estimates suggest visual processing difficulties affect a significant portion of children with learning 
            disabilities.<sup>[31]</sup> Some research indicates 75% or more of students with learning disabilities 
            have visual processing deficits.<sup>[32]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Age of Recognition</h3>
          <p className="mb-4">
            VPD often becomes apparent when children begin school and face demands for reading, writing, and 
            visual-motor tasks.<sup>[33]</sup> However, signs may be present earlier in difficulty with puzzles, 
            recognizing shapes, or visual memory games.<sup>[34]</sup> VPD continues affecting individuals throughout 
            life, though compensatory strategies often develop.<sup>[35]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gender and Other Demographics</h3>
          <p className="mb-4">
            Research on gender differences in VPD is limited and inconsistent.<sup>[36]</sup> VPD occurs across 
            all demographic groups, cultures, and socioeconomic levels.<sup>[37]</sup> Recognition and diagnosis 
            may be influenced by access to assessment services.<sup>[38]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impact on Daily Life and Learning</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Challenges</h3>
          <p className="mb-4">
            Reading is profoundly affected by VPD—discriminating letters, tracking lines of text, remembering 
            sight words, and maintaining reading comprehension all involve visual processing.<sup>[39]</sup> 
            Writing and handwriting require visual-motor integration and visual memory.<sup>[40]</sup> Mathematics, 
            especially geometry and problems requiring visual-spatial reasoning, can be challenging.<sup>[41]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Daily Living Skills</h3>
          <p className="mb-4">
            Beyond academics, VPD affects dressing (buttoning, zippers, matching clothes), eating (using utensils, 
            pouring), hygiene tasks, navigation and spatial awareness, organizing personal spaces, and sports or 
            physical activities requiring visual-motor coordination.<sup>[42]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social and Emotional Impact</h3>
          <p className="mb-4">
            Struggles with tasks others find easy can affect self-esteem.<sup>[43]</sup> Children may be labeled 
            as "lazy" or "careless" when difficulties actually stem from visual processing differences.<sup>[44]</sup> 
            Social activities involving visual-motor skills (sports, games, arts and crafts) may be avoided or 
            create anxiety.<sup>[45]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD and Dyslexia</h3>
          <p className="mb-4">
            Visual processing difficulties frequently accompany dyslexia.<sup>[46]</sup> While dyslexia primarily 
            involves phonological processing, visual processing skills also contribute to reading proficiency.<sup>[47]</sup> 
            Many individuals have both conditions, requiring comprehensive support addressing both areas.<sup>[48]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD and ADHD</h3>
          <p className="mb-4">
            Children with ADHD commonly have visual processing deficits.<sup>[49]</sup> Attention and visual 
            processing interact—difficulty processing visual information affects attention, while attention 
            problems affect visual processing performance.<sup>[50]</sup> Distinguishing between the two requires 
            careful assessment.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD and Autism Spectrum Disorder</h3>
          <p className="mb-4">
            Atypical visual processing is common in autism.<sup>[52]</sup> This may include different visual 
            attention patterns, difficulties with face processing, or enhanced detail-focused visual perception.<sup>[53]</sup> 
            The nature of visual processing differences may differ between isolated VPD and autism-related visual 
            differences.<sup>[54]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD and Nonverbal Learning Disability</h3>
          <p className="mb-4">
            NVLD centrally involves visual-spatial processing deficits.<sup>[55]</sup> Many characteristics overlap 
            between VPD and NVLD, particularly in visual-spatial and visual-motor domains.<sup>[56]</sup> Some 
            consider visual-spatial processing deficits a core feature of NVLD.<sup>[57]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD and Developmental Coordination Disorder</h3>
          <p className="mb-4">
            Visual-motor integration difficulties link VPD and DCD (dyspraxia).<sup>[58]</sup> Both conditions 
            affect coordination, though through different mechanisms.<sup>[59]</sup> Co-occurrence is common.<sup>[60]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">VPD Across the Lifespan</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1531537571171-a707bf2683da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3BhbiUyMGFnZXN8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Different life stages"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Childhood</h3>
          <p className="mb-4">
            Young children may show signs through difficulty with puzzles, shape recognition, copying designs, 
            or visual memory games.<sup>[61]</sup> Delays in learning to recognize letters or numbers may 
            appear.<sup>[62]</sup> Clumsiness or difficulty with visual-motor tasks like coloring or cutting 
            may be present.<sup>[63]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Age Years</h3>
          <p className="mb-4">
            Academic demands reveal VPD more clearly.<sup>[64]</sup> Reading difficulties, handwriting struggles, 
            math challenges, and organization problems become apparent.<sup>[65]</sup> Social and emotional impacts 
            may increase as children compare themselves to peers.<sup>[66]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adolescence</h3>
          <p className="mb-4">
            Visual processing challenges continue affecting academics, particularly with increased reading and 
            writing demands.<sup>[67]</sup> Driving may present challenges due to visual-spatial and visual-motor 
            demands.<sup>[68]</sup> Career interests and strengths often crystallize, guiding educational planning.<sup>[69]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adulthood</h3>
          <p className="mb-4">
            Adults with VPD have typically developed compensation strategies, though core difficulties persist.<sup>[70]</sup> 
            Career selection may reflect visual processing strengths and challenges.<sup>[71]</sup> Technology and 
            accommodations enable success in many fields.<sup>[72]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths Often Associated with VPD</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Verbal and Auditory Strengths</h3>
          <p className="mb-4">
            Many individuals with visual processing challenges develop strong verbal and auditory processing 
            skills.<sup>[73]</sup> Oral communication, listening comprehension, and verbal reasoning may be 
            relative strengths.<sup>[74]</sup> Audiobooks and verbal instruction often work better than visual 
            materials.<sup>[75]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Specific Visual Strengths</h3>
          <p className="mb-4">
            VPD doesn't mean all visual abilities are weak.<sup>[76]</sup> Individuals may have strong abilities 
            in areas not affected by their specific deficits—for example, excellent visual memory despite poor 
            visual-motor integration.<sup>[77]</sup> Understanding the profile of strengths and weaknesses is 
            important.<sup>[78]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creative and Innovative Thinking</h3>
          <p className="mb-4">
            Developing workarounds for visual processing challenges often requires creative problem-solving.<sup>[79]</sup> 
            Different ways of perceiving and processing visual information may support unique perspectives or 
            creativity in certain domains.<sup>[80]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Distinguishing VPD from Vision Problems</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Refractive Errors</h3>
          <p className="mb-4">
            Nearsightedness, farsightedness, and astigmatism affect how clearly the eye focuses images.<sup>[81]</sup> 
            These are correctable with glasses or contacts.<sup>[82]</sup> VPD persists even with perfect visual 
            acuity—the issue is processing, not seeing.<sup>[83]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Eye Teaming and Focusing Problems</h3>
          <p className="mb-4">
            Convergence insufficiency, accommodative dysfunction, and other binocular vision problems affect how 
            the two eyes work together.<sup>[84]</sup> Vision therapy can address these eye-based issues.<sup>[85]</sup> 
            VPD involves the brain's interpretation of visual input, not eye mechanics.<sup>[86]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Coexistence of Vision and Processing Issues</h3>
          <p className="mb-4">
            It's possible to have both vision problems and visual processing disorder.<sup>[87]</sup> Comprehensive 
            assessment addresses both possibilities.<sup>[88]</sup> Treating vision problems may improve some 
            symptoms but won't fully address visual processing deficits.<sup>[89]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Why Recognition Matters</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Accurate Understanding</h3>
          <p className="mb-4">
            Recognizing VPD provides accurate explanation for struggles that might otherwise be misunderstood 
            as lack of effort or ability.<sup>[90]</sup> Children and adults gain validation that their difficulties 
            are real and have a neurological basis.<sup>[91]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Appropriate Interventions</h3>
          <p className="mb-4">
            Diagnosis guides targeted interventions—vision therapy, occupational therapy, educational 
            accommodations, and strategy development.<sup>[92]</sup> Without recognition, support may be 
            misdirected or insufficient.<sup>[93]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Advocacy and Accommodation</h3>
          <p className="mb-4">
            Understanding VPD enables individuals to advocate for needed accommodations in school, work, and 
            daily life.<sup>[94]</sup> Knowing what helps and why informs effective self-management.<sup>[95]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Points:</h3>
            <div className="text-sm">
              <p>
                Visual Processing Disorder affects how the brain interprets visual information, not how clearly 
                the eyes see.<sup>[96]</sup> It encompasses multiple distinct visual processing skills including 
                discrimination, figure-ground, sequencing, memory, spatial processing, motor integration, and 
                closure.<sup>[97]</sup> VPD significantly impacts reading, writing, mathematics, daily living 
                skills, and can affect self-esteem and social participation.<sup>[98]</sup> It frequently co-occurs 
                with other neurodivergent conditions but can also exist independently.<sup>[99]</sup> With 
                appropriate recognition, assessment, and support, individuals with VPD can develop effective 
                strategies and achieve success.<sup>[100]</sup>
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
          <p>[4] Newcomb, R., & Halloran, J. (2005). "Visual perceptual disorders and remediation." In M. Scheiman & M. W. Rouse (Eds.), <em>Optometric management of learning-related vision problems</em> (pp. 313-349). St. Louis: Mosby.</p>
          <p>[5] Grisham, D., Sheppard, M. M., & Tran, W. U. (1993). "Visual symptoms and reading performance." <em>Optometry and Vision Science</em>, 70(5), 384-391.</p>
          <p>[6] Goodale, M. A., & Milner, A. D. (1992). "Separate visual pathways for perception and action." <em>Trends in Neurosciences</em>, 15(1), 20-25.</p>
          <p>[7] Mishkin, M., Ungerleider, L. G., & Macko, K. A. (1983). "Object vision and spatial vision: Two cortical pathways." <em>Trends in Neurosciences</em>, 6, 414-417.</p>
          <p>[8] Eden, G. F., VanMeter, J. W., Rumsey, J. M., Maisog, J. M., Woods, R. P., & Zeffiro, T. A. (1996). "Abnormal processing of visual motion in dyslexia revealed by functional brain imaging." <em>Nature</em>, 382(6586), 66-69.</p>
          <p>[9] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[10] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[11] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[12] Reynolds, C. R., Pearson, N. A., & Voress, J. K. (2002). <em>Developmental Test of Visual Perception—Adolescent and Adult</em>. Austin: Pro-Ed.</p>
          <p>[13] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[14] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[15] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[16] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[17] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[18] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[19] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[20] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[21] Benton, A. L., Sivan, A. B., Hamsher, K. deS., Varney, N. R., & Spreen, O. (1994). <em>Contributions to neuropsychological assessment</em> (2nd ed.). New York: Oxford University Press.</p>
          <p>[22] Newcombe, F., & Ratcliff, G. (1989). "Disorders of visuospatial analysis." In F. Boller & J. Grafman (Eds.), <em>Handbook of neuropsychology</em> (Vol. 2, pp. 333-356). Amsterdam: Elsevier.</p>
          <p>[23] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[24] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[25] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[26] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[27] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[28] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[29] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[30] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[31] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[32] Kulp, M. T., & Schmidt, P. P. (1996). "Visual predictors of reading performance in kindergarten and first grade children." <em>Optometry and Vision Science</em>, 73(4), 255-262.</p>
          <p>[33] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[34] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[35] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[36] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[37] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[38] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[39] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[40] Cornhill, H., & Case-Smith, J. (1996). "Factors that relate to good and poor handwriting." <em>American Journal of Occupational Therapy</em>, 50(9), 732-739.</p>
          <p>[41] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[42] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[43] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[44] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[45] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[46] Eden, G. F., VanMeter, J. W., Rumsey, J. M., Maisog, J. M., Woods, R. P., & Zeffiro, T. A. (1996). "Abnormal processing of visual motion in dyslexia revealed by functional brain imaging." <em>Nature</em>, 382(6586), 66-69.</p>
          <p>[47] Stein, J. (2001). "The magnocellular theory of developmental dyslexia." <em>Dyslexia</em>, 7(1), 12-36.</p>
          <p>[48] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[49] Gould, T. D., Bastain, T. M., Israel, M. E., Hommer, D. W., & Castellanos, F. X. (2001). "Altered performance on an ocular fixation task in attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 50(8), 633-635.</p>
          <p>[50] Karatekin, C. (2004). "Development of attentional allocation in the dual task paradigm." <em>International Journal of Psychophysiology</em>, 52(1), 7-21.</p>
          <p>[51] Scheiman, M., Mitchell, G. L., Cotter, S., Cooper, J., Kulp, M., Rouse, M., ... & Wensveen, J. (2005). "A randomized clinical trial of treatments for convergence insufficiency in children." <em>Archives of Ophthalmology</em>, 123(1), 14-24.</p>
          <p>[52] Dakin, S., & Frith, U. (2005). "Vagaries of visual perception in autism." <em>Neuron</em>, 48(3), 497-507.</p>
          <p>[53] Simmons, D. R., Robertson, A. E., McKay, L. S., Toal, E., McAleer, P., & Pollick, F. E. (2009). "Vision in autism spectrum disorders." <em>Vision Research</em>, 49(22), 2705-2739.</p>
          <p>[54] Pellicano, E., Gibson, L., Maybery, M., Durkin, K., & Badcock, D. R. (2005). "Abnormal global processing along the dorsal visual pathway in autism: A possible mechanism for weak visuospatial coherence?" <em>Neuropsychologia</em>, 43(7), 1044-1053.</p>
          <p>[55] Rourke, B. P. (1989). <em>Nonverbal learning disabilities: The syndrome and the model</em>. New York: Guilford Press.</p>
          <p>[56] Drummond, C. R., Ahmad, S. A., & Rourke, B. P. (2005). "Rules for the classification of younger children with Nonverbal Learning Disabilities and Basic Phonological Processing Disabilities." <em>Archives of Clinical Neuropsychology</em>, 20(2), 171-182.</p>
          <p>[57] Mamen, M. (2007). <em>Understanding nonverbal learning disabilities: A common-sense guide for parents and professionals</em>. London: Jessica Kingsley Publishers.</p>
          <p>[58] Wilson, P. H., & McKenzie, B. E. (1998). "Information processing deficits associated with developmental coordination disorder: A meta-analysis of research findings." <em>Journal of Child Psychology and Psychiatry</em>, 39(6), 829-840.</p>
          <p>[59] Lord, R., & Hulme, C. (1987). "Perceptual judgements of normal and clumsy children." <em>Developmental Medicine & Child Neurology</em>, 29(2), 250-257.</p>
          <p>[60] Schoemaker, M. M., & Kalverboer, A. F. (1994). "Social and affective problems of children who are clumsy: How early do they begin?" <em>Adapted Physical Activity Quarterly</em>, 11(2), 130-140.</p>
          <p>[61] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[62] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[63] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[64] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[65] Kulp, M. T., & Schmidt, P. P. (1996). "Visual predictors of reading performance in kindergarten and first grade children." <em>Optometry and Vision Science</em>, 73(4), 255-262.</p>
          <p>[66] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[67] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[68] Anstey, K. J., Wood, J., Lord, S., & Walker, J. G. (2005). "Cognitive, sensory and physical factors enabling driving safety in older adults." <em>Clinical Psychology Review</em>, 25(1), 45-65.</p>
          <p>[69] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[70] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[71] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[72] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[73] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[74] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[75] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[76] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[77] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[78] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[79] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[80] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[81] American Optometric Association. (2017). "Comprehensive adult eye and vision examination." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[82] Grosvenor, T. (2007). <em>Primary care optometry</em> (5th ed.). St. Louis: Butterworth-Heinemann.</p>
          <p>[83] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[84] Cooper, J., & Jamal, N. (2012). "Convergence insufficiency—a major review." <em>Optometry</em>, 83(4), 137-158.</p>
          <p>[85] Scheiman, M., Mitchell, G. L., Cotter, S., Cooper, J., Kulp, M., Rouse, M., ... & Wensveen, J. (2005). "A randomized clinical trial of treatments for convergence insufficiency in children." <em>Archives of Ophthalmology</em>, 123(1), 14-24.</p>
          <p>[86] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[87] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[88] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[89] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[90] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[91] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[92] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[93] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[94] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[95] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[96] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[97] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[98] Kulp, M. T., & Schmidt, P. P. (1996). "Visual predictors of reading performance in kindergarten and first grade children." <em>Optometry and Vision Science</em>, 73(4), 255-262.</p>
          <p>[99] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[100] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
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
