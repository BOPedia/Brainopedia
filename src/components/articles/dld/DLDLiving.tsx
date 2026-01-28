import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DLDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function DLDLiving({ setCurrentArticle }: DLDLivingProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Living with DLD
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Living with Developmental Language Disorder presents ongoing challenges, but with appropriate support, 
            understanding, and self-advocacy, individuals with DLD can lead successful and fulfilling lives.<sup>[1]</sup> 
            While DLD is a lifelong condition, its impact can be significantly reduced through intervention and accommodations.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life with DLD</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlseSUyMGxpZmV8ZW58MXx8fHwxNjc0NTM1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Daily life"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Expressing needs:</strong> May struggle to articulate thoughts clearly<sup>[3]</sup></li>
            <li className="mb-2"><strong>Following conversations:</strong> Difficulty tracking fast-paced discussions</li>
            <li className="mb-2"><strong>Understanding instructions:</strong> Need extra time and clarification</li>
            <li className="mb-2"><strong>Frustration:</strong> Feeling misunderstood or unable to communicate effectively<sup>[4]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Coping Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Asking for clarification or repetition</li>
            <li className="mb-2">Using visual supports (notes, lists)</li>
            <li className="mb-2">Taking time to organize thoughts before speaking<sup>[5]</sup></li>
            <li className="mb-2">Finding patient, understanding communication partners</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Journey</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Elementary School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Language therapy:</strong> Regular speech-language services<sup>[6]</sup></li>
            <li className="mb-2"><strong>Learning to read:</strong> Extra support for literacy development</li>
            <li className="mb-2"><strong>Social challenges:</strong> Making and keeping friends</li>
            <li className="mb-2"><strong>IEP or 504 Plan:</strong> Formal educational support<sup>[7]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle and High School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Academic demands increase:</strong> More complex language required<sup>[8]</sup></li>
            <li className="mb-2"><strong>Content area challenges:</strong> Difficulty across all subjects</li>
            <li className="mb-2"><strong>Written expression:</strong> Essays and reports challenging</li>
            <li className="mb-2"><strong>Social pressures:</strong> Complex peer relationships<sup>[9]</sup></li>
            <li className="mb-2"><strong>Accommodations essential:</strong> Extended time, modified assignments</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Post-Secondary Education</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>College/university:</strong> Many students with DLD attend post-secondary education<sup>[10]</sup></li>
            <li className="mb-2"><strong>Disability services:</strong> Accessing campus supports</li>
            <li className="mb-2"><strong>Self-advocacy:</strong> Learning to explain needs</li>
            <li className="mb-2"><strong>Major selection:</strong> Consider language demands of programs<sup>[11]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Relationships</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Friendships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Making friends:</strong> Can be challenging due to language difficulties<sup>[12]</sup></li>
            <li className="mb-2"><strong>Maintaining friendships:</strong> Communication barriers affect relationships</li>
            <li className="mb-2"><strong>Social misunderstandings:</strong> Missing social cues<sup>[13]</sup></li>
            <li className="mb-2"><strong>Quality over quantity:</strong> Close friendships with understanding peers</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Social Connections</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Shared interest groups and clubs</li>
            <li className="mb-2">Structured activities with clear expectations<sup>[14]</sup></li>
            <li className="mb-2">One-on-one interactions easier than groups</li>
            <li className="mb-2">Finding patient, accepting friends</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Communication central to relationships<sup>[15]</sup></li>
            <li className="mb-2">Open communication about DLD helpful</li>
            <li className="mb-2">Partners who are patient and understanding</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Employment and Career</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrJTIwY2FyZWVyfGVufDF8fHx8MTY3NDUzNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Work career"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Considerations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Language demands:</strong> Consider communication requirements of jobs<sup>[16]</sup></li>
            <li className="mb-2"><strong>Strengths-based:</strong> Focus on individual abilities and interests</li>
            <li className="mb-2"><strong>Accommodations:</strong> Workplace modifications can help<sup>[17]</sup></li>
            <li className="mb-2"><strong>Success is possible:</strong> Many individuals with DLD have successful careers</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Career Paths</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Careers with clear, structured communication</li>
            <li className="mb-2">Technical or hands-on work may be suitable<sup>[18]</sup></li>
            <li className="mb-2">Jobs with written rather than extensive verbal communication</li>
            <li className="mb-2">Supportive work environments important</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Request written instructions and communications<sup>[19]</sup></li>
            <li className="mb-2">Use email for complex information</li>
            <li className="mb-2">Take notes during meetings</li>
            <li className="mb-2">Ask for clarification when needed</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Disclosure and Rights</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Optional to disclose DLD to employers</li>
            <li className="mb-2">Protected under ADA if requesting accommodations<sup>[20]</sup></li>
            <li className="mb-2">Consider job demands when deciding disclosure</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Mental Health and Well-Being</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Emotional Impact</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Self-esteem:</strong> Challenges can affect confidence<sup>[21]</sup></li>
            <li className="mb-2"><strong>Anxiety:</strong> Social situations may provoke anxiety</li>
            <li className="mb-2"><strong>Depression:</strong> Higher rates in adolescents and adults with DLD<sup>[22]</sup></li>
            <li className="mb-2"><strong>Frustration:</strong> Difficulty expressing oneself</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building Resilience</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Focus on strengths and successes<sup>[23]</sup></li>
            <li className="mb-2">Celebrate progress, not just perfection</li>
            <li className="mb-2">Develop coping strategies</li>
            <li className="mb-2">Connect with others who understand</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mental Health Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Therapy or counseling when needed<sup>[24]</sup></li>
            <li className="mb-2">Support groups for individuals with language disorders</li>
            <li className="mb-2">Family support crucial</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Advocacy</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Your DLD</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Know your profile:</strong> Understand specific strengths and challenges<sup>[25]</sup></li>
            <li className="mb-2"><strong>Identify helpful strategies:</strong> What works for you?</li>
            <li className="mb-2"><strong>Recognize rights:</strong> Educational and employment protections</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communicating Needs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Explaining DLD to others<sup>[26]</sup></li>
            <li className="mb-2">Requesting accommodations</li>
            <li className="mb-2">Being specific about what helps</li>
            <li className="mb-2">Following up when needs aren't met</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Long-Term Outcomes</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Persistence of DLD</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Language difficulties typically persist into adulthood<sup>[27]</sup></li>
            <li className="mb-2">May become less obvious but continue to impact functioning</li>
            <li className="mb-2">Ongoing effects on literacy, academics, and communication<sup>[28]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Positive Outcomes</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>With support, many succeed:</strong> Education, career, relationships<sup>[29]</sup></li>
            <li className="mb-2"><strong>Compensatory strategies:</strong> Develop ways to work around difficulties</li>
            <li className="mb-2"><strong>Early intervention helps:</strong> Better long-term outcomes<sup>[30]</sup></li>
            <li className="mb-2"><strong>Individual strengths:</strong> Build on abilities and interests</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Tips for Success</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Strategies for Living Well with DLD:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Advocate for yourself:</strong> Speak up about your needs<sup>[31]</sup></li>
              <li><strong>Use accommodations:</strong> They help level the playing field</li>
              <li><strong>Find supportive people:</strong> Surround yourself with understanding individuals</li>
              <li><strong>Play to your strengths:</strong> Focus on what you do well<sup>[32]</sup></li>
              <li><strong>Use technology:</strong> Apps, tools, and assistive technology</li>
              <li><strong>Continue learning:</strong> Language skills can improve at any age</li>
              <li><strong>Be patient with yourself:</strong> Progress takes time</li>
              <li><strong>Seek support when needed:</strong> Therapy, counseling, SLP services<sup>[33]</sup></li>
              <li><strong>Connect with community:</strong> Find others with DLD</li>
              <li><strong>Remember:</strong> DLD is one part of who you are, not your entire identity</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Hope and Perspective</h2>
          
          <p className="mb-4">
            Living with DLD brings challenges, but many individuals lead fulfilling, successful lives. Research shows 
            that with appropriate intervention, accommodations, and support, outcomes can be significantly improved.<sup>[34]</sup> 
            Language skills can continue to develop throughout life, and individuals learn strategies to compensate for 
            difficulties. Understanding, acceptance, and focusing on strengths—not just weaknesses—are key to thriving 
            with DLD.<sup>[35]</sup>
          </p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Conti-Ramsden, G., & Durkin, K. (2012). "Postschool educational and employment experiences of young people with specific language impairment." <em>Language, Speech, and Hearing Services in Schools</em>, 43(4), 507-520.</p>
          <p>[2] Clegg, J., Hollis, C., Mawhood, L., & Rutter, M. (2005). "Developmental language disorders—a follow-up in later adult life." <em>Journal of Child Psychology and Psychiatry</em>, 46(2), 128-149.</p>
          <p>[3] Conti-Ramsden, G., & Botting, N. (2004). "Social difficulties and victimization in children with SLI at 11 years of age." <em>Journal of Speech, Language, and Hearing Research</em>, 47(1), 145-161.</p>
          <p>[4] Jerome, A. C., Fujiki, M., Brinton, B., & James, S. L. (2002). "Self-esteem in children with specific language impairment." <em>Journal of Speech, Language, and Hearing Research</em>, 45(4), 700-714.</p>
          <p>[5] Leonard, L. B. (2014). <em>Children with specific language impairment</em> (2nd ed.). Cambridge, MA: MIT Press.</p>
          <p>[6] American Speech-Language-Hearing Association. (n.d.). <em>Spoken language disorders</em>. Retrieved from www.asha.org</p>
          <p>[7] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[8] Conti-Ramsden, G., Durkin, K., Simkin, Z., & Knox, E. (2009). "Specific language impairment and school outcomes. I: Identifying and explaining variability at the end of compulsory education." <em>International Journal of Language & Communication Disorders</em>, 44(1), 15-35.</p>
          <p>[9] Fujiki, M., Brinton, B., & Clarke, D. (2002). "Emotion regulation in children with specific language impairment." <em>Language, Speech, and Hearing Services in Schools</em>, 33(2), 102-111.</p>
          <p>[10] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
          <p>[11] St Clair, M. C., Pickles, A., Durkin, K., & Conti-Ramsden, G. (2011). "A longitudinal study of behavioral, emotional and social difficulties in individuals with a history of specific language impairment (SLI)." <em>Journal of Communication Disorders</em>, 44(2), 186-199.</p>
          <p>[12] McGregor, K. K., Goffman, L., Van Horne, A. O., Hogan, T. P., & Finestack, L. H. (2020). "Developmental language disorder: Applications for advocacy, research, and clinical service." <em>Perspectives of the ASHA Special Interest Groups</em>, 5(1), 38-46.</p>
          <p>[13] Law, J., Garrett, Z., & Nye, C. (2004). "The efficacy of treatment for children with developmental speech and language delay/disorder." <em>Journal of Speech, Language, and Hearing Research</em>, 47(4), 924-943.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>
    </article>
  );
}