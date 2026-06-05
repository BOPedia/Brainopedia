import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface OCDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function OCDLiving({ setCurrentArticle }: OCDLivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Living with OCD</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Living with OCD is a journey of learning to live with uncertainty. While OCD is a chronic condition, many individuals lead highly successful and fulfilling lives by developing a deep understanding of their neurotype and building a toolkit of effective strategies.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Reframing the Experience</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1584022464805-0e83f7186106?w=1080&q=80" alt="Person feeling confident and thriving" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">One of the most powerful steps in living well with OCD is moving from a perspective of "fighting" thoughts to "acknowledging" them.<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>The "Sticky Brain":</strong> Viewing OCD as a brain that is simply too efficient at detecting potential (but unlikely) threats.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Differentiating Self from OCD:</strong> Learning that "intrusive thoughts are not my values." Having a disturbing thought doesn't make you a bad person; it's a symptom of a neurological loop.<sup>[4]</sup></li>
            <li className="mb-2"><strong>Accepting Uncertainty:</strong> OCD is often called the "doubting disease." Progress involves learning to be okay with not being 100% sure.<sup>[5]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Management</h2>
          <p className="mb-4">Strategies for navigating the day-to-day:<sup>[6]</sup></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-4">
              <h3 className="text-[#0c264d] font-bold mb-2">Relational Boundaries</h3>
              <p className="text-sm">Teaching family and friends about "reassurance seeking" and how to support without participating in compulsions (accommodation).<sup>[7]</sup></p>
            </div>
            <div className="bg-white rounded-md border-2 border-[#2abcd4] p-4">
              <h3 className="text-[#0c264d] font-bold mb-2">Self-Compassion</h3>
              <p className="text-sm">Being kind to yourself during "flares" or periods of high stress when symptoms may increase.<sup>[8]</sup></p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Navigating Relationships & Work</h2>
          <p className="mb-4">OCD can impact social and professional life, but it doesn't have to define it:<sup>[9]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Disclosure:</strong> Choosing when and how to tell employers or partners about OCD.<sup>[10]</sup></li>
            <li className="mb-2"><strong>Workplace Accommodations:</strong> Small changes like flexible deadlines or a quiet workspace can reduce the stress that triggers symptoms.</li>
            <li className="mb-2"><strong>Relationship OCD (ROCD):</strong> Awareness that doubt about a partner is a common OCD theme can prevent impulsive relationship decisions.<sup>[11]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Power of Community</h2>
          <p className="mb-4">Connecting with the "OCD community" through organizations like the International OCD Foundation (IOCDF) can be transformative. Seeing others thriving with the same challenges reduces isolation and provides hope.<sup>[12]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Potential Strengths</h2>
          <p className="mb-4">Many individuals with OCD possess notable strengths, such as high attention to detail, deep empathy (often born from their own struggles), a strong sense of responsibility, and highly creative thinking patterns.<sup>[13]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Eisen, J. L., et al. (2006). "Impact of OCD on quality of life." <em>Comprehensive Psychiatry</em>.</p>
          <p>[2] Hayes, S. C. (2005). <em>Get Out of Your Mind and Into Your Life</em>. New Harbinger.</p>
          <p>[3] Schwartz, J. M. (1996). <em>Brain Lock</em>. Harper Perennial.</p>
          <p>[4] Baer, L. (2001). <em>The Imp of the Mind</em>. Plume.</p>
          <p>[5] Grayson, J. (2003). <em>Freedom from Obsessive-Compulsive Disorder</em>. Berkley.</p>
          <p>[6] IOCDF. (2021). "Self-Help Strategies for OCD."</p>
          <p>[7] Lebowitz, E. R., et al. (2013). "Family accommodation in OCD." <em>Expert Review of Neurotherapeutics</em>.</p>
          <p>[8] Germer, C. K. (2009). <em>The Mindful Path to Self-Compassion</em>. Guilford Press.</p>
          <p>[9] Stengler-Wenzke, K., et al. (2006). "Quality of life of relatives." <em>Comprehensive Psychiatry</em>.</p>
          <p>[10] ADA.gov. "Rights of individuals with mental health conditions."</p>
          <p>[11] Doron, G., et al. (2014). "Relationship-related obsessive-compulsive phenomena." <em>Journal of Obsessive-Compulsive and Related Disorders</em>.</p>
          <p>[12] IOCDF. (2020). "Find Help."</p>
          <p>[13] Mataix-Cols, D., et al. (2005). "A multidimensional model of OCD." <em>American Journal of Psychiatry</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>
    </article>
  );
}
