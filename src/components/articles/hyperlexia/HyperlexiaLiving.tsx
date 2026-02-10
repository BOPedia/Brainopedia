import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface HyperlexiaLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function HyperlexiaLiving({ setCurrentArticle }: HyperlexiaLivingProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('hyperlexia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Hyperlexia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Living with Hyperlexia
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Living with hyperlexia involves navigating the unique combination of exceptional reading skills alongside 
            language comprehension and social challenges.<sup>[1]</sup> Outcomes vary significantly depending on the 
            type of hyperlexia and presence of autism or other conditions.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life with Hyperlexia</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmd8ZW58MXx8fHwxNjc0NTM1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child reading"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading as Central Interest</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Love of reading:</strong> Books and text remain important throughout life<sup>[3]</sup></li>
            <li className="mb-2"><strong>Comfort activity:</strong> Reading as calming or self-regulation</li>
            <li className="mb-2"><strong>Learning through reading:</strong> Prefer visual learning modality</li>
            <li className="mb-2"><strong>Career implications:</strong> May gravitate toward text-based work</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Ongoing language comprehension difficulties<sup>[4]</sup></li>
            <li className="mb-2">May prefer written to verbal communication</li>
            <li className="mb-2">Difficulty with complex spoken language</li>
            <li className="mb-2">Misunderstandings in conversations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Journey</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early School Years</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reading standout:</strong> Obvious reading ability draws attention<sup>[5]</sup></li>
            <li className="mb-2"><strong>Hidden struggles:</strong> Comprehension difficulties may not be recognized</li>
            <li className="mb-2"><strong>Social challenges:</strong> Difficulty connecting with peers</li>
            <li className="mb-2"><strong>Need support:</strong> Despite appearing advanced</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Upper Elementary and Beyond</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Comprehension gap becomes more problematic<sup>[6]</sup></li>
            <li className="mb-2">Academic challenges increase with complexity</li>
            <li className="mb-2">Reading remains a strength to leverage</li>
            <li className="mb-2">Accommodations and support continue to be needed</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Higher Education</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Many individuals attend college<sup>[7]</sup></li>
            <li className="mb-2">Disability services for comprehension support</li>
            <li className="mb-2">Choose majors emphasizing reading over oral communication</li>
            <li className="mb-2">Success with appropriate accommodations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Relationships</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Friendships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Social challenges persist:</strong> Difficulty with social communication<sup>[8]</sup></li>
            <li className="mb-2"><strong>Finding like-minded peers:</strong> Connect through shared reading interests</li>
            <li className="mb-2"><strong>Book clubs and reading groups:</strong> Natural social settings</li>
            <li className="mb-2"><strong>Online communities:</strong> Text-based interaction may be easier</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Dynamics</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Family understanding crucial<sup>[9]</sup></li>
            <li className="mb-2">Using written communication at home helpful</li>
            <li className="mb-2">Appreciating reading strengths while supporting weaknesses</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Career and Employment</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwd29ya3xlbnwxfHx8fDE2NzQ1MzUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Writing work"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Leveraging Reading Strength</h3>
          <p className="mb-4">
            Career paths that utilize reading ability:<sup>[10]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Writing and editing:</strong> Working with text</li>
            <li className="mb-2"><strong>Research:</strong> Reading-intensive work</li>
            <li className="mb-2"><strong>Library science:</strong> Books and information</li>
            <li className="mb-2"><strong>Data analysis:</strong> Reading and interpreting information</li>
            <li className="mb-2"><strong>Technical fields:</strong> Reading manuals and technical documents</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Considerations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Jobs with written rather than extensive verbal communication<sup>[11]</sup></li>
            <li className="mb-2">Accommodations for comprehension if needed</li>
            <li className="mb-2">Email and written communication preferred</li>
            <li className="mb-2">Independent work vs. highly social roles</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Outcomes by Type</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Type 1: Neurotypical Hyperlexia</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Excellent prognosis:</strong> Comprehension typically catches up<sup>[12]</sup></li>
            <li className="mb-2"><strong>Reading remains strength:</strong> May pursue reading-related careers</li>
            <li className="mb-2"><strong>Social skills develop:</strong> No ongoing social difficulties</li>
            <li className="mb-2"><strong>Successful outcomes:</strong> Often excel academically and professionally</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Type 2: Hyperlexia with Autism</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Variable outcomes:</strong> Similar to autism spectrum outcomes<sup>[13]</sup></li>
            <li className="mb-2"><strong>Ongoing support needs:</strong> Language and social support continue</li>
            <li className="mb-2"><strong>Reading as advantage:</strong> Can be leveraged for learning and career</li>
            <li className="mb-2"><strong>Individual variation:</strong> Wide range of functioning levels</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Type 3: Improving Over Time</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Significant improvement:</strong> Language and social skills develop<sup>[14]</sup></li>
            <li className="mb-2"><strong>May not meet autism criteria later:</strong> Early concerns diminish</li>
            <li className="mb-2"><strong>Better outcomes:</strong> Than Type 2</li>
            <li className="mb-2"><strong>Reading remains strength:</strong> Can be asset throughout life</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Advocacy and Understanding</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Your Profile</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Knowing strengths:</strong> Exceptional reading ability<sup>[15]</sup></li>
            <li className="mb-2"><strong>Recognizing challenges:</strong> Comprehension and communication difficulties</li>
            <li className="mb-2"><strong>Self-awareness:</strong> Understanding how hyperlexia affects you</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Advocating for Needs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Requesting written information and instructions</li>
            <li className="mb-2">Asking for clarification when needed<sup>[16]</sup></li>
            <li className="mb-2">Communicating accommodation needs</li>
            <li className="mb-2">Using reading strength in learning and work</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Positive Aspects</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading as Lifelong Gift</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Love of reading:</strong> Brings joy and fulfillment<sup>[17]</sup></li>
            <li className="mb-2"><strong>Learning tool:</strong> Can learn almost anything through reading</li>
            <li className="mb-2"><strong>Career asset:</strong> Advantage in many professions</li>
            <li className="mb-2"><strong>Coping mechanism:</strong> Reading as comfort and escape</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Unique Perspective</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Unique way of processing information</li>
            <li className="mb-2">Strong visual-textual memory<sup>[18]</sup></li>
            <li className="mb-2">Attention to detail in written material</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Challenges to Navigate</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ongoing Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Language comprehension may remain challenging<sup>[19]</sup></li>
            <li className="mb-2">Social communication difficulties</li>
            <li className="mb-2">Need for accommodations in various settings</li>
            <li className="mb-2">Misunderstanding by others who focus on reading ability</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Hope and Success</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Keys to Thriving:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Use reading strength:</strong> Leverage in all areas of life<sup>[20]</sup></li>
              <li><strong>Build on interests:</strong> Pursue reading-related passions</li>
              <li><strong>Get support for challenges:</strong> Address comprehension and social needs</li>
              <li><strong>Find understanding people:</strong> Those who appreciate whole person</li>
              <li><strong>Accommodate needs:</strong> Use tools and strategies that help<sup>[21]</sup></li>
              <li><strong>Accept yourself:</strong> Hyperlexia is part of who you are</li>
              <li><strong>Connect with others:</strong> Find community and support</li>
              <li><strong>Keep learning:</strong> Use reading to continue growing<sup>[22]</sup></li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward</h2>
          
          <p className="mb-4">
            Living with hyperlexia brings both challenges and unique strengths. While language comprehension and 
            social communication may remain areas of difficulty, the exceptional reading ability is a genuine gift 
            that can be leveraged throughout life.<sup>[23]</sup> With appropriate support, understanding, and 
            self-advocacy, individuals with hyperlexia can lead fulfilling, successful lives doing what they love—
            reading, learning, and sharing knowledge.<sup>[24]</sup>
          </p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Nation, K. (1999). "Reading skills in hyperlexia: A developmental perspective." <em>Psychological Bulletin</em>, 125(3), 338-355.</p>
          <p>[2] Treffert, D. A. (2011). "Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder." <em>Wisconsin Medical Society</em>.</p>
          <p>[3] Kupperman, P., Bligh, S., & Barouski, K. (2002). "Hyperlexia." In A. M. Wetherby & B. M. Prizant (Eds.), <em>Autism spectrum disorders</em> (pp. 357-376). Baltimore: Paul H. Brookes.</p>
          <p>[4] Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). "Annotation: Hyperlexia: Disability or superability?" <em>Journal of Child Psychology and Psychiatry</em>, 44(8), 1079-1091.</p>
          <p>[5] Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). "Patterns of reading ability in children with autism spectrum disorder." <em>Journal of Autism and Developmental Disorders</em>, 36(7), 911-919.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('hyperlexia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Hyperlexia
        </a>
      </div>
    </article>
  );
}
