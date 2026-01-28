import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface VPDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function VPDSymptoms({ setCurrentArticle }: VPDSymptomsProps) {
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
        Visual Processing Disorder: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Visual Processing Disorder manifests through a wide range of symptoms affecting how individuals 
            interpret, remember, and use visual information.<sup>[1]</sup> Symptoms vary significantly based 
            on which visual processing skills are affected and to what degree.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual Discrimination Difficulties</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1633632969713-ddd63af75adf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwbGV0dGVycyUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNjc0MDYyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Reading letters close up"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Letter and Number Confusion</h3>
          <p className="mb-4">
            Difficulty distinguishing between similar-looking letters (b/d, p/q, m/n) or numbers (6/9, 2/5) 
            is a hallmark of visual discrimination deficits.<sup>[3]</sup> This persists beyond typical 
            developmental reversals seen in young children.<sup>[4]</sup> Reading becomes slow and error-prone 
            when letters appear similar.<sup>[5]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Word Recognition Challenges</h3>
          <p className="mb-4">
            Similar-looking words are confused—"saw" and "was," "through" and "thorough."<sup>[6]</sup> This 
            isn't a phonological issue but a visual one—the overall shape and appearance of words look too 
            similar to distinguish reliably.<sup>[7]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty with Visual Details</h3>
          <p className="mb-4">
            Noticing small differences in shapes, patterns, or pictures is challenging.<sup>[8]</sup> "Find 
            the difference" activities are particularly difficult.<sup>[9]</sup> Missing visual details affects 
            reading comprehension, math problem-solving, and following visual instructions.<sup>[10]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Color and Shape Sorting</h3>
          <p className="mb-4">
            Tasks requiring discrimination between similar colors or shapes may be slower or more error-prone.<sup>[11]</sup> 
            Organizing items by visual characteristics is challenging.<sup>[12]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual Figure-Ground Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Losing Place While Reading</h3>
          <p className="mb-4">
            Tracking lines of text is difficult—skipping lines, re-reading lines, or losing place frequently 
            occurs.<sup>[13]</sup> The words on the page blend together, making it hard to focus on the 
            correct line.<sup>[14]</sup> Finger or bookmark tracking becomes necessary.<sup>[15]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty Finding Objects</h3>
          <p className="mb-4">
            Locating items in cluttered spaces (finding a toy in a messy room, finding an item in a full 
            refrigerator, finding information on a busy worksheet) is extremely challenging.<sup>[16]</sup> 
            Objects don't "pop out" from their backgrounds.<sup>[17]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Overwhelm in Visually Busy Environments</h3>
          <p className="mb-4">
            Busy worksheets, crowded bulletin boards, or visually complex environments are overwhelming.<sup>[18]</sup> 
            Too much visual information at once makes it impossible to focus on what's important.<sup>[19]</sup> 
            Clean, simple visual presentations work much better.<sup>[20]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Difficulty with "Hidden Pictures" Activities</h3>
          <p className="mb-4">
            Finding hidden objects in pictures or "Where's Waldo" type activities are particularly 
            challenging.<sup>[21]</sup> The target object doesn't separate visually from the background.<sup>[22]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual Sequencing Difficulties</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1509228468518-180dd4864904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBoYWJldCUyMGxldHRlcnN8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Alphabet letters and sequencing"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Letter and Number Reversals</h3>
          <p className="mb-4">
            Reversing letters (b/d, p/q) or numbers (6/9) persists beyond early elementary years.<sup>[23]</sup> 
            This reflects difficulty perceiving and remembering the correct orientation and sequence of 
            visual elements.<sup>[24]</sup> Writing may show persistent reversals.<sup>[25]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sequencing Pattern Difficulties</h3>
          <p className="mb-4">
            Following or creating visual patterns (ABC, ABC, ABC...) is challenging.<sup>[26]</sup> Understanding 
            "what comes next" in a visual sequence requires effort.<sup>[27]</sup> Math patterns and sequences 
            may be particularly difficult.<sup>[28]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Spelling Challenges</h3>
          <p className="mb-4">
            Remembering the correct sequence of letters in words is difficult.<sup>[29]</sup> Spelling errors 
            often involve correct letters in wrong order rather than phonetic misspellings.<sup>[30]</sup> 
            Visual memory for word patterns is weak.<sup>[31]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multi-Step Visual Instructions</h3>
          <p className="mb-4">
            Following instructions with multiple visual steps (assembly instructions, recipes with pictures, 
            multi-step math problems) is challenging.<sup>[32]</sup> The sequence gets jumbled or steps are 
            skipped.<sup>[33]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual Memory Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Short-Term Visual Memory</h3>
          <p className="mb-4">
            Difficulty remembering visual information just seen—what was on a page just read, the sequence 
            shown in a demonstration, or visual details just observed.<sup>[34]</sup> This affects note-taking, 
            copying from the board, and following visual demonstrations.<sup>[35]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Long-Term Visual Memory</h3>
          <p className="mb-4">
            Difficulty recognizing familiar faces, remembering routes or locations, or recalling visual 
            details from memory.<sup>[36]</sup> Sight word recognition is challenging because visual memory 
            for word shapes is weak.<sup>[37]</sup> Remembering what letters and numbers look like takes 
            extra effort.<sup>[38]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Imagery Difficulties</h3>
          <p className="mb-4">
            Creating mental images or "visualizing" is difficult.<sup>[39]</sup> Reading comprehension suffers 
            when unable to create mental pictures of what's being read.<sup>[40]</sup> "Picture it in your 
            mind" instructions aren't helpful.<sup>[41]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Copying Challenges</h3>
          <p className="mb-4">
            Copying from the board requires looking, remembering what was seen, looking down, and writing—this 
            visual memory demand is significant.<sup>[42]</sup> Frequent looking back and forth is necessary, 
            and errors are common.<sup>[43]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual-Spatial Processing Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Directional Confusion</h3>
          <p className="mb-4">
            Confusion with left/right, up/down, over/under, and other spatial concepts persists.<sup>[44]</sup> 
            Following directional instructions is challenging.<sup>[45]</sup> This affects reading (left to 
            right, top to bottom), math (place value, column alignment), and daily navigation.<sup>[46]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Poor Spatial Awareness</h3>
          <p className="mb-4">
            Bumping into things, misjudging distances, or difficulty navigating spaces reflects poor spatial 
            awareness.<sup>[47]</sup> Parking within lines, judging whether something will fit in a space, 
            or arranging objects spatially is difficult.<sup>[48]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Map and Graph Difficulties</h3>
          <p className="mb-4">
            Reading maps, understanding graphs, or interpreting spatial diagrams is challenging.<sup>[49]</sup> 
            The spatial relationships represented in two dimensions are hard to comprehend.<sup>[50]</sup> 
            Geography and data visualization tasks are affected.<sup>[51]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Math Spatial Concepts</h3>
          <p className="mb-4">
            Geometry, measurement, fractions, and other math concepts requiring spatial reasoning are 
            particularly challenging.<sup>[52]</sup> Understanding "greater than/less than," place value, or 
            spatial arrangements in math problems is difficult.<sup>[53]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization of Physical Space</h3>
          <p className="mb-4">
            Organizing desks, rooms, or other spaces is challenging.<sup>[54]</sup> Spatial planning—figuring 
            out where things should go—doesn't come naturally.<sup>[55]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual-Motor Integration Difficulties</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdGluZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Handwriting practice"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Handwriting Difficulties</h3>
          <p className="mb-4">
            Poor handwriting that's messy, illegible, or requires significant effort reflects visual-motor 
            integration challenges.<sup>[56]</sup> Letter formation is inconsistent, spacing is irregular, 
            and writing on lines is difficult.<sup>[57]</sup> Writing is often slow and laborious.<sup>[58]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Copying Shapes and Designs</h3>
          <p className="mb-4">
            Copying simple shapes, designs, or drawings is challenging.<sup>[59]</sup> The visual input doesn't 
            smoothly translate to motor output.<sup>[60]</sup> Young children may struggle with copying circles, 
            squares, or triangles.<sup>[61]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Catching and Throwing</h3>
          <p className="mb-4">
            Ball sports requiring hand-eye coordination are difficult.<sup>[62]</sup> Tracking a moving object 
            visually and coordinating hand movements to catch or hit it is challenging.<sup>[63]</sup> This 
            affects sports participation and playground activities.<sup>[64]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fine Motor Visual Tasks</h3>
          <p className="mb-4">
            Cutting with scissors, threading beads, buttoning, or other tasks requiring precise visual-motor 
            coordination are slow and difficult.<sup>[65]</sup> Visual guidance of fine motor movements is 
            imprecise.<sup>[66]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Coloring and Drawing</h3>
          <p className="mb-4">
            Coloring within lines, drawing recognizable pictures, or controlling pencil/crayon movements 
            precisely is challenging.<sup>[67]</sup> Artistic activities may be frustrating.<sup>[68]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual Closure and Form Constancy Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Recognizing Incomplete Objects</h3>
          <p className="mb-4">
            Difficulty identifying objects or letters when only part is visible reflects visual closure 
            deficits.<sup>[69]</sup> The brain doesn't automatically "fill in" missing information.<sup>[70]</sup> 
            Partially obscured text or objects are hard to recognize.<sup>[71]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Font and Size Changes</h3>
          <p className="mb-4">
            Recognizing the same letter in different fonts, sizes, or orientations is challenging with form 
            constancy deficits.<sup>[72]</sup> An "A" in one font doesn't immediately register as the same 
            as an "A" in another font.<sup>[73]</sup> Generalizing across visual variations is difficult.<sup>[74]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pattern Completion</h3>
          <p className="mb-4">
            Predicting what comes next in a pattern or completing incomplete patterns requires visual 
            closure.<sup>[75]</sup> This affects math pattern recognition and problem-solving.<sup>[76]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Reading-Specific Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Slow Reading Speed</h3>
          <p className="mb-4">
            Reading is significantly slower than peers due to visual processing demands.<sup>[77]</sup> Each 
            word requires extra visual processing time.<sup>[78]</sup> Fluency suffers even when decoding 
            skills are adequate.<sup>[79]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Comprehension Difficulties</h3>
          <p className="mb-4">
            So much mental energy goes to visual processing that comprehension suffers.<sup>[80]</sup> By the 
            time visual processing is complete, the meaning is lost.<sup>[81]</sup> Re-reading is frequently 
            necessary.<sup>[82]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Fatigue</h3>
          <p className="mb-4">
            Extended reading causes visual fatigue, eye strain, or headaches.<sup>[83]</sup> The extra effort 
            required for visual processing is exhausting.<sup>[84]</sup> Frequent breaks are necessary.<sup>[85]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Skipping Words or Lines</h3>
          <p className="mb-4">
            Skipping words, skipping lines, or re-reading lines occurs frequently despite trying to be 
            careful.<sup>[86]</sup> The eyes don't track smoothly across text.<sup>[87]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Math-Specific Symptoms</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1509228468518-180dd4864904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwbnVtYmVyc3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Math numbers and calculation"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Number Reversals and Transpositions</h3>
          <p className="mb-4">
            Reversing numbers (6/9, 2/5) or transposing digits (writing 52 instead of 25) occurs frequently.<sup>[88]</sup> 
            This reflects visual processing rather than mathematical understanding deficits.<sup>[89]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Column Alignment Difficulties</h3>
          <p className="mb-4">
            Keeping numbers aligned in columns for multi-digit calculations is very challenging.<sup>[90]</sup> 
            Visual-spatial processing of number placement affects calculation accuracy.<sup>[91]</sup> Graph 
            paper may be necessary.<sup>[92]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Math Concepts</h3>
          <p className="mb-4">
            Geometry, fractions (visual representations of parts/whole), measurement, and graphing are 
            particularly affected.<sup>[93]</sup> Math concepts requiring strong visual-spatial processing 
            are most challenging.<sup>[94]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Copying Math Problems</h3>
          <p className="mb-4">
            Copying math problems from the board or a book results in frequent errors—miscopying numbers, 
            losing place, or misaligning elements.<sup>[95]</sup> Calculation may be correct but the copied 
            problem is wrong.<sup>[96]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Living and Self-Care Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dressing Challenges</h3>
          <p className="mb-4">
            Buttoning, zipping, tying shoes, or matching clothes appropriately involves visual-motor and 
            visual-spatial processing.<sup>[97]</sup> Getting dressed takes longer and may result in 
            backwards, inside-out, or mismatched clothing.<sup>[98]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Eating and Food Tasks</h3>
          <p className="mb-4">
            Using utensils precisely, pouring without spilling, or cutting food requires visual-motor 
            coordination.<sup>[99]</sup> These tasks may be messier or require more concentration than for 
            peers.<sup>[100]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Personal Organization</h3>
          <p className="mb-4">
            Organizing belongings, finding items, or keeping spaces tidy is challenging when visual processing 
            and spatial skills are weak.<sup>[101]</sup> Backpacks, lockers, and rooms may be chronically 
            disorganized.<sup>[102]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social and Emotional Manifestations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Frustration and Avoidance</h3>
          <p className="mb-4">
            Frustration with visual tasks leads to avoidance—resisting reading, homework, or activities 
            requiring visual processing.<sup>[103]</sup> This may be misinterpreted as laziness or 
            oppositional behavior.<sup>[104]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Low Self-Esteem</h3>
          <p className="mb-4">
            Persistent struggles with tasks others find easy affects self-esteem.<sup>[105]</sup> Children may 
            believe they're "stupid" when difficulties actually reflect processing differences.<sup>[106]</sup> 
            Academic self-concept may be particularly impacted.<sup>[107]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Impact</h3>
          <p className="mb-4">
            Difficulty with visual-motor activities (sports, games, crafts) may affect peer relationships.<sup>[108]</sup> 
            Being picked last for teams or avoiding group activities impacts social participation.<sup>[109]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Anxiety</h3>
          <p className="mb-4">
            Anticipatory anxiety about visually demanding tasks can develop.<sup>[110]</sup> Test anxiety, 
            reading anxiety, or general school anxiety may arise from accumulated visual processing 
            challenges.<sup>[111]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Age-Related Symptom Presentation</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Preschool and Early Elementary</h3>
          <p className="mb-4">
            Difficulty with puzzles, shape recognition, coloring, cutting, copying shapes, and learning 
            letters.<sup>[112]</sup> Clumsiness and visual-motor delays may be apparent.<sup>[113]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Later Elementary</h3>
          <p className="mb-4">
            Reading difficulties, poor handwriting, math struggles, and organizational problems become more 
            apparent as demands increase.<sup>[114]</sup> Persistent reversals distinguish VPD from typical 
            development.<sup>[115]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle and High School</h3>
          <p className="mb-4">
            Note-taking, test-taking, complex reading comprehension, and higher-level math challenge students 
            with VPD.<sup>[116]</sup> Compensation strategies may mask some difficulties but fatigue and stress 
            increase.<sup>[117]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adulthood</h3>
          <p className="mb-4">
            Symptoms continue but adults often have developed workarounds.<sup>[118]</sup> Career choices may 
            reflect strengths and avoid visual processing demands.<sup>[119]</sup> Technology helps compensate 
            for some difficulties.<sup>[120]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Recognizing the Pattern:</h3>
            <div className="text-sm">
              <p>
                Visual processing disorder symptoms are diverse, affecting reading, writing, math, coordination, 
                and daily living skills.<sup>[121]</sup> Not all symptoms appear in every individual—VPD 
                manifests differently based on which specific visual processing skills are affected.<sup>[122]</sup> 
                The key pattern is difficulty with tasks requiring visual interpretation, organization, or 
                visual-motor coordination despite normal eyesight.<sup>[123]</sup> Recognizing this pattern 
                helps distinguish VPD from other learning differences and guides appropriate support.<sup>[124]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[2] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[3] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[4] Terepocki, M., Kruk, R. S., & Willows, D. M. (2002). "The incidence and nature of letter orientation errors in reading disability." <em>Journal of Learning Disabilities</em>, 35(3), 214-233.</p>
          <p>[5] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[6] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[7] Kulp, M. T., & Schmidt, P. P. (1996). "Visual predictors of reading performance in kindergarten and first grade children." <em>Optometry and Vision Science</em>, 73(4), 255-262.</p>
          <p>[8] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[9] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[10] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[11] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[12] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[13] Grisham, D., Sheppard, M. M., & Tran, W. U. (1993). "Visual symptoms and reading performance." <em>Optometry and Vision Science</em>, 70(5), 384-391.</p>
          <p>[14] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[15] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[16] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[17] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[18] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[19] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[20] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[21] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[22] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[23] Terepocki, M., Kruk, R. S., & Willows, D. M. (2002). "The incidence and nature of letter orientation errors in reading disability." <em>Journal of Learning Disabilities</em>, 35(3), 214-233.</p>
          <p>[24] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[25] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[26] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[27] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[28] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[29] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[30] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[31] Kulp, M. T., & Schmidt, P. P. (1996). "Visual predictors of reading performance in kindergarten and first grade children." <em>Optometry and Vision Science</em>, 73(4), 255-262.</p>
          <p>[32] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[33] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[34] Lezak, M. D., Howieson, D. B., Loring, D. W., & Fischer, J. S. (2004). <em>Neuropsychological assessment</em> (4th ed.). New York: Oxford University Press.</p>
          <p>[35] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[36] Benton, A. L., Sivan, A. B., Hamsher, K. deS., Varney, N. R., & Spreen, O. (1994). <em>Contributions to neuropsychological assessment</em> (2nd ed.). New York: Oxford University Press.</p>
          <p>[37] Kulp, M. T., & Schmidt, P. P. (1996). "Visual predictors of reading performance in kindergarten and first grade children." <em>Optometry and Vision Science</em>, 73(4), 255-262.</p>
          <p>[38] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[39] Kosslyn, S. M., Thompson, W. L., & Ganis, G. (2006). <em>The case for mental imagery</em>. New York: Oxford University Press.</p>
          <p>[40] Pressley, M. (1976). "Mental imagery helps eight-year-olds remember what they read." <em>Journal of Educational Psychology</em>, 68(3), 355-359.</p>
          <p>[41] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[42] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[43] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[44] Newcombe, F., & Ratcliff, G. (1989). "Disorders of visuospatial analysis." In F. Boller & J. Grafman (Eds.), <em>Handbook of neuropsychology</em> (Vol. 2, pp. 333-356). Amsterdam: Elsevier.</p>
          <p>[45] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[46] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[47] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[48] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[49] Newcombe, F., & Ratcliff, G. (1989). "Disorders of visuospatial analysis." In F. Boller & J. Grafman (Eds.), <em>Handbook of neuropsychology</em> (Vol. 2, pp. 333-356). Amsterdam: Elsevier.</p>
          <p>[50] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[51] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[52] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[53] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[54] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[55] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[56] Cornhill, H., & Case-Smith, J. (1996). "Factors that relate to good and poor handwriting." <em>American Journal of Occupational Therapy</em>, 50(9), 732-739.</p>
          <p>[57] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[58] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[59] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[60] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[61] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[62] Wilson, P. H., & McKenzie, B. E. (1998). "Information processing deficits associated with developmental coordination disorder: A meta-analysis of research findings." <em>Journal of Child Psychology and Psychiatry</em>, 39(6), 829-840.</p>
          <p>[63] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[64] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[65] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[66] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[67] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[68] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[69] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[70] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[71] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[72] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[73] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[74] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[75] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[76] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[77] Grisham, D., Sheppard, M. M., & Tran, W. U. (1993). "Visual symptoms and reading performance." <em>Optometry and Vision Science</em>, 70(5), 384-391.</p>
          <p>[78] Kavale, K., & Forness, S. (2000). "Auditory and visual perception processes and reading ability: A quantitative reanalysis and historical reinterpretation." <em>Learning Disability Quarterly</em>, 23(4), 253-270.</p>
          <p>[79] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[80] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[81] Grisham, D., Sheppard, M. M., & Tran, W. U. (1993). "Visual symptoms and reading performance." <em>Optometry and Vision Science</em>, 70(5), 384-391.</p>
          <p>[82] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[83] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[84] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[85] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[86] Grisham, D., Sheppard, M. M., & Tran, W. U. (1993). "Visual symptoms and reading performance." <em>Optometry and Vision Science</em>, 70(5), 384-391.</p>
          <p>[87] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[88] Terepocki, M., Kruk, R. S., & Willows, D. M. (2002). "The incidence and nature of letter orientation errors in reading disability." <em>Journal of Learning Disabilities</em>, 35(3), 214-233.</p>
          <p>[89] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[90] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[91] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[92] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[93] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[94] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[95] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[96] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[97] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[98] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[99] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[100] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[101] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[102] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[103] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[104] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[105] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[106] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[107] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[108] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[109] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[110] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[111] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[112] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[113] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[114] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[115] Terepocki, M., Kruk, R. S., & Willows, D. M. (2002). "The incidence and nature of letter orientation errors in reading disability." <em>Journal of Learning Disabilities</em>, 35(3), 214-233.</p>
          <p>[116] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[117] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[118] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[119] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[120] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[121] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[122] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[123] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[124] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
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
