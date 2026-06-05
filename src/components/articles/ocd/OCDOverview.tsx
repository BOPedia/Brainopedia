import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface OCDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function OCDOverview({ setCurrentArticle }: OCDOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">OCD: Overview</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Obsessive-Compulsive Disorder (OCD) is a neurological condition characterized by persistent, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce anxiety.<sup>[1]</sup> Increasingly understood through a neurodivergent lens, OCD represents a distinct pattern of brain processing involving specific neural loops and information processing differences.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Is OCD?</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1711409650645-a568a59446f0?w=1080&q=80" alt="Brain neuroscience illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">OCD affects approximately 2–3% of the population and involves a complex interplay between neurological pathways, particularly in the orbitofrontal cortex, anterior cingulate cortex, and basal ganglia.<sup>[3]</sup> These brain regions are responsible for error detection, doubt resolution, and behavioral inhibition. While traditionally classified as a mental health disorder, many advocates and researchers now recognize OCD as a neurotype—a fundamental difference in how the brain processes threat, certainty, and completion.<sup>[4]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The OCD Brain</h2>
          <p className="mb-4">The OCD brain processes doubt, threat, and completion differently, creating "loops" of thought and behavior that are neurologically based.<sup>[5]</sup> These loops, often called the "OCD cycle," involve an obsession that triggers intense anxiety, leading to a compulsion to alleviate that distress, which provides temporary relief but reinforces the cycle.<sup>[6]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          <p className="mb-4">OCD is a global condition, affecting people of all ages, genders, and ethnicities. It is estimated that 1 in 40 adults and 1 in 100 children in the U.S. have OCD.<sup>[7]</sup> Symptoms can begin in childhood or early adulthood, and the condition often persists throughout life, though the severity of symptoms may wax and wane.<sup>[8]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>DSM-5</em>.</p>
          <p>[2] Pauls, D. L., et al. (2014). "Obsessive-compulsive disorder: An integrative perspective." <em>Nature Reviews Neuroscience</em>.</p>
          <p>[3] Ruscio, A. M., et al. (2010). "The epidemiology of OCD." <em>Molecular Psychiatry</em>.</p>
          <p>[4] Mataix-Cols, D., et al. (2005). "A multidimensional model of OCD." <em>American Journal of Psychiatry</em>.</p>
          <p>[5] Stein, D. J., et al. (2019). "Obsessive-compulsive disorder." <em>Nature Reviews Disease Primers</em>.</p>
          <p>[6] Abramowitz, J. S., et al. (2009). "Obsessive-compulsive disorder." <em>The Lancet</em>.</p>
          <p>[7] NIMH. (2020). "Obsessive-Compulsive Disorder."</p>
          <p>[8] Eisen, J. L., et al. (2006). "Impact of OCD on quality of life." <em>Comprehensive Psychiatry</em>.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('ocd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to OCD</a>
      </div>
    </article>
  );
}
