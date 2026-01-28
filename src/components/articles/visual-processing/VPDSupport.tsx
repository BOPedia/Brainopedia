import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface VPDSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function VPDSupport({ setCurrentArticle }: VPDSupportProps) {
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
        Visual Processing Disorder: Support & Management
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Managing Visual Processing Disorder involves multiple approaches: environmental modifications, 
            compensatory strategies, direct intervention, and appropriate accommodations.<sup>[1]</sup> Effective 
            support is individualized based on specific visual processing deficits and functional impacts.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Comprehensive Management Approach</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Team collaboration and support"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Environmental Modifications</h3>
          <p className="mb-4">
            Changing the visual environment to reduce demands and optimize access to information.<sup>[3]</sup> 
            This includes simplifying visual presentations, improving lighting, and organizing spaces.<sup>[4]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Compensatory Strategies</h3>
          <p className="mb-4">
            Teaching skills and strategies to work around visual processing deficits.<sup>[5]</sup> These include 
            organizational systems, visual aids, and alternative ways of accessing information.<sup>[6]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Direct Remediation</h3>
          <p className="mb-4">
            Targeted therapy aimed at improving underlying visual processing skills.<sup>[7]</sup> This includes 
            vision therapy, occupational therapy, and specific training programs.<sup>[8]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Accommodations</h3>
          <p className="mb-4">
            Formal modifications in educational or work settings ensuring equal access despite visual processing 
            differences.<sup>[9]</sup> These level the playing field without lowering expectations.<sup>[10]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Vision Therapy</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What is Vision Therapy?</h3>
          <p className="mb-4">
            Vision therapy is a structured program of visual activities designed to improve visual processing 
            skills.<sup>[11]</sup> Conducted by developmental optometrists, it targets specific visual processing 
            deficits through systematic exercises.<sup>[12]</sup> Programs are individualized based on assessment 
            findings.<sup>[13]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Components of Vision Therapy</h3>
          <p className="mb-4">
            Activities target visual-motor integration, visual discrimination, visual memory, eye tracking, 
            eye teaming, and visual-spatial skills.<sup>[14]</sup> Therapy progresses systematically from 
            easier to more challenging tasks.<sup>[15]</sup> Home practice reinforces office-based therapy.<sup>[16]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Evidence for Vision Therapy</h3>
          <p className="mb-4">
            Research supports vision therapy for certain visual processing and binocular vision problems.<sup>[17]</sup> 
            The CITT (Convergence Insufficiency Treatment Trial) demonstrated effectiveness for convergence 
            insufficiency.<sup>[18]</sup> Evidence for visual processing remediation specifically is more 
            limited but growing.<sup>[19]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Duration and Commitment</h3>
          <p className="mb-4">
            Vision therapy typically involves weekly office visits and daily home practice over several 
            months.<sup>[20]</sup> The time and cost commitment is substantial but may benefit appropriate 
            candidates.<sup>[21]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Occupational Therapy</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbnxlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Therapy session"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">OT Role in VPD</h3>
          <p className="mb-4">
            Occupational therapists address how visual processing affects daily functioning.<sup>[22]</sup> 
            They work on visual-motor integration, visual perception, and functional visual skills.<sup>[23]</sup> 
            OT takes a holistic, functional approach.<sup>[24]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Motor Activities</h3>
          <p className="mb-4">
            Activities develop hand-eye coordination, visual-motor integration, and fine motor skills.<sup>[25]</sup> 
            This includes cutting, drawing, tracing, copying, and handwriting practice.<sup>[26]</sup> Activities 
            are graded to challenge appropriately.<sup>[27]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Perception Training</h3>
          <p className="mb-4">
            OTs use structured activities targeting visual discrimination, visual memory, figure-ground, 
            spatial processing, and sequencing.<sup>[28]</sup> Games, puzzles, and computer programs may be 
            incorporated.<sup>[29]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Integration</h3>
          <p className="mb-4">
            OT emphasizes applying skills to real-world tasks—dressing, eating, school activities, self-care.<sup>[30]</sup> 
            The goal is functional independence and participation.<sup>[31]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Accommodations and Modifications</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Presentation Modifications</h3>
          <p className="mb-4">
            Simplify worksheets by reducing visual clutter, increasing font size, providing extra spacing 
            between items, and presenting fewer items per page.<sup>[32]</sup> Use clear, simple fonts and 
            high contrast.<sup>[33]</sup> Highlight key information.<sup>[34]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Extended Time</h3>
          <p className="mb-4">
            Visual processing takes longer—extended time for reading, writing, tests, and assignments 
            accommodates this.<sup>[35]</sup> This doesn't lower standards but provides adequate time for 
            processing.<sup>[36]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Alternative Formats</h3>
          <p className="mb-4">
            Provide information in multiple formats—verbal instruction with visual support, audiobooks 
            accompanying text, video demonstrations with written instructions.<sup>[37]</sup> Multimodal 
            presentation supports visual processing.<sup>[38]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reduced Copying</h3>
          <p className="mb-4">
            Minimize copying from board or books—provide photocopies, use carbon paper, allow photographing 
            board work, or provide notes.<sup>[39]</sup> Copying is particularly challenging with VPD.<sup>[40]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Use of Technology</h3>
          <p className="mb-4">
            Computers for writing reduce visual-motor demands of handwriting.<sup>[41]</sup> Text-to-speech 
            reduces visual processing load for reading.<sup>[42]</sup> Digital materials allow adjustment 
            of size, contrast, and format.<sup>[43]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Testing Modifications</h3>
          <p className="mb-4">
            Modified test formats include extended time, reduced visual density of tests, verbal administration 
            of written tests, use of scribe for responses, and testing in quiet settings.<sup>[44]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strategies for Reading</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Tracking Aids</h3>
          <p className="mb-4">
            Bookmarks, finger tracking, or reading windows help maintain place while reading.<sup>[45]</sup> 
            Highlighting or underlining important text assists focus.<sup>[46]</sup> Line readers (strips with 
            a cut-out window) isolate single lines.<sup>[47]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Text Modifications</h3>
          <p className="mb-4">
            Larger fonts, increased line spacing, wider margins, and high contrast improve readability.<sup>[48]</sup> 
            Digital text allows customization.<sup>[49]</sup> Breaking text into smaller chunks reduces 
            overwhelm.<sup>[50]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Audiobooks and Text-to-Speech</h3>
          <p className="mb-4">
            Audiobooks provide access to content without visual processing demands.<sup>[51]</sup> Text-to-speech 
            software converts written text to audio.<sup>[52]</sup> Simultaneous reading and listening may 
            support comprehension.<sup>[53]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reduced Reading Load</h3>
          <p className="mb-4">
            Shortened assignments, summaries of longer texts, or alternative ways of demonstrating knowledge 
            reduce reading demands.<sup>[54]</sup> This accesses content without excessive visual processing 
            burden.<sup>[55]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strategies for Writing and Math</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwcHJhY3RpY2V8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Writing practice"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Handwriting Supports</h3>
          <p className="mb-4">
            Raised-line paper, highlighted lines, or larger-lined paper assists spatial organization.<sup>[56]</sup> 
            Pencil grips and slant boards improve visual-motor control.<sup>[57]</sup> Reducing handwriting 
            demands through typing or dictation may be appropriate.<sup>[58]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Graphic Organizers</h3>
          <p className="mb-4">
            Structured visual organizers help organize thoughts and information spatially.<sup>[59]</sup> These 
            reduce demands on visual-spatial planning while supporting content organization.<sup>[60]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Math Visual Supports</h3>
          <p className="mb-4">
            Graph paper helps align numbers in columns.<sup>[61]</sup> Visual models and manipulatives support 
            math concepts.<sup>[62]</sup> Calculators reduce visual-motor demands of calculation.<sup>[63]</sup> 
            Extra space for work and clearly organized problems assist.<sup>[64]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Modifications</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Classroom Organization</h3>
          <p className="mb-4">
            Consistent, predictable organization of classroom spaces helps navigation.<sup>[65]</sup> Clear 
            labeling with pictures and words assists finding materials.<sup>[66]</sup> Reducing visual clutter 
            on walls and desks minimizes distraction.<sup>[67]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Seating Placement</h3>
          <p className="mb-4">
            Preferential seating near the board with clear sight lines helps.<sup>[68]</sup> Away from visual 
            distractions like windows or high-traffic areas improves focus.<sup>[69]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Lighting</h3>
          <p className="mb-4">
            Adequate, non-glare lighting improves visual processing.<sup>[70]</sup> Natural light when possible, 
            or full-spectrum artificial lighting supports visual function.<sup>[71]</sup> Avoiding glare on 
            whiteboards or screens is important.<sup>[72]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Color and Contrast</h3>
          <p className="mb-4">
            High contrast between text and background enhances readability.<sup>[73]</sup> Color coding can 
            organize information but should be used judiciously to avoid overwhelm.<sup>[74]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Compensatory Strategies and Skills</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organizational Systems</h3>
          <p className="mb-4">
            Explicit organizational systems compensate for visual-spatial organization difficulties.<sup>[75]</sup> 
            Color-coded folders, labeled bins, consistent routines, and checklists provide structure.<sup>[76]</sup> 
            External organization replaces challenged internal organization.<sup>[77]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Advocacy</h3>
          <p className="mb-4">
            Teaching individuals to recognize their needs and request accommodations empowers them.<sup>[78]</sup> 
            This includes knowing what helps, communicating needs clearly, and asking for support when needed.<sup>[79]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Attention Strategies</h3>
          <p className="mb-4">
            Strategies for managing visual attention include systematic visual scanning, breaking complex 
            visual tasks into steps, and using verbal self-instruction.<sup>[80]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory Supports</h3>
          <p className="mb-4">
            External memory aids compensate for visual memory difficulties—written lists, reminders, 
            photographs of arrangements, labeled diagrams.<sup>[81]</sup> Don't rely on visual memory when 
            external supports work better.<sup>[82]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assistive Technology</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGV2aWNlc3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Assistive technology devices"
            className="w-72 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Word Processing</h3>
          <p className="mb-4">
            Computers eliminate handwriting demands, allowing focus on content rather than visual-motor 
            execution.<sup>[83]</sup> Spell-check, grammar-check, and formatting tools compensate for visual 
            processing challenges.<sup>[84]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Text-to-Speech Software</h3>
          <p className="mb-4">
            Software that reads digital text aloud reduces visual processing demands.<sup>[85]</sup> Many 
            devices have built-in text-to-speech.<sup>[86]</sup> This provides access to written material 
            without visual strain.<sup>[87]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Speech-to-Text/Dictation</h3>
          <p className="mb-4">
            Voice typing eliminates writing demands entirely.<sup>[88]</sup> Ideas can be expressed without 
            visual-motor execution barriers.<sup>[89]</sup> Accuracy has improved significantly with modern 
            software.<sup>[90]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Apps and Software</h3>
          <p className="mb-4">
            Specialized apps for organization, note-taking, reading support, and visual processing training 
            exist.<sup>[91]</sup> Digital tools allow customization of visual presentation.<sup>[92]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Audiobooks and Digital Media</h3>
          <p className="mb-4">
            Digital audiobooks, podcasts, and educational videos provide content without print reading.<sup>[93]</sup> 
            Services like Learning Ally or Bookshare offer accessible educational materials.<sup>[94]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Home and Family Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creating Visual-Friendly Environments</h3>
          <p className="mb-4">
            Home environments can be organized to reduce visual processing demands—clear labeling, consistent 
            placement of items, reduced clutter, and good lighting.<sup>[95]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Daily Living Support</h3>
          <p className="mb-4">
            Families can support development of daily living skills through visual schedules, step-by-step 
            instructions with pictures, and patient teaching.<sup>[96]</sup> Breaking tasks into visual steps 
            helps.<sup>[97]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Homework Strategies</h3>
          <p className="mb-4">
            Structured homework routines, organized workspaces, frequent breaks, and multimodal instruction 
            support homework completion.<sup>[98]</sup> Parents can read instructions, discuss concepts, or 
            provide visual supports.<sup>[99]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding and Patience</h3>
          <p className="mb-4">
            Family understanding that difficulties are neurologically-based, not willful, is crucial.<sup>[100]</sup> 
            Patience with slower processing and appreciation of effort help emotional well-being.<sup>[101]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Building on Strengths</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory and Verbal Strengths</h3>
          <p className="mb-4">
            Many individuals with VPD have strong auditory processing and verbal skills.<sup>[102]</sup> Learning 
            through listening, discussion, and verbal instruction leverages strengths.<sup>[103]</sup> Audiobooks 
            and lectures suit this learning style.<sup>[104]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hands-On and Kinesthetic Learning</h3>
          <p className="mb-4">
            Experiential, hands-on learning may work better than visual instruction.<sup>[105]</sup> Manipulatives, 
            experiments, and active learning engage without heavy visual demands.<sup>[106]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Areas of Interest and Talent</h3>
          <p className="mb-4">
            VPD affects visual processing but doesn't limit intelligence or potential.<sup>[107]</sup> Identifying 
            and nurturing strengths and interests builds confidence and success.<sup>[108]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Monitoring and Adjusting Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Regular Review</h3>
          <p className="mb-4">
            Needs change as individuals mature and face new demands.<sup>[109]</sup> Regular review of 
            accommodations, strategies, and support ensures appropriateness.<sup>[110]</sup> What works at 
            one stage may need adjustment later.<sup>[111]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Measuring Progress</h3>
          <p className="mb-4">
            Track academic performance, functional skills, and quality of life to evaluate intervention 
            effectiveness.<sup>[112]</sup> Adjust approaches based on what works.<sup>[113]</sup>
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Collaborative Approach</h3>
          <p className="mb-4">
            Effective support requires collaboration among professionals, educators, family, and the 
            individual.<sup>[114]</sup> Regular communication ensures coordinated, consistent support.<sup>[115]</sup>
          </p>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Comprehensive Support for Success:</h3>
            <div className="text-sm">
              <p>
                Managing VPD effectively requires multiple strategies: environmental modifications to reduce 
                demands, compensatory strategies to work around deficits, appropriate accommodations ensuring 
                access, and sometimes direct remediation targeting skills.<sup>[116]</sup> Support is individualized 
                based on specific visual processing deficits and functional impacts.<sup>[117]</sup> The goal 
                is enabling success by providing necessary supports while building on strengths.<sup>[118]</sup> 
                With comprehensive, coordinated support, individuals with VPD can achieve their potential.<sup>[119]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[2] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[3] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[4] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[5] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[6] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[7] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[8] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[9] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities: An analysis of the interaction hypothesis." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[10] Thurlow, M. L., Lazarus, S. S., Thompson, S. J., & Morse, A. B. (2005). <em>State policies on assessment participation and accommodations for students with disabilities</em>. <em>Journal of Special Education</em>, 38(4), 232-240.</p>
          <p>[11] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[12] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[13] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[14] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[15] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[16] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[17] Scheiman, M., Mitchell, G. L., Cotter, S., Cooper, J., Kulp, M., Rouse, M., ... & Wensveen, J. (2005). "A randomized clinical trial of treatments for convergence insufficiency in children." <em>Archives of Ophthalmology</em>, 123(1), 14-24.</p>
          <p>[18] Scheiman, M., Mitchell, G. L., Cotter, S., Cooper, J., Kulp, M., Rouse, M., ... & Wensveen, J. (2005). "A randomized clinical trial of treatments for convergence insufficiency in children." <em>Archives of Ophthalmology</em>, 123(1), 14-24.</p>
          <p>[19] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[20] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[21] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[22] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[23] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[24] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[25] Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). <em>Beery-Buktenica Developmental Test of Visual-Motor Integration</em> (6th ed.). San Antonio: Pearson.</p>
          <p>[26] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[27] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[28] Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). <em>Developmental Test of Visual Perception</em> (3rd ed.). Austin: Pro-Ed.</p>
          <p>[29] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[30] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[31] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[32] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[33] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[34] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[35] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities: An analysis of the interaction hypothesis." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[36] Thurlow, M. L., Lazarus, S. S., Thompson, S. J., & Morse, A. B. (2005). <em>State policies on assessment participation and accommodations for students with disabilities</em>. <em>Journal of Special Education</em>, 38(4), 232-240.</p>
          <p>[37] Mayer, R. E. (2009). <em>Multimedia learning</em> (2nd ed.). New York: Cambridge University Press.</p>
          <p>[38] Paivio, A. (1990). "Mental representations: A dual coding approach." <em>Oxford University Press</em>.</p>
          <p>[39] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[40] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[41] MacArthur, C. A., Graham, S., & Fitzgerald, J. (Eds.). (2006). <em>Handbook of writing research</em>. New York: Guilford Press.</p>
          <p>[42] Anderson-Inman, L., & Horney, M. A. (2007). "Supported eText: Assistive technology through text transformations." <em>Reading Research Quarterly</em>, 42(1), 153-160.</p>
          <p>[43] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[44] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities: An analysis of the interaction hypothesis." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[45] Grisham, D., Sheppard, M. M., & Tran, W. U. (1993). "Visual symptoms and reading performance." <em>Optometry and Vision Science</em>, 70(5), 384-391.</p>
          <p>[46] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[47] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[48] Rello, L., & Baeza-Yates, R. (2013). "Good fonts for dyslexia." <em>Proceedings of the 15th International ACM SIGACCESS Conference on Computers and Accessibility</em> (p. 14). New York: ACM.</p>
          <p>[49] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[50] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[51] Esteves, K. J., & Whitten, E. (2011). "Assisted reading with digital audiobooks for students with reading disabilities." <em>Reading Horizons</em>, 51(1), 21-40.</p>
          <p>[52] Anderson-Inman, L., & Horney, M. A. (2007). "Supported eText: Assistive technology through text transformations." <em>Reading Research Quarterly</em>, 42(1), 153-160.</p>
          <p>[53] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[54] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[55] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[56] Cornhill, H., & Case-Smith, J. (1996). "Factors that relate to good and poor handwriting." <em>American Journal of Occupational Therapy</em>, 50(9), 732-739.</p>
          <p>[57] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[58] MacArthur, C. A., Graham, S., & Fitzgerald, J. (Eds.). (2006). <em>Handbook of writing research</em>. New York: Guilford Press.</p>
          <p>[59] Boyle, J. R., & Weishaar, M. (1997). "The effects of expert-generated versus student-generated cognitive organizers on the reading comprehension of students with learning disabilities." <em>Learning Disabilities Research & Practice</em>, 12(4), 228-235.</p>
          <p>[60] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[61] Kulp, M. T., Earley, M. J., Mitchell, G. L., Timmerman, L. M., Frasco, C. S., & Geier, J. E. (2004). "Are visual perceptual skills related to mathematics ability in second through sixth grade children?" <em>Focus on Learning Problems in Mathematics</em>, 26(4), 44-51.</p>
          <p>[62] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[63] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[64] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[65] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[66] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[67] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[68] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[69] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[70] American Optometric Association. (2017). "Comprehensive pediatric eye and vision examination." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[71] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[72] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[73] Rello, L., & Baeza-Yates, R. (2013). "Good fonts for dyslexia." <em>Proceedings of the 15th International ACM SIGACCESS Conference on Computers and Accessibility</em> (p. 14). New York: ACM.</p>
          <p>[74] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[75] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[76] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[77] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[78] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[79] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[80] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[81] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[82] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[83] MacArthur, C. A., Graham, S., & Fitzgerald, J. (Eds.). (2006). <em>Handbook of writing research</em>. New York: Guilford Press.</p>
          <p>[84] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[85] Anderson-Inman, L., & Horney, M. A. (2007). "Supported eText: Assistive technology through text transformations." <em>Reading Research Quarterly</em>, 42(1), 153-160.</p>
          <p>[86] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[87] Esteves, K. J., & Whitten, E. (2011). "Assisted reading with digital audiobooks for students with reading disabilities." <em>Reading Horizons</em>, 51(1), 21-40.</p>
          <p>[88] MacArthur, C. A., Graham, S., & Fitzgerald, J. (Eds.). (2006). <em>Handbook of writing research</em>. New York: Guilford Press.</p>
          <p>[89] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[90] MacArthur, C. A., Graham, S., & Fitzgerald, J. (Eds.). (2006). <em>Handbook of writing research</em>. New York: Guilford Press.</p>
          <p>[91] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[92] Anderson-Inman, L., & Horney, M. A. (2007). "Supported eText: Assistive technology through text transformations." <em>Reading Research Quarterly</em>, 42(1), 153-160.</p>
          <p>[93] Esteves, K. J., & Whitten, E. (2011). "Assisted reading with digital audiobooks for students with reading disabilities." <em>Reading Horizons</em>, 51(1), 21-40.</p>
          <p>[94] Rose, D. H., & Meyer, A. (2002). <em>Teaching every student in the digital age: Universal design for learning</em>. Alexandria: ASCD.</p>
          <p>[95] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[96] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[97] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[98] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[99] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[100] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[101] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[102] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[103] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[104] Esteves, K. J., & Whitten, E. (2011). "Assisted reading with digital audiobooks for students with reading disabilities." <em>Reading Horizons</em>, 51(1), 21-40.</p>
          <p>[105] Kolb, D. A. (2014). <em>Experiential learning: Experience as the source of learning and development</em> (2nd ed.). Upper Saddle River, NJ: Pearson Education.</p>
          <p>[106] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[107] Levine, M. (2003). <em>The myth of laziness</em>. New York: Simon & Schuster.</p>
          <p>[108] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[109] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[110] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[111] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[112] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[113] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[114] Todd, V. R. (1999). "Visual perceptual frame of reference: An information processing approach." In P. Kramer & J. Hinojosa (Eds.), <em>Frames of reference for pediatric occupational therapy</em> (2nd ed., pp. 205-256). Baltimore: Lippincott Williams & Wilkins.</p>
          <p>[115] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[116] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
          <p>[117] American Optometric Association. (2017). "Care of the patient with learning related vision problems." <em>Optometric Clinical Practice Guideline</em>. St. Louis: AOA.</p>
          <p>[118] Schneck, C. M. (2010). "Visual perception." In J. Case-Smith & J. C. O'Brien (Eds.), <em>Occupational therapy for children</em> (6th ed., pp. 373-403). Maryland Heights: Mosby Elsevier.</p>
          <p>[119] Scheiman, M., & Rouse, M. W. (2006). <em>Optometric management of learning-related vision problems</em> (2nd ed.). St. Louis: Mosby Elsevier.</p>
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
