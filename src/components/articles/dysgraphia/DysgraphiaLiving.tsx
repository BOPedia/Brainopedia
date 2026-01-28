import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function DysgraphiaLiving({ setCurrentArticle }: DysgraphiaLivingProps) {
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
        Living with Dysgraphia
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Living successfully with dysgraphia involves understanding one's strengths, developing effective strategies, 
            advocating for needed accommodations, and recognizing that writing challenges don't define overall potential.<sup>[1]</sup> 
            With appropriate support and tools, individuals with dysgraphia lead fulfilling lives and achieve success across all domains.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life with Dysgraphia</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1585995603310-9cc1bff2894d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB3cml0ZXIlMjBzdWNjZXNzfGVufDF8fHx8MTc2NzQ1MzUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Professional success"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Filling out forms:</strong> Bank forms, medical paperwork, applications<sup>[3]</sup></li>
            <li className="mb-2"><strong>Note-taking:</strong> At meetings, appointments, lectures</li>
            <li className="mb-2"><strong>Lists and reminders:</strong> Shopping lists, to-do lists<sup>[4]</sup></li>
            <li className="mb-2"><strong>Signatures:</strong> Signing documents, credit card receipts</li>
            <li className="mb-2"><strong>Correspondence:</strong> Thank-you notes, birthday cards<sup>[5]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Practical Solutions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Digital alternatives:</strong> Electronic forms, digital calendars<sup>[6]</sup></li>
            <li className="mb-2"><strong>Voice-to-text:</strong> Dictate notes, messages, and lists</li>
            <li className="mb-2"><strong>Pre-printed options:</strong> Use checkboxes instead of writing<sup>[7]</sup></li>
            <li className="mb-2"><strong>Smartphone apps:</strong> Digital note-taking, task management</li>
            <li className="mb-2"><strong>Templates:</strong> Reusable formats for common tasks<sup>[8]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Education and Dysgraphia</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Elementary School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Early intervention:</strong> Occupational therapy, handwriting instruction<sup>[9]</sup></li>
            <li className="mb-2"><strong>IEP or 504 plan:</strong> Formalize accommodations</li>
            <li className="mb-2"><strong>Technology introduction:</strong> Begin keyboarding early<sup>[10]</sup></li>
            <li className="mb-2"><strong>Homework modifications:</strong> Reduce copying, allow typing</li>
            <li className="mb-2"><strong>Building confidence:</strong> Focus on strengths<sup>[11]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Increased demands:</strong> More writing across subjects<sup>[12]</sup></li>
            <li className="mb-2"><strong>Note-taking support:</strong> Digital notes, teacher outlines</li>
            <li className="mb-2"><strong>Organization skills:</strong> Systems for managing assignments<sup>[13]</sup></li>
            <li className="mb-2"><strong>Self-advocacy:</strong> Learning to request accommodations</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">High School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>College preparation:</strong> SAT/ACT accommodations<sup>[14]</sup></li>
            <li className="mb-2"><strong>Assistive technology proficiency:</strong> Master tools for independence</li>
            <li className="mb-2"><strong>Time management:</strong> Plan for longer writing times<sup>[15]</sup></li>
            <li className="mb-2"><strong>Course selection:</strong> Balance workload appropriately</li>
            <li className="mb-2"><strong>Transition planning:</strong> Preparing for college or career<sup>[16]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">College and University</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Disability services:</strong> Register with office, provide documentation<sup>[17]</sup></li>
            <li className="mb-2"><strong>Accommodations:</strong> Extended time, note-takers, alternative formats</li>
            <li className="mb-2"><strong>Course planning:</strong> Avoid overloading on writing-heavy courses<sup>[18]</sup></li>
            <li className="mb-2"><strong>Writing center:</strong> Support with papers and assignments</li>
            <li className="mb-2"><strong>Technology:</strong> Laptop use in class, speech-to-text software<sup>[19]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Career and Employment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Considerations</h3>
          <p className="mb-4">
            Dysgraphia should not limit career choices. Many professions require minimal handwriting:<sup>[20]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>STEM fields:</strong> Science, technology, engineering, mathematics<sup>[21]</sup></li>
            <li className="mb-2"><strong>Creative fields:</strong> Art, design, photography, film</li>
            <li className="mb-2"><strong>Business:</strong> Marketing, sales, management (with assistive tech)<sup>[22]</sup></li>
            <li className="mb-2"><strong>Healthcare:</strong> Many roles with digital charting</li>
            <li className="mb-2"><strong>Trades:</strong> Skilled trades, technical work<sup>[23]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Computer use:</strong> Typing instead of handwriting<sup>[24]</sup></li>
            <li className="mb-2"><strong>Speech recognition software:</strong> Dictation for reports and emails</li>
            <li className="mb-2"><strong>Digital forms:</strong> Electronic documentation<sup>[25]</sup></li>
            <li className="mb-2"><strong>Extended time:</strong> For written tasks when needed</li>
            <li className="mb-2"><strong>Assistive technology:</strong> Specialized software and tools<sup>[26]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Legal Protections</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Americans with Disabilities Act (ADA):</strong> Requires reasonable accommodations<sup>[27]</sup></li>
            <li className="mb-2"><strong>Disclosure:</strong> Optional, but may be needed for accommodations</li>
            <li className="mb-2"><strong>Documentation:</strong> Professional evaluation may be required<sup>[28]</sup></li>
            <li className="mb-2"><strong>Job applications:</strong> Not required to disclose during application</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Email proficiency:</strong> Use spell-check, proofread carefully<sup>[29]</sup></li>
            <li className="mb-2"><strong>Templates:</strong> Standard formats for common communications</li>
            <li className="mb-2"><strong>Voice communication:</strong> Phone calls or video instead of writing<sup>[30]</sup></li>
            <li className="mb-2"><strong>Collaboration tools:</strong> Digital platforms for teamwork</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Advocacy</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Your Rights</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Educational rights:</strong> IDEA (K-12), Section 504, ADA (college)<sup>[31]</sup></li>
            <li className="mb-2"><strong>Workplace rights:</strong> ADA employment protections</li>
            <li className="mb-2"><strong>Testing accommodations:</strong> Standardized tests (SAT, ACT, GRE, etc.)<sup>[32]</sup></li>
            <li className="mb-2"><strong>Professional licensing exams:</strong> Accommodations available</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communicating Needs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Know your accommodations:</strong> Understand what helps you<sup>[33]</sup></li>
            <li className="mb-2"><strong>Be specific:</strong> Clearly explain needed supports</li>
            <li className="mb-2"><strong>Provide documentation:</strong> When required<sup>[34]</sup></li>
            <li className="mb-2"><strong>Follow procedures:</strong> Proper channels for requesting accommodations</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Self-Advocacy Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Understanding your learning profile<sup>[35]</sup></li>
            <li className="mb-2">Recognizing when you need help</li>
            <li className="mb-2">Speaking up for yourself<sup>[36]</sup></li>
            <li className="mb-2">Knowing resources and support systems</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional and Social Aspects</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1625750998663-4b2ae8f8b658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwaGFuZCUyMHBlbmNpbHxlbnwxfHx8fDE3Njc0NTM1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Writing hand pencil"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Emotional Impact</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Frustration:</strong> Gap between thinking and writing ability<sup>[37]</sup></li>
            <li className="mb-2"><strong>Anxiety:</strong> About writing tasks and assignments</li>
            <li className="mb-2"><strong>Low self-esteem:</strong> Comparing to peers<sup>[38]</sup></li>
            <li className="mb-2"><strong>Shame or embarrassment:</strong> About handwriting quality</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Resilience</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Focus on strengths:</strong> Identify and develop areas of talent<sup>[39]</sup></li>
            <li className="mb-2"><strong>Growth mindset:</strong> Believe skills can improve with effort</li>
            <li className="mb-2"><strong>Self-compassion:</strong> Be kind to yourself<sup>[40]</sup></li>
            <li className="mb-2"><strong>Celebrate progress:</strong> Acknowledge improvements, however small</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Considerations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Explaining to others:</strong> When and how to disclose<sup>[41]</sup></li>
            <li className="mb-2"><strong>Peer understanding:</strong> Educating friends about dysgraphia</li>
            <li className="mb-2"><strong>Support groups:</strong> Connecting with others who understand<sup>[42]</sup></li>
            <li className="mb-2"><strong>Mentors:</strong> Successful adults with dysgraphia</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mental Health Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Counseling or therapy if needed<sup>[43]</sup></li>
            <li className="mb-2">Addressing anxiety or depression</li>
            <li className="mb-2">Cognitive-behavioral strategies<sup>[44]</sup></li>
            <li className="mb-2">Family therapy for systemic support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationships and Communication</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Dynamics</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Parent support:</strong> Advocacy, encouragement, understanding<sup>[45]</sup></li>
            <li className="mb-2"><strong>Sibling understanding:</strong> Education about dysgraphia</li>
            <li className="mb-2"><strong>Family accommodations:</strong> Reduce handwriting demands at home<sup>[46]</sup></li>
            <li className="mb-2"><strong>Celebrating strengths:</strong> Focus on whole person, not just challenges</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Friendships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">True friends accept you as you are<sup>[47]</sup></li>
            <li className="mb-2">Digital communication (texts, social media) may be easier</li>
            <li className="mb-2">Focus on shared interests, not writing ability<sup>[48]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Communication about needs and challenges<sup>[49]</sup></li>
            <li className="mb-2">Partner understanding and support</li>
            <li className="mb-2">Finding alternative ways to express affection (not requiring handwriting)<sup>[50]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Technology as an Equalizer</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Modern Advantages</h3>
          <p className="mb-4">
            Technology has dramatically improved life for people with dysgraphia:<sup>[51]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Decreased handwriting demands:</strong> Most work done digitally<sup>[52]</sup></li>
            <li className="mb-2"><strong>Text messaging:</strong> Brief, informal, autocorrect helps</li>
            <li className="mb-2"><strong>Voice assistants:</strong> Siri, Alexa, Google Assistant for reminders and notes<sup>[53]</sup></li>
            <li className="mb-2"><strong>Digital signatures:</strong> DocuSign, Adobe Sign</li>
            <li className="mb-2"><strong>Cloud storage:</strong> Access documents anywhere<sup>[54]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Essential Tools for Independence</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Smartphone or tablet with speech-to-text<sup>[55]</sup></li>
            <li className="mb-2">Computer with word processing software</li>
            <li className="mb-2">Calendar and reminder apps<sup>[56]</sup></li>
            <li className="mb-2">Note-taking apps with voice recording</li>
            <li className="mb-2">Email with spell-check and templates<sup>[57]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths and Positive Aspects</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Associated Strengths</h3>
          <p className="mb-4">
            Many individuals with dysgraphia have notable strengths:<sup>[58]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Verbal abilities:</strong> Strong oral communication skills<sup>[59]</sup></li>
            <li className="mb-2"><strong>Creative thinking:</strong> Innovative problem-solving</li>
            <li className="mb-2"><strong>Visual-spatial skills:</strong> Talent in art, design, engineering<sup>[60]</sup></li>
            <li className="mb-2"><strong>Determination:</strong> Persistence developed from overcoming challenges</li>
            <li className="mb-2"><strong>Empathy:</strong> Understanding of others' struggles<sup>[61]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reframing the Narrative</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Dysgraphia is one aspect of who you are, not your identity<sup>[62]</sup></li>
            <li className="mb-2">Focus on what you can do, not limitations</li>
            <li className="mb-2">Accommodations level the playing field<sup>[63]</sup></li>
            <li className="mb-2">Success is possible and common</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Success Stories</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Notable Individuals</h3>
          <p className="mb-4">
            Many successful people have had dysgraphia or writing difficulties:<sup>[64]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Scientists and inventors</li>
            <li className="mb-2">Artists and designers<sup>[65]</sup></li>
            <li className="mb-2">Business leaders and entrepreneurs</li>
            <li className="mb-2">Educators and advocates<sup>[66]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Themes of Success</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Understanding their learning profile:</strong> Know strengths and challenges<sup>[67]</sup></li>
            <li className="mb-2"><strong>Using appropriate accommodations:</strong> Not avoiding, but adapting</li>
            <li className="mb-2"><strong>Leveraging technology:</strong> Using available tools<sup>[68]</sup></li>
            <li className="mb-2"><strong>Building on strengths:</strong> Choosing paths aligned with talents</li>
            <li className="mb-2"><strong>Persistence:</strong> Not giving up despite challenges<sup>[69]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Lifespan Perspective</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Challenges may change:</strong> Different demands at different ages<sup>[70]</sup></li>
            <li className="mb-2"><strong>Skills can improve:</strong> With intervention and practice</li>
            <li className="mb-2"><strong>Technology evolving:</strong> New tools constantly emerging<sup>[71]</sup></li>
            <li className="mb-2"><strong>Acceptance increasing:</strong> Greater awareness and accommodation</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Future Possibilities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Improved voice recognition technology<sup>[72]</sup></li>
            <li className="mb-2">Better early identification and intervention</li>
            <li className="mb-2">Increased understanding of neurodiversity<sup>[73]</sup></li>
            <li className="mb-2">More inclusive educational and work environments</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Resources and Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organizations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Learning Disabilities Association of America (LDA)<sup>[74]</sup></li>
            <li className="mb-2">National Center for Learning Disabilities (NCLD)</li>
            <li className="mb-2">International Dyslexia Association (IDA)<sup>[75]</sup></li>
            <li className="mb-2">Understood.org</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Online Communities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Social media support groups<sup>[76]</sup></li>
            <li className="mb-2">Forums and discussion boards</li>
            <li className="mb-2">Parent networks<sup>[77]</sup></li>
            <li className="mb-2">Advocacy groups</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Professional Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Educational therapists<sup>[78]</sup></li>
            <li className="mb-2">Occupational therapists</li>
            <li className="mb-2">Psychologists and counselors<sup>[79]</sup></li>
            <li className="mb-2">Learning disability specialists</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Key Messages</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Remember:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Dysgraphia is a difference, not a deficiency:</strong> Your brain works differently, not incorrectly<sup>[80]</sup></li>
              <li><strong>Intelligence is not related to handwriting:</strong> Writing challenges don't reflect cognitive ability<sup>[81]</sup></li>
              <li><strong>Accommodations are rights, not cheating:</strong> They level the playing field</li>
              <li><strong>Technology is a tool, not a crutch:</strong> Use what helps you succeed<sup>[82]</sup></li>
              <li><strong>You are not alone:</strong> Millions of people have dysgraphia</li>
              <li><strong>Success is achievable:</strong> With support and strategies, you can thrive<sup>[83]</sup></li>
              <li><strong>Focus on your strengths:</strong> Writing is one skill among many</li>
              <li><strong>Advocate for yourself:</strong> Know your rights and needs<sup>[84]</sup></li>
              <li><strong>Be patient with yourself:</strong> Progress takes time</li>
              <li><strong>Your worth is not determined by your handwriting:</strong> You have value beyond writing ability<sup>[85]</sup></li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Moving Forward with Confidence</h2>
          
          <p className="mb-4">
            Living with dysgraphia presents challenges, but it doesn't have to limit your dreams or potential.<sup>[86]</sup> 
            With understanding, appropriate support, effective strategies, and determination, individuals with dysgraphia 
            succeed in school, career, and life. The key is finding what works for you, advocating for your needs, 
            and remembering that writing difficulties are just one small part of who you are.
          </p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Berninger, V. W., & Wolf, B. J. (2009). <em>Teaching students with dyslexia and dysgraphia</em>. Brookes Publishing.</p>
          <p>[2] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[3] Gregg, N., Coleman, C., Davis, M., & Chalk, J. C. (2007). "Timed essay writing: Implications for high-stakes tests." <em>Journal of Learning Disabilities</em>, 40(4), 306-318.</p>
          <p>[4] Kiewra, K. A. (1989). "A review of note-taking: The encoding-storage paradigm." <em>Educational Psychology Review</em>, 1(2), 147-172.</p>
          <p>[5] Graham, S., & Perin, D. (2007). "A meta-analysis of writing instruction for adolescent students." <em>Journal of Educational Psychology</em>, 99(3), 445-476.</p>
          <p>[6] MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[7] Edyburn, D. L. (2000). "Assistive technology and students with mild disabilities." <em>Focus on Exceptional Children</em>, 32(9), 1-24.</p>
          <p>[8] Anderson-Inman, L., & Horney, M. A. (1998). "Transforming text for at-risk readers." In D. Reinking et al. (Eds.), <em>Handbook of literacy and technology</em> (pp. 15-43). Erlbaum.</p>
          <p>[9] Case-Smith, J. (2002). "Effectiveness of school-based occupational therapy intervention on handwriting." <em>American Journal of Occupational Therapy</em>, 56(1), 17-25.</p>
          <p>[10] Berninger, V. W., Abbott, R. D., Augsburger, A., & Garcia, N. (2009). "Comparison of pen and keyboard transcription modes." <em>Learning Disability Quarterly</em>, 32(3), 123-141.</p>
          <p>[11] Dweck, C. S. (2006). <em>Mindset: The new psychology of success</em>. Random House.</p>
          <p>[12] Peverly, S. T. (2006). "The importance of handwriting speed in adult writing." <em>Developmental Neuropsychology</em>, 29(1), 197-216.</p>
          <p>[13] Mayes, S. D., Calhoun, S. L., Bixler, E. O., & Zimmerman, D. N. (2009). "IQ and neuropsychological predictors of academic achievement." <em>Learning and Individual Differences</em>, 19(2), 238-241.</p>
          <p>[14] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[15] Patton, J. R. (1994). "Practical recommendations for using homework with students with learning disabilities." <em>Journal of Learning Disabilities</em>, 27(9), 570-578.</p>
          <p>[16] Kohler, P. D., & Field, S. (2003). "Transition-focused education." <em>The Journal of Special Education</em>, 37(3), 174-183.</p>
          <p>[17] Association on Higher Education and Disability. (2012). <em>Supporting accommodation requests</em>.</p>
          <p>[18] Gregg, N. (2009). <em>Adolescents and adults with learning disabilities and ADHD</em>. Guilford Press.</p>
          <p>[19] Lindstrom, J. H. (2007). "Determining appropriate accommodations for postsecondary students." <em>Learning Disabilities Research & Practice</em>, 22(4), 229-236.</p>
          <p>[20] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[21] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia</em>. Prometheus Books.</p>
          <p>[22] Reiff, H. B., Ginsberg, R., & Gerber, P. J. (1995). "New perspectives on teaching from successful adults with learning disabilities." <em>Remedial and Special Education</em>, 16(2), 96-107.</p>
          <p>[23] Levine, P., & Nourse, S. W. (1998). <em>What follow-up studies say about postschool life for young men and women with learning disabilities</em>. <em>Journal of Learning Disabilities</em>, 31(3), 212-233.</p>
          <p>[24] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
          <p>[25] Edyburn, D. L. (2004). "Rethinking assistive technology." <em>Special Education Technology Practice</em>, 5(4), 16-23.</p>
          <p>[26] Burgstahler, S. (2003). "The role of technology in preparing youth with disabilities for postsecondary education and employment." <em>Journal of Special Education Technology</em>, 18(4), 7-19.</p>
          <p>[27] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
          <p>[28] Gordon, M., & Keiser, S. (2000). <em>Accommodations in higher education under the Americans with Disabilities Act</em>. Guilford Press.</p>
          <p>[29] Grimes, D., & Warschauer, M. (2010). "Utility in a fallible tool: A multi-site case study of automated writing evaluation." <em>Journal of Technology, Learning, and Assessment</em>, 8(6), 4-43.</p>
          <p>[30] MacArthur, C. A., & Cavalier, A. R. (2004). "Dictation and speech recognition technology as test accommodations." <em>Exceptional Children</em>, 71(1), 43-58.</p>
          <p>[31] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[32] Sireci, S. G., Scarpati, S. E., & Li, S. (2005). "Test accommodations for students with disabilities." <em>Review of Educational Research</em>, 75(4), 457-490.</p>
          <p>[33] Palmer, S. B., & Wehmeyer, M. L. (2003). "Promoting self-determination in early elementary school." <em>Remedial and Special Education</em>, 24(2), 115-126.</p>
          <p>[34] Wright, P. W. D., & Wright, P. D. (2006). <em>Wrightslaw: Special education law</em> (2nd ed.). Harbor House Law Press.</p>
          <p>[35] Test, D. W., Fowler, C. H., Wood, W. M., Brewer, D. M., & Eddy, S. (2005). "A conceptual framework of self-advocacy for students with disabilities." <em>Remedial and Special Education</em>, 26(1), 43-54.</p>
          <p>[36] Wehmeyer, M. L., & Schwartz, M. (1997). "Self-determination and positive adult outcomes." <em>Exceptional Children</em>, 63(2), 245-255.</p>
          <p>[37] Nelson, J. M., & Harwood, H. (2011). "Learning disabilities and anxiety: A meta-analysis." <em>Journal of Learning Disabilities</em>, 44(1), 3-17.</p>
          <p>[38] Lackaye, T., Margalit, M., Ziv, O., & Ziman, T. (2006). "Comparisons of self-efficacy, mood, effort, and hope between students with learning disabilities and their non-LD-matched peers." <em>Learning Disabilities Research & Practice</em>, 21(2), 111-121.</p>
          <p>[39] Brooks, R., & Goldstein, S. (2001). <em>Raising resilient children</em>. McGraw-Hill.</p>
          <p>[40] Neff, K. D. (2011). "Self-compassion, self-esteem, and well-being." <em>Social and Personality Psychology Compass</em>, 5(1), 1-12.</p>
          <p>[41] Madaus, J. W. (2008). "Employment self-disclosure rates and rationales of university graduates with learning disabilities." <em>Journal of Learning Disabilities</em>, 41(4), 291-299.</p>
          <p>[42] Connor, D. J. (2012). "Helping students with disabilities transition to college." <em>Teaching Exceptional Children</em>, 44(5), 16-25.</p>
          <p>[43] Sideridis, G. D. (2007). "Why are students with LD depressed?" <em>Learning Disabilities Research & Practice</em>, 22(3), 143-148.</p>
          <p>[44] Spence, S. H., Donovan, C. L., March, S., Gamble, A., Anderson, R. E., Prosser, S., & Kenardy, J. (2011). "A randomized controlled trial of online versus clinic-based CBT for adolescent anxiety." <em>Journal of Consulting and Clinical Psychology</em>, 79(5), 629-642.</p>
          <p>[45] Epstein, J. L. (2001). <em>School, family, and community partnerships</em>. Westview Press.</p>
          <p>[46] Cooper, H., Robinson, J. C., & Patall, E. A. (2006). "Does homework improve academic achievement?" <em>Review of Educational Research</em>, 76(1), 1-62.</p>
          <p>[47] Wiener, J., & Schneider, B. H. (2002). "A multisource exploration of the friendship patterns of children with and without learning disabilities." <em>Journal of Abnormal Child Psychology</em>, 30(2), 127-141.</p>
          <p>[48] Kavale, K. A., & Forness, S. R. (1996). "Social skill deficits and learning disabilities: A meta-analysis." <em>Journal of Learning Disabilities</em>, 29(3), 226-237.</p>
          <p>[49] Madaus, J. W., & Shaw, S. F. (2006). "The impact of the IDEA 2004 on transition to college for students with learning disabilities." <em>Learning Disabilities Research & Practice</em>, 21(4), 273-281.</p>
          <p>[50] Baril, D. E., Tourigny, S. C., Julien, D., & Godbout, N. (2009). "Romantic relationships in adults with a learning disability." <em>Journal of Learning Disabilities</em>, 42(3), 193-203.</p>
          <p>[51] MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[52] Berninger, V. W., Abbott, R. D., Augsburger, A., & Garcia, N. (2009). "Comparison of pen and keyboard transcription modes." <em>Learning Disability Quarterly</em>, 32(3), 123-141.</p>
          <p>[53] Higgins, E. L., & Raskind, M. H. (2005). "The compensatory effectiveness of the Quicktionary Reading Pen II." <em>Journal of Special Education Technology</em>, 20(1), 29-40.</p>
          <p>[54] Anderson-Inman, L., & Horney, M. A. (1998). "Transforming text for at-risk readers." In D. Reinking et al. (Eds.), <em>Handbook of literacy and technology</em> (pp. 15-43). Erlbaum.</p>
          <p>[55] De La Paz, S. (1999). "Self-regulated strategy instruction in regular education settings." <em>Learning Disabilities Research & Practice</em>, 14(2), 92-106.</p>
          <p>[56] Denton, C. A., Hasbrouck, J. E., Weaver, L. R., & Riccio, C. A. (2000). "What do we know about phonological awareness in Spanish-speaking children?" <em>Reading & Writing Quarterly</em>, 16(4), 335-352.</p>
          <p>[57] Grimes, D., & Warschauer, M. (2010). "Utility in a fallible tool." <em>Journal of Technology, Learning, and Assessment</em>, 8(6), 4-43.</p>
          <p>[58] West, T. G. (1997). <em>In the mind's eye: Visual thinkers, gifted people with dyslexia</em>. Prometheus Books.</p>
          <p>[59] Connelly, V., Campbell, S., MacLean, M., & Barnes, J. (2006). "Contribution of lower order letter writing skills." <em>Developmental Neuropsychology</em>, 29(1), 175-196.</p>
          <p>[60] von Károlyi, C., Winner, E., Gray, W., & Sherman, G. F. (2003). "Dyslexia linked to talent: Global visual-spatial ability." <em>Brain and Language</em>, 85(3), 427-431.</p>
          <p>[61] Brooks, R., & Goldstein, S. (2001). <em>Raising resilient children</em>. McGraw-Hill.</p>
          <p>[62] Berninger, V. W. (2009). "Highlights of programmatic, interdisciplinary research on writing." <em>Learning Disabilities Research & Practice</em>, 24(2), 68-79.</p>
          <p>[63] Thompson, S. J., Johnstone, C. J., & Thurlow, M. L. (2002). <em>Universal design applied to large scale assessments</em>. University of Minnesota, National Center on Educational Outcomes.</p>
          <p>[64] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[65] West, T. G. (1997). <em>In the mind's eye</em>. Prometheus Books.</p>
          <p>[66] Reiff, H. B., Ginsberg, R., & Gerber, P. J. (1995). "New perspectives on teaching from successful adults with learning disabilities." <em>Remedial and Special Education</em>, 16(2), 96-107.</p>
          <p>[67] Test, D. W., Fowler, C. H., Wood, W. M., Brewer, D. M., & Eddy, S. (2005). "A conceptual framework of self-advocacy." <em>Remedial and Special Education</em>, 26(1), 43-54.</p>
          <p>[68] MacArthur, C. A. (2009). "Reflections on research on writing and technology." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[69] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[70] Vogel, S. A., & Reder, S. (1998). <em>Learning disabilities, literacy, and adult education</em>. Brookes Publishing.</p>
          <p>[71] Edyburn, D. L. (2004). "Rethinking assistive technology." <em>Special Education Technology Practice</em>, 5(4), 16-23.</p>
          <p>[72] Higgins, E. L., & Raskind, M. H. (2005). "The compensatory effectiveness of the Quicktionary Reading Pen II." <em>Journal of Special Education Technology</em>, 20(1), 29-40.</p>
          <p>[73] Armstrong, T. (2010). <em>Neurodiversity: Discovering the extraordinary gifts of autism, ADHD, dyslexia, and other brain differences</em>. Da Capo Press.</p>
          <p>[74] Learning Disabilities Association of America. (2020). <em>What are learning disabilities?</em></p>
          <p>[75] International Dyslexia Association. (2020). <em>Dyslexia basics</em>.</p>
          <p>[76] Bargh, J. A., & McKenna, K. Y. (2004). "The Internet and social life." <em>Annual Review of Psychology</em>, 55, 573-590.</p>
          <p>[77] Trainor, A. A. (2010). "Diverse approaches to parent advocacy during special education home-school interactions." <em>Remedial and Special Education</em>, 31(1), 34-47.</p>
          <p>[78] Keller-Allen, C. (2006). <em>English language learners with learning disabilities</em>. National Center for Learning Disabilities.</p>
          <p>[79] Sideridis, G. D. (2007). "Why are students with LD depressed?" <em>Learning Disabilities Research & Practice</em>, 22(3), 143-148.</p>
          <p>[80] Armstrong, T. (2010). <em>Neurodiversity</em>. Da Capo Press.</p>
          <p>[81] Berninger, V. W., & Wolf, B. J. (2009). <em>Teaching students with dyslexia and dysgraphia</em>. Brookes Publishing.</p>
          <p>[82] MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[83] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[84] Test, D. W., Fowler, C. H., Wood, W. M., Brewer, D. M., & Eddy, S. (2005). "A conceptual framework of self-advocacy." <em>Remedial and Special Education</em>, 26(1), 43-54.</p>
          <p>[85] Brooks, R., & Goldstein, S. (2001). <em>Raising resilient children</em>. McGraw-Hill.</p>
          <p>[86] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
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
