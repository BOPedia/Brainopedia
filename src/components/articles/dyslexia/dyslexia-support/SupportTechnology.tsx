import React from 'react';
import { BookOpen, PenTool, Calendar, Mic, Headphones, Sparkles, Network, Leaf } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface SupportTechnologyProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportTechnology({ setCurrentArticle }: SupportTechnologyProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Support & Management
        </h1>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-lg">←</span>
        All About Dyslexia
      </button>

      <Tabs defaultValue="technology" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="interventions" 
            onClick={() => setCurrentArticle?.('dyslexia-support-interventions')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Interventions
          </TabsTrigger>
          <TabsTrigger 
            value="tutoring" 
            onClick={() => setCurrentArticle?.('dyslexia-support-tutoring')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Tutoring
          </TabsTrigger>
          <TabsTrigger 
            value="multisensory" 
            onClick={() => setCurrentArticle?.('dyslexia-support-multisensory')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Multisensory
          </TabsTrigger>
          <TabsTrigger 
            value="technology" 
            onClick={() => setCurrentArticle?.('dyslexia-support-technology')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Tech & Tools
          </TabsTrigger>
          <TabsTrigger 
            value="executive" 
            onClick={() => setCurrentArticle?.('dyslexia-support-executive')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Executive Function
          </TabsTrigger>
          <TabsTrigger 
            value="social" 
            onClick={() => setCurrentArticle?.('dyslexia-support-social')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Social-Emotional
          </TabsTrigger>
          <TabsTrigger 
            value="home" 
            onClick={() => setCurrentArticle?.('dyslexia-support-home')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Home Support
          </TabsTrigger>
        </TabsList>

        <TabsContent value="technology" className="animate-fadeIn">
          
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mt-2 mb-8 text-2xl clear-both text-center border-b border-gray-200 pb-2">
              Assistive Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16 max-w-3xl mx-auto">
            
            {/* READING TECHNOLOGY */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#0A9DC4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-2xl mb-3 flex items-center gap-2">
                <BookOpen className="w-7 h-7 text-[#0A9DC4]" />
                Reading Technology
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Assistive tools designed to bypass visual decoding, allowing users to comprehend complex text through audio or enhanced formatting.
              </p>
              <div className="bg-[#f0f9ff] p-5 rounded-lg border border-[#0A9DC4]/20 mb-6">
                <strong className="text-[#0c264d] text-sm block mb-3">Core Tools:</strong>
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>Text-to-speech:</strong> NaturalReader, Voice Dream Reader, Kurzweil 3000.</div></li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>OCR:</strong> Converts images and physical PDFs into readable, spoken text.</div></li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>E-books:</strong> Kindle or iPad with customized accessibility fonts and spacing.</div></li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>Reading pens:</strong> C-Pen Reader physically scans and reads text aloud.</div></li>
                </ul>
              </div>
              
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-support-techtools-TAB-reading.png"
                alt="tech reading tools"
                className="block mx-auto w-full max-w-2xl rounded-lg shadow-sm border border-slate-200 bg-white"
              /> 
            </div>

            {/* WRITING TECHNOLOGY */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#8b5cf6] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-2xl mb-3 flex items-center gap-2">
                <PenTool className="w-7 h-7 text-[#8b5cf6]" />
                Writing Technology
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Tools that remove the friction of spelling and grammar mechanics, enabling users to get their ideas onto the page quickly and accurately.
              </p>
              <div className="bg-[#8b5cf6]/10 p-5 rounded-lg border border-[#8b5cf6]/20 mb-6">
                <strong className="text-[#0c264d] text-sm block mb-3">Core Tools:</strong>
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#8b5cf6] font-bold">•</span> <div><strong>Speech-to-text:</strong> Google Docs voice typing, built-in Windows/Mac dictation.</div></li>
                  <li className="flex gap-2"><span className="text-[#8b5cf6] font-bold">•</span> <div><strong>Word prediction:</strong> Co:Writer, Read&Write (anticipates words to reduce keystrokes).</div></li>
                  <li className="flex gap-2"><span className="text-[#8b5cf6] font-bold">•</span> <div><strong>Grammar checkers:</strong> Grammarly, ProWritingAid (catches contextual errors).</div></li>
                </ul>
              </div>
              
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-support-techtools-TAB-writing.png"
                alt="tech writing tools"
                className="block mx-auto w-full max-w-2xl rounded-lg shadow-sm border border-slate-200 bg-white"
              />
            </div>

            {/* ORGANIZATION TOOLS */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#10b981] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-2xl mb-3 flex items-center gap-2">
                <Calendar className="w-7 h-7 text-[#10b981]" />
                Organization Tools
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Digital systems designed to support executive function, helping users centralize schedules, tasks, and reference materials.
              </p>
              <div className="bg-[#10b981]/10 p-5 rounded-lg border border-[#10b981]/20 mb-6">
                <strong className="text-[#0c264d] text-sm block mb-3">Core Tools:</strong>
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#10b981] font-bold">•</span> <div><strong>Organizers:</strong> Google Calendar, Trello, Notion for visual task management.</div></li>
                  <li className="flex gap-2"><span className="text-[#10b981] font-bold">•</span> <div><strong>Note-taking:</strong> OneNote, Notability (syncs audio recordings with written notes).</div></li>
                  <li className="flex gap-2"><span className="text-[#10b981] font-bold">•</span> <div><strong>Study apps:</strong> Quizlet, Evernote for spaced repetition and file storage.</div></li>
                </ul>
              </div>
              
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-support-techtools-TAB-organize-tools.png"
                alt="tech organization tools"
                className="block mx-auto w-full max-w-xl rounded-lg shadow-sm border border-slate-200 bg-white"
              />     
            </div>

          </div>

          {/* AI AND SMART ASSISTANTS SECTION */}
          <div className="clear-both mt-16">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-b border-gray-200 pb-2">
              AI & Smart Assistants
            </h2>
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Because the dyslexic brain excels at big-picture thinking but gets bogged down by spelling and working memory, building a modern AI workflow can completely remove the friction of traditional reading and writing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
            
            {/* Audio-First Capture */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#ff6b6b] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-lg mb-3 flex items-center gap-2">
                <Mic className="w-5 h-5 text-[#ff6b6b] flex-shrink-0" />
                1. Audio-First Capture
              </h4>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                Bypass the "blank page" entirely. These tools let you think out loud, ramble, and lose your train of thought, then automatically rewrite your audio into clear, structured text.
              </p>
              <div className="bg-[#ff6b6b]/10 p-4 rounded-lg border border-[#ff6b6b]/20 flex-grow">
                <strong className="text-[#0c264d] text-xs block mb-2 uppercase tracking-wider">Top Tools:</strong>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex gap-2"><span className="text-[#ff6b6b] font-bold">•</span> <div><strong>AudioPen:</strong> Strips out filler words and structures messy thoughts. Works flawlessly in the browser or via dedicated apps on macOS Tahoe.</div></li>
                  <li className="flex gap-2"><span className="text-[#ff6b6b] font-bold">•</span> <div><strong>VoiceDash:</strong> Instant formatting for emails and essays without touching a keyboard.</div></li>
                </ul>
              </div>
            </div>

            {/* Lecture Recorders */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#f59e0b] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-lg mb-3 flex items-center gap-2">
                <Headphones className="w-5 h-5 text-[#f59e0b] flex-shrink-0" />
                2. Live Processing
              </h4>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                Trying to listen and write simultaneously taxes working memory. These tools handle the transcription so the brain can focus purely on understanding concepts in real-time.
              </p>
              <div className="bg-[#f59e0b]/10 p-4 rounded-lg border border-[#f59e0b]/20 flex-grow">
                <strong className="text-[#0c264d] text-xs block mb-2 uppercase tracking-wider">Top Tools:</strong>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex gap-2"><span className="text-[#f59e0b] font-bold">•</span> <div><strong>Otter.ai:</strong> Live transcription that highlights text as it speaks (great multisensory support).</div></li>
                  <li className="flex gap-2"><span className="text-[#f59e0b] font-bold">•</span> <div><strong>Glean:</strong> Syncs audio with slides. You just hit a "highlight" button when something important is said instead of typing.</div></li>
                </ul>
              </div>
            </div>

            {/* Synthesis AI */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#3b82f6] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-lg mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#3b82f6] flex-shrink-0" />
                3. Synthesis & Cleanup
              </h4>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                Your personal research and editing crew. Use these tools to organize massive amounts of information without being forced to read walls of text.
              </p>
              <div className="bg-[#3b82f6]/10 p-4 rounded-lg border border-[#3b82f6]/20 flex-grow">
                <strong className="text-[#0c264d] text-xs block mb-2 uppercase tracking-wider">Top Tools:</strong>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex gap-2"><span className="text-[#3b82f6] font-bold">•</span> <div><strong>NotebookLM:</strong> Upload PDFs and it generates study guides, mind maps, or even podcast-style audio summaries.</div></li>
                  <li className="flex gap-2"><span className="text-[#3b82f6] font-bold">•</span> <div><strong>Claude/ChatGPT:</strong> Drop in disorganized notes and prompt it to "rewrite into a clear, hierarchical summary."</div></li>
                </ul>
              </div>
            </div>

          </div>

          {/* DIGITAL SECOND BRAIN SECTION */}
          <div className="clear-both mt-16">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-b border-gray-200 pb-2">
              Digital "Second Brain" Systems
            </h2>
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              These digital Personal Knowledge Management (PKM) systems move away from rigid folders. By treating notes like a visual, connected web, they perfectly match the dyslexic brain's associative, "big picture" thinking style.
            </p>
          </div>

          {/* Second Brain Graphic */}
          <div className="max-w-4xl mx-auto mb-12">
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-support-homesupportTAB-second-brain.png"
              alt="Digital Second Brain Systems"
              className="block mx-auto w-full max-w-2xl rounded-lg shadow-sm border border-slate-200 bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-stretch max-w-5xl mx-auto">
            
            {/* Zettelkasten Method */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#8b5cf6] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                <Network className="w-6 h-6 text-[#8b5cf6]" />
                Zettelkasten (The "Slip-Box")
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Focuses on creating "atomic" (single-idea), deeply interconnected notes. Instead of putting a note in one specific folder, you link it directly to other related ideas, building a massive web of knowledge.
              </p>
              <div className="bg-[#8b5cf6]/10 p-5 rounded-lg border border-[#8b5cf6]/20 flex-grow">
                <strong className="text-[#0c264d] text-sm block mb-3">How it works & where to build:</strong>
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#8b5cf6] font-bold">•</span> <div><strong>Atomic Notes:</strong> Keep each note strictly to one single concept or thought.</div></li>
                  <li className="flex gap-2"><span className="text-[#8b5cf6] font-bold">•</span> <div><strong>Link Everything:</strong> Use tags and bi-directional links (like <code className="bg-white px-1 rounded text-[#8b5cf6]">[[topic]]</code>) to connect ideas instead of sorting them into folders.</div></li>
                  <li className="flex gap-2"><span className="text-[#8b5cf6] font-bold">•</span> <div><strong>Best Apps:</strong> <em>Obsidian</em>, <em>Roam Research</em>, and <em>Logseq</em> automatically generate a visual "graph view" of your links.</div></li>
                </ul>
              </div>
            </div>

            {/* Evergreen Notes */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#14b8a6] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-[#14b8a6]" />
                Evergreen Notes
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Treats notes as a living, evolving web of personal knowledge that grows and matures over months. Rather than taking notes once and abandoning them, you continuously revisit and refine them.
              </p>
              <div className="bg-[#14b8a6]/10 p-5 rounded-lg border border-[#14b8a6]/20 flex-grow">
                <strong className="text-[#0c264d] text-sm block mb-3">How it works & where to build:</strong>
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#14b8a6] font-bold">•</span> <div><strong>Concept-Oriented:</strong> Title notes as full ideas (e.g., "Visual notes reduce working memory load") rather than generic topics.</div></li>
                  <li className="flex gap-2"><span className="text-[#14b8a6] font-bold">•</span> <div><strong>Continuous Cultivation:</strong> Regularly update old notes as you learn new information, changing your mind and adding context.</div></li>
                  <li className="flex gap-2"><span className="text-[#14b8a6] font-bold">•</span> <div><strong>Best Apps:</strong> Works beautifully in <em>Obsidian</em>, <em>Notion</em>, or <em>Bear</em> where you can easily edit and re-link over time.</div></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="clear-both mt-10">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-b border-gray-200 pb-2">
              Comparing Two Major Federal Plans
            </h2>
          </div>
                        <ImageWithFallback 
                src="/images/dyslexia/dyslexia-support-techtools-TAB-IEP504.png"
                alt="tech organization tools"
                className="block mx-auto w-full max-w-xl rounded-lg shadow-sm border border-slate-200 bg-white"
              />     
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* IEP Card */}
            <div className="bg-gray-300 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3">IEP (Individualized Education Program)</h4>
              <p className="text-sm text-slate-800 mb-5 leading-relaxed font-medium">
                Governed by the Individuals with Disabilities Education Act (IDEA), an IEP is designed for students whose dyslexia requires specialized, direct instruction to make academic progress.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Core Focus:</strong> Provides specialized, individualized instruction (such as resource room support or evidence-based reading interventions).
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Eligibility:</strong> Must meet specific criteria for 1 of 13 federal categories (like Specific Learning Disability) and require special education.
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Technology Requests:</strong> The IEP team is legally required to consider Assistive Technology (AT). You can request an <strong>AT Evaluation</strong> to have specific tools (like C-Pens or text-to-speech software) mandated and funded by the plan.
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Legal Structure:</strong> Highly regulated, legally binding document with strictly mandated evaluation and meeting timelines.
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Annual Goals:</strong> Requires specific, measurable academic and functional goals with mandatory progress monitoring.
                </div>
              </div>
            </div>

            {/* 504 Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3">504 Plan</h4>
              <p className="text-sm text-slate-800 mb-5 leading-relaxed font-medium">
                Covered under Section 504 of the Rehabilitation Act, this civil rights plan is for students who do not necessarily require specialized instruction, but need specific accommodations to ensure equal access to learning.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Core Focus:</strong> Removes barriers through environmental, instructional, and testing accommodations.
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Eligibility:</strong> Broader criteria; any disability that substantially limits a major life activity (such as reading, concentrating, or learning).
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Technology Requests:</strong> You can explicitly request access to everyday tech tools (such as audiobooks, speech-to-text dictation, or the use of a laptop for taking notes) as reasonable accommodations to remove barriers.
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Legal Structure:</strong> A more flexible civil rights statute focused on preventing discrimination, with fewer procedural requirements than IDEA.
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Annual Goals:</strong> No formal goals required; the plan focuses entirely on effectively implementing the listed accommodations.
                </div>
              </div>
            </div>
          </div>
          
          {/* Policy Alert Pop-out */}
          <div className="bg-[#576d8e] border-l-4 border-[#ffd166] p-6 mb-10 rounded-r-lg shadow-sm">
            <h4 className="font-bold text-[#ffd166] mb-3 uppercase text-xs tracking-wider">
              Policy Alert: Federal Oversight Changes
            </h4>
            <p className="text-sm text-white mb-4 leading-relaxed font-medium">
              In June 2026, the U.S. Department of Education announced interagency agreements shifting the administration of IDEA to the Department of Health and Human Services (HHS) and Section 504 enforcement to the Department of Justice (DOJ).
            </p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                <strong className="text-[#0A9DC4]">Shift to a Medical Model:</strong> Advocacy groups warn that moving IDEA oversight to HHS may push students toward a medical model that treats disability as a diagnosis to be managed rather than focusing on educational inclusion.
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                <strong className="text-[#0A9DC4]">Fragmented Enforcement:</strong> Splitting special education management and civil rights enforcement across separate departments risks creating confusion, longer delays, and less accountability for families.
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">
                <strong className="text-[#0A9DC4]">Unchanged Legal Rights:</strong> Despite these administrative shifts, federal officials maintain that a student's statutory rights, IEP requirements, and Section 504 accommodations have not changed.
              </div>
            </div>
          </div>  
          
          <div className="flex justify-end my-8 clear-both">
            <button 
              onClick={() => setCurrentArticle?.('dyslexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
            >
              <span className="text-lg">←</span>
              All About Dyslexia
            </button>
          </div>
          
          {/* REFERENCES SECTION */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Stodden, R. A., et al. (2012). "Use of text-to-speech software to improve reading skills of high school struggling readers." <i>Procedia Computer Science</i>. https://doi.org/10.1016/j.procs.2012.10.041</p>
                <p>2. Schneps, M. H., et al. (2013). "Shorter lines facilitate reading in those who struggle." <i>PloS One</i>. https://doi.org/10.1371/journal.pone.0071161</p>
                <p>3. MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <i>Learning Disabilities Research & Practice</i>. https://doi.org/10.1111/j.1540-5826.2009.00283.x</p>
                <p>4. Grimes, D., & Warschauer, M. (2010). "Utility in a fallible tool: A multi-site case study of automated writing evaluation." <i>The Journal of Technology, Learning and Assessment</i>. https://ejournals.bc.edu/index.php/jtla/article/view/1608</p>
                <p>5. Cumming, T. M., & Rodríguez, C. D. (2017). "A meta-analysis of mobile technology supporting individuals with disabilities." <i>The Journal of Special Education Technology</i>. https://doi.org/10.1177/0162643417704439</p>
                <p>6. Haydon, T., et al. (2011). "A review of the effectiveness of guided notes for students who struggle learning academic content." <i>Preventing School Failure</i>. https://doi.org/10.1080/1045988.2010.520359</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Drasgow, E., et al. (2001). "Developing legally correct and educationally appropriate IEPs." <i>Remedial and Special Education</i>. https://doi.org/10.1177/074193250102200604</p>
                <p>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004). https://sites.ed.gov/idea/statuteregulations/</p>
                <p>Section 504 of the Rehabilitation Act of 1973, 29 U.S.C. § 794. https://www.dol.gov/agencies/oasam/centers-offices/civil-rights-center/statutes/section-504-rehabilitation-act-of-1973</p>
                <p>Yell, M. L., & Bateman, D. F. (2017). "Endrew F. v. Douglas County School District (2017): FAPE and the U.S. Supreme Court." <i>Teaching Exceptional Children</i>. https://doi.org/10.1177/0040059917721116</p>
                <p>Zirkel, P. A. (2009). "What does the law say? Section 504, the ADA, and the schools." <i>Teaching Exceptional Children</i>. https://doi.org/10.1177/004005990904100509</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}