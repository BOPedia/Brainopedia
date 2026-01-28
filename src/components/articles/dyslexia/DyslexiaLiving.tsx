import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface DyslexiaLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaLiving({ setCurrentArticle }: DyslexiaLivingProps) {
  const [activeTab, setActiveTab] = useState('daily');

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
          Living with Dyslexia
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
          Living with dyslexia presents unique challenges, but with appropriate support and self-understanding, 
          individuals with dyslexia can thrive academically, professionally, and personally.<sup>[1]</sup> Many 
          highly successful people have dyslexia, demonstrating that it doesn't limit potential—it simply means 
          learning and working differently.<sup>[2]</sup>
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        <button
          onClick={() => setActiveTab('daily')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'daily'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Daily Strategies
        </button>
        <button
          onClick={() => setActiveTab('school')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'school'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          School Success
        </button>
        <button
          onClick={() => setActiveTab('work')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'work'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Workplace Strategies
        </button>
        <button
          onClick={() => setActiveTab('strengths')}
          className={`px-6 py-3 rounded-md text-sm transition-colors ${
            activeTab === 'strengths'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
          }`}
        >
          Strengths & Success
        </button>
      </div>

      {/* TAB 1: Daily Strategies */}
      {activeTab === 'daily' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life with Dyslexia</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1530303388419-840456159b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBjb25maWRlbmNlfGVufDF8fHx8MTc2NzQ1MTYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Child reading with confidence"
              className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
            />
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Challenges in Daily Activities</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Reading menus and signs:</strong> Can be slow and effortful in public settings<sup>[3]</sup></li>
              <li className="mb-2"><strong>Following written directions:</strong> Instructions for assembling furniture, recipes, etc.</li>
              <li className="mb-2"><strong>Forms and paperwork:</strong> Medical forms, job applications can be overwhelming<sup>[4]</sup></li>
              <li className="mb-2"><strong>Digital navigation:</strong> Reading websites, emails, text messages</li>
              <li className="mb-2"><strong>Time pressure:</strong> Reading under time constraints particularly difficult<sup>[5]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Writing Challenges</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Spelling errors:</strong> Frequent misspellings even in common words<sup>[6]</sup></li>
              <li className="mb-2"><strong>Email and text communication:</strong> Anxiety about spelling and grammar mistakes</li>
              <li className="mb-2"><strong>Note-taking:</strong> Difficulty capturing information quickly in writing<sup>[7]</sup></li>
              <li className="mb-2"><strong>Written expression:</strong> Gap between verbal abilities and written output</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory and Organization</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Working memory challenges:</strong> Difficulty holding multiple pieces of information<sup>[8]</sup></li>
              <li className="mb-2"><strong>Following multi-step directions:</strong> May need directions repeated or written down</li>
              <li className="mb-2"><strong>Name recall:</strong> Difficulty remembering people's names<sup>[9]</sup></li>
              <li className="mb-2"><strong>Time management:</strong> Tasks often take longer than anticipated</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyslexia in School Settings</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Elementary School</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Learning to read:</strong> Peers seem to pick up reading easily while it remains difficult<sup>[18]</sup></li>
              <li className="mb-2"><strong>Reading aloud:</strong> Anxiety about "popcorn reading" or reading in front of class</li>
              <li className="mb-2"><strong>Spelling tests:</strong> Consistent difficulty despite studying<sup>[19]</sup></li>
              <li className="mb-2"><strong>Homework time:</strong> Takes significantly longer than peers</li>
              <li className="mb-2"><strong>Following along:</strong> Losing place when reading together as a class<sup>[20]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle and High School</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Increased reading demands:</strong> Textbooks, novels, and dense material<sup>[21]</sup></li>
              <li className="mb-2"><strong>Note-taking challenges:</strong> Lecture notes while processing information</li>
              <li className="mb-2"><strong>Foreign language requirements:</strong> Often particularly challenging<sup>[22]</sup></li>
              <li className="mb-2"><strong>Timed tests:</strong> Standardized tests and exams under time pressure</li>
              <li className="mb-2"><strong>Written assignments:</strong> Essays, reports, and research papers<sup>[23]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">College and University</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Heavy reading loads:</strong> Hundreds of pages per week across multiple classes<sup>[24]</sup></li>
              <li className="mb-2"><strong>Self-advocacy:</strong> Responsibility for requesting and using accommodations</li>
              <li className="mb-2"><strong>Time management:</strong> Balancing extra study time needed with other demands<sup>[25]</sup></li>
              <li className="mb-2"><strong>Disclosure decisions:</strong> Choosing whether to disclose dyslexia to professors</li>
              <li className="mb-2"><strong>Success with support:</strong> Many students with dyslexia graduate successfully<sup>[26]</sup></li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 2: School Success */}
      {activeTab === 'school' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyslexia in School Settings</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Elementary School</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Learning to read:</strong> Peers seem to pick up reading easily while it remains difficult<sup>[18]</sup></li>
              <li className="mb-2"><strong>Reading aloud:</strong> Anxiety about "popcorn reading" or reading in front of class</li>
              <li className="mb-2"><strong>Spelling tests:</strong> Consistent difficulty despite studying<sup>[19]</sup></li>
              <li className="mb-2"><strong>Homework time:</strong> Takes significantly longer than peers</li>
              <li className="mb-2"><strong>Following along:</strong> Losing place when reading together as a class<sup>[20]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle and High School</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Increased reading demands:</strong> Textbooks, novels, and dense material<sup>[21]</sup></li>
              <li className="mb-2"><strong>Note-taking challenges:</strong> Lecture notes while processing information</li>
              <li className="mb-2"><strong>Foreign language requirements:</strong> Often particularly challenging<sup>[22]</sup></li>
              <li className="mb-2"><strong>Timed tests:</strong> Standardized tests and exams under time pressure</li>
              <li className="mb-2"><strong>Written assignments:</strong> Essays, reports, and research papers<sup>[23]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">College and University</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Heavy reading loads:</strong> Hundreds of pages per week across multiple classes<sup>[24]</sup></li>
              <li className="mb-2"><strong>Self-advocacy:</strong> Responsibility for requesting and using accommodations</li>
              <li className="mb-2"><strong>Time management:</strong> Balancing extra study time needed with other demands<sup>[25]</sup></li>
              <li className="mb-2"><strong>Disclosure decisions:</strong> Choosing whether to disclose dyslexia to professors</li>
              <li className="mb-2"><strong>Success with support:</strong> Many students with dyslexia graduate successfully<sup>[26]</sup></li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: Workplace Strategies */}
      {activeTab === 'work' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyslexia in the Workplace</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1758691737605-69a0e78bd193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYWR1bHQlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzY3NDUxNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Successful adult in workplace"
              className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
            />
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Challenges</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Reading emails and documents:</strong> Large volume of written communication<sup>[27]</sup></li>
              <li className="mb-2"><strong>Report writing:</strong> Spelling and grammar concerns in professional writing</li>
              <li className="mb-2"><strong>Proofreading:</strong> Difficulty catching own errors<sup>[28]</sup></li>
              <li className="mb-2"><strong>Note-taking in meetings:</strong> Capturing key points while listening</li>
              <li className="mb-2"><strong>Learning new systems:</strong> Written manuals and instructions</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Accommodations</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Assistive technology:</strong> Text-to-speech, speech-to-text, spell checkers<sup>[29]</sup></li>
              <li className="mb-2"><strong>Flexible deadlines:</strong> Extra time for reading-heavy tasks</li>
              <li className="mb-2"><strong>Verbal instructions:</strong> Preference for verbal over written communication<sup>[30]</sup></li>
              <li className="mb-2"><strong>Proofreading support:</strong> Colleague or software review of important documents</li>
              <li className="mb-2"><strong>Training modifications:</strong> Video tutorials instead of written manuals<sup>[31]</sup></li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Success with Dyslexia</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Many successful entrepreneurs, business leaders, and professionals have dyslexia<sup>[32]</sup></li>
              <li className="mb-2">Strengths often include creativity, problem-solving, and big-picture thinking<sup>[33]</sup></li>
              <li className="mb-2">Resilience developed through overcoming challenges is a career asset</li>
              <li className="mb-2">Diverse thinking styles contribute to innovative workplaces<sup>[34]</sup></li>
            </ul>

            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
              <h3 className="text-[#0c264d] font-bold mb-3">Legal Protections in Employment:</h3>
              <div className="text-sm space-y-2">
                <p>The Americans with Disabilities Act (ADA) protects employees with dyslexia from discrimination and 
                requires reasonable accommodations.<sup>[35]</sup> Employers must provide accommodations unless they create 
                undue hardship.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Coping Strategies and Compensations</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Strategies</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Audiobooks:</strong> "Reading" through listening is still reading<sup>[45]</sup></li>
              <li className="mb-2"><strong>Text-to-speech:</strong> Using technology to read digital text aloud</li>
              <li className="mb-2"><strong>Preview and skim:</strong> Getting overview before detailed reading<sup>[46]</sup></li>
              <li className="mb-2"><strong>Highlighted text:</strong> Using color to mark important information</li>
              <li className="mb-2"><strong>Frequent breaks:</strong> Preventing reading fatigue</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Writing Strategies</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Speech-to-text:</strong> Dictating instead of typing<sup>[47]</sup></li>
              <li className="mb-2"><strong>Spelling and grammar tools:</strong> Grammarly, spell check, word prediction</li>
              <li className="mb-2"><strong>Templates:</strong> Using structured formats for emails and documents<sup>[48]</sup></li>
              <li className="mb-2"><strong>Outlining first:</strong> Organizing ideas before writing</li>
              <li className="mb-2"><strong>Proofreading support:</strong> Having others review important writing</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory and Organization</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Digital reminders:</strong> Phone alarms, calendar notifications<sup>[49]</sup></li>
              <li className="mb-2"><strong>Voice memos:</strong> Recording thoughts and reminders</li>
              <li className="mb-2"><strong>Visual schedules:</strong> Color-coded calendars and to-do lists<sup>[50]</sup></li>
              <li className="mb-2"><strong>Checklists:</strong> Step-by-step lists for complex tasks</li>
              <li className="mb-2"><strong>Consistent routines:</strong> Reducing cognitive load through habits</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Learning New Information</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Video tutorials:</strong> Learning through visual demonstration<sup>[51]</sup></li>
              <li className="mb-2"><strong>Hands-on practice:</strong> Learning by doing rather than reading</li>
              <li className="mb-2"><strong>Verbal explanations:</strong> Asking for oral instructions<sup>[52]</sup></li>
              <li className="mb-2"><strong>Repetition:</strong> Multiple exposures to new information</li>
              <li className="mb-2"><strong>Making connections:</strong> Linking new information to prior knowledge</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Advocacy and Disclosure</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Your Rights</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>K-12 education:</strong> IDEA and Section 504 guarantee services and accommodations<sup>[53]</sup></li>
              <li className="mb-2"><strong>College/university:</strong> ADA requires reasonable accommodations</li>
              <li className="mb-2"><strong>Workplace:</strong> ADA protects employees with dyslexia<sup>[54]</sup></li>
              <li className="mb-2"><strong>Testing:</strong> SAT, ACT, GRE, and licensing exams provide accommodations</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Effective Self-Advocacy</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Know your profile:</strong> Understand your specific strengths and challenges<sup>[55]</sup></li>
              <li className="mb-2"><strong>Request accommodations:</strong> Don't wait until you're struggling</li>
              <li className="mb-2"><strong>Explain dyslexia:</strong> Help others understand it's not about intelligence<sup>[56]</sup></li>
              <li className="mb-2"><strong>Document needs:</strong> Keep records of evaluations and accommodations</li>
              <li className="mb-2"><strong>Follow up:</strong> Ensure accommodations are actually implemented</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Disclosure Considerations</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Pros of disclosure:</strong> Access to accommodations, understanding from others, reduced stress from hiding<sup>[57]</sup></li>
              <li className="mb-2"><strong>Cons of disclosure:</strong> Potential stigma, lowered expectations, privacy concerns</li>
              <li className="mb-2"><strong>Strategic disclosure:</strong> Disclosing to those who need to know (disability services, direct supervisor)<sup>[58]</sup></li>
              <li className="mb-2"><strong>Timing:</strong> When to disclose (job application vs. after hire; beginning vs. middle of semester)</li>
              <li className="mb-2"><strong>Personal choice:</strong> No requirement to disclose; it's an individual decision<sup>[59]</sup></li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 4: Strengths & Success */}
      {activeTab === 'strengths' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths Associated with Dyslexia</h2>
            
            <p className="mb-4">
              While dyslexia creates real challenges, research and anecdotal evidence suggest individuals with dyslexia 
              often develop distinctive strengths:<sup>[36]</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cognitive Strengths</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Spatial reasoning:</strong> Strong 3D visualization and spatial abilities<sup>[37]</sup></li>
              <li className="mb-2"><strong>Creative thinking:</strong> Novel approaches to problem-solving<sup>[38]</sup></li>
              <li className="mb-2"><strong>Big-picture thinking:</strong> Seeing connections and patterns others miss</li>
              <li className="mb-2"><strong>Narrative reasoning:</strong> Understanding through stories and examples<sup>[39]</sup></li>
              <li className="mb-2"><strong>Visual thinking:</strong> Thinking in images rather than words</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Personal Strengths</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Resilience:</strong> Persistence developed through overcoming challenges<sup>[40]</sup></li>
              <li className="mb-2"><strong>Empathy:</strong> Understanding of struggle and difference</li>
              <li className="mb-2"><strong>Determination:</strong> Strong work ethic from having to work harder<sup>[41]</sup></li>
              <li className="mb-2"><strong>Creativity:</strong> Finding alternative solutions when standard methods don't work</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Professional Strengths</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Entrepreneurship:</strong> Higher rates of entrepreneurship among dyslexics<sup>[42]</sup></li>
              <li className="mb-2"><strong>Verbal communication:</strong> Often strong oral communication skills</li>
              <li className="mb-2"><strong>Delegation:</strong> Comfortable delegating tasks that aren't strengths<sup>[43]</sup></li>
              <li className="mb-2"><strong>Innovation:</strong> Thinking outside conventional frameworks</li>
            </ul>

            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
              <h3 className="text-[#0c264d] font-bold mb-3">Famous Individuals with Dyslexia:</h3>
              <div className="text-sm space-y-2">
                <p>Many accomplished individuals have dyslexia, including Richard Branson (entrepreneur), Steven Spielberg 
                (director), Whoopi Goldberg (actress), Muhammad Ali (athlete), Agatha Christie (author), and many scientists, 
                artists, and business leaders.<sup>[44]</sup></p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Building a Support Network</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Support</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Education about dyslexia for all family members<sup>[60]</sup></li>
              <li className="mb-2">Understanding that dyslexia is lifelong but manageable</li>
              <li className="mb-2">Celebrating effort and progress, not just achievement<sup>[61]</sup></li>
              <li className="mb-2">Avoiding negative comparisons with siblings or peers</li>
              <li className="mb-2">Practical support (reading aloud, proofreading) balanced with independence</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Professional Support</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Tutors and specialists:</strong> Ongoing reading support<sup>[62]</sup></li>
              <li className="mb-2"><strong>Educational therapists:</strong> Holistic approach to learning challenges</li>
              <li className="mb-2"><strong>Therapists/counselors:</strong> Support for emotional impacts<sup>[63]</sup></li>
              <li className="mb-2"><strong>Career counselors:</strong> Help identifying suitable career paths</li>
              <li className="mb-2"><strong>Assistive technology specialists:</strong> Maximizing technology use</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Peer and Community Support</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Support groups:</strong> Connecting with others who have dyslexia<sup>[64]</sup></li>
              <li className="mb-2"><strong>Online communities:</strong> Forums, social media groups, virtual support</li>
              <li className="mb-2"><strong>Mentorship:</strong> Successful adults with dyslexia mentoring younger individuals<sup>[65]</sup></li>
              <li className="mb-2"><strong>Organizations:</strong> International Dyslexia Association, Decoding Dyslexia</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward: Hope and Success</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Positive Outcomes</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Most individuals with dyslexia learn to read adequately with intervention<sup>[66]</sup></li>
              <li className="mb-2">Many attend and graduate from college with appropriate support<sup>[67]</sup></li>
              <li className="mb-2">Career success is absolutely achievable with accommodations and self-knowledge</li>
              <li className="mb-2">Technology continues to improve, offering new support tools<sup>[68]</sup></li>
              <li className="mb-2">Growing awareness reduces stigma and increases understanding</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Keys to Success</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>Early intervention:</strong> Getting help as soon as reading difficulties appear<sup>[69]</sup></li>
              <li className="mb-2"><strong>Evidence-based instruction:</strong> Structured literacy programs that work</li>
              <li className="mb-2"><strong>Appropriate accommodations:</strong> Using tools and support without shame<sup>[70]</sup></li>
              <li className="mb-2"><strong>Self-understanding:</strong> Knowing your learning profile and needs</li>
              <li className="mb-2"><strong>Resilience:</strong> Viewing challenges as opportunities to grow stronger<sup>[71]</sup></li>
              <li className="mb-2"><strong>Strengths focus:</strong> Building on what you do well</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Shifting Perspectives</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">Dyslexia is a difference in learning, not a deficiency in intelligence<sup>[72]</sup></li>
              <li className="mb-2">Success is defined individually—not by traditional academic measures alone</li>
              <li className="mb-2">The goal is progress and skill development, not "curing" dyslexia<sup>[73]</sup></li>
              <li className="mb-2">Diverse minds contribute essential perspectives to society</li>
              <li className="mb-2">Accommodations are equity tools, not unfair advantages<sup>[74]</sup></li>
            </ul>

            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
              <h3 className="text-[#0c264d] font-bold mb-3">A Message of Hope:</h3>
              <div className="text-sm">
                <p className="mb-3">
                  Dyslexia is part of who you are, but it doesn't define your potential or limit your future. With the right 
                  support, strategies, and self-advocacy, individuals with dyslexia can and do achieve their goals—academic, 
                  professional, and personal.<sup>[1]</sup>
                </p>
                <p>
                  The journey may require extra effort and different approaches, but the resilience, creativity, and unique 
                  perspectives developed along the way are valuable assets that contribute to success in all areas of life.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Resources for Living with Dyslexia</h2>
            
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organizations</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2"><strong>International Dyslexia Association (IDA):</strong> Information, resources, and local branches</li>
              <li className="mb-2"><strong>Decoding Dyslexia:</strong> Parent-led advocacy organization</li>
              <li className="mb-2"><strong>Learning Ally:</strong> Audiobook library for people with reading differences</li>
              <li className="mb-2"><strong>Bookshare:</strong> Accessible ebooks for qualified individuals</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Books and Media</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">"Overcoming Dyslexia" by Sally Shaywitz, M.D.</li>
              <li className="mb-2">"The Dyslexia Empowerment Plan" by Ben Foss</li>
              <li className="mb-2">"Proust and the Squid" by Maryanne Wolf</li>
              <li className="mb-2">"The Gift of Dyslexia" by Ronald Davis</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Technology Resources</h3>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2">NaturalReader, Voice Dream Reader (text-to-speech)</li>
              <li className="mb-2">Dragon NaturallySpeaking (speech-to-text)</li>
              <li className="mb-2">Grammarly, Ginger (writing support)</li>
              <li className="mb-2">Read&Write, ClaroRead (comprehensive literacy support)</li>
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
          <p>[1] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[2] Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <em>Dyslexia</em>, 15(4), 328-346.</p>
          <p>[3] McNulty, M. A. (2003). "Dyslexia and the life course." <em>Journal of Learning Disabilities</em>, 36(4), 363-381.</p>
          <p>[4] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[5] Breznitz, Z. (2006). <em>Fluency in reading: Synchronization of processes</em>. Routledge.</p>
          <p>[6] Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[7] Hughes, C. A., & Suritsky, S. K. (1994). "Note-taking skills of university students with and without learning disabilities." <em>Journal of Learning Disabilities</em>, 27(1), 20-24.</p>
          <p>[8] Swanson, H. L., & Berninger, V. (1995). "The role of working memory in skilled and less skilled readers' comprehension." <em>Intelligence</em>, 21(1), 83-108.</p>
          <p>[9] Swan, D., & Goswami, U. (1997). "Picture naming deficits in developmental dyslexia: The phonological representations hypothesis." <em>Brain and Language</em>, 56(3), 334-353.</p>
          <p>[10] Alexander-Passe, N. (2006). "How dyslexic teenagers cope: An investigation of self-esteem, coping and depression." <em>Dyslexia</em>, 12(4), 256-275.</p>
          <p>[11] Boetsch, E. A., Green, P. A., & Pennington, B. F. (1996). "Psychosocial correlates of dyslexia across the life span." <em>Development and Psychopathology</em>, 8(3), 539-562.</p>
          <p>[12] Torgesen, J. K. (2002). "The prevention of reading difficulties." <em>Journal of School Psychology</em>, 40(1), 7-26.</p>
          <p>[13] Humphrey, N., & Mullins, P. M. (2002). "Self-concept and self-esteem in developmental dyslexia." <em>Journal of Research in Special Educational Needs</em>, 2(2).</p>
          <p>[14] Seligman, M. E. (1975). <em>Helplessness: On depression, development, and death</em>. W. H. Freeman.</p>
          <p>[15] Raskind, M. H., Goldberg, R. J., Higgins, E. L., & Herman, K. L. (1999). "Patterns of change and predictors of success in individuals with learning disabilities: Results from a twenty-year longitudinal study." <em>Learning Disabilities Research & Practice</em>, 14(1), 35-49.</p>
          <p>[16] Ingesson, S. G. (2007). "Growing up with dyslexia: Interviews with teenagers and young adults." <em>School Psychology International</em>, 28(5), 574-591.</p>
          <p>[17] Singer, E. (2007). "Coping with academic failure, a study of Dutch children with dyslexia." <em>Dyslexia</em>, 13(4), 314-333.</p>
          <p>[18] Shaywitz, S. E., & Shaywitz, B. A. (2005). "Dyslexia (specific reading disability)." <em>Biological Psychiatry</em>, 57(11), 1301-1309.</p>
          <p>[19] Ehri, L. C. (2000). "Learning to read and learning to spell: Two sides of a coin." <em>Topics in Language Disorders</em>, 20(3), 19-36.</p>
          <p>[20] Shaywitz, S. E., Morris, R., & Shaywitz, B. A. (2008). "The education of dyslexic children from childhood to young adulthood." <em>Annual Review of Psychology</em>, 59, 451-475.</p>
          <p>[21] Vogel, S. A., & Adelman, P. B. (1992). "The success of college students with learning disabilities: Factors related to educational attainment." <em>Journal of Learning Disabilities</em>, 25(7), 430-441.</p>
          <p>[22] Sparks, R. L., Patton, J., Ganschow, L., Humbach, N., & Javorsky, J. (2008). "Early first-language reading and spelling skills predict later second-language reading and spelling skills." <em>Journal of Educational Psychology</em>, 100(1), 162-174.</p>
          <p>[23] Graham, S., & Harris, K. R. (2000). "The role of self-regulation and transcription skills in writing and writing development." <em>Educational Psychologist</em>, 35(1), 3-12.</p>
          <p>[24] Hatcher, J., Snowling, M. J., & Griffiths, Y. M. (2002). "Cognitive assessment of dyslexic students in higher education." <em>British Journal of Educational Psychology</em>, 72(1), 119-133.</p>
          <p>[25] Trainin, G., & Swanson, H. L. (2005). "Cognition, metacognition, and achievement of college students with learning disabilities." <em>Learning Disability Quarterly</em>, 28(4), 261-272.</p>
          <p>[26] Madaus, J. W. (2008). "Employment self-disclosure rates and rationales of university graduates with learning disabilities." <em>Journal of Learning Disabilities</em>, 41(4), 291-299.</p>
          <p>[27] Leather, C., Hogh, H., Seiss, E., & Everatt, J. (2011). "Cognitive functioning and work success in adults with dyslexia." <em>Dyslexia</em>, 17(4), 327-338.</p>
          <p>[28] Hatcher, J., Snowling, M. J., & Griffiths, Y. M. (2002). "Cognitive assessment of dyslexic students in higher education." <em>British Journal of Educational Psychology</em>, 72(1), 119-133.</p>
          <p>[29] Raskind, M. H., & Higgins, E. L. (1998). "Assistive technology for postsecondary students with learning disabilities: An overview." <em>Journal of Learning Disabilities</em>, 31(1), 27-40.</p>
          <p>[30] Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <em>Dyslexia</em>, 15(4), 328-346.</p>
          <p>[31] Gerber, P. J., & Price, L. A. (2003). "Persons with learning disabilities in the workplace: What we know so far in the Americans with Disabilities Act era." <em>Learning Disabilities Research & Practice</em>, 18(3), 132-136.</p>
          <p>[32] Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <em>Dyslexia</em>, 15(4), 328-346.</p>
          <p>[33] Eide, B. L., & Eide, F. F. (2011). <em>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</em>. Penguin.</p>
          <p>[34] Schneps, M. H., Brockmole, J. R., Sonnert, G., & Pomplun, M. (2012). "History of reading struggles linked to enhanced learning in low spatial frequency scenes." <em>PloS One</em>, 7(4), e35724.</p>
          <p>[35] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
          <p>[36] Eide, B. L., & Eide, F. F. (2011). <em>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</em>. Penguin.</p>
          <p>[37] von Károlyi, C., Winner, E., Gray, W., & Sherman, G. F. (2003). "Dyslexia linked to talent: Global visual-spatial ability." <em>Brain and Language</em>, 85(3), 427-431.</p>
          <p>[38] Wolff, U., & Lundberg, I. (2002). "The prevalence of dyslexia among art students." <em>Dyslexia</em>, 8(1), 34-42.</p>
          <p>[39] Griffiths, Y., & Snowling, M. J. (2002). "Predictors of exception word and nonword reading in dyslexic children: The severity hypothesis." <em>Journal of Educational Psychology</em>, 94(1), 34-43.</p>
          <p>[40] Morrison, F. J., & Cooney, R. R. (2002). "Parenting and academic achievement: Multiple paths to early literacy." In J. G. Borkowski, S. L. Ramey, & M. Bristol-Power (Eds.), <em>Parenting and the child's world: Influences on academic, intellectual, and social-emotional development</em> (pp. 141-160). Psychology Press.</p>
          <p>[41] Raskind, M. H., Goldberg, R. J., Higgins, E. L., & Herman, K. L. (1999). "Patterns of change and predictors of success in individuals with learning disabilities: Results from a twenty-year longitudinal study." <em>Learning Disabilities Research & Practice</em>, 14(1), 35-49.</p>
          <p>[42] Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <em>Dyslexia</em>, 15(4), 328-346.</p>
          <p>[43] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[44] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties, computer images and the ironies of creativity</em>. Prometheus Books.</p>
          <p>[45] Aronson, A. G. (2010). "New perspectives on reading intervention through audiobook technology." <em>Reading Psychology</em>, 31(4), 315-338.</p>
          <p>[46] McNamara, D. S. (2007). "Reading comprehension strategies can improve knowledge acquisition." <em>Science Studies in Reading</em>, 11(1), 79-98.</p>
          <p>[47] Higgins, E. L., & Raskind, M. H. (2005). "The compensatory effectiveness of the Quicktionary Reading Pen II on the reading comprehension of students with learning disabilities." <em>Journal of Special Education Technology</em>, 20(1), 29-40.</p>
          <p>[48] MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[49] Cumming, T. M., & Rodríguez, C. D. (2017). "A meta-analysis of mobile technology supporting individuals with disabilities." <em>The Journal of Special Education Technology</em>, 32(2), 93-109.</p>
          <p>[50] Dawson, P., & Guare, R. (2010). <em>Executive skills in children and adolescents: A practical guide to assessment and intervention</em> (2nd ed.). Guilford Press.</p>
          <p>[51] Mayer, R. E. (2009). <em>Multimedia learning</em> (2nd ed.). Cambridge University Press.</p>
          <p>[52] Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <em>Dyslexia</em>, 15(4), 328-346.</p>
          <p>[53] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[54] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
          <p>[55] Raskind, M. H., Goldberg, R. J., Higgins, E. L., & Herman, K. L. (1999). "Patterns of change and predictors of success in individuals with learning disabilities: Results from a twenty-year longitudinal study." <em>Learning Disabilities Research & Practice</em>, 14(1), 35-49.</p>
          <p>[56] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[57] Madaus, J. W. (2008). "Employment self-disclosure rates and rationales of university graduates with learning disabilities." <em>Journal of Learning Disabilities</em>, 41(4), 291-299.</p>
          <p>[58] Eckes, S. E., & Ochoa, T. A. (2005). "Students with disabilities: Transitioning from high school to higher education." <em>American Secondary Education</em>, 33(3), 6-20.</p>
          <p>[59] Hong, B. S., Ivy, W. F., Gonzalez, H. R., & Ehrensberger, W. (2007). "Preparing students for postsecondary education." <em>Teaching Exceptional Children</em>, 40(1), 32-38.</p>
          <p>[60] Turnbull, A. P., Turnbull, H. R., Erwin, E. J., Soodak, L. C., & Shogren, K. A. (2015). <em>Families, professionals, and exceptionality: Positive outcomes through partnerships and trust</em> (7th ed.). Pearson.</p>
          <p>[61] Dweck, C. S. (2006). <em>Mindset: The new psychology of success</em>. Random House.</p>
          <p>[62] Spear-Swerling, L. (2009). "A literacy tutoring experience for prospective special educators and struggling second graders." <em>Journal of Learning Disabilities</em>, 42(5), 431-443.</p>
          <p>[63] Boetsch, E. A., Green, P. A., & Pennington, B. F. (1996). "Psychosocial correlates of dyslexia across the life span." <em>Development and Psychopathology</em>, 8(3), 539-562.</p>
          <p>[64] Singer, E. (2007). "Coping with academic failure, a study of Dutch children with dyslexia." <em>Dyslexia</em>, 13(4), 314-333.</p>
          <p>[65] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[66] Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In P. McCardle & V. Chhabra (Eds.), <em>The voice of evidence in reading research</em> (pp. 355-382). Paul H. Brookes.</p>
          <p>[67] Madaus, J. W. (2006). "Employment outcomes of university graduates with learning disabilities." <em>Learning Disability Quarterly</em>, 29(1), 19-31.</p>
          <p>[68] Edyburn, D. L. (2013). "Critical issues in advancing the special education technology evidence base." <em>Exceptional Children</em>, 80(1), 7-24.</p>
          <p>[69] Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <em>British Journal of Educational Psychology</em>, 81(1), 1-23.</p>
          <p>[70] Fuchs, L. S., Fuchs, D., & Capizzi, A. M. (2005). "Identifying appropriate test accommodations for students with learning disabilities." <em>Focus on Exceptional Children</em>, 37(6), 1-8.</p>
          <p>[71] Morrison, F. J., & Cooney, R. R. (2002). "Parenting and academic achievement: Multiple paths to early literacy." In J. G. Borkowski, S. L. Ramey, & M. Bristol-Power (Eds.), <em>Parenting and the child's world: Influences on academic, intellectual, and social-emotional development</em> (pp. 141-160). Psychology Press.</p>
          <p>[72] Shaywitz, S. (2003). <em>Overcoming dyslexia: A new and complete science-based program for reading problems at any level</em>. Knopf.</p>
          <p>[73] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Publications.</p>
          <p>[74] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities: An analysis of the interaction hypothesis." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
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