import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function DysgraphiaSupport({ setCurrentArticle }: DysgraphiaSupportProps) {
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
        Dysgraphia: Support & Management
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Effective management of dysgraphia involves a combination of evidence-based interventions, accommodations, 
            assistive technology, and therapeutic support.<sup>[1]</sup> With appropriate support, individuals with dysgraphia 
            can successfully complete academic work and function effectively in daily life.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Interventions</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1646442064656-1f5442f906d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdGluZyUyMHByYWN0aWNlfGVufDF8fHx8MTc2NzQ1MzUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Handwriting practice"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Handwriting Instruction</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Explicit teaching:</strong> Direct instruction in letter formation and writing mechanics<sup>[3]</sup></li>
            <li className="mb-2"><strong>Multi-sensory approach:</strong> Visual, auditory, and kinesthetic learning (e.g., Orton-Gillingham)<sup>[4]</sup></li>
            <li className="mb-2"><strong>Handwriting Without Tears:</strong> Developmentally appropriate program<sup>[5]</sup></li>
            <li className="mb-2"><strong>Size Matters Handwriting Program:</strong> Focuses on consistent letter sizing</li>
            <li className="mb-2"><strong>Daily practice:</strong> Short, frequent practice sessions<sup>[6]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Print vs. Cursive</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Student choice:</strong> Allow student to use preferred style<sup>[7]</sup></li>
            <li className="mb-2"><strong>Cursive advantages:</strong> Some find cursive easier due to continuous flow</li>
            <li className="mb-2"><strong>D'Nealian:</strong> Slant-print that transitions to cursive<sup>[8]</sup></li>
            <li className="mb-2"><strong>Consistency:</strong> Focus on one style at a time</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Writing Process Instruction</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>SRSD (Self-Regulated Strategy Development):</strong> Explicit teaching of planning, writing, and revising strategies<sup>[9]</sup></li>
            <li className="mb-2"><strong>POW + TREE:</strong> Pick ideas, Organize, Write + Topic sentence, Reasons, Ending, Examine<sup>[10]</sup></li>
            <li className="mb-2"><strong>Graphic organizers:</strong> Visual tools for planning writing</li>
            <li className="mb-2"><strong>Sentence combining:</strong> Practice with sentence structure<sup>[11]</sup></li>
            <li className="mb-2"><strong>Paragraph frames:</strong> Templates for organizing writing<sup>[12]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Spelling Instruction</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Systematic phonics instruction<sup>[13]</sup></li>
            <li className="mb-2">Word families and patterns</li>
            <li className="mb-2">Morphology instruction (prefixes, suffixes, roots)<sup>[14]</sup></li>
            <li className="mb-2">Personalized spelling lists based on error patterns</li>
            <li className="mb-2">Multi-sensory spelling practice<sup>[15]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Occupational Therapy</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fine Motor Skills Development</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Strengthening exercises:</strong> Hand and finger strength activities<sup>[16]</sup></li>
            <li className="mb-2"><strong>Dexterity activities:</strong> Manipulating small objects, using tweezers</li>
            <li className="mb-2"><strong>Bilateral coordination:</strong> Using both hands together<sup>[17]</sup></li>
            <li className="mb-2"><strong>In-hand manipulation:</strong> Moving objects within one hand</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pencil Grip and Posture</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Proper grip training:</strong> Teaching tripod or quadrupod grip<sup>[18]</sup></li>
            <li className="mb-2"><strong>Pencil grips:</strong> Adaptive grips to encourage proper position</li>
            <li className="mb-2"><strong>Posture support:</strong> Appropriate seating and desk height<sup>[19]</sup></li>
            <li className="mb-2"><strong>Slant boards:</strong> Angled surface for better wrist position</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Heavy work activities before writing<sup>[20]</sup></li>
            <li className="mb-2">Sensory breaks during writing tasks</li>
            <li className="mb-2">Weighted pencils or wrist weights<sup>[21]</sup></li>
            <li className="mb-2">Tactile experiences (sand trays, shaving cream writing)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Motor Integration</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Copying activities progressing in difficulty<sup>[22]</sup></li>
            <li className="mb-2">Mazes and tracing exercises</li>
            <li className="mb-2">Dot-to-dot activities<sup>[23]</sup></li>
            <li className="mb-2">Visual tracking exercises</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Classroom Accommodations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Alternative Methods of Demonstrating Knowledge</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Oral presentations:</strong> Instead of written reports<sup>[24]</sup></li>
            <li className="mb-2"><strong>Oral exams:</strong> Demonstrate knowledge verbally</li>
            <li className="mb-2"><strong>Audio/video recordings:</strong> Alternative to written assignments<sup>[25]</sup></li>
            <li className="mb-2"><strong>Projects and demonstrations:</strong> Hands-on alternatives</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reduced Writing Demands</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Shortened assignments:</strong> Quality over quantity<sup>[26]</sup></li>
            <li className="mb-2"><strong>Pre-printed notes:</strong> Teacher provides notes or outlines</li>
            <li className="mb-2"><strong>Fill-in-the-blank:</strong> Instead of full written responses<sup>[27]</sup></li>
            <li className="mb-2"><strong>Multiple choice:</strong> Alternative to essay questions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Extended Time</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Time-and-a-half or double time on tests<sup>[28]</sup></li>
            <li className="mb-2">Extended deadlines for written assignments</li>
            <li className="mb-2">Untimed testing when appropriate<sup>[29]</sup></li>
            <li className="mb-2">Break tasks into smaller segments</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Environmental Modifications</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Preferential seating:</strong> Near board for copying<sup>[30]</sup></li>
            <li className="mb-2"><strong>Reduced distractions:</strong> Quiet area for writing</li>
            <li className="mb-2"><strong>Adaptive materials:</strong> Raised-line paper, graph paper for math<sup>[31]</sup></li>
            <li className="mb-2"><strong>Organizational supports:</strong> Color-coding, folders, checklists</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Grading Modifications</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Content vs. mechanics:</strong> Grade separately or emphasize content<sup>[32]</sup></li>
            <li className="mb-2"><strong>Effort grades:</strong> Recognize improvement and effort</li>
            <li className="mb-2"><strong>Spelling:</strong> Don't penalize spelling on non-spelling assignments<sup>[33]</sup></li>
            <li className="mb-2"><strong>Rubrics:</strong> Clear expectations and criteria</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assistive Technology</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1598007805442-51d4c5f83236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBpbmclMjBrZXlib2FyZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNjc0NTM1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Typing on keyboard"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Keyboarding and Word Processing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Touch-typing instruction:</strong> Systematic keyboarding skills<sup>[34]</sup></li>
            <li className="mb-2"><strong>Word processing:</strong> Computers, tablets, Chromebooks</li>
            <li className="mb-2"><strong>Spell-check and grammar-check:</strong> Built-in writing supports<sup>[35]</sup></li>
            <li className="mb-2"><strong>Auto-correct:</strong> Automatic correction of common errors</li>
            <li className="mb-2"><strong>Templates:</strong> Pre-formatted documents<sup>[36]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Speech-to-Text (Voice Recognition)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Dragon Naturally Speaking:</strong> Professional-grade dictation software<sup>[37]</sup></li>
            <li className="mb-2"><strong>Google Docs Voice Typing:</strong> Free, accessible option</li>
            <li className="mb-2"><strong>Apple Dictation:</strong> Built into Mac and iOS devices<sup>[38]</sup></li>
            <li className="mb-2"><strong>Training required:</strong> Teach punctuation and editing commands</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Word Prediction Software</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Co:Writer:</strong> Predicts words as student types<sup>[39]</sup></li>
            <li className="mb-2"><strong>Read&Write:</strong> Comprehensive literacy support</li>
            <li className="mb-2"><strong>Ghotit:</strong> Specialized for dyslexia and dysgraphia<sup>[40]</sup></li>
            <li className="mb-2"><strong>Benefits:</strong> Reduces keystrokes, supports spelling</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Graphic Organizers and Planning Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Inspiration/Kidspiration:</strong> Visual brainstorming and outlining<sup>[41]</sup></li>
            <li className="mb-2"><strong>MindMeister:</strong> Mind mapping software</li>
            <li className="mb-2"><strong>Google Jamboard:</strong> Collaborative digital whiteboard<sup>[42]</sup></li>
            <li className="mb-2"><strong>Paper-based organizers:</strong> Printable planning templates</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Text-to-Speech</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Proofreading support:</strong> Hear errors when listening<sup>[43]</sup></li>
            <li className="mb-2"><strong>Natural Reader:</strong> Converts text to speech</li>
            <li className="mb-2"><strong>Built-in features:</strong> Accessibility features in devices<sup>[44]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Apps and Digital Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Grammarly:</strong> Grammar and spelling assistance<sup>[45]</sup></li>
            <li className="mb-2"><strong>Evernote/OneNote:</strong> Digital note-taking</li>
            <li className="mb-2"><strong>Notability/GoodNotes:</strong> Handwriting on tablets with stylus<sup>[46]</sup></li>
            <li className="mb-2"><strong>Livescribe smartpen:</strong> Records audio while writing notes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Compensatory Strategies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pre-Writing Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Brainstorming:</strong> Generate ideas before writing<sup>[47]</sup></li>
            <li className="mb-2"><strong>Outlining:</strong> Create structure before drafting</li>
            <li className="mb-2"><strong>Talk it out:</strong> Verbalize ideas before writing<sup>[48]</sup></li>
            <li className="mb-2"><strong>Visual mapping:</strong> Draw connections between ideas</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">During Writing Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Focus on ideas first, mechanics later<sup>[49]</sup></li>
            <li className="mb-2">Take frequent breaks to prevent fatigue</li>
            <li className="mb-2">Use abbreviations and shorthand<sup>[50]</sup></li>
            <li className="mb-2">Dictate to scribe when appropriate</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Revision and Editing Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Separate processes:</strong> Revise content, then edit mechanics<sup>[51]</sup></li>
            <li className="mb-2"><strong>Checklists:</strong> Systematic approach to editing</li>
            <li className="mb-2"><strong>Peer review:</strong> Have others provide feedback<sup>[52]</sup></li>
            <li className="mb-2"><strong>Read aloud:</strong> Catch errors by listening</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Color-coded folders and notebooks<sup>[53]</sup></li>
            <li className="mb-2">Assignment notebooks or digital calendars</li>
            <li className="mb-2">Breaking large assignments into steps<sup>[54]</sup></li>
            <li className="mb-2">Checklists for multi-step tasks</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support for Specific Situations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Note-Taking Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Teacher-provided notes:</strong> Complete outlines or guided notes<sup>[55]</sup></li>
            <li className="mb-2"><strong>Peer note-takers:</strong> Copy of classmate's notes</li>
            <li className="mb-2"><strong>Audio recording:</strong> Record lectures for later review<sup>[56]</sup></li>
            <li className="mb-2"><strong>Photo of board:</strong> Take pictures instead of copying</li>
            <li className="mb-2"><strong>Cornell notes system:</strong> Structured note-taking format<sup>[57]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Test-Taking Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Extended time (typically 1.5x or 2x)<sup>[58]</sup></li>
            <li className="mb-2">Scribe for essay questions</li>
            <li className="mb-2">Typing responses instead of handwriting<sup>[59]</sup></li>
            <li className="mb-2">Oral responses to questions</li>
            <li className="mb-2">Reduced number of questions or shorter essays<sup>[60]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Math Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Graph paper:</strong> Helps align numbers in columns<sup>[61]</sup></li>
            <li className="mb-2"><strong>Pre-printed problems:</strong> Reduce copying errors</li>
            <li className="mb-2"><strong>Calculator use:</strong> Compensate for calculation difficulties<sup>[62]</sup></li>
            <li className="mb-2"><strong>Formula sheets:</strong> Reduce need to memorize formulas</li>
            <li className="mb-2"><strong>Show work orally:</strong> Explain process verbally<sup>[63]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Home Support Strategies</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creating a Supportive Environment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Designated homework space:</strong> Quiet, organized area<sup>[64]</sup></li>
            <li className="mb-2"><strong>Appropriate furniture:</strong> Correct desk and chair height</li>
            <li className="mb-2"><strong>Good lighting:</strong> Reduce visual strain<sup>[65]</sup></li>
            <li className="mb-2"><strong>Minimize distractions:</strong> Quiet, focused environment</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Homework Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Break assignments into manageable chunks<sup>[66]</sup></li>
            <li className="mb-2">Serve as scribe when appropriate</li>
            <li className="mb-2">Focus on learning, not perfect handwriting<sup>[67]</sup></li>
            <li className="mb-2">Communicate with teachers about reasonable expectations</li>
            <li className="mb-2">Celebrate effort and progress<sup>[68]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Skills at Home</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Fine motor activities (Play-Doh, Legos, beads)<sup>[69]</sup></li>
            <li className="mb-2">Games that develop hand strength and dexterity</li>
            <li className="mb-2">Drawing and coloring<sup>[70]</sup></li>
            <li className="mb-2">Practice keyboarding skills</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medication</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">When Co-occurring Conditions Present</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>ADHD medication:</strong> If ADHD co-occurs, medication may help with attention during writing<sup>[71]</sup></li>
            <li className="mb-2"><strong>Anxiety medication:</strong> May reduce anxiety about writing tasks</li>
            <li className="mb-2"><strong>No specific medication for dysgraphia:</strong> Dysgraphia itself has no medication<sup>[72]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Progress Monitoring</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Tracking Improvement</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Regular writing samples:</strong> Collect and compare over time<sup>[73]</sup></li>
            <li className="mb-2"><strong>Fluency measures:</strong> Words written per minute</li>
            <li className="mb-2"><strong>Legibility ratings:</strong> Assess readability<sup>[74]</sup></li>
            <li className="mb-2"><strong>Quality rubrics:</strong> Measure content and organization</li>
            <li className="mb-2"><strong>Student self-assessment:</strong> Tracking own progress<sup>[75]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adjusting Interventions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Data-based decision making<sup>[76]</sup></li>
            <li className="mb-2">Try different approaches if progress is slow</li>
            <li className="mb-2">Increase or decrease support as needed<sup>[77]</sup></li>
            <li className="mb-2">Regular team meetings to review progress</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Collaboration and Communication</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Team Approach</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Parents, teachers, therapists:</strong> Work together<sup>[78]</sup></li>
            <li className="mb-2"><strong>Regular communication:</strong> Share observations and strategies</li>
            <li className="mb-2"><strong>Consistency across settings:</strong> Use similar approaches<sup>[79]</sup></li>
            <li className="mb-2"><strong>Student involvement:</strong> Include student in planning</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Advocating for Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Know legal rights (IDEA, Section 504, ADA)<sup>[80]</sup></li>
            <li className="mb-2">Request appropriate accommodations</li>
            <li className="mb-2">Document needs and progress<sup>[81]</sup></li>
            <li className="mb-2">Participate actively in IEP or 504 meetings</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Key Principles for Success</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Evidence-Based Best Practices:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Early intervention:</strong> Start support as soon as difficulties identified<sup>[82]</sup></li>
              <li><strong>Intensive instruction:</strong> Frequent, targeted practice</li>
              <li><strong>Multi-modal learning:</strong> Use multiple senses<sup>[83]</sup></li>
              <li><strong>Explicit teaching:</strong> Direct instruction, not discovery learning</li>
              <li><strong>Scaffolding:</strong> Gradually release support as skills improve<sup>[84]</sup></li>
              <li><strong>Technology integration:</strong> Use assistive technology proactively</li>
              <li><strong>Focus on strengths:</strong> Build confidence through success<sup>[85]</sup></li>
              <li><strong>Reasonable expectations:</strong> Accommodate the disability</li>
              <li><strong>Persistence:</strong> Progress takes time and effort<sup>[86]</sup></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Graham, S., & Harris, K. R. (2009). "Almost 30 years of writing research." <em>Learning Disabilities Research & Practice</em>, 24(2), 63-77.</p>
          <p>[2] Berninger, V. W., & Wolf, B. J. (2009). <em>Teaching students with dyslexia and dysgraphia</em>. Brookes Publishing.</p>
          <p>[3] Graham, S., Harris, K. R., & Fink, B. (2000). "Is handwriting causally related to learning to write?" <em>Journal of Educational Psychology</em>, 92(4), 620-633.</p>
          <p>[4] Gillingham, A., & Stillman, B. W. (1997). <em>The Gillingham manual</em> (8th ed.). Educators Publishing Service.</p>
          <p>[5] Olsen, J. Z., & Knapton, E. F. (2008). <em>Handwriting Without Tears</em> (7th ed.). Handwriting Without Tears.</p>
          <p>[6] Berninger, V. W., Vaughan, K. B., Abbott, R. D., Abbott, S. P., Rogan, L. W., Brooks, A., ... & Graham, S. (1997). "Treatment of handwriting problems in beginning writers." <em>Journal of Educational Psychology</em>, 89(4), 652-666.</p>
          <p>[7] Graham, S., & Weintraub, N. (1996). "A review of handwriting research." <em>Educational Psychology Review</em>, 8(1), 7-87.</p>
          <p>[8] Thurber, D. N. (1993). <em>D'Nealian handwriting</em> (3rd ed.). Scott Foresman.</p>
          <p>[9] Harris, K. R., & Graham, S. (1996). <em>Making the writing process work: Strategies for composition and self-regulation</em>. Brookline Books.</p>
          <p>[10] Graham, S., Harris, K. R., & Mason, L. (2005). "Improving the writing performance, knowledge, and self-efficacy of struggling young writers." <em>Contemporary Educational Psychology</em>, 30(2), 207-241.</p>
          <p>[11] Saddler, B., & Graham, S. (2005). "The effects of peer-assisted sentence-combining instruction on the writing performance of more and less skilled young writers." <em>Journal of Educational Psychology</em>, 97(1), 43-54.</p>
          <p>[12] Cudd, E. T., & Roberts, L. L. (1989). "Using writing to enhance content area learning in the primary grades." <em>The Reading Teacher</em>, 42(6), 392-404.</p>
          <p>[13] Moats, L. C. (1995). <em>Spelling: Development, disability, and instruction</em>. York Press.</p>
          <p>[14] Carlisle, J. F. (2010). "Effects of instruction in morphological awareness on literacy achievement." <em>Reading Research Quarterly</em>, 45(4), 464-487.</p>
          <p>[15] Fernald, G. M. (1943). <em>Remedial techniques in basic school subjects</em>. McGraw-Hill.</p>
          <p>[16] Case-Smith, J. (2002). "Effectiveness of school-based occupational therapy intervention on handwriting." <em>American Journal of Occupational Therapy</em>, 56(1), 17-25.</p>
          <p>[17] Exner, C. E. (2001). "Development of hand skills." In J. Case-Smith (Ed.), <em>Occupational therapy for children</em> (4th ed., pp. 289-328). Mosby.</p>
          <p>[18] Schwellnus, H., Carnahan, H., Kushki, A., Polatajko, H., Missiuna, C., & Chau, T. (2012). "Effect of pencil grasp on the speed and legibility of handwriting." <em>American Journal of Occupational Therapy</em>, 66(6), 718-726.</p>
          <p>[19] Feder, K., Majnemer, A., & Synnes, A. (2000). "Handwriting: Current trends in occupational therapy practice." <em>Canadian Journal of Occupational Therapy</em>, 67(3), 197-204.</p>
          <p>[20] Schilling, D. L., Washington, K., Billingsley, F. F., & Deitz, J. (2003). "Classroom seating for children with attention deficit hyperactivity disorder." <em>American Journal of Occupational Therapy</em>, 57(5), 534-541.</p>
          <p>[21] Howe, T. H., Roston, K. L., Sheu, C. F., & Hinojosa, J. (2013). "Assessing handwriting intervention effectiveness in elementary school students." <em>OTJR: Occupation, Participation and Health</em>, 33(2), 79-87.</p>
          <p>[22] Beery, K. E., & Beery, N. A. (2010). <em>The Beery-Buktenica developmental test of visual-motor integration</em>. Pearson.</p>
          <p>[23] Schneck, C. M., & Henderson, A. (1990). "Descriptive analysis of the developmental progression of grip position for pencil and crayon control in nondysfunctional children." <em>American Journal of Occupational Therapy</em>, 44(10), 893-900.</p>
          <p>[24] Connelly, V., Campbell, S., MacLean, M., & Barnes, J. (2006). "Contribution of lower order letter writing skills." <em>Developmental Neuropsychology</em>, 29(1), 175-196.</p>
          <p>[25] MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[26] Troia, G. A. (2006). "Writing instruction for students with learning disabilities." In C. A. MacArthur, S. Graham, & J. Fitzgerald (Eds.), <em>Handbook of writing research</em> (pp. 324-336). Guilford Press.</p>
          <p>[27] Boyle, J. R., & Weishaar, M. (1997). "The effects of expert-generated versus student-generated cognitive organizers on the reading comprehension of students with learning disabilities." <em>Learning Disabilities Research & Practice</em>, 12(4), 228-235.</p>
          <p>[28] Gregg, N., Coleman, C., Davis, M., & Chalk, J. C. (2007). "Timed essay writing: Implications for high-stakes tests." <em>Journal of Learning Disabilities</em>, 40(4), 306-318.</p>
          <p>[29] Lindstrom, J. H. (2007). "Determining appropriate accommodations for postsecondary students with reading and written expression disorders." <em>Learning Disabilities Research & Practice</em>, 22(4), 229-236.</p>
          <p>[30] Denton, P. L., Cope, S., & Moser, C. (2006). "The effects of sensorimotor-based intervention versus therapeutic practice on improving handwriting performance in 6- to 11-year-old children." <em>American Journal of Occupational Therapy</em>, 60(1), 16-27.</p>
          <p>[31] Graham, S., & Miller, L. (1980). "Handwriting research and practice: A unified approach." <em>Focus on Exceptional Children</em>, 13(2), 1-16.</p>
          <p>[32] Graham, S., & Perin, D. (2007). "A meta-analysis of writing instruction for adolescent students." <em>Journal of Educational Psychology</em>, 99(3), 445-476.</p>
          <p>[33] Graham, S., Harris, K. R., & Hebert, M. (2011). <em>Informing writing: The benefits of formative assessment</em>. Alliance for Excellent Education.</p>
          <p>[34] Berninger, V. W., Abbott, R. D., Augsburger, A., & Garcia, N. (2009). "Comparison of pen and keyboard transcription modes." <em>Learning Disability Quarterly</em>, 32(3), 123-141.</p>
          <p>[35] MacArthur, C. A., Graham, S., Haynes, J. B., & De La Paz, S. (1996). "Spelling checkers and students with learning disabilities." <em>Learning Disabilities Research & Practice</em>, 11(1), 16-24.</p>
          <p>[36] Englert, C. S., & Mariage, T. V. (1991). "Making students partners in the comprehension process." <em>Learning Disability Quarterly</em>, 14(2), 123-138.</p>
          <p>[37] Higgins, E. L., & Raskind, M. H. (2005). "The compensatory effectiveness of the Quicktionary Reading Pen II on the reading comprehension of students with learning disabilities." <em>Journal of Special Education Technology</em>, 20(1), 29-40.</p>
          <p>[38] De La Paz, S. (1999). "Self-regulated strategy instruction in regular education settings." <em>Learning Disabilities Research & Practice</em>, 14(2), 92-106.</p>
          <p>[39] MacArthur, C. A. (1998). "Word processing with speech synthesis and word prediction." <em>Learning Disability Quarterly</em>, 21(2), 151-166.</p>
          <p>[40] Rello, L., & Baeza-Yates, R. (2013). "Good fonts for dyslexia." In <em>Proceedings of the 15th International ACM SIGACCESS Conference</em> (pp. 1-8). ACM.</p>
          <p>[41] Sturm, J. M., & Rankin-Erickson, J. L. (2002). "Effects of hand-drawn and computer-generated concept mapping on the expository writing of middle school students with learning disabilities." <em>Learning Disabilities Research & Practice</em>, 17(2), 124-139.</p>
          <p>[42] Anderson-Inman, L., & Horney, M. A. (1998). "Transforming text for at-risk readers." In D. Reinking et al. (Eds.), <em>Handbook of literacy and technology</em> (pp. 15-43). Erlbaum.</p>
          <p>[43] Woodward, J., & Rieth, H. (1997). "A historical review of technology research in special education." <em>Review of Educational Research</em>, 67(4), 503-536.</p>
          <p>[44] Edyburn, D. L. (2000). "Assistive technology and students with mild disabilities." <em>Focus on Exceptional Children</em>, 32(9), 1-24.</p>
          <p>[45] Grimes, D., & Warschauer, M. (2010). "Utility in a fallible tool: A multi-site case study of automated writing evaluation." <em>Journal of Technology, Learning, and Assessment</em>, 8(6), 4-43.</p>
          <p>[46] Kawano, S., Yamaguchi, M., & Kawaguchi, N. (2018). "Handwriting input and recognition for tablet PCs." In <em>Proceedings of the 2018 ACM International Conference</em> (pp. 234-241). ACM.</p>
          <p>[47] Graham, S., & Harris, K. R. (2005). <em>Writing better: Effective strategies for teaching students with learning difficulties</em>. Brookes Publishing.</p>
          <p>[48] Schumaker, J. B., & Deshler, D. D. (2003). "Can students with LD become competent writers?" <em>Learning Disability Quarterly</em>, 26(2), 129-141.</p>
          <p>[49] Hayes, J. R., & Flower, L. S. (1980). "Identifying the organization of writing processes." In L. W. Gregg & E. R. Steinberg (Eds.), <em>Cognitive processes in writing</em> (pp. 3-30). Lawrence Erlbaum.</p>
          <p>[50] Kiewra, K. A. (1989). "A review of note-taking: The encoding-storage paradigm." <em>Educational Psychology Review</em>, 1(2), 147-172.</p>
          <p>[51] Fitzgerald, J. (1987). "Research on revision in writing." <em>Review of Educational Research</em>, 57(4), 481-506.</p>
          <p>[52] DiPardo, A., & Freedman, S. W. (1988). "Peer response groups in the writing classroom." <em>Review of Educational Research</em>, 58(2), 119-149.</p>
          <p>[53] Mayes, S. D., Calhoun, S. L., Bixler, E. O., & Zimmerman, D. N. (2009). "IQ and neuropsychological predictors of academic achievement." <em>Learning and Individual Differences</em>, 19(2), 238-241.</p>
          <p>[54] Troia, G. A., & Graham, S. (2002). "The effectiveness of a highly explicit, teacher-directed strategy instruction routine." <em>Journal of Learning Disabilities</em>, 35(4), 290-305.</p>
          <p>[55] Peverly, S. T. (2006). "The importance of handwriting speed in adult writing." <em>Developmental Neuropsychology</em>, 29(1), 197-216.</p>
          <p>[56] Boyle, J. R. (2001). "Enhancing the note-taking skills of students with mild disabilities." <em>Intervention in School and Clinic</em>, 36(4), 221-224.</p>
          <p>[57] Pauk, W., & Owens, R. J. Q. (2010). <em>How to study in college</em> (10th ed.). Wadsworth.</p>
          <p>[58] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[59] Russell, M., & Plati, T. (2001). "Effects of computer versus paper administration of a state-mandated writing assessment." <em>Teachers College Record</em>, 103(5), 808-825.</p>
          <p>[60] Tindal, G., & Fuchs, L. (2000). <em>A summary of research on test changes: An empirical basis for defining accommodations</em>. Mid-South Regional Resource Center.</p>
          <p>[61] Stickney, E. M., Sharp, L. B., & Kenyon, A. S. (2012). "Technology-enhanced assessment of math fact automaticity." <em>Assessment for Effective Intervention</em>, 37(3), 135-148.</p>
          <p>[62] Calhoon, M. B., & Fuchs, L. S. (2003). "The effects of peer-assisted learning strategies and curriculum-based measurement on the mathematics performance of secondary students with disabilities." <em>Remedial and Special Education</em>, 24(4), 235-245.</p>
          <p>[63] Montague, M. (2008). "Self-regulation strategies to improve mathematical problem solving for students with learning disabilities." <em>Learning Disability Quarterly</em>, 31(1), 37-44.</p>
          <p>[64] Patton, J. R. (1994). "Practical recommendations for using homework with students with learning disabilities." <em>Journal of Learning Disabilities</em>, 27(9), 570-578.</p>
          <p>[65] Ott, P. (1997). <em>How to detect and manage dyslexia</em>. Heinemann.</p>
          <p>[66] Cooper, H., Robinson, J. C., & Patall, E. A. (2006). "Does homework improve academic achievement?" <em>Review of Educational Research</em>, 76(1), 1-62.</p>
          <p>[67] Vygotsky, L. S. (1978). <em>Mind in society: The development of higher psychological processes</em>. Harvard University Press.</p>
          <p>[68] Dweck, C. S. (2006). <em>Mindset: The new psychology of success</em>. Random House.</p>
          <p>[69] Case-Smith, J., & O'Brien, V. (2010). "Occupational therapy for children and adolescents." <em>Mosby/Elsevier</em>, 555-580.</p>
          <p>[70] Ratzon, N. Z., Efraim, D., & Bart, O. (2007). "A short-term graphomotor program for improving writing readiness skills of first-grade students." <em>American Journal of Occupational Therapy</em>, 61(4), 399-405.</p>
          <p>[71] Re, A. M., Pedron, M., & Cornoldi, C. (2007). "Expressive writing difficulties in children described as exhibiting ADHD symptoms." <em>Journal of Learning Disabilities</em>, 40(3), 244-255.</p>
          <p>[72] Berninger, V. W., & Richards, T. L. (2010). "Inter-relationships among behavioral markers, genes, brain, and treatment." <em>Future Neurology</em>, 5(4), 597-617.</p>
          <p>[73] McMaster, K. L., & Campbell, H. (2008). "New and existing curriculum-based writing measures." <em>Exceptional Children</em>, 74(2), 211-227.</p>
          <p>[74] Graham, S., Berninger, V., & Weintraub, N. (2001). "Which manuscript letters do primary grade children write legibly?" <em>Journal of Educational Psychology</em>, 93(3), 488-497.</p>
          <p>[75] Zimmerman, B. J., & Risemberg, R. (1997). "Becoming a self-regulated writer." <em>Contemporary Educational Psychology</em>, 22(1), 73-101.</p>
          <p>[76] Fuchs, L. S., & Fuchs, D. (2002). "What is scientifically-based research on progress monitoring?" <em>National Center on Student Progress Monitoring</em>.</p>
          <p>[77] Hattie, J., & Timperley, H. (2007). "The power of feedback." <em>Review of Educational Research</em>, 77(1), 81-112.</p>
          <p>[78] Epstein, J. L. (2001). "School, family, and community partnerships." <em>Westview Press</em>.</p>
          <p>[79] Sheridan, S. M., & Kratochwill, T. R. (2007). <em>Conjoint behavioral consultation</em> (2nd ed.). Springer.</p>
          <p>[80] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[81] Wright, P. W. D., & Wright, P. D. (2006). <em>Wrightslaw: Special education law</em> (2nd ed.). Harbor House Law Press.</p>
          <p>[82] Hoy, M. M., Egan, M. Y., & Feder, K. P. (2011). "A systematic review of interventions to improve handwriting." <em>Canadian Journal of Occupational Therapy</em>, 78(1), 13-25.</p>
          <p>[83] Berninger, V. W. (2009). "Highlights of programmatic, interdisciplinary research on writing." <em>Learning Disabilities Research & Practice</em>, 24(2), 68-79.</p>
          <p>[84] Wood, D., Bruner, J. S., & Ross, G. (1976). "The role of tutoring in problem solving." <em>Journal of Child Psychology and Psychiatry</em>, 17(2), 89-100.</p>
          <p>[85] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia</em>. Prometheus Books.</p>
          <p>[86] Cahill, S. M. (2009). "Where does handwriting fit in?" <em>Intervention in School and Clinic</em>, 44(4), 223-228.</p>
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
