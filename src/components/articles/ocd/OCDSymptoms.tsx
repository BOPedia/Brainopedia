import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface OCDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function OCDSymptoms({ setCurrentArticle }: OCDSymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Symptoms & Characteristics of OCD</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">OCD is defined by the presence of obsessions, compulsions, or both. These symptoms can consume significant amounts of time and interfere with a person's daily activities and relationships.<sup>[1]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Obsessions</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1670191836487-e375e2be3e66?w=1080&q=80" alt="Spiral representing repetitive thought loops" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Obsessions are repeated, persistent, and unwanted thoughts, urges, or images that are intrusive and cause distress or anxiety.<sup>[2]</sup> Common themes include:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Contamination:</strong> Fear of germs, dirt, or illness.</li>
            <li className="mb-2"><strong>Symmetry & Ordering:</strong> Needing things to be balanced or in a specific order.<sup>[3]</sup></li>
            <li className="mb-2"><strong>Intrusive Harm:</strong> Fear of hurting oneself or others, even if the person has no desire to do so.</li>
            <li className="mb-2"><strong>Unwanted Forbidden Thoughts:</strong> Aggressive, sexual, or religious thoughts that the person finds deeply disturbing.<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Compulsions</h2>
          <p className="mb-4">Compulsions are repetitive behaviors or mental acts that a person feels driven to perform in response to an obsession or according to rules that must be applied rigidly.<sup>[5]</sup> Common themes include:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Cleaning & Washing:</strong> Hand-washing until skin is raw or excessive house cleaning.</li>
            <li className="mb-2"><strong>Checking:</strong> Repeatedly checking doors, stoves, or appliances to ensure safety.<sup>[6]</sup></li>
            <li className="mb-2"><strong>Counting:</strong> Doing things in certain numbers or sequences.</li>
            <li className="mb-2"><strong>Rituals:</strong> Complicated physical or mental sequences that must be followed exactly.</li>
            <li className="mb-2"><strong>Reassurance Seeking:</strong> Frequently asking others if everything is okay.<sup>[7]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Presentations of OCD</h2>
          <p className="mb-4">OCD can manifest in many different ways, sometimes called "subtypes," though these often overlap:<sup>[8]</sup></p>
          <div className="bg-[#f0f9fb] p-6 rounded-lg border border-[#2abcd4]">
            <ul className="space-y-3 text-sm">
              <li><strong>"Pure-O" (Primarily Obsessional):</strong> Compulsions are primarily mental rituals (e.g., repeating phrases in the head) rather than visible behaviors.<sup>[9]</sup></li>
              <li><strong>Scrupulosity:</strong> Obsessions centered on religious or moral guilt.</li>
              <li><strong>Relationship OCD (ROCD):</strong> Persistent doubt and checking regarding one's romantic partner or relationship.</li>
              <li><strong>Harm OCD:</strong> Intrusive thoughts about violence or causing accidents.</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>DSM-5</em>.</p>
          <p>[2] Abramowitz, J. S., et al. (2009). "Obsessive-compulsive disorder." <em>The Lancet</em>.</p>
          <p>[3] Mataix-Cols, D., et al. (2005). "A multidimensional model of OCD." <em>American Journal of Psychiatry</em>.</p>
          <p>[4] Grant, J. E., et al. (2007). "Sexual obsessions in adults with OCD." <em>Comprehensive Psychiatry</em>.</p>
          <p>[5] Foa, E. B., et al. (2006). "Emotional processing theory."</p>
          <p>[6] Stein, D. J., et al. (2019). "Obsessive-compulsive disorder." <em>Nature Reviews Disease Primers</em>.</p>
          <p>[7] Salkovskis, P. M. (1985). "Obsessional-compulsive problems." <em>Behaviour Research and Therapy</em>.</p>
          <p>[8] Leckman, J. F., et al. (1997). "Symptoms of OCD." <em>American Journal of Psychiatry</em>.</p>
          <p>[9] Baer, L. (2001). <em>The Imp of the Mind</em>. Plume.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>
    </article>
  );
}
