import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';
import technologyImage from 'figma:asset/3b8cbe93ad3ea9f7b9fd78d6ca36be67f97a9e99.png';

interface DyslexiaSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaSupport({ setCurrentArticle }: DyslexiaSupportProps) {
  const [activeTab, setActiveTab] = useState('educational');

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>

      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          Dyslexia: Support & Resources
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Dyslexia
      </button>

      {/* Introduction */}
      <div className="mb-8">
        <p className="mb-4">
          Effective support for dyslexia requires evidence-based interventions delivered by trained professionals.<sup>[1]</sup> 
          Research consistently shows that systematic, explicit instruction in phonics and reading skills can significantly 
          improve outcomes for individuals with dyslexia.<sup>[2]</sup> Early intervention is most effective, but support at 
          any age can lead to meaningful improvements.<sup>[3]</sup>
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => setActiveTab('educational')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'educational'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Educational Support
        </button>
        <button
          onClick={() => setActiveTab('technology')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'technology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Technology & Tools
        </button>
        <button
          onClick={() => setActiveTab('community')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'community'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Community Resources
        </button>
      </div>

      {/* TAB 1: Educational Support */}
      {activeTab === 'educational' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evidence-Based Reading Interventions</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1753546466496-d2d8a819f61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwdHV0b3JpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY3NDUxNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Reading tutoring classroom"
              className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
            />
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Structured Literacy Approach</h3>
            <p className="mb-4">
              Structured literacy is an explicit, systematic approach to teaching reading that includes:<sup>[4]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Phonology:</strong> Sound structure of language, including phonemic awareness<sup>[5]</sup></li>
              <li className="mb-2"><strong>Sound-symbol association:</strong> Relationship between letters and sounds (phonics)</li>
              <li className="mb-2"><strong>Syllable instruction:</strong> Six syllable types in English<sup>[6]</sup></li>
              <li className="mb-2"><strong>Morphology:</strong> Meaningful word parts (prefixes, suffixes, roots)<sup>[7]</sup></li>
              <li className="mb-2"><strong>Syntax:</strong> Sentence structure and grammar</li>
              <li className="mb-2"><strong>Semantics:</strong> Meaning in language<sup>[8]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Orton-Gillingham-Based Programs</h3>
            <p className="mb-4">
              The Orton-Gillingham approach is a well-established method for teaching reading to individuals with dyslexia:<sup>[9]</sup>
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Multisensory:</strong> Engages visual, auditory, and kinesthetic-tactile pathways<sup>[10]</sup></li>
              <li className="mb-2"><strong>Systematic and sequential:</strong> Concepts taught in logical order</li>
              <li className="mb-2"><strong>Diagnostic and prescriptive:</strong> Instruction individualized to student needs<sup>[11]</sup></li>
              <li className="mb-2"><strong>Examples:</strong> Wilson Reading System, Barton Reading & Spelling System</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Other Evidence-Based Programs</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Lindamood-Bell programs:</strong> LiPS (phonemic awareness) and Seeing Stars (symbol imagery)<sup>[12]</sup></li>
              <li className="mb-2"><strong>Reading Recovery:</strong> Early intervention for first graders<sup>[13]</sup></li>
              <li className="mb-2"><strong>RAVE-O:</strong> Retrieval, Automaticity, Vocabulary, Engagement, Orthography<sup>[14]</sup></li>
              <li className="mb-2"><strong>Leveled Literacy Intervention (LLI):</strong> Supplemental reading intervention<sup>[15]</sup></li>
              <li className="mb-2"><strong>Corrective Reading:</strong> Direct instruction program<sup>[16]</sup></li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Tutoring and Specialized Instruction</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding a Qualified Tutor</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Credentials:</strong> Look for certification in Orton-Gillingham, Wilson, or similar structured literacy approach<sup>[40]</sup></li>
              <li className="mb-2"><strong>CALT (Certified Academic Language Therapist):</strong> Gold standard credential from International Dyslexia Association</li>
              <li className="mb-2"><strong>Experience:</strong> Specific training and experience working with dyslexic students<sup>[41]</sup></li>
              <li className="mb-2"><strong>Resources:</strong> Academy of Orton-Gillingham Practitioners and Educators (AOGPE), IDA referral lists</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Frequency and Duration</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Intensity:</strong> 2-5 sessions per week most effective<sup>[42]</sup></li>
              <li className="mb-2"><strong>Duration:</strong> 45-90 minutes per session</li>
              <li className="mb-2"><strong>Timeline:</strong> Typically 2-3 years of consistent intervention for significant gains<sup>[43]</sup></li>
              <li className="mb-2"><strong>One-on-one or small group:</strong> Individual or groups of 2-3 students</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cost Considerations</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Private tutoring:</strong> $50-$150+ per hour depending on credentials and location<sup>[44]</sup></li>
              <li className="mb-2"><strong>Learning centers:</strong> Lindamood-Bell, Huntington, Sylvan offer structured programs</li>
              <li className="mb-2"><strong>School-based services:</strong> Free through IEP if student qualifies</li>
              <li className="mb-2"><strong>Sliding scale options:</strong> Some tutors offer reduced rates; community programs<sup>[45]</sup></li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Multisensory Teaching Strategies</h2>
            
            <p className="mb-4">
              Multisensory instruction engages multiple pathways in the brain simultaneously, strengthening learning:<sup>[46]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Strategies</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Color-coding different phonemes or word parts<sup>[47]</sup></li>
              <li className="mb-2">Visual cue cards for spelling rules</li>
              <li className="mb-2">Graphic organizers for reading comprehension and writing<sup>[48]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Auditory Strategies</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Saying sounds aloud while reading and writing<sup>[49]</sup></li>
              <li className="mb-2">Rhyming activities to build phonological awareness</li>
              <li className="mb-2">Listening to audiobooks while following along with text<sup>[50]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Kinesthetic-Tactile Strategies</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Tracing letters in sand, shaving cream, or on sandpaper<sup>[51]</sup></li>
              <li className="mb-2">Building words with magnetic letters or tiles</li>
              <li className="mb-2">Finger-tapping syllables or sounds<sup>[52]</sup></li>
              <li className="mb-2">Skywriting (writing letters large in the air)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Building Reading Fluency</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Repeated Reading</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Method:</strong> Student reads same passage multiple times until achieving target fluency<sup>[53]</sup></li>
              <li className="mb-2"><strong>Benefits:</strong> Improves automaticity, rate, and expression</li>
              <li className="mb-2"><strong>Implementation:</strong> Read 3-4 times, timing and graphing progress<sup>[54]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Partner Reading</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Reading with a more fluent reader who models good reading<sup>[55]</sup></li>
              <li className="mb-2">Choral reading (reading in unison)</li>
              <li className="mb-2">Echo reading (adult reads, student repeats)<sup>[56]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Wide Reading</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Reading large amounts of text at independent level<sup>[57]</sup></li>
              <li className="mb-2">High-interest, decodable books at appropriate level</li>
              <li className="mb-2">Building reading stamina and confidence<sup>[58]</sup></li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 2: Technology & Tools */}
      {activeTab === 'technology' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assistive Technology</h2>
            
            <ImageWithFallback 
              src={technologyImage} 
              alt="Student using assistive technology"
              className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
            />
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Technology</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Text-to-speech apps:</strong> NaturalReader, Voice Dream Reader, Kurzweil 3000<sup>[29]</sup></li>
              <li className="mb-2"><strong>Optical character recognition (OCR):</strong> Converts images/PDFs to readable text</li>
              <li className="mb-2"><strong>Electronic books:</strong> Kindle, iPad with accessibility features<sup>[30]</sup></li>
              <li className="mb-2"><strong>Reading pens:</strong> C-Pen Reader scans and reads text aloud</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Writing Technology</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Word prediction software:</strong> Co:Writer, Read&Write suggests words as you type<sup>[31]</sup></li>
              <li className="mb-2"><strong>Speech-to-text:</strong> Google Docs voice typing, Windows Speech Recognition</li>
              <li className="mb-2"><strong>Grammar checkers:</strong> Grammarly, ProWritingAid<sup>[32]</sup></li>
              <li className="mb-2"><strong>Mind mapping software:</strong> Inspiration, MindMeister for organizing thoughts</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization & Study Tools</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Digital organizers:</strong> Google Calendar, Trello, Notion<sup>[33]</sup></li>
              <li className="mb-2"><strong>Note-taking apps:</strong> OneNote, Notability with audio recording</li>
              <li className="mb-2"><strong>Study apps:</strong> Quizlet for flashcards, Evernote for organizing materials<sup>[34]</sup></li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Individualized Education Programs (IEPs) and 504 Plans</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">IEP (Individualized Education Program)</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Eligibility:</strong> Under IDEA (Individuals with Disabilities Education Act) for students whose dyslexia significantly impacts educational performance<sup>[35]</sup></li>
              <li className="mb-2"><strong>Services:</strong> Special education services and related services (e.g., speech therapy)</li>
              <li className="mb-2"><strong>Goals:</strong> Measurable annual goals with progress monitoring<sup>[36]</sup></li>
              <li className="mb-2"><strong>Specialized instruction:</strong> May include resource room, co-teaching, or specialized reading class</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">504 Plan</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Eligibility:</strong> Under Section 504 of Rehabilitation Act for students whose dyslexia substantially limits learning<sup>[37]</sup></li>
              <li className="mb-2"><strong>Accommodations:</strong> Modifications to learning environment, not specialized instruction</li>
              <li className="mb-2"><strong>Easier to qualify:</strong> Broader eligibility than IEP<sup>[38]</sup></li>
              <li className="mb-2"><strong>Examples:</strong> Extended time, preferential seating, assistive technology</li>
            </ul>

            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
              <h3 className="text-[#0c264d] font-bold mb-3">IEP vs. 504 Plan Comparison:</h3>
              <div className="text-sm space-y-2">
                <p><strong>IEP:</strong> Provides specialized instruction + accommodations; more comprehensive but harder to qualify for<sup>[39]</sup></p>
                <p><strong>504 Plan:</strong> Provides accommodations only; easier to qualify but less intensive support</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Community Resources */}
      {activeTab === 'community' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Supporting Executive Function Skills</h2>
            
            <p className="mb-4">
              Many individuals with dyslexia also experience executive function challenges:<sup>[59]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization Strategies</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Color-coded folders and binders for different subjects<sup>[60]</sup></li>
              <li className="mb-2">Assignment notebooks or digital planners</li>
              <li className="mb-2">Checklist systems for multi-step tasks<sup>[61]</sup></li>
              <li className="mb-2">Regular backpack and locker cleanouts</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Time Management</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Visual timers to show time passage<sup>[62]</sup></li>
              <li className="mb-2">Breaking large projects into smaller steps with deadlines</li>
              <li className="mb-2">Build in extra time for reading and writing tasks<sup>[63]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Study Skills</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">SQ3R method: Survey, Question, Read, Recite, Review<sup>[64]</sup></li>
              <li className="mb-2">Cornell note-taking system</li>
              <li className="mb-2">Creating visual study guides and concept maps<sup>[65]</sup></li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social-Emotional Support</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Self-Esteem</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Focus on strengths and talents alongside addressing weaknesses<sup>[66]</sup></li>
              <li className="mb-2">Celebrate progress and effort, not just achievement</li>
              <li className="mb-2">Connect with successful role models who have dyslexia<sup>[67]</sup></li>
              <li className="mb-2">Educate about dyslexia: it's a difference in learning, not a deficiency</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Anxiety and Frustration</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Counseling or therapy for students experiencing significant stress<sup>[68]</sup></li>
              <li className="mb-2">Mindfulness and relaxation techniques</li>
              <li className="mb-2">Break tasks into manageable chunks to prevent overwhelm<sup>[69]</sup></li>
              <li className="mb-2">Provide choices to increase sense of control</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Advocacy Skills</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Teaching students to understand their learning profile<sup>[70]</sup></li>
              <li className="mb-2">Practicing asking for needed accommodations</li>
              <li className="mb-2">Explaining dyslexia to peers and teachers when appropriate<sup>[71]</sup></li>
              <li className="mb-2">Knowing rights under IDEA and Section 504</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Home Support Strategies</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Creating a Supportive Environment</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Designated homework space with minimal distractions<sup>[72]</sup></li>
              <li className="mb-2">Access to assistive technology and tools</li>
              <li className="mb-2">Consistent homework routine and schedule<sup>[73]</sup></li>
              <li className="mb-2">Adequate lighting and comfortable seating</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading at Home</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Continue reading aloud to children even after they can read independently<sup>[74]</sup></li>
              <li className="mb-2">Provide books at appropriate reading level (90-95% accuracy)</li>
              <li className="mb-2">Let child choose high-interest reading materials<sup>[75]</sup></li>
              <li className="mb-2">Family reading time: everyone reads together</li>
              <li className="mb-2">Audiobooks count as reading!<sup>[76]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication with School</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Regular check-ins with teachers about progress<sup>[77]</sup></li>
              <li className="mb-2">Share strategies that work at home</li>
              <li className="mb-2">Attend IEP/504 meetings prepared with questions<sup>[78]</sup></li>
              <li className="mb-2">Document concerns and accommodations use</li>
            </ul>
          </div>
        </div>
      )}

      {/* Bottom navigation button */}
      <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-end">
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Dyslexia
        </button>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <em>British Journal of Educational Psychology</em>, 81(1), 1-23.</p>
          <p>[2] National Reading Panel. (2000). <em>Teaching children to read: An evidence-based assessment of the scientific research literature on reading and its implications for reading instruction</em>. National Institute of Child Health and Human Development.</p>
          <p>[3] Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In P. McCardle & V. Chhabra (Eds.), <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</p>
          <p>[4] International Dyslexia Association. (2020). <em>Structured literacy: An introductory guide</em>. Retrieved from https://dyslexiaida.org</p>
          <p>[5] Ehri, L. C., Nunes, S. R., Willows, D. M., Schuster, B. V., Yaghoub‐Zadeh, Z., & Shanahan, T. (2001). "Phonemic awareness instruction helps children learn to read: Evidence from the National Reading Panel's meta‐analysis." <em>Reading Research Quarterly</em>, 36(3), 250-287.</p>
          <p>[6] Henry, M. K. (2010). <em>Unlocking literacy: Effective decoding and spelling instruction</em> (2nd ed.). Paul H. Brookes Publishing.</p>
          <p>[7] Carlisle, J. F. (2010). "Effects of instruction in morphological awareness on literacy achievement: An integrative review." <em>Reading Research Quarterly</em>, 45(4), 464-487.</p>
          <p>[8] Scarborough, H. S. (2001). "Connecting early language and literacy to later reading (dis)abilities: Evidence, theory, and practice." In S. B. Neuman & D. K. Dickinson (Eds.), <em>Handbook of early literacy research</em> (Vol. 1, pp. 97-110). Guilford Press.</p>
          <p>[9] Ritchey, K. D., & Goeke, J. L. (2006). "Orton-Gillingham and Orton-Gillingham—based reading instruction: A review of the literature." <em>The Journal of Special Education</em>, 40(3), 171-183.</p>
          <p>[10] Birsh, J. R. (Ed.). (2018). <em>Multisensory teaching of basic language skills</em> (4th ed.). Paul H. Brookes Publishing.</p>
          <p>[11] Oakland, T., Black, J. L., Stanford, G., Nussbaum, N. L., & Balise, R. R. (1998). "An evaluation of the dyslexia training program: A multisensory method for promoting reading in students with reading disabilities." <em>Journal of Learning Disabilities</em>, 31(2), 140-147.</p>
          <p>[12] Torgesen, J. K., Alexander, A. W., Wagner, R. K., Rashotte, C. A., Voeller, K. K., & Conway, T. (2001). "Intensive remedial instruction for children with severe reading disabilities: Immediate and long-term outcomes from two instructional approaches." <em>Journal of Learning Disabilities</em>, 34(1), 33-58.</p>
          <p>[13] D'Agostino, J. V., & Murphy, J. A. (2004). "A meta-analysis of Reading Recovery in United States schools." <em>Educational Evaluation and Policy Analysis</em>, 26(1), 23-38.</p>
          <p>[14] Wolf, M., Miller, L., & Donnelly, K. (2000). "Retrieval, automaticity, vocabulary elaboration, orthography (RAVE-O): A comprehensive, fluency-based reading intervention program." <em>Journal of Learning Disabilities</em>, 33(4), 375-386.</p>
          <p>[15] Ransford-Kaldon, C. R., Flynt, E. S., & Ross, C. L. (2011). "A randomized controlled trial of a response to intervention (RTI) tier 2 literacy program: Leveled Literacy Intervention (LLI)." <em>RTI International</em>.</p>
          <p>[16] Malmgren, K. W., & Leone, P. E. (2000). "Effects of a short-term auxiliary reading program on the reading skills of incarcerated youth." <em>Education and Treatment of Children</em>, 23(3), 239-247.</p>
          <p>[17] Fuchs, L. S., Fuchs, D., & Capizzi, A. M. (2005). "Identifying appropriate test accommodations for students with learning disabilities." <em>Focus on Exceptional Children</em>, 37(6), 1-8.</p>
          <p>[18] Lewandowski, L. J., Lovett, B. J., Codding, R. S., & Gordon, M. (2008). "Symptoms of ADHD and academic concerns in college students with and without ADHD diagnoses." <em>Journal of Attention Disorders</em>, 12(2), 156-161.</p>
          <p>[19] Wood, S. G., Moxley, J. H., Tighe, E. L., & Wagner, R. K. (2018). "Does use of text-to-speech and related read-aloud tools improve reading comprehension for students with reading disabilities? A meta-analysis." <em>Journal of Learning Disabilities</em>, 51(1), 73-84.</p>
          <p>[20] Vaughn, S., & Fletcher, J. M. (2012). "Response to intervention with secondary school students with reading difficulties." <em>Journal of Learning Disabilities</em>, 45(3), 244-256.</p>
          <p>[21] Higgins, E. L., & Raskind, M. H. (2005). "The compensatory effectiveness of the Quicktionary Reading Pen II on the reading comprehension of students with learning disabilities." <em>Journal of Special Education Technology</em>, 20(1), 29-40.</p>
          <p>[22] Kim, A. H., Vaughn, S., Wanzek, J., & Wei, S. (2004). "Graphic organizers and their effects on the reading comprehension of students with LD: A synthesis of research." <em>Journal of Learning Disabilities</em>, 37(2), 105-118.</p>
          <p>[23] Graham, S., Harris, K. R., & Mason, L. (2005). "Improving the writing performance, knowledge, and self-efficacy of struggling young writers: The effects of self-regulated strategy development." <em>Contemporary Educational Psychology</em>, 30(2), 207-241.</p>
          <p>[24] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities: An analysis of the interaction hypothesis." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[25] Elbaum, B. (2007). "Effects of an oral testing accommodation on the mathematics performance of secondary students with and without learning disabilities." <em>The Journal of Special Education</em>, 40(4), 218-229.</p>
          <p>[26] Guardino, C. A., & Fullerton, E. (2010). "Changing behaviors by changing the classroom environment." <em>Teaching Exceptional Children</em>, 42(6), 8-13.</p>
          <p>[27] Mayer, R. E. (2009). <em>Multimedia learning</em> (2nd ed.). Cambridge University Press.</p>
          <p>[28] Tomlinson, C. A. (2014). <em>The differentiated classroom: Responding to the needs of all learners</em> (2nd ed.). ASCD.</p>
          <p>[29] Stodden, R. A., Roberts, K. D., Takahashi, K., Park, H. J., & Stodden, N. J. (2012). "Use of text-to-speech software to improve reading skills of high school struggling readers." <em>Procedia Computer Science</em>, 14, 359-362.</p>
          <p>[30] Schneps, M. H., Thomson, J. M., Sonnert, G., Pomplun, M., Chen, C., & Heffner-Wong, A. (2013). "Shorter lines facilitate reading in those who struggle." <em>PloS One</em>, 8(8), e71161.</p>
          <p>[31] MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[32] Grimes, D., & Warschauer, M. (2010). "Utility in a fallible tool: A multi-site case study of automated writing evaluation." <em>The Journal of Technology, Learning and Assessment</em>, 8(6).</p>
          <p>[33] Cumming, T. M., & Rodríguez, C. D. (2017). "A meta-analysis of mobile technology supporting individuals with disabilities." <em>The Journal of Special Education Technology</em>, 32(2), 93-109.</p>
          <p>[34] Haydon, T., Mancil, G. R., Kroeger, S. D., McLeskey, J., & Lin, W. J. (2011). "A review of the effectiveness of guided notes for students who struggle learning academic content." <em>Preventing School Failure</em>, 55(4), 226-231.</p>
          <p>[35] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[36] Yell, M. L., & Bateman, D. F. (2017). <em>Endrew F. v. Douglas County School District (2017): FAPE and the U.S. Supreme Court</em>. Teaching Exceptional Children, 50(1), 7-15.</p>
          <p>[37] Section 504 of the Rehabilitation Act of 1973, 29 U.S.C. § 794.</p>
          <p>[38] Zirkel, P. A. (2009). "What does the law say? Section 504, the ADA, and the schools." <em>Teaching Exceptional Children</em>, 41(5), 68-71.</p>
          <p>[39] Drasgow, E., Yell, M. L., & Robinson, T. R. (2001). "Developing legally correct and educationally appropriate IEPs." <em>Remedial and Special Education</em>, 22(6), 359-373.</p>
          <p>[40] Spear-Swerling, L. (2009). "A literacy tutoring experience for prospective special educators and struggling second graders." <em>Journal of Learning Disabilities</em>, 42(5), 431-443.</p>
          <p>[41] Joshi, R. M., Binks, E., Graham, L., et al. (2009). "Do textbooks used in university reading education courses conform to the instructional recommendations of the National Reading Panel?" <em>Journal of Learning Disabilities</em>, 42(5), 458-463.</p>
          <p>[42] Torgesen, J. K., Wagner, R. K., Rashotte, C. A., et al. (2010). "Computer-assisted instruction to prevent early reading difficulties in students at risk for dyslexia: Outcomes from two instructional approaches." <em>Annals of Dyslexia</em>, 60(1), 40-56.</p>
          <p>[43] Lovett, M. W., Lacerenza, L., Borden, S. L., et al. (2000). "Components of effective remediation for developmental reading disabilities: Combining phonological and strategy-based instruction to improve outcomes." <em>Journal of Educational Psychology</em>, 92(2), 263-283.</p>
          <p>[44] Hock, M. F., Pulvers, K. A., Deshler, D. D., & Schumaker, J. B. (2001). "The effects of an after-school tutoring program on the academic performance of at-risk students and students with LD." <em>Remedial and Special Education</em>, 22(3), 172-186.</p>
          <p>[45] Ritter, G. W., Barnett, J. H., Denny, G. S., & Albin, G. R. (2009). "The effectiveness of volunteer tutoring programs for elementary and middle school students: A meta-analysis." <em>Review of Educational Research</em>, 79(1), 3-38.</p>
          <p>[46] Shams, L., & Seitz, A. R. (2008). "Benefits of multisensory learning." <em>Trends in Cognitive Sciences</em>, 12(11), 411-417.</p>
          <p>[47] Moats, L., & Tolman, C. (2009). <em>Language essentials for teachers of reading and spelling (LETRS): The challenge of learning to read</em>. Sopris West Educational Services.</p>
          <p>[48] Dexter, D. D., & Hughes, C. A. (2011). "Graphic organizers and students with learning disabilities: A meta-analysis." <em>Learning Disability Quarterly</em>, 34(1), 51-72.</p>
          <p>[49] Ehri, L. C., & Wilce, L. S. (1980). "The influence of orthography on readers' conceptualization of the phonemic structure of words." <em>Applied Psycholinguistics</em>, 1(4), 371-385.</p>
          <p>[50] Whittingham, J., Huffman, S., Christensen, R., & McAllister, T. (2013). "Use of audiobooks in a school library and positive effects of struggling readers' participation in a library-sponsored audiobook club." <em>School Library Research</em>, 16.</p>
          <p>[51] Fernald, G. M. (1943). <em>Remedial techniques in basic school subjects</em>. McGraw-Hill.</p>
          <p>[52] Boyer-Crane, C., Snowling, M. J., Duff, F. J., Fieldsend, E., Carroll, J. M., Miles, J., ... & Hulme, C. (2008). "Improving early language and literacy skills: Differential effects of an oral language versus a phonology with reading intervention." <em>Journal of Child Psychology and Psychiatry</em>, 49(4), 422-432.</p>
          <p>[53] Therrien, W. J. (2004). "Fluency and comprehension gains as a result of repeated reading: A meta-analysis." <em>Remedial and Special Education</em>, 25(4), 252-261.</p>
          <p>[54] Samuels, S. J. (1979). "The method of repeated readings." <em>The Reading Teacher</em>, 32(4), 403-408.</p>
          <p>[55] Topping, K. J. (2005). "Trends in peer learning." <em>Educational Psychology</em>, 25(6), 631-645.</p>
          <p>[56] Rasinski, T. V., & Hoffman, J. V. (2003). "Oral reading in the school literacy curriculum." <em>Reading Research Quarterly</em>, 38(4), 510-522.</p>
          <p>[57] Cunningham, A. E., & Stanovich, K. E. (1998). "What reading does for the mind." <em>American Educator</em>, 22, 8-17.</p>
          <p>[58] Morgan, P. L., & Sideridis, G. D. (2006). "Contrasting the effectiveness of fluency interventions for students with or at risk of learning disabilities: A multilevel random coefficient modeling meta-analysis." <em>Learning Disabilities Research & Practice</em>, 21(4), 191-210.</p>
          <p>[59] Reiter, A., Tucha, O., & Lange, K. W. (2005). "Executive functions in children with dyslexia." <em>Dyslexia</em>, 11(2), 116-131.</p>
          <p>[60] Hughes, C. A., & Suritsky, S. K. (1994). "Note-taking skills of university students with and without learning disabilities." <em>Journal of Learning Disabilities</em>, 27(1), 20-24.</p>
          <p>[61] Gureasko-Moore, S., DuPaul, G. J., & White, G. P. (2007). "Self-management of classroom preparedness and homework: Effects on school functioning of adolescents with attention deficit hyperactivity disorder." <em>School Psychology Review</em>, 36(4), 647-664.</p>
          <p>[62] Barkley, R. A. (1997). "Behavioral inhibition, sustained attention, and executive functions: Constructing a unifying theory of ADHD." <em>Psychological Bulletin</em>, 121(1), 65-94.</p>
          <p>[63] Dawson, P., & Guare, R. (2010). <em>Executive skills in children and adolescents: A practical guide to assessment and intervention</em> (2nd ed.). Guilford Press.</p>
          <p>[64] Robinson, F. P. (1970). <em>Effective study</em> (4th ed.). Harper & Row.</p>
          <p>[65] Novak, J. D., & Gowin, D. B. (1984). <em>Learning how to learn</em>. Cambridge University Press.</p>
          <p>[66] Humphrey, N., & Mullins, P. M. (2002). "Self-concept and self-esteem in developmental dyslexia." <em>Journal of Research in Special Educational Needs</em>, 2(2).</p>
          <p>[67] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[68] Boetsch, E. A., Green, P. A., & Pennington, B. F. (1996). "Psychosocial correlates of dyslexia across the life span." <em>Development and Psychopathology</em>, 8(3), 539-562.</p>
          <p>[69] Grills-Taquechel, A. E., Fletcher, J. M., Vaughn, S. R., & Stuebing, K. K. (2012). "Anxiety and reading difficulties in early elementary school: Evidence for unidirectional-or bi-directional relations?" <em>Child Psychiatry & Human Development</em>, 43(1), 35-47.</p>
          <p>[70] Daly, C., Kelley, K., & Krauss, A. (2003). "Self-advocacy: A valuable skill for your teenager with LD." <em>In Their Own Way</em>.</p>
          <p>[71] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[72] Epstein, J. L. (2001). <em>School, family, and community partnerships: Preparing educators and improving schools</em>. Westview Press.</p>
          <p>[73] Cooper, H., Robinson, J. C., & Patall, E. A. (2006). "Does homework improve academic achievement? A synthesis of research, 1987–2003." <em>Review of Educational Research</em>, 76(1), 1-62.</p>
          <p>[74] Bus, A. G., Van Ijzendoorn, M. H., & Pellegrini, A. D. (1995). "Joint book reading makes for success in learning to read: A meta-analysis on intergenerational transmission of literacy." <em>Review of Educational Research</em>, 65(1), 1-21.</p>
          <p>[75] Guthrie, J. T., & Humenick, N. M. (2004). "Motivating students to read: Evidence for classroom practices that increase reading motivation and achievement." In P. McCardle & V. Chhabra (Eds.), <em>The voice of evidence in reading research</em> (pp. 329-354). Paul H. Brookes.</p>
          <p>[76] Aronson, A. G. (2010). "New perspectives on reading intervention through audiobook technology." <em>Reading Psychology</em>, 31(4), 315-338.</p>
          <p>[77] Epstein, J. L., & Van Voorhis, F. L. (2001). "More than minutes: Teachers' roles in designing homework." <em>Educational Psychologist</em>, 36(3), 181-193.</p>
          <p>[78] Garriott, P. P., Wandry, D., & Snyder, L. (2000). "Teachers as parents, parents as children: What's wrong with this picture?" <em>Preventing School Failure</em>, 45(1), 37-43.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyslexia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyslexia
        </a>
      </div>
    </article>
  );
}