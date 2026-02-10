import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DysgraphiaCauses({ setCurrentArticle }: DysgraphiaCausesProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dysgraphia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dysgraphia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Dysgraphia: Causes & Origins
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Dysgraphia is a neurologically-based learning disability with multiple potential causes involving brain structure, 
            genetics, and developmental factors.<sup>[1]</sup> Understanding these underlying causes helps inform effective 
            interventions and support strategies.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Basis</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHdyaXRpbmclMjBuZXVyb3NjaWVuY2V8ZW58MXx8fHwxNjczNDUzNTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Brain and neuroscience"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Regions Involved</h3>
          <p className="mb-4">
            Writing is a complex cognitive task requiring coordination of multiple brain regions:<sup>[3]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Left hemisphere language areas:</strong> Broca's area (language production), Wernicke's area (language comprehension)<sup>[4]</sup></li>
            <li className="mb-2"><strong>Motor cortex:</strong> Controls hand movements for writing<sup>[5]</sup></li>
            <li className="mb-2"><strong>Cerebellum:</strong> Coordinates fine motor movements and motor learning</li>
            <li className="mb-2"><strong>Parietal lobe:</strong> Processes spatial information and integrates sensory input<sup>[6]</sup></li>
            <li className="mb-2"><strong>Frontal lobe:</strong> Executive functions including planning and organization<sup>[7]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Imaging Findings</h3>
          <p className="mb-4">
            Neuroimaging studies reveal differences in brain structure and function in individuals with dysgraphia:<sup>[8]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reduced activation:</strong> Less activity in left hemisphere regions during writing tasks<sup>[9]</sup></li>
            <li className="mb-2"><strong>Connectivity differences:</strong> Altered connections between language and motor areas</li>
            <li className="mb-2"><strong>White matter variations:</strong> Differences in neural pathways connecting brain regions<sup>[10]</sup></li>
            <li className="mb-2"><strong>Cortical thickness:</strong> Variations in specific brain regions related to motor control<sup>[11]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neural Processing Differences</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty with motor planning and sequencing<sup>[12]</sup></li>
            <li className="mb-2">Challenges integrating visual and motor information</li>
            <li className="mb-2">Problems with working memory during writing<sup>[13]</sup></li>
            <li className="mb-2">Slower neural processing speed for orthographic coding<sup>[14]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Familial Patterns</h3>
          <p className="mb-4">
            Research indicates dysgraphia has a genetic component:<sup>[15]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Family clustering:</strong> Dysgraphia tends to run in families<sup>[16]</sup></li>
            <li className="mb-2"><strong>Heritability:</strong> Higher concordance in identical twins than fraternal twins</li>
            <li className="mb-2"><strong>Shared genetics:</strong> Often co-occurs with dyslexia and ADHD which have genetic bases<sup>[17]</sup></li>
            <li className="mb-2"><strong>Multiple genes:</strong> Likely polygenic (involving many genes) rather than single gene<sup>[18]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Candidate Genes</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Genes associated with motor development and coordination<sup>[19]</sup></li>
            <li className="mb-2">Genes involved in language processing</li>
            <li className="mb-2">Overlap with genes linked to dyslexia and ADHD<sup>[20]</sup></li>
            <li className="mb-2">Research ongoing to identify specific genetic markers<sup>[21]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Motor and Fine Motor Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Motor Planning Deficits</h3>
          <p className="mb-4">
            Many individuals with dysgraphia have difficulty with motor planning (dyspraxia):<sup>[22]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Apraxia:</strong> Difficulty planning and executing complex motor sequences<sup>[23]</sup></li>
            <li className="mb-2"><strong>Motor memory:</strong> Challenges storing and retrieving motor patterns for letters</li>
            <li className="mb-2"><strong>Kinesthetic awareness:</strong> Reduced sense of hand position and movement<sup>[24]</sup></li>
            <li className="mb-2"><strong>Motor control:</strong> Problems with precision and fluency of movements<sup>[25]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fine Motor Skill Deficits</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty with precise finger movements required for writing<sup>[26]</sup></li>
            <li className="mb-2">Poor hand-eye coordination</li>
            <li className="mb-2">Challenges with bilateral coordination (using both hands together)<sup>[27]</sup></li>
            <li className="mb-2">Reduced finger dexterity and speed<sup>[28]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Graphomotor Control</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Letter formation:</strong> Difficulty forming letters automatically<sup>[29]</sup></li>
            <li className="mb-2"><strong>Stroke sequencing:</strong> Trouble remembering stroke order for letters</li>
            <li className="mb-2"><strong>Size and spacing:</strong> Inconsistent letter sizing and spacing<sup>[30]</sup></li>
            <li className="mb-2"><strong>Fluency:</strong> Lack of smooth, automatic writing movements<sup>[31]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Language Processing Issues</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Orthographic Processing</h3>
          <p className="mb-4">
            Orthographic processing involves recognizing and remembering how words look:<sup>[32]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Letter recognition:</strong> Difficulty quickly identifying letters<sup>[33]</sup></li>
            <li className="mb-2"><strong>Visual memory for words:</strong> Trouble remembering spelling patterns</li>
            <li className="mb-2"><strong>Orthographic coding:</strong> Problems storing visual representations of words<sup>[34]</sup></li>
            <li className="mb-2"><strong>Retrieval:</strong> Challenges accessing stored orthographic information<sup>[35]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Phonological Processing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty breaking words into sounds for spelling<sup>[36]</sup></li>
            <li className="mb-2">Problems applying phonics rules in writing</li>
            <li className="mb-2">Challenges with sound-symbol correspondence<sup>[37]</sup></li>
            <li className="mb-2">Often overlaps with dyslexia<sup>[38]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Formulation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty organizing thoughts for writing<sup>[39]</sup></li>
            <li className="mb-2">Problems with grammar and syntax in written form</li>
            <li className="mb-2">Challenges with written vocabulary selection<sup>[40]</sup></li>
            <li className="mb-2">Reduced written fluency despite adequate oral language<sup>[41]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Working Memory Limitations</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1625750998663-4b2ae8f8b658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwaGFuZCUyMHBlbmNpbHxlbnwxfHx8fDE3Njc0NTM1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Hand writing with pencil"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Working Memory in Writing</h3>
          <p className="mb-4">
            Writing places heavy demands on working memory:<sup>[42]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Multiple tasks:</strong> Holding ideas while spelling, forming letters, and planning<sup>[43]</sup></li>
            <li className="mb-2"><strong>Cognitive overload:</strong> When transcription isn't automatic, working memory is overwhelmed</li>
            <li className="mb-2"><strong>Reduced capacity:</strong> Less memory available for composition and ideas<sup>[44]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Working Memory Deficits in Dysgraphia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty holding spelling patterns in mind<sup>[45]</sup></li>
            <li className="mb-2">Problems maintaining train of thought while writing</li>
            <li className="mb-2">Challenges remembering what to write next<sup>[46]</sup></li>
            <li className="mb-2">Reduced mental capacity for planning and organization<sup>[47]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual-Spatial Processing Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Spatial Aspects of Writing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Letter orientation:</strong> Confusion about directional features of letters<sup>[48]</sup></li>
            <li className="mb-2"><strong>Spacing:</strong> Difficulty judging appropriate spacing between letters and words</li>
            <li className="mb-2"><strong>Line awareness:</strong> Problems staying on the line<sup>[49]</sup></li>
            <li className="mb-2"><strong>Page organization:</strong> Challenges organizing text on the page<sup>[50]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Motor Integration</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty coordinating what eyes see with hand movements<sup>[51]</sup></li>
            <li className="mb-2">Problems copying from board or book to paper</li>
            <li className="mb-2">Challenges with visual feedback during writing<sup>[52]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Executive Function Deficits</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Planning and Organization</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Pre-writing planning:</strong> Difficulty organizing thoughts before writing<sup>[53]</sup></li>
            <li className="mb-2"><strong>Outlining:</strong> Challenges creating organized outlines</li>
            <li className="mb-2"><strong>Sequencing:</strong> Problems ordering ideas logically<sup>[54]</sup></li>
            <li className="mb-2"><strong>Goal-setting:</strong> Difficulty maintaining writing goals<sup>[55]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Regulation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty monitoring own writing<sup>[56]</sup></li>
            <li className="mb-2">Problems detecting errors</li>
            <li className="mb-2">Challenges with revising and editing<sup>[57]</sup></li>
            <li className="mb-2">Reduced self-monitoring during writing process<sup>[58]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Critical Periods</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Early motor development:</strong> Delays in fine motor milestones may predispose to dysgraphia<sup>[59]</sup></li>
            <li className="mb-2"><strong>Preschool years:</strong> Critical period for developing pre-writing skills</li>
            <li className="mb-2"><strong>School entry:</strong> Formal writing instruction reveals underlying difficulties<sup>[60]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Delayed Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Slower acquisition of letter formation skills<sup>[61]</sup></li>
            <li className="mb-2">Prolonged difficulty with pencil grip</li>
            <li className="mb-2">Delayed automatization of writing<sup>[62]</sup></li>
            <li className="mb-2">Extended reliance on conscious control of writing movements</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Acquired Dysgraphia</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Injury or Illness</h3>
          <p className="mb-4">
            While most dysgraphia is developmental, it can also be acquired through:<sup>[63]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Traumatic brain injury:</strong> Damage to brain regions involved in writing<sup>[64]</sup></li>
            <li className="mb-2"><strong>Stroke:</strong> Particularly left hemisphere strokes affecting language areas</li>
            <li className="mb-2"><strong>Brain tumor:</strong> Tumors affecting motor or language regions<sup>[65]</sup></li>
            <li className="mb-2"><strong>Neurodegenerative disease:</strong> Conditions like Alzheimer's or Parkinson's</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Types of Acquired Dysgraphia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Central dysgraphia:</strong> Language-based writing impairment<sup>[66]</sup></li>
            <li className="mb-2"><strong>Peripheral dysgraphia:</strong> Motor-based writing impairment</li>
            <li className="mb-2"><strong>Apraxic dysgraphia:</strong> Motor planning deficits<sup>[67]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental and Educational Factors</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Not Primary Causes, But Contributing Factors</h3>
          <p className="mb-4">
            While dysgraphia is neurologically based, certain factors can exacerbate difficulties:<sup>[68]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Inadequate instruction:</strong> Lack of explicit handwriting teaching<sup>[69]</sup></li>
            <li className="mb-2"><strong>Limited practice:</strong> Insufficient opportunities to develop writing skills</li>
            <li className="mb-2"><strong>Inappropriate demands:</strong> Expectations beyond developmental level<sup>[70]</sup></li>
            <li className="mb-2"><strong>Lack of early intervention:</strong> Delays in receiving support</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Important Clarification</h3>
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <p className="mb-4">
              Dysgraphia is <strong>NOT</strong> caused by:<sup>[71]</sup>
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Laziness or lack of effort</li>
              <li>Poor motivation or attitude</li>
              <li>Low intelligence</li>
              <li>Inadequate parenting</li>
              <li>Not trying hard enough</li>
            </ul>
            <p className="mt-4">
              These are harmful misconceptions. Dysgraphia is a legitimate neurological condition requiring appropriate 
              accommodations and support.<sup>[72]</sup>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions and Shared Etiologies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dyslexia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Shares phonological and orthographic processing deficits<sup>[73]</sup></li>
            <li className="mb-2">Common genetic factors</li>
            <li className="mb-2">Overlapping brain regions affected<sup>[74]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">ADHD</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Shared executive function deficits<sup>[75]</sup></li>
            <li className="mb-2">Working memory limitations</li>
            <li className="mb-2">Difficulty with sustained attention during writing<sup>[76]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Coordination Disorder (DCD/Dyspraxia)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Common motor planning and execution difficulties<sup>[77]</sup></li>
            <li className="mb-2">Shared fine motor challenges</li>
            <li className="mb-2">Overlapping cerebellar involvement<sup>[78]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Autism Spectrum Disorder</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Motor difficulties common in ASD<sup>[79]</sup></li>
            <li className="mb-2">Executive function challenges</li>
            <li className="mb-2">Sensory processing differences affecting writing<sup>[80]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Research and Understanding</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Current State of Research</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Less studied than dyslexia or ADHD<sup>[81]</sup></li>
            <li className="mb-2">Growing neuroimaging research revealing brain differences</li>
            <li className="mb-2">Genetic studies identifying hereditary patterns<sup>[82]</sup></li>
            <li className="mb-2">Increasing understanding of cognitive processes involved<sup>[83]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Future Directions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Identifying specific neural markers<sup>[84]</sup></li>
            <li className="mb-2">Understanding genetic contributions</li>
            <li className="mb-2">Developing targeted interventions based on underlying causes<sup>[85]</sup></li>
            <li className="mb-2">Improving early identification methods<sup>[86]</sup></li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Berninger, V. W., & Wolf, B. J. (2009). <em>Teaching students with dyslexia and dysgraphia</em>. Brookes Publishing.</p>
          <p>[2] Berninger, V. W. (2004). "Understanding the 'graphia' in developmental dysgraphia." In D. Dewey & D. E. Tupper (Eds.), <em>Developmental motor disorders</em> (pp. 328-350). Guilford Press.</p>
          <p>[3] Berninger, V. W., & Winn, W. D. (2006). "Implications of advancements in brain research and technology for writing development." In C. A. MacArthur, S. Graham, & J. Fitzgerald (Eds.), <em>Handbook of writing research</em> (pp. 96-114). Guilford Press.</p>
          <p>[4] Roux, F. E., Draper, L., Köpke, B., & Demonet, J. F. (2010). "Who actually read Exner?" <em>Brain</em>, 133(5), 1449-1458.</p>
          <p>[5] Longcamp, M., Anton, J. L., Roth, M., & Velay, J. L. (2003). "Visual presentation of single letters activates a premotor area involved in writing." <em>NeuroImage</em>, 19(4), 1492-1500.</p>
          <p>[6] Katanoda, K., Yoshikawa, K., & Sugishita, M. (2001). "A functional MRI study on the neural substrates for writing." <em>Human Brain Mapping</em>, 13(1), 34-42.</p>
          <p>[7] Richards, T. L., Berninger, V. W., Stock, P., Altemeier, L., Trivedi, P., & Maravilla, K. (2011). "Differences between good and poor child writers on fMRI contrasts." <em>Reading and Writing</em>, 24(5), 493-516.</p>
          <p>[8] Fuentes, C. T., Mostofsky, S. H., & Bastian, A. J. (2009). "Children with autism show specific handwriting impairments." <em>Neurology</em>, 73(19), 1532-1537.</p>
          <p>[9] Richards, T. L., Berninger, V. W., & Fayol, M. (2009). "fMRI activation differences between 11-year-old good and poor spellers' access in working memory to temporary and long-term orthographic representations." <em>Journal of Neurolinguistics</em>, 22(4), 327-353.</p>
          <p>[10] Barnett, A. L., & Prunty, M. (2021). "Handwriting difficulties in developmental coordination disorder (DCD)." In A. Kirby, D. Sugden, & D. Purcell (Eds.), <em>Developmental coordination disorder</em> (pp. 145-167). Wiley.</p>
          <p>[11] Nicolson, R. I., & Fawcett, A. J. (2007). "Procedural learning difficulties." <em>Developmental Medicine & Child Neurology</em>, 49(2), 119-129.</p>
          <p>[12] Rosenblum, S., Weiss, P. L., & Parush, S. (2004). "Handwriting evaluation for developmental dysgraphia." <em>Physical & Occupational Therapy in Pediatrics</em>, 24(4), 37-55.</p>
          <p>[13] McCutchen, D. (1996). "A capacity theory of writing: Working memory in composition." <em>Educational Psychology Review</em>, 8(3), 299-325.</p>
          <p>[14] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[15] Schulte-Körne, G., Deimel, W., Müller, K., Gutenbrunner, C., & Remschmidt, H. (1996). "Familial aggregation of spelling disability." <em>Journal of Child Psychology and Psychiatry</em>, 37(7), 817-822.</p>
          <p>[16] Berninger, V. W., Abbott, R. D., Thomson, J., Wagner, R., Swanson, H. L., Wijsman, E. M., & Raskind, W. (2006). "Modeling phonological core deficits." <em>Scientific Studies of Reading</em>, 10(2), 165-183.</p>
          <p>[17] Willcutt, E. G., Pennington, B. F., Olson, R. K., & DeFries, J. C. (2007). "Understanding comorbidity." <em>Developmental Neuropsychology</em>, 31(2), 129-153.</p>
          <p>[18] Fisher, S. E., & DeFries, J. C. (2002). "Developmental dyslexia: Genetic dissection of a complex cognitive trait." <em>Nature Reviews Neuroscience</em>, 3(10), 767-780.</p>
          <p>[19] Gialluisi, A., Newbury, D. F., Wilcutt, E. G., Olson, R. K., DeFries, J. C., Brandler, W. M., ... & Fisher, S. E. (2021). "Genome-wide screening for DNA variants associated with reading and language traits." <em>Genes, Brain and Behavior</em>, 20(1), e12648.</p>
          <p>[20] Greven, C. U., Harlaar, N., Kovas, Y., Chamorro-Premuzic, T., & Plomin, R. (2009). "More than just IQ." <em>Psychological Science</em>, 20(2), 139-146.</p>
          <p>[21] Raskind, W. H., Peter, B., Richards, T., Eckert, M. M., & Berninger, V. W. (2013). "The genetics of reading disabilities." <em>Journal of Developmental & Behavioral Pediatrics</em>, 34(2), 147-157.</p>
          <p>[22] Dewey, D., Kaplan, B. J., Crawford, S. G., & Wilson, B. N. (2002). "Developmental coordination disorder." <em>Human Movement Science</em>, 21(5-6), 905-918.</p>
          <p>[23] Heilman, K. M., Coenen, A., & Kluger, B. (2008). "Agraphia and micrographia." In G. Goldenberg & B. L. Miller (Eds.), <em>Handbook of clinical neurology</em> (Vol. 88, pp. 203-214). Elsevier.</p>
          <p>[24] Smits-Engelsman, B. C., Niemeijer, A. S., & van Galen, G. P. (2001). "Fine motor deficiencies in children diagnosed as DCD." <em>Human Movement Science</em>, 20(1-2), 161-182.</p>
          <p>[25] Van Galen, G. P. (1991). "Handwriting: Issues for a psychomotor theory." <em>Human Movement Science</em>, 10(2-3), 165-191.</p>
          <p>[26] Tseng, M. H., & Cermak, S. A. (1993). "The influence of ergonomic factors on handwriting performance." <em>American Journal of Occupational Therapy</em>, 47(10), 919-926.</p>
          <p>[27] Marr, D., Windsor, M. M., & Cermak, S. (2001). "Handwriting readiness." <em>Early Childhood Research & Practice</em>, 3(1), 1-17.</p>
          <p>[28] Rosenblum, S., Parush, S., & Weiss, P. L. (2003). "Computerized temporal handwriting characteristics." <em>American Journal of Occupational Therapy</em>, 57(2), 129-138.</p>
          <p>[29] Graham, S., & Weintraub, N. (1996). "A review of handwriting research." <em>Educational Psychology Review</em>, 8(1), 7-87.</p>
          <p>[30] Hamstra-Bletz, L., & Blöte, A. W. (1993). "A longitudinal study on dysgraphic handwriting in primary school." <em>Journal of Learning Disabilities</em>, 26(10), 689-699.</p>
          <p>[31] Deuel, R. K. (1995). "Developmental dysgraphia and motor skills disorders." <em>Journal of Child Neurology</em>, 10(Suppl 1), S6-S8.</p>
          <p>[32] Ehri, L. C. (2000). "Learning to read and learning to spell: Two sides of a coin." <em>Topics in Language Disorders</em>, 20(3), 19-36.</p>
          <p>[33] Badian, N. A. (2005). "Does a visual-orthographic deficit contribute to reading disability?" <em>Annals of Dyslexia</em>, 55(1), 28-52.</p>
          <p>[34] Berninger, V. W., Abbott, R. D., Nagy, W., & Carlisle, J. (2010). "Growth in phonological, orthographic, and morphological awareness in grades 1 to 6." <em>Journal of Psycholinguistic Research</em>, 39(2), 141-163.</p>
          <p>[35] Apel, K., Masterson, J. J., & Hart, P. (2004). "Integration of language components in spelling." In E. R. Silliman & L. C. Wilkinson (Eds.), <em>Language and literacy learning in schools</em> (pp. 292-315). Guilford Press.</p>
          <p>[36] Moats, L. C. (1995). <em>Spelling: Development, disability, and instruction</em>. York Press.</p>
          <p>[37] Treiman, R. (1993). <em>Beginning to spell: A study of first-grade children</em>. Oxford University Press.</p>
          <p>[38] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[39] Graham, S., & Harris, K. R. (2000). "The role of self-regulation and transcription skills in writing." <em>Educational Psychologist</em>, 35(1), 3-12.</p>
          <p>[40] Bishop, D. V., & Clarkson, B. (2003). "Written language as a window into residual language deficits." <em>Cortex</em>, 39(2), 215-237.</p>
          <p>[41] Connelly, V., Campbell, S., MacLean, M., & Barnes, J. (2006). "Contribution of lower order letter writing skills." <em>Developmental Neuropsychology</em>, 29(1), 175-196.</p>
          <p>[42] McCutchen, D. (2000). "Knowledge, processing, and working memory." <em>Educational Psychologist</em>, 35(1), 13-23.</p>
          <p>[43] Kellogg, R. T. (2001). "Competition for working memory among writing processes." <em>American Journal of Psychology</em>, 114(2), 175-191.</p>
          <p>[44] Bourdin, B., & Fayol, M. (1994). "Is written language production more difficult than oral?" <em>International Journal of Psychology</em>, 29(5), 591-620.</p>
          <p>[45] Swanson, H. L., & Berninger, V. W. (1996). "Individual differences in children's working memory and writing skill." <em>Journal of Experimental Child Psychology</em>, 63(2), 358-385.</p>
          <p>[46] Olive, T. (2004). "Working memory in writing." <em>European Psychologist</em>, 9(1), 32-41.</p>
          <p>[47] Hooper, S. R., Swartz, C. W., Wakely, M. B., de Kruif, R. E., & Montgomery, J. W. (2002). "Executive functions in elementary school children." <em>Journal of Learning Disabilities</em>, 35(1), 57-68.</p>
          <p>[48] Cornell, J. M. (1985). "Spontaneous mirror-writing in children." <em>Canadian Journal of Psychology</em>, 39(1), 174-179.</p>
          <p>[49] Weintraub, N., & Graham, S. (1998). "Writing legibly and quickly." <em>Learning Disabilities Research & Practice</em>, 13(3), 146-152.</p>
          <p>[50] Feder, K. P., & Majnemer, A. (2007). "Handwriting development, competency, and intervention." <em>Developmental Medicine & Child Neurology</em>, 49(4), 312-317.</p>
          <p>[51] Beery, K. E., & Beery, N. A. (2010). <em>The Beery-Buktenica developmental test of visual-motor integration</em>. Pearson.</p>
          <p>[52] Volman, M. J. M., van Schendel, B. M., & Jongmans, M. J. (2006). "Handwriting difficulties in primary school children." <em>Journal of Learning Disabilities</em>, 39(1), 58-67.</p>
          <p>[53] Berninger, V. W., & Swanson, H. L. (1994). "Modifying Hayes and Flower's model of skilled writing." In E. C. Butterfield (Ed.), <em>Children's writing</em> (pp. 57-81). JAI Press.</p>
          <p>[54] Englert, C. S., Raphael, T. E., Fear, K. L., & Anderson, L. M. (1988). "Students' metacognitive knowledge about how to write informational texts." <em>Learning Disability Quarterly</em>, 11(1), 18-46.</p>
          <p>[55] Graham, S., & Harris, K. R. (2009). "Almost 30 years of writing research." <em>Learning Disabilities Research & Practice</em>, 24(2), 63-77.</p>
          <p>[56] Hayes, J. R., & Flower, L. S. (1980). "Identifying the organization of writing processes." In L. W. Gregg & E. R. Steinberg (Eds.), <em>Cognitive processes in writing</em> (pp. 3-30). Lawrence Erlbaum.</p>
          <p>[57] Fitzgerald, J. (1987). "Research on revision in writing." <em>Review of Educational Research</em>, 57(4), 481-506.</p>
          <p>[58] Zimmerman, B. J., & Risemberg, R. (1997). "Becoming a self-regulated writer." <em>Contemporary Educational Psychology</em>, 22(1), 73-101.</p>
          <p>[59] Marr, D., & Cermak, S. (2002). "Predicting handwriting performance of early elementary students." <em>American Journal of Occupational Therapy</em>, 56(1), 17-25.</p>
          <p>[60] Karlsdottir, R., & Stefansson, T. (2002). "Problems in developing functional handwriting." <em>Perceptual and Motor Skills</em>, 94(2), 623-662.</p>
          <p>[61] Berninger, V. W., & Fuller, F. (1992). "Gender differences in orthographic, verbal, and compositional fluency." <em>Journal of School Psychology</em>, 30(4), 363-382.</p>
          <p>[62] Graham, S., Berninger, V. W., Abbott, R. D., Abbott, S. P., & Whitaker, D. (1997). "Role of mechanics in composing." <em>Journal of Educational Psychology</em>, 89(1), 170-182.</p>
          <p>[63] Roeltgen, D. P., & Heilman, K. M. (1985). "Review of agraphia and a proposal for an anatomically-based neuropsychological model of writing." <em>Applied Psycholinguistics</em>, 6(2), 205-229.</p>
          <p>[64] Luria, A. R. (1970). <em>Traumatic aphasia: Its syndromes, psychology and treatment</em>. Mouton.</p>
          <p>[65] Alexander, M. P., Fischer, R. S., & Friedman, R. (1992). "Lesion localization in apractic agraphia." <em>Archives of Neurology</em>, 49(3), 246-251.</p>
          <p>[66] Ellis, A. W. (1982). "Spelling and writing (and reading and speaking)." In A. W. Ellis (Ed.), <em>Normality and pathology in cognitive functions</em> (pp. 113-146). Academic Press.</p>
          <p>[67] Rapcsak, S. Z., & Beeson, P. M. (2004). "The role of left posterior inferior temporal cortex in spelling." <em>Neurology</em>, 62(12), 2221-2229.</p>
          <p>[68] Cahill, S. M. (2009). "Where does handwriting fit in?" <em>Intervention in School and Clinic</em>, 44(4), 223-228.</p>
          <p>[69] Graham, S., Harris, K. R., Mason, L., Fink-Chorzempa, B., Moran, S., & Saddler, B. (2008). "How do primary grade teachers teach handwriting?" <em>Reading and Writing</em>, 21(1-2), 49-69.</p>
          <p>[70] Puranik, C. S., & AlOtaiba, S. (2012). "Examining the contribution of handwriting and spelling to written expression." <em>Reading and Writing</em>, 25(7), 1523-1546.</p>
          <p>[71] Berninger, V. W. (2009). "Highlights of programmatic, interdisciplinary research on writing." <em>Learning Disabilities Research & Practice</em>, 24(2), 68-79.</p>
          <p>[72] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[73] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[74] Richards, T. L., Berninger, V. W., Stock, P., Altemeier, L., Trivedi, P., & Maravilla, K. (2011). "Differences between good and poor child writers on fMRI contrasts." <em>Reading and Writing</em>, 24(5), 493-516.</p>
          <p>[75] Re, A. M., Pedron, M., & Cornoldi, C. (2007). "Expressive writing difficulties in children described as exhibiting ADHD symptoms." <em>Journal of Learning Disabilities</em>, 40(3), 244-255.</p>
          <p>[76] Mayes, S. D., & Calhoun, S. L. (2006). "Frequency of reading, math, and writing disabilities in children with clinical disorders." <em>Learning and Individual Differences</em>, 16(2), 145-157.</p>
          <p>[77] Dewey, D., Kaplan, B. J., Crawford, S. G., & Wilson, B. N. (2002). "Developmental coordination disorder." <em>Human Movement Science</em>, 21(5-6), 905-918.</p>
          <p>[78] Nicolson, R. I., & Fawcett, A. J. (2007). "Procedural learning difficulties." <em>Developmental Medicine & Child Neurology</em>, 49(2), 119-129.</p>
          <p>[79] Fuentes, C. T., Mostofsky, S. H., & Bastian, A. J. (2009). "Children with autism show specific handwriting impairments." <em>Neurology</em>, 73(19), 1532-1537.</p>
          <p>[80] Kushki, A., Chau, T., & Anagnostou, E. (2011). "Handwriting difficulties in children with autism spectrum disorders." <em>Journal of Autism and Developmental Disorders</em>, 41(12), 1706-1716.</p>
          <p>[81] Katusic, S. K., Colligan, R. C., Weaver, A. L., & Barbaresi, W. J. (2009). "The forgotten learning disability." <em>Pediatrics</em>, 123(5), 1306-1313.</p>
          <p>[82] Raskind, W. H., Peter, B., Richards, T., Eckert, M. M., & Berninger, V. W. (2013). "The genetics of reading disabilities." <em>Journal of Developmental & Behavioral Pediatrics</em>, 34(2), 147-157.</p>
          <p>[83] Berninger, V. W., & Richards, T. L. (2010). "Inter-relationships among behavioral markers, genes, brain, and treatment in dyslexia and dysgraphia." <em>Future Neurology</em>, 5(4), 597-617.</p>
          <p>[84] Richards, T. L., Berninger, V. W., & Fayol, M. (2009). "fMRI activation differences between 11-year-old good and poor spellers." <em>Journal of Neurolinguistics</em>, 22(4), 327-353.</p>
          <p>[85] Berninger, V. W., & May, M. O. (2011). "Evidence-based diagnosis and treatment for specific learning disabilities." <em>Journal of Learning Disabilities</em>, 44(2), 167-183.</p>
          <p>[86] Hoy, M. M., Egan, M. Y., & Feder, K. P. (2011). "A systematic review of interventions to improve handwriting." <em>Canadian Journal of Occupational Therapy</em>, 78(1), 13-25.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dysgraphia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dysgraphia
        </a>
      </div>
    </article>
  );
}
