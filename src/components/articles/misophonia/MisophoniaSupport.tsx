import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function MisophoniaSupport({ setCurrentArticle }: MisophoniaSupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Support & Management of Misophonia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">While there is no "cure" for misophonia, a combination of environmental management, therapeutic techniques, and interpersonal communication can significantly reduce the impact of the condition.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Management</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1557173135-7336e73d53d3?w=1080&q=80" alt="Noise-canceling headphones" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Compensating for trigger sounds is often the first line of defense:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Noise-Canceling Technology:</strong> Active noise-canceling (ANC) headphones or high-quality earplugs can provide a "safety net."<sup>[3]</sup></li>
            <li className="mb-2"><strong>Background Noise:</strong> Using white noise machines, fans, or "brown noise" to mask trigger sounds.</li>
            <li className="mb-2"><strong>Controlled Environments:</strong> Creating safe spaces at home or school where the person knows they won't be triggered.<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Therapeutic Approaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Cognitive Behavioral Therapy (CBT)</h3>
              <p className="text-sm">Helps manage the emotional fallout and "catastrophizing" thoughts that follow a trigger.<sup>[5]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Mindfulness & Relaxation</h3>
              <p className="text-sm">Lowers the body's overall "baseline" of stress, making the reaction to triggers less explosive.<sup>[6]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Sound Therapy</h3>
              <p className="text-sm">Using wearable devices that provide low-level sound to "re-train" the brain's focus.<sup>[7]</sup></p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <h3 className="text-[#0c264d] font-bold mb-2">Dialectical Behavior Therapy (DBT)</h3>
              <p className="text-sm">Focuses on distress tolerance and regulating the intense anger or panic.<sup>[8]</sup></p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Communication & Boundaries</h2>
          <p className="mb-4">Misophonia is often hardest on family relationships. Support involves:<sup>[9]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Education:</strong> Helping loved ones understand that the reaction is neurological, not personal.<sup>[10]</sup></li>
            <li className="mb-2"><strong>Clear Signals:</strong> Developing non-verbal cues (like a hand signal) to let others know when a situation is becoming unbearable.</li>
            <li className="mb-2"><strong>Modified Routines:</strong> Such as allowing the person to eat before the family meal or wearing headphones during a movie.<sup>[11]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Advocacy in School & Work</h2>
          <p className="mb-4">Accommodations can include:<sup>[12]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li>Being allowed to wear noise-canceling headphones.</li>
            <li>Alternative testing rooms for school exams.</li>
            <li>A desk location away from high-traffic areas or breakrooms.</li>
            <li>Working from home when possible.</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Potgieter, I., et al. (2019). "Misophonia: A scoping review." <em>Journal of Clinical Psychology</em>.</p>
          <p>[2] Jastreboff, M. M., & Jastreboff, P. J. (2014). "Treatments for decreased sound tolerance." <em>Seminars in Hearing</em>.</p>
          <p>[3] Brout, J. J., et al. (2018). "Investigating misophonia." <em>Frontiers in Neuroscience</em>.</p>
          <p>[4] Dozier, T. H. (2015). "Counterconditioning treatment." <em>Clinical Case Studies</em>.</p>
          <p>[5] Schröder, A., et al. (2017). "CBT is effective in misophonia." <em>Journal of Affective Disorders</em>.</p>
          <p>[6] Bernstein, R. E., et al. (2013). "A brief course of CBT for misophonia."</p>
          <p>[7] Reid, A. M., et al. (2016). "Intensive CBT for misophonia." <em>JORCD</em>.</p>
          <p>[8] Linehan, M. M. (2014). <em>DBT Training Manual</em>.</p>
          <p>[9] Swedo, S. E., et al. (2022). "Consensus definition of misophonia."</p>
          <p>[10] Cavanna, A. E. (2015). "Misophonia: Current perspectives." <em>Neuropsychiatric Disease and Treatment</em>.</p>
          <p>[11] Muller, D., et al. (2018). "CBT for an adolescent female with misophonia."</p>
          <p>[12] 504 Plan / IEP guidelines for sensory sensitivities.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>
    </article>
  );
}
