import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyscalculiaLiving({ setCurrentArticle }: DyscalculiaLivingProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyscalculia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyscalculia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Living with Dyscalculia
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Living with dyscalculia presents unique challenges in a world filled with numbers, but with understanding, 
            strategies, and support, individuals can lead successful, fulfilling lives.<sup>[1]</sup> Many people with 
            dyscalculia develop strengths in other areas and find careers that minimize mathematical demands while 
            capitalizing on their talents.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life with Dyscalculia</h2>
          
          <ImageWithFallback 
            src="/images/dyscalculia-living-daily-life.png"
            alt="Confident individual managing daily tasks like shopping, cooking, and time management with dyscalculia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Time Management Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reading clocks:</strong> Difficulty with analog clocks; digital preferred<sup>[3]</sup></li>
            <li className="mb-2"><strong>Estimating time:</strong> Poor sense of time passage</li>
            <li className="mb-2"><strong>Scheduling:</strong> Trouble coordinating appointments and commitments<sup>[4]</sup></li>
            <li className="mb-2"><strong>Punctuality:</strong> Frequently late due to time estimation difficulties</li>
            <li className="mb-2"><strong>Coping strategies:</strong> Alarms, digital calendars with reminders<sup>[5]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Money Management</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Counting change:</strong> Difficulty calculating correct change at stores<sup>[6]</sup></li>
            <li className="mb-2"><strong>Budgeting:</strong> Challenges tracking spending and saving</li>
            <li className="mb-2"><strong>Banking:</strong> Balancing checkbooks, understanding statements<sup>[7]</sup></li>
            <li className="mb-2"><strong>Tipping:</strong> Calculating appropriate tip amounts</li>
            <li className="mb-2"><strong>Financial planning:</strong> Long-term financial decisions are daunting<sup>[8]</sup></li>
            <li className="mb-2"><strong>Helpful tools:</strong> Budgeting apps, automatic bill pay, calculators</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Shopping and Pricing</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty comparing prices and unit costs<sup>[9]</sup></li>
            <li className="mb-2">Problems calculating discounts and sales</li>
            <li className="mb-2">Estimating total cost at checkout<sup>[10]</sup></li>
            <li className="mb-2">Using smartphone calculator while shopping</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cooking and Measurements</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Measuring ingredients accurately<sup>[11]</sup></li>
            <li className="mb-2">Converting measurements (cups to tablespoons, etc.)</li>
            <li className="mb-2">Adjusting recipes (doubling or halving)<sup>[12]</sup></li>
            <li className="mb-2">Following multi-step recipes with timing</li>
            <li className="mb-2">Strategies: Visual measuring tools, conversion charts posted in kitchen</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Navigation and Travel</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reading maps and understanding directions<sup>[13]</sup></li>
            <li className="mb-2">Estimating distances and travel time</li>
            <li className="mb-2">Understanding highway exit numbers and addresses<sup>[14]</sup></li>
            <li className="mb-2">GPS navigation essential tool</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional and Social Impact</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Emotional Experiences</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Embarrassment:</strong> Self-conscious about using calculator or asking for help<sup>[15]</sup></li>
            <li className="mb-2"><strong>Frustration:</strong> Simple tasks take longer and require more effort</li>
            <li className="mb-2"><strong>Anxiety:</strong> Math-related situations cause stress<sup>[16]</sup></li>
            <li className="mb-2"><strong>Low self-esteem:</strong> Feeling "stupid" despite intelligence in other areas</li>
            <li className="mb-2"><strong>Isolation:</strong> May avoid social situations involving numbers<sup>[17]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Situations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Splitting bills:</strong> Difficult calculating shares at restaurants<sup>[18]</sup></li>
            <li className="mb-2"><strong>Games:</strong> Board games and card games involving math are challenging</li>
            <li className="mb-2"><strong>Sports:</strong> Keeping score or understanding statistics<sup>[19]</sup></li>
            <li className="mb-2"><strong>Social disclosure:</strong> Deciding when to tell others about dyscalculia</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Resilience</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Developing thick skin about mathematical mistakes<sup>[20]</sup></li>
            <li className="mb-2">Learning to advocate for needs without shame</li>
            <li className="mb-2">Focusing on strengths and achievements<sup>[21]</sup></li>
            <li className="mb-2">Connecting with others who have dyscalculia</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Education Journey</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Elementary School Experience</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Watching peers grasp math easily while struggling<sup>[22]</sup></li>
            <li className="mb-2">Extensive homework time compared to classmates</li>
            <li className="mb-2">Timed tests causing significant stress<sup>[23]</sup></li>
            <li className="mb-2">Needing extra support and accommodations</li>
            <li className="mb-2">Developing learned helplessness if not supported<sup>[24]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Secondary School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Math requirements:</strong> Multiple years of math classes required<sup>[25]</sup></li>
            <li className="mb-2"><strong>Abstract concepts:</strong> Algebra and geometry particularly challenging</li>
            <li className="mb-2"><strong>Testing pressure:</strong> Standardized tests (SAT, ACT) include significant math<sup>[26]</sup></li>
            <li className="mb-2"><strong>Career concerns:</strong> Worrying about math limiting future options</li>
            <li className="mb-2"><strong>Accommodations:</strong> Extended time, calculator use essential<sup>[27]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">College and University</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Math requirements:</strong> Many majors require math courses<sup>[28]</sup></li>
            <li className="mb-2"><strong>Self-advocacy:</strong> Student responsibility to request accommodations</li>
            <li className="mb-2"><strong>Major selection:</strong> Often avoid math-heavy fields<sup>[29]</sup></li>
            <li className="mb-2"><strong>Success possible:</strong> With accommodations, tutoring, and perseverance</li>
            <li className="mb-2"><strong>Alternative pathways:</strong> Community college, trade schools, specialized programs<sup>[30]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Career and Employment</h2>
          
          <ImageWithFallback 
            src="/images/dyscalculia-living-career.png"
            alt="Successful professional working in fulfilling career with dyscalculia accommodations and support"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Mental calculations:</strong> Expected to calculate quickly in meetings<sup>[31]</sup></li>
            <li className="mb-2"><strong>Spreadsheets and data:</strong> Jobs increasingly require data analysis</li>
            <li className="mb-2"><strong>Time management:</strong> Estimating project timelines<sup>[32]</sup></li>
            <li className="mb-2"><strong>Financial tasks:</strong> Budgets, expense reports, invoicing</li>
            <li className="mb-2"><strong>Measurement:</strong> Fields like construction, nursing require precise measurements<sup>[33]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Calculator use:</strong> Access to calculator or computer<sup>[34]</sup></li>
            <li className="mb-2"><strong>Extra time:</strong> Additional time for numerical tasks</li>
            <li className="mb-2"><strong>Written instructions:</strong> Rather than verbal numerical information<sup>[35]</sup></li>
            <li className="mb-2"><strong>Assistive technology:</strong> Software to check calculations</li>
            <li className="mb-2"><strong>Task modification:</strong> Colleagues handle certain numerical duties<sup>[36]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Suitable Career Paths</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Creative fields:</strong> Writing, art, music, design<sup>[37]</sup></li>
            <li className="mb-2"><strong>Humanities:</strong> History, philosophy, literature, languages</li>
            <li className="mb-2"><strong>Social services:</strong> Counseling, social work, teaching (non-math)<sup>[38]</sup></li>
            <li className="mb-2"><strong>Communication:</strong> Journalism, public relations, marketing</li>
            <li className="mb-2"><strong>Skilled trades:</strong> Some trades minimize calculation needs<sup>[39]</sup></li>
            <li className="mb-2"><strong>Important note:</strong> With accommodations and technology, many careers are accessible</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Legal Protections</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Americans with Disabilities Act (ADA):</strong> Protects employees with dyscalculia<sup>[40]</sup></li>
            <li className="mb-2"><strong>Reasonable accommodations:</strong> Employers must provide unless undue hardship</li>
            <li className="mb-2"><strong>Disclosure:</strong> Personal choice whether to disclose to employer<sup>[41]</sup></li>
            <li className="mb-2"><strong>Documentation:</strong> Evaluation report supports accommodation requests</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Coping Strategies and Compensations</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Technology Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Calculator apps:</strong> Smartphone always available<sup>[42]</sup></li>
            <li className="mb-2"><strong>Budgeting software:</strong> Mint, YNAB for financial management</li>
            <li className="mb-2"><strong>Digital calendars:</strong> Google Calendar with alerts<sup>[43]</sup></li>
            <li className="mb-2"><strong>GPS navigation:</strong> Waze, Google Maps for directions</li>
            <li className="mb-2"><strong>Smart speakers:</strong> "Alexa, set a timer for 15 minutes"<sup>[44]</sup></li>
            <li className="mb-2"><strong>Banking apps:</strong> Automatic tracking and notifications</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Environmental Modifications</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Digital clocks instead of analog<sup>[45]</sup></li>
            <li className="mb-2">Posted conversion charts in kitchen</li>
            <li className="mb-2">Automatic bill payments to avoid late fees<sup>[46]</sup></li>
            <li className="mb-2">Labeled measuring cups with conversion information</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Seeking Help</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Financial advisors:</strong> Professional help with money management<sup>[47]</sup></li>
            <li className="mb-2"><strong>Trusted friends/family:</strong> Help with calculations when needed</li>
            <li className="mb-2"><strong>Accountants:</strong> Tax preparation and financial planning<sup>[48]</sup></li>
            <li className="mb-2"><strong>No shame in asking:</strong> Everyone has different strengths</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths and Positive Aspects</h2>
          
          <p className="mb-4">
            While dyscalculia presents challenges, individuals often develop compensatory strengths:<sup>[49]</sup>
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Problem-solving creativity:</strong> Finding alternative solutions<sup>[50]</sup></li>
            <li className="mb-2"><strong>Verbal abilities:</strong> Often strong language and communication skills</li>
            <li className="mb-2"><strong>Intuitive thinking:</strong> Holistic rather than sequential reasoning<sup>[51]</sup></li>
            <li className="mb-2"><strong>Empathy:</strong> Understanding others' struggles</li>
            <li className="mb-2"><strong>Perseverance:</strong> Developed through overcoming challenges<sup>[52]</sup></li>
            <li className="mb-2"><strong>Technology savvy:</strong> Skilled with assistive tools and apps</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationships and Family</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Partner Relationships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Open communication:</strong> Discussing dyscalculia with partners<sup>[53]</sup></li>
            <li className="mb-2"><strong>Shared responsibilities:</strong> Partner handles finances, you handle other tasks</li>
            <li className="mb-2"><strong>Understanding:</strong> Patient partners make life easier<sup>[54]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Parenting with Dyscalculia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Helping with homework:</strong> May need partner or tutor assistance<sup>[55]</sup></li>
            <li className="mb-2"><strong>Genetic component:</strong> Children may also have dyscalculia</li>
            <li className="mb-2"><strong>Teaching by example:</strong> Showing children how to advocate and use tools<sup>[56]</sup></li>
            <li className="mb-2"><strong>Avoiding math anxiety transmission:</strong> Positive attitude about math</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Advocacy and Disclosure</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Knowing Your Rights</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Educational settings:</strong> IDEA and Section 504 provide protections<sup>[57]</sup></li>
            <li className="mb-2"><strong>Higher education:</strong> ADA requires reasonable accommodations</li>
            <li className="mb-2"><strong>Employment:</strong> ADA protects against discrimination<sup>[58]</sup></li>
            <li className="mb-2"><strong>Testing:</strong> Standardized tests provide accommodations with documentation</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">When and How to Disclose</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Personal decision:</strong> No obligation to disclose<sup>[59]</sup></li>
            <li className="mb-2"><strong>Strategic disclosure:</strong> When accommodations would help performance</li>
            <li className="mb-2"><strong>Explaining dyscalculia:</strong> Educate others about the condition<sup>[60]</sup></li>
            <li className="mb-2"><strong>Timing matters:</strong> Consider when disclosure is most beneficial</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward: Hope and Success</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Success Is Possible</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Many successful people have dyscalculia<sup>[61]</sup></li>
            <li className="mb-2">Technology continues improving accessibility</li>
            <li className="mb-2">Increased awareness reducing stigma<sup>[62]</sup></li>
            <li className="mb-2">Accommodations and support more available than ever</li>
            <li className="mb-2">Success defined individually, not by math ability<sup>[63]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Keys to Thriving</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Self-understanding:</strong> Know your strengths and challenges<sup>[64]</sup></li>
            <li className="mb-2"><strong>Use tools without shame:</strong> Calculators are for everyone</li>
            <li className="mb-2"><strong>Play to strengths:</strong> Focus on what you do well<sup>[65]</sup></li>
            <li className="mb-2"><strong>Develop coping strategies:</strong> Find what works for you</li>
            <li className="mb-2"><strong>Seek support:</strong> Connect with others, get help when needed<sup>[66]</sup></li>
            <li className="mb-2"><strong>Advocate for needs:</strong> Ask for accommodations confidently</li>
          </ul>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">A Message of Hope:</h3>
            <div className="text-sm">
              <p className="mb-3">
                Dyscalculia is one aspect of who you are—it doesn't define your worth, intelligence, or potential for 
                success.<sup>[67]</sup> With self-awareness, appropriate support, and determination, you can achieve your 
                goals and live a rich, fulfilling life.
              </p>
              <p>
                The journey may require extra effort and creative solutions, but the resilience and problem-solving skills 
                you develop along the way are valuable assets that serve you well in all areas of life.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Resources and Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organizations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">National Center for Learning Disabilities (NCLD)</li>
            <li className="mb-2">Learning Disabilities Association of America (LDA)</li>
            <li className="mb-2">Understood.org - comprehensive resource for learning differences</li>
            <li className="mb-2">Dyscalculia.org - dedicated to math learning disabilities</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Online Communities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reddit: r/dyscalculia</li>
            <li className="mb-2">Facebook support groups for dyscalculia</li>
            <li className="mb-2">Online forums and discussion boards</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Helpful Apps and Tools</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Calculator apps with history</li>
            <li className="mb-2">Budgeting apps: Mint, YNAB, PocketGuard</li>
            <li className="mb-2">Time management: Google Calendar, Any.do</li>
            <li className="mb-2">Math practice apps with accommodations</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[2] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[3] Burny, E., Valcke, M., & Desoete, A. (2012). "Clock reading: An underestimated topic in children with mathematics difficulties." <em>Journal of Learning Disabilities</em>, 45(4), 351-360.</p>
          <p>[4] Burny, E., Valcke, M., & Desoete, A. (2009). "Towards an agenda for studying learning and instruction focusing on time-related competences in children." <em>Educational Studies</em>, 35(5), 481-492.</p>
          <p>[5] Desoete, A., Ceulemans, A., De Weerdt, F., & Pieters, S. (2012). "Can we predict mathematical learning disabilities from symbolic and non-symbolic comparison tasks in kindergarten?" <em>British Journal of Educational Psychology</em>, 82(1), 64-81.</p>
          <p>[6] Kaufmann, L., & Nuerk, H. C. (2005). "Numerical development: Current issues and future perspectives." <em>Psychology Science</em>, 47(1), 142-170.</p>
          <p>[7] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[8] Reyna, V. F., & Brainerd, C. J. (2007). "The importance of mathematics in health and human judgment: Numeracy, risk communication, and medical decision making." <em>Learning and Individual Differences</em>, 17(2), 147-159.</p>
          <p>[9] Kaufmann, L., Mazzocco, M. M., Dowker, A., von Aster, M., Göbel, S. M., Grabner, R. H., ... & Nuerk, H. C. (2013). "Dyscalculia from a developmental and differential perspective." <em>Frontiers in Psychology</em>, 4, 516.</p>
          <p>[10] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[11] Chinn, S. (2012). <em>The trouble with maths: A practical guide to helping learners with numeracy difficulties</em> (2nd ed.). Routledge.</p>
          <p>[12] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[13] Hegarty, M., & Waller, D. (2004). "A dissociation between mental rotation and perspective-taking spatial abilities." <em>Intelligence</em>, 32(2), 175-191.</p>
          <p>[14] Mix, K. S., & Cheng, Y. L. (2012). "The relation between space and math: Developmental and educational implications." <em>Advances in Child Development and Behavior</em>, 42, 197-243.</p>
          <p>[15] Rubinsten, O., & Tannock, R. (2010). "Mathematics anxiety in children with developmental dyscalculia." <em>Behavioral and Brain Functions</em>, 6(1), 46.</p>
          <p>[16] Dowker, A., Sarkar, A., & Looi, C. Y. (2016). "Mathematics anxiety: What have we learned in 60 years?" <em>Frontiers in Psychology</em>, 7, 508.</p>
          <p>[17] Krinzinger, H., Kaufmann, L., & Willmes, K. (2009). "Math anxiety and math ability in early primary school years." <em>Journal of Psychoeducational Assessment</em>, 27(3), 206-225.</p>
          <p>[18] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[19] Kaufmann, L., Mazzocco, M. M., Dowker, A., von Aster, M., Göbel, S. M., Grabner, R. H., ... & Nuerk, H. C. (2013). "Dyscalculia from a developmental and differential perspective." <em>Frontiers in Psychology</em>, 4, 516.</p>
          <p>[20] Dweck, C. S. (2006). <em>Mindset: The new psychology of success</em>. Random House.</p>
          <p>[21] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[22] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[23] Ashcraft, M. H., & Moore, A. M. (2009). "Mathematics anxiety and the affective drop in performance." <em>Journal of Psychoeducational Assessment</em>, 27(3), 197-205.</p>
          <p>[24] Hannula, M. M., Maijala, H., & Pehkonen, E. (2004). "Development of understanding and self-confidence in mathematics." In M. J. Høines & A. B. Fuglestad (Eds.), <em>Proceedings of the 28th Conference of the International Group for the Psychology of Mathematics Education</em> (Vol. 3, pp. 17-24).</p>
          <p>[25] National Council of Teachers of Mathematics. (2000). <em>Principles and standards for school mathematics</em>. NCTM.</p>
          <p>[26] Lewandowski, L. J., Lovett, B. J., & Rogers, C. L. (2008). "Extended time as a testing accommodation for students with reading disabilities." <em>Journal of Psychoeducational Assessment</em>, 26(4), 315-324.</p>
          <p>[27] Fuchs, L. S., Fuchs, D., & Capizzi, A. M. (2005). "Identifying appropriate test accommodations for students with learning disabilities." <em>Focus on Exceptional Children</em>, 37(6), 1-8.</p>
          <p>[28] Gregg, N. (2007). "Underserved and underprepared: Postsecondary learning disabilities." <em>Learning Disabilities Research & Practice</em>, 22(4), 219-228.</p>
          <p>[29] Sparks, R. L., & Lovett, B. J. (2009). "College students with learning disability diagnoses: Who are they and how do they perform?" <em>Journal of Learning Disabilities</em>, 42(6), 494-510.</p>
          <p>[30] Skinner, M. E., & Lindstrom, B. D. (2003). "Bridging the gap between high school and college: Strategies for the successful transition of students with learning disabilities." <em>Preventing School Failure</em>, 47(3), 132-137.</p>
          <p>[31] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[32] Kaufmann, L., Mazzocco, M. M., Dowker, A., von Aster, M., Göbel, S. M., Grabner, R. H., ... & Nuerk, H. C. (2013). "Dyscalculia from a developmental and differential perspective." <em>Frontiers in Psychology</em>, 4, 516.</p>
          <p>[33] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[34] Bouck, E. C., & Flanagan, S. (2009). "Assistive technology and mathematics." <em>Journal of Special Education Technology</em>, 24(2), 55-60.</p>
          <p>[35] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[36] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[37] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[38] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[39] Madaus, J. W. (2008). "Employment self-disclosure rates and rationales of university graduates with learning disabilities." <em>Journal of Learning Disabilities</em>, 41(4), 291-299.</p>
          <p>[40] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq. (1990).</p>
          <p>[41] Price, L. A., Gerber, P. J., & Mulligan, R. (2007). "Adults with learning disabilities and the underutilization of the Americans with Disabilities Act." <em>Remedial and Special Education</em>, 28(6), 340-344.</p>
          <p>[42] Bouck, E. C., & Flanagan, S. (2009). "Assistive technology and mathematics." <em>Journal of Special Education Technology</em>, 24(2), 55-60.</p>
          <p>[43] Barkley, R. A. (2012). <em>Executive functions: What they are, how they work, and why they evolved</em>. Guilford Press.</p>
          <p>[44] Dawson, P., & Guare, R. (2018). <em>Executive skills in children and adolescents: A practical guide to assessment and intervention</em> (3rd ed.). Guilford Press.</p>
          <p>[45] Burny, E., Valcke, M., & Desoete, A. (2012). "Clock reading: An underestimated topic in children with mathematics difficulties." <em>Journal of Learning Disabilities</em>, 45(4), 351-360.</p>
          <p>[46] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[47] Reyna, V. F., & Brainerd, C. J. (2007). "The importance of mathematics in health and human judgment: Numeracy, risk communication, and medical decision making." <em>Learning and Individual Differences</em>, 17(2), 147-159.</p>
          <p>[48] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[49] Dowker, A. (2005). <em>Individual differences in arithmetic: Implications for psychology, neuroscience and education</em>. Psychology Press.</p>
          <p>[50] Chinn, S. (2012). <em>The trouble with maths: A practical guide to helping learners with numeracy difficulties</em> (2nd ed.). Routledge.</p>
          <p>[51] Rubinsten, O., & Henik, A. (2006). "Double dissociation of functions in developmental dyslexia and dyscalculia." <em>Journal of Educational Psychology</em>, 98(4), 854-867.</p>
          <p>[52] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[53] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>.</p>
          <p>[54] Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</p>
          <p>[55] LeFevre, J. A., Skwarchuk, S. L., Smith-Chant, B. L., Fast, L., Kamawar, D., & Bisanz, J. (2009). "Home numeracy experiences and children's math performance in the early school years." <em>Canadian Journal of Behavioural Science</em>, 41(2), 55-66.</p>
          <p>[56] Maloney, E. A., Ramirez, G., Gunderson, E. A., Levine, S. C., & Beilock, S. L. (2015). "Intergenerational effects of parents' math anxiety on children's math achievement and anxiety." <em>Psychological Science</em>, 26(9), 1480-1488.</p>
          <p>[57] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[58] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq. (1990).</p>
          <p>[59] Madaus, J. W., Foley, T. E., McGuire, J. M., & Ruban, L. M. (2002). "Employment self-disclosure of postsecondary graduates with learning disabilities." <em>Journal of Learning Disabilities</em>, 35(4), 364-369.</p>
          <p>[60] Palmer, C., & Wehmeyer, M. L. (2003). "Promoting self-determination in early elementary school: Teaching self-regulated problem-solving and goal-setting skills." <em>Remedial and Special Education</em>, 24(2), 115-126.</p>
          <p>[61] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[62] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[63] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[64] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[65] Dweck, C. S. (2006). <em>Mindset: The new psychology of success</em>. Random House.</p>
          <p>[66] Chinn, S. (2012). <em>The trouble with maths: A practical guide to helping learners with numeracy difficulties</em> (2nd ed.). Routledge.</p>
          <p>[67] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyscalculia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyscalculia
        </a>
      </div>
    </article>
  );
}
