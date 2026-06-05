import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function MisophoniaSymptoms({ setCurrentArticle }: MisophoniaSymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Symptoms & Characteristics of Misophonia</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">The symptoms of misophonia are primarily emotional and physiological. When exposed to a trigger sound, an individual experiences an immediate and intense internal reaction that far exceeds the objective volume or importance of the sound.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional Reactions</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1578805296801-55d450390809?w=1080&q=80" alt="Person eating, a common trigger" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">The emotional response is often instantaneous and can include:<sup>[2]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Anger & Rage:</strong> Often the most prominent response, sometimes felt as a "flash" of fury.</li>
            <li className="mb-2"><strong>Disgust:</strong> A deep sense of revulsion toward the sound or the person making it.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Anxiety & Panic:</strong> A feeling of being trapped or a desperate need to escape.</li>
            <li className="mb-2"><strong>Irritability:</strong> A high baseline of tension even when triggers aren't present.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Physiological Symptoms</h2>
          <p className="mb-4">Because misophonia triggers the sympathetic nervous system, physical symptoms often accompany the emotional distress:<sup>[4]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Increased heart rate and blood pressure.</li>
            <li className="mb-2">Muscle tension, especially in the jaw, neck, or arms.<sup>[5]</sup></li>
            <li className="mb-2">Sweating or feeling a "rush" of heat.</li>
            <li className="mb-2">Pressure in the chest or abdomen.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impact on Behavior</h2>
          <p className="mb-4">Living with these intense reactions leads to several common behavioral patterns:<sup>[6]</sup></p>
          <div className="bg-[#f0f9fb] p-6 rounded-lg border border-[#2abcd4] mb-6">
            <ul className="space-y-3 text-sm">
              <li><strong>Avoidance:</strong> Skipping family meals, avoiding movie theaters, or social isolation.<sup>[7]</sup></li>
              <li><strong>Escape:</strong> Suddenly leaving a room when a trigger starts.</li>
              <li><strong>Coping Mechanisms:</strong> Constant use of headphones, earplugs, or white noise.</li>
              <li><strong>Hypervigilance:</strong> Constantly scanning the environment for potential trigger sounds.<sup>[8]</sup></li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The "Invisible" Struggle</h2>
          <p className="mb-4">To outsiders, the reaction may seem like "overreacting" or "being difficult." This leads to significant shame and guilt for the person with misophonia, who often realizes their reaction is out of proportion but is unable to stop it.<sup>[9]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Schröder, A., et al. (2013). "Misophonia: Diagnostic criteria." <em>PLOS ONE</em>.</p>
          <p>[2] Jager, I., et al. (2020). "Misophonia: Phenomenology and comorbidity." <em>PLOS ONE</em>.</p>
          <p>[3] Dozier, T. H., & Morrison, K. L. (2017). "Phenomenology of misophonia." <em>American Journal of Psychology</em>.</p>
          <p>[4] Edelstein, M., et al. (2013). "Misophonia: Physiological investigations." <em>Frontiers in Human Neuroscience</em>.</p>
          <p>[5] Brout, J. J., et al. (2018). "Investigating misophonia: A review." <em>Frontiers in Neuroscience</em>.</p>
          <p>[6] Rouw, R., & Erfanian, M. (2018). "A large-scale study of misophonia." <em>Journal of Clinical Psychology</em>.</p>
          <p>[7] Wu, M. S., et al. (2014). "Misophonia in an undergraduate student sample."</p>
          <p>[8] Palumbo, D. B., et al. (2018). "Misophonia and potential underlying mechanisms." <em>Frontiers in Psychology</em>.</p>
          <p>[9] Cavanna, A. E. (2014). "The invisible border between health and disease." <em>Journal of Psychosomatic Research</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('misophonia'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Misophonia</a>
      </div>
    </article>
  );
}
