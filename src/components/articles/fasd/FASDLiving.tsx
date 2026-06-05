import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface FASDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function FASDLiving({ setCurrentArticle }: FASDLivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Living with FASD</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Living with Fetal Alcohol Spectrum Disorder (FASD) is a lifelong journey that requires a deep understanding of one's unique neurocognitive profile.<sup>[1]</sup> Because FASD is a "hidden disability" that primarily affects brain function rather than physical appearance, the most important aspect of living well is often reframing challenges as brain-based rather than behavioral or intentional.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The FASD Perspective: "Can't vs. Won't"</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1544717305-27a734ef4164?w=1080&q=80" alt="Supportive interaction and understanding" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">A foundational concept in the FASD community is moving from a behavioral lens to a brain-based lens.<sup>[3]</sup> When an individual with FASD struggles with a task, it is often because their brain "can't" do it in that moment, not because they "won't" do it.<sup>[4]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Inconsistency is a symptom:</strong> A person might be able to do something one day but not the next. This reflects the "swiss cheese" nature of the FASD brain rather than a lack of effort.<sup>[5]</sup></li>
            <li className="mb-2"><strong>Social vs. Chronological Age:</strong> Many individuals with FASD have a "social age" that is approximately half their chronological age. Understanding this gap reduces frustration and unrealistic expectations.<sup>[6]</sup></li>
            <li className="mb-2"><strong>The "Ten-Second Rule":</strong> Processing speed is often slower in FASD. Giving someone ten seconds to process a question before repeating it can prevent shutdown and anxiety.<sup>[7]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Strategies for Success</h2>
          <p className="mb-4">Successful living with FASD often involves creating an "external brain"—environmental supports that compensate for executive function challenges:<sup>[8]</sup></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-4">
              <h3 className="text-[#0c264d] font-bold mb-2">Structure & Predictability</h3>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Use visual schedules and checklists for daily routines</li>
                <li>Keep the environment organized and minimize clutter</li>
                <li>Prepare for transitions well in advance<sup>[9]</sup></li>
                <li>Maintain consistent wake and sleep times</li>
              </ul>
            </div>
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-4">
              <h3 className="text-[#0c264d] font-bold mb-2">Memory Supports</h3>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Use alarms and digital reminders for tasks</li>
                <li>Break instructions into one or two steps at a time<sup>[10]</sup></li>
                <li>Record important information rather than relying on memory</li>
                <li>Use "external cues" like sticky notes in visible places</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Connections & Safety</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1080&q=80" alt="Group of friends talking" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <p className="mb-4">Socializing can be both a strength and a challenge. Many people with FASD are highly social, outgoing, and empathetic, but they may struggle with reading social cues or understanding the motives of others.<sup>[11]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Safety Awareness:</strong> Individuals with FASD may be overly trusting, making them vulnerable to exploitation or "cashing in" by others.<sup>[12]</sup> Having a "safe person" to check in with about new social situations is vital.</li>
            <li className="mb-2"><strong>Social Skills:</strong> Explicitly learning social rules that others pick up intuitively can help build meaningful relationships.<sup>[13]</sup></li>
            <li className="mb-2"><strong>Community:</strong> Connecting with other individuals and families living with FASD reduces isolation and provides a space where "everyone gets it."</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths & Advocacy</h2>
          <p className="mb-4">While FASD brings significant challenges, many individuals possess notable strengths that can be leveraged for a fulfilling life:<sup>[14]</sup></p>
          <div className="bg-[#f0f9fb] p-6 rounded-lg border border-[#2abcd4] mb-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-[#2abcd4] mr-2">✔</span>
                <span><strong>Creativity:</strong> Often highly talented in art, music, or hands-on tasks.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2abcd4] mr-2">✔</span>
                <span><strong>Persistence:</strong> A remarkable ability to keep trying despite daily hurdles.<sup>[15]</sup></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2abcd4] mr-2">✔</span>
                <span><strong>Empathy:</strong> Deeply caring for others and sensitive to emotions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2abcd4] mr-2">✔</span>
                <span><strong>Verbal Skills:</strong> Many are excellent storytellers and highly engaging.<sup>[16]</sup></span>
              </li>
            </ul>
          </div>
          <p className="mb-4">Self-advocacy involves learning how to explain one's needs to others. For example, "My brain needs a little extra time to process that," or "Could you please give me those instructions in writing?"<sup>[17]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Mental Health & Resilience</h2>
          <p className="mb-4">Secondary conditions like anxiety and depression are common in FASD, often resulting from the chronic stress of trying to fit into a world not built for the FASD brain.<sup>[18]</sup> Building resilience involves:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Seeking FASD-informed therapy and support</li>
            <li>Focusing on successes and strengths rather than deficits</li>
            <li>Building a "support team" of family, friends, and professionals<sup>[19]</sup></li>
            <li>Practicing self-compassion and recognizing that the challenges are neurological</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Streissguth, A. P., & O'Malley, K. (2000). "Fetal alcohol spectrum disorders: A guide for families and communities." <em>Baltimore: Paul H. Brookes</em>.</p>
          <p>[2] Malbin, D. (2002). <em>Trying Differently Rather Than Harder</em>. Portland, OR: FASCETS.</p>
          <p>[3] Kulp, J. (2013). <em>The Best I Can Be: Living with Fetal Alcohol Syndrome-Effects</em>. Better Endings New Beginnings.</p>
          <p>[4] Paley, B., & O'Connor, M. J. (2011). "Behavioral interventions for children and adolescents with FASD." <em>Alcohol Research & Health</em>, 34(1), 64–75.</p>
          <p>[5] Chudley, A. E., et al. (2005). "Fetal alcohol spectrum disorder: Canadian guidelines for diagnosis." <em>CMAJ</em>, 172(5), S1–S21.</p>
          <p>[6] Streissguth, A. P., et al. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome." <em>Journal of Developmental & Behavioral Pediatrics</em>, 25(4), 228–238.</p>
          <p>[7] Graefe, S. (2003). <em>Parenting Children with FASD</em>. British Columbia: Adoption Council of BC.</p>
          <p>[8] Dubovsky, D. (2015). "FASD: A brain-based disability." <em>National Organization on Fetal Alcohol Syndrome</em>.</p>
          <p>[9] Jirikowic, T., et al. (2008). "Children with FASD: Problem behaviors and sensory processing." <em>American Journal of Occupational Therapy</em>, 62(3), 265–273.</p>
          <p>[10] Kalberg, W. O., & Buckley, D. (2007). "FASD: What types of intervention are useful?" <em>Neuroscience & Biobehavioral Reviews</em>, 31(2), 278–285.</p>
          <p>[11] Kully-Martens, K., et al. (2012). "A review of social skills deficits in individuals with FASD." <em>Alcoholism: Clinical & Experimental Research</em>, 36(4), 568–576.</p>
          <p>[12] Fast, D. K., & Conry, J. (2004). "Fetal alcohol syndrome and the criminal justice system." <em>Developmental Disabilities Research Reviews</em>, 10(2), 161–168.</p>
          <p>[13] Keil, V., et al. (2010). "A randomized controlled trial of a social skills intervention for children with FASD." <em>Child Neuropsychology</em>, 16(2), 104–117.</p>
          <p>[14] Olson, H. C., et al. (2009). "'Family matters:' FASD and the family." <em>Developmental Disabilities Research Reviews</em>, 15(3), 235–249.</p>
          <p>[15] Brown, J., et al. (2018). "Living with FASD: A qualitative study of the experiences of young adults." <em>Global Journal of Health Science</em>, 10(11), 127.</p>
          <p>[16] Coggins, T. E., et al. (2007). "Examining the social communicative abilities of school-age children with FASD." <em>Topics in Language Disorders</em>, 27(2), 150–162.</p>
          <p>[17] NOFASD Australia. (2020). "Self-advocacy for individuals with FASD."</p>
          <p>[18] O'Connor, M. J., & Paley, B. (2009). "Psychiatric conditions associated with prenatal alcohol exposure." <em>Developmental Disabilities Research Reviews</em>, 15(3), 225–234.</p>
          <p>[19] Petrenko, C. L. (2015). "Positive psychopathology: Building resilience in individuals with FASD." <em>Psychology in the Schools</em>, 52(3), 311–323.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>
    </article>
  );
}
