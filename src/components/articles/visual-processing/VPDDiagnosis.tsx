import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface VPDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function VPDDiagnosis({ setCurrentArticle }: VPDDiagnosisProps) {
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
        Visual Processing Disorder: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Diagnosing Visual Processing Disorder requires comprehensive evaluation by qualified professionals 
            using standardized tests, observations, and functional assessments.<sup>[1]</sup> Accurate diagnosis 
            guides appropriate interventions and accommodations.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Who Diagnoses VPD?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmFsdWF0aW9uJTIwdGVzdGluZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Professional evaluation and testing"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Optometrists</h3>
          <p className="mb-4">
            Developmental or behavioral optometrists specialize in visual information processing beyond basic 
            eyesight.<sup>[3]</sup> They have additional training in visual perception, visual-motor integration, 
            and learning-related vision problems.<sup>[4]</sup> They can assess both eye function and visual 
            processing abilities.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Occupational Therapists</h3>
          <p className="mb-4">
            Occupational therapists evaluate visual perception and visual-motor integration as part of assessing 
            functional skills.<sup>[6]</sup> They use standardized tests of visual processing and observe how 
            visual processing affects daily activities.<sup>[7]</sup> OTs are particularly skilled in assessing 
            visual-motor integration and recommending practical interventions.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neuropsychologists</h3>
          <p className="mb-4">
            Neuropsychologists conduct comprehensive cognitive assessments including visual processing as one 
            component.<sup>[9]</sup> They can differentiate visual processing difficulties from other cognitive 
            issues and identify patterns across multiple domains.<sup>[10]</sup> Neuropsychological evaluation 
            is particularly valuable when multiple conditions are suspected.<sup>[11]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Educational Psychologists</h3>
          <p className="mb-4">
            School psychologists or educational psychologists may include visual processing measures in 
            psychoeducational evaluations.<sup>[12]</sup> They assess how visual processing affects academic 
            performance and learning.<sup>[13]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multidisciplinary Teams</h3>
          <p className="mb-4">
            Comprehensive evaluation often involves multiple professionals providing different perspectives.<sup>[14]</sup> 
            A developmental optometrist might assess visual processing while an occupational therapist evaluates 
            functional impacts, and an educational psychologist examines academic implications.<sup>[15]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Evaluation Process</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 1: Screening and Referral</h3>
          <p className="mb-4">
            Initial concerns typically arise from parents, teachers, or other professionals noticing visual 
            processing difficulties.<sup>[16]</sup> Screening questionnaires or informal observations may 
            suggest formal evaluation is warranted.<sup>[17]</sup> Persistent academic struggles despite 
            adequate instruction often prompt referral.<sup>[18]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 2: Case History and Background</h3>
          <p className="mb-4">
            Comprehensive history gathering includes developmental milestones, medical history (particularly 
            vision and neurological), academic history, and specific areas of difficulty.<sup>[19]</sup> Family 
            history of learning disabilities or visual processing difficulties is relevant.<sup>[20]</sup> 
            Information from multiple sources (parents, teachers, individual) provides complete picture.<sup>[21]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 3: Vision Examination</h3>
          <p className="mb-4">
            Comprehensive eye examination must precede or accompany visual processing assessment.<sup>[22]</sup> 
            This ensures vision problems (refractive errors, binocular vision dysfunction) are identified and 
            addressed.<sup>[23]</sup> Normal eyesight is expected in VPD, but vision problems can coexist.<sup>[24]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 4: Standardized Testing</h3>
          <p className="mb-4">
            Standardized visual processing tests provide objective, norm-referenced data.<sup>[25]</sup> Multiple 
            tests assess different visual processing skills.<sup>[26]</sup> Comparison to age norms determines 
            whether performance is significantly below expected.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 5: Functional Assessment</h3>
          <p className="mb-4">
            Observing how visual processing affects real-world tasks—reading, writing, daily activities—is 
            essential.<sup>[28]</sup> Functional assessment complements standardized testing by showing practical 
            impacts.<sup>[29]</sup> Questionnaires from teachers and parents provide ecological validity.<sup>[30]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Step 6: Integration and Diagnosis</h3>
          <p className="mb-4">
            All information—history, test results, observations, functional impacts—is integrated.<sup>[31]</sup> 
            Diagnosis considers pattern of strengths and weaknesses, functional impairment, and ruling out 
            alternative explanations.<sup>[32]</sup> A comprehensive report documents findings and recommendations.<sup>[33]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Standardized Visual Processing Tests</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1517948430535-1e2469d314fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0aW5nJTIwYXNzZXNzbWVudHxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Testing and assessment materials"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Test of Visual Perception (DTVP-3)</h3>
          <p className="mb-4">
            The DTVP-3 assesses visual perception in children ages 4-12.<sup>[34]</sup> Subtests evaluate 
            eye-hand coordination, copying, figure-ground, visual closure, and form constancy.<sup>[35]</sup> 
            Provides separate scores for visual-motor integration and motor-reduced visual perception.<sup>[36]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Test of Visual Perceptual Skills (TVPS-4)</h3>
          <p className="mb-4">
            The TVPS-4 is a motor-free assessment focusing on visual perception without motor demands.<sup>[37]</sup> 
            Assesses visual discrimination, visual memory, visual-spatial relationships, form constancy, 
            sequential memory, figure-ground, and visual closure.<sup>[38]</sup> Available for ages 5 through 
            adult.<sup>[39]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Beery-Buktenica Developmental Test of Visual-Motor Integration (Beery VMI)</h3>
          <p className="mb-4">
            The Beery VMI assesses visual-motor integration through copying geometric forms.<sup>[40]</sup> 
            Supplemental tests separately assess visual perception and motor coordination.<sup>[41]</sup> This 
            helps determine whether difficulties are visual, motor, or integration-based.<sup>[42]</sup> Normed 
            for ages 2 through adult.<sup>[43]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Test of Visual Perception—Adolescent and Adult (DTVP-A)</h3>
          <p className="mb-4">
            The DTVP-A extends visual perception assessment to ages 11-74.<sup>[44]</sup> Assesses figure-ground, 
            form constancy, visual closure, and visual-motor integration.<sup>[45]</sup> Fills a need for adult 
            visual perception assessment.<sup>[46]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Rey-Osterrieth Complex Figure Test</h3>
          <p className="mb-4">
            This neuropsychological test assesses visual-spatial construction, organization, and visual 
            memory.<sup>[47]</sup> The individual copies a complex figure then draws it from memory.<sup>[48]</sup> 
            Provides information about visual processing, organization, and memory.<sup>[49]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Benton Visual Retention Test</h3>
          <p className="mb-4">
            Assesses visual perception, visual memory, and visual-motor abilities.<sup>[50]</sup> Individuals 
            view designs then reproduce them from memory.<sup>[51]</sup> Used in neuropsychological assessment.<sup>[52]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Motor-Free Visual Perception Test (MVPT-4)</h3>
          <p className="mb-4">
            A quick assessment of visual perception without motor requirements.<sup>[53]</sup> Uses multiple-choice 
            format eliminating drawing demands.<sup>[54]</sup> Appropriate for ages 4 through adult.<sup>[55]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Vision Testing Components</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Acuity</h3>
          <p className="mb-4">
            Standard eye chart testing measures how clearly each eye sees.<sup>[56]</sup> Normal visual acuity 
            (20/20 or correctable to normal) is expected in VPD.<sup>[57]</sup> This confirms the eyes function 
            normally—difficulties are processing-based.<sup>[58]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Refractive Error Assessment</h3>
          <p className="mb-4">
            Testing for nearsightedness, farsightedness, and astigmatism ensures any refractive errors are 
            corrected.<sup>[59]</sup> Uncorrected vision problems can mimic or exacerbate visual processing 
            difficulties.<sup>[60]</sup> Proper correction is essential before attributing difficulties to 
            processing.<sup>[61]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Binocular Vision Assessment</h3>
          <p className="mb-4">
            Testing how the two eyes work together includes eye teaming (convergence/divergence), eye tracking 
            (pursuits and saccades), and focusing (accommodation).<sup>[62]</sup> Binocular vision problems 
            affect reading and visual tasks.<sup>[63]</sup> These must be identified and treated as they can 
            coexist with or compound VPD.<sup>[64]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Eye Health Examination</h3>
          <p className="mb-4">
            Comprehensive eye health examination rules out ocular disease or structural problems.<sup>[65]</sup> 
            This ensures visual difficulties don't have a medical cause requiring treatment.<sup>[66]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Functional and Observational Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Observation</h3>
          <p className="mb-4">
            Observing reading behavior provides functional insights—losing place, skipping lines, slow reading, 
            fatigue, or comprehension difficulties.<sup>[67]</sup> Reading fluency and comprehension testing 
            documents impacts.<sup>[68]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Writing and Handwriting Assessment</h3>
          <p className="mb-4">
            Writing samples show visual-motor integration, spatial organization on the page, and visual memory 
            for letter forms.<sup>[69]</sup> Handwriting quality, spacing, alignment, and fatigue are noted.<sup>[70]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Work Samples</h3>
          <p className="mb-4">
            Reviewing schoolwork shows how visual processing affects academics—math errors related to spatial 
            organization, difficulty copying from the board, or overwhelm with visually complex worksheets.<sup>[71]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Daily Living Skills Observation</h3>
          <p className="mb-4">
            Observing or discussing daily tasks (dressing, eating, organization, navigation) reveals functional 
            impacts.<sup>[72]</sup> Occupational therapists particularly focus on how visual processing affects 
            independence and participation.<sup>[73]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Questionnaires and Rating Scales</h3>
          <p className="mb-4">
            Parent and teacher questionnaires provide information about visual processing in natural 
            environments.<sup>[74]</sup> These complement formal testing with real-world observations.<sup>[75]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria and Interpretation</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFnbm9zaXMlMjBjaGFydHxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Diagnostic assessment and charting"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Performance Standards</h3>
          <p className="mb-4">
            VPD is typically diagnosed when performance falls significantly below age expectations on visual 
            processing measures.<sup>[76]</sup> "Significantly below" usually means 1.5 to 2 standard deviations 
            below the mean, though criteria vary.<sup>[77]</sup> Multiple areas of deficit or severe deficit 
            in one area may warrant diagnosis.<sup>[78]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pattern Analysis</h3>
          <p className="mb-4">
            The specific pattern of strengths and weaknesses across visual processing domains informs 
            understanding.<sup>[79]</sup> Some individuals have widespread deficits; others have specific 
            weaknesses.<sup>[80]</sup> Pattern recognition guides targeted intervention.<sup>[81]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Impairment</h3>
          <p className="mb-4">
            Diagnosis requires not just low test scores but functional impairment.<sup>[82]</sup> Visual 
            processing differences must significantly affect learning, daily activities, or quality of life.<sup>[83]</sup> 
            Some individuals compensate effectively despite test deficits; others struggle despite borderline 
            scores.<sup>[84]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ruling Out Alternative Explanations</h3>
          <p className="mb-4">
            Comprehensive evaluation considers whether vision problems, cognitive delays, lack of experience, 
            or other factors better explain difficulties.<sup>[85]</sup> VPD is diagnosed when visual processing 
            deficits exist independent of these factors.<sup>[86]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Differential Diagnosis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD vs. Vision Problems</h3>
          <p className="mb-4">
            Distinguishing processing issues from eye-based problems is fundamental.<sup>[87]</sup> Comprehensive 
            vision examination identifies refractive errors, binocular vision dysfunction, or eye health issues.<sup>[88]</sup> 
            These require different interventions than VPD.<sup>[89]</sup> However, both can coexist.<sup>[90]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD vs. General Cognitive Delays</h3>
          <p className="mb-4">
            Visual processing assessment within comprehensive cognitive evaluation determines whether visual 
            processing is specifically weak or consistent with overall cognitive abilities.<sup>[91]</sup> VPD 
            involves visual processing deficits disproportionate to general ability.<sup>[92]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD vs. ADHD</h3>
          <p className="mb-4">
            ADHD and VPD share symptoms—difficulty with visual attention, losing place while reading, 
            disorganization.<sup>[93]</sup> However, ADHD affects attention across modalities while VPD is 
            specifically visual.<sup>[94]</sup> Comprehensive assessment including attention measures helps 
            differentiate.<sup>[95]</sup> Both conditions frequently co-occur.<sup>[96]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">VPD and Learning Disabilities</h3>
          <p className="mb-4">
            VPD often co-occurs with dyslexia, dyscalculia, or dysgraphia.<sup>[97]</sup> Comprehensive 
            assessment evaluates both visual processing and achievement in reading, math, and writing.<sup>[98]</sup> 
            Understanding how visual processing contributes to learning difficulties guides intervention.<sup>[99]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Age Considerations in Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Preschool and Early Elementary</h3>
          <p className="mb-4">
            Visual processing skills develop throughout childhood—some apparent "deficits" in young children 
            reflect typical development.<sup>[100]</sup> Assessment at this age focuses on developmental 
            trajectory and whether delays are resolving.<sup>[101]</sup> Intervention may begin even before 
            formal diagnosis.<sup>[102]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Later Elementary Through Adolescence</h3>
          <p className="mb-4">
            As visual processing skills typically mature, persistent difficulties become clearer.<sup>[103]</sup> 
            Academic demands increase, making visual processing more critical and deficits more apparent.<sup>[104]</sup> 
            This age range has the most robust assessment tools and norms.<sup>[105]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adult Assessment</h3>
          <p className="mb-4">
            Adults may seek assessment after years of unexplained struggles.<sup>[106]</sup> Fewer tools have 
            adult norms, though neuropsychological measures and some visual perception tests extend to 
            adulthood.<sup>[107]</sup> Functional assessment is particularly important for adults.<sup>[108]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Diagnostic Report</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Essential Components</h3>
          <p className="mb-4">
            Comprehensive reports include background information, assessment procedures, test results with 
            interpretation, diagnostic impressions, and recommendations.<sup>[109]</sup> Technical information 
            should be explained clearly for families and educators.<sup>[110]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Strengths and Weaknesses Profile</h3>
          <p className="mb-4">
            Detailing the specific pattern of visual processing abilities—which skills are strong and which 
            are weak—guides intervention.<sup>[111]</sup> Understanding individual profiles is more useful 
            than broad labels.<sup>[112]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Implications</h3>
          <p className="mb-4">
            Reports should explain how visual processing deficits affect daily life, learning, and functioning.<sup>[113]</sup> 
            Connecting test results to real-world impacts helps families and educators understand the 
            significance.<sup>[114]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Specific Recommendations</h3>
          <p className="mb-4">
            Recommendations should be individualized, specific, and actionable.<sup>[115]</sup> This includes 
            intervention strategies, accommodations, assistive technology, and referrals to other professionals 
            if needed.<sup>[116]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Challenges in Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Lack of Standardization</h3>
          <p className="mb-4">
            No universally accepted definition or diagnostic criteria for VPD exists.<sup>[117]</sup> Different 
            professionals may use different tests and criteria.<sup>[118]</sup> This creates variability in 
            who gets diagnosed.<sup>[119]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Test Limitations</h3>
          <p className="mb-4">
            Visual processing tests have limitations—they don't capture all aspects of visual processing, 
            performance can be affected by motivation or fatigue, and test environments differ from real-world 
            demands.<sup>[120]</sup> Multiple measures and observations provide more complete pictures.<sup>[121]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Complexity of Visual Processing</h3>
          <p className="mb-4">
            Visual processing is complex with many components that interact.<sup>[122]</sup> Assessing all 
            aspects comprehensively is challenging.<sup>[123]</sup> Understanding patterns requires clinical 
            expertise beyond test administration.<sup>[124]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Value of Diagnosis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Validation and Understanding</h3>
          <p className="mb-4">
            Diagnosis validates struggles and provides explanation.<sup>[125]</sup> Understanding that difficulties 
            have a neurological basis—not lack of intelligence or effort—is empowering.<sup>[126]</sup> For 
            children, this reduces self-blame and frustration.<sup>[127]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Targeted Intervention</h3>
          <p className="mb-4">
            Diagnosis informs specific, targeted interventions rather than generic strategies.<sup>[128]</sup> 
            Understanding which visual processing skills are affected guides therapy focus.<sup>[129]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Educational Supports</h3>
          <p className="mb-4">
            Documentation supports requests for school accommodations and services.<sup>[130]</sup> While VPD 
            eligibility for special education varies by state, professional documentation strengthens advocacy.<sup>[131]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Assessment as Foundation:</h3>
            <div className="text-sm">
              <p>
                Comprehensive visual processing assessment by qualified professionals using standardized tests, 
                vision examination, and functional evaluation provides the foundation for understanding VPD.<sup>[132]</sup> 
                Diagnosis involves not just identifying deficits but understanding individual patterns, functional 
                impacts, and differentiating from other conditions.<sup>[133]</sup> Quality assessment guides 
                effective intervention and appropriate accommodations, helping individuals with VPD reach their 
                potential.<sup>[134]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[2] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[3] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[4] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[5] Newcomb, R., & Halloran, J. (2005). "Visual perceptual disorders and remediation." In M. Scheiman & M. W. Rouse (Eds.), <em>Optometric management of learning-related vision problems</em> (pp. 313-349). St. Louis: Mosby.</p>
          <p>[6] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[7] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[8] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[9] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[10] Benton, A. L., Sivan, A. B., Hamsher, K. deS., Varney, N. R., & Spreen, O. (1994). <em>Contributions to neuropsychological assessment</em> (2nd ed.). New York: Oxford University Press.</p>
          <p>[11] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[12] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[13] Flanagan, D. P., & Harrison, P. L. (Eds.). (2012). <em>Contemporary intellectual assessment: Theories, tests, and issues</em> (3rd ed.). New York: Guilford Press.</p>
          <p>[14] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[15] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[16] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[17] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[18] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[19] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[20] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[21] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[22] American Optometric Association. (2017). "Comprehensive pediatric eye and vision examination." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[23] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[24] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[25] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[26] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[27] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[28] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[29] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[30] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[31] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[32] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[33] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[34] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[35] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[36] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[37] Martin, N. A. (2017). <em>Test of Visual Perceptual Skills</em> (4th ed.). Austin: Pro-Ed.</p>
          <p>[38] Martin, N. A. (2017). <em>Test of Visual Perceptual Skills</em> (4th ed.). Austin: Pro-Ed.</p>
          <p>[39] Martin, N. A. (2017). <em>Test of Visual Perceptual Skills</em> (4th ed.). Austin: Pro-Ed.</p>
          <p>[40] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[41] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[42] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[43] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[44] Reynolds, C. R., Pearson, N. A., & Voress, J. K. (2002). <em>Developmental Test of Visual Perception—Adolescent and Adult</em>. Austin: Pro-Ed.</p>
          <p>[45] Reynolds, C. R., Pearson, N. A., & Voress, J. K. (2002). <em>Developmental Test of Visual Perception—Adolescent and Adult</em>. Austin: Pro-Ed.</p>
          <p>[46] Reynolds, C. R., Pearson, N. A., & Voress, J. K. (2002). <em>Developmental Test of Visual Perception—Adolescent and Adult</em>. Austin: Pro-Ed.</p>
          <p>[47] Rey, A. (1941). "L'examen psychologique dans les cas d'encéphalopathie traumatique." <em>Archives de Psychologie</em>, 28, 215-285.</p>
          <p>[48] Osterrieth, P. A. (1944). "Le test de copie d'une figure complexe." <em>Archives de Psychologie</em>, 30, 206-356.</p>
          <p>[49] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[50] Benton, A. L., Sivan, A. B., Hamsher, K. deS., Varney, N. R., & Spreen, O. (1994). <em>Contributions to neuropsychological assessment</em> (2nd ed.). New York: Oxford University Press.</p>
          <p>[51] Benton, A. L., Sivan, A. B., Hamsher, K. deS., Varney, N. R., & Spreen, O. (1994). <em>Contributions to neuropsychological assessment</em> (2nd ed.). New York: Oxford University Press.</p>
          <p>[52] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[53] Colarusso, R. P., & Hammill, D. D. (2015). <em>Motor-Free Visual Perception Test</em> (4th ed.). Austin: Pro-Ed.</p>
          <p>[54] Colarusso, R. P., & Hammill, D. D. (2015). <em>Motor-Free Visual Perception Test</em> (4th ed.). Austin: Pro-Ed.</p>
          <p>[55] Colarusso, R. P., & Hammill, D. D. (2015). <em>Motor-Free Visual Perception Test</em> (4th ed.). Austin: Pro-Ed.</p>
          <p>[56] American Optometric Association. (2017). "Comprehensive adult eye and vision examination." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[57] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[58] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[59] Grosvenor, T. (2007). <em>Primary care optometry</em> (5th ed.). St. Louis: Butterworth-Heinemann.</p>
          <p>[60] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[61] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[62] Cooper, J., & Jamal, N. (2012). "Convergence insufficiency—a major review." <em>Optometry</em>, 83(4), 137-158.</p>
          <p>[63] Scheiman, M., Mitchell, G. L., Cotter, S., Cooper, J., Kulp, M., Rouse, M., ... & Wensveen, J. (2005). "A randomized clinical trial of treatments for convergence insufficiency in children." <em>Archives of Ophthalmology</em>, 123(1), 14-24.</p>
          <p>[64] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[65] American Optometric Association. (2017). "Comprehensive adult eye and vision examination." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[66] Grosvenor, T. (2007). <em>Primary care optometry</em> (5th ed.). St. Louis: Butterworth-Heinemann.</p>
          <p>[67] Grisham, D., Sheppard, M. M., & Tran, W. U. (1993). "Visual symptoms and reading performance." <em>Optometry and Vision Science</em>, 70(5), 384-391.</p>
          <p>[68] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[69] Cornhill, H., & Case-Smith, J. (1996). "Factors that relate to good and poor handwriting." <em>American Journal of Occupational Therapy</em>, 50(9), 732-739.</p>
          <p>[70] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[71] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[72] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[73] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[74] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[75] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[76] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[77] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[78] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[79] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[80] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[81] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[82] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[83] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[84] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[85] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[86] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[87] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[88] American Optometric Association. (2017). "Comprehensive pediatric eye and vision examination." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[89] Cooper, J., & Jamal, N. (2012). "Convergence insufficiency—a major review." <em>Optometry</em>, 83(4), 137-158.</p>
          <p>[90] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[91] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[92] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[93] Gould, T. D., Bastain, T. M., Israel, M. E., Hommer, D. W., & Castellanos, F. X. (2001). "Altered performance on an ocular fixation task in attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 50(8), 633-635.</p>
          <p>[94] Karatekin, C. (2004). "Development of attentional allocation in the dual task paradigm." <em>International Journal of Psychophysiology</em>, 52(1), 7-21.</p>
          <p>[95] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[96] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[97] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[98] Flanagan, D. P., & Harrison, P. L. (Eds.). (2012). <em>Contemporary intellectual assessment: Theories, tests, and issues</em> (3rd ed.). New York: Guilford Press.</p>
          <p>[99] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[100] Kovács, I. (2000). "Human development of perceptual organization." <em>Vision Research</em>, 40(10-12), 1301-1310.</p>
          <p>[101] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[102] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[103] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[104] Kulp, M. T., & Schmidt, P. P. (1996). "Visual predictors of reading performance in kindergarten and first grade children." <em>Optometry and Vision Science</em>, 73(4), 255-262.</p>
          <p>[105] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[106] Reynolds, C. R., Pearson, N. A., & Voress, J. K. (2002). <em>Developmental Test of Visual Perception—Adolescent and Adult</em>. Austin: Pro-Ed.</p>
          <p>[107] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[108] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[109] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[110] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[111] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[112] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[113] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[114] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[115] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[116] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[117] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[118] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[119] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[120] Sattler, J. M. (2008). <em>Assessment of children: Cognitive foundations</em> (5th ed.). San Diego: Jerome M. Sattler, Publisher.</p>
          <p>[121] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[122] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[123] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[124] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[125] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[126] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[127] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[128] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[129] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[130] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[131] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[132] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[133] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[134] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
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
