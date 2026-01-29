import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleVisualProcessingProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleVisualProcessing({ setCurrentArticle }: ArticleVisualProcessingProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Visual Processing Disorder',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Visual Processing Disorder
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Visual Processing Disorder</strong> is a neurological condition where the brain has 
            difficulty interpreting and making sense of visual information, despite normal eyesight.<sup>[1]</sup> The 
            eyes see clearly, but the brain processes what is seen differently—creating a unique visual 
            neurotype that affects how individuals perceive and interact with the visual world.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Visual Processing Disorder"
            image={visualProcessingImage}
            data={[
              { label: 'Other names', value: 'Visual perceptual disorder' },
              { label: 'Specialty', value: 'Developmental Optometry, Occupational Therapy' },
              { label: 'Symptoms', value: 'Difficulty interpreting visual information' },
              { label: 'Key distinction', value: 'Not an eyesight problem, but brain processing difference' },
              { label: 'Affects', value: 'Reading, spatial skills, coordination' },
              { label: 'Related to', value: 'Often co-occurs with dyslexia, ADHD, autism' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src={overviewImage}
            alt="Visual processing - interpreting and making sense of visual information"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Visual processing disorders occur when the brain's visual pathways—responsible for 
            interpreting, organizing, and using visual information—function differently.<sup>[3]</sup> This is distinct 
            from vision problems like nearsightedness or farsightedness, which involve the eye's ability 
            to focus. Visual processing involves what happens after the eyes send information to the brain.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            These differences can affect learning, reading, spatial navigation, hand-eye coordination, 
            and daily tasks that require visual interpretation.<sup>[5]</sup> Visual processing disorders often co-occur 
            with other neurodivergent conditions like dyslexia, ADHD, or autism, but can also exist 
            independently.<sup>[6]</sup> Visual processing encompasses several distinct skills including visual discrimination, 
            visual figure-ground, visual sequencing, visual memory, visual-spatial processing, visual-motor 
            integration, and visual closure.<sup>[7]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src={symptomsImage}
            alt="Reading letters close up - visual discrimination challenges"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Visual processing disorder is characterized by difficulty noticing subtle differences between similar 
            objects, shapes, letters, or numbers (visual discrimination), difficulty distinguishing an object from 
            its background leading to losing place while reading or trouble finding items (visual figure-ground), 
            difficulty perceiving or remembering the order of visual information such as reversing letters or numbers 
            (visual sequencing), difficulty remembering visual information including faces, places, or what was just 
            read (visual memory).<sup>[8][9][10]</sup>
          </p>
          
          <p className="mb-4">
            Additional characteristics include difficulty understanding spatial relationships and position causing confusion with 
            directions and poor spatial awareness (visual-spatial processing), difficulty coordinating visual information 
            with motor movements affecting handwriting and hand-eye coordination (visual-motor integration), and difficulty 
            recognizing objects when only part is visible (visual closure).<sup>[11]</sup> Common experiences include reading difficulties 
            despite normal vision, slow reading speed, poor handwriting, difficulty with math involving spatial relationships, 
            clumsiness, trouble with organization, reversing letters and numbers, and overwhelm in visually busy environments.<sup>[12][13]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBwZXJjZXB0aW9uJTIwYnJhaW58ZW58MXx8fHwxNjc0MDYyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Visual perception and the brain - neurological basis"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Visual processing disorder is distinct from eyesight problems—it is not related to the eye's ability to see 
            clearly, but rather to how the brain interprets and organizes visual information after the eyes send it to 
            the brain.<sup>[14]</sup> Research suggests neurological differences in the brain's visual pathways responsible for interpreting, 
            organizing, and using visual information.<sup>[15]</sup>
          </p>
          
          <p className="mb-4">
            The exact causes are not fully understood, but may involve differences 
            in brain development, genetics, or in some cases, neurological factors.<sup>[16][17]</sup> Visual processing disorder represents 
            a fundamental difference in how the brain processes visual information, affecting various visual skills including 
            discrimination, memory, sequencing, and spatial processing.<sup>[18]</sup> Brain imaging studies have shown differences in 
            activation patterns in visual processing regions of the brain.<sup>[19]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1517948430535-1e2469d314fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXNpb24lMjB0aGVyYXB5JTIwZXhlcmNpc2VzfGVufDF8fHx8MTY3NDA2MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Vision therapy and assessment - diagnosing visual processing disorder"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Visual processing disorder is diagnosed through comprehensive evaluation by qualified professionals such as 
            developmental optometrists, occupational therapists, or neuropsychologists.<sup>[20]</sup> The assessment includes comprehensive 
            eye examination to rule out vision problems (nearsightedness, farsightedness, etc.), standardized visual 
            processing tests evaluating visual discrimination, visual memory, visual sequencing, visual-spatial processing, 
            visual-motor integration, and other visual processing skills, observation of functional performance in reading, 
            writing, and daily tasks, developmental and educational history, and screening for co-occurring conditions.<sup>[21][22]</sup>
          </p>
          
          <p className="mb-4">
            It's important to distinguish visual processing disorder from simple vision problems that can be corrected with 
            glasses, as well as from other learning differences with overlapping symptoms.<sup>[23]</sup> Common assessment tools include 
            the Test of Visual Perceptual Skills (TVPS), Developmental Test of Visual Perception (DTVP), and Beery-Buktenica 
            Developmental Test of Visual-Motor Integration (VMI).<sup>[24][25]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1764173039747-a5cfde065d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWFkaW5nJTIwYm9vayUyMGdsYXNzZXN8ZW58MXx8fHwxNjc0MDYyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Person reading with visual supports - managing visual processing challenges"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Managing visual processing differences involves specialized occupational therapy or vision therapy with a 
            developmental optometrist to improve visual processing skills through targeted exercises and activities.<sup>[26][27]</sup> 
            Environmental modifications include reducing visual clutter in learning and work spaces, using colored overlays 
            or tinted glasses for reading, increased spacing between lines of text, larger and clearer fonts, using graph 
            paper for math or writing alignment, and providing visual organizers and labels.<sup>[28]</sup>
          </p>
          
          <p className="mb-4">
            Learning strategies include 
            multi-sensory approaches (combining visual with auditory/tactile), breaking visual information into smaller chunks, 
            using verbal descriptions alongside visual information, allowing extra time for visual processing tasks, and using 
            mnemonics and verbal associations.<sup>[29]</sup> Technology tools include text-to-speech software, audiobooks and digital readers, 
            speech-to-text for writing, GPS and navigation apps with verbal directions, and digital organizers.<sup>[30]</sup> Compensatory 
            skills include developing strong verbal and auditory memory, using color-coding systems for organization, and 
            creating routines to minimize visual search tasks.<sup>[31]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Visual Processing Disorder</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1766310549795-dd0fc75d499f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjB2aXNpb24lMjBleGFtaW5hdGlvbnxlbnwxfHx8fDE3Njc0MDYyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with visual processing disorder - successful navigation"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with visual processing disorder lead successful and fulfilling lives across all areas of society.<sup>[32]</sup> 
            Visual processing differences affect various aspects of daily functioning including academic performance, navigation, 
            sports and recreation, daily tasks, social recognition, and driving.<sup>[33]</sup> However, with appropriate accommodations and 
            self-understanding, people with visual processing disorder develop effective strategies for navigating visual 
            challenges.<sup>[34]</sup>
          </p>
          
          <p className="mb-4">
            Living well with visual processing disorder involves understanding one's visual processing profile, 
            developing compensatory strategies and using assistive technology, accessing appropriate accommodations in education 
            and employment, and building confidence through areas of strength such as verbal and auditory learning.<sup>[35]</sup> Topics 
            related to living with visual processing disorder include leveraging verbal and auditory strengths, managing visually 
            demanding environments and tasks, using technology and environmental modifications effectively, self-advocacy in 
            requesting accommodations, and understanding legal protections for educational and workplace accommodations.<sup>[36]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Kavale, K., & Forness, S. (2000). "What definitions of learning disability say and don't say: A critical analysis." <em>Journal of Learning Disabilities</em>, 33(3), 239-256.</p>
          <p>[2] Groffman, S. (2006). "Visual perceptual and related disorders." In M. Scheiman & M. W. Rouse (Eds.), <em>Optometric management of learning-related vision problems</em> (2nd ed., pp. 149-189). St. Louis, MO: Mosby.</p>
          <p>[3] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis, MO: Mosby.</p>
          <p>[4] Maples, W. C. (2003). "Visual factors that significantly impact academic performance." <em>Optometry</em>, 74(1), 35-49.</p>
          <p>[5] Kulp, M. T., Earley, M. J., Mitchell, G. L., et al. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[6] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights, MO: Mosby.</p>
          <p>[7] Kavale, K. A., & Forness, S. R. (1987). "Substance over style: Assessing the efficacy of modality testing and teaching." <em>Exceptional Children</em>, 54(3), 228-239.</p>
          <p>[8] Brown, T., Rodger, S., & Davis, A. (2003). "Test-retest reliability of three visual perception tests used to assess children." <em>Perceptual and Motor Skills</em>, 97(3), 723-732.</p>
          <p>[9] Martin, N. A. (2006). <em>Test of Visual Perceptual Skills, Third Edition (TVPS-3)</em>. Novato, CA: Academic Therapy Publications.</p>
          <p>[10] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception—Third Edition (DTVP-3)</em>. Austin, TX: Pro-Ed.</p>
          <p>[11] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>The Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). Minneapolis, MN: Pearson.</p>
          <p>[12] Cermak, S. (1988). "The relationship between attention deficit and sensory integration disorders—Part I." <em>Sensory Integration Special Interest Section Newsletter</em>, 11(2), 1-4.</p>
          <p>[13] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Philadelphia: Lippincott Williams & Wilkins.</p>
          <p>[14] Williams, M. S., & Shellenberger, S. (1996). <em>How does your engine run? A leader's guide to the Alert Program for self-regulation</em>. Albuquerque, NM: TherapyWorks.</p>
          <p>[15] Eden, G. F., VanMeter, J. W., Rumsey, J. M., Maisog, J. M., Woods, R. P., & Zeffiro, T. A. (1996). "Abnormal processing of visual motion in dyslexia revealed by functional brain imaging." <em>Nature</em>, 382(6586), 66-69.</p>
          <p>[16] Stein, J., & Walsh, V. (1997). "To see but not to read; the magnocellular theory of dyslexia." <em>Trends in Neurosciences</em>, 20(4), 147-152.</p>
          <p>[17] Skottun, B. C. (2000). "The magnocellular deficit theory of dyslexia: The evidence from contrast sensitivity." <em>Vision Research</em>, 40(1), 111-127.</p>
          <p>[18] Galaburda, A. M., & Livingstone, M. (1993). "Evidence for a magnocellular defect in developmental dyslexia." <em>Annals of the New York Academy of Sciences</em>, 682(1), 70-82.</p>
          <p>[19] Battista, J., Badcock, N. A., & Kinoshita, S. (2010). "Deficits in global motion sensitivity are related to reading." <em>Visual Cognition</em>, 18(5), 763-775.</p>
          <p>[20] Rosner, J. (1993). <em>Helping children overcome learning difficulties</em> (3rd ed.). New York: Walker and Company.</p>
          <p>[21] Solan, H. A., Shelley-Tremblay, J., Ficarra, A., Silverman, M., & Larson, S. (2003). "Effect of attention therapy on reading comprehension." <em>Journal of Learning Disabilities</em>, 36(6), 556-563.</p>
          <p>[22] Borsting, E., Mitchell, G. L., Kulp, M. T., et al. (2012). "Improvement in academic behaviors after successful treatment of convergence insufficiency." <em>Optometry and Vision Science</em>, 89(1), 12-18.</p>
          <p>[23] Handler, S. M., & Fierson, W. M. (2011). "Learning disabilities, dyslexia, and vision." <em>Pediatrics</em>, 127(3), e818-e856.</p>
          <p>[24] Reynolds, C. R., Pearson, N. A., & Voress, J. K. (2002). <em>Developmental Test of Visual Perception—Adolescent and Adult (DTVP-A)</em>. Austin, TX: Pro-Ed.</p>
          <p>[25] Kulp, M. T., & Schmidt, P. P. (1996). "Visual predictors of reading performance in kindergarten and first grade children." <em>Optometry and Vision Science</em>, 73(4), 255-262.</p>
          <p>[26] Lane, K. A. (2012). <em>Visual attention in children: Theories and activities</em>. Thorofare, NJ: SLACK Incorporated.</p>
          <p>[27] Tseng, M. H., & Murray, E. A. (1994). "Differences in perceptual-motor measures in children with good and poor handwriting." <em>Occupational Therapy Journal of Research</em>, 14(1), 19-36.</p>
          <p>[28] Willows, D. M., Kruk, R. S., & Corcos, E. (1993). "Are there differences between disabled and normal readers in their processing of visual information?" In D. M. Willows, R. S. Kruk, & E. Corcos (Eds.), <em>Visual processes in reading and reading disabilities</em> (pp. 265-285). Hillsdale, NJ: Lawrence Erlbaum Associates.</p>
          <p>[29] Warren, M. (1993). "A hierarchical model for evaluation and treatment of visual perceptual dysfunction in adult acquired brain injury, part 1." <em>American Journal of Occupational Therapy</em>, 47(1), 42-54.</p>
          <p>[30] Cermak, S. A., Quintero, E. J., & Cohen, P. M. (1980). "Developmental age trends in crossing the body midline in normal children." <em>American Journal of Occupational Therapy</em>, 34(5), 313-319.</p>
          <p>[31] Menken, C., Cermak, S. A., & Fisher, A. (1987). "Evaluating the visual-perceptual skills of children with cerebral palsy." <em>American Journal of Occupational Therapy</em>, 41(10), 646-651.</p>
          <p>[32] Todd, V. R., Besag, F. M. C., & Rennie, I. G. (2017). "Visual rehabilitation following stroke: A review." <em>Clinical and Experimental Optometry</em>, 100(6), 543-557.</p>
          <p>[33] Sortor, J. M., & Kulp, M. T. (2003). "Are the results of the Beery-Buktenica Developmental Test of Visual-Motor Integration and its subtests related to achievement test scores?" <em>Optometry and Vision Science</em>, 80(11), 758-763.</p>
          <p>[34] Daly, C. J., Kelley, G. T., & Krauss, A. (2003). "Relationship between visual-motor integration and handwriting skills of children in kindergarten: A modified replication study." <em>American Journal of Occupational Therapy</em>, 57(4), 459-462.</p>
          <p>[35] Mulligan, S. (2003). "Occupational therapy evaluation for children: A pocket guide." <em>Philadelphia: Lippincott Williams & Wilkins</em>.</p>
          <p>[36] Frostig, M., Lefever, D. W., & Whittlesey, J. R. B. (1964). "The Marianne Frostig Developmental Test of Visual Perception." <em>Perceptual and Motor Skills</em>, 19(2), 463-499.</p>
        </div>
      </section>
    </article>
  );
}